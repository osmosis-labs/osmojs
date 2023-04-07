import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
    $typeUrl?: string;
    /** pool's address holding all liquidity tokens. */
    address: string;
    /** address holding the incentives liquidity. */
    incentivesAddress: string;
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
export interface PoolProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    /** pool's address holding all liquidity tokens. */
    address: string;
    /** address holding the incentives liquidity. */
    incentives_address: string;
    id: string;
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
    tick_spacing: string;
    exponent_at_price_one: string;
    /** swap_fee is the ratio that is charged on the amount of token in. */
    swap_fee: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     */
    last_liquidity_update?: Date;
}
export interface PoolAminoMsg {
    type: "osmosis/concentratedliquidity/pool";
    value: PoolAmino;
}
export interface PoolSDKType {
    $typeUrl?: string;
    address: string;
    incentives_address: string;
    id: Long;
    current_tick_liquidity: string;
    token0: string;
    token1: string;
    current_sqrt_price: string;
    current_tick: string;
    tick_spacing: Long;
    exponent_at_price_one: string;
    swap_fee: string;
    last_liquidity_update?: Date;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    toAminoMsg(message: Pool): PoolAminoMsg;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
