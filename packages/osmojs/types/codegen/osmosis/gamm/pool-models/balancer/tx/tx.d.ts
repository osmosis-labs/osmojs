import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams?: PoolParams;
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
    pool_params?: PoolParamsSDKType;
    pool_assets: PoolAssetSDKType[];
    future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    poolId: Long;
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
    pool_id: Long;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */
export interface MsgMigrateSharesToFullRangeConcentratedPosition {
    sender: string;
    sharesToMigrate?: Coin;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition";
    value: Uint8Array;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */
export interface MsgMigrateSharesToFullRangeConcentratedPositionAmino {
    sender: string;
    shares_to_migrate?: CoinAmino;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg {
    type: "osmosis/gamm/poolmodels/balancer/migrate-shares-to-full-range-concentrated-position";
    value: MsgMigrateSharesToFullRangeConcentratedPositionAmino;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */
export interface MsgMigrateSharesToFullRangeConcentratedPositionSDKType {
    sender: string;
    shares_to_migrate?: CoinSDKType;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponse {
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    joinTime?: Date;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPositionResponse";
    value: Uint8Array;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino {
    amount0: string;
    amount1: string;
    liquidity_created: string;
    join_time?: Date;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg {
    type: "osmosis/gamm/poolmodels/balancer/migrate-shares-to-full-range-concentrated-position-response";
    value: MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
    amount0: string;
    amount1: string;
    liquidity_created: string;
    join_time?: Date;
}
export declare const MsgCreateBalancerPool: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool;
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
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
    fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse;
    toAmino(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAmino;
    fromAminoMsg(object: MsgCreateBalancerPoolResponseAminoMsg): MsgCreateBalancerPoolResponse;
    toAminoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg): MsgCreateBalancerPoolResponse;
    toProto(message: MsgCreateBalancerPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg;
};
export declare const MsgMigrateSharesToFullRangeConcentratedPosition: {
    typeUrl: string;
    encode(message: MsgMigrateSharesToFullRangeConcentratedPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPosition;
    fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPosition>): MsgMigrateSharesToFullRangeConcentratedPosition;
    fromAmino(object: MsgMigrateSharesToFullRangeConcentratedPositionAmino): MsgMigrateSharesToFullRangeConcentratedPosition;
    toAmino(message: MsgMigrateSharesToFullRangeConcentratedPosition): MsgMigrateSharesToFullRangeConcentratedPositionAmino;
    fromAminoMsg(object: MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg): MsgMigrateSharesToFullRangeConcentratedPosition;
    toAminoMsg(message: MsgMigrateSharesToFullRangeConcentratedPosition): MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg;
    fromProtoMsg(message: MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg): MsgMigrateSharesToFullRangeConcentratedPosition;
    toProto(message: MsgMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
    toProtoMsg(message: MsgMigrateSharesToFullRangeConcentratedPosition): MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg;
};
export declare const MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
    typeUrl: string;
    encode(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPositionResponse>): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    fromAmino(object: MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    toAmino(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse): MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino;
    fromAminoMsg(object: MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    toAminoMsg(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse): MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
    fromProtoMsg(message: MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    toProto(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse): MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
};
