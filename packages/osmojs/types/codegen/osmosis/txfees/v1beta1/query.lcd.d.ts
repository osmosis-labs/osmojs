import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    feeTokens(_params?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(_params?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
