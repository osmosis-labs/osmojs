import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    isPerpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distributeTo?: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime?: Date;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: Long;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    is_perpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distribute_to?: QueryConditionSDKType;
    /** coins are coin(s) to be distributed by the gauge */
    coins: CoinSDKType[];
    /** start_time is the distribution start time */
    start_time?: Date;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over: Long;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseSDKType {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gaugeId: Long;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gauge_id: Long;
    /** rewards are the coin(s) to add to gauge */
    rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseSDKType {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
};
