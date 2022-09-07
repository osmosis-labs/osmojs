import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(_params?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
