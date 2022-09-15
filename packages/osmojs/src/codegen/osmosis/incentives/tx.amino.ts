import { QueryCondition, lockQueryTypeFromJSON } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Duration } from "../../google/protobuf/duration";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface AminoMsgCreateGauge extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    is_perpetual: boolean;
    owner: string;
    distribute_to: {
      lock_query_type: number;
      denom: string;
      duration: {
        seconds: string;
        nanos: number;
      };
      timestamp: {
        seconds: string;
        nanos: number;
      };
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    num_epochs_paid_over: string;
  };
}
export interface AminoMsgAddToGauge extends AminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: {
    owner: string;
    gauge_id: string;
    rewards: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: MsgCreateGauge): AminoMsgCreateGauge["value"] => {
      return {
        is_perpetual,
        owner,
        distribute_to: {
          lock_query_type: distribute_to.lock_query_type,
          denom: distribute_to.denom,
          duration: (distribute_to.duration * 1_000_000_000).toString(),
          timestamp: distribute_to.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time,
        num_epochs_paid_over: num_epochs_paid_over.toString()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: AminoMsgCreateGauge["value"]): MsgCreateGauge => {
      return {
        is_perpetual,
        owner,
        distribute_to: {
          lock_query_type: lockQueryTypeFromJSON(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: {
            seconds: Long.fromNumber(Math.floor(parseInt(distribute_to.duration) / 1_000_000_000)),
            nanos: parseInt(distribute_to.duration) % 1_000_000_000
          },
          timestamp: distribute_to.timestamp
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time,
        num_epochs_paid_over: Long.fromString(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: ({
      owner,
      gauge_id,
      rewards
    }: MsgAddToGauge): AminoMsgAddToGauge["value"] => {
      return {
        owner,
        gauge_id: gauge_id.toString(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gauge_id,
      rewards
    }: AminoMsgAddToGauge["value"]): MsgAddToGauge => {
      return {
        owner,
        gauge_id: Long.fromString(gauge_id),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};