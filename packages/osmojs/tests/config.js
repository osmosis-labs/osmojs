import {makeCosmoshubPath} from '@cosmjs/amino';
import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing';
import {SigningStargateClient} from '@cosmjs/stargate';
import yaml from 'js-yaml';
import fetch from 'node-fetch';
import path from 'path';

const fs = require('fs');

let KEYS;

// returns starship config used to spun up the cluster
export function getStarshipConfig() {
  const configPath = path.join(__dirname, "configs", "config.yaml");
  const config = yaml.load(fs.readFileSync(configPath, "utf-8"));

  return config;
}

// todo: use @chain-registry/types and @chain-registry/client
// fetches chain registry info from local chain registry spun up by Starship
export async function getChainInfo(name) {
  const config = getStarshipConfig();
  const port = config.registry.ports.rest;

  const resp = await fetch(`http://localhost:${port}/chains/${name}`, {});
  const chainInfo = await resp.json();

  // Replace chain rpc with localhost
  const chain = config["chains"].find(x => x.name === name);
  chainInfo["apis"]["rpc"][0]["address"] = `http://localhost:${chain.ports.rpc}`;

  return chainInfo;
}
//
// export function getDenomFromInfo(chainInfo) {
//   return chainInfo.staking["staking_tokens"][0].denom
// }
//
// // todo: use @chain-registry/types
// export async function getIBCInfo(chain_1, chain_2) {
//   const config = getStarshipConfig();
//   const port = config.registry.ports.rest;
//
//   const resp = await fetch(`http://localhost:${port}/ibc/${chain_1}/${chain_2}`, {});
//   return await resp.json();
// }

// export async function getKeys() {
//   if (!KEYS) {
//     const url = "https://raw.githubusercontent.com/cosmology-tech/starship/main/charts/devnet/configs/keys.json";
//     const response = await fetch(url, {});
//     KEYS = await response.json();
//   }
//
//   return KEYS;
// };
//
// export async function getMnemonic() {
//   const keys = await getKeys();
//   return keys["genesis"][0]["mnemonic"];
// };
//
// export async function connect(name, mnemonic) {
//   const chainInfo = await getChainInfo(name);
//
//   const prefix = chainInfo["bech32_prefix"];
//   const denom = getDenomFromInfo(chainInfo);
//   const rpcEndpoint = chainInfo["apis"]["rpc"][0]["address"];
//
//   const hdPath = makeCosmoshubPath(0);
//
//   // Setup signer
//   const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
//     prefix,
//     hdPaths: [hdPath],
//   });
//   const { address } = (await offlineSigner.getAccounts())[0];
//
//   // Init SigningCosmWasmClient client
//   const client = await SigningStargateClient.connectWithSigner(
//     rpcEndpoint,
//     offlineSigner,
//     {
//       prefix,
//       gasPrice: `0.025${denom}`,
//     }
//   );
//   const balance = await client.getBalance(address, denom);
//
//   const chainId = await client.getChainId();
//
//   if (chainId !== chainInfo["chain_id"]) {
//     throw Error(`Given ChainId: ${chainInfo.chain_id} doesn't match the clients ChainID: ${chainId}!`);
//   }
//
//   return { client, address };
// };
