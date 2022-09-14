import { LCDClient } from "@osmonauts/lcd";
import { GetTxRequest, GetTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export declare class LCDServiceClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    getTx(params: GetTxRequest): Promise<GetTxResponse>;
    getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
