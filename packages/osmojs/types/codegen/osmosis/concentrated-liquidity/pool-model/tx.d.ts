import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
    sender: string;
    denom0: string;
    denom1: string;
    tickSpacing: Long;
    exponentAtPriceOne: string;
    swapFee: string;
}
export interface MsgCreateConcentratedPoolProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPool";
    value: Uint8Array;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolAmino {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: string;
    exponent_at_price_one: string;
    swap_fee: string;
}
export interface MsgCreateConcentratedPoolAminoMsg {
    type: "osmosis/concentratedliquidity/create-concentrated-pool";
    value: MsgCreateConcentratedPoolAmino;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: Long;
    exponent_at_price_one: string;
    swap_fee: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
    poolId: Long;
}
export interface MsgCreateConcentratedPoolResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPoolResponse";
    value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseAmino {
    pool_id: string;
}
export interface MsgCreateConcentratedPoolResponseAminoMsg {
    type: "osmosis/concentratedliquidity/create-concentrated-pool-response";
    value: MsgCreateConcentratedPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateConcentratedPool: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPool;
    fromPartial(object: Partial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool;
    fromAmino(object: MsgCreateConcentratedPoolAmino): MsgCreateConcentratedPool;
    toAmino(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAmino;
    fromAminoMsg(object: MsgCreateConcentratedPoolAminoMsg): MsgCreateConcentratedPool;
    toAminoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAminoMsg;
    fromProtoMsg(message: MsgCreateConcentratedPoolProtoMsg): MsgCreateConcentratedPool;
    toProto(message: MsgCreateConcentratedPool): Uint8Array;
    toProtoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolProtoMsg;
};
export declare const MsgCreateConcentratedPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse;
    fromPartial(object: Partial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse;
    fromAmino(object: MsgCreateConcentratedPoolResponseAmino): MsgCreateConcentratedPoolResponse;
    toAmino(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAmino;
    fromAminoMsg(object: MsgCreateConcentratedPoolResponseAminoMsg): MsgCreateConcentratedPoolResponse;
    toAminoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateConcentratedPoolResponseProtoMsg): MsgCreateConcentratedPoolResponse;
    toProto(message: MsgCreateConcentratedPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseProtoMsg;
};
