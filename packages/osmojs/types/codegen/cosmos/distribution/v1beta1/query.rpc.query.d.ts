import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
};
