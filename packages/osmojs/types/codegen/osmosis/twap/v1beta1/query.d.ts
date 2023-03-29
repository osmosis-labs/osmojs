import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface ArithmeticTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
    endTime?: Date;
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
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
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
export interface GeometricTwapResponseSDKType {
    geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Date;
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
export interface GeometricTwapToNowResponseSDKType {
    geometric_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
};
export declare const ArithmeticTwapResponse: {
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
};
export declare const ArithmeticTwapToNowRequest: {
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
};
export declare const ArithmeticTwapToNowResponse: {
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
};
export declare const GeometricTwapRequest: {
    encode(message: GeometricTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapRequest;
    fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest;
};
export declare const GeometricTwapResponse: {
    encode(message: GeometricTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapResponse;
    fromPartial(object: Partial<GeometricTwapResponse>): GeometricTwapResponse;
};
export declare const GeometricTwapToNowRequest: {
    encode(message: GeometricTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapToNowRequest;
    fromPartial(object: Partial<GeometricTwapToNowRequest>): GeometricTwapToNowRequest;
};
export declare const GeometricTwapToNowResponse: {
    encode(message: GeometricTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeometricTwapToNowResponse;
    fromPartial(object: Partial<GeometricTwapToNowResponse>): GeometricTwapToNowResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
