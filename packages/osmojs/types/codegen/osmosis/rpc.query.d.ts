export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponseSDKType>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponseSDKType>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponseSDKType>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponseSDKType>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponseSDKType>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponseSDKType>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponseSDKType>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponseSDKType>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponseSDKType>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponseSDKType>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponseSDKType>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponseSDKType>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponseSDKType>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponseSDKType>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponseSDKType>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponseSDKType>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponseSDKType>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponseSDKType>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponseSDKType>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponseSDKType>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponseSDKType>;
                proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponseSDKType>;
                vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponseSDKType>;
                votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponseSDKType>;
                params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponseSDKType>;
                deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponseSDKType>;
                deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponseSDKType>;
                tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponseSDKType>;
            };
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponseSDKType>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponseSDKType>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponseSDKType>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponseSDKType>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponseSDKType>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponseSDKType>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponseSDKType>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponseSDKType>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponseSDKType>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponseSDKType>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponseSDKType>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponseSDKType>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponseSDKType>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponseSDKType>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponseSDKType>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponseSDKType>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponseSDKType>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponseSDKType>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponseSDKType>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponseSDKType>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponseSDKType>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponseSDKType>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponseSDKType>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponseSDKType>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponseSDKType>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponseSDKType>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponseSDKType>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponseSDKType>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponseSDKType>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponseSDKType>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponseSDKType>;
            };
        };
    };
    osmosis: {
        epochs: {
            v1beta1: {
                epochInfos(request?: import("./epochs/query").QueryEpochsInfoRequest): Promise<import("./epochs/query").QueryEpochsInfoResponseSDKType>;
                currentEpoch(request: import("./epochs/query").QueryCurrentEpochRequest): Promise<import("./epochs/query").QueryCurrentEpochResponseSDKType>;
            };
        };
        gamm: {
            v1beta1: {
                pools(request?: import("./gamm/v1beta1/query").QueryPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsResponseSDKType>;
                numPools(request?: import("./gamm/v1beta1/query").QueryNumPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryNumPoolsResponseSDKType>;
                totalLiquidity(request?: import("./gamm/v1beta1/query").QueryTotalLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalLiquidityResponseSDKType>;
                pool(request: import("./gamm/v1beta1/query").QueryPoolRequest): Promise<import("./gamm/v1beta1/query").QueryPoolResponseSDKType>;
                poolType(request: import("./gamm/v1beta1/query").QueryPoolTypeRequest): Promise<import("./gamm/v1beta1/query").QueryPoolTypeResponseSDKType>;
                poolParams(request: import("./gamm/v1beta1/query").QueryPoolParamsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolParamsResponseSDKType>;
                totalPoolLiquidity(request: import("./gamm/v1beta1/query").QueryTotalPoolLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalPoolLiquidityResponseSDKType>;
                totalShares(request: import("./gamm/v1beta1/query").QueryTotalSharesRequest): Promise<import("./gamm/v1beta1/query").QueryTotalSharesResponseSDKType>;
                spotPrice(request: import("./gamm/v1beta1/query").QuerySpotPriceRequest): Promise<import("./gamm/v1beta1/query").QuerySpotPriceResponseSDKType>;
                estimateSwapExactAmountIn(request: import("./gamm/v1beta1/query").QuerySwapExactAmountInRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountInResponseSDKType>;
                estimateSwapExactAmountOut(request: import("./gamm/v1beta1/query").QuerySwapExactAmountOutRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountOutResponseSDKType>;
            };
        };
        incentives: {
            moduleToDistributeCoins(request?: import("./incentives/query").ModuleToDistributeCoinsRequest): Promise<import("./incentives/query").ModuleToDistributeCoinsResponseSDKType>;
            moduleDistributedCoins(request?: import("./incentives/query").ModuleDistributedCoinsRequest): Promise<import("./incentives/query").ModuleDistributedCoinsResponseSDKType>;
            gaugeByID(request: import("./incentives/query").GaugeByIDRequest): Promise<import("./incentives/query").GaugeByIDResponseSDKType>;
            gauges(request?: import("./incentives/query").GaugesRequest): Promise<import("./incentives/query").GaugesResponseSDKType>;
            activeGauges(request?: import("./incentives/query").ActiveGaugesRequest): Promise<import("./incentives/query").ActiveGaugesResponseSDKType>;
            activeGaugesPerDenom(request: import("./incentives/query").ActiveGaugesPerDenomRequest): Promise<import("./incentives/query").ActiveGaugesPerDenomResponseSDKType>;
            upcomingGauges(request?: import("./incentives/query").UpcomingGaugesRequest): Promise<import("./incentives/query").UpcomingGaugesResponseSDKType>;
            upcomingGaugesPerDenom(request: import("./incentives/query").UpcomingGaugesPerDenomRequest): Promise<import("./incentives/query").UpcomingGaugesPerDenomResponseSDKType>;
            rewardsEst(request: import("./incentives/query").RewardsEstRequest): Promise<import("./incentives/query").RewardsEstResponseSDKType>;
            lockableDurations(request?: import("./incentives/query").QueryLockableDurationsRequest): Promise<import("./incentives/query").QueryLockableDurationsResponseSDKType>;
        };
        lockup: {
            moduleBalance(request?: import("./lockup/query").ModuleBalanceRequest): Promise<import("./lockup/query").ModuleBalanceResponseSDKType>;
            moduleLockedAmount(request?: import("./lockup/query").ModuleLockedAmountRequest): Promise<import("./lockup/query").ModuleLockedAmountResponseSDKType>;
            accountUnlockableCoins(request: import("./lockup/query").AccountUnlockableCoinsRequest): Promise<import("./lockup/query").AccountUnlockableCoinsResponseSDKType>;
            accountUnlockingCoins(request: import("./lockup/query").AccountUnlockingCoinsRequest): Promise<import("./lockup/query").AccountUnlockingCoinsResponseSDKType>;
            accountLockedCoins(request: import("./lockup/query").AccountLockedCoinsRequest): Promise<import("./lockup/query").AccountLockedCoinsResponseSDKType>;
            accountLockedPastTime(request: import("./lockup/query").AccountLockedPastTimeRequest): Promise<import("./lockup/query").AccountLockedPastTimeResponseSDKType>;
            accountLockedPastTimeNotUnlockingOnly(request: import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
            accountUnlockedBeforeTime(request: import("./lockup/query").AccountUnlockedBeforeTimeRequest): Promise<import("./lockup/query").AccountUnlockedBeforeTimeResponseSDKType>;
            accountLockedPastTimeDenom(request: import("./lockup/query").AccountLockedPastTimeDenomRequest): Promise<import("./lockup/query").AccountLockedPastTimeDenomResponseSDKType>;
            lockedDenom(request: import("./lockup/query").LockedDenomRequest): Promise<import("./lockup/query").LockedDenomResponseSDKType>;
            lockedByID(request: import("./lockup/query").LockedRequest): Promise<import("./lockup/query").LockedResponseSDKType>;
            syntheticLockupsByLockupID(request: import("./lockup/query").SyntheticLockupsByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupsByLockupIDResponseSDKType>;
            accountLockedLongerDuration(request: import("./lockup/query").AccountLockedLongerDurationRequest): Promise<import("./lockup/query").AccountLockedLongerDurationResponseSDKType>;
            accountLockedDuration(request: import("./lockup/query").AccountLockedDurationRequest): Promise<import("./lockup/query").AccountLockedDurationResponseSDKType>;
            accountLockedLongerDurationNotUnlockingOnly(request: import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
            accountLockedLongerDurationDenom(request: import("./lockup/query").AccountLockedLongerDurationDenomRequest): Promise<import("./lockup/query").AccountLockedLongerDurationDenomResponseSDKType>;
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponseSDKType>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponseSDKType>;
            };
        };
        poolincentives: {
            v1beta1: {
                gaugeIds(request: import("./pool-incentives/v1beta1/query").QueryGaugeIdsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryGaugeIdsResponseSDKType>;
                distrInfo(request?: import("./pool-incentives/v1beta1/query").QueryDistrInfoRequest): Promise<import("./pool-incentives/v1beta1/query").QueryDistrInfoResponseSDKType>;
                params(request?: import("./pool-incentives/v1beta1/query").QueryParamsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryParamsResponseSDKType>;
                lockableDurations(request?: import("./pool-incentives/v1beta1/query").QueryLockableDurationsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryLockableDurationsResponseSDKType>;
                incentivizedPools(request?: import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponseSDKType>;
                externalIncentiveGauges(request?: import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesRequest): Promise<import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponseSDKType>;
            };
        };
        streamswap: {
            v1: {
                sales(request?: import("./streamswap/v1/query").QuerySales): Promise<import("./streamswap/v1/query").QuerySalesResponseSDKType>;
                sale(request: import("./streamswap/v1/query").QuerySale): Promise<import("./streamswap/v1/query").QuerySaleResponseSDKType>;
                userPosition(request: import("./streamswap/v1/query").QueryUserPosition): Promise<import("./streamswap/v1/query").QueryUserPositionResponseSDKType>;
            };
        };
        superfluid: {
            params(request?: import("./superfluid/query").QueryParamsRequest): Promise<import("./superfluid/query").QueryParamsResponseSDKType>;
            assetType(request: import("./superfluid/query").AssetTypeRequest): Promise<import("./superfluid/query").AssetTypeResponseSDKType>;
            allAssets(request?: import("./superfluid/query").AllAssetsRequest): Promise<import("./superfluid/query").AllAssetsResponseSDKType>;
            assetMultiplier(request: import("./superfluid/query").AssetMultiplierRequest): Promise<import("./superfluid/query").AssetMultiplierResponseSDKType>;
            allIntermediaryAccounts(request?: import("./superfluid/query").AllIntermediaryAccountsRequest): Promise<import("./superfluid/query").AllIntermediaryAccountsResponseSDKType>;
            connectedIntermediaryAccount(request: import("./superfluid/query").ConnectedIntermediaryAccountRequest): Promise<import("./superfluid/query").ConnectedIntermediaryAccountResponseSDKType>;
            totalSuperfluidDelegations(request?: import("./superfluid/query").TotalSuperfluidDelegationsRequest): Promise<import("./superfluid/query").TotalSuperfluidDelegationsResponseSDKType>;
            superfluidDelegationAmount(request: import("./superfluid/query").SuperfluidDelegationAmountRequest): Promise<import("./superfluid/query").SuperfluidDelegationAmountResponseSDKType>;
            superfluidDelegationsByDelegator(request: import("./superfluid/query").SuperfluidDelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByDelegatorResponseSDKType>;
            superfluidUndelegationsByDelegator(request: import("./superfluid/query").SuperfluidUndelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidUndelegationsByDelegatorResponseSDKType>;
            superfluidDelegationsByValidatorDenom(request: import("./superfluid/query").SuperfluidDelegationsByValidatorDenomRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByValidatorDenomResponseSDKType>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>;
            totalDelegationByDelegator(request: import("./superfluid/query").QueryTotalDelegationByDelegatorRequest): Promise<import("./superfluid/query").QueryTotalDelegationByDelegatorResponseSDKType>;
        };
        tokenfactory: {
            v1beta1: {
                params(request?: import("./tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("./tokenfactory/v1beta1/query").QueryParamsResponseSDKType>;
                denomAuthorityMetadata(request: import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponseSDKType>;
                denomsFromCreator(request: import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponseSDKType>;
            };
        };
        twap: {
            v1beta1: {
                params(request?: import("./twap/v1beta1/query").ParamsRequest): Promise<import("./twap/v1beta1/query").ParamsResponseSDKType>;
                arithmeticTwap(request: import("./twap/v1beta1/query").ArithmeticTwapRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapResponseSDKType>;
                arithmeticTwapToNow(request: import("./twap/v1beta1/query").ArithmeticTwapToNowRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapToNowResponseSDKType>;
            };
        };
        txfees: {
            v1beta1: {
                feeTokens(request?: import("./txfees/v1beta1/query").QueryFeeTokensRequest): Promise<import("./txfees/v1beta1/query").QueryFeeTokensResponseSDKType>;
                denomSpotPrice(request: import("./txfees/v1beta1/query").QueryDenomSpotPriceRequest): Promise<import("./txfees/v1beta1/query").QueryDenomSpotPriceResponseSDKType>;
                denomPoolId(request: import("./txfees/v1beta1/query").QueryDenomPoolIdRequest): Promise<import("./txfees/v1beta1/query").QueryDenomPoolIdResponseSDKType>;
                baseDenom(request?: import("./txfees/v1beta1/query").QueryBaseDenomRequest): Promise<import("./txfees/v1beta1/query").QueryBaseDenomResponseSDKType>;
            };
        };
    };
}>;
