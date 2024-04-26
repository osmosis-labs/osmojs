//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValue[];
}
export interface GetRequestProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest";
  value: Uint8Array;
}
/** GetRequest is the Query/Get request type. */
export interface GetRequestAmino {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  message_name?: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index?: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values?: IndexValueAmino[];
}
export interface GetRequestAminoMsg {
  type: "cosmos-sdk/GetRequest";
  value: GetRequestAmino;
}
/** GetRequest is the Query/Get request type. */
export interface GetRequestSDKType {
  message_name: string;
  index: string;
  values: IndexValueSDKType[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: Any;
}
export interface GetResponseProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse";
  value: Uint8Array;
}
/** GetResponse is the Query/Get response type. */
export interface GetResponseAmino {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: AnyAmino;
}
export interface GetResponseAminoMsg {
  type: "cosmos-sdk/GetResponse";
  value: GetResponseAmino;
}
/** GetResponse is the Query/Get response type. */
export interface GetResponseSDKType {
  result?: AnySDKType;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_Prefix;
  /** range defines a range query. */
  range?: ListRequest_Range;
  /** pagination is the pagination request. */
  pagination?: PageRequest;
}
export interface ListRequestProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest";
  value: Uint8Array;
}
/** ListRequest is the Query/List request type. */
export interface ListRequestAmino {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  message_name?: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index?: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_PrefixAmino;
  /** range defines a range query. */
  range?: ListRequest_RangeAmino;
  /** pagination is the pagination request. */
  pagination?: PageRequestAmino;
}
export interface ListRequestAminoMsg {
  type: "cosmos-sdk/ListRequest";
  value: ListRequestAmino;
}
/** ListRequest is the Query/List request type. */
export interface ListRequestSDKType {
  message_name: string;
  index: string;
  prefix?: ListRequest_PrefixSDKType;
  range?: ListRequest_RangeSDKType;
  pagination?: PageRequestSDKType;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValue[];
}
export interface ListRequest_PrefixProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.Prefix";
  value: Uint8Array;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_PrefixAmino {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values?: IndexValueAmino[];
}
export interface ListRequest_PrefixAminoMsg {
  type: "cosmos-sdk/Prefix";
  value: ListRequest_PrefixAmino;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_PrefixSDKType {
  values: IndexValueSDKType[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValue[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValue[];
}
export interface ListRequest_RangeProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.Range";
  value: Uint8Array;
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_RangeAmino {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start?: IndexValueAmino[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end?: IndexValueAmino[];
}
export interface ListRequest_RangeAminoMsg {
  type: "cosmos-sdk/Range";
  value: ListRequest_RangeAmino;
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_RangeSDKType {
  start: IndexValueSDKType[];
  end: IndexValueSDKType[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
  /** results are the results of the query. */
  results: Any[];
  /** pagination is the pagination response. */
  pagination?: PageResponse;
}
export interface ListResponseProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse";
  value: Uint8Array;
}
/** ListResponse is the Query/List response type. */
export interface ListResponseAmino {
  /** results are the results of the query. */
  results?: AnyAmino[];
  /** pagination is the pagination response. */
  pagination?: PageResponseAmino;
}
export interface ListResponseAminoMsg {
  type: "cosmos-sdk/ListResponse";
  value: ListResponseAmino;
}
/** ListResponse is the Query/List response type. */
export interface ListResponseSDKType {
  results: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: bigint;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: bigint;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: Date;
  /** duration specifies a value for a duration index field. */
  duration?: Duration;
}
export interface IndexValueProtoMsg {
  typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue";
  value: Uint8Array;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValueAmino {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: string;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: string;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: string;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: string;
  /** duration specifies a value for a duration index field. */
  duration?: DurationAmino;
}
export interface IndexValueAminoMsg {
  type: "cosmos-sdk/IndexValue";
  value: IndexValueAmino;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValueSDKType {
  uint?: bigint;
  int?: bigint;
  str?: string;
  bytes?: Uint8Array;
  enum?: string;
  bool?: boolean;
  timestamp?: Date;
  duration?: DurationSDKType;
}
function createBaseGetRequest(): GetRequest {
  return {
    messageName: "",
    index: "",
    values: []
  };
}
export const GetRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
  aminoType: "cosmos-sdk/GetRequest",
  is(o: any): o is GetRequest {
    return o && (o.$typeUrl === GetRequest.typeUrl || typeof o.messageName === "string" && typeof o.index === "string" && Array.isArray(o.values) && (!o.values.length || IndexValue.is(o.values[0])));
  },
  isSDK(o: any): o is GetRequestSDKType {
    return o && (o.$typeUrl === GetRequest.typeUrl || typeof o.message_name === "string" && typeof o.index === "string" && Array.isArray(o.values) && (!o.values.length || IndexValue.isSDK(o.values[0])));
  },
  isAmino(o: any): o is GetRequestAmino {
    return o && (o.$typeUrl === GetRequest.typeUrl || typeof o.message_name === "string" && typeof o.index === "string" && Array.isArray(o.values) && (!o.values.length || IndexValue.isAmino(o.values[0])));
  },
  encode(message: GetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetRequest>): GetRequest {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetRequestAmino): GetRequest {
    const message = createBaseGetRequest();
    if (object.message_name !== undefined && object.message_name !== null) {
      message.messageName = object.message_name;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    message.values = object.values?.map(e => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetRequest): GetRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName === "" ? undefined : message.messageName;
    obj.index = message.index === "" ? undefined : message.index;
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.values = message.values;
    }
    return obj;
  },
  fromAminoMsg(object: GetRequestAminoMsg): GetRequest {
    return GetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetRequest): GetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetRequest",
      value: GetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetRequestProtoMsg): GetRequest {
    return GetRequest.decode(message.value);
  },
  toProto(message: GetRequest): Uint8Array {
    return GetRequest.encode(message).finish();
  },
  toProtoMsg(message: GetRequest): GetRequestProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
      value: GetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetRequest.typeUrl, GetRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetRequest.aminoType, GetRequest.typeUrl);
function createBaseGetResponse(): GetResponse {
  return {
    result: undefined
  };
}
export const GetResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
  aminoType: "cosmos-sdk/GetResponse",
  is(o: any): o is GetResponse {
    return o && o.$typeUrl === GetResponse.typeUrl;
  },
  isSDK(o: any): o is GetResponseSDKType {
    return o && o.$typeUrl === GetResponse.typeUrl;
  },
  isAmino(o: any): o is GetResponseAmino {
    return o && o.$typeUrl === GetResponse.typeUrl;
  },
  encode(message: GetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetResponse>): GetResponse {
    const message = createBaseGetResponse();
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: GetResponseAmino): GetResponse {
    const message = createBaseGetResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = Any.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: GetResponse): GetResponseAmino {
    const obj: any = {};
    obj.result = message.result ? Any.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetResponseAminoMsg): GetResponse {
    return GetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetResponse): GetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetResponse",
      value: GetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetResponseProtoMsg): GetResponse {
    return GetResponse.decode(message.value);
  },
  toProto(message: GetResponse): Uint8Array {
    return GetResponse.encode(message).finish();
  },
  toProtoMsg(message: GetResponse): GetResponseProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
      value: GetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetResponse.typeUrl, GetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetResponse.aminoType, GetResponse.typeUrl);
function createBaseListRequest(): ListRequest {
  return {
    messageName: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: undefined
  };
}
export const ListRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
  aminoType: "cosmos-sdk/ListRequest",
  is(o: any): o is ListRequest {
    return o && (o.$typeUrl === ListRequest.typeUrl || typeof o.messageName === "string" && typeof o.index === "string");
  },
  isSDK(o: any): o is ListRequestSDKType {
    return o && (o.$typeUrl === ListRequest.typeUrl || typeof o.message_name === "string" && typeof o.index === "string");
  },
  isAmino(o: any): o is ListRequestAmino {
    return o && (o.$typeUrl === ListRequest.typeUrl || typeof o.message_name === "string" && typeof o.index === "string");
  },
  encode(message: ListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : undefined;
    message.range = object.range !== undefined && object.range !== null ? ListRequest_Range.fromPartial(object.range) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ListRequestAmino): ListRequest {
    const message = createBaseListRequest();
    if (object.message_name !== undefined && object.message_name !== null) {
      message.messageName = object.message_name;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = ListRequest_Prefix.fromAmino(object.prefix);
    }
    if (object.range !== undefined && object.range !== null) {
      message.range = ListRequest_Range.fromAmino(object.range);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ListRequest): ListRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName === "" ? undefined : message.messageName;
    obj.index = message.index === "" ? undefined : message.index;
    obj.prefix = message.prefix ? ListRequest_Prefix.toAmino(message.prefix) : undefined;
    obj.range = message.range ? ListRequest_Range.toAmino(message.range) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListRequestAminoMsg): ListRequest {
    return ListRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest): ListRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListRequest",
      value: ListRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequestProtoMsg): ListRequest {
    return ListRequest.decode(message.value);
  },
  toProto(message: ListRequest): Uint8Array {
    return ListRequest.encode(message).finish();
  },
  toProtoMsg(message: ListRequest): ListRequestProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
      value: ListRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListRequest.typeUrl, ListRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListRequest.aminoType, ListRequest.typeUrl);
function createBaseListRequest_Prefix(): ListRequest_Prefix {
  return {
    values: []
  };
}
export const ListRequest_Prefix = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
  aminoType: "cosmos-sdk/Prefix",
  is(o: any): o is ListRequest_Prefix {
    return o && (o.$typeUrl === ListRequest_Prefix.typeUrl || Array.isArray(o.values) && (!o.values.length || IndexValue.is(o.values[0])));
  },
  isSDK(o: any): o is ListRequest_PrefixSDKType {
    return o && (o.$typeUrl === ListRequest_Prefix.typeUrl || Array.isArray(o.values) && (!o.values.length || IndexValue.isSDK(o.values[0])));
  },
  isAmino(o: any): o is ListRequest_PrefixAmino {
    return o && (o.$typeUrl === ListRequest_Prefix.typeUrl || Array.isArray(o.values) && (!o.values.length || IndexValue.isAmino(o.values[0])));
  },
  encode(message: ListRequest_Prefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListRequest_Prefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListRequest_Prefix>): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_PrefixAmino): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map(e => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListRequest_Prefix): ListRequest_PrefixAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.values = message.values;
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_PrefixAminoMsg): ListRequest_Prefix {
    return ListRequest_Prefix.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Prefix): ListRequest_PrefixAminoMsg {
    return {
      type: "cosmos-sdk/Prefix",
      value: ListRequest_Prefix.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequest_PrefixProtoMsg): ListRequest_Prefix {
    return ListRequest_Prefix.decode(message.value);
  },
  toProto(message: ListRequest_Prefix): Uint8Array {
    return ListRequest_Prefix.encode(message).finish();
  },
  toProtoMsg(message: ListRequest_Prefix): ListRequest_PrefixProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
      value: ListRequest_Prefix.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListRequest_Prefix.typeUrl, ListRequest_Prefix);
