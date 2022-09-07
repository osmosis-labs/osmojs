import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(params?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
