import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Group, GroupAmino, GroupSDKType, GroupsWithGauge, GroupsWithGaugeAmino, GroupsWithGaugeSDKType } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export interface ModuleToDistributeCoinsRequest {}
export interface ModuleToDistributeCoinsRequestProtoMsg {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest";
  value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {}
export interface ModuleToDistributeCoinsRequestAminoMsg {
  type: "osmosis/incentives/module-to-distribute-coins-request";
  value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {}
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
  coins?: CoinAmino[];
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
  id: bigint;
}
export interface GaugeByIDRequestProtoMsg {
  typeUrl: "/osmosis.incentives.GaugeByIDRequest";
  value: Uint8Array;
}
export interface GaugeByIDRequestAmino {
  /** Gague ID being queried */
  id?: string;
}
export interface GaugeByIDRequestAminoMsg {
  type: "osmosis/incentives/gauge-by-id-request";
  value: GaugeByIDRequestAmino;
}
export interface GaugeByIDRequestSDKType {
  id: bigint;
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
  data?: GaugeAmino[];
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
  data?: GaugeAmino[];
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
  denom?: string;
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
  data?: GaugeAmino[];
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
  data?: GaugeAmino[];
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
  denom?: string;
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
  upcoming_gauges?: GaugeAmino[];
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
  lockIds: bigint[];
  /**
   * Upper time limit of reward estimation
   * Lower limit is current epoch
   */
  endEpoch: bigint;
}
export interface RewardsEstRequestProtoMsg {
  typeUrl: "/osmosis.incentives.RewardsEstRequest";
  value: Uint8Array;
}
export interface RewardsEstRequestAmino {
  /** Address that is being queried for future estimated rewards */
  owner?: string;
  /** Lock IDs included in future reward estimation */
  lock_ids?: string[];
  /**
   * Upper time limit of reward estimation
   * Lower limit is current epoch
   */
  end_epoch?: string;
}
export interface RewardsEstRequestAminoMsg {
  type: "osmosis/incentives/rewards-est-request";
  value: RewardsEstRequestAmino;
}
export interface RewardsEstRequestSDKType {
  owner: string;
  lock_ids: bigint[];
  end_epoch: bigint;
}
export interface RewardsEstResponse {
  /**
   * Estimated coin rewards that will be received at provided address
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
   * Estimated coin rewards that will be received at provided address
   * from specified locks between current time and end epoch
   */
  coins?: CoinAmino[];
}
export interface RewardsEstResponseAminoMsg {
  type: "osmosis/incentives/rewards-est-response";
  value: RewardsEstResponseAmino;
}
export interface RewardsEstResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest";
  value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {}
export interface QueryLockableDurationsRequestAminoMsg {
  type: "osmosis/incentives/query-lockable-durations-request";
  value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  /** Time durations that users can lock coins for in order to receive rewards */
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse";
  value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
  /** Time durations that users can lock coins for in order to receive rewards */
  lockable_durations?: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
  type: "osmosis/incentives/query-lockable-durations-response";
  value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
export interface QueryAllGroupsRequest {}
export interface QueryAllGroupsRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsRequest";
  value: Uint8Array;
}
export interface QueryAllGroupsRequestAmino {}
export interface QueryAllGroupsRequestAminoMsg {
  type: "osmosis/incentives/query-all-groups-request";
  value: QueryAllGroupsRequestAmino;
}
export interface QueryAllGroupsRequestSDKType {}
export interface QueryAllGroupsResponse {
  groups: Group[];
}
export interface QueryAllGroupsResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsResponse";
  value: Uint8Array;
}
export interface QueryAllGroupsResponseAmino {
  groups?: GroupAmino[];
}
export interface QueryAllGroupsResponseAminoMsg {
  type: "osmosis/incentives/query-all-groups-response";
  value: QueryAllGroupsResponseAmino;
}
export interface QueryAllGroupsResponseSDKType {
  groups: GroupSDKType[];
}
export interface QueryAllGroupsGaugesRequest {}
export interface QueryAllGroupsGaugesRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesRequest";
  value: Uint8Array;
}
export interface QueryAllGroupsGaugesRequestAmino {}
export interface QueryAllGroupsGaugesRequestAminoMsg {
  type: "osmosis/incentives/query-all-groups-gauges-request";
  value: QueryAllGroupsGaugesRequestAmino;
}
export interface QueryAllGroupsGaugesRequestSDKType {}
export interface QueryAllGroupsGaugesResponse {
  gauges: Gauge[];
}
export interface QueryAllGroupsGaugesResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesResponse";
  value: Uint8Array;
}
export interface QueryAllGroupsGaugesResponseAmino {
  gauges?: GaugeAmino[];
}
export interface QueryAllGroupsGaugesResponseAminoMsg {
  type: "osmosis/incentives/query-all-groups-gauges-response";
  value: QueryAllGroupsGaugesResponseAmino;
}
export interface QueryAllGroupsGaugesResponseSDKType {
  gauges: GaugeSDKType[];
}
export interface QueryAllGroupsWithGaugeRequest {}
export interface QueryAllGroupsWithGaugeRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeRequest";
  value: Uint8Array;
}
export interface QueryAllGroupsWithGaugeRequestAmino {}
export interface QueryAllGroupsWithGaugeRequestAminoMsg {
  type: "osmosis/incentives/query-all-groups-with-gauge-request";
  value: QueryAllGroupsWithGaugeRequestAmino;
}
export interface QueryAllGroupsWithGaugeRequestSDKType {}
export interface QueryAllGroupsWithGaugeResponse {
  groupsWithGauge: GroupsWithGauge[];
}
export interface QueryAllGroupsWithGaugeResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeResponse";
  value: Uint8Array;
}
export interface QueryAllGroupsWithGaugeResponseAmino {
  groups_with_gauge?: GroupsWithGaugeAmino[];
}
export interface QueryAllGroupsWithGaugeResponseAminoMsg {
  type: "osmosis/incentives/query-all-groups-with-gauge-response";
  value: QueryAllGroupsWithGaugeResponseAmino;
}
export interface QueryAllGroupsWithGaugeResponseSDKType {
  groups_with_gauge: GroupsWithGaugeSDKType[];
}
export interface QueryGroupByGroupGaugeIDRequest {
  id: bigint;
}
export interface QueryGroupByGroupGaugeIDRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDRequest";
  value: Uint8Array;
}
export interface QueryGroupByGroupGaugeIDRequestAmino {
  id?: string;
}
export interface QueryGroupByGroupGaugeIDRequestAminoMsg {
  type: "osmosis/incentives/query-group-by-group-gauge-id-request";
  value: QueryGroupByGroupGaugeIDRequestAmino;
}
export interface QueryGroupByGroupGaugeIDRequestSDKType {
  id: bigint;
}
export interface QueryGroupByGroupGaugeIDResponse {
  group: Group;
}
export interface QueryGroupByGroupGaugeIDResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDResponse";
  value: Uint8Array;
}
export interface QueryGroupByGroupGaugeIDResponseAmino {
  group?: GroupAmino;
}
export interface QueryGroupByGroupGaugeIDResponseAminoMsg {
  type: "osmosis/incentives/query-group-by-group-gauge-id-response";
  value: QueryGroupByGroupGaugeIDResponseAmino;
}
export interface QueryGroupByGroupGaugeIDResponseSDKType {
  group: GroupSDKType;
}
export interface QueryCurrentWeightByGroupGaugeIDRequest {
  groupGaugeId: bigint;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestProtoMsg {
  typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest";
  value: Uint8Array;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestAmino {
  group_gauge_id?: string;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestAminoMsg {
  type: "osmosis/incentives/query-current-weight-by-group-gauge-id-request";
  value: QueryCurrentWeightByGroupGaugeIDRequestAmino;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestSDKType {
  group_gauge_id: bigint;
}
export interface QueryCurrentWeightByGroupGaugeIDResponse {
  gaugeWeight: GaugeWeight[];
}
export interface QueryCurrentWeightByGroupGaugeIDResponseProtoMsg {
  typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse";
  value: Uint8Array;
}
export interface QueryCurrentWeightByGroupGaugeIDResponseAmino {
  gauge_weight?: GaugeWeightAmino[];
}
export interface QueryCurrentWeightByGroupGaugeIDResponseAminoMsg {
  type: "osmosis/incentives/query-current-weight-by-group-gauge-id-response";
  value: QueryCurrentWeightByGroupGaugeIDResponseAmino;
}
export interface QueryCurrentWeightByGroupGaugeIDResponseSDKType {
  gauge_weight: GaugeWeightSDKType[];
}
export interface GaugeWeight {
  gaugeId: bigint;
  weightRatio: string;
}
export interface GaugeWeightProtoMsg {
  typeUrl: "/osmosis.incentives.GaugeWeight";
  value: Uint8Array;
}
export interface GaugeWeightAmino {
  gauge_id?: string;
  weight_ratio?: string;
}
export interface GaugeWeightAminoMsg {
  type: "osmosis/incentives/gauge-weight";
  value: GaugeWeightAmino;
}
export interface GaugeWeightSDKType {
  gauge_id: bigint;
  weight_ratio: string;
}
function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return {};
}
export const ModuleToDistributeCoinsRequest = {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
  aminoType: "osmosis/incentives/module-to-distribute-coins-request",
  is(o: any): o is ModuleToDistributeCoinsRequest {
    return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
  },
  isSDK(o: any): o is ModuleToDistributeCoinsRequestSDKType {
    return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
  },
  isAmino(o: any): o is ModuleToDistributeCoinsRequestAmino {
    return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
  },
  encode(_: ModuleToDistributeCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
  fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
  toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAminoMsg {
    return {
      type: "osmosis/incentives/module-to-distribute-coins-request",
      value: ModuleToDistributeCoinsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest {
    return ModuleToDistributeCoinsRequest.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsRequest): Uint8Array {
    return ModuleToDistributeCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
      value: ModuleToDistributeCoinsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleToDistributeCoinsRequest.typeUrl, ModuleToDistributeCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleToDistributeCoinsRequest.aminoType, ModuleToDistributeCoinsRequest.typeUrl);
function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    coins: []
  };
}
export const ModuleToDistributeCoinsResponse = {
  typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
  aminoType: "osmosis/incentives/module-to-distribute-coins-response",
  is(o: any): o is ModuleToDistributeCoinsResponse {
    return o && (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is ModuleToDistributeCoinsResponseSDKType {
    return o && (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is ModuleToDistributeCoinsResponseAmino {
    return o && (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: ModuleToDistributeCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAminoMsg {
    return {
      type: "osmosis/incentives/module-to-distribute-coins-response",
      value: ModuleToDistributeCoinsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse {
    return ModuleToDistributeCoinsResponse.decode(message.value);
  },
  toProto(message: ModuleToDistributeCoinsResponse): Uint8Array {
    return ModuleToDistributeCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
      value: ModuleToDistributeCoinsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleToDistributeCoinsResponse.typeUrl, ModuleToDistributeCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleToDistributeCoinsResponse.aminoType, ModuleToDistributeCoinsResponse.typeUrl);
function createBaseGaugeByIDRequest(): GaugeByIDRequest {
  return {
    id: BigInt(0)
  };
}
export const GaugeByIDRequest = {
  typeUrl: "/osmosis.incentives.GaugeByIDRequest",
  aminoType: "osmosis/incentives/gauge-by-id-request",
  is(o: any): o is GaugeByIDRequest {
    return o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is GaugeByIDRequestSDKType {
    return o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is GaugeByIDRequestAmino {
    return o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: GaugeByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugeByIDRequestAminoMsg): GaugeByIDRequest {
    return GaugeByIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GaugeByIDRequest): GaugeByIDRequestAminoMsg {
    return {
      type: "osmosis/incentives/gauge-by-id-request",
      value: GaugeByIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeByIDRequestProtoMsg): GaugeByIDRequest {
    return GaugeByIDRequest.decode(message.value);
  },
  toProto(message: GaugeByIDRequest): Uint8Array {
    return GaugeByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: GaugeByIDRequest): GaugeByIDRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugeByIDRequest",
      value: GaugeByIDRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GaugeByIDRequest.typeUrl, GaugeByIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeByIDRequest.aminoType, GaugeByIDRequest.typeUrl);
function createBaseGaugeByIDResponse(): GaugeByIDResponse {
  return {
    gauge: undefined
  };
}
export const GaugeByIDResponse = {
  typeUrl: "/osmosis.incentives.GaugeByIDResponse",
  aminoType: "osmosis/incentives/gauge-by-id-response",
  is(o: any): o is GaugeByIDResponse {
    return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
  },
  isSDK(o: any): o is GaugeByIDResponseSDKType {
    return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
  },
  isAmino(o: any): o is GaugeByIDResponseAmino {
    return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
  },
  encode(message: GaugeByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
  fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = Gauge.fromAmino(object.gauge);
    }
    return message;
  },
  toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino {
    const obj: any = {};
    obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugeByIDResponseAminoMsg): GaugeByIDResponse {
    return GaugeByIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GaugeByIDResponse): GaugeByIDResponseAminoMsg {
    return {
      type: "osmosis/incentives/gauge-by-id-response",
      value: GaugeByIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeByIDResponseProtoMsg): GaugeByIDResponse {
    return GaugeByIDResponse.decode(message.value);
  },
  toProto(message: GaugeByIDResponse): Uint8Array {
    return GaugeByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: GaugeByIDResponse): GaugeByIDResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugeByIDResponse",
      value: GaugeByIDResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GaugeByIDResponse.typeUrl, GaugeByIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeByIDResponse.aminoType, GaugeByIDResponse.typeUrl);
function createBaseGaugesRequest(): GaugesRequest {
  return {
    pagination: undefined
  };
}
export const GaugesRequest = {
  typeUrl: "/osmosis.incentives.GaugesRequest",
  aminoType: "osmosis/incentives/gauges-request",
  is(o: any): o is GaugesRequest {
    return o && o.$typeUrl === GaugesRequest.typeUrl;
  },
  isSDK(o: any): o is GaugesRequestSDKType {
    return o && o.$typeUrl === GaugesRequest.typeUrl;
  },
  isAmino(o: any): o is GaugesRequestAmino {
    return o && o.$typeUrl === GaugesRequest.typeUrl;
  },
  encode(message: GaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GaugesRequest>): GaugesRequest {
    const message = createBaseGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GaugesRequestAmino): GaugesRequest {
    const message = createBaseGaugesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GaugesRequest): GaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugesRequestAminoMsg): GaugesRequest {
    return GaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GaugesRequest): GaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/gauges-request",
      value: GaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugesRequestProtoMsg): GaugesRequest {
    return GaugesRequest.decode(message.value);
  },
  toProto(message: GaugesRequest): Uint8Array {
    return GaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: GaugesRequest): GaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugesRequest",
      value: GaugesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GaugesRequest.typeUrl, GaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugesRequest.aminoType, GaugesRequest.typeUrl);
function createBaseGaugesResponse(): GaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const GaugesResponse = {
  typeUrl: "/osmosis.incentives.GaugesResponse",
  aminoType: "osmosis/incentives/gauges-response",
  is(o: any): o is GaugesResponse {
    return o && (o.$typeUrl === GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])));
  },
  isSDK(o: any): o is GaugesResponseSDKType {
    return o && (o.$typeUrl === GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])));
  },
  isAmino(o: any): o is GaugesResponseAmino {
    return o && (o.$typeUrl === GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])));
  },
  encode(message: GaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GaugesResponse>): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GaugesResponseAmino): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GaugesResponse): GaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GaugesResponseAminoMsg): GaugesResponse {
    return GaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GaugesResponse): GaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/gauges-response",
      value: GaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugesResponseProtoMsg): GaugesResponse {
    return GaugesResponse.decode(message.value);
  },
  toProto(message: GaugesResponse): Uint8Array {
    return GaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: GaugesResponse): GaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugesResponse",
      value: GaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GaugesResponse.typeUrl, GaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugesResponse.aminoType, GaugesResponse.typeUrl);
function createBaseActiveGaugesRequest(): ActiveGaugesRequest {
  return {
    pagination: undefined
  };
}
export const ActiveGaugesRequest = {
  typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
  aminoType: "osmosis/incentives/active-gauges-request",
  is(o: any): o is ActiveGaugesRequest {
    return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
  },
  isSDK(o: any): o is ActiveGaugesRequestSDKType {
    return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
  },
  isAmino(o: any): o is ActiveGaugesRequestAmino {
    return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
  },
  encode(message: ActiveGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesRequestAminoMsg): ActiveGaugesRequest {
    return ActiveGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-request",
      value: ActiveGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesRequestProtoMsg): ActiveGaugesRequest {
    return ActiveGaugesRequest.decode(message.value);
  },
  toProto(message: ActiveGaugesRequest): Uint8Array {
    return ActiveGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
      value: ActiveGaugesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActiveGaugesRequest.typeUrl, ActiveGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesRequest.aminoType, ActiveGaugesRequest.typeUrl);
function createBaseActiveGaugesResponse(): ActiveGaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const ActiveGaugesResponse = {
  typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
  aminoType: "osmosis/incentives/active-gauges-response",
  is(o: any): o is ActiveGaugesResponse {
    return o && (o.$typeUrl === ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])));
  },
  isSDK(o: any): o is ActiveGaugesResponseSDKType {
    return o && (o.$typeUrl === ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])));
  },
  isAmino(o: any): o is ActiveGaugesResponseAmino {
    return o && (o.$typeUrl === ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])));
  },
  encode(message: ActiveGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesResponseAminoMsg): ActiveGaugesResponse {
    return ActiveGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-response",
      value: ActiveGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesResponseProtoMsg): ActiveGaugesResponse {
    return ActiveGaugesResponse.decode(message.value);
  },
  toProto(message: ActiveGaugesResponse): Uint8Array {
    return ActiveGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
      value: ActiveGaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActiveGaugesResponse.typeUrl, ActiveGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesResponse.aminoType, ActiveGaugesResponse.typeUrl);
