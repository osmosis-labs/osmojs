import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownAmino, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "../params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Pool as Pool1 } from "../pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../pool";
import { PoolSDKType as Pool1SDKType } from "../pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== UserPositions */
export interface QueryUserPositionsRequest {
    address: string;
    poolId: Long;
}
export interface QueryUserPositionsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryUserPositionsRequest";
    value: Uint8Array;
}
/** =============================== UserPositions */
export interface QueryUserPositionsRequestAmino {
    address: string;
    pool_id: string;
}
export interface QueryUserPositionsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-user-positions-request";
    value: QueryUserPositionsRequestAmino;
}
/** =============================== UserPositions */
export interface QueryUserPositionsRequestSDKType {
    address: string;
    pool_id: Long;
}
export interface QueryUserPositionsResponse {
    positions: PositionWithUnderlyingAssetBreakdown[];
}
export interface QueryUserPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryUserPositionsResponse";
    value: Uint8Array;
}
export interface QueryUserPositionsResponseAmino {
    positions: PositionWithUnderlyingAssetBreakdownAmino[];
}
export interface QueryUserPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-user-positions-response";
    value: QueryUserPositionsResponseAmino;
}
export interface QueryUserPositionsResponseSDKType {
    positions: PositionWithUnderlyingAssetBreakdownSDKType[];
}
/** =============================== PositionById */
export interface QueryPositionByIdRequest {
    positionId: Long;
}
export interface QueryPositionByIdRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryPositionByIdRequest";
    value: Uint8Array;
}
/** =============================== PositionById */
export interface QueryPositionByIdRequestAmino {
    position_id: string;
}
export interface QueryPositionByIdRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-position-by-id-request";
    value: QueryPositionByIdRequestAmino;
}
/** =============================== PositionById */
export interface QueryPositionByIdRequestSDKType {
    position_id: Long;
}
export interface QueryPositionByIdResponse {
    position?: PositionWithUnderlyingAssetBreakdown;
}
export interface QueryPositionByIdResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryPositionByIdResponse";
    value: Uint8Array;
}
export interface QueryPositionByIdResponseAmino {
    position?: PositionWithUnderlyingAssetBreakdownAmino;
}
export interface QueryPositionByIdResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-position-by-id-response";
    value: QueryPositionByIdResponseAmino;
}
export interface QueryPositionByIdResponseSDKType {
    position?: PositionWithUnderlyingAssetBreakdownSDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryPoolsRequest";
    value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-pools-request";
    value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryPoolsResponse";
    value: Uint8Array;
}
export declare type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-pools-response";
    value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
    pagination?: PageResponseSDKType;
}
/** =============================== ModuleParams */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** =============================== ModuleParams */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-params-request";
    value: QueryParamsRequestAmino;
}
/** =============================== ModuleParams */
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface TickLiquidityNet {
    liquidityNet: string;
    tickIndex: string;
}
export interface TickLiquidityNetProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet";
    value: Uint8Array;
}
export interface TickLiquidityNetAmino {
    liquidity_net: string;
    tick_index: string;
}
export interface TickLiquidityNetAminoMsg {
    type: "osmosis/concentratedliquidity/tick-liquidity-net";
    value: TickLiquidityNetAmino;
}
export interface TickLiquidityNetSDKType {
    liquidity_net: string;
    tick_index: string;
}
export interface LiquidityDepthWithRange {
    liquidityAmount: string;
    lowerTick: string;
    upperTick: string;
}
export interface LiquidityDepthWithRangeProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange";
    value: Uint8Array;
}
export interface LiquidityDepthWithRangeAmino {
    liquidity_amount: string;
    lower_tick: string;
    upper_tick: string;
}
export interface LiquidityDepthWithRangeAminoMsg {
    type: "osmosis/concentratedliquidity/liquidity-depth-with-range";
    value: LiquidityDepthWithRangeAmino;
}
export interface LiquidityDepthWithRangeSDKType {
    liquidity_amount: string;
    lower_tick: string;
    upper_tick: string;
}
/** =============================== LiquidityNetInDirection */
export interface QueryLiquidityNetInDirectionRequest {
    poolId: Long;
    tokenIn: string;
    startTick: string;
    boundTick: string;
}
export interface QueryLiquidityNetInDirectionRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryLiquidityNetInDirectionRequest";
    value: Uint8Array;
}
/** =============================== LiquidityNetInDirection */
export interface QueryLiquidityNetInDirectionRequestAmino {
    pool_id: string;
    token_in: string;
    start_tick: string;
    bound_tick: string;
}
export interface QueryLiquidityNetInDirectionRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-liquidity-net-in-direction-request";
    value: QueryLiquidityNetInDirectionRequestAmino;
}
/** =============================== LiquidityNetInDirection */
export interface QueryLiquidityNetInDirectionRequestSDKType {
    pool_id: Long;
    token_in: string;
    start_tick: string;
    bound_tick: string;
}
export interface QueryLiquidityNetInDirectionResponse {
    liquidityDepths: TickLiquidityNet[];
    currentTick: Long;
    currentLiquidity: string;
}
export interface QueryLiquidityNetInDirectionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryLiquidityNetInDirectionResponse";
    value: Uint8Array;
}
export interface QueryLiquidityNetInDirectionResponseAmino {
    liquidity_depths: TickLiquidityNetAmino[];
    current_tick: string;
    current_liquidity: string;
}
export interface QueryLiquidityNetInDirectionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-liquidity-net-in-direction-response";
    value: QueryLiquidityNetInDirectionResponseAmino;
}
export interface QueryLiquidityNetInDirectionResponseSDKType {
    liquidity_depths: TickLiquidityNetSDKType[];
    current_tick: Long;
    current_liquidity: string;
}
/** =============================== TotalLiquidityForRange */
export interface QueryTotalLiquidityForRangeRequest {
    poolId: Long;
}
export interface QueryTotalLiquidityForRangeRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryTotalLiquidityForRangeRequest";
    value: Uint8Array;
}
/** =============================== TotalLiquidityForRange */
export interface QueryTotalLiquidityForRangeRequestAmino {
    pool_id: string;
}
export interface QueryTotalLiquidityForRangeRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-total-liquidity-for-range-request";
    value: QueryTotalLiquidityForRangeRequestAmino;
}
/** =============================== TotalLiquidityForRange */
export interface QueryTotalLiquidityForRangeRequestSDKType {
    pool_id: Long;
}
export interface QueryTotalLiquidityForRangeResponse {
    liquidity: LiquidityDepthWithRange[];
}
export interface QueryTotalLiquidityForRangeResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryTotalLiquidityForRangeResponse";
    value: Uint8Array;
}
export interface QueryTotalLiquidityForRangeResponseAmino {
    liquidity: LiquidityDepthWithRangeAmino[];
}
export interface QueryTotalLiquidityForRangeResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-total-liquidity-for-range-response";
    value: QueryTotalLiquidityForRangeResponseAmino;
}
export interface QueryTotalLiquidityForRangeResponseSDKType {
    liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequest {
    positionId: Long;
}
export interface QueryClaimableFeesRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryClaimableFeesRequest";
    value: Uint8Array;
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequestAmino {
    position_id: string;
}
export interface QueryClaimableFeesRequestAminoMsg {
    type: "osmosis/concentratedliquidity/query-claimable-fees-request";
    value: QueryClaimableFeesRequestAmino;
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequestSDKType {
    position_id: Long;
}
export interface QueryClaimableFeesResponse {
    claimableFees: Coin[];
}
export interface QueryClaimableFeesResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.QueryClaimableFeesResponse";
    value: Uint8Array;
}
export interface QueryClaimableFeesResponseAmino {
    claimable_fees: CoinAmino[];
}
export interface QueryClaimableFeesResponseAminoMsg {
    type: "osmosis/concentratedliquidity/query-claimable-fees-response";
    value: QueryClaimableFeesResponseAmino;
}
export interface QueryClaimableFeesResponseSDKType {
    claimable_fees: CoinSDKType[];
}
export declare const QueryUserPositionsRequest: {
    typeUrl: string;
    encode(message: QueryUserPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsRequest;
    fromPartial(object: Partial<QueryUserPositionsRequest>): QueryUserPositionsRequest;
    fromAmino(object: QueryUserPositionsRequestAmino): QueryUserPositionsRequest;
    toAmino(message: QueryUserPositionsRequest): QueryUserPositionsRequestAmino;
    fromAminoMsg(object: QueryUserPositionsRequestAminoMsg): QueryUserPositionsRequest;
    toAminoMsg(message: QueryUserPositionsRequest): QueryUserPositionsRequestAminoMsg;
    fromProtoMsg(message: QueryUserPositionsRequestProtoMsg): QueryUserPositionsRequest;
    toProto(message: QueryUserPositionsRequest): Uint8Array;
    toProtoMsg(message: QueryUserPositionsRequest): QueryUserPositionsRequestProtoMsg;
};
export declare const QueryUserPositionsResponse: {
    typeUrl: string;
    encode(message: QueryUserPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsResponse;
    fromPartial(object: Partial<QueryUserPositionsResponse>): QueryUserPositionsResponse;
    fromAmino(object: QueryUserPositionsResponseAmino): QueryUserPositionsResponse;
    toAmino(message: QueryUserPositionsResponse): QueryUserPositionsResponseAmino;
    fromAminoMsg(object: QueryUserPositionsResponseAminoMsg): QueryUserPositionsResponse;
    toAminoMsg(message: QueryUserPositionsResponse): QueryUserPositionsResponseAminoMsg;
    fromProtoMsg(message: QueryUserPositionsResponseProtoMsg): QueryUserPositionsResponse;
    toProto(message: QueryUserPositionsResponse): Uint8Array;
    toProtoMsg(message: QueryUserPositionsResponse): QueryUserPositionsResponseProtoMsg;
};
export declare const QueryPositionByIdRequest: {
    typeUrl: string;
    encode(message: QueryPositionByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdRequest;
    fromPartial(object: Partial<QueryPositionByIdRequest>): QueryPositionByIdRequest;
    fromAmino(object: QueryPositionByIdRequestAmino): QueryPositionByIdRequest;
    toAmino(message: QueryPositionByIdRequest): QueryPositionByIdRequestAmino;
    fromAminoMsg(object: QueryPositionByIdRequestAminoMsg): QueryPositionByIdRequest;
    toAminoMsg(message: QueryPositionByIdRequest): QueryPositionByIdRequestAminoMsg;
    fromProtoMsg(message: QueryPositionByIdRequestProtoMsg): QueryPositionByIdRequest;
    toProto(message: QueryPositionByIdRequest): Uint8Array;
    toProtoMsg(message: QueryPositionByIdRequest): QueryPositionByIdRequestProtoMsg;
};
export declare const QueryPositionByIdResponse: {
    typeUrl: string;
    encode(message: QueryPositionByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdResponse;
    fromPartial(object: Partial<QueryPositionByIdResponse>): QueryPositionByIdResponse;
    fromAmino(object: QueryPositionByIdResponseAmino): QueryPositionByIdResponse;
    toAmino(message: QueryPositionByIdResponse): QueryPositionByIdResponseAmino;
    fromAminoMsg(object: QueryPositionByIdResponseAminoMsg): QueryPositionByIdResponse;
    toAminoMsg(message: QueryPositionByIdResponse): QueryPositionByIdResponseAminoMsg;
    fromProtoMsg(message: QueryPositionByIdResponseProtoMsg): QueryPositionByIdResponse;
    toProto(message: QueryPositionByIdResponse): Uint8Array;
    toProtoMsg(message: QueryPositionByIdResponse): QueryPositionByIdResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    toAminoMsg(message: QueryPoolsRequest): QueryPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    toAminoMsg(message: QueryPoolsResponse): QueryPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const TickLiquidityNet: {
    typeUrl: string;
    encode(message: TickLiquidityNet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickLiquidityNet;
    fromPartial(object: Partial<TickLiquidityNet>): TickLiquidityNet;
    fromAmino(object: TickLiquidityNetAmino): TickLiquidityNet;
    toAmino(message: TickLiquidityNet): TickLiquidityNetAmino;
    fromAminoMsg(object: TickLiquidityNetAminoMsg): TickLiquidityNet;
    toAminoMsg(message: TickLiquidityNet): TickLiquidityNetAminoMsg;
    fromProtoMsg(message: TickLiquidityNetProtoMsg): TickLiquidityNet;
    toProto(message: TickLiquidityNet): Uint8Array;
    toProtoMsg(message: TickLiquidityNet): TickLiquidityNetProtoMsg;
};
export declare const LiquidityDepthWithRange: {
    typeUrl: string;
    encode(message: LiquidityDepthWithRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityDepthWithRange;
    fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange;
    fromAmino(object: LiquidityDepthWithRangeAmino): LiquidityDepthWithRange;
    toAmino(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAmino;
    fromAminoMsg(object: LiquidityDepthWithRangeAminoMsg): LiquidityDepthWithRange;
    toAminoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAminoMsg;
    fromProtoMsg(message: LiquidityDepthWithRangeProtoMsg): LiquidityDepthWithRange;
    toProto(message: LiquidityDepthWithRange): Uint8Array;
    toProtoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeProtoMsg;
};
export declare const QueryLiquidityNetInDirectionRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityNetInDirectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityNetInDirectionRequest;
    fromPartial(object: Partial<QueryLiquidityNetInDirectionRequest>): QueryLiquidityNetInDirectionRequest;
    fromAmino(object: QueryLiquidityNetInDirectionRequestAmino): QueryLiquidityNetInDirectionRequest;
    toAmino(message: QueryLiquidityNetInDirectionRequest): QueryLiquidityNetInDirectionRequestAmino;
    fromAminoMsg(object: QueryLiquidityNetInDirectionRequestAminoMsg): QueryLiquidityNetInDirectionRequest;
    toAminoMsg(message: QueryLiquidityNetInDirectionRequest): QueryLiquidityNetInDirectionRequestAminoMsg;
    fromProtoMsg(message: QueryLiquidityNetInDirectionRequestProtoMsg): QueryLiquidityNetInDirectionRequest;
    toProto(message: QueryLiquidityNetInDirectionRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityNetInDirectionRequest): QueryLiquidityNetInDirectionRequestProtoMsg;
};
export declare const QueryLiquidityNetInDirectionResponse: {
    typeUrl: string;
    encode(message: QueryLiquidityNetInDirectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityNetInDirectionResponse;
    fromPartial(object: Partial<QueryLiquidityNetInDirectionResponse>): QueryLiquidityNetInDirectionResponse;
    fromAmino(object: QueryLiquidityNetInDirectionResponseAmino): QueryLiquidityNetInDirectionResponse;
    toAmino(message: QueryLiquidityNetInDirectionResponse): QueryLiquidityNetInDirectionResponseAmino;
    fromAminoMsg(object: QueryLiquidityNetInDirectionResponseAminoMsg): QueryLiquidityNetInDirectionResponse;
    toAminoMsg(message: QueryLiquidityNetInDirectionResponse): QueryLiquidityNetInDirectionResponseAminoMsg;
    fromProtoMsg(message: QueryLiquidityNetInDirectionResponseProtoMsg): QueryLiquidityNetInDirectionResponse;
    toProto(message: QueryLiquidityNetInDirectionResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidityNetInDirectionResponse): QueryLiquidityNetInDirectionResponseProtoMsg;
};
export declare const QueryTotalLiquidityForRangeRequest: {
    typeUrl: string;
    encode(message: QueryTotalLiquidityForRangeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeRequest;
    fromPartial(object: Partial<QueryTotalLiquidityForRangeRequest>): QueryTotalLiquidityForRangeRequest;
    fromAmino(object: QueryTotalLiquidityForRangeRequestAmino): QueryTotalLiquidityForRangeRequest;
    toAmino(message: QueryTotalLiquidityForRangeRequest): QueryTotalLiquidityForRangeRequestAmino;
    fromAminoMsg(object: QueryTotalLiquidityForRangeRequestAminoMsg): QueryTotalLiquidityForRangeRequest;
    toAminoMsg(message: QueryTotalLiquidityForRangeRequest): QueryTotalLiquidityForRangeRequestAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityForRangeRequestProtoMsg): QueryTotalLiquidityForRangeRequest;
    toProto(message: QueryTotalLiquidityForRangeRequest): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityForRangeRequest): QueryTotalLiquidityForRangeRequestProtoMsg;
};
export declare const QueryTotalLiquidityForRangeResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidityForRangeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeResponse;
    fromPartial(object: Partial<QueryTotalLiquidityForRangeResponse>): QueryTotalLiquidityForRangeResponse;
    fromAmino(object: QueryTotalLiquidityForRangeResponseAmino): QueryTotalLiquidityForRangeResponse;
    toAmino(message: QueryTotalLiquidityForRangeResponse): QueryTotalLiquidityForRangeResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidityForRangeResponseAminoMsg): QueryTotalLiquidityForRangeResponse;
    toAminoMsg(message: QueryTotalLiquidityForRangeResponse): QueryTotalLiquidityForRangeResponseAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityForRangeResponseProtoMsg): QueryTotalLiquidityForRangeResponse;
    toProto(message: QueryTotalLiquidityForRangeResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityForRangeResponse): QueryTotalLiquidityForRangeResponseProtoMsg;
};
export declare const QueryClaimableFeesRequest: {
    typeUrl: string;
    encode(message: QueryClaimableFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesRequest;
    fromPartial(object: Partial<QueryClaimableFeesRequest>): QueryClaimableFeesRequest;
    fromAmino(object: QueryClaimableFeesRequestAmino): QueryClaimableFeesRequest;
    toAmino(message: QueryClaimableFeesRequest): QueryClaimableFeesRequestAmino;
    fromAminoMsg(object: QueryClaimableFeesRequestAminoMsg): QueryClaimableFeesRequest;
    toAminoMsg(message: QueryClaimableFeesRequest): QueryClaimableFeesRequestAminoMsg;
    fromProtoMsg(message: QueryClaimableFeesRequestProtoMsg): QueryClaimableFeesRequest;
    toProto(message: QueryClaimableFeesRequest): Uint8Array;
    toProtoMsg(message: QueryClaimableFeesRequest): QueryClaimableFeesRequestProtoMsg;
};
export declare const QueryClaimableFeesResponse: {
    typeUrl: string;
    encode(message: QueryClaimableFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesResponse;
    fromPartial(object: Partial<QueryClaimableFeesResponse>): QueryClaimableFeesResponse;
    fromAmino(object: QueryClaimableFeesResponseAmino): QueryClaimableFeesResponse;
    toAmino(message: QueryClaimableFeesResponse): QueryClaimableFeesResponseAmino;
    fromAminoMsg(object: QueryClaimableFeesResponseAminoMsg): QueryClaimableFeesResponse;
    toAminoMsg(message: QueryClaimableFeesResponse): QueryClaimableFeesResponseAminoMsg;
    fromProtoMsg(message: QueryClaimableFeesResponseProtoMsg): QueryClaimableFeesResponse;
    toProto(message: QueryClaimableFeesResponse): Uint8Array;
    toProtoMsg(message: QueryClaimableFeesResponse): QueryClaimableFeesResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
