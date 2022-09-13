import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: Long;
  time: Date;
  power: Long;
  consensus_address: string;
}

function createBaseEquivocation(): Equivocation {
  return {
    height: Long.ZERO,
    time: undefined,
    power: Long.ZERO,
    consensus_address: ""
  };
}

export const Equivocation = {
  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }

    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }

    if (message.consensus_address !== "") {
      writer.uint32(34).string(message.consensus_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.power = (reader.int64() as Long);
          break;

        case 4:
          message.consensus_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? Long.fromString(object.power) : Long.ZERO,
      consensus_address: isSet(object.consensus_address) ? String(object.consensus_address) : ""
    };
  },

  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    message.consensus_address !== undefined && (obj.consensus_address = message.consensus_address);
    return obj;
  },

  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    message.consensus_address = object.consensus_address ?? "";
    return message;
  }

};