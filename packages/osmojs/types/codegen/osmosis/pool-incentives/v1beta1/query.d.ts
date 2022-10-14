import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface QueryGaugeIdsRequest {
    poolId: Long;
}
export interface QueryGaugeIdsRequestSDKType {
    pool_id: Long;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseSDKType {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: Long;
    duration?: Duration;
    gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    gauge_id: Long;
    duration?: DurationSDKType;
    gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoRequestSDKType {
}
export interface QueryDistrInfoResponse {
    distrInfo?: DistrInfo;
}
export interface QueryDistrInfoResponseSDKType {
    distr_info?: DistrInfoSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface QueryIncentivizedPoolsRequestSDKType {
}
export interface IncentivizedPool {
    poolId: Long;
    lockableDuration?: Duration;
    gaugeId: Long;
}
export interface IncentivizedPoolSDKType {
    pool_id: Long;
    lockable_duration?: DurationSDKType;
    gauge_id: Long;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesRequestSDKType {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
    data: GaugeSDKType[];
}
export declare const QueryGaugeIdsRequest: {
    encode(message: QueryGaugeIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromPartial(object: Partial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest;
};
export declare const QueryGaugeIdsResponse: {
    encode(message: QueryGaugeIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromPartial(object: Partial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromPartial(object: Partial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration;
};
export declare const QueryDistrInfoRequest: {
    encode(_: QueryDistrInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromPartial(_: Partial<QueryDistrInfoRequest>): QueryDistrInfoRequest;
};
export declare const QueryDistrInfoResponse: {
    encode(message: QueryDistrInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromPartial(object: Partial<QueryDistrInfoResponse>): QueryDistrInfoResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
};
export declare const QueryIncentivizedPoolsRequest: {
    encode(_: QueryIncentivizedPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest;
};
export declare const IncentivizedPool: {
    encode(message: IncentivizedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool;
    fromPartial(object: Partial<IncentivizedPool>): IncentivizedPool;
};
export declare const QueryIncentivizedPoolsResponse: {
    encode(message: QueryIncentivizedPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromPartial(_: Partial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromPartial(object: Partial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse;
};
