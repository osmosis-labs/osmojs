import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    /** GetProtoRevAllProfits queries all of the profits from the module */
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse>;
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
    getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse>;
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
    getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse>;
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
};
