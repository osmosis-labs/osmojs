import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43 */


  async accounts(params: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.get<QueryAccountsResponseSDKType>(endpoint, options);
  }
  /* Account returns account details based on address. */


  async account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.get<QueryAccountResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ModuleAccounts returns all the existing module accounts. */


  async moduleAccounts(_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.get<QueryModuleAccountsResponseSDKType>(endpoint);
  }
  /* Bech32 queries bech32Prefix */


  async bech32Prefix(_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.get<Bech32PrefixResponseSDKType>(endpoint);
  }
  /* AddressBytesToString converts Account Address bytes to string */


  async addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.get<AddressBytesToStringResponseSDKType>(endpoint);
  }
  /* AddressStringToBytes converts Address string to bytes */


  async addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.get<AddressStringToBytesResponseSDKType>(endpoint);
  }

}