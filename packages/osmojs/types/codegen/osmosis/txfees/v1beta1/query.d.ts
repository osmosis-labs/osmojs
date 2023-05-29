import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest";
    value: Uint8Array;
}
export interface QueryFeeTokensRequestAmino {
}
export interface QueryFeeTokensRequestAminoMsg {
    type: "osmosis/txfees/query-fee-tokens-request";
    value: QueryFeeTokensRequestAmino;
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse";
    value: Uint8Array;
}
export interface QueryFeeTokensResponseAmino {
    fee_tokens: FeeTokenAmino[];
}
export interface QueryFeeTokensResponseAminoMsg {
    type: "osmosis/txfees/query-fee-tokens-response";
    value: QueryFeeTokensResponseAmino;
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
export interface QueryDenomSpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
    value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
    denom: string;
}
export interface QueryDenomSpotPriceRequestAminoMsg {
    type: "osmosis/txfees/query-denom-spot-price-request";
    value: QueryDenomSpotPriceRequestAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: Long;
    spotPrice: string;
}
export interface QueryDenomSpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
    value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
    poolID: string;
    spot_price: string;
}
export interface QueryDenomSpotPriceResponseAminoMsg {
    type: "osmosis/txfees/query-denom-spot-price-response";
    value: QueryDenomSpotPriceResponseAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
    poolID: Long;
    spot_price: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
    value: Uint8Array;
}
export interface QueryDenomPoolIdRequestAmino {
    denom: string;
}
export interface QueryDenomPoolIdRequestAminoMsg {
    type: "osmosis/txfees/query-denom-pool-id-request";
    value: QueryDenomPoolIdRequestAmino;
}
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: Long;
}
export interface QueryDenomPoolIdResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
    value: Uint8Array;
}
export interface QueryDenomPoolIdResponseAmino {
    poolID: string;
}
export interface QueryDenomPoolIdResponseAminoMsg {
    type: "osmosis/txfees/query-denom-pool-id-response";
    value: QueryDenomPoolIdResponseAmino;
}
export interface QueryDenomPoolIdResponseSDKType {
    poolID: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest";
    value: Uint8Array;
}
export interface QueryBaseDenomRequestAmino {
}
export interface QueryBaseDenomRequestAminoMsg {
    type: "osmosis/txfees/query-base-denom-request";
    value: QueryBaseDenomRequestAmino;
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse";
    value: Uint8Array;
}
export interface QueryBaseDenomResponseAmino {
    base_denom: string;
}
export interface QueryBaseDenomResponseAminoMsg {
    type: "osmosis/txfees/query-base-denom-response";
    value: QueryBaseDenomResponseAmino;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    typeUrl: string;
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromPartial(_: Partial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
    fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest;
    toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino;
    fromAminoMsg(object: QueryFeeTokensRequestAminoMsg): QueryFeeTokensRequest;
    toAminoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestAminoMsg;
    fromProtoMsg(message: QueryFeeTokensRequestProtoMsg): QueryFeeTokensRequest;
    toProto(message: QueryFeeTokensRequest): Uint8Array;
    toProtoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestProtoMsg;
};
export declare const QueryFeeTokensResponse: {
    typeUrl: string;
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromPartial(object: Partial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
    fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse;
    toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino;
    fromAminoMsg(object: QueryFeeTokensResponseAminoMsg): QueryFeeTokensResponse;
    toAminoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseAminoMsg;
    fromProtoMsg(message: QueryFeeTokensResponseProtoMsg): QueryFeeTokensResponse;
    toProto(message: QueryFeeTokensResponse): Uint8Array;
    toProtoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseProtoMsg;
};
export declare const QueryDenomSpotPriceRequest: {
    typeUrl: string;
    encode(message: QueryDenomSpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromPartial(object: Partial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
    fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest;
    toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino;
    fromAminoMsg(object: QueryDenomSpotPriceRequestAminoMsg): QueryDenomSpotPriceRequest;
    toAminoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAminoMsg;
    fromProtoMsg(message: QueryDenomSpotPriceRequestProtoMsg): QueryDenomSpotPriceRequest;
    toProto(message: QueryDenomSpotPriceRequest): Uint8Array;
    toProtoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestProtoMsg;
};
export declare const QueryDenomSpotPriceResponse: {
    typeUrl: string;
    encode(message: QueryDenomSpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponse;
    fromPartial(object: Partial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
    fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse;
    toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino;
    fromAminoMsg(object: QueryDenomSpotPriceResponseAminoMsg): QueryDenomSpotPriceResponse;
    toAminoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAminoMsg;
    fromProtoMsg(message: QueryDenomSpotPriceResponseProtoMsg): QueryDenomSpotPriceResponse;
    toProto(message: QueryDenomSpotPriceResponse): Uint8Array;
    toProtoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseProtoMsg;
};
export declare const QueryDenomPoolIdRequest: {
    typeUrl: string;
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromPartial(object: Partial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
    fromAmino(object: QueryDenomPoolIdRequestAmino): QueryDenomPoolIdRequest;
    toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAmino;
    fromAminoMsg(object: QueryDenomPoolIdRequestAminoMsg): QueryDenomPoolIdRequest;
    toAminoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAminoMsg;
    fromProtoMsg(message: QueryDenomPoolIdRequestProtoMsg): QueryDenomPoolIdRequest;
    toProto(message: QueryDenomPoolIdRequest): Uint8Array;
    toProtoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestProtoMsg;
};
export declare const QueryDenomPoolIdResponse: {
    typeUrl: string;
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromPartial(object: Partial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
    fromAmino(object: QueryDenomPoolIdResponseAmino): QueryDenomPoolIdResponse;
    toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAmino;
    fromAminoMsg(object: QueryDenomPoolIdResponseAminoMsg): QueryDenomPoolIdResponse;
    toAminoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAminoMsg;
    fromProtoMsg(message: QueryDenomPoolIdResponseProtoMsg): QueryDenomPoolIdResponse;
    toProto(message: QueryDenomPoolIdResponse): Uint8Array;
    toProtoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseProtoMsg;
};
export declare const QueryBaseDenomRequest: {
    typeUrl: string;
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromPartial(_: Partial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
    fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest;
    toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestAmino;
    fromAminoMsg(object: QueryBaseDenomRequestAminoMsg): QueryBaseDenomRequest;
    toAminoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestAminoMsg;
    fromProtoMsg(message: QueryBaseDenomRequestProtoMsg): QueryBaseDenomRequest;
    toProto(message: QueryBaseDenomRequest): Uint8Array;
    toProtoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestProtoMsg;
};
export declare const QueryBaseDenomResponse: {
    typeUrl: string;
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromPartial(object: Partial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
    fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse;
    toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino;
    fromAminoMsg(object: QueryBaseDenomResponseAminoMsg): QueryBaseDenomResponse;
    toAminoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseAminoMsg;
    fromProtoMsg(message: QueryBaseDenomResponseProtoMsg): QueryBaseDenomResponse;
    toProto(message: QueryBaseDenomResponse): Uint8Array;
    toProtoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseProtoMsg;
};
