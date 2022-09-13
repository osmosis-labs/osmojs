import { AminoMsg } from "@cosmjs/amino";
import { MsgUnjail } from "./tx";
export interface AminoMsgUnjail extends AminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: {
    validator_addr: string;
  };
}
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validator_addr
    }: MsgUnjail): AminoMsgUnjail["value"] => {
      return {
        validator_addr
      };
    },
    fromAmino: ({
      validator_addr
    }: AminoMsgUnjail["value"]): MsgUnjail => {
      return {
        validator_addr
      };
    }
  }
};