import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
    /** Pools returns all concentrated liquidity pools */
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Pool returns the Pool specified by the pool id */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Params returns concentrated liquidity module params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
