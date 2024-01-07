import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "../../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
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
  position_id?: string;
  address?: string;
  pool_id?: string;
  lower_tick?: string;
  upper_tick?: string;
  join_time?: string;
  liquidity?: string;
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
  claimable_spread_rewards?: CoinAmino[];
  claimable_incentives?: CoinAmino[];
  forfeited_incentives?: CoinAmino[];
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
function createBasePosition(): Position {
  return {
    positionId: BigInt(0),
    address: "",
    poolId: BigInt(0),
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
    joinTime: new Date(),
    liquidity: ""
  };
}
export const Position = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
  aminoType: "osmosis/concentratedliquidity/position",
  is(o: any): o is Position {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.positionId === "bigint" && typeof o.address === "string" && typeof o.poolId === "bigint" && typeof o.lowerTick === "bigint" && typeof o.upperTick === "bigint" && Timestamp.is(o.joinTime) && typeof o.liquidity === "string");
  },
  isSDK(o: any): o is PositionSDKType {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.position_id === "bigint" && typeof o.address === "string" && typeof o.pool_id === "bigint" && typeof o.lower_tick === "bigint" && typeof o.upper_tick === "bigint" && Timestamp.isSDK(o.join_time) && typeof o.liquidity === "string");
  },
  isAmino(o: any): o is PositionAmino {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.position_id === "bigint" && typeof o.address === "string" && typeof o.pool_id === "bigint" && typeof o.lower_tick === "bigint" && typeof o.upper_tick === "bigint" && Timestamp.isAmino(o.join_time) && typeof o.liquidity === "string");
  },
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(32).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(40).int64(message.upperTick);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.liquidity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.lowerTick = reader.int64();
          break;
        case 5:
          message.upperTick = reader.int64();
          break;
        case 6:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.liquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Position {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lowerTick: isSet(object.lowerTick) ? BigInt(object.lowerTick.toString()) : BigInt(0),
      upperTick: isSet(object.upperTick) ? BigInt(object.upperTick.toString()) : BigInt(0),
      joinTime: isSet(object.joinTime) ? new Date(object.joinTime) : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : ""
    };
  },
  toJSON(message: Position): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    message.joinTime !== undefined && (obj.joinTime = message.joinTime.toISOString());
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? BigInt(object.lowerTick.toString()) : BigInt(0);
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? BigInt(object.upperTick.toString()) : BigInt(0);
    message.joinTime = object.joinTime ?? undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    const message = createBasePosition();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lower_tick !== undefined && object.lower_tick !== null) {
      message.lowerTick = BigInt(object.lower_tick);
    }
    if (object.upper_tick !== undefined && object.upper_tick !== null) {
      message.upperTick = BigInt(object.upper_tick);
    }
    if (object.join_time !== undefined && object.join_time !== null) {
      message.joinTime = fromTimestamp(Timestamp.fromAmino(object.join_time));
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    return message;
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.position_id = message.positionId ? message.positionId.toString() : undefined;
    obj.address = message.address;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lower_tick = message.lowerTick ? message.lowerTick.toString() : undefined;
    obj.upper_tick = message.upperTick ? message.upperTick.toString() : undefined;
    obj.join_time = message.joinTime ? Timestamp.toAmino(toTimestamp(message.joinTime)) : undefined;
    obj.liquidity = message.liquidity;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  toAminoMsg(message: Position): PositionAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position",
      value: Position.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
      value: Position.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Position.typeUrl, Position);
