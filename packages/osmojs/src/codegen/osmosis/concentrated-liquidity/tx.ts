import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, toTimestamp, fromTimestamp } from "../../helpers";
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
  freezeDuration?: Duration;
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
  freeze_duration?: DurationSDKType;
}
export interface MsgCreatePositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
  joinTime?: Date;
  liquidityCreated: string;
}
export interface MsgCreatePositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
  join_time?: Date;
  liquidity_created: string;
}
/** ===================== MsgWithdrawPosition */

export interface MsgWithdrawPosition {
  positionId: Long;
  sender: string;
  liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */

export interface MsgWithdrawPositionSDKType {
  position_id: Long;
  sender: string;
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
  positionIds: Long[];
  sender: string;
}
/** ===================== MsgCollectFees */

export interface MsgCollectFeesSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectFeesResponse {
  collectedFees: Coin[];
}
export interface MsgCollectFeesResponseSDKType {
  collected_fees: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */

export interface MsgCollectIncentives {
  positionIds: Long[];
  sender: string;
}
/** ===================== MsgCollectIncentives */

export interface MsgCollectIncentivesSDKType {
  position_ids: Long[];
  sender: string;
}
export interface MsgCollectIncentivesResponse {
  collectedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseSDKType {
  collected_incentives: CoinSDKType[];
}
/** ===================== MsgCreateIncentive */

export interface MsgCreateIncentive {
  poolId: Long;
  sender: string;
  incentiveDenom: string;
  incentiveAmount: string;
  emissionRate: string;
  startTime?: Date;
  minUptime?: Duration;
}
/** ===================== MsgCreateIncentive */

export interface MsgCreateIncentiveSDKType {
  pool_id: Long;
  sender: string;
  incentive_denom: string;
  incentive_amount: string;
  emission_rate: string;
  start_time?: Date;
  min_uptime?: DurationSDKType;
}
export interface MsgCreateIncentiveResponse {
  incentiveDenom: string;
  incentiveAmount: string;
  emissionRate: string;
  startTime?: Date;
  minUptime?: Duration;
}
export interface MsgCreateIncentiveResponseSDKType {
  incentive_denom: string;
  incentive_amount: string;
  emission_rate: string;
  start_time?: Date;
  min_uptime?: DurationSDKType;
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
    tokenMinAmount1: "",
    freezeDuration: undefined
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

    if (message.freezeDuration !== undefined) {
      Duration.encode(message.freezeDuration, writer.uint32(74).fork()).ldelim();
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

        case 9:
          message.freezeDuration = Duration.decode(reader, reader.uint32());
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
    message.freezeDuration = object.freezeDuration !== undefined && object.freezeDuration !== null ? Duration.fromPartial(object.freezeDuration) : undefined;
    return message;
  }

};

function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {
    positionId: Long.UZERO,
    amount0: "",
    amount1: "",
    joinTime: undefined,
    liquidityCreated: ""
  };
}

export const MsgCreatePositionResponse = {
  encode(message: MsgCreatePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }

    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }

    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(34).fork()).ldelim();
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
          message.positionId = (reader.uint64() as Long);
          break;

        case 2:
          message.amount0 = reader.string();
          break;

        case 3:
          message.amount1 = reader.string();
          break;

        case 4:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.joinTime = object.joinTime ?? undefined;
    message.liquidityCreated = object.liquidityCreated ?? "";
    return message;
  }

};

function createBaseMsgWithdrawPosition(): MsgWithdrawPosition {
  return {
    positionId: Long.UZERO,
    sender: "",
    liquidityAmount: ""
  };
}

export const MsgWithdrawPosition = {
  encode(message: MsgWithdrawPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.liquidityAmount !== "") {
      writer.uint32(26).string(message.liquidityAmount);
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
          message.positionId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
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
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.sender = object.sender ?? "";
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
    positionIds: [],
    sender: ""
  };
}

export const MsgCollectFees = {
  encode(message: MsgCollectFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.positionIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.positionIds.push((reader.uint64() as Long));
            }
          } else {
            message.positionIds.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.sender = reader.string();
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
    message.positionIds = object.positionIds?.map(e => Long.fromValue(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgCollectFeesResponse(): MsgCollectFeesResponse {
  return {
    collectedFees: []
  };
}

export const MsgCollectFeesResponse = {
  encode(message: MsgCollectFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectedFees) {
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
          message.collectedFees.push(Coin.decode(reader, reader.uint32()));
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
    message.collectedFees = object.collectedFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCollectIncentives(): MsgCollectIncentives {
  return {
    positionIds: [],
    sender: ""
  };
}

export const MsgCollectIncentives = {
  encode(message: MsgCollectIncentives, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.positionIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentives {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentives();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.positionIds.push((reader.uint64() as Long));
            }
          } else {
            message.positionIds.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives {
    const message = createBaseMsgCollectIncentives();
    message.positionIds = object.positionIds?.map(e => Long.fromValue(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgCollectIncentivesResponse(): MsgCollectIncentivesResponse {
  return {
    collectedIncentives: []
  };
}

export const MsgCollectIncentivesResponse = {
  encode(message: MsgCollectIncentivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectedIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentivesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collectedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse {
    const message = createBaseMsgCollectIncentivesResponse();
    message.collectedIncentives = object.collectedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreateIncentive(): MsgCreateIncentive {
  return {
    poolId: Long.UZERO,
    sender: "",
    incentiveDenom: "",
    incentiveAmount: "",
    emissionRate: "",
    startTime: undefined,
    minUptime: undefined
  };
}

export const MsgCreateIncentive = {
  encode(message: MsgCreateIncentive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.incentiveDenom !== "") {
      writer.uint32(26).string(message.incentiveDenom);
    }

    if (message.incentiveAmount !== "") {
      writer.uint32(34).string(message.incentiveAmount);
    }

    if (message.emissionRate !== "") {
      writer.uint32(42).string(message.emissionRate);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIncentive();

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
          message.incentiveDenom = reader.string();
          break;

        case 4:
          message.incentiveAmount = reader.string();
          break;

        case 5:
          message.emissionRate = reader.string();
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreateIncentive>): MsgCreateIncentive {
    const message = createBaseMsgCreateIncentive();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.incentiveDenom = object.incentiveDenom ?? "";
    message.incentiveAmount = object.incentiveAmount ?? "";
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  }

};

function createBaseMsgCreateIncentiveResponse(): MsgCreateIncentiveResponse {
  return {
    incentiveDenom: "",
    incentiveAmount: "",
    emissionRate: "",
    startTime: undefined,
    minUptime: undefined
  };
}

export const MsgCreateIncentiveResponse = {
  encode(message: MsgCreateIncentiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentiveDenom !== "") {
      writer.uint32(10).string(message.incentiveDenom);
    }

    if (message.incentiveAmount !== "") {
      writer.uint32(18).string(message.incentiveAmount);
    }

    if (message.emissionRate !== "") {
      writer.uint32(26).string(message.emissionRate);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIncentiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentiveDenom = reader.string();
          break;

        case 2:
          message.incentiveAmount = reader.string();
          break;

        case 3:
          message.emissionRate = reader.string();
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgCreateIncentiveResponse>): MsgCreateIncentiveResponse {
    const message = createBaseMsgCreateIncentiveResponse();
    message.incentiveDenom = object.incentiveDenom ?? "";
    message.incentiveAmount = object.incentiveAmount ?? "";
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  }

};