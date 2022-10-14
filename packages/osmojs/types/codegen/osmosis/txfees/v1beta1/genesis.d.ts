import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
    basedenom: string;
    feetokens: FeeToken[];
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
    basedenom: string;
    feetokens: FeeTokenSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
