import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface SwapAmountInRoute {
  poolId: Long;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
  pool_id: Long;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  poolId: Long;
  tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: Long;
  token_in_denom: string;
}

function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: Long.UZERO,
    tokenOutDenom: ""
  };
}

export const SwapAmountInRoute = {
  encode(message: SwapAmountInRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenOutDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  }

};

function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: Long.UZERO,
    tokenInDenom: ""
  };
}

export const SwapAmountOutRoute = {
  encode(message: SwapAmountOutRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenInDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  }

};