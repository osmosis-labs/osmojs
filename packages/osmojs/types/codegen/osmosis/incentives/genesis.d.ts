import { Params, ParamsSDKType } from "./params";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module */
    params: Params;
    gauges: Gauge[];
    lockableDurations: Duration[];
    lastGaugeId: Long;
}
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the parameters of the module */
    params: ParamsSDKType;
    gauges: GaugeSDKType[];
    lockable_durations: DurationSDKType[];
    last_gauge_id: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
};
