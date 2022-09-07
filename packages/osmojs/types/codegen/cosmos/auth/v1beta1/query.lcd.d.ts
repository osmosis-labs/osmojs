import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    accounts(params?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(params: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(_params?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(_params?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
