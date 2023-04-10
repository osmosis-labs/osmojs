import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./incentives";
import * as _m0 from "protobufjs/minimal";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: DistrRecord[];
}
export interface ReplacePoolIncentivesProposalProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
    value: Uint8Array;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalAmino {
    title: string;
    description: string;
    records: DistrRecordAmino[];
}
export interface ReplacePoolIncentivesProposalAminoMsg {
    type: "osmosis/poolincentives/replace-pool-incentives-proposal";
    value: ReplacePoolIncentivesProposalAmino;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: DistrRecord[];
}
export interface UpdatePoolIncentivesProposalProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
    value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalAmino {
    title: string;
    description: string;
    records: DistrRecordAmino[];
}
export interface UpdatePoolIncentivesProposalAminoMsg {
    type: "osmosis/UpdatePoolIncentivesProposal";
    value: UpdatePoolIncentivesProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: DistrRecordSDKType[];
}
export declare const ReplacePoolIncentivesProposal: {
    typeUrl: string;
    encode(message: ReplacePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacePoolIncentivesProposal;
    fromPartial(object: Partial<ReplacePoolIncentivesProposal>): ReplacePoolIncentivesProposal;
    fromAmino(object: ReplacePoolIncentivesProposalAmino): ReplacePoolIncentivesProposal;
    toAmino(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAmino;
    fromAminoMsg(object: ReplacePoolIncentivesProposalAminoMsg): ReplacePoolIncentivesProposal;
    toAminoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAminoMsg;
    fromProtoMsg(message: ReplacePoolIncentivesProposalProtoMsg): ReplacePoolIncentivesProposal;
    toProto(message: ReplacePoolIncentivesProposal): Uint8Array;
    toProtoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalProtoMsg;
};
export declare const UpdatePoolIncentivesProposal: {
    typeUrl: string;
    encode(message: UpdatePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolIncentivesProposal;
    fromPartial(object: Partial<UpdatePoolIncentivesProposal>): UpdatePoolIncentivesProposal;
    fromAmino(object: UpdatePoolIncentivesProposalAmino): UpdatePoolIncentivesProposal;
    toAmino(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAmino;
    fromAminoMsg(object: UpdatePoolIncentivesProposalAminoMsg): UpdatePoolIncentivesProposal;
    toAminoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAminoMsg;
    fromProtoMsg(message: UpdatePoolIncentivesProposalProtoMsg): UpdatePoolIncentivesProposal;
    toProto(message: UpdatePoolIncentivesProposal): Uint8Array;
    toProtoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalProtoMsg;
};
