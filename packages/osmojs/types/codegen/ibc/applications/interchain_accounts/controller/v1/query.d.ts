import { Params, ParamsAmino, ParamsSDKType } from "./controller";
import * as _m0 from "protobufjs/minimal";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequest {
    owner: string;
    connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
    value: Uint8Array;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestAmino {
    owner: string;
    connection_id: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
    type: "cosmos-sdk/QueryInterchainAccountRequest";
    value: QueryInterchainAccountRequestAmino;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestSDKType {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponse {
    address: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
    value: Uint8Array;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseAmino {
    address: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
    type: "cosmos-sdk/QueryInterchainAccountResponse";
    value: QueryInterchainAccountResponseAmino;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseSDKType {
    address: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
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
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
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
export declare const QueryInterchainAccountRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountRequest;
    fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest;
    fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest;
    toAmino(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest;
    toAminoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAminoMsg;
    fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest;
    toProto(message: QueryInterchainAccountRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg;
};
export declare const QueryInterchainAccountResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountResponse;
    fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse;
    fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse;
    toAmino(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse;
    toAminoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAminoMsg;
    fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse;
    toProto(message: QueryInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg;
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
