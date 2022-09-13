import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, Long, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface Evidence {
  duplicate_vote_evidence?: DuplicateVoteEvidence;
  light_client_attack_evidence?: LightClientAttackEvidence;
}

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  vote_a: Vote;
  vote_b: Vote;
  total_voting_power: Long;
  validator_power: Long;
  timestamp: Date;
}

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflicting_block: LightBlock;
  common_height: Long;
  byzantine_validators: Validator[];
  total_voting_power: Long;
  timestamp: Date;
}
export interface EvidenceList {
  evidence: Evidence[];
}

function createBaseEvidence(): Evidence {
  return {
    duplicate_vote_evidence: undefined,
    light_client_attack_evidence: undefined
  };
}

export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }

    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;

        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Evidence {
    return {
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
    };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicate_vote_evidence !== undefined && (obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence) : undefined);
    message.light_client_attack_evidence !== undefined && (obj.light_client_attack_evidence = message.light_client_attack_evidence ? LightClientAttackEvidence.toJSON(message.light_client_attack_evidence) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
    message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
    return message;
  }

};

function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    vote_a: undefined,
    vote_b: undefined,
    total_voting_power: Long.ZERO,
    validator_power: Long.ZERO,
    timestamp: undefined
  };
}

export const DuplicateVoteEvidence = {
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote_a !== undefined) {
      Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }

    if (message.vote_b !== undefined) {
      Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }

    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }

    if (!message.validator_power.isZero()) {
      writer.uint32(32).int64(message.validator_power);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote_a = Vote.decode(reader, reader.uint32());
          break;

        case 2:
          message.vote_b = Vote.decode(reader, reader.uint32());
          break;

        case 3:
          message.total_voting_power = (reader.int64() as Long);
          break;

        case 4:
          message.validator_power = (reader.int64() as Long);
          break;

        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      vote_a: isSet(object.vote_a) ? Vote.fromJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromString(object.total_voting_power) : Long.ZERO,
      validator_power: isSet(object.validator_power) ? Long.fromString(object.validator_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.vote_a !== undefined && (obj.vote_a = message.vote_a ? Vote.toJSON(message.vote_a) : undefined);
    message.vote_b !== undefined && (obj.vote_b = message.vote_b ? Vote.toJSON(message.vote_b) : undefined);
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || Long.ZERO).toString());
    message.validator_power !== undefined && (obj.validator_power = (message.validator_power || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? Vote.fromPartial(object.vote_a) : undefined;
    message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? Vote.fromPartial(object.vote_b) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? Long.fromValue(object.validator_power) : Long.ZERO;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};

function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflicting_block: undefined,
    common_height: Long.ZERO,
    byzantine_validators: [],
    total_voting_power: Long.ZERO,
    timestamp: undefined
  };
}

export const LightClientAttackEvidence = {
  encode(message: LightClientAttackEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflicting_block !== undefined) {
      LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }

    if (!message.common_height.isZero()) {
      writer.uint32(16).int64(message.common_height);
    }

    for (const v of message.byzantine_validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.total_voting_power.isZero()) {
      writer.uint32(32).int64(message.total_voting_power);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.common_height = (reader.int64() as Long);
          break;

        case 3:
          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.total_voting_power = (reader.int64() as Long);
          break;

        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? Long.fromString(object.common_height) : Long.ZERO,
      byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Validator.fromJSON(e)) : [],
      total_voting_power: isSet(object.total_voting_power) ? Long.fromString(object.total_voting_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflicting_block !== undefined && (obj.conflicting_block = message.conflicting_block ? LightBlock.toJSON(message.conflicting_block) : undefined);
    message.common_height !== undefined && (obj.common_height = (message.common_height || Long.ZERO).toString());

    if (message.byzantine_validators) {
      obj.byzantine_validators = message.byzantine_validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }

    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? LightBlock.fromPartial(object.conflicting_block) : undefined;
    message.common_height = object.common_height !== undefined && object.common_height !== null ? Long.fromValue(object.common_height) : Long.ZERO;
    message.byzantine_validators = object.byzantine_validators?.map(e => Validator.fromPartial(e)) || [];
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};

function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: []
  };
}

export const EvidenceList = {
  encode(message: EvidenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },

  toJSON(message: EvidenceList): unknown {
    const obj: any = {};

    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  }

};