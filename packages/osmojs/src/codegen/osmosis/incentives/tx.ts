import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateGauge {
  /**
   * flag to show if it's perpetual or multi-epoch
   * distribution incentives by third party
   */
  isPerpetual: boolean;
  owner: string;
  /** distribute condition of a lock which meet one of these conditions */

  distributeTo: QueryCondition;
  /** can distribute multiple coins */

  coins: Coin[];
  /** distribution start time */

  startTime: Date;
  /** number of epochs distribution will be done */

  numEpochsPaidOver: Long;
}
export interface MsgCreateGaugeSDKType {
  /**
   * flag to show if it's perpetual or multi-epoch
   * distribution incentives by third party
   */
  is_perpetual: boolean;
  owner: string;
  /** distribute condition of a lock which meet one of these conditions */

  distribute_to: QueryConditionSDKType;
  /** can distribute multiple coins */

  coins: CoinSDKType[];
  /** distribution start time */

  start_time: Date;
  /** number of epochs distribution will be done */

  num_epochs_paid_over: Long;
}
export interface MsgCreateGaugeResponse {}
export interface MsgCreateGaugeResponseSDKType {}
export interface MsgAddToGauge {
  owner: string;
  gaugeId: Long;
  rewards: Coin[];
}
export interface MsgAddToGaugeSDKType {
  owner: string;
  gauge_id: Long;
  rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {}
export interface MsgAddToGaugeResponseSDKType {}

function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    isPerpetual: false,
    owner: "",
    distributeTo: undefined,
    coins: [],
    startTime: undefined,
    numEpochsPaidOver: Long.UZERO
  };
}

export const MsgCreateGauge = {
  encode(message: MsgCreateGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPerpetual === true) {
      writer.uint32(8).bool(message.isPerpetual);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.distributeTo !== undefined) {
      QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }

    if (!message.numEpochsPaidOver.isZero()) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isPerpetual = reader.bool();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.distributeTo = QueryCondition.decode(reader, reader.uint32());
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.numEpochsPaidOver = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.isPerpetual = object.isPerpetual ?? false;
    message.owner = object.owner ?? "";
    message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? QueryCondition.fromPartial(object.distributeTo) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? Long.fromValue(object.numEpochsPaidOver) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}

export const MsgCreateGaugeResponse = {
  encode(_: MsgCreateGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();

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

  fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  }

};

function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gaugeId: Long.UZERO,
    rewards: []
  };
}

export const MsgAddToGauge = {
  encode(message: MsgAddToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }

    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}

export const MsgAddToGaugeResponse = {
  encode(_: MsgAddToGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGaugeResponse();

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

  fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  }

};