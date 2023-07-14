import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, FullPositionBreakdownAmino, FullPositionBreakdownSDKType, PositionWithPeriodLock, PositionWithPeriodLockAmino, PositionWithPeriodLockSDKType } from "./position";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UptimeTracker, UptimeTrackerAmino, UptimeTrackerSDKType } from "./tickInfo";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../gamm/pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
/** =============================== UserPositions */
export interface UserPositionsRequest {
    address: string;
    poolId: bigint;
    pagination: PageRequest;
}
export interface UserPositionsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest";
    value: Uint8Array;
}
/** =============================== UserPositions */
export interface UserPositionsRequestAmino {
    address: string;
    pool_id: string;
    pagination?: PageRequestAmino;
}
export interface UserPositionsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/user-positions-request";
    value: UserPositionsRequestAmino;
}
/** =============================== UserPositions */
export interface UserPositionsRequestSDKType {
    address: string;
    pool_id: bigint;
    pagination: PageRequestSDKType;
}
export interface UserPositionsResponse {
    positions: FullPositionBreakdown[];
    pagination: PageResponse;
}
export interface UserPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse";
    value: Uint8Array;
}
export interface UserPositionsResponseAmino {
    positions: FullPositionBreakdownAmino[];
    pagination?: PageResponseAmino;
}
export interface UserPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/user-positions-response";
    value: UserPositionsResponseAmino;
}
export interface UserPositionsResponseSDKType {
    positions: FullPositionBreakdownSDKType[];
    pagination: PageResponseSDKType;
}
/** =============================== PositionById */
export interface PositionByIdRequest {
    positionId: bigint;
}
export interface PositionByIdRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest";
    value: Uint8Array;
}
/** =============================== PositionById */
export interface PositionByIdRequestAmino {
    position_id: string;
}
export interface PositionByIdRequestAminoMsg {
    type: "osmosis/concentratedliquidity/position-by-id-request";
    value: PositionByIdRequestAmino;
}
/** =============================== PositionById */
export interface PositionByIdRequestSDKType {
    position_id: bigint;
}
export interface PositionByIdResponse {
    position: FullPositionBreakdown;
}
export interface PositionByIdResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse";
    value: Uint8Array;
}
export interface PositionByIdResponseAmino {
    position?: FullPositionBreakdownAmino;
}
export interface PositionByIdResponseAminoMsg {
    type: "osmosis/concentratedliquidity/position-by-id-response";
    value: PositionByIdResponseAmino;
}
export interface PositionByIdResponseSDKType {
    position: FullPositionBreakdownSDKType;
}
/** =============================== Pools */
export interface PoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface PoolsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest";
    value: Uint8Array;
}
/** =============================== Pools */
export interface PoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface PoolsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/pools-request";
    value: PoolsRequestAmino;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface PoolsResponse {
    pools: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface PoolsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse";
    value: Uint8Array;
}
export declare type PoolsResponseEncoded = Omit<PoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface PoolsResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface PoolsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/pools-response";
    value: PoolsResponseAmino;
}
export interface PoolsResponseSDKType {
    pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
    pagination: PageResponseSDKType;
}
/** =============================== ModuleParams */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** =============================== ModuleParams */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/params-request";
    value: ParamsRequestAmino;
}
/** =============================== ModuleParams */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface TickLiquidityNet {
    liquidityNet: string;
    tickIndex: bigint;
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
    tick_index: bigint;
}
export interface LiquidityDepthWithRange {
    liquidityAmount: string;
    lowerTick: bigint;
    upperTick: bigint;
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
    lower_tick: bigint;
    upper_tick: bigint;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequest {
    poolId: bigint;
    tokenIn: string;
    startTick: bigint;
    useCurTick: boolean;
    boundTick: bigint;
    useNoBound: boolean;
}
export interface LiquidityNetInDirectionRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest";
    value: Uint8Array;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequestAmino {
    pool_id: string;
    token_in: string;
    start_tick: string;
    use_cur_tick: boolean;
    bound_tick: string;
    use_no_bound: boolean;
}
export interface LiquidityNetInDirectionRequestAminoMsg {
    type: "osmosis/concentratedliquidity/liquidity-net-in-direction-request";
    value: LiquidityNetInDirectionRequestAmino;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequestSDKType {
    pool_id: bigint;
    token_in: string;
    start_tick: bigint;
    use_cur_tick: boolean;
    bound_tick: bigint;
    use_no_bound: boolean;
}
export interface LiquidityNetInDirectionResponse {
    liquidityDepths: TickLiquidityNet[];
    currentTick: bigint;
    currentLiquidity: string;
}
export interface LiquidityNetInDirectionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse";
    value: Uint8Array;
}
export interface LiquidityNetInDirectionResponseAmino {
    liquidity_depths: TickLiquidityNetAmino[];
    current_tick: string;
    current_liquidity: string;
}
export interface LiquidityNetInDirectionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/liquidity-net-in-direction-response";
    value: LiquidityNetInDirectionResponseAmino;
}
export interface LiquidityNetInDirectionResponseSDKType {
    liquidity_depths: TickLiquidityNetSDKType[];
    current_tick: bigint;
    current_liquidity: string;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequest {
    poolId: bigint;
}
export interface LiquidityPerTickRangeRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest";
    value: Uint8Array;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequestAmino {
    pool_id: string;
}
export interface LiquidityPerTickRangeRequestAminoMsg {
    type: "osmosis/concentratedliquidity/liquidity-per-tick-range-request";
    value: LiquidityPerTickRangeRequestAmino;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequestSDKType {
    pool_id: bigint;
}
export interface LiquidityPerTickRangeResponse {
    liquidity: LiquidityDepthWithRange[];
}
export interface LiquidityPerTickRangeResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse";
    value: Uint8Array;
}
export interface LiquidityPerTickRangeResponseAmino {
    liquidity: LiquidityDepthWithRangeAmino[];
}
export interface LiquidityPerTickRangeResponseAminoMsg {
    type: "osmosis/concentratedliquidity/liquidity-per-tick-range-response";
    value: LiquidityPerTickRangeResponseAmino;
}
export interface LiquidityPerTickRangeResponseSDKType {
    liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequest {
    positionId: bigint;
}
export interface ClaimableSpreadRewardsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest";
    value: Uint8Array;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequestAmino {
    position_id: string;
}
export interface ClaimableSpreadRewardsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/claimable-spread-rewards-request";
    value: ClaimableSpreadRewardsRequestAmino;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequestSDKType {
    position_id: bigint;
}
export interface ClaimableSpreadRewardsResponse {
    claimableSpreadRewards: Coin[];
}
export interface ClaimableSpreadRewardsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse";
    value: Uint8Array;
}
export interface ClaimableSpreadRewardsResponseAmino {
    claimable_spread_rewards: CoinAmino[];
}
export interface ClaimableSpreadRewardsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/claimable-spread-rewards-response";
    value: ClaimableSpreadRewardsResponseAmino;
}
export interface ClaimableSpreadRewardsResponseSDKType {
    claimable_spread_rewards: CoinSDKType[];
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequest {
    positionId: bigint;
}
export interface ClaimableIncentivesRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest";
    value: Uint8Array;
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequestAmino {
    position_id: string;
}
export interface ClaimableIncentivesRequestAminoMsg {
    type: "osmosis/concentratedliquidity/claimable-incentives-request";
    value: ClaimableIncentivesRequestAmino;
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequestSDKType {
    position_id: bigint;
}
export interface ClaimableIncentivesResponse {
    claimableIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
export interface ClaimableIncentivesResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse";
    value: Uint8Array;
}
export interface ClaimableIncentivesResponseAmino {
    claimable_incentives: CoinAmino[];
    forfeited_incentives: CoinAmino[];
}
export interface ClaimableIncentivesResponseAminoMsg {
    type: "osmosis/concentratedliquidity/claimable-incentives-response";
    value: ClaimableIncentivesResponseAmino;
}
export interface ClaimableIncentivesResponseSDKType {
    claimable_incentives: CoinSDKType[];
    forfeited_incentives: CoinSDKType[];
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequest {
    poolId: bigint;
}
export interface PoolAccumulatorRewardsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest";
    value: Uint8Array;
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequestAmino {
    pool_id: string;
}
export interface PoolAccumulatorRewardsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/pool-accumulator-rewards-request";
    value: PoolAccumulatorRewardsRequestAmino;
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequestSDKType {
    pool_id: bigint;
}
export interface PoolAccumulatorRewardsResponse {
    spreadRewardGrowthGlobal: DecCoin[];
    uptimeGrowthGlobal: UptimeTracker[];
}
export interface PoolAccumulatorRewardsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse";
    value: Uint8Array;
}
export interface PoolAccumulatorRewardsResponseAmino {
    spread_reward_growth_global: DecCoinAmino[];
    uptime_growth_global: UptimeTrackerAmino[];
}
export interface PoolAccumulatorRewardsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/pool-accumulator-rewards-response";
    value: PoolAccumulatorRewardsResponseAmino;
}
export interface PoolAccumulatorRewardsResponseSDKType {
    spread_reward_growth_global: DecCoinSDKType[];
    uptime_growth_global: UptimeTrackerSDKType[];
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequest {
    poolId: bigint;
    tickIndex: bigint;
}
export interface TickAccumulatorTrackersRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest";
    value: Uint8Array;
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequestAmino {
    pool_id: string;
    tick_index: string;
}
export interface TickAccumulatorTrackersRequestAminoMsg {
    type: "osmosis/concentratedliquidity/tick-accumulator-trackers-request";
    value: TickAccumulatorTrackersRequestAmino;
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequestSDKType {
    pool_id: bigint;
    tick_index: bigint;
}
export interface TickAccumulatorTrackersResponse {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
    uptimeTrackers: UptimeTracker[];
}
export interface TickAccumulatorTrackersResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse";
    value: Uint8Array;
}
export interface TickAccumulatorTrackersResponseAmino {
    spread_reward_growth_opposite_direction_of_last_traversal: DecCoinAmino[];
    uptime_trackers: UptimeTrackerAmino[];
}
export interface TickAccumulatorTrackersResponseAminoMsg {
    type: "osmosis/concentratedliquidity/tick-accumulator-trackers-response";
    value: TickAccumulatorTrackersResponseAmino;
}
export interface TickAccumulatorTrackersResponseSDKType {
    spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
    uptime_trackers: UptimeTrackerSDKType[];
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequest {
    poolId: bigint;
    pagination: PageRequest;
}
export interface IncentiveRecordsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest";
    value: Uint8Array;
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequestAmino {
    pool_id: string;
    pagination?: PageRequestAmino;
}
export interface IncentiveRecordsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/incentive-records-request";
    value: IncentiveRecordsRequestAmino;
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequestSDKType {
    pool_id: bigint;
    pagination: PageRequestSDKType;
}
export interface IncentiveRecordsResponse {
    incentiveRecords: IncentiveRecord[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface IncentiveRecordsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse";
    value: Uint8Array;
}
export interface IncentiveRecordsResponseAmino {
    incentive_records: IncentiveRecordAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface IncentiveRecordsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/incentive-records-response";
    value: IncentiveRecordsResponseAmino;
}
export interface IncentiveRecordsResponseSDKType {
    incentive_records: IncentiveRecordSDKType[];
    pagination: PageResponseSDKType;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    concentratedPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest";
    value: Uint8Array;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
    concentrated_pool_id: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg {
    type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request";
    value: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
    concentrated_pool_id: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    cfmmPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse";
    value: Uint8Array;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
    cfmm_pool_id: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg {
    type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response";
    value: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
    cfmm_pool_id: bigint;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequest {
    address: string;
}
export interface UserUnbondingPositionsRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest";
    value: Uint8Array;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequestAmino {
    address: string;
}
export interface UserUnbondingPositionsRequestAminoMsg {
    type: "osmosis/concentratedliquidity/user-unbonding-positions-request";
    value: UserUnbondingPositionsRequestAmino;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequestSDKType {
    address: string;
}
export interface UserUnbondingPositionsResponse {
    positionsWithPeriodLock: PositionWithPeriodLock[];
}
export interface UserUnbondingPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse";
    value: Uint8Array;
}
export interface UserUnbondingPositionsResponseAmino {
    positions_with_period_lock: PositionWithPeriodLockAmino[];
}
export interface UserUnbondingPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/user-unbonding-positions-response";
    value: UserUnbondingPositionsResponseAmino;
}
export interface UserUnbondingPositionsResponseSDKType {
    positions_with_period_lock: PositionWithPeriodLockSDKType[];
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequest {
}
export interface GetTotalLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest";
    value: Uint8Array;
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestAmino {
}
export interface GetTotalLiquidityRequestAminoMsg {
    type: "osmosis/concentratedliquidity/get-total-liquidity-request";
    value: GetTotalLiquidityRequestAmino;
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestSDKType {
}
export interface GetTotalLiquidityResponse {
    totalLiquidity: Coin[];
}
export interface GetTotalLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse";
    value: Uint8Array;
}
export interface GetTotalLiquidityResponseAmino {
    total_liquidity: CoinAmino[];
}
export interface GetTotalLiquidityResponseAminoMsg {
    type: "osmosis/concentratedliquidity/get-total-liquidity-response";
    value: GetTotalLiquidityResponseAmino;
}
export interface GetTotalLiquidityResponseSDKType {
    total_liquidity: CoinSDKType[];
}
export declare const UserPositionsRequest: {
    typeUrl: string;
    encode(message: UserPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsRequest;
    fromPartial(object: Partial<UserPositionsRequest>): UserPositionsRequest;
    fromAmino(object: UserPositionsRequestAmino): UserPositionsRequest;
    toAmino(message: UserPositionsRequest): UserPositionsRequestAmino;
    fromAminoMsg(object: UserPositionsRequestAminoMsg): UserPositionsRequest;
    toAminoMsg(message: UserPositionsRequest): UserPositionsRequestAminoMsg;
    fromProtoMsg(message: UserPositionsRequestProtoMsg): UserPositionsRequest;
    toProto(message: UserPositionsRequest): Uint8Array;
    toProtoMsg(message: UserPositionsRequest): UserPositionsRequestProtoMsg;
};
export declare const UserPositionsResponse: {
    typeUrl: string;
    encode(message: UserPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsResponse;
    fromPartial(object: Partial<UserPositionsResponse>): UserPositionsResponse;
    fromAmino(object: UserPositionsResponseAmino): UserPositionsResponse;
    toAmino(message: UserPositionsResponse): UserPositionsResponseAmino;
    fromAminoMsg(object: UserPositionsResponseAminoMsg): UserPositionsResponse;
    toAminoMsg(message: UserPositionsResponse): UserPositionsResponseAminoMsg;
    fromProtoMsg(message: UserPositionsResponseProtoMsg): UserPositionsResponse;
    toProto(message: UserPositionsResponse): Uint8Array;
    toProtoMsg(message: UserPositionsResponse): UserPositionsResponseProtoMsg;
};
export declare const PositionByIdRequest: {
    typeUrl: string;
    encode(message: PositionByIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdRequest;
    fromPartial(object: Partial<PositionByIdRequest>): PositionByIdRequest;
    fromAmino(object: PositionByIdRequestAmino): PositionByIdRequest;
    toAmino(message: PositionByIdRequest): PositionByIdRequestAmino;
    fromAminoMsg(object: PositionByIdRequestAminoMsg): PositionByIdRequest;
    toAminoMsg(message: PositionByIdRequest): PositionByIdRequestAminoMsg;
    fromProtoMsg(message: PositionByIdRequestProtoMsg): PositionByIdRequest;
    toProto(message: PositionByIdRequest): Uint8Array;
    toProtoMsg(message: PositionByIdRequest): PositionByIdRequestProtoMsg;
};
export declare const PositionByIdResponse: {
    typeUrl: string;
    encode(message: PositionByIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdResponse;
    fromPartial(object: Partial<PositionByIdResponse>): PositionByIdResponse;
    fromAmino(object: PositionByIdResponseAmino): PositionByIdResponse;
    toAmino(message: PositionByIdResponse): PositionByIdResponseAmino;
    fromAminoMsg(object: PositionByIdResponseAminoMsg): PositionByIdResponse;
    toAminoMsg(message: PositionByIdResponse): PositionByIdResponseAminoMsg;
    fromProtoMsg(message: PositionByIdResponseProtoMsg): PositionByIdResponse;
    toProto(message: PositionByIdResponse): Uint8Array;
    toProtoMsg(message: PositionByIdResponse): PositionByIdResponseProtoMsg;
};
export declare const PoolsRequest: {
    typeUrl: string;
    encode(message: PoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest;
    fromPartial(object: Partial<PoolsRequest>): PoolsRequest;
    fromAmino(object: PoolsRequestAmino): PoolsRequest;
    toAmino(message: PoolsRequest): PoolsRequestAmino;
    fromAminoMsg(object: PoolsRequestAminoMsg): PoolsRequest;
    toAminoMsg(message: PoolsRequest): PoolsRequestAminoMsg;
    fromProtoMsg(message: PoolsRequestProtoMsg): PoolsRequest;
    toProto(message: PoolsRequest): Uint8Array;
    toProtoMsg(message: PoolsRequest): PoolsRequestProtoMsg;
};
export declare const PoolsResponse: {
    typeUrl: string;
    encode(message: PoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse;
    fromPartial(object: Partial<PoolsResponse>): PoolsResponse;
    fromAmino(object: PoolsResponseAmino): PoolsResponse;
    toAmino(message: PoolsResponse): PoolsResponseAmino;
    fromAminoMsg(object: PoolsResponseAminoMsg): PoolsResponse;
    toAminoMsg(message: PoolsResponse): PoolsResponseAminoMsg;
    fromProtoMsg(message: PoolsResponseProtoMsg): PoolsResponse;
    toProto(message: PoolsResponse): Uint8Array;
    toProtoMsg(message: PoolsResponse): PoolsResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
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
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const TickLiquidityNet: {
    typeUrl: string;
    encode(message: TickLiquidityNet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet;
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
    encode(message: LiquidityDepthWithRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityDepthWithRange;
    fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange;
    fromAmino(object: LiquidityDepthWithRangeAmino): LiquidityDepthWithRange;
    toAmino(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAmino;
    fromAminoMsg(object: LiquidityDepthWithRangeAminoMsg): LiquidityDepthWithRange;
    toAminoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAminoMsg;
    fromProtoMsg(message: LiquidityDepthWithRangeProtoMsg): LiquidityDepthWithRange;
    toProto(message: LiquidityDepthWithRange): Uint8Array;
    toProtoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeProtoMsg;
};
export declare const LiquidityNetInDirectionRequest: {
    typeUrl: string;
    encode(message: LiquidityNetInDirectionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionRequest;
    fromPartial(object: Partial<LiquidityNetInDirectionRequest>): LiquidityNetInDirectionRequest;
    fromAmino(object: LiquidityNetInDirectionRequestAmino): LiquidityNetInDirectionRequest;
    toAmino(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestAmino;
    fromAminoMsg(object: LiquidityNetInDirectionRequestAminoMsg): LiquidityNetInDirectionRequest;
    toAminoMsg(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestAminoMsg;
    fromProtoMsg(message: LiquidityNetInDirectionRequestProtoMsg): LiquidityNetInDirectionRequest;
    toProto(message: LiquidityNetInDirectionRequest): Uint8Array;
    toProtoMsg(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestProtoMsg;
};
export declare const LiquidityNetInDirectionResponse: {
    typeUrl: string;
    encode(message: LiquidityNetInDirectionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionResponse;
    fromPartial(object: Partial<LiquidityNetInDirectionResponse>): LiquidityNetInDirectionResponse;
    fromAmino(object: LiquidityNetInDirectionResponseAmino): LiquidityNetInDirectionResponse;
    toAmino(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseAmino;
    fromAminoMsg(object: LiquidityNetInDirectionResponseAminoMsg): LiquidityNetInDirectionResponse;
    toAminoMsg(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseAminoMsg;
    fromProtoMsg(message: LiquidityNetInDirectionResponseProtoMsg): LiquidityNetInDirectionResponse;
    toProto(message: LiquidityNetInDirectionResponse): Uint8Array;
    toProtoMsg(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseProtoMsg;
};
export declare const LiquidityPerTickRangeRequest: {
    typeUrl: string;
    encode(message: LiquidityPerTickRangeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeRequest;
    fromPartial(object: Partial<LiquidityPerTickRangeRequest>): LiquidityPerTickRangeRequest;
    fromAmino(object: LiquidityPerTickRangeRequestAmino): LiquidityPerTickRangeRequest;
    toAmino(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestAmino;
    fromAminoMsg(object: LiquidityPerTickRangeRequestAminoMsg): LiquidityPerTickRangeRequest;
    toAminoMsg(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestAminoMsg;
    fromProtoMsg(message: LiquidityPerTickRangeRequestProtoMsg): LiquidityPerTickRangeRequest;
    toProto(message: LiquidityPerTickRangeRequest): Uint8Array;
    toProtoMsg(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestProtoMsg;
};
export declare const LiquidityPerTickRangeResponse: {
    typeUrl: string;
    encode(message: LiquidityPerTickRangeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeResponse;
    fromPartial(object: Partial<LiquidityPerTickRangeResponse>): LiquidityPerTickRangeResponse;
    fromAmino(object: LiquidityPerTickRangeResponseAmino): LiquidityPerTickRangeResponse;
    toAmino(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseAmino;
    fromAminoMsg(object: LiquidityPerTickRangeResponseAminoMsg): LiquidityPerTickRangeResponse;
    toAminoMsg(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseAminoMsg;
    fromProtoMsg(message: LiquidityPerTickRangeResponseProtoMsg): LiquidityPerTickRangeResponse;
    toProto(message: LiquidityPerTickRangeResponse): Uint8Array;
    toProtoMsg(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseProtoMsg;
};
export declare const ClaimableSpreadRewardsRequest: {
    typeUrl: string;
    encode(message: ClaimableSpreadRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsRequest;
    fromPartial(object: Partial<ClaimableSpreadRewardsRequest>): ClaimableSpreadRewardsRequest;
    fromAmino(object: ClaimableSpreadRewardsRequestAmino): ClaimableSpreadRewardsRequest;
    toAmino(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestAmino;
    fromAminoMsg(object: ClaimableSpreadRewardsRequestAminoMsg): ClaimableSpreadRewardsRequest;
    toAminoMsg(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestAminoMsg;
    fromProtoMsg(message: ClaimableSpreadRewardsRequestProtoMsg): ClaimableSpreadRewardsRequest;
    toProto(message: ClaimableSpreadRewardsRequest): Uint8Array;
    toProtoMsg(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestProtoMsg;
};
export declare const ClaimableSpreadRewardsResponse: {
    typeUrl: string;
    encode(message: ClaimableSpreadRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsResponse;
    fromPartial(object: Partial<ClaimableSpreadRewardsResponse>): ClaimableSpreadRewardsResponse;
    fromAmino(object: ClaimableSpreadRewardsResponseAmino): ClaimableSpreadRewardsResponse;
    toAmino(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseAmino;
    fromAminoMsg(object: ClaimableSpreadRewardsResponseAminoMsg): ClaimableSpreadRewardsResponse;
    toAminoMsg(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseAminoMsg;
    fromProtoMsg(message: ClaimableSpreadRewardsResponseProtoMsg): ClaimableSpreadRewardsResponse;
    toProto(message: ClaimableSpreadRewardsResponse): Uint8Array;
    toProtoMsg(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseProtoMsg;
};
export declare const ClaimableIncentivesRequest: {
    typeUrl: string;
    encode(message: ClaimableIncentivesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesRequest;
    fromPartial(object: Partial<ClaimableIncentivesRequest>): ClaimableIncentivesRequest;
    fromAmino(object: ClaimableIncentivesRequestAmino): ClaimableIncentivesRequest;
    toAmino(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestAmino;
    fromAminoMsg(object: ClaimableIncentivesRequestAminoMsg): ClaimableIncentivesRequest;
    toAminoMsg(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestAminoMsg;
    fromProtoMsg(message: ClaimableIncentivesRequestProtoMsg): ClaimableIncentivesRequest;
    toProto(message: ClaimableIncentivesRequest): Uint8Array;
    toProtoMsg(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestProtoMsg;
};
export declare const ClaimableIncentivesResponse: {
    typeUrl: string;
    encode(message: ClaimableIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesResponse;
    fromPartial(object: Partial<ClaimableIncentivesResponse>): ClaimableIncentivesResponse;
    fromAmino(object: ClaimableIncentivesResponseAmino): ClaimableIncentivesResponse;
    toAmino(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseAmino;
    fromAminoMsg(object: ClaimableIncentivesResponseAminoMsg): ClaimableIncentivesResponse;
    toAminoMsg(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseAminoMsg;
    fromProtoMsg(message: ClaimableIncentivesResponseProtoMsg): ClaimableIncentivesResponse;
    toProto(message: ClaimableIncentivesResponse): Uint8Array;
    toProtoMsg(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseProtoMsg;
};
export declare const PoolAccumulatorRewardsRequest: {
    typeUrl: string;
    encode(message: PoolAccumulatorRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsRequest;
    fromPartial(object: Partial<PoolAccumulatorRewardsRequest>): PoolAccumulatorRewardsRequest;
    fromAmino(object: PoolAccumulatorRewardsRequestAmino): PoolAccumulatorRewardsRequest;
    toAmino(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestAmino;
    fromAminoMsg(object: PoolAccumulatorRewardsRequestAminoMsg): PoolAccumulatorRewardsRequest;
    toAminoMsg(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestAminoMsg;
    fromProtoMsg(message: PoolAccumulatorRewardsRequestProtoMsg): PoolAccumulatorRewardsRequest;
    toProto(message: PoolAccumulatorRewardsRequest): Uint8Array;
    toProtoMsg(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestProtoMsg;
};
export declare const PoolAccumulatorRewardsResponse: {
    typeUrl: string;
    encode(message: PoolAccumulatorRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsResponse;
    fromPartial(object: Partial<PoolAccumulatorRewardsResponse>): PoolAccumulatorRewardsResponse;
    fromAmino(object: PoolAccumulatorRewardsResponseAmino): PoolAccumulatorRewardsResponse;
    toAmino(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseAmino;
    fromAminoMsg(object: PoolAccumulatorRewardsResponseAminoMsg): PoolAccumulatorRewardsResponse;
    toAminoMsg(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseAminoMsg;
    fromProtoMsg(message: PoolAccumulatorRewardsResponseProtoMsg): PoolAccumulatorRewardsResponse;
    toProto(message: PoolAccumulatorRewardsResponse): Uint8Array;
    toProtoMsg(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseProtoMsg;
};
export declare const TickAccumulatorTrackersRequest: {
    typeUrl: string;
    encode(message: TickAccumulatorTrackersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersRequest;
    fromPartial(object: Partial<TickAccumulatorTrackersRequest>): TickAccumulatorTrackersRequest;
    fromAmino(object: TickAccumulatorTrackersRequestAmino): TickAccumulatorTrackersRequest;
    toAmino(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestAmino;
    fromAminoMsg(object: TickAccumulatorTrackersRequestAminoMsg): TickAccumulatorTrackersRequest;
    toAminoMsg(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestAminoMsg;
    fromProtoMsg(message: TickAccumulatorTrackersRequestProtoMsg): TickAccumulatorTrackersRequest;
    toProto(message: TickAccumulatorTrackersRequest): Uint8Array;
    toProtoMsg(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestProtoMsg;
};
export declare const TickAccumulatorTrackersResponse: {
    typeUrl: string;
    encode(message: TickAccumulatorTrackersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersResponse;
    fromPartial(object: Partial<TickAccumulatorTrackersResponse>): TickAccumulatorTrackersResponse;
    fromAmino(object: TickAccumulatorTrackersResponseAmino): TickAccumulatorTrackersResponse;
    toAmino(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseAmino;
    fromAminoMsg(object: TickAccumulatorTrackersResponseAminoMsg): TickAccumulatorTrackersResponse;
    toAminoMsg(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseAminoMsg;
    fromProtoMsg(message: TickAccumulatorTrackersResponseProtoMsg): TickAccumulatorTrackersResponse;
    toProto(message: TickAccumulatorTrackersResponse): Uint8Array;
    toProtoMsg(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseProtoMsg;
};
export declare const IncentiveRecordsRequest: {
    typeUrl: string;
    encode(message: IncentiveRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsRequest;
    fromPartial(object: Partial<IncentiveRecordsRequest>): IncentiveRecordsRequest;
    fromAmino(object: IncentiveRecordsRequestAmino): IncentiveRecordsRequest;
    toAmino(message: IncentiveRecordsRequest): IncentiveRecordsRequestAmino;
    fromAminoMsg(object: IncentiveRecordsRequestAminoMsg): IncentiveRecordsRequest;
    toAminoMsg(message: IncentiveRecordsRequest): IncentiveRecordsRequestAminoMsg;
    fromProtoMsg(message: IncentiveRecordsRequestProtoMsg): IncentiveRecordsRequest;
    toProto(message: IncentiveRecordsRequest): Uint8Array;
    toProtoMsg(message: IncentiveRecordsRequest): IncentiveRecordsRequestProtoMsg;
};
export declare const IncentiveRecordsResponse: {
    typeUrl: string;
    encode(message: IncentiveRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsResponse;
    fromPartial(object: Partial<IncentiveRecordsResponse>): IncentiveRecordsResponse;
    fromAmino(object: IncentiveRecordsResponseAmino): IncentiveRecordsResponse;
    toAmino(message: IncentiveRecordsResponse): IncentiveRecordsResponseAmino;
    fromAminoMsg(object: IncentiveRecordsResponseAminoMsg): IncentiveRecordsResponse;
    toAminoMsg(message: IncentiveRecordsResponse): IncentiveRecordsResponseAminoMsg;
    fromProtoMsg(message: IncentiveRecordsResponseProtoMsg): IncentiveRecordsResponse;
    toProto(message: IncentiveRecordsResponse): Uint8Array;
    toProtoMsg(message: IncentiveRecordsResponse): IncentiveRecordsResponseProtoMsg;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdRequest: {
    typeUrl: string;
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    fromAmino(object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    toAmino(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino;
    fromAminoMsg(object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    toAminoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg;
    fromProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Uint8Array;
    toProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdResponse: {
    typeUrl: string;
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    fromAmino(object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    toAmino(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino;
    fromAminoMsg(object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    toAminoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg;
    fromProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): Uint8Array;
    toProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg;
};
export declare const UserUnbondingPositionsRequest: {
    typeUrl: string;
    encode(message: UserUnbondingPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsRequest;
    fromPartial(object: Partial<UserUnbondingPositionsRequest>): UserUnbondingPositionsRequest;
    fromAmino(object: UserUnbondingPositionsRequestAmino): UserUnbondingPositionsRequest;
    toAmino(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestAmino;
    fromAminoMsg(object: UserUnbondingPositionsRequestAminoMsg): UserUnbondingPositionsRequest;
    toAminoMsg(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestAminoMsg;
    fromProtoMsg(message: UserUnbondingPositionsRequestProtoMsg): UserUnbondingPositionsRequest;
    toProto(message: UserUnbondingPositionsRequest): Uint8Array;
    toProtoMsg(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestProtoMsg;
};
export declare const UserUnbondingPositionsResponse: {
    typeUrl: string;
    encode(message: UserUnbondingPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsResponse;
    fromPartial(object: Partial<UserUnbondingPositionsResponse>): UserUnbondingPositionsResponse;
    fromAmino(object: UserUnbondingPositionsResponseAmino): UserUnbondingPositionsResponse;
    toAmino(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseAmino;
    fromAminoMsg(object: UserUnbondingPositionsResponseAminoMsg): UserUnbondingPositionsResponse;
    toAminoMsg(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseAminoMsg;
    fromProtoMsg(message: UserUnbondingPositionsResponseProtoMsg): UserUnbondingPositionsResponse;
    toProto(message: UserUnbondingPositionsResponse): Uint8Array;
    toProtoMsg(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseProtoMsg;
};
export declare const GetTotalLiquidityRequest: {
    typeUrl: string;
    encode(_: GetTotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityRequest;
    fromPartial(_: Partial<GetTotalLiquidityRequest>): GetTotalLiquidityRequest;
    fromAmino(_: GetTotalLiquidityRequestAmino): GetTotalLiquidityRequest;
    toAmino(_: GetTotalLiquidityRequest): GetTotalLiquidityRequestAmino;
    fromAminoMsg(object: GetTotalLiquidityRequestAminoMsg): GetTotalLiquidityRequest;
    toAminoMsg(message: GetTotalLiquidityRequest): GetTotalLiquidityRequestAminoMsg;
    fromProtoMsg(message: GetTotalLiquidityRequestProtoMsg): GetTotalLiquidityRequest;
    toProto(message: GetTotalLiquidityRequest): Uint8Array;
    toProtoMsg(message: GetTotalLiquidityRequest): GetTotalLiquidityRequestProtoMsg;
};
export declare const GetTotalLiquidityResponse: {
    typeUrl: string;
    encode(message: GetTotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityResponse;
    fromPartial(object: Partial<GetTotalLiquidityResponse>): GetTotalLiquidityResponse;
    fromAmino(object: GetTotalLiquidityResponseAmino): GetTotalLiquidityResponse;
    toAmino(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseAmino;
    fromAminoMsg(object: GetTotalLiquidityResponseAminoMsg): GetTotalLiquidityResponse;
    toAminoMsg(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseAminoMsg;
    fromProtoMsg(message: GetTotalLiquidityResponseProtoMsg): GetTotalLiquidityResponse;
    toProto(message: GetTotalLiquidityResponse): Uint8Array;
    toProtoMsg(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | CosmWasmPool | Pool2 | Pool3 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