GlobalDecoderRegistry.registerAminoProtoMapping(ListRequest_Prefix.aminoType, ListRequest_Prefix.typeUrl);
function createBaseListRequest_Range(): ListRequest_Range {
  return {
    start: [],
    end: []
  };
}
export const ListRequest_Range = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Range",
  aminoType: "cosmos-sdk/Range",
  is(o: any): o is ListRequest_Range {
    return o && (o.$typeUrl === ListRequest_Range.typeUrl || Array.isArray(o.start) && (!o.start.length || IndexValue.is(o.start[0])) && Array.isArray(o.end) && (!o.end.length || IndexValue.is(o.end[0])));
  },
  isSDK(o: any): o is ListRequest_RangeSDKType {
    return o && (o.$typeUrl === ListRequest_Range.typeUrl || Array.isArray(o.start) && (!o.start.length || IndexValue.isSDK(o.start[0])) && Array.isArray(o.end) && (!o.end.length || IndexValue.isSDK(o.end[0])));
  },
  isAmino(o: any): o is ListRequest_RangeAmino {
    return o && (o.$typeUrl === ListRequest_Range.typeUrl || Array.isArray(o.start) && (!o.start.length || IndexValue.isAmino(o.start[0])) && Array.isArray(o.end) && (!o.end.length || IndexValue.isAmino(o.end[0])));
  },
  encode(message: ListRequest_Range, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.start) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListRequest_Range {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListRequest_Range>): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map(e => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_RangeAmino): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map(e => IndexValue.fromAmino(e)) || [];
    message.end = object.end?.map(e => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListRequest_Range): ListRequest_RangeAmino {
    const obj: any = {};
    if (message.start) {
      obj.start = message.start.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.start = message.start;
    }
    if (message.end) {
      obj.end = message.end.map(e => e ? IndexValue.toAmino(e) : undefined);
    } else {
      obj.end = message.end;
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_RangeAminoMsg): ListRequest_Range {
    return ListRequest_Range.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Range): ListRequest_RangeAminoMsg {
    return {
      type: "cosmos-sdk/Range",
      value: ListRequest_Range.toAmino(message)
    };
  },
  fromProtoMsg(message: ListRequest_RangeProtoMsg): ListRequest_Range {
    return ListRequest_Range.decode(message.value);
  },
  toProto(message: ListRequest_Range): Uint8Array {
    return ListRequest_Range.encode(message).finish();
  },
  toProtoMsg(message: ListRequest_Range): ListRequest_RangeProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Range",
      value: ListRequest_Range.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListRequest_Range.typeUrl, ListRequest_Range);
