import { Rpc } from "@osmonauts/helpers";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
