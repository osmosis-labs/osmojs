import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponseSDKType, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    getProtoRevNumberOfTrades(_params?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponseSDKType>;
    getProtoRevProfitsByDenom(params: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponseSDKType>;
    getProtoRevAllProfits(_params?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponseSDKType>;
    getProtoRevStatisticsByPool(params: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponseSDKType>;
    getProtoRevAllStatistics(_params?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponseSDKType>;
    getProtoRevTokenPairArbRoutes(_params?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponseSDKType>;
}
