# OsmoJS

## usage

```sh
npm install osmojs
```

### Manually registering types

```js
import {
    AminoTypes,
    SigningStargateClient
} from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing'
import { osmosis } from 'osmojs';

export const getSigningOsmosisClient = async ({ rpcEndpoint, signer }: { rpcEndpoint: string, signer: OfflineSigner }) => {
  // registry
  const registry = new Registry(defaultRegistryTypes);

  // aminotypes
  const aminoTypes = new AminoTypes({
    ...osmosis.gamm.v1beta1.AminoConverter,
    ...osmosis.lockup.AminoConverter,
    ...osmosis.superfluid.AminoConverter
  });

  osmosis.gamm.v1beta1.load(registry);
  osmosis.lockup.load(registry);
  osmosis.superfluid.load(registry);

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    { registry, aminoTypes }
  );

  return client;
};
```

### using mnemonics

```js
import { Secp256k1HdWallet } from '@cosmjs/amino';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { chains } from 'chain-registry';

export function makeHdPath(coinType = 118, account = 0) {
    return [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(coinType),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(account)
    ];
}

export const getWalletFromMnemonicForChain = async ({ mnemonic, chain }): Promise<Secp256k1HdWallet> => {
    try {
        const { bech32_prefix, slip44 } = chain;
        const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix: bech32_prefix,
            hdPaths: [makeHdPath(slip44, 0)]
        });
        return wallet;
    } catch (e) {
        console.log('bad mnemonic');
    }
};

// now you can create a signer
// NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
  const signer = await getWalletFromMnemonicForChain({
    mnemonic,
    chain
  });

```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
