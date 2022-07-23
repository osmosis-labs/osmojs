import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
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
    };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
    type: "osmosis/tokenfactory/change-admin";
    value: {
        sender: string;
        denom: string;
        newAdmin: string;
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
        toAmino: ({ sender, amount }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ sender, amount }: AminoMsgMint["value"]) => MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ sender, amount }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => AminoMsgChangeAdmin["value"];
        fromAmino: ({ sender, denom, newAdmin }: AminoMsgChangeAdmin["value"]) => MsgChangeAdmin;
    };
};
