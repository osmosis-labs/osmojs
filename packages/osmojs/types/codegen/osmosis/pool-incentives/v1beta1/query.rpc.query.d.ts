import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
};
