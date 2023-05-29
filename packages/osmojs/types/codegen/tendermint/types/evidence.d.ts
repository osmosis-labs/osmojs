import { Vote, VoteAmino, VoteSDKType, LightBlock, LightBlockAmino, LightBlockSDKType } from "./types";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    lightClientAttackEvidence?: LightClientAttackEvidence;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
    light_client_attack_evidence?: LightClientAttackEvidenceAmino;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.types.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
    light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    totalVotingPower: Long;
    validatorPower: Long;
    timestamp?: Date;
}
export interface DuplicateVoteEvidenceProtoMsg {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
    vote_a?: VoteAmino;
    vote_b?: VoteAmino;
    total_voting_power: string;
    validator_power: string;
    timestamp?: Date;
}
export interface DuplicateVoteEvidenceAminoMsg {
    type: "/tendermint.types.DuplicateVoteEvidence";
    value: DuplicateVoteEvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
    vote_a?: VoteSDKType;
    vote_b?: VoteSDKType;
    total_voting_power: Long;
    validator_power: Long;
    timestamp?: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock;
    commonHeight: Long;
    byzantineValidators: Validator[];
    totalVotingPower: Long;
    timestamp?: Date;
}
export interface LightClientAttackEvidenceProtoMsg {
    typeUrl: "/tendermint.types.LightClientAttackEvidence";
    value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
    conflicting_block?: LightBlockAmino;
    common_height: string;
    byzantine_validators: ValidatorAmino[];
    total_voting_power: string;
    timestamp?: Date;
}
export interface LightClientAttackEvidenceAminoMsg {
    type: "/tendermint.types.LightClientAttackEvidence";
    value: LightClientAttackEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
    conflicting_block?: LightBlockSDKType;
    common_height: Long;
    byzantine_validators: ValidatorSDKType[];
    total_voting_power: Long;
    timestamp?: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
    typeUrl: "/tendermint.types.EvidenceList";
    value: Uint8Array;
}
export interface EvidenceListAmino {
    evidence: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
    type: "/tendermint.types.EvidenceList";
    value: EvidenceListAmino;
}
export interface EvidenceListSDKType {
    evidence: EvidenceSDKType[];
}
export declare const Evidence: {
    typeUrl: string;
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
    fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence;
    toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino;
    fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence;
    fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence;
    toProto(message: DuplicateVoteEvidence): Uint8Array;
    toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg;
};
export declare const LightClientAttackEvidence: {
    typeUrl: string;
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromPartial(object: Partial<LightClientAttackEvidence>): LightClientAttackEvidence;
    fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence;
    toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino;
    fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence;
    fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence;
    toProto(message: LightClientAttackEvidence): Uint8Array;
    toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg;
};
export declare const EvidenceList: {
    typeUrl: string;
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromPartial(object: Partial<EvidenceList>): EvidenceList;
    fromAmino(object: EvidenceListAmino): EvidenceList;
    toAmino(message: EvidenceList): EvidenceListAmino;
    fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList;
    fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList;
    toProto(message: EvidenceList): Uint8Array;
    toProtoMsg(message: EvidenceList): EvidenceListProtoMsg;
};
