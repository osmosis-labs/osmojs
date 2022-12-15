# OsmoJS 

<p align="center">
  <a href="https://github.com/osmosis-labs/osmojs">
    <img width="150" src="https://user-images.githubusercontent.com/545047/195456198-c35bf731-255e-42b6-833b-e76df553eec8.svg">
  </a>
</p>

<p align="center" width="100%">
  <a href="https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/osmosis-labs/osmojs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/osmojs"><img height="20" src="https://img.shields.io/github/package-json/v/osmosis-labs/osmojs?filename=packages%2Fosmojs%2Fpackage.json"></a>
</p>

[OsmosJS](https://github.com/osmosis-labs/osmojs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.

---
## install

```sh
npm install osmojs
```

## Table of contents

- [OsmoJS](#osmojs)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
        - Osmosis
            - [Lockup](#lockup-messages)
            - [Superfluid](#superfluid-messages)
            - [Incentives](#incentives-messages)
            - [Gamm](#gamm-messages)
        - Cosmos, CosmWasm, and IBC
            - [CosmWasm](#cosmwasm-messages)
            - [IBC](#ibc-messages)
            - [Cosmos](#cosmos-messages)
    - [Calculating Fees](#calculating-fees)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Credits](#credits)

## Usage

### RPC Clients

```js
import { osmosis } from 'osmojs';

const { createRPCQueryClient } = osmosis.ClientFactory;
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'osmo1addresshere' });

// you can also query the osmosis pools
const response = await client.osmosis.gamm.v1beta1.pools();

// currently Pools need to be decoded
response.pools.map(({ typeUrl, value }) => {
    console.log(osmosis.gamm.v1beta1.Pool.decode(value));
}) 
```

** Every RPC endpoint is available! Simply use vscode or another tool to visually explore through autocomplete all of the RPC endpoints available on the `RPCQueryClient`!

### Composing Messages

Import the `osmosis` object from `osmojs`.

In this case, we're show the messages available from the `osmosis.gamm.v1beta1` module:

```js
import { osmosis } from 'osmojs';

const {
    joinPool,
    exitPool,
    exitSwapExternAmountOut,
    exitSwapShareAmountIn,
    joinSwapExternAmountIn,
    joinSwapShareAmountOut,
    swapExactAmountIn,
    swapExactAmountOut
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
```

To see a complete list of messages, see all the messages below.

Now you can construct messages. If you use vscode or another typescript-enabled IDE, you should also be able to use `ctrl+space` to see auto-completion of the fields required for the message.

```js
import { coin } from '@cosmjs/amino';

const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

(If you want to see an example of calculating `routes` and `tokenOutMinAmount` cosmology uses osmojs and has an [example here](https://github.com/cosmology-tech/cosmology/tree/main/packages/core#lookuproutesfortrade).)


### Lockup Messages

```js
import { osmosis } from 'osmojs';
const {
    beginUnlocking,
    beginUnlockingAll,
    lockTokens
} = osmosis.lockup.MessageComposer.withTypeUrl;
```

### Superfluid Messages

```js
import { osmosis } from 'osmojs';
const {
    lockAndSuperfluidDelegate,
    superfluidDelegate,
    superfluidUnbondLock,
    superfluidUndelegate
} = osmosis.superfluid.MessageComposer.withTypeUrl;
```

### Incentives Messages

```js
import { osmosis } from 'osmojs';
const {
    addToGauge,
    createGauge
} = osmosis.incentives.MessageComposer.withTypeUrl;
```

### Gamm Messages

```js
import { osmosis } from 'osmojs';
const {
    joinPool,
    exitPool,
    exitSwapExternAmountOut,
    exitSwapShareAmountIn,
    joinSwapExternAmountIn,
    joinSwapShareAmountOut,
    swapExactAmountIn,
    swapExactAmountOut
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
```

### CosmWasm Messages

```js
import { cosmwasm } from "osmojs";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages
```js
import { ibc } from 'osmojs';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from 'osmojs';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

### Calculating Fees

Make sure to create a `fee` object in addition to your message.

For most messages, you can use the predefined fee objects.

```ts
import { FEES } from 'osmojs';

const fee = FEES.osmosis.swapExactAmountIn();
```

You can also specify `low`, `medium`, or `high` for fees:

```ts
const fee = FEES.osmosis.swapExactAmountIn('low');
const fee = FEES.osmosis.swapExactAmountIn('medium');
const fee = FEES.osmosis.swapExactAmountIn('high');
```

Or you can construct manually if you wish:

```js
import { coins } from '@cosmjs/amino';

const fee = {
    amount: coins(0, 'uosmo'),
    gas: '250000'
}
```

if you are broadcasting multiple messages in a batch, you should `simulate` your tx and estimate the fee

```js
import { Dec, IntPretty } from '@keplr-wallet/unit';

const gasEstimated = await stargateClient.simulate(address, msgs, memo);
const fee = {
  amount: coins(0, 'uosmo'),
  gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))
    .maxDecimals(0)
    .locale(false)
    .toString()
};
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningOsmosisClient } from 'osmojs';

const client = await getSigningOsmosisClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'uosmo',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'uosmo',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    osmosisAminoConverters,
    osmosisProtoRegistry
} from 'osmojs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpoint = 'https://rpc.cosmos.directory/osmosis'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...osmosisProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...osmosisAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Developing

When first cloning the repo:

```
yarn
yarn bootstrap
yarn build
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `osmojs`:

```
yarn codegen
```

### Publishing

Build the types and then publish:

```
yarn build:ts
yarn publish
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
