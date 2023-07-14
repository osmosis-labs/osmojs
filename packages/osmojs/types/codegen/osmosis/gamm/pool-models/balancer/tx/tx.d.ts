import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
export interface MsgCreateBalancerPoolProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
    value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolAmino {
    sender: string;
    pool_params?: PoolParamsAmino;
    pool_assets: PoolAssetAmino[];
    future_pool_governor: string;
}
export interface MsgCreateBalancerPoolAminoMsg {
    type: "osmosis/gamm/create-balancer-pool";
    value: MsgCreateBalancerPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
    sender: string;
    pool_params: PoolParamsSDKType;
    pool_assets: PoolAssetSDKType[];
    future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    poolId: bigint;
}
export interface MsgCreateBalancerPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
    value: Uint8Array;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateBalancerPoolResponseAminoMsg {
    type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response";
    value: MsgCreateBalancerPoolResponseAmino;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
    pool_id: bigint;
}
export declare const MsgCreateBalancerPool: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool;
    fromAmino(object: MsgCreateBalancerPoolAmino): MsgCreateBalancerPool;
    toAmino(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAmino;
    fromAminoMsg(object: MsgCreateBalancerPoolAminoMsg): MsgCreateBalancerPool;
    toAminoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAminoMsg;
    fromProtoMsg(message: MsgCreateBalancerPoolProtoMsg): MsgCreateBalancerPool;
    toProto(message: MsgCreateBalancerPool): Uint8Array;
    toProtoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolProtoMsg;
};
export declare const MsgCreateBalancerPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
    fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse;
    toAmino(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAmino;
    fromAminoMsg(object: MsgCreateBalancerPoolResponseAminoMsg): MsgCreateBalancerPoolResponse;
    toAminoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg): MsgCreateBalancerPoolResponse;
    toProto(message: MsgCreateBalancerPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg;
};
