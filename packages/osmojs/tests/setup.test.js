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

  // Fetch open transfer channels and ports
  const requestData = Uint8Array.from(
    QueryChannelsRequest.encode({}).finish(),
  );
  const data = await client.getQueryClient().queryUnverified(`/ibc.core.channel.v1.Query/Channels`, requestData);
  const response = QueryChannelsResponse.decode(data);
  console.log(`channels: ${JSON.stringify(response.channels)}`);

  await client.sendIbcTokens(
    CHAIN_CLIENT.cosmos.address,
    CHAIN_CLIENT.osmosis.address,
  );
};

beforeAll(async () => {
  // Chain info and clients
  for (const network of ["osmosis", "juno", "cosmos"]) {
    const mnemonic = await getMnemonic();
    const {client, address} = await connect(network, mnemonic);
    CHAIN_CLIENT[network] = {client: client, address: address};
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

