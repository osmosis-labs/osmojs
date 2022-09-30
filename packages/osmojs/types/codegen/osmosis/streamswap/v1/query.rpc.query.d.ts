import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySales, QuerySalesResponseSDKType, QuerySale, QuerySaleResponseSDKType, QueryUserPosition, QueryUserPositionResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    sales(request?: QuerySales): Promise<QuerySalesResponseSDKType>;
    sale(request: QuerySale): Promise<QuerySaleResponseSDKType>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    sales(request?: QuerySales): Promise<QuerySalesResponseSDKType>;
    sale(request: QuerySale): Promise<QuerySaleResponseSDKType>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    sales(request?: QuerySales): Promise<QuerySalesResponseSDKType>;
    sale(request: QuerySale): Promise<QuerySaleResponseSDKType>;
    userPosition(request: QueryUserPosition): Promise<QueryUserPositionResponseSDKType>;
};
