import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateGauge {
  /**
   * flag to show if it's perpetual or multi-epoch
   * distribution incentives by third party
   */
  is_perpetual: boolean;
  owner: string;

  /** distribute condition of a lock which meet one of these conditions */
  distribute_to: QueryCondition;

  /** can distribute multiple coins */
  coins: Coin[];

  /** distribution start time */
  start_time: Date;

  /** number of epochs distribution will be done */
  num_epochs_paid_over: Long;
}
export interface MsgCreateGaugeResponse {}
export interface MsgAddToGauge {
  owner: string;
  gauge_id: Long;
  rewards: Coin[];
}
export interface MsgAddToGaugeResponse {}

function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    is_perpetual: false,
    owner: "",
    distribute_to: undefined,
    coins: [],
    start_time: undefined,
    num_epochs_paid_over: Long.UZERO
  };
}

export const MsgCreateGauge = {
  encode(message: MsgCreateGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.is_perpetual === true) {
      writer.uint32(8).bool(message.is_perpetual);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.distribute_to !== undefined) {
      QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(42).fork()).ldelim();
    }

    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
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
          message.is_perpetual = reader.bool();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.distribute_to = QueryCondition.decode(reader, reader.uint32());
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.num_epochs_paid_over = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGauge {
    return {
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? Long.fromString(object.num_epochs_paid_over) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateGauge): unknown {
    const obj: any = {};
    message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
    message.owner !== undefined && (obj.owner = message.owner);
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.is_perpetual = object.is_perpetual ?? false;
    message.owner = object.owner ?? "";
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.start_time = object.start_time ?? undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? Long.fromValue(object.num_epochs_paid_over) : Long.UZERO;
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse {
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

  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },

  toJSON(_: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  }

};

function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gauge_id: Long.UZERO,
    rewards: []
  };
}

export const MsgAddToGauge = {
  encode(message: MsgAddToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.gauge_id.isZero()) {
      writer.uint32(16).uint64(message.gauge_id);
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
          message.gauge_id = (reader.uint64() as Long);
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

  fromJSON(object: any): MsgAddToGauge {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      gauge_id: isSet(object.gauge_id) ? Long.fromString(object.gauge_id) : Long.UZERO,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgAddToGauge): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || Long.UZERO).toString());

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse {
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

  fromJSON(_: any): MsgAddToGaugeResponse {
    return {};
  },

  toJSON(_: MsgAddToGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  }

};