import { Rpc } from "@osmonauts/helpers";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
}
