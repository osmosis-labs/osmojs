import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
};
