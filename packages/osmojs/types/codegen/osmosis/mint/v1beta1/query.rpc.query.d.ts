import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
};
