import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    inflation(_params?: QueryInflationRequest): Promise<QueryInflationResponse>;
    annualProvisions(_params?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
