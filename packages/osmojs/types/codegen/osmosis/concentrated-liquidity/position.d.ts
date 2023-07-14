import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
    positionId: bigint;
    address: string;
    poolId: bigint;
    lowerTick: bigint;
    upperTick: bigint;
    joinTime: Date;
    liquidity: string;
}
export interface PositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position";
    value: Uint8Array;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionAmino {
    position_id: string;
    address: string;
    pool_id: string;
    lower_tick: string;
    upper_tick: string;
    join_time?: Date;
    liquidity: string;
}
export interface PositionAminoMsg {
    type: "osmosis/concentratedliquidity/position";
    value: PositionAmino;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface PositionSDKType {
    position_id: bigint;
    address: string;
    pool_id: bigint;
    lower_tick: bigint;
    upper_tick: bigint;
    join_time: Date;
    liquidity: string;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdown {
    position: Position;
    asset0: Coin;
    asset1: Coin;
    claimableSpreadRewards: Coin[];
    claimableIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
export interface FullPositionBreakdownProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown";
    value: Uint8Array;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdownAmino {
    position?: PositionAmino;
    asset0?: CoinAmino;
    asset1?: CoinAmino;
    claimable_spread_rewards: CoinAmino[];
    claimable_incentives: CoinAmino[];
    forfeited_incentives: CoinAmino[];
}
export interface FullPositionBreakdownAminoMsg {
    type: "osmosis/concentratedliquidity/full-position-breakdown";
    value: FullPositionBreakdownAmino;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdownSDKType {
    position: PositionSDKType;
    asset0: CoinSDKType;
    asset1: CoinSDKType;
    claimable_spread_rewards: CoinSDKType[];
    claimable_incentives: CoinSDKType[];
    forfeited_incentives: CoinSDKType[];
}
export interface PositionWithPeriodLock {
    position: Position;
    locks: PeriodLock;
}
export interface PositionWithPeriodLockProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock";
    value: Uint8Array;
}
export interface PositionWithPeriodLockAmino {
    position?: PositionAmino;
    locks?: PeriodLockAmino;
}
export interface PositionWithPeriodLockAminoMsg {
    type: "osmosis/concentratedliquidity/position-with-period-lock";
    value: PositionWithPeriodLockAmino;
}
export interface PositionWithPeriodLockSDKType {
    position: PositionSDKType;
    locks: PeriodLockSDKType;
}
export declare const Position: {
    typeUrl: string;
    encode(message: Position, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Position;
    fromPartial(object: Partial<Position>): Position;
    fromAmino(object: PositionAmino): Position;
    toAmino(message: Position): PositionAmino;
    fromAminoMsg(object: PositionAminoMsg): Position;
    toAminoMsg(message: Position): PositionAminoMsg;
    fromProtoMsg(message: PositionProtoMsg): Position;
    toProto(message: Position): Uint8Array;
    toProtoMsg(message: Position): PositionProtoMsg;
};
export declare const FullPositionBreakdown: {
    typeUrl: string;
    encode(message: FullPositionBreakdown, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FullPositionBreakdown;
    fromPartial(object: Partial<FullPositionBreakdown>): FullPositionBreakdown;
    fromAmino(object: FullPositionBreakdownAmino): FullPositionBreakdown;
    toAmino(message: FullPositionBreakdown): FullPositionBreakdownAmino;
    fromAminoMsg(object: FullPositionBreakdownAminoMsg): FullPositionBreakdown;
    toAminoMsg(message: FullPositionBreakdown): FullPositionBreakdownAminoMsg;
    fromProtoMsg(message: FullPositionBreakdownProtoMsg): FullPositionBreakdown;
    toProto(message: FullPositionBreakdown): Uint8Array;
    toProtoMsg(message: FullPositionBreakdown): FullPositionBreakdownProtoMsg;
};
export declare const PositionWithPeriodLock: {
    typeUrl: string;
    encode(message: PositionWithPeriodLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionWithPeriodLock;
    fromPartial(object: Partial<PositionWithPeriodLock>): PositionWithPeriodLock;
    fromAmino(object: PositionWithPeriodLockAmino): PositionWithPeriodLock;
    toAmino(message: PositionWithPeriodLock): PositionWithPeriodLockAmino;
    fromAminoMsg(object: PositionWithPeriodLockAminoMsg): PositionWithPeriodLock;
    toAminoMsg(message: PositionWithPeriodLock): PositionWithPeriodLockAminoMsg;
    fromProtoMsg(message: PositionWithPeriodLockProtoMsg): PositionWithPeriodLock;
    toProto(message: PositionWithPeriodLock): Uint8Array;
    toProtoMsg(message: PositionWithPeriodLock): PositionWithPeriodLockProtoMsg;
};
