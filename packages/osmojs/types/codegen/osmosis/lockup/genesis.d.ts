import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: Long;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: Long;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
