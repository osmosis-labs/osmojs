import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgUndelegateFromRebalancedValidatorSet, MsgUndelegateFromRebalancedValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse, MsgDelegateBondedTokens, MsgDelegateBondedTokensResponse } from "./tx";
/** Msg defines the valset-pref module's gRPC message service. */
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
   * UndelegateFromRebalancedValidatorSet undelegates the proivded amount from
   * the validator set, but takes into consideration the current delegations
   * to the user's validator set to determine the weights assigned to each.
   */
  undelegateFromRebalancedValidatorSet(request: MsgUndelegateFromRebalancedValidatorSet): Promise<MsgUndelegateFromRebalancedValidatorSetResponse>;
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setValidatorSetPreference = this.setValidatorSetPreference.bind(this);
    this.delegateToValidatorSet = this.delegateToValidatorSet.bind(this);
    this.undelegateFromValidatorSet = this.undelegateFromValidatorSet.bind(this);
    this.undelegateFromRebalancedValidatorSet = this.undelegateFromRebalancedValidatorSet.bind(this);
    this.redelegateValidatorSet = this.redelegateValidatorSet.bind(this);
    this.withdrawDelegationRewards = this.withdrawDelegationRewards.bind(this);
    this.delegateBondedTokens = this.delegateBondedTokens.bind(this);
  }
  setValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse> {
    const data = MsgSetValidatorSetPreference.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "SetValidatorSetPreference", data);
    return promise.then(data => MsgSetValidatorSetPreferenceResponse.decode(new BinaryReader(data)));
  }
  delegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse> {
    const data = MsgDelegateToValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateToValidatorSet", data);
    return promise.then(data => MsgDelegateToValidatorSetResponse.decode(new BinaryReader(data)));
  }
  undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse> {
    const data = MsgUndelegateFromValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromValidatorSet", data);
    return promise.then(data => MsgUndelegateFromValidatorSetResponse.decode(new BinaryReader(data)));
  }
  undelegateFromRebalancedValidatorSet(request: MsgUndelegateFromRebalancedValidatorSet): Promise<MsgUndelegateFromRebalancedValidatorSetResponse> {
    const data = MsgUndelegateFromRebalancedValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromRebalancedValidatorSet", data);
    return promise.then(data => MsgUndelegateFromRebalancedValidatorSetResponse.decode(new BinaryReader(data)));
  }
  redelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse> {
    const data = MsgRedelegateValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "RedelegateValidatorSet", data);
    return promise.then(data => MsgRedelegateValidatorSetResponse.decode(new BinaryReader(data)));
  }
  withdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse> {
    const data = MsgWithdrawDelegationRewards.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "WithdrawDelegationRewards", data);
    return promise.then(data => MsgWithdrawDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  delegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse> {
    const data = MsgDelegateBondedTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateBondedTokens", data);
    return promise.then(data => MsgDelegateBondedTokensResponse.decode(new BinaryReader(data)));
  }
}