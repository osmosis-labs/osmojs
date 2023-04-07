import { LCDClient } from "@osmonauts/lcd";
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType } from "./service";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    getTx(params: GetTxRequest): Promise<GetTxResponseSDKType>;
    getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
}
