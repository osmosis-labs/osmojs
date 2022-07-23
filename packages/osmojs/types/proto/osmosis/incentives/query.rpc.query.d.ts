import { Rpc } from "@osmonauts/helpers";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(request: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(request: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
