import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
    sender: string;
    denom0: string;
    denom1: string;
    tickSpacing: bigint;
    spreadFactor: string;
}
export interface MsgCreateConcentratedPoolProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool";
    value: Uint8Array;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolAmino {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: string;
    spread_factor: string;
}
export interface MsgCreateConcentratedPoolAminoMsg {
    type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool";
    value: MsgCreateConcentratedPoolAmino;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: bigint;
    spread_factor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
    poolId: bigint;
}
export interface MsgCreateConcentratedPoolResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse";
    value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateConcentratedPoolResponseAminoMsg {
    type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response";
    value: MsgCreateConcentratedPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
    pool_id: bigint;
}
export declare const MsgCreateConcentratedPool: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPool;
    fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool;
    fromAmino(object: MsgCreateConcentratedPoolAmino): MsgCreateConcentratedPool;
    toAmino(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAmino;
    fromAminoMsg(object: MsgCreateConcentratedPoolAminoMsg): MsgCreateConcentratedPool;
    toAminoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAminoMsg;
    fromProtoMsg(message: MsgCreateConcentratedPoolProtoMsg): MsgCreateConcentratedPool;
    toProto(message: MsgCreateConcentratedPool): Uint8Array;
    toProtoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolProtoMsg;
};
export declare const MsgCreateConcentratedPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse;
    fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse;
    fromAmino(object: MsgCreateConcentratedPoolResponseAmino): MsgCreateConcentratedPoolResponse;
    toAmino(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAmino;
    fromAminoMsg(object: MsgCreateConcentratedPoolResponseAminoMsg): MsgCreateConcentratedPoolResponse;
    toAminoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateConcentratedPoolResponseProtoMsg): MsgCreateConcentratedPoolResponse;
    toProto(message: MsgCreateConcentratedPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseProtoMsg;
};
