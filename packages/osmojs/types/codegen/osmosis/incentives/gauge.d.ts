import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Gauge {
    /** unique ID of a Gauge */
    id: Long;
    /**
     * flag to show if it's perpetual or multi-epoch
     * distribution incentives by third party
     */
    is_perpetual: boolean;
    /**
     * Rewards are distributed to lockups that are are returned by at least one of
     * these queries
     */
    distribute_to: QueryCondition;
    /**
     * total amount of Coins that has been in the gauge.
     * can distribute multiple coins
     */
    coins: Coin[];
    /** distribution start time */
    start_time: Date;
    /** number of epochs distribution will be done */
    num_epochs_paid_over: Long;
    /** number of epochs distributed already */
    filled_epochs: Long;
    /** already distributed coins */
    distributed_coins: Coin[];
}
export interface LockableDurationsInfo {
    lockable_durations: Duration[];
}
export declare const Gauge: {
    encode(message: Gauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gauge;
    fromJSON(object: any): Gauge;
    toJSON(message: Gauge): unknown;
    fromPartial(object: DeepPartial<Gauge>): Gauge;
};
export declare const LockableDurationsInfo: {
    encode(message: LockableDurationsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo;
};
