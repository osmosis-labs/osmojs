//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /**
   * gauges are all gauges (not including group gauges) that should exist at
   * genesis
   */
  gauges: Gauge[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to receive incentives
   */
  lockableDurations: Duration[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  lastGaugeId: bigint;
  /** gauges are all group gauges that should exist at genesis */
  groupGauges: Gauge[];
  /** groups are all the groups that should exist at genesis */
  groups: Group[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.incentives.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /**
   * gauges are all gauges (not including group gauges) that should exist at
   * genesis
   */
  gauges?: GaugeAmino[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to receive incentives
   */
  lockable_durations?: DurationAmino[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  last_gauge_id?: string;
  /** gauges are all group gauges that should exist at genesis */
  group_gauges?: GaugeAmino[];
  /** groups are all the groups that should exist at genesis */
  groups?: GroupAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/incentives/genesis-state";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  gauges: GaugeSDKType[];
  lockable_durations: DurationSDKType[];
  last_gauge_id: bigint;
  group_gauges: GaugeSDKType[];
  groups: GroupSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    gauges: [],
    lockableDurations: [],
    lastGaugeId: BigInt(0),
    groupGauges: [],
    groups: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.incentives.GenesisState",
  aminoType: "osmosis/incentives/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.gauges) && (!o.gauges.length || Gauge.is(o.gauges[0])) && Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])) && typeof o.lastGaugeId === "bigint" && Array.isArray(o.groupGauges) && (!o.groupGauges.length || Gauge.is(o.groupGauges[0])) && Array.isArray(o.groups) && (!o.groups.length || Group.is(o.groups[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.gauges) && (!o.gauges.length || Gauge.isSDK(o.gauges[0])) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isSDK(o.lockable_durations[0])) && typeof o.last_gauge_id === "bigint" && Array.isArray(o.group_gauges) && (!o.group_gauges.length || Gauge.isSDK(o.group_gauges[0])) && Array.isArray(o.groups) && (!o.groups.length || Group.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.gauges) && (!o.gauges.length || Gauge.isAmino(o.gauges[0])) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isAmino(o.lockable_durations[0])) && typeof o.last_gauge_id === "bigint" && Array.isArray(o.group_gauges) && (!o.group_gauges.length || Gauge.isAmino(o.group_gauges[0])) && Array.isArray(o.groups) && (!o.groups.length || Group.isAmino(o.groups[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastGaugeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastGaugeId);
    }
    for (const v of message.groupGauges) {
      Gauge.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastGaugeId = reader.uint64();
          break;
        case 5:
          message.groupGauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? BigInt(object.lastGaugeId.toString()) : BigInt(0);
    message.groupGauges = object.groupGauges?.map(e => Gauge.fromPartial(e)) || [];
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
      message.lastGaugeId = BigInt(object.last_gauge_id);
    }
    message.groupGauges = object.group_gauges?.map(e => Gauge.fromAmino(e)) || [];
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.gauges = message.gauges;
    }
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = message.lockableDurations;
    }
    obj.last_gauge_id = message.lastGaugeId !== BigInt(0) ? message.lastGaugeId.toString() : undefined;
    if (message.groupGauges) {
      obj.group_gauges = message.groupGauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.group_gauges = message.groupGauges;
    }
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/incentives/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);