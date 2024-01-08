import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, UserPositionsRequest, UserPositionsResponse, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponse, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponse, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponse, ClaimableIncentivesRequest, ClaimableIncentivesResponse, PositionByIdRequest, PositionByIdResponse, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponse, IncentiveRecordsRequest, IncentiveRecordsResponse, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponse, CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponse, UserUnbondingPositionsRequest, UserUnbondingPositionsResponse, GetTotalLiquidityRequest, GetTotalLiquidityResponse, NumNextInitializedTicksRequest, NumNextInitializedTicksResponse } from "./query";
export interface Query {
  /** Pools returns all concentrated liquidity pools */
  pools(request?: PoolsRequest): Promise<PoolsResponse>;
  /** Params returns concentrated liquidity module params. */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** UserPositions returns all concentrated positions of some address. */
  userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
  /**
   * LiquidityPerTickRange returns the amount of liquidity per every tick range
   * existing within the given pool
   */
  liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
  /**
   * LiquidityNetInDirection returns liquidity net in the direction given.
   * Uses the bound if specified, if not uses either min tick / max tick
   * depending on the direction.
   */
  liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
  /**
   * ClaimableSpreadRewards returns the amount of spread rewards that can be
   * claimed by a position with the given id.
   */
  claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
  /**
   * ClaimableIncentives returns the amount of incentives that can be claimed
   * and how many would be forfeited by a position with the given id.
   */
  claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
  /** PositionById returns a position with the given id. */
  positionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
  /**
   * PoolAccumulatorRewards returns the pool-global accumulator rewards.
   * Contains spread factor rewards and uptime rewards.
   */
  poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
  /** IncentiveRecords returns the incentive records for a given poolId */
  incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
  /**
   * TickAccumulatorTrackers returns the tick accumulator trackers.
   * Contains spread factor and uptime accumulator trackers.
   */
  tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
  /**
   * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
   * pool that is linked with the given concentrated pool.
   */
  cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
  /**
   * UserUnbondingPositions returns the position and lock info of unbonding
   * positions of the given address.
   */
  userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
  /** GetTotalLiquidity returns total liquidity across all cl pools. */
  getTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
  /**
   * NumNextInitializedTicks returns the provided number of next initialized
   * ticks in the direction of swapping the token in denom.
   */
  numNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.userPositions = this.userPositions.bind(this);
    this.liquidityPerTickRange = this.liquidityPerTickRange.bind(this);
    this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this);
    this.claimableSpreadRewards = this.claimableSpreadRewards.bind(this);
    this.claimableIncentives = this.claimableIncentives.bind(this);
    this.positionById = this.positionById.bind(this);
    this.poolAccumulatorRewards = this.poolAccumulatorRewards.bind(this);
    this.incentiveRecords = this.incentiveRecords.bind(this);
    this.tickAccumulatorTrackers = this.tickAccumulatorTrackers.bind(this);
    this.cFMMPoolIdLinkFromConcentratedPoolId = this.cFMMPoolIdLinkFromConcentratedPoolId.bind(this);
    this.userUnbondingPositions = this.userUnbondingPositions.bind(this);
    this.getTotalLiquidity = this.getTotalLiquidity.bind(this);
    this.numNextInitializedTicks = this.numNextInitializedTicks.bind(this);
  }
  pools(request: PoolsRequest = {
    pagination: undefined
  }): Promise<PoolsResponse> {
    const data = PoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Pools", data);
    return promise.then(data => PoolsResponse.decode(new BinaryReader(data)));
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse> {
    const data = UserPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserPositions", data);
    return promise.then(data => UserPositionsResponse.decode(new BinaryReader(data)));
  }
  liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse> {
    const data = LiquidityPerTickRangeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityPerTickRange", data);
    return promise.then(data => LiquidityPerTickRangeResponse.decode(new BinaryReader(data)));
  }
  liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse> {
    const data = LiquidityNetInDirectionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityNetInDirection", data);
    return promise.then(data => LiquidityNetInDirectionResponse.decode(new BinaryReader(data)));
  }
  claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse> {
    const data = ClaimableSpreadRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableSpreadRewards", data);
    return promise.then(data => ClaimableSpreadRewardsResponse.decode(new BinaryReader(data)));
  }
  claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse> {
    const data = ClaimableIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableIncentives", data);
    return promise.then(data => ClaimableIncentivesResponse.decode(new BinaryReader(data)));
  }
  positionById(request: PositionByIdRequest): Promise<PositionByIdResponse> {
    const data = PositionByIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PositionById", data);
    return promise.then(data => PositionByIdResponse.decode(new BinaryReader(data)));
  }
  poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse> {
    const data = PoolAccumulatorRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PoolAccumulatorRewards", data);
    return promise.then(data => PoolAccumulatorRewardsResponse.decode(new BinaryReader(data)));
  }
  incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse> {
    const data = IncentiveRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "IncentiveRecords", data);
    return promise.then(data => IncentiveRecordsResponse.decode(new BinaryReader(data)));
  }
  tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse> {
    const data = TickAccumulatorTrackersRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "TickAccumulatorTrackers", data);
    return promise.then(data => TickAccumulatorTrackersResponse.decode(new BinaryReader(data)));
  }
  cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse> {
    const data = CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "CFMMPoolIdLinkFromConcentratedPoolId", data);
    return promise.then(data => CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(new BinaryReader(data)));
  }
  userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse> {
    const data = UserUnbondingPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserUnbondingPositions", data);
    return promise.then(data => UserUnbondingPositionsResponse.decode(new BinaryReader(data)));
  }
  getTotalLiquidity(request: GetTotalLiquidityRequest = {}): Promise<GetTotalLiquidityResponse> {
    const data = GetTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "GetTotalLiquidity", data);
    return promise.then(data => GetTotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  numNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse> {
    const data = NumNextInitializedTicksRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "NumNextInitializedTicks", data);
    return promise.then(data => NumNextInitializedTicksResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pools(request?: PoolsRequest): Promise<PoolsResponse> {
      return queryService.pools(request);
    },
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    userPositions(request: UserPositionsRequest): Promise<UserPositionsResponse> {
      return queryService.userPositions(request);
    },
    liquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse> {
      return queryService.liquidityPerTickRange(request);
    },
    liquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse> {
      return queryService.liquidityNetInDirection(request);
    },
    claimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse> {
      return queryService.claimableSpreadRewards(request);
    },
    claimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse> {
      return queryService.claimableIncentives(request);
    },
    positionById(request: PositionByIdRequest): Promise<PositionByIdResponse> {
      return queryService.positionById(request);
    },
    poolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse> {
      return queryService.poolAccumulatorRewards(request);
    },
    incentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse> {
      return queryService.incentiveRecords(request);
    },
    tickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse> {
      return queryService.tickAccumulatorTrackers(request);
    },
    cFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse> {
      return queryService.cFMMPoolIdLinkFromConcentratedPoolId(request);
    },
    userUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse> {
      return queryService.userUnbondingPositions(request);
    },
    getTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse> {
      return queryService.getTotalLiquidity(request);
    },
    numNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse> {
      return queryService.numNextInitializedTicks(request);
    }
  };
};
export interface UsePoolsQuery<TData> extends ReactQueryParams<PoolsResponse, TData> {
  request?: PoolsRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<ParamsResponse, TData> {
  request?: ParamsRequest;
}
export interface UseUserPositionsQuery<TData> extends ReactQueryParams<UserPositionsResponse, TData> {
  request: UserPositionsRequest;
}
export interface UseLiquidityPerTickRangeQuery<TData> extends ReactQueryParams<LiquidityPerTickRangeResponse, TData> {
  request: LiquidityPerTickRangeRequest;
}
export interface UseLiquidityNetInDirectionQuery<TData> extends ReactQueryParams<LiquidityNetInDirectionResponse, TData> {
  request: LiquidityNetInDirectionRequest;
}
export interface UseClaimableSpreadRewardsQuery<TData> extends ReactQueryParams<ClaimableSpreadRewardsResponse, TData> {
  request: ClaimableSpreadRewardsRequest;
}
export interface UseClaimableIncentivesQuery<TData> extends ReactQueryParams<ClaimableIncentivesResponse, TData> {
  request: ClaimableIncentivesRequest;
}
export interface UsePositionByIdQuery<TData> extends ReactQueryParams<PositionByIdResponse, TData> {
  request: PositionByIdRequest;
}
export interface UsePoolAccumulatorRewardsQuery<TData> extends ReactQueryParams<PoolAccumulatorRewardsResponse, TData> {
  request: PoolAccumulatorRewardsRequest;
}
export interface UseIncentiveRecordsQuery<TData> extends ReactQueryParams<IncentiveRecordsResponse, TData> {
  request: IncentiveRecordsRequest;
}
export interface UseTickAccumulatorTrackersQuery<TData> extends ReactQueryParams<TickAccumulatorTrackersResponse, TData> {
  request: TickAccumulatorTrackersRequest;
}
export interface UseCFMMPoolIdLinkFromConcentratedPoolIdQuery<TData> extends ReactQueryParams<CFMMPoolIdLinkFromConcentratedPoolIdResponse, TData> {
  request: CFMMPoolIdLinkFromConcentratedPoolIdRequest;
}
export interface UseUserUnbondingPositionsQuery<TData> extends ReactQueryParams<UserUnbondingPositionsResponse, TData> {
  request: UserUnbondingPositionsRequest;
}
export interface UseGetTotalLiquidityQuery<TData> extends ReactQueryParams<GetTotalLiquidityResponse, TData> {
  request?: GetTotalLiquidityRequest;
}
export interface UseNumNextInitializedTicksQuery<TData> extends ReactQueryParams<NumNextInitializedTicksResponse, TData> {
  request: NumNextInitializedTicksRequest;
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
  const usePools = <TData = PoolsResponse,>({
    request,
    options
  }: UsePoolsQuery<TData>) => {
    return useQuery<PoolsResponse, Error, TData>(["poolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pools(request);
    }, options);
  };
  const useParams = <TData = ParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<ParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useUserPositions = <TData = UserPositionsResponse,>({
    request,
    options
  }: UseUserPositionsQuery<TData>) => {
    return useQuery<UserPositionsResponse, Error, TData>(["userPositionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userPositions(request);
    }, options);
  };
  const useLiquidityPerTickRange = <TData = LiquidityPerTickRangeResponse,>({
    request,
    options
  }: UseLiquidityPerTickRangeQuery<TData>) => {
    return useQuery<LiquidityPerTickRangeResponse, Error, TData>(["liquidityPerTickRangeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.liquidityPerTickRange(request);
    }, options);
  };
  const useLiquidityNetInDirection = <TData = LiquidityNetInDirectionResponse,>({
    request,
    options
  }: UseLiquidityNetInDirectionQuery<TData>) => {
    return useQuery<LiquidityNetInDirectionResponse, Error, TData>(["liquidityNetInDirectionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.liquidityNetInDirection(request);
    }, options);
  };
  const useClaimableSpreadRewards = <TData = ClaimableSpreadRewardsResponse,>({
    request,
    options
  }: UseClaimableSpreadRewardsQuery<TData>) => {
    return useQuery<ClaimableSpreadRewardsResponse, Error, TData>(["claimableSpreadRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimableSpreadRewards(request);
    }, options);
  };
  const useClaimableIncentives = <TData = ClaimableIncentivesResponse,>({
    request,
    options
  }: UseClaimableIncentivesQuery<TData>) => {
    return useQuery<ClaimableIncentivesResponse, Error, TData>(["claimableIncentivesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimableIncentives(request);
    }, options);
  };
  const usePositionById = <TData = PositionByIdResponse,>({
    request,
    options
  }: UsePositionByIdQuery<TData>) => {
    return useQuery<PositionByIdResponse, Error, TData>(["positionByIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.positionById(request);
    }, options);
  };
  const usePoolAccumulatorRewards = <TData = PoolAccumulatorRewardsResponse,>({
    request,
    options
  }: UsePoolAccumulatorRewardsQuery<TData>) => {
    return useQuery<PoolAccumulatorRewardsResponse, Error, TData>(["poolAccumulatorRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolAccumulatorRewards(request);
    }, options);
  };
  const useIncentiveRecords = <TData = IncentiveRecordsResponse,>({
    request,
    options
  }: UseIncentiveRecordsQuery<TData>) => {
    return useQuery<IncentiveRecordsResponse, Error, TData>(["incentiveRecordsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentiveRecords(request);
    }, options);
  };
  const useTickAccumulatorTrackers = <TData = TickAccumulatorTrackersResponse,>({
    request,
    options
  }: UseTickAccumulatorTrackersQuery<TData>) => {
    return useQuery<TickAccumulatorTrackersResponse, Error, TData>(["tickAccumulatorTrackersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tickAccumulatorTrackers(request);
    }, options);
  };
  const useCFMMPoolIdLinkFromConcentratedPoolId = <TData = CFMMPoolIdLinkFromConcentratedPoolIdResponse,>({
    request,
    options
  }: UseCFMMPoolIdLinkFromConcentratedPoolIdQuery<TData>) => {
    return useQuery<CFMMPoolIdLinkFromConcentratedPoolIdResponse, Error, TData>(["cFMMPoolIdLinkFromConcentratedPoolIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.cFMMPoolIdLinkFromConcentratedPoolId(request);
    }, options);
  };
  const useUserUnbondingPositions = <TData = UserUnbondingPositionsResponse,>({
    request,
    options
  }: UseUserUnbondingPositionsQuery<TData>) => {
    return useQuery<UserUnbondingPositionsResponse, Error, TData>(["userUnbondingPositionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userUnbondingPositions(request);
    }, options);
  };
  const useGetTotalLiquidity = <TData = GetTotalLiquidityResponse,>({
    request,
    options
  }: UseGetTotalLiquidityQuery<TData>) => {
    return useQuery<GetTotalLiquidityResponse, Error, TData>(["getTotalLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTotalLiquidity(request);
    }, options);
  };
  const useNumNextInitializedTicks = <TData = NumNextInitializedTicksResponse,>({
    request,
    options
  }: UseNumNextInitializedTicksQuery<TData>) => {
    return useQuery<NumNextInitializedTicksResponse, Error, TData>(["numNextInitializedTicksQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numNextInitializedTicks(request);
    }, options);
  };
  return {
    /** Pools returns all concentrated liquidity pools */usePools,
    /** Params returns concentrated liquidity module params. */useParams,
    /** UserPositions returns all concentrated positions of some address. */useUserPositions,
    /**
     * LiquidityPerTickRange returns the amount of liquidity per every tick range
     * existing within the given pool
     */
    useLiquidityPerTickRange,
    /**
     * LiquidityNetInDirection returns liquidity net in the direction given.
     * Uses the bound if specified, if not uses either min tick / max tick
     * depending on the direction.
     */
    useLiquidityNetInDirection,
    /**
     * ClaimableSpreadRewards returns the amount of spread rewards that can be
     * claimed by a position with the given id.
     */
    useClaimableSpreadRewards,
    /**
     * ClaimableIncentives returns the amount of incentives that can be claimed
     * and how many would be forfeited by a position with the given id.
     */
    useClaimableIncentives,
    /** PositionById returns a position with the given id. */usePositionById,
    /**
     * PoolAccumulatorRewards returns the pool-global accumulator rewards.
     * Contains spread factor rewards and uptime rewards.
     */
    usePoolAccumulatorRewards,
    /** IncentiveRecords returns the incentive records for a given poolId */useIncentiveRecords,
    /**
     * TickAccumulatorTrackers returns the tick accumulator trackers.
     * Contains spread factor and uptime accumulator trackers.
     */
    useTickAccumulatorTrackers,
    /**
     * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
     * pool that is linked with the given concentrated pool.
     */
    useCFMMPoolIdLinkFromConcentratedPoolId,
    /**
     * UserUnbondingPositions returns the position and lock info of unbonding
     * positions of the given address.
     */
    useUserUnbondingPositions,
    /** GetTotalLiquidity returns total liquidity across all cl pools. */useGetTotalLiquidity,
    /**
     * NumNextInitializedTicks returns the provided number of next initialized
     * ticks in the direction of swapping the token in denom.
     */
    useNumNextInitializedTicks
  };
};