import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export interface Query {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    /** Per Pool gRPC Endpoints */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    /** Estimate the swap. */
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
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
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
};
