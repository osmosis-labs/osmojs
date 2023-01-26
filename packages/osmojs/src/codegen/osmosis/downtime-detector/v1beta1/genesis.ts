import { Downtime, DowntimeSDKType } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime?: Date;
}
export interface GenesisDowntimeEntrySDKType {
  duration: DowntimeSDKType;
  last_downtime?: Date;
}
/** GenesisState defines the twap module's genesis state. */

export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime?: Date;
}
/** GenesisState defines the twap module's genesis state. */

export interface GenesisStateSDKType {
  downtimes: GenesisDowntimeEntrySDKType[];
  last_block_time?: Date;
}

function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    lastDowntime: undefined
  };
}

export const GenesisDowntimeEntry = {
  encode(message: GenesisDowntimeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }

    if (message.lastDowntime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDowntime), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDowntimeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.duration = (reader.int32() as any);
          break;

        case 2:
          message.lastDowntime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    message.lastDowntime = object.lastDowntime ?? undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    lastBlockTime: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
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
          message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  }

};