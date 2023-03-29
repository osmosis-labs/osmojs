import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponseSDKType, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponseSDKType } from "./query";
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
    this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
    this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
  }
  /* Params queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/v13/protorev/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   has executed */


  async getProtoRevNumberOfTrades(_params: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponseSDKType> {
    const endpoint = `osmosis/v13/protorev/number_of_trades`;
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

    const endpoint = `osmosis/v13/protorev/profits_by_denom`;
    return await this.req.get<QueryGetProtoRevProfitsByDenomResponseSDKType>(endpoint, options);
  }
  /* GetProtoRevAllProfits queries all of the profits from the module */


  async getProtoRevAllProfits(_params: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponseSDKType> {
    const endpoint = `osmosis/v13/protorev/all_profits`;
    return await this.req.get<QueryGetProtoRevAllProfitsResponseSDKType>(endpoint);
  }
  /* GetProtoRevStatisticsByPool queries the number of arbitrages and profits
   that have been executed for a given pool */


  async getProtoRevStatisticsByPool(params: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    const endpoint = `osmosis/v13/protorev/statistics_by_pool`;
    return await this.req.get<QueryGetProtoRevStatisticsByPoolResponseSDKType>(endpoint, options);
  }
  /* GetProtoRevAllStatistics queries all of pools that the module has arbitrage
   against and the number of trades and profits that have been executed for
   each pool */


  async getProtoRevAllStatistics(_params: QueryGetProtoRevAllStatisticsRequest = {}): Promise<QueryGetProtoRevAllStatisticsResponseSDKType> {
    const endpoint = `osmosis/v13/protorev/all_statistics`;
    return await this.req.get<QueryGetProtoRevAllStatisticsResponseSDKType>(endpoint);
  }
  /* GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   is currently arbitraging */


  async getProtoRevTokenPairArbRoutes(_params: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponseSDKType> {
    const endpoint = `osmosis/v13/protorev/token_pair_arb_routes`;
    return await this.req.get<QueryGetProtoRevTokenPairArbRoutesResponseSDKType>(endpoint);
  }

}