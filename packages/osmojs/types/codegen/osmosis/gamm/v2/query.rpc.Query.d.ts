import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export interface Query {
    /** Deprecated: please use alternate in x/poolmanager */
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
};
