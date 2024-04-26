//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/tokenfactory/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/tokenfactory/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
  denom?: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
  type: "osmosis/tokenfactory/query-denom-authority-metadata-request";
  value: QueryDenomAuthorityMetadataRequestAmino;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
  authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
  type: "osmosis/tokenfactory/query-denom-authority-metadata-response";
  value: QueryDenomAuthorityMetadataResponseAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
  authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
  creator?: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
  type: "osmosis/tokenfactory/query-denoms-from-creator-request";
  value: QueryDenomsFromCreatorRequestAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
  denoms?: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
  type: "osmosis/tokenfactory/query-denoms-from-creator-response";
  value: QueryDenomsFromCreatorResponseAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}
export interface QueryBeforeSendHookAddressRequest {
  denom: string;
}
export interface QueryBeforeSendHookAddressRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest";
  value: Uint8Array;
}
export interface QueryBeforeSendHookAddressRequestAmino {
  denom?: string;
}
export interface QueryBeforeSendHookAddressRequestAminoMsg {
  type: "osmosis/tokenfactory/query-before-send-hook-address-request";
  value: QueryBeforeSendHookAddressRequestAmino;
}
export interface QueryBeforeSendHookAddressRequestSDKType {
  denom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
  cosmwasmAddress: string;
}
export interface QueryBeforeSendHookAddressResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse";
  value: Uint8Array;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponseAmino {
  cosmwasm_address?: string;
}
export interface QueryBeforeSendHookAddressResponseAminoMsg {
  type: "osmosis/tokenfactory/query-before-send-hook-address-response";
  value: QueryBeforeSendHookAddressResponseAmino;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponseSDKType {
  cosmwasm_address: string;
}
export interface QueryAllBeforeSendHooksAddressesRequest {}
export interface QueryAllBeforeSendHooksAddressesRequestProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest";
  value: Uint8Array;
}
export interface QueryAllBeforeSendHooksAddressesRequestAmino {}
export interface QueryAllBeforeSendHooksAddressesRequestAminoMsg {
  type: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-request";
  value: QueryAllBeforeSendHooksAddressesRequestAmino;
}
export interface QueryAllBeforeSendHooksAddressesRequestSDKType {}
/**
 * QueryAllBeforeSendHooksAddressesResponse defines the response structure for
 * the AllBeforeSendHooksAddresses gRPC query.
 */
export interface QueryAllBeforeSendHooksAddressesResponse {
  denoms: string[];
  beforeSendHookAddresses: string[];
}
export interface QueryAllBeforeSendHooksAddressesResponseProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse";
  value: Uint8Array;
}
/**
 * QueryAllBeforeSendHooksAddressesResponse defines the response structure for
 * the AllBeforeSendHooksAddresses gRPC query.
 */
export interface QueryAllBeforeSendHooksAddressesResponseAmino {
  denoms?: string[];
  before_send_hook_addresses?: string[];
}
export interface QueryAllBeforeSendHooksAddressesResponseAminoMsg {
  type: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-response";
  value: QueryAllBeforeSendHooksAddressesResponseAmino;
}
/**
 * QueryAllBeforeSendHooksAddressesResponse defines the response structure for
 * the AllBeforeSendHooksAddresses gRPC query.
 */
