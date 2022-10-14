import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType>;
    distrInfo(_params?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    lockableDurations(_params?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
    incentivizedPools(_params?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
    externalIncentiveGauges(_params?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType>;
}
