import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.43
   */
  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   * 
   * Since: cosmos-sdk 0.46.2
   */
  accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   * 
   * Since: cosmos-sdk 0.46
   */
  moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   * 
   * Since: cosmos-sdk 0.46
   */
  bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   * 
   * Since: cosmos-sdk 0.46
   */
  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   * 
   * Since: cosmos-sdk 0.46
   */
  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   * 
   * Since: cosmos-sdk 0.47
   */
  accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  accounts(request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
  }
  account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
  }
  accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then(data => QueryAccountAddressByIDResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  moduleAccounts(request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
  }
  moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then(data => QueryModuleAccountByNameResponse.decode(new BinaryReader(data)));
  }
  bech32Prefix(request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then(data => Bech32PrefixResponse.decode(new BinaryReader(data)));
  }
  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then(data => AddressBytesToStringResponse.decode(new BinaryReader(data)));
  }
  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then(data => AddressStringToBytesResponse.decode(new BinaryReader(data)));
  }
  accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then(data => QueryAccountInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },
    account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.account(request);
    },
    accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
      return queryService.accountAddressByID(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
      return queryService.accountInfo(request);
    }
  };
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
  request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
  request: QueryAccountRequest;
}
export interface UseAccountAddressByIDQuery<TData> extends ReactQueryParams<QueryAccountAddressByIDResponse, TData> {
  request: QueryAccountAddressByIDRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends ReactQueryParams<QueryModuleAccountsResponse, TData> {
  request?: QueryModuleAccountsRequest;
}
export interface UseModuleAccountByNameQuery<TData> extends ReactQueryParams<QueryModuleAccountByNameResponse, TData> {
  request: QueryModuleAccountByNameRequest;
}
export interface UseBech32PrefixQuery<TData> extends ReactQueryParams<Bech32PrefixResponse, TData> {
  request?: Bech32PrefixRequest;
}
export interface UseAddressBytesToStringQuery<TData> extends ReactQueryParams<AddressBytesToStringResponse, TData> {
  request: AddressBytesToStringRequest;
}
export interface UseAddressStringToBytesQuery<TData> extends ReactQueryParams<AddressStringToBytesResponse, TData> {
  request: AddressStringToBytesRequest;
}
export interface UseAccountInfoQuery<TData> extends ReactQueryParams<QueryAccountInfoResponse, TData> {
  request: QueryAccountInfoRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useAccounts = <TData = QueryAccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<QueryAccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  const useAccount = <TData = QueryAccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    return useQuery<QueryAccountResponse, Error, TData>(["accountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
    }, options);
  };
  const useAccountAddressByID = <TData = QueryAccountAddressByIDResponse,>({
    request,
    options
  }: UseAccountAddressByIDQuery<TData>) => {
    return useQuery<QueryAccountAddressByIDResponse, Error, TData>(["accountAddressByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountAddressByID(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useModuleAccounts = <TData = QueryModuleAccountsResponse,>({
    request,
    options
  }: UseModuleAccountsQuery<TData>) => {
    return useQuery<QueryModuleAccountsResponse, Error, TData>(["moduleAccountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccounts(request);
    }, options);
  };
  const useModuleAccountByName = <TData = QueryModuleAccountByNameResponse,>({
    request,
    options
  }: UseModuleAccountByNameQuery<TData>) => {
    return useQuery<QueryModuleAccountByNameResponse, Error, TData>(["moduleAccountByNameQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccountByName(request);
    }, options);
  };
  const useBech32Prefix = <TData = Bech32PrefixResponse,>({
    request,
    options
  }: UseBech32PrefixQuery<TData>) => {
    return useQuery<Bech32PrefixResponse, Error, TData>(["bech32PrefixQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.bech32Prefix(request);
    }, options);
  };
  const useAddressBytesToString = <TData = AddressBytesToStringResponse,>({
    request,
    options
  }: UseAddressBytesToStringQuery<TData>) => {
    return useQuery<AddressBytesToStringResponse, Error, TData>(["addressBytesToStringQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressBytesToString(request);
    }, options);
  };
  const useAddressStringToBytes = <TData = AddressStringToBytesResponse,>({
    request,
    options
  }: UseAddressStringToBytesQuery<TData>) => {
    return useQuery<AddressStringToBytesResponse, Error, TData>(["addressStringToBytesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.addressStringToBytes(request);
    }, options);
  };
  const useAccountInfo = <TData = QueryAccountInfoResponse,>({
    request,
    options
  }: UseAccountInfoQuery<TData>) => {
    return useQuery<QueryAccountInfoResponse, Error, TData>(["accountInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountInfo(request);
    }, options);
  };
  return {
    /**
     * Accounts returns all the existing accounts.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts,
    /** Account returns account details based on address. */useAccount,
    /**
     * AccountAddressByID returns account address based on account number.
     * 
     * Since: cosmos-sdk 0.46.2
     */
    useAccountAddressByID,
    /** Params queries all parameters. */useParams,
    /**
     * ModuleAccounts returns all the existing module accounts.
     * 
     * Since: cosmos-sdk 0.46
     */
    useModuleAccounts,
    /** ModuleAccountByName returns the module account info by module name */useModuleAccountByName,
    /**
     * Bech32Prefix queries bech32Prefix
     * 
     * Since: cosmos-sdk 0.46
     */
    useBech32Prefix,
    /**
     * AddressBytesToString converts Account Address bytes to string
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressBytesToString,
    /**
     * AddressStringToBytes converts Address string to bytes
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressStringToBytes,
    /**
     * AccountInfo queries account info which is common to all account types.
     * 
     * Since: cosmos-sdk 0.47
     */
    useAccountInfo
  };
};