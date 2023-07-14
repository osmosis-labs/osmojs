import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    accum_value: DecCoinAmino[];
    total_shares: string;
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
export interface Options {
}
export interface OptionsProtoMsg {
    typeUrl: "/osmosis.accum.v1beta1.Options";
    value: Uint8Array;
}
export interface OptionsAmino {
}
export interface OptionsAminoMsg {
    type: "osmosis/accum/options";
    value: OptionsAmino;
}
export interface OptionsSDKType {
}
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
    options: Options;
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
    num_shares: string;
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
    accum_value_per_share: DecCoinAmino[];
    /**
     * unclaimed_rewards_total is the total amount of unclaimed rewards that the
     * position is entitled to. This value is updated whenever shares are added or
     * removed from an existing position. We also expose API for manually updating
     * this value for some custom use cases such as merging pre-existing positions
     * into a single one.
     */
    unclaimed_rewards_total: DecCoinAmino[];
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
    options: OptionsSDKType;
}
export declare const AccumulatorContent: {
    typeUrl: string;
    encode(message: AccumulatorContent, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccumulatorContent;
    fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent;
    fromAmino(object: AccumulatorContentAmino): AccumulatorContent;
    toAmino(message: AccumulatorContent): AccumulatorContentAmino;
    fromAminoMsg(object: AccumulatorContentAminoMsg): AccumulatorContent;
    toAminoMsg(message: AccumulatorContent): AccumulatorContentAminoMsg;
    fromProtoMsg(message: AccumulatorContentProtoMsg): AccumulatorContent;
    toProto(message: AccumulatorContent): Uint8Array;
    toProtoMsg(message: AccumulatorContent): AccumulatorContentProtoMsg;
};
export declare const Options: {
    typeUrl: string;
    encode(_: Options, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Options;
    fromPartial(_: Partial<Options>): Options;
    fromAmino(_: OptionsAmino): Options;
    toAmino(_: Options): OptionsAmino;
    fromAminoMsg(object: OptionsAminoMsg): Options;
    toAminoMsg(message: Options): OptionsAminoMsg;
    fromProtoMsg(message: OptionsProtoMsg): Options;
    toProto(message: Options): Uint8Array;
    toProtoMsg(message: Options): OptionsProtoMsg;
};
export declare const Record: {
    typeUrl: string;
    encode(message: Record, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record;
    fromPartial(object: Partial<Record>): Record;
    fromAmino(object: RecordAmino): Record;
    toAmino(message: Record): RecordAmino;
    fromAminoMsg(object: RecordAminoMsg): Record;
    toAminoMsg(message: Record): RecordAminoMsg;
    fromProtoMsg(message: RecordProtoMsg): Record;
    toProto(message: Record): Uint8Array;
    toProtoMsg(message: Record): RecordProtoMsg;
};