function createBaseActiveGaugesPerDenomRequest(): ActiveGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
export const ActiveGaugesPerDenomRequest = {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
  aminoType: "osmosis/incentives/active-gauges-per-denom-request",
  is(o: any): o is ActiveGaugesPerDenomRequest {
    return o && (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is ActiveGaugesPerDenomRequestSDKType {
    return o && (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is ActiveGaugesPerDenomRequestAmino {
    return o && (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: ActiveGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesPerDenomRequestAminoMsg): ActiveGaugesPerDenomRequest {
    return ActiveGaugesPerDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-per-denom-request",
      value: ActiveGaugesPerDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesPerDenomRequestProtoMsg): ActiveGaugesPerDenomRequest {
    return ActiveGaugesPerDenomRequest.decode(message.value);
  },
  toProto(message: ActiveGaugesPerDenomRequest): Uint8Array {
    return ActiveGaugesPerDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
      value: ActiveGaugesPerDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActiveGaugesPerDenomRequest.typeUrl, ActiveGaugesPerDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesPerDenomRequest.aminoType, ActiveGaugesPerDenomRequest.typeUrl);
function createBaseActiveGaugesPerDenomResponse(): ActiveGaugesPerDenomResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const ActiveGaugesPerDenomResponse = {
  typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
  aminoType: "osmosis/incentives/active-gauges-per-denom-response",
  is(o: any): o is ActiveGaugesPerDenomResponse {
    return o && (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])));
  },
  isSDK(o: any): o is ActiveGaugesPerDenomResponseSDKType {
    return o && (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])));
  },
  isAmino(o: any): o is ActiveGaugesPerDenomResponseAmino {
    return o && (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])));
  },
  encode(message: ActiveGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveGaugesPerDenomResponseAminoMsg): ActiveGaugesPerDenomResponse {
    return ActiveGaugesPerDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAminoMsg {
    return {
      type: "osmosis/incentives/active-gauges-per-denom-response",
      value: ActiveGaugesPerDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveGaugesPerDenomResponseProtoMsg): ActiveGaugesPerDenomResponse {
    return ActiveGaugesPerDenomResponse.decode(message.value);
  },
  toProto(message: ActiveGaugesPerDenomResponse): Uint8Array {
    return ActiveGaugesPerDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
      value: ActiveGaugesPerDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActiveGaugesPerDenomResponse.typeUrl, ActiveGaugesPerDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesPerDenomResponse.aminoType, ActiveGaugesPerDenomResponse.typeUrl);
function createBaseUpcomingGaugesRequest(): UpcomingGaugesRequest {
  return {
    pagination: undefined
  };
}
export const UpcomingGaugesRequest = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
  aminoType: "osmosis/incentives/upcoming-gauges-request",
  is(o: any): o is UpcomingGaugesRequest {
    return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
  },
  isSDK(o: any): o is UpcomingGaugesRequestSDKType {
    return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
  },
  isAmino(o: any): o is UpcomingGaugesRequestAmino {
    return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
  },
  encode(message: UpcomingGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesRequestAminoMsg): UpcomingGaugesRequest {
    return UpcomingGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-request",
      value: UpcomingGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesRequestProtoMsg): UpcomingGaugesRequest {
    return UpcomingGaugesRequest.decode(message.value);
  },
  toProto(message: UpcomingGaugesRequest): Uint8Array {
    return UpcomingGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
      value: UpcomingGaugesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpcomingGaugesRequest.typeUrl, UpcomingGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesRequest.aminoType, UpcomingGaugesRequest.typeUrl);
function createBaseUpcomingGaugesResponse(): UpcomingGaugesResponse {
  return {
    data: [],
    pagination: undefined
  };
}
export const UpcomingGaugesResponse = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
  aminoType: "osmosis/incentives/upcoming-gauges-response",
  is(o: any): o is UpcomingGaugesResponse {
    return o && (o.$typeUrl === UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])));
  },
  isSDK(o: any): o is UpcomingGaugesResponseSDKType {
    return o && (o.$typeUrl === UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])));
  },
  isAmino(o: any): o is UpcomingGaugesResponseAmino {
    return o && (o.$typeUrl === UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])));
  },
  encode(message: UpcomingGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesResponseAminoMsg): UpcomingGaugesResponse {
    return UpcomingGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-response",
      value: UpcomingGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesResponseProtoMsg): UpcomingGaugesResponse {
    return UpcomingGaugesResponse.decode(message.value);
  },
  toProto(message: UpcomingGaugesResponse): Uint8Array {
    return UpcomingGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
      value: UpcomingGaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpcomingGaugesResponse.typeUrl, UpcomingGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesResponse.aminoType, UpcomingGaugesResponse.typeUrl);
