import { Any } from "../../../../google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export interface AminoMsgCreateClient extends AminoMsg {
  type: "cosmos-sdk/MsgCreateClient";
  value: {
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    consensus_state: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export interface AminoMsgUpdateClient extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateClient";
  value: {
    client_id: string;
    header: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export interface AminoMsgUpgradeClient extends AminoMsg {
  type: "cosmos-sdk/MsgUpgradeClient";
  value: {
    client_id: string;
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    consensus_state: {
      type_url: string;
      value: Uint8Array;
    };
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
  };
}
export interface AminoMsgSubmitMisbehaviour extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviour";
  value: {
    client_id: string;
    misbehaviour: {
      type_url: string;
      value: Uint8Array;
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: ({
      client_state,
      consensus_state,
      signer
    }: MsgCreateClient): AminoMsgCreateClient["value"] => {
      return {
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        consensus_state: {
          type_url: consensus_state.type_url,
          value: consensus_state.value
        },
        signer
      };
    },
    fromAmino: ({
      client_state,
      consensus_state,
      signer
    }: AminoMsgCreateClient["value"]): MsgCreateClient => {
      return {
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        consensus_state: {
          type_url: consensus_state.type_url,
          value: consensus_state.value
        },
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: ({
      client_id,
      header,
      signer
    }: MsgUpdateClient): AminoMsgUpdateClient["value"] => {
      return {
        client_id,
        header: {
          type_url: header.type_url,
          value: header.value
        },
        signer
      };
    },
    fromAmino: ({
      client_id,
      header,
      signer
    }: AminoMsgUpdateClient["value"]): MsgUpdateClient => {
      return {
        client_id,
        header: {
          type_url: header.type_url,
          value: header.value
        },
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: ({
      client_id,
      client_state,
      consensus_state,
      proof_upgrade_client,
      proof_upgrade_consensus_state,
      signer
    }: MsgUpgradeClient): AminoMsgUpgradeClient["value"] => {
      return {
        client_id,
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        consensus_state: {
          type_url: consensus_state.type_url,
          value: consensus_state.value
        },
        proof_upgrade_client,
        proof_upgrade_consensus_state,
        signer
      };
    },
    fromAmino: ({
      client_id,
      client_state,
      consensus_state,
      proof_upgrade_client,
      proof_upgrade_consensus_state,
      signer
    }: AminoMsgUpgradeClient["value"]): MsgUpgradeClient => {
      return {
        client_id,
        client_state: {
          type_url: client_state.type_url,
          value: client_state.value
        },
        consensus_state: {
          type_url: consensus_state.type_url,
          value: consensus_state.value
        },
        proof_upgrade_client,
        proof_upgrade_consensus_state,
        signer
      };
    }
  },
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    toAmino: ({
      client_id,
      misbehaviour,
      signer
    }: MsgSubmitMisbehaviour): AminoMsgSubmitMisbehaviour["value"] => {
      return {
        client_id,
        misbehaviour: {
          type_url: misbehaviour.type_url,
          value: misbehaviour.value
        },
        signer
      };
    },
    fromAmino: ({
      client_id,
      misbehaviour,
      signer
    }: AminoMsgSubmitMisbehaviour["value"]): MsgSubmitMisbehaviour => {
      return {
        client_id,
        misbehaviour: {
          type_url: misbehaviour.type_url,
          value: misbehaviour.value
        },
        signer
      };
    }
  }
};