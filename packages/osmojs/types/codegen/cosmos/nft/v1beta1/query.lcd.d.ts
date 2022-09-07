import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    owner(params: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    nFTs(params: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    nFT(params: QueryNFTRequest): Promise<QueryNFTResponse>;
    class(params: QueryClassRequest): Promise<QueryClassResponse>;
    classes(params?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
