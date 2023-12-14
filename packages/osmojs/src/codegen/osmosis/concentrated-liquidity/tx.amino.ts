//@ts-nocheck
import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees, MsgCollectIncentives, MsgFungifyChargedPositions } from "./tx";
export const AminoConverter = {
  "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
    aminoType: "osmosis/concentratedliquidity/create-position",
    toAmino: MsgCreatePosition.toAmino,
    fromAmino: MsgCreatePosition.fromAmino
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "osmosis/concentratedliquidity/withdraw-position",
    toAmino: MsgWithdrawPosition.toAmino,
    fromAmino: MsgWithdrawPosition.fromAmino
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
    aminoType: "osmosis/concentratedliquidity/collect-fees",
    toAmino: MsgCollectFees.toAmino,
    fromAmino: MsgCollectFees.fromAmino
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
    aminoType: "osmosis/concentratedliquidity/collect-incentives",
    toAmino: MsgCollectIncentives.toAmino,
    fromAmino: MsgCollectIncentives.fromAmino
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions": {
    aminoType: "osmosis/concentratedliquidity/fungify-charged-positions",
    toAmino: MsgFungifyChargedPositions.toAmino,
    fromAmino: MsgFungifyChargedPositions.fromAmino
  }
};