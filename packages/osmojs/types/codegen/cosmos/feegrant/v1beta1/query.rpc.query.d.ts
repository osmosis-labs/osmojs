import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAllowanceRequest, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType>;
};
