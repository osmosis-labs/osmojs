import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
};
