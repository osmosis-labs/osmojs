import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "./balancerPool";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
    sender: string;
    poolParams: PoolParamsSDKType;
    poolAssets: PoolAssetSDKType[];
    future_pool_governor: string;
}
export interface MsgCreateBalancerPoolResponse {
    poolId: Long;
}
export interface MsgCreateBalancerPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateBalancerPool: {
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromPartial(object: DeepPartial<MsgCreateBalancerPool>): MsgCreateBalancerPool;
    fromSDK(object: MsgCreateBalancerPoolSDKType): MsgCreateBalancerPool;
    toSDK(message: MsgCreateBalancerPool): MsgCreateBalancerPoolSDKType;
};
export declare const MsgCreateBalancerPoolResponse: {
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponseSDKType;
    fromPartial(object: DeepPartial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
    fromSDK(object: MsgCreateBalancerPoolResponseSDKType): MsgCreateBalancerPoolResponse;
    toSDK(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseSDKType;
};
