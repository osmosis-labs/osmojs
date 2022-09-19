import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponseSDKType>;
}
