import { Rpc } from "@osmonauts/helpers";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feeTokens(request: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
