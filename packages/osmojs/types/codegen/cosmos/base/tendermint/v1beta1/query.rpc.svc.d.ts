import { Rpc } from "@osmonauts/helpers";
import { GetNodeInfoRequest, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponseSDKType } from "./query";
/** Service defines the RPC service */
export interface Service {
    getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponseSDKType>;
    getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponseSDKType>;
    getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponseSDKType>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType>;
    getLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponseSDKType>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponseSDKType>;
    getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponseSDKType>;
    getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponseSDKType>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType>;
    getLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponseSDKType>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType>;
}
