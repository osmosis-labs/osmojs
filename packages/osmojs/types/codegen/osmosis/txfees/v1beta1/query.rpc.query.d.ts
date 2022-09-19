import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
};
