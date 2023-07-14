import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
    codeId: bigint;
    instantiateMsg: Uint8Array;
    sender: string;
}
export interface MsgCreateCosmWasmPoolProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool";
    value: Uint8Array;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolAmino {
    code_id: string;
    instantiate_msg: Uint8Array;
    sender: string;
}
export interface MsgCreateCosmWasmPoolAminoMsg {
    type: "osmosis/cosmwasmpool/create-cosm-wasm-pool";
    value: MsgCreateCosmWasmPoolAmino;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolSDKType {
    code_id: bigint;
    instantiate_msg: Uint8Array;
    sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
    poolId: bigint;
}
export interface MsgCreateCosmWasmPoolResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse";
    value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateCosmWasmPoolResponseAminoMsg {
    type: "osmosis/cosmwasmpool/create-cosm-wasm-pool-response";
    value: MsgCreateCosmWasmPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseSDKType {
    pool_id: bigint;
}
export declare const MsgCreateCosmWasmPool: {
    typeUrl: string;
    encode(message: MsgCreateCosmWasmPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPool;
    fromPartial(object: Partial<MsgCreateCosmWasmPool>): MsgCreateCosmWasmPool;
    fromAmino(object: MsgCreateCosmWasmPoolAmino): MsgCreateCosmWasmPool;
    toAmino(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolAmino;
    fromAminoMsg(object: MsgCreateCosmWasmPoolAminoMsg): MsgCreateCosmWasmPool;
    toAminoMsg(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolAminoMsg;
    fromProtoMsg(message: MsgCreateCosmWasmPoolProtoMsg): MsgCreateCosmWasmPool;
    toProto(message: MsgCreateCosmWasmPool): Uint8Array;
    toProtoMsg(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolProtoMsg;
};
export declare const MsgCreateCosmWasmPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateCosmWasmPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPoolResponse;
    fromPartial(object: Partial<MsgCreateCosmWasmPoolResponse>): MsgCreateCosmWasmPoolResponse;
    fromAmino(object: MsgCreateCosmWasmPoolResponseAmino): MsgCreateCosmWasmPoolResponse;
    toAmino(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseAmino;
    fromAminoMsg(object: MsgCreateCosmWasmPoolResponseAminoMsg): MsgCreateCosmWasmPoolResponse;
    toAminoMsg(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateCosmWasmPoolResponseProtoMsg): MsgCreateCosmWasmPoolResponse;
    toProto(message: MsgCreateCosmWasmPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseProtoMsg;
};
