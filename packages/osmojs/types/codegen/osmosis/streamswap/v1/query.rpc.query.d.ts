import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySales, QuerySalesResponse, QuerySale, QuerySaleResponse, QueryUserPosition, QueryUserPositionResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    sales(request?: QuerySales): Promise<QuerySalesResponse>;
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
