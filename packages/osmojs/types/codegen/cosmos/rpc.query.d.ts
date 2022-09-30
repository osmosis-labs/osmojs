export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: {
                grants(request: import("./authz/v1beta1/query").QueryGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGrantsResponseSDKType>;
                granterGrants(request: import("./authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranterGrantsResponseSDKType>;
                granteeGrants(request: import("./authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranteeGrantsResponseSDKType>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("./bank/v1beta1/query").QueryBalanceRequest): Promise<import("./bank/v1beta1/query").QueryBalanceResponseSDKType>;
                allBalances(request: import("./bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("./bank/v1beta1/query").QueryAllBalancesResponseSDKType>;
                spendableBalances(request: import("./bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("./bank/v1beta1/query").QuerySpendableBalancesResponseSDKType>;
                totalSupply(request?: import("./bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("./bank/v1beta1/query").QueryTotalSupplyResponseSDKType>;
                supplyOf(request: import("./bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("./bank/v1beta1/query").QuerySupplyOfResponseSDKType>;
                params(request?: import("./bank/v1beta1/query").QueryParamsRequest): Promise<import("./bank/v1beta1/query").QueryParamsResponseSDKType>;
                denomMetadata(request: import("./bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomMetadataResponseSDKType>;
                denomsMetadata(request?: import("./bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomsMetadataResponseSDKType>;
                denomOwners(request: import("./bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("./bank/v1beta1/query").QueryDenomOwnersResponseSDKType>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("./distribution/v1beta1/query").QueryParamsRequest): Promise<import("./distribution/v1beta1/query").QueryParamsResponseSDKType>;
                validatorOutstandingRewards(request: import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponseSDKType>;
                validatorCommission(request: import("./distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorCommissionResponseSDKType>;
                validatorSlashes(request: import("./distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorSlashesResponseSDKType>;
                delegationRewards(request: import("./distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationRewardsResponseSDKType>;
                delegationTotalRewards(request: import("./distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationTotalRewardsResponseSDKType>;
                delegatorValidators(request: import("./distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                delegatorWithdrawAddress(request: import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponseSDKType>;
                communityPool(request?: import("./distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("./distribution/v1beta1/query").QueryCommunityPoolResponseSDKType>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("./gov/v1/query").QueryProposalRequest): Promise<import("./gov/v1/query").QueryProposalResponseSDKType>;
                proposals(request: import("./gov/v1/query").QueryProposalsRequest): Promise<import("./gov/v1/query").QueryProposalsResponseSDKType>;
                vote(request: import("./gov/v1/query").QueryVoteRequest): Promise<import("./gov/v1/query").QueryVoteResponseSDKType>;
                votes(request: import("./gov/v1/query").QueryVotesRequest): Promise<import("./gov/v1/query").QueryVotesResponseSDKType>;
                params(request: import("./gov/v1/query").QueryParamsRequest): Promise<import("./gov/v1/query").QueryParamsResponseSDKType>;
                deposit(request: import("./gov/v1/query").QueryDepositRequest): Promise<import("./gov/v1/query").QueryDepositResponseSDKType>;
                deposits(request: import("./gov/v1/query").QueryDepositsRequest): Promise<import("./gov/v1/query").QueryDepositsResponseSDKType>;
                tallyResult(request: import("./gov/v1/query").QueryTallyResultRequest): Promise<import("./gov/v1/query").QueryTallyResultResponseSDKType>;
            };
            v1beta1: {
                proposal(request: import("./gov/v1beta1/query").QueryProposalRequest): Promise<import("./gov/v1beta1/query").QueryProposalResponseSDKType>;
                proposals(request: import("./gov/v1beta1/query").QueryProposalsRequest): Promise<import("./gov/v1beta1/query").QueryProposalsResponseSDKType>;
                vote(request: import("./gov/v1beta1/query").QueryVoteRequest): Promise<import("./gov/v1beta1/query").QueryVoteResponseSDKType>;
                votes(request: import("./gov/v1beta1/query").QueryVotesRequest): Promise<import("./gov/v1beta1/query").QueryVotesResponseSDKType>;
                params(request: import("./gov/v1beta1/query").QueryParamsRequest): Promise<import("./gov/v1beta1/query").QueryParamsResponseSDKType>;
                deposit(request: import("./gov/v1beta1/query").QueryDepositRequest): Promise<import("./gov/v1beta1/query").QueryDepositResponseSDKType>;
                deposits(request: import("./gov/v1beta1/query").QueryDepositsRequest): Promise<import("./gov/v1beta1/query").QueryDepositsResponseSDKType>;
                tallyResult(request: import("./gov/v1beta1/query").QueryTallyResultRequest): Promise<import("./gov/v1beta1/query").QueryTallyResultResponseSDKType>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("./staking/v1beta1/query").QueryValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorsResponseSDKType>;
                validator(request: import("./staking/v1beta1/query").QueryValidatorRequest): Promise<import("./staking/v1beta1/query").QueryValidatorResponseSDKType>;
                validatorDelegations(request: import("./staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorDelegationsResponseSDKType>;
                validatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponseSDKType>;
                delegation(request: import("./staking/v1beta1/query").QueryDelegationRequest): Promise<import("./staking/v1beta1/query").QueryDelegationResponseSDKType>;
                unbondingDelegation(request: import("./staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("./staking/v1beta1/query").QueryUnbondingDelegationResponseSDKType>;
                delegatorDelegations(request: import("./staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorDelegationsResponseSDKType>;
                delegatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponseSDKType>;
                redelegations(request: import("./staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("./staking/v1beta1/query").QueryRedelegationsResponseSDKType>;
                delegatorValidators(request: import("./staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                delegatorValidator(request: import("./staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorResponseSDKType>;
                historicalInfo(request: import("./staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("./staking/v1beta1/query").QueryHistoricalInfoResponseSDKType>;
                pool(request?: import("./staking/v1beta1/query").QueryPoolRequest): Promise<import("./staking/v1beta1/query").QueryPoolResponseSDKType>;
                params(request?: import("./staking/v1beta1/query").QueryParamsRequest): Promise<import("./staking/v1beta1/query").QueryParamsResponseSDKType>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("./tx/v1beta1/service").SimulateRequest): Promise<import("./tx/v1beta1/service").SimulateResponseSDKType>;
                getTx(request: import("./tx/v1beta1/service").GetTxRequest): Promise<import("./tx/v1beta1/service").GetTxResponseSDKType>;
                broadcastTx(request: import("./tx/v1beta1/service").BroadcastTxRequest): Promise<import("./tx/v1beta1/service").BroadcastTxResponseSDKType>;
                getTxsEvent(request: import("./tx/v1beta1/service").GetTxsEventRequest): Promise<import("./tx/v1beta1/service").GetTxsEventResponseSDKType>;
                getBlockWithTxs(request: import("./tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("./tx/v1beta1/service").GetBlockWithTxsResponseSDKType>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("./upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryCurrentPlanResponseSDKType>;
                appliedPlan(request: import("./upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryAppliedPlanResponseSDKType>;
                upgradedConsensusState(request: import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateResponseSDKType>;
                moduleVersions(request: import("./upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("./upgrade/v1beta1/query").QueryModuleVersionsResponseSDKType>;
                authority(request?: import("./upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("./upgrade/v1beta1/query").QueryAuthorityResponseSDKType>;
            };
        };
    };
}>;
