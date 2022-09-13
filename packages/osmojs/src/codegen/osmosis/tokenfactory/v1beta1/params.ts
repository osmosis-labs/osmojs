import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/** Params holds parameters for the tokenfactory module */
export interface Params {
  denom_creation_fee: Coin[];
}

function createBaseParams(): Params {
  return {
    denom_creation_fee: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denom_creation_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.denom_creation_fee.push(Coin.decode(reader, reader.uint32()));
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
      denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.denom_creation_fee) {
      obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.denom_creation_fee = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denom_creation_fee = object.denom_creation_fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};