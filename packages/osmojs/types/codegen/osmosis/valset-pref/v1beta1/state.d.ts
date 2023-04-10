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
export interface ValidatorPreferenceProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference";
    value: Uint8Array;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceAmino {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    val_oper_address: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
export interface ValidatorPreferenceAminoMsg {
    type: "osmosis/valsetpref/validator-preference";
    value: ValidatorPreferenceAmino;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceSDKType {
    val_oper_address: string;
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
export interface ValidatorSetPreferencesProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences";
    value: Uint8Array;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesAmino {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreferenceAmino[];
}
export interface ValidatorSetPreferencesAminoMsg {
    type: "osmosis/valsetpref/validator-set-preferences";
    value: ValidatorSetPreferencesAmino;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesSDKType {
    preferences: ValidatorPreferenceSDKType[];
}
export declare const ValidatorPreference: {
    typeUrl: string;
    encode(message: ValidatorPreference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorPreference;
    fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference;
    fromAmino(object: ValidatorPreferenceAmino): ValidatorPreference;
    toAmino(message: ValidatorPreference): ValidatorPreferenceAmino;
    fromAminoMsg(object: ValidatorPreferenceAminoMsg): ValidatorPreference;
    toAminoMsg(message: ValidatorPreference): ValidatorPreferenceAminoMsg;
    fromProtoMsg(message: ValidatorPreferenceProtoMsg): ValidatorPreference;
    toProto(message: ValidatorPreference): Uint8Array;
    toProtoMsg(message: ValidatorPreference): ValidatorPreferenceProtoMsg;
};
export declare const ValidatorSetPreferences: {
    typeUrl: string;
    encode(message: ValidatorSetPreferences, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSetPreferences;
    fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences;
    fromAmino(object: ValidatorSetPreferencesAmino): ValidatorSetPreferences;
    toAmino(message: ValidatorSetPreferences): ValidatorSetPreferencesAmino;
    fromAminoMsg(object: ValidatorSetPreferencesAminoMsg): ValidatorSetPreferences;
    toAminoMsg(message: ValidatorSetPreferences): ValidatorSetPreferencesAminoMsg;
    fromProtoMsg(message: ValidatorSetPreferencesProtoMsg): ValidatorSetPreferences;
    toProto(message: ValidatorSetPreferences): Uint8Array;
    toProtoMsg(message: ValidatorSetPreferences): ValidatorSetPreferencesProtoMsg;
};
