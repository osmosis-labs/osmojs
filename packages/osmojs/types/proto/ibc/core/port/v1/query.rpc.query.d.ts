import { Rpc } from "@osmonauts/helpers";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
