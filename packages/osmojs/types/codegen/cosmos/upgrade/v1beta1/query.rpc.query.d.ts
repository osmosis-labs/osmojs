import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType>;
};
