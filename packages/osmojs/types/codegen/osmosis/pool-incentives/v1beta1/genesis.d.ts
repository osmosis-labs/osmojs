import { Params, ParamsSDKType, DistrInfo, DistrInfoSDKType } from "./incentives";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    lockableDurations: Duration[];
    distrInfo?: DistrInfo;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params: ParamsSDKType;
    lockable_durations: DurationSDKType[];
    distr_info?: DistrInfoSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
};
