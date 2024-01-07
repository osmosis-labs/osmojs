import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
  title: string;
  description: string;
  poolRecords: PoolRecord[];
}
export interface CreateConcentratedLiquidityPoolsProposalProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal";
  value: Uint8Array;
}
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposalAmino {
  title?: string;
  description?: string;
  pool_records?: PoolRecordAmino[];
}
export interface CreateConcentratedLiquidityPoolsProposalAminoMsg {
  type: "osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal";
  value: CreateConcentratedLiquidityPoolsProposalAmino;
}
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposalSDKType {
  title: string;
  description: string;
  pool_records: PoolRecordSDKType[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
  title: string;
  description: string;
  poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}
export interface TickSpacingDecreaseProposalProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal";
  value: Uint8Array;
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposalAmino {
  title?: string;
  description?: string;
  pool_id_to_tick_spacing_records?: PoolIdToTickSpacingRecordAmino[];
}
export interface TickSpacingDecreaseProposalAminoMsg {
  type: "osmosis/concentratedliquidity/tick-spacing-decrease-proposal";
  value: TickSpacingDecreaseProposalAmino;
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposalSDKType {
  title: string;
  description: string;
  pool_id_to_tick_spacing_records: PoolIdToTickSpacingRecordSDKType[];
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
  poolId: bigint;
  newTickSpacing: bigint;
}
export interface PoolIdToTickSpacingRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord";
  value: Uint8Array;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecordAmino {
  pool_id?: string;
  new_tick_spacing?: string;
}
export interface PoolIdToTickSpacingRecordAminoMsg {
  type: "osmosis/concentratedliquidity/pool-id-to-tick-spacing-record";
  value: PoolIdToTickSpacingRecordAmino;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecordSDKType {
  pool_id: bigint;
  new_tick_spacing: bigint;
}
export interface PoolRecord {
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  spreadFactor: string;
}
export interface PoolRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord";
  value: Uint8Array;
}
export interface PoolRecordAmino {
  denom0?: string;
  denom1?: string;
  tick_spacing?: string;
  spread_factor?: string;
}
export interface PoolRecordAminoMsg {
  type: "osmosis/concentratedliquidity/pool-record";
  value: PoolRecordAmino;
}
export interface PoolRecordSDKType {
  denom0: string;
  denom1: string;
  tick_spacing: bigint;
  spread_factor: string;
}
function createBaseCreateConcentratedLiquidityPoolsProposal(): CreateConcentratedLiquidityPoolsProposal {
  return {
    title: "",
    description: "",
    poolRecords: []
  };
}
export const CreateConcentratedLiquidityPoolsProposal = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal",
  aminoType: "osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal",
  is(o: any): o is CreateConcentratedLiquidityPoolsProposal {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.poolRecords) && (!o.poolRecords.length || PoolRecord.is(o.poolRecords[0])));
  },
  isSDK(o: any): o is CreateConcentratedLiquidityPoolsProposalSDKType {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_records) && (!o.pool_records.length || PoolRecord.isSDK(o.pool_records[0])));
  },
  isAmino(o: any): o is CreateConcentratedLiquidityPoolsProposalAmino {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_records) && (!o.pool_records.length || PoolRecord.isAmino(o.pool_records[0])));
  },
  encode(message: CreateConcentratedLiquidityPoolsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolRecords.push(PoolRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolRecords: Array.isArray(object?.poolRecords) ? object.poolRecords.map((e: any) => PoolRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: CreateConcentratedLiquidityPoolsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolRecords) {
      obj.poolRecords = message.poolRecords.map(e => e ? PoolRecord.toJSON(e) : undefined);
    } else {
      obj.poolRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CreateConcentratedLiquidityPoolsProposal>): CreateConcentratedLiquidityPoolsProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolRecords = object.poolRecords?.map(e => PoolRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CreateConcentratedLiquidityPoolsProposalAmino): CreateConcentratedLiquidityPoolsProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.poolRecords = object.pool_records?.map(e => PoolRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.poolRecords) {
      obj.pool_records = message.poolRecords.map(e => e ? PoolRecord.toAmino(e) : undefined);
    } else {
      obj.pool_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateConcentratedLiquidityPoolsProposalAminoMsg): CreateConcentratedLiquidityPoolsProposal {
    return CreateConcentratedLiquidityPoolsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal",
      value: CreateConcentratedLiquidityPoolsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateConcentratedLiquidityPoolsProposalProtoMsg): CreateConcentratedLiquidityPoolsProposal {
    return CreateConcentratedLiquidityPoolsProposal.decode(message.value);
  },
  toProto(message: CreateConcentratedLiquidityPoolsProposal): Uint8Array {
    return CreateConcentratedLiquidityPoolsProposal.encode(message).finish();
  },
  toProtoMsg(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal",
      value: CreateConcentratedLiquidityPoolsProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateConcentratedLiquidityPoolsProposal.typeUrl, CreateConcentratedLiquidityPoolsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateConcentratedLiquidityPoolsProposal.aminoType, CreateConcentratedLiquidityPoolsProposal.typeUrl);
function createBaseTickSpacingDecreaseProposal(): TickSpacingDecreaseProposal {
  return {
    title: "",
    description: "",
    poolIdToTickSpacingRecords: []
  };
}
export const TickSpacingDecreaseProposal = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal",
  aminoType: "osmosis/concentratedliquidity/tick-spacing-decrease-proposal",
  is(o: any): o is TickSpacingDecreaseProposal {
    return o && (o.$typeUrl === TickSpacingDecreaseProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.poolIdToTickSpacingRecords) && (!o.poolIdToTickSpacingRecords.length || PoolIdToTickSpacingRecord.is(o.poolIdToTickSpacingRecords[0])));
  },
  isSDK(o: any): o is TickSpacingDecreaseProposalSDKType {
    return o && (o.$typeUrl === TickSpacingDecreaseProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_id_to_tick_spacing_records) && (!o.pool_id_to_tick_spacing_records.length || PoolIdToTickSpacingRecord.isSDK(o.pool_id_to_tick_spacing_records[0])));
  },
  isAmino(o: any): o is TickSpacingDecreaseProposalAmino {
    return o && (o.$typeUrl === TickSpacingDecreaseProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_id_to_tick_spacing_records) && (!o.pool_id_to_tick_spacing_records.length || PoolIdToTickSpacingRecord.isAmino(o.pool_id_to_tick_spacing_records[0])));
  },
  encode(message: TickSpacingDecreaseProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolIdToTickSpacingRecords) {
      PoolIdToTickSpacingRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickSpacingDecreaseProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickSpacingDecreaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolIdToTickSpacingRecords.push(PoolIdToTickSpacingRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickSpacingDecreaseProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolIdToTickSpacingRecords: Array.isArray(object?.poolIdToTickSpacingRecords) ? object.poolIdToTickSpacingRecords.map((e: any) => PoolIdToTickSpacingRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: TickSpacingDecreaseProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolIdToTickSpacingRecords) {
      obj.poolIdToTickSpacingRecords = message.poolIdToTickSpacingRecords.map(e => e ? PoolIdToTickSpacingRecord.toJSON(e) : undefined);
    } else {
      obj.poolIdToTickSpacingRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TickSpacingDecreaseProposal>): TickSpacingDecreaseProposal {
    const message = createBaseTickSpacingDecreaseProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolIdToTickSpacingRecords = object.poolIdToTickSpacingRecords?.map(e => PoolIdToTickSpacingRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TickSpacingDecreaseProposalAmino): TickSpacingDecreaseProposal {
    const message = createBaseTickSpacingDecreaseProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.poolIdToTickSpacingRecords = object.pool_id_to_tick_spacing_records?.map(e => PoolIdToTickSpacingRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.poolIdToTickSpacingRecords) {
      obj.pool_id_to_tick_spacing_records = message.poolIdToTickSpacingRecords.map(e => e ? PoolIdToTickSpacingRecord.toAmino(e) : undefined);
    } else {
      obj.pool_id_to_tick_spacing_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: TickSpacingDecreaseProposalAminoMsg): TickSpacingDecreaseProposal {
    return TickSpacingDecreaseProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-spacing-decrease-proposal",
      value: TickSpacingDecreaseProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TickSpacingDecreaseProposalProtoMsg): TickSpacingDecreaseProposal {
    return TickSpacingDecreaseProposal.decode(message.value);
  },
  toProto(message: TickSpacingDecreaseProposal): Uint8Array {
    return TickSpacingDecreaseProposal.encode(message).finish();
  },
  toProtoMsg(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal",
      value: TickSpacingDecreaseProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TickSpacingDecreaseProposal.typeUrl, TickSpacingDecreaseProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(TickSpacingDecreaseProposal.aminoType, TickSpacingDecreaseProposal.typeUrl);
function createBasePoolIdToTickSpacingRecord(): PoolIdToTickSpacingRecord {
  return {
    poolId: BigInt(0),
    newTickSpacing: BigInt(0)
  };
}
export const PoolIdToTickSpacingRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord",
  aminoType: "osmosis/concentratedliquidity/pool-id-to-tick-spacing-record",
  is(o: any): o is PoolIdToTickSpacingRecord {
    return o && (o.$typeUrl === PoolIdToTickSpacingRecord.typeUrl || typeof o.poolId === "bigint" && typeof o.newTickSpacing === "bigint");
  },
  isSDK(o: any): o is PoolIdToTickSpacingRecordSDKType {
    return o && (o.$typeUrl === PoolIdToTickSpacingRecord.typeUrl || typeof o.pool_id === "bigint" && typeof o.new_tick_spacing === "bigint");
  },
  isAmino(o: any): o is PoolIdToTickSpacingRecordAmino {
    return o && (o.$typeUrl === PoolIdToTickSpacingRecord.typeUrl || typeof o.pool_id === "bigint" && typeof o.new_tick_spacing === "bigint");
  },
  encode(message: PoolIdToTickSpacingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.newTickSpacing !== BigInt(0)) {
      writer.uint32(16).uint64(message.newTickSpacing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolIdToTickSpacingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolIdToTickSpacingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.newTickSpacing = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolIdToTickSpacingRecord {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      newTickSpacing: isSet(object.newTickSpacing) ? BigInt(object.newTickSpacing.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolIdToTickSpacingRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.newTickSpacing !== undefined && (obj.newTickSpacing = (message.newTickSpacing || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PoolIdToTickSpacingRecord>): PoolIdToTickSpacingRecord {
    const message = createBasePoolIdToTickSpacingRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.newTickSpacing = object.newTickSpacing !== undefined && object.newTickSpacing !== null ? BigInt(object.newTickSpacing.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolIdToTickSpacingRecordAmino): PoolIdToTickSpacingRecord {
    const message = createBasePoolIdToTickSpacingRecord();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.new_tick_spacing !== undefined && object.new_tick_spacing !== null) {
      message.newTickSpacing = BigInt(object.new_tick_spacing);
    }
    return message;
  },
  toAmino(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.new_tick_spacing = message.newTickSpacing ? message.newTickSpacing.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolIdToTickSpacingRecordAminoMsg): PoolIdToTickSpacingRecord {
    return PoolIdToTickSpacingRecord.fromAmino(object.value);
  },
  toAminoMsg(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-id-to-tick-spacing-record",
      value: PoolIdToTickSpacingRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolIdToTickSpacingRecordProtoMsg): PoolIdToTickSpacingRecord {
    return PoolIdToTickSpacingRecord.decode(message.value);
  },
  toProto(message: PoolIdToTickSpacingRecord): Uint8Array {
    return PoolIdToTickSpacingRecord.encode(message).finish();
  },
  toProtoMsg(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord",
      value: PoolIdToTickSpacingRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolIdToTickSpacingRecord.typeUrl, PoolIdToTickSpacingRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolIdToTickSpacingRecord.aminoType, PoolIdToTickSpacingRecord.typeUrl);
function createBasePoolRecord(): PoolRecord {
  return {
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    spreadFactor: ""
  };
}
export const PoolRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord",
  aminoType: "osmosis/concentratedliquidity/pool-record",
  is(o: any): o is PoolRecord {
    return o && (o.$typeUrl === PoolRecord.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tickSpacing === "bigint" && typeof o.spreadFactor === "string");
  },
  isSDK(o: any): o is PoolRecordSDKType {
    return o && (o.$typeUrl === PoolRecord.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.spread_factor === "string");
  },
  isAmino(o: any): o is PoolRecordAmino {
    return o && (o.$typeUrl === PoolRecord.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.spread_factor === "string");
  },
  encode(message: PoolRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.tickSpacing = reader.uint64();
          break;
        case 5:
          message.spreadFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRecord {
    return {
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : ""
    };
  },
  toJSON(message: PoolRecord): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    return obj;
  },
  fromPartial(object: Partial<PoolRecord>): PoolRecord {
    const message = createBasePoolRecord();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  },
  fromAmino(object: PoolRecordAmino): PoolRecord {
    const message = createBasePoolRecord();
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    }
    if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
      message.tickSpacing = BigInt(object.tick_spacing);
    }
    if (object.spread_factor !== undefined && object.spread_factor !== null) {
      message.spreadFactor = object.spread_factor;
    }
    return message;
  },
  toAmino(message: PoolRecord): PoolRecordAmino {
    const obj: any = {};
    obj.denom0 = message.denom0;
    obj.denom1 = message.denom1;
    obj.tick_spacing = message.tickSpacing ? message.tickSpacing.toString() : undefined;
    obj.spread_factor = message.spreadFactor;
    return obj;
  },
  fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord {
    return PoolRecord.fromAmino(object.value);
  },
  toAminoMsg(message: PoolRecord): PoolRecordAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-record",
      value: PoolRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord {
    return PoolRecord.decode(message.value);
  },
  toProto(message: PoolRecord): Uint8Array {
    return PoolRecord.encode(message).finish();
  },
  toProtoMsg(message: PoolRecord): PoolRecordProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord",
      value: PoolRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolRecord.typeUrl, PoolRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolRecord.aminoType, PoolRecord.typeUrl);