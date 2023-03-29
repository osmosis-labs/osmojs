import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp } from "../../helpers";
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

function createBasePosition(): Position {
  return {
    positionId: Long.UZERO,
    address: "",
    poolId: Long.UZERO,
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO,
    joinTime: undefined,
    freezeDuration: undefined,
    liquidity: ""
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }

    if (!message.lowerTick.isZero()) {
      writer.uint32(32).int64(message.lowerTick);
    }

    if (!message.upperTick.isZero()) {
      writer.uint32(40).int64(message.upperTick);
    }

    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.freezeDuration !== undefined) {
      Duration.encode(message.freezeDuration, writer.uint32(58).fork()).ldelim();
    }

    if (message.liquidity !== "") {
      writer.uint32(66).string(message.liquidity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.positionId = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.poolId = (reader.uint64() as Long);
          break;

        case 4:
          message.lowerTick = (reader.int64() as Long);
          break;

        case 5:
          message.upperTick = (reader.int64() as Long);
          break;

        case 6:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.freezeDuration = Duration.decode(reader, reader.uint32());
          break;

        case 8:
          message.liquidity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    message.joinTime = object.joinTime ?? undefined;
    message.freezeDuration = object.freezeDuration !== undefined && object.freezeDuration !== null ? Duration.fromPartial(object.freezeDuration) : undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  }

};

function createBasePositionWithUnderlyingAssetBreakdown(): PositionWithUnderlyingAssetBreakdown {
  return {
    position: undefined,
    asset0: "",
    asset1: ""
  };
}

export const PositionWithUnderlyingAssetBreakdown = {
  encode(message: PositionWithUnderlyingAssetBreakdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }

    if (message.asset0 !== "") {
      writer.uint32(18).string(message.asset0);
    }

    if (message.asset1 !== "") {
      writer.uint32(26).string(message.asset1);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionWithUnderlyingAssetBreakdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionWithUnderlyingAssetBreakdown();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;

        case 2:
          message.asset0 = reader.string();
          break;

        case 3:
          message.asset1 = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<PositionWithUnderlyingAssetBreakdown>): PositionWithUnderlyingAssetBreakdown {
    const message = createBasePositionWithUnderlyingAssetBreakdown();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.asset0 = object.asset0 ?? "";
    message.asset1 = object.asset1 ?? "";
    return message;
  }

};