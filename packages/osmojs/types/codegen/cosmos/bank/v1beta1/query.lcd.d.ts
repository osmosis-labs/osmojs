import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryTotalSupplyWithoutOffsetRequest, QueryTotalSupplyWithoutOffsetResponseSDKType, QuerySupplyOfWithoutOffsetRequest, QuerySupplyOfWithoutOffsetResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    totalSupply(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    totalSupplyWithoutOffset(params?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponseSDKType>;
    supplyOfWithoutOffset(params: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
    denomsMetadata(params?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
    baseDenom(params: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
}
