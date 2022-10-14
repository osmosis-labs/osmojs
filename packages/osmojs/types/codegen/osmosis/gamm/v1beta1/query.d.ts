import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: Long;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolResponse {
    pool?: Any;
}
export interface QueryPoolResponseSDKType {
    pool?: AnySDKType;
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
    num_pools: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
    poolId: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolTypeResponse {
    poolType: string;
}
export interface QueryPoolTypeResponseSDKType {
    pool_type: string;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolParamsResponse {
    params?: Any;
}
export interface QueryPoolParamsResponseSDKType {
    params?: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: Long;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
    pool_id: Long;
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
    pool_id: Long;
}
export interface QueryTotalSharesResponse {
    totalShares?: Coin;
}
export interface QueryTotalSharesResponseSDKType {
    total_shares?: CoinSDKType;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
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
    spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: Long;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: Long;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseSDKType {
    token_in_amount: string;
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
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
};
export declare const QueryPoolTypeRequest: {
    encode(message: QueryPoolTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeRequest;
    fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest;
};
export declare const QueryPoolTypeResponse: {
    encode(message: QueryPoolTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeResponse;
    fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
};
export declare const QueryTotalPoolLiquidityRequest: {
    encode(message: QueryTotalPoolLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
};
export declare const QueryTotalPoolLiquidityResponse: {
    encode(message: QueryTotalPoolLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse;
    fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
};
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
};
