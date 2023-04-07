import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params?: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateAmino {
    /** params are all the parameters of the module */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/ibcratelimit/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
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
