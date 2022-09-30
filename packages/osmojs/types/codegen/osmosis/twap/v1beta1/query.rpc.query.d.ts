import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponseSDKType>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponseSDKType>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponseSDKType>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType>;
};
