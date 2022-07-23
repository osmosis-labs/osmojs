import { Rpc } from "@osmonauts/helpers";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
