import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDResponseSDKType, GaugesRequest, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    moduleToDistributeCoins(_params?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
    gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType>;
    gauges(params?: GaugesRequest): Promise<GaugesResponseSDKType>;
    activeGauges(params?: ActiveGaugesRequest): Promise<ActiveGaugesResponseSDKType>;
    activeGaugesPerDenom(params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType>;
    upcomingGauges(params?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponseSDKType>;
    upcomingGaugesPerDenom(params: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType>;
    rewardsEst(params: RewardsEstRequest): Promise<RewardsEstResponseSDKType>;
    lockableDurations(_params?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
}
