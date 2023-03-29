import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
    poolId: Long;
    sender: string;
    lowerTick: Long;
    upperTick: Long;
    tokenDesired0?: Coin;
    tokenDesired1?: Coin;
    tokenMinAmount0: string;
    tokenMinAmount1: string;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
    pool_id: Long;
    sender: string;
    lower_tick: Long;
    upper_tick: Long;
    token_desired0?: CoinSDKType;
    token_desired1?: CoinSDKType;
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
    amount0: string;
    amount1: string;
    liquidityCreated: string;
}
export interface MsgCreatePositionResponseSDKType {
    amount0: string;
    amount1: string;
    liquidity_created: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
    poolId: Long;
    sender: string;
    lowerTick: Long;
    upperTick: Long;
    liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
    pool_id: Long;
    sender: string;
    lower_tick: Long;
    upper_tick: Long;
    liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
    amount0: string;
    amount1: string;
}
export interface MsgWithdrawPositionResponseSDKType {
    amount0: string;
    amount1: string;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFees {
    poolId: Long;
    sender: string;
    lowerTick: Long;
    upperTick: Long;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFeesSDKType {
    pool_id: Long;
    sender: string;
    lower_tick: Long;
    upper_tick: Long;
}
export interface MsgCollectFeesResponse {
    tokenOut: Coin[];
}
export interface MsgCollectFeesResponseSDKType {
    token_out: CoinSDKType[];
}
export declare const MsgCreatePosition: {
    encode(message: MsgCreatePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePosition;
    fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition;
};
export declare const MsgCreatePositionResponse: {
    encode(message: MsgCreatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePositionResponse;
    fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse;
};
export declare const MsgWithdrawPosition: {
    encode(message: MsgWithdrawPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPosition;
    fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition;
};
export declare const MsgWithdrawPositionResponse: {
    encode(message: MsgWithdrawPositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPositionResponse;
    fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse;
};
export declare const MsgCollectFees: {
    encode(message: MsgCollectFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFees;
    fromPartial(object: Partial<MsgCollectFees>): MsgCollectFees;
};
export declare const MsgCollectFeesResponse: {
    encode(message: MsgCollectFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFeesResponse;
    fromPartial(object: Partial<MsgCollectFeesResponse>): MsgCollectFeesResponse;
};
