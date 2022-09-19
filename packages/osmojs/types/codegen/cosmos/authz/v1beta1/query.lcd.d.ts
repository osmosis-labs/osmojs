import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    grants(params: QueryGrantsRequest): Promise<QueryGrantsResponseSDKType>;
    granterGrants(params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponseSDKType>;
    granteeGrants(params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponseSDKType>;
}
