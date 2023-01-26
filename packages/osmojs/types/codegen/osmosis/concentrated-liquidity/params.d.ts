import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Params {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     */
    authorizedTickSpacing: Long[];
}
export interface ParamsSDKType {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     */
    authorized_tick_spacing: Long[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
