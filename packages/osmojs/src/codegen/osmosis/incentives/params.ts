import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** Params holds parameters for the incentives module */
export interface Params {
  /** distribution epoch identifier */
  distr_epoch_identifier: string;
}

function createBaseParams(): Params {
  return {
    distr_epoch_identifier: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distr_epoch_identifier !== "") {
      writer.uint32(10).string(message.distr_epoch_identifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distr_epoch_identifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      distr_epoch_identifier: isSet(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distr_epoch_identifier !== undefined && (obj.distr_epoch_identifier = message.distr_epoch_identifier);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distr_epoch_identifier = object.distr_epoch_identifier ?? "";
    return message;
  }

};