//@ts-nocheck
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: MsgChannelOpenInit.toAmino,
    fromAmino: MsgChannelOpenInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: MsgChannelOpenTry.toAmino,
    fromAmino: MsgChannelOpenTry.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: MsgChannelOpenAck.toAmino,
    fromAmino: MsgChannelOpenAck.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: MsgChannelOpenConfirm.toAmino,
    fromAmino: MsgChannelOpenConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: MsgChannelCloseInit.toAmino,
    fromAmino: MsgChannelCloseInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: MsgChannelCloseConfirm.toAmino,
    fromAmino: MsgChannelCloseConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: MsgRecvPacket.toAmino,
    fromAmino: MsgRecvPacket.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: MsgTimeout.toAmino,
    fromAmino: MsgTimeout.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: MsgTimeoutOnClose.toAmino,
    fromAmino: MsgTimeoutOnClose.fromAmino
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: MsgAcknowledgement.toAmino,
    fromAmino: MsgAcknowledgement.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
    toAmino: MsgChannelUpgradeInit.toAmino,
    fromAmino: MsgChannelUpgradeInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
    toAmino: MsgChannelUpgradeTry.toAmino,
    fromAmino: MsgChannelUpgradeTry.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
    toAmino: MsgChannelUpgradeAck.toAmino,
    fromAmino: MsgChannelUpgradeAck.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
    toAmino: MsgChannelUpgradeConfirm.toAmino,
    fromAmino: MsgChannelUpgradeConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
    toAmino: MsgChannelUpgradeOpen.toAmino,
    fromAmino: MsgChannelUpgradeOpen.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
    toAmino: MsgChannelUpgradeTimeout.toAmino,
    fromAmino: MsgChannelUpgradeTimeout.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
    toAmino: MsgChannelUpgradeCancel.toAmino,
    fromAmino: MsgChannelUpgradeCancel.fromAmino
  },
  "/ibc.core.channel.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
    aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
    toAmino: MsgPruneAcknowledgements.toAmino,
    fromAmino: MsgPruneAcknowledgements.fromAmino
  }
};