import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel?: Channel;
    signer: string;
}
export interface MsgChannelOpenInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
    port_id: string;
    channel?: ChannelAmino;
    signer: string;
}
export interface MsgChannelOpenInitAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInit";
    value: MsgChannelOpenInitAmino;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitSDKType {
    port_id: string;
    channel?: ChannelSDKType;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
}
export interface MsgChannelOpenInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
    value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {
}
export interface MsgChannelOpenInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInitResponse";
    value: MsgChannelOpenInitResponseAmino;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previousChannelId: string;
    channel?: Channel;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgChannelOpenTryProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTryAmino {
    port_id: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previous_channel_id: string;
    channel?: ChannelAmino;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenTryAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTry";
    value: MsgChannelOpenTryAmino;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTrySDKType {
    port_id: string;
    previous_channel_id: string;
    channel?: ChannelSDKType;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
}
export interface MsgChannelOpenTryResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
    value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {
}
export interface MsgChannelOpenTryResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTryResponse";
    value: MsgChannelOpenTryResponseAmino;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgChannelOpenAckProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
    value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenAckAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAck";
    value: MsgChannelOpenAckAmino;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckSDKType {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
export interface MsgChannelOpenAckResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
    value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {
}
export interface MsgChannelOpenAckResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAckResponse";
    value: MsgChannelOpenAckResponseAmino;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgChannelOpenConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirm";
    value: MsgChannelOpenConfirmAmino;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
export interface MsgChannelOpenConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {
}
export interface MsgChannelOpenConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirmResponse";
    value: MsgChannelOpenConfirmResponseAmino;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
export interface MsgChannelCloseInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit";
    value: Uint8Array;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
    port_id: string;
    channel_id: string;
    signer: string;
}
export interface MsgChannelCloseInitAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInit";
    value: MsgChannelCloseInitAmino;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitSDKType {
    port_id: string;
    channel_id: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
export interface MsgChannelCloseInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
    value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {
}
export interface MsgChannelCloseInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInitResponse";
    value: MsgChannelCloseInitResponseAmino;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgChannelCloseConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgChannelCloseConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirm";
    value: MsgChannelCloseConfirmAmino;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
export interface MsgChannelCloseConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {
}
export interface MsgChannelCloseConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirmResponse";
    value: MsgChannelCloseConfirmResponseAmino;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet?: Packet;
    proofCommitment: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgRecvPacketProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
    value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
    packet?: PacketAmino;
    proof_commitment: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgRecvPacketAminoMsg {
    type: "cosmos-sdk/MsgRecvPacket";
    value: MsgRecvPacketAmino;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
    packet?: PacketSDKType;
    proof_commitment: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
}
export interface MsgRecvPacketResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
    value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {
}
export interface MsgRecvPacketResponseAminoMsg {
    type: "cosmos-sdk/MsgRecvPacketResponse";
    value: MsgRecvPacketResponseAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
export interface MsgTimeoutProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout";
    value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
    packet?: PacketAmino;
    proof_unreceived: Uint8Array;
    proof_height?: HeightAmino;
    next_sequence_recv: string;
    signer: string;
}
export interface MsgTimeoutAminoMsg {
    type: "cosmos-sdk/MsgTimeout";
    value: MsgTimeoutAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
    packet?: PacketSDKType;
    proof_unreceived: Uint8Array;
    proof_height?: HeightSDKType;
    next_sequence_recv: Long;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
}
export interface MsgTimeoutResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
    value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {
}
export interface MsgTimeoutResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutResponse";
    value: MsgTimeoutResponseAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
export interface MsgTimeoutOnCloseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
    value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
    packet?: PacketAmino;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height?: HeightAmino;
    next_sequence_recv: string;
    signer: string;
}
export interface MsgTimeoutOnCloseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnClose";
    value: MsgTimeoutOnCloseAmino;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
    packet?: PacketSDKType;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height?: HeightSDKType;
    next_sequence_recv: Long;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
}
export interface MsgTimeoutOnCloseResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
    value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {
}
export interface MsgTimeoutOnCloseResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnCloseResponse";
    value: MsgTimeoutOnCloseResponseAmino;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet?: Packet;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
export interface MsgAcknowledgementProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
    value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
    packet?: PacketAmino;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
