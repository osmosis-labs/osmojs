import { LCDClient } from "@osmonauts/lcd";
import { QuerySales, QuerySalesResponseSDKType, QuerySale, QuerySaleResponseSDKType, QueryUserPosition, QueryUserPositionResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    sales(params?: QuerySales): Promise<QuerySalesResponseSDKType>;
    sale(params: QuerySale): Promise<QuerySaleResponseSDKType>;
    userPosition(params: QueryUserPosition): Promise<QueryUserPositionResponseSDKType>;
}
