import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    distrInfo(params: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    lockableDurations(params: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    incentivizedPools(params: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges(params: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
