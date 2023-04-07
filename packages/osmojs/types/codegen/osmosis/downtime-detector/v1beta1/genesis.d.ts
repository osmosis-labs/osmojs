import { Downtime } from "./downtime_duration";
import * as _m0 from "protobufjs/minimal";
export interface GenesisDowntimeEntry {
    duration: Downtime;
    lastDowntime?: Date;
}
export interface GenesisDowntimeEntryProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
    value: Uint8Array;
}
export interface GenesisDowntimeEntryAmino {
    duration: Downtime;
    last_downtime?: Date;
}
export interface GenesisDowntimeEntryAminoMsg {
    type: "osmosis/downtimedetector/genesis-downtime-entry";
    value: GenesisDowntimeEntryAmino;
}
export interface GenesisDowntimeEntrySDKType {
    duration: Downtime;
    last_downtime?: Date;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    downtimes: GenesisDowntimeEntry[];
    lastBlockTime?: Date;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
    downtimes: GenesisDowntimeEntryAmino[];
    last_block_time?: Date;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/downtimedetector/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
    downtimes: GenesisDowntimeEntrySDKType[];
    last_block_time?: Date;
}
export declare const GenesisDowntimeEntry: {
    typeUrl: string;
    encode(message: GenesisDowntimeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDowntimeEntry;
    fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry;
    fromAmino(object: GenesisDowntimeEntryAmino): GenesisDowntimeEntry;
    toAmino(message: GenesisDowntimeEntry): GenesisDowntimeEntryAmino;
    fromAminoMsg(object: GenesisDowntimeEntryAminoMsg): GenesisDowntimeEntry;
    toAminoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryAminoMsg;
    fromProtoMsg(message: GenesisDowntimeEntryProtoMsg): GenesisDowntimeEntry;
    toProto(message: GenesisDowntimeEntry): Uint8Array;
    toProtoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
