export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("./app/v1alpha1/query").QueryConfigRequest): Promise<import("./app/v1alpha1/query").QueryConfigResponseSDKType>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("./auth/v1beta1/query").QueryAccountsRequest): Promise<import("./auth/v1beta1/query").QueryAccountsResponseSDKType>;
                account(request: import("./auth/v1beta1/query").QueryAccountRequest): Promise<import("./auth/v1beta1/query").QueryAccountResponseSDKType>;
                params(request?: import("./auth/v1beta1/query").QueryParamsRequest): Promise<import("./auth/v1beta1/query").QueryParamsResponseSDKType>;
                moduleAccounts(request?: import("./auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("./auth/v1beta1/query").QueryModuleAccountsResponseSDKType>;
                bech32Prefix(request?: import("./auth/v1beta1/query").Bech32PrefixRequest): Promise<import("./auth/v1beta1/query").Bech32PrefixResponseSDKType>;
                addressBytesToString(request: import("./auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("./auth/v1beta1/query").AddressBytesToStringResponseSDKType>;
                addressStringToBytes(request: import("./auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("./auth/v1beta1/query").AddressStringToBytesResponseSDKType>;
            };
        };
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
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("./base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("./base/tendermint/v1beta1/query").GetNodeInfoResponseSDKType>;
                    getSyncing(request?: import("./base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("./base/tendermint/v1beta1/query").GetSyncingResponseSDKType>;
                    getLatestBlock(request?: import("./base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestBlockResponseSDKType>;
                    getBlockByHeight(request: import("./base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetBlockByHeightResponseSDKType>;
                    getLatestValidatorSet(request?: import("./base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestValidatorSetResponseSDKType>;
                    getValidatorSetByHeight(request: import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightResponseSDKType>;
                };
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
        evidence: {
            v1beta1: {
                evidence(request: import("./evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("./evidence/v1beta1/query").QueryEvidenceResponseSDKType>;
                allEvidence(request?: import("./evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("./evidence/v1beta1/query").QueryAllEvidenceResponseSDKType>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("./feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowanceResponseSDKType>;
                allowances(request: import("./feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesResponseSDKType>;
                allowancesByGranter(request: import("./feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesByGranterResponseSDKType>;
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
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponseSDKType>;
                inflation(request?: import("./mint/v1beta1/query").QueryInflationRequest): Promise<import("./mint/v1beta1/query").QueryInflationResponseSDKType>;
                annualProvisions(request?: import("./mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryAnnualProvisionsResponseSDKType>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("./nft/v1beta1/query").QueryBalanceRequest): Promise<import("./nft/v1beta1/query").QueryBalanceResponseSDKType>;
                owner(request: import("./nft/v1beta1/query").QueryOwnerRequest): Promise<import("./nft/v1beta1/query").QueryOwnerResponseSDKType>;
                supply(request: import("./nft/v1beta1/query").QuerySupplyRequest): Promise<import("./nft/v1beta1/query").QuerySupplyResponseSDKType>;
                nFTs(request: import("./nft/v1beta1/query").QueryNFTsRequest): Promise<import("./nft/v1beta1/query").QueryNFTsResponseSDKType>;
                nFT(request: import("./nft/v1beta1/query").QueryNFTRequest): Promise<import("./nft/v1beta1/query").QueryNFTResponseSDKType>;
                class(request: import("./nft/v1beta1/query").QueryClassRequest): Promise<import("./nft/v1beta1/query").QueryClassResponseSDKType>;
                classes(request?: import("./nft/v1beta1/query").QueryClassesRequest): Promise<import("./nft/v1beta1/query").QueryClassesResponseSDKType>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("./params/v1beta1/query").QueryParamsRequest): Promise<import("./params/v1beta1/query").QueryParamsResponseSDKType>;
                subspaces(request?: import("./params/v1beta1/query").QuerySubspacesRequest): Promise<import("./params/v1beta1/query").QuerySubspacesResponseSDKType>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("./slashing/v1beta1/query").QueryParamsRequest): Promise<import("./slashing/v1beta1/query").QueryParamsResponseSDKType>;
                signingInfo(request: import("./slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("./slashing/v1beta1/query").QuerySigningInfoResponseSDKType>;
                signingInfos(request?: import("./slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("./slashing/v1beta1/query").QuerySigningInfosResponseSDKType>;
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
