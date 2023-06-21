import { TickInfo, TickInfoAmino, TickInfoSDKType } from "./tickInfo";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Record, RecordAmino, RecordSDKType, AccumulatorContent, AccumulatorContentAmino, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../gamm/pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool2SDKType } from "../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool3 } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool3SDKType } from "../gamm/pool-models/stableswap/stableswap_pool";
import { Long, toTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */

export interface FullTick {
  /** tick's index. */
  tickIndex: Long;
  /** tick's info. */

  info?: TickInfo;
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
  /** tick's index. */
  tick_index: string;
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
  tick_index: Long;
  info?: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */

export interface GenesisPoolData {
  /** pool struct */
  pool?: (Pool1 & CosmWasmPool & Pool2 & Pool3 & Any) | undefined;
  /** pool's ticks */

  ticks: FullTick[];
  spreadRewardAccumulator?: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */

  incentiveRecords: IncentiveRecord[];
  positionData: PositionData[];
}
export interface GenesisPoolDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisPoolData";
  value: Uint8Array;
}
export type GenesisPoolDataEncoded = Omit<GenesisPoolData, "pool"> & {
  /** pool struct */
  pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */

export interface GenesisPoolDataAmino {
  /** pool struct */
  pool?: AnyAmino;
  /** pool's ticks */

  ticks: FullTickAmino[];
  spread_reward_accumulator?: AccumObjectAmino;
  incentives_accumulators: AccumObjectAmino[];
  /** incentive records to be set */

  incentive_records: IncentiveRecordAmino[];
  position_data: PositionDataAmino[];
}
export interface GenesisPoolDataAminoMsg {
  type: "osmosis/concentratedliquidity/genesis-pool-data";
  value: GenesisPoolDataAmino;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */

export interface GenesisPoolDataSDKType {
  pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
  ticks: FullTickSDKType[];
  spread_reward_accumulator?: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  incentive_records: IncentiveRecordSDKType[];
  position_data: PositionDataSDKType[];
}
export interface PositionData {
  position?: PositionWithoutPoolId;
  lockId: Long;
  spreadRewardAccumRecord?: Record;
  uptimeAccumRecords: Record[];
}
export interface PositionDataProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData";
  value: Uint8Array;
}
export interface PositionDataAmino {
  position?: PositionWithoutPoolIdAmino;
  lock_id: string;
  spread_reward_accum_record?: RecordAmino;
  uptime_accum_records: RecordAmino[];
}
export interface PositionDataAminoMsg {
  type: "osmosis/concentratedliquidity/position-data";
  value: PositionDataAmino;
}
export interface PositionDataSDKType {
  position?: PositionWithoutPoolIdSDKType;
  lock_id: Long;
  spread_reward_accum_record?: RecordSDKType;
  uptime_accum_records: RecordSDKType[];
}
export interface PositionWithoutPoolId {
  positionId: Long;
  address: string;
  lowerTick: Long;
  upperTick: Long;
  joinTime?: Date;
  liquidity: string;
}
export interface PositionWithoutPoolIdProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithoutPoolId";
  value: Uint8Array;
}
export interface PositionWithoutPoolIdAmino {
  position_id: string;
  address: string;
  lower_tick: string;
  upper_tick: string;
  join_time?: Date;
  liquidity: string;
}
export interface PositionWithoutPoolIdAminoMsg {
  type: "osmosis/concentratedliquidity/position-without-pool-id";
  value: PositionWithoutPoolIdAmino;
}
export interface PositionWithoutPoolIdSDKType {
  position_id: Long;
  address: string;
  lower_tick: Long;
  upper_tick: Long;
  join_time?: Date;
  liquidity: string;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */

export interface GenesisState {
  /** params are all the parameters of the module */
  params?: Params;
  /** pool data containining serialized pool struct and ticks. */

  poolData: GenesisPoolData[];
  nextPositionId: Long;
  nextIncentiveRecordId: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */

export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** pool data containining serialized pool struct and ticks. */

  pool_data: GenesisPoolDataAmino[];
  next_position_id: string;
  next_incentive_record_id: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/concentratedliquidity/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  pool_data: GenesisPoolDataSDKType[];
  next_position_id: Long;
  next_incentive_record_id: Long;
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
  name: string;
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
    tickIndex: Long.ZERO,
    info: undefined
  };
}

export const FullTick = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",

  encode(message: FullTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tickIndex.isZero()) {
      writer.uint32(8).int64(message.tickIndex);
    }

    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullTick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullTick();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tickIndex = (reader.int64() as Long);
          break;

        case 2:
          message.info = TickInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  },

  fromAmino(object: FullTickAmino): FullTick {
    return {
      tickIndex: Long.fromString(object.tick_index),
      info: object?.info ? TickInfo.fromAmino(object.info) : undefined
    };
  },

  toAmino(message: FullTick): FullTickAmino {
    const obj: any = {};
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

function createBaseGenesisPoolData(): GenesisPoolData {
  return {
    pool: undefined,
    ticks: [],
    spreadRewardAccumulator: undefined,
    incentivesAccumulators: [],
    incentiveRecords: [],
    positionData: []
  };
}

export const GenesisPoolData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisPoolData",

  encode(message: GenesisPoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode((message.pool as Any), writer.uint32(10).fork()).ldelim();
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

    for (const v of message.positionData) {
      PositionData.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPoolData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = (PoolI_InterfaceDecoder(reader) as Any);
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

        case 6:
          message.positionData.push(PositionData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisPoolData>): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
    message.spreadRewardAccumulator = object.spreadRewardAccumulator !== undefined && object.spreadRewardAccumulator !== null ? AccumObject.fromPartial(object.spreadRewardAccumulator) : undefined;
    message.incentivesAccumulators = object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    message.positionData = object.positionData?.map(e => PositionData.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: GenesisPoolDataAmino): GenesisPoolData {
    return {
      pool: object?.pool ? PoolI_FromAmino(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromAmino(e)) : [],
      spreadRewardAccumulator: object?.spread_reward_accumulator ? AccumObject.fromAmino(object.spread_reward_accumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentives_accumulators) ? object.incentives_accumulators.map((e: any) => AccumObject.fromAmino(e)) : [],
      incentiveRecords: Array.isArray(object?.incentive_records) ? object.incentive_records.map((e: any) => IncentiveRecord.fromAmino(e)) : [],
      positionData: Array.isArray(object?.position_data) ? object.position_data.map((e: any) => PositionData.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisPoolData): GenesisPoolDataAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolI_ToAmino((message.pool as Any)) : undefined;

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

    if (message.positionData) {
      obj.position_data = message.positionData.map(e => e ? PositionData.toAmino(e) : undefined);
    } else {
      obj.position_data = [];
    }

    return obj;
  },

  fromAminoMsg(object: GenesisPoolDataAminoMsg): GenesisPoolData {
    return GenesisPoolData.fromAmino(object.value);
  },

  toAminoMsg(message: GenesisPoolData): GenesisPoolDataAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/genesis-pool-data",
      value: GenesisPoolData.toAmino(message)
    };
  },

  fromProtoMsg(message: GenesisPoolDataProtoMsg): GenesisPoolData {
    return GenesisPoolData.decode(message.value);
  },

  toProto(message: GenesisPoolData): Uint8Array {
    return GenesisPoolData.encode(message).finish();
  },

  toProtoMsg(message: GenesisPoolData): GenesisPoolDataProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisPoolData",
      value: GenesisPoolData.encode(message).finish()
    };
  }

};

