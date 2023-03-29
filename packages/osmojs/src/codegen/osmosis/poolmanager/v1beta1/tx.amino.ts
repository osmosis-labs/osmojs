//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): AminoMsgSwapExactAmountIn["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_out_denom: el0.tokenOutDenom
        })),
        token_in: {
          denom: tokenIn.denom,
          amount: Long.fromValue(tokenIn.amount).toString()
        },
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in,
      token_out_min_amount
    }: AminoMsgSwapExactAmountIn["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenOutDenom: el0.token_out_denom
        })),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): AminoMsgSwapExactAmountOut["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId.toString(),
          token_in_denom: el0.tokenInDenom
        })),
        token_in_max_amount: tokenInMaxAmount,
        token_out: {
          denom: tokenOut.denom,
          amount: Long.fromValue(tokenOut.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_max_amount,
      token_out
    }: AminoMsgSwapExactAmountOut["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: Long.fromString(el0.pool_id),
          tokenInDenom: el0.token_in_denom
        })),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  }
};