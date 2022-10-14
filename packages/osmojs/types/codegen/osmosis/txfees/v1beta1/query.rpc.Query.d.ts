import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export interface Query {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    /** Returns the poolID for a specified denom input. */
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
};
