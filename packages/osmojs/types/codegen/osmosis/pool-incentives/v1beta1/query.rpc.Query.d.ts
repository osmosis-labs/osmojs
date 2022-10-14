import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export interface Query {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    /** Params returns pool incentives params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** LockableDurations returns lock durations for pools. */
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    /** IncentivizedPools returns currently incentivized pools */
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    /** ExternalIncentiveGauges returns external incentive gauges. */
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
