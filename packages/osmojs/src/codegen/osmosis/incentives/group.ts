import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export enum SplittingPolicy {
  ByVolume = 0,
  UNRECOGNIZED = -1,
}
export const SplittingPolicySDKType = SplittingPolicy;
export const SplittingPolicyAmino = SplittingPolicy;
export function splittingPolicyFromJSON(object: any): SplittingPolicy {
  switch (object) {
    case 0:
    case "ByVolume":
      return SplittingPolicy.ByVolume;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SplittingPolicy.UNRECOGNIZED;
  }
}
export function splittingPolicyToJSON(object: SplittingPolicy): string {
  switch (object) {
    case SplittingPolicy.ByVolume:
      return "ByVolume";
    case SplittingPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfo {
  totalWeight: string;
  gaugeRecords: InternalGaugeRecord[];
}
export interface InternalGaugeInfoProtoMsg {
  typeUrl: "/osmosis.incentives.InternalGaugeInfo";
  value: Uint8Array;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoAmino {
  total_weight?: string;
  gauge_records?: InternalGaugeRecordAmino[];
}
export interface InternalGaugeInfoAminoMsg {
  type: "osmosis/incentives/internal-gauge-info";
  value: InternalGaugeInfoAmino;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoSDKType {
  total_weight: string;
  gauge_records: InternalGaugeRecordSDKType[];
}
export interface InternalGaugeRecord {
  gaugeId: bigint;
  /**
   * CurrentWeight is the current weight of this gauge being distributed to for
   * this epoch. For instance, for volume splitting policy, this stores the
   * volume generated in the last epoch of the linked pool.
   */
  currentWeight: string;
  /**
   * CumulativeWeight serves as a snapshot of the accumulator being tracked
   * based on splitting policy. For instance, for volume splitting policy, this
   * stores the cumulative volume for the linked pool at time of last update.
   */
  cumulativeWeight: string;
}
export interface InternalGaugeRecordProtoMsg {
  typeUrl: "/osmosis.incentives.InternalGaugeRecord";
  value: Uint8Array;
}
export interface InternalGaugeRecordAmino {
  gauge_id?: string;
  /**
   * CurrentWeight is the current weight of this gauge being distributed to for
   * this epoch. For instance, for volume splitting policy, this stores the
   * volume generated in the last epoch of the linked pool.
   */
  current_weight?: string;
  /**
   * CumulativeWeight serves as a snapshot of the accumulator being tracked
   * based on splitting policy. For instance, for volume splitting policy, this
   * stores the cumulative volume for the linked pool at time of last update.
   */
  cumulative_weight?: string;
}
export interface InternalGaugeRecordAminoMsg {
  type: "osmosis/incentives/internal-gauge-record";
  value: InternalGaugeRecordAmino;
}
export interface InternalGaugeRecordSDKType {
  gauge_id: bigint;
  current_weight: string;
  cumulative_weight: string;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface Group {
  groupGaugeId: bigint;
  internalGaugeInfo: InternalGaugeInfo;
  splittingPolicy: SplittingPolicy;
}
export interface GroupProtoMsg {
  typeUrl: "/osmosis.incentives.Group";
  value: Uint8Array;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupAmino {
  group_gauge_id?: string;
  internal_gauge_info?: InternalGaugeInfoAmino;
  splitting_policy?: SplittingPolicy;
}
export interface GroupAminoMsg {
  type: "osmosis/incentives/group";
  value: GroupAmino;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupSDKType {
  group_gauge_id: bigint;
  internal_gauge_info: InternalGaugeInfoSDKType;
  splitting_policy: SplittingPolicy;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroup {
  /**
   * CreateGroup is called via governance to create a new group.
   * It takes an array of pool IDs to split the incentives across.
   */
  poolIds: bigint[];
}
export interface CreateGroupProtoMsg {
  typeUrl: "/osmosis.incentives.CreateGroup";
  value: Uint8Array;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupAmino {
  /**
   * CreateGroup is called via governance to create a new group.
   * It takes an array of pool IDs to split the incentives across.
   */
  pool_ids?: string[];
}
export interface CreateGroupAminoMsg {
  type: "osmosis/incentives/create-group";
  value: CreateGroupAmino;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupSDKType {
  pool_ids: bigint[];
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGauge {
  group: Group;
  gauge: Gauge;
}
export interface GroupsWithGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.GroupsWithGauge";
  value: Uint8Array;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeAmino {
  group?: GroupAmino;
  gauge?: GaugeAmino;
}
export interface GroupsWithGaugeAminoMsg {
  type: "osmosis/incentives/groups-with-gauge";
  value: GroupsWithGaugeAmino;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeSDKType {
  group: GroupSDKType;
  gauge: GaugeSDKType;
}
function createBaseInternalGaugeInfo(): InternalGaugeInfo {
  return {
    totalWeight: "",
    gaugeRecords: []
  };
}
export const InternalGaugeInfo = {
  typeUrl: "/osmosis.incentives.InternalGaugeInfo",
  aminoType: "osmosis/incentives/internal-gauge-info",
  is(o: any): o is InternalGaugeInfo {
    return o && (o.$typeUrl === InternalGaugeInfo.typeUrl || typeof o.totalWeight === "string" && Array.isArray(o.gaugeRecords) && (!o.gaugeRecords.length || InternalGaugeRecord.is(o.gaugeRecords[0])));
  },
  isSDK(o: any): o is InternalGaugeInfoSDKType {
    return o && (o.$typeUrl === InternalGaugeInfo.typeUrl || typeof o.total_weight === "string" && Array.isArray(o.gauge_records) && (!o.gauge_records.length || InternalGaugeRecord.isSDK(o.gauge_records[0])));
  },
  isAmino(o: any): o is InternalGaugeInfoAmino {
    return o && (o.$typeUrl === InternalGaugeInfo.typeUrl || typeof o.total_weight === "string" && Array.isArray(o.gauge_records) && (!o.gauge_records.length || InternalGaugeRecord.isAmino(o.gauge_records[0])));
  },
  encode(message: InternalGaugeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.gaugeRecords) {
      InternalGaugeRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalGaugeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.gaugeRecords.push(InternalGaugeRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InternalGaugeInfo {
    return {
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      gaugeRecords: Array.isArray(object?.gaugeRecords) ? object.gaugeRecords.map((e: any) => InternalGaugeRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: InternalGaugeInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    if (message.gaugeRecords) {
      obj.gaugeRecords = message.gaugeRecords.map(e => e ? InternalGaugeRecord.toJSON(e) : undefined);
    } else {
      obj.gaugeRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<InternalGaugeInfo>): InternalGaugeInfo {
    const message = createBaseInternalGaugeInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.gaugeRecords = object.gaugeRecords?.map(e => InternalGaugeRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InternalGaugeInfoAmino): InternalGaugeInfo {
    const message = createBaseInternalGaugeInfo();
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    message.gaugeRecords = object.gauge_records?.map(e => InternalGaugeRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InternalGaugeInfo): InternalGaugeInfoAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight;
    if (message.gaugeRecords) {
      obj.gauge_records = message.gaugeRecords.map(e => e ? InternalGaugeRecord.toAmino(e) : undefined);
    } else {
      obj.gauge_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: InternalGaugeInfoAminoMsg): InternalGaugeInfo {
    return InternalGaugeInfo.fromAmino(object.value);
  },
  toAminoMsg(message: InternalGaugeInfo): InternalGaugeInfoAminoMsg {
    return {
      type: "osmosis/incentives/internal-gauge-info",
      value: InternalGaugeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: InternalGaugeInfoProtoMsg): InternalGaugeInfo {
    return InternalGaugeInfo.decode(message.value);
  },
  toProto(message: InternalGaugeInfo): Uint8Array {
    return InternalGaugeInfo.encode(message).finish();
  },
  toProtoMsg(message: InternalGaugeInfo): InternalGaugeInfoProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.InternalGaugeInfo",
      value: InternalGaugeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InternalGaugeInfo.typeUrl, InternalGaugeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(InternalGaugeInfo.aminoType, InternalGaugeInfo.typeUrl);
function createBaseInternalGaugeRecord(): InternalGaugeRecord {
  return {
    gaugeId: BigInt(0),
    currentWeight: "",
    cumulativeWeight: ""
  };
}
export const InternalGaugeRecord = {
  typeUrl: "/osmosis.incentives.InternalGaugeRecord",
  aminoType: "osmosis/incentives/internal-gauge-record",
  is(o: any): o is InternalGaugeRecord {
    return o && (o.$typeUrl === InternalGaugeRecord.typeUrl || typeof o.gaugeId === "bigint" && typeof o.currentWeight === "string" && typeof o.cumulativeWeight === "string");
  },
  isSDK(o: any): o is InternalGaugeRecordSDKType {
    return o && (o.$typeUrl === InternalGaugeRecord.typeUrl || typeof o.gauge_id === "bigint" && typeof o.current_weight === "string" && typeof o.cumulative_weight === "string");
  },
  isAmino(o: any): o is InternalGaugeRecordAmino {
    return o && (o.$typeUrl === InternalGaugeRecord.typeUrl || typeof o.gauge_id === "bigint" && typeof o.current_weight === "string" && typeof o.cumulative_weight === "string");
  },
  encode(message: InternalGaugeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.currentWeight !== "") {
      writer.uint32(18).string(message.currentWeight);
    }
    if (message.cumulativeWeight !== "") {
      writer.uint32(26).string(message.cumulativeWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalGaugeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.currentWeight = reader.string();
          break;
        case 3:
          message.cumulativeWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InternalGaugeRecord {
    return {
      gaugeId: isSet(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
      currentWeight: isSet(object.currentWeight) ? String(object.currentWeight) : "",
      cumulativeWeight: isSet(object.cumulativeWeight) ? String(object.cumulativeWeight) : ""
    };
  },
  toJSON(message: InternalGaugeRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.currentWeight !== undefined && (obj.currentWeight = message.currentWeight);
    message.cumulativeWeight !== undefined && (obj.cumulativeWeight = message.cumulativeWeight);
    return obj;
  },
  fromPartial(object: Partial<InternalGaugeRecord>): InternalGaugeRecord {
    const message = createBaseInternalGaugeRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
    message.currentWeight = object.currentWeight ?? "";
    message.cumulativeWeight = object.cumulativeWeight ?? "";
    return message;
  },
  fromAmino(object: InternalGaugeRecordAmino): InternalGaugeRecord {
    const message = createBaseInternalGaugeRecord();
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.current_weight !== undefined && object.current_weight !== null) {
      message.currentWeight = object.current_weight;
    }
    if (object.cumulative_weight !== undefined && object.cumulative_weight !== null) {
      message.cumulativeWeight = object.cumulative_weight;
    }
    return message;
  },
  toAmino(message: InternalGaugeRecord): InternalGaugeRecordAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.current_weight = message.currentWeight;
    obj.cumulative_weight = message.cumulativeWeight;
    return obj;
  },
  fromAminoMsg(object: InternalGaugeRecordAminoMsg): InternalGaugeRecord {
    return InternalGaugeRecord.fromAmino(object.value);
  },
  toAminoMsg(message: InternalGaugeRecord): InternalGaugeRecordAminoMsg {
    return {
      type: "osmosis/incentives/internal-gauge-record",
      value: InternalGaugeRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: InternalGaugeRecordProtoMsg): InternalGaugeRecord {
    return InternalGaugeRecord.decode(message.value);
  },
  toProto(message: InternalGaugeRecord): Uint8Array {
    return InternalGaugeRecord.encode(message).finish();
  },
  toProtoMsg(message: InternalGaugeRecord): InternalGaugeRecordProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.InternalGaugeRecord",
      value: InternalGaugeRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InternalGaugeRecord.typeUrl, InternalGaugeRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(InternalGaugeRecord.aminoType, InternalGaugeRecord.typeUrl);
function createBaseGroup(): Group {
  return {
    groupGaugeId: BigInt(0),
    internalGaugeInfo: InternalGaugeInfo.fromPartial({}),
    splittingPolicy: 0
  };
}
export const Group = {
  typeUrl: "/osmosis.incentives.Group",
  aminoType: "osmosis/incentives/group",
  is(o: any): o is Group {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.groupGaugeId === "bigint" && InternalGaugeInfo.is(o.internalGaugeInfo) && isSet(o.splittingPolicy));
  },
  isSDK(o: any): o is GroupSDKType {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.group_gauge_id === "bigint" && InternalGaugeInfo.isSDK(o.internal_gauge_info) && isSet(o.splitting_policy));
  },
  isAmino(o: any): o is GroupAmino {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.group_gauge_id === "bigint" && InternalGaugeInfo.isAmino(o.internal_gauge_info) && isSet(o.splitting_policy));
  },
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupGaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupGaugeId);
    }
    if (message.internalGaugeInfo !== undefined) {
      InternalGaugeInfo.encode(message.internalGaugeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.splittingPolicy !== 0) {
      writer.uint32(24).int32(message.splittingPolicy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupGaugeId = reader.uint64();
          break;
        case 2:
          message.internalGaugeInfo = InternalGaugeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.splittingPolicy = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Group {
    return {
      groupGaugeId: isSet(object.groupGaugeId) ? BigInt(object.groupGaugeId.toString()) : BigInt(0),
      internalGaugeInfo: isSet(object.internalGaugeInfo) ? InternalGaugeInfo.fromJSON(object.internalGaugeInfo) : undefined,
      splittingPolicy: isSet(object.splittingPolicy) ? splittingPolicyFromJSON(object.splittingPolicy) : -1
    };
  },
  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupGaugeId !== undefined && (obj.groupGaugeId = (message.groupGaugeId || BigInt(0)).toString());
    message.internalGaugeInfo !== undefined && (obj.internalGaugeInfo = message.internalGaugeInfo ? InternalGaugeInfo.toJSON(message.internalGaugeInfo) : undefined);
    message.splittingPolicy !== undefined && (obj.splittingPolicy = splittingPolicyToJSON(message.splittingPolicy));
    return obj;
  },
  fromPartial(object: Partial<Group>): Group {
    const message = createBaseGroup();
    message.groupGaugeId = object.groupGaugeId !== undefined && object.groupGaugeId !== null ? BigInt(object.groupGaugeId.toString()) : BigInt(0);
    message.internalGaugeInfo = object.internalGaugeInfo !== undefined && object.internalGaugeInfo !== null ? InternalGaugeInfo.fromPartial(object.internalGaugeInfo) : undefined;
    message.splittingPolicy = object.splittingPolicy ?? 0;
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.group_gauge_id !== undefined && object.group_gauge_id !== null) {
      message.groupGaugeId = BigInt(object.group_gauge_id);
    }
    if (object.internal_gauge_info !== undefined && object.internal_gauge_info !== null) {
      message.internalGaugeInfo = InternalGaugeInfo.fromAmino(object.internal_gauge_info);
    }
    if (object.splitting_policy !== undefined && object.splitting_policy !== null) {
      message.splittingPolicy = splittingPolicyFromJSON(object.splitting_policy);
    }
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.group_gauge_id = message.groupGaugeId ? message.groupGaugeId.toString() : undefined;
    obj.internal_gauge_info = message.internalGaugeInfo ? InternalGaugeInfo.toAmino(message.internalGaugeInfo) : undefined;
    obj.splitting_policy = splittingPolicyToJSON(message.splittingPolicy);
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  toAminoMsg(message: Group): GroupAminoMsg {
    return {
      type: "osmosis/incentives/group",
      value: Group.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.Group",
      value: Group.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Group.typeUrl, Group);
GlobalDecoderRegistry.registerAminoProtoMapping(Group.aminoType, Group.typeUrl);
function createBaseCreateGroup(): CreateGroup {
  return {
    poolIds: []
  };
}
export const CreateGroup = {
  typeUrl: "/osmosis.incentives.CreateGroup",
  aminoType: "osmosis/incentives/create-group",
  is(o: any): o is CreateGroup {
    return o && (o.$typeUrl === CreateGroup.typeUrl || Array.isArray(o.poolIds) && (!o.poolIds.length || typeof o.poolIds[0] === "bigint"));
  },
  isSDK(o: any): o is CreateGroupSDKType {
    return o && (o.$typeUrl === CreateGroup.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
  },
  isAmino(o: any): o is CreateGroupAmino {
    return o && (o.$typeUrl === CreateGroup.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
  },
  encode(message: CreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateGroup {
    return {
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: CreateGroup): unknown {
    const obj: any = {};
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.poolIds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CreateGroup>): CreateGroup {
    const message = createBaseCreateGroup();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: CreateGroupAmino): CreateGroup {
    const message = createBaseCreateGroup();
    message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: CreateGroup): CreateGroupAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateGroupAminoMsg): CreateGroup {
    return CreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: CreateGroup): CreateGroupAminoMsg {
    return {
      type: "osmosis/incentives/create-group",
      value: CreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateGroupProtoMsg): CreateGroup {
    return CreateGroup.decode(message.value);
  },
  toProto(message: CreateGroup): Uint8Array {
    return CreateGroup.encode(message).finish();
  },
  toProtoMsg(message: CreateGroup): CreateGroupProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.CreateGroup",
      value: CreateGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateGroup.typeUrl, CreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateGroup.aminoType, CreateGroup.typeUrl);
function createBaseGroupsWithGauge(): GroupsWithGauge {
  return {
    group: Group.fromPartial({}),
    gauge: Gauge.fromPartial({})
  };
}
export const GroupsWithGauge = {
  typeUrl: "/osmosis.incentives.GroupsWithGauge",
  aminoType: "osmosis/incentives/groups-with-gauge",
  is(o: any): o is GroupsWithGauge {
    return o && (o.$typeUrl === GroupsWithGauge.typeUrl || Group.is(o.group) && Gauge.is(o.gauge));
  },
  isSDK(o: any): o is GroupsWithGaugeSDKType {
    return o && (o.$typeUrl === GroupsWithGauge.typeUrl || Group.isSDK(o.group) && Gauge.isSDK(o.gauge));
  },
  isAmino(o: any): o is GroupsWithGaugeAmino {
    return o && (o.$typeUrl === GroupsWithGauge.typeUrl || Group.isAmino(o.group) && Gauge.isAmino(o.gauge));
  },
  encode(message: GroupsWithGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupsWithGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsWithGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupsWithGauge {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  toJSON(message: GroupsWithGauge): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GroupsWithGauge>): GroupsWithGauge {
    const message = createBaseGroupsWithGauge();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
  fromAmino(object: GroupsWithGaugeAmino): GroupsWithGauge {
    const message = createBaseGroupsWithGauge();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = Gauge.fromAmino(object.gauge);
    }
    return message;
  },
  toAmino(message: GroupsWithGauge): GroupsWithGaugeAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupsWithGaugeAminoMsg): GroupsWithGauge {
    return GroupsWithGauge.fromAmino(object.value);
  },
  toAminoMsg(message: GroupsWithGauge): GroupsWithGaugeAminoMsg {
    return {
      type: "osmosis/incentives/groups-with-gauge",
      value: GroupsWithGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupsWithGaugeProtoMsg): GroupsWithGauge {
    return GroupsWithGauge.decode(message.value);
  },
  toProto(message: GroupsWithGauge): Uint8Array {
    return GroupsWithGauge.encode(message).finish();
  },
  toProtoMsg(message: GroupsWithGauge): GroupsWithGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GroupsWithGauge",
      value: GroupsWithGauge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupsWithGauge.typeUrl, GroupsWithGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(GroupsWithGauge.aminoType, GroupsWithGauge.typeUrl);