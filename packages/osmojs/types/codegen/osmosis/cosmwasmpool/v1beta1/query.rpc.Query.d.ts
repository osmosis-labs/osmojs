import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
};
