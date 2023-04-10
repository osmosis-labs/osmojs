import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgCreateGaugeProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGauge";
    value: Uint8Array;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
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
    distribute_to?: QueryConditionAmino;
    /** coins are coin(s) to be distributed by the gauge */
    coins: CoinAmino[];
    /** start_time is the distribution start time */
    start_time?: Date;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over: string;
}
export interface MsgCreateGaugeAminoMsg {
    type: "osmosis/incentives/create-gauge";
    value: MsgCreateGaugeAmino;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
    is_perpetual: boolean;
    owner: string;
    distribute_to?: QueryConditionSDKType;
    coins: CoinSDKType[];
    start_time?: Date;
    num_epochs_paid_over: Long;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse";
    value: Uint8Array;
}
export interface MsgCreateGaugeResponseAmino {
}
export interface MsgCreateGaugeResponseAminoMsg {
    type: "osmosis/incentives/create-gauge-response";
    value: MsgCreateGaugeResponseAmino;
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
export interface MsgAddToGaugeProtoMsg {
    typeUrl: "/osmosis.incentives.MsgAddToGauge";
    value: Uint8Array;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gauge_id: string;
    /** rewards are the coin(s) to add to gauge */
    rewards: CoinAmino[];
}
export interface MsgAddToGaugeAminoMsg {
    type: "osmosis/incentives/add-to-gauge";
    value: MsgAddToGaugeAmino;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
    owner: string;
    gauge_id: Long;
    rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseProtoMsg {
    typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse";
    value: Uint8Array;
}
export interface MsgAddToGaugeResponseAmino {
}
export interface MsgAddToGaugeResponseAminoMsg {
    type: "osmosis/incentives/add-to-gauge-response";
    value: MsgAddToGaugeResponseAmino;
}
export interface MsgAddToGaugeResponseSDKType {
}
export declare const MsgCreateGauge: {
    typeUrl: string;
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge;
    fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge;
    toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino;
    fromAminoMsg(object: MsgCreateGaugeAminoMsg): MsgCreateGauge;
    toAminoMsg(message: MsgCreateGauge): MsgCreateGaugeAminoMsg;
    fromProtoMsg(message: MsgCreateGaugeProtoMsg): MsgCreateGauge;
    toProto(message: MsgCreateGauge): Uint8Array;
    toProtoMsg(message: MsgCreateGauge): MsgCreateGaugeProtoMsg;
};
export declare const MsgCreateGaugeResponse: {
    typeUrl: string;
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
    fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse;
    toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino;
    fromAminoMsg(object: MsgCreateGaugeResponseAminoMsg): MsgCreateGaugeResponse;
    toAminoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGaugeResponseProtoMsg): MsgCreateGaugeResponse;
    toProto(message: MsgCreateGaugeResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseProtoMsg;
};
export declare const MsgAddToGauge: {
    typeUrl: string;
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge;
    fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge;
    toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino;
    fromAminoMsg(object: MsgAddToGaugeAminoMsg): MsgAddToGauge;
    toAminoMsg(message: MsgAddToGauge): MsgAddToGaugeAminoMsg;
    fromProtoMsg(message: MsgAddToGaugeProtoMsg): MsgAddToGauge;
    toProto(message: MsgAddToGauge): Uint8Array;
    toProtoMsg(message: MsgAddToGauge): MsgAddToGaugeProtoMsg;
};
export declare const MsgAddToGaugeResponse: {
    typeUrl: string;
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
    fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse;
    toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino;
    fromAminoMsg(object: MsgAddToGaugeResponseAminoMsg): MsgAddToGaugeResponse;
    toAminoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseAminoMsg;
    fromProtoMsg(message: MsgAddToGaugeResponseProtoMsg): MsgAddToGaugeResponse;
    toProto(message: MsgAddToGaugeResponse): Uint8Array;
    toProtoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseProtoMsg;
};
