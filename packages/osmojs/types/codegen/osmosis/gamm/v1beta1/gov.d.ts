import { BalancerToConcentratedPoolLink, BalancerToConcentratedPoolLinkAmino, BalancerToConcentratedPoolLinkSDKType } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
export interface ReplaceMigrationRecordsProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
    value: Uint8Array;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalAmino {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkAmino[];
}
export interface ReplaceMigrationRecordsProposalAminoMsg {
    type: "osmosis/ReplaceMigrationRecordsProposal";
    value: ReplaceMigrationRecordsProposalAmino;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
export interface UpdateMigrationRecordsProposalProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
    value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalAmino {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkAmino[];
}
export interface UpdateMigrationRecordsProposalAminoMsg {
    type: "osmosis/UpdateMigrationRecordsProposal";
    value: UpdateMigrationRecordsProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkSDKType[];
}
export declare const ReplaceMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: ReplaceMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal;
    fromPartial(object: Partial<ReplaceMigrationRecordsProposal>): ReplaceMigrationRecordsProposal;
    fromAmino(object: ReplaceMigrationRecordsProposalAmino): ReplaceMigrationRecordsProposal;
    toAmino(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAmino;
    fromAminoMsg(object: ReplaceMigrationRecordsProposalAminoMsg): ReplaceMigrationRecordsProposal;
    toAminoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAminoMsg;
    fromProtoMsg(message: ReplaceMigrationRecordsProposalProtoMsg): ReplaceMigrationRecordsProposal;
    toProto(message: ReplaceMigrationRecordsProposal): Uint8Array;
    toProtoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalProtoMsg;
};
export declare const UpdateMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: UpdateMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateMigrationRecordsProposal;
    fromPartial(object: Partial<UpdateMigrationRecordsProposal>): UpdateMigrationRecordsProposal;
    fromAmino(object: UpdateMigrationRecordsProposalAmino): UpdateMigrationRecordsProposal;
    toAmino(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAmino;
    fromAminoMsg(object: UpdateMigrationRecordsProposalAminoMsg): UpdateMigrationRecordsProposal;
    toAminoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAminoMsg;
    fromProtoMsg(message: UpdateMigrationRecordsProposalProtoMsg): UpdateMigrationRecordsProposal;
    toProto(message: UpdateMigrationRecordsProposal): Uint8Array;
    toProtoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalProtoMsg;
};
