import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface TickInfo {
    liquidityGross: string;
    liquidityNet: string;
    feeGrowthOutside: DecCoin[];
    uptimeTrackers: UptimeTracker[];
}
export interface TickInfoProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo";
    value: Uint8Array;
}
export interface TickInfoAmino {
    liquidity_gross: string;
    liquidity_net: string;
    fee_growth_outside: DecCoinAmino[];
    uptime_trackers: UptimeTrackerAmino[];
}
export interface TickInfoAminoMsg {
    type: "osmosis/concentratedliquidity/tick-info";
    value: TickInfoAmino;
}
export interface TickInfoSDKType {
    liquidity_gross: string;
    liquidity_net: string;
    fee_growth_outside: DecCoinSDKType[];
    uptime_trackers: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
    uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker";
    value: Uint8Array;
}
export interface UptimeTrackerAmino {
    uptime_growth_outside: DecCoinAmino[];
}
export interface UptimeTrackerAminoMsg {
    type: "osmosis/concentratedliquidity/uptime-tracker";
    value: UptimeTrackerAmino;
}
export interface UptimeTrackerSDKType {
    uptime_growth_outside: DecCoinSDKType[];
}
export declare const TickInfo: {
    typeUrl: string;
    encode(message: TickInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickInfo;
    fromPartial(object: Partial<TickInfo>): TickInfo;
    fromAmino(object: TickInfoAmino): TickInfo;
    toAmino(message: TickInfo): TickInfoAmino;
    fromAminoMsg(object: TickInfoAminoMsg): TickInfo;
    toAminoMsg(message: TickInfo): TickInfoAminoMsg;
    fromProtoMsg(message: TickInfoProtoMsg): TickInfo;
    toProto(message: TickInfo): Uint8Array;
    toProtoMsg(message: TickInfo): TickInfoProtoMsg;
};
export declare const UptimeTracker: {
    typeUrl: string;
    encode(message: UptimeTracker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UptimeTracker;
    fromPartial(object: Partial<UptimeTracker>): UptimeTracker;
    fromAmino(object: UptimeTrackerAmino): UptimeTracker;
    toAmino(message: UptimeTracker): UptimeTrackerAmino;
    fromAminoMsg(object: UptimeTrackerAminoMsg): UptimeTracker;
    toAminoMsg(message: UptimeTracker): UptimeTrackerAminoMsg;
    fromProtoMsg(message: UptimeTrackerProtoMsg): UptimeTracker;
    toProto(message: UptimeTracker): Uint8Array;
    toProtoMsg(message: UptimeTracker): UptimeTrackerProtoMsg;
};
