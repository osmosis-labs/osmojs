//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryChecksumsRequestProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsRequest";
  value: Uint8Array;
}
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryChecksumsRequestAminoMsg {
  type: "cosmos-sdk/QueryChecksumsRequest";
  value: QueryChecksumsRequestAmino;
}
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponse {
  /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
  checksums: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryChecksumsResponseProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsResponse";
  value: Uint8Array;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponseAmino {
  /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
  checksums?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryChecksumsResponseAminoMsg {
  type: "cosmos-sdk/QueryChecksumsResponse";
  value: QueryChecksumsResponseAmino;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponseSDKType {
  checksums: string[];
  pagination?: PageResponseSDKType;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** checksum is a hex encoded string of the code stored. */
  checksum: string;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
  /** checksum is a hex encoded string of the code stored. */
  checksum?: string;
}
export interface QueryCodeRequestAminoMsg {
  type: "cosmos-sdk/QueryCodeRequest";
  value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
  checksum: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponse {
  data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponseAmino {
  data?: string;
}
export interface QueryCodeResponseAminoMsg {
  type: "cosmos-sdk/QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponseSDKType {
  data: Uint8Array;
}
function createBaseQueryChecksumsRequest(): QueryChecksumsRequest {
  return {
    pagination: undefined
  };
}
export const QueryChecksumsRequest = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsRequest",
  aminoType: "cosmos-sdk/QueryChecksumsRequest",
  is(o: any): o is QueryChecksumsRequest {
    return o && o.$typeUrl === QueryChecksumsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryChecksumsRequestSDKType {
    return o && o.$typeUrl === QueryChecksumsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryChecksumsRequestAmino {
    return o && o.$typeUrl === QueryChecksumsRequest.typeUrl;
  },
  encode(message: QueryChecksumsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryChecksumsRequest>): QueryChecksumsRequest {
    const message = createBaseQueryChecksumsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChecksumsRequestAmino): QueryChecksumsRequest {
    const message = createBaseQueryChecksumsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChecksumsRequest): QueryChecksumsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChecksumsRequestAminoMsg): QueryChecksumsRequest {
    return QueryChecksumsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChecksumsRequest): QueryChecksumsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChecksumsRequest",
      value: QueryChecksumsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChecksumsRequestProtoMsg): QueryChecksumsRequest {
    return QueryChecksumsRequest.decode(message.value);
  },
  toProto(message: QueryChecksumsRequest): Uint8Array {
    return QueryChecksumsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChecksumsRequest): QueryChecksumsRequestProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsRequest",
      value: QueryChecksumsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChecksumsRequest.typeUrl, QueryChecksumsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChecksumsRequest.aminoType, QueryChecksumsRequest.typeUrl);
function createBaseQueryChecksumsResponse(): QueryChecksumsResponse {
  return {
    checksums: [],
    pagination: undefined
  };
}
export const QueryChecksumsResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsResponse",
  aminoType: "cosmos-sdk/QueryChecksumsResponse",
  is(o: any): o is QueryChecksumsResponse {
    return o && (o.$typeUrl === QueryChecksumsResponse.typeUrl || Array.isArray(o.checksums) && (!o.checksums.length || typeof o.checksums[0] === "string"));
  },
  isSDK(o: any): o is QueryChecksumsResponseSDKType {
    return o && (o.$typeUrl === QueryChecksumsResponse.typeUrl || Array.isArray(o.checksums) && (!o.checksums.length || typeof o.checksums[0] === "string"));
  },
  isAmino(o: any): o is QueryChecksumsResponseAmino {
    return o && (o.$typeUrl === QueryChecksumsResponse.typeUrl || Array.isArray(o.checksums) && (!o.checksums.length || typeof o.checksums[0] === "string"));
  },
  encode(message: QueryChecksumsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.checksums) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChecksumsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryChecksumsResponse>): QueryChecksumsResponse {
    const message = createBaseQueryChecksumsResponse();
    message.checksums = object.checksums?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChecksumsResponseAmino): QueryChecksumsResponse {
    const message = createBaseQueryChecksumsResponse();
    message.checksums = object.checksums?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChecksumsResponse): QueryChecksumsResponseAmino {
    const obj: any = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => e);
    } else {
      obj.checksums = message.checksums;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChecksumsResponseAminoMsg): QueryChecksumsResponse {
    return QueryChecksumsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChecksumsResponse): QueryChecksumsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChecksumsResponse",
      value: QueryChecksumsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChecksumsResponseProtoMsg): QueryChecksumsResponse {
    return QueryChecksumsResponse.decode(message.value);
  },
  toProto(message: QueryChecksumsResponse): Uint8Array {
    return QueryChecksumsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChecksumsResponse): QueryChecksumsResponseProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsResponse",
      value: QueryChecksumsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChecksumsResponse.typeUrl, QueryChecksumsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChecksumsResponse.aminoType, QueryChecksumsResponse.typeUrl);
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    checksum: ""
  };
}
export const QueryCodeRequest = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeRequest",
  aminoType: "cosmos-sdk/QueryCodeRequest",
  is(o: any): o is QueryCodeRequest {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.checksum === "string");
  },
  isSDK(o: any): o is QueryCodeRequestSDKType {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.checksum === "string");
  },
  isAmino(o: any): o is QueryCodeRequestAmino {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.checksum === "string");
  },
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checksum !== "") {
      writer.uint32(10).string(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.checksum = object.checksum ?? "";
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = object.checksum;
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.checksum = message.checksum === "" ? undefined : message.checksum;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCodeRequest",
      value: QueryCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodeRequest.typeUrl, QueryCodeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeRequest.aminoType, QueryCodeRequest.typeUrl);
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeResponse",
  aminoType: "cosmos-sdk/QueryCodeResponse",
  is(o: any): o is QueryCodeResponse {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QueryCodeResponseSDKType {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QueryCodeResponseAmino {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCodeResponse",
      value: QueryCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCodeResponse.typeUrl, QueryCodeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCodeResponse.aminoType, QueryCodeResponse.typeUrl);