import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    distrInfo(_params?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    lockableDurations(_params?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    incentivizedPools(_params?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges(_params?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
