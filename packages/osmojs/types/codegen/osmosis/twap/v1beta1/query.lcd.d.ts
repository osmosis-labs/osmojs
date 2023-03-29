import { LCDClient } from "@osmonauts/lcd";
import { ParamsRequest, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponseSDKType, GeometricTwapRequest, GeometricTwapResponseSDKType, GeometricTwapToNowRequest, GeometricTwapToNowResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
    arithmeticTwap(params: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType>;
    arithmeticTwapToNow(params: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType>;
    geometricTwap(params: GeometricTwapRequest): Promise<GeometricTwapResponseSDKType>;
    geometricTwapToNow(params: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponseSDKType>;
}
