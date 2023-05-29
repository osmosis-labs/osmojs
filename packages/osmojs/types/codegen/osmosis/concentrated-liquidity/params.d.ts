import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     */
    authorizedTickSpacing: Long[];
    authorizedSwapFees: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     */
    authorized_tick_spacing: string[];
    authorized_swap_fees: string[];
}
export interface ParamsAminoMsg {
    type: "osmosis/concentratedliquidity/params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    authorized_tick_spacing: Long[];
    authorized_swap_fees: string[];
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
