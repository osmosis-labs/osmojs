//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export interface AminoMsgSetValidatorSetPreference extends AminoMsg {
  type: "osmosis/valsetpref/set-validator-set-preference";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface AminoMsgDelegateToValidatorSet extends AminoMsg {
  type: "osmosis/valsetpref/delegate-to-validator-set";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUndelegateFromValidatorSet extends AminoMsg {
  type: "osmosis/valsetpref/undelegate-from-validator-set";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgRedelegateValidatorSet extends AminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface AminoMsgWithdrawDelegationRewards extends AminoMsg {
  type: "osmosis/valsetpref/withdraw-delegation-rewards";
  value: {
    delegator: string;
  };
}
export interface AminoMsgDelegateBondedTokens extends AminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens";
  value: {
    delegator: string;
    lockID: string;
  };
}
export const AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valsetpref/set-validator-set-preference",
    toAmino: ({
      delegator,
      preferences
    }: MsgSetValidatorSetPreference): AminoMsgSetValidatorSetPreference["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: AminoMsgSetValidatorSetPreference["value"]): MsgSetValidatorSetPreference => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
    aminoType: "osmosis/valsetpref/delegate-to-validator-set",
    toAmino: ({
      delegator,
      coin
    }: MsgDelegateToValidatorSet): AminoMsgDelegateToValidatorSet["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: AminoMsgDelegateToValidatorSet["value"]): MsgDelegateToValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
    aminoType: "osmosis/valsetpref/undelegate-from-validator-set",
    toAmino: ({
      delegator,
      coin
    }: MsgUndelegateFromValidatorSet): AminoMsgUndelegateFromValidatorSet["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: AminoMsgUndelegateFromValidatorSet["value"]): MsgUndelegateFromValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
    aminoType: "osmosis/valsetpref/redelegate-validator-set",
    toAmino: ({
      delegator,
      preferences
    }: MsgRedelegateValidatorSet): AminoMsgRedelegateValidatorSet["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: AminoMsgRedelegateValidatorSet["value"]): MsgRedelegateValidatorSet => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
    aminoType: "osmosis/valsetpref/withdraw-delegation-rewards",
    toAmino: ({
      delegator
    }: MsgWithdrawDelegationRewards): AminoMsgWithdrawDelegationRewards["value"] => {
      return {
        delegator
      };
    },
    fromAmino: ({
      delegator
    }: AminoMsgWithdrawDelegationRewards["value"]): MsgWithdrawDelegationRewards => {
      return {
        delegator
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
    aminoType: "osmosis/valsetpref/delegate-bonded-tokens",
    toAmino: ({
      delegator,
      lockID
    }: MsgDelegateBondedTokens): AminoMsgDelegateBondedTokens["value"] => {
      return {
        delegator,
        lockID: lockID.toString()
      };
    },
    fromAmino: ({
      delegator,
      lockID
    }: AminoMsgDelegateBondedTokens["value"]): MsgDelegateBondedTokens => {
      return {
        delegator,
        lockID: Long.fromString(lockID)
      };
    }
  }
};