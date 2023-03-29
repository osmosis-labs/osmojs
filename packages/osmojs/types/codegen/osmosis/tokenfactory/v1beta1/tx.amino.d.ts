import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => AminoMsgCreateDenom["value"];
        fromAmino: ({ sender, subdenom }: AminoMsgCreateDenom["value"]) => MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount, mintToAddress }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ sender, amount, mintToAddress }: AminoMsgMint["value"]) => MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount, burnFromAddress }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ sender, amount, burnFromAddress }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => AminoMsgChangeAdmin["value"];
        fromAmino: ({ sender, denom, new_admin }: AminoMsgChangeAdmin["value"]) => MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: MsgSetDenomMetadata) => AminoMsgSetDenomMetadata["value"];
        fromAmino: ({ sender, metadata }: AminoMsgSetDenomMetadata["value"]) => MsgSetDenomMetadata;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: string;
        toAmino: ({ sender, denom, cosmwasmAddress }: MsgSetBeforeSendHook) => AminoMsgSetBeforeSendHook["value"];
        fromAmino: ({ sender, denom, cosmwasm_address }: AminoMsgSetBeforeSendHook["value"]) => MsgSetBeforeSendHook;
    };
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: MsgForceTransfer) => AminoMsgForceTransfer["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: AminoMsgForceTransfer["value"]) => MsgForceTransfer;
    };
};
