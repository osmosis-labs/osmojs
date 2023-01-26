import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ===================== MsgCreateConcentratedPool */

export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: Long;
  precisionFactorAtPriceOne: string;
  swapFee: string;
}
/** ===================== MsgCreateConcentratedPool */

export interface MsgCreateConcentratedPoolSDKType {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: Long;
  precision_factor_at_price_one: string;
  swap_fee: string;
}
/** Returns a unique poolID to identify the pool with. */

export interface MsgCreateConcentratedPoolResponse {
  poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */

export interface MsgCreateConcentratedPoolResponseSDKType {
  pool_id: Long;
}

function createBaseMsgCreateConcentratedPool(): MsgCreateConcentratedPool {
  return {
    sender: "",
    denom0: "",
    denom1: "",
    tickSpacing: Long.UZERO,
    precisionFactorAtPriceOne: "",
    swapFee: ""
  };
}

export const MsgCreateConcentratedPool = {
  encode(message: MsgCreateConcentratedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }

    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }

    if (!message.tickSpacing.isZero()) {
      writer.uint32(32).uint64(message.tickSpacing);
    }

    if (message.precisionFactorAtPriceOne !== "") {
      writer.uint32(42).string(message.precisionFactorAtPriceOne);
    }

    if (message.swapFee !== "") {
      writer.uint32(74).string(message.swapFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom0 = reader.string();
          break;

        case 3:
          message.denom1 = reader.string();
          break;

        case 4:
          message.tickSpacing = (reader.uint64() as Long);
          break;

        case 5:
          message.precisionFactorAtPriceOne = reader.string();
          break;

        case 9:
          message.swapFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    message.sender = object.sender ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? Long.fromValue(object.tickSpacing) : Long.UZERO;
    message.precisionFactorAtPriceOne = object.precisionFactorAtPriceOne ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }

};

function createBaseMsgCreateConcentratedPoolResponse(): MsgCreateConcentratedPoolResponse {
  return {
    poolId: Long.UZERO
  };
}

export const MsgCreateConcentratedPoolResponse = {
  encode(message: MsgCreateConcentratedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};