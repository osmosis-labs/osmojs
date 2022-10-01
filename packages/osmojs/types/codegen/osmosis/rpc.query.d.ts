export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    osmosis: {
        epochs: {
            v1beta1: {
                epochInfos(request?: import("./epochs/query").QueryEpochsInfoRequest): Promise<import("./epochs/query").QueryEpochsInfoResponse>;
                currentEpoch(request: import("./epochs/query").QueryCurrentEpochRequest): Promise<import("./epochs/query").QueryCurrentEpochResponse>;
            };
        };
        gamm: {
            v1beta1: {
                pools(request?: import("./gamm/v1beta1/query").QueryPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsResponse>;
                numPools(request?: import("./gamm/v1beta1/query").QueryNumPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryNumPoolsResponse>;
                totalLiquidity(request?: import("./gamm/v1beta1/query").QueryTotalLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalLiquidityResponse>;
                pool(request: import("./gamm/v1beta1/query").QueryPoolRequest): Promise<import("./gamm/v1beta1/query").QueryPoolResponse>;
                poolType(request: import("./gamm/v1beta1/query").QueryPoolTypeRequest): Promise<import("./gamm/v1beta1/query").QueryPoolTypeResponse>;
                poolParams(request: import("./gamm/v1beta1/query").QueryPoolParamsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolParamsResponse>;
                totalPoolLiquidity(request: import("./gamm/v1beta1/query").QueryTotalPoolLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalPoolLiquidityResponse>;
                totalShares(request: import("./gamm/v1beta1/query").QueryTotalSharesRequest): Promise<import("./gamm/v1beta1/query").QueryTotalSharesResponse>;
                spotPrice(request: import("./gamm/v1beta1/query").QuerySpotPriceRequest): Promise<import("./gamm/v1beta1/query").QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: import("./gamm/v1beta1/query").QuerySwapExactAmountInRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: import("./gamm/v1beta1/query").QuerySwapExactAmountOutRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountOutResponse>;
            };
        };
        incentives: {
            moduleToDistributeCoins(request?: import("./incentives/query").ModuleToDistributeCoinsRequest): Promise<import("./incentives/query").ModuleToDistributeCoinsResponse>;
            moduleDistributedCoins(request?: import("./incentives/query").ModuleDistributedCoinsRequest): Promise<import("./incentives/query").ModuleDistributedCoinsResponse>;
            gaugeByID(request: import("./incentives/query").GaugeByIDRequest): Promise<import("./incentives/query").GaugeByIDResponse>;
            gauges(request?: import("./incentives/query").GaugesRequest): Promise<import("./incentives/query").GaugesResponse>;
            activeGauges(request?: import("./incentives/query").ActiveGaugesRequest): Promise<import("./incentives/query").ActiveGaugesResponse>;
            activeGaugesPerDenom(request: import("./incentives/query").ActiveGaugesPerDenomRequest): Promise<import("./incentives/query").ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: import("./incentives/query").UpcomingGaugesRequest): Promise<import("./incentives/query").UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: import("./incentives/query").UpcomingGaugesPerDenomRequest): Promise<import("./incentives/query").UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: import("./incentives/query").RewardsEstRequest): Promise<import("./incentives/query").RewardsEstResponse>;
            lockableDurations(request?: import("./incentives/query").QueryLockableDurationsRequest): Promise<import("./incentives/query").QueryLockableDurationsResponse>;
        };
        lockup: {
            moduleBalance(request?: import("./lockup/query").ModuleBalanceRequest): Promise<import("./lockup/query").ModuleBalanceResponse>;
            moduleLockedAmount(request?: import("./lockup/query").ModuleLockedAmountRequest): Promise<import("./lockup/query").ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: import("./lockup/query").AccountUnlockableCoinsRequest): Promise<import("./lockup/query").AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: import("./lockup/query").AccountUnlockingCoinsRequest): Promise<import("./lockup/query").AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: import("./lockup/query").AccountLockedCoinsRequest): Promise<import("./lockup/query").AccountLockedCoinsResponse>;
            accountLockedPastTime(request: import("./lockup/query").AccountLockedPastTimeRequest): Promise<import("./lockup/query").AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: import("./lockup/query").AccountUnlockedBeforeTimeRequest): Promise<import("./lockup/query").AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: import("./lockup/query").AccountLockedPastTimeDenomRequest): Promise<import("./lockup/query").AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: import("./lockup/query").LockedDenomRequest): Promise<import("./lockup/query").LockedDenomResponse>;
            lockedByID(request: import("./lockup/query").LockedRequest): Promise<import("./lockup/query").LockedResponse>;
            syntheticLockupsByLockupID(request: import("./lockup/query").SyntheticLockupsByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: import("./lockup/query").AccountLockedLongerDurationRequest): Promise<import("./lockup/query").AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: import("./lockup/query").AccountLockedDurationRequest): Promise<import("./lockup/query").AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: import("./lockup/query").AccountLockedLongerDurationDenomRequest): Promise<import("./lockup/query").AccountLockedLongerDurationDenomResponse>;
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponse>;
            };
        };
        poolincentives: {
            v1beta1: {
                gaugeIds(request: import("./pool-incentives/v1beta1/query").QueryGaugeIdsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryGaugeIdsResponse>;
                distrInfo(request?: import("./pool-incentives/v1beta1/query").QueryDistrInfoRequest): Promise<import("./pool-incentives/v1beta1/query").QueryDistrInfoResponse>;
                params(request?: import("./pool-incentives/v1beta1/query").QueryParamsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryParamsResponse>;
                lockableDurations(request?: import("./pool-incentives/v1beta1/query").QueryLockableDurationsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryLockableDurationsResponse>;
                incentivizedPools(request?: import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesRequest): Promise<import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>;
            };
        };
        streamswap: {
            v1: {
                sales(request?: import("./streamswap/v1/query").QuerySales): Promise<import("./streamswap/v1/query").QuerySalesResponse>;
                sale(request: import("./streamswap/v1/query").QuerySale): Promise<import("./streamswap/v1/query").QuerySaleResponse>;
                userPosition(request: import("./streamswap/v1/query").QueryUserPosition): Promise<import("./streamswap/v1/query").QueryUserPositionResponse>;
            };
        };
        superfluid: {
            params(request?: import("./superfluid/query").QueryParamsRequest): Promise<import("./superfluid/query").QueryParamsResponse>;
            assetType(request: import("./superfluid/query").AssetTypeRequest): Promise<import("./superfluid/query").AssetTypeResponse>;
            allAssets(request?: import("./superfluid/query").AllAssetsRequest): Promise<import("./superfluid/query").AllAssetsResponse>;
            assetMultiplier(request: import("./superfluid/query").AssetMultiplierRequest): Promise<import("./superfluid/query").AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: import("./superfluid/query").AllIntermediaryAccountsRequest): Promise<import("./superfluid/query").AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: import("./superfluid/query").ConnectedIntermediaryAccountRequest): Promise<import("./superfluid/query").ConnectedIntermediaryAccountResponse>;
            totalSuperfluidDelegations(request?: import("./superfluid/query").TotalSuperfluidDelegationsRequest): Promise<import("./superfluid/query").TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: import("./superfluid/query").SuperfluidDelegationAmountRequest): Promise<import("./superfluid/query").SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: import("./superfluid/query").SuperfluidDelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: import("./superfluid/query").SuperfluidUndelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: import("./superfluid/query").SuperfluidDelegationsByValidatorDenomRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: import("./superfluid/query").QueryTotalDelegationByDelegatorRequest): Promise<import("./superfluid/query").QueryTotalDelegationByDelegatorResponse>;
        };
        tokenfactory: {
            v1beta1: {
                params(request?: import("./tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("./tokenfactory/v1beta1/query").QueryParamsResponse>;
                denomAuthorityMetadata(request: import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
            };
        };
        twap: {
            v1beta1: {
                params(request?: import("./twap/v1beta1/query").ParamsRequest): Promise<import("./twap/v1beta1/query").ParamsResponse>;
                arithmeticTwap(request: import("./twap/v1beta1/query").ArithmeticTwapRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: import("./twap/v1beta1/query").ArithmeticTwapToNowRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapToNowResponse>;
            };
        };
        txfees: {
            v1beta1: {
                feeTokens(request?: import("./txfees/v1beta1/query").QueryFeeTokensRequest): Promise<import("./txfees/v1beta1/query").QueryFeeTokensResponse>;
                denomSpotPrice(request: import("./txfees/v1beta1/query").QueryDenomSpotPriceRequest): Promise<import("./txfees/v1beta1/query").QueryDenomSpotPriceResponse>;
                denomPoolId(request: import("./txfees/v1beta1/query").QueryDenomPoolIdRequest): Promise<import("./txfees/v1beta1/query").QueryDenomPoolIdResponse>;
                baseDenom(request?: import("./txfees/v1beta1/query").QueryBaseDenomRequest): Promise<import("./txfees/v1beta1/query").QueryBaseDenomResponse>;
            };
        };
    };
}>;
