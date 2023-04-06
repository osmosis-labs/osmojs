import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeResponseSDKType, QueryLiquidityNetInDirectionRequest, QueryLiquidityNetInDirectionResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pools(params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    userPositions(params: QueryUserPositionsRequest): Promise<QueryUserPositionsResponseSDKType>;
    totalLiquidityForRange(params: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponseSDKType>;
    liquidityNetInDirection(params: QueryLiquidityNetInDirectionRequest): Promise<QueryLiquidityNetInDirectionResponseSDKType>;
    claimableFees(params: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponseSDKType>;
    positionById(params: QueryPositionByIdRequest): Promise<QueryPositionByIdResponseSDKType>;
}
