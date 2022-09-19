import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams: PoolParams;
    initialPoolLiquidity: Coin[];
    futurePoolGovernor: string;
}
export interface MsgCreateStableswapPoolSDKType {
    sender: string;
    poolParams: PoolParamsSDKType;
    initial_pool_liquidity: CoinSDKType[];
    future_pool_governor: string;
}
export interface MsgCreateStableswapPoolResponse {
    poolId: Long;
}
export interface MsgCreateStableswapPoolResponseSDKType {
    pool_id: Long;
}
export interface MsgStableSwapAdjustScalingFactors {
    /**
     * Sender must be the pool's scaling_factor_governor in order for the tx to
     * succeed
     */
    sender: string;
    poolId: Long;
    scalingFactors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsSDKType {
    /**
     * Sender must be the pool's scaling_factor_governor in order for the tx to
     * succeed
     */
    sender: string;
    pool_id: Long;
    scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {
}
export declare const MsgCreateStableswapPool: {
    encode(message: MsgCreateStableswapPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromPartial(object: DeepPartial<MsgCreateStableswapPool>): MsgCreateStableswapPool;
};
export declare const MsgCreateStableswapPoolResponse: {
    encode(message: MsgCreateStableswapPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponseSDKType;
    fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponseSDKType;
    fromPartial(_: DeepPartial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse;
};
