import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, UserPositionsRequest, UserPositionsResponse, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponse, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponse, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponse, ClaimableIncentivesRequest, ClaimableIncentivesResponse, PositionByIdRequest, PositionByIdResponse, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponse, IncentiveRecordsRequest, IncentiveRecordsResponse, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponse, CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponse, UserUnbondingPositionsRequest, UserUnbondingPositionsResponse, GetTotalLiquidityRequest, GetTotalLiquidityResponse } from "./query";
export interface Query {
    /** Pools returns all concentrated liquidity pools */
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    /** Params returns concentrated liquidity module params. */
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** UserPositions returns all concentrated postitions of some address. */
    userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
    /**
     * LiquidityPerTickRange returns the amount of liquidity per every tick range
     * existing within the given pool
     */
    liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
    /**
     * LiquidityNetInDirection returns liquidity net in the direction given.
     * Uses the bound if specified, if not uses either min tick / max tick
     * depending on the direction.
     */
    liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
    /**
     * ClaimableSpreadRewards returns the amount of spread rewards that can be
     * claimed by a position with the given id.
     */
    claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
    /**
     * ClaimableIncentives returns the amount of incentives that can be claimed
     * and how many would be forfeited by a position with the given id.
     */
    claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
    /** PositionById returns a position with the given id. */
    positionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
    /**
     * PoolAccumulatorRewards returns the pool-global accumulator rewards.
     * Contains spread factor rewards and uptime rewards.
     */
    poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
    /** IncentiveRecords returns the incentive records for a given poolId */
    incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
    /**
     * TickAccumulatorTrackers returns the tick accumulator trackers.
     * Contains spread factor and uptime accumulator trackers.
     */
    tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
    /**
     * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
     * pool that is linked with the given concentrated pool.
     */
    cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
    /**
     * UserUnbondingPositions returns the position and lock info of unbonding
     * positions of the given address.
     */
    userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
    /** GetTotalLiquidity returns total liquidity across all cl pools. */
    getTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
    liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
    liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
    claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
    claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
    positionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
    poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
    incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
    tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
    cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
    userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
    getTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
    liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
    liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
    claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
    claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
    positionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
    poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
    incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
    tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
    cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
    userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
    getTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
};
