import { TickInfo, TickInfoAmino, TickInfoSDKType } from "./tickInfo";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Position, PositionAmino, PositionSDKType } from "./position";
import { Record, RecordAmino, RecordSDKType, AccumulatorContent, AccumulatorContentAmino, AccumulatorContentSDKType } from "../../accum/v1beta1/accum";
import { Params, ParamsAmino, ParamsSDKType } from "../params";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
  /** pool id associated with the tick. */
  poolId: bigint;
  /** tick's index. */
  tickIndex: bigint;
  /** tick's info. */
  info: TickInfo;
}
export interface FullTickProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick";
  value: Uint8Array;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickAmino {
  /** pool id associated with the tick. */
  pool_id?: string;
  /** tick's index. */
  tick_index?: string;
  /** tick's info. */
  info?: TickInfoAmino;
}
export interface FullTickAminoMsg {
  type: "osmosis/concentratedliquidity/full-tick";
  value: FullTickAmino;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
  pool_id: bigint;
  tick_index: bigint;
  info: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
  /** pool struct */
  pool?: Pool1 | CosmWasmPool | Pool2 | Pool3 | Any | undefined;
  /** pool's ticks */
  ticks: FullTick[];
  spreadRewardAccumulator: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */
  incentiveRecords: IncentiveRecord[];
}
export interface PoolDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData";
  value: Uint8Array;
}
export type PoolDataEncoded = Omit<PoolData, "pool"> & {
  /** pool struct */pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataAmino {
  /** pool struct */
  pool?: AnyAmino;
  /** pool's ticks */
  ticks?: FullTickAmino[];
  spread_reward_accumulator?: AccumObjectAmino;
  incentives_accumulators?: AccumObjectAmino[];
  /** incentive records to be set */
  incentive_records?: IncentiveRecordAmino[];
}
export interface PoolDataAminoMsg {
  type: "osmosis/concentratedliquidity/pool-data";
  value: PoolDataAmino;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
  pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
  ticks: FullTickSDKType[];
  spread_reward_accumulator: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  incentive_records: IncentiveRecordSDKType[];
}
export interface PositionData {
  position?: Position;
  lockId: bigint;
  spreadRewardAccumRecord: Record;
  uptimeAccumRecords: Record[];
}
export interface PositionDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData";
  value: Uint8Array;
}
export interface PositionDataAmino {
  position?: PositionAmino;
  lock_id?: string;
  spread_reward_accum_record?: RecordAmino;
  uptime_accum_records?: RecordAmino[];
}
export interface PositionDataAminoMsg {
  type: "osmosis/concentratedliquidity/position-data";
  value: PositionDataAmino;
}
export interface PositionDataSDKType {
  position?: PositionSDKType;
  lock_id: bigint;
  spread_reward_accum_record: RecordSDKType;
  uptime_accum_records: RecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** pool data containing serialized pool struct and ticks. */
  poolData: PoolData[];
  positionData: PositionData[];
  nextPositionId: bigint;
  nextIncentiveRecordId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** pool data containing serialized pool struct and ticks. */
  pool_data?: PoolDataAmino[];
  position_data?: PositionDataAmino[];
  next_position_id?: string;
  next_incentive_record_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/concentratedliquidity/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_data: PoolDataSDKType[];
  position_data: PositionDataSDKType[];
  next_position_id: bigint;
  next_incentive_record_id: bigint;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent?: AccumulatorContent;
}
export interface AccumObjectProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject";
  value: Uint8Array;
}
export interface AccumObjectAmino {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name?: string;
  accum_content?: AccumulatorContentAmino;
}
export interface AccumObjectAminoMsg {
  type: "osmosis/concentratedliquidity/accum-object";
  value: AccumObjectAmino;
}
export interface AccumObjectSDKType {
  name: string;
  accum_content?: AccumulatorContentSDKType;
}
function createBaseFullTick(): FullTick {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0),
    info: TickInfo.fromPartial({})
  };
}
export const FullTick = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
  aminoType: "osmosis/concentratedliquidity/full-tick",
  is(o: any): o is FullTick {
    return o && (o.$typeUrl === FullTick.typeUrl || typeof o.poolId === "bigint" && typeof o.tickIndex === "bigint" && TickInfo.is(o.info));
  },
  isSDK(o: any): o is FullTickSDKType {
    return o && (o.$typeUrl === FullTick.typeUrl || typeof o.pool_id === "bigint" && typeof o.tick_index === "bigint" && TickInfo.isSDK(o.info));
  },
  isAmino(o: any): o is FullTickAmino {
    return o && (o.$typeUrl === FullTick.typeUrl || typeof o.pool_id === "bigint" && typeof o.tick_index === "bigint" && TickInfo.isAmino(o.info));
  },
  encode(message: FullTick, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullTick {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.info = TickInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullTick {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      info: isSet(object.info) ? TickInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: FullTick): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.info !== undefined && (obj.info = message.info ? TickInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: FullTickAmino): FullTick {
    const message = createBaseFullTick();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = TickInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: FullTick): FullTickAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.info = message.info ? TickInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullTickAminoMsg): FullTick {
    return FullTick.fromAmino(object.value);
  },
  toAminoMsg(message: FullTick): FullTickAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/full-tick",
      value: FullTick.toAmino(message)
    };
  },
  fromProtoMsg(message: FullTickProtoMsg): FullTick {
    return FullTick.decode(message.value);
  },
  toProto(message: FullTick): Uint8Array {
    return FullTick.encode(message).finish();
  },
  toProtoMsg(message: FullTick): FullTickProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
      value: FullTick.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FullTick.typeUrl, FullTick);
