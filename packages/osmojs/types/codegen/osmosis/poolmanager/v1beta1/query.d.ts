import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== Params */
export interface ParamsRequest {
}
/** =============================== Params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
    pool_id: Long;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSinglePoolSwapExactAmountInRequest {
    poolId: Long;
    tokenIn: string;
    tokenOutDenom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
    pool_id: Long;
    token_in: string;
    token_out_denom: string;
}
export interface EstimateSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
    pool_id: Long;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequest {
    poolId: Long;
    tokenInDenom: string;
    tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    pool_id: Long;
    token_in_denom: string;
    token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {
}
export interface NumPoolsResponse {
    numPools: Long;
}
export interface NumPoolsResponseSDKType {
    num_pools: Long;
}
/** =============================== Pool */
export interface PoolRequest {
    poolId: Long;
}
/** =============================== Pool */
export interface PoolRequestSDKType {
    pool_id: Long;
}
export interface PoolResponse {
    pool?: Any;
}
export interface PoolResponseSDKType {
    pool?: AnySDKType;
}
/** =============================== AllPools */
export interface AllPoolsRequest {
    poolId: Long;
}
/** =============================== AllPools */
export interface AllPoolsRequestSDKType {
    pool_id: Long;
}
export interface AllPoolsResponse {
    pools: Any[];
}
export interface AllPoolsResponseSDKType {
    pools: AnySDKType[];
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
export declare const EstimateSwapExactAmountInRequest: {
    encode(message: EstimateSwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest;
};
export declare const EstimateSinglePoolSwapExactAmountInRequest: {
    encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountInRequest>): EstimateSinglePoolSwapExactAmountInRequest;
};
export declare const EstimateSwapExactAmountInResponse: {
    encode(message: EstimateSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse;
};
export declare const EstimateSwapExactAmountOutRequest: {
    encode(message: EstimateSwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest;
};
export declare const EstimateSinglePoolSwapExactAmountOutRequest: {
    encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountOutRequest>): EstimateSinglePoolSwapExactAmountOutRequest;
};
export declare const EstimateSwapExactAmountOutResponse: {
    encode(message: EstimateSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse;
};
export declare const NumPoolsRequest: {
    encode(_: NumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsRequest;
    fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest;
};
export declare const NumPoolsResponse: {
    encode(message: NumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsResponse;
    fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse;
};
export declare const PoolRequest: {
    encode(message: PoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolRequest;
    fromPartial(object: Partial<PoolRequest>): PoolRequest;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
};
export declare const AllPoolsRequest: {
    encode(message: AllPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllPoolsRequest;
    fromPartial(object: Partial<AllPoolsRequest>): AllPoolsRequest;
};
export declare const AllPoolsResponse: {
    encode(message: AllPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllPoolsResponse;
    fromPartial(object: Partial<AllPoolsResponse>): AllPoolsResponse;
};
export declare const SpotPriceRequest: {
    encode(message: SpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceRequest;
    fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest;
};
export declare const SpotPriceResponse: {
    encode(message: SpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceResponse;
    fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse;
};
