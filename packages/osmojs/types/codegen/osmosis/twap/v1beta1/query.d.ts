import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArithmeticTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
    endTime?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
    value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
    end_time?: Date;
}
export interface ArithmeticTwapRequestAminoMsg {
    type: "osmosis/twap/arithmetic-twap-request";
    value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
    end_time?: Date;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
    value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapResponseAminoMsg {
    type: "osmosis/twap/arithmetic-twap-response";
    value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
    value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
    type: "osmosis/twap/arithmetic-twap-to-now-request";
    value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
    value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
    type: "osmosis/twap/arithmetic-twap-to-now-response";
    value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface GeometricTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
    endTime?: Date;
}
export interface GeometricTwapRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapRequest";
    value: Uint8Array;
}
export interface GeometricTwapRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
    end_time?: Date;
}
export interface GeometricTwapRequestAminoMsg {
    type: "osmosis/twap/geometric-twap-request";
    value: GeometricTwapRequestAmino;
}
export interface GeometricTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
    end_time?: Date;
}
export interface GeometricTwapResponse {
    geometricTwap: string;
}
export interface GeometricTwapResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapResponse";
    value: Uint8Array;
}
export interface GeometricTwapResponseAmino {
    geometric_twap: string;
}
export interface GeometricTwapResponseAminoMsg {
    type: "osmosis/twap/geometric-twap-response";
    value: GeometricTwapResponseAmino;
}
export interface GeometricTwapResponseSDKType {
    geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
}
export interface GeometricTwapToNowRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowRequest";
    value: Uint8Array;
}
export interface GeometricTwapToNowRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
}
export interface GeometricTwapToNowRequestAminoMsg {
    type: "osmosis/twap/geometric-twap-to-now-request";
    value: GeometricTwapToNowRequestAmino;
}
export interface GeometricTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
}
export interface GeometricTwapToNowResponse {
    geometricTwap: string;
}
export interface GeometricTwapToNowResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowResponse";
    value: Uint8Array;
}
export interface GeometricTwapToNowResponseAmino {
    geometric_twap: string;
}
export interface GeometricTwapToNowResponseAminoMsg {
    type: "osmosis/twap/geometric-twap-to-now-response";
    value: GeometricTwapToNowResponseAmino;
}
export interface GeometricTwapToNowResponseSDKType {
    geometric_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest";
    value: Uint8Array;
}
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/twap/params-request";
    value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/twap/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
    fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest;
    toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino;
    fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest;
    toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg;
    fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest;
    toProto(message: ArithmeticTwapRequest): Uint8Array;
    toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg;
};
export declare const ArithmeticTwapResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
    fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse;
    toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino;
    fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse;
    toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg;
    fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse;
    toProto(message: ArithmeticTwapResponse): Uint8Array;
    toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg;
};
export declare const ArithmeticTwapToNowRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
    fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest;
    toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino;
    fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest;
    toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg;
    fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest;
    toProto(message: ArithmeticTwapToNowRequest): Uint8Array;
    toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg;
};
export declare const ArithmeticTwapToNowResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
    fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse;
    toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino;
    fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse;
    toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg;
    fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse;
    toProto(message: ArithmeticTwapToNowResponse): Uint8Array;
    toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg;
};
export declare const GeometricTwapRequest: {
    typeUrl: string;
    encode(message: GeometricTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapRequest;
    fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest;
    fromAmino(object: GeometricTwapRequestAmino): GeometricTwapRequest;
    toAmino(message: GeometricTwapRequest): GeometricTwapRequestAmino;
    fromAminoMsg(object: GeometricTwapRequestAminoMsg): GeometricTwapRequest;
    toAminoMsg(message: GeometricTwapRequest): GeometricTwapRequestAminoMsg;
    fromProtoMsg(message: GeometricTwapRequestProtoMsg): GeometricTwapRequest;
    toProto(message: GeometricTwapRequest): Uint8Array;
    toProtoMsg(message: GeometricTwapRequest): GeometricTwapRequestProtoMsg;
};
export declare const GeometricTwapResponse: {
    typeUrl: string;
    encode(message: GeometricTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapResponse;
    fromPartial(object: Partial<GeometricTwapResponse>): GeometricTwapResponse;
    fromAmino(object: GeometricTwapResponseAmino): GeometricTwapResponse;
    toAmino(message: GeometricTwapResponse): GeometricTwapResponseAmino;
    fromAminoMsg(object: GeometricTwapResponseAminoMsg): GeometricTwapResponse;
    toAminoMsg(message: GeometricTwapResponse): GeometricTwapResponseAminoMsg;
    fromProtoMsg(message: GeometricTwapResponseProtoMsg): GeometricTwapResponse;
    toProto(message: GeometricTwapResponse): Uint8Array;
    toProtoMsg(message: GeometricTwapResponse): GeometricTwapResponseProtoMsg;
};
export declare const GeometricTwapToNowRequest: {
    typeUrl: string;
    encode(message: GeometricTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapToNowRequest;
    fromPartial(object: Partial<GeometricTwapToNowRequest>): GeometricTwapToNowRequest;
    fromAmino(object: GeometricTwapToNowRequestAmino): GeometricTwapToNowRequest;
    toAmino(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestAmino;
    fromAminoMsg(object: GeometricTwapToNowRequestAminoMsg): GeometricTwapToNowRequest;
    toAminoMsg(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestAminoMsg;
    fromProtoMsg(message: GeometricTwapToNowRequestProtoMsg): GeometricTwapToNowRequest;
    toProto(message: GeometricTwapToNowRequest): Uint8Array;
    toProtoMsg(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestProtoMsg;
};
export declare const GeometricTwapToNowResponse: {
    typeUrl: string;
    encode(message: GeometricTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapToNowResponse;
    fromPartial(object: Partial<GeometricTwapToNowResponse>): GeometricTwapToNowResponse;
    fromAmino(object: GeometricTwapToNowResponseAmino): GeometricTwapToNowResponse;
    toAmino(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseAmino;
    fromAminoMsg(object: GeometricTwapToNowResponseAminoMsg): GeometricTwapToNowResponse;
    toAminoMsg(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseAminoMsg;
    fromProtoMsg(message: GeometricTwapToNowResponseProtoMsg): GeometricTwapToNowResponse;
    toProto(message: GeometricTwapToNowResponse): Uint8Array;
    toProtoMsg(message: GeometricTwapToNowResponse): GeometricTwapToNowResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
