import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(_params?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
