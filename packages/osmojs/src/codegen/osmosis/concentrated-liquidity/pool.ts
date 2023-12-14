import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../helpers";
export interface Pool {
  $typeUrl?: string;
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  id: bigint;
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
  tickSpacing: bigint;
  exponentAtPriceOne: string;
  /** swap_fee is the ratio that is charged on the amount of token in. */
  swapFee: string;
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
  id: bigint;
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: string;
  tick_spacing: bigint;
  exponent_at_price_one: string;
  swap_fee: string;
  last_liquidity_update: Date;
}
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
    address: "",
    incentivesAddress: "",
    id: BigInt(0),
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: "",
    tickSpacing: BigInt(0),
    exponentAtPriceOne: "",
    swapFee: "",
    lastLiquidityUpdate: new Date()
  };
}
export const Pool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.currentTickLiquidity, 18).atomics);
    }
    if (message.token0 !== "") {
      writer.uint32(42).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(50).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.currentSqrtPrice, 18).atomics);
    }
    if (message.currentTick !== "") {
      writer.uint32(66).string(message.currentTick);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(72).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(82).string(message.exponentAtPriceOne);
    }
    if (message.swapFee !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastLiquidityUpdate), writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.incentivesAddress = reader.string();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        case 4:
          message.currentTickLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.token0 = reader.string();
          break;
        case 6:
          message.token1 = reader.string();
          break;
        case 7:
          message.currentSqrtPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.currentTick = reader.string();
          break;
        case 9:
          message.tickSpacing = reader.uint64();
          break;
        case 10:
          message.exponentAtPriceOne = reader.string();
          break;
        case 11:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.lastLiquidityUpdate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.swapFee = object.swapFee ?? "";
    message.lastLiquidityUpdate = object.lastLiquidityUpdate ?? undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      address: object.address,
      incentivesAddress: object.incentives_address,
      id: BigInt(object.id),
      currentTickLiquidity: object.current_tick_liquidity,
      token0: object.token0,
      token1: object.token1,
      currentSqrtPrice: object.current_sqrt_price,
      currentTick: object.current_tick,
      tickSpacing: BigInt(object.tick_spacing),
      exponentAtPriceOne: object.exponent_at_price_one,
      swapFee: object.swap_fee,
      lastLiquidityUpdate: object.last_liquidity_update
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.incentives_address = message.incentivesAddress;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.current_tick_liquidity = message.currentTickLiquidity;
    obj.token0 = message.token0;
    obj.token1 = message.token1;
    obj.current_sqrt_price = message.currentSqrtPrice;
    obj.current_tick = message.currentTick;
    obj.tick_spacing = message.tickSpacing ? message.tickSpacing.toString() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne;
    obj.swap_fee = message.swapFee;
    obj.last_liquidity_update = message.lastLiquidityUpdate;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};