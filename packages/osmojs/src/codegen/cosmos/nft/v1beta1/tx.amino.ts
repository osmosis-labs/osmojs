import { AminoMsg } from "@cosmjs/amino";
import { MsgSend } from "./tx";
export interface AminoMsgSend extends AminoMsg {
  type: "cosmos-sdk/MsgNFTSend";
  value: {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
  };
}
export const AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgNFTSend",
    toAmino: ({
      class_id,
      id,
      sender,
      receiver
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        class_id,
        id,
        sender,
        receiver
      };
    },
    fromAmino: ({
      class_id,
      id,
      sender,
      receiver
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        class_id,
        id,
        sender,
        receiver
      };
    }
  }
};