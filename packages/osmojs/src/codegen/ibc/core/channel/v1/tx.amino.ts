import { Channel, Packet, Counterparty, stateFromJSON, orderFromJSON } from "./channel";
import { Height } from "../../client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault, Long } from "@osmonauts/helpers";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export interface AminoMsgChannelOpenInit extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInit";
  value: {
    port_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    signer: string;
  };
}
export interface AminoMsgChannelOpenTry extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: {
    port_id: string;
    previous_channel_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgChannelOpenAck extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgChannelOpenConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgChannelCloseInit extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInit";
  value: {
    port_id: string;
    channel_id: string;
    signer: string;
  };
}
export interface AminoMsgChannelCloseConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgRecvPacket extends AminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_commitment: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgTimeout extends AminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
  };
}
export interface AminoMsgTimeoutOnClose extends AminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
  };
}
export interface AminoMsgAcknowledgement extends AminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: ({
      port_id,
      channel,
      signer
    }: MsgChannelOpenInit): AminoMsgChannelOpenInit["value"] => {
      return {
        port_id,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.port_id,
            channel_id: channel.counterparty.channel_id
          },
          connection_hops: channel.connection_hops,
          version: channel.version
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel,
      signer
    }: AminoMsgChannelOpenInit["value"]): MsgChannelOpenInit => {
      return {
        port_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            port_id: channel.counterparty.port_id,
            channel_id: channel.counterparty.channel_id
          },
          connection_hops: channel.connection_hops,
          version: channel.version
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: ({
      port_id,
      previous_channel_id,
      channel,
      counterparty_version,
      proof_init,
      proof_height,
      signer
    }: MsgChannelOpenTry): AminoMsgChannelOpenTry["value"] => {
      return {
        port_id,
        previous_channel_id,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.port_id,
            channel_id: channel.counterparty.channel_id
          },
          connection_hops: channel.connection_hops,
          version: channel.version
        },
        counterparty_version,
        proof_init,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      previous_channel_id,
      channel,
      counterparty_version,
      proof_init,
      proof_height,
      signer
    }: AminoMsgChannelOpenTry["value"]): MsgChannelOpenTry => {
      return {
        port_id,
        previous_channel_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            port_id: channel.counterparty.port_id,
            channel_id: channel.counterparty.channel_id
          },
          connection_hops: channel.connection_hops,
          version: channel.version
        },
        counterparty_version,
        proof_init,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: ({
      port_id,
      channel_id,
      counterparty_channel_id,
      counterparty_version,
      proof_try,
      proof_height,
      signer
    }: MsgChannelOpenAck): AminoMsgChannelOpenAck["value"] => {
      return {
        port_id,
        channel_id,
        counterparty_channel_id,
        counterparty_version,
        proof_try,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_id,
      counterparty_version,
      proof_try,
      proof_height,
      signer
    }: AminoMsgChannelOpenAck["value"]): MsgChannelOpenAck => {
      return {
        port_id,
        channel_id,
        counterparty_channel_id,
        counterparty_version,
        proof_try,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: ({
      port_id,
      channel_id,
      proof_ack,
      proof_height,
      signer
    }: MsgChannelOpenConfirm): AminoMsgChannelOpenConfirm["value"] => {
      return {
        port_id,
        channel_id,
        proof_ack,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_ack,
      proof_height,
      signer
    }: AminoMsgChannelOpenConfirm["value"]): MsgChannelOpenConfirm => {
      return {
        port_id,
        channel_id,
        proof_ack,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: ({
      port_id,
      channel_id,
      signer
    }: MsgChannelCloseInit): AminoMsgChannelCloseInit["value"] => {
      return {
        port_id,
        channel_id,
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      signer
    }: AminoMsgChannelCloseInit["value"]): MsgChannelCloseInit => {
      return {
        port_id,
        channel_id,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: ({
      port_id,
      channel_id,
      proof_init,
      proof_height,
      signer
    }: MsgChannelCloseConfirm): AminoMsgChannelCloseConfirm["value"] => {
      return {
        port_id,
        channel_id,
        proof_init,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_init,
      proof_height,
      signer
    }: AminoMsgChannelCloseConfirm["value"]): MsgChannelCloseConfirm => {
      return {
        port_id,
        channel_id,
        proof_init,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer
    }: MsgRecvPacket): AminoMsgRecvPacket["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revision_height: omitDefault(packet.timeout_height.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeout_height.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeout_timestamp.toString()
        },
        proof_commitment,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer
    }: AminoMsgRecvPacket["value"]): MsgRecvPacket => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revisionHeight: Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeout_timestamp: Long.fromString(packet.timeout_timestamp)
        },
        proof_commitment,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      next_sequence_recv,
      signer
    }: MsgTimeout): AminoMsgTimeout["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revision_height: omitDefault(packet.timeout_height.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeout_height.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeout_timestamp.toString()
        },
        proof_unreceived,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        next_sequence_recv: next_sequence_recv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      next_sequence_recv,
      signer
    }: AminoMsgTimeout["value"]): MsgTimeout => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revisionHeight: Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeout_timestamp: Long.fromString(packet.timeout_timestamp)
        },
        proof_unreceived,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        next_sequence_recv: Long.fromString(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: ({
      packet,
      proof_unreceived,
      proof_close,
      proof_height,
      next_sequence_recv,
      signer
    }: MsgTimeoutOnClose): AminoMsgTimeoutOnClose["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revision_height: omitDefault(packet.timeout_height.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeout_height.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeout_timestamp.toString()
        },
        proof_unreceived,
        proof_close,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        next_sequence_recv: next_sequence_recv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_close,
      proof_height,
      next_sequence_recv,
      signer
    }: AminoMsgTimeoutOnClose["value"]): MsgTimeoutOnClose => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revisionHeight: Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeout_timestamp: Long.fromString(packet.timeout_timestamp)
        },
        proof_unreceived,
        proof_close,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        next_sequence_recv: Long.fromString(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer
    }: MsgAcknowledgement): AminoMsgAcknowledgement["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revision_height: omitDefault(packet.timeout_height.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeout_height.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeout_timestamp.toString()
        },
        acknowledgement,
        proof_acked,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer
    }: AminoMsgAcknowledgement["value"]): MsgAcknowledgement => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          source_port: packet.source_port,
          source_channel: packet.source_channel,
          destination_port: packet.destination_port,
          destination_channel: packet.destination_channel,
          data: packet.data,
          timeout_height: packet.timeout_height ? {
            revisionHeight: Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeout_timestamp: Long.fromString(packet.timeout_timestamp)
        },
        acknowledgement,
        proof_acked,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  }
};