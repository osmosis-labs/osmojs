import { Params, DistrInfo } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  lockable_durations: Duration[];
  distr_info?: DistrInfo;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lockable_durations: [],
    distr_info: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.lockable_durations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.distr_info !== undefined) {
      DistrInfo.encode(message.distr_info, writer.uint32(26).fork()).ldelim();
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
          message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.distr_info = DistrInfo.decode(reader, reader.uint32());
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
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromJSON(e)) : [],
      distr_info: isSet(object.distr_info) ? DistrInfo.fromJSON(object.distr_info) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toJSON(message.distr_info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
    message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? DistrInfo.fromPartial(object.distr_info) : undefined;
    return message;
  }

};