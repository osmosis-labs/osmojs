import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
    positionId: Long;
    address: string;
    poolId: Long;
    lowerTick: Long;
    upperTick: Long;
    joinTime?: Date;
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
    position_id: Long;
    address: string;
    pool_id: Long;
    lower_tick: Long;
    upper_tick: Long;
    join_time?: Date;
    liquidity: string;
}
export interface PositionWithUnderlyingAssetBreakdown {
    position?: Position;
    asset0?: Coin;
    asset1?: Coin;
}
export interface PositionWithUnderlyingAssetBreakdownProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithUnderlyingAssetBreakdown";
    value: Uint8Array;
}
export interface PositionWithUnderlyingAssetBreakdownAmino {
    position?: PositionAmino;
    asset0?: CoinAmino;
    asset1?: CoinAmino;
}
export interface PositionWithUnderlyingAssetBreakdownAminoMsg {
    type: "osmosis/concentratedliquidity/position-with-underlying-asset-breakdown";
    value: PositionWithUnderlyingAssetBreakdownAmino;
}
export interface PositionWithUnderlyingAssetBreakdownSDKType {
    position?: PositionSDKType;
    asset0?: CoinSDKType;
    asset1?: CoinSDKType;
}
export declare const Position: {
    typeUrl: string;
    encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Position;
    fromPartial(object: Partial<Position>): Position;
    fromAmino(object: PositionAmino): Position;
    toAmino(message: Position): PositionAmino;
    fromAminoMsg(object: PositionAminoMsg): Position;
    toAminoMsg(message: Position): PositionAminoMsg;
    fromProtoMsg(message: PositionProtoMsg): Position;
    toProto(message: Position): Uint8Array;
    toProtoMsg(message: Position): PositionProtoMsg;
};
export declare const PositionWithUnderlyingAssetBreakdown: {
    typeUrl: string;
    encode(message: PositionWithUnderlyingAssetBreakdown, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionWithUnderlyingAssetBreakdown;
    fromPartial(object: Partial<PositionWithUnderlyingAssetBreakdown>): PositionWithUnderlyingAssetBreakdown;
    fromAmino(object: PositionWithUnderlyingAssetBreakdownAmino): PositionWithUnderlyingAssetBreakdown;
    toAmino(message: PositionWithUnderlyingAssetBreakdown): PositionWithUnderlyingAssetBreakdownAmino;
    fromAminoMsg(object: PositionWithUnderlyingAssetBreakdownAminoMsg): PositionWithUnderlyingAssetBreakdown;
    toAminoMsg(message: PositionWithUnderlyingAssetBreakdown): PositionWithUnderlyingAssetBreakdownAminoMsg;
    fromProtoMsg(message: PositionWithUnderlyingAssetBreakdownProtoMsg): PositionWithUnderlyingAssetBreakdown;
    toProto(message: PositionWithUnderlyingAssetBreakdown): Uint8Array;
    toProtoMsg(message: PositionWithUnderlyingAssetBreakdown): PositionWithUnderlyingAssetBreakdownProtoMsg;
};
