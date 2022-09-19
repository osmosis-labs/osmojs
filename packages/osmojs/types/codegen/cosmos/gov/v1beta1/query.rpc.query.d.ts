import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
};
