import { LCDClient } from "@osmonauts/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    feeTokens(_params?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponseSDKType>;
    denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType>;
    denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType>;
    baseDenom(_params?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponseSDKType>;
}