function createBasePositionData(): PositionData {
  return {
    position: undefined,
    lockId: Long.UZERO,
    spreadRewardAccumRecord: undefined,
    uptimeAccumRecords: []
  };
}

export const PositionData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",

  encode(message: PositionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      PositionWithoutPoolId.encode(message.position, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lockId.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.position = PositionWithoutPoolId.decode(reader, reader.uint32());
          break;

        case 2:
          message.lockId = (reader.uint64() as Long);
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

  fromPartial(object: Partial<PositionData>): PositionData {
    const message = createBasePositionData();
    message.position = object.position !== undefined && object.position !== null ? PositionWithoutPoolId.fromPartial(object.position) : undefined;
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.spreadRewardAccumRecord = object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null ? Record.fromPartial(object.spreadRewardAccumRecord) : undefined;
    message.uptimeAccumRecords = object.uptimeAccumRecords?.map(e => Record.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: PositionDataAmino): PositionData {
    return {
      position: object?.position ? PositionWithoutPoolId.fromAmino(object.position) : undefined,
      lockId: Long.fromString(object.lock_id),
      spreadRewardAccumRecord: object?.spread_reward_accum_record ? Record.fromAmino(object.spread_reward_accum_record) : undefined,
      uptimeAccumRecords: Array.isArray(object?.uptime_accum_records) ? object.uptime_accum_records.map((e: any) => Record.fromAmino(e)) : []
    };
  },

  toAmino(message: PositionData): PositionDataAmino {
    const obj: any = {};
    obj.position = message.position ? PositionWithoutPoolId.toAmino(message.position) : undefined;
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

function createBasePositionWithoutPoolId(): PositionWithoutPoolId {
  return {
    positionId: Long.UZERO,
    address: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    joinTime: undefined,
    liquidity: ""
  };
}

export const PositionWithoutPoolId = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithoutPoolId",

  encode(message: PositionWithoutPoolId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (!message.lowerTick.isZero()) {
      writer.uint32(24).int64(message.lowerTick);
    }

    if (!message.upperTick.isZero()) {
      writer.uint32(32).int64(message.upperTick);
    }

    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.liquidity !== "") {
      writer.uint32(50).string(message.liquidity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionWithoutPoolId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionWithoutPoolId();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.positionId = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.lowerTick = (reader.int64() as Long);
          break;

        case 4:
          message.upperTick = (reader.int64() as Long);
          break;

        case 5:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.liquidity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<PositionWithoutPoolId>): PositionWithoutPoolId {
    const message = createBasePositionWithoutPoolId();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.address = object.address ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.joinTime = object.joinTime ?? undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  },

  fromAmino(object: PositionWithoutPoolIdAmino): PositionWithoutPoolId {
    return {
      positionId: Long.fromString(object.position_id),
      address: object.address,
      lowerTick: Long.fromString(object.lower_tick),
      upperTick: Long.fromString(object.upper_tick),
      joinTime: object?.join_time ? Timestamp.fromAmino(object.join_time) : undefined,
      liquidity: object.liquidity
    };
  },

  toAmino(message: PositionWithoutPoolId): PositionWithoutPoolIdAmino {
    const obj: any = {};
    obj.position_id = message.positionId ? message.positionId.toString() : undefined;
    obj.address = message.address;
    obj.lower_tick = message.lowerTick ? message.lowerTick.toString() : undefined;
    obj.upper_tick = message.upperTick ? message.upperTick.toString() : undefined;
    obj.join_time = message.joinTime ? Timestamp.toAmino(message.joinTime) : undefined;
    obj.liquidity = message.liquidity;
    return obj;
  },

  fromAminoMsg(object: PositionWithoutPoolIdAminoMsg): PositionWithoutPoolId {
    return PositionWithoutPoolId.fromAmino(object.value);
  },

  toAminoMsg(message: PositionWithoutPoolId): PositionWithoutPoolIdAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-without-pool-id",
      value: PositionWithoutPoolId.toAmino(message)
    };
  },

  fromProtoMsg(message: PositionWithoutPoolIdProtoMsg): PositionWithoutPoolId {
    return PositionWithoutPoolId.decode(message.value);
  },

  toProto(message: PositionWithoutPoolId): Uint8Array {
    return PositionWithoutPoolId.encode(message).finish();
  },

  toProtoMsg(message: PositionWithoutPoolId): PositionWithoutPoolIdProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithoutPoolId",
      value: PositionWithoutPoolId.encode(message).finish()
    };
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolData: [],
    nextPositionId: Long.UZERO,
    nextIncentiveRecordId: Long.UZERO
  };
}

