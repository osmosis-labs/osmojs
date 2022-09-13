import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mint_denom: string;
    /** maximum annual change in inflation rate */
    inflation_rate_change: string;
    /** maximum inflation rate */
    inflation_max: string;
    /** minimum inflation rate */
    inflation_min: string;
    /** goal of percent bonded atoms */
    goal_bonded: string;
    /** expected blocks per year */
    blocks_per_year: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
