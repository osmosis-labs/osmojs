//@ts-nocheck
import { MsgInboundTransfer, MsgOutboundTransfer, MsgUpdateParams, MsgChangeAssetStatus } from "./tx";
export const AminoConverter = {
  "/osmosis.bridge.v1beta1.MsgInboundTransfer": {
    aminoType: "osmosis/bridge/inbound-transfer",
    toAmino: MsgInboundTransfer.toAmino,
    fromAmino: MsgInboundTransfer.fromAmino
  },
  "/osmosis.bridge.v1beta1.MsgOutboundTransfer": {
    aminoType: "osmosis/bridge/outbound-transfer",
    toAmino: MsgOutboundTransfer.toAmino,
    fromAmino: MsgOutboundTransfer.fromAmino
  },
  "/osmosis.bridge.v1beta1.MsgUpdateParams": {
    aminoType: "osmosis/bridge/update-params",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/osmosis.bridge.v1beta1.MsgChangeAssetStatus": {
    aminoType: "osmosis/bridge/change-asset-status",
    toAmino: MsgChangeAssetStatus.toAmino,
    fromAmino: MsgChangeAssetStatus.fromAmino
  }
};