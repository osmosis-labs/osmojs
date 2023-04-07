import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomTraceRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest";
    value: Uint8Array;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestAmino {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomTraceRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceRequest";
    value: QueryDenomTraceRequestAmino;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestSDKType {
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace?: DenomTrace;
}
export interface QueryDenomTraceResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse";
    value: Uint8Array;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseAmino {
    /** denom_trace returns the requested denomination trace information. */
    denom_trace?: DenomTraceAmino;
}
export interface QueryDenomTraceResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceResponse";
    value: QueryDenomTraceResponseAmino;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseSDKType {
    denom_trace?: DenomTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDenomTracesRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomTracesRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesRequest";
    value: QueryDenomTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDenomTracesResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseAmino {
    /** denom_traces returns all denominations trace information. */
    denom_traces: DenomTraceAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomTracesResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesResponse";
    value: QueryDenomTracesResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseSDKType {
    denom_traces: DenomTraceSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryDenomTraceRequest: {
    encode(message: QueryDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromPartial(object: Partial<QueryDenomTraceRequest>): QueryDenomTraceRequest;
    fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest;
    toAmino(message: QueryDenomTraceRequest): QueryDenomTraceRequestAmino;
    fromAminoMsg(object: QueryDenomTraceRequestAminoMsg): QueryDenomTraceRequest;
    toAminoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTraceRequestProtoMsg): QueryDenomTraceRequest;
    toProto(message: QueryDenomTraceRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg;
};
export declare const QueryDenomTraceResponse: {
    encode(message: QueryDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromPartial(object: Partial<QueryDenomTraceResponse>): QueryDenomTraceResponse;
    fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse;
    toAmino(message: QueryDenomTraceResponse): QueryDenomTraceResponseAmino;
    fromAminoMsg(object: QueryDenomTraceResponseAminoMsg): QueryDenomTraceResponse;
    toAminoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTraceResponseProtoMsg): QueryDenomTraceResponse;
    toProto(message: QueryDenomTraceResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg;
};
export declare const QueryDenomTracesRequest: {
    encode(message: QueryDenomTracesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromPartial(object: Partial<QueryDenomTracesRequest>): QueryDenomTracesRequest;
    fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest;
    toAmino(message: QueryDenomTracesRequest): QueryDenomTracesRequestAmino;
    fromAminoMsg(object: QueryDenomTracesRequestAminoMsg): QueryDenomTracesRequest;
    toAminoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTracesRequestProtoMsg): QueryDenomTracesRequest;
    toProto(message: QueryDenomTracesRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg;
};
export declare const QueryDenomTracesResponse: {
    encode(message: QueryDenomTracesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromPartial(object: Partial<QueryDenomTracesResponse>): QueryDenomTracesResponse;
    fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse;
    toAmino(message: QueryDenomTracesResponse): QueryDenomTracesResponseAmino;
    fromAminoMsg(object: QueryDenomTracesResponseAminoMsg): QueryDenomTracesResponse;
    toAminoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTracesResponseProtoMsg): QueryDenomTracesResponse;
    toProto(message: QueryDenomTracesResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
