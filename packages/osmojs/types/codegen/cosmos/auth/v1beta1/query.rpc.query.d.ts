import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponseSDKType>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponseSDKType>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponseSDKType>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponseSDKType>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType>;
};
