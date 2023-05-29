import { MsgRegisterInterchainAccount, MsgSendTx } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterInterchainAccount) => import("./tx").MsgRegisterInterchainAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterInterchainAccountAmino) => MsgRegisterInterchainAccount;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: string;
        toAmino: (message: MsgSendTx) => import("./tx").MsgSendTxAmino;
        fromAmino: (object: import("./tx").MsgSendTxAmino) => MsgSendTx;
    };
};
