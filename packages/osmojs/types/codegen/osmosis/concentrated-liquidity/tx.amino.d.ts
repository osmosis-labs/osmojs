import { AminoMsg } from "@cosmjs/amino";
import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees } from "./tx";
export interface AminoMsgCreatePosition extends AminoMsg {
    type: "osmosis/concentratedliquidity/create-position";
    value: {
        pool_id: string;
        sender: string;
        lower_tick: string;
        upper_tick: string;
        token_desired0: {
            denom: string;
            amount: string;
        };
        token_desired1: {
            denom: string;
            amount: string;
        };
        token_min_amount0: string;
        token_min_amount1: string;
    };
}
export interface AminoMsgWithdrawPosition extends AminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position";
    value: {
        pool_id: string;
        sender: string;
        lower_tick: string;
        upper_tick: string;
        liquidity_amount: string;
    };
}
export interface AminoMsgCollectFees extends AminoMsg {
    type: "osmosis/concentratedliquidity/collect-fees";
    value: {
        pool_id: string;
        sender: string;
        lower_tick: string;
        upper_tick: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, tokenDesired0, tokenDesired1, tokenMinAmount0, tokenMinAmount1 }: MsgCreatePosition) => AminoMsgCreatePosition["value"];
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, token_desired0, token_desired1, token_min_amount0, token_min_amount1 }: AminoMsgCreatePosition["value"]) => MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, liquidityAmount }: MsgWithdrawPosition) => AminoMsgWithdrawPosition["value"];
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, liquidity_amount }: AminoMsgWithdrawPosition["value"]) => MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick }: MsgCollectFees) => AminoMsgCollectFees["value"];
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick }: AminoMsgCollectFees["value"]) => MsgCollectFees;
    };
};
