import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/tokenfactory/query-params-request";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
    denom: string;
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
    creator: string;
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
    denoms: string[];
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
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
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDenomAuthorityMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
    fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest;
    toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest;
    toAminoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest;
    toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
    fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse;
    toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse;
    toAminoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse;
    toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg;
};
export declare const QueryDenomsFromCreatorRequest: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
    fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest;
    toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest;
    toAminoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest;
    toProto(message: QueryDenomsFromCreatorRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg;
};
export declare const QueryDenomsFromCreatorResponse: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
    fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse;
    toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino;
    fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse;
    toAminoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse;
    toProto(message: QueryDenomsFromCreatorResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg;
};
