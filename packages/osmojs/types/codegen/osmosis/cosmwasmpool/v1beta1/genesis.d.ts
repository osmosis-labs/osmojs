import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the cosmwasmpool module */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the cosmwasmpool module */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "osmosis/cosmwasmpool/params";
    value: ParamsAmino;
}
/** Params holds parameters for the cosmwasmpool module */
export interface ParamsSDKType {
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
    /** params is the container of cosmwasmpool parameters. */
    params?: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateAmino {
    /** params is the container of cosmwasmpool parameters. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/cosmwasmpool/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
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
