import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseSDKType {
    /** Coins that have yet to be distributed */
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: Long;
}
export interface GaugeByIDRequestSDKType {
    /** Gague ID being queried */
    id: Long;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge;
}
export interface GaugeByIDResponseSDKType {
    /** Gauge that corresponds to provided gague ID */
    gauge?: GaugeSDKType;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface GaugesRequestSDKType {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface GaugesResponseSDKType {
    /** Upcoming and active gauges */
    data: GaugeSDKType[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesRequestSDKType {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesResponseSDKType {
    /** Active gagues only */
    data: GaugeSDKType[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    /** Active gagues that match denom in query */
    data: GaugeSDKType[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesRequestSDKType {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesResponseSDKType {
    /** Gauges whose distribution is upcoming */
    data: GaugeSDKType[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    /** Upcoming gagues that match denom in query */
    upcoming_gauges: GaugeSDKType[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseSDKType;
}
export interface RewardsEstRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lockIds: Long[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    endEpoch: Long;
}
export interface RewardsEstRequestSDKType {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lock_ids: Long[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    end_epoch: Long;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface RewardsEstResponseSDKType {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseSDKType {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockable_durations: DurationSDKType[];
}
export declare const ModuleToDistributeCoinsRequest: {
    encode(_: ModuleToDistributeCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
};
export declare const ModuleToDistributeCoinsResponse: {
    encode(message: ModuleToDistributeCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
};
export declare const GaugeByIDRequest: {
    encode(message: GaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest;
    fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest;
};
export declare const GaugeByIDResponse: {
    encode(message: GaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse;
    fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse;
};
export declare const GaugesRequest: {
    encode(message: GaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest;
    fromPartial(object: Partial<GaugesRequest>): GaugesRequest;
};
export declare const GaugesResponse: {
    encode(message: GaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse;
    fromPartial(object: Partial<GaugesResponse>): GaugesResponse;
};
export declare const ActiveGaugesRequest: {
    encode(message: ActiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest;
};
export declare const ActiveGaugesResponse: {
    encode(message: ActiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse;
};
export declare const ActiveGaugesPerDenomRequest: {
    encode(message: ActiveGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
};
export declare const ActiveGaugesPerDenomResponse: {
    encode(message: ActiveGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
};
export declare const UpcomingGaugesRequest: {
    encode(message: UpcomingGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
};
export declare const UpcomingGaugesResponse: {
    encode(message: UpcomingGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
};
export declare const UpcomingGaugesPerDenomRequest: {
    encode(message: UpcomingGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
};
export declare const UpcomingGaugesPerDenomResponse: {
    encode(message: UpcomingGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse;
    fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
};
export declare const RewardsEstRequest: {
    encode(message: RewardsEstRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest;
    fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest;
};
export declare const RewardsEstResponse: {
    encode(message: RewardsEstResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse;
    fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse;
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
