import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
    this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
    const data = QueryGetProtoRevStatisticsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByPool", data);
    return promise.then(data => QueryGetProtoRevStatisticsByPoolResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevAllStatistics(request: QueryGetProtoRevAllStatisticsRequest = {}): Promise<QueryGetProtoRevAllStatisticsResponse> {
    const data = QueryGetProtoRevAllStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllStatistics", data);
    return promise.then(data => QueryGetProtoRevAllStatisticsResponse.decode(new _m0.Reader(data)));
  }

  getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse> {
      return queryService.getProtoRevNumberOfTrades(request);
    },

    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
      return queryService.getProtoRevProfitsByDenom(request);
    },

    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse> {
      return queryService.getProtoRevAllProfits(request);
    },

    getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
      return queryService.getProtoRevStatisticsByPool(request);
    },

    getProtoRevAllStatistics(request?: QueryGetProtoRevAllStatisticsRequest): Promise<QueryGetProtoRevAllStatisticsResponse> {
      return queryService.getProtoRevAllStatistics(request);
    },

    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
      return queryService.getProtoRevTokenPairArbRoutes(request);
    }

  };
};