import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponseSDKType, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponseSDKType, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponseSDKType, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponseSDKType, QueryGetProtoRevInfoByPoolTypeRequest, QueryGetProtoRevInfoByPoolTypeResponseSDKType, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponseSDKType, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponseSDKType, QueryGetProtoRevPoolRequest, QueryGetProtoRevPoolResponseSDKType, QueryGetAllProtocolRevenueRequest, QueryGetAllProtocolRevenueResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByRoute = this.getProtoRevStatisticsByRoute.bind(this);
    this.getProtoRevAllRouteStatistics = this.getProtoRevAllRouteStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
    this.getProtoRevDeveloperAccount = this.getProtoRevDeveloperAccount.bind(this);
    this.getProtoRevInfoByPoolType = this.getProtoRevInfoByPoolType.bind(this);
    this.getProtoRevMaxPoolPointsPerTx = this.getProtoRevMaxPoolPointsPerTx.bind(this);
    this.getProtoRevMaxPoolPointsPerBlock = this.getProtoRevMaxPoolPointsPerBlock.bind(this);
    this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
    this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
    this.getProtoRevPool = this.getProtoRevPool.bind(this);
    this.getAllProtocolRevenue = this.getAllProtocolRevenue.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/protorev/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   has executed */
  async getProtoRevNumberOfTrades(_params: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponseSDKType> {
    const endpoint = `osmosis/protorev/number_of_trades`;
    return await this.req.get<QueryGetProtoRevNumberOfTradesResponseSDKType>(endpoint);
  }
  /* GetProtoRevProfitsByDenom queries the profits of the module by denom */
  async getProtoRevProfitsByDenom(params: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/protorev/profits_by_denom`;
    return await this.req.get<QueryGetProtoRevProfitsByDenomResponseSDKType>(endpoint, options);
  }
  /* GetProtoRevAllProfits queries all of the profits from the module */
  async getProtoRevAllProfits(_params: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponseSDKType> {
    const endpoint = `osmosis/protorev/all_profits`;
    return await this.req.get<QueryGetProtoRevAllProfitsResponseSDKType>(endpoint);
  }
  /* GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   that have been executed for a given route */
  async getProtoRevStatisticsByRoute(params: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.route !== "undefined") {
      options.params.route = params.route;
    }
    const endpoint = `osmosis/protorev/statistics_by_route`;
    return await this.req.get<QueryGetProtoRevStatisticsByRouteResponseSDKType>(endpoint, options);
  }
  /* GetProtoRevAllRouteStatistics queries all of routes that the module has
   arbitraged against and the number of trades and profits that have been
   accumulated for each route */
  async getProtoRevAllRouteStatistics(_params: QueryGetProtoRevAllRouteStatisticsRequest = {}): Promise<QueryGetProtoRevAllRouteStatisticsResponseSDKType> {
    const endpoint = `osmosis/protorev/all_route_statistics`;
    return await this.req.get<QueryGetProtoRevAllRouteStatisticsResponseSDKType>(endpoint);
  }
  /* GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   is currently arbitraging */
  async getProtoRevTokenPairArbRoutes(_params: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponseSDKType> {
    const endpoint = `osmosis/protorev/token_pair_arb_routes`;
    return await this.req.get<QueryGetProtoRevTokenPairArbRoutesResponseSDKType>(endpoint);
  }
  /* GetProtoRevAdminAccount queries the admin account of the module */
  async getProtoRevAdminAccount(_params: QueryGetProtoRevAdminAccountRequest = {}): Promise<QueryGetProtoRevAdminAccountResponseSDKType> {
    const endpoint = `osmosis/protorev/admin_account`;
    return await this.req.get<QueryGetProtoRevAdminAccountResponseSDKType>(endpoint);
  }
  /* GetProtoRevDeveloperAccount queries the developer account of the module */
  async getProtoRevDeveloperAccount(_params: QueryGetProtoRevDeveloperAccountRequest = {}): Promise<QueryGetProtoRevDeveloperAccountResponseSDKType> {
    const endpoint = `osmosis/protorev/developer_account`;
    return await this.req.get<QueryGetProtoRevDeveloperAccountResponseSDKType>(endpoint);
  }
  /* GetProtoRevInfoByPoolType queries pool type information that is currently
   being utilized by the module */
  async getProtoRevInfoByPoolType(_params: QueryGetProtoRevInfoByPoolTypeRequest = {}): Promise<QueryGetProtoRevInfoByPoolTypeResponseSDKType> {
    const endpoint = `osmosis/protorev/info_by_pool_type`;
    return await this.req.get<QueryGetProtoRevInfoByPoolTypeResponseSDKType>(endpoint);
  }
  /* GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   that can be consumed per transaction */
  async getProtoRevMaxPoolPointsPerTx(_params: QueryGetProtoRevMaxPoolPointsPerTxRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType> {
    const endpoint = `osmosis/protorev/max_pool_points_per_tx`;
    return await this.req.get<QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType>(endpoint);
  }
  /* GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   that can consumed per block */
  async getProtoRevMaxPoolPointsPerBlock(_params: QueryGetProtoRevMaxPoolPointsPerBlockRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType> {
    const endpoint = `osmosis/protorev/max_pool_points_per_block`;
    return await this.req.get<QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType>(endpoint);
  }
  /* GetProtoRevBaseDenoms queries the base denoms that the module is currently
   utilizing for arbitrage */
  async getProtoRevBaseDenoms(_params: QueryGetProtoRevBaseDenomsRequest = {}): Promise<QueryGetProtoRevBaseDenomsResponseSDKType> {
    const endpoint = `osmosis/protorev/base_denoms`;
    return await this.req.get<QueryGetProtoRevBaseDenomsResponseSDKType>(endpoint);
  }
  /* GetProtoRevEnabled queries whether the module is enabled or not */
  async getProtoRevEnabled(_params: QueryGetProtoRevEnabledRequest = {}): Promise<QueryGetProtoRevEnabledResponseSDKType> {
    const endpoint = `osmosis/protorev/enabled`;
    return await this.req.get<QueryGetProtoRevEnabledResponseSDKType>(endpoint);
  }
  /* GetProtoRevPool queries the pool id used via the highest liquidity method
   for arbitrage route building given a pair of denominations */
  async getProtoRevPool(params: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseDenom !== "undefined") {
      options.params.base_denom = params.baseDenom;
    }
    if (typeof params?.otherDenom !== "undefined") {
      options.params.other_denom = params.otherDenom;
    }
    const endpoint = `osmosis/protorev/pool`;
    return await this.req.get<QueryGetProtoRevPoolResponseSDKType>(endpoint, options);
  }
  /* GetAllProtocolRevenue queries all of the protocol revenue that has been
   accumulated by any module */
  async getAllProtocolRevenue(_params: QueryGetAllProtocolRevenueRequest = {}): Promise<QueryGetAllProtocolRevenueResponseSDKType> {
    const endpoint = `osmosis/protorev/all_protocol_revenue`;
    return await this.req.get<QueryGetAllProtocolRevenueResponseSDKType>(endpoint);
  }
}