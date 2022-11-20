import {coin} from '@cosmjs/amino';
import {connect, getChainInfo, getMnemonic} from './config';

import {
  QueryChannelsRequest,
  QueryChannelsResponse
} from 'cosmjs-types/ibc/core/channel/v1/query';

let CHAIN_CLIENT = {};

function getClient(network) {
  return CHAIN_CLIENT[network].client;
};

async function ibcCosmosToOsmosis() {
  const client = getClient("cosmos");
  const chainInfo = CHAIN_CLIENT["cosmos"].chainInfo;

  // Fetch open transfer channels and ports
  const requestData = Uint8Array.from(
    QueryChannelsRequest.encode({}).finish(),
  );
  const data = await client.getQueryClient().queryUnverified(`/ibc.core.channel.v1.Query/Channels`, requestData);
  const response = QueryChannelsResponse.decode(data);
  const channel = response.channels[0];

  await client.sendIbcTokens(
    CHAIN_CLIENT.cosmos.address,
    CHAIN_CLIENT.osmosis.address,
    coin(100_000_000, chainInfo.denom),
    channel.portId,
    channel.channelId,
    // heigth
    // timestamp
    fee,
    "initial send atoms as part of setup",
  );
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
  beforeAll(async () => {
    // Transfer uatom tokens via IBC to osmosis
    await ibcCosmosToOsmosis();
  });

  it("check setup", () => {
    expect(true).toBeTruthy();
  });
});

