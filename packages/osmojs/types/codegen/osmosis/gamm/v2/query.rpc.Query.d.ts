import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export interface Query {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
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
