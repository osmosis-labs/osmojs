import { Rpc } from "../../../helpers";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse, MsgDelegateBondedTokens, MsgDelegateBondedTokensResponse } from "./tx";
/** Msg defines the valset-pref modules's gRPC message service. */
export interface Msg {
    /**
     * SetValidatorSetPreference creates a set of validator preference.
     * This message will process both create + update request.
     */
    setValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse>;
    /**
     * DelegateToValidatorSet gets the owner, coins and delegates to a
     * validator-set.
     */
    delegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
    /**
     * UndelegateFromValidatorSet gets the owner and coins and undelegates from
     * validator-set. The unbonding logic will follow the `Undelegate` logic from
     * the sdk.
     */
    undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse>;
    /**
     * RedelegateValidatorSet takes the existing validator set and redelegates to
     * a new set.
     */
    redelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
    /**
     * WithdrawDelegationRewards allows users to claim rewards from the
     * validator-set.
     */
    withdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse>;
    /**
     * DelegateBondedTokens allows users to break the lockup bond and delegate
     * osmo tokens to a predefined validator-set.
     */
    delegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse>;
    delegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
    undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse>;
    redelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
    withdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse>;
    delegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
