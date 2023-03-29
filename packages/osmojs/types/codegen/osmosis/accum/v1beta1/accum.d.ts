import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface AccumulatorContent {
    accumValue: DecCoin[];
}
export interface AccumulatorContentSDKType {
    accum_value: DecCoinSDKType[];
}
export interface Options {
}
export interface OptionsSDKType {
}
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
export declare const AccumulatorContent: {
    encode(message: AccumulatorContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorContent;
    fromPartial(object: Partial<AccumulatorContent>): AccumulatorContent;
};
export declare const Options: {
    encode(_: Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Options;
    fromPartial(_: Partial<Options>): Options;
};
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromPartial(object: Partial<Record>): Record;
};
