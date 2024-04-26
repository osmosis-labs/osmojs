//@ts-nocheck
import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType, State } from "./channel";
import { Height, HeightAmino, HeightSDKType, Params, ParamsAmino, ParamsSDKType } from "../../client/v1/client";
import { UpgradeFields, UpgradeFieldsAmino, UpgradeFieldsSDKType, Upgrade, UpgradeAmino, UpgradeSDKType, ErrorReceipt, ErrorReceiptAmino, ErrorReceiptSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { bytesFromBase64, base64FromBytes, isSet } from "../../../../helpers";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const ResponseResultTypeSDKType = ResponseResultType;
export const ResponseResultTypeAmino = ResponseResultType;
export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}
export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel: Channel;
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
  port_id?: string;
  channel?: ChannelAmino;
  signer?: string;
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
  channel: ChannelSDKType;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channelId: string;
  version: string;
}
export interface MsgChannelOpenInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
  value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {
  channel_id?: string;
  version?: string;
}
export interface MsgChannelOpenInitResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInitResponse";
  value: MsgChannelOpenInitResponseAmino;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {
  channel_id: string;
  version: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /** Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC. */
  /** @deprecated */
  previousChannelId: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelOpenTryProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
  value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTryAmino {
  port_id?: string;
  /** Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC. */
  /** @deprecated */
  previous_channel_id?: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel?: ChannelAmino;
  counterparty_version?: string;
  proof_init?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelOpenTryAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: MsgChannelOpenTryAmino;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTrySDKType {
  port_id: string;
  /** @deprecated */
  previous_channel_id: string;
  channel: ChannelSDKType;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
  version: string;
  channelId: string;
}
export interface MsgChannelOpenTryResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
  value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {
  version?: string;
  channel_id?: string;
}
export interface MsgChannelOpenTryResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTryResponse";
  value: MsgChannelOpenTryResponseAmino;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {
  version: string;
  channel_id: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelOpenAckProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
  value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAckAmino {
  port_id?: string;
  channel_id?: string;
  counterparty_channel_id?: string;
  counterparty_version?: string;
  proof_try?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelOpenAckAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: MsgChannelOpenAckAmino;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAckSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}
export interface MsgChannelOpenAckResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
  value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {}
export interface MsgChannelOpenAckResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAckResponse";
  value: MsgChannelOpenAckResponseAmino;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
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
  port_id?: string;
  channel_id?: string;
  proof_ack?: string;
  proof_height?: HeightAmino;
  signer?: string;
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
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}
export interface MsgChannelOpenConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {}
export interface MsgChannelOpenConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirmResponse";
  value: MsgChannelOpenConfirmResponseAmino;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {}
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
  port_id?: string;
  channel_id?: string;
  signer?: string;
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
export interface MsgChannelCloseInitResponse {}
export interface MsgChannelCloseInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
  value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {}
export interface MsgChannelCloseInitResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInitResponse";
  value: MsgChannelCloseInitResponseAmino;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
  counterpartyUpgradeSequence: bigint;
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
  port_id?: string;
  channel_id?: string;
  proof_init?: string;
  proof_height?: HeightAmino;
  signer?: string;
  counterparty_upgrade_sequence?: string;
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
  proof_height: HeightSDKType;
  signer: string;
  counterparty_upgrade_sequence: bigint;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}
export interface MsgChannelCloseConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {}
export interface MsgChannelCloseConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirmResponse";
  value: MsgChannelCloseConfirmResponseAmino;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgRecvPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
  value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
  packet?: PacketAmino;
  proof_commitment?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgRecvPacketAminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: MsgRecvPacketAmino;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
  packet: PacketSDKType;
  proof_commitment: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}
export interface MsgRecvPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
  value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {
  result?: ResponseResultType;
}
export interface MsgRecvPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgRecvPacketResponse";
  value: MsgRecvPacketResponseAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {
  result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
}
export interface MsgTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout";
  value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
  packet?: PacketAmino;
  proof_unreceived?: string;
  proof_height?: HeightAmino;
  next_sequence_recv?: string;
  signer?: string;
}
export interface MsgTimeoutAminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: MsgTimeoutAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: bigint;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}
export interface MsgTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
  value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {
  result?: ResponseResultType;
}
export interface MsgTimeoutResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutResponse";
  value: MsgTimeoutResponseAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {
  result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
  counterpartyUpgradeSequence: bigint;
}
export interface MsgTimeoutOnCloseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
  value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
  packet?: PacketAmino;
  proof_unreceived?: string;
  proof_close?: string;
  proof_height?: HeightAmino;
  next_sequence_recv?: string;
  signer?: string;
  counterparty_upgrade_sequence?: string;
}
export interface MsgTimeoutOnCloseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: MsgTimeoutOnCloseAmino;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: bigint;
  signer: string;
  counterparty_upgrade_sequence: bigint;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
  result: ResponseResultType;
}
export interface MsgTimeoutOnCloseResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
  value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {
  result?: ResponseResultType;
}
export interface MsgTimeoutOnCloseResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnCloseResponse";
  value: MsgTimeoutOnCloseResponseAmino;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {
  result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgAcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
  value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
  packet?: PacketAmino;
  acknowledgement?: string;
  proof_acked?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgAcknowledgementAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
  packet: PacketSDKType;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}
