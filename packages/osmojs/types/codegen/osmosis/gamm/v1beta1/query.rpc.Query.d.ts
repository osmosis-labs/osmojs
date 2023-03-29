import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export interface Query {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
    /** Per Pool gRPC Endpoints */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
};
