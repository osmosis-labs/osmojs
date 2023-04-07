import {makeCosmoshubPath} from '@cosmjs/amino';
import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing';
import {QueryClient, setupIbcExtension, SigningStargateClient} from '@cosmjs/stargate';
import fetch from 'node-fetch';
import {connect, getChainInfo, getIBCInfo, getStarshipConfig} from 'packages/osmojs/tests/config';

class ChainClientRegistry {
  #keys;

  constructor(chainId, client, address) {
    this.chainId = chainId;
    this.chainInfo = null;
    this.client = null;
    this.address = null;
}

  // initialize class object. chainInfo is initialized first before everything else
  async initialize() {
    this.chainInfo = await ChainClientRegistry.fetchChainInfo(this.chainId);
    this.#keys = await ChainClientRegistry.fetchKeys();

    await this.initClient();
    this.queryClient = QueryClient.withExtensions(this.client.getTmClient(), setupIbcExtension)
  }

  // initialize client and address
  async initClient() {
    const prefix = this.chainInfo["bech32_prefix"];
    const denom = this.getDenom();
    const rpc = this.chainInfo["apis"]["rpc"][0]["address"];

    const hdPath = makeCosmoshubPath(0);

    // Setup signer
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(this.getGenesisMnemonic(), {
      prefix,
      hdPaths: [hdPath],
    });
    const { address } = (await offlineSigner.getAccounts())[0];

    // Init SigningCosmWasmClient client
    const client = await SigningStargateClient.connectWithSigner(
      rpc,
      offlineSigner,
      {
        prefix,
        gasPrice: `0.025${denom}`,
      }
    );

    const chainId = await client.getChainId();
    if (chainId !== this.chainInfo["chain_id"]) {
      throw Error(`Given ChainId: ${this.getChainId()} doesn't match the clients ChainID: ${chainId}!`);
    }

    // set client and address
    this.client = client;
    this.address = address;
  }

  static async fetchChainInfo(chainId) {
    return await getChainInfo(chainId);
  }

  static async fetchKeys() {
    const url = "https://raw.githubusercontent.com/cosmology-tech/starship/main/charts/devnet/configs/keys.json";
    const response = await fetch(url, {});
    return await response.json();
  }

  getGenesisMnemonic() {
    return this.#keys["genesis"][0]["mnemonic"]
  }

  getClient() {
    return this.client
  }

  getQueryClient() {
    return this.queryClient;
  }

  getChainInfo() {
    return this.chainInfo;
  }

  getChainId() {
    return this.chainInfo.chain_id;
  }

  getDenom() {
    return this.chainInfo.staking["staking_tokens"][0].denom
  }

  // returns IBC info between current chain and given chain
  async getIBCInfo(chain2) {
    const config = getStarshipConfig();
    const port = config.registry.ports.rest;

    const resp = await fetch(`http://localhost:${port}/ibc/${this.chainId}/${chain2}`, {});
    return await resp.json();
  }

  static async withChainId(chainId) {
    const chainClient = new ChainClientRegistry(chainId);

    const mnemonic = await chainClient.getGenesisMnemonic();
    const {client, address} = await connect(chainId, mnemonic);

    chainClient.client = client;
    chainClient.address = address;

    await chainClient.initialize();

    return chainClient;
  }

  // return a dict with key as chainId and value as the client
  static async withChainIds(chainIds) {
    const dict = {};
    await Promise.all(chainIds.map(async (chainId) => {
      dict[chainId] = await ChainClientRegistry.withChainId(chainId);
    }));
    return dict;
  }
}
