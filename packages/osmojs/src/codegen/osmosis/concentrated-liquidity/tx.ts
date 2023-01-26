import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** ===================== MsgCreatePosition */

export interface MsgCreatePosition {
  poolId: Long;
  sender: string;
  lowerTick: Long;
  upperTick: Long;
  tokenDesired0?: Coin;
  tokenDesired1?: Coin;
  tokenMinAmount0: string;
  tokenMinAmount1: string;
}
/** ===================== MsgCreatePosition */

export interface MsgCreatePositionSDKType {
  pool_id: Long;
  sender: string;
  lower_tick: Long;
  upper_tick: Long;
  token_desired0?: CoinSDKType;
  token_desired1?: CoinSDKType;
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
  amount0: string;
  amount1: string;
  liquidityCreated: string;
}
export interface MsgCreatePositionResponseSDKType {
  amount0: string;
  amount1: string;
  liquidity_created: string;
}
/** ===================== MsgWithdrawPosition */

export interface MsgWithdrawPosition {
  poolId: Long;
  sender: string;
  lowerTick: Long;
  upperTick: Long;
  liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */

export interface MsgWithdrawPositionSDKType {
  pool_id: Long;
  sender: string;
  lower_tick: Long;
  upper_tick: Long;
  liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
  amount0: string;
  amount1: string;
}
export interface MsgWithdrawPositionResponseSDKType {
  amount0: string;
  amount1: string;
}
/** ===================== MsgCollectFees */

export interface MsgCollectFees {
  poolId: Long;
  sender: string;
  lowerTick: Long;
  upperTick: Long;
}
/** ===================== MsgCollectFees */

export interface MsgCollectFeesSDKType {
  pool_id: Long;
  sender: string;
  lower_tick: Long;
  upper_tick: Long;
}
export interface MsgCollectFeesResponse {
  tokenOut: Coin[];
}
export interface MsgCollectFeesResponseSDKType {
  token_out: CoinSDKType[];
}

function createBaseMsgCreatePosition(): MsgCreatePosition {
  return {
    poolId: Long.UZERO,
    sender: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    tokenDesired0: undefined,
    tokenDesired1: undefined,
    tokenMinAmount0: "",
    tokenMinAmount1: ""
  };
}

export const MsgCreatePosition = {
  encode(message: MsgCreatePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (!message.lowerTick.isZero()) {
      writer.uint32(24).int64(message.lowerTick);
    }

    if (!message.upperTick.isZero()) {
      writer.uint32(32).int64(message.upperTick);
    }

    if (message.tokenDesired0 !== undefined) {
      Coin.encode(message.tokenDesired0, writer.uint32(42).fork()).ldelim();
    }

    if (message.tokenDesired1 !== undefined) {
      Coin.encode(message.tokenDesired1, writer.uint32(50).fork()).ldelim();
    }

    if (message.tokenMinAmount0 !== "") {
      writer.uint32(58).string(message.tokenMinAmount0);
    }

    if (message.tokenMinAmount1 !== "") {
      writer.uint32(66).string(message.tokenMinAmount1);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.lowerTick = (reader.int64() as Long);
          break;

        case 4:
          message.upperTick = (reader.int64() as Long);
          break;

        case 5:
          message.tokenDesired0 = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.tokenDesired1 = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.tokenMinAmount0 = reader.string();
          break;

        case 8:
          message.tokenMinAmount1 = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition {
    const message = createBaseMsgCreatePosition();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.tokenDesired0 = object.tokenDesired0 !== undefined && object.tokenDesired0 !== null ? Coin.fromPartial(object.tokenDesired0) : undefined;
    message.tokenDesired1 = object.tokenDesired1 !== undefined && object.tokenDesired1 !== null ? Coin.fromPartial(object.tokenDesired1) : undefined;
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  }

};

function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {
    amount0: "",
    amount1: "",
    liquidityCreated: ""
  };
}

export const MsgCreatePositionResponse = {
  encode(message: MsgCreatePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }

    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }

    if (message.liquidityCreated !== "") {
      writer.uint32(42).string(message.liquidityCreated);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePositionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;

        case 2:
          message.amount1 = reader.string();
          break;

        case 5:
          message.liquidityCreated = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse {
    const message = createBaseMsgCreatePositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    return message;
  }

};

function createBaseMsgWithdrawPosition(): MsgWithdrawPosition {
  return {
    poolId: Long.UZERO,
    sender: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    liquidityAmount: ""
  };
}

export const MsgWithdrawPosition = {
  encode(message: MsgWithdrawPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (!message.lowerTick.isZero()) {
      writer.uint32(24).int64(message.lowerTick);
    }

    if (!message.upperTick.isZero()) {
      writer.uint32(32).int64(message.upperTick);
    }

    if (message.liquidityAmount !== "") {
      writer.uint32(42).string(message.liquidityAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.lowerTick = (reader.int64() as Long);
          break;

        case 4:
          message.upperTick = (reader.int64() as Long);
          break;

        case 5:
          message.liquidityAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition {
    const message = createBaseMsgWithdrawPosition();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.liquidityAmount = object.liquidityAmount ?? "";
    return message;
  }

};

function createBaseMsgWithdrawPositionResponse(): MsgWithdrawPositionResponse {
  return {
    amount0: "",
    amount1: ""
  };
}

export const MsgWithdrawPositionResponse = {
  encode(message: MsgWithdrawPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }

    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPositionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;

        case 2:
          message.amount1 = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse {
    const message = createBaseMsgWithdrawPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  }

};

function createBaseMsgCollectFees(): MsgCollectFees {
  return {
    poolId: Long.UZERO,
    sender: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO
  };
}

export const MsgCollectFees = {
  encode(message: MsgCollectFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (!message.lowerTick.isZero()) {
      writer.uint32(24).int64(message.lowerTick);
    }

    if (!message.upperTick.isZero()) {
      writer.uint32(32).int64(message.upperTick);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFees();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.lowerTick = (reader.int64() as Long);
          break;

        case 4:
          message.upperTick = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCollectFees>): MsgCollectFees {
    const message = createBaseMsgCollectFees();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    return message;
  }

};

function createBaseMsgCollectFeesResponse(): MsgCollectFeesResponse {
  return {
    tokenOut: []
  };
}

export const MsgCollectFeesResponse = {
  encode(message: MsgCollectFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFeesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenOut.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCollectFeesResponse>): MsgCollectFeesResponse {
    const message = createBaseMsgCollectFeesResponse();
    message.tokenOut = object.tokenOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};