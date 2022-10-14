import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeToken {
    denom: string;
    poolID: Long;
}
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeTokenSDKType {
    denom: string;
    poolID: Long;
}
export declare const FeeToken: {
    encode(message: FeeToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeToken;
    fromPartial(object: Partial<FeeToken>): FeeToken;
};
