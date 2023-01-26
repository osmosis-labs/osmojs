import { BalancerToConcentratedPoolLink, BalancerToConcentratedPoolLinkSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
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
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
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
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLinkSDKType[];
}
export declare const ReplaceMigrationRecordsProposal: {
    encode(message: ReplaceMigrationRecordsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal;
    fromPartial(object: Partial<ReplaceMigrationRecordsProposal>): ReplaceMigrationRecordsProposal;
};
export declare const UpdateMigrationRecordsProposal: {
    encode(message: UpdateMigrationRecordsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMigrationRecordsProposal;
    fromPartial(object: Partial<UpdateMigrationRecordsProposal>): UpdateMigrationRecordsProposal;
};
