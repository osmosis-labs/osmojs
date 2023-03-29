import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setValidatorSetPreference(value: MsgSetValidatorSetPreference): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateToValidatorSet(value: MsgDelegateToValidatorSet): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet): {
            typeUrl: string;
            value: Uint8Array;
        };
        redelegateValidatorSet(value: MsgRedelegateValidatorSet): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDelegationRewards(value: MsgWithdrawDelegationRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateBondedTokens(value: MsgDelegateBondedTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setValidatorSetPreference(value: MsgSetValidatorSetPreference): {
            typeUrl: string;
            value: MsgSetValidatorSetPreference;
        };
        delegateToValidatorSet(value: MsgDelegateToValidatorSet): {
            typeUrl: string;
            value: MsgDelegateToValidatorSet;
        };
        undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet): {
            typeUrl: string;
            value: MsgUndelegateFromValidatorSet;
        };
        redelegateValidatorSet(value: MsgRedelegateValidatorSet): {
            typeUrl: string;
            value: MsgRedelegateValidatorSet;
        };
        withdrawDelegationRewards(value: MsgWithdrawDelegationRewards): {
            typeUrl: string;
            value: MsgWithdrawDelegationRewards;
        };
        delegateBondedTokens(value: MsgDelegateBondedTokens): {
            typeUrl: string;
            value: MsgDelegateBondedTokens;
        };
    };
    fromPartial: {
        setValidatorSetPreference(value: MsgSetValidatorSetPreference): {
            typeUrl: string;
            value: MsgSetValidatorSetPreference;
        };
        delegateToValidatorSet(value: MsgDelegateToValidatorSet): {
            typeUrl: string;
            value: MsgDelegateToValidatorSet;
        };
        undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet): {
            typeUrl: string;
            value: MsgUndelegateFromValidatorSet;
        };
        redelegateValidatorSet(value: MsgRedelegateValidatorSet): {
            typeUrl: string;
            value: MsgRedelegateValidatorSet;
        };
        withdrawDelegationRewards(value: MsgWithdrawDelegationRewards): {
            typeUrl: string;
            value: MsgWithdrawDelegationRewards;
        };
        delegateBondedTokens(value: MsgDelegateBondedTokens): {
            typeUrl: string;
            value: MsgDelegateBondedTokens;
        };
    };
};
