import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    grants(params: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
