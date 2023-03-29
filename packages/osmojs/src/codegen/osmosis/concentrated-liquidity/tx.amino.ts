//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
    aminoType: "osmosis/concentratedliquidity/create-position",
    toAmino: ({
      poolId,
      sender,
      lowerTick,
      upperTick,
      tokenDesired0,
      tokenDesired1,
      tokenMinAmount0,
      tokenMinAmount1
    }: MsgCreatePosition): AminoMsgCreatePosition["value"] => {
      return {
        pool_id: poolId.toString(),
        sender,
        lower_tick: lowerTick.toString(),
        upper_tick: upperTick.toString(),
        token_desired0: {
          denom: tokenDesired0.denom,
          amount: Long.fromValue(tokenDesired0.amount).toString()
        },
        token_desired1: {
          denom: tokenDesired1.denom,
          amount: Long.fromValue(tokenDesired1.amount).toString()
        },
        token_min_amount0: tokenMinAmount0,
        token_min_amount1: tokenMinAmount1
      };
    },
    fromAmino: ({
      pool_id,
      sender,
      lower_tick,
      upper_tick,
      token_desired0,
      token_desired1,
      token_min_amount0,
      token_min_amount1
    }: AminoMsgCreatePosition["value"]): MsgCreatePosition => {
      return {
        poolId: Long.fromString(pool_id),
        sender,
        lowerTick: Long.fromString(lower_tick),
        upperTick: Long.fromString(upper_tick),
        tokenDesired0: {
          denom: token_desired0.denom,
          amount: token_desired0.amount
        },
        tokenDesired1: {
          denom: token_desired1.denom,
          amount: token_desired1.amount
        },
        tokenMinAmount0: token_min_amount0,
        tokenMinAmount1: token_min_amount1
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "osmosis/concentratedliquidity/withdraw-position",
    toAmino: ({
      poolId,
      sender,
      lowerTick,
      upperTick,
      liquidityAmount
    }: MsgWithdrawPosition): AminoMsgWithdrawPosition["value"] => {
      return {
        pool_id: poolId.toString(),
        sender,
        lower_tick: lowerTick.toString(),
        upper_tick: upperTick.toString(),
        liquidity_amount: liquidityAmount
      };
    },
    fromAmino: ({
      pool_id,
      sender,
      lower_tick,
      upper_tick,
      liquidity_amount
    }: AminoMsgWithdrawPosition["value"]): MsgWithdrawPosition => {
      return {
        poolId: Long.fromString(pool_id),
        sender,
        lowerTick: Long.fromString(lower_tick),
        upperTick: Long.fromString(upper_tick),
        liquidityAmount: liquidity_amount
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
    aminoType: "osmosis/concentratedliquidity/collect-fees",
    toAmino: ({
      poolId,
      sender,
      lowerTick,
      upperTick
    }: MsgCollectFees): AminoMsgCollectFees["value"] => {
      return {
        pool_id: poolId.toString(),
        sender,
        lower_tick: lowerTick.toString(),
        upper_tick: upperTick.toString()
      };
    },
    fromAmino: ({
      pool_id,
      sender,
      lower_tick,
      upper_tick
    }: AminoMsgCollectFees["value"]): MsgCollectFees => {
      return {
        poolId: Long.fromString(pool_id),
        sender,
        lowerTick: Long.fromString(lower_tick),
        upperTick: Long.fromString(upper_tick)
      };
    }
  }
};