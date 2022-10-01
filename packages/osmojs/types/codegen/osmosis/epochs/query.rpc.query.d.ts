import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
};
