import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';

import { getSigningIbcClient } from '../../src/codegen';
import { useChain, ConfigContext } from 'starshipjs';

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

export const transferIbcTokens = async (fromChain, toChain, toAddress, amount) => {
  const fromChainData = useChain(fromChain);
  const toChainData = useChain(toChain);
  const ibcInfo = findIbcInfo(fromChainData.chainInfo, toChainData.chainInfo);

  const wallet = await createTempWallet(fromChainData.chainInfo.chain.bech32_prefix);
  const fromAddress = (await wallet.getAccounts())[0].address;

  await fromChainData.creditFromFaucet(fromAddress);
  
  const fromClient = await setupIbcClient(fromChainData.getRpcEndpoint(), wallet);
  const token = { denom: fromChainData.getCoin().base, amount };
  
  const resp = await sendIbcTokens(fromClient, fromAddress, toAddress, token, ibcInfo, amount);
  
  assertIsDeliverTxSuccess(resp);
  return token;
};

const findIbcInfo = (chainInfo, toChainInfo) => {
  const registry = ConfigContext.registry;
  const ibcInfos = registry.getChainIbcData(chainInfo.chain.chain_id);
  const found = ibcInfos.find(
    i => i.chain_1.chain_name === chainInfo.chain.chain_id &&
         i.chain_2.chain_name === toChainInfo.chain.chain_id
  );
  if (!found) throw new Error('Cannot find IBC info');
  return found;
};

const createTempWallet = async (bech32Prefix) => {
  return DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), { prefix: bech32Prefix });
};

const setupIbcClient = async (rpcEndpoint, wallet) => {
  return getSigningIbcClient({ rpcEndpoint, signer: wallet });
};

const sendIbcTokens = async (client, fromAddress, toAddress, token, ibcInfo, amount) => {
  const { port_id: sourcePort, channel_id: sourceChannel } = ibcInfo.channels[0].chain_1;
  const timeoutTime = Math.floor(Date.now() / 1000) + 300; // 5 minutes
  const fee = { amount: [{ denom: token.denom, amount: '100000' }], gas: '550000' };

  return client.sendIbcTokens(fromAddress, toAddress, token, sourcePort, sourceChannel, undefined, timeoutTime, fee);
};
