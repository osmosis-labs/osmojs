import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface AccumulatorContent {
    accumValue: DecCoin[];
    totalShares: string;
}
export interface AccumulatorContentProtoMsg {
    typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent";
    value: Uint8Array;
}
export interface AccumulatorContentAmino {
    accum_value: DecCoinAmino[];
    total_shares: string;
}
export interface AccumulatorContentAminoMsg {
    type: "osmosis/accum/accumulator-content";
    value: AccumulatorContentAmino;
}
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
export interface Record {
    numShares: string;
    initAccumValue: DecCoin[];
    unclaimedRewards: DecCoin[];
    options?: Options;
}
export interface RecordProtoMsg {
    typeUrl: "/osmosis.accum.v1beta1.Record";
    value: Uint8Array;
}
export interface RecordAmino {
    num_shares: string;
    init_accum_value: DecCoinAmino[];
    unclaimed_rewards: DecCoinAmino[];
    options?: OptionsAmino;
}
export interface RecordAminoMsg {
    type: "osmosis/accum/record";
    value: RecordAmino;
}
export interface RecordSDKType {
    num_shares: string;
    init_accum_value: DecCoinSDKType[];
    unclaimed_rewards: DecCoinSDKType[];
    options?: OptionsSDKType;
}
export declare const AccumulatorContent: {
    typeUrl: string;
    encode(message: AccumulatorContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorContent;
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
    encode(_: Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Options;
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
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromPartial(object: Partial<Record>): Record;
    fromAmino(object: RecordAmino): Record;
    toAmino(message: Record): RecordAmino;
    fromAminoMsg(object: RecordAminoMsg): Record;
    toAminoMsg(message: Record): RecordAminoMsg;
    fromProtoMsg(message: RecordProtoMsg): Record;
    toProto(message: Record): Uint8Array;
    toProtoMsg(message: Record): RecordProtoMsg;
};
