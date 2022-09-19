import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEvidenceRequest, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType>;
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType>;
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType>;
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType>;
};
