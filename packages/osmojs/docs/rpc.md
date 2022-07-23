# RPC Clients

You can generate RPC classes with the `includeRpcClients` option in [telescope](https://github.com/osmosis-labs/telescope).

For any module that has a `Msg`, `Query` or `Service` type, a 

```js
import { osmosis, cosmos } from 'osmojs';

const MsgClient = osmosis.gamm.v1beta1.MsgClientImpl;
const QueryClient = osmosis.gamm.v1beta1.QueryClientImpl;
const ServiceClient = cosmos.base.tendermint.v1beta1.ServiceClientImpl;
```

Here is an example of making a query

```js
import { osmosis } from "osmojs";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

export const main = async () => {
    const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT);
    const QueryClientImpl = osmosis.gamm.v1beta1.QueryClientImpl;
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    const queryService = new QueryClientImpl(rpc);
    const pools = await queryService.pools({})
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})
```
