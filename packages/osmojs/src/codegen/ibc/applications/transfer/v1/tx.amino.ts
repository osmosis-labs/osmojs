import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, Long, omitDefault } from "@osmonauts/helpers";
import { MsgTransfer } from "./tx";
export interface AminoMsgTransfer extends AminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeout_height: AminoHeight;
    timeout_timestamp: string;
  };
}
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp
    }: MsgTransfer): AminoMsgTransfer["value"] => {
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: Long.fromNumber(token.amount).toString()
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revision_height: omitDefault(timeout_height.revisionHeight)?.toString(),
          revision_number: omitDefault(timeout_height.revisionNumber)?.toString()
        } : {},
        timeout_timestamp: timeout_timestamp.toString()
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp
    }: AminoMsgTransfer["value"]): MsgTransfer => {
      return {
        source_port,
        source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender,
        receiver,
        timeout_height: timeout_height ? {
          revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeout_timestamp: Long.fromString(timeout_timestamp)
      };
    }
  }
};