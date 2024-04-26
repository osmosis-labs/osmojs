//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, QueryRequest, QueryRequestAmino, QueryRequestSDKType } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { GlobalDecoderRegistry } from "../../../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../../../helpers";
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the 27-interchain-accounts/host parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsAmino {
  /** signer address */
  signer?: string;
  /**
   * params defines the 27-interchain-accounts/host parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsSDKType {
  signer: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
  /** signer address */
  signer: string;
  /** requests defines the module safe queries to execute. */
  requests: QueryRequest[];
}
export interface MsgModuleQuerySafeProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
  value: Uint8Array;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeAmino {
  /** signer address */
  signer?: string;
  /** requests defines the module safe queries to execute. */
  requests?: QueryRequestAmino[];
}
export interface MsgModuleQuerySafeAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafe";
  value: MsgModuleQuerySafeAmino;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
  signer: string;
  requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
  /** height at which the responses were queried */
  height: bigint;
  /** protobuf encoded responses for each query */
  responses: Uint8Array[];
}
export interface MsgModuleQuerySafeResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
  value: Uint8Array;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseAmino {
  /** height at which the responses were queried */
  height?: string;
  /** protobuf encoded responses for each query */
  responses?: string[];
}
export interface MsgModuleQuerySafeResponseAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafeResponse";
  value: MsgModuleQuerySafeResponseAmino;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
  height: bigint;
  responses: Uint8Array[];
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
  aminoType: "cosmos-sdk/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
function createBaseMsgModuleQuerySafe(): MsgModuleQuerySafe {
  return {
    signer: "",
    requests: []
  };
}
export const MsgModuleQuerySafe = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
  aminoType: "cosmos-sdk/MsgModuleQuerySafe",
  is(o: any): o is MsgModuleQuerySafe {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.is(o.requests[0])));
  },
  isSDK(o: any): o is MsgModuleQuerySafeSDKType {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.isSDK(o.requests[0])));
  },
  isAmino(o: any): o is MsgModuleQuerySafeAmino {
    return o && (o.$typeUrl === MsgModuleQuerySafe.typeUrl || typeof o.signer === "string" && Array.isArray(o.requests) && (!o.requests.length || QueryRequest.isAmino(o.requests[0])));
  },
  encode(message: MsgModuleQuerySafe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      QueryRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(QueryRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    message.signer = object.signer ?? "";
    message.requests = object.requests?.map(e => QueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeAmino): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.requests = object.requests?.map(e => QueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafe): MsgModuleQuerySafeAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? QueryRequest.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeAminoMsg): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeProtoMsg): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.decode(message.value);
  },
  toProto(message: MsgModuleQuerySafe): Uint8Array {
    return MsgModuleQuerySafe.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgModuleQuerySafe.typeUrl, MsgModuleQuerySafe);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgModuleQuerySafe.aminoType, MsgModuleQuerySafe.typeUrl);
function createBaseMsgModuleQuerySafeResponse(): MsgModuleQuerySafeResponse {
  return {
    height: BigInt(0),
    responses: []
  };
}
export const MsgModuleQuerySafeResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
  aminoType: "cosmos-sdk/MsgModuleQuerySafeResponse",
  is(o: any): o is MsgModuleQuerySafeResponse {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  isSDK(o: any): o is MsgModuleQuerySafeResponseSDKType {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  isAmino(o: any): o is MsgModuleQuerySafeResponseAmino {
    return o && (o.$typeUrl === MsgModuleQuerySafeResponse.typeUrl || typeof o.height === "bigint" && Array.isArray(o.responses) && (!o.responses.length || o.responses[0] instanceof Uint8Array || typeof o.responses[0] === "string"));
  },
  encode(message: MsgModuleQuerySafeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.responses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.responses = object.responses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeResponseAmino): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.responses = object.responses?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    if (message.responses) {
      obj.responses = message.responses.map(e => base64FromBytes(e));
    } else {
      obj.responses = message.responses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeResponseAminoMsg): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeResponseProtoMsg): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.decode(message.value);
  },
  toProto(message: MsgModuleQuerySafeResponse): Uint8Array {
    return MsgModuleQuerySafeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgModuleQuerySafeResponse.typeUrl, MsgModuleQuerySafeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgModuleQuerySafeResponse.aminoType, MsgModuleQuerySafeResponse.typeUrl);