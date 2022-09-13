import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export interface MsgCreateGaugeResponse {
}
export interface MsgAddToGauge {
    owner: string;
    gauge_id: Long;
    rewards: Coin[];
}
export interface MsgAddToGaugeResponse {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromJSON(object: any): MsgCreateGauge;
    toJSON(message: MsgCreateGauge): unknown;
    fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromJSON(_: any): MsgCreateGaugeResponse;
    toJSON(_: MsgCreateGaugeResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromJSON(object: any): MsgAddToGauge;
    toJSON(message: MsgAddToGauge): unknown;
    fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromJSON(_: any): MsgAddToGaugeResponse;
    toJSON(_: MsgAddToGaugeResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
};
