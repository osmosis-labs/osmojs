import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsResponse, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse, QueryGetProtoRevPoolRequest, QueryGetProtoRevPoolResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   * that have been executed for a given route
   */
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
  /**
   * GetProtoRevAllRouteStatistics queries all of routes that the module has
   * arbitraged against and the number of trades and profits that have been
   * accumulated for each route
   */
  getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
  /** GetProtoRevAdminAccount queries the admin account of the module */
  getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
  /** GetProtoRevDeveloperAccount queries the developer account of the module */
  getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
  /**
   * GetProtoRevPoolWeights queries the weights of each pool type currently
   * being used by the module
   */
  getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   * that can be consumed per transaction
   */
  getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   * that can consumed per block
   */
  getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
  /**
   * GetProtoRevBaseDenoms queries the base denoms that the module is currently
   * utilizing for arbitrage
   */
  getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
  /** GetProtoRevEnabled queries whether the module is enabled or not */
  getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
  /**
   * GetProtoRevPool queries the pool id used via the highest liquidity method
   * for arbitrage route building given a pair of denominations
   */
  getProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByRoute = this.getProtoRevStatisticsByRoute.bind(this);
    this.getProtoRevAllRouteStatistics = this.getProtoRevAllRouteStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
    this.getProtoRevDeveloperAccount = this.getProtoRevDeveloperAccount.bind(this);
    this.getProtoRevPoolWeights = this.getProtoRevPoolWeights.bind(this);
    this.getProtoRevMaxPoolPointsPerTx = this.getProtoRevMaxPoolPointsPerTx.bind(this);
    this.getProtoRevMaxPoolPointsPerBlock = this.getProtoRevMaxPoolPointsPerBlock.bind(this);
    this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
    this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
    this.getProtoRevPool = this.getProtoRevPool.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
    const data = QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByRoute", data);
    return promise.then(data => QueryGetProtoRevStatisticsByRouteResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllRouteStatistics(request: QueryGetProtoRevAllRouteStatisticsRequest = {}): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
    const data = QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllRouteStatistics", data);
    return promise.then(data => QueryGetProtoRevAllRouteStatisticsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAdminAccount(request: QueryGetProtoRevAdminAccountRequest = {}): Promise<QueryGetProtoRevAdminAccountResponse> {
    const data = QueryGetProtoRevAdminAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAdminAccount", data);
    return promise.then(data => QueryGetProtoRevAdminAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevDeveloperAccount(request: QueryGetProtoRevDeveloperAccountRequest = {}): Promise<QueryGetProtoRevDeveloperAccountResponse> {
    const data = QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevDeveloperAccount", data);
    return promise.then(data => QueryGetProtoRevDeveloperAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevPoolWeights(request: QueryGetProtoRevPoolWeightsRequest = {}): Promise<QueryGetProtoRevPoolWeightsResponse> {
    const data = QueryGetProtoRevPoolWeightsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPoolWeights", data);
    return promise.then(data => QueryGetProtoRevPoolWeightsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerTx(request: QueryGetProtoRevMaxPoolPointsPerTxRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerTx", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerBlock(request: QueryGetProtoRevMaxPoolPointsPerBlockRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerBlock", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
  }
  getProtoRevBaseDenoms(request: QueryGetProtoRevBaseDenomsRequest = {}): Promise<QueryGetProtoRevBaseDenomsResponse> {
    const data = QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevBaseDenoms", data);
    return promise.then(data => QueryGetProtoRevBaseDenomsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevEnabled(request: QueryGetProtoRevEnabledRequest = {}): Promise<QueryGetProtoRevEnabledResponse> {
    const data = QueryGetProtoRevEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevEnabled", data);
    return promise.then(data => QueryGetProtoRevEnabledResponse.decode(new BinaryReader(data)));
  }
  getProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse> {
    const data = QueryGetProtoRevPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPool", data);
    return promise.then(data => QueryGetProtoRevPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse> {
      return queryService.getProtoRevNumberOfTrades(request);
    },
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
      return queryService.getProtoRevProfitsByDenom(request);
    },
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse> {
      return queryService.getProtoRevAllProfits(request);
    },
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
      return queryService.getProtoRevStatisticsByRoute(request);
    },
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
      return queryService.getProtoRevAllRouteStatistics(request);
    },
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
      return queryService.getProtoRevTokenPairArbRoutes(request);
    },
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse> {
      return queryService.getProtoRevAdminAccount(request);
    },
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse> {
      return queryService.getProtoRevDeveloperAccount(request);
    },
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse> {
      return queryService.getProtoRevPoolWeights(request);
    },
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
      return queryService.getProtoRevMaxPoolPointsPerTx(request);
    },
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
      return queryService.getProtoRevMaxPoolPointsPerBlock(request);
    },
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse> {
      return queryService.getProtoRevBaseDenoms(request);
    },
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse> {
      return queryService.getProtoRevEnabled(request);
    },
    getProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse> {
      return queryService.getProtoRevPool(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseGetProtoRevNumberOfTradesQuery<TData> extends ReactQueryParams<QueryGetProtoRevNumberOfTradesResponse, TData> {
  request?: QueryGetProtoRevNumberOfTradesRequest;
}
export interface UseGetProtoRevProfitsByDenomQuery<TData> extends ReactQueryParams<QueryGetProtoRevProfitsByDenomResponse, TData> {
  request: QueryGetProtoRevProfitsByDenomRequest;
}
export interface UseGetProtoRevAllProfitsQuery<TData> extends ReactQueryParams<QueryGetProtoRevAllProfitsResponse, TData> {
  request?: QueryGetProtoRevAllProfitsRequest;
}
export interface UseGetProtoRevStatisticsByRouteQuery<TData> extends ReactQueryParams<QueryGetProtoRevStatisticsByRouteResponse, TData> {
  request: QueryGetProtoRevStatisticsByRouteRequest;
}
export interface UseGetProtoRevAllRouteStatisticsQuery<TData> extends ReactQueryParams<QueryGetProtoRevAllRouteStatisticsResponse, TData> {
  request?: QueryGetProtoRevAllRouteStatisticsRequest;
}
export interface UseGetProtoRevTokenPairArbRoutesQuery<TData> extends ReactQueryParams<QueryGetProtoRevTokenPairArbRoutesResponse, TData> {
  request?: QueryGetProtoRevTokenPairArbRoutesRequest;
}
export interface UseGetProtoRevAdminAccountQuery<TData> extends ReactQueryParams<QueryGetProtoRevAdminAccountResponse, TData> {
  request?: QueryGetProtoRevAdminAccountRequest;
}
export interface UseGetProtoRevDeveloperAccountQuery<TData> extends ReactQueryParams<QueryGetProtoRevDeveloperAccountResponse, TData> {
  request?: QueryGetProtoRevDeveloperAccountRequest;
}
export interface UseGetProtoRevPoolWeightsQuery<TData> extends ReactQueryParams<QueryGetProtoRevPoolWeightsResponse, TData> {
  request?: QueryGetProtoRevPoolWeightsRequest;
}
export interface UseGetProtoRevMaxPoolPointsPerTxQuery<TData> extends ReactQueryParams<QueryGetProtoRevMaxPoolPointsPerTxResponse, TData> {
  request?: QueryGetProtoRevMaxPoolPointsPerTxRequest;
}
export interface UseGetProtoRevMaxPoolPointsPerBlockQuery<TData> extends ReactQueryParams<QueryGetProtoRevMaxPoolPointsPerBlockResponse, TData> {
  request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest;
}
export interface UseGetProtoRevBaseDenomsQuery<TData> extends ReactQueryParams<QueryGetProtoRevBaseDenomsResponse, TData> {
  request?: QueryGetProtoRevBaseDenomsRequest;
}
export interface UseGetProtoRevEnabledQuery<TData> extends ReactQueryParams<QueryGetProtoRevEnabledResponse, TData> {
  request?: QueryGetProtoRevEnabledRequest;
}
export interface UseGetProtoRevPoolQuery<TData> extends ReactQueryParams<QueryGetProtoRevPoolResponse, TData> {
  request: QueryGetProtoRevPoolRequest;
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useGetProtoRevNumberOfTrades = <TData = QueryGetProtoRevNumberOfTradesResponse,>({
    request,
    options
  }: UseGetProtoRevNumberOfTradesQuery<TData>) => {
    return useQuery<QueryGetProtoRevNumberOfTradesResponse, Error, TData>(["getProtoRevNumberOfTradesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevNumberOfTrades(request);
    }, options);
  };
  const useGetProtoRevProfitsByDenom = <TData = QueryGetProtoRevProfitsByDenomResponse,>({
    request,
    options
  }: UseGetProtoRevProfitsByDenomQuery<TData>) => {
    return useQuery<QueryGetProtoRevProfitsByDenomResponse, Error, TData>(["getProtoRevProfitsByDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevProfitsByDenom(request);
    }, options);
  };
  const useGetProtoRevAllProfits = <TData = QueryGetProtoRevAllProfitsResponse,>({
    request,
    options
  }: UseGetProtoRevAllProfitsQuery<TData>) => {
    return useQuery<QueryGetProtoRevAllProfitsResponse, Error, TData>(["getProtoRevAllProfitsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevAllProfits(request);
    }, options);
  };
  const useGetProtoRevStatisticsByRoute = <TData = QueryGetProtoRevStatisticsByRouteResponse,>({
    request,
    options
  }: UseGetProtoRevStatisticsByRouteQuery<TData>) => {
    return useQuery<QueryGetProtoRevStatisticsByRouteResponse, Error, TData>(["getProtoRevStatisticsByRouteQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevStatisticsByRoute(request);
    }, options);
  };
  const useGetProtoRevAllRouteStatistics = <TData = QueryGetProtoRevAllRouteStatisticsResponse,>({
    request,
    options
  }: UseGetProtoRevAllRouteStatisticsQuery<TData>) => {
    return useQuery<QueryGetProtoRevAllRouteStatisticsResponse, Error, TData>(["getProtoRevAllRouteStatisticsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevAllRouteStatistics(request);
    }, options);
  };
  const useGetProtoRevTokenPairArbRoutes = <TData = QueryGetProtoRevTokenPairArbRoutesResponse,>({
    request,
    options
  }: UseGetProtoRevTokenPairArbRoutesQuery<TData>) => {
    return useQuery<QueryGetProtoRevTokenPairArbRoutesResponse, Error, TData>(["getProtoRevTokenPairArbRoutesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevTokenPairArbRoutes(request);
    }, options);
  };
  const useGetProtoRevAdminAccount = <TData = QueryGetProtoRevAdminAccountResponse,>({
    request,
    options
  }: UseGetProtoRevAdminAccountQuery<TData>) => {
    return useQuery<QueryGetProtoRevAdminAccountResponse, Error, TData>(["getProtoRevAdminAccountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevAdminAccount(request);
    }, options);
  };
  const useGetProtoRevDeveloperAccount = <TData = QueryGetProtoRevDeveloperAccountResponse,>({
    request,
    options
  }: UseGetProtoRevDeveloperAccountQuery<TData>) => {
    return useQuery<QueryGetProtoRevDeveloperAccountResponse, Error, TData>(["getProtoRevDeveloperAccountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevDeveloperAccount(request);
    }, options);
  };
  const useGetProtoRevPoolWeights = <TData = QueryGetProtoRevPoolWeightsResponse,>({
    request,
    options
  }: UseGetProtoRevPoolWeightsQuery<TData>) => {
    return useQuery<QueryGetProtoRevPoolWeightsResponse, Error, TData>(["getProtoRevPoolWeightsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevPoolWeights(request);
    }, options);
  };
  const useGetProtoRevMaxPoolPointsPerTx = <TData = QueryGetProtoRevMaxPoolPointsPerTxResponse,>({
    request,
    options
  }: UseGetProtoRevMaxPoolPointsPerTxQuery<TData>) => {
    return useQuery<QueryGetProtoRevMaxPoolPointsPerTxResponse, Error, TData>(["getProtoRevMaxPoolPointsPerTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevMaxPoolPointsPerTx(request);
    }, options);
  };
  const useGetProtoRevMaxPoolPointsPerBlock = <TData = QueryGetProtoRevMaxPoolPointsPerBlockResponse,>({
    request,
    options
  }: UseGetProtoRevMaxPoolPointsPerBlockQuery<TData>) => {
    return useQuery<QueryGetProtoRevMaxPoolPointsPerBlockResponse, Error, TData>(["getProtoRevMaxPoolPointsPerBlockQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevMaxPoolPointsPerBlock(request);
    }, options);
  };
  const useGetProtoRevBaseDenoms = <TData = QueryGetProtoRevBaseDenomsResponse,>({
    request,
    options
  }: UseGetProtoRevBaseDenomsQuery<TData>) => {
    return useQuery<QueryGetProtoRevBaseDenomsResponse, Error, TData>(["getProtoRevBaseDenomsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevBaseDenoms(request);
    }, options);
  };
  const useGetProtoRevEnabled = <TData = QueryGetProtoRevEnabledResponse,>({
    request,
    options
  }: UseGetProtoRevEnabledQuery<TData>) => {
    return useQuery<QueryGetProtoRevEnabledResponse, Error, TData>(["getProtoRevEnabledQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevEnabled(request);
    }, options);
  };
  const useGetProtoRevPool = <TData = QueryGetProtoRevPoolResponse,>({
    request,
    options
  }: UseGetProtoRevPoolQuery<TData>) => {
    return useQuery<QueryGetProtoRevPoolResponse, Error, TData>(["getProtoRevPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getProtoRevPool(request);
    }, options);
  };
  return {
    /** Params queries the parameters of the module. */useParams,
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    useGetProtoRevNumberOfTrades,
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */useGetProtoRevProfitsByDenom,
    /** GetProtoRevAllProfits queries all of the profits from the module */useGetProtoRevAllProfits,
    /**
     * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
     * that have been executed for a given route
     */
    useGetProtoRevStatisticsByRoute,
    /**
     * GetProtoRevAllRouteStatistics queries all of routes that the module has
     * arbitraged against and the number of trades and profits that have been
     * accumulated for each route
     */
    useGetProtoRevAllRouteStatistics,
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    useGetProtoRevTokenPairArbRoutes,
    /** GetProtoRevAdminAccount queries the admin account of the module */useGetProtoRevAdminAccount,
    /** GetProtoRevDeveloperAccount queries the developer account of the module */useGetProtoRevDeveloperAccount,
    /**
     * GetProtoRevPoolWeights queries the weights of each pool type currently
     * being used by the module
     */
    useGetProtoRevPoolWeights,
    /**
     * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
     * that can be consumed per transaction
     */
    useGetProtoRevMaxPoolPointsPerTx,
    /**
     * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
     * that can consumed per block
     */
    useGetProtoRevMaxPoolPointsPerBlock,
    /**
     * GetProtoRevBaseDenoms queries the base denoms that the module is currently
     * utilizing for arbitrage
     */
    useGetProtoRevBaseDenoms,
    /** GetProtoRevEnabled queries whether the module is enabled or not */useGetProtoRevEnabled,
    /**
     * GetProtoRevPool queries the pool id used via the highest liquidity method
     * for arbitrage route building given a pair of denominations
     */
    useGetProtoRevPool
  };
};