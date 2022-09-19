import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    inflation(request: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
    annualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    inflation(request: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
    annualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
}
