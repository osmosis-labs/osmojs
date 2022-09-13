import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, Long, omitDefault } from "@osmonauts/helpers";
import { MerklePrefix } from "../../commitment/v1/commitment";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export interface AminoMsgConnectionOpenInit extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenInit";
  value: {
    client_id: string;
    counterparty: {
      client_id: string;
      connection_id: string;
      prefix: {
        key_prefix: Uint8Array;
      };
    };
    version: {
      identifier: string;
      features: string[];
    };
    delay_period: string;
    signer: string;
  };
}
export interface AminoMsgConnectionOpenTry extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenTry";
  value: {
    client_id: string;
    previous_connection_id: string;
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    counterparty: {
      client_id: string;
      connection_id: string;
      prefix: {
        key_prefix: Uint8Array;
      };
    };
    delay_period: string;
    counterparty_versions: {
      identifier: string;
      features: string[];
    }[];
    proof_height: AminoHeight;
    proof_init: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgConnectionOpenAck extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenAck";
  value: {
    connection_id: string;
    counterparty_connection_id: string;
    version: {
      identifier: string;
      features: string[];
    };
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    proof_height: AminoHeight;
    proof_try: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height: AminoHeight;
    signer: string;
  };
}
export interface AminoMsgConnectionOpenConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenConfirm";
  value: {
    connection_id: string;
    proof_ack: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.connection.v1.MsgConnectionOpenInit": {
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    toAmino: ({
      client_id,
      counterparty,
      version,
      delay_period,
      signer
    }: MsgConnectionOpenInit): AminoMsgConnectionOpenInit["value"] => {
      return {
        client_id,
        counterparty: {
          client_id: counterparty.client_id,
          connection_id: counterparty.connection_id,
          prefix: {
            key_prefix: counterparty.prefix.key_prefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delay_period: delay_period.toString(),
        signer
      };
    },
    fromAmino: ({
      client_id,
      counterparty,
      version,
      delay_period,
      signer
    }: AminoMsgConnectionOpenInit["value"]): MsgConnectionOpenInit => {
      return {
        client_id,
        counterparty: {
          client_id: counterparty.client_id,
          connection_id: counterparty.connection_id,
          prefix: {
            key_prefix: counterparty.prefix.key_prefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delay_period: Long.fromString(delay_period),
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenTry": {
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    toAmino: ({
      client_id,
      previous_connection_id,
      client_state,
      counterparty,
      delay_period,
      counterparty_versions,
      proof_height,
      proof_init,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: MsgConnectionOpenTry): AminoMsgConnectionOpenTry["value"] => {
      return {
        client_id,
        previous_connection_id,
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        counterparty: {
          client_id: counterparty.client_id,
          connection_id: counterparty.connection_id,
          prefix: {
            key_prefix: counterparty.prefix.key_prefix
          }
        },
        delay_period: delay_period.toString(),
        counterparty_versions: counterparty_versions.map(el0 => ({
          identifier: el0.identifier,
          features: el0.features
        })),
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        proof_init,
        proof_client,
        proof_consensus,
        consensus_height: consensus_height ? {
          revision_height: omitDefault(consensus_height.revisionHeight)?.toString(),
          revision_number: omitDefault(consensus_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      client_id,
      previous_connection_id,
      client_state,
      counterparty,
      delay_period,
      counterparty_versions,
      proof_height,
      proof_init,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: AminoMsgConnectionOpenTry["value"]): MsgConnectionOpenTry => {
      return {
        client_id,
        previous_connection_id,
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        counterparty: {
          client_id: counterparty.client_id,
          connection_id: counterparty.connection_id,
          prefix: {
            key_prefix: counterparty.prefix.key_prefix
          }
        },
        delay_period: Long.fromString(delay_period),
        counterparty_versions: counterparty_versions.map(el0 => ({
          identifier: el0.identifier,
          features: el0.features
        })),
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        proof_init,
        proof_client,
        proof_consensus,
        consensus_height: consensus_height ? {
          revisionHeight: Long.fromString(consensus_height.revision_height || "0", true),
          revisionNumber: Long.fromString(consensus_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenAck": {
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    toAmino: ({
      connection_id,
      counterparty_connection_id,
      version,
      client_state,
      proof_height,
      proof_try,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: MsgConnectionOpenAck): AminoMsgConnectionOpenAck["value"] => {
      return {
        connection_id,
        counterparty_connection_id,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        proof_try,
        proof_client,
        proof_consensus,
        consensus_height: consensus_height ? {
          revision_height: omitDefault(consensus_height.revisionHeight)?.toString(),
          revision_number: omitDefault(consensus_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      connection_id,
      counterparty_connection_id,
      version,
      client_state,
      proof_height,
      proof_try,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: AminoMsgConnectionOpenAck["value"]): MsgConnectionOpenAck => {
      return {
        connection_id,
        counterparty_connection_id,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        proof_try,
        proof_client,
        proof_consensus,
        consensus_height: consensus_height ? {
          revisionHeight: Long.fromString(consensus_height.revision_height || "0", true),
          revisionNumber: Long.fromString(consensus_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    toAmino: ({
      connection_id,
      proof_ack,
      proof_height,
      signer
    }: MsgConnectionOpenConfirm): AminoMsgConnectionOpenConfirm["value"] => {
      return {
        connection_id,
        proof_ack,
        proof_height: proof_height ? {
          revision_height: omitDefault(proof_height.revisionHeight)?.toString(),
          revision_number: omitDefault(proof_height.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      connection_id,
      proof_ack,
      proof_height,
      signer
    }: AminoMsgConnectionOpenConfirm["value"]): MsgConnectionOpenConfirm => {
      return {
        connection_id,
        proof_ack,
        proof_height: proof_height ? {
          revisionHeight: Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  }
};