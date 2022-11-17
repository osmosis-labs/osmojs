import { getChainInfo } from './config';

beforeAll(async () => {
  // Setsup the various chains
});

it("test setup", async () => {
  const chainInfo = getChainInfo("osmosis");
  console.log("chainInfo: ", chainInfo)
  expect(chainInfo.name).toEqual("osmosis-1");
});