GlobalDecoderRegistry.registerAminoProtoMapping(Position.aminoType, Position.typeUrl);
function createBaseFullPositionBreakdown(): FullPositionBreakdown {
  return {
    position: Position.fromPartial({}),
    asset0: Coin.fromPartial({}),
    asset1: Coin.fromPartial({}),
    claimableSpreadRewards: [],
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
export const FullPositionBreakdown = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
  aminoType: "osmosis/concentratedliquidity/full-position-breakdown",
  is(o: any): o is FullPositionBreakdown {
    return o && (o.$typeUrl === FullPositionBreakdown.typeUrl || Position.is(o.position) && Coin.is(o.asset0) && Coin.is(o.asset1) && Array.isArray(o.claimableSpreadRewards) && (!o.claimableSpreadRewards.length || Coin.is(o.claimableSpreadRewards[0])) && Array.isArray(o.claimableIncentives) && (!o.claimableIncentives.length || Coin.is(o.claimableIncentives[0])) && Array.isArray(o.forfeitedIncentives) && (!o.forfeitedIncentives.length || Coin.is(o.forfeitedIncentives[0])));
  },
  isSDK(o: any): o is FullPositionBreakdownSDKType {
    return o && (o.$typeUrl === FullPositionBreakdown.typeUrl || Position.isSDK(o.position) && Coin.isSDK(o.asset0) && Coin.isSDK(o.asset1) && Array.isArray(o.claimable_spread_rewards) && (!o.claimable_spread_rewards.length || Coin.isSDK(o.claimable_spread_rewards[0])) && Array.isArray(o.claimable_incentives) && (!o.claimable_incentives.length || Coin.isSDK(o.claimable_incentives[0])) && Array.isArray(o.forfeited_incentives) && (!o.forfeited_incentives.length || Coin.isSDK(o.forfeited_incentives[0])));
  },
  isAmino(o: any): o is FullPositionBreakdownAmino {
    return o && (o.$typeUrl === FullPositionBreakdown.typeUrl || Position.isAmino(o.position) && Coin.isAmino(o.asset0) && Coin.isAmino(o.asset1) && Array.isArray(o.claimable_spread_rewards) && (!o.claimable_spread_rewards.length || Coin.isAmino(o.claimable_spread_rewards[0])) && Array.isArray(o.claimable_incentives) && (!o.claimable_incentives.length || Coin.isAmino(o.claimable_incentives[0])) && Array.isArray(o.forfeited_incentives) && (!o.forfeited_incentives.length || Coin.isAmino(o.forfeited_incentives[0])));
  },
  encode(message: FullPositionBreakdown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset0 !== undefined) {
      Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset1 !== undefined) {
      Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullPositionBreakdown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullPositionBreakdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.asset0 = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.asset1 = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullPositionBreakdown {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      asset0: isSet(object.asset0) ? Coin.fromJSON(object.asset0) : undefined,
      asset1: isSet(object.asset1) ? Coin.fromJSON(object.asset1) : undefined,
      claimableSpreadRewards: Array.isArray(object?.claimableSpreadRewards) ? object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e)) : [],
      claimableIncentives: Array.isArray(object?.claimableIncentives) ? object.claimableIncentives.map((e: any) => Coin.fromJSON(e)) : [],
      forfeitedIncentives: Array.isArray(object?.forfeitedIncentives) ? object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: FullPositionBreakdown): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.asset0 !== undefined && (obj.asset0 = message.asset0 ? Coin.toJSON(message.asset0) : undefined);
    message.asset1 !== undefined && (obj.asset1 = message.asset1 ? Coin.toJSON(message.asset1) : undefined);
    if (message.claimableSpreadRewards) {
      obj.claimableSpreadRewards = message.claimableSpreadRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableSpreadRewards = [];
    }
    if (message.claimableIncentives) {
      obj.claimableIncentives = message.claimableIncentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableIncentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeitedIncentives = message.forfeitedIncentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.forfeitedIncentives = [];
    }
    return obj;
  },
  fromPartial(object: Partial<FullPositionBreakdown>): FullPositionBreakdown {
    const message = createBaseFullPositionBreakdown();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.asset0 = object.asset0 !== undefined && object.asset0 !== null ? Coin.fromPartial(object.asset0) : undefined;
    message.asset1 = object.asset1 !== undefined && object.asset1 !== null ? Coin.fromPartial(object.asset1) : undefined;
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    message.claimableIncentives = object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FullPositionBreakdownAmino): FullPositionBreakdown {
    const message = createBaseFullPositionBreakdown();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    if (object.asset0 !== undefined && object.asset0 !== null) {
      message.asset0 = Coin.fromAmino(object.asset0);
    }
    if (object.asset1 !== undefined && object.asset1 !== null) {
      message.asset1 = Coin.fromAmino(object.asset1);
    }
    message.claimableSpreadRewards = object.claimable_spread_rewards?.map(e => Coin.fromAmino(e)) || [];
    message.claimableIncentives = object.claimable_incentives?.map(e => Coin.fromAmino(e)) || [];
    message.forfeitedIncentives = object.forfeited_incentives?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FullPositionBreakdown): FullPositionBreakdownAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.asset0 = message.asset0 ? Coin.toAmino(message.asset0) : undefined;
    obj.asset1 = message.asset1 ? Coin.toAmino(message.asset1) : undefined;
    if (message.claimableSpreadRewards) {
      obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_spread_rewards = [];
    }
    if (message.claimableIncentives) {
      obj.claimable_incentives = message.claimableIncentives.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_incentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.forfeited_incentives = [];
    }
    return obj;
  },
  fromAminoMsg(object: FullPositionBreakdownAminoMsg): FullPositionBreakdown {
    return FullPositionBreakdown.fromAmino(object.value);
  },
  toAminoMsg(message: FullPositionBreakdown): FullPositionBreakdownAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/full-position-breakdown",
      value: FullPositionBreakdown.toAmino(message)
    };
  },
  fromProtoMsg(message: FullPositionBreakdownProtoMsg): FullPositionBreakdown {
    return FullPositionBreakdown.decode(message.value);
  },
  toProto(message: FullPositionBreakdown): Uint8Array {
    return FullPositionBreakdown.encode(message).finish();
  },
  toProtoMsg(message: FullPositionBreakdown): FullPositionBreakdownProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
      value: FullPositionBreakdown.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FullPositionBreakdown.typeUrl, FullPositionBreakdown);
