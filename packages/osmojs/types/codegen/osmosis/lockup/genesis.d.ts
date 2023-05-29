import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: Long;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.lockup.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
    last_lock_id: string;
    locks: PeriodLockAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/lockup/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: Long;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
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
