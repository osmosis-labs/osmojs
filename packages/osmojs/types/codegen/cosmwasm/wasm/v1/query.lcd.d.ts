import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
    contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType>;
    contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
    allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
    rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
    smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType>;
    code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    codes(params?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
    pinnedCodes(params?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType>;
}
