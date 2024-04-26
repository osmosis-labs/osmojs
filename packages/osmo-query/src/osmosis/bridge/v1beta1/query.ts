//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType, Params, ParamsAmino, ParamsSDKType } from "./bridge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/bridge/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/bridge/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * LastTransferHeightRequest is the request type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightRequest {
  assetId: AssetID;
}
export interface LastTransferHeightRequestProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightRequest";
  value: Uint8Array;
}
/**
 * LastTransferHeightRequest is the request type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightRequestAmino {
  asset_id?: AssetIDAmino;
}
export interface LastTransferHeightRequestAminoMsg {
  type: "osmosis/bridge/last-transfer-height-request";
  value: LastTransferHeightRequestAmino;
}
/**
 * LastTransferHeightRequest is the request type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightRequestSDKType {
  asset_id: AssetIDSDKType;
}
/**
 * LastTransferHeightResponse is the response type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightResponse {
  lastTransferHeight: bigint;
}
export interface LastTransferHeightResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightResponse";
  value: Uint8Array;
}
/**
 * LastTransferHeightResponse is the response type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightResponseAmino {
  last_transfer_height?: string;
}
export interface LastTransferHeightResponseAminoMsg {
  type: "osmosis/bridge/last-transfer-height-response";
  value: LastTransferHeightResponseAmino;
}
/**
 * LastTransferHeightResponse is the response type for the
 * Query/LastTransferHeight RPC method.
 */
export interface LastTransferHeightResponseSDKType {
  last_transfer_height: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.bridge.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/bridge/query-params-request",
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
      type: "osmosis/bridge/query-params-request",
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
      typeUrl: "/osmosis.bridge.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.bridge.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/bridge/query-params-response",
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
      type: "osmosis/bridge/query-params-response",
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
      typeUrl: "/osmosis.bridge.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseLastTransferHeightRequest(): LastTransferHeightRequest {
  return {
    assetId: AssetID.fromPartial({})
  };
}
export const LastTransferHeightRequest = {
  typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightRequest",
  aminoType: "osmosis/bridge/last-transfer-height-request",
  is(o: any): o is LastTransferHeightRequest {
    return o && (o.$typeUrl === LastTransferHeightRequest.typeUrl || AssetID.is(o.assetId));
  },
  isSDK(o: any): o is LastTransferHeightRequestSDKType {
    return o && (o.$typeUrl === LastTransferHeightRequest.typeUrl || AssetID.isSDK(o.asset_id));
  },
  isAmino(o: any): o is LastTransferHeightRequestAmino {
    return o && (o.$typeUrl === LastTransferHeightRequest.typeUrl || AssetID.isAmino(o.asset_id));
  },
  encode(message: LastTransferHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== undefined) {
      AssetID.encode(message.assetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastTransferHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastTransferHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = AssetID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LastTransferHeightRequest>): LastTransferHeightRequest {
    const message = createBaseLastTransferHeightRequest();
    message.assetId = object.assetId !== undefined && object.assetId !== null ? AssetID.fromPartial(object.assetId) : undefined;
    return message;
  },
  fromAmino(object: LastTransferHeightRequestAmino): LastTransferHeightRequest {
    const message = createBaseLastTransferHeightRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = AssetID.fromAmino(object.asset_id);
    }
    return message;
  },
  toAmino(message: LastTransferHeightRequest): LastTransferHeightRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId ? AssetID.toAmino(message.assetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: LastTransferHeightRequestAminoMsg): LastTransferHeightRequest {
    return LastTransferHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: LastTransferHeightRequest): LastTransferHeightRequestAminoMsg {
    return {
      type: "osmosis/bridge/last-transfer-height-request",
      value: LastTransferHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: LastTransferHeightRequestProtoMsg): LastTransferHeightRequest {
    return LastTransferHeightRequest.decode(message.value);
  },
  toProto(message: LastTransferHeightRequest): Uint8Array {
    return LastTransferHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: LastTransferHeightRequest): LastTransferHeightRequestProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightRequest",
      value: LastTransferHeightRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LastTransferHeightRequest.typeUrl, LastTransferHeightRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LastTransferHeightRequest.aminoType, LastTransferHeightRequest.typeUrl);
function createBaseLastTransferHeightResponse(): LastTransferHeightResponse {
  return {
    lastTransferHeight: BigInt(0)
  };
}
export const LastTransferHeightResponse = {
  typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightResponse",
  aminoType: "osmosis/bridge/last-transfer-height-response",
  is(o: any): o is LastTransferHeightResponse {
    return o && (o.$typeUrl === LastTransferHeightResponse.typeUrl || typeof o.lastTransferHeight === "bigint");
  },
  isSDK(o: any): o is LastTransferHeightResponseSDKType {
    return o && (o.$typeUrl === LastTransferHeightResponse.typeUrl || typeof o.last_transfer_height === "bigint");
  },
  isAmino(o: any): o is LastTransferHeightResponseAmino {
    return o && (o.$typeUrl === LastTransferHeightResponse.typeUrl || typeof o.last_transfer_height === "bigint");
  },
  encode(message: LastTransferHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastTransferHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.lastTransferHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastTransferHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastTransferHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastTransferHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LastTransferHeightResponse>): LastTransferHeightResponse {
    const message = createBaseLastTransferHeightResponse();
    message.lastTransferHeight = object.lastTransferHeight !== undefined && object.lastTransferHeight !== null ? BigInt(object.lastTransferHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastTransferHeightResponseAmino): LastTransferHeightResponse {
    const message = createBaseLastTransferHeightResponse();
    if (object.last_transfer_height !== undefined && object.last_transfer_height !== null) {
      message.lastTransferHeight = BigInt(object.last_transfer_height);
    }
    return message;
  },
  toAmino(message: LastTransferHeightResponse): LastTransferHeightResponseAmino {
    const obj: any = {};
    obj.last_transfer_height = message.lastTransferHeight !== BigInt(0) ? message.lastTransferHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastTransferHeightResponseAminoMsg): LastTransferHeightResponse {
    return LastTransferHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: LastTransferHeightResponse): LastTransferHeightResponseAminoMsg {
    return {
      type: "osmosis/bridge/last-transfer-height-response",
      value: LastTransferHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: LastTransferHeightResponseProtoMsg): LastTransferHeightResponse {
    return LastTransferHeightResponse.decode(message.value);
  },
  toProto(message: LastTransferHeightResponse): Uint8Array {
    return LastTransferHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: LastTransferHeightResponse): LastTransferHeightResponseProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.LastTransferHeightResponse",
      value: LastTransferHeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LastTransferHeightResponse.typeUrl, LastTransferHeightResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LastTransferHeightResponse.aminoType, LastTransferHeightResponse.typeUrl);