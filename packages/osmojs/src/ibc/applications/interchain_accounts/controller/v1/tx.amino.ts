//@ts-nocheck
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
    toAmino: MsgRegisterInterchainAccount.toAmino,
    fromAmino: MsgRegisterInterchainAccount.fromAmino
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
    aminoType: "cosmos-sdk/MsgSendTx",
    toAmino: MsgSendTx.toAmino,
    fromAmino: MsgSendTx.fromAmino
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};