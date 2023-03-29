//@ts-nocheck
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
      tokenMinAmount1,
      freezeDuration
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
        token_min_amount1: tokenMinAmount1,
        freeze_duration: (freezeDuration * 1_000_000_000).toString()
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
      token_min_amount1,
      freeze_duration
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
        tokenMinAmount1: token_min_amount1,
        freezeDuration: {
          seconds: Long.fromNumber(Math.floor(parseInt(freeze_duration) / 1_000_000_000)),
          nanos: parseInt(freeze_duration) % 1_000_000_000
        }
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "osmosis/concentratedliquidity/withdraw-position",
    toAmino: ({
      positionId,
      sender,
      liquidityAmount
    }: MsgWithdrawPosition): AminoMsgWithdrawPosition["value"] => {
      return {
        position_id: positionId.toString(),
        sender,
        liquidity_amount: liquidityAmount
      };
    },
    fromAmino: ({
      position_id,
      sender,
      liquidity_amount
    }: AminoMsgWithdrawPosition["value"]): MsgWithdrawPosition => {
      return {
        positionId: Long.fromString(position_id),
        sender,
        liquidityAmount: liquidity_amount
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees": {
    aminoType: "osmosis/concentratedliquidity/collect-fees",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectFees): AminoMsgCollectFees["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: AminoMsgCollectFees["value"]): MsgCollectFees => {
      return {
        positionIds: position_ids.map(el0 => Long.fromString(el0)),
        sender
      };
    }
  },
  "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
    aminoType: "osmosis/concentratedliquidity/collect-incentives",
    toAmino: ({
      positionIds,
      sender
    }: MsgCollectIncentives): AminoMsgCollectIncentives["value"] => {
      return {
        position_ids: positionIds.map(el0 => el0.toString()),
        sender
      };
    },
    fromAmino: ({
      position_ids,
      sender
    }: AminoMsgCollectIncentives["value"]): MsgCollectIncentives => {
      return {
        positionIds: position_ids.map(el0 => Long.fromString(el0)),
        sender
      };
    }
  }
};