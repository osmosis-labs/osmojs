import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
};
