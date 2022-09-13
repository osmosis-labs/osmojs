import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export enum LockQueryType {
  /** ByDuration - Queries for locks that are longer than a certain duration */
  ByDuration = 0,

  /** ByTime - Queries for lockups that started before a specific time */
  ByTime = 1,
  UNRECOGNIZED = -1,
}
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;

    case 1:
    case "ByTime":
      return LockQueryType.ByTime;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";

    case LockQueryType.ByTime:
      return "ByTime";

    default:
      return "UNKNOWN";
  }
}

/**
 * PeriodLock is a single unit of lock by period. It's a record of locked coin
 * at a specific time. It stores owner, duration, unlock time and the amount of
 * coins locked.
 */
export interface PeriodLock {
  ID: Long;
  owner: string;
  duration: Duration;
  end_time: Date;
  coins: Coin[];
}
export interface QueryCondition {
  /** type of lock query, ByLockDuration | ByLockTime */
  lock_query_type: LockQueryType;

  /** What token denomination are we looking for lockups of */
  denom: string;

  /** valid when query condition is ByDuration */
  duration: Duration;

  /** valid when query condition is ByTime */
  timestamp: Date;
}

/**
 * SyntheticLock is a single unit of synthetic lockup
 * TODO: Change this to have
 * * underlying_lock_id
 * * synthetic_coin
 * * end_time
 * * duration
 * * owner
 * We then index synthetic locks by the denom, just like we do with normal
 * locks. Ideally we even get an interface, so we can re-use that same logic.
 * I currently have no idea how reward distribution is supposed to be working...
 * EVENTUALLY
 * we make a "constrained_coin" field, which is what the current "coins" field
 * is. Constrained coin field can be a #post-v7 feature, since we aren't
 * allowing partial unlocks of synthetic lockups.
 */
export interface SyntheticLock {
  /** underlying native lockup id for this synthetic lockup */
  underlying_lock_id: Long;
  synth_denom: string;

  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  end_time: Date;
  duration: Duration;
}

function createBasePeriodLock(): PeriodLock {
  return {
    ID: Long.UZERO,
    owner: "",
    duration: undefined,
    end_time: undefined,
    coins: []
  };
}

export const PeriodLock = {
  encode(message: PeriodLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (message.end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.end_time), writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PeriodLock {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: PeriodLock): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration);
    message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PeriodLock>): PeriodLock {
    const message = createBasePeriodLock();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.duration = object.duration ?? undefined;
    message.end_time = object.end_time ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCondition(): QueryCondition {
  return {
    lock_query_type: 0,
    denom: "",
    duration: undefined,
    timestamp: undefined
  };
}

export const QueryCondition = {
  encode(message: QueryCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock_query_type !== 0) {
      writer.uint32(8).int32(message.lock_query_type);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lock_query_type = (reader.int32() as any);
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCondition {
    return {
      lock_query_type: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: QueryCondition): unknown {
    const obj: any = {};
    message.lock_query_type !== undefined && (obj.lock_query_type = lockQueryTypeToJSON(message.lock_query_type));
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCondition>): QueryCondition {
    const message = createBaseQueryCondition();
    message.lock_query_type = object.lock_query_type ?? 0;
    message.denom = object.denom ?? "";
    message.duration = object.duration ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};

function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlying_lock_id: Long.UZERO,
    synth_denom: "",
    end_time: undefined,
    duration: undefined
  };
}

export const SyntheticLock = {
  encode(message: SyntheticLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.underlying_lock_id.isZero()) {
      writer.uint32(8).uint64(message.underlying_lock_id);
    }

    if (message.synth_denom !== "") {
      writer.uint32(18).string(message.synth_denom);
    }

    if (message.end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.end_time), writer.uint32(26).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.underlying_lock_id = (reader.uint64() as Long);
          break;

        case 2:
          message.synth_denom = reader.string();
          break;

        case 3:
          message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLock {
    return {
      underlying_lock_id: isSet(object.underlying_lock_id) ? Long.fromString(object.underlying_lock_id) : Long.UZERO,
      synth_denom: isSet(object.synth_denom) ? String(object.synth_denom) : "",
      end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: SyntheticLock): unknown {
    const obj: any = {};
    message.underlying_lock_id !== undefined && (obj.underlying_lock_id = (message.underlying_lock_id || Long.UZERO).toString());
    message.synth_denom !== undefined && (obj.synth_denom = message.synth_denom);
    message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(object: DeepPartial<SyntheticLock>): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlying_lock_id = object.underlying_lock_id !== undefined && object.underlying_lock_id !== null ? Long.fromValue(object.underlying_lock_id) : Long.UZERO;
    message.synth_denom = object.synth_denom ?? "";
    message.end_time = object.end_time ?? undefined;
    message.duration = object.duration ?? undefined;
    return message;
  }

};