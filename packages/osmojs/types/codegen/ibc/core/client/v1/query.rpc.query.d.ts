import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponseSDKType>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponseSDKType>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponseSDKType>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
};
