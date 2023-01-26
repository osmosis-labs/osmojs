import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin?: Coin;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin?: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {
}
export interface MsgDelegateToValidatorSetResponseSDKType {
}
export interface MsgUndelegateFromValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin?: Coin;
}
export interface MsgUndelegateFromValidatorSetSDKType {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin?: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {
}
export interface MsgRedelegateValidatorSet {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetSDKType {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {
}
export interface MsgRedelegateValidatorSetResponseSDKType {
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
    /** delegator is the user who is trying to force unbond osmo and delegate. */
    delegator: string;
    /** lockup id of osmo in the pool */
    lockID: Long;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
    /** delegator is the user who is trying to force unbond osmo and delegate. */
    delegator: string;
    /** lockup id of osmo in the pool */
    lockID: Long;
}
export interface MsgDelegateBondedTokensResponse {
}
export interface MsgDelegateBondedTokensResponseSDKType {
}
export declare const MsgSetValidatorSetPreference: {
    encode(message: MsgSetValidatorSetPreference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreference;
    fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference;
};
export declare const MsgSetValidatorSetPreferenceResponse: {
    encode(_: MsgSetValidatorSetPreferenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse;
    fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse;
};
export declare const MsgDelegateToValidatorSet: {
    encode(message: MsgDelegateToValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSet;
    fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet;
};
export declare const MsgDelegateToValidatorSetResponse: {
    encode(_: MsgDelegateToValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse;
    fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse;
};
export declare const MsgUndelegateFromValidatorSet: {
    encode(message: MsgUndelegateFromValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet;
    fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet;
};
export declare const MsgUndelegateFromValidatorSetResponse: {
    encode(_: MsgUndelegateFromValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse;
    fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse;
};
export declare const MsgRedelegateValidatorSet: {
    encode(message: MsgRedelegateValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSet;
    fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet;
};
export declare const MsgRedelegateValidatorSetResponse: {
    encode(_: MsgRedelegateValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse;
    fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse;
};
export declare const MsgWithdrawDelegationRewards: {
    encode(message: MsgWithdrawDelegationRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewards;
    fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards;
};
export declare const MsgWithdrawDelegationRewardsResponse: {
    encode(_: MsgWithdrawDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse;
};
export declare const MsgDelegateBondedTokens: {
    encode(message: MsgDelegateBondedTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateBondedTokens;
    fromPartial(object: Partial<MsgDelegateBondedTokens>): MsgDelegateBondedTokens;
};
export declare const MsgDelegateBondedTokensResponse: {
    encode(_: MsgDelegateBondedTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse;
    fromPartial(_: Partial<MsgDelegateBondedTokensResponse>): MsgDelegateBondedTokensResponse;
};
