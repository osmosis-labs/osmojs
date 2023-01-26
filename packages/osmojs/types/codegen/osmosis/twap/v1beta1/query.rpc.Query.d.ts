import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse, GeometricTwapRequest, GeometricTwapResponse, GeometricTwapToNowRequest, GeometricTwapToNowResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
    geometricTwap(request: GeometricTwapRequest): Promise<GeometricTwapResponse>;
    geometricTwapToNow(request: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
    geometricTwap(request: GeometricTwapRequest): Promise<GeometricTwapResponse>;
    geometricTwapToNow(request: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
    geometricTwap(request: GeometricTwapRequest): Promise<GeometricTwapResponse>;
    geometricTwapToNow(request: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponse>;
};
