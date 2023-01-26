import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
    sender: string;
    denom0: string;
    denom1: string;
    tickSpacing: Long;
    precisionFactorAtPriceOne: string;
    swapFee: string;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: Long;
    precision_factor_at_price_one: string;
    swap_fee: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
    poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateConcentratedPool: {
    encode(message: MsgCreateConcentratedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPool;
    fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool;
};
export declare const MsgCreateConcentratedPoolResponse: {
    encode(message: MsgCreateConcentratedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse;
    fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse;
};
