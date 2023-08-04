import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalSupplyWithoutOffsetRequest, QueryTotalSupplyWithoutOffsetResponse, QuerySupplyOfWithoutOffsetRequest, QuerySupplyOfWithoutOffsetResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** TotalSupplyWithoutOffset queries the total supply of all coins. */
  totalSupplyWithoutOffset(request?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponse>;
  /** SupplyOf queries the supply of a single coin. */
  supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse>;
  /** Params queries the parameters of x/bank module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /** DenomsMetadata queries the client metadata for all registered coin denominations. */
  denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /**
   * BaseDenom queries for a base denomination given a denom that can either be
   * the base denom itself or a metadata denom unit that maps to the base denom.
   */
  baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.totalSupplyWithoutOffset = this.totalSupplyWithoutOffset.bind(this);
    this.supplyOfWithoutOffset = this.supplyOfWithoutOffset.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
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
  totalSupplyWithoutOffset(request: QueryTotalSupplyWithoutOffsetRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyWithoutOffsetResponse> {
    const data = QueryTotalSupplyWithoutOffsetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupplyWithoutOffset", data);
    return promise.then(data => QueryTotalSupplyWithoutOffsetResponse.decode(new BinaryReader(data)));
  }
  supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse> {
    const data = QuerySupplyOfWithoutOffsetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOfWithoutOffset", data);
    return promise.then(data => QuerySupplyOfWithoutOffsetResponse.decode(new BinaryReader(data)));
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
  baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "BaseDenom", data);
    return promise.then(data => QueryBaseDenomResponse.decode(new BinaryReader(data)));
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
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },
    totalSupplyWithoutOffset(request?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponse> {
      return queryService.totalSupplyWithoutOffset(request);
    },
    supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse> {
      return queryService.supplyOfWithoutOffset(request);
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
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
      return queryService.baseDenom(request);
    }
  };
};
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
  request: QueryAllBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
  request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
  request: QuerySupplyOfRequest;
}
export interface UseTotalSupplyWithoutOffsetQuery<TData> extends ReactQueryParams<QueryTotalSupplyWithoutOffsetResponse, TData> {
  request?: QueryTotalSupplyWithoutOffsetRequest;
}
export interface UseSupplyOfWithoutOffsetQuery<TData> extends ReactQueryParams<QuerySupplyOfWithoutOffsetResponse, TData> {
  request: QuerySupplyOfWithoutOffsetRequest;
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
export interface UseBaseDenomQuery<TData> extends ReactQueryParams<QueryBaseDenomResponse, TData> {
  request: QueryBaseDenomRequest;
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
  const useTotalSupplyWithoutOffset = <TData = QueryTotalSupplyWithoutOffsetResponse,>({
    request,
    options
  }: UseTotalSupplyWithoutOffsetQuery<TData>) => {
    return useQuery<QueryTotalSupplyWithoutOffsetResponse, Error, TData>(["totalSupplyWithoutOffsetQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSupplyWithoutOffset(request);
    }, options);
  };
  const useSupplyOfWithoutOffset = <TData = QuerySupplyOfWithoutOffsetResponse,>({
    request,
    options
  }: UseSupplyOfWithoutOffsetQuery<TData>) => {
    return useQuery<QuerySupplyOfWithoutOffsetResponse, Error, TData>(["supplyOfWithoutOffsetQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.supplyOfWithoutOffset(request);
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
  const useBaseDenom = <TData = QueryBaseDenomResponse,>({
    request,
    options
  }: UseBaseDenomQuery<TData>) => {
    return useQuery<QueryBaseDenomResponse, Error, TData>(["baseDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.baseDenom(request);
    }, options);
  };
  return {
    /** Balance queries the balance of a single coin for a single account. */useBalance,
    /** AllBalances queries the balance of all coins for a single account. */useAllBalances,
    /** TotalSupply queries the total supply of all coins. */useTotalSupply,
    /** SupplyOf queries the supply of a single coin. */useSupplyOf,
    /** TotalSupplyWithoutOffset queries the total supply of all coins. */useTotalSupplyWithoutOffset,
    /** SupplyOf queries the supply of a single coin. */useSupplyOfWithoutOffset,
    /** Params queries the parameters of x/bank module. */useParams,
    /** DenomsMetadata queries the client metadata of a given coin denomination. */useDenomMetadata,
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */useDenomsMetadata,
    /**
     * BaseDenom queries for a base denomination given a denom that can either be
     * the base denom itself or a metadata denom unit that maps to the base denom.
     */
    useBaseDenom
  };
};