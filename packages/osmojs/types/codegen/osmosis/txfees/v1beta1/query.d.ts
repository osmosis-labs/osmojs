import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom?: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
    denom?: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: Long;
    spotPrice: string;
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
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: Long;
}
export interface QueryDenomPoolIdResponseSDKType {
    poolID: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
    fromSDK(_: QueryFeeTokensRequestSDKType): QueryFeeTokensRequest;
    toSDK(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponseSDKType;
    fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
    fromSDK(object: QueryFeeTokensResponseSDKType): QueryFeeTokensResponse;
    toSDK(message: QueryFeeTokensResponse): QueryFeeTokensResponseSDKType;
};
export declare const QueryDenomSpotPriceRequest: {
    encode(message: QueryDenomSpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
    fromSDK(object: QueryDenomSpotPriceRequestSDKType): QueryDenomSpotPriceRequest;
    toSDK(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType;
};
export declare const QueryDenomSpotPriceResponse: {
    encode(message: QueryDenomSpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponseSDKType;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
    fromSDK(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse;
    toSDK(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
    fromSDK(object: QueryDenomPoolIdRequestSDKType): QueryDenomPoolIdRequest;
    toSDK(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponseSDKType;
    fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
    fromSDK(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse;
    toSDK(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
    fromSDK(_: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest;
    toSDK(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponseSDKType;
    fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
    fromSDK(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse;
    toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType;
};
