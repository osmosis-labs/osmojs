import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOption {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare const VoteOptionSDKType: typeof VoteOption;
export declare const VoteOptionAmino: typeof VoteOption;
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    PROPOSAL_STATUS_PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    PROPOSAL_STATUS_REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
export declare const ProposalStatusSDKType: typeof ProposalStatus;
export declare const ProposalStatusAmino: typeof ProposalStatus;
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
    option: VoteOption;
    weight: string;
}
export interface WeightedVoteOptionProtoMsg {
    typeUrl: "/cosmos.gov.v1.WeightedVoteOption";
    value: Uint8Array;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionAmino {
    option: VoteOption;
    weight: string;
}
export interface WeightedVoteOptionAminoMsg {
    type: "cosmos-sdk/v1/WeightedVoteOption";
    value: WeightedVoteOptionAmino;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
    option: VoteOption;
    weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
    proposalId: Long;
    depositor: string;
    amount: Coin[];
}
export interface DepositProtoMsg {
    typeUrl: "/cosmos.gov.v1.Deposit";
    value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
    proposal_id: string;
    depositor: string;
    amount: CoinAmino[];
}
export interface DepositAminoMsg {
    type: "cosmos-sdk/v1/Deposit";
    value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
    proposal_id: Long;
    depositor: string;
    amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
    id: Long;
    messages: Any[];
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    finalTallyResult?: TallyResult;
    submitTime?: Date;
    depositEndTime?: Date;
    totalDeposit: Coin[];
    votingStartTime?: Date;
    votingEndTime?: Date;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}
export interface ProposalProtoMsg {
    typeUrl: "/cosmos.gov.v1.Proposal";
    value: Uint8Array;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
    id: string;
    messages: AnyAmino[];
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    final_tally_result?: TallyResultAmino;
    submit_time?: Date;
    deposit_end_time?: Date;
    total_deposit: CoinAmino[];
    voting_start_time?: Date;
    voting_end_time?: Date;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}
export interface ProposalAminoMsg {
    type: "cosmos-sdk/v1/Proposal";
    value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
    id: Long;
    messages: AnySDKType[];
    status: ProposalStatus;
    final_tally_result?: TallyResultSDKType;
    submit_time?: Date;
    deposit_end_time?: Date;
    total_deposit: CoinSDKType[];
    voting_start_time?: Date;
    voting_end_time?: Date;
    metadata: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
    yesCount: string;
    abstainCount: string;
    noCount: string;
    noWithVetoCount: string;
}
export interface TallyResultProtoMsg {
    typeUrl: "/cosmos.gov.v1.TallyResult";
    value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
export interface TallyResultAminoMsg {
    type: "cosmos-sdk/v1/TallyResult";
    value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
    proposalId: Long;
    voter: string;
    options: WeightedVoteOption[];
    /** metadata is any  arbitrary metadata to attached to the vote. */
    metadata: string;
}
export interface VoteProtoMsg {
    typeUrl: "/cosmos.gov.v1.Vote";
    value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
    proposal_id: string;
    voter: string;
    options: WeightedVoteOptionAmino[];
    /** metadata is any  arbitrary metadata to attached to the vote. */
    metadata: string;
}
export interface VoteAminoMsg {
    type: "cosmos-sdk/v1/Vote";
    value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
    proposal_id: Long;
    voter: string;
    options: WeightedVoteOptionSDKType[];
    metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    maxDepositPeriod?: Duration;
}
export interface DepositParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1.DepositParams";
    value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsAmino {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit: CoinAmino[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
    type: "cosmos-sdk/v1/DepositParams";
    value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
    min_deposit: CoinSDKType[];
    max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
    /** Length of the voting period. */
    votingPeriod?: Duration;
}
export interface VotingParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1.VotingParams";
    value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsAmino {
    /** Length of the voting period. */
    voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
    type: "cosmos-sdk/v1/VotingParams";
    value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
    voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
}
export interface TallyParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1.TallyParams";
    value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsAmino {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    veto_threshold: string;
}
export interface TallyParamsAminoMsg {
    type: "cosmos-sdk/v1/TallyParams";
    value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
    quorum: string;
    threshold: string;
    veto_threshold: string;
}
export declare const WeightedVoteOption: {
    typeUrl: string;
    encode(message: WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption;
    fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption;
    fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption;
    toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino;
    fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption;
    toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg;
    fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption;
    toProto(message: WeightedVoteOption): Uint8Array;
    toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    toAminoMsg(message: Deposit): DepositAminoMsg;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    toAminoMsg(message: Proposal): ProposalAminoMsg;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const TallyResult: {
    typeUrl: string;
    encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
    fromPartial(object: Partial<TallyResult>): TallyResult;
    fromAmino(object: TallyResultAmino): TallyResult;
    toAmino(message: TallyResult): TallyResultAmino;
    fromAminoMsg(object: TallyResultAminoMsg): TallyResult;
    toAminoMsg(message: TallyResult): TallyResultAminoMsg;
    fromProtoMsg(message: TallyResultProtoMsg): TallyResult;
    toProto(message: TallyResult): Uint8Array;
    toProtoMsg(message: TallyResult): TallyResultProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    toAminoMsg(message: Vote): VoteAminoMsg;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const DepositParams: {
    typeUrl: string;
    encode(message: DepositParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams;
    fromPartial(object: Partial<DepositParams>): DepositParams;
    fromAmino(object: DepositParamsAmino): DepositParams;
    toAmino(message: DepositParams): DepositParamsAmino;
    fromAminoMsg(object: DepositParamsAminoMsg): DepositParams;
    toAminoMsg(message: DepositParams): DepositParamsAminoMsg;
    fromProtoMsg(message: DepositParamsProtoMsg): DepositParams;
    toProto(message: DepositParams): Uint8Array;
    toProtoMsg(message: DepositParams): DepositParamsProtoMsg;
};
export declare const VotingParams: {
    typeUrl: string;
    encode(message: VotingParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams;
    fromPartial(object: Partial<VotingParams>): VotingParams;
    fromAmino(object: VotingParamsAmino): VotingParams;
    toAmino(message: VotingParams): VotingParamsAmino;
    fromAminoMsg(object: VotingParamsAminoMsg): VotingParams;
    toAminoMsg(message: VotingParams): VotingParamsAminoMsg;
    fromProtoMsg(message: VotingParamsProtoMsg): VotingParams;
    toProto(message: VotingParams): Uint8Array;
    toProtoMsg(message: VotingParams): VotingParamsProtoMsg;
};
export declare const TallyParams: {
    typeUrl: string;
    encode(message: TallyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams;
    fromPartial(object: Partial<TallyParams>): TallyParams;
    fromAmino(object: TallyParamsAmino): TallyParams;
    toAmino(message: TallyParams): TallyParamsAmino;
    fromAminoMsg(object: TallyParamsAminoMsg): TallyParams;
    toAminoMsg(message: TallyParams): TallyParamsAminoMsg;
    fromProtoMsg(message: TallyParamsProtoMsg): TallyParams;
    toProto(message: TallyParams): Uint8Array;
    toProtoMsg(message: TallyParams): TallyParamsProtoMsg;
};
