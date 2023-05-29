import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../../concentrated-liquidity/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentrated-liquidity/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentrated-liquidity/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== Params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/poolmanager/params-request";
    value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/poolmanager/params-response";
    value: ParamsResponseAmino;
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
export interface EstimateSwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
    pool_id: string;
    token_in: string;
    routes: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-in-request";
    value: EstimateSwapExactAmountInRequestAmino;
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
export interface EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
    value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAmino {
    pool_id: string;
    token_in: string;
    token_out_denom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request";
    value: EstimateSinglePoolSwapExactAmountInRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
    pool_id: Long;
    token_in: string;
    token_out_denom: string;
}
export interface EstimateSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-in-response";
    value: EstimateSwapExactAmountInResponseAmino;
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
export interface EstimateSwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
    pool_id: string;
    routes: SwapAmountOutRouteAmino[];
    token_out: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-out-request";
    value: EstimateSwapExactAmountOutRequestAmino;
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
export interface EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
    value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAmino {
    pool_id: string;
    token_in_denom: string;
    token_out: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
    type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request";
    value: EstimateSinglePoolSwapExactAmountOutRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    pool_id: Long;
    token_in_denom: string;
    token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/poolmanager/estimate-swap-exact-amount-out-response";
    value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {
}
export interface NumPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest";
    value: Uint8Array;
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {
}
export interface NumPoolsRequestAminoMsg {
    type: "osmosis/poolmanager/num-pools-request";
    value: NumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {
}
export interface NumPoolsResponse {
    numPools: Long;
}
export interface NumPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse";
    value: Uint8Array;
}
export interface NumPoolsResponseAmino {
    num_pools: string;
}
export interface NumPoolsResponseAminoMsg {
    type: "osmosis/poolmanager/num-pools-response";
    value: NumPoolsResponseAmino;
}
export interface NumPoolsResponseSDKType {
    num_pools: Long;
}
/** =============================== Pool */
export interface PoolRequest {
    poolId: Long;
}
export interface PoolRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest";
    value: Uint8Array;
}
/** =============================== Pool */
export interface PoolRequestAmino {
    pool_id: string;
}
export interface PoolRequestAminoMsg {
    type: "osmosis/poolmanager/pool-request";
    value: PoolRequestAmino;
}
/** =============================== Pool */
export interface PoolRequestSDKType {
    pool_id: Long;
}
export interface PoolResponse {
    pool?: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any) | undefined;
}
export interface PoolResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse";
    value: Uint8Array;
}
export declare type PoolResponseEncoded = Omit<PoolResponse, "pool"> & {
    pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
export interface PoolResponseAmino {
    pool?: AnyAmino;
}
export interface PoolResponseAminoMsg {
    type: "osmosis/poolmanager/pool-response";
    value: PoolResponseAmino;
}
export interface PoolResponseSDKType {
    pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
}
/** =============================== AllPools */
export interface AllPoolsRequest {
    poolId: Long;
}
export interface AllPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest";
    value: Uint8Array;
}
/** =============================== AllPools */
export interface AllPoolsRequestAmino {
    pool_id: string;
}
export interface AllPoolsRequestAminoMsg {
    type: "osmosis/poolmanager/all-pools-request";
    value: AllPoolsRequestAmino;
}
/** =============================== AllPools */
export interface AllPoolsRequestSDKType {
    pool_id: Long;
}
export interface AllPoolsResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
}
export interface AllPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse";
    value: Uint8Array;
}
export declare type AllPoolsResponseEncoded = Omit<AllPoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface AllPoolsResponseAmino {
    pools: AnyAmino[];
}
export interface AllPoolsResponseAminoMsg {
    type: "osmosis/poolmanager/all-pools-response";
    value: AllPoolsResponseAmino;
}
export interface AllPoolsResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
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
export interface SpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest";
    value: Uint8Array;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
    pool_id: string;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface SpotPriceRequestAminoMsg {
    type: "osmosis/poolmanager/spot-price-request";
    value: SpotPriceRequestAmino;
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
export interface SpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse";
    value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
export interface SpotPriceResponseAminoMsg {
    type: "osmosis/poolmanager/spot-price-response";
    value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
    spot_price: string;
}
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const EstimateSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest;
    fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest;
    toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInRequestAminoMsg): EstimateSwapExactAmountInRequest;
    toAminoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInRequestProtoMsg): EstimateSwapExactAmountInRequest;
    toProto(message: EstimateSwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestProtoMsg;
};
export declare const EstimateSinglePoolSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountInRequest>): EstimateSinglePoolSwapExactAmountInRequest;
    fromAmino(object: EstimateSinglePoolSwapExactAmountInRequestAmino): EstimateSinglePoolSwapExactAmountInRequest;
    toAmino(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAmino;
    fromAminoMsg(object: EstimateSinglePoolSwapExactAmountInRequestAminoMsg): EstimateSinglePoolSwapExactAmountInRequest;
    toAminoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequestProtoMsg): EstimateSinglePoolSwapExactAmountInRequest;
    toProto(message: EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
};
export declare const EstimateSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse;
    fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse;
    toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse;
    toAminoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse;
    toProto(message: EstimateSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg;
};
export declare const EstimateSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest;
    fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest;
    toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest;
    toAminoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest;
    toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg;
};
export declare const EstimateSinglePoolSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest;
    fromPartial(object: Partial<EstimateSinglePoolSwapExactAmountOutRequest>): EstimateSinglePoolSwapExactAmountOutRequest;
    fromAmino(object: EstimateSinglePoolSwapExactAmountOutRequestAmino): EstimateSinglePoolSwapExactAmountOutRequest;
    toAmino(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAmino;
    fromAminoMsg(object: EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): EstimateSinglePoolSwapExactAmountOutRequest;
    toAminoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): EstimateSinglePoolSwapExactAmountOutRequest;
    toProto(message: EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
};
export declare const EstimateSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse;
    fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse;
    fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse;
    toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse;
    toAminoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse;
    toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg;
};
export declare const NumPoolsRequest: {
    typeUrl: string;
    encode(_: NumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsRequest;
    fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest;
    fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest;
    toAmino(_: NumPoolsRequest): NumPoolsRequestAmino;
    fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest;
    toAminoMsg(message: NumPoolsRequest): NumPoolsRequestAminoMsg;
    fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest;
    toProto(message: NumPoolsRequest): Uint8Array;
    toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg;
};
export declare const NumPoolsResponse: {
    typeUrl: string;
    encode(message: NumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsResponse;
    fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse;
    fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse;
    toAmino(message: NumPoolsResponse): NumPoolsResponseAmino;
    fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse;
    toAminoMsg(message: NumPoolsResponse): NumPoolsResponseAminoMsg;
    fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse;
    toProto(message: NumPoolsResponse): Uint8Array;
    toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg;
};
export declare const PoolRequest: {
    typeUrl: string;
    encode(message: PoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolRequest;
    fromPartial(object: Partial<PoolRequest>): PoolRequest;
    fromAmino(object: PoolRequestAmino): PoolRequest;
    toAmino(message: PoolRequest): PoolRequestAmino;
    fromAminoMsg(object: PoolRequestAminoMsg): PoolRequest;
    toAminoMsg(message: PoolRequest): PoolRequestAminoMsg;
    fromProtoMsg(message: PoolRequestProtoMsg): PoolRequest;
    toProto(message: PoolRequest): Uint8Array;
    toProtoMsg(message: PoolRequest): PoolRequestProtoMsg;
};
export declare const PoolResponse: {
    typeUrl: string;
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
    fromAmino(object: PoolResponseAmino): PoolResponse;
    toAmino(message: PoolResponse): PoolResponseAmino;
    fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse;
    toAminoMsg(message: PoolResponse): PoolResponseAminoMsg;
    fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse;
    toProto(message: PoolResponse): Uint8Array;
    toProtoMsg(message: PoolResponse): PoolResponseProtoMsg;
};
export declare const AllPoolsRequest: {
    typeUrl: string;
    encode(message: AllPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllPoolsRequest;
    fromPartial(object: Partial<AllPoolsRequest>): AllPoolsRequest;
    fromAmino(object: AllPoolsRequestAmino): AllPoolsRequest;
    toAmino(message: AllPoolsRequest): AllPoolsRequestAmino;
    fromAminoMsg(object: AllPoolsRequestAminoMsg): AllPoolsRequest;
    toAminoMsg(message: AllPoolsRequest): AllPoolsRequestAminoMsg;
    fromProtoMsg(message: AllPoolsRequestProtoMsg): AllPoolsRequest;
    toProto(message: AllPoolsRequest): Uint8Array;
    toProtoMsg(message: AllPoolsRequest): AllPoolsRequestProtoMsg;
};
export declare const AllPoolsResponse: {
    typeUrl: string;
    encode(message: AllPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllPoolsResponse;
    fromPartial(object: Partial<AllPoolsResponse>): AllPoolsResponse;
    fromAmino(object: AllPoolsResponseAmino): AllPoolsResponse;
    toAmino(message: AllPoolsResponse): AllPoolsResponseAmino;
    fromAminoMsg(object: AllPoolsResponseAminoMsg): AllPoolsResponse;
    toAminoMsg(message: AllPoolsResponse): AllPoolsResponseAminoMsg;
    fromProtoMsg(message: AllPoolsResponseProtoMsg): AllPoolsResponse;
    toProto(message: AllPoolsResponse): Uint8Array;
    toProtoMsg(message: AllPoolsResponse): AllPoolsResponseProtoMsg;
};
export declare const SpotPriceRequest: {
    typeUrl: string;
    encode(message: SpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceRequest;
    fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest;
    fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest;
    toAmino(message: SpotPriceRequest): SpotPriceRequestAmino;
    fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest;
    toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg;
    fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest;
    toProto(message: SpotPriceRequest): Uint8Array;
    toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg;
};
export declare const SpotPriceResponse: {
    typeUrl: string;
    encode(message: SpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceResponse;
    fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse;
    fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse;
    toAmino(message: SpotPriceResponse): SpotPriceResponseAmino;
    fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse;
    toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg;
    fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse;
    toProto(message: SpotPriceResponse): Uint8Array;
    toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
