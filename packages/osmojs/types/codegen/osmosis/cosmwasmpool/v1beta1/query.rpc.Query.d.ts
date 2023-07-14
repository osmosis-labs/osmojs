import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponse } from "./query";
export interface Query {
    /** Pools returns all cosmwasm pools */
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    /** Params returns the parameters of the x/cosmwasmpool module. */
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    pools(request?: PoolsRequest): Promise<PoolsResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    contractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
};
