import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees, MsgCollectIncentives } from "./tx";
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
        freeze_duration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgWithdrawPosition extends AminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position";
    value: {
        position_id: string;
        sender: string;
        liquidity_amount: string;
    };
}
export interface AminoMsgCollectFees extends AminoMsg {
    type: "osmosis/concentratedliquidity/collect-fees";
    value: {
        position_ids: Long[];
        sender: string;
    };
}
export interface AminoMsgCollectIncentives extends AminoMsg {
    type: "osmosis/concentratedliquidity/collect-incentives";
    value: {
        position_ids: Long[];
        sender: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: ({ poolId, sender, lowerTick, upperTick, tokenDesired0, tokenDesired1, tokenMinAmount0, tokenMinAmount1, freezeDuration }: MsgCreatePosition) => AminoMsgCreatePosition["value"];
        fromAmino: ({ pool_id, sender, lower_tick, upper_tick, token_desired0, token_desired1, token_min_amount0, token_min_amount1, freeze_duration }: AminoMsgCreatePosition["value"]) => MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: ({ positionId, sender, liquidityAmount }: MsgWithdrawPosition) => AminoMsgWithdrawPosition["value"];
        fromAmino: ({ position_id, sender, liquidity_amount }: AminoMsgWithdrawPosition["value"]) => MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
        aminoType: string;
        toAmino: ({ positionIds, sender }: MsgCollectFees) => AminoMsgCollectFees["value"];
        fromAmino: ({ position_ids, sender }: AminoMsgCollectFees["value"]) => MsgCollectFees;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
        aminoType: string;
        toAmino: ({ positionIds, sender }: MsgCollectIncentives) => AminoMsgCollectIncentives["value"];
        fromAmino: ({ position_ids, sender }: AminoMsgCollectIncentives["value"]) => MsgCollectIncentives;
    };
};
