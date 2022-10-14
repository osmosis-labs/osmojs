import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySales, QuerySalesResponse, QuerySale, QuerySaleResponse, QueryUserPosition, QueryUserPositionResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of Sales ordered by the creation time */
    sales(request?: QuerySales): Promise<QuerySalesResponse>;
    /** Returns the specific Sale object */
    sale(request: QuerySale): Promise<QuerySaleResponse>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    sales(request?: QuerySales): Promise<QuerySalesResponse>;
    sale(request: QuerySale): Promise<QuerySaleResponse>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    sales(request?: QuerySales): Promise<QuerySalesResponse>;
    sale(request: QuerySale): Promise<QuerySaleResponse>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponse>;
};
