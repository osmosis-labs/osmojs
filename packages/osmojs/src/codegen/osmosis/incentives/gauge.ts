import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface Gauge {
  /** unique ID of a Gauge */
  id: Long;

  /**
   * flag to show if it's perpetual or multi-epoch
   * distribution incentives by third party
   */
  is_perpetual: boolean;

  /**
   * Rewards are distributed to lockups that are are returned by at least one of
   * these queries
   */
  distribute_to: QueryCondition;

  /**
   * total amount of Coins that has been in the gauge.
   * can distribute multiple coins
   */
  coins: Coin[];

  /** distribution start time */
  start_time: Date;

  /** number of epochs distribution will be done */
  num_epochs_paid_over: Long;

  /** number of epochs distributed already */
  filled_epochs: Long;

  /** already distributed coins */
  distributed_coins: Coin[];
}
export interface LockableDurationsInfo {
  lockable_durations: Duration[];
}

function createBaseGauge(): Gauge {
  return {
    id: Long.UZERO,
    is_perpetual: false,
    distribute_to: undefined,
    coins: [],
    start_time: undefined,
    num_epochs_paid_over: Long.UZERO,
    filled_epochs: Long.UZERO,
    distributed_coins: []
  };
}

export const Gauge = {
  encode(message: Gauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.is_perpetual === true) {
      writer.uint32(16).bool(message.is_perpetual);
    }

    if (message.distribute_to !== undefined) {
      QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(42).fork()).ldelim();
    }

    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
    }

    if (!message.filled_epochs.isZero()) {
      writer.uint32(56).uint64(message.filled_epochs);
    }

    for (const v of message.distributed_coins) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.is_perpetual = reader.bool();
          break;

        case 3:
          message.distribute_to = QueryCondition.decode(reader, reader.uint32());
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.num_epochs_paid_over = (reader.uint64() as Long);
          break;

        case 7:
          message.filled_epochs = (reader.uint64() as Long);
          break;

        case 8:
          message.distributed_coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Gauge {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? Long.fromString(object.num_epochs_paid_over) : Long.UZERO,
      filled_epochs: isSet(object.filled_epochs) ? Long.fromString(object.filled_epochs) : Long.UZERO,
      distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Gauge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || Long.UZERO).toString());
    message.filled_epochs !== undefined && (obj.filled_epochs = (message.filled_epochs || Long.UZERO).toString());

    if (message.distributed_coins) {
      obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Gauge>): Gauge {
    const message = createBaseGauge();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.is_perpetual = object.is_perpetual ?? false;
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.start_time = object.start_time ?? undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO;
    message.filled_epochs = object.filled_epochs !== undefined && object.filled_epochs !== null ? Long.fromValue(object.filled_epochs) : Long.UZERO;
    message.distributed_coins = object.distributed_coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockable_durations: []
  };
}

export const LockableDurationsInfo = {
  encode(message: LockableDurationsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockable_durations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockableDurationsInfo {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};

    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }

};