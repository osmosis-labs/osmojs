import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(params: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
