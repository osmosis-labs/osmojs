import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== UserPositions */
export interface QueryUserPositionsRequest {
    address: string;
    poolId: Long;
}
/** =============================== UserPositions */
export interface QueryUserPositionsRequestSDKType {
    address: string;
    pool_id: Long;
}
export interface QueryUserPositionsResponse {
    positions: PositionWithUnderlyingAssetBreakdown[];
}
export interface QueryUserPositionsResponseSDKType {
    positions: PositionWithUnderlyingAssetBreakdownSDKType[];
}
/** =============================== PositionById */
export interface QueryPositionByIdRequest {
    positionId: Long;
}
/** =============================== PositionById */
export interface QueryPositionByIdRequestSDKType {
    position_id: Long;
}
export interface QueryPositionByIdResponse {
    position?: PositionWithUnderlyingAssetBreakdown;
}
export interface QueryPositionByIdResponseSDKType {
    position?: PositionWithUnderlyingAssetBreakdownSDKType;
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
/** =============================== ModuleParams */
export interface QueryParamsRequest {
}
/** =============================== ModuleParams */
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** =============================== LiquidityDepthsForRange */
export interface QueryLiquidityDepthsForRangeRequest {
    poolId: Long;
    lowerTick: string;
    upperTick: string;
}
/** =============================== LiquidityDepthsForRange */
export interface QueryLiquidityDepthsForRangeRequestSDKType {
    pool_id: Long;
    lower_tick: string;
    upper_tick: string;
}
export interface QueryLiquidityDepthsForRangeResponse {
    liquidityDepths: LiquidityDepth[];
}
export interface QueryLiquidityDepthsForRangeResponseSDKType {
    liquidity_depths: LiquidityDepthSDKType[];
}
export interface LiquidityDepth {
    liquidityNet: string;
    tickIndex: string;
}
export interface LiquidityDepthSDKType {
    liquidity_net: string;
    tick_index: string;
}
export interface LiquidityDepthWithRange {
    liquidityAmount: string;
    lowerTick: string;
    upperTick: string;
}
export interface LiquidityDepthWithRangeSDKType {
    liquidity_amount: string;
    lower_tick: string;
    upper_tick: string;
}
/** =============================== TickLiquidityInBatches */
export interface QueryTotalLiquidityForRangeRequest {
    poolId: Long;
}
/** =============================== TickLiquidityInBatches */
export interface QueryTotalLiquidityForRangeRequestSDKType {
    pool_id: Long;
}
export interface QueryTotalLiquidityForRangeResponse {
    liquidity: LiquidityDepthWithRange[];
}
export interface QueryTotalLiquidityForRangeResponseSDKType {
    liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequest {
    positionId: Long;
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequestSDKType {
    position_id: Long;
}
export interface QueryClaimableFeesResponse {
    claimableFees: Coin[];
}
export interface QueryClaimableFeesResponseSDKType {
    claimable_fees: CoinSDKType[];
}
export declare const QueryUserPositionsRequest: {
    encode(message: QueryUserPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsRequest;
    fromPartial(object: Partial<QueryUserPositionsRequest>): QueryUserPositionsRequest;
};
export declare const QueryUserPositionsResponse: {
    encode(message: QueryUserPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsResponse;
    fromPartial(object: Partial<QueryUserPositionsResponse>): QueryUserPositionsResponse;
};
export declare const QueryPositionByIdRequest: {
    encode(message: QueryPositionByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdRequest;
    fromPartial(object: Partial<QueryPositionByIdRequest>): QueryPositionByIdRequest;
};
export declare const QueryPositionByIdResponse: {
    encode(message: QueryPositionByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdResponse;
    fromPartial(object: Partial<QueryPositionByIdResponse>): QueryPositionByIdResponse;
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryLiquidityDepthsForRangeRequest: {
    encode(message: QueryLiquidityDepthsForRangeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityDepthsForRangeRequest;
    fromPartial(object: Partial<QueryLiquidityDepthsForRangeRequest>): QueryLiquidityDepthsForRangeRequest;
};
export declare const QueryLiquidityDepthsForRangeResponse: {
    encode(message: QueryLiquidityDepthsForRangeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityDepthsForRangeResponse;
    fromPartial(object: Partial<QueryLiquidityDepthsForRangeResponse>): QueryLiquidityDepthsForRangeResponse;
};
export declare const LiquidityDepth: {
    encode(message: LiquidityDepth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityDepth;
    fromPartial(object: Partial<LiquidityDepth>): LiquidityDepth;
};
export declare const LiquidityDepthWithRange: {
    encode(message: LiquidityDepthWithRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityDepthWithRange;
    fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange;
};
export declare const QueryTotalLiquidityForRangeRequest: {
    encode(message: QueryTotalLiquidityForRangeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeRequest;
    fromPartial(object: Partial<QueryTotalLiquidityForRangeRequest>): QueryTotalLiquidityForRangeRequest;
};
export declare const QueryTotalLiquidityForRangeResponse: {
    encode(message: QueryTotalLiquidityForRangeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeResponse;
    fromPartial(object: Partial<QueryTotalLiquidityForRangeResponse>): QueryTotalLiquidityForRangeResponse;
};
export declare const QueryClaimableFeesRequest: {
    encode(message: QueryClaimableFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesRequest;
    fromPartial(object: Partial<QueryClaimableFeesRequest>): QueryClaimableFeesRequest;
};
export declare const QueryClaimableFeesResponse: {
    encode(message: QueryClaimableFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesResponse;
    fromPartial(object: Partial<QueryClaimableFeesResponse>): QueryClaimableFeesResponse;
};
