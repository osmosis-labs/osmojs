import { LCDClient } from "@osmonauts/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    getNodeInfo(_params?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(_params?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(_params?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(params?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
