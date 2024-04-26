//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { GlobalDecoderRegistry } from "../../../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../../../helpers";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
  /** host_enabled enables or disables the host submodule. */
  hostEnabled: boolean;
  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allowMessages: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsAmino {
  /** host_enabled enables or disables the host submodule. */
  host_enabled?: boolean;
  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allow_messages?: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
  host_enabled: boolean;
  allow_messages: string[];
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequest {
  /**
   * path defines the path of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   */
  path: string;
  /**
   * data defines the payload of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   */
  data: Uint8Array;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest";
  value: Uint8Array;
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequestAmino {
  /**
   * path defines the path of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   */
  path?: string;
  /**
   * data defines the payload of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   */
  data?: string;
}
export interface QueryRequestAminoMsg {
  type: "cosmos-sdk/QueryRequest";
  value: QueryRequestAmino;
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequestSDKType {
  path: string;
  data: Uint8Array;
}
function createBaseParams(): Params {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}
export const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.hostEnabled === "boolean" && Array.isArray(o.allowMessages) && (!o.allowMessages.length || typeof o.allowMessages[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.host_enabled === "boolean" && Array.isArray(o.allow_messages) && (!o.allow_messages.length || typeof o.allow_messages[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.host_enabled === "boolean" && Array.isArray(o.allow_messages) && (!o.allow_messages.length || typeof o.allow_messages[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }
    for (const v of message.allowMessages) {
      writer.uint32(18).string(v!);
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
          message.hostEnabled = reader.bool();
          break;
        case 2:
          message.allowMessages.push(reader.string());
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
    message.hostEnabled = object.hostEnabled ?? false;
    message.allowMessages = object.allowMessages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.host_enabled !== undefined && object.host_enabled !== null) {
      message.hostEnabled = object.host_enabled;
    }
    message.allowMessages = object.allow_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.host_enabled = message.hostEnabled === false ? undefined : message.hostEnabled;
    if (message.allowMessages) {
      obj.allow_messages = message.allowMessages.map(e => e);
    } else {
      obj.allow_messages = message.allowMessages;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseQueryRequest(): QueryRequest {
  return {
    path: "",
    data: new Uint8Array()
  };
}
export const QueryRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest",
  aminoType: "cosmos-sdk/QueryRequest",
  is(o: any): o is QueryRequest {
    return o && (o.$typeUrl === QueryRequest.typeUrl || typeof o.path === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is QueryRequestSDKType {
    return o && (o.$typeUrl === QueryRequest.typeUrl || typeof o.path === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is QueryRequestAmino {
    return o && (o.$typeUrl === QueryRequest.typeUrl || typeof o.path === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.path = object.path ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest {
    return QueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRequest): QueryRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRequest",
      value: QueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest {
    return QueryRequest.decode(message.value);
  },
  toProto(message: QueryRequest): Uint8Array {
    return QueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequest): QueryRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRequest.typeUrl, QueryRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRequest.aminoType, QueryRequest.typeUrl);