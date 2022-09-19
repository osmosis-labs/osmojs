import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponseSDKType, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDResponseSDKType, GaugesRequest, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
    moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponseSDKType>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType>;
    gauges(request?: GaugesRequest): Promise<GaugesResponseSDKType>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
    moduleDistributedCoins(request?: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponseSDKType>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType>;
    gauges(request?: GaugesRequest): Promise<GaugesResponseSDKType>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
    moduleDistributedCoins(request: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponseSDKType>;
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType>;
    gauges(request: GaugesRequest): Promise<GaugesResponseSDKType>;
    activeGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType>;
    upcomingGauges(request: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponseSDKType>;
    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
};
