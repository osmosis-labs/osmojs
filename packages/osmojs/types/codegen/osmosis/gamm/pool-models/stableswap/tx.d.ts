import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams?: PoolParams;
    initialPoolLiquidity: Coin[];
    scalingFactors: Long[];
    futurePoolGovernor: string;
    scalingFactorController: string;
}
export interface MsgCreateStableswapPoolProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
    value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
    sender: string;
    pool_params?: PoolParamsAmino;
    initial_pool_liquidity: CoinAmino[];
    scaling_factors: string[];
    future_pool_governor: string;
    scaling_factor_controller: string;
}
export interface MsgCreateStableswapPoolAminoMsg {
    type: "osmosis/gamm/create-stableswap-pool";
    value: MsgCreateStableswapPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
    sender: string;
    pool_params?: PoolParamsSDKType;
    initial_pool_liquidity: CoinSDKType[];
    scaling_factors: Long[];
    future_pool_governor: string;
    scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
    poolId: Long;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
    value: Uint8Array;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateStableswapPoolResponseAminoMsg {
    type: "osmosis/gamm/create-stableswap-pool-response";
    value: MsgCreateStableswapPoolResponseAmino;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
    pool_id: Long;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
    sender: string;
    poolId: Long;
    scalingFactors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
    value: Uint8Array;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
    sender: string;
    pool_id: string;
    scaling_factors: string[];
}
export interface MsgStableSwapAdjustScalingFactorsAminoMsg {
    type: "osmosis/gamm/stableswap-adjust-scaling-factors";
    value: MsgStableSwapAdjustScalingFactorsAmino;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
    sender: string;
    pool_id: Long;
    scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
    value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {
}
export interface MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
    type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response";
    value: MsgStableSwapAdjustScalingFactorsResponseAmino;
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {
}
export declare const MsgCreateStableswapPool: {
    typeUrl: string;
    encode(message: MsgCreateStableswapPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromPartial(object: Partial<MsgCreateStableswapPool>): MsgCreateStableswapPool;
    fromAmino(object: MsgCreateStableswapPoolAmino): MsgCreateStableswapPool;
    toAmino(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAmino;
    fromAminoMsg(object: MsgCreateStableswapPoolAminoMsg): MsgCreateStableswapPool;
    toAminoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAminoMsg;
    fromProtoMsg(message: MsgCreateStableswapPoolProtoMsg): MsgCreateStableswapPool;
    toProto(message: MsgCreateStableswapPool): Uint8Array;
    toProtoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolProtoMsg;
};
export declare const MsgCreateStableswapPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateStableswapPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse;
    fromPartial(object: Partial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse;
    fromAmino(object: MsgCreateStableswapPoolResponseAmino): MsgCreateStableswapPoolResponse;
    toAmino(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAmino;
    fromAminoMsg(object: MsgCreateStableswapPoolResponseAminoMsg): MsgCreateStableswapPoolResponse;
    toAminoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateStableswapPoolResponseProtoMsg): MsgCreateStableswapPoolResponse;
    toProto(message: MsgCreateStableswapPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseProtoMsg;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    typeUrl: string;
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromPartial(object: Partial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors;
    fromAmino(object: MsgStableSwapAdjustScalingFactorsAmino): MsgStableSwapAdjustScalingFactors;
    toAmino(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAmino;
    fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsAminoMsg): MsgStableSwapAdjustScalingFactors;
    toAminoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAminoMsg;
    fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsProtoMsg): MsgStableSwapAdjustScalingFactors;
    toProto(message: MsgStableSwapAdjustScalingFactors): Uint8Array;
    toProtoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsProtoMsg;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    typeUrl: string;
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse;
    fromPartial(_: Partial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse;
    fromAmino(_: MsgStableSwapAdjustScalingFactorsResponseAmino): MsgStableSwapAdjustScalingFactorsResponse;
    toAmino(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAmino;
    fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsResponseAminoMsg): MsgStableSwapAdjustScalingFactorsResponse;
    toAminoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
    fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponseProtoMsg): MsgStableSwapAdjustScalingFactorsResponse;
    toProto(message: MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
    toProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
};
