import { LCDClient } from "@osmonauts/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    currentPlan(_params?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponseSDKType>;
    appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType>;
    upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType>;
    moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType>;
    authority(_params?: QueryAuthorityRequest): Promise<QueryAuthorityResponseSDKType>;
}
