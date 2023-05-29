import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the set of params for the distribution module. */
export interface Params {
    communityTax: string;
    baseProposerReward: string;
    bonusProposerReward: string;
    withdrawAddrEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
    community_tax: string;
    base_proposer_reward: string;
    bonus_proposer_reward: string;
    withdraw_addr_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/distribution/Params";
    value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
    community_tax: string;
    base_proposer_reward: string;
    bonus_proposer_reward: string;
    withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
    cumulativeRewardRatio: DecCoin[];
    referenceCount: number;
}
export interface ValidatorHistoricalRewardsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards";
    value: Uint8Array;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsAmino {
    cumulative_reward_ratio: DecCoinAmino[];
    reference_count: number;
}
export interface ValidatorHistoricalRewardsAminoMsg {
    type: "cosmos-sdk/ValidatorHistoricalRewards";
    value: ValidatorHistoricalRewardsAmino;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsSDKType {
    cumulative_reward_ratio: DecCoinSDKType[];
    reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
    rewards: DecCoin[];
    period: Long;
}
export interface ValidatorCurrentRewardsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards";
    value: Uint8Array;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsAmino {
    rewards: DecCoinAmino[];
    period: string;
}
export interface ValidatorCurrentRewardsAminoMsg {
    type: "cosmos-sdk/ValidatorCurrentRewards";
    value: ValidatorCurrentRewardsAmino;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsSDKType {
    rewards: DecCoinSDKType[];
    period: Long;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
    commission: DecCoin[];
}
export interface ValidatorAccumulatedCommissionProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission";
    value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionAmino {
    commission: DecCoinAmino[];
}
export interface ValidatorAccumulatedCommissionAminoMsg {
    type: "cosmos-sdk/ValidatorAccumulatedCommission";
    value: ValidatorAccumulatedCommissionAmino;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionSDKType {
    commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
    rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards";
    value: Uint8Array;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsAmino {
    rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsAminoMsg {
    type: "cosmos-sdk/ValidatorOutstandingRewards";
    value: ValidatorOutstandingRewardsAmino;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsSDKType {
    rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
    validatorPeriod: Long;
    fraction: string;
}
export interface ValidatorSlashEventProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent";
    value: Uint8Array;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventAmino {
    validator_period: string;
    fraction: string;
}
export interface ValidatorSlashEventAminoMsg {
    type: "cosmos-sdk/ValidatorSlashEvent";
    value: ValidatorSlashEventAmino;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventSDKType {
    validator_period: Long;
    fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
    validatorSlashEvents: ValidatorSlashEvent[];
}
export interface ValidatorSlashEventsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents";
    value: Uint8Array;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsAmino {
    validator_slash_events: ValidatorSlashEventAmino[];
}
export interface ValidatorSlashEventsAminoMsg {
    type: "cosmos-sdk/ValidatorSlashEvents";
    value: ValidatorSlashEventsAmino;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsSDKType {
    validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
    communityPool: DecCoin[];
}
export interface FeePoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.FeePool";
    value: Uint8Array;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolAmino {
    community_pool: DecCoinAmino[];
}
export interface FeePoolAminoMsg {
    type: "cosmos-sdk/FeePool";
    value: FeePoolAmino;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolSDKType {
    community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposal {
    title: string;
    description: string;
    recipient: string;
    amount: Coin[];
}
export interface CommunityPoolSpendProposalProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
    value: Uint8Array;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalAmino {
    title: string;
    description: string;
    recipient: string;
    amount: CoinAmino[];
}
export interface CommunityPoolSpendProposalAminoMsg {
    type: "cosmos-sdk/CommunityPoolSpendProposal";
    value: CommunityPoolSpendProposalAmino;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalSDKType {
    title: string;
    description: string;
    recipient: string;
    amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
    previousPeriod: Long;
    stake: string;
    height: Long;
}
export interface DelegatorStartingInfoProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo";
    value: Uint8Array;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoAmino {
    previous_period: string;
    stake: string;
    height: string;
}
export interface DelegatorStartingInfoAminoMsg {
    type: "cosmos-sdk/DelegatorStartingInfo";
    value: DelegatorStartingInfoAmino;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoSDKType {
    previous_period: Long;
    stake: string;
    height: Long;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
    validatorAddress: string;
    reward: DecCoin[];
}
export interface DelegationDelegatorRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward";
    value: Uint8Array;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardAmino {
    validator_address: string;
    reward: DecCoinAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
    type: "cosmos-sdk/DelegationDelegatorReward";
    value: DelegationDelegatorRewardAmino;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardSDKType {
    validator_address: string;
    reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
    title: string;
    description: string;
    recipient: string;
    amount: string;
    deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
    value: Uint8Array;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositAmino {
    title: string;
    description: string;
    recipient: string;
    amount: string;
    deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositAminoMsg {
    type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit";
    value: CommunityPoolSpendProposalWithDepositAmino;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositSDKType {
    title: string;
    description: string;
    recipient: string;
    amount: string;
    deposit: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const ValidatorHistoricalRewards: {
    typeUrl: string;
    encode(message: ValidatorHistoricalRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards;
    fromPartial(object: Partial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards;
    fromAmino(object: ValidatorHistoricalRewardsAmino): ValidatorHistoricalRewards;
    toAmino(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAmino;
    fromAminoMsg(object: ValidatorHistoricalRewardsAminoMsg): ValidatorHistoricalRewards;
    toAminoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAminoMsg;
    fromProtoMsg(message: ValidatorHistoricalRewardsProtoMsg): ValidatorHistoricalRewards;
    toProto(message: ValidatorHistoricalRewards): Uint8Array;
    toProtoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsProtoMsg;
};
export declare const ValidatorCurrentRewards: {
    typeUrl: string;
    encode(message: ValidatorCurrentRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards;
    fromPartial(object: Partial<ValidatorCurrentRewards>): ValidatorCurrentRewards;
    fromAmino(object: ValidatorCurrentRewardsAmino): ValidatorCurrentRewards;
    toAmino(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAmino;
    fromAminoMsg(object: ValidatorCurrentRewardsAminoMsg): ValidatorCurrentRewards;
    toAminoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAminoMsg;
    fromProtoMsg(message: ValidatorCurrentRewardsProtoMsg): ValidatorCurrentRewards;
    toProto(message: ValidatorCurrentRewards): Uint8Array;
    toProtoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsProtoMsg;
};
export declare const ValidatorAccumulatedCommission: {
    typeUrl: string;
    encode(message: ValidatorAccumulatedCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission;
    fromPartial(object: Partial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission;
    fromAmino(object: ValidatorAccumulatedCommissionAmino): ValidatorAccumulatedCommission;
    toAmino(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAmino;
    fromAminoMsg(object: ValidatorAccumulatedCommissionAminoMsg): ValidatorAccumulatedCommission;
    toAminoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAminoMsg;
    fromProtoMsg(message: ValidatorAccumulatedCommissionProtoMsg): ValidatorAccumulatedCommission;
    toProto(message: ValidatorAccumulatedCommission): Uint8Array;
    toProtoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionProtoMsg;
};
export declare const ValidatorOutstandingRewards: {
    typeUrl: string;
    encode(message: ValidatorOutstandingRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards;
    fromPartial(object: Partial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards;
    fromAmino(object: ValidatorOutstandingRewardsAmino): ValidatorOutstandingRewards;
    toAmino(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAmino;
    fromAminoMsg(object: ValidatorOutstandingRewardsAminoMsg): ValidatorOutstandingRewards;
    toAminoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAminoMsg;
    fromProtoMsg(message: ValidatorOutstandingRewardsProtoMsg): ValidatorOutstandingRewards;
    toProto(message: ValidatorOutstandingRewards): Uint8Array;
    toProtoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsProtoMsg;
};
export declare const ValidatorSlashEvent: {
    typeUrl: string;
    encode(message: ValidatorSlashEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent;
    fromPartial(object: Partial<ValidatorSlashEvent>): ValidatorSlashEvent;
    fromAmino(object: ValidatorSlashEventAmino): ValidatorSlashEvent;
    toAmino(message: ValidatorSlashEvent): ValidatorSlashEventAmino;
    fromAminoMsg(object: ValidatorSlashEventAminoMsg): ValidatorSlashEvent;
    toAminoMsg(message: ValidatorSlashEvent): ValidatorSlashEventAminoMsg;
    fromProtoMsg(message: ValidatorSlashEventProtoMsg): ValidatorSlashEvent;
    toProto(message: ValidatorSlashEvent): Uint8Array;
    toProtoMsg(message: ValidatorSlashEvent): ValidatorSlashEventProtoMsg;
};
export declare const ValidatorSlashEvents: {
    typeUrl: string;
    encode(message: ValidatorSlashEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents;
    fromPartial(object: Partial<ValidatorSlashEvents>): ValidatorSlashEvents;
    fromAmino(object: ValidatorSlashEventsAmino): ValidatorSlashEvents;
    toAmino(message: ValidatorSlashEvents): ValidatorSlashEventsAmino;
    fromAminoMsg(object: ValidatorSlashEventsAminoMsg): ValidatorSlashEvents;
    toAminoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsAminoMsg;
    fromProtoMsg(message: ValidatorSlashEventsProtoMsg): ValidatorSlashEvents;
    toProto(message: ValidatorSlashEvents): Uint8Array;
    toProtoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsProtoMsg;
};
export declare const FeePool: {
    typeUrl: string;
    encode(message: FeePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeePool;
    fromPartial(object: Partial<FeePool>): FeePool;
    fromAmino(object: FeePoolAmino): FeePool;
    toAmino(message: FeePool): FeePoolAmino;
    fromAminoMsg(object: FeePoolAminoMsg): FeePool;
    toAminoMsg(message: FeePool): FeePoolAminoMsg;
    fromProtoMsg(message: FeePoolProtoMsg): FeePool;
    toProto(message: FeePool): Uint8Array;
    toProtoMsg(message: FeePool): FeePoolProtoMsg;
};
export declare const CommunityPoolSpendProposal: {
    typeUrl: string;
    encode(message: CommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal;
    fromPartial(object: Partial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal;
    fromAmino(object: CommunityPoolSpendProposalAmino): CommunityPoolSpendProposal;
    toAmino(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAmino;
    fromAminoMsg(object: CommunityPoolSpendProposalAminoMsg): CommunityPoolSpendProposal;
    toAminoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAminoMsg;
    fromProtoMsg(message: CommunityPoolSpendProposalProtoMsg): CommunityPoolSpendProposal;
    toProto(message: CommunityPoolSpendProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalProtoMsg;
};
export declare const DelegatorStartingInfo: {
    typeUrl: string;
    encode(message: DelegatorStartingInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo;
    fromPartial(object: Partial<DelegatorStartingInfo>): DelegatorStartingInfo;
    fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo;
    toAmino(message: DelegatorStartingInfo): DelegatorStartingInfoAmino;
    fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo;
    toAminoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoAminoMsg;
    fromProtoMsg(message: DelegatorStartingInfoProtoMsg): DelegatorStartingInfo;
    toProto(message: DelegatorStartingInfo): Uint8Array;
    toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg;
};
export declare const DelegationDelegatorReward: {
    typeUrl: string;
    encode(message: DelegationDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward;
    fromPartial(object: Partial<DelegationDelegatorReward>): DelegationDelegatorReward;
    fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward;
    toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino;
    fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward;
    toAminoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardAminoMsg;
    fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward;
    toProto(message: DelegationDelegatorReward): Uint8Array;
    toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg;
};
export declare const CommunityPoolSpendProposalWithDeposit: {
    typeUrl: string;
    encode(message: CommunityPoolSpendProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit;
    fromPartial(object: Partial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit;
    fromAmino(object: CommunityPoolSpendProposalWithDepositAmino): CommunityPoolSpendProposalWithDeposit;
    toAmino(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAmino;
    fromAminoMsg(object: CommunityPoolSpendProposalWithDepositAminoMsg): CommunityPoolSpendProposalWithDeposit;
    toAminoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAminoMsg;
    fromProtoMsg(message: CommunityPoolSpendProposalWithDepositProtoMsg): CommunityPoolSpendProposalWithDeposit;
    toProto(message: CommunityPoolSpendProposalWithDeposit): Uint8Array;
    toProtoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositProtoMsg;
};
