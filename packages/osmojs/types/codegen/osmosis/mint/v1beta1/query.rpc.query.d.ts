import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    epochProvisions(request: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponseSDKType>;
}