GlobalDecoderRegistry.registerAminoProtoMapping(FullTick.aminoType, FullTick.typeUrl);
function createBasePoolData(): PoolData {
  return {
    pool: undefined,
    ticks: [],
    spreadRewardAccumulator: AccumObject.fromPartial({}),
    incentivesAccumulators: [],
    incentiveRecords: []
  };
}
export const PoolData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
  aminoType: "osmosis/concentratedliquidity/pool-data",
  is(o: any): o is PoolData {
    return o && (o.$typeUrl === PoolData.typeUrl || Array.isArray(o.ticks) && (!o.ticks.length || FullTick.is(o.ticks[0])) && AccumObject.is(o.spreadRewardAccumulator) && Array.isArray(o.incentivesAccumulators) && (!o.incentivesAccumulators.length || AccumObject.is(o.incentivesAccumulators[0])) && Array.isArray(o.incentiveRecords) && (!o.incentiveRecords.length || IncentiveRecord.is(o.incentiveRecords[0])));
  },
  isSDK(o: any): o is PoolDataSDKType {
    return o && (o.$typeUrl === PoolData.typeUrl || Array.isArray(o.ticks) && (!o.ticks.length || FullTick.isSDK(o.ticks[0])) && AccumObject.isSDK(o.spread_reward_accumulator) && Array.isArray(o.incentives_accumulators) && (!o.incentives_accumulators.length || AccumObject.isSDK(o.incentives_accumulators[0])) && Array.isArray(o.incentive_records) && (!o.incentive_records.length || IncentiveRecord.isSDK(o.incentive_records[0])));
  },
  isAmino(o: any): o is PoolDataAmino {
    return o && (o.$typeUrl === PoolData.typeUrl || Array.isArray(o.ticks) && (!o.ticks.length || FullTick.isAmino(o.ticks[0])) && AccumObject.isAmino(o.spread_reward_accumulator) && Array.isArray(o.incentives_accumulators) && (!o.incentives_accumulators.length || AccumObject.isAmino(o.incentives_accumulators[0])) && Array.isArray(o.incentive_records) && (!o.incentive_records.length || IncentiveRecord.isAmino(o.incentive_records[0])));
  },
  encode(message: PoolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ticks) {
      FullTick.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.spreadRewardAccumulator !== undefined) {
      AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.incentivesAccumulators) {
      AccumObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.ticks.push(FullTick.decode(reader, reader.uint32()));
          break;
        case 3:
          message.spreadRewardAccumulator = AccumObject.decode(reader, reader.uint32());
          break;
        case 4:
          message.incentivesAccumulators.push(AccumObject.decode(reader, reader.uint32()));
          break;
        case 5:
          message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolData {
    return {
      pool: isSet(object.pool) ? GlobalDecoderRegistry.fromJSON(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromJSON(e)) : [],
      spreadRewardAccumulator: isSet(object.spreadRewardAccumulator) ? AccumObject.fromJSON(object.spreadRewardAccumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentivesAccumulators) ? object.incentivesAccumulators.map((e: any) => AccumObject.fromJSON(e)) : [],
      incentiveRecords: Array.isArray(object?.incentiveRecords) ? object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? GlobalDecoderRegistry.toJSON(message.pool) : undefined);
    if (message.ticks) {
      obj.ticks = message.ticks.map(e => e ? FullTick.toJSON(e) : undefined);
    } else {
      obj.ticks = [];
    }
    message.spreadRewardAccumulator !== undefined && (obj.spreadRewardAccumulator = message.spreadRewardAccumulator ? AccumObject.toJSON(message.spreadRewardAccumulator) : undefined);
    if (message.incentivesAccumulators) {
      obj.incentivesAccumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toJSON(e) : undefined);
    } else {
      obj.incentivesAccumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentiveRecords = message.incentiveRecords.map(e => e ? IncentiveRecord.toJSON(e) : undefined);
    } else {
      obj.incentiveRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PoolData>): PoolData {
    const message = createBasePoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? GlobalDecoderRegistry.fromPartial(object.pool) : undefined;
    message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
    message.spreadRewardAccumulator = object.spreadRewardAccumulator !== undefined && object.spreadRewardAccumulator !== null ? AccumObject.fromPartial(object.spreadRewardAccumulator) : undefined;
    message.incentivesAccumulators = object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolDataAmino): PoolData {
    const message = createBasePoolData();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
    }
    message.ticks = object.ticks?.map(e => FullTick.fromAmino(e)) || [];
    if (object.spread_reward_accumulator !== undefined && object.spread_reward_accumulator !== null) {
      message.spreadRewardAccumulator = AccumObject.fromAmino(object.spread_reward_accumulator);
    }
    message.incentivesAccumulators = object.incentives_accumulators?.map(e => AccumObject.fromAmino(e)) || [];
    message.incentiveRecords = object.incentive_records?.map(e => IncentiveRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolData): PoolDataAmino {
    const obj: any = {};
    obj.pool = message.pool ? GlobalDecoderRegistry.toAminoMsg(message.pool) : undefined;
    if (message.ticks) {
      obj.ticks = message.ticks.map(e => e ? FullTick.toAmino(e) : undefined);
    } else {
      obj.ticks = [];
    }
    obj.spread_reward_accumulator = message.spreadRewardAccumulator ? AccumObject.toAmino(message.spreadRewardAccumulator) : undefined;
    if (message.incentivesAccumulators) {
      obj.incentives_accumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toAmino(e) : undefined);
    } else {
      obj.incentives_accumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toAmino(e) : undefined);
    } else {
      obj.incentive_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: PoolDataAminoMsg): PoolData {
    return PoolData.fromAmino(object.value);
  },
  toAminoMsg(message: PoolData): PoolDataAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-data",
      value: PoolData.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolDataProtoMsg): PoolData {
    return PoolData.decode(message.value);
  },
  toProto(message: PoolData): Uint8Array {
    return PoolData.encode(message).finish();
  },
  toProtoMsg(message: PoolData): PoolDataProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
      value: PoolData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolData.typeUrl, PoolData);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolData.aminoType, PoolData.typeUrl);
