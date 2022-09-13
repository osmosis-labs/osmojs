import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface EpochInfo {
  identifier: string;
  start_time: Date;
  duration: Duration;
  current_epoch: Long;
  current_epoch_start_time: Date;
  epoch_counting_started: boolean;
  current_epoch_start_height: Long;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
}

function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    start_time: undefined,
    duration: undefined,
    current_epoch: Long.ZERO,
    current_epoch_start_time: undefined,
    epoch_counting_started: false,
    current_epoch_start_height: Long.ZERO
  };
}

export const EpochInfo = {
  encode(message: EpochInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(18).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (!message.current_epoch.isZero()) {
      writer.uint32(32).int64(message.current_epoch);
    }

    if (message.current_epoch_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.current_epoch_start_time), writer.uint32(42).fork()).ldelim();
    }

    if (message.epoch_counting_started === true) {
      writer.uint32(48).bool(message.epoch_counting_started);
    }

    if (!message.current_epoch_start_height.isZero()) {
      writer.uint32(64).int64(message.current_epoch_start_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.current_epoch = (reader.int64() as Long);
          break;

        case 5:
          message.current_epoch_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.epoch_counting_started = reader.bool();
          break;

        case 8:
          message.current_epoch_start_height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      current_epoch: isSet(object.current_epoch) ? Long.fromString(object.current_epoch) : Long.ZERO,
      current_epoch_start_time: isSet(object.current_epoch_start_time) ? fromJsonTimestamp(object.current_epoch_start_time) : undefined,
      epoch_counting_started: isSet(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
      current_epoch_start_height: isSet(object.current_epoch_start_height) ? Long.fromString(object.current_epoch_start_height) : Long.ZERO
    };
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || Long.ZERO).toString());
    message.current_epoch_start_time !== undefined && (obj.current_epoch_start_time = message.current_epoch_start_time.toISOString());
    message.epoch_counting_started !== undefined && (obj.epoch_counting_started = message.epoch_counting_started);
    message.current_epoch_start_height !== undefined && (obj.current_epoch_start_height = (message.current_epoch_start_height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.start_time = object.start_time ?? undefined;
    message.duration = object.duration ?? undefined;
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? Long.fromValue(object.current_epoch) : Long.ZERO;
    message.current_epoch_start_time = object.current_epoch_start_time ?? undefined;
    message.epoch_counting_started = object.epoch_counting_started ?? false;
    message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? Long.fromValue(object.current_epoch_start_height) : Long.ZERO;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  }

};