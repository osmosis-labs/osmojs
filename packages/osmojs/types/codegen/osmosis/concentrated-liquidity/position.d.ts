import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, freeze duration, and liquidity.
 */
export interface Position {
    positionId: Long;
    address: string;
    poolId: Long;
    lowerTick: Long;
    upperTick: Long;
    joinTime?: Date;
    freezeDuration?: Duration;
    liquidity: string;
}
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, freeze duration, and liquidity.
 */
export interface PositionSDKType {
    position_id: Long;
    address: string;
    pool_id: Long;
    lower_tick: Long;
    upper_tick: Long;
    join_time?: Date;
    freeze_duration?: DurationSDKType;
    liquidity: string;
}
export interface PositionWithUnderlyingAssetBreakdown {
    position?: Position;
    asset0: string;
    asset1: string;
}
export interface PositionWithUnderlyingAssetBreakdownSDKType {
    position?: PositionSDKType;
    asset0: string;
    asset1: string;
}
export declare const Position: {
    encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Position;
    fromPartial(object: Partial<Position>): Position;
};
export declare const PositionWithUnderlyingAssetBreakdown: {
    encode(message: PositionWithUnderlyingAssetBreakdown, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionWithUnderlyingAssetBreakdown;
    fromPartial(object: Partial<PositionWithUnderlyingAssetBreakdown>): PositionWithUnderlyingAssetBreakdown;
};
