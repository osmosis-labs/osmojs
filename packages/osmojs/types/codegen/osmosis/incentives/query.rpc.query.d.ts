import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
};
