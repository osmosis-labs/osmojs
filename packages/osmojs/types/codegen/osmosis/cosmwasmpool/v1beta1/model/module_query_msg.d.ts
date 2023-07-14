import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenIn {
    /** token_in is the token to be sent to the pool. */
    tokenIn: Coin;
    /** token_out_denom is the token denom to be received from the pool. */
    tokenOutDenom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
export interface CalcOutAmtGivenInProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn";
    value: Uint8Array;
}
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenInAmino {
    /** token_in is the token to be sent to the pool. */
    token_in?: CoinAmino;
    /** token_out_denom is the token denom to be received from the pool. */
    token_out_denom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swap_fee: string;
}
export interface CalcOutAmtGivenInAminoMsg {
    type: "osmosis/cosmwasmpool/calc-out-amt-given-in";
    value: CalcOutAmtGivenInAmino;
}
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenInSDKType {
    token_in: CoinSDKType;
    token_out_denom: string;
    swap_fee: string;
}
export interface CalcOutAmtGivenInRequest {
    /**
     * calc_out_amt_given_in is the structure containing all the request
     * information for this query.
     */
    calcOutAmtGivenIn: CalcOutAmtGivenIn;
}
export interface CalcOutAmtGivenInRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest";
    value: Uint8Array;
}
export interface CalcOutAmtGivenInRequestAmino {
    /**
     * calc_out_amt_given_in is the structure containing all the request
     * information for this query.
     */
    calc_out_amt_given_in?: CalcOutAmtGivenInAmino;
}
export interface CalcOutAmtGivenInRequestAminoMsg {
    type: "osmosis/cosmwasmpool/calc-out-amt-given-in-request";
    value: CalcOutAmtGivenInRequestAmino;
}
export interface CalcOutAmtGivenInRequestSDKType {
    calc_out_amt_given_in: CalcOutAmtGivenInSDKType;
}
export interface CalcOutAmtGivenInResponse {
    /** token_out is the token out computed from this swap estimate call. */
    tokenOut: Coin;
}
export interface CalcOutAmtGivenInResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse";
    value: Uint8Array;
}
export interface CalcOutAmtGivenInResponseAmino {
    /** token_out is the token out computed from this swap estimate call. */
    token_out?: CoinAmino;
}
export interface CalcOutAmtGivenInResponseAminoMsg {
    type: "osmosis/cosmwasmpool/calc-out-amt-given-in-response";
    value: CalcOutAmtGivenInResponseAmino;
}
export interface CalcOutAmtGivenInResponseSDKType {
    token_out: CoinSDKType;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOut {
    /** token_out is the token out to be receoved from the pool. */
    tokenOut: Coin;
    /** token_in_denom is the token denom to be sentt to the pool. */
    tokenInDenom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
export interface CalcInAmtGivenOutProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut";
    value: Uint8Array;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOutAmino {
    /** token_out is the token out to be receoved from the pool. */
    token_out?: CoinAmino;
    /** token_in_denom is the token denom to be sentt to the pool. */
    token_in_denom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swap_fee: string;
}
export interface CalcInAmtGivenOutAminoMsg {
    type: "osmosis/cosmwasmpool/calc-in-amt-given-out";
    value: CalcInAmtGivenOutAmino;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOutSDKType {
    token_out: CoinSDKType;
    token_in_denom: string;
    swap_fee: string;
}
export interface CalcInAmtGivenOutRequest {
    /**
     * calc_in_amt_given_out is the structure containing all the request
     * information for this query.
     */
    calcInAmtGivenOut: CalcInAmtGivenOut;
}
export interface CalcInAmtGivenOutRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest";
    value: Uint8Array;
}
export interface CalcInAmtGivenOutRequestAmino {
    /**
     * calc_in_amt_given_out is the structure containing all the request
     * information for this query.
     */
    calc_in_amt_given_out?: CalcInAmtGivenOutAmino;
}
export interface CalcInAmtGivenOutRequestAminoMsg {
    type: "osmosis/cosmwasmpool/calc-in-amt-given-out-request";
    value: CalcInAmtGivenOutRequestAmino;
}
export interface CalcInAmtGivenOutRequestSDKType {
    calc_in_amt_given_out: CalcInAmtGivenOutSDKType;
}
export interface CalcInAmtGivenOutResponse {
    /** token_in is the token in computed from this swap estimate call. */
    tokenIn: Coin;
}
export interface CalcInAmtGivenOutResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse";
    value: Uint8Array;
}
export interface CalcInAmtGivenOutResponseAmino {
    /** token_in is the token in computed from this swap estimate call. */
    token_in?: CoinAmino;
}
export interface CalcInAmtGivenOutResponseAminoMsg {
    type: "osmosis/cosmwasmpool/calc-in-amt-given-out-response";
    value: CalcInAmtGivenOutResponseAmino;
}
export interface CalcInAmtGivenOutResponseSDKType {
    token_in: CoinSDKType;
}
export declare const CalcOutAmtGivenIn: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenIn;
    fromPartial(object: Partial<CalcOutAmtGivenIn>): CalcOutAmtGivenIn;
    fromAmino(object: CalcOutAmtGivenInAmino): CalcOutAmtGivenIn;
    toAmino(message: CalcOutAmtGivenIn): CalcOutAmtGivenInAmino;
    fromAminoMsg(object: CalcOutAmtGivenInAminoMsg): CalcOutAmtGivenIn;
    toAminoMsg(message: CalcOutAmtGivenIn): CalcOutAmtGivenInAminoMsg;
    fromProtoMsg(message: CalcOutAmtGivenInProtoMsg): CalcOutAmtGivenIn;
    toProto(message: CalcOutAmtGivenIn): Uint8Array;
    toProtoMsg(message: CalcOutAmtGivenIn): CalcOutAmtGivenInProtoMsg;
};
export declare const CalcOutAmtGivenInRequest: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInRequest;
    fromPartial(object: Partial<CalcOutAmtGivenInRequest>): CalcOutAmtGivenInRequest;
    fromAmino(object: CalcOutAmtGivenInRequestAmino): CalcOutAmtGivenInRequest;
    toAmino(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestAmino;
    fromAminoMsg(object: CalcOutAmtGivenInRequestAminoMsg): CalcOutAmtGivenInRequest;
    toAminoMsg(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestAminoMsg;
    fromProtoMsg(message: CalcOutAmtGivenInRequestProtoMsg): CalcOutAmtGivenInRequest;
    toProto(message: CalcOutAmtGivenInRequest): Uint8Array;
    toProtoMsg(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestProtoMsg;
};
export declare const CalcOutAmtGivenInResponse: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInResponse;
    fromPartial(object: Partial<CalcOutAmtGivenInResponse>): CalcOutAmtGivenInResponse;
    fromAmino(object: CalcOutAmtGivenInResponseAmino): CalcOutAmtGivenInResponse;
    toAmino(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseAmino;
    fromAminoMsg(object: CalcOutAmtGivenInResponseAminoMsg): CalcOutAmtGivenInResponse;
    toAminoMsg(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseAminoMsg;
    fromProtoMsg(message: CalcOutAmtGivenInResponseProtoMsg): CalcOutAmtGivenInResponse;
    toProto(message: CalcOutAmtGivenInResponse): Uint8Array;
    toProtoMsg(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseProtoMsg;
};
export declare const CalcInAmtGivenOut: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOut;
    fromPartial(object: Partial<CalcInAmtGivenOut>): CalcInAmtGivenOut;
    fromAmino(object: CalcInAmtGivenOutAmino): CalcInAmtGivenOut;
    toAmino(message: CalcInAmtGivenOut): CalcInAmtGivenOutAmino;
    fromAminoMsg(object: CalcInAmtGivenOutAminoMsg): CalcInAmtGivenOut;
    toAminoMsg(message: CalcInAmtGivenOut): CalcInAmtGivenOutAminoMsg;
    fromProtoMsg(message: CalcInAmtGivenOutProtoMsg): CalcInAmtGivenOut;
    toProto(message: CalcInAmtGivenOut): Uint8Array;
    toProtoMsg(message: CalcInAmtGivenOut): CalcInAmtGivenOutProtoMsg;
};
export declare const CalcInAmtGivenOutRequest: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutRequest;
    fromPartial(object: Partial<CalcInAmtGivenOutRequest>): CalcInAmtGivenOutRequest;
    fromAmino(object: CalcInAmtGivenOutRequestAmino): CalcInAmtGivenOutRequest;
    toAmino(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestAmino;
    fromAminoMsg(object: CalcInAmtGivenOutRequestAminoMsg): CalcInAmtGivenOutRequest;
    toAminoMsg(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestAminoMsg;
    fromProtoMsg(message: CalcInAmtGivenOutRequestProtoMsg): CalcInAmtGivenOutRequest;
    toProto(message: CalcInAmtGivenOutRequest): Uint8Array;
    toProtoMsg(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestProtoMsg;
};
export declare const CalcInAmtGivenOutResponse: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutResponse;
    fromPartial(object: Partial<CalcInAmtGivenOutResponse>): CalcInAmtGivenOutResponse;
    fromAmino(object: CalcInAmtGivenOutResponseAmino): CalcInAmtGivenOutResponse;
    toAmino(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseAmino;
    fromAminoMsg(object: CalcInAmtGivenOutResponseAminoMsg): CalcInAmtGivenOutResponse;
    toAminoMsg(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseAminoMsg;
    fromProtoMsg(message: CalcInAmtGivenOutResponseProtoMsg): CalcInAmtGivenOutResponse;
    toProto(message: CalcInAmtGivenOutResponse): Uint8Array;
    toProtoMsg(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseProtoMsg;
};
