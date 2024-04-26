//@ts-nocheck
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
    aminoType: "cosmos-sdk/MsgModuleQuerySafe",
    toAmino: MsgModuleQuerySafe.toAmino,
    fromAmino: MsgModuleQuerySafe.fromAmino
  }
};