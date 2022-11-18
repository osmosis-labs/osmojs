import {SigningStargateClient} from '@cosmjs/stargate';
import fetch from 'node-fetch';
import path from "path";

import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { makeCosmoshubPath } from "@cosmjs/amino";

let KEYS;

export function getChainInfo(network) {
  const configPath = path.join(__dirname, "configs", "values.json");
  const config = require(configPath);

  let chain = config["defaultChains"][network];

  for (const chainConfig of config.chains) {
    if (chainConfig.type === network) {
      chain = {...chain, ...chainConfig}
    }
  }

  // Add rpc endpoint to chain info
  chain["rpcEndpoint"] = `http://localhost:${chain.ports.rpc}`;

  return chain;
}

export async function getKeys() {
  if (!KEYS) {
    const url = "https://raw.githubusercontent.com/Anmol1696/shuttle/main/charts/devnet/configs/keys.json";
    const response = await fetch(url, {});
    KEYS = await response.json();
  }

  return KEYS;
};

export async function getMnemonic() {
  const keys = await getKeys();
  return keys["genesis"][0]["mnemonic"];
};

export async function connect(name, mnemonic) {
  const network = getChainInfo(name);

  const { prefix, denom, rpcEndpoint } = network;
  const hdPath = makeCosmoshubPath(0);

  // Setup signer
  const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix,
    hdPaths: [hdPath],
  });
  const { address } = (await offlineSigner.getAccounts())[0];

  // Init SigningCosmWasmClient client
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    offlineSigner,
    {
      prefix,
      gasPrice: `0.025${denom}`,
    }
  );
  const balance = await client.getBalance(address, denom);

  const chainId = await client.getChainId();

  if (chainId !== network.name) {
    throw Error(`Given ChainId: ${network.chainId} doesn't match the clients ChainID: ${chainId}!`);
  }

  return { client, address };
};
