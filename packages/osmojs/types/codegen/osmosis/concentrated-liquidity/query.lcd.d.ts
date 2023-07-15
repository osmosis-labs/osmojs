import { LCDClient } from "@osmonauts/lcd";
import { PoolsRequest, PoolsResponseSDKType, ParamsRequest, ParamsResponseSDKType, UserPositionsRequest, UserPositionsResponseSDKType, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponseSDKType, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponseSDKType, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponseSDKType, ClaimableIncentivesRequest, ClaimableIncentivesResponseSDKType, PositionByIdRequest, PositionByIdResponseSDKType, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponseSDKType, IncentiveRecordsRequest, IncentiveRecordsResponseSDKType, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponseSDKType, CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType, UserUnbondingPositionsRequest, UserUnbondingPositionsResponseSDKType, GetTotalLiquidityRequest, GetTotalLiquidityResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pools(params?: PoolsRequest): Promise<PoolsResponseSDKType>;
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
    userPositions(params: UserPositionsRequest): Promise<UserPositionsResponseSDKType>;
    liquidityPerTickRange(params: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponseSDKType>;
    liquidityNetInDirection(params: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponseSDKType>;
    claimableSpreadRewards(params: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponseSDKType>;
    claimableIncentives(params: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponseSDKType>;
    positionById(params: PositionByIdRequest): Promise<PositionByIdResponseSDKType>;
    poolAccumulatorRewards(params: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponseSDKType>;
    incentiveRecords(params: IncentiveRecordsRequest): Promise<IncentiveRecordsResponseSDKType>;
    tickAccumulatorTrackers(params: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponseSDKType>;
    cFMMPoolIdLinkFromConcentratedPoolId(params: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType>;
    userUnbondingPositions(params: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponseSDKType>;
    getTotalLiquidity(_params?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponseSDKType>;
}
