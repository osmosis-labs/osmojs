// @ts-nocheck
import './setup.test';

import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess, StargateClient } from '@cosmjs/stargate';
import { generateMnemonic, useChain } from 'starshipjs';

import { getSigningOsmosisClient, ibc } from '../../src';

describe('Token transfers', () => {
  let wallet, denom, address;
  let chainInfo, getCoin, getRpcEndpoint, creditFromFaucet;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getRpcEndpoint,
      creditFromFaucet
    } = useChain('osmosis'));
    denom = (await getCoin()).base;

    // Initialize wallet
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix
    });
    address = (await wallet.getAccounts())[0].address;

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    // Initialize wallet
    const wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: chainInfo.chain.bech32_prefix }
    );
    const address2 = (await wallet2.getAccounts())[0].address;

    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '1000000'
        }
      ],
      gas: '550000'
    };

    const token = {
      amount: '10000000',
      denom
    };

    // Transfer uosmo tokens from faceut
    await signingClient.sendTokens(
      address,
      address2,
      [token],
      fee,
      'send tokens test'
    );

    const balance = await signingClient.getBalance(address2, denom);

    expect(balance.amount).toEqual(token.amount);
    expect(balance.denom).toEqual(denom);
  }, 10000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const signingClient = await getSigningOsmosisClient({
      rpcEndpoint: await getRpcEndpoint(),
      signer: wallet
    });

    const {
      chainInfo: cosmosChainInfo,
      getRpcEndpoint: cosmosRpcEndpoint
    } = useChain('cosmoshub');

    const {
      getRpcEndpoint: osmosisRpcEndpoint
    } = useChain('osmosis');

    // Initialize wallet address for cosmos chain
    const cosmosWallet = await DirectSecp256k1HdWallet.fromMnemonic(
      generateMnemonic(),
      { prefix: cosmosChainInfo.chain.bech32_prefix }
    );
    const cosmosAddress = (await cosmosWallet.getAccounts())[0].address;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_name
    );
    const ibcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_name &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_name
    );

    expect(ibcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      ibcInfo.channels[0].chain_1;

    // Transfer osmosis tokens via IBC to cosmos chain
    const currentTime = Math.floor(Date.now() / 1000);
    const timeoutTime = currentTime + 300; // 5 minutes

    const fee = {
      amount: [
        {
          denom,
          amount: '1000000'
        }
      ],
      gas: '550000'
    };

    const token = {
      denom,
      amount: '10000000'
    };

    // send ibc tokens
    const resp = await signingClient.sendIbcTokens(
      address,
      cosmosAddress,
      token,
      sourcePort,
      sourceChannel,
      undefined,
      timeoutTime,
      fee
    );

    assertIsDeliverTxSuccess(resp);

    // Check osmos in address on cosmos chain
    const cosmosClient = await StargateClient.connect(await cosmosRpcEndpoint());
    const balances = await cosmosClient.getAllBalances(cosmosAddress);

    // check balances
    expect(balances.length).toEqual(1);
    const ibcBalance = balances.find((balance) => {
      return balance.denom.startsWith('ibc/');
    });
    // @ts-ignore
    expect(ibcBalance.amount).toEqual(token.amount);
    // @ts-ignore
    expect(ibcBalance.denom).toContain('ibc/');

    // check ibc denom trace of the same
    const queryClient = await ibc.ClientFactory.createRPCQueryClient({
      rpcEndpoint: await cosmosRpcEndpoint()
    });
    const trace = await queryClient.ibc.applications.transfer.v1.denomTrace({
      // @ts-ignore
      hash: ibcBalance.denom.replace('ibc/', '')
    });
    // @ts-ignore
    expect(trace.denomTrace.baseDenom).toEqual(denom);
  }, 10000);
});
