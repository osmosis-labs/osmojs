import { BinaryReader, BinaryWriter } from "../../binary";
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
    title: string;
    description: string;
    pool_records: PoolRecordAmino[];
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
    title: string;
    description: string;
    pool_id_to_tick_spacing_records: PoolIdToTickSpacingRecordAmino[];
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
    pool_id: string;
    new_tick_spacing: string;
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
    exponentAtPriceOne: string;
    spreadFactor: string;
}
export interface PoolRecordProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord";
    value: Uint8Array;
}
export interface PoolRecordAmino {
    denom0: string;
    denom1: string;
    tick_spacing: string;
    exponent_at_price_one: string;
    spread_factor: string;
}
export interface PoolRecordAminoMsg {
    type: "osmosis/concentratedliquidity/pool-record";
    value: PoolRecordAmino;
}
export interface PoolRecordSDKType {
    denom0: string;
    denom1: string;
    tick_spacing: bigint;
    exponent_at_price_one: string;
    spread_factor: string;
}
export declare const CreateConcentratedLiquidityPoolsProposal: {
    typeUrl: string;
    encode(message: CreateConcentratedLiquidityPoolsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsProposal;
    fromPartial(object: Partial<CreateConcentratedLiquidityPoolsProposal>): CreateConcentratedLiquidityPoolsProposal;
    fromAmino(object: CreateConcentratedLiquidityPoolsProposalAmino): CreateConcentratedLiquidityPoolsProposal;
    toAmino(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalAmino;
    fromAminoMsg(object: CreateConcentratedLiquidityPoolsProposalAminoMsg): CreateConcentratedLiquidityPoolsProposal;
    toAminoMsg(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalAminoMsg;
    fromProtoMsg(message: CreateConcentratedLiquidityPoolsProposalProtoMsg): CreateConcentratedLiquidityPoolsProposal;
    toProto(message: CreateConcentratedLiquidityPoolsProposal): Uint8Array;
    toProtoMsg(message: CreateConcentratedLiquidityPoolsProposal): CreateConcentratedLiquidityPoolsProposalProtoMsg;
};
export declare const TickSpacingDecreaseProposal: {
    typeUrl: string;
    encode(message: TickSpacingDecreaseProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickSpacingDecreaseProposal;
    fromPartial(object: Partial<TickSpacingDecreaseProposal>): TickSpacingDecreaseProposal;
    fromAmino(object: TickSpacingDecreaseProposalAmino): TickSpacingDecreaseProposal;
    toAmino(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalAmino;
    fromAminoMsg(object: TickSpacingDecreaseProposalAminoMsg): TickSpacingDecreaseProposal;
    toAminoMsg(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalAminoMsg;
    fromProtoMsg(message: TickSpacingDecreaseProposalProtoMsg): TickSpacingDecreaseProposal;
    toProto(message: TickSpacingDecreaseProposal): Uint8Array;
    toProtoMsg(message: TickSpacingDecreaseProposal): TickSpacingDecreaseProposalProtoMsg;
};
export declare const PoolIdToTickSpacingRecord: {
    typeUrl: string;
    encode(message: PoolIdToTickSpacingRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolIdToTickSpacingRecord;
    fromPartial(object: Partial<PoolIdToTickSpacingRecord>): PoolIdToTickSpacingRecord;
    fromAmino(object: PoolIdToTickSpacingRecordAmino): PoolIdToTickSpacingRecord;
    toAmino(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordAmino;
    fromAminoMsg(object: PoolIdToTickSpacingRecordAminoMsg): PoolIdToTickSpacingRecord;
    toAminoMsg(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordAminoMsg;
    fromProtoMsg(message: PoolIdToTickSpacingRecordProtoMsg): PoolIdToTickSpacingRecord;
    toProto(message: PoolIdToTickSpacingRecord): Uint8Array;
    toProtoMsg(message: PoolIdToTickSpacingRecord): PoolIdToTickSpacingRecordProtoMsg;
};
export declare const PoolRecord: {
    typeUrl: string;
    encode(message: PoolRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord;
    fromPartial(object: Partial<PoolRecord>): PoolRecord;
    fromAmino(object: PoolRecordAmino): PoolRecord;
    toAmino(message: PoolRecord): PoolRecordAmino;
    fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord;
    toAminoMsg(message: PoolRecord): PoolRecordAminoMsg;
    fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord;
    toProto(message: PoolRecord): Uint8Array;
    toProtoMsg(message: PoolRecord): PoolRecordProtoMsg;
};
