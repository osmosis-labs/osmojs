import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType>;
};
