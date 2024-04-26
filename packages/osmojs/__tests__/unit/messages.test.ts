import { coin } from '@cosmjs/amino';

import { osmosis } from '../../src';
import { MessageComposer } from '../../src/osmosis/gamm/v1beta1/tx.registry';

it('messages', async () => {
  expect(
    MessageComposer.withTypeUrl.joinPool({
      poolId: BigInt('606'),
      sender: 'osmo1f4vxvvvvvvvvvv3luuddddddddddcccccccccc',
      shareOutAmount: '101010101',
      tokenInMaxs: [
        coin(
          10248,
          'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
        ),
        coin(
          64837969,
          'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
        )
      ]
    })
  ).toMatchSnapshot();
});

it('messages.scoped', async () => {
  expect(
    osmosis.gamm.v1beta1.MessageComposer.withTypeUrl.joinPool({
      poolId: BigInt('606'),
      sender: 'osmo1f4vxvvvvvvvvvv3luuddddddddddcccccccccc',
      shareOutAmount: '101010101',
      tokenInMaxs: [
        coin(
          10248,
          'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
        ),
        coin(
          64837969,
          'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
        )
      ]
    })
  ).toMatchSnapshot();
});
