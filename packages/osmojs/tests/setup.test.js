import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { assertIsDeliverTxSuccess, setupIbcExtension, QueryClient } from '@cosmjs/stargate';
import Long from "long";
import { coin, coins } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { osmosis } from '../src/codegen';

import {connect, getChainInfo, getDenomFromInfo, getIBCInfo, getMnemonic} from './config';

async function ibcCosmosToOsmosis(address) {
  const client = getClient("cosmos-2");
  const chainInfo = CHAIN_CLIENT["cosmos-2"].chainInfo;

  // Fetch open transfer channels and ports
  const ibcInfo = await getIBCInfo("cosmos-2", "osmosis-1")
  const channel = ibcInfo.channels[0]["chain_1"];

  const result = await client.sendIbcTokens(
    CHAIN_CLIENT["cosmos-2"].address,
    address,
    coin(100_000_000, getDenomFromInfo(chainInfo)),
    channel["port_id"],
    channel["channel_id"],
    { revisionHeight: Long.fromNumber(12300), revisionNumber: Long.fromNumber(45600) },
    Math.floor(Date.now() / 1000) + 60,
    { amount: coins(200000, getDenomFromInfo(chainInfo)), gas: "200000" },
    "initial send atoms as part of setup",
  );

  assertIsDeliverTxSuccess(result);
};

// todo: use facuet here
async function sendOsmoToAddress(address) {
  const client = getClient("osmosis-1");
  const denom = getDenomFromInfo(CHAIN_CLIENT["osmosis-1"].chainInfo)

  const result = await client.sendTokens(
    CHAIN_CLIENT["osmosis-1"].address,
    address,
    coin(100_000_000, denom),
    { amount: coins(200000, denom), gas: "200000" },
  );

  assertIsDeliverTxSuccess(result);
}

beforeAll(async () => {
  // Chain info and clients
  for (const network of ["osmosis-1", "cosmos-2"]) {
    const mnemonic = await getMnemonic();
    const chainInfo = await getChainInfo(network)
    const {client, address} = await connect(network, mnemonic);

    const tmClient = client.getTmClient()
    const queryClient = QueryClient.withExtensions(tmClient, setupIbcExtension)

    CHAIN_CLIENT[network] = {
      client: client,
      queryClient: queryClient,
      address: address,
      chainInfo: chainInfo
    };
  };
});

describe("IBC transfer of atom", () => {
  let wallet;
  let baseDenom;
  let address;

  beforeAll(async () => {
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: CHAIN_CLIENT["osmosis-1"].chainInfo["bech32_prefix"] },
    );
    baseDenom = getDenomFromInfo(CHAIN_CLIENT["osmosis-1"].chainInfo)
    address = (await wallet.getAccounts())[0].address;
    // Transfer uatom tokens via IBC to osmosis
    await ibcCosmosToOsmosis(address);
    // Transfer uosmo tokens from faceut
    await sendOsmoToAddress(address);
  });

  it("check address has osmosis token", async () => {
    const client = getClient("osmosis-1");
    const balance = client.getBalance(address, baseDenom);

    expect(balance.amount).toEqual("100000000");
    expect(balance.denom).toEqual(baseDenom);
  })

  it("check address has IBC tokens", async () => {
    // Check atom in address
    const client = getClient("osmosis-1");
    const queryClient = getQueryClient("osmosis-1");

    const balances = await client.getAllBalances(address);

    expect(balances.length).toEqual(1);
    expect(balances[0].amount).toEqual("100000000");
    expect(balances[0].denom).toContain("ibc/");

    const trace = await queryClient.ibc.transfer.denomTrace(balances[0].denom.replace("ibc/", ""));
    const traces = await queryClient.ibc.transfer.denomTraces()
    expect(trace.denomTrace.baseDenom).toEqual("uatom");
  });

  it("create ibc pools with ibc atom osmo", async () => {
    const client = getClient("osmosis-1");
    const queryClient = getQueryClient("osmosis-1");

    const balances = await client.getAllBalances(address);

    //osmosis.gamm.v1beta1.MessageComposer.encoded.joinPool()
    const msg = osmosis.gamm.poolmodels.balancer.v1beta1.MessageComposer.fromPartial.createBalancerPool({
      sender: address,
      poolParams: "",
      poolAssets: [
        {
          token: coin("500000", balances[0].denom),
          weight: "",
        },
        {
          token: coin("500000", balances[1].denom),
          weight: "",
        }
      ],
      futurePoolGovernor: "",
    })
    // const msg = osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool.encode(
    //
    // );
  });
});
