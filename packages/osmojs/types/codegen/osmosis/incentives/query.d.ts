import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface ModuleDistributedCoinsRequest {
}
export interface ModuleDistributedCoinsRequestSDKType {
}
export interface ModuleDistributedCoinsResponse {
    coins: Coin[];
}
export interface ModuleDistributedCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    id: Long;
}
export interface GaugeByIDRequestSDKType {
    id: Long;
}
export interface GaugeByIDResponse {
    gauge: Gauge;
}
export interface GaugeByIDResponseSDKType {
    gauge: GaugeSDKType;
}
export interface GaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface GaugesRequestSDKType {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface GaugesResponseSDKType {
    data: GaugeSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface ActiveGaugesRequestSDKType {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface ActiveGaugesResponseSDKType {
    data: GaugeSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
    denom?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    denom?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    data: GaugeSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface UpcomingGaugesRequestSDKType {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface UpcomingGaugesResponseSDKType {
    data: GaugeSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
    denom?: string;
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    denom?: string;
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
    upcomingGauges: Gauge[];
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    upcoming_gauges: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface RewardsEstRequest {
    owner: string;
    lockIds?: Long[];
    endEpoch?: Long;
}
export interface RewardsEstRequestSDKType {
    owner: string;
    lock_ids?: Long[];
    end_epoch?: Long;
}
export interface RewardsEstResponse {
    coins: Coin[];
}
export interface RewardsEstResponseSDKType {
    coins: CoinSDKType[];
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
export declare const ModuleToDistributeCoinsRequest: {
    encode(_: ModuleToDistributeCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromPartial(_: DeepPartial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
};
export declare const ModuleToDistributeCoinsResponse: {
    encode(message: ModuleToDistributeCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponseSDKType;
    fromPartial(object: DeepPartial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
};
export declare const ModuleDistributedCoinsRequest: {
    encode(_: ModuleDistributedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsRequest;
    fromPartial(_: DeepPartial<ModuleDistributedCoinsRequest>): ModuleDistributedCoinsRequest;
};
export declare const ModuleDistributedCoinsResponse: {
    encode(message: ModuleDistributedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsResponseSDKType;
    fromPartial(object: DeepPartial<ModuleDistributedCoinsResponse>): ModuleDistributedCoinsResponse;
};
export declare const GaugeByIDRequest: {
    encode(message: GaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest;
    fromPartial(object: DeepPartial<GaugeByIDRequest>): GaugeByIDRequest;
};
export declare const GaugeByIDResponse: {
    encode(message: GaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponseSDKType;
    fromPartial(object: DeepPartial<GaugeByIDResponse>): GaugeByIDResponse;
};
export declare const GaugesRequest: {
    encode(message: GaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest;
    fromPartial(object: DeepPartial<GaugesRequest>): GaugesRequest;
};
export declare const GaugesResponse: {
    encode(message: GaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponseSDKType;
    fromPartial(object: DeepPartial<GaugesResponse>): GaugesResponse;
};
export declare const ActiveGaugesRequest: {
    encode(message: ActiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromPartial(object: DeepPartial<ActiveGaugesRequest>): ActiveGaugesRequest;
};
export declare const ActiveGaugesResponse: {
    encode(message: ActiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponseSDKType;
    fromPartial(object: DeepPartial<ActiveGaugesResponse>): ActiveGaugesResponse;
};
export declare const ActiveGaugesPerDenomRequest: {
    encode(message: ActiveGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromPartial(object: DeepPartial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
};
export declare const ActiveGaugesPerDenomResponse: {
    encode(message: ActiveGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponseSDKType;
    fromPartial(object: DeepPartial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
};
export declare const UpcomingGaugesRequest: {
    encode(message: UpcomingGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromPartial(object: DeepPartial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
};
export declare const UpcomingGaugesResponse: {
    encode(message: UpcomingGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponseSDKType;
    fromPartial(object: DeepPartial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
};
export declare const UpcomingGaugesPerDenomRequest: {
    encode(message: UpcomingGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromPartial(object: DeepPartial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
};
export declare const UpcomingGaugesPerDenomResponse: {
    encode(message: UpcomingGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponseSDKType;
    fromPartial(object: DeepPartial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
};
export declare const RewardsEstRequest: {
    encode(message: RewardsEstRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest;
    fromPartial(object: DeepPartial<RewardsEstRequest>): RewardsEstRequest;
};
export declare const RewardsEstResponse: {
    encode(message: RewardsEstResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponseSDKType;
    fromPartial(object: DeepPartial<RewardsEstResponse>): RewardsEstResponse;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponseSDKType;
    fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
};
