import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Pool {
    address: string;
    id: Long;
    /** Amount of total liquidity */
    currentTickLiquidity: string;
    token0: string;
    token1: string;
    currentSqrtPrice: string;
    currentTick: string;
    /**
     * tick_spacing must be one of the authorized_tick_spacing values set in the
     * concentrated-liquidity parameters
     */
    tickSpacing: Long;
    exponentAtPriceOne: string;
    /** swap_fee is the ratio that is charged on the amount of token in. */
    swapFee: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     */
    lastLiquidityUpdate?: Date;
}
export interface PoolSDKType {
    address: string;
    id: Long;
    /** Amount of total liquidity */
    current_tick_liquidity: string;
    token0: string;
    token1: string;
    current_sqrt_price: string;
    current_tick: string;
    /**
     * tick_spacing must be one of the authorized_tick_spacing values set in the
     * concentrated-liquidity parameters
     */
    tick_spacing: Long;
    exponent_at_price_one: string;
    /** swap_fee is the ratio that is charged on the amount of token in. */
    swap_fee: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     */
    last_liquidity_update?: Date;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
};
