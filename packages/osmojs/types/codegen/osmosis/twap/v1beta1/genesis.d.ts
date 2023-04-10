import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { TwapRecord, TwapRecordAmino, TwapRecordSDKType } from "./twap_record";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the twap module */
export interface Params {
    pruneEpochIdentifier: string;
    recordHistoryKeepPeriod?: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the twap module */
export interface ParamsAmino {
    prune_epoch_identifier: string;
    record_history_keep_period?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "osmosis/twap/params";
    value: ParamsAmino;
}
/** Params holds parameters for the twap module */
export interface ParamsSDKType {
    prune_epoch_identifier: string;
    record_history_keep_period?: DurationSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    /** twaps is the collection of all twap records. */
    twaps: TwapRecord[];
    /** params is the container of twap parameters. */
    params?: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
    /** twaps is the collection of all twap records. */
    twaps: TwapRecordAmino[];
    /** params is the container of twap parameters. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/twap/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
    twaps: TwapRecordSDKType[];
    params?: ParamsSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
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
