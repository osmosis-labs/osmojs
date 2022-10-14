import { Params, ParamsSDKType, DistrInfo, DistrInfoSDKType, PoolToGauges, PoolToGaugesSDKType } from "./incentives";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    lockableDurations: Duration[];
    distrInfo?: DistrInfo;
    poolToGauges?: PoolToGauges;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params?: ParamsSDKType;
    lockable_durations: DurationSDKType[];
    distr_info?: DistrInfoSDKType;
    pool_to_gauges?: PoolToGaugesSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
