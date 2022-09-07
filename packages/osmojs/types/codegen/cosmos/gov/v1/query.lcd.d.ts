import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    proposal(params: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(params: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(params: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(params: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
