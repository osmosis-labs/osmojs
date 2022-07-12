# OsmoJS 
## usage

```sh
npm install osmojs
```

### Composing Messages

Import the `osmosis` object from `osmojs`. In this case, we're show the messages available from the `osmosis.gamm.v1beta1` module:

```js
import { coin, coins } from '@cosmjs/amino';
import { osmosis, FEE_VALUES } from 'osmojs';

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

Now you can construct messages. If you use vscode or another typescript-enabled IDE, you should also be able to use `ctrl+space` to see auto-completion of the fields required for the message.

```js
const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

Make sure to create a `fee` object in addition to your message.

```ts
const fee = FEE_VALUES.osmosis.swapExactAmountIn;
```

Or you can construct manually if you wish:

```js
const fee = {
    amount: coins(0, 'uosmo'),
    gas: '250000'
}
```

or you can also use our helper
### Initializing the Stargate Client

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningOsmosisClient } from 'osmojs';
import { SigningStargateClient } from "@cosmjs/stargate";

const client: SigningStargateClient = await getSigningOsmosisClient({
  rpcEndpoint: rpcEndpoint,
  signer // OfflineSigner
});
```
### Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
import { signAndBroadcast } from 'osmojs';

const res = await signAndBroadcast({
  client,
  chainId: 'osmosis-1',
  address,
  msgs: [msg],
  fee,
  memo: ''
});
```

### Advanced Usage

[documentation](https://github.com/osmosis-labs/telescope/tree/master/packages/osmojs/docs)

## Disclaimer

AS DESCRIBED IN THE OSMOSIS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
