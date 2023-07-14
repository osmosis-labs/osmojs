import { BinaryReader, BinaryWriter } from "../../binary";
export interface Pool {
    $typeUrl?: string;
    /** pool's address holding all liquidity tokens. */
    address: string;
    /** address holding the incentives liquidity. */
    incentivesAddress: string;
    /** address holding spread rewards from swaps. */
    spreadRewardsAddress: string;
    id: bigint;
    /** Amount of total liquidity */
    currentTickLiquidity: string;
    token0: string;
    token1: string;
    currentSqrtPrice: string;
    currentTick: bigint;
    /**
     * tick_spacing must be one of the authorized_tick_spacing values set in the
     * concentrated-liquidity parameters
     */
    tickSpacing: bigint;
    exponentAtPriceOne: bigint;
    /** spread_factor is the ratio that is charged on the amount of token in. */
    spreadFactor: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     */
    lastLiquidityUpdate: Date;
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
    /** address holding spread rewards from swaps. */
    spread_rewards_address: string;
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
    /** spread_factor is the ratio that is charged on the amount of token in. */
    spread_factor: string;
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
    spread_rewards_address: string;
    id: bigint;
    current_tick_liquidity: string;
    token0: string;
    token1: string;
    current_sqrt_price: string;
    current_tick: bigint;
    tick_spacing: bigint;
    exponent_at_price_one: bigint;
    spread_factor: string;
    last_liquidity_update: Date;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    toAminoMsg(message: Pool): PoolAminoMsg;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
