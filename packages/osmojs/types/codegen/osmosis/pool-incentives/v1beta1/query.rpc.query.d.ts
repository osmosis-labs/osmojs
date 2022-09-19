import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType>;
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType>;
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType>;
    distrInfo(request: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
    incentivizedPools(request: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
    externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType>;
};
