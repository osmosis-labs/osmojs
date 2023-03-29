import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /** Boolean whether the module is going to be enabled */
    enabled: boolean;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    /** Boolean whether the module is going to be enabled */
    enabled: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
