import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType>;
    totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType>;
    totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    numPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType>;
    totalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType>;
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType>;
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType>;
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType>;
};