export interface MsgAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
  value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {
  result?: ResponseResultType;
}
export interface MsgAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgementResponse";
  value: MsgAcknowledgementResponseAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {
  result: ResponseResultType;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
  portId: string;
  channelId: string;
  fields: UpgradeFields;
  signer: string;
}
export interface MsgChannelUpgradeInitProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit";
  value: Uint8Array;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInitAmino {
  port_id?: string;
  channel_id?: string;
  fields?: UpgradeFieldsAmino;
  signer?: string;
}
export interface MsgChannelUpgradeInitAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeInit";
  value: MsgChannelUpgradeInitAmino;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInitSDKType {
  port_id: string;
  channel_id: string;
  fields: UpgradeFieldsSDKType;
  signer: string;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
  upgrade: Upgrade;
  upgradeSequence: bigint;
}
export interface MsgChannelUpgradeInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponseAmino {
  upgrade?: UpgradeAmino;
  upgrade_sequence?: string;
}
export interface MsgChannelUpgradeInitResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeInitResponse";
  value: MsgChannelUpgradeInitResponseAmino;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponseSDKType {
  upgrade: UpgradeSDKType;
  upgrade_sequence: bigint;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
  portId: string;
  channelId: string;
  proposedUpgradeConnectionHops: string[];
  counterpartyUpgradeFields: UpgradeFields;
  counterpartyUpgradeSequence: bigint;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeTryProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry";
  value: Uint8Array;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTryAmino {
  port_id?: string;
  channel_id?: string;
  proposed_upgrade_connection_hops?: string[];
  counterparty_upgrade_fields?: UpgradeFieldsAmino;
  counterparty_upgrade_sequence?: string;
  proof_channel?: string;
  proof_upgrade?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeTryAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTry";
  value: MsgChannelUpgradeTryAmino;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTrySDKType {
  port_id: string;
  channel_id: string;
  proposed_upgrade_connection_hops: string[];
  counterparty_upgrade_fields: UpgradeFieldsSDKType;
  counterparty_upgrade_sequence: bigint;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
  upgrade: Upgrade;
  upgradeSequence: bigint;
  result: ResponseResultType;
}
export interface MsgChannelUpgradeTryResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponseAmino {
  upgrade?: UpgradeAmino;
  upgrade_sequence?: string;
  result?: ResponseResultType;
}
export interface MsgChannelUpgradeTryResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTryResponse";
  value: MsgChannelUpgradeTryResponseAmino;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponseSDKType {
  upgrade: UpgradeSDKType;
  upgrade_sequence: bigint;
  result: ResponseResultType;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
  portId: string;
  channelId: string;
  counterpartyUpgrade: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeAckProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck";
  value: Uint8Array;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAckAmino {
  port_id?: string;
  channel_id?: string;
  counterparty_upgrade?: UpgradeAmino;
  proof_channel?: string;
  proof_upgrade?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeAckAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeAck";
  value: MsgChannelUpgradeAckAmino;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAckSDKType {
  port_id: string;
  channel_id: string;
  counterparty_upgrade: UpgradeSDKType;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
  result: ResponseResultType;
}
export interface MsgChannelUpgradeAckResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponseAmino {
  result?: ResponseResultType;
}
export interface MsgChannelUpgradeAckResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeAckResponse";
  value: MsgChannelUpgradeAckResponseAmino;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponseSDKType {
  result: ResponseResultType;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgrade: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeConfirmProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm";
  value: Uint8Array;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirmAmino {
  port_id?: string;
  channel_id?: string;
  counterparty_channel_state?: State;
  counterparty_upgrade?: UpgradeAmino;
  proof_channel?: string;
  proof_upgrade?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeConfirmAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeConfirm";
  value: MsgChannelUpgradeConfirmAmino;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirmSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_state: State;
  counterparty_upgrade: UpgradeSDKType;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
  result: ResponseResultType;
}
export interface MsgChannelUpgradeConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponseAmino {
  result?: ResponseResultType;
}
export interface MsgChannelUpgradeConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse";
  value: MsgChannelUpgradeConfirmResponseAmino;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponseSDKType {
  result: ResponseResultType;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgradeSequence: bigint;
  proofChannel: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeOpenProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen";
  value: Uint8Array;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpenAmino {
  port_id?: string;
  channel_id?: string;
  counterparty_channel_state?: State;
  counterparty_upgrade_sequence?: string;
  proof_channel?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeOpenAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeOpen";
  value: MsgChannelUpgradeOpenAmino;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpenSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_state: State;
  counterparty_upgrade_sequence: bigint;
  proof_channel: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {}
export interface MsgChannelUpgradeOpenResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponseAmino {}
export interface MsgChannelUpgradeOpenResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeOpenResponse";
  value: MsgChannelUpgradeOpenResponseAmino;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponseSDKType {}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
  portId: string;
  channelId: string;
  counterpartyChannel: Channel;
  proofChannel: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout";
  value: Uint8Array;
}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeoutAmino {
  port_id?: string;
  channel_id?: string;
  counterparty_channel?: ChannelAmino;
  proof_channel?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeTimeoutAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTimeout";
  value: MsgChannelUpgradeTimeoutAmino;
}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeoutSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel: ChannelSDKType;
  proof_channel: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {}
export interface MsgChannelUpgradeTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponseAmino {}
export interface MsgChannelUpgradeTimeoutResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse";
  value: MsgChannelUpgradeTimeoutResponseAmino;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponseSDKType {}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
  portId: string;
  channelId: string;
  errorReceipt: ErrorReceipt;
  proofErrorReceipt: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgChannelUpgradeCancelProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel";
  value: Uint8Array;
}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancelAmino {
  port_id?: string;
  channel_id?: string;
  error_receipt?: ErrorReceiptAmino;
  proof_error_receipt?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgChannelUpgradeCancelAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeCancel";
  value: MsgChannelUpgradeCancelAmino;
}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancelSDKType {
  port_id: string;
  channel_id: string;
  error_receipt: ErrorReceiptSDKType;
  proof_error_receipt: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {}
export interface MsgChannelUpgradeCancelResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse";
  value: Uint8Array;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponseAmino {}
export interface MsgChannelUpgradeCancelResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeCancelResponse";
  value: MsgChannelUpgradeCancelResponseAmino;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponseSDKType {}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the channel parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the channel parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
  portId: string;
  channelId: string;
  limit: bigint;
  signer: string;
}
export interface MsgPruneAcknowledgementsProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements";
  value: Uint8Array;
}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsAmino {
  port_id?: string;
  channel_id?: string;
  limit?: string;
  signer?: string;
}
export interface MsgPruneAcknowledgementsAminoMsg {
  type: "cosmos-sdk/MsgPruneAcknowledgements";
  value: MsgPruneAcknowledgementsAmino;
}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsSDKType {
  port_id: string;
  channel_id: string;
  limit: bigint;
  signer: string;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
  /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
  totalPrunedSequences: bigint;
  /** Number of sequences left after pruning. */
  totalRemainingSequences: bigint;
}
export interface MsgPruneAcknowledgementsResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse";
  value: Uint8Array;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponseAmino {
  /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
  total_pruned_sequences?: string;
  /** Number of sequences left after pruning. */
  total_remaining_sequences?: string;
}
export interface MsgPruneAcknowledgementsResponseAminoMsg {
  type: "cosmos-sdk/MsgPruneAcknowledgementsResponse";
  value: MsgPruneAcknowledgementsResponseAmino;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponseSDKType {
  total_pruned_sequences: bigint;
  total_remaining_sequences: bigint;
}
function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    portId: "",
    channel: Channel.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  aminoType: "cosmos-sdk/MsgChannelOpenInit",
  is(o: any): o is MsgChannelOpenInit {
    return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.portId === "string" && Channel.is(o.channel) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelOpenInitSDKType {
    return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && Channel.isSDK(o.channel) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelOpenInitAmino {
    return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && Channel.isAmino(o.channel) && typeof o.signer === "string");
  },
  encode(message: MsgChannelOpenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit {
    return MsgChannelOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInit",
      value: MsgChannelOpenInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenInitProtoMsg): MsgChannelOpenInit {
    return MsgChannelOpenInit.decode(message.value);
  },
  toProto(message: MsgChannelOpenInit): Uint8Array {
    return MsgChannelOpenInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenInit.typeUrl, MsgChannelOpenInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenInit.aminoType, MsgChannelOpenInit.typeUrl);
function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {
    channelId: "",
    version: ""
  };
}
export const MsgChannelOpenInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
  is(o: any): o is MsgChannelOpenInitResponse {
    return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channelId === "string" && typeof o.version === "string");
  },
  isSDK(o: any): o is MsgChannelOpenInitResponseSDKType {
    return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
  },
  isAmino(o: any): o is MsgChannelOpenInitResponseAmino {
    return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
  },
  encode(message: MsgChannelOpenInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    message.channelId = object.channelId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenInitResponse): Uint8Array {
    return MsgChannelOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenInitResponse.typeUrl, MsgChannelOpenInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenInitResponse.aminoType, MsgChannelOpenInitResponse.typeUrl);
function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: Channel.fromPartial({}),
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  aminoType: "cosmos-sdk/MsgChannelOpenTry",
  is(o: any): o is MsgChannelOpenTry {
    return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.portId === "string" && typeof o.previousChannelId === "string" && Channel.is(o.channel) && typeof o.counterpartyVersion === "string" && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelOpenTrySDKType {
    return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && Channel.isSDK(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelOpenTryAmino {
    return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && Channel.isAmino(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelOpenTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
      message.previousChannelId = object.previous_channel_id;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_init !== undefined && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.previous_channel_id = message.previousChannelId === "" ? undefined : message.previousChannelId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry {
    return MsgChannelOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTry",
      value: MsgChannelOpenTry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenTryProtoMsg): MsgChannelOpenTry {
    return MsgChannelOpenTry.decode(message.value);
  },
  toProto(message: MsgChannelOpenTry): Uint8Array {
    return MsgChannelOpenTry.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenTry.typeUrl, MsgChannelOpenTry);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenTry.aminoType, MsgChannelOpenTry.typeUrl);
function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {
    version: "",
    channelId: ""
  };
}
export const MsgChannelOpenTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
  is(o: any): o is MsgChannelOpenTryResponse {
    return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is MsgChannelOpenTryResponseSDKType {
    return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is MsgChannelOpenTryResponseAmino {
    return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
  },
  encode(message: MsgChannelOpenTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    message.version = object.version ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenTryResponse): Uint8Array {
    return MsgChannelOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenTryResponse.typeUrl, MsgChannelOpenTryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenTryResponse.aminoType, MsgChannelOpenTryResponse.typeUrl);
function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  aminoType: "cosmos-sdk/MsgChannelOpenAck",
  is(o: any): o is MsgChannelOpenAck {
    return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.counterpartyChannelId === "string" && typeof o.counterpartyVersion === "string" && (o.proofTry instanceof Uint8Array || typeof o.proofTry === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelOpenAckSDKType {
    return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelOpenAckAmino {
    return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelOpenAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
      message.counterpartyChannelId = object.counterparty_channel_id;
    }
    if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_try !== undefined && object.proof_try !== null) {
      message.proofTry = bytesFromBase64(object.proof_try);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId === "" ? undefined : message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
    obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck {
    return MsgChannelOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAck",
      value: MsgChannelOpenAck.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenAckProtoMsg): MsgChannelOpenAck {
    return MsgChannelOpenAck.decode(message.value);
  },
  toProto(message: MsgChannelOpenAck): Uint8Array {
    return MsgChannelOpenAck.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenAck.typeUrl, MsgChannelOpenAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenAck.aminoType, MsgChannelOpenAck.typeUrl);
function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}
export const MsgChannelOpenAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
  is(o: any): o is MsgChannelOpenAckResponse {
    return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelOpenAckResponseSDKType {
    return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelOpenAckResponseAmino {
    return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
  },
  encode(_: MsgChannelOpenAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenAckResponse): Uint8Array {
    return MsgChannelOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenAckResponse.typeUrl, MsgChannelOpenAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenAckResponse.aminoType, MsgChannelOpenAckResponse.typeUrl);
function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
  is(o: any): o is MsgChannelOpenConfirm {
    return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (o.proofAck instanceof Uint8Array || typeof o.proofAck === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelOpenConfirmSDKType {
    return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelOpenConfirmAmino {
    return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelOpenConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_ack !== undefined && object.proof_ack !== null) {
      message.proofAck = bytesFromBase64(object.proof_ack);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.decode(message.value);
  },
  toProto(message: MsgChannelOpenConfirm): Uint8Array {
    return MsgChannelOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenConfirm.typeUrl, MsgChannelOpenConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenConfirm.aminoType, MsgChannelOpenConfirm.typeUrl);
function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}
export const MsgChannelOpenConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
  is(o: any): o is MsgChannelOpenConfirmResponse {
    return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelOpenConfirmResponseSDKType {
    return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelOpenConfirmResponseAmino {
    return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
  },
  encode(_: MsgChannelOpenConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenConfirmResponse): Uint8Array {
    return MsgChannelOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelOpenConfirmResponse.typeUrl, MsgChannelOpenConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenConfirmResponse.aminoType, MsgChannelOpenConfirmResponse.typeUrl);
function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
export const MsgChannelCloseInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
  aminoType: "cosmos-sdk/MsgChannelCloseInit",
  is(o: any): o is MsgChannelCloseInit {
    return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelCloseInitSDKType {
    return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelCloseInitAmino {
    return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgChannelCloseInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit {
    return MsgChannelCloseInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInit",
      value: MsgChannelCloseInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseInitProtoMsg): MsgChannelCloseInit {
    return MsgChannelCloseInit.decode(message.value);
  },
  toProto(message: MsgChannelCloseInit): Uint8Array {
    return MsgChannelCloseInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelCloseInit.typeUrl, MsgChannelCloseInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseInit.aminoType, MsgChannelCloseInit.typeUrl);
function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}
export const MsgChannelCloseInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
  is(o: any): o is MsgChannelCloseInitResponse {
    return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelCloseInitResponseSDKType {
    return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelCloseInitResponseAmino {
    return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
  },
  encode(_: MsgChannelCloseInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.decode(message.value);
  },
  toProto(message: MsgChannelCloseInitResponse): Uint8Array {
    return MsgChannelCloseInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelCloseInitResponse.typeUrl, MsgChannelCloseInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseInitResponse.aminoType, MsgChannelCloseInitResponse.typeUrl);
function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0)
  };
}
export const MsgChannelCloseConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
  is(o: any): o is MsgChannelCloseConfirm {
    return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && Height.is(o.proofHeight) && typeof o.signer === "string" && typeof o.counterpartyUpgradeSequence === "bigint");
  },
  isSDK(o: any): o is MsgChannelCloseConfirmSDKType {
    return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
  },
  isAmino(o: any): o is MsgChannelCloseConfirmAmino {
    return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
  },
  encode(message: MsgChannelCloseConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        case 6:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_init !== undefined && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.decode(message.value);
  },
  toProto(message: MsgChannelCloseConfirm): Uint8Array {
    return MsgChannelCloseConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelCloseConfirm.typeUrl, MsgChannelCloseConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseConfirm.aminoType, MsgChannelCloseConfirm.typeUrl);
function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}
export const MsgChannelCloseConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
  is(o: any): o is MsgChannelCloseConfirmResponse {
    return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelCloseConfirmResponseSDKType {
    return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelCloseConfirmResponseAmino {
    return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
  },
  encode(_: MsgChannelCloseConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.decode(message.value);
  },
  toProto(message: MsgChannelCloseConfirmResponse): Uint8Array {
    return MsgChannelCloseConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelCloseConfirmResponse.typeUrl, MsgChannelCloseConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseConfirmResponse.aminoType, MsgChannelCloseConfirmResponse.typeUrl);
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  aminoType: "cosmos-sdk/MsgRecvPacket",
  is(o: any): o is MsgRecvPacket {
    return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.is(o.packet) && (o.proofCommitment instanceof Uint8Array || typeof o.proofCommitment === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgRecvPacketSDKType {
    return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.isSDK(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgRecvPacketAmino {
    return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.isAmino(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgRecvPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proof_commitment);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecvPacket): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket {
    return MsgRecvPacket.decode(message.value);
  },
  toProto(message: MsgRecvPacket): Uint8Array {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecvPacket.typeUrl, MsgRecvPacket);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecvPacket.aminoType, MsgRecvPacket.typeUrl);
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {
    result: 0
  };
}
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
  aminoType: "cosmos-sdk/MsgRecvPacketResponse",
  is(o: any): o is MsgRecvPacketResponse {
    return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgRecvPacketResponseSDKType {
    return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgRecvPacketResponseAmino {
    return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgRecvPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgRecvPacketResponse): MsgRecvPacketResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.decode(message.value);
  },
  toProto(message: MsgRecvPacketResponse): Uint8Array {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecvPacketResponse.typeUrl, MsgRecvPacketResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecvPacketResponse.aminoType, MsgRecvPacketResponse.typeUrl);
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  aminoType: "cosmos-sdk/MsgTimeout",
  is(o: any): o is MsgTimeout {
    return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.is(o.packet) && (o.proofUnreceived instanceof Uint8Array || typeof o.proofUnreceived === "string") && Height.is(o.proofHeight) && typeof o.nextSequenceRecv === "bigint" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgTimeoutSDKType {
    return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.isSDK(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.isSDK(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgTimeoutAmino {
    return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
  },
  encode(message: MsgTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgTimeout): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout {
    return MsgTimeout.decode(message.value);
  },
  toProto(message: MsgTimeout): Uint8Array {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTimeout.typeUrl, MsgTimeout);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeout.aminoType, MsgTimeout.typeUrl);
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {
    result: 0
  };
}
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
  aminoType: "cosmos-sdk/MsgTimeoutResponse",
  is(o: any): o is MsgTimeoutResponse {
    return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgTimeoutResponseSDKType {
    return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgTimeoutResponseAmino {
    return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutResponse): MsgTimeoutResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutResponse): Uint8Array {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTimeoutResponse.typeUrl, MsgTimeoutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutResponse.aminoType, MsgTimeoutResponse.typeUrl);
function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0)
  };
}
export const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  aminoType: "cosmos-sdk/MsgTimeoutOnClose",
  is(o: any): o is MsgTimeoutOnClose {
    return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.is(o.packet) && (o.proofUnreceived instanceof Uint8Array || typeof o.proofUnreceived === "string") && (o.proofClose instanceof Uint8Array || typeof o.proofClose === "string") && Height.is(o.proofHeight) && typeof o.nextSequenceRecv === "bigint" && typeof o.signer === "string" && typeof o.counterpartyUpgradeSequence === "bigint");
  },
  isSDK(o: any): o is MsgTimeoutOnCloseSDKType {
    return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.isSDK(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && Height.isSDK(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
  },
  isAmino(o: any): o is MsgTimeoutOnCloseAmino {
    return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
  },
  encode(message: MsgTimeoutOnClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 6:
          message.signer = reader.string();
          break;
        case 7:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_close !== undefined && object.proof_close !== null) {
      message.proofClose = bytesFromBase64(object.proof_close);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_close = message.proofClose ? base64FromBytes(message.proofClose) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.decode(message.value);
  },
  toProto(message: MsgTimeoutOnClose): Uint8Array {
    return MsgTimeoutOnClose.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTimeoutOnClose.typeUrl, MsgTimeoutOnClose);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutOnClose.aminoType, MsgTimeoutOnClose.typeUrl);
function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {
    result: 0
  };
}
export const MsgTimeoutOnCloseResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
  aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
  is(o: any): o is MsgTimeoutOnCloseResponse {
    return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgTimeoutOnCloseResponseSDKType {
    return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgTimeoutOnCloseResponseAmino {
    return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgTimeoutOnCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutOnCloseResponse): Uint8Array {
    return MsgTimeoutOnCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTimeoutOnCloseResponse.typeUrl, MsgTimeoutOnCloseResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutOnCloseResponse.aminoType, MsgTimeoutOnCloseResponse.typeUrl);
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  aminoType: "cosmos-sdk/MsgAcknowledgement",
  is(o: any): o is MsgAcknowledgement {
    return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.is(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proofAcked instanceof Uint8Array || typeof o.proofAcked === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgAcknowledgementSDKType {
    return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.isSDK(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgAcknowledgementAmino {
    return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.isAmino(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof_acked !== undefined && object.proof_acked !== null) {
      message.proofAcked = bytesFromBase64(object.proof_acked);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.decode(message.value);
  },
  toProto(message: MsgAcknowledgement): Uint8Array {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcknowledgement.typeUrl, MsgAcknowledgement);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAcknowledgement.aminoType, MsgAcknowledgement.typeUrl);
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {
    result: 0
  };
}
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
  aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
  is(o: any): o is MsgAcknowledgementResponse {
    return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgAcknowledgementResponseSDKType {
    return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgAcknowledgementResponseAmino {
    return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.decode(message.value);
  },
  toProto(message: MsgAcknowledgementResponse): Uint8Array {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcknowledgementResponse.typeUrl, MsgAcknowledgementResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAcknowledgementResponse.aminoType, MsgAcknowledgementResponse.typeUrl);
function createBaseMsgChannelUpgradeInit(): MsgChannelUpgradeInit {
  return {
    portId: "",
    channelId: "",
    fields: UpgradeFields.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
  aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
  is(o: any): o is MsgChannelUpgradeInit {
    return o && (o.$typeUrl === MsgChannelUpgradeInit.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && UpgradeFields.is(o.fields) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeInitSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && UpgradeFields.isSDK(o.fields) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeInitAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && UpgradeFields.isAmino(o.fields) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeInit>): MsgChannelUpgradeInit {
    const message = createBaseMsgChannelUpgradeInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.fields = object.fields !== undefined && object.fields !== null ? UpgradeFields.fromPartial(object.fields) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeInitAmino): MsgChannelUpgradeInit {
    const message = createBaseMsgChannelUpgradeInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = UpgradeFields.fromAmino(object.fields);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.fields = message.fields ? UpgradeFields.toAmino(message.fields) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeInitAminoMsg): MsgChannelUpgradeInit {
    return MsgChannelUpgradeInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInit",
      value: MsgChannelUpgradeInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeInitProtoMsg): MsgChannelUpgradeInit {
    return MsgChannelUpgradeInit.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeInit): Uint8Array {
    return MsgChannelUpgradeInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
      value: MsgChannelUpgradeInit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeInit.typeUrl, MsgChannelUpgradeInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeInit.aminoType, MsgChannelUpgradeInit.typeUrl);
function createBaseMsgChannelUpgradeInitResponse(): MsgChannelUpgradeInitResponse {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0)
  };
}
export const MsgChannelUpgradeInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeInitResponse",
  is(o: any): o is MsgChannelUpgradeInitResponse {
    return o && (o.$typeUrl === MsgChannelUpgradeInitResponse.typeUrl || Upgrade.is(o.upgrade) && typeof o.upgradeSequence === "bigint");
  },
  isSDK(o: any): o is MsgChannelUpgradeInitResponseSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeInitResponse.typeUrl || Upgrade.isSDK(o.upgrade) && typeof o.upgrade_sequence === "bigint");
  },
  isAmino(o: any): o is MsgChannelUpgradeInitResponseAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeInitResponse.typeUrl || Upgrade.isAmino(o.upgrade) && typeof o.upgrade_sequence === "bigint");
  },
  encode(message: MsgChannelUpgradeInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeInitResponse>): MsgChannelUpgradeInitResponse {
    const message = createBaseMsgChannelUpgradeInitResponse();
    message.upgrade = object.upgrade !== undefined && object.upgrade !== null ? Upgrade.fromPartial(object.upgrade) : undefined;
    message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChannelUpgradeInitResponseAmino): MsgChannelUpgradeInitResponse {
    const message = createBaseMsgChannelUpgradeInitResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAmino {
    const obj: any = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : undefined;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeInitResponseAminoMsg): MsgChannelUpgradeInitResponse {
    return MsgChannelUpgradeInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInitResponse",
      value: MsgChannelUpgradeInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeInitResponseProtoMsg): MsgChannelUpgradeInitResponse {
    return MsgChannelUpgradeInitResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeInitResponse): Uint8Array {
    return MsgChannelUpgradeInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
      value: MsgChannelUpgradeInitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeInitResponse.typeUrl, MsgChannelUpgradeInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeInitResponse.aminoType, MsgChannelUpgradeInitResponse.typeUrl);
function createBaseMsgChannelUpgradeTry(): MsgChannelUpgradeTry {
  return {
    portId: "",
    channelId: "",
    proposedUpgradeConnectionHops: [],
    counterpartyUpgradeFields: UpgradeFields.fromPartial({}),
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
  aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
  is(o: any): o is MsgChannelUpgradeTry {
    return o && (o.$typeUrl === MsgChannelUpgradeTry.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Array.isArray(o.proposedUpgradeConnectionHops) && (!o.proposedUpgradeConnectionHops.length || typeof o.proposedUpgradeConnectionHops[0] === "string") && UpgradeFields.is(o.counterpartyUpgradeFields) && typeof o.counterpartyUpgradeSequence === "bigint" && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeTrySDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeTry.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.proposed_upgrade_connection_hops) && (!o.proposed_upgrade_connection_hops.length || typeof o.proposed_upgrade_connection_hops[0] === "string") && UpgradeFields.isSDK(o.counterparty_upgrade_fields) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeTryAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeTry.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.proposed_upgrade_connection_hops) && (!o.proposed_upgrade_connection_hops.length || typeof o.proposed_upgrade_connection_hops[0] === "string") && UpgradeFields.isAmino(o.counterparty_upgrade_fields) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    for (const v of message.proposedUpgradeConnectionHops) {
      writer.uint32(26).string(v!);
    }
    if (message.counterpartyUpgradeFields !== undefined) {
      UpgradeFields.encode(message.counterpartyUpgradeFields, writer.uint32(34).fork()).ldelim();
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(50).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(58).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proposedUpgradeConnectionHops.push(reader.string());
          break;
        case 4:
          message.counterpartyUpgradeFields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 5:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 6:
          message.proofChannel = reader.bytes();
          break;
        case 7:
          message.proofUpgrade = reader.bytes();
          break;
        case 8:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 9:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeTry>): MsgChannelUpgradeTry {
    const message = createBaseMsgChannelUpgradeTry();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops?.map(e => e) || [];
    message.counterpartyUpgradeFields = object.counterpartyUpgradeFields !== undefined && object.counterpartyUpgradeFields !== null ? UpgradeFields.fromPartial(object.counterpartyUpgradeFields) : undefined;
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTryAmino): MsgChannelUpgradeTry {
    const message = createBaseMsgChannelUpgradeTry();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    message.proposedUpgradeConnectionHops = object.proposed_upgrade_connection_hops?.map(e => e) || [];
    if (object.counterparty_upgrade_fields !== undefined && object.counterparty_upgrade_fields !== null) {
      message.counterpartyUpgradeFields = UpgradeFields.fromAmino(object.counterparty_upgrade_fields);
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    if (message.proposedUpgradeConnectionHops) {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops.map(e => e);
    } else {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops;
    }
    obj.counterparty_upgrade_fields = message.counterpartyUpgradeFields ? UpgradeFields.toAmino(message.counterpartyUpgradeFields) : undefined;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence.toString() : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTryAminoMsg): MsgChannelUpgradeTry {
    return MsgChannelUpgradeTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTry",
      value: MsgChannelUpgradeTry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeTryProtoMsg): MsgChannelUpgradeTry {
    return MsgChannelUpgradeTry.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeTry): Uint8Array {
    return MsgChannelUpgradeTry.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
      value: MsgChannelUpgradeTry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeTry.typeUrl, MsgChannelUpgradeTry);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeTry.aminoType, MsgChannelUpgradeTry.typeUrl);
function createBaseMsgChannelUpgradeTryResponse(): MsgChannelUpgradeTryResponse {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0),
    result: 0
  };
}
export const MsgChannelUpgradeTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeTryResponse",
  is(o: any): o is MsgChannelUpgradeTryResponse {
    return o && (o.$typeUrl === MsgChannelUpgradeTryResponse.typeUrl || Upgrade.is(o.upgrade) && typeof o.upgradeSequence === "bigint" && isSet(o.result));
  },
  isSDK(o: any): o is MsgChannelUpgradeTryResponseSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeTryResponse.typeUrl || Upgrade.isSDK(o.upgrade) && typeof o.upgrade_sequence === "bigint" && isSet(o.result));
  },
  isAmino(o: any): o is MsgChannelUpgradeTryResponseAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeTryResponse.typeUrl || Upgrade.isAmino(o.upgrade) && typeof o.upgrade_sequence === "bigint" && isSet(o.result));
  },
  encode(message: MsgChannelUpgradeTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64();
          break;
        case 3:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeTryResponse>): MsgChannelUpgradeTryResponse {
    const message = createBaseMsgChannelUpgradeTryResponse();
    message.upgrade = object.upgrade !== undefined && object.upgrade !== null ? Upgrade.fromPartial(object.upgrade) : undefined;
    message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTryResponseAmino): MsgChannelUpgradeTryResponse {
    const message = createBaseMsgChannelUpgradeTryResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAmino {
    const obj: any = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : undefined;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence.toString() : undefined;
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTryResponseAminoMsg): MsgChannelUpgradeTryResponse {
    return MsgChannelUpgradeTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTryResponse",
      value: MsgChannelUpgradeTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeTryResponseProtoMsg): MsgChannelUpgradeTryResponse {
    return MsgChannelUpgradeTryResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeTryResponse): Uint8Array {
    return MsgChannelUpgradeTryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
      value: MsgChannelUpgradeTryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeTryResponse.typeUrl, MsgChannelUpgradeTryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeTryResponse.aminoType, MsgChannelUpgradeTryResponse.typeUrl);
function createBaseMsgChannelUpgradeAck(): MsgChannelUpgradeAck {
  return {
    portId: "",
    channelId: "",
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
  aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
  is(o: any): o is MsgChannelUpgradeAck {
    return o && (o.$typeUrl === MsgChannelUpgradeAck.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Upgrade.is(o.counterpartyUpgrade) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeAckSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Upgrade.isSDK(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeAckAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Upgrade.isAmino(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofUpgrade = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeAck>): MsgChannelUpgradeAck {
    const message = createBaseMsgChannelUpgradeAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyUpgrade = object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null ? Upgrade.fromPartial(object.counterpartyUpgrade) : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeAckAmino): MsgChannelUpgradeAck {
    const message = createBaseMsgChannelUpgradeAck();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_upgrade = message.counterpartyUpgrade ? Upgrade.toAmino(message.counterpartyUpgrade) : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeAckAminoMsg): MsgChannelUpgradeAck {
    return MsgChannelUpgradeAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAck",
      value: MsgChannelUpgradeAck.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeAckProtoMsg): MsgChannelUpgradeAck {
    return MsgChannelUpgradeAck.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeAck): Uint8Array {
    return MsgChannelUpgradeAck.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
      value: MsgChannelUpgradeAck.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeAck.typeUrl, MsgChannelUpgradeAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeAck.aminoType, MsgChannelUpgradeAck.typeUrl);
function createBaseMsgChannelUpgradeAckResponse(): MsgChannelUpgradeAckResponse {
  return {
    result: 0
  };
}
export const MsgChannelUpgradeAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeAckResponse",
  is(o: any): o is MsgChannelUpgradeAckResponse {
    return o && (o.$typeUrl === MsgChannelUpgradeAckResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgChannelUpgradeAckResponseSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeAckResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgChannelUpgradeAckResponseAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeAckResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgChannelUpgradeAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeAckResponse>): MsgChannelUpgradeAckResponse {
    const message = createBaseMsgChannelUpgradeAckResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeAckResponseAmino): MsgChannelUpgradeAckResponse {
    const message = createBaseMsgChannelUpgradeAckResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeAckResponseAminoMsg): MsgChannelUpgradeAckResponse {
    return MsgChannelUpgradeAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAckResponse",
      value: MsgChannelUpgradeAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeAckResponseProtoMsg): MsgChannelUpgradeAckResponse {
    return MsgChannelUpgradeAckResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeAckResponse): Uint8Array {
    return MsgChannelUpgradeAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
      value: MsgChannelUpgradeAckResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeAckResponse.typeUrl, MsgChannelUpgradeAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeAckResponse.aminoType, MsgChannelUpgradeAckResponse.typeUrl);
function createBaseMsgChannelUpgradeConfirm(): MsgChannelUpgradeConfirm {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
  aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
  is(o: any): o is MsgChannelUpgradeConfirm {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && isSet(o.counterpartyChannelState) && Upgrade.is(o.counterpartyUpgrade) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeConfirmSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && isSet(o.counterparty_channel_state) && Upgrade.isSDK(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeConfirmAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && isSet(o.counterparty_channel_state) && Upgrade.isAmino(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(50).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(66).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelState = (reader.int32() as any);
          break;
        case 4:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofUpgrade = reader.bytes();
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeConfirm>): MsgChannelUpgradeConfirm {
    const message = createBaseMsgChannelUpgradeConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgrade = object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null ? Upgrade.fromPartial(object.counterpartyUpgrade) : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeConfirmAmino): MsgChannelUpgradeConfirm {
    const message = createBaseMsgChannelUpgradeConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
    obj.counterparty_upgrade = message.counterpartyUpgrade ? Upgrade.toAmino(message.counterpartyUpgrade) : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeConfirmAminoMsg): MsgChannelUpgradeConfirm {
    return MsgChannelUpgradeConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirm",
      value: MsgChannelUpgradeConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeConfirmProtoMsg): MsgChannelUpgradeConfirm {
    return MsgChannelUpgradeConfirm.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeConfirm): Uint8Array {
    return MsgChannelUpgradeConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
      value: MsgChannelUpgradeConfirm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeConfirm.typeUrl, MsgChannelUpgradeConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeConfirm.aminoType, MsgChannelUpgradeConfirm.typeUrl);
function createBaseMsgChannelUpgradeConfirmResponse(): MsgChannelUpgradeConfirmResponse {
  return {
    result: 0
  };
}
export const MsgChannelUpgradeConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
  is(o: any): o is MsgChannelUpgradeConfirmResponse {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirmResponse.typeUrl || isSet(o.result));
  },
  isSDK(o: any): o is MsgChannelUpgradeConfirmResponseSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirmResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgChannelUpgradeConfirmResponseAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeConfirmResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgChannelUpgradeConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeConfirmResponse>): MsgChannelUpgradeConfirmResponse {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeConfirmResponseAmino): MsgChannelUpgradeConfirmResponse {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeConfirmResponseAminoMsg): MsgChannelUpgradeConfirmResponse {
    return MsgChannelUpgradeConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
      value: MsgChannelUpgradeConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeConfirmResponseProtoMsg): MsgChannelUpgradeConfirmResponse {
    return MsgChannelUpgradeConfirmResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeConfirmResponse): Uint8Array {
    return MsgChannelUpgradeConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
      value: MsgChannelUpgradeConfirmResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeConfirmResponse.typeUrl, MsgChannelUpgradeConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeConfirmResponse.aminoType, MsgChannelUpgradeConfirmResponse.typeUrl);
function createBaseMsgChannelUpgradeOpen(): MsgChannelUpgradeOpen {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeOpen = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
  aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
  is(o: any): o is MsgChannelUpgradeOpen {
    return o && (o.$typeUrl === MsgChannelUpgradeOpen.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && isSet(o.counterpartyChannelState) && typeof o.counterpartyUpgradeSequence === "bigint" && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeOpenSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeOpen.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && isSet(o.counterparty_channel_state) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeOpenAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeOpen.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && isSet(o.counterparty_channel_state) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelState = (reader.int32() as any);
          break;
        case 4:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeOpen>): MsgChannelUpgradeOpen {
    const message = createBaseMsgChannelUpgradeOpen();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeOpenAmino): MsgChannelUpgradeOpen {
    const message = createBaseMsgChannelUpgradeOpen();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence.toString() : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeOpenAminoMsg): MsgChannelUpgradeOpen {
    return MsgChannelUpgradeOpen.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpen",
      value: MsgChannelUpgradeOpen.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeOpenProtoMsg): MsgChannelUpgradeOpen {
    return MsgChannelUpgradeOpen.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeOpen): Uint8Array {
    return MsgChannelUpgradeOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
      value: MsgChannelUpgradeOpen.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeOpen.typeUrl, MsgChannelUpgradeOpen);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeOpen.aminoType, MsgChannelUpgradeOpen.typeUrl);
function createBaseMsgChannelUpgradeOpenResponse(): MsgChannelUpgradeOpenResponse {
  return {};
}
export const MsgChannelUpgradeOpenResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
  is(o: any): o is MsgChannelUpgradeOpenResponse {
    return o && o.$typeUrl === MsgChannelUpgradeOpenResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelUpgradeOpenResponseSDKType {
    return o && o.$typeUrl === MsgChannelUpgradeOpenResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelUpgradeOpenResponseAmino {
    return o && o.$typeUrl === MsgChannelUpgradeOpenResponse.typeUrl;
  },
  encode(_: MsgChannelUpgradeOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelUpgradeOpenResponse>): MsgChannelUpgradeOpenResponse {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeOpenResponseAmino): MsgChannelUpgradeOpenResponse {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeOpenResponseAminoMsg): MsgChannelUpgradeOpenResponse {
    return MsgChannelUpgradeOpenResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
      value: MsgChannelUpgradeOpenResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeOpenResponseProtoMsg): MsgChannelUpgradeOpenResponse {
    return MsgChannelUpgradeOpenResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeOpenResponse): Uint8Array {
    return MsgChannelUpgradeOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
      value: MsgChannelUpgradeOpenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeOpenResponse.typeUrl, MsgChannelUpgradeOpenResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeOpenResponse.aminoType, MsgChannelUpgradeOpenResponse.typeUrl);
function createBaseMsgChannelUpgradeTimeout(): MsgChannelUpgradeTimeout {
  return {
    portId: "",
    channelId: "",
    counterpartyChannel: Channel.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
  aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
  is(o: any): o is MsgChannelUpgradeTimeout {
    return o && (o.$typeUrl === MsgChannelUpgradeTimeout.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Channel.is(o.counterpartyChannel) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeTimeoutSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeTimeout.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Channel.isSDK(o.counterparty_channel) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeTimeoutAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeTimeout.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Channel.isAmino(o.counterparty_channel) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannel !== undefined) {
      Channel.encode(message.counterpartyChannel, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeTimeout>): MsgChannelUpgradeTimeout {
    const message = createBaseMsgChannelUpgradeTimeout();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannel = object.counterpartyChannel !== undefined && object.counterpartyChannel !== null ? Channel.fromPartial(object.counterpartyChannel) : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTimeoutAmino): MsgChannelUpgradeTimeout {
    const message = createBaseMsgChannelUpgradeTimeout();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel !== undefined && object.counterparty_channel !== null) {
      message.counterpartyChannel = Channel.fromAmino(object.counterparty_channel);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel = message.counterpartyChannel ? Channel.toAmino(message.counterpartyChannel) : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTimeoutAminoMsg): MsgChannelUpgradeTimeout {
    return MsgChannelUpgradeTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeout",
      value: MsgChannelUpgradeTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeTimeoutProtoMsg): MsgChannelUpgradeTimeout {
    return MsgChannelUpgradeTimeout.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeTimeout): Uint8Array {
    return MsgChannelUpgradeTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
      value: MsgChannelUpgradeTimeout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeTimeout.typeUrl, MsgChannelUpgradeTimeout);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeTimeout.aminoType, MsgChannelUpgradeTimeout.typeUrl);
function createBaseMsgChannelUpgradeTimeoutResponse(): MsgChannelUpgradeTimeoutResponse {
  return {};
}
export const MsgChannelUpgradeTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
  is(o: any): o is MsgChannelUpgradeTimeoutResponse {
    return o && o.$typeUrl === MsgChannelUpgradeTimeoutResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelUpgradeTimeoutResponseSDKType {
    return o && o.$typeUrl === MsgChannelUpgradeTimeoutResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelUpgradeTimeoutResponseAmino {
    return o && o.$typeUrl === MsgChannelUpgradeTimeoutResponse.typeUrl;
  },
  encode(_: MsgChannelUpgradeTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelUpgradeTimeoutResponse>): MsgChannelUpgradeTimeoutResponse {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeTimeoutResponseAmino): MsgChannelUpgradeTimeoutResponse {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTimeoutResponseAminoMsg): MsgChannelUpgradeTimeoutResponse {
    return MsgChannelUpgradeTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
      value: MsgChannelUpgradeTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeTimeoutResponseProtoMsg): MsgChannelUpgradeTimeoutResponse {
    return MsgChannelUpgradeTimeoutResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeTimeoutResponse): Uint8Array {
    return MsgChannelUpgradeTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
      value: MsgChannelUpgradeTimeoutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeTimeoutResponse.typeUrl, MsgChannelUpgradeTimeoutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeTimeoutResponse.aminoType, MsgChannelUpgradeTimeoutResponse.typeUrl);
function createBaseMsgChannelUpgradeCancel(): MsgChannelUpgradeCancel {
  return {
    portId: "",
    channelId: "",
    errorReceipt: ErrorReceipt.fromPartial({}),
    proofErrorReceipt: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelUpgradeCancel = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
  aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
  is(o: any): o is MsgChannelUpgradeCancel {
    return o && (o.$typeUrl === MsgChannelUpgradeCancel.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && ErrorReceipt.is(o.errorReceipt) && (o.proofErrorReceipt instanceof Uint8Array || typeof o.proofErrorReceipt === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgChannelUpgradeCancelSDKType {
    return o && (o.$typeUrl === MsgChannelUpgradeCancel.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && ErrorReceipt.isSDK(o.error_receipt) && (o.proof_error_receipt instanceof Uint8Array || typeof o.proof_error_receipt === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgChannelUpgradeCancelAmino {
    return o && (o.$typeUrl === MsgChannelUpgradeCancel.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && ErrorReceipt.isAmino(o.error_receipt) && (o.proof_error_receipt instanceof Uint8Array || typeof o.proof_error_receipt === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgChannelUpgradeCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.errorReceipt !== undefined) {
      ErrorReceipt.encode(message.errorReceipt, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofErrorReceipt.length !== 0) {
      writer.uint32(34).bytes(message.proofErrorReceipt);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.errorReceipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofErrorReceipt = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChannelUpgradeCancel>): MsgChannelUpgradeCancel {
    const message = createBaseMsgChannelUpgradeCancel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.errorReceipt = object.errorReceipt !== undefined && object.errorReceipt !== null ? ErrorReceipt.fromPartial(object.errorReceipt) : undefined;
    message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeCancelAmino): MsgChannelUpgradeCancel {
    const message = createBaseMsgChannelUpgradeCancel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.error_receipt !== undefined && object.error_receipt !== null) {
      message.errorReceipt = ErrorReceipt.fromAmino(object.error_receipt);
    }
    if (object.proof_error_receipt !== undefined && object.proof_error_receipt !== null) {
      message.proofErrorReceipt = bytesFromBase64(object.proof_error_receipt);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.error_receipt = message.errorReceipt ? ErrorReceipt.toAmino(message.errorReceipt) : undefined;
    obj.proof_error_receipt = message.proofErrorReceipt ? base64FromBytes(message.proofErrorReceipt) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeCancelAminoMsg): MsgChannelUpgradeCancel {
    return MsgChannelUpgradeCancel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancel",
      value: MsgChannelUpgradeCancel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeCancelProtoMsg): MsgChannelUpgradeCancel {
    return MsgChannelUpgradeCancel.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeCancel): Uint8Array {
    return MsgChannelUpgradeCancel.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
      value: MsgChannelUpgradeCancel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeCancel.typeUrl, MsgChannelUpgradeCancel);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeCancel.aminoType, MsgChannelUpgradeCancel.typeUrl);
function createBaseMsgChannelUpgradeCancelResponse(): MsgChannelUpgradeCancelResponse {
  return {};
}
export const MsgChannelUpgradeCancelResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
  aminoType: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
  is(o: any): o is MsgChannelUpgradeCancelResponse {
    return o && o.$typeUrl === MsgChannelUpgradeCancelResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChannelUpgradeCancelResponseSDKType {
    return o && o.$typeUrl === MsgChannelUpgradeCancelResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChannelUpgradeCancelResponseAmino {
    return o && o.$typeUrl === MsgChannelUpgradeCancelResponse.typeUrl;
  },
  encode(_: MsgChannelUpgradeCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChannelUpgradeCancelResponse>): MsgChannelUpgradeCancelResponse {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeCancelResponseAmino): MsgChannelUpgradeCancelResponse {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeCancelResponseAminoMsg): MsgChannelUpgradeCancelResponse {
    return MsgChannelUpgradeCancelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
      value: MsgChannelUpgradeCancelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelUpgradeCancelResponseProtoMsg): MsgChannelUpgradeCancelResponse {
    return MsgChannelUpgradeCancelResponse.decode(message.value);
  },
  toProto(message: MsgChannelUpgradeCancelResponse): Uint8Array {
    return MsgChannelUpgradeCancelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
      value: MsgChannelUpgradeCancelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChannelUpgradeCancelResponse.typeUrl, MsgChannelUpgradeCancelResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelUpgradeCancelResponse.aminoType, MsgChannelUpgradeCancelResponse.typeUrl);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
  aminoType: "cosmos-sdk/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
function createBaseMsgPruneAcknowledgements(): MsgPruneAcknowledgements {
  return {
    portId: "",
    channelId: "",
    limit: BigInt(0),
    signer: ""
  };
}
export const MsgPruneAcknowledgements = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
  aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
  is(o: any): o is MsgPruneAcknowledgements {
    return o && (o.$typeUrl === MsgPruneAcknowledgements.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.limit === "bigint" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgPruneAcknowledgementsSDKType {
    return o && (o.$typeUrl === MsgPruneAcknowledgements.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.limit === "bigint" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgPruneAcknowledgementsAmino {
    return o && (o.$typeUrl === MsgPruneAcknowledgements.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.limit === "bigint" && typeof o.signer === "string");
  },
  encode(message: MsgPruneAcknowledgements, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgements {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPruneAcknowledgements>): MsgPruneAcknowledgements {
    const message = createBaseMsgPruneAcknowledgements();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgPruneAcknowledgementsAmino): MsgPruneAcknowledgements {
    const message = createBaseMsgPruneAcknowledgements();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.limit = message.limit !== BigInt(0) ? message.limit.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAcknowledgementsAminoMsg): MsgPruneAcknowledgements {
    return MsgPruneAcknowledgements.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgements",
      value: MsgPruneAcknowledgements.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneAcknowledgementsProtoMsg): MsgPruneAcknowledgements {
    return MsgPruneAcknowledgements.decode(message.value);
  },
  toProto(message: MsgPruneAcknowledgements): Uint8Array {
    return MsgPruneAcknowledgements.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
      value: MsgPruneAcknowledgements.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPruneAcknowledgements.typeUrl, MsgPruneAcknowledgements);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneAcknowledgements.aminoType, MsgPruneAcknowledgements.typeUrl);
function createBaseMsgPruneAcknowledgementsResponse(): MsgPruneAcknowledgementsResponse {
  return {
    totalPrunedSequences: BigInt(0),
    totalRemainingSequences: BigInt(0)
  };
}
export const MsgPruneAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
  aminoType: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
  is(o: any): o is MsgPruneAcknowledgementsResponse {
    return o && (o.$typeUrl === MsgPruneAcknowledgementsResponse.typeUrl || typeof o.totalPrunedSequences === "bigint" && typeof o.totalRemainingSequences === "bigint");
  },
  isSDK(o: any): o is MsgPruneAcknowledgementsResponseSDKType {
    return o && (o.$typeUrl === MsgPruneAcknowledgementsResponse.typeUrl || typeof o.total_pruned_sequences === "bigint" && typeof o.total_remaining_sequences === "bigint");
  },
  isAmino(o: any): o is MsgPruneAcknowledgementsResponseAmino {
    return o && (o.$typeUrl === MsgPruneAcknowledgementsResponse.typeUrl || typeof o.total_pruned_sequences === "bigint" && typeof o.total_remaining_sequences === "bigint");
  },
  encode(message: MsgPruneAcknowledgementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalPrunedSequences !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalPrunedSequences);
    }
    if (message.totalRemainingSequences !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalRemainingSequences);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrunedSequences = reader.uint64();
          break;
        case 2:
          message.totalRemainingSequences = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPruneAcknowledgementsResponse>): MsgPruneAcknowledgementsResponse {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    message.totalPrunedSequences = object.totalPrunedSequences !== undefined && object.totalPrunedSequences !== null ? BigInt(object.totalPrunedSequences.toString()) : BigInt(0);
    message.totalRemainingSequences = object.totalRemainingSequences !== undefined && object.totalRemainingSequences !== null ? BigInt(object.totalRemainingSequences.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPruneAcknowledgementsResponseAmino): MsgPruneAcknowledgementsResponse {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    if (object.total_pruned_sequences !== undefined && object.total_pruned_sequences !== null) {
      message.totalPrunedSequences = BigInt(object.total_pruned_sequences);
    }
    if (object.total_remaining_sequences !== undefined && object.total_remaining_sequences !== null) {
      message.totalRemainingSequences = BigInt(object.total_remaining_sequences);
    }
    return message;
  },
  toAmino(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAmino {
    const obj: any = {};
    obj.total_pruned_sequences = message.totalPrunedSequences !== BigInt(0) ? message.totalPrunedSequences.toString() : undefined;
    obj.total_remaining_sequences = message.totalRemainingSequences !== BigInt(0) ? message.totalRemainingSequences.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAcknowledgementsResponseAminoMsg): MsgPruneAcknowledgementsResponse {
    return MsgPruneAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
      value: MsgPruneAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneAcknowledgementsResponseProtoMsg): MsgPruneAcknowledgementsResponse {
    return MsgPruneAcknowledgementsResponse.decode(message.value);
  },
  toProto(message: MsgPruneAcknowledgementsResponse): Uint8Array {
    return MsgPruneAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
      value: MsgPruneAcknowledgementsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPruneAcknowledgementsResponse.typeUrl, MsgPruneAcknowledgementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneAcknowledgementsResponse.aminoType, MsgPruneAcknowledgementsResponse.typeUrl);