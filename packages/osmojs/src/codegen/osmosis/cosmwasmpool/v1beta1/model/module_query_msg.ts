import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
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
  token_out_denom?: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swap_fee?: string;
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
  token_in_denom?: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swap_fee?: string;
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
function createBaseCalcOutAmtGivenIn(): CalcOutAmtGivenIn {
  return {
    tokenIn: Coin.fromPartial({}),
    tokenOutDenom: "",
    swapFee: ""
  };
}
export const CalcOutAmtGivenIn = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn",
  aminoType: "osmosis/cosmwasmpool/calc-out-amt-given-in",
  is(o: any): o is CalcOutAmtGivenIn {
    return o && (o.$typeUrl === CalcOutAmtGivenIn.typeUrl || Coin.is(o.tokenIn) && typeof o.tokenOutDenom === "string" && typeof o.swapFee === "string");
  },
  isSDK(o: any): o is CalcOutAmtGivenInSDKType {
    return o && (o.$typeUrl === CalcOutAmtGivenIn.typeUrl || Coin.isSDK(o.token_in) && typeof o.token_out_denom === "string" && typeof o.swap_fee === "string");
  },
  isAmino(o: any): o is CalcOutAmtGivenInAmino {
    return o && (o.$typeUrl === CalcOutAmtGivenIn.typeUrl || Coin.isAmino(o.token_in) && typeof o.token_out_denom === "string" && typeof o.swap_fee === "string");
  },
  encode(message: CalcOutAmtGivenIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        case 3:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenIn {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  toJSON(message: CalcOutAmtGivenIn): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial(object: Partial<CalcOutAmtGivenIn>): CalcOutAmtGivenIn {
    const message = createBaseCalcOutAmtGivenIn();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: CalcOutAmtGivenInAmino): CalcOutAmtGivenIn {
    const message = createBaseCalcOutAmtGivenIn();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    return message;
  },
  toAmino(message: CalcOutAmtGivenIn): CalcOutAmtGivenInAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.token_out_denom = message.tokenOutDenom;
    obj.swap_fee = message.swapFee;
    return obj;
  },
  fromAminoMsg(object: CalcOutAmtGivenInAminoMsg): CalcOutAmtGivenIn {
    return CalcOutAmtGivenIn.fromAmino(object.value);
  },
  toAminoMsg(message: CalcOutAmtGivenIn): CalcOutAmtGivenInAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-out-amt-given-in",
      value: CalcOutAmtGivenIn.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcOutAmtGivenInProtoMsg): CalcOutAmtGivenIn {
    return CalcOutAmtGivenIn.decode(message.value);
  },
  toProto(message: CalcOutAmtGivenIn): Uint8Array {
    return CalcOutAmtGivenIn.encode(message).finish();
  },
  toProtoMsg(message: CalcOutAmtGivenIn): CalcOutAmtGivenInProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn",
      value: CalcOutAmtGivenIn.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcOutAmtGivenIn.typeUrl, CalcOutAmtGivenIn);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenIn.aminoType, CalcOutAmtGivenIn.typeUrl);
