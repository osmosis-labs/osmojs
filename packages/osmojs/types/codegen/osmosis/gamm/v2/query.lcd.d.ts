import { LCDClient } from "@osmonauts/lcd";
import { QuerySpotPriceRequest, QuerySpotPriceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
}
