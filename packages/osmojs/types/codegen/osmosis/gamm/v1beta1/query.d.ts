import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: Long;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
    poolId: Long;
}
export interface QueryPoolResponse {
    pool: Any;
}
export interface QueryPoolResponseSDKType {
    pool: AnySDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsResponseSDKType {
    pools: AnySDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {
}
export interface QueryNumPoolsResponse {
    numPools: Long;
}
export interface QueryNumPoolsResponseSDKType {
    numPools: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    poolId: Long;
}
export interface QueryPoolParamsResponse {
    params: Any;
}
export interface QueryPoolParamsResponseSDKType {
    params: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: Long;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
    poolId: Long;
}
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: Long;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
    poolId: Long;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin;
}
export interface QueryTotalSharesResponseSDKType {
    totalShares: CoinSDKType;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom?: string;
    quoteAssetDenom?: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
    poolId: Long;
    base_asset_denom?: string;
    quote_asset_denom?: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    sender?: string;
    poolId: Long;
    tokenIn?: string;
    routes?: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
    sender?: string;
    poolId: Long;
    tokenIn?: string;
    routes?: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseSDKType {
    tokenOutAmount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    sender?: string;
    poolId: Long;
    routes?: SwapAmountOutRoute[];
    tokenOut?: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender?: string;
    poolId: Long;
    routes?: SwapAmountOutRouteSDKType[];
    tokenOut?: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseSDKType {
    tokenInAmount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityRequestSDKType {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
    fromSDK(object: QueryPoolRequestSDKType): QueryPoolRequest;
    toSDK(message: QueryPoolRequest): QueryPoolRequestSDKType;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponseSDKType;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
    fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse;
    toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest;
    fromSDK(object: QueryPoolsRequestSDKType): QueryPoolsRequest;
    toSDK(message: QueryPoolsRequest): QueryPoolsRequestSDKType;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponseSDKType;
    fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse;
    fromSDK(object: QueryPoolsResponseSDKType): QueryPoolsResponse;
    toSDK(message: QueryPoolsResponse): QueryPoolsResponseSDKType;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromPartial(_: DeepPartial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
    fromSDK(_: QueryNumPoolsRequestSDKType): QueryNumPoolsRequest;
    toSDK(_: QueryNumPoolsRequest): QueryNumPoolsRequestSDKType;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponseSDKType;
    fromPartial(object: DeepPartial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
    fromSDK(object: QueryNumPoolsResponseSDKType): QueryNumPoolsResponse;
    toSDK(message: QueryNumPoolsResponse): QueryNumPoolsResponseSDKType;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromPartial(object: DeepPartial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
    fromSDK(object: QueryPoolParamsRequestSDKType): QueryPoolParamsRequest;
    toSDK(message: QueryPoolParamsRequest): QueryPoolParamsRequestSDKType;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponseSDKType;
    fromPartial(object: DeepPartial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
    fromSDK(object: QueryPoolParamsResponseSDKType): QueryPoolParamsResponse;
    toSDK(message: QueryPoolParamsResponse): QueryPoolParamsResponseSDKType;
};
export declare const QueryTotalPoolLiquidityRequest: {
    encode(message: QueryTotalPoolLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromPartial(object: DeepPartial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
    fromSDK(object: QueryTotalPoolLiquidityRequestSDKType): QueryTotalPoolLiquidityRequest;
    toSDK(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestSDKType;
};
export declare const QueryTotalPoolLiquidityResponse: {
    encode(message: QueryTotalPoolLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponseSDKType;
    fromPartial(object: DeepPartial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
    fromSDK(object: QueryTotalPoolLiquidityResponseSDKType): QueryTotalPoolLiquidityResponse;
    toSDK(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseSDKType;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromPartial(object: DeepPartial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
    fromSDK(object: QueryTotalSharesRequestSDKType): QueryTotalSharesRequest;
    toSDK(message: QueryTotalSharesRequest): QueryTotalSharesRequestSDKType;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponseSDKType;
    fromPartial(object: DeepPartial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
    fromSDK(object: QueryTotalSharesResponseSDKType): QueryTotalSharesResponse;
    toSDK(message: QueryTotalSharesResponse): QueryTotalSharesResponseSDKType;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromPartial(object: DeepPartial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromSDK(object: QuerySpotPriceRequestSDKType): QuerySpotPriceRequest;
    toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponseSDKType;
    fromPartial(object: DeepPartial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
    fromSDK(object: QuerySpotPriceResponseSDKType): QuerySpotPriceResponse;
    toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType;
};
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromPartial(object: DeepPartial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
    fromSDK(object: QuerySwapExactAmountInRequestSDKType): QuerySwapExactAmountInRequest;
    toSDK(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestSDKType;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponseSDKType;
    fromPartial(object: DeepPartial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
    fromSDK(object: QuerySwapExactAmountInResponseSDKType): QuerySwapExactAmountInResponse;
    toSDK(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseSDKType;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromPartial(object: DeepPartial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
    fromSDK(object: QuerySwapExactAmountOutRequestSDKType): QuerySwapExactAmountOutRequest;
    toSDK(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestSDKType;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponseSDKType;
    fromPartial(object: DeepPartial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
    fromSDK(object: QuerySwapExactAmountOutResponseSDKType): QuerySwapExactAmountOutResponse;
    toSDK(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseSDKType;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromPartial(_: DeepPartial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
    fromSDK(_: QueryTotalLiquidityRequestSDKType): QueryTotalLiquidityRequest;
    toSDK(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestSDKType;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponseSDKType;
    fromPartial(object: DeepPartial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
    fromSDK(object: QueryTotalLiquidityResponseSDKType): QueryTotalLiquidityResponse;
    toSDK(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseSDKType;
};
