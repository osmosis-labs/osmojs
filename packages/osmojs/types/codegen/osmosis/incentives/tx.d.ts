import { QueryCondition, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseSDKType {
}
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
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseSDKType {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponseSDKType;
    fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponseSDKType;
    fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
};
