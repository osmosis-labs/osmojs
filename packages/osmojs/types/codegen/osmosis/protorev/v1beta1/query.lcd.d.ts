import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponseSDKType, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponseSDKType, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponseSDKType, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponseSDKType, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsResponseSDKType, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponseSDKType, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    getProtoRevNumberOfTrades(_params?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponseSDKType>;
    getProtoRevProfitsByDenom(params: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponseSDKType>;
    getProtoRevAllProfits(_params?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponseSDKType>;
    getProtoRevStatisticsByRoute(params: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponseSDKType>;
    getProtoRevAllRouteStatistics(_params?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponseSDKType>;
    getProtoRevTokenPairArbRoutes(_params?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponseSDKType>;
    getProtoRevAdminAccount(_params?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponseSDKType>;
    getProtoRevDeveloperAccount(_params?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponseSDKType>;
    getProtoRevPoolWeights(_params?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponseSDKType>;
    getProtoRevMaxPoolPointsPerTx(_params?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType>;
    getProtoRevMaxPoolPointsPerBlock(_params?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType>;
    getProtoRevBaseDenoms(_params?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponseSDKType>;
    getProtoRevEnabled(_params?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponseSDKType>;
}