function createBaseUpcomingGaugesPerDenomRequest(): UpcomingGaugesPerDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
export const UpcomingGaugesPerDenomRequest = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
  aminoType: "osmosis/incentives/upcoming-gauges-per-denom-request",
  is(o: any): o is UpcomingGaugesPerDenomRequest {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is UpcomingGaugesPerDenomRequestSDKType {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is UpcomingGaugesPerDenomRequestAmino {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: UpcomingGaugesPerDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest {
    const message = createBaseUpcomingGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest {
    const message = createBaseUpcomingGaugesPerDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesPerDenomRequestAminoMsg): UpcomingGaugesPerDenomRequest {
    return UpcomingGaugesPerDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-per-denom-request",
      value: UpcomingGaugesPerDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesPerDenomRequestProtoMsg): UpcomingGaugesPerDenomRequest {
    return UpcomingGaugesPerDenomRequest.decode(message.value);
  },
  toProto(message: UpcomingGaugesPerDenomRequest): Uint8Array {
    return UpcomingGaugesPerDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
      value: UpcomingGaugesPerDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpcomingGaugesPerDenomRequest.typeUrl, UpcomingGaugesPerDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesPerDenomRequest.aminoType, UpcomingGaugesPerDenomRequest.typeUrl);
function createBaseUpcomingGaugesPerDenomResponse(): UpcomingGaugesPerDenomResponse {
  return {
    upcomingGauges: [],
    pagination: undefined
  };
}
export const UpcomingGaugesPerDenomResponse = {
  typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
  aminoType: "osmosis/incentives/upcoming-gauges-per-denom-response",
  is(o: any): o is UpcomingGaugesPerDenomResponse {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcomingGauges) && (!o.upcomingGauges.length || Gauge.is(o.upcomingGauges[0])));
  },
  isSDK(o: any): o is UpcomingGaugesPerDenomResponseSDKType {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcoming_gauges) && (!o.upcoming_gauges.length || Gauge.isSDK(o.upcoming_gauges[0])));
  },
  isAmino(o: any): o is UpcomingGaugesPerDenomResponseAmino {
    return o && (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcoming_gauges) && (!o.upcoming_gauges.length || Gauge.isAmino(o.upcoming_gauges[0])));
  },
  encode(message: UpcomingGaugesPerDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.upcomingGauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse {
    const message = createBaseUpcomingGaugesPerDenomResponse();
    message.upcomingGauges = object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse {
    const message = createBaseUpcomingGaugesPerDenomResponse();
    message.upcomingGauges = object.upcoming_gauges?.map(e => Gauge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino {
    const obj: any = {};
    if (message.upcomingGauges) {
      obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.upcoming_gauges = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpcomingGaugesPerDenomResponseAminoMsg): UpcomingGaugesPerDenomResponse {
    return UpcomingGaugesPerDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAminoMsg {
    return {
      type: "osmosis/incentives/upcoming-gauges-per-denom-response",
      value: UpcomingGaugesPerDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UpcomingGaugesPerDenomResponseProtoMsg): UpcomingGaugesPerDenomResponse {
    return UpcomingGaugesPerDenomResponse.decode(message.value);
  },
  toProto(message: UpcomingGaugesPerDenomResponse): Uint8Array {
    return UpcomingGaugesPerDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
      value: UpcomingGaugesPerDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpcomingGaugesPerDenomResponse.typeUrl, UpcomingGaugesPerDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesPerDenomResponse.aminoType, UpcomingGaugesPerDenomResponse.typeUrl);
function createBaseRewardsEstRequest(): RewardsEstRequest {
  return {
    owner: "",
    lockIds: [],
    endEpoch: BigInt(0)
  };
}
export const RewardsEstRequest = {
  typeUrl: "/osmosis.incentives.RewardsEstRequest",
  aminoType: "osmosis/incentives/rewards-est-request",
  is(o: any): o is RewardsEstRequest {
    return o && (o.$typeUrl === RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lockIds) && (!o.lockIds.length || typeof o.lockIds[0] === "bigint") && typeof o.endEpoch === "bigint");
  },
  isSDK(o: any): o is RewardsEstRequestSDKType {
    return o && (o.$typeUrl === RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lock_ids) && (!o.lock_ids.length || typeof o.lock_ids[0] === "bigint") && typeof o.end_epoch === "bigint");
  },
  isAmino(o: any): o is RewardsEstRequestAmino {
    return o && (o.$typeUrl === RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lock_ids) && (!o.lock_ids.length || typeof o.lock_ids[0] === "bigint") && typeof o.end_epoch === "bigint");
  },
  encode(message: RewardsEstRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.lockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.endEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.endEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockIds.push(reader.uint64());
            }
          } else {
            message.lockIds.push(reader.uint64());
          }
          break;
        case 3:
          message.endEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    message.owner = object.owner ?? "";
    message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
    message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? BigInt(object.endEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.lockIds = object.lock_ids?.map(e => BigInt(e)) || [];
    if (object.end_epoch !== undefined && object.end_epoch !== null) {
      message.endEpoch = BigInt(object.end_epoch);
    }
    return message;
  },
  toAmino(message: RewardsEstRequest): RewardsEstRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.lockIds) {
      obj.lock_ids = message.lockIds.map(e => e.toString());
    } else {
      obj.lock_ids = [];
    }
    obj.end_epoch = message.endEpoch ? message.endEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardsEstRequestAminoMsg): RewardsEstRequest {
    return RewardsEstRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RewardsEstRequest): RewardsEstRequestAminoMsg {
    return {
      type: "osmosis/incentives/rewards-est-request",
      value: RewardsEstRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RewardsEstRequestProtoMsg): RewardsEstRequest {
    return RewardsEstRequest.decode(message.value);
  },
  toProto(message: RewardsEstRequest): Uint8Array {
    return RewardsEstRequest.encode(message).finish();
  },
  toProtoMsg(message: RewardsEstRequest): RewardsEstRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.RewardsEstRequest",
      value: RewardsEstRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardsEstRequest.typeUrl, RewardsEstRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(RewardsEstRequest.aminoType, RewardsEstRequest.typeUrl);
function createBaseRewardsEstResponse(): RewardsEstResponse {
  return {
    coins: []
  };
}
export const RewardsEstResponse = {
  typeUrl: "/osmosis.incentives.RewardsEstResponse",
  aminoType: "osmosis/incentives/rewards-est-response",
  is(o: any): o is RewardsEstResponse {
    return o && (o.$typeUrl === RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is RewardsEstResponseSDKType {
    return o && (o.$typeUrl === RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is RewardsEstResponseAmino {
    return o && (o.$typeUrl === RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: RewardsEstResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardsEstResponse): RewardsEstResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: RewardsEstResponseAminoMsg): RewardsEstResponse {
    return RewardsEstResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RewardsEstResponse): RewardsEstResponseAminoMsg {
    return {
      type: "osmosis/incentives/rewards-est-response",
      value: RewardsEstResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RewardsEstResponseProtoMsg): RewardsEstResponse {
    return RewardsEstResponse.decode(message.value);
  },
  toProto(message: RewardsEstResponse): Uint8Array {
    return RewardsEstResponse.encode(message).finish();
  },
  toProtoMsg(message: RewardsEstResponse): RewardsEstResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.RewardsEstResponse",
      value: RewardsEstResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardsEstResponse.typeUrl, RewardsEstResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RewardsEstResponse.aminoType, RewardsEstResponse.typeUrl);
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
  aminoType: "osmosis/incentives/query-lockable-durations-request",
  is(o: any): o is QueryLockableDurationsRequest {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLockableDurationsRequestSDKType {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLockableDurationsRequestAmino {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  encode(_: QueryLockableDurationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-lockable-durations-request",
      value: QueryLockableDurationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.decode(message.value);
  },
  toProto(message: QueryLockableDurationsRequest): Uint8Array {
    return QueryLockableDurationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
      value: QueryLockableDurationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLockableDurationsRequest.typeUrl, QueryLockableDurationsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLockableDurationsRequest.aminoType, QueryLockableDurationsRequest.typeUrl);
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}
export const QueryLockableDurationsResponse = {
  typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
  aminoType: "osmosis/incentives/query-lockable-durations-response",
  is(o: any): o is QueryLockableDurationsResponse {
    return o && (o.$typeUrl === QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])));
  },
  isSDK(o: any): o is QueryLockableDurationsResponseSDKType {
    return o && (o.$typeUrl === QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isSDK(o.lockable_durations[0])));
  },
  isAmino(o: any): o is QueryLockableDurationsResponseAmino {
    return o && (o.$typeUrl === QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isAmino(o.lockable_durations[0])));
  },
  encode(message: QueryLockableDurationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-lockable-durations-response",
      value: QueryLockableDurationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.decode(message.value);
  },
  toProto(message: QueryLockableDurationsResponse): Uint8Array {
    return QueryLockableDurationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
      value: QueryLockableDurationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLockableDurationsResponse.typeUrl, QueryLockableDurationsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLockableDurationsResponse.aminoType, QueryLockableDurationsResponse.typeUrl);
function createBaseQueryAllGroupsRequest(): QueryAllGroupsRequest {
  return {};
}
export const QueryAllGroupsRequest = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsRequest",
  aminoType: "osmosis/incentives/query-all-groups-request",
  is(o: any): o is QueryAllGroupsRequest {
    return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllGroupsRequestSDKType {
    return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllGroupsRequestAmino {
    return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
  },
  encode(_: QueryAllGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllGroupsRequest>): QueryAllGroupsRequest {
    const message = createBaseQueryAllGroupsRequest();
    return message;
  },
  fromAmino(_: QueryAllGroupsRequestAmino): QueryAllGroupsRequest {
    const message = createBaseQueryAllGroupsRequest();
    return message;
  },
  toAmino(_: QueryAllGroupsRequest): QueryAllGroupsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsRequestAminoMsg): QueryAllGroupsRequest {
    return QueryAllGroupsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsRequest): QueryAllGroupsRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-request",
      value: QueryAllGroupsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsRequestProtoMsg): QueryAllGroupsRequest {
    return QueryAllGroupsRequest.decode(message.value);
  },
  toProto(message: QueryAllGroupsRequest): Uint8Array {
    return QueryAllGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsRequest): QueryAllGroupsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsRequest",
      value: QueryAllGroupsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsRequest.typeUrl, QueryAllGroupsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsRequest.aminoType, QueryAllGroupsRequest.typeUrl);
function createBaseQueryAllGroupsResponse(): QueryAllGroupsResponse {
  return {
    groups: []
  };
}
export const QueryAllGroupsResponse = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsResponse",
  aminoType: "osmosis/incentives/query-all-groups-response",
  is(o: any): o is QueryAllGroupsResponse {
    return o && (o.$typeUrl === QueryAllGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || Group.is(o.groups[0])));
  },
  isSDK(o: any): o is QueryAllGroupsResponseSDKType {
    return o && (o.$typeUrl === QueryAllGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || Group.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is QueryAllGroupsResponseAmino {
    return o && (o.$typeUrl === QueryAllGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || Group.isAmino(o.groups[0])));
  },
  encode(message: QueryAllGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllGroupsResponse>): QueryAllGroupsResponse {
    const message = createBaseQueryAllGroupsResponse();
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllGroupsResponseAmino): QueryAllGroupsResponse {
    const message = createBaseQueryAllGroupsResponse();
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllGroupsResponse): QueryAllGroupsResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsResponseAminoMsg): QueryAllGroupsResponse {
    return QueryAllGroupsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsResponse): QueryAllGroupsResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-response",
      value: QueryAllGroupsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsResponseProtoMsg): QueryAllGroupsResponse {
    return QueryAllGroupsResponse.decode(message.value);
  },
  toProto(message: QueryAllGroupsResponse): Uint8Array {
    return QueryAllGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsResponse): QueryAllGroupsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsResponse",
      value: QueryAllGroupsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsResponse.typeUrl, QueryAllGroupsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsResponse.aminoType, QueryAllGroupsResponse.typeUrl);
function createBaseQueryAllGroupsGaugesRequest(): QueryAllGroupsGaugesRequest {
  return {};
}
export const QueryAllGroupsGaugesRequest = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesRequest",
  aminoType: "osmosis/incentives/query-all-groups-gauges-request",
  is(o: any): o is QueryAllGroupsGaugesRequest {
    return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllGroupsGaugesRequestSDKType {
    return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllGroupsGaugesRequestAmino {
    return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
  },
  encode(_: QueryAllGroupsGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllGroupsGaugesRequest>): QueryAllGroupsGaugesRequest {
    const message = createBaseQueryAllGroupsGaugesRequest();
    return message;
  },
  fromAmino(_: QueryAllGroupsGaugesRequestAmino): QueryAllGroupsGaugesRequest {
    const message = createBaseQueryAllGroupsGaugesRequest();
    return message;
  },
  toAmino(_: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsGaugesRequestAminoMsg): QueryAllGroupsGaugesRequest {
    return QueryAllGroupsGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-gauges-request",
      value: QueryAllGroupsGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsGaugesRequestProtoMsg): QueryAllGroupsGaugesRequest {
    return QueryAllGroupsGaugesRequest.decode(message.value);
  },
  toProto(message: QueryAllGroupsGaugesRequest): Uint8Array {
    return QueryAllGroupsGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesRequest",
      value: QueryAllGroupsGaugesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsGaugesRequest.typeUrl, QueryAllGroupsGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsGaugesRequest.aminoType, QueryAllGroupsGaugesRequest.typeUrl);
function createBaseQueryAllGroupsGaugesResponse(): QueryAllGroupsGaugesResponse {
  return {
    gauges: []
  };
}
export const QueryAllGroupsGaugesResponse = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesResponse",
  aminoType: "osmosis/incentives/query-all-groups-gauges-response",
  is(o: any): o is QueryAllGroupsGaugesResponse {
    return o && (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl || Array.isArray(o.gauges) && (!o.gauges.length || Gauge.is(o.gauges[0])));
  },
  isSDK(o: any): o is QueryAllGroupsGaugesResponseSDKType {
    return o && (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl || Array.isArray(o.gauges) && (!o.gauges.length || Gauge.isSDK(o.gauges[0])));
  },
  isAmino(o: any): o is QueryAllGroupsGaugesResponseAmino {
    return o && (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl || Array.isArray(o.gauges) && (!o.gauges.length || Gauge.isAmino(o.gauges[0])));
  },
  encode(message: QueryAllGroupsGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllGroupsGaugesResponse>): QueryAllGroupsGaugesResponse {
    const message = createBaseQueryAllGroupsGaugesResponse();
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllGroupsGaugesResponseAmino): QueryAllGroupsGaugesResponse {
    const message = createBaseQueryAllGroupsGaugesResponse();
    message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseAmino {
    const obj: any = {};
    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.gauges = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsGaugesResponseAminoMsg): QueryAllGroupsGaugesResponse {
    return QueryAllGroupsGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-gauges-response",
      value: QueryAllGroupsGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsGaugesResponseProtoMsg): QueryAllGroupsGaugesResponse {
    return QueryAllGroupsGaugesResponse.decode(message.value);
  },
  toProto(message: QueryAllGroupsGaugesResponse): Uint8Array {
    return QueryAllGroupsGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesResponse",
      value: QueryAllGroupsGaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsGaugesResponse.typeUrl, QueryAllGroupsGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsGaugesResponse.aminoType, QueryAllGroupsGaugesResponse.typeUrl);
function createBaseQueryAllGroupsWithGaugeRequest(): QueryAllGroupsWithGaugeRequest {
  return {};
}
export const QueryAllGroupsWithGaugeRequest = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeRequest",
  aminoType: "osmosis/incentives/query-all-groups-with-gauge-request",
  is(o: any): o is QueryAllGroupsWithGaugeRequest {
    return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllGroupsWithGaugeRequestSDKType {
    return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllGroupsWithGaugeRequestAmino {
    return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
  },
  encode(_: QueryAllGroupsWithGaugeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsWithGaugeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsWithGaugeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllGroupsWithGaugeRequest>): QueryAllGroupsWithGaugeRequest {
    const message = createBaseQueryAllGroupsWithGaugeRequest();
    return message;
  },
  fromAmino(_: QueryAllGroupsWithGaugeRequestAmino): QueryAllGroupsWithGaugeRequest {
    const message = createBaseQueryAllGroupsWithGaugeRequest();
    return message;
  },
  toAmino(_: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsWithGaugeRequestAminoMsg): QueryAllGroupsWithGaugeRequest {
    return QueryAllGroupsWithGaugeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-with-gauge-request",
      value: QueryAllGroupsWithGaugeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsWithGaugeRequestProtoMsg): QueryAllGroupsWithGaugeRequest {
    return QueryAllGroupsWithGaugeRequest.decode(message.value);
  },
  toProto(message: QueryAllGroupsWithGaugeRequest): Uint8Array {
    return QueryAllGroupsWithGaugeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeRequest",
      value: QueryAllGroupsWithGaugeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsWithGaugeRequest.typeUrl, QueryAllGroupsWithGaugeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsWithGaugeRequest.aminoType, QueryAllGroupsWithGaugeRequest.typeUrl);
function createBaseQueryAllGroupsWithGaugeResponse(): QueryAllGroupsWithGaugeResponse {
  return {
    groupsWithGauge: []
  };
}
export const QueryAllGroupsWithGaugeResponse = {
  typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeResponse",
  aminoType: "osmosis/incentives/query-all-groups-with-gauge-response",
  is(o: any): o is QueryAllGroupsWithGaugeResponse {
    return o && (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl || Array.isArray(o.groupsWithGauge) && (!o.groupsWithGauge.length || GroupsWithGauge.is(o.groupsWithGauge[0])));
  },
  isSDK(o: any): o is QueryAllGroupsWithGaugeResponseSDKType {
    return o && (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl || Array.isArray(o.groups_with_gauge) && (!o.groups_with_gauge.length || GroupsWithGauge.isSDK(o.groups_with_gauge[0])));
  },
  isAmino(o: any): o is QueryAllGroupsWithGaugeResponseAmino {
    return o && (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl || Array.isArray(o.groups_with_gauge) && (!o.groups_with_gauge.length || GroupsWithGauge.isAmino(o.groups_with_gauge[0])));
  },
  encode(message: QueryAllGroupsWithGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groupsWithGauge) {
      GroupsWithGauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsWithGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupsWithGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupsWithGauge.push(GroupsWithGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllGroupsWithGaugeResponse>): QueryAllGroupsWithGaugeResponse {
    const message = createBaseQueryAllGroupsWithGaugeResponse();
    message.groupsWithGauge = object.groupsWithGauge?.map(e => GroupsWithGauge.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllGroupsWithGaugeResponseAmino): QueryAllGroupsWithGaugeResponse {
    const message = createBaseQueryAllGroupsWithGaugeResponse();
    message.groupsWithGauge = object.groups_with_gauge?.map(e => GroupsWithGauge.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseAmino {
    const obj: any = {};
    if (message.groupsWithGauge) {
      obj.groups_with_gauge = message.groupsWithGauge.map(e => e ? GroupsWithGauge.toAmino(e) : undefined);
    } else {
      obj.groups_with_gauge = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupsWithGaugeResponseAminoMsg): QueryAllGroupsWithGaugeResponse {
    return QueryAllGroupsWithGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-all-groups-with-gauge-response",
      value: QueryAllGroupsWithGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllGroupsWithGaugeResponseProtoMsg): QueryAllGroupsWithGaugeResponse {
    return QueryAllGroupsWithGaugeResponse.decode(message.value);
  },
  toProto(message: QueryAllGroupsWithGaugeResponse): Uint8Array {
    return QueryAllGroupsWithGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeResponse",
      value: QueryAllGroupsWithGaugeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllGroupsWithGaugeResponse.typeUrl, QueryAllGroupsWithGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsWithGaugeResponse.aminoType, QueryAllGroupsWithGaugeResponse.typeUrl);
function createBaseQueryGroupByGroupGaugeIDRequest(): QueryGroupByGroupGaugeIDRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGroupByGroupGaugeIDRequest = {
  typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDRequest",
  aminoType: "osmosis/incentives/query-group-by-group-gauge-id-request",
  is(o: any): o is QueryGroupByGroupGaugeIDRequest {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryGroupByGroupGaugeIDRequestSDKType {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryGroupByGroupGaugeIDRequestAmino {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryGroupByGroupGaugeIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupByGroupGaugeIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupByGroupGaugeIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGroupByGroupGaugeIDRequest>): QueryGroupByGroupGaugeIDRequest {
    const message = createBaseQueryGroupByGroupGaugeIDRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGroupByGroupGaugeIDRequestAmino): QueryGroupByGroupGaugeIDRequest {
    const message = createBaseQueryGroupByGroupGaugeIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupByGroupGaugeIDRequestAminoMsg): QueryGroupByGroupGaugeIDRequest {
    return QueryGroupByGroupGaugeIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-group-by-group-gauge-id-request",
      value: QueryGroupByGroupGaugeIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupByGroupGaugeIDRequestProtoMsg): QueryGroupByGroupGaugeIDRequest {
    return QueryGroupByGroupGaugeIDRequest.decode(message.value);
  },
  toProto(message: QueryGroupByGroupGaugeIDRequest): Uint8Array {
    return QueryGroupByGroupGaugeIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDRequest",
      value: QueryGroupByGroupGaugeIDRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupByGroupGaugeIDRequest.typeUrl, QueryGroupByGroupGaugeIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupByGroupGaugeIDRequest.aminoType, QueryGroupByGroupGaugeIDRequest.typeUrl);
function createBaseQueryGroupByGroupGaugeIDResponse(): QueryGroupByGroupGaugeIDResponse {
  return {
    group: Group.fromPartial({})
  };
}
export const QueryGroupByGroupGaugeIDResponse = {
  typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDResponse",
  aminoType: "osmosis/incentives/query-group-by-group-gauge-id-response",
  is(o: any): o is QueryGroupByGroupGaugeIDResponse {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl || Group.is(o.group));
  },
  isSDK(o: any): o is QueryGroupByGroupGaugeIDResponseSDKType {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl || Group.isSDK(o.group));
  },
  isAmino(o: any): o is QueryGroupByGroupGaugeIDResponseAmino {
    return o && (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl || Group.isAmino(o.group));
  },
  encode(message: QueryGroupByGroupGaugeIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupByGroupGaugeIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupByGroupGaugeIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGroupByGroupGaugeIDResponse>): QueryGroupByGroupGaugeIDResponse {
    const message = createBaseQueryGroupByGroupGaugeIDResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupByGroupGaugeIDResponseAmino): QueryGroupByGroupGaugeIDResponse {
    const message = createBaseQueryGroupByGroupGaugeIDResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    return message;
  },
  toAmino(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupByGroupGaugeIDResponseAminoMsg): QueryGroupByGroupGaugeIDResponse {
    return QueryGroupByGroupGaugeIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-group-by-group-gauge-id-response",
      value: QueryGroupByGroupGaugeIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupByGroupGaugeIDResponseProtoMsg): QueryGroupByGroupGaugeIDResponse {
    return QueryGroupByGroupGaugeIDResponse.decode(message.value);
  },
  toProto(message: QueryGroupByGroupGaugeIDResponse): Uint8Array {
    return QueryGroupByGroupGaugeIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDResponse",
      value: QueryGroupByGroupGaugeIDResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGroupByGroupGaugeIDResponse.typeUrl, QueryGroupByGroupGaugeIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupByGroupGaugeIDResponse.aminoType, QueryGroupByGroupGaugeIDResponse.typeUrl);
function createBaseQueryCurrentWeightByGroupGaugeIDRequest(): QueryCurrentWeightByGroupGaugeIDRequest {
  return {
    groupGaugeId: BigInt(0)
  };
}
export const QueryCurrentWeightByGroupGaugeIDRequest = {
  typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest",
  aminoType: "osmosis/incentives/query-current-weight-by-group-gauge-id-request",
  is(o: any): o is QueryCurrentWeightByGroupGaugeIDRequest {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl || typeof o.groupGaugeId === "bigint");
  },
  isSDK(o: any): o is QueryCurrentWeightByGroupGaugeIDRequestSDKType {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl || typeof o.group_gauge_id === "bigint");
  },
  isAmino(o: any): o is QueryCurrentWeightByGroupGaugeIDRequestAmino {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl || typeof o.group_gauge_id === "bigint");
  },
  encode(message: QueryCurrentWeightByGroupGaugeIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupGaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupGaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentWeightByGroupGaugeIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupGaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentWeightByGroupGaugeIDRequest>): QueryCurrentWeightByGroupGaugeIDRequest {
    const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
    message.groupGaugeId = object.groupGaugeId !== undefined && object.groupGaugeId !== null ? BigInt(object.groupGaugeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentWeightByGroupGaugeIDRequestAmino): QueryCurrentWeightByGroupGaugeIDRequest {
    const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
    if (object.group_gauge_id !== undefined && object.group_gauge_id !== null) {
      message.groupGaugeId = BigInt(object.group_gauge_id);
    }
    return message;
  },
  toAmino(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestAmino {
    const obj: any = {};
    obj.group_gauge_id = message.groupGaugeId ? message.groupGaugeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentWeightByGroupGaugeIDRequestAminoMsg): QueryCurrentWeightByGroupGaugeIDRequest {
    return QueryCurrentWeightByGroupGaugeIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestAminoMsg {
    return {
      type: "osmosis/incentives/query-current-weight-by-group-gauge-id-request",
      value: QueryCurrentWeightByGroupGaugeIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentWeightByGroupGaugeIDRequestProtoMsg): QueryCurrentWeightByGroupGaugeIDRequest {
    return QueryCurrentWeightByGroupGaugeIDRequest.decode(message.value);
  },
  toProto(message: QueryCurrentWeightByGroupGaugeIDRequest): Uint8Array {
    return QueryCurrentWeightByGroupGaugeIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest",
      value: QueryCurrentWeightByGroupGaugeIDRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentWeightByGroupGaugeIDRequest.typeUrl, QueryCurrentWeightByGroupGaugeIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentWeightByGroupGaugeIDRequest.aminoType, QueryCurrentWeightByGroupGaugeIDRequest.typeUrl);
function createBaseQueryCurrentWeightByGroupGaugeIDResponse(): QueryCurrentWeightByGroupGaugeIDResponse {
  return {
    gaugeWeight: []
  };
}
export const QueryCurrentWeightByGroupGaugeIDResponse = {
  typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse",
  aminoType: "osmosis/incentives/query-current-weight-by-group-gauge-id-response",
  is(o: any): o is QueryCurrentWeightByGroupGaugeIDResponse {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl || Array.isArray(o.gaugeWeight) && (!o.gaugeWeight.length || GaugeWeight.is(o.gaugeWeight[0])));
  },
  isSDK(o: any): o is QueryCurrentWeightByGroupGaugeIDResponseSDKType {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl || Array.isArray(o.gauge_weight) && (!o.gauge_weight.length || GaugeWeight.isSDK(o.gauge_weight[0])));
  },
  isAmino(o: any): o is QueryCurrentWeightByGroupGaugeIDResponseAmino {
    return o && (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl || Array.isArray(o.gauge_weight) && (!o.gauge_weight.length || GaugeWeight.isAmino(o.gauge_weight[0])));
  },
  encode(message: QueryCurrentWeightByGroupGaugeIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gaugeWeight) {
      GaugeWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentWeightByGroupGaugeIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeWeight.push(GaugeWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentWeightByGroupGaugeIDResponse>): QueryCurrentWeightByGroupGaugeIDResponse {
    const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
    message.gaugeWeight = object.gaugeWeight?.map(e => GaugeWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCurrentWeightByGroupGaugeIDResponseAmino): QueryCurrentWeightByGroupGaugeIDResponse {
    const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
    message.gaugeWeight = object.gauge_weight?.map(e => GaugeWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseAmino {
    const obj: any = {};
    if (message.gaugeWeight) {
      obj.gauge_weight = message.gaugeWeight.map(e => e ? GaugeWeight.toAmino(e) : undefined);
    } else {
      obj.gauge_weight = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCurrentWeightByGroupGaugeIDResponseAminoMsg): QueryCurrentWeightByGroupGaugeIDResponse {
    return QueryCurrentWeightByGroupGaugeIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseAminoMsg {
    return {
      type: "osmosis/incentives/query-current-weight-by-group-gauge-id-response",
      value: QueryCurrentWeightByGroupGaugeIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentWeightByGroupGaugeIDResponseProtoMsg): QueryCurrentWeightByGroupGaugeIDResponse {
    return QueryCurrentWeightByGroupGaugeIDResponse.decode(message.value);
  },
  toProto(message: QueryCurrentWeightByGroupGaugeIDResponse): Uint8Array {
    return QueryCurrentWeightByGroupGaugeIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse",
      value: QueryCurrentWeightByGroupGaugeIDResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentWeightByGroupGaugeIDResponse.typeUrl, QueryCurrentWeightByGroupGaugeIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentWeightByGroupGaugeIDResponse.aminoType, QueryCurrentWeightByGroupGaugeIDResponse.typeUrl);
function createBaseGaugeWeight(): GaugeWeight {
  return {
    gaugeId: BigInt(0),
    weightRatio: ""
  };
}
export const GaugeWeight = {
  typeUrl: "/osmosis.incentives.GaugeWeight",
  aminoType: "osmosis/incentives/gauge-weight",
  is(o: any): o is GaugeWeight {
    return o && (o.$typeUrl === GaugeWeight.typeUrl || typeof o.gaugeId === "bigint" && typeof o.weightRatio === "string");
  },
  isSDK(o: any): o is GaugeWeightSDKType {
    return o && (o.$typeUrl === GaugeWeight.typeUrl || typeof o.gauge_id === "bigint" && typeof o.weight_ratio === "string");
  },
  isAmino(o: any): o is GaugeWeightAmino {
    return o && (o.$typeUrl === GaugeWeight.typeUrl || typeof o.gauge_id === "bigint" && typeof o.weight_ratio === "string");
  },
  encode(message: GaugeWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weightRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weightRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GaugeWeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.weightRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GaugeWeight>): GaugeWeight {
    const message = createBaseGaugeWeight();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
    message.weightRatio = object.weightRatio ?? "";
    return message;
  },
  fromAmino(object: GaugeWeightAmino): GaugeWeight {
    const message = createBaseGaugeWeight();
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.weight_ratio !== undefined && object.weight_ratio !== null) {
      message.weightRatio = object.weight_ratio;
    }
    return message;
  },
  toAmino(message: GaugeWeight): GaugeWeightAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.weight_ratio = message.weightRatio;
    return obj;
  },
  fromAminoMsg(object: GaugeWeightAminoMsg): GaugeWeight {
    return GaugeWeight.fromAmino(object.value);
  },
  toAminoMsg(message: GaugeWeight): GaugeWeightAminoMsg {
    return {
      type: "osmosis/incentives/gauge-weight",
      value: GaugeWeight.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeWeightProtoMsg): GaugeWeight {
    return GaugeWeight.decode(message.value);
  },
  toProto(message: GaugeWeight): Uint8Array {
    return GaugeWeight.encode(message).finish();
  },
  toProtoMsg(message: GaugeWeight): GaugeWeightProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GaugeWeight",
      value: GaugeWeight.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GaugeWeight.typeUrl, GaugeWeight);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeWeight.aminoType, GaugeWeight.typeUrl);