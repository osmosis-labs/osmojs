import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
    codeId: Long;
    instantiateMsg: Uint8Array;
    sender: string;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolSDKType {
    code_id: Long;
    instantiate_msg: Uint8Array;
    sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
    poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateCosmWasmPool: {
    encode(message: MsgCreateCosmWasmPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCosmWasmPool;
    fromPartial(object: Partial<MsgCreateCosmWasmPool>): MsgCreateCosmWasmPool;
};
export declare const MsgCreateCosmWasmPoolResponse: {
    encode(message: MsgCreateCosmWasmPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCosmWasmPoolResponse;
    fromPartial(object: Partial<MsgCreateCosmWasmPoolResponse>): MsgCreateCosmWasmPoolResponse;
};
