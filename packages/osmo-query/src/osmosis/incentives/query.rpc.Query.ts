//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryAllGroupsRequest, QueryAllGroupsResponse, QueryAllGroupsGaugesRequest, QueryAllGroupsGaugesResponse, QueryAllGroupsWithGaugeRequest, QueryAllGroupsWithGaugeResponse, QueryGroupByGroupGaugeIDRequest, QueryGroupByGroupGaugeIDResponse, QueryCurrentWeightByGroupGaugeIDRequest, QueryCurrentWeightByGroupGaugeIDResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
  /** GaugeByID returns gauges by their respective ID */
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
  /** Gauges returns both upcoming and active gauges */
  gauges(request?: GaugesRequest): Promise<GaugesResponse>;
  /** ActiveGauges returns active gauges */
  activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
  /** ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
  /** Returns scheduled gauges that have not yet occurred */
  upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occurred
   * by denom
   */
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
  /** AllGroups returns all groups */
  allGroups(request?: QueryAllGroupsRequest): Promise<QueryAllGroupsResponse>;
  /** AllGroupsGauges returns all group gauges */
  allGroupsGauges(request?: QueryAllGroupsGaugesRequest): Promise<QueryAllGroupsGaugesResponse>;
  /** AllGroupsWithGauge returns all groups with their group gauge */
  allGroupsWithGauge(request?: QueryAllGroupsWithGaugeRequest): Promise<QueryAllGroupsWithGaugeResponse>;
  /** GroupByGroupGaugeID returns a group given its group gauge ID */
  groupByGroupGaugeID(request: QueryGroupByGroupGaugeIDRequest): Promise<QueryGroupByGroupGaugeIDResponse>;
  /**
   * CurrentWeightByGroupGaugeID returns the current weight since the
   * the last epoch given a group gauge ID
   */
  currentWeightByGroupGaugeID(request: QueryCurrentWeightByGroupGaugeIDRequest): Promise<QueryCurrentWeightByGroupGaugeIDResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.allGroups = this.allGroups.bind(this);
    this.allGroupsGauges = this.allGroupsGauges.bind(this);
    this.allGroupsWithGauge = this.allGroupsWithGauge.bind(this);
    this.groupByGroupGaugeID = this.groupByGroupGaugeID.bind(this);
    this.currentWeightByGroupGaugeID = this.currentWeightByGroupGaugeID.bind(this);
  }
  moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
    return promise.then(data => ModuleToDistributeCoinsResponse.decode(new BinaryReader(data)));
  }
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const data = GaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
    return promise.then(data => GaugeByIDResponse.decode(new BinaryReader(data)));
  }
  gauges(request: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponse> {
    const data = GaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
    return promise.then(data => GaugesResponse.decode(new BinaryReader(data)));
  }
  activeGauges(request: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponse> {
    const data = ActiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
    return promise.then(data => ActiveGaugesResponse.decode(new BinaryReader(data)));
  }
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
    const data = ActiveGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
    return promise.then(data => ActiveGaugesPerDenomResponse.decode(new BinaryReader(data)));
  }
  upcomingGauges(request: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponse> {
    const data = UpcomingGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
    return promise.then(data => UpcomingGaugesResponse.decode(new BinaryReader(data)));
  }
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
    const data = UpcomingGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
    return promise.then(data => UpcomingGaugesPerDenomResponse.decode(new BinaryReader(data)));
  }
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
    const data = RewardsEstRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
    return promise.then(data => RewardsEstResponse.decode(new BinaryReader(data)));
  }
  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
  }
  allGroups(request: QueryAllGroupsRequest = {}): Promise<QueryAllGroupsResponse> {
    const data = QueryAllGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "AllGroups", data);
    return promise.then(data => QueryAllGroupsResponse.decode(new BinaryReader(data)));
  }
  allGroupsGauges(request: QueryAllGroupsGaugesRequest = {}): Promise<QueryAllGroupsGaugesResponse> {
    const data = QueryAllGroupsGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "AllGroupsGauges", data);
    return promise.then(data => QueryAllGroupsGaugesResponse.decode(new BinaryReader(data)));
  }
  allGroupsWithGauge(request: QueryAllGroupsWithGaugeRequest = {}): Promise<QueryAllGroupsWithGaugeResponse> {
    const data = QueryAllGroupsWithGaugeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "AllGroupsWithGauge", data);
    return promise.then(data => QueryAllGroupsWithGaugeResponse.decode(new BinaryReader(data)));
  }
  groupByGroupGaugeID(request: QueryGroupByGroupGaugeIDRequest): Promise<QueryGroupByGroupGaugeIDResponse> {
    const data = QueryGroupByGroupGaugeIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "GroupByGroupGaugeID", data);
    return promise.then(data => QueryGroupByGroupGaugeIDResponse.decode(new BinaryReader(data)));
  }
  currentWeightByGroupGaugeID(request: QueryCurrentWeightByGroupGaugeIDRequest): Promise<QueryCurrentWeightByGroupGaugeIDResponse> {
    const data = QueryCurrentWeightByGroupGaugeIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "CurrentWeightByGroupGaugeID", data);
    return promise.then(data => QueryCurrentWeightByGroupGaugeIDResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse> {
      return queryService.moduleToDistributeCoins(request);
    },
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
      return queryService.gaugeByID(request);
    },
    gauges(request?: GaugesRequest): Promise<GaugesResponse> {
      return queryService.gauges(request);
    },
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse> {
      return queryService.activeGauges(request);
    },
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
      return queryService.activeGaugesPerDenom(request);
    },
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse> {
      return queryService.upcomingGauges(request);
    },
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
      return queryService.upcomingGaugesPerDenom(request);
    },
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
      return queryService.rewardsEst(request);
    },
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    },
    allGroups(request?: QueryAllGroupsRequest): Promise<QueryAllGroupsResponse> {
      return queryService.allGroups(request);
    },
    allGroupsGauges(request?: QueryAllGroupsGaugesRequest): Promise<QueryAllGroupsGaugesResponse> {
      return queryService.allGroupsGauges(request);
    },
    allGroupsWithGauge(request?: QueryAllGroupsWithGaugeRequest): Promise<QueryAllGroupsWithGaugeResponse> {
      return queryService.allGroupsWithGauge(request);
    },
    groupByGroupGaugeID(request: QueryGroupByGroupGaugeIDRequest): Promise<QueryGroupByGroupGaugeIDResponse> {
      return queryService.groupByGroupGaugeID(request);
    },
    currentWeightByGroupGaugeID(request: QueryCurrentWeightByGroupGaugeIDRequest): Promise<QueryCurrentWeightByGroupGaugeIDResponse> {
      return queryService.currentWeightByGroupGaugeID(request);
    }
  };
};
export interface UseModuleToDistributeCoinsQuery<TData> extends ReactQueryParams<ModuleToDistributeCoinsResponse, TData> {
  request?: ModuleToDistributeCoinsRequest;
}
export interface UseGaugeByIDQuery<TData> extends ReactQueryParams<GaugeByIDResponse, TData> {
  request: GaugeByIDRequest;
}
export interface UseGaugesQuery<TData> extends ReactQueryParams<GaugesResponse, TData> {
  request?: GaugesRequest;
}
export interface UseActiveGaugesQuery<TData> extends ReactQueryParams<ActiveGaugesResponse, TData> {
  request?: ActiveGaugesRequest;
}
export interface UseActiveGaugesPerDenomQuery<TData> extends ReactQueryParams<ActiveGaugesPerDenomResponse, TData> {
  request: ActiveGaugesPerDenomRequest;
}
export interface UseUpcomingGaugesQuery<TData> extends ReactQueryParams<UpcomingGaugesResponse, TData> {
  request?: UpcomingGaugesRequest;
}
export interface UseUpcomingGaugesPerDenomQuery<TData> extends ReactQueryParams<UpcomingGaugesPerDenomResponse, TData> {
  request: UpcomingGaugesPerDenomRequest;
}
export interface UseRewardsEstQuery<TData> extends ReactQueryParams<RewardsEstResponse, TData> {
  request: RewardsEstRequest;
}
export interface UseLockableDurationsQuery<TData> extends ReactQueryParams<QueryLockableDurationsResponse, TData> {
  request?: QueryLockableDurationsRequest;
}
export interface UseAllGroupsQuery<TData> extends ReactQueryParams<QueryAllGroupsResponse, TData> {
  request?: QueryAllGroupsRequest;
}
export interface UseAllGroupsGaugesQuery<TData> extends ReactQueryParams<QueryAllGroupsGaugesResponse, TData> {
  request?: QueryAllGroupsGaugesRequest;
}
export interface UseAllGroupsWithGaugeQuery<TData> extends ReactQueryParams<QueryAllGroupsWithGaugeResponse, TData> {
  request?: QueryAllGroupsWithGaugeRequest;
}
export interface UseGroupByGroupGaugeIDQuery<TData> extends ReactQueryParams<QueryGroupByGroupGaugeIDResponse, TData> {
  request: QueryGroupByGroupGaugeIDRequest;
}
export interface UseCurrentWeightByGroupGaugeIDQuery<TData> extends ReactQueryParams<QueryCurrentWeightByGroupGaugeIDResponse, TData> {
  request: QueryCurrentWeightByGroupGaugeIDRequest;
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
  const useModuleToDistributeCoins = <TData = ModuleToDistributeCoinsResponse,>({
    request,
    options
  }: UseModuleToDistributeCoinsQuery<TData>) => {
    return useQuery<ModuleToDistributeCoinsResponse, Error, TData>(["moduleToDistributeCoinsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleToDistributeCoins(request);
    }, options);
  };
  const useGaugeByID = <TData = GaugeByIDResponse,>({
    request,
    options
  }: UseGaugeByIDQuery<TData>) => {
    return useQuery<GaugeByIDResponse, Error, TData>(["gaugeByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gaugeByID(request);
    }, options);
  };
  const useGauges = <TData = GaugesResponse,>({
    request,
    options
  }: UseGaugesQuery<TData>) => {
    return useQuery<GaugesResponse, Error, TData>(["gaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gauges(request);
    }, options);
  };
  const useActiveGauges = <TData = ActiveGaugesResponse,>({
    request,
    options
  }: UseActiveGaugesQuery<TData>) => {
    return useQuery<ActiveGaugesResponse, Error, TData>(["activeGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.activeGauges(request);
    }, options);
  };
  const useActiveGaugesPerDenom = <TData = ActiveGaugesPerDenomResponse,>({
    request,
    options
  }: UseActiveGaugesPerDenomQuery<TData>) => {
    return useQuery<ActiveGaugesPerDenomResponse, Error, TData>(["activeGaugesPerDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.activeGaugesPerDenom(request);
    }, options);
  };
  const useUpcomingGauges = <TData = UpcomingGaugesResponse,>({
    request,
    options
  }: UseUpcomingGaugesQuery<TData>) => {
    return useQuery<UpcomingGaugesResponse, Error, TData>(["upcomingGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upcomingGauges(request);
    }, options);
  };
  const useUpcomingGaugesPerDenom = <TData = UpcomingGaugesPerDenomResponse,>({
    request,
    options
  }: UseUpcomingGaugesPerDenomQuery<TData>) => {
    return useQuery<UpcomingGaugesPerDenomResponse, Error, TData>(["upcomingGaugesPerDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upcomingGaugesPerDenom(request);
    }, options);
  };
  const useRewardsEst = <TData = RewardsEstResponse,>({
    request,
    options
  }: UseRewardsEstQuery<TData>) => {
    return useQuery<RewardsEstResponse, Error, TData>(["rewardsEstQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.rewardsEst(request);
    }, options);
  };
  const useLockableDurations = <TData = QueryLockableDurationsResponse,>({
    request,
    options
  }: UseLockableDurationsQuery<TData>) => {
    return useQuery<QueryLockableDurationsResponse, Error, TData>(["lockableDurationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lockableDurations(request);
    }, options);
  };
  const useAllGroups = <TData = QueryAllGroupsResponse,>({
    request,
    options
  }: UseAllGroupsQuery<TData>) => {
    return useQuery<QueryAllGroupsResponse, Error, TData>(["allGroupsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allGroups(request);
    }, options);
  };
  const useAllGroupsGauges = <TData = QueryAllGroupsGaugesResponse,>({
    request,
    options
  }: UseAllGroupsGaugesQuery<TData>) => {
    return useQuery<QueryAllGroupsGaugesResponse, Error, TData>(["allGroupsGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allGroupsGauges(request);
    }, options);
  };
  const useAllGroupsWithGauge = <TData = QueryAllGroupsWithGaugeResponse,>({
    request,
    options
  }: UseAllGroupsWithGaugeQuery<TData>) => {
    return useQuery<QueryAllGroupsWithGaugeResponse, Error, TData>(["allGroupsWithGaugeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allGroupsWithGauge(request);
    }, options);
  };
  const useGroupByGroupGaugeID = <TData = QueryGroupByGroupGaugeIDResponse,>({
    request,
    options
  }: UseGroupByGroupGaugeIDQuery<TData>) => {
    return useQuery<QueryGroupByGroupGaugeIDResponse, Error, TData>(["groupByGroupGaugeIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.groupByGroupGaugeID(request);
    }, options);
  };
  const useCurrentWeightByGroupGaugeID = <TData = QueryCurrentWeightByGroupGaugeIDResponse,>({
    request,
    options
  }: UseCurrentWeightByGroupGaugeIDQuery<TData>) => {
    return useQuery<QueryCurrentWeightByGroupGaugeIDResponse, Error, TData>(["currentWeightByGroupGaugeIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentWeightByGroupGaugeID(request);
    }, options);
  };
  return {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */useModuleToDistributeCoins,
    /** GaugeByID returns gauges by their respective ID */useGaugeByID,
    /** Gauges returns both upcoming and active gauges */useGauges,
    /** ActiveGauges returns active gauges */useActiveGauges,
    /** ActiveGaugesPerDenom returns active gauges by denom */useActiveGaugesPerDenom,
    /** Returns scheduled gauges that have not yet occurred */useUpcomingGauges,
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occurred
     * by denom
     */
    useUpcomingGaugesPerDenom,
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst,
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations,
    /** AllGroups returns all groups */useAllGroups,
    /** AllGroupsGauges returns all group gauges */useAllGroupsGauges,
    /** AllGroupsWithGauge returns all groups with their group gauge */useAllGroupsWithGauge,
    /** GroupByGroupGaugeID returns a group given its group gauge ID */useGroupByGroupGaugeID,
    /**
     * CurrentWeightByGroupGaugeID returns the current weight since the
     * the last epoch given a group gauge ID
     */
    useCurrentWeightByGroupGaugeID
  };
};