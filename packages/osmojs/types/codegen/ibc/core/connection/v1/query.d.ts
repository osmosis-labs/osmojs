import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, Params, ParamsAmino, ParamsSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connectionId: string;
}
export interface QueryConnectionRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
    /** connection unique identifier */
    connection_id: string;
}
export interface QueryConnectionRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionRequest";
    value: QueryConnectionRequestAmino;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection?: ConnectionEnd;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryConnectionResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
    /** connection associated with the request identifier */
    connection?: ConnectionEndAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryConnectionResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionResponse";
    value: QueryConnectionResponseAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseSDKType {
    connection?: ConnectionEndSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest;
}
export interface QueryConnectionsRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryConnectionsRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionsRequest";
    value: QueryConnectionsRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
export interface QueryConnectionsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnectionAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
export interface QueryConnectionsResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionsResponse";
    value: QueryConnectionsResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseSDKType {
    connections: IdentifiedConnectionSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    clientId: string;
}
export interface QueryClientConnectionsRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest";
    value: Uint8Array;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
    /** client identifier associated with a connection */
    client_id: string;
}
export interface QueryClientConnectionsRequestAminoMsg {
    type: "cosmos-sdk/QueryClientConnectionsRequest";
    value: QueryClientConnectionsRequestAmino;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestSDKType {
    client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proofHeight?: Height;
}
export interface QueryClientConnectionsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse";
    value: Uint8Array;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
    /** slice of all the connection paths associated with a client. */
    connection_paths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proof_height?: HeightAmino;
}
export interface QueryClientConnectionsResponseAminoMsg {
    type: "cosmos-sdk/QueryClientConnectionsResponse";
    value: QueryClientConnectionsResponseAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseSDKType {
    connection_paths: string[];
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connectionId: string;
}
export interface QueryConnectionClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
    /** connection identifier */
    connection_id: string;
}
export interface QueryConnectionClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionClientStateRequest";
    value: QueryConnectionClientStateRequestAmino;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryConnectionClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientStateAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryConnectionClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionClientStateResponse";
    value: QueryConnectionClientStateResponseAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseSDKType {
    identified_client_state?: IdentifiedClientStateSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connectionId: string;
    revisionNumber: Long;
    revisionHeight: Long;
}
export interface QueryConnectionConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
    /** connection identifier */
    connection_id: string;
    revision_number: string;
    revision_height: string;
}
export interface QueryConnectionConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionConsensusStateRequest";
    value: QueryConnectionConsensusStateRequestAmino;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestSDKType {
    connection_id: string;
    revision_number: Long;
    revision_height: Long;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryConnectionConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
    /** consensus state associated with the channel */
    consensus_state?: AnyAmino;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryConnectionConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionConsensusStateResponse";
    value: QueryConnectionConsensusStateResponseAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseSDKType {
    consensus_state?: AnySDKType;
    client_id: string;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequest {
}
export interface QueryConnectionParamsRequestProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest";
    value: Uint8Array;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequestAmino {
}
export interface QueryConnectionParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionParamsRequest";
    value: QueryConnectionParamsRequestAmino;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequestSDKType {
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryConnectionParamsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse";
    value: Uint8Array;
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryConnectionParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionParamsResponse";
    value: QueryConnectionParamsResponseAmino;
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryConnectionRequest: {
    typeUrl: string;
    encode(message: QueryConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest;
    fromPartial(object: Partial<QueryConnectionRequest>): QueryConnectionRequest;
    fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest;
    toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino;
    fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest;
    toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest;
    toProto(message: QueryConnectionRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg;
};
export declare const QueryConnectionResponse: {
    typeUrl: string;
    encode(message: QueryConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse;
    fromPartial(object: Partial<QueryConnectionResponse>): QueryConnectionResponse;
    fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse;
    toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino;
    fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse;
    toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse;
    toProto(message: QueryConnectionResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg;
};
export declare const QueryConnectionsRequest: {
    typeUrl: string;
    encode(message: QueryConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest;
    fromPartial(object: Partial<QueryConnectionsRequest>): QueryConnectionsRequest;
    fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest;
    toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino;
    fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest;
    toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest;
    toProto(message: QueryConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg;
};
export declare const QueryConnectionsResponse: {
    typeUrl: string;
    encode(message: QueryConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse;
    fromPartial(object: Partial<QueryConnectionsResponse>): QueryConnectionsResponse;
    fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse;
    toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino;
    fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse;
    toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse;
    toProto(message: QueryConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg;
};
export declare const QueryClientConnectionsRequest: {
    typeUrl: string;
    encode(message: QueryClientConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest;
    fromPartial(object: Partial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest;
    fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest;
    toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino;
    fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest;
    toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest;
    toProto(message: QueryClientConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg;
};
export declare const QueryClientConnectionsResponse: {
    typeUrl: string;
    encode(message: QueryClientConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse;
    fromPartial(object: Partial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse;
    fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse;
    toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino;
    fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse;
    toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse;
    toProto(message: QueryClientConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg;
};
export declare const QueryConnectionClientStateRequest: {
    typeUrl: string;
    encode(message: QueryConnectionClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest;
    fromPartial(object: Partial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest;
    fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest;
    toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino;
    fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest;
    toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest;
    toProto(message: QueryConnectionClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg;
};
export declare const QueryConnectionClientStateResponse: {
    typeUrl: string;
    encode(message: QueryConnectionClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse;
    fromPartial(object: Partial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse;
    fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse;
    toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino;
    fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse;
    toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse;
    toProto(message: QueryConnectionClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg;
};
export declare const QueryConnectionConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryConnectionConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest;
    fromPartial(object: Partial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest;
    fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest;
    toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest;
    toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest;
    toProto(message: QueryConnectionConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg;
};
export declare const QueryConnectionConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryConnectionConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse;
    fromPartial(object: Partial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse;
    fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse;
    toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse;
    toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse;
    toProto(message: QueryConnectionConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg;
};
export declare const QueryConnectionParamsRequest: {
    typeUrl: string;
    encode(_: QueryConnectionParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionParamsRequest;
    fromPartial(_: Partial<QueryConnectionParamsRequest>): QueryConnectionParamsRequest;
    fromAmino(_: QueryConnectionParamsRequestAmino): QueryConnectionParamsRequest;
    toAmino(_: QueryConnectionParamsRequest): QueryConnectionParamsRequestAmino;
    fromAminoMsg(object: QueryConnectionParamsRequestAminoMsg): QueryConnectionParamsRequest;
    toAminoMsg(message: QueryConnectionParamsRequest): QueryConnectionParamsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionParamsRequestProtoMsg): QueryConnectionParamsRequest;
    toProto(message: QueryConnectionParamsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionParamsRequest): QueryConnectionParamsRequestProtoMsg;
};
export declare const QueryConnectionParamsResponse: {
    typeUrl: string;
    encode(message: QueryConnectionParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionParamsResponse;
    fromPartial(object: Partial<QueryConnectionParamsResponse>): QueryConnectionParamsResponse;
    fromAmino(object: QueryConnectionParamsResponseAmino): QueryConnectionParamsResponse;
    toAmino(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseAmino;
    fromAminoMsg(object: QueryConnectionParamsResponseAminoMsg): QueryConnectionParamsResponse;
    toAminoMsg(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionParamsResponseProtoMsg): QueryConnectionParamsResponse;
    toProto(message: QueryConnectionParamsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseProtoMsg;
};