export interface MsgAcknowledgementAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgement";
    value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
    packet?: PacketSDKType;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
}
export interface MsgAcknowledgementResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
    value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {
}
export interface MsgAcknowledgementResponseAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgementResponse";
    value: MsgAcknowledgementResponseAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {
}
export declare const MsgChannelOpenInit: {
    encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromPartial(object: Partial<MsgChannelOpenInit>): MsgChannelOpenInit;
    fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit;
    toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino;
    fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit;
    toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitProtoMsg): MsgChannelOpenInit;
    toProto(message: MsgChannelOpenInit): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg;
};
export declare const MsgChannelOpenInitResponse: {
    encode(_: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromPartial(_: Partial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
    fromAmino(_: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse;
    toAmino(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino;
    fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse;
    toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg): MsgChannelOpenInitResponse;
    toProto(message: MsgChannelOpenInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg;
};
export declare const MsgChannelOpenTry: {
    encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromPartial(object: Partial<MsgChannelOpenTry>): MsgChannelOpenTry;
    fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry;
    toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino;
    fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry;
    toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryProtoMsg): MsgChannelOpenTry;
    toProto(message: MsgChannelOpenTry): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg;
};
export declare const MsgChannelOpenTryResponse: {
    encode(_: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromPartial(_: Partial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
    fromAmino(_: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse;
    toAmino(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino;
    fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse;
    toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg): MsgChannelOpenTryResponse;
    toProto(message: MsgChannelOpenTryResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg;
};
export declare const MsgChannelOpenAck: {
    encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromPartial(object: Partial<MsgChannelOpenAck>): MsgChannelOpenAck;
    fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck;
    toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino;
    fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck;
    toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckProtoMsg): MsgChannelOpenAck;
    toProto(message: MsgChannelOpenAck): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg;
};
export declare const MsgChannelOpenAckResponse: {
    encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromPartial(_: Partial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
    fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse;
    toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino;
    fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse;
    toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg): MsgChannelOpenAckResponse;
    toProto(message: MsgChannelOpenAckResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg;
};
export declare const MsgChannelOpenConfirm: {
    encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromPartial(object: Partial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
    fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm;
    toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm;
    toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg): MsgChannelOpenConfirm;
    toProto(message: MsgChannelOpenConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg;
};
export declare const MsgChannelOpenConfirmResponse: {
    encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromPartial(_: Partial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
    fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse;
    toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse;
    toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg): MsgChannelOpenConfirmResponse;
    toProto(message: MsgChannelOpenConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg;
};
export declare const MsgChannelCloseInit: {
    encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromPartial(object: Partial<MsgChannelCloseInit>): MsgChannelCloseInit;
    fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit;
    toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino;
    fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit;
    toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitProtoMsg): MsgChannelCloseInit;
    toProto(message: MsgChannelCloseInit): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg;
};
export declare const MsgChannelCloseInitResponse: {
    encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromPartial(_: Partial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
    fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse;
    toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino;
    fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse;
    toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg): MsgChannelCloseInitResponse;
    toProto(message: MsgChannelCloseInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg;
};
export declare const MsgChannelCloseConfirm: {
    encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromPartial(object: Partial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
    fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm;
    toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm;
    toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg): MsgChannelCloseConfirm;
    toProto(message: MsgChannelCloseConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg;
};
export declare const MsgChannelCloseConfirmResponse: {
    encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromPartial(_: Partial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
    fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse;
    toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse;
    toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg): MsgChannelCloseConfirmResponse;
    toProto(message: MsgChannelCloseConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg;
};
export declare const MsgRecvPacket: {
    encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket;
    fromPartial(object: Partial<MsgRecvPacket>): MsgRecvPacket;
    fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket;
    toAmino(message: MsgRecvPacket): MsgRecvPacketAmino;
    fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket;
    toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg;
    fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket;
    toProto(message: MsgRecvPacket): Uint8Array;
    toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg;
};
export declare const MsgRecvPacketResponse: {
    encode(_: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromPartial(_: Partial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
    fromAmino(_: MsgRecvPacketResponseAmino): MsgRecvPacketResponse;
    toAmino(_: MsgRecvPacketResponse): MsgRecvPacketResponseAmino;
    fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse;
    toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg;
    fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse;
    toProto(message: MsgRecvPacketResponse): Uint8Array;
    toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg;
};
export declare const MsgTimeout: {
    encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout;
    fromPartial(object: Partial<MsgTimeout>): MsgTimeout;
    fromAmino(object: MsgTimeoutAmino): MsgTimeout;
    toAmino(message: MsgTimeout): MsgTimeoutAmino;
    fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout;
    toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg;
    fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout;
    toProto(message: MsgTimeout): Uint8Array;
    toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg;
};
export declare const MsgTimeoutResponse: {
    encode(_: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromPartial(_: Partial<MsgTimeoutResponse>): MsgTimeoutResponse;
    fromAmino(_: MsgTimeoutResponseAmino): MsgTimeoutResponse;
    toAmino(_: MsgTimeoutResponse): MsgTimeoutResponseAmino;
    fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse;
    toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse;
    toProto(message: MsgTimeoutResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg;
};
export declare const MsgTimeoutOnClose: {
    encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromPartial(object: Partial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
    fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose;
    toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose;
    toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg): MsgTimeoutOnClose;
    toProto(message: MsgTimeoutOnClose): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg;
};
export declare const MsgTimeoutOnCloseResponse: {
    encode(_: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromPartial(_: Partial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
    fromAmino(_: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse;
    toAmino(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse;
    toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg): MsgTimeoutOnCloseResponse;
    toProto(message: MsgTimeoutOnCloseResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg;
};
export declare const MsgAcknowledgement: {
    encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement;
    fromPartial(object: Partial<MsgAcknowledgement>): MsgAcknowledgement;
    fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement;
    toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino;
    fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement;
    toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement;
    toProto(message: MsgAcknowledgement): Uint8Array;
    toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg;
};
export declare const MsgAcknowledgementResponse: {
    encode(_: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromPartial(_: Partial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
    fromAmino(_: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse;
    toAmino(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino;
    fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse;
    toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse;
    toProto(message: MsgAcknowledgementResponse): Uint8Array;
    toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg;
};
