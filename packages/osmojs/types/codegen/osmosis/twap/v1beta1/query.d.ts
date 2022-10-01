import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ArithmeticTwapRequest {
    poolId?: Long;
    baseAsset?: string;
    quoteAsset?: string;
    startTime?: Date;
    endTime?: Date;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id?: Long;
    base_asset?: string;
    quote_asset?: string;
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
    poolId?: Long;
    baseAsset?: string;
    quoteAsset?: string;
    startTime?: Date;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id?: Long;
    base_asset?: string;
    quote_asset?: string;
    start_time?: Date;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromPartial(object: DeepPartial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
};
export declare const ArithmeticTwapResponse: {
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromPartial(object: DeepPartial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
};
export declare const ArithmeticTwapToNowRequest: {
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromPartial(object: DeepPartial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
};
export declare const ArithmeticTwapToNowResponse: {
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromPartial(object: DeepPartial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse;
};
