import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    moduleAccountBalance(params: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