GlobalDecoderRegistry.registerAminoProtoMapping(ListRequest_Range.aminoType, ListRequest_Range.typeUrl);
function createBaseListResponse(): ListResponse {
  return {
    results: [],
    pagination: undefined
  };
}
export const ListResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
  aminoType: "cosmos-sdk/ListResponse",
  is(o: any): o is ListResponse {
    return o && (o.$typeUrl === ListResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || Any.is(o.results[0])));
  },
  isSDK(o: any): o is ListResponseSDKType {
    return o && (o.$typeUrl === ListResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || Any.isSDK(o.results[0])));
  },
  isAmino(o: any): o is ListResponseAmino {
    return o && (o.$typeUrl === ListResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || Any.isAmino(o.results[0])));
  },
  encode(message: ListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: ListResponseAmino): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map(e => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ListResponse): ListResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListResponseAminoMsg): ListResponse {
    return ListResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListResponse): ListResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListResponse",
      value: ListResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListResponseProtoMsg): ListResponse {
    return ListResponse.decode(message.value);
  },
  toProto(message: ListResponse): Uint8Array {
    return ListResponse.encode(message).finish();
  },
  toProtoMsg(message: ListResponse): ListResponseProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
      value: ListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListResponse.typeUrl, ListResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListResponse.aminoType, ListResponse.typeUrl);
