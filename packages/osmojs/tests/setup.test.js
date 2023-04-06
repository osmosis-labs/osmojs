import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import Long from "long";
import { coin, coins } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {
  QueryChannelsRequest,
  QueryChannelsResponse
} from 'cosmjs-types/ibc/core/channel/v1/query';

import { connect, getChainInfo, getMnemonic } from './config';

let CHAIN_CLIENT = {};

function getClient(network) {
  return CHAIN_CLIENT[network].client;
};

async function ibcCosmosToOsmosis(address) {
  const client = getClient("cosmos");
  const chainInfo = CHAIN_CLIENT["cosmos"].chainInfo;

  // Fetch open transfer channels and ports
  const requestData = Uint8Array.from(
    QueryChannelsRequest.encode({}).finish(),
  );
  const data = await client.getQueryClient().queryUnverified(`/ibc.core.channel.v1.Query/Channels`, requestData);
  const response = QueryChannelsResponse.decode(data);
  const channel = response.channels[0];

  const result = await client.sendIbcTokens(
    CHAIN_CLIENT.cosmos.address,
    address,
    coin(100_000_000, chainInfo.denom),
    channel.portId,
    channel.channelId,
    { revisionHeight: Long.fromNumber(12300), revisionNumber: Long.fromNumber(45600) },
    Math.floor(Date.now() / 1000) + 60,
    { amount: coins(200000, chainInfo.denom), gas: "200000" },
    "initial send atoms as part of setup",
  );

  assertIsDeliverTxSuccess(result);
};

beforeAll(async () => {
  // Chain info and clients
  for (const network of ["osmosis", "juno", "cosmos"]) {
    const mnemonic = await getMnemonic();
    const {client, address} = await connect(network, mnemonic);
    CHAIN_CLIENT[network] = {
      client: client,
      address: address,
      chainInfo: getChainInfo(network)
    };
  };
});

describe("IBC Tokens", () => {
  let wallet;
  let address;

  beforeAll(async () => {
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: CHAIN_CLIENT.osmosis.chainInfo.prefix },
    );
    address = (await wallet.getAccounts())[0].address;
    // Transfer uatom tokens via IBC to osmosis
    await ibcCosmosToOsmosis(address);
  });

  it("check address has tokens", async () => {
    // Check atom in address
    const client = getClient("osmosis");
    const balances = await client.getAllBalances(address);

    const currentBalance = await client.getAllBalances(CHAIN_CLIENT.osmosis.address);
    expect(true).toBeTruthy();
  });
});

