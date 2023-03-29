//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetBeforeSendHook, MsgForceTransfer } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
  type: "osmosis/tokenfactory/create-denom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "osmosis/tokenfactory/mint";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    mintToAddress: string;
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "osmosis/tokenfactory/burn";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    burnFromAddress: string;
  };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
  type: "osmosis/tokenfactory/change-admin";
  value: {
    sender: string;
    denom: string;
    new_admin: string;
  };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
  type: "osmosis/tokenfactory/set-denom-metadata";
  value: {
    sender: string;
    metadata: {
      description: string;
      denom_units: {
        denom: string;
        exponent: number;
        aliases: string[];
      }[];
      base: string;
      display: string;
      name: string;
      symbol: string;
      uri: string;
      uri_hash: string;
    };
  };
}
export interface AminoMsgSetBeforeSendHook extends AminoMsg {
  type: "osmosis/tokenfactory/set-before-send-hook";
  value: {
    sender: string;
    denom: string;
    cosmwasm_address: string;
  };
}
export interface AminoMsgForceTransfer extends AminoMsg {
  type: "osmosis/tokenfactory/force-transfer";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    transferFromAddress: string;
    transferToAddress: string;
  };
}
export const AminoConverter = {
  "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory/create-denom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory/mint",
    toAmino: ({
      sender,
      amount,
      mintToAddress
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        mintToAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      mintToAddress
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        mintToAddress
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory/burn",
    toAmino: ({
      sender,
      amount,
      burnFromAddress
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        burnFromAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      burnFromAddress
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        burnFromAddress
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory/change-admin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): AminoMsgChangeAdmin["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      new_admin
    }: AminoMsgChangeAdmin["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "osmosis/tokenfactory/set-denom-metadata",
    toAmino: ({
      sender,
      metadata
    }: MsgSetDenomMetadata): AminoMsgSetDenomMetadata["value"] => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(el0 => ({
            denom: el0.denom,
            exponent: el0.exponent,
            aliases: el0.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: ({
      sender,
      metadata
    }: AminoMsgSetDenomMetadata["value"]): MsgSetDenomMetadata => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(el1 => ({
            denom: el1.denom,
            exponent: el1.exponent,
            aliases: el1.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
    aminoType: "osmosis/tokenfactory/set-before-send-hook",
    toAmino: ({
      sender,
      denom,
      cosmwasmAddress
    }: MsgSetBeforeSendHook): AminoMsgSetBeforeSendHook["value"] => {
      return {
        sender,
        denom,
        cosmwasm_address: cosmwasmAddress
      };
    },
    fromAmino: ({
      sender,
      denom,
      cosmwasm_address
    }: AminoMsgSetBeforeSendHook["value"]): MsgSetBeforeSendHook => {
      return {
        sender,
        denom,
        cosmwasmAddress: cosmwasm_address
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "osmosis/tokenfactory/force-transfer",
    toAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: MsgForceTransfer): AminoMsgForceTransfer["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        transferFromAddress,
        transferToAddress
      };
    },
    fromAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress
    }: AminoMsgForceTransfer["value"]): MsgForceTransfer => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        transferFromAddress,
        transferToAddress
      };
    }
  }
};