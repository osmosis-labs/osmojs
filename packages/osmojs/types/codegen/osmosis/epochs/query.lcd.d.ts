import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    epochInfos(_params?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
