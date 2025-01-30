// @ts-nocheck
import { ChainInfo } from "@chain-registry/client";
import { Coin, DirectSecp256k1HdWallet, OfflineSigner } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess, SigningStargateClient } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';
import { ConfigContext, generateMnemonic, useChain } from 'starshipjs';

import { getSigningIbcClient } from '../../src';

export const calcShareOutAmount = (poolInfo, coinsNeeded) => {
  return poolInfo.poolAssets
    .map(({ token }, i) => {
      const tokenInAmount = new BigNumber(coinsNeeded[i].amount);
      const totalShare = new BigNumber(poolInfo.totalShares.amount).shiftedBy(-18);
      const poolAssetAmount = new BigNumber(token.amount);

      return tokenInAmount
        .multipliedBy(totalShare)
        .dividedBy(poolAssetAmount)
        .shiftedBy(18)
        .decimalPlaces(0, BigNumber.ROUND_HALF_UP)
        .toString();
    })
    .sort((a, b) => (new BigNumber(a).lt(b) ? -1 : 1))[0];
};

export const waitUntil = (date, timeout = 90000) => {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error('Timeout to wait until date');
  }
  return new Promise(resolve => setTimeout(resolve, delay + 3000));
};

export const transferIbcTokens = async (fromChain: string, toChain: string, toAddress: string, amount: string) => {
  const fromChainData: any = useChain(fromChain);
  const toChainData: any = useChain(toChain);
  const ibcInfo = findIbcInfo(fromChainData.chainInfo, toChainData.chainInfo);

  const wallet = await createTempWallet(fromChainData.chainInfo.chain.bech32_prefix);
  const fromAddress = (await wallet.getAccounts())[0].address;

  await fromChainData.creditFromFaucet(fromAddress);

  const fromClient = await setupIbcClient(await fromChainData.getRpcEndpoint(), wallet);
  const token = { denom: (await fromChainData.getCoin()).base, amount };

  const resp = await sendIbcTokens(fromClient, fromAddress, toAddress, token, ibcInfo, amount);

  assertIsDeliverTxSuccess(resp);
  return token;
};

const findIbcInfo = (chainInfo: ChainInfo, toChainInfo: ChainInfo) => {
  const registry = ConfigContext.registry;
  const ibcInfos = registry!.getChainIbcData(chainInfo.chain.chain_name);
  const found = ibcInfos.find(
    i => i.chain_1.chain_name === chainInfo.chain.chain_name &&
      i.chain_2.chain_name === toChainInfo.chain.chain_name
  );
  if (!found) throw new Error('Cannot find IBC info');
  return found;
};

const createTempWallet = async (bech32Prefix: string) => {
  return DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), { prefix: bech32Prefix });
};

const setupIbcClient = async (rpcEndpoint: string, wallet: OfflineSigner): Promise<SigningStargateClient> => {
  return getSigningIbcClient({ rpcEndpoint, signer: wallet });
};

const sendIbcTokens = async (client: SigningStargateClient, fromAddress: string, toAddress: string, token: Coin, ibcInfo: any, _amount) => {
  const { port_id: sourcePort, channel_id: sourceChannel } = ibcInfo.channels[0].chain_1;
  const timeoutTime = Math.floor(Date.now() / 1000) + 300; // 5 minutes
  const fee = { amount: [{ denom: token.denom, amount: '1000000' }], gas: '550000' };

  return client.sendIbcTokens(fromAddress, toAddress, token, sourcePort, sourceChannel, undefined, timeoutTime, fee);
};
