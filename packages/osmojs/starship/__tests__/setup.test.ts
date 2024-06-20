// @ts-nocheck
import { StargateClient } from '@cosmjs/stargate';
import path from 'path';
import { ConfigContext, useChain, useRegistry } from 'starshipjs';

beforeAll(async () => {
  const configFile = path.join(__dirname, '..', 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile))
});

describe('Test clients', () => {
  let client;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    client = await StargateClient.connect(await getRpcEndpoint());
  });

  it('check chain height', async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  });
});
