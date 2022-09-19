import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAppVersionRequest, QueryAppVersionResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType>;
};
