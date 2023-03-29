import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface CosmWasmPool {
    poolAddress: string;
    contractAddress: string;
    poolId: Long;
    codeId: Long;
}
export interface CosmWasmPoolSDKType {
    pool_address: string;
    contract_address: string;
    pool_id: Long;
    code_id: Long;
}
export declare const CosmWasmPool: {
    encode(message: CosmWasmPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmWasmPool;
    fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool;
};
