//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all coins for a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.47
   */
  spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
  /**
   * TotalSupply queries the total supply of all coins.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf queries the supply of a single coin.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
  /**
   * SendEnabled queries for SendEnabled entries.
   * 
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   * 
   * Since: cosmos-sdk 0.47
   */
  sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new BinaryReader(data)));
  }
  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new BinaryReader(data)));
  }
  spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then(data => QuerySpendableBalanceByDenomResponse.decode(new BinaryReader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new BinaryReader(data)));
  }
  denomsMetadata(request: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new BinaryReader(data)));
  }
  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new BinaryReader(data)));
  }
  sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then(data => QuerySendEnabledResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
      return queryService.allBalances(request);
    },
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
      return queryService.denomMetadata(request);
    },
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
      return queryService.denomOwners(request);
    },
    sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> {
      return queryService.sendEnabled(request);
    }
  };
};
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
  request: QueryAllBalancesRequest;
}
export interface UseSpendableBalancesQuery<TData> extends ReactQueryParams<QuerySpendableBalancesResponse, TData> {
  request: QuerySpendableBalancesRequest;
}
export interface UseSpendableBalanceByDenomQuery<TData> extends ReactQueryParams<QuerySpendableBalanceByDenomResponse, TData> {
  request: QuerySpendableBalanceByDenomRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
  request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
  request: QuerySupplyOfRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends ReactQueryParams<QueryDenomMetadataResponse, TData> {
  request: QueryDenomMetadataRequest;
}
export interface UseDenomsMetadataQuery<TData> extends ReactQueryParams<QueryDenomsMetadataResponse, TData> {
  request?: QueryDenomsMetadataRequest;
}
export interface UseDenomOwnersQuery<TData> extends ReactQueryParams<QueryDenomOwnersResponse, TData> {
  request: QueryDenomOwnersRequest;
}
export interface UseSendEnabledQuery<TData> extends ReactQueryParams<QuerySendEnabledResponse, TData> {
  request: QuerySendEnabledRequest;
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
  const useBalance = <TData = QueryBalanceResponse,>({
    request,
    options
  }: UseBalanceQuery<TData>) => {
    return useQuery<QueryBalanceResponse, Error, TData>(["balanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.balance(request);
    }, options);
  };
  const useAllBalances = <TData = QueryAllBalancesResponse,>({
    request,
    options
  }: UseAllBalancesQuery<TData>) => {
    return useQuery<QueryAllBalancesResponse, Error, TData>(["allBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allBalances(request);
    }, options);
  };
  const useSpendableBalances = <TData = QuerySpendableBalancesResponse,>({
    request,
    options
  }: UseSpendableBalancesQuery<TData>) => {
    return useQuery<QuerySpendableBalancesResponse, Error, TData>(["spendableBalancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalances(request);
    }, options);
  };
  const useSpendableBalanceByDenom = <TData = QuerySpendableBalanceByDenomResponse,>({
    request,
    options
  }: UseSpendableBalanceByDenomQuery<TData>) => {
    return useQuery<QuerySpendableBalanceByDenomResponse, Error, TData>(["spendableBalanceByDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spendableBalanceByDenom(request);
    }, options);
  };
  const useTotalSupply = <TData = QueryTotalSupplyResponse,>({
    request,
    options
  }: UseTotalSupplyQuery<TData>) => {
    return useQuery<QueryTotalSupplyResponse, Error, TData>(["totalSupplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSupply(request);
    }, options);
  };
  const useSupplyOf = <TData = QuerySupplyOfResponse,>({
    request,
    options
  }: UseSupplyOfQuery<TData>) => {
    return useQuery<QuerySupplyOfResponse, Error, TData>(["supplyOfQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplyOf(request);
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
  const useDenomMetadata = <TData = QueryDenomMetadataResponse,>({
    request,
    options
  }: UseDenomMetadataQuery<TData>) => {
    return useQuery<QueryDenomMetadataResponse, Error, TData>(["denomMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomMetadata(request);
    }, options);
  };
  const useDenomsMetadata = <TData = QueryDenomsMetadataResponse,>({
    request,
    options
  }: UseDenomsMetadataQuery<TData>) => {
    return useQuery<QueryDenomsMetadataResponse, Error, TData>(["denomsMetadataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomsMetadata(request);
    }, options);
  };
  const useDenomOwners = <TData = QueryDenomOwnersResponse,>({
    request,
    options
  }: UseDenomOwnersQuery<TData>) => {
    return useQuery<QueryDenomOwnersResponse, Error, TData>(["denomOwnersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomOwners(request);
    }, options);
  };
  const useSendEnabled = <TData = QuerySendEnabledResponse,>({
    request,
    options
  }: UseSendEnabledQuery<TData>) => {
    return useQuery<QuerySendEnabledResponse, Error, TData>(["sendEnabledQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.sendEnabled(request);
    }, options);
  };
  return {
    /** Balance queries the balance of a single coin for a single account. */useBalance,
    /**
     * AllBalances queries the balance of all coins for a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useAllBalances,
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSpendableBalances,
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSpendableBalanceByDenom,
    /**
     * TotalSupply queries the total supply of all coins.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useTotalSupply,
    /**
     * SupplyOf queries the supply of a single coin.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useSupplyOf,
    /** Params queries the parameters of x/bank module. */useParams,
    /** DenomsMetadata queries the client metadata of a given coin denomination. */useDenomMetadata,
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata,
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useDenomOwners,
    /**
     * SendEnabled queries for SendEnabled entries.
     * 
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSendEnabled
  };
};