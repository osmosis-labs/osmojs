import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Pool {
  address: string;
  id: Long;
  /** Amount of total liquidity */

  liquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: string;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */

  tickSpacing: Long;
  precisionFactorAtPriceOne: string;
  /** swap_fee is the ratio that is charged on the amount of token in. */

  swapFee: string;
}
export interface PoolSDKType {
  address: string;
  id: Long;
  /** Amount of total liquidity */

  liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: string;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */

  tick_spacing: Long;
  precision_factor_at_price_one: string;
  /** swap_fee is the ratio that is charged on the amount of token in. */

  swap_fee: string;
}

function createBasePool(): Pool {
  return {
    address: "",
    id: Long.UZERO,
    liquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: "",
    tickSpacing: Long.UZERO,
    precisionFactorAtPriceOne: "",
    swapFee: ""
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }

    if (message.token0 !== "") {
      writer.uint32(34).string(message.token0);
    }

    if (message.token1 !== "") {
      writer.uint32(42).string(message.token1);
    }

    if (message.currentSqrtPrice !== "") {
      writer.uint32(50).string(message.currentSqrtPrice);
    }

    if (message.currentTick !== "") {
      writer.uint32(58).string(message.currentTick);
    }

    if (!message.tickSpacing.isZero()) {
      writer.uint32(64).uint64(message.tickSpacing);
    }

    if (message.precisionFactorAtPriceOne !== "") {
      writer.uint32(74).string(message.precisionFactorAtPriceOne);
    }

    if (message.swapFee !== "") {
      writer.uint32(82).string(message.swapFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.liquidity = reader.string();
          break;

        case 4:
          message.token0 = reader.string();
          break;

        case 5:
          message.token1 = reader.string();
          break;

        case 6:
          message.currentSqrtPrice = reader.string();
          break;

        case 7:
          message.currentTick = reader.string();
          break;

        case 8:
          message.tickSpacing = (reader.uint64() as Long);
          break;

        case 9:
          message.precisionFactorAtPriceOne = reader.string();
          break;

        case 10:
          message.swapFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.liquidity = object.liquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? Long.fromValue(object.tickSpacing) : Long.UZERO;
    message.precisionFactorAtPriceOne = object.precisionFactorAtPriceOne ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }

};