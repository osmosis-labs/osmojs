import * as _m0 from "protobufjs/minimal";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventGrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant";
    value: Uint8Array;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantAmino {
    /** Msg type URL for which an autorization is granted */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventGrantAminoMsg {
    type: "cosmos-sdk/EventGrant";
    value: EventGrantAmino;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventRevokeProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke";
    value: Uint8Array;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeAmino {
    /** Msg type URL for which an autorization is revoked */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export interface EventRevokeAminoMsg {
    type: "cosmos-sdk/EventRevoke";
    value: EventRevokeAmino;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export declare const EventGrant: {
    typeUrl: string;
    encode(message: EventGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGrant;
    fromPartial(object: Partial<EventGrant>): EventGrant;
    fromAmino(object: EventGrantAmino): EventGrant;
    toAmino(message: EventGrant): EventGrantAmino;
    fromAminoMsg(object: EventGrantAminoMsg): EventGrant;
    toAminoMsg(message: EventGrant): EventGrantAminoMsg;
    fromProtoMsg(message: EventGrantProtoMsg): EventGrant;
    toProto(message: EventGrant): Uint8Array;
    toProtoMsg(message: EventGrant): EventGrantProtoMsg;
};
export declare const EventRevoke: {
    typeUrl: string;
    encode(message: EventRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRevoke;
    fromPartial(object: Partial<EventRevoke>): EventRevoke;
    fromAmino(object: EventRevokeAmino): EventRevoke;
    toAmino(message: EventRevoke): EventRevokeAmino;
    fromAminoMsg(object: EventRevokeAminoMsg): EventRevoke;
    toAminoMsg(message: EventRevoke): EventRevokeAminoMsg;
    fromProtoMsg(message: EventRevokeProtoMsg): EventRevoke;
    toProto(message: EventRevoke): Uint8Array;
    toProtoMsg(message: EventRevoke): EventRevokeProtoMsg;
};
