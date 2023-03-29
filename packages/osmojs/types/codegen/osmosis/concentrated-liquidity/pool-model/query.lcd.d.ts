import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryLiquidityDepthsForRangeRequest, QueryLiquidityDepthsForRangeResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pools(params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    liquidityDepthsForRange(params: QueryLiquidityDepthsForRangeRequest): Promise<QueryLiquidityDepthsForRangeResponseSDKType>;
    userPositions(params: QueryUserPositionsRequest): Promise<QueryUserPositionsResponseSDKType>;
    totalLiquidityForRange(params: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponseSDKType>;
    claimableFees(params: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponseSDKType>;
    positionById(params: QueryPositionByIdRequest): Promise<QueryPositionByIdResponseSDKType>;
}
