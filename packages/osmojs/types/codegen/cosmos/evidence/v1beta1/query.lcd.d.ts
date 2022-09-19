import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType>;
    allEvidence(params?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType>;
}
