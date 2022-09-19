import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    subspaces(_params?: QuerySubspacesRequest): Promise<QuerySubspacesResponseSDKType>;
}
