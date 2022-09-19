import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
};
