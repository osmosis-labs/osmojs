import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

export interface Params {
  /** Boolean whether the module is going to be enabled */
  enabled: boolean;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  /** Boolean whether the module is going to be enabled */
  enabled: boolean;
}

function createBaseParams(): Params {
  return {
    enabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
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
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    return message;
  }

};