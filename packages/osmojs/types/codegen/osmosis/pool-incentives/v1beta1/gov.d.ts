import { DistrRecord, DistrRecordSDKType } from "./incentives";
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
    title: string;
    description: string;
    records: DistrRecord[];
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
    title: string;
    description: string;
    records: DistrRecord[];
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
    title: string;
    description: string;
    records: DistrRecordSDKType[];
}
export declare const ReplacePoolIncentivesProposal: {
    encode(message: ReplacePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacePoolIncentivesProposal;
    fromPartial(object: Partial<ReplacePoolIncentivesProposal>): ReplacePoolIncentivesProposal;
};
export declare const UpdatePoolIncentivesProposal: {
    encode(message: UpdatePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolIncentivesProposal;
    fromPartial(object: Partial<UpdatePoolIncentivesProposal>): UpdatePoolIncentivesProposal;
};
