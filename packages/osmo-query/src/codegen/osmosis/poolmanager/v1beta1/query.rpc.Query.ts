import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponse, PoolRequest, PoolResponse, AllPoolsRequest, AllPoolsResponse, SpotPriceRequest, SpotPriceResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalLiquidityRequest, TotalLiquidityResponse } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  /** Returns the total number of pools existing in Osmosis. */
  numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
  /** Pool returns the Pool specified by the pool id */
  pool(request: PoolRequest): Promise<PoolResponse>;
  /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
  allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
  /** TotalPoolLiquidity returns the total liquidity of the specified pool. */
  totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
  /** TotalLiquidity returns the total liquidity across all pools. */
  totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
    this.pool = this.pool.bind(this);
    this.allPools = this.allPools.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  numPools(request: NumPoolsRequest = {}): Promise<NumPoolsResponse> {
    const data = NumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "NumPools", data);
    return promise.then(data => NumPoolsResponse.decode(new BinaryReader(data)));
  }
  pool(request: PoolRequest): Promise<PoolResponse> {
    const data = PoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Pool", data);
    return promise.then(data => PoolResponse.decode(new BinaryReader(data)));
  }
  allPools(request: AllPoolsRequest = {}): Promise<AllPoolsResponse> {
    const data = AllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "AllPools", data);
    return promise.then(data => AllPoolsResponse.decode(new BinaryReader(data)));
  }
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
  }
  totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse> {
    const data = TotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then(data => TotalPoolLiquidityResponse.decode(new BinaryReader(data)));
  }
  totalLiquidity(request: TotalLiquidityRequest = {}): Promise<TotalLiquidityResponse> {
    const data = TotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalLiquidity", data);
    return promise.then(data => TotalLiquidityResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    },
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    },
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse> {
      return queryService.numPools(request);
    },
    pool(request: PoolRequest): Promise<PoolResponse> {
      return queryService.pool(request);
    },
    allPools(request?: AllPoolsRequest): Promise<AllPoolsResponse> {
      return queryService.allPools(request);
    },
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    totalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<ParamsResponse, TData> {
  request?: ParamsRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountInResponse, TData> {
  request: EstimateSwapExactAmountInRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountInQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountInResponse, TData> {
  request: EstimateSinglePoolSwapExactAmountInRequest;
}
export interface UseEstimateSwapExactAmountOutQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountOutResponse, TData> {
  request: EstimateSwapExactAmountOutRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountOutQuery<TData> extends ReactQueryParams<EstimateSwapExactAmountOutResponse, TData> {
  request: EstimateSinglePoolSwapExactAmountOutRequest;
}
export interface UseNumPoolsQuery<TData> extends ReactQueryParams<NumPoolsResponse, TData> {
  request?: NumPoolsRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<PoolResponse, TData> {
  request: PoolRequest;
}
export interface UseAllPoolsQuery<TData> extends ReactQueryParams<AllPoolsResponse, TData> {
  request?: AllPoolsRequest;
}
export interface UseSpotPriceQuery<TData> extends ReactQueryParams<SpotPriceResponse, TData> {
  request: SpotPriceRequest;
}
export interface UseTotalPoolLiquidityQuery<TData> extends ReactQueryParams<TotalPoolLiquidityResponse, TData> {
  request: TotalPoolLiquidityRequest;
}
export interface UseTotalLiquidityQuery<TData> extends ReactQueryParams<TotalLiquidityResponse, TData> {
  request?: TotalLiquidityRequest;
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
  const useParams = <TData = ParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<ParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useEstimateSwapExactAmountIn = <TData = EstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountInResponse, Error, TData>(["estimateSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountIn(request);
    }, options);
  };
  const useEstimateSinglePoolSwapExactAmountIn = <TData = EstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountInQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountInResponse, Error, TData>(["estimateSinglePoolSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    }, options);
  };
  const useEstimateSwapExactAmountOut = <TData = EstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountOutResponse, Error, TData>(["estimateSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountOut(request);
    }, options);
  };
  const useEstimateSinglePoolSwapExactAmountOut = <TData = EstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountOutQuery<TData>) => {
    return useQuery<EstimateSwapExactAmountOutResponse, Error, TData>(["estimateSinglePoolSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    }, options);
  };
  const useNumPools = <TData = NumPoolsResponse,>({
    request,
    options
  }: UseNumPoolsQuery<TData>) => {
    return useQuery<NumPoolsResponse, Error, TData>(["numPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numPools(request);
    }, options);
  };
  const usePool = <TData = PoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    return useQuery<PoolResponse, Error, TData>(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const useAllPools = <TData = AllPoolsResponse,>({
    request,
    options
  }: UseAllPoolsQuery<TData>) => {
    return useQuery<AllPoolsResponse, Error, TData>(["allPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allPools(request);
    }, options);
  };
  const useSpotPrice = <TData = SpotPriceResponse,>({
    request,
    options
  }: UseSpotPriceQuery<TData>) => {
    return useQuery<SpotPriceResponse, Error, TData>(["spotPriceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotPrice(request);
    }, options);
  };
  const useTotalPoolLiquidity = <TData = TotalPoolLiquidityResponse,>({
    request,
    options
  }: UseTotalPoolLiquidityQuery<TData>) => {
    return useQuery<TotalPoolLiquidityResponse, Error, TData>(["totalPoolLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalPoolLiquidity(request);
    }, options);
  };
  const useTotalLiquidity = <TData = TotalLiquidityResponse,>({
    request,
    options
  }: UseTotalLiquidityQuery<TData>) => {
    return useQuery<TotalLiquidityResponse, Error, TData>(["totalLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalLiquidity(request);
    }, options);
  };
  return {
    useParams,
    /** Estimates swap amount out given in. */useEstimateSwapExactAmountIn,
    useEstimateSinglePoolSwapExactAmountIn,
    /** Estimates swap amount in given out. */useEstimateSwapExactAmountOut,
    useEstimateSinglePoolSwapExactAmountOut,
    /** Returns the total number of pools existing in Osmosis. */useNumPools,
    /** Pool returns the Pool specified by the pool id */usePool,
    /** AllPools returns all pools on the Osmosis chain sorted by IDs. */useAllPools,
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice,
    /** TotalPoolLiquidity returns the total liquidity of the specified pool. */useTotalPoolLiquidity,
    /** TotalLiquidity returns the total liquidity across all pools. */useTotalLiquidity
  };
};