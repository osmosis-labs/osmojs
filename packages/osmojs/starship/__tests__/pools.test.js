import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import {
  assertIsDeliverTxSuccess,
  SigningStargateClient
} from '@cosmjs/stargate';
import { coin, coins } from '@cosmjs/amino';
import Long from 'long';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import { osmosis, google, getSigningOsmosisClient } from '../../src/codegen';
import { calcShareOutAmount, transferIbcTokens } from './utils.js';
import { useChain } from '../src';
import './setup.test';

describe('Pool testing over IBC tokens', () => {
  let wallet, denom, address;
  let chainInfo, getCoin, getStargateClient, getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let poolId;
  let pool;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getStargateClient,
      getRpcEndpoint,
      creditFromFaucet
    } = useChain('osmosis'));
    denom = getCoin().base;

    // Initialize wallet
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix
    });
    address = (await wallet.getAccounts())[0].address;

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address);
    await transferIbcTokens('cosmos', 'osmosis', address, '100000000');
  }, 200000);

  it('check address has tokens', async () => {
    const client = await getStargateClient();
    const balances = await client.getAllBalances(address);

    expect(balances.length).toEqual(2);
  }, 10000);

  it('create ibc pools with ibc atom osmo', async () => {
    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const balances = await signingClient.getAllBalances(address);

    const msg =
      osmosis.gamm.poolmodels.balancer.v1beta1.MessageComposer.fromPartial.createBalancerPool(
        {
          sender: address,
          poolParams: {
            swapFee: '1',
            exitFee: '0'
          },
          poolAssets: [
            {
              token: {
                amount: '10000000',
                denom: balances[0].denom
              },
              weight: '100'
            },
            {
              token: {
                amount: '10000000',
                denom: balances[1].denom
              },
              weight: '100'
            }
          ],
          futurePoolGovernor: ''
        }
      );

    const fee = {
      amount: [
        {
          denom,
          amount: '100000'
        }
      ],
      gas: '550000'
    };

    const result = await signingClient.signAndBroadcast(
      address,
      [msg],
      fee,
      'creating IBC pools'
    );

    assertIsDeliverTxSuccess(result);

    const poolCreated = result.events.find((x) => x.type === 'pool_created');

    // set poolid for the following test cases
    poolId = Long.fromString(
      poolCreated.attributes.find((x) => x.key === 'pool_id').value
    );

    expect(poolId.isPositive()).toBeTruthy();
  }, 200000);

  it('query pool via id, verify creation', async () => {
    // Query the created pool
    const queryClient = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint: getRpcEndpoint()
    });

    const client = await getStargateClient();

    const poolResponse = await queryClient.osmosis.gamm.v1beta1.pool({
      poolId
    });

    expect(poolResponse).toBeTruthy();
    expect(poolResponse.pool.id.toInt()).toEqual(poolId.toInt());

    // Verify the address has gamm tokens
    const gammDenom = poolResponse.pool.totalShares.denom;
    const gammBalance = await client.getBalance(address, gammDenom);

    expect(gammBalance.denom).toEqual(gammDenom);
    // eslint-disable-next-line no-undef
    expect(BigInt(gammBalance.amount)).toEqual(
      // eslint-disable-next-line no-undef
      BigInt(poolResponse.pool.totalShares.amount)
    );

    // Set pool var for other tests
    pool = poolResponse.pool;
  }, 20000);

  it('join pool', async () => {
    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const allCoins = pool.poolAssets.map((asset) =>
      coin('1000000', asset.token.denom)
    );
    const shareOutAmount = calcShareOutAmount(pool, allCoins);
    const msg = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl.joinPool({
      poolId: poolId,
      sender: address,
      shareOutAmount: shareOutAmount,
      tokenInMaxs: allCoins
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000'
        }
      ],
      gas: '550000'
    };

    const result = await signingClient.signAndBroadcast(
      address,
      [msg],
      fee,
      'join pool created'
    );

    assertIsDeliverTxSuccess(result);

    // Verify new gamm tokens have been minted to the address
    const { denom: gammDenom, amount: totalgammAmount } = pool.totalShares;
    const gammBalance = await signingClient.getBalance(address, gammDenom);

    expect(gammBalance.denom).toEqual(gammDenom);
    // eslint-disable-next-line no-undef
    expect(BigInt(gammBalance.amount)).toEqual(
      // eslint-disable-next-line no-undef
      BigInt(shareOutAmount) + BigInt(totalgammAmount)
    );
  }, 200000);

  it('lock tokens', async () => {
    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const gammDenom = pool.totalShares.denom;
    const coins = [
      {
        denom: gammDenom,
        amount: '1000000'
      }
    ];

    const msg = osmosis.lockup.MessageComposer.withTypeUrl.lockTokens({
      coins,
      owner: address,
      duration: google.protobuf.Duration.fromPartial({
        seconds: '86400',
        nanos: 0
      })
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000'
        }
      ],
      gas: '550000'
    };

    const result = await signingClient.signAndBroadcast(
      address,
      [msg],
      fee,
      'lock tokens'
    );

    assertIsDeliverTxSuccess(result);
  });

  it('swap tokens using pool, to address without ibc token', async () => {
    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet
    });

    const ibcDenom = pool.poolAssets.find((asset) => {
      if (asset.token.denom.startsWith('ibc/')) {
        return asset;
      }
    }).token.denom;

    const balanceBefore = await signingClient.getBalance(address, ibcDenom);

    const msg =
      osmosis.gamm.v1beta1.MessageComposer.withTypeUrl.swapExactAmountIn({
        sender: address,
        routes: [
          {
            poolId,
            tokenOutDenom: ibcDenom
          }
        ],
        tokenIn: {
          amount: '200000',
          denom: denom
        },
        tokenOutMinAmount: '100000'
      });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000'
        }
      ],
      gas: '550000'
    };

    const result = await signingClient.signAndBroadcast(
      address,
      [msg],
      fee,
      'swap tokens'
    );

    assertIsDeliverTxSuccess(result);

    const swapEvent = result.events.find((event) => {
      if (event.type === 'token_swapped') {
        return event;
      }
    });
    const amountOut = swapEvent.attributes
      .find((attr) => {
        if (attr.key === 'tokens_out') {
          return attr;
        }
      })
      .value.split(ibcDenom)[0];

    const balanceAfter = await signingClient.getBalance(address, ibcDenom);

    // Verify balance increase of ibc denom is from token swap
    // eslint-disable-next-line no-undef
    expect(BigInt(balanceAfter.amount) - BigInt(balanceBefore.amount)).toEqual(
      // eslint-disable-next-line no-undef
      BigInt(amountOut)
    );
  }, 200000);
});
