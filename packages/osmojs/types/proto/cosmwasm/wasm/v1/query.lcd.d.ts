import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(params: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(params: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(params: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