export interface QueryAllBeforeSendHooksAddressesResponseSDKType {
  denoms: string[];
  before_send_hook_addresses: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/tokenfactory/query-params-request",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/tokenfactory/query-params-response",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: ""
  };
}
export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-request",
  is(o: any): o is QueryDenomAuthorityMetadataRequest {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomAuthorityMetadataRequestSDKType {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomAuthorityMetadataRequestAmino {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomAuthorityMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denom-authority-metadata-request",
      value: QueryDenomAuthorityMetadataRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array {
    return QueryDenomAuthorityMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
      value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataRequest.typeUrl, QueryDenomAuthorityMetadataRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomAuthorityMetadataRequest.aminoType, QueryDenomAuthorityMetadataRequest.typeUrl);
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: DenomAuthorityMetadata.fromPartial({})
  };
}
export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  aminoType: "osmosis/tokenfactory/query-denom-authority-metadata-response",
  is(o: any): o is QueryDenomAuthorityMetadataResponse {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.is(o.authorityMetadata));
  },
  isSDK(o: any): o is QueryDenomAuthorityMetadataResponseSDKType {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.isSDK(o.authority_metadata));
  },
  isAmino(o: any): o is QueryDenomAuthorityMetadataResponseAmino {
    return o && (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl || DenomAuthorityMetadata.isAmino(o.authority_metadata));
  },
  encode(message: QueryDenomAuthorityMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino {
    const obj: any = {};
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denom-authority-metadata-response",
      value: QueryDenomAuthorityMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array {
    return QueryDenomAuthorityMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
      value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataResponse.typeUrl, QueryDenomAuthorityMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomAuthorityMetadataResponse.aminoType, QueryDenomAuthorityMetadataResponse.typeUrl);
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ""
  };
}
export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-request",
  is(o: any): o is QueryDenomsFromCreatorRequest {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  isSDK(o: any): o is QueryDenomsFromCreatorRequestSDKType {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  isAmino(o: any): o is QueryDenomsFromCreatorRequestAmino {
    return o && (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl || typeof o.creator === "string");
  },
  encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denoms-from-creator-request",
      value: QueryDenomsFromCreatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.decode(message.value);
  },
  toProto(message: QueryDenomsFromCreatorRequest): Uint8Array {
    return QueryDenomsFromCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
      value: QueryDenomsFromCreatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorRequest.typeUrl, QueryDenomsFromCreatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsFromCreatorRequest.aminoType, QueryDenomsFromCreatorRequest.typeUrl);
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}
export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  aminoType: "osmosis/tokenfactory/query-denoms-from-creator-response",
  is(o: any): o is QueryDenomsFromCreatorResponse {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is QueryDenomsFromCreatorResponseSDKType {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryDenomsFromCreatorResponseAmino {
    return o && (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryDenomsFromCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-denoms-from-creator-response",
      value: QueryDenomsFromCreatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.decode(message.value);
  },
  toProto(message: QueryDenomsFromCreatorResponse): Uint8Array {
    return QueryDenomsFromCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
      value: QueryDenomsFromCreatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorResponse.typeUrl, QueryDenomsFromCreatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsFromCreatorResponse.aminoType, QueryDenomsFromCreatorResponse.typeUrl);
function createBaseQueryBeforeSendHookAddressRequest(): QueryBeforeSendHookAddressRequest {
  return {
    denom: ""
  };
}
export const QueryBeforeSendHookAddressRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
  aminoType: "osmosis/tokenfactory/query-before-send-hook-address-request",
  is(o: any): o is QueryBeforeSendHookAddressRequest {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryBeforeSendHookAddressRequestSDKType {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryBeforeSendHookAddressRequestAmino {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryBeforeSendHookAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeforeSendHookAddressRequest>): QueryBeforeSendHookAddressRequest {
    const message = createBaseQueryBeforeSendHookAddressRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBeforeSendHookAddressRequestAmino): QueryBeforeSendHookAddressRequest {
    const message = createBaseQueryBeforeSendHookAddressRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryBeforeSendHookAddressRequest): QueryBeforeSendHookAddressRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBeforeSendHookAddressRequestAminoMsg): QueryBeforeSendHookAddressRequest {
    return QueryBeforeSendHookAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBeforeSendHookAddressRequest): QueryBeforeSendHookAddressRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-before-send-hook-address-request",
      value: QueryBeforeSendHookAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBeforeSendHookAddressRequestProtoMsg): QueryBeforeSendHookAddressRequest {
    return QueryBeforeSendHookAddressRequest.decode(message.value);
  },
  toProto(message: QueryBeforeSendHookAddressRequest): Uint8Array {
    return QueryBeforeSendHookAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBeforeSendHookAddressRequest): QueryBeforeSendHookAddressRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
      value: QueryBeforeSendHookAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBeforeSendHookAddressRequest.typeUrl, QueryBeforeSendHookAddressRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBeforeSendHookAddressRequest.aminoType, QueryBeforeSendHookAddressRequest.typeUrl);
function createBaseQueryBeforeSendHookAddressResponse(): QueryBeforeSendHookAddressResponse {
  return {
    cosmwasmAddress: ""
  };
}
export const QueryBeforeSendHookAddressResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
  aminoType: "osmosis/tokenfactory/query-before-send-hook-address-response",
  is(o: any): o is QueryBeforeSendHookAddressResponse {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl || typeof o.cosmwasmAddress === "string");
  },
  isSDK(o: any): o is QueryBeforeSendHookAddressResponseSDKType {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl || typeof o.cosmwasm_address === "string");
  },
  isAmino(o: any): o is QueryBeforeSendHookAddressResponseAmino {
    return o && (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl || typeof o.cosmwasm_address === "string");
  },
  encode(message: QueryBeforeSendHookAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmwasmAddress !== "") {
      writer.uint32(10).string(message.cosmwasmAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmwasmAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeforeSendHookAddressResponse>): QueryBeforeSendHookAddressResponse {
    const message = createBaseQueryBeforeSendHookAddressResponse();
    message.cosmwasmAddress = object.cosmwasmAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBeforeSendHookAddressResponseAmino): QueryBeforeSendHookAddressResponse {
    const message = createBaseQueryBeforeSendHookAddressResponse();
    if (object.cosmwasm_address !== undefined && object.cosmwasm_address !== null) {
      message.cosmwasmAddress = object.cosmwasm_address;
    }
    return message;
  },
  toAmino(message: QueryBeforeSendHookAddressResponse): QueryBeforeSendHookAddressResponseAmino {
    const obj: any = {};
    obj.cosmwasm_address = message.cosmwasmAddress === "" ? undefined : message.cosmwasmAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBeforeSendHookAddressResponseAminoMsg): QueryBeforeSendHookAddressResponse {
    return QueryBeforeSendHookAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBeforeSendHookAddressResponse): QueryBeforeSendHookAddressResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-before-send-hook-address-response",
      value: QueryBeforeSendHookAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBeforeSendHookAddressResponseProtoMsg): QueryBeforeSendHookAddressResponse {
    return QueryBeforeSendHookAddressResponse.decode(message.value);
  },
  toProto(message: QueryBeforeSendHookAddressResponse): Uint8Array {
    return QueryBeforeSendHookAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBeforeSendHookAddressResponse): QueryBeforeSendHookAddressResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
      value: QueryBeforeSendHookAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBeforeSendHookAddressResponse.typeUrl, QueryBeforeSendHookAddressResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBeforeSendHookAddressResponse.aminoType, QueryBeforeSendHookAddressResponse.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesRequest(): QueryAllBeforeSendHooksAddressesRequest {
  return {};
}
export const QueryAllBeforeSendHooksAddressesRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest",
  aminoType: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-request",
  is(o: any): o is QueryAllBeforeSendHooksAddressesRequest {
    return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllBeforeSendHooksAddressesRequestSDKType {
    return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllBeforeSendHooksAddressesRequestAmino {
    return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
  },
  encode(_: QueryAllBeforeSendHooksAddressesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
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
  fromPartial(_: Partial<QueryAllBeforeSendHooksAddressesRequest>): QueryAllBeforeSendHooksAddressesRequest {
    const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
    return message;
  },
  fromAmino(_: QueryAllBeforeSendHooksAddressesRequestAmino): QueryAllBeforeSendHooksAddressesRequest {
    const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
    return message;
  },
  toAmino(_: QueryAllBeforeSendHooksAddressesRequest): QueryAllBeforeSendHooksAddressesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllBeforeSendHooksAddressesRequestAminoMsg): QueryAllBeforeSendHooksAddressesRequest {
    return QueryAllBeforeSendHooksAddressesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllBeforeSendHooksAddressesRequest): QueryAllBeforeSendHooksAddressesRequestAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-request",
      value: QueryAllBeforeSendHooksAddressesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBeforeSendHooksAddressesRequestProtoMsg): QueryAllBeforeSendHooksAddressesRequest {
    return QueryAllBeforeSendHooksAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllBeforeSendHooksAddressesRequest): Uint8Array {
    return QueryAllBeforeSendHooksAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBeforeSendHooksAddressesRequest): QueryAllBeforeSendHooksAddressesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest",
      value: QueryAllBeforeSendHooksAddressesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllBeforeSendHooksAddressesRequest.typeUrl, QueryAllBeforeSendHooksAddressesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBeforeSendHooksAddressesRequest.aminoType, QueryAllBeforeSendHooksAddressesRequest.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesResponse(): QueryAllBeforeSendHooksAddressesResponse {
  return {
    denoms: [],
    beforeSendHookAddresses: []
  };
}
export const QueryAllBeforeSendHooksAddressesResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse",
  aminoType: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-response",
  is(o: any): o is QueryAllBeforeSendHooksAddressesResponse {
    return o && (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string") && Array.isArray(o.beforeSendHookAddresses) && (!o.beforeSendHookAddresses.length || typeof o.beforeSendHookAddresses[0] === "string"));
  },
  isSDK(o: any): o is QueryAllBeforeSendHooksAddressesResponseSDKType {
    return o && (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string") && Array.isArray(o.before_send_hook_addresses) && (!o.before_send_hook_addresses.length || typeof o.before_send_hook_addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryAllBeforeSendHooksAddressesResponseAmino {
    return o && (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string") && Array.isArray(o.before_send_hook_addresses) && (!o.before_send_hook_addresses.length || typeof o.before_send_hook_addresses[0] === "string"));
  },
  encode(message: QueryAllBeforeSendHooksAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.beforeSendHookAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 2:
          message.beforeSendHookAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllBeforeSendHooksAddressesResponse>): QueryAllBeforeSendHooksAddressesResponse {
    const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    message.beforeSendHookAddresses = object.beforeSendHookAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllBeforeSendHooksAddressesResponseAmino): QueryAllBeforeSendHooksAddressesResponse {
    const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    message.beforeSendHookAddresses = object.before_send_hook_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllBeforeSendHooksAddressesResponse): QueryAllBeforeSendHooksAddressesResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    if (message.beforeSendHookAddresses) {
      obj.before_send_hook_addresses = message.beforeSendHookAddresses.map(e => e);
    } else {
      obj.before_send_hook_addresses = message.beforeSendHookAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllBeforeSendHooksAddressesResponseAminoMsg): QueryAllBeforeSendHooksAddressesResponse {
    return QueryAllBeforeSendHooksAddressesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllBeforeSendHooksAddressesResponse): QueryAllBeforeSendHooksAddressesResponseAminoMsg {
    return {
      type: "osmosis/tokenfactory/query-all-before-send-hooks-addresses-response",
      value: QueryAllBeforeSendHooksAddressesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBeforeSendHooksAddressesResponseProtoMsg): QueryAllBeforeSendHooksAddressesResponse {
    return QueryAllBeforeSendHooksAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllBeforeSendHooksAddressesResponse): Uint8Array {
    return QueryAllBeforeSendHooksAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBeforeSendHooksAddressesResponse): QueryAllBeforeSendHooksAddressesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse",
      value: QueryAllBeforeSendHooksAddressesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllBeforeSendHooksAddressesResponse.typeUrl, QueryAllBeforeSendHooksAddressesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBeforeSendHooksAddressesResponse.aminoType, QueryAllBeforeSendHooksAddressesResponse.typeUrl);