import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
    allEvidence(params?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
