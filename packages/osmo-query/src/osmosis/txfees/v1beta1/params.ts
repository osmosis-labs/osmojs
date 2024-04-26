//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params holds parameters for the txfees module */
export interface Params {
  whitelistedFeeTokenSetters: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the txfees module */
export interface ParamsAmino {
  whitelisted_fee_token_setters?: string[];
}
export interface ParamsAminoMsg {
  type: "osmosis/txfees/params";
  value: ParamsAmino;
}
/** Params holds parameters for the txfees module */
export interface ParamsSDKType {
  whitelisted_fee_token_setters: string[];
}
function createBaseParams(): Params {
  return {
    whitelistedFeeTokenSetters: []
  };
}
export const Params = {
  typeUrl: "/osmosis.txfees.v1beta1.Params",
  aminoType: "osmosis/txfees/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.whitelistedFeeTokenSetters) && (!o.whitelistedFeeTokenSetters.length || typeof o.whitelistedFeeTokenSetters[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.whitelisted_fee_token_setters) && (!o.whitelisted_fee_token_setters.length || typeof o.whitelisted_fee_token_setters[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.whitelisted_fee_token_setters) && (!o.whitelisted_fee_token_setters.length || typeof o.whitelisted_fee_token_setters[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelistedFeeTokenSetters) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedFeeTokenSetters.push(reader.string());
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
    message.whitelistedFeeTokenSetters = object.whitelistedFeeTokenSetters?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.whitelistedFeeTokenSetters = object.whitelisted_fee_token_setters?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.whitelistedFeeTokenSetters) {
      obj.whitelisted_fee_token_setters = message.whitelistedFeeTokenSetters.map(e => e);
    } else {
      obj.whitelisted_fee_token_setters = message.whitelistedFeeTokenSetters;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/txfees/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);