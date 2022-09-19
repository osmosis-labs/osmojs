import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
export interface MsgCreateStableswapPool {
  sender: string;
  poolParams: PoolParams;
  initialPoolLiquidity: Coin[];
  futurePoolGovernor: string;
}
export interface MsgCreateStableswapPoolSDKType {
  sender: string;
  poolParams: PoolParamsSDKType;
  initial_pool_liquidity: CoinSDKType[];
  future_pool_governor: string;
}
export interface MsgCreateStableswapPoolResponse {
  poolId: Long;
}
export interface MsgCreateStableswapPoolResponseSDKType {
  pool_id: Long;
}
export interface MsgStableSwapAdjustScalingFactors {
  /**
   * Sender must be the pool's scaling_factor_governor in order for the tx to
   * succeed
   */
  sender: string;
  poolId: Long;
  scalingFactors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsSDKType {
  /**
   * Sender must be the pool's scaling_factor_governor in order for the tx to
   * succeed
   */
  sender: string;
  pool_id: Long;
  scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {}

function createBaseMsgCreateStableswapPool(): MsgCreateStableswapPool {
  return {
    sender: "",
    poolParams: undefined,
    initialPoolLiquidity: [],
    futurePoolGovernor: ""
  };
}

export const MsgCreateStableswapPool = {
  encode(message: MsgCreateStableswapPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.initialPoolLiquidity) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.futurePoolGovernor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateStableswapPool>): MsgCreateStableswapPool {
    const message = createBaseMsgCreateStableswapPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  },

  fromSDK(object: MsgCreateStableswapPoolSDKType): MsgCreateStableswapPool {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      poolParams: isSet(object.poolParams) ? PoolParams.fromSDK(object.poolParams) : undefined,
      initialPoolLiquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      futurePoolGovernor: isSet(object.future_pool_governor) ? object.future_pool_governor : undefined
    };
  },

  toSDK(message: MsgCreateStableswapPool): MsgCreateStableswapPoolSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toSDK(message.poolParams) : undefined);

    if (message.initialPoolLiquidity) {
      obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_pool_liquidity = [];
    }

    message.futurePoolGovernor !== undefined && (obj.future_pool_governor = message.futurePoolGovernor);
    return obj;
  }

};

function createBaseMsgCreateStableswapPoolResponse(): MsgCreateStableswapPoolResponse {
  return {
    poolId: Long.UZERO
  };
}

export const MsgCreateStableswapPoolResponse = {
  encode(message: MsgCreateStableswapPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPoolResponse();

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

  fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse {
    const message = createBaseMsgCreateStableswapPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgCreateStableswapPoolResponseSDKType): MsgCreateStableswapPoolResponse {
    return {
      poolId: isSet(object.pool_id) ? object.pool_id : undefined
    };
  },

  toSDK(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseSDKType {
    const obj: any = {};
    message.poolId !== undefined && (obj.pool_id = message.poolId);
    return obj;
  }

};

function createBaseMsgStableSwapAdjustScalingFactors(): MsgStableSwapAdjustScalingFactors {
  return {
    sender: "",
    poolId: Long.UZERO,
    scalingFactors: []
  };
}

export const MsgStableSwapAdjustScalingFactors = {
  encode(message: MsgStableSwapAdjustScalingFactors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    writer.uint32(26).fork();

    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactors();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.scalingFactors.push((reader.uint64() as Long));
            }
          } else {
            message.scalingFactors.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors {
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.scalingFactors = object.scalingFactors?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromSDK(object: MsgStableSwapAdjustScalingFactorsSDKType): MsgStableSwapAdjustScalingFactors {
    return {
      sender: isSet(object.sender) ? object.sender : undefined,
      poolId: isSet(object.pool_id) ? object.pool_id : undefined,
      scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsSDKType {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.pool_id = message.poolId);

    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e);
    } else {
      obj.scaling_factors = [];
    }

    return obj;
  }

};

function createBaseMsgStableSwapAdjustScalingFactorsResponse(): MsgStableSwapAdjustScalingFactorsResponse {
  return {};
}

export const MsgStableSwapAdjustScalingFactorsResponse = {
  encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse {
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  },

  fromSDK(_: MsgStableSwapAdjustScalingFactorsResponseSDKType): MsgStableSwapAdjustScalingFactorsResponse {
    return {};
  },

  toSDK(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseSDKType {
    const obj: any = {};
    return obj;
  }

};