function createBasePositionData(): PositionData {
  return {
    position: undefined,
    lockId: BigInt(0),
    spreadRewardAccumRecord: Record.fromPartial({}),
    uptimeAccumRecords: []
  };
}
export const PositionData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
  aminoType: "osmosis/concentratedliquidity/position-data",
  is(o: any): o is PositionData {
    return o && (o.$typeUrl === PositionData.typeUrl || typeof o.lockId === "bigint" && Record.is(o.spreadRewardAccumRecord) && Array.isArray(o.uptimeAccumRecords) && (!o.uptimeAccumRecords.length || Record.is(o.uptimeAccumRecords[0])));
  },
  isSDK(o: any): o is PositionDataSDKType {
    return o && (o.$typeUrl === PositionData.typeUrl || typeof o.lock_id === "bigint" && Record.isSDK(o.spread_reward_accum_record) && Array.isArray(o.uptime_accum_records) && (!o.uptime_accum_records.length || Record.isSDK(o.uptime_accum_records[0])));
  },
  isAmino(o: any): o is PositionDataAmino {
    return o && (o.$typeUrl === PositionData.typeUrl || typeof o.lock_id === "bigint" && Record.isAmino(o.spread_reward_accum_record) && Array.isArray(o.uptime_accum_records) && (!o.uptime_accum_records.length || Record.isAmino(o.uptime_accum_records[0])));
  },
  encode(message: PositionData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.spreadRewardAccumRecord !== undefined) {
      Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.uptimeAccumRecords) {
      Record.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.spreadRewardAccumRecord = Record.decode(reader, reader.uint32());
          break;
        case 4:
          message.uptimeAccumRecords.push(Record.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionData {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      lockId: isSet(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0),
      spreadRewardAccumRecord: isSet(object.spreadRewardAccumRecord) ? Record.fromJSON(object.spreadRewardAccumRecord) : undefined,
      uptimeAccumRecords: Array.isArray(object?.uptimeAccumRecords) ? object.uptimeAccumRecords.map((e: any) => Record.fromJSON(e)) : []
    };
  },
  toJSON(message: PositionData): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.spreadRewardAccumRecord !== undefined && (obj.spreadRewardAccumRecord = message.spreadRewardAccumRecord ? Record.toJSON(message.spreadRewardAccumRecord) : undefined);
    if (message.uptimeAccumRecords) {
      obj.uptimeAccumRecords = message.uptimeAccumRecords.map(e => e ? Record.toJSON(e) : undefined);
    } else {
      obj.uptimeAccumRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PositionData>): PositionData {
    const message = createBasePositionData();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
    message.spreadRewardAccumRecord = object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null ? Record.fromPartial(object.spreadRewardAccumRecord) : undefined;
    message.uptimeAccumRecords = object.uptimeAccumRecords?.map(e => Record.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PositionDataAmino): PositionData {
    const message = createBasePositionData();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    if (object.spread_reward_accum_record !== undefined && object.spread_reward_accum_record !== null) {
      message.spreadRewardAccumRecord = Record.fromAmino(object.spread_reward_accum_record);
    }
    message.uptimeAccumRecords = object.uptime_accum_records?.map(e => Record.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PositionData): PositionDataAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    obj.spread_reward_accum_record = message.spreadRewardAccumRecord ? Record.toAmino(message.spreadRewardAccumRecord) : undefined;
    if (message.uptimeAccumRecords) {
      obj.uptime_accum_records = message.uptimeAccumRecords.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.uptime_accum_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: PositionDataAminoMsg): PositionData {
    return PositionData.fromAmino(object.value);
  },
  toAminoMsg(message: PositionData): PositionDataAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-data",
      value: PositionData.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionDataProtoMsg): PositionData {
    return PositionData.decode(message.value);
  },
  toProto(message: PositionData): Uint8Array {
    return PositionData.encode(message).finish();
  },
  toProtoMsg(message: PositionData): PositionDataProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
      value: PositionData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PositionData.typeUrl, PositionData);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionData.aminoType, PositionData.typeUrl);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolData: [],
    positionData: [],
    nextPositionId: BigInt(0),
    nextIncentiveRecordId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
  aminoType: "osmosis/concentratedliquidity/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.poolData) && (!o.poolData.length || PoolData.is(o.poolData[0])) && Array.isArray(o.positionData) && (!o.positionData.length || PositionData.is(o.positionData[0])) && typeof o.nextPositionId === "bigint" && typeof o.nextIncentiveRecordId === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.pool_data) && (!o.pool_data.length || PoolData.isSDK(o.pool_data[0])) && Array.isArray(o.position_data) && (!o.position_data.length || PositionData.isSDK(o.position_data[0])) && typeof o.next_position_id === "bigint" && typeof o.next_incentive_record_id === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.pool_data) && (!o.pool_data.length || PoolData.isAmino(o.pool_data[0])) && Array.isArray(o.position_data) && (!o.position_data.length || PositionData.isAmino(o.position_data[0])) && typeof o.next_position_id === "bigint" && typeof o.next_incentive_record_id === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionData) {
      PositionData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextPositionId !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextPositionId);
    }
    if (message.nextIncentiveRecordId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextIncentiveRecordId);
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
          message.poolData.push(PoolData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.positionData.push(PositionData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextPositionId = reader.uint64();
          break;
        case 5:
          message.nextIncentiveRecordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolData: Array.isArray(object?.poolData) ? object.poolData.map((e: any) => PoolData.fromJSON(e)) : [],
      positionData: Array.isArray(object?.positionData) ? object.positionData.map((e: any) => PositionData.fromJSON(e)) : [],
      nextPositionId: isSet(object.nextPositionId) ? BigInt(object.nextPositionId.toString()) : BigInt(0),
      nextIncentiveRecordId: isSet(object.nextIncentiveRecordId) ? BigInt(object.nextIncentiveRecordId.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolData) {
      obj.poolData = message.poolData.map(e => e ? PoolData.toJSON(e) : undefined);
    } else {
      obj.poolData = [];
    }
    if (message.positionData) {
      obj.positionData = message.positionData.map(e => e ? PositionData.toJSON(e) : undefined);
    } else {
      obj.positionData = [];
    }
    message.nextPositionId !== undefined && (obj.nextPositionId = (message.nextPositionId || BigInt(0)).toString());
    message.nextIncentiveRecordId !== undefined && (obj.nextIncentiveRecordId = (message.nextIncentiveRecordId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
    message.positionData = object.positionData?.map(e => PositionData.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? BigInt(object.nextPositionId.toString()) : BigInt(0);
    message.nextIncentiveRecordId = object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null ? BigInt(object.nextIncentiveRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolData = object.pool_data?.map(e => PoolData.fromAmino(e)) || [];
    message.positionData = object.position_data?.map(e => PositionData.fromAmino(e)) || [];
    if (object.next_position_id !== undefined && object.next_position_id !== null) {
      message.nextPositionId = BigInt(object.next_position_id);
    }
    if (object.next_incentive_record_id !== undefined && object.next_incentive_record_id !== null) {
      message.nextIncentiveRecordId = BigInt(object.next_incentive_record_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolData) {
      obj.pool_data = message.poolData.map(e => e ? PoolData.toAmino(e) : undefined);
    } else {
      obj.pool_data = [];
    }
    if (message.positionData) {
      obj.position_data = message.positionData.map(e => e ? PositionData.toAmino(e) : undefined);
    } else {
      obj.position_data = [];
    }
    obj.next_position_id = message.nextPositionId ? message.nextPositionId.toString() : undefined;
    obj.next_incentive_record_id = message.nextIncentiveRecordId ? message.nextIncentiveRecordId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/genesis-state",
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
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined
  };
}
export const AccumObject = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
  aminoType: "osmosis/concentratedliquidity/accum-object",
  is(o: any): o is AccumObject {
    return o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is AccumObjectSDKType {
    return o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is AccumObjectAmino {
    return o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === "string");
  },
  encode(message: AccumObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.accumContent !== undefined) {
      AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumObject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.accumContent = AccumulatorContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumObject {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      accumContent: isSet(object.accumContent) ? AccumulatorContent.fromJSON(object.accumContent) : undefined
    };
  },
  toJSON(message: AccumObject): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.accumContent !== undefined && (obj.accumContent = message.accumContent ? AccumulatorContent.toJSON(message.accumContent) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AccumObject>): AccumObject {
    const message = createBaseAccumObject();
    message.name = object.name ?? "";
    message.accumContent = object.accumContent !== undefined && object.accumContent !== null ? AccumulatorContent.fromPartial(object.accumContent) : undefined;
    return message;
  },
  fromAmino(object: AccumObjectAmino): AccumObject {
    const message = createBaseAccumObject();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.accum_content !== undefined && object.accum_content !== null) {
      message.accumContent = AccumulatorContent.fromAmino(object.accum_content);
    }
    return message;
  },
  toAmino(message: AccumObject): AccumObjectAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.accum_content = message.accumContent ? AccumulatorContent.toAmino(message.accumContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccumObjectAminoMsg): AccumObject {
    return AccumObject.fromAmino(object.value);
  },
  toAminoMsg(message: AccumObject): AccumObjectAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/accum-object",
      value: AccumObject.toAmino(message)
    };
  },
  fromProtoMsg(message: AccumObjectProtoMsg): AccumObject {
    return AccumObject.decode(message.value);
  },
  toProto(message: AccumObject): Uint8Array {
    return AccumObject.encode(message).finish();
  },
  toProtoMsg(message: AccumObject): AccumObjectProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
      value: AccumObject.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccumObject.typeUrl, AccumObject);
GlobalDecoderRegistry.registerAminoProtoMapping(AccumObject.aminoType, AccumObject.typeUrl);