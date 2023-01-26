import * as _m0 from "protobufjs/minimal";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    valOperAddress: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceSDKType {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    val_oper_address: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreference[];
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesSDKType {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreferenceSDKType[];
}
export declare const ValidatorPreference: {
    encode(message: ValidatorPreference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorPreference;
    fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference;
};
export declare const ValidatorSetPreferences: {
    encode(message: ValidatorSetPreferences, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSetPreferences;
    fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences;
};
