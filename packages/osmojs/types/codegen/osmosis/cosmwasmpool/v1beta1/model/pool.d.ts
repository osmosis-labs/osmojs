import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface CosmWasmPool {
    $typeUrl?: string;
    contractAddress: string;
    poolId: bigint;
    codeId: bigint;
    instantiateMsg: Uint8Array;
}
export interface CosmWasmPoolProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool";
    value: Uint8Array;
}
export interface CosmWasmPoolAmino {
    contract_address: string;
    pool_id: string;
    code_id: string;
    instantiate_msg: Uint8Array;
}
export interface CosmWasmPoolAminoMsg {
    type: "osmosis/cosmwasmpool/cosm-wasm-pool";
    value: CosmWasmPoolAmino;
}
export interface CosmWasmPoolSDKType {
    $typeUrl?: string;
    contract_address: string;
    pool_id: bigint;
    code_id: bigint;
    instantiate_msg: Uint8Array;
}
export declare const CosmWasmPool: {
    typeUrl: string;
    encode(message: CosmWasmPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CosmWasmPool;
    fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool;
    fromAmino(object: CosmWasmPoolAmino): CosmWasmPool;
    toAmino(message: CosmWasmPool): CosmWasmPoolAmino;
    fromAminoMsg(object: CosmWasmPoolAminoMsg): CosmWasmPool;
    toAminoMsg(message: CosmWasmPool): CosmWasmPoolAminoMsg;
    fromProtoMsg(message: CosmWasmPoolProtoMsg): CosmWasmPool;
    toProto(message: CosmWasmPool): Uint8Array;
    toProtoMsg(message: CosmWasmPool): CosmWasmPoolProtoMsg;
};
