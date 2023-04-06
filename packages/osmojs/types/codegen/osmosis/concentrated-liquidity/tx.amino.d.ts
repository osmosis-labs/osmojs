import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees, MsgCollectIncentives, MsgFungifyChargedPositions } from "./tx";
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
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
        aminoType: string;
        toAmino: (message: MsgCollectFees) => import("./tx").MsgCollectFeesAmino;
        fromAmino: (object: import("./tx").MsgCollectFeesAmino) => MsgCollectFees;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
        aminoType: string;
        toAmino: (message: MsgCollectIncentives) => import("./tx").MsgCollectIncentivesAmino;
        fromAmino: (object: import("./tx").MsgCollectIncentivesAmino) => MsgCollectIncentives;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions": {
        aminoType: string;
        toAmino: (message: MsgFungifyChargedPositions) => import("./tx").MsgFungifyChargedPositionsAmino;
        fromAmino: (object: import("./tx").MsgFungifyChargedPositionsAmino) => MsgFungifyChargedPositions;
    };
};
