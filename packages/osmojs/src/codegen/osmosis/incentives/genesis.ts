import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module */
  params: Params;
  gauges: Gauge[];
  lockable_durations: Duration[];
  last_gauge_id: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gauges: [],
    lockable_durations: [],
    last_gauge_id: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.lockable_durations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.last_gauge_id.isZero()) {
      writer.uint32(32).uint64(message.last_gauge_id);
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
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;

        case 3:
          message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
          break;

        case 4:
          message.last_gauge_id = (reader.uint64() as Long);
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
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromJSON(e)) : [],
      last_gauge_id: isSet(object.last_gauge_id) ? Long.fromString(object.last_gauge_id) : Long.UZERO
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.gauges = [];
    }

    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    message.last_gauge_id !== undefined && (obj.last_gauge_id = (message.last_gauge_id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
    message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? Long.fromValue(object.last_gauge_id) : Long.UZERO;
    return message;
  }

};