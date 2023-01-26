import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { Coin, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
/** ===================== MsgCreatePool */

export interface MsgCreateBalancerPool {
  sender: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
}
/** ===================== MsgCreatePool */

export interface MsgCreateBalancerPoolSDKType {
  sender: string;
  pool_params?: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
  future_pool_governor: string;
}
/** Returns the poolID */

export interface MsgCreateBalancerPoolResponse {
  poolId: Long;
}
/** Returns the poolID */

export interface MsgCreateBalancerPoolResponseSDKType {
  pool_id: Long;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */

export interface MsgMigrateSharesToFullRangeConcentratedPosition {
  sender: string;
  sharesToMigrate?: Coin;
  /** temporary field, eventually gamm pool should be linked to cl pool */

  poolIdEntering: Long;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */

export interface MsgMigrateSharesToFullRangeConcentratedPositionSDKType {
  sender: string;
  shares_to_migrate?: CoinSDKType;
  /** temporary field, eventually gamm pool should be linked to cl pool */

  pool_id_entering: Long;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponse {
  amount0: string;
  amount1: string;
  liquidityCreated: string;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
  amount0: string;
  amount1: string;
  liquidity_created: string;
}

function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: undefined,
    poolAssets: [],
    futurePoolGovernor: ""
  };
}

export const MsgCreateBalancerPool = {
  encode(message: MsgCreateBalancerPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();

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
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
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

  fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  }

};

function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    poolId: Long.UZERO
  };
}

export const MsgCreateBalancerPoolResponse = {
  encode(message: MsgCreateBalancerPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();

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

  fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgMigrateSharesToFullRangeConcentratedPosition(): MsgMigrateSharesToFullRangeConcentratedPosition {
  return {
    sender: "",
    sharesToMigrate: undefined,
    poolIdEntering: Long.UZERO
  };
}

export const MsgMigrateSharesToFullRangeConcentratedPosition = {
  encode(message: MsgMigrateSharesToFullRangeConcentratedPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.sharesToMigrate !== undefined) {
      Coin.encode(message.sharesToMigrate, writer.uint32(18).fork()).ldelim();
    }

    if (!message.poolIdEntering.isZero()) {
      writer.uint32(24).uint64(message.poolIdEntering);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateSharesToFullRangeConcentratedPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.sharesToMigrate = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.poolIdEntering = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPosition>): MsgMigrateSharesToFullRangeConcentratedPosition {
    const message = createBaseMsgMigrateSharesToFullRangeConcentratedPosition();
    message.sender = object.sender ?? "";
    message.sharesToMigrate = object.sharesToMigrate !== undefined && object.sharesToMigrate !== null ? Coin.fromPartial(object.sharesToMigrate) : undefined;
    message.poolIdEntering = object.poolIdEntering !== undefined && object.poolIdEntering !== null ? Long.fromValue(object.poolIdEntering) : Long.UZERO;
    return message;
  }

};

function createBaseMsgMigrateSharesToFullRangeConcentratedPositionResponse(): MsgMigrateSharesToFullRangeConcentratedPositionResponse {
  return {
    amount0: "",
    amount1: "",
    liquidityCreated: ""
  };
}

export const MsgMigrateSharesToFullRangeConcentratedPositionResponse = {
  encode(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }

    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }

    if (message.liquidityCreated !== "") {
      writer.uint32(26).string(message.liquidityCreated);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateSharesToFullRangeConcentratedPositionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;

        case 2:
          message.amount1 = reader.string();
          break;

        case 3:
          message.liquidityCreated = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPositionResponse>): MsgMigrateSharesToFullRangeConcentratedPositionResponse {
    const message = createBaseMsgMigrateSharesToFullRangeConcentratedPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    return message;
  }

};