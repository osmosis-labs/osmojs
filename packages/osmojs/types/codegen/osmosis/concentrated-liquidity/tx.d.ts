import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
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
    freezeDuration?: Duration;
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
    freeze_duration?: DurationSDKType;
}
export interface MsgCreatePositionResponse {
    positionId: Long;
    amount0: string;
    amount1: string;
    joinTime?: Date;
    liquidityCreated: string;
}
export interface MsgCreatePositionResponseSDKType {
    position_id: Long;
    amount0: string;
    amount1: string;
    join_time?: Date;
    liquidity_created: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
    positionId: Long;
    sender: string;
    liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
    position_id: Long;
    sender: string;
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
    positionIds: Long[];
    sender: string;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFeesSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectFeesResponse {
    collectedFees: Coin[];
}
export interface MsgCollectFeesResponseSDKType {
    collected_fees: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
    positionIds: Long[];
    sender: string;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectIncentivesResponse {
    collectedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseSDKType {
    collected_incentives: CoinSDKType[];
}
/** ===================== MsgCreateIncentive */
export interface MsgCreateIncentive {
    poolId: Long;
    sender: string;
    incentiveDenom: string;
    incentiveAmount: string;
    emissionRate: string;
    startTime?: Date;
    minUptime?: Duration;
}
/** ===================== MsgCreateIncentive */
export interface MsgCreateIncentiveSDKType {
    pool_id: Long;
    sender: string;
    incentive_denom: string;
    incentive_amount: string;
    emission_rate: string;
    start_time?: Date;
    min_uptime?: DurationSDKType;
}
export interface MsgCreateIncentiveResponse {
    incentiveDenom: string;
    incentiveAmount: string;
    emissionRate: string;
    startTime?: Date;
    minUptime?: Duration;
}
export interface MsgCreateIncentiveResponseSDKType {
    incentive_denom: string;
    incentive_amount: string;
    emission_rate: string;
    start_time?: Date;
    min_uptime?: DurationSDKType;
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
export declare const MsgCollectIncentives: {
    encode(message: MsgCollectIncentives, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentives;
    fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives;
};
export declare const MsgCollectIncentivesResponse: {
    encode(message: MsgCollectIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentivesResponse;
    fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse;
};
export declare const MsgCreateIncentive: {
    encode(message: MsgCreateIncentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentive;
    fromPartial(object: Partial<MsgCreateIncentive>): MsgCreateIncentive;
};
export declare const MsgCreateIncentiveResponse: {
    encode(message: MsgCreateIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentiveResponse;
    fromPartial(object: Partial<MsgCreateIncentiveResponse>): MsgCreateIncentiveResponse;
};
