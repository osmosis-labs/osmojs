import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
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
    /** Returns scheduled gauges that have not yet occured */
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
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
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
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
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
};
