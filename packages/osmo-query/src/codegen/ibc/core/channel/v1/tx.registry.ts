//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement], ["/ibc.core.channel.v1.MsgChannelUpgradeInit", MsgChannelUpgradeInit], ["/ibc.core.channel.v1.MsgChannelUpgradeTry", MsgChannelUpgradeTry], ["/ibc.core.channel.v1.MsgChannelUpgradeAck", MsgChannelUpgradeAck], ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", MsgChannelUpgradeConfirm], ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", MsgChannelUpgradeOpen], ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", MsgChannelUpgradeTimeout], ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", MsgChannelUpgradeCancel], ["/ibc.core.channel.v1.MsgUpdateParams", MsgUpdateParams], ["/ibc.core.channel.v1.MsgPruneAcknowledgements", MsgPruneAcknowledgements]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    channelOpenInit(value: MsgChannelOpenInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: MsgChannelOpenInit.encode(value).finish()
      };
    },
    channelOpenTry(value: MsgChannelOpenTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: MsgChannelOpenTry.encode(value).finish()
      };
    },
    channelOpenAck(value: MsgChannelOpenAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: MsgChannelOpenAck.encode(value).finish()
      };
    },
    channelOpenConfirm(value: MsgChannelOpenConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: MsgChannelOpenConfirm.encode(value).finish()
      };
    },
    channelCloseInit(value: MsgChannelCloseInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: MsgChannelCloseInit.encode(value).finish()
      };
    },
    channelCloseConfirm(value: MsgChannelCloseConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: MsgChannelCloseConfirm.encode(value).finish()
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: MsgRecvPacket.encode(value).finish()
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: MsgTimeout.encode(value).finish()
      };
    },
    timeoutOnClose(value: MsgTimeoutOnClose) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: MsgTimeoutOnClose.encode(value).finish()
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: MsgAcknowledgement.encode(value).finish()
      };
    },
    channelUpgradeInit(value: MsgChannelUpgradeInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value: MsgChannelUpgradeInit.encode(value).finish()
      };
    },
    channelUpgradeTry(value: MsgChannelUpgradeTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value: MsgChannelUpgradeTry.encode(value).finish()
      };
    },
    channelUpgradeAck(value: MsgChannelUpgradeAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value: MsgChannelUpgradeAck.encode(value).finish()
      };
    },
    channelUpgradeConfirm(value: MsgChannelUpgradeConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value: MsgChannelUpgradeConfirm.encode(value).finish()
      };
    },
    channelUpgradeOpen(value: MsgChannelUpgradeOpen) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value: MsgChannelUpgradeOpen.encode(value).finish()
      };
    },
    channelUpgradeTimeout(value: MsgChannelUpgradeTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value: MsgChannelUpgradeTimeout.encode(value).finish()
      };
    },
    channelUpgradeCancel(value: MsgChannelUpgradeCancel) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value: MsgChannelUpgradeCancel.encode(value).finish()
      };
    },
    updateChannelParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    pruneAcknowledgements(value: MsgPruneAcknowledgements) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        value: MsgPruneAcknowledgements.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    channelOpenInit(value: MsgChannelOpenInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value
      };
    },
    channelOpenTry(value: MsgChannelOpenTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value
      };
    },
    channelOpenAck(value: MsgChannelOpenAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value
      };
    },
    channelOpenConfirm(value: MsgChannelOpenConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value
      };
    },
    channelCloseInit(value: MsgChannelCloseInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value
      };
    },
    channelCloseConfirm(value: MsgChannelCloseConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value
      };
    },
    timeoutOnClose(value: MsgTimeoutOnClose) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value
      };
    },
    channelUpgradeInit(value: MsgChannelUpgradeInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value
      };
    },
    channelUpgradeTry(value: MsgChannelUpgradeTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value
      };
    },
    channelUpgradeAck(value: MsgChannelUpgradeAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value
      };
    },
    channelUpgradeConfirm(value: MsgChannelUpgradeConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value
      };
    },
    channelUpgradeOpen(value: MsgChannelUpgradeOpen) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value
      };
    },
    channelUpgradeTimeout(value: MsgChannelUpgradeTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value
      };
    },
    channelUpgradeCancel(value: MsgChannelUpgradeCancel) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value
      };
    },
    updateChannelParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value
      };
    },
    pruneAcknowledgements(value: MsgPruneAcknowledgements) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        value
      };
    }
  },
  fromPartial: {
    channelOpenInit(value: MsgChannelOpenInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: MsgChannelOpenInit.fromPartial(value)
      };
    },
    channelOpenTry(value: MsgChannelOpenTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: MsgChannelOpenTry.fromPartial(value)
      };
    },
    channelOpenAck(value: MsgChannelOpenAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: MsgChannelOpenAck.fromPartial(value)
      };
    },
    channelOpenConfirm(value: MsgChannelOpenConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: MsgChannelOpenConfirm.fromPartial(value)
      };
    },
    channelCloseInit(value: MsgChannelCloseInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: MsgChannelCloseInit.fromPartial(value)
      };
    },
    channelCloseConfirm(value: MsgChannelCloseConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: MsgChannelCloseConfirm.fromPartial(value)
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: MsgRecvPacket.fromPartial(value)
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: MsgTimeout.fromPartial(value)
      };
    },
    timeoutOnClose(value: MsgTimeoutOnClose) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: MsgTimeoutOnClose.fromPartial(value)
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: MsgAcknowledgement.fromPartial(value)
      };
    },
    channelUpgradeInit(value: MsgChannelUpgradeInit) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        value: MsgChannelUpgradeInit.fromPartial(value)
      };
    },
    channelUpgradeTry(value: MsgChannelUpgradeTry) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        value: MsgChannelUpgradeTry.fromPartial(value)
      };
    },
    channelUpgradeAck(value: MsgChannelUpgradeAck) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        value: MsgChannelUpgradeAck.fromPartial(value)
      };
    },
    channelUpgradeConfirm(value: MsgChannelUpgradeConfirm) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
        value: MsgChannelUpgradeConfirm.fromPartial(value)
      };
    },
    channelUpgradeOpen(value: MsgChannelUpgradeOpen) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        value: MsgChannelUpgradeOpen.fromPartial(value)
      };
    },
    channelUpgradeTimeout(value: MsgChannelUpgradeTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        value: MsgChannelUpgradeTimeout.fromPartial(value)
      };
    },
    channelUpgradeCancel(value: MsgChannelUpgradeCancel) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
        value: MsgChannelUpgradeCancel.fromPartial(value)
      };
    },
    updateChannelParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    pruneAcknowledgements(value: MsgPruneAcknowledgements) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        value: MsgPruneAcknowledgements.fromPartial(value)
      };
    }
  }
};