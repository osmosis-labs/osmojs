//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Module is the config object of the distribution module. */
export interface Module {
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.distribution.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the distribution module. */
export interface ModuleAmino {
  fee_collector_name?: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority?: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the distribution module. */
export interface ModuleSDKType {
  fee_collector_name: string;
  authority: string;
}
function createBaseModule(): Module {
  return {
    feeCollectorName: "",
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.distribution.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.feeCollectorName === "string" && typeof o.authority === "string");
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.fee_collector_name === "string" && typeof o.authority === "string");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.fee_collector_name === "string" && typeof o.authority === "string");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeCollectorName !== "") {
      writer.uint32(10).string(message.feeCollectorName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCollectorName = reader.string();
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.feeCollectorName = object.feeCollectorName ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.fee_collector_name !== undefined && object.fee_collector_name !== null) {
      message.feeCollectorName = object.fee_collector_name;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.fee_collector_name = message.feeCollectorName === "" ? undefined : message.feeCollectorName;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);