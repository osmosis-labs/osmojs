import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGrantsRequest, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponseSDKType>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponseSDKType>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponseSDKType>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponseSDKType>;
};
