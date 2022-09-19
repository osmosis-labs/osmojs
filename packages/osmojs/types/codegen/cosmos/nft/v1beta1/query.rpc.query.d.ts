import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
    class(request: QueryClassRequest): Promise<QueryClassResponseSDKType>;
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
    class(request: QueryClassRequest): Promise<QueryClassResponseSDKType>;
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
    class(request: QueryClassRequest): Promise<QueryClassResponseSDKType>;
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
};
