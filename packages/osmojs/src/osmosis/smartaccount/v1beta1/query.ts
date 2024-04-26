//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AccountAuthenticator, AccountAuthenticatorAmino, AccountAuthenticatorSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/smartaccount/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/smartaccount/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequest {
  /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
  account: string;
}
export interface GetAuthenticatorsRequestProtoMsg {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest";
  value: Uint8Array;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequestAmino {
  /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
  account?: string;
}
export interface GetAuthenticatorsRequestAminoMsg {
  type: "osmosis/smartaccount/get-authenticators-request";
  value: GetAuthenticatorsRequestAmino;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequestSDKType {
  account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponse {
  accountAuthenticators: AccountAuthenticator[];
}
export interface GetAuthenticatorsResponseProtoMsg {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse";
  value: Uint8Array;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponseAmino {
  account_authenticators?: AccountAuthenticatorAmino[];
}
export interface GetAuthenticatorsResponseAminoMsg {
  type: "osmosis/smartaccount/get-authenticators-response";
  value: GetAuthenticatorsResponseAmino;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponseSDKType {
  account_authenticators: AccountAuthenticatorSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/smartaccount/query-params-request",
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
      type: "osmosis/smartaccount/query-params-request",
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
      typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/smartaccount/query-params-response",
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
      type: "osmosis/smartaccount/query-params-response",
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
      typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseGetAuthenticatorsRequest(): GetAuthenticatorsRequest {
  return {
    account: ""
  };
}
export const GetAuthenticatorsRequest = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest",
  aminoType: "osmosis/smartaccount/get-authenticators-request",
  is(o: any): o is GetAuthenticatorsRequest {
    return o && (o.$typeUrl === GetAuthenticatorsRequest.typeUrl || typeof o.account === "string");
  },
  isSDK(o: any): o is GetAuthenticatorsRequestSDKType {
    return o && (o.$typeUrl === GetAuthenticatorsRequest.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is GetAuthenticatorsRequestAmino {
    return o && (o.$typeUrl === GetAuthenticatorsRequest.typeUrl || typeof o.account === "string");
  },
  encode(message: GetAuthenticatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorsRequest>): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: GetAuthenticatorsRequestAmino): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsRequestAminoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestAminoMsg {
    return {
      type: "osmosis/smartaccount/get-authenticators-request",
      value: GetAuthenticatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetAuthenticatorsRequestProtoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.decode(message.value);
  },
  toProto(message: GetAuthenticatorsRequest): Uint8Array {
    return GetAuthenticatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest",
      value: GetAuthenticatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetAuthenticatorsRequest.typeUrl, GetAuthenticatorsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetAuthenticatorsRequest.aminoType, GetAuthenticatorsRequest.typeUrl);
function createBaseGetAuthenticatorsResponse(): GetAuthenticatorsResponse {
  return {
    accountAuthenticators: []
  };
}
export const GetAuthenticatorsResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse",
  aminoType: "osmosis/smartaccount/get-authenticators-response",
  is(o: any): o is GetAuthenticatorsResponse {
    return o && (o.$typeUrl === GetAuthenticatorsResponse.typeUrl || Array.isArray(o.accountAuthenticators) && (!o.accountAuthenticators.length || AccountAuthenticator.is(o.accountAuthenticators[0])));
  },
  isSDK(o: any): o is GetAuthenticatorsResponseSDKType {
    return o && (o.$typeUrl === GetAuthenticatorsResponse.typeUrl || Array.isArray(o.account_authenticators) && (!o.account_authenticators.length || AccountAuthenticator.isSDK(o.account_authenticators[0])));
  },
  isAmino(o: any): o is GetAuthenticatorsResponseAmino {
    return o && (o.$typeUrl === GetAuthenticatorsResponse.typeUrl || Array.isArray(o.account_authenticators) && (!o.account_authenticators.length || AccountAuthenticator.isAmino(o.account_authenticators[0])));
  },
  encode(message: GetAuthenticatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountAuthenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAuthenticatorsResponse>): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.accountAuthenticators?.map(e => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetAuthenticatorsResponseAmino): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.account_authenticators?.map(e => AccountAuthenticator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseAmino {
    const obj: any = {};
    if (message.accountAuthenticators) {
      obj.account_authenticators = message.accountAuthenticators.map(e => e ? AccountAuthenticator.toAmino(e) : undefined);
    } else {
      obj.account_authenticators = message.accountAuthenticators;
    }
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsResponseAminoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseAminoMsg {
    return {
      type: "osmosis/smartaccount/get-authenticators-response",
      value: GetAuthenticatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetAuthenticatorsResponseProtoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.decode(message.value);
  },
  toProto(message: GetAuthenticatorsResponse): Uint8Array {
    return GetAuthenticatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse",
      value: GetAuthenticatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetAuthenticatorsResponse.typeUrl, GetAuthenticatorsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetAuthenticatorsResponse.aminoType, GetAuthenticatorsResponse.typeUrl);