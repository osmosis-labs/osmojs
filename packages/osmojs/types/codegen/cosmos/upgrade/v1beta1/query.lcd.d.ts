import { LCDClient } from "@osmonauts/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    currentPlan(_params?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    authority(_params?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
