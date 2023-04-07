import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, BaseAccount, BaseAccountProtoMsg, BaseAccountSDKType, ModuleAccount, ModuleAccountProtoMsg, ModuleAccountSDKType } from "./auth";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: (BaseAccount & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
    value: Uint8Array;
}
export declare type QueryAccountsResponseEncoded = Omit<QueryAccountsResponse, "accounts"> & {
    /** accounts are the existing accounts */
    accounts: (BaseAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
    /** accounts are the existing accounts */
    accounts: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
    accounts: (BaseAccountSDKType | AnySDKType)[];
    pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
    value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: (BaseAccount & Any) | undefined;
}
export interface QueryAccountResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
    value: Uint8Array;
}
export declare type QueryAccountResponseEncoded = Omit<QueryAccountResponse, "account"> & {
    /** account defines the account of the corresponding address. */
    account?: BaseAccountProtoMsg | AnyProtoMsg | undefined;
};
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
    /** account defines the account of the corresponding address. */
    account?: AnyAmino;
}
export interface QueryAccountResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountResponse";
    value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    account?: BaseAccountSDKType | AnySDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
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
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
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
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {
}
export interface QueryModuleAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
    value: Uint8Array;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestAmino {
}
export interface QueryModuleAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsRequest";
    value: QueryModuleAccountsRequestAmino;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
    accounts: (ModuleAccount & Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
    value: Uint8Array;
}
export declare type QueryModuleAccountsResponseEncoded = Omit<QueryModuleAccountsResponse, "accounts"> & {
    accounts: (ModuleAccountProtoMsg | AnyProtoMsg)[];
};
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseAmino {
    accounts: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsResponse";
    value: QueryModuleAccountsResponseAmino;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
    accounts: (ModuleAccountSDKType | AnySDKType)[];
}
export declare const QueryAccountsRequest: {
    typeUrl: string;
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryAccountRequest: {
    typeUrl: string;
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const QueryAccountResponse: {
    typeUrl: string;
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
    fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse;
    toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg;
    fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse;
    toProto(message: QueryAccountResponse): Uint8Array;
    toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg;
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
export declare const QueryModuleAccountsRequest: {
    typeUrl: string;
    encode(_: QueryModuleAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
    fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest;
    toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest;
    toProto(message: QueryModuleAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg;
};
export declare const QueryModuleAccountsResponse: {
    typeUrl: string;
    encode(message: QueryModuleAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
    fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse;
    toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse;
    toProto(message: QueryModuleAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg;
};
export declare const AccountI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => BaseAccount | Any;
export declare const AccountI_FromAmino: (content: AnyAmino) => Any;
export declare const AccountI_ToAmino: (content: Any) => AnyAmino;
export declare const ModuleAccountI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => ModuleAccount | Any;
export declare const ModuleAccountI_FromAmino: (content: AnyAmino) => Any;
export declare const ModuleAccountI_ToAmino: (content: Any) => AnyAmino;
