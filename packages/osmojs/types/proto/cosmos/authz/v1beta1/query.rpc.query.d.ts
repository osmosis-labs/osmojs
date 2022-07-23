import { Rpc } from "@osmonauts/helpers";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
