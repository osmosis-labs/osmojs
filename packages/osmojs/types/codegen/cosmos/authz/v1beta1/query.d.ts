import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest";
    value: Uint8Array;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestAmino {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGrantsRequest";
    value: QueryGrantsRequestAmino;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
    pagination?: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface QueryGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse";
    value: Uint8Array;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseAmino {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGrantsResponse";
    value: QueryGrantsResponseAmino;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
    grants: GrantSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGranterGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest";
    value: Uint8Array;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestAmino {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGranterGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGranterGrantsRequest";
    value: QueryGranterGrantsRequestAmino;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestSDKType {
    granter: string;
    pagination?: PageRequestSDKType;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface QueryGranterGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse";
    value: Uint8Array;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseAmino {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGranterGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGranterGrantsResponse";
    value: QueryGranterGrantsResponseAmino;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGranteeGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
    value: Uint8Array;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestAmino {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGranteeGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGranteeGrantsRequest";
    value: QueryGranteeGrantsRequestAmino;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestSDKType {
    grantee: string;
    pagination?: PageRequestSDKType;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface QueryGranteeGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
    value: Uint8Array;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseAmino {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorizationAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGranteeGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGranteeGrantsResponse";
    value: QueryGranteeGrantsResponseAmino;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseSDKType {
    grants: GrantAuthorizationSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryGrantsRequest: {
    typeUrl: string;
    encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest;
    fromPartial(object: Partial<QueryGrantsRequest>): QueryGrantsRequest;
    fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest;
    toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino;
    fromAminoMsg(object: QueryGrantsRequestAminoMsg): QueryGrantsRequest;
    toAminoMsg(message: QueryGrantsRequest): QueryGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest;
    toProto(message: QueryGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg;
};
export declare const QueryGrantsResponse: {
    typeUrl: string;
    encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse;
    fromPartial(object: Partial<QueryGrantsResponse>): QueryGrantsResponse;
    fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse;
    toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino;
    fromAminoMsg(object: QueryGrantsResponseAminoMsg): QueryGrantsResponse;
    toAminoMsg(message: QueryGrantsResponse): QueryGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse;
    toProto(message: QueryGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg;
};
export declare const QueryGranterGrantsRequest: {
    typeUrl: string;
    encode(message: QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsRequest;
    fromPartial(object: Partial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest;
    fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest;
    toAmino(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAmino;
    fromAminoMsg(object: QueryGranterGrantsRequestAminoMsg): QueryGranterGrantsRequest;
    toAminoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg): QueryGranterGrantsRequest;
    toProto(message: QueryGranterGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg;
};
export declare const QueryGranterGrantsResponse: {
    typeUrl: string;
    encode(message: QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsResponse;
    fromPartial(object: Partial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse;
    fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse;
    toAmino(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAmino;
    fromAminoMsg(object: QueryGranterGrantsResponseAminoMsg): QueryGranterGrantsResponse;
    toAminoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg): QueryGranterGrantsResponse;
    toProto(message: QueryGranterGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg;
};
export declare const QueryGranteeGrantsRequest: {
    typeUrl: string;
    encode(message: QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsRequest;
    fromPartial(object: Partial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest;
    fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest;
    toAmino(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAmino;
    fromAminoMsg(object: QueryGranteeGrantsRequestAminoMsg): QueryGranteeGrantsRequest;
    toAminoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg): QueryGranteeGrantsRequest;
    toProto(message: QueryGranteeGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg;
};
export declare const QueryGranteeGrantsResponse: {
    typeUrl: string;
    encode(message: QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsResponse;
    fromPartial(object: Partial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse;
    fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse;
    toAmino(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAmino;
    fromAminoMsg(object: QueryGranteeGrantsResponseAminoMsg): QueryGranteeGrantsResponse;
    toAminoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg): QueryGranteeGrantsResponse;
    toProto(message: QueryGranteeGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg;
};
