import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export declare const AminoConverter: {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: string;
        toAmino: (message: MsgSetValidatorSetPreference) => import("./tx").MsgSetValidatorSetPreferenceAmino;
        fromAmino: (object: import("./tx").MsgSetValidatorSetPreferenceAmino) => MsgSetValidatorSetPreference;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: string;
        toAmino: (message: MsgDelegateToValidatorSet) => import("./tx").MsgDelegateToValidatorSetAmino;
        fromAmino: (object: import("./tx").MsgDelegateToValidatorSetAmino) => MsgDelegateToValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: string;
        toAmino: (message: MsgUndelegateFromValidatorSet) => import("./tx").MsgUndelegateFromValidatorSetAmino;
        fromAmino: (object: import("./tx").MsgUndelegateFromValidatorSetAmino) => MsgUndelegateFromValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: string;
        toAmino: (message: MsgRedelegateValidatorSet) => import("./tx").MsgRedelegateValidatorSetAmino;
        fromAmino: (object: import("./tx").MsgRedelegateValidatorSetAmino) => MsgRedelegateValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: string;
        toAmino: (message: MsgWithdrawDelegationRewards) => import("./tx").MsgWithdrawDelegationRewardsAmino;
        fromAmino: (object: import("./tx").MsgWithdrawDelegationRewardsAmino) => MsgWithdrawDelegationRewards;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
        aminoType: string;
        toAmino: (message: MsgDelegateBondedTokens) => import("./tx").MsgDelegateBondedTokensAmino;
        fromAmino: (object: import("./tx").MsgDelegateBondedTokensAmino) => MsgDelegateBondedTokens;
    };
};