GlobalDecoderRegistry.registerAminoProtoMapping(FullPositionBreakdown.aminoType, FullPositionBreakdown.typeUrl);
function createBasePositionWithPeriodLock(): PositionWithPeriodLock {
  return {
    position: Position.fromPartial({}),
    locks: PeriodLock.fromPartial({})
  };
}
export const PositionWithPeriodLock = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock",
  aminoType: "osmosis/concentratedliquidity/position-with-period-lock",
  is(o: any): o is PositionWithPeriodLock {
    return o && (o.$typeUrl === PositionWithPeriodLock.typeUrl || Position.is(o.position) && PeriodLock.is(o.locks));
  },
  isSDK(o: any): o is PositionWithPeriodLockSDKType {
    return o && (o.$typeUrl === PositionWithPeriodLock.typeUrl || Position.isSDK(o.position) && PeriodLock.isSDK(o.locks));
  },
  isAmino(o: any): o is PositionWithPeriodLockAmino {
    return o && (o.$typeUrl === PositionWithPeriodLock.typeUrl || Position.isAmino(o.position) && PeriodLock.isAmino(o.locks));
  },
  encode(message: PositionWithPeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.locks !== undefined) {
      PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionWithPeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionWithPeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.locks = PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionWithPeriodLock {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      locks: isSet(object.locks) ? PeriodLock.fromJSON(object.locks) : undefined
    };
  },
  toJSON(message: PositionWithPeriodLock): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.locks !== undefined && (obj.locks = message.locks ? PeriodLock.toJSON(message.locks) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PositionWithPeriodLock>): PositionWithPeriodLock {
    const message = createBasePositionWithPeriodLock();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.locks = object.locks !== undefined && object.locks !== null ? PeriodLock.fromPartial(object.locks) : undefined;
    return message;
  },
  fromAmino(object: PositionWithPeriodLockAmino): PositionWithPeriodLock {
    const message = createBasePositionWithPeriodLock();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    if (object.locks !== undefined && object.locks !== null) {
      message.locks = PeriodLock.fromAmino(object.locks);
    }
    return message;
  },
  toAmino(message: PositionWithPeriodLock): PositionWithPeriodLockAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.locks = message.locks ? PeriodLock.toAmino(message.locks) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionWithPeriodLockAminoMsg): PositionWithPeriodLock {
    return PositionWithPeriodLock.fromAmino(object.value);
  },
  toAminoMsg(message: PositionWithPeriodLock): PositionWithPeriodLockAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-with-period-lock",
      value: PositionWithPeriodLock.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionWithPeriodLockProtoMsg): PositionWithPeriodLock {
    return PositionWithPeriodLock.decode(message.value);
  },
  toProto(message: PositionWithPeriodLock): Uint8Array {
    return PositionWithPeriodLock.encode(message).finish();
  },
  toProtoMsg(message: PositionWithPeriodLock): PositionWithPeriodLockProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock",
      value: PositionWithPeriodLock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PositionWithPeriodLock.typeUrl, PositionWithPeriodLock);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionWithPeriodLock.aminoType, PositionWithPeriodLock.typeUrl);