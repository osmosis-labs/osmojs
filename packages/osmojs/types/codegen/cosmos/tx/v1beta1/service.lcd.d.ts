import { LCDClient } from "@osmonauts/lcd";
import { GetTxRequest, GetTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsResponseSDKType } from "./service";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    getTx(params: GetTxRequest): Promise<GetTxResponseSDKType>;
    getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
}
