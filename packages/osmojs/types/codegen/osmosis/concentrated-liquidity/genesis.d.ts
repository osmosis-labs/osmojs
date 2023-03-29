import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params?: Params;
    pools: Any[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
    /** params are all the parameters of the module */
    params?: ParamsSDKType;
    pools: AnySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
