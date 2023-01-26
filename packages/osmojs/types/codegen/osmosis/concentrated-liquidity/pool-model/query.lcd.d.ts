import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pools(params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
