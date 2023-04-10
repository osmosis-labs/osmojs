import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgCreatePositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition";
    value: Uint8Array;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionAmino {
    pool_id: string;
    sender: string;
    lower_tick: string;
    upper_tick: string;
    token_desired0?: CoinAmino;
    token_desired1?: CoinAmino;
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgCreatePositionAminoMsg {
    type: "osmosis/concentratedliquidity/create-position";
    value: MsgCreatePositionAmino;
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
    positionId: Long;
    amount0: string;
    amount1: string;
    joinTime?: Date;
    liquidityCreated: string;
}
export interface MsgCreatePositionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse";
    value: Uint8Array;
}
export interface MsgCreatePositionResponseAmino {
    position_id: string;
    amount0: string;
    amount1: string;
    join_time?: Date;
    liquidity_created: string;
}
export interface MsgCreatePositionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/create-position-response";
    value: MsgCreatePositionResponseAmino;
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
export interface MsgWithdrawPositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition";
    value: Uint8Array;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionAmino {
    position_id: string;
    sender: string;
    liquidity_amount: string;
}
export interface MsgWithdrawPositionAminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position";
    value: MsgWithdrawPositionAmino;
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
export interface MsgWithdrawPositionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse";
    value: Uint8Array;
}
export interface MsgWithdrawPositionResponseAmino {
    amount0: string;
    amount1: string;
}
export interface MsgWithdrawPositionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position-response";
    value: MsgWithdrawPositionResponseAmino;
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
export interface MsgCollectFeesProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees";
    value: Uint8Array;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFeesAmino {
    position_ids: string[];
    sender: string;
}
export interface MsgCollectFeesAminoMsg {
    type: "osmosis/concentratedliquidity/collect-fees";
    value: MsgCollectFeesAmino;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFeesSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectFeesResponse {
    collectedFees: Coin[];
}
export interface MsgCollectFeesResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFeesResponse";
    value: Uint8Array;
}
export interface MsgCollectFeesResponseAmino {
    collected_fees: CoinAmino[];
}
export interface MsgCollectFeesResponseAminoMsg {
    type: "osmosis/concentratedliquidity/collect-fees-response";
    value: MsgCollectFeesResponseAmino;
}
export interface MsgCollectFeesResponseSDKType {
    collected_fees: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
    positionIds: Long[];
    sender: string;
}
export interface MsgCollectIncentivesProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives";
    value: Uint8Array;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesAmino {
    position_ids: string[];
    sender: string;
}
export interface MsgCollectIncentivesAminoMsg {
    type: "osmosis/concentratedliquidity/collect-incentives";
    value: MsgCollectIncentivesAmino;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectIncentivesResponse {
    collectedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse";
    value: Uint8Array;
}
export interface MsgCollectIncentivesResponseAmino {
    collected_incentives: CoinAmino[];
}
export interface MsgCollectIncentivesResponseAminoMsg {
    type: "osmosis/concentratedliquidity/collect-incentives-response";
    value: MsgCollectIncentivesResponseAmino;
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
export interface MsgCreateIncentiveProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateIncentive";
    value: Uint8Array;
}
/** ===================== MsgCreateIncentive */
export interface MsgCreateIncentiveAmino {
    pool_id: string;
    sender: string;
    incentive_denom: string;
    incentive_amount: string;
    emission_rate: string;
    start_time?: Date;
    min_uptime?: DurationAmino;
}
export interface MsgCreateIncentiveAminoMsg {
    type: "osmosis/concentratedliquidity/create-incentive";
    value: MsgCreateIncentiveAmino;
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
export interface MsgCreateIncentiveResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateIncentiveResponse";
    value: Uint8Array;
}
export interface MsgCreateIncentiveResponseAmino {
    incentive_denom: string;
    incentive_amount: string;
    emission_rate: string;
    start_time?: Date;
    min_uptime?: DurationAmino;
}
export interface MsgCreateIncentiveResponseAminoMsg {
    type: "osmosis/concentratedliquidity/create-incentive-response";
    value: MsgCreateIncentiveResponseAmino;
}
export interface MsgCreateIncentiveResponseSDKType {
    incentive_denom: string;
    incentive_amount: string;
    emission_rate: string;
    start_time?: Date;
    min_uptime?: DurationSDKType;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
    positionIds: Long[];
    sender: string;
}
export interface MsgFungifyChargedPositionsProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions";
    value: Uint8Array;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsAmino {
    position_ids: string[];
    sender: string;
}
export interface MsgFungifyChargedPositionsAminoMsg {
    type: "osmosis/concentratedliquidity/fungify-charged-positions";
    value: MsgFungifyChargedPositionsAmino;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
    newPositionId: Long;
}
export interface MsgFungifyChargedPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse";
    value: Uint8Array;
}
export interface MsgFungifyChargedPositionsResponseAmino {
    new_position_id: string;
}
export interface MsgFungifyChargedPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/fungify-charged-positions-response";
    value: MsgFungifyChargedPositionsResponseAmino;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
    new_position_id: Long;
}
export declare const MsgCreatePosition: {
    typeUrl: string;
    encode(message: MsgCreatePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePosition;
    fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition;
    fromAmino(object: MsgCreatePositionAmino): MsgCreatePosition;
    toAmino(message: MsgCreatePosition): MsgCreatePositionAmino;
    fromAminoMsg(object: MsgCreatePositionAminoMsg): MsgCreatePosition;
    toAminoMsg(message: MsgCreatePosition): MsgCreatePositionAminoMsg;
    fromProtoMsg(message: MsgCreatePositionProtoMsg): MsgCreatePosition;
    toProto(message: MsgCreatePosition): Uint8Array;
    toProtoMsg(message: MsgCreatePosition): MsgCreatePositionProtoMsg;
};
export declare const MsgCreatePositionResponse: {
    typeUrl: string;
    encode(message: MsgCreatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePositionResponse;
    fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse;
    fromAmino(object: MsgCreatePositionResponseAmino): MsgCreatePositionResponse;
    toAmino(message: MsgCreatePositionResponse): MsgCreatePositionResponseAmino;
    fromAminoMsg(object: MsgCreatePositionResponseAminoMsg): MsgCreatePositionResponse;
    toAminoMsg(message: MsgCreatePositionResponse): MsgCreatePositionResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePositionResponseProtoMsg): MsgCreatePositionResponse;
    toProto(message: MsgCreatePositionResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePositionResponse): MsgCreatePositionResponseProtoMsg;
};
export declare const MsgWithdrawPosition: {
    typeUrl: string;
    encode(message: MsgWithdrawPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPosition;
    fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition;
    fromAmino(object: MsgWithdrawPositionAmino): MsgWithdrawPosition;
    toAmino(message: MsgWithdrawPosition): MsgWithdrawPositionAmino;
    fromAminoMsg(object: MsgWithdrawPositionAminoMsg): MsgWithdrawPosition;
    toAminoMsg(message: MsgWithdrawPosition): MsgWithdrawPositionAminoMsg;
    fromProtoMsg(message: MsgWithdrawPositionProtoMsg): MsgWithdrawPosition;
    toProto(message: MsgWithdrawPosition): Uint8Array;
    toProtoMsg(message: MsgWithdrawPosition): MsgWithdrawPositionProtoMsg;
};
export declare const MsgWithdrawPositionResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawPositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPositionResponse;
    fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse;
    fromAmino(object: MsgWithdrawPositionResponseAmino): MsgWithdrawPositionResponse;
    toAmino(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseAmino;
    fromAminoMsg(object: MsgWithdrawPositionResponseAminoMsg): MsgWithdrawPositionResponse;
    toAminoMsg(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawPositionResponseProtoMsg): MsgWithdrawPositionResponse;
    toProto(message: MsgWithdrawPositionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseProtoMsg;
};
export declare const MsgCollectFees: {
    typeUrl: string;
    encode(message: MsgCollectFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFees;
    fromPartial(object: Partial<MsgCollectFees>): MsgCollectFees;
    fromAmino(object: MsgCollectFeesAmino): MsgCollectFees;
    toAmino(message: MsgCollectFees): MsgCollectFeesAmino;
    fromAminoMsg(object: MsgCollectFeesAminoMsg): MsgCollectFees;
    toAminoMsg(message: MsgCollectFees): MsgCollectFeesAminoMsg;
    fromProtoMsg(message: MsgCollectFeesProtoMsg): MsgCollectFees;
    toProto(message: MsgCollectFees): Uint8Array;
    toProtoMsg(message: MsgCollectFees): MsgCollectFeesProtoMsg;
};
export declare const MsgCollectFeesResponse: {
    typeUrl: string;
    encode(message: MsgCollectFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectFeesResponse;
    fromPartial(object: Partial<MsgCollectFeesResponse>): MsgCollectFeesResponse;
    fromAmino(object: MsgCollectFeesResponseAmino): MsgCollectFeesResponse;
    toAmino(message: MsgCollectFeesResponse): MsgCollectFeesResponseAmino;
    fromAminoMsg(object: MsgCollectFeesResponseAminoMsg): MsgCollectFeesResponse;
    toAminoMsg(message: MsgCollectFeesResponse): MsgCollectFeesResponseAminoMsg;
    fromProtoMsg(message: MsgCollectFeesResponseProtoMsg): MsgCollectFeesResponse;
    toProto(message: MsgCollectFeesResponse): Uint8Array;
    toProtoMsg(message: MsgCollectFeesResponse): MsgCollectFeesResponseProtoMsg;
};
export declare const MsgCollectIncentives: {
    typeUrl: string;
    encode(message: MsgCollectIncentives, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentives;
    fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives;
    fromAmino(object: MsgCollectIncentivesAmino): MsgCollectIncentives;
    toAmino(message: MsgCollectIncentives): MsgCollectIncentivesAmino;
    fromAminoMsg(object: MsgCollectIncentivesAminoMsg): MsgCollectIncentives;
    toAminoMsg(message: MsgCollectIncentives): MsgCollectIncentivesAminoMsg;
    fromProtoMsg(message: MsgCollectIncentivesProtoMsg): MsgCollectIncentives;
    toProto(message: MsgCollectIncentives): Uint8Array;
    toProtoMsg(message: MsgCollectIncentives): MsgCollectIncentivesProtoMsg;
};
export declare const MsgCollectIncentivesResponse: {
    typeUrl: string;
    encode(message: MsgCollectIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectIncentivesResponse;
    fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse;
    fromAmino(object: MsgCollectIncentivesResponseAmino): MsgCollectIncentivesResponse;
    toAmino(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseAmino;
    fromAminoMsg(object: MsgCollectIncentivesResponseAminoMsg): MsgCollectIncentivesResponse;
    toAminoMsg(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseAminoMsg;
    fromProtoMsg(message: MsgCollectIncentivesResponseProtoMsg): MsgCollectIncentivesResponse;
    toProto(message: MsgCollectIncentivesResponse): Uint8Array;
    toProtoMsg(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseProtoMsg;
};
export declare const MsgCreateIncentive: {
    typeUrl: string;
    encode(message: MsgCreateIncentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentive;
    fromPartial(object: Partial<MsgCreateIncentive>): MsgCreateIncentive;
    fromAmino(object: MsgCreateIncentiveAmino): MsgCreateIncentive;
    toAmino(message: MsgCreateIncentive): MsgCreateIncentiveAmino;
    fromAminoMsg(object: MsgCreateIncentiveAminoMsg): MsgCreateIncentive;
    toAminoMsg(message: MsgCreateIncentive): MsgCreateIncentiveAminoMsg;
    fromProtoMsg(message: MsgCreateIncentiveProtoMsg): MsgCreateIncentive;
    toProto(message: MsgCreateIncentive): Uint8Array;
    toProtoMsg(message: MsgCreateIncentive): MsgCreateIncentiveProtoMsg;
};
export declare const MsgCreateIncentiveResponse: {
    typeUrl: string;
    encode(message: MsgCreateIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentiveResponse;
    fromPartial(object: Partial<MsgCreateIncentiveResponse>): MsgCreateIncentiveResponse;
    fromAmino(object: MsgCreateIncentiveResponseAmino): MsgCreateIncentiveResponse;
    toAmino(message: MsgCreateIncentiveResponse): MsgCreateIncentiveResponseAmino;
    fromAminoMsg(object: MsgCreateIncentiveResponseAminoMsg): MsgCreateIncentiveResponse;
    toAminoMsg(message: MsgCreateIncentiveResponse): MsgCreateIncentiveResponseAminoMsg;
    fromProtoMsg(message: MsgCreateIncentiveResponseProtoMsg): MsgCreateIncentiveResponse;
    toProto(message: MsgCreateIncentiveResponse): Uint8Array;
    toProtoMsg(message: MsgCreateIncentiveResponse): MsgCreateIncentiveResponseProtoMsg;
};
export declare const MsgFungifyChargedPositions: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFungifyChargedPositions;
    fromPartial(object: Partial<MsgFungifyChargedPositions>): MsgFungifyChargedPositions;
    fromAmino(object: MsgFungifyChargedPositionsAmino): MsgFungifyChargedPositions;
    toAmino(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsAmino;
    fromAminoMsg(object: MsgFungifyChargedPositionsAminoMsg): MsgFungifyChargedPositions;
    toAminoMsg(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsAminoMsg;
    fromProtoMsg(message: MsgFungifyChargedPositionsProtoMsg): MsgFungifyChargedPositions;
    toProto(message: MsgFungifyChargedPositions): Uint8Array;
    toProtoMsg(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsProtoMsg;
};
export declare const MsgFungifyChargedPositionsResponse: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFungifyChargedPositionsResponse;
    fromPartial(object: Partial<MsgFungifyChargedPositionsResponse>): MsgFungifyChargedPositionsResponse;
    fromAmino(object: MsgFungifyChargedPositionsResponseAmino): MsgFungifyChargedPositionsResponse;
    toAmino(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseAmino;
    fromAminoMsg(object: MsgFungifyChargedPositionsResponseAminoMsg): MsgFungifyChargedPositionsResponse;
    toAminoMsg(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseAminoMsg;
    fromProtoMsg(message: MsgFungifyChargedPositionsResponseProtoMsg): MsgFungifyChargedPositionsResponse;
    toProto(message: MsgFungifyChargedPositionsResponse): Uint8Array;
    toProtoMsg(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseProtoMsg;
};
