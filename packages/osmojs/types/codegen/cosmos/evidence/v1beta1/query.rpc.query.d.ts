import { Rpc } from "@osmonauts/helpers";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(request: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(request: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
