import { PeriodLock, SyntheticLock } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  last_lock_id: Long;
  locks: PeriodLock[];
  synthetic_locks: SyntheticLock[];
}

function createBaseGenesisState(): GenesisState {
  return {
    last_lock_id: Long.UZERO,
    locks: [],
    synthetic_locks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.last_lock_id.isZero()) {
      writer.uint32(8).uint64(message.last_lock_id);
    }

    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.synthetic_locks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.last_lock_id = (reader.uint64() as Long);
          break;

        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        case 3:
          message.synthetic_locks.push(SyntheticLock.decode(reader, reader.uint32()));
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
      last_lock_id: isSet(object.last_lock_id) ? Long.fromString(object.last_lock_id) : Long.UZERO,
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : [],
      synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.last_lock_id !== undefined && (obj.last_lock_id = (message.last_lock_id || Long.UZERO).toString());

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    if (message.synthetic_locks) {
      obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.last_lock_id = object.last_lock_id !== undefined && object.last_lock_id !== null ? Long.fromValue(object.last_lock_id) : Long.UZERO;
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.synthetic_locks = object.synthetic_locks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  }

};