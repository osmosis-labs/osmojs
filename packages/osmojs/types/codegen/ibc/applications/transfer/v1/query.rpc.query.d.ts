import { Rpc } from "@osmonauts/helpers";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType>;
    denomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType>;
    denomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
