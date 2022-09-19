import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
}
