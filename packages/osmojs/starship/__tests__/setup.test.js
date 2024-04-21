import path from 'path';

import { ConfigContext, useChain, useRegistry } from 'starshipjs';
import { getSigningCosmosClientOptions } from '../../src/codegen';
import { StargateClient} from '@cosmjs/stargate';

beforeAll(async () => {
  const configFile = path.join(__dirname, '..', 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile))
});

describe('Test clients', () => {
  let client;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    client = await StargateClient.connect(getRpcEndpoint(), getSigningCosmosClientOptions());
  });

  it('check chain height', async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  });
});
