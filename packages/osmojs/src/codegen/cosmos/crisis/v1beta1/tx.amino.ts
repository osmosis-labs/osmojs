import { AminoMsg } from "@cosmjs/amino";
import { MsgVerifyInvariant } from "./tx";
export interface AminoMsgVerifyInvariant extends AminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
  };
}
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }: MsgVerifyInvariant): AminoMsgVerifyInvariant["value"] => {
      return {
        sender,
        invariant_module_name,
        invariant_route
      };
    },
    fromAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }: AminoMsgVerifyInvariant["value"]): MsgVerifyInvariant => {
      return {
        sender,
        invariant_module_name,
        invariant_route
      };
    }
  }
};