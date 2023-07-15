import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CosmWasmPool {
    $typeUrl?: string;
    contractAddress: string;
    poolId: Long;
    codeId: Long;
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
    pool_id: Long;
    code_id: Long;
    instantiate_msg: Uint8Array;
}
export declare const CosmWasmPool: {
    typeUrl: string;
    encode(message: CosmWasmPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmWasmPool;
    fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool;
    fromAmino(object: CosmWasmPoolAmino): CosmWasmPool;
    toAmino(message: CosmWasmPool): CosmWasmPoolAmino;
    fromAminoMsg(object: CosmWasmPoolAminoMsg): CosmWasmPool;
    toAminoMsg(message: CosmWasmPool): CosmWasmPoolAminoMsg;
    fromProtoMsg(message: CosmWasmPoolProtoMsg): CosmWasmPool;
    toProto(message: CosmWasmPool): Uint8Array;
    toProtoMsg(message: CosmWasmPool): CosmWasmPoolProtoMsg;
};
