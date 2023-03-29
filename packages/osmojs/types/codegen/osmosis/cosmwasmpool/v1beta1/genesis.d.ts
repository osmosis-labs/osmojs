import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the cosmwasmpool module */
export interface Params {
}
/** Params holds parameters for the cosmwasmpool module */
export interface ParamsSDKType {
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
    /** params is the container of cosmwasmpool parameters. */
    params?: Params;
}
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisStateSDKType {
    /** params is the container of cosmwasmpool parameters. */
    params?: ParamsSDKType;
}
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
