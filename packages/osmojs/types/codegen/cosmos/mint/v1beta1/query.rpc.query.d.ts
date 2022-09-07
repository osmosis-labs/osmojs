import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
    annualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
    annualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
