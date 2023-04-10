import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {
}
export interface ModuleToDistributeCoinsRequestAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-request";
    value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
    /** Coins that have yet to be distributed */
    coins: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-response";
    value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: Long;
}
export interface GaugeByIDRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest";
    value: Uint8Array;
}
export interface GaugeByIDRequestAmino {
    /** Gague ID being queried */
    id: string;
}
export interface GaugeByIDRequestAminoMsg {
    type: "osmosis/incentives/gauge-by-id-request";
    value: GaugeByIDRequestAmino;
}
export interface GaugeByIDRequestSDKType {
    id: Long;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge;
}
export interface GaugeByIDResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse";
    value: Uint8Array;
}
export interface GaugeByIDResponseAmino {
    /** Gauge that corresponds to provided gague ID */
    gauge?: GaugeAmino;
}
export interface GaugeByIDResponseAminoMsg {
    type: "osmosis/incentives/gauge-by-id-response";
    value: GaugeByIDResponseAmino;
}
export interface GaugeByIDResponseSDKType {
    gauge?: GaugeSDKType;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface GaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesRequest";
    value: Uint8Array;
}
export interface GaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface GaugesRequestAminoMsg {
    type: "osmosis/incentives/gauges-request";
    value: GaugesRequestAmino;
}
export interface GaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface GaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesResponse";
    value: Uint8Array;
}
export interface GaugesResponseAmino {
    /** Upcoming and active gauges */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface GaugesResponseAminoMsg {
    type: "osmosis/incentives/gauges-response";
    value: GaugesResponseAmino;
}
export interface GaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest";
    value: Uint8Array;
}
export interface ActiveGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-request";
    value: ActiveGaugesRequestAmino;
}
export interface ActiveGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse";
    value: Uint8Array;
}
export interface ActiveGaugesResponseAmino {
    /** Active gagues only */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-response";
    value: ActiveGaugesResponseAmino;
}
export interface ActiveGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomRequestAmino {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-request";
    value: ActiveGaugesPerDenomRequestAmino;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomResponseAmino {
    /** Active gagues that match denom in query */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-response";
    value: ActiveGaugesPerDenomResponseAmino;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-request";
    value: UpcomingGaugesRequestAmino;
}
export interface UpcomingGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesResponseAmino {
    /** Gauges whose distribution is upcoming */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-response";
    value: UpcomingGaugesResponseAmino;
}
export interface UpcomingGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomRequestAmino {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-request";
    value: UpcomingGaugesPerDenomRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomResponseAmino {
    /** Upcoming gagues that match denom in query */
    upcoming_gauges: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-response";
    value: UpcomingGaugesPerDenomResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    upcoming_gauges: GaugeSDKType[];
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
export interface RewardsEstRequestProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstRequest";
    value: Uint8Array;
}
export interface RewardsEstRequestAmino {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lock_ids: string[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    end_epoch: string;
}
export interface RewardsEstRequestAminoMsg {
    type: "osmosis/incentives/rewards-est-request";
    value: RewardsEstRequestAmino;
}
export interface RewardsEstRequestSDKType {
    owner: string;
    lock_ids: Long[];
    end_epoch: Long;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface RewardsEstResponseProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstResponse";
    value: Uint8Array;
}
export interface RewardsEstResponseAmino {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: CoinAmino[];
}
export interface RewardsEstResponseAminoMsg {
    type: "osmosis/incentives/rewards-est-response";
    value: RewardsEstResponseAmino;
}
export interface RewardsEstResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest";
    value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-request";
    value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse";
    value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockable_durations: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-response";
    value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export declare const ModuleToDistributeCoinsRequest: {
    typeUrl: string;
    encode(_: ModuleToDistributeCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
    fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest;
    toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest;
    toAminoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest;
    toProto(message: ModuleToDistributeCoinsRequest): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg;
};
export declare const ModuleToDistributeCoinsResponse: {
    typeUrl: string;
    encode(message: ModuleToDistributeCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
    fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse;
    toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse;
    toAminoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse;
    toProto(message: ModuleToDistributeCoinsResponse): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg;
};
export declare const GaugeByIDRequest: {
    typeUrl: string;
    encode(message: GaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest;
    fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest;
    fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest;
    toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino;
    fromAminoMsg(object: GaugeByIDRequestAminoMsg): GaugeByIDRequest;
    toAminoMsg(message: GaugeByIDRequest): GaugeByIDRequestAminoMsg;
    fromProtoMsg(message: GaugeByIDRequestProtoMsg): GaugeByIDRequest;
    toProto(message: GaugeByIDRequest): Uint8Array;
    toProtoMsg(message: GaugeByIDRequest): GaugeByIDRequestProtoMsg;
};
export declare const GaugeByIDResponse: {
    typeUrl: string;
    encode(message: GaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse;
    fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse;
    fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse;
    toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino;
    fromAminoMsg(object: GaugeByIDResponseAminoMsg): GaugeByIDResponse;
    toAminoMsg(message: GaugeByIDResponse): GaugeByIDResponseAminoMsg;
    fromProtoMsg(message: GaugeByIDResponseProtoMsg): GaugeByIDResponse;
    toProto(message: GaugeByIDResponse): Uint8Array;
    toProtoMsg(message: GaugeByIDResponse): GaugeByIDResponseProtoMsg;
};
export declare const GaugesRequest: {
    typeUrl: string;
    encode(message: GaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest;
    fromPartial(object: Partial<GaugesRequest>): GaugesRequest;
    fromAmino(object: GaugesRequestAmino): GaugesRequest;
    toAmino(message: GaugesRequest): GaugesRequestAmino;
    fromAminoMsg(object: GaugesRequestAminoMsg): GaugesRequest;
    toAminoMsg(message: GaugesRequest): GaugesRequestAminoMsg;
    fromProtoMsg(message: GaugesRequestProtoMsg): GaugesRequest;
    toProto(message: GaugesRequest): Uint8Array;
    toProtoMsg(message: GaugesRequest): GaugesRequestProtoMsg;
};
export declare const GaugesResponse: {
    typeUrl: string;
    encode(message: GaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse;
    fromPartial(object: Partial<GaugesResponse>): GaugesResponse;
    fromAmino(object: GaugesResponseAmino): GaugesResponse;
    toAmino(message: GaugesResponse): GaugesResponseAmino;
    fromAminoMsg(object: GaugesResponseAminoMsg): GaugesResponse;
    toAminoMsg(message: GaugesResponse): GaugesResponseAminoMsg;
    fromProtoMsg(message: GaugesResponseProtoMsg): GaugesResponse;
    toProto(message: GaugesResponse): Uint8Array;
    toProtoMsg(message: GaugesResponse): GaugesResponseProtoMsg;
};
export declare const ActiveGaugesRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest;
    fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest;
    toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino;
    fromAminoMsg(object: ActiveGaugesRequestAminoMsg): ActiveGaugesRequest;
    toAminoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesRequestProtoMsg): ActiveGaugesRequest;
    toProto(message: ActiveGaugesRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestProtoMsg;
};
export declare const ActiveGaugesResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse;
    fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse;
    toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino;
    fromAminoMsg(object: ActiveGaugesResponseAminoMsg): ActiveGaugesResponse;
    toAminoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesResponseProtoMsg): ActiveGaugesResponse;
    toProto(message: ActiveGaugesResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseProtoMsg;
};
export declare const ActiveGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
    fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest;
    toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomRequestAminoMsg): ActiveGaugesPerDenomRequest;
    toAminoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomRequestProtoMsg): ActiveGaugesPerDenomRequest;
    toProto(message: ActiveGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestProtoMsg;
};
export declare const ActiveGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
    fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse;
    toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomResponseAminoMsg): ActiveGaugesPerDenomResponse;
    toAminoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomResponseProtoMsg): ActiveGaugesPerDenomResponse;
    toProto(message: ActiveGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseProtoMsg;
};
export declare const UpcomingGaugesRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
    fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest;
    toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino;
    fromAminoMsg(object: UpcomingGaugesRequestAminoMsg): UpcomingGaugesRequest;
    toAminoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesRequestProtoMsg): UpcomingGaugesRequest;
    toProto(message: UpcomingGaugesRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestProtoMsg;
};
export declare const UpcomingGaugesResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
    fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse;
    toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino;
    fromAminoMsg(object: UpcomingGaugesResponseAminoMsg): UpcomingGaugesResponse;
    toAminoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesResponseProtoMsg): UpcomingGaugesResponse;
    toProto(message: UpcomingGaugesResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseProtoMsg;
};
export declare const UpcomingGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
    fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest;
    toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomRequestAminoMsg): UpcomingGaugesPerDenomRequest;
    toAminoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomRequestProtoMsg): UpcomingGaugesPerDenomRequest;
    toProto(message: UpcomingGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestProtoMsg;
};
export declare const UpcomingGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse;
    fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
    fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse;
    toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomResponseAminoMsg): UpcomingGaugesPerDenomResponse;
    toAminoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomResponseProtoMsg): UpcomingGaugesPerDenomResponse;
    toProto(message: UpcomingGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseProtoMsg;
};
export declare const RewardsEstRequest: {
    typeUrl: string;
    encode(message: RewardsEstRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest;
    fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest;
    fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest;
    toAmino(message: RewardsEstRequest): RewardsEstRequestAmino;
    fromAminoMsg(object: RewardsEstRequestAminoMsg): RewardsEstRequest;
    toAminoMsg(message: RewardsEstRequest): RewardsEstRequestAminoMsg;
    fromProtoMsg(message: RewardsEstRequestProtoMsg): RewardsEstRequest;
    toProto(message: RewardsEstRequest): Uint8Array;
    toProtoMsg(message: RewardsEstRequest): RewardsEstRequestProtoMsg;
};
export declare const RewardsEstResponse: {
    typeUrl: string;
    encode(message: RewardsEstResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse;
    fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse;
    fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse;
    toAmino(message: RewardsEstResponse): RewardsEstResponseAmino;
    fromAminoMsg(object: RewardsEstResponseAminoMsg): RewardsEstResponse;
    toAminoMsg(message: RewardsEstResponse): RewardsEstResponseAminoMsg;
    fromProtoMsg(message: RewardsEstResponseProtoMsg): RewardsEstResponse;
    toProto(message: RewardsEstResponse): Uint8Array;
    toProtoMsg(message: RewardsEstResponse): RewardsEstResponseProtoMsg;
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