export const GenesisState = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.poolData) {
      GenesisPoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.nextPositionId.isZero()) {
      writer.uint32(32).uint64(message.nextPositionId);
    }

    if (!message.nextIncentiveRecordId.isZero()) {
      writer.uint32(40).uint64(message.nextIncentiveRecordId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.poolData.push(GenesisPoolData.decode(reader, reader.uint32()));
          break;

        case 4:
          message.nextPositionId = (reader.uint64() as Long);
          break;

        case 5:
          message.nextIncentiveRecordId = (reader.uint64() as Long);
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
    message.poolData = object.poolData?.map(e => GenesisPoolData.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? Long.fromValue(object.nextPositionId) : Long.UZERO;
    message.nextIncentiveRecordId = object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null ? Long.fromValue(object.nextIncentiveRecordId) : Long.UZERO;
    return message;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolData: Array.isArray(object?.pool_data) ? object.pool_data.map((e: any) => GenesisPoolData.fromAmino(e)) : [],
      nextPositionId: Long.fromString(object.next_position_id),
      nextIncentiveRecordId: Long.fromString(object.next_incentive_record_id)
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;

    if (message.poolData) {
      obj.pool_data = message.poolData.map(e => e ? GenesisPoolData.toAmino(e) : undefined);
    } else {
      obj.pool_data = [];
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

function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined
  };
}

export const AccumObject = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",

  encode(message: AccumObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.accumContent !== undefined) {
      AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: Partial<AccumObject>): AccumObject {
    const message = createBaseAccumObject();
    message.name = object.name ?? "";
    message.accumContent = object.accumContent !== undefined && object.accumContent !== null ? AccumulatorContent.fromPartial(object.accumContent) : undefined;
    return message;
  },

  fromAmino(object: AccumObjectAmino): AccumObject {
    return {
      name: object.name,
      accumContent: object?.accum_content ? AccumulatorContent.fromAmino(object.accum_content) : undefined
    };
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
export const PoolI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Pool1 | CosmWasmPool | Pool2 | Pool3 | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return Pool1.decode(data.value);

    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return CosmWasmPool.decode(data.value);

    case "/osmosis.gamm.v1beta1.Pool":
      return Pool2.decode(data.value);

    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return Pool3.decode(data.value);

    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "osmosis/concentratedliquidity/pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
        value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
      });

    case "osmosis/cosmwasmpool/cosm-wasm-pool":
      return Any.fromPartial({
        typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool",
        value: CosmWasmPool.encode(CosmWasmPool.fromPartial(CosmWasmPool.fromAmino(content.value))).finish()
      });

    case "osmosis/gamm/BalancerPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
      });

    case "osmosis/gamm/StableswapPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: Pool3.encode(Pool3.fromPartial(Pool3.fromAmino(content.value))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.concentratedliquidity.v1beta1.Pool":
      return {
        type: "osmosis/concentratedliquidity/pool",
        value: Pool1.toAmino(Pool1.decode(content.value))
      };

    case "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool":
      return {
        type: "osmosis/cosmwasmpool/cosm-wasm-pool",
        value: CosmWasmPool.toAmino(CosmWasmPool.decode(content.value))
      };

    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/BalancerPool",
        value: Pool2.toAmino(Pool2.decode(content.value))
      };

    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/StableswapPool",
        value: Pool3.toAmino(Pool3.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};