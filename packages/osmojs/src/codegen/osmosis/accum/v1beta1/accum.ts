import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContent {
  accumValue: DecCoin[];
  totalShares: string;
}
export interface AccumulatorContentProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent";
  value: Uint8Array;
}
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContentAmino {
  accum_value?: DecCoinAmino[];
  total_shares?: string;
}
export interface AccumulatorContentAminoMsg {
  type: "osmosis/accum/accumulator-content";
  value: AccumulatorContentAmino;
}
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContentSDKType {
  accum_value: DecCoinSDKType[];
  total_shares: string;
}
export interface Options {}
export interface OptionsProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.Options";
  value: Uint8Array;
}
export interface OptionsAmino {}
export interface OptionsAminoMsg {
  type: "osmosis/accum/options";
  value: OptionsAmino;
}
export interface OptionsSDKType {}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface Record {
  /**
   * num_shares is the number of shares belonging to the position associated
   * with this record.
   */
  numShares: string;
  /**
   * accum_value_per_share is the subset of coins per shar of the global
   * accumulator value that allows to infer how much a position is entitled to
   * per share that it owns.
   * 
   * In the default case with no intervals, this value equals to the global
   * accumulator value at the time of the position creation, the last update or
   * reward claim.
   * 
   * In the interval case such as concentrated liquidity, this value equals to
   * the global growth of rewards inside the interval during one of: the time of
   * the position creation, the last update or reward claim. Note, that
   * immediately prior to claiming or updating rewards, this value must be
   * updated to "the growth inside at the time of last update + the growth
   * outside at the time of the current block". This is so that the claiming
   * logic can subtract this updated value from the global accumulator value to
   * get the growth inside the interval from the time of last update up until
   * the current block time.
   */
  accumValuePerShare: DecCoin[];
  /**
   * unclaimed_rewards_total is the total amount of unclaimed rewards that the
   * position is entitled to. This value is updated whenever shares are added or
   * removed from an existing position. We also expose API for manually updating
   * this value for some custom use cases such as merging pre-existing positions
   * into a single one.
   */
  unclaimedRewardsTotal: DecCoin[];
  options?: Options;
}
export interface RecordProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.Record";
  value: Uint8Array;
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface RecordAmino {
  /**
   * num_shares is the number of shares belonging to the position associated
   * with this record.
   */
  num_shares?: string;
  /**
   * accum_value_per_share is the subset of coins per shar of the global
   * accumulator value that allows to infer how much a position is entitled to
   * per share that it owns.
   * 
   * In the default case with no intervals, this value equals to the global
   * accumulator value at the time of the position creation, the last update or
   * reward claim.
   * 
   * In the interval case such as concentrated liquidity, this value equals to
   * the global growth of rewards inside the interval during one of: the time of
   * the position creation, the last update or reward claim. Note, that
   * immediately prior to claiming or updating rewards, this value must be
   * updated to "the growth inside at the time of last update + the growth
   * outside at the time of the current block". This is so that the claiming
   * logic can subtract this updated value from the global accumulator value to
   * get the growth inside the interval from the time of last update up until
   * the current block time.
   */
  accum_value_per_share?: DecCoinAmino[];
  /**
   * unclaimed_rewards_total is the total amount of unclaimed rewards that the
   * position is entitled to. This value is updated whenever shares are added or
   * removed from an existing position. We also expose API for manually updating
   * this value for some custom use cases such as merging pre-existing positions
   * into a single one.
   */
  unclaimed_rewards_total?: DecCoinAmino[];
  options?: OptionsAmino;
}
export interface RecordAminoMsg {
  type: "osmosis/accum/record";
  value: RecordAmino;
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface RecordSDKType {
  num_shares: string;
  accum_value_per_share: DecCoinSDKType[];
  unclaimed_rewards_total: DecCoinSDKType[];
  options?: OptionsSDKType;
}
function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: [],
    totalShares: ""
  };
}
export const AccumulatorContent = {
  typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
  aminoType: "osmosis/accum/accumulator-content",
  is(o: any): o is AccumulatorContent {
    return o && (o.$typeUrl === AccumulatorContent.typeUrl || Array.isArray(o.accumValue) && (!o.accumValue.length || DecCoin.is(o.accumValue[0])) && typeof o.totalShares === "string");
  },
  isSDK(o: any): o is AccumulatorContentSDKType {
    return o && (o.$typeUrl === AccumulatorContent.typeUrl || Array.isArray(o.accum_value) && (!o.accum_value.length || DecCoin.isSDK(o.accum_value[0])) && typeof o.total_shares === "string");
  },
  isAmino(o: any): o is AccumulatorContentAmino {
    return o && (o.$typeUrl === AccumulatorContent.typeUrl || Array.isArray(o.accum_value) && (!o.accum_value.length || DecCoin.isAmino(o.accum_value[0])) && typeof o.total_shares === "string");
  },
  encode(message: AccumulatorContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accumValue) ? object.accumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  toJSON(message: AccumulatorContent): unknown {
    const obj: any = {};
    if (message.accumValue) {
      obj.accumValue = message.accumValue.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValue = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  },
  fromAmino(object: AccumulatorContentAmino): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accum_value?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = object.total_shares;
    }
    return message;
  },
  toAmino(message: AccumulatorContent): AccumulatorContentAmino {
    const obj: any = {};
    if (message.accumValue) {
      obj.accum_value = message.accumValue.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.accum_value = [];
    }
    obj.total_shares = message.totalShares;
    return obj;
  },
  fromAminoMsg(object: AccumulatorContentAminoMsg): AccumulatorContent {
    return AccumulatorContent.fromAmino(object.value);
  },
  toAminoMsg(message: AccumulatorContent): AccumulatorContentAminoMsg {
    return {
      type: "osmosis/accum/accumulator-content",
      value: AccumulatorContent.toAmino(message)
    };
  },
  fromProtoMsg(message: AccumulatorContentProtoMsg): AccumulatorContent {
    return AccumulatorContent.decode(message.value);
  },
  toProto(message: AccumulatorContent): Uint8Array {
    return AccumulatorContent.encode(message).finish();
  },
  toProtoMsg(message: AccumulatorContent): AccumulatorContentProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
      value: AccumulatorContent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccumulatorContent.typeUrl, AccumulatorContent);
GlobalDecoderRegistry.registerAminoProtoMapping(AccumulatorContent.aminoType, AccumulatorContent.typeUrl);
function createBaseOptions(): Options {
  return {};
}
export const Options = {
  typeUrl: "/osmosis.accum.v1beta1.Options",
  aminoType: "osmosis/accum/options",
  is(o: any): o is Options {
    return o && o.$typeUrl === Options.typeUrl;
  },
  isSDK(o: any): o is OptionsSDKType {
    return o && o.$typeUrl === Options.typeUrl;
  },
  isAmino(o: any): o is OptionsAmino {
    return o && o.$typeUrl === Options.typeUrl;
  },
  encode(_: Options, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Options {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): Options {
    return {};
  },
  toJSON(_: Options): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Options>): Options {
    const message = createBaseOptions();
    return message;
  },
  fromAmino(_: OptionsAmino): Options {
    const message = createBaseOptions();
    return message;
  },
  toAmino(_: Options): OptionsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: OptionsAminoMsg): Options {
    return Options.fromAmino(object.value);
  },
  toAminoMsg(message: Options): OptionsAminoMsg {
    return {
      type: "osmosis/accum/options",
      value: Options.toAmino(message)
    };
  },
  fromProtoMsg(message: OptionsProtoMsg): Options {
    return Options.decode(message.value);
  },
  toProto(message: Options): Uint8Array {
    return Options.encode(message).finish();
  },
  toProtoMsg(message: Options): OptionsProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.Options",
      value: Options.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Options.typeUrl, Options);
GlobalDecoderRegistry.registerAminoProtoMapping(Options.aminoType, Options.typeUrl);
function createBaseRecord(): Record {
  return {
    numShares: "",
    accumValuePerShare: [],
    unclaimedRewardsTotal: [],
    options: undefined
  };
}
export const Record = {
  typeUrl: "/osmosis.accum.v1beta1.Record",
  aminoType: "osmosis/accum/record",
  is(o: any): o is Record {
    return o && (o.$typeUrl === Record.typeUrl || typeof o.numShares === "string" && Array.isArray(o.accumValuePerShare) && (!o.accumValuePerShare.length || DecCoin.is(o.accumValuePerShare[0])) && Array.isArray(o.unclaimedRewardsTotal) && (!o.unclaimedRewardsTotal.length || DecCoin.is(o.unclaimedRewardsTotal[0])));
  },
  isSDK(o: any): o is RecordSDKType {
    return o && (o.$typeUrl === Record.typeUrl || typeof o.num_shares === "string" && Array.isArray(o.accum_value_per_share) && (!o.accum_value_per_share.length || DecCoin.isSDK(o.accum_value_per_share[0])) && Array.isArray(o.unclaimed_rewards_total) && (!o.unclaimed_rewards_total.length || DecCoin.isSDK(o.unclaimed_rewards_total[0])));
  },
  isAmino(o: any): o is RecordAmino {
    return o && (o.$typeUrl === Record.typeUrl || typeof o.num_shares === "string" && Array.isArray(o.accum_value_per_share) && (!o.accum_value_per_share.length || DecCoin.isAmino(o.accum_value_per_share[0])) && Array.isArray(o.unclaimed_rewards_total) && (!o.unclaimed_rewards_total.length || DecCoin.isAmino(o.unclaimed_rewards_total[0])));
  },
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numShares !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.numShares, 18).atomics);
    }
    for (const v of message.accumValuePerShare) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewardsTotal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.accumValuePerShare.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewardsTotal.push(DecCoin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): Record {
    return {
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      accumValuePerShare: Array.isArray(object?.accumValuePerShare) ? object.accumValuePerShare.map((e: any) => DecCoin.fromJSON(e)) : [],
      unclaimedRewardsTotal: Array.isArray(object?.unclaimedRewardsTotal) ? object.unclaimedRewardsTotal.map((e: any) => DecCoin.fromJSON(e)) : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: Record): unknown {
    const obj: any = {};
    message.numShares !== undefined && (obj.numShares = message.numShares);
    if (message.accumValuePerShare) {
      obj.accumValuePerShare = message.accumValuePerShare.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValuePerShare = [];
    }
    if (message.unclaimedRewardsTotal) {
      obj.unclaimedRewardsTotal = message.unclaimedRewardsTotal.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.unclaimedRewardsTotal = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.accumValuePerShare = object.accumValuePerShare?.map(e => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewardsTotal = object.unclaimedRewardsTotal?.map(e => DecCoin.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: RecordAmino): Record {
    const message = createBaseRecord();
    if (object.num_shares !== undefined && object.num_shares !== null) {
      message.numShares = object.num_shares;
    }
    message.accumValuePerShare = object.accum_value_per_share?.map(e => DecCoin.fromAmino(e)) || [];
    message.unclaimedRewardsTotal = object.unclaimed_rewards_total?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: Record): RecordAmino {
    const obj: any = {};
    obj.num_shares = message.numShares;
    if (message.accumValuePerShare) {
      obj.accum_value_per_share = message.accumValuePerShare.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.accum_value_per_share = [];
    }
    if (message.unclaimedRewardsTotal) {
      obj.unclaimed_rewards_total = message.unclaimedRewardsTotal.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.unclaimed_rewards_total = [];
    }
    obj.options = message.options ? Options.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecordAminoMsg): Record {
    return Record.fromAmino(object.value);
  },
  toAminoMsg(message: Record): RecordAminoMsg {
    return {
      type: "osmosis/accum/record",
      value: Record.toAmino(message)
    };
  },
  fromProtoMsg(message: RecordProtoMsg): Record {
    return Record.decode(message.value);
  },
  toProto(message: Record): Uint8Array {
    return Record.encode(message).finish();
  },
  toProtoMsg(message: Record): RecordProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.Record",
      value: Record.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Record.typeUrl, Record);
GlobalDecoderRegistry.registerAminoProtoMapping(Record.aminoType, Record.typeUrl);