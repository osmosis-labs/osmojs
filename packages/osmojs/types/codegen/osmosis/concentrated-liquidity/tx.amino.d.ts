import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives } from "./tx";
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: (message: MsgCreatePosition) => import("./tx").MsgCreatePositionAmino;
        fromAmino: (object: import("./tx").MsgCreatePositionAmino) => MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: (message: MsgWithdrawPosition) => import("./tx").MsgWithdrawPositionAmino;
        fromAmino: (object: import("./tx").MsgWithdrawPositionAmino) => MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
        aminoType: string;
        toAmino: (message: MsgAddToPosition) => import("./tx").MsgAddToPositionAmino;
        fromAmino: (object: import("./tx").MsgAddToPositionAmino) => MsgAddToPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
        aminoType: string;
        toAmino: (message: MsgCollectSpreadRewards) => import("./tx").MsgCollectSpreadRewardsAmino;
        fromAmino: (object: import("./tx").MsgCollectSpreadRewardsAmino) => MsgCollectSpreadRewards;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
        aminoType: string;
        toAmino: (message: MsgCollectIncentives) => import("./tx").MsgCollectIncentivesAmino;
        fromAmino: (object: import("./tx").MsgCollectIncentivesAmino) => MsgCollectIncentives;
    };
};
