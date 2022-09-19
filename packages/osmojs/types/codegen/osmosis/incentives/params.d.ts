import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params holds parameters for the incentives module */
export interface Params {
    /** distribution epoch identifier */
    distrEpochIdentifier: string;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    /** distribution epoch identifier */
    distr_epoch_identifier: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
