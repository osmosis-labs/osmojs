import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface AccumulatorContent {
  accumValue: DecCoin[];
}
export interface AccumulatorContentSDKType {
  accum_value: DecCoinSDKType[];
}
export interface Options {}
export interface OptionsSDKType {}
export interface Record {
  numShares: string;
  initAccumValue: DecCoin[];
  unclaimedRewards: DecCoin[];
  options?: Options;
}
export interface RecordSDKType {
  num_shares: string;
  init_accum_value: DecCoinSDKType[];
  unclaimed_rewards: DecCoinSDKType[];
  options?: OptionsSDKType;
}

function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: []
  };
}

export const AccumulatorContent = {
  encode(message: AccumulatorContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOptions(): Options {
  return {};
}

export const Options = {
  encode(_: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();

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

  fromPartial(_: Partial<Options>): Options {
    const message = createBaseOptions();
    return message;
  }

};

function createBaseRecord(): Record {
  return {
    numShares: "",
    initAccumValue: [],
    unclaimedRewards: [],
    options: undefined
  };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numShares !== "") {
      writer.uint32(10).string(message.numShares);
    }

    for (const v of message.initAccumValue) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.unclaimedRewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numShares = reader.string();
          break;

        case 2:
          message.initAccumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.unclaimedRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.options = Options.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.initAccumValue = object.initAccumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewards = object.unclaimedRewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  }

};