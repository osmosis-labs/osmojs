import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    totalSupply(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(params?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
}
