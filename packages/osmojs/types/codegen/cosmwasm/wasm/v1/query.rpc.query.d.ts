import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType>;
};
