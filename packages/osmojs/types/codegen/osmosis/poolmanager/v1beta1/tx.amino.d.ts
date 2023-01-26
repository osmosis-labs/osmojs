import { AminoMsg } from "@cosmjs/amino";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut } from "./tx";
export interface AminoMsgSwapExactAmountIn extends AminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-in";
    value: {
        sender: string;
        routes: {
            pool_id: string;
            token_out_denom: string;
        }[];
        token_in: {
            denom: string;
            amount: string;
        };
        token_out_min_amount: string;
    };
}
export interface AminoMsgSwapExactAmountOut extends AminoMsg {
    type: "osmosis/poolmanager/swap-exact-amount-out";
    value: {
        sender: string;
        routes: {
            pool_id: string;
            token_in_denom: string;
        }[];
        token_in_max_amount: string;
        token_out: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: MsgSwapExactAmountIn) => AminoMsgSwapExactAmountIn["value"];
        fromAmino: ({ sender, routes, token_in, token_out_min_amount }: AminoMsgSwapExactAmountIn["value"]) => MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: MsgSwapExactAmountOut) => AminoMsgSwapExactAmountOut["value"];
        fromAmino: ({ sender, routes, token_in_max_amount, token_out }: AminoMsgSwapExactAmountOut["value"]) => MsgSwapExactAmountOut;
    };
};
