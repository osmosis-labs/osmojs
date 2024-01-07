import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface Params {
  allowedAsyncAckContracts: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.ibchooks.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  allowed_async_ack_contracts?: string[];
}
export interface ParamsAminoMsg {
  type: "osmosis/ibchooks/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  allowed_async_ack_contracts: string[];
}
function createBaseParams(): Params {
  return {
    allowedAsyncAckContracts: []
  };
}
export const Params = {
  typeUrl: "/osmosis.ibchooks.Params",
  aminoType: "osmosis/ibchooks/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowedAsyncAckContracts) && (!o.allowedAsyncAckContracts.length || typeof o.allowedAsyncAckContracts[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_async_ack_contracts) && (!o.allowed_async_ack_contracts.length || typeof o.allowed_async_ack_contracts[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_async_ack_contracts) && (!o.allowed_async_ack_contracts.length || typeof o.allowed_async_ack_contracts[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedAsyncAckContracts) {
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
          message.allowedAsyncAckContracts.push(reader.string());
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
      allowedAsyncAckContracts: Array.isArray(object?.allowedAsyncAckContracts) ? object.allowedAsyncAckContracts.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowedAsyncAckContracts = message.allowedAsyncAckContracts.map(e => e);
    } else {
      obj.allowedAsyncAckContracts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts = object.allowedAsyncAckContracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts = object.allowed_async_ack_contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts.map(e => e);
    } else {
      obj.allowed_async_ack_contracts = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/ibchooks/params",
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
      typeUrl: "/osmosis.ibchooks.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);