import { TickInfo, TickInfoSDKType } from "./tickInfo";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Params, ParamsSDKType } from "./params";
import { Position, PositionSDKType } from "./position";
import { AccumulatorContent, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */

export interface FullTick {
  /** pool id associated with the tick. */
  poolId: Long;
  /** tick's index. */

  tickIndex: Long;
  /** tick's info. */

  info?: TickInfo;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */

export interface FullTickSDKType {
  /** pool id associated with the tick. */
  pool_id: Long;
  /** tick's index. */

  tick_index: Long;
  /** tick's info. */

  info?: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */

export interface PoolData {
  /** pool struct */
  pool?: Any;
  /** pool's ticks */

  ticks: FullTick[];
  feeAccumulator?: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */

  incentiveRecords: IncentiveRecord[];
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */

export interface PoolDataSDKType {
  /** pool struct */
  pool?: AnySDKType;
  /** pool's ticks */

  ticks: FullTickSDKType[];
  fee_accumulator?: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  /** incentive records to be set */

  incentive_records: IncentiveRecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */

export interface GenesisState {
  /** params are all the parameters of the module */
  params?: Params;
  /** pool data containining serialized pool struct and ticks. */

  poolData: PoolData[];
  positions: Position[];
  nextPositionId: Long;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */

export interface GenesisStateSDKType {
  /** params are all the parameters of the module */
  params?: ParamsSDKType;
  /** pool data containining serialized pool struct and ticks. */

  pool_data: PoolDataSDKType[];
  positions: PositionSDKType[];
  next_position_id: Long;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent?: AccumulatorContent;
}
export interface AccumObjectSDKType {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accum_content?: AccumulatorContentSDKType;
}

function createBaseFullTick(): FullTick {
  return {
    poolId: Long.UZERO,
    tickIndex: Long.ZERO,
    info: undefined
  };
}

export const FullTick = {
  encode(message: FullTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }

    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
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
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tickIndex = (reader.int64() as Long);
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

  fromPartial(object: Partial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  }

};

function createBasePoolData(): PoolData {
  return {
    pool: undefined,
    ticks: [],
    feeAccumulator: undefined,
    incentivesAccumulators: [],
    incentiveRecords: []
  };
}

export const PoolData = {
  encode(message: PoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.ticks) {
      FullTick.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.feeAccumulator !== undefined) {
      AccumObject.encode(message.feeAccumulator, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.incentivesAccumulators) {
      AccumObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.ticks.push(FullTick.decode(reader, reader.uint32()));
          break;

        case 3:
          message.feeAccumulator = AccumObject.decode(reader, reader.uint32());
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

  fromPartial(object: Partial<PoolData>): PoolData {
    const message = createBasePoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
    message.feeAccumulator = object.feeAccumulator !== undefined && object.feeAccumulator !== null ? AccumObject.fromPartial(object.feeAccumulator) : undefined;
    message.incentivesAccumulators = object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolData: [],
    positions: [],
    nextPositionId: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.nextPositionId.isZero()) {
      writer.uint32(32).uint64(message.nextPositionId);
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
          message.poolData.push(PoolData.decode(reader, reader.uint32()));
          break;

        case 3:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;

        case 4:
          message.nextPositionId = (reader.uint64() as Long);
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
    message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? Long.fromValue(object.nextPositionId) : Long.UZERO;
    return message;
  }

};

function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined
  };
}

export const AccumObject = {
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
  }

};