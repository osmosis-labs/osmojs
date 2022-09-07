import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
