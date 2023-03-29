import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponse, PoolRequest, PoolResponse, AllPoolsRequest, AllPoolsResponse, SpotPriceRequest, SpotPriceResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    /** Returns the total number of pools existing in Osmosis. */
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    /** Pool returns the Pool specified by the pool id */
    pool(request: PoolRequest): Promise<PoolResponse>;
    /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
    allPools(request: AllPoolsRequest): Promise<AllPoolsResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    pool(request: PoolRequest): Promise<PoolResponse>;
    allPools(request: AllPoolsRequest): Promise<AllPoolsResponse>;
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    pool(request: PoolRequest): Promise<PoolResponse>;
    allPools(request: AllPoolsRequest): Promise<AllPoolsResponse>;
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
};
