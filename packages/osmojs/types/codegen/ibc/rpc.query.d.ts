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
    ibc: {
        applications: {
            transfer: {
                v1: {
                    denomTrace(request: import("./applications/transfer/v1/query").QueryDenomTraceRequest): Promise<import("./applications/transfer/v1/query").QueryDenomTraceResponseSDKType>;
                    denomTraces(request?: import("./applications/transfer/v1/query").QueryDenomTracesRequest): Promise<import("./applications/transfer/v1/query").QueryDenomTracesResponseSDKType>;
                    params(request?: import("./applications/transfer/v1/query").QueryParamsRequest): Promise<import("./applications/transfer/v1/query").QueryParamsResponseSDKType>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    channel(request: import("./core/channel/v1/query").QueryChannelRequest): Promise<import("./core/channel/v1/query").QueryChannelResponseSDKType>;
                    channels(request?: import("./core/channel/v1/query").QueryChannelsRequest): Promise<import("./core/channel/v1/query").QueryChannelsResponseSDKType>;
                    connectionChannels(request: import("./core/channel/v1/query").QueryConnectionChannelsRequest): Promise<import("./core/channel/v1/query").QueryConnectionChannelsResponseSDKType>;
                    channelClientState(request: import("./core/channel/v1/query").QueryChannelClientStateRequest): Promise<import("./core/channel/v1/query").QueryChannelClientStateResponseSDKType>;
                    channelConsensusState(request: import("./core/channel/v1/query").QueryChannelConsensusStateRequest): Promise<import("./core/channel/v1/query").QueryChannelConsensusStateResponseSDKType>;
                    packetCommitment(request: import("./core/channel/v1/query").QueryPacketCommitmentRequest): Promise<import("./core/channel/v1/query").QueryPacketCommitmentResponseSDKType>;
                    packetCommitments(request: import("./core/channel/v1/query").QueryPacketCommitmentsRequest): Promise<import("./core/channel/v1/query").QueryPacketCommitmentsResponseSDKType>;
                    packetReceipt(request: import("./core/channel/v1/query").QueryPacketReceiptRequest): Promise<import("./core/channel/v1/query").QueryPacketReceiptResponseSDKType>;
                    packetAcknowledgement(request: import("./core/channel/v1/query").QueryPacketAcknowledgementRequest): Promise<import("./core/channel/v1/query").QueryPacketAcknowledgementResponseSDKType>;
                    packetAcknowledgements(request: import("./core/channel/v1/query").QueryPacketAcknowledgementsRequest): Promise<import("./core/channel/v1/query").QueryPacketAcknowledgementsResponseSDKType>;
                    unreceivedPackets(request: import("./core/channel/v1/query").QueryUnreceivedPacketsRequest): Promise<import("./core/channel/v1/query").QueryUnreceivedPacketsResponseSDKType>;
                    unreceivedAcks(request: import("./core/channel/v1/query").QueryUnreceivedAcksRequest): Promise<import("./core/channel/v1/query").QueryUnreceivedAcksResponseSDKType>;
                    nextSequenceReceive(request: import("./core/channel/v1/query").QueryNextSequenceReceiveRequest): Promise<import("./core/channel/v1/query").QueryNextSequenceReceiveResponseSDKType>;
                };
            };
            client: {
                v1: {
                    clientState(request: import("./core/client/v1/query").QueryClientStateRequest): Promise<import("./core/client/v1/query").QueryClientStateResponseSDKType>;
                    clientStates(request?: import("./core/client/v1/query").QueryClientStatesRequest): Promise<import("./core/client/v1/query").QueryClientStatesResponseSDKType>;
                    consensusState(request: import("./core/client/v1/query").QueryConsensusStateRequest): Promise<import("./core/client/v1/query").QueryConsensusStateResponseSDKType>;
                    consensusStates(request: import("./core/client/v1/query").QueryConsensusStatesRequest): Promise<import("./core/client/v1/query").QueryConsensusStatesResponseSDKType>;
                    clientStatus(request: import("./core/client/v1/query").QueryClientStatusRequest): Promise<import("./core/client/v1/query").QueryClientStatusResponseSDKType>;
                    clientParams(request?: import("./core/client/v1/query").QueryClientParamsRequest): Promise<import("./core/client/v1/query").QueryClientParamsResponseSDKType>;
                    upgradedClientState(request?: import("./core/client/v1/query").QueryUpgradedClientStateRequest): Promise<import("./core/client/v1/query").QueryUpgradedClientStateResponseSDKType>;
                    upgradedConsensusState(request?: import("./core/client/v1/query").QueryUpgradedConsensusStateRequest): Promise<import("./core/client/v1/query").QueryUpgradedConsensusStateResponseSDKType>;
                };
            };
            connection: {
                v1: {
                    connection(request: import("./core/connection/v1/query").QueryConnectionRequest): Promise<import("./core/connection/v1/query").QueryConnectionResponseSDKType>;
                    connections(request?: import("./core/connection/v1/query").QueryConnectionsRequest): Promise<import("./core/connection/v1/query").QueryConnectionsResponseSDKType>;
                    clientConnections(request: import("./core/connection/v1/query").QueryClientConnectionsRequest): Promise<import("./core/connection/v1/query").QueryClientConnectionsResponseSDKType>;
                    connectionClientState(request: import("./core/connection/v1/query").QueryConnectionClientStateRequest): Promise<import("./core/connection/v1/query").QueryConnectionClientStateResponseSDKType>;
                    connectionConsensusState(request: import("./core/connection/v1/query").QueryConnectionConsensusStateRequest): Promise<import("./core/connection/v1/query").QueryConnectionConsensusStateResponseSDKType>;
                };
            };
        };
    };
}>;
