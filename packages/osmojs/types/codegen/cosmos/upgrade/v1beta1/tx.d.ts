import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan?: Plan;
}
export interface MsgSoftwareUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan?: PlanAmino;
}
export interface MsgSoftwareUpgradeAminoMsg {
    type: "cosmos-sdk/MsgSoftwareUpgrade";
    value: MsgSoftwareUpgradeAmino;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeSDKType {
    authority: string;
    plan?: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
export interface MsgSoftwareUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseAmino {
}
export interface MsgSoftwareUpgradeResponseAminoMsg {
    type: "cosmos-sdk/MsgSoftwareUpgradeResponse";
    value: MsgSoftwareUpgradeResponseAmino;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseSDKType {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
    value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeAmino {
    /** authority is the address of the governance account. */
    authority: string;
}
export interface MsgCancelUpgradeAminoMsg {
    type: "cosmos-sdk/MsgCancelUpgrade";
    value: MsgCancelUpgradeAmino;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeSDKType {
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export interface MsgCancelUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseAmino {
}
export interface MsgCancelUpgradeResponseAminoMsg {
    type: "cosmos-sdk/MsgCancelUpgradeResponse";
    value: MsgCancelUpgradeResponseAmino;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseSDKType {
}
export declare const MsgSoftwareUpgrade: {
    typeUrl: string;
    encode(message: MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade;
    fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade;
    toAmino(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAmino;
    fromAminoMsg(object: MsgSoftwareUpgradeAminoMsg): MsgSoftwareUpgrade;
    toAminoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAminoMsg;
    fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg): MsgSoftwareUpgrade;
    toProto(message: MsgSoftwareUpgrade): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg;
};
export declare const MsgSoftwareUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse;
    fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse;
    toAmino(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAmino;
    fromAminoMsg(object: MsgSoftwareUpgradeResponseAminoMsg): MsgSoftwareUpgradeResponse;
    toAminoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAminoMsg;
    fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg): MsgSoftwareUpgradeResponse;
    toProto(message: MsgSoftwareUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg;
};
export declare const MsgCancelUpgrade: {
    typeUrl: string;
    encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade;
    fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade;
    toAmino(message: MsgCancelUpgrade): MsgCancelUpgradeAmino;
    fromAminoMsg(object: MsgCancelUpgradeAminoMsg): MsgCancelUpgrade;
    toAminoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeAminoMsg;
    fromProtoMsg(message: MsgCancelUpgradeProtoMsg): MsgCancelUpgrade;
    toProto(message: MsgCancelUpgrade): Uint8Array;
    toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg;
};
export declare const MsgCancelUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse;
    fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse;
    toAmino(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAmino;
    fromAminoMsg(object: MsgCancelUpgradeResponseAminoMsg): MsgCancelUpgradeResponse;
    toAminoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAminoMsg;
    fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg): MsgCancelUpgradeResponse;
    toProto(message: MsgCancelUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg;
};
