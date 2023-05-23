//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};