import { LCDClient } from "@osmonauts/lcd";
import { ParamsRequest, ParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
}
