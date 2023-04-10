import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
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
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
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
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryDenomHashRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest";
    value: Uint8Array;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequestAmino {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryDenomHashRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomHashRequest";
    value: QueryDenomHashRequestAmino;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequestSDKType {
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomHashResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse";
    value: Uint8Array;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponseAmino {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomHashResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomHashResponse";
    value: QueryDenomHashResponseAmino;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponseSDKType {
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface QueryEscrowAddressRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest";
    value: Uint8Array;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface QueryEscrowAddressRequestAminoMsg {
    type: "cosmos-sdk/QueryEscrowAddressRequest";
    value: QueryEscrowAddressRequestAmino;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
export interface QueryEscrowAddressResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse";
    value: Uint8Array;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseAmino {
    /** the escrow account address */
    escrow_address: string;
}
export interface QueryEscrowAddressResponseAminoMsg {
    type: "cosmos-sdk/QueryEscrowAddressResponse";
    value: QueryEscrowAddressResponseAmino;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseSDKType {
    escrow_address: string;
}
export declare const QueryDenomTraceRequest: {
    typeUrl: string;
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
    typeUrl: string;
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
    typeUrl: string;
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
    typeUrl: string;
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
    typeUrl: string;
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
    typeUrl: string;
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
export declare const QueryDenomHashRequest: {
    typeUrl: string;
    encode(message: QueryDenomHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashRequest;
    fromPartial(object: Partial<QueryDenomHashRequest>): QueryDenomHashRequest;
    fromAmino(object: QueryDenomHashRequestAmino): QueryDenomHashRequest;
    toAmino(message: QueryDenomHashRequest): QueryDenomHashRequestAmino;
    fromAminoMsg(object: QueryDenomHashRequestAminoMsg): QueryDenomHashRequest;
    toAminoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestAminoMsg;
    fromProtoMsg(message: QueryDenomHashRequestProtoMsg): QueryDenomHashRequest;
    toProto(message: QueryDenomHashRequest): Uint8Array;
    toProtoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestProtoMsg;
};
export declare const QueryDenomHashResponse: {
    typeUrl: string;
    encode(message: QueryDenomHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashResponse;
    fromPartial(object: Partial<QueryDenomHashResponse>): QueryDenomHashResponse;
    fromAmino(object: QueryDenomHashResponseAmino): QueryDenomHashResponse;
    toAmino(message: QueryDenomHashResponse): QueryDenomHashResponseAmino;
    fromAminoMsg(object: QueryDenomHashResponseAminoMsg): QueryDenomHashResponse;
    toAminoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseAminoMsg;
    fromProtoMsg(message: QueryDenomHashResponseProtoMsg): QueryDenomHashResponse;
    toProto(message: QueryDenomHashResponse): Uint8Array;
    toProtoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseProtoMsg;
};
export declare const QueryEscrowAddressRequest: {
    typeUrl: string;
    encode(message: QueryEscrowAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressRequest;
    fromPartial(object: Partial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
    fromAmino(object: QueryEscrowAddressRequestAmino): QueryEscrowAddressRequest;
    toAmino(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAmino;
    fromAminoMsg(object: QueryEscrowAddressRequestAminoMsg): QueryEscrowAddressRequest;
    toAminoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAminoMsg;
    fromProtoMsg(message: QueryEscrowAddressRequestProtoMsg): QueryEscrowAddressRequest;
    toProto(message: QueryEscrowAddressRequest): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestProtoMsg;
};
export declare const QueryEscrowAddressResponse: {
    typeUrl: string;
    encode(message: QueryEscrowAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressResponse;
    fromPartial(object: Partial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
    fromAmino(object: QueryEscrowAddressResponseAmino): QueryEscrowAddressResponse;
    toAmino(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAmino;
    fromAminoMsg(object: QueryEscrowAddressResponseAminoMsg): QueryEscrowAddressResponse;
    toAminoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAminoMsg;
    fromProtoMsg(message: QueryEscrowAddressResponseProtoMsg): QueryEscrowAddressResponse;
    toProto(message: QueryEscrowAddressResponse): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseProtoMsg;
};
