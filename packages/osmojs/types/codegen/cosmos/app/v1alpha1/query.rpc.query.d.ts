import { Rpc } from "@osmonauts/helpers";
import { QueryConfigRequest, QueryConfigResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    config(request: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request: QueryConfigRequest): Promise<QueryConfigResponseSDKType>;
}
