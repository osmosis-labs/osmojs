import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
};
