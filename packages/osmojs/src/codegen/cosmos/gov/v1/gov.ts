import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
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
  UNRECOGNIZED = -1,
}
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;

    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;

    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;

    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;

    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";

    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";

    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";

    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";

    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";

    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
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
  UNRECOGNIZED = -1,
}
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;

    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;

    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;

    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;

    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;

    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";

    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";

    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";

    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";

    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";

    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";

    default:
      return "UNKNOWN";
  }
}

/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposal_id: Long;
  depositor: string;
  amount: Coin[];
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
  final_tally_result: TallyResult;
  submit_time: Date;
  deposit_end_time: Date;
  total_deposit: Coin[];
  voting_start_time: Date;
  voting_end_time: Date;

  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
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
  proposal_id: Long;
  voter: string;
  options: WeightedVoteOption[];

  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata: string;
}

/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period: Duration;
}

/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  voting_period: Duration;
}

/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;

  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;

  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold: string;
}

function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}

export const WeightedVoteOption = {
  encode(message: WeightedVoteOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.option = (reader.int32() as any);
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseDeposit(): Deposit {
  return {
    proposal_id: Long.UZERO,
    depositor: "",
    amount: []
  };
}

export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Deposit {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromString(object.proposal_id) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseProposal(): Proposal {
  return {
    id: Long.UZERO,
    messages: [],
    status: 0,
    final_tally_result: undefined,
    submit_time: undefined,
    deposit_end_time: undefined,
    total_deposit: [],
    voting_start_time: undefined,
    voting_end_time: undefined,
    metadata: ""
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
    }

    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }

    if (message.deposit_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.total_deposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.voting_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
    }

    if (message.voting_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;

        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.total_deposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
      voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());

    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.total_deposit = [];
    }

    message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
    message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
    message.submit_time = object.submit_time ?? undefined;
    message.deposit_end_time = object.deposit_end_time ?? undefined;
    message.total_deposit = object.total_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.voting_start_time = object.voting_start_time ?? undefined;
    message.voting_end_time = object.voting_end_time ?? undefined;
    message.metadata = object.metadata ?? "";
    return message;
  }

};

function createBaseTallyResult(): TallyResult {
  return {
    yes_count: "",
    abstain_count: "",
    no_count: "",
    no_with_veto_count: ""
  };
}

export const TallyResult = {
  encode(message: TallyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yes_count !== "") {
      writer.uint32(10).string(message.yes_count);
    }

    if (message.abstain_count !== "") {
      writer.uint32(18).string(message.abstain_count);
    }

    if (message.no_count !== "") {
      writer.uint32(26).string(message.no_count);
    }

    if (message.no_with_veto_count !== "") {
      writer.uint32(34).string(message.no_with_veto_count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.yes_count = reader.string();
          break;

        case 2:
          message.abstain_count = reader.string();
          break;

        case 3:
          message.no_count = reader.string();
          break;

        case 4:
          message.no_with_veto_count = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TallyResult {
    return {
      yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
      abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
      no_count: isSet(object.no_count) ? String(object.no_count) : "",
      no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : ""
    };
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yes_count !== undefined && (obj.yes_count = message.yes_count);
    message.abstain_count !== undefined && (obj.abstain_count = message.abstain_count);
    message.no_count !== undefined && (obj.no_count = message.no_count);
    message.no_with_veto_count !== undefined && (obj.no_with_veto_count = message.no_with_veto_count);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yes_count = object.yes_count ?? "";
    message.abstain_count = object.abstain_count ?? "";
    message.no_count = object.no_count ?? "";
    message.no_with_veto_count = object.no_with_veto_count ?? "";
    return message;
  }

};

function createBaseVote(): Vote {
  return {
    proposal_id: Long.UZERO,
    voter: "",
    options: [],
    metadata: ""
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        case 5:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vote {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromString(object.proposal_id) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  }

};

function createBaseDepositParams(): DepositParams {
  return {
    min_deposit: [],
    max_deposit_period: undefined
  };
}

export const DepositParams = {
  encode(message: DepositParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.min_deposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.max_deposit_period !== undefined) {
      Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.min_deposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.max_deposit_period = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined
    };
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};

    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.min_deposit = [];
    }

    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.max_deposit_period = object.max_deposit_period ?? undefined;
    return message;
  }

};

function createBaseVotingParams(): VotingParams {
  return {
    voting_period: undefined
  };
}

export const VotingParams = {
  encode(message: VotingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VotingParams {
    return {
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined
    };
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period);
    return obj;
  },

  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.voting_period = object.voting_period ?? undefined;
    return message;
  }

};

function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    veto_threshold: ""
  };
}

export const TallyParams = {
  encode(message: TallyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }

    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }

    if (message.veto_threshold !== "") {
      writer.uint32(26).string(message.veto_threshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;

        case 2:
          message.threshold = reader.string();
          break;

        case 3:
          message.veto_threshold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      veto_threshold: isSet(object.veto_threshold) ? String(object.veto_threshold) : ""
    };
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.veto_threshold !== undefined && (obj.veto_threshold = message.veto_threshold);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.veto_threshold = object.veto_threshold ?? "";
    return message;
  }

};