function createBaseCalcOutAmtGivenInRequest(): CalcOutAmtGivenInRequest {
  return {
    calcOutAmtGivenIn: CalcOutAmtGivenIn.fromPartial({})
  };
}
export const CalcOutAmtGivenInRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest",
  aminoType: "osmosis/cosmwasmpool/calc-out-amt-given-in-request",
  is(o: any): o is CalcOutAmtGivenInRequest {
    return o && (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl || CalcOutAmtGivenIn.is(o.calcOutAmtGivenIn));
  },
  isSDK(o: any): o is CalcOutAmtGivenInRequestSDKType {
    return o && (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl || CalcOutAmtGivenIn.isSDK(o.calc_out_amt_given_in));
  },
  isAmino(o: any): o is CalcOutAmtGivenInRequestAmino {
    return o && (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl || CalcOutAmtGivenIn.isAmino(o.calc_out_amt_given_in));
  },
  encode(message: CalcOutAmtGivenInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calcOutAmtGivenIn !== undefined) {
      CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calcOutAmtGivenIn = CalcOutAmtGivenIn.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenInRequest {
    return {
      calcOutAmtGivenIn: isSet(object.calcOutAmtGivenIn) ? CalcOutAmtGivenIn.fromJSON(object.calcOutAmtGivenIn) : undefined
    };
  },
  toJSON(message: CalcOutAmtGivenInRequest): unknown {
    const obj: any = {};
    message.calcOutAmtGivenIn !== undefined && (obj.calcOutAmtGivenIn = message.calcOutAmtGivenIn ? CalcOutAmtGivenIn.toJSON(message.calcOutAmtGivenIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CalcOutAmtGivenInRequest>): CalcOutAmtGivenInRequest {
    const message = createBaseCalcOutAmtGivenInRequest();
    message.calcOutAmtGivenIn = object.calcOutAmtGivenIn !== undefined && object.calcOutAmtGivenIn !== null ? CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn) : undefined;
    return message;
  },
  fromAmino(object: CalcOutAmtGivenInRequestAmino): CalcOutAmtGivenInRequest {
    const message = createBaseCalcOutAmtGivenInRequest();
    if (object.calc_out_amt_given_in !== undefined && object.calc_out_amt_given_in !== null) {
      message.calcOutAmtGivenIn = CalcOutAmtGivenIn.fromAmino(object.calc_out_amt_given_in);
    }
    return message;
  },
  toAmino(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestAmino {
    const obj: any = {};
    obj.calc_out_amt_given_in = message.calcOutAmtGivenIn ? CalcOutAmtGivenIn.toAmino(message.calcOutAmtGivenIn) : undefined;
    return obj;
  },
  fromAminoMsg(object: CalcOutAmtGivenInRequestAminoMsg): CalcOutAmtGivenInRequest {
    return CalcOutAmtGivenInRequest.fromAmino(object.value);
  },
  toAminoMsg(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-out-amt-given-in-request",
      value: CalcOutAmtGivenInRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcOutAmtGivenInRequestProtoMsg): CalcOutAmtGivenInRequest {
    return CalcOutAmtGivenInRequest.decode(message.value);
  },
  toProto(message: CalcOutAmtGivenInRequest): Uint8Array {
    return CalcOutAmtGivenInRequest.encode(message).finish();
  },
  toProtoMsg(message: CalcOutAmtGivenInRequest): CalcOutAmtGivenInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest",
      value: CalcOutAmtGivenInRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcOutAmtGivenInRequest.typeUrl, CalcOutAmtGivenInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenInRequest.aminoType, CalcOutAmtGivenInRequest.typeUrl);
function createBaseCalcOutAmtGivenInResponse(): CalcOutAmtGivenInResponse {
  return {
    tokenOut: Coin.fromPartial({})
  };
}
export const CalcOutAmtGivenInResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse",
  aminoType: "osmosis/cosmwasmpool/calc-out-amt-given-in-response",
  is(o: any): o is CalcOutAmtGivenInResponse {
    return o && (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl || Coin.is(o.tokenOut));
  },
  isSDK(o: any): o is CalcOutAmtGivenInResponseSDKType {
    return o && (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl || Coin.isSDK(o.token_out));
  },
  isAmino(o: any): o is CalcOutAmtGivenInResponseAmino {
    return o && (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl || Coin.isAmino(o.token_out));
  },
  encode(message: CalcOutAmtGivenInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenInResponse {
    return {
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined
    };
  },
  toJSON(message: CalcOutAmtGivenInResponse): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CalcOutAmtGivenInResponse>): CalcOutAmtGivenInResponse {
    const message = createBaseCalcOutAmtGivenInResponse();
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  },
  fromAmino(object: CalcOutAmtGivenInResponseAmino): CalcOutAmtGivenInResponse {
    const message = createBaseCalcOutAmtGivenInResponse();
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    return message;
  },
  toAmino(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseAmino {
    const obj: any = {};
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    return obj;
  },
  fromAminoMsg(object: CalcOutAmtGivenInResponseAminoMsg): CalcOutAmtGivenInResponse {
    return CalcOutAmtGivenInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-out-amt-given-in-response",
      value: CalcOutAmtGivenInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcOutAmtGivenInResponseProtoMsg): CalcOutAmtGivenInResponse {
    return CalcOutAmtGivenInResponse.decode(message.value);
  },
  toProto(message: CalcOutAmtGivenInResponse): Uint8Array {
    return CalcOutAmtGivenInResponse.encode(message).finish();
  },
  toProtoMsg(message: CalcOutAmtGivenInResponse): CalcOutAmtGivenInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse",
      value: CalcOutAmtGivenInResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcOutAmtGivenInResponse.typeUrl, CalcOutAmtGivenInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenInResponse.aminoType, CalcOutAmtGivenInResponse.typeUrl);
function createBaseCalcInAmtGivenOut(): CalcInAmtGivenOut {
  return {
    tokenOut: Coin.fromPartial({}),
    tokenInDenom: "",
    swapFee: ""
  };
}
export const CalcInAmtGivenOut = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut",
  aminoType: "osmosis/cosmwasmpool/calc-in-amt-given-out",
  is(o: any): o is CalcInAmtGivenOut {
    return o && (o.$typeUrl === CalcInAmtGivenOut.typeUrl || Coin.is(o.tokenOut) && typeof o.tokenInDenom === "string" && typeof o.swapFee === "string");
  },
  isSDK(o: any): o is CalcInAmtGivenOutSDKType {
    return o && (o.$typeUrl === CalcInAmtGivenOut.typeUrl || Coin.isSDK(o.token_out) && typeof o.token_in_denom === "string" && typeof o.swap_fee === "string");
  },
  isAmino(o: any): o is CalcInAmtGivenOutAmino {
    return o && (o.$typeUrl === CalcInAmtGivenOut.typeUrl || Coin.isAmino(o.token_out) && typeof o.token_in_denom === "string" && typeof o.swap_fee === "string");
  },
  encode(message: CalcInAmtGivenOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOut {
    return {
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  toJSON(message: CalcInAmtGivenOut): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial(object: Partial<CalcInAmtGivenOut>): CalcInAmtGivenOut {
    const message = createBaseCalcInAmtGivenOut();
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: CalcInAmtGivenOutAmino): CalcInAmtGivenOut {
    const message = createBaseCalcInAmtGivenOut();
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    return message;
  },
  toAmino(message: CalcInAmtGivenOut): CalcInAmtGivenOutAmino {
    const obj: any = {};
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.token_in_denom = message.tokenInDenom;
    obj.swap_fee = message.swapFee;
    return obj;
  },
  fromAminoMsg(object: CalcInAmtGivenOutAminoMsg): CalcInAmtGivenOut {
    return CalcInAmtGivenOut.fromAmino(object.value);
  },
  toAminoMsg(message: CalcInAmtGivenOut): CalcInAmtGivenOutAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-in-amt-given-out",
      value: CalcInAmtGivenOut.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcInAmtGivenOutProtoMsg): CalcInAmtGivenOut {
    return CalcInAmtGivenOut.decode(message.value);
  },
  toProto(message: CalcInAmtGivenOut): Uint8Array {
    return CalcInAmtGivenOut.encode(message).finish();
  },
  toProtoMsg(message: CalcInAmtGivenOut): CalcInAmtGivenOutProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut",
      value: CalcInAmtGivenOut.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcInAmtGivenOut.typeUrl, CalcInAmtGivenOut);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOut.aminoType, CalcInAmtGivenOut.typeUrl);
function createBaseCalcInAmtGivenOutRequest(): CalcInAmtGivenOutRequest {
  return {
    calcInAmtGivenOut: CalcInAmtGivenOut.fromPartial({})
  };
}
export const CalcInAmtGivenOutRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest",
  aminoType: "osmosis/cosmwasmpool/calc-in-amt-given-out-request",
  is(o: any): o is CalcInAmtGivenOutRequest {
    return o && (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl || CalcInAmtGivenOut.is(o.calcInAmtGivenOut));
  },
  isSDK(o: any): o is CalcInAmtGivenOutRequestSDKType {
    return o && (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl || CalcInAmtGivenOut.isSDK(o.calc_in_amt_given_out));
  },
  isAmino(o: any): o is CalcInAmtGivenOutRequestAmino {
    return o && (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl || CalcInAmtGivenOut.isAmino(o.calc_in_amt_given_out));
  },
  encode(message: CalcInAmtGivenOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calcInAmtGivenOut !== undefined) {
      CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calcInAmtGivenOut = CalcInAmtGivenOut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOutRequest {
    return {
      calcInAmtGivenOut: isSet(object.calcInAmtGivenOut) ? CalcInAmtGivenOut.fromJSON(object.calcInAmtGivenOut) : undefined
    };
  },
  toJSON(message: CalcInAmtGivenOutRequest): unknown {
    const obj: any = {};
    message.calcInAmtGivenOut !== undefined && (obj.calcInAmtGivenOut = message.calcInAmtGivenOut ? CalcInAmtGivenOut.toJSON(message.calcInAmtGivenOut) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CalcInAmtGivenOutRequest>): CalcInAmtGivenOutRequest {
    const message = createBaseCalcInAmtGivenOutRequest();
    message.calcInAmtGivenOut = object.calcInAmtGivenOut !== undefined && object.calcInAmtGivenOut !== null ? CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut) : undefined;
    return message;
  },
  fromAmino(object: CalcInAmtGivenOutRequestAmino): CalcInAmtGivenOutRequest {
    const message = createBaseCalcInAmtGivenOutRequest();
    if (object.calc_in_amt_given_out !== undefined && object.calc_in_amt_given_out !== null) {
      message.calcInAmtGivenOut = CalcInAmtGivenOut.fromAmino(object.calc_in_amt_given_out);
    }
    return message;
  },
  toAmino(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestAmino {
    const obj: any = {};
    obj.calc_in_amt_given_out = message.calcInAmtGivenOut ? CalcInAmtGivenOut.toAmino(message.calcInAmtGivenOut) : undefined;
    return obj;
  },
  fromAminoMsg(object: CalcInAmtGivenOutRequestAminoMsg): CalcInAmtGivenOutRequest {
    return CalcInAmtGivenOutRequest.fromAmino(object.value);
  },
  toAminoMsg(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-in-amt-given-out-request",
      value: CalcInAmtGivenOutRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcInAmtGivenOutRequestProtoMsg): CalcInAmtGivenOutRequest {
    return CalcInAmtGivenOutRequest.decode(message.value);
  },
  toProto(message: CalcInAmtGivenOutRequest): Uint8Array {
    return CalcInAmtGivenOutRequest.encode(message).finish();
  },
  toProtoMsg(message: CalcInAmtGivenOutRequest): CalcInAmtGivenOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest",
      value: CalcInAmtGivenOutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcInAmtGivenOutRequest.typeUrl, CalcInAmtGivenOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOutRequest.aminoType, CalcInAmtGivenOutRequest.typeUrl);
function createBaseCalcInAmtGivenOutResponse(): CalcInAmtGivenOutResponse {
  return {
    tokenIn: Coin.fromPartial({})
  };
}
export const CalcInAmtGivenOutResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse",
  aminoType: "osmosis/cosmwasmpool/calc-in-amt-given-out-response",
  is(o: any): o is CalcInAmtGivenOutResponse {
    return o && (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl || Coin.is(o.tokenIn));
  },
  isSDK(o: any): o is CalcInAmtGivenOutResponseSDKType {
    return o && (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl || Coin.isSDK(o.token_in));
  },
  isAmino(o: any): o is CalcInAmtGivenOutResponseAmino {
    return o && (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl || Coin.isAmino(o.token_in));
  },
  encode(message: CalcInAmtGivenOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOutResponse {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined
    };
  },
  toJSON(message: CalcInAmtGivenOutResponse): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CalcInAmtGivenOutResponse>): CalcInAmtGivenOutResponse {
    const message = createBaseCalcInAmtGivenOutResponse();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    return message;
  },
  fromAmino(object: CalcInAmtGivenOutResponseAmino): CalcInAmtGivenOutResponse {
    const message = createBaseCalcInAmtGivenOutResponse();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    return message;
  },
  toAmino(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    return obj;
  },
  fromAminoMsg(object: CalcInAmtGivenOutResponseAminoMsg): CalcInAmtGivenOutResponse {
    return CalcInAmtGivenOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/calc-in-amt-given-out-response",
      value: CalcInAmtGivenOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CalcInAmtGivenOutResponseProtoMsg): CalcInAmtGivenOutResponse {
    return CalcInAmtGivenOutResponse.decode(message.value);
  },
  toProto(message: CalcInAmtGivenOutResponse): Uint8Array {
    return CalcInAmtGivenOutResponse.encode(message).finish();
  },
  toProtoMsg(message: CalcInAmtGivenOutResponse): CalcInAmtGivenOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse",
      value: CalcInAmtGivenOutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CalcInAmtGivenOutResponse.typeUrl, CalcInAmtGivenOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOutResponse.aminoType, CalcInAmtGivenOutResponse.typeUrl);