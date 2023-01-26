import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { Coin, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams?: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
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
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
    pool_id: Long;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */
export interface MsgMigrateSharesToFullRangeConcentratedPosition {
    sender: string;
    sharesToMigrate?: Coin;
    /** temporary field, eventually gamm pool should be linked to cl pool */
    poolIdEntering: Long;
}
/** ===================== MsgMigrateSharesToFullRangeConcentratedPosition */
export interface MsgMigrateSharesToFullRangeConcentratedPositionSDKType {
    sender: string;
    shares_to_migrate?: CoinSDKType;
    /** temporary field, eventually gamm pool should be linked to cl pool */
    pool_id_entering: Long;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponse {
    amount0: string;
    amount1: string;
    liquidityCreated: string;
}
export interface MsgMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
    amount0: string;
    amount1: string;
    liquidity_created: string;
}
export declare const MsgCreateBalancerPool: {
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool;
};
export declare const MsgCreateBalancerPoolResponse: {
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse;
};
export declare const MsgMigrateSharesToFullRangeConcentratedPosition: {
    encode(message: MsgMigrateSharesToFullRangeConcentratedPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPosition;
    fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPosition>): MsgMigrateSharesToFullRangeConcentratedPosition;
};
export declare const MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
    encode(message: MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
    fromPartial(object: Partial<MsgMigrateSharesToFullRangeConcentratedPositionResponse>): MsgMigrateSharesToFullRangeConcentratedPositionResponse;
};
