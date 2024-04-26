//@ts-nocheck
import { MsgSetFeeTokens } from "./tx";
export const AminoConverter = {
  "/osmosis.txfees.v1beta1.MsgSetFeeTokens": {
    aminoType: "osmosis/set-fee-tokens",
    toAmino: MsgSetFeeTokens.toAmino,
    fromAmino: MsgSetFeeTokens.fromAmino
  }
};