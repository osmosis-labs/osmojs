import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoAmino, DistrInfoSDKType, Params, ParamsAmino, ParamsSDKType } from "./incentives";
import { Gauge, GaugeAmino, GaugeSDKType } from "../../incentives/gauge";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryGaugeIdsRequest {
    poolId: Long;
}
export interface QueryGaugeIdsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest";
    value: Uint8Array;
}
export interface QueryGaugeIdsRequestAmino {
    pool_id: string;
}
export interface QueryGaugeIdsRequestAminoMsg {
    type: "osmosis/poolincentives/query-gauge-ids-request";
    value: QueryGaugeIdsRequestAmino;
}
export interface QueryGaugeIdsRequestSDKType {
    pool_id: Long;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse";
    value: Uint8Array;
}
export interface QueryGaugeIdsResponseAmino {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationAmino[];
}
export interface QueryGaugeIdsResponseAminoMsg {
    type: "osmosis/poolincentives/query-gauge-ids-response";
    value: QueryGaugeIdsResponseAmino;
}
export interface QueryGaugeIdsResponseSDKType {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: Long;
    duration?: Duration;
    gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration";
    value: Uint8Array;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    gauge_id: string;
    duration?: DurationAmino;
    gauge_incentive_percentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg {
    type: "osmosis/poolincentives/gauge-id-with-duration";
    value: QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    gauge_id: Long;
    duration?: DurationSDKType;
    gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest";
    value: Uint8Array;
}
export interface QueryDistrInfoRequestAmino {
}
export interface QueryDistrInfoRequestAminoMsg {
    type: "osmosis/poolincentives/query-distr-info-request";
    value: QueryDistrInfoRequestAmino;
}
export interface QueryDistrInfoRequestSDKType {
}
export interface QueryDistrInfoResponse {
    distrInfo?: DistrInfo;
}
export interface QueryDistrInfoResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse";
    value: Uint8Array;
}
export interface QueryDistrInfoResponseAmino {
    distr_info?: DistrInfoAmino;
}
export interface QueryDistrInfoResponseAminoMsg {
    type: "osmosis/poolincentives/query-distr-info-response";
    value: QueryDistrInfoResponseAmino;
}
export interface QueryDistrInfoResponseSDKType {
    distr_info?: DistrInfoSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/poolincentives/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/poolincentives/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest";
    value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestAminoMsg {
    type: "osmosis/poolincentives/query-lockable-durations-request";
    value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse";
    value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
    lockable_durations: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
    type: "osmosis/poolincentives/query-lockable-durations-response";
    value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface QueryIncentivizedPoolsRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestAmino {
}
export interface QueryIncentivizedPoolsRequestAminoMsg {
    type: "osmosis/poolincentives/query-incentivized-pools-request";
    value: QueryIncentivizedPoolsRequestAmino;
}
export interface QueryIncentivizedPoolsRequestSDKType {
}
export interface IncentivizedPool {
    poolId: Long;
    lockableDuration?: Duration;
    gaugeId: Long;
}
export interface IncentivizedPoolProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool";
    value: Uint8Array;
}
export interface IncentivizedPoolAmino {
    pool_id: string;
    lockable_duration?: DurationAmino;
    gauge_id: string;
}
export interface IncentivizedPoolAminoMsg {
    type: "osmosis/poolincentives/incentivized-pool";
    value: IncentivizedPoolAmino;
}
export interface IncentivizedPoolSDKType {
    pool_id: Long;
    lockable_duration?: DurationSDKType;
    gauge_id: Long;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsResponseAmino {
    incentivized_pools: IncentivizedPoolAmino[];
}
export interface QueryIncentivizedPoolsResponseAminoMsg {
    type: "osmosis/poolincentives/query-incentivized-pools-response";
    value: QueryIncentivizedPoolsResponseAmino;
}
export interface QueryIncentivizedPoolsResponseSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesRequestProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest";
    value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesRequestAmino {
}
export interface QueryExternalIncentiveGaugesRequestAminoMsg {
    type: "osmosis/poolincentives/query-external-incentive-gauges-request";
    value: QueryExternalIncentiveGaugesRequestAmino;
}
export interface QueryExternalIncentiveGaugesRequestSDKType {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse";
    value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesResponseAmino {
    data: GaugeAmino[];
}
export interface QueryExternalIncentiveGaugesResponseAminoMsg {
    type: "osmosis/poolincentives/query-external-incentive-gauges-response";
    value: QueryExternalIncentiveGaugesResponseAmino;
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
    data: GaugeSDKType[];
}
export declare const QueryGaugeIdsRequest: {
    typeUrl: string;
    encode(message: QueryGaugeIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromPartial(object: Partial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest;
    fromAmino(object: QueryGaugeIdsRequestAmino): QueryGaugeIdsRequest;
    toAmino(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAmino;
    fromAminoMsg(object: QueryGaugeIdsRequestAminoMsg): QueryGaugeIdsRequest;
    toAminoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsRequestProtoMsg): QueryGaugeIdsRequest;
    toProto(message: QueryGaugeIdsRequest): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestProtoMsg;
};
export declare const QueryGaugeIdsResponse: {
    typeUrl: string;
    encode(message: QueryGaugeIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromPartial(object: Partial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse;
    fromAmino(object: QueryGaugeIdsResponseAmino): QueryGaugeIdsResponse;
    toAmino(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAmino;
    fromAminoMsg(object: QueryGaugeIdsResponseAminoMsg): QueryGaugeIdsResponse;
    toAminoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsResponseProtoMsg): QueryGaugeIdsResponse;
    toProto(message: QueryGaugeIdsResponse): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseProtoMsg;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    typeUrl: string;
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromPartial(object: Partial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromAmino(object: QueryGaugeIdsResponse_GaugeIdWithDurationAmino): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toAmino(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
    fromAminoMsg(object: QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toAminoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
    fromProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toProto(message: QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
    toProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
};
export declare const QueryDistrInfoRequest: {
    typeUrl: string;
    encode(_: QueryDistrInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromPartial(_: Partial<QueryDistrInfoRequest>): QueryDistrInfoRequest;
    fromAmino(_: QueryDistrInfoRequestAmino): QueryDistrInfoRequest;
    toAmino(_: QueryDistrInfoRequest): QueryDistrInfoRequestAmino;
    fromAminoMsg(object: QueryDistrInfoRequestAminoMsg): QueryDistrInfoRequest;
    toAminoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestAminoMsg;
    fromProtoMsg(message: QueryDistrInfoRequestProtoMsg): QueryDistrInfoRequest;
    toProto(message: QueryDistrInfoRequest): Uint8Array;
    toProtoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestProtoMsg;
};
export declare const QueryDistrInfoResponse: {
    typeUrl: string;
    encode(message: QueryDistrInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromPartial(object: Partial<QueryDistrInfoResponse>): QueryDistrInfoResponse;
    fromAmino(object: QueryDistrInfoResponseAmino): QueryDistrInfoResponse;
    toAmino(message: QueryDistrInfoResponse): QueryDistrInfoResponseAmino;
    fromAminoMsg(object: QueryDistrInfoResponseAminoMsg): QueryDistrInfoResponse;
    toAminoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseAminoMsg;
    fromProtoMsg(message: QueryDistrInfoResponseProtoMsg): QueryDistrInfoResponse;
    toProto(message: QueryDistrInfoResponse): Uint8Array;
    toProtoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryLockableDurationsRequest: {
    typeUrl: string;
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
    fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest;
    toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino;
    fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest;
    toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest;
    toProto(message: QueryLockableDurationsRequest): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg;
};
export declare const QueryLockableDurationsResponse: {
    typeUrl: string;
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
    fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse;
    toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino;
    fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse;
    toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse;
    toProto(message: QueryLockableDurationsResponse): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg;
};
export declare const QueryIncentivizedPoolsRequest: {
    typeUrl: string;
    encode(_: QueryIncentivizedPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest;
    fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest;
    toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsRequestAminoMsg): QueryIncentivizedPoolsRequest;
    toAminoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPoolsRequestProtoMsg): QueryIncentivizedPoolsRequest;
    toProto(message: QueryIncentivizedPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestProtoMsg;
};
export declare const IncentivizedPool: {
    typeUrl: string;
    encode(message: IncentivizedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool;
    fromPartial(object: Partial<IncentivizedPool>): IncentivizedPool;
    fromAmino(object: IncentivizedPoolAmino): IncentivizedPool;
    toAmino(message: IncentivizedPool): IncentivizedPoolAmino;
    fromAminoMsg(object: IncentivizedPoolAminoMsg): IncentivizedPool;
    toAminoMsg(message: IncentivizedPool): IncentivizedPoolAminoMsg;
    fromProtoMsg(message: IncentivizedPoolProtoMsg): IncentivizedPool;
    toProto(message: IncentivizedPool): Uint8Array;
    toProtoMsg(message: IncentivizedPool): IncentivizedPoolProtoMsg;
};
export declare const QueryIncentivizedPoolsResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse;
    fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse;
    toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsResponseAminoMsg): QueryIncentivizedPoolsResponse;
    toAminoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPoolsResponseProtoMsg): QueryIncentivizedPoolsResponse;
    toProto(message: QueryIncentivizedPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseProtoMsg;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    typeUrl: string;
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromPartial(_: Partial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest;
    fromAmino(_: QueryExternalIncentiveGaugesRequestAmino): QueryExternalIncentiveGaugesRequest;
    toAmino(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAmino;
    fromAminoMsg(object: QueryExternalIncentiveGaugesRequestAminoMsg): QueryExternalIncentiveGaugesRequest;
    toAminoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAminoMsg;
    fromProtoMsg(message: QueryExternalIncentiveGaugesRequestProtoMsg): QueryExternalIncentiveGaugesRequest;
    toProto(message: QueryExternalIncentiveGaugesRequest): Uint8Array;
    toProtoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestProtoMsg;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    typeUrl: string;
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromPartial(object: Partial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse;
    fromAmino(object: QueryExternalIncentiveGaugesResponseAmino): QueryExternalIncentiveGaugesResponse;
    toAmino(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAmino;
    fromAminoMsg(object: QueryExternalIncentiveGaugesResponseAminoMsg): QueryExternalIncentiveGaugesResponse;
    toAminoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAminoMsg;
    fromProtoMsg(message: QueryExternalIncentiveGaugesResponseProtoMsg): QueryExternalIncentiveGaugesResponse;
    toProto(message: QueryExternalIncentiveGaugesResponse): Uint8Array;
    toProtoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseProtoMsg;
};
