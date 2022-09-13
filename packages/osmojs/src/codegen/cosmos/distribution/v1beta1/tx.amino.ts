import { Coin } from "../../base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export interface AminoMsgSetWithdrawAddress extends AminoMsg {
  type: "cosmos-sdk/MsgModifyWithdrawAddress";
  value: {
    delegator_address: string;
    withdraw_address: string;
  };
}
export interface AminoMsgWithdrawDelegatorReward extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawDelegationReward";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export interface AminoMsgWithdrawValidatorCommission extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawValidatorCommission";
  value: {
    validator_address: string;
  };
}
export interface AminoMsgFundCommunityPool extends AminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    amount: {
      denom: string;
      amount: string;
    }[];
    depositor: string;
  };
}
export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegator_address,
      withdraw_address
    }: MsgSetWithdrawAddress): AminoMsgSetWithdrawAddress["value"] => {
      return {
        delegator_address,
        withdraw_address
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }: AminoMsgSetWithdrawAddress["value"]): MsgSetWithdrawAddress => {
      return {
        delegator_address,
        withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: ({
      delegator_address,
      validator_address
    }: MsgWithdrawDelegatorReward): AminoMsgWithdrawDelegatorReward["value"] => {
      return {
        delegator_address,
        validator_address
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }: AminoMsgWithdrawDelegatorReward["value"]): MsgWithdrawDelegatorReward => {
      return {
        delegator_address,
        validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: ({
      validator_address
    }: MsgWithdrawValidatorCommission): AminoMsgWithdrawValidatorCommission["value"] => {
      return {
        validator_address
      };
    },
    fromAmino: ({
      validator_address
    }: AminoMsgWithdrawValidatorCommission["value"]): MsgWithdrawValidatorCommission => {
      return {
        validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPool): AminoMsgFundCommunityPool["value"] => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }: AminoMsgFundCommunityPool["value"]): MsgFundCommunityPool => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  }
};