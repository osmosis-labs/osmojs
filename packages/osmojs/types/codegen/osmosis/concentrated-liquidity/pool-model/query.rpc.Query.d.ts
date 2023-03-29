import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryParamsRequest, QueryParamsResponse, QueryLiquidityDepthsForRangeRequest, QueryLiquidityDepthsForRangeResponse, QueryUserPositionsRequest, QueryUserPositionsResponse, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeResponse, QueryClaimableFeesRequest, QueryClaimableFeesResponse, QueryPositionByIdRequest, QueryPositionByIdResponse } from "./query";
export interface Query {
    /** Pools returns all concentrated liquidity pools */
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Params returns concentrated liquidity module params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** LiquidityDepthsForRange returns Liqiudity Depths for given range */
    liquidityDepthsForRange(request: QueryLiquidityDepthsForRangeRequest): Promise<QueryLiquidityDepthsForRangeResponse>;
    /** UserPositions returns all concentrated postitions of some address. */
    userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse>;
    /** TotalLiquidityForRange the amount of liquidity existing within given range. */
    totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse>;
    /**
     * ClaimableFees returns the amount of fees that can be claimed by a position
     * with the given id.
     */
    claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse>;
    /** PositionById returns a position with the given id. */
    positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    liquidityDepthsForRange(request: QueryLiquidityDepthsForRangeRequest): Promise<QueryLiquidityDepthsForRangeResponse>;
    userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse>;
    totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse>;
    claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse>;
    positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    liquidityDepthsForRange(request: QueryLiquidityDepthsForRangeRequest): Promise<QueryLiquidityDepthsForRangeResponse>;
    userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse>;
    totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse>;
    claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse>;
    positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse>;
};
