import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsResponse, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse } from "./query";
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
     * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
     * that have been executed for a given route
     */
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
    /**
     * GetProtoRevAllRouteStatistics queries all of routes that the module has
     * arbitraged against and the number of trades and profits that have been
     * accumulated for each route
     */
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
    /** GetProtoRevAdminAccount queries the admin account of the module */
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
    /** GetProtoRevDeveloperAccount queries the developer account of the module */
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
    /**
     * GetProtoRevPoolWeights queries the weights of each pool type currently
     * being used by the module
     */
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
    /**
     * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
     * that can be consumed per transaction
     */
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
    /**
     * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
     * that can consumed per block
     */
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
    /**
     * GetProtoRevBaseDenoms queries the base denoms that the module is currently
     * utilizing for arbitrage
     */
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
    /** GetProtoRevEnabled queries whether the module is enabled or not */
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
};