function createBaseIndexValue(): IndexValue {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined
  };
}
export const IndexValue = {
  typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
  aminoType: "cosmos-sdk/IndexValue",
  is(o: any): o is IndexValue {
    return o && o.$typeUrl === IndexValue.typeUrl;
  },
  isSDK(o: any): o is IndexValueSDKType {
    return o && o.$typeUrl === IndexValue.typeUrl;
  },
  isAmino(o: any): o is IndexValueAmino {
    return o && o.$typeUrl === IndexValue.typeUrl;
  },
  encode(message: IndexValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IndexValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = reader.uint64();
          break;
        case 2:
          message.int = reader.int64();
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IndexValue>): IndexValue {
    const message = createBaseIndexValue();
    message.uint = object.uint !== undefined && object.uint !== null ? BigInt(object.uint.toString()) : undefined;
    message.int = object.int !== undefined && object.int !== null ? BigInt(object.int.toString()) : undefined;
    message.str = object.str ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.enum = object.enum ?? undefined;
    message.bool = object.bool ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: IndexValueAmino): IndexValue {
    const message = createBaseIndexValue();
    if (object.uint !== undefined && object.uint !== null) {
      message.uint = BigInt(object.uint);
    }
    if (object.int !== undefined && object.int !== null) {
      message.int = BigInt(object.int);
    }
    if (object.str !== undefined && object.str !== null) {
      message.str = object.str;
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = bytesFromBase64(object.bytes);
    }
    if (object.enum !== undefined && object.enum !== null) {
      message.enum = object.enum;
    }
    if (object.bool !== undefined && object.bool !== null) {
      message.bool = object.bool;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: IndexValue): IndexValueAmino {
    const obj: any = {};
    obj.uint = message.uint !== BigInt(0) ? message.uint.toString() : undefined;
    obj.int = message.int !== BigInt(0) ? message.int.toString() : undefined;
    obj.str = message.str === null ? undefined : message.str;
    obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
    obj.enum = message.enum === null ? undefined : message.enum;
    obj.bool = message.bool === null ? undefined : message.bool;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexValueAminoMsg): IndexValue {
    return IndexValue.fromAmino(object.value);
  },
  toAminoMsg(message: IndexValue): IndexValueAminoMsg {
    return {
      type: "cosmos-sdk/IndexValue",
      value: IndexValue.toAmino(message)
    };
  },
  fromProtoMsg(message: IndexValueProtoMsg): IndexValue {
    return IndexValue.decode(message.value);
  },
  toProto(message: IndexValue): Uint8Array {
    return IndexValue.encode(message).finish();
  },
  toProtoMsg(message: IndexValue): IndexValueProtoMsg {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
      value: IndexValue.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IndexValue.typeUrl, IndexValue);
GlobalDecoderRegistry.registerAminoProtoMapping(IndexValue.aminoType, IndexValue.typeUrl);