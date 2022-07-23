# LCD Clients

You can generate RPC classes with the `includeLCDClient` option in [telescope](https://github.com/osmosis-labs/telescope).

For any module that has a `Query` type, there will be a `LCDQueryClient` object:

```js
import { osmosis } from "osmojs";

export const main = async () => {
    const LCDClient = osmosis.gamm.v1beta1.LCDQueryClient;
    const client = new LCDClient({ restEndpoint: REST_ENDPOINT });
    const pools = await client.pools();
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})
```