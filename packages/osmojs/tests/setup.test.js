import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import {assertIsDeliverTxSuccess, setupIbcExtension, QueryClient, SigningStargateClient} from '@cosmjs/stargate';
import Long from "long";
import { coin, coins } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { osmosis } from '../src/codegen';

import { getChainInfo } from './config';
import { sleep } from './utils';
import { ChainClientRegistry } from './clients.js';

async function ibcCosmosToOsmosis(cosmosChain, osmosisChain, address) {
  const client = cosmosChain.getClient();

  // Fetch open transfer channels and ports
  const ibcInfo = await cosmosChain.getIBCInfo(osmosisChain.getChainId());
  const channel = ibcInfo.channels[0]["chain_1"];

  const result = await client.sendIbcTokens(
    cosmosChain.address,
    address,
    coin(100_000_000, cosmosChain.getDenom()),
    channel["port_id"],
    channel["channel_id"],
    { revisionHeight: Long.fromNumber(12300), revisionNumber: Long.fromNumber(45600) },
    Math.floor(Date.now() / 1000) + 60,
    { amount: coins(0, cosmosChain.getDenom()), gas: "200000" },
    "initial send atoms as part of setup",
  );

  // todo: fix this, better to wait for the broadcast to succed with a timeout
  await sleep(1*1000);

  assertIsDeliverTxSuccess(result);
};

// todo: use facuet here
async function sendOsmoToAddress(osmosisChain, address) {
  const client = osmosisChain.getClient();
  const denom = osmosisChain.getDenom();

  const result = await client.sendTokens(
    osmosisChain.address,
    address,
    [coin(1_000_000_000, denom)],
    { amount: coins(0, denom), gas: "200000" },
  );

  // todo: fix this, better to wait for the broadcast to succed with a timeout
  await sleep(1*1000);

  assertIsDeliverTxSuccess(result);
}

describe("osmos token transfer", function () {
  let wallet;
  let baseDenom;
  let address;
  let chainClient;

  beforeAll(async () => {
    chainClient = await ChainClientRegistry.withChainId("osmosis-1");

    wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      {prefix: chainClient.getPrefix()},
    );
    baseDenom = chainClient.getDenom();
    address = (await wallet.getAccounts())[0].address;
  });

  it("check address has osmosis token", async () => {
    // Transfer uosmo tokens from faceut
    await sendOsmoToAddress(chainClient, address);

    const genesisBalance = await chainClient.client.getBalance(chainClient.address, baseDenom);
    const balance = await chainClient.client.getBalance(address, baseDenom);

    expect(balance.amount).toEqual("100000000");
    expect(balance.denom).toEqual(baseDenom);
  }, 10000);
});

describe("IBC transfer of atom", () => {
  let wallet;
  let baseDenom;
  let address;
  let chainClients;

  beforeAll(async () => {
    chainClients = await ChainClientRegistry.withChainIds(["osmosis-1", "cosmos-2"]);

    wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: chainClients["osmosis-1"].getPrefix() },
    );
    baseDenom = chainClients["osmosis-1"].getDenom();
    address = (await wallet.getAccounts())[0].address;
  });

  it("check address has IBC tokens", async () => {
    // Transfer uatom tokens via IBC to osmosis
    await ibcCosmosToOsmosis(chainClients["cosmos-2"], chainClients["osmosis-1"], address);

    // Check atom in address
    const chain = chainClients["osmosis-1"];
    const client = chain.client;
    const queryClient = chain.getQueryClient();

    const balances = await client.getAllBalances(address);

    // check balances
    expect(balances.length).toEqual(1);
    expect(balances[0].amount).toEqual("100000000");
    expect(balances[0].denom).toContain("ibc/");

    // check ibc denom trace of the same
    const trace = await queryClient.ibc.transfer.denomTrace(balances[0].denom.replace("ibc/", ""));
    expect(trace.denomTrace.baseDenom).toEqual(chainClients["cosmos-2"].getDenom());
  }, 10000);
});

describe("create ibc pool", () => {
  let wallet;
  let baseDenom;
  let address;
  let signingClient;
  let chainClients;

  beforeAll(async () => {
    chainClients = await ChainClientRegistry.withChainIds(["osmosis-1", "cosmos-2"]);

    wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: chainClients["osmosis-1"].getPrefix() },
    );
    baseDenom = chainClients["osmosis-1"].getDenom();
    address = (await wallet.getAccounts())[0].address;
    signingClient = await SigningStargateClient.connectWithSigner(
      chainClients["osmosis-1"].rpc,
      wallet,
      chainClients["osmosis-1"].stargateClientOpts(),
    );
  });

  it("create ibc pools with ibc atom osmo", async () => {
    // Transfer uosmo tokens from faceut
    await sendOsmoToAddress(chainClients["osmosis-1"], address);
    // Transfer uatom tokens via IBC to osmosis
    await ibcCosmosToOsmosis(chainClients["cosmos-2"], chainClients["osmosis-1"], address);

    const chain = chainClients["osmosis-1"];
    const client = chain.client;

    const balances = await client.getAllBalances(address);

    const msg = osmosis.gamm.poolmodels.balancer.v1beta1.MessageComposer.fromPartial.createBalancerPool({
      sender: address,
      poolParams: {
        swapFee: "1",
        exitFee: "0",
      },
      poolAssets: [
        {
          token: coin("10000000", balances[0].denom),
          weight: "100",
        },
        {
          token: coin("10000000", balances[1].denom),
          weight: "100",
        }
      ],
      futurePoolGovernor: "",
    });

    const result = await signingClient.signAndBroadcast(
      address,
      [msg],
      chain.getDefaultFees(),
      "creating IBC pools",
    )

    assertIsDeliverTxSuccess(result);
  }, 20000);
});
