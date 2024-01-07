import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsAmino, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType, AllProtocolRevenue, AllProtocolRevenueAmino, AllProtocolRevenueSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/protorev/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/protorev/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {}
export interface QueryGetProtoRevNumberOfTradesRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestAmino {}
export interface QueryGetProtoRevNumberOfTradesRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request";
  value: QueryGetProtoRevNumberOfTradesRequestAmino;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseAmino {
  /** number_of_trades is the number of trades the module has executed */
  number_of_trades?: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response";
  value: QueryGetProtoRevNumberOfTradesResponseAmino;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
  number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
  /** denom is the denom to query profits by */
  denom: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestAmino {
  /** denom is the denom to query profits by */
  denom?: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request";
  value: QueryGetProtoRevProfitsByDenomRequestAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
  /** profit is the profits of the module by the selected denom */
  profit?: Coin;
}
export interface QueryGetProtoRevProfitsByDenomResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseAmino {
  /** profit is the profits of the module by the selected denom */
  profit?: CoinAmino;
}
export interface QueryGetProtoRevProfitsByDenomResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response";
  value: QueryGetProtoRevProfitsByDenomResponseAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
  profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {}
export interface QueryGetProtoRevAllProfitsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestAmino {}
export interface QueryGetProtoRevAllProfitsRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-all-profits-request";
  value: QueryGetProtoRevAllProfitsRequestAmino;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
  /** profits is a list of all of the profits from the module */
  profits: Coin[];
}
export interface QueryGetProtoRevAllProfitsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseAmino {
  /** profits is a list of all of the profits from the module */
  profits?: CoinAmino[];
}
export interface QueryGetProtoRevAllProfitsResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-all-profits-response";
  value: QueryGetProtoRevAllProfitsResponseAmino;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
  profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
  /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
  route: bigint[];
}
export interface QueryGetProtoRevStatisticsByRouteRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestAmino {
  /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
  route?: string[];
}
export interface QueryGetProtoRevStatisticsByRouteRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-request";
  value: QueryGetProtoRevStatisticsByRouteRequestAmino;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestSDKType {
  route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics: RouteStatistics;
}
export interface QueryGetProtoRevStatisticsByRouteResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseAmino {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics?: RouteStatisticsAmino;
}
export interface QueryGetProtoRevStatisticsByRouteResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-response";
  value: QueryGetProtoRevStatisticsByRouteResponseAmino;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseSDKType {
  statistics: RouteStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {}
export interface QueryGetProtoRevAllRouteStatisticsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestAmino {}
export interface QueryGetProtoRevAllRouteStatisticsRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-request";
  value: QueryGetProtoRevAllRouteStatisticsRequestAmino;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestSDKType {}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
  /**
   * statistics contains the number of trades/profits the module has executed on
   * all routes it has successfully executed a trade on
   */
  statistics: RouteStatistics[];
}
export interface QueryGetProtoRevAllRouteStatisticsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseAmino {
  /**
   * statistics contains the number of trades/profits the module has executed on
   * all routes it has successfully executed a trade on
   */
  statistics?: RouteStatisticsAmino[];
}
export interface QueryGetProtoRevAllRouteStatisticsResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-response";
  value: QueryGetProtoRevAllRouteStatisticsResponseAmino;
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseSDKType {
  statistics: RouteStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {}
export interface QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestAmino {}
export interface QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request";
  value: QueryGetProtoRevTokenPairArbRoutesRequestAmino;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutes[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseAmino {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes?: TokenPairArbRoutesAmino[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response";
  value: QueryGetProtoRevTokenPairArbRoutesResponseAmino;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
  routes: TokenPairArbRoutesSDKType[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {}
export interface QueryGetProtoRevAdminAccountRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestAmino {}
export interface QueryGetProtoRevAdminAccountRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-admin-account-request";
  value: QueryGetProtoRevAdminAccountRequestAmino;
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestSDKType {}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
  /** admin_account is the admin account of the module */
  adminAccount: string;
}
export interface QueryGetProtoRevAdminAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseAmino {
  /** admin_account is the admin account of the module */
  admin_account?: string;
}
export interface QueryGetProtoRevAdminAccountResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-admin-account-response";
  value: QueryGetProtoRevAdminAccountResponseAmino;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseSDKType {
  admin_account: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {}
export interface QueryGetProtoRevDeveloperAccountRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestAmino {}
export interface QueryGetProtoRevDeveloperAccountRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-developer-account-request";
  value: QueryGetProtoRevDeveloperAccountRequestAmino;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestSDKType {}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
  /** developer_account is the developer account of the module */
  developerAccount: string;
}
export interface QueryGetProtoRevDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseAmino {
  /** developer_account is the developer account of the module */
  developer_account?: string;
}
export interface QueryGetProtoRevDeveloperAccountResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-developer-account-response";
  value: QueryGetProtoRevDeveloperAccountResponseAmino;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseSDKType {
  developer_account: string;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequest {}
export interface QueryGetProtoRevInfoByPoolTypeRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequestAmino {}
export interface QueryGetProtoRevInfoByPoolTypeRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-request";
  value: QueryGetProtoRevInfoByPoolTypeRequestAmino;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequestSDKType {}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponse {
  /**
   * InfoByPoolType contains all information pertaining to how different
   * pool types are handled by the module.
   */
  infoByPoolType: InfoByPoolType;
}
export interface QueryGetProtoRevInfoByPoolTypeResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponseAmino {
  /**
   * InfoByPoolType contains all information pertaining to how different
   * pool types are handled by the module.
   */
  info_by_pool_type?: InfoByPoolTypeAmino;
}
export interface QueryGetProtoRevInfoByPoolTypeResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-response";
  value: QueryGetProtoRevInfoByPoolTypeResponseAmino;
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponseSDKType {
  info_by_pool_type: InfoByPoolTypeSDKType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {}
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino {}
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request";
  value: QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block
   */
  maxPoolPointsPerBlock: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino {
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block
   */
  max_pool_points_per_block?: string;
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response";
  value: QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
  max_pool_points_per_block: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {}
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestAmino {}
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request";
  value: QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction
   */
  maxPoolPointsPerTx: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseAmino {
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction
   */
  max_pool_points_per_tx?: string;
}
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response";
  value: QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
  max_pool_points_per_tx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {}
export interface QueryGetProtoRevBaseDenomsRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestAmino {}
export interface QueryGetProtoRevBaseDenomsRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-base-denoms-request";
  value: QueryGetProtoRevBaseDenomsRequestAmino;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestSDKType {}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
  /** base_denoms is a list of all of the base denoms and step sizes */
  baseDenoms: BaseDenom[];
}
export interface QueryGetProtoRevBaseDenomsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseAmino {
  /** base_denoms is a list of all of the base denoms and step sizes */
  base_denoms?: BaseDenomAmino[];
}
export interface QueryGetProtoRevBaseDenomsResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-base-denoms-response";
  value: QueryGetProtoRevBaseDenomsResponseAmino;
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseSDKType {
  base_denoms: BaseDenomSDKType[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {}
export interface QueryGetProtoRevEnabledRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestAmino {}
export interface QueryGetProtoRevEnabledRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-enabled-request";
  value: QueryGetProtoRevEnabledRequestAmino;
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestSDKType {}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
  /** enabled is whether the module is enabled */
  enabled: boolean;
}
export interface QueryGetProtoRevEnabledResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseAmino {
  /** enabled is whether the module is enabled */
  enabled?: boolean;
}
export interface QueryGetProtoRevEnabledResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-enabled-response";
  value: QueryGetProtoRevEnabledResponseAmino;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseSDKType {
  enabled: boolean;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequest {
  /**
   * base_denom is the base denom set in protorev for the denom pair to pool
   * mapping
   */
  baseDenom: string;
  /** other_denom is the other denom for the denom pair to pool mapping */
  otherDenom: string;
}
export interface QueryGetProtoRevPoolRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequestAmino {
  /**
   * base_denom is the base denom set in protorev for the denom pair to pool
   * mapping
   */
  base_denom?: string;
  /** other_denom is the other denom for the denom pair to pool mapping */
  other_denom?: string;
}
export interface QueryGetProtoRevPoolRequestAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-pool-request";
  value: QueryGetProtoRevPoolRequestAmino;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequestSDKType {
  base_denom: string;
  other_denom: string;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponse {
  /** pool_id is the pool_id stored for the denom pair */
  poolId: bigint;
}
export interface QueryGetProtoRevPoolResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse";
  value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponseAmino {
  /** pool_id is the pool_id stored for the denom pair */
  pool_id?: string;
}
export interface QueryGetProtoRevPoolResponseAminoMsg {
  type: "osmosis/protorev/query-get-proto-rev-pool-response";
  value: QueryGetProtoRevPoolResponseAmino;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponseSDKType {
  pool_id: bigint;
}
export interface QueryGetAllProtocolRevenueRequest {}
export interface QueryGetAllProtocolRevenueRequestProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest";
  value: Uint8Array;
}
export interface QueryGetAllProtocolRevenueRequestAmino {}
export interface QueryGetAllProtocolRevenueRequestAminoMsg {
  type: "osmosis/protorev/query-get-all-protocol-revenue-request";
  value: QueryGetAllProtocolRevenueRequestAmino;
}
export interface QueryGetAllProtocolRevenueRequestSDKType {}
export interface QueryGetAllProtocolRevenueResponse {
  allProtocolRevenue: AllProtocolRevenue;
}
export interface QueryGetAllProtocolRevenueResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse";
  value: Uint8Array;
}
export interface QueryGetAllProtocolRevenueResponseAmino {
  all_protocol_revenue?: AllProtocolRevenueAmino;
}
export interface QueryGetAllProtocolRevenueResponseAminoMsg {
  type: "osmosis/protorev/query-get-all-protocol-revenue-response";
  value: QueryGetAllProtocolRevenueResponseAmino;
}
export interface QueryGetAllProtocolRevenueResponseSDKType {
  all_protocol_revenue: AllProtocolRevenueSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/protorev/query-params-request",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/protorev/query-params-response",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesRequest(): QueryGetProtoRevNumberOfTradesRequest {
  return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-number-of-trades-request",
  is(o: any): o is QueryGetProtoRevNumberOfTradesRequest {
    return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevNumberOfTradesRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevNumberOfTradesRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevNumberOfTradesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevNumberOfTradesRequestAmino): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevNumberOfTradesRequestAminoMsg): QueryGetProtoRevNumberOfTradesRequest {
    return QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request",
      value: QueryGetProtoRevNumberOfTradesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevNumberOfTradesRequestProtoMsg): QueryGetProtoRevNumberOfTradesRequest {
    return QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevNumberOfTradesRequest): Uint8Array {
    return QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
      value: QueryGetProtoRevNumberOfTradesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevNumberOfTradesRequest.typeUrl, QueryGetProtoRevNumberOfTradesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevNumberOfTradesRequest.aminoType, QueryGetProtoRevNumberOfTradesRequest.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesResponse(): QueryGetProtoRevNumberOfTradesResponse {
  return {
    numberOfTrades: ""
  };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-number-of-trades-response",
  is(o: any): o is QueryGetProtoRevNumberOfTradesResponse {
    return o && (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl || typeof o.numberOfTrades === "string");
  },
  isSDK(o: any): o is QueryGetProtoRevNumberOfTradesResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl || typeof o.number_of_trades === "string");
  },
  isAmino(o: any): o is QueryGetProtoRevNumberOfTradesResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl || typeof o.number_of_trades === "string");
  },
  encode(message: QueryGetProtoRevNumberOfTradesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : ""
    };
  },
  toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown {
    const obj: any = {};
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = object.numberOfTrades ?? "";
    return message;
  },
  fromAmino(object: QueryGetProtoRevNumberOfTradesResponseAmino): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
      message.numberOfTrades = object.number_of_trades;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAmino {
    const obj: any = {};
    obj.number_of_trades = message.numberOfTrades;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevNumberOfTradesResponseAminoMsg): QueryGetProtoRevNumberOfTradesResponse {
    return QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response",
      value: QueryGetProtoRevNumberOfTradesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevNumberOfTradesResponseProtoMsg): QueryGetProtoRevNumberOfTradesResponse {
    return QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevNumberOfTradesResponse): Uint8Array {
    return QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
      value: QueryGetProtoRevNumberOfTradesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevNumberOfTradesResponse.typeUrl, QueryGetProtoRevNumberOfTradesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevNumberOfTradesResponse.aminoType, QueryGetProtoRevNumberOfTradesResponse.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomRequest(): QueryGetProtoRevProfitsByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request",
  is(o: any): o is QueryGetProtoRevProfitsByDenomRequest {
    return o && (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetProtoRevProfitsByDenomRequestSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetProtoRevProfitsByDenomRequestAmino {
    return o && (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryGetProtoRevProfitsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetProtoRevProfitsByDenomRequestAmino): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevProfitsByDenomRequestAminoMsg): QueryGetProtoRevProfitsByDenomRequest {
    return QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request",
      value: QueryGetProtoRevProfitsByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevProfitsByDenomRequestProtoMsg): QueryGetProtoRevProfitsByDenomRequest {
    return QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevProfitsByDenomRequest): Uint8Array {
    return QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
      value: QueryGetProtoRevProfitsByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevProfitsByDenomRequest.typeUrl, QueryGetProtoRevProfitsByDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevProfitsByDenomRequest.aminoType, QueryGetProtoRevProfitsByDenomRequest.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomResponse(): QueryGetProtoRevProfitsByDenomResponse {
  return {
    profit: undefined
  };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response",
  is(o: any): o is QueryGetProtoRevProfitsByDenomResponse {
    return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevProfitsByDenomResponseSDKType {
    return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevProfitsByDenomResponseAmino {
    return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
  },
  encode(message: QueryGetProtoRevProfitsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.profit !== undefined) {
      Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: isSet(object.profit) ? Coin.fromJSON(object.profit) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toJSON(message.profit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    message.profit = object.profit !== undefined && object.profit !== null ? Coin.fromPartial(object.profit) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProtoRevProfitsByDenomResponseAmino): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    if (object.profit !== undefined && object.profit !== null) {
      message.profit = Coin.fromAmino(object.profit);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAmino {
    const obj: any = {};
    obj.profit = message.profit ? Coin.toAmino(message.profit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevProfitsByDenomResponseAminoMsg): QueryGetProtoRevProfitsByDenomResponse {
    return QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response",
      value: QueryGetProtoRevProfitsByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevProfitsByDenomResponseProtoMsg): QueryGetProtoRevProfitsByDenomResponse {
    return QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevProfitsByDenomResponse): Uint8Array {
    return QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
      value: QueryGetProtoRevProfitsByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevProfitsByDenomResponse.typeUrl, QueryGetProtoRevProfitsByDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevProfitsByDenomResponse.aminoType, QueryGetProtoRevProfitsByDenomResponse.typeUrl);
function createBaseQueryGetProtoRevAllProfitsRequest(): QueryGetProtoRevAllProfitsRequest {
  return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-all-profits-request",
  is(o: any): o is QueryGetProtoRevAllProfitsRequest {
    return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevAllProfitsRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevAllProfitsRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevAllProfitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllProfitsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevAllProfitsRequestAmino): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllProfitsRequestAminoMsg): QueryGetProtoRevAllProfitsRequest {
    return QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-profits-request",
      value: QueryGetProtoRevAllProfitsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllProfitsRequestProtoMsg): QueryGetProtoRevAllProfitsRequest {
    return QueryGetProtoRevAllProfitsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllProfitsRequest): Uint8Array {
    return QueryGetProtoRevAllProfitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
      value: QueryGetProtoRevAllProfitsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllProfitsRequest.typeUrl, QueryGetProtoRevAllProfitsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllProfitsRequest.aminoType, QueryGetProtoRevAllProfitsRequest.typeUrl);
function createBaseQueryGetProtoRevAllProfitsResponse(): QueryGetProtoRevAllProfitsResponse {
  return {
    profits: []
  };
}
export const QueryGetProtoRevAllProfitsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-all-profits-response",
  is(o: any): o is QueryGetProtoRevAllProfitsResponse {
    return o && (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.is(o.profits[0])));
  },
  isSDK(o: any): o is QueryGetProtoRevAllProfitsResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.isSDK(o.profits[0])));
  },
  isAmino(o: any): o is QueryGetProtoRevAllProfitsResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.isAmino(o.profits[0])));
  },
  encode(message: QueryGetProtoRevAllProfitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetProtoRevAllProfitsResponseAmino): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAmino {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllProfitsResponseAminoMsg): QueryGetProtoRevAllProfitsResponse {
    return QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-profits-response",
      value: QueryGetProtoRevAllProfitsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllProfitsResponseProtoMsg): QueryGetProtoRevAllProfitsResponse {
    return QueryGetProtoRevAllProfitsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllProfitsResponse): Uint8Array {
    return QueryGetProtoRevAllProfitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
      value: QueryGetProtoRevAllProfitsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllProfitsResponse.typeUrl, QueryGetProtoRevAllProfitsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllProfitsResponse.aminoType, QueryGetProtoRevAllProfitsResponse.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteRequest(): QueryGetProtoRevStatisticsByRouteRequest {
  return {
    route: []
  };
}
export const QueryGetProtoRevStatisticsByRouteRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-statistics-by-route-request",
  is(o: any): o is QueryGetProtoRevStatisticsByRouteRequest {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl || Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  isSDK(o: any): o is QueryGetProtoRevStatisticsByRouteRequestSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl || Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  isAmino(o: any): o is QueryGetProtoRevStatisticsByRouteRequestAmino {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl || Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest {
    return {
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteRequest): unknown {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteRequest>): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryGetProtoRevStatisticsByRouteRequestAmino): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAmino {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map(e => e.toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteRequestAminoMsg): QueryGetProtoRevStatisticsByRouteRequest {
    return QueryGetProtoRevStatisticsByRouteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-request",
      value: QueryGetProtoRevStatisticsByRouteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequestProtoMsg): QueryGetProtoRevStatisticsByRouteRequest {
    return QueryGetProtoRevStatisticsByRouteRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevStatisticsByRouteRequest): Uint8Array {
    return QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
      value: QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevStatisticsByRouteRequest.typeUrl, QueryGetProtoRevStatisticsByRouteRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevStatisticsByRouteRequest.aminoType, QueryGetProtoRevStatisticsByRouteRequest.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteResponse(): QueryGetProtoRevStatisticsByRouteResponse {
  return {
    statistics: RouteStatistics.fromPartial({})
  };
}
export const QueryGetProtoRevStatisticsByRouteResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-statistics-by-route-response",
  is(o: any): o is QueryGetProtoRevStatisticsByRouteResponse {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl || RouteStatistics.is(o.statistics));
  },
  isSDK(o: any): o is QueryGetProtoRevStatisticsByRouteResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl || RouteStatistics.isSDK(o.statistics));
  },
  isAmino(o: any): o is QueryGetProtoRevStatisticsByRouteResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl || RouteStatistics.isAmino(o.statistics));
  },
  encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statistics !== undefined) {
      RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = RouteStatistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse {
    return {
      statistics: isSet(object.statistics) ? RouteStatistics.fromJSON(object.statistics) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteResponse): unknown {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? RouteStatistics.toJSON(message.statistics) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteResponse>): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    message.statistics = object.statistics !== undefined && object.statistics !== null ? RouteStatistics.fromPartial(object.statistics) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProtoRevStatisticsByRouteResponseAmino): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    if (object.statistics !== undefined && object.statistics !== null) {
      message.statistics = RouteStatistics.fromAmino(object.statistics);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAmino {
    const obj: any = {};
    obj.statistics = message.statistics ? RouteStatistics.toAmino(message.statistics) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteResponseAminoMsg): QueryGetProtoRevStatisticsByRouteResponse {
    return QueryGetProtoRevStatisticsByRouteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-response",
      value: QueryGetProtoRevStatisticsByRouteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponseProtoMsg): QueryGetProtoRevStatisticsByRouteResponse {
    return QueryGetProtoRevStatisticsByRouteResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevStatisticsByRouteResponse): Uint8Array {
    return QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
      value: QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevStatisticsByRouteResponse.typeUrl, QueryGetProtoRevStatisticsByRouteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevStatisticsByRouteResponse.aminoType, QueryGetProtoRevStatisticsByRouteResponse.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsRequest(): QueryGetProtoRevAllRouteStatisticsRequest {
  return {};
}
export const QueryGetProtoRevAllRouteStatisticsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-all-route-statistics-request",
  is(o: any): o is QueryGetProtoRevAllRouteStatisticsRequest {
    return o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevAllRouteStatisticsRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevAllRouteStatisticsRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAllRouteStatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevAllRouteStatisticsRequest>): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevAllRouteStatisticsRequestAmino): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): QueryGetProtoRevAllRouteStatisticsRequest {
    return QueryGetProtoRevAllRouteStatisticsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-request",
      value: QueryGetProtoRevAllRouteStatisticsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): QueryGetProtoRevAllRouteStatisticsRequest {
    return QueryGetProtoRevAllRouteStatisticsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array {
    return QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
      value: QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllRouteStatisticsRequest.typeUrl, QueryGetProtoRevAllRouteStatisticsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllRouteStatisticsRequest.aminoType, QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsResponse(): QueryGetProtoRevAllRouteStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryGetProtoRevAllRouteStatisticsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-all-route-statistics-response",
  is(o: any): o is QueryGetProtoRevAllRouteStatisticsResponse {
    return o && (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl || Array.isArray(o.statistics) && (!o.statistics.length || RouteStatistics.is(o.statistics[0])));
  },
  isSDK(o: any): o is QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl || Array.isArray(o.statistics) && (!o.statistics.length || RouteStatistics.isSDK(o.statistics[0])));
  },
  isAmino(o: any): o is QueryGetProtoRevAllRouteStatisticsResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl || Array.isArray(o.statistics) && (!o.statistics.length || RouteStatistics.isAmino(o.statistics[0])));
  },
  encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.statistics) {
      RouteStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(RouteStatistics.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => RouteStatistics.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevAllRouteStatisticsResponse): unknown {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toJSON(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevAllRouteStatisticsResponse>): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map(e => RouteStatistics.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetProtoRevAllRouteStatisticsResponseAmino): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map(e => RouteStatistics.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAmino {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? RouteStatistics.toAmino(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): QueryGetProtoRevAllRouteStatisticsResponse {
    return QueryGetProtoRevAllRouteStatisticsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-response",
      value: QueryGetProtoRevAllRouteStatisticsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): QueryGetProtoRevAllRouteStatisticsResponse {
    return QueryGetProtoRevAllRouteStatisticsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array {
    return QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
      value: QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllRouteStatisticsResponse.typeUrl, QueryGetProtoRevAllRouteStatisticsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllRouteStatisticsResponse.aminoType, QueryGetProtoRevAllRouteStatisticsResponse.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest(): QueryGetProtoRevTokenPairArbRoutesRequest {
  return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request",
  is(o: any): o is QueryGetProtoRevTokenPairArbRoutesRequest {
    return o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevTokenPairArbRoutesRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevTokenPairArbRoutesRequestAmino): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): QueryGetProtoRevTokenPairArbRoutesRequest {
    return QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request",
      value: QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): QueryGetProtoRevTokenPairArbRoutesRequest {
    return QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array {
    return QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
      value: QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl, QueryGetProtoRevTokenPairArbRoutesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevTokenPairArbRoutesRequest.aminoType, QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse(): QueryGetProtoRevTokenPairArbRoutesResponse {
  return {
    routes: []
  };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response",
  is(o: any): o is QueryGetProtoRevTokenPairArbRoutesResponse {
    return o && (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl || Array.isArray(o.routes) && (!o.routes.length || TokenPairArbRoutes.is(o.routes[0])));
  },
  isSDK(o: any): o is QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl || Array.isArray(o.routes) && (!o.routes.length || TokenPairArbRoutes.isSDK(o.routes[0])));
  },
  isAmino(o: any): o is QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl || Array.isArray(o.routes) && (!o.routes.length || TokenPairArbRoutes.isAmino(o.routes[0])));
  },
  encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetProtoRevTokenPairArbRoutesResponseAmino): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): QueryGetProtoRevTokenPairArbRoutesResponse {
    return QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response",
      value: QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): QueryGetProtoRevTokenPairArbRoutesResponse {
    return QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array {
    return QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
      value: QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl, QueryGetProtoRevTokenPairArbRoutesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevTokenPairArbRoutesResponse.aminoType, QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl);
function createBaseQueryGetProtoRevAdminAccountRequest(): QueryGetProtoRevAdminAccountRequest {
  return {};
}
export const QueryGetProtoRevAdminAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-admin-account-request",
  is(o: any): o is QueryGetProtoRevAdminAccountRequest {
    return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevAdminAccountRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevAdminAccountRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevAdminAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAdminAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevAdminAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevAdminAccountRequest>): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevAdminAccountRequestAmino): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAdminAccountRequestAminoMsg): QueryGetProtoRevAdminAccountRequest {
    return QueryGetProtoRevAdminAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-admin-account-request",
      value: QueryGetProtoRevAdminAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAdminAccountRequestProtoMsg): QueryGetProtoRevAdminAccountRequest {
    return QueryGetProtoRevAdminAccountRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAdminAccountRequest): Uint8Array {
    return QueryGetProtoRevAdminAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
      value: QueryGetProtoRevAdminAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAdminAccountRequest.typeUrl, QueryGetProtoRevAdminAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAdminAccountRequest.aminoType, QueryGetProtoRevAdminAccountRequest.typeUrl);
function createBaseQueryGetProtoRevAdminAccountResponse(): QueryGetProtoRevAdminAccountResponse {
  return {
    adminAccount: ""
  };
}
export const QueryGetProtoRevAdminAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-admin-account-response",
  is(o: any): o is QueryGetProtoRevAdminAccountResponse {
    return o && (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl || typeof o.adminAccount === "string");
  },
  isSDK(o: any): o is QueryGetProtoRevAdminAccountResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl || typeof o.admin_account === "string");
  },
  isAmino(o: any): o is QueryGetProtoRevAdminAccountResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl || typeof o.admin_account === "string");
  },
  encode(message: QueryGetProtoRevAdminAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAdminAccountResponse {
    return {
      adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevAdminAccountResponse): unknown {
    const obj: any = {};
    message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevAdminAccountResponse>): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    message.adminAccount = object.adminAccount ?? "";
    return message;
  },
  fromAmino(object: QueryGetProtoRevAdminAccountResponseAmino): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    if (object.admin_account !== undefined && object.admin_account !== null) {
      message.adminAccount = object.admin_account;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAmino {
    const obj: any = {};
    obj.admin_account = message.adminAccount;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevAdminAccountResponseAminoMsg): QueryGetProtoRevAdminAccountResponse {
    return QueryGetProtoRevAdminAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-admin-account-response",
      value: QueryGetProtoRevAdminAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevAdminAccountResponseProtoMsg): QueryGetProtoRevAdminAccountResponse {
    return QueryGetProtoRevAdminAccountResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevAdminAccountResponse): Uint8Array {
    return QueryGetProtoRevAdminAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
      value: QueryGetProtoRevAdminAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevAdminAccountResponse.typeUrl, QueryGetProtoRevAdminAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAdminAccountResponse.aminoType, QueryGetProtoRevAdminAccountResponse.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountRequest(): QueryGetProtoRevDeveloperAccountRequest {
  return {};
}
export const QueryGetProtoRevDeveloperAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-developer-account-request",
  is(o: any): o is QueryGetProtoRevDeveloperAccountRequest {
    return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevDeveloperAccountRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevDeveloperAccountRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevDeveloperAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevDeveloperAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevDeveloperAccountRequest>): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevDeveloperAccountRequestAmino): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevDeveloperAccountRequestAminoMsg): QueryGetProtoRevDeveloperAccountRequest {
    return QueryGetProtoRevDeveloperAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-developer-account-request",
      value: QueryGetProtoRevDeveloperAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevDeveloperAccountRequestProtoMsg): QueryGetProtoRevDeveloperAccountRequest {
    return QueryGetProtoRevDeveloperAccountRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevDeveloperAccountRequest): Uint8Array {
    return QueryGetProtoRevDeveloperAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
      value: QueryGetProtoRevDeveloperAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevDeveloperAccountRequest.typeUrl, QueryGetProtoRevDeveloperAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevDeveloperAccountRequest.aminoType, QueryGetProtoRevDeveloperAccountRequest.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountResponse(): QueryGetProtoRevDeveloperAccountResponse {
  return {
    developerAccount: ""
  };
}
export const QueryGetProtoRevDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-developer-account-response",
  is(o: any): o is QueryGetProtoRevDeveloperAccountResponse {
    return o && (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl || typeof o.developerAccount === "string");
  },
  isSDK(o: any): o is QueryGetProtoRevDeveloperAccountResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl || typeof o.developer_account === "string");
  },
  isAmino(o: any): o is QueryGetProtoRevDeveloperAccountResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl || typeof o.developer_account === "string");
  },
  encode(message: QueryGetProtoRevDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developerAccount !== "") {
      writer.uint32(10).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse {
    return {
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: QueryGetProtoRevDeveloperAccountResponse): unknown {
    const obj: any = {};
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevDeveloperAccountResponse>): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromAmino(object: QueryGetProtoRevDeveloperAccountResponseAmino): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    if (object.developer_account !== undefined && object.developer_account !== null) {
      message.developerAccount = object.developer_account;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAmino {
    const obj: any = {};
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevDeveloperAccountResponseAminoMsg): QueryGetProtoRevDeveloperAccountResponse {
    return QueryGetProtoRevDeveloperAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-developer-account-response",
      value: QueryGetProtoRevDeveloperAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevDeveloperAccountResponseProtoMsg): QueryGetProtoRevDeveloperAccountResponse {
    return QueryGetProtoRevDeveloperAccountResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevDeveloperAccountResponse): Uint8Array {
    return QueryGetProtoRevDeveloperAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
      value: QueryGetProtoRevDeveloperAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevDeveloperAccountResponse.typeUrl, QueryGetProtoRevDeveloperAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevDeveloperAccountResponse.aminoType, QueryGetProtoRevDeveloperAccountResponse.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeRequest(): QueryGetProtoRevInfoByPoolTypeRequest {
  return {};
}
export const QueryGetProtoRevInfoByPoolTypeRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-request",
  is(o: any): o is QueryGetProtoRevInfoByPoolTypeRequest {
    return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevInfoByPoolTypeRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevInfoByPoolTypeRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevInfoByPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevInfoByPoolTypeRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevInfoByPoolTypeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevInfoByPoolTypeRequest>): QueryGetProtoRevInfoByPoolTypeRequest {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevInfoByPoolTypeRequestAmino): QueryGetProtoRevInfoByPoolTypeRequest {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevInfoByPoolTypeRequestAminoMsg): QueryGetProtoRevInfoByPoolTypeRequest {
    return QueryGetProtoRevInfoByPoolTypeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-request",
      value: QueryGetProtoRevInfoByPoolTypeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevInfoByPoolTypeRequestProtoMsg): QueryGetProtoRevInfoByPoolTypeRequest {
    return QueryGetProtoRevInfoByPoolTypeRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevInfoByPoolTypeRequest): Uint8Array {
    return QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest",
      value: QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevInfoByPoolTypeRequest.typeUrl, QueryGetProtoRevInfoByPoolTypeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevInfoByPoolTypeRequest.aminoType, QueryGetProtoRevInfoByPoolTypeRequest.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeResponse(): QueryGetProtoRevInfoByPoolTypeResponse {
  return {
    infoByPoolType: InfoByPoolType.fromPartial({})
  };
}
export const QueryGetProtoRevInfoByPoolTypeResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-response",
  is(o: any): o is QueryGetProtoRevInfoByPoolTypeResponse {
    return o && (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl || InfoByPoolType.is(o.infoByPoolType));
  },
  isSDK(o: any): o is QueryGetProtoRevInfoByPoolTypeResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl || InfoByPoolType.isSDK(o.info_by_pool_type));
  },
  isAmino(o: any): o is QueryGetProtoRevInfoByPoolTypeResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl || InfoByPoolType.isAmino(o.info_by_pool_type));
  },
  encode(message: QueryGetProtoRevInfoByPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevInfoByPoolTypeResponse {
    return {
      infoByPoolType: isSet(object.infoByPoolType) ? InfoByPoolType.fromJSON(object.infoByPoolType) : undefined
    };
  },
  toJSON(message: QueryGetProtoRevInfoByPoolTypeResponse): unknown {
    const obj: any = {};
    message.infoByPoolType !== undefined && (obj.infoByPoolType = message.infoByPoolType ? InfoByPoolType.toJSON(message.infoByPoolType) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevInfoByPoolTypeResponse>): QueryGetProtoRevInfoByPoolTypeResponse {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    message.infoByPoolType = object.infoByPoolType !== undefined && object.infoByPoolType !== null ? InfoByPoolType.fromPartial(object.infoByPoolType) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProtoRevInfoByPoolTypeResponseAmino): QueryGetProtoRevInfoByPoolTypeResponse {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    if (object.info_by_pool_type !== undefined && object.info_by_pool_type !== null) {
      message.infoByPoolType = InfoByPoolType.fromAmino(object.info_by_pool_type);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseAmino {
    const obj: any = {};
    obj.info_by_pool_type = message.infoByPoolType ? InfoByPoolType.toAmino(message.infoByPoolType) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevInfoByPoolTypeResponseAminoMsg): QueryGetProtoRevInfoByPoolTypeResponse {
    return QueryGetProtoRevInfoByPoolTypeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-response",
      value: QueryGetProtoRevInfoByPoolTypeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevInfoByPoolTypeResponseProtoMsg): QueryGetProtoRevInfoByPoolTypeResponse {
    return QueryGetProtoRevInfoByPoolTypeResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevInfoByPoolTypeResponse): Uint8Array {
    return QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse",
      value: QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevInfoByPoolTypeResponse.typeUrl, QueryGetProtoRevInfoByPoolTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevInfoByPoolTypeResponse.aminoType, QueryGetProtoRevInfoByPoolTypeResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest(): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request",
  is(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request",
      value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
      value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl, QueryGetProtoRevMaxPoolPointsPerBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerBlockRequest.aminoType, QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse(): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  return {
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response",
  is(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl || typeof o.maxPoolPointsPerBlock === "bigint");
  },
  isSDK(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl || typeof o.max_pool_points_per_block === "bigint");
  },
  isAmino(o: any): o is QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl || typeof o.max_pool_points_per_block === "bigint");
  },
  encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return {
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino {
    const obj: any = {};
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock ? message.maxPoolPointsPerBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response",
      value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
      value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl, QueryGetProtoRevMaxPoolPointsPerBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerBlockResponse.aminoType, QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest(): QueryGetProtoRevMaxPoolPointsPerTxRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerTxRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request",
  is(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerTxRequest>): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request",
      value: QueryGetProtoRevMaxPoolPointsPerTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
      value: QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl, QueryGetProtoRevMaxPoolPointsPerTxRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerTxRequest.aminoType, QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse(): QueryGetProtoRevMaxPoolPointsPerTxResponse {
  return {
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const QueryGetProtoRevMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response",
  is(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl || typeof o.maxPoolPointsPerTx === "bigint");
  },
  isSDK(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl || typeof o.max_pool_points_per_tx === "bigint");
  },
  isAmino(o: any): o is QueryGetProtoRevMaxPoolPointsPerTxResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl || typeof o.max_pool_points_per_tx === "bigint");
  },
  encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return {
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerTxResponse>): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAmino {
    const obj: any = {};
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx ? message.maxPoolPointsPerTx.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response",
      value: QueryGetProtoRevMaxPoolPointsPerTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array {
    return QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
      value: QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl, QueryGetProtoRevMaxPoolPointsPerTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerTxResponse.aminoType, QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsRequest(): QueryGetProtoRevBaseDenomsRequest {
  return {};
}
export const QueryGetProtoRevBaseDenomsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-base-denoms-request",
  is(o: any): o is QueryGetProtoRevBaseDenomsRequest {
    return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevBaseDenomsRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevBaseDenomsRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevBaseDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevBaseDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevBaseDenomsRequest>): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevBaseDenomsRequestAmino): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevBaseDenomsRequestAminoMsg): QueryGetProtoRevBaseDenomsRequest {
    return QueryGetProtoRevBaseDenomsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-base-denoms-request",
      value: QueryGetProtoRevBaseDenomsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevBaseDenomsRequestProtoMsg): QueryGetProtoRevBaseDenomsRequest {
    return QueryGetProtoRevBaseDenomsRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevBaseDenomsRequest): Uint8Array {
    return QueryGetProtoRevBaseDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
      value: QueryGetProtoRevBaseDenomsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevBaseDenomsRequest.typeUrl, QueryGetProtoRevBaseDenomsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevBaseDenomsRequest.aminoType, QueryGetProtoRevBaseDenomsRequest.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsResponse(): QueryGetProtoRevBaseDenomsResponse {
  return {
    baseDenoms: []
  };
}
export const QueryGetProtoRevBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-base-denoms-response",
  is(o: any): o is QueryGetProtoRevBaseDenomsResponse {
    return o && (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl || Array.isArray(o.baseDenoms) && (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])));
  },
  isSDK(o: any): o is QueryGetProtoRevBaseDenomsResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl || Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])));
  },
  isAmino(o: any): o is QueryGetProtoRevBaseDenomsResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl || Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])));
  },
  encode(message: QueryGetProtoRevBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse {
    return {
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryGetProtoRevBaseDenomsResponse): unknown {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevBaseDenomsResponse>): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetProtoRevBaseDenomsResponseAmino): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAmino {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevBaseDenomsResponseAminoMsg): QueryGetProtoRevBaseDenomsResponse {
    return QueryGetProtoRevBaseDenomsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-base-denoms-response",
      value: QueryGetProtoRevBaseDenomsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevBaseDenomsResponseProtoMsg): QueryGetProtoRevBaseDenomsResponse {
    return QueryGetProtoRevBaseDenomsResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevBaseDenomsResponse): Uint8Array {
    return QueryGetProtoRevBaseDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
      value: QueryGetProtoRevBaseDenomsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevBaseDenomsResponse.typeUrl, QueryGetProtoRevBaseDenomsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevBaseDenomsResponse.aminoType, QueryGetProtoRevBaseDenomsResponse.typeUrl);
function createBaseQueryGetProtoRevEnabledRequest(): QueryGetProtoRevEnabledRequest {
  return {};
}
export const QueryGetProtoRevEnabledRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-enabled-request",
  is(o: any): o is QueryGetProtoRevEnabledRequest {
    return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetProtoRevEnabledRequestSDKType {
    return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetProtoRevEnabledRequestAmino {
    return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
  },
  encode(_: QueryGetProtoRevEnabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevEnabledRequest {
    return {};
  },
  toJSON(_: QueryGetProtoRevEnabledRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetProtoRevEnabledRequest>): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
  fromAmino(_: QueryGetProtoRevEnabledRequestAmino): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
  toAmino(_: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevEnabledRequestAminoMsg): QueryGetProtoRevEnabledRequest {
    return QueryGetProtoRevEnabledRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-enabled-request",
      value: QueryGetProtoRevEnabledRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevEnabledRequestProtoMsg): QueryGetProtoRevEnabledRequest {
    return QueryGetProtoRevEnabledRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevEnabledRequest): Uint8Array {
    return QueryGetProtoRevEnabledRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
      value: QueryGetProtoRevEnabledRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevEnabledRequest.typeUrl, QueryGetProtoRevEnabledRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevEnabledRequest.aminoType, QueryGetProtoRevEnabledRequest.typeUrl);
function createBaseQueryGetProtoRevEnabledResponse(): QueryGetProtoRevEnabledResponse {
  return {
    enabled: false
  };
}
export const QueryGetProtoRevEnabledResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-enabled-response",
  is(o: any): o is QueryGetProtoRevEnabledResponse {
    return o && (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl || typeof o.enabled === "boolean");
  },
  isSDK(o: any): o is QueryGetProtoRevEnabledResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl || typeof o.enabled === "boolean");
  },
  isAmino(o: any): o is QueryGetProtoRevEnabledResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl || typeof o.enabled === "boolean");
  },
  encode(message: QueryGetProtoRevEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevEnabledResponse {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: QueryGetProtoRevEnabledResponse): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevEnabledResponse>): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: QueryGetProtoRevEnabledResponseAmino): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevEnabledResponseAminoMsg): QueryGetProtoRevEnabledResponse {
    return QueryGetProtoRevEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-enabled-response",
      value: QueryGetProtoRevEnabledResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevEnabledResponseProtoMsg): QueryGetProtoRevEnabledResponse {
    return QueryGetProtoRevEnabledResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevEnabledResponse): Uint8Array {
    return QueryGetProtoRevEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
      value: QueryGetProtoRevEnabledResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevEnabledResponse.typeUrl, QueryGetProtoRevEnabledResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevEnabledResponse.aminoType, QueryGetProtoRevEnabledResponse.typeUrl);
function createBaseQueryGetProtoRevPoolRequest(): QueryGetProtoRevPoolRequest {
  return {
    baseDenom: "",
    otherDenom: ""
  };
}
export const QueryGetProtoRevPoolRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest",
  aminoType: "osmosis/protorev/query-get-proto-rev-pool-request",
  is(o: any): o is QueryGetProtoRevPoolRequest {
    return o && (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl || typeof o.baseDenom === "string" && typeof o.otherDenom === "string");
  },
  isSDK(o: any): o is QueryGetProtoRevPoolRequestSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl || typeof o.base_denom === "string" && typeof o.other_denom === "string");
  },
  isAmino(o: any): o is QueryGetProtoRevPoolRequestAmino {
    return o && (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl || typeof o.base_denom === "string" && typeof o.other_denom === "string");
  },
  encode(message: QueryGetProtoRevPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.otherDenom !== "") {
      writer.uint32(18).string(message.otherDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.otherDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevPoolRequest {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      otherDenom: isSet(object.otherDenom) ? String(object.otherDenom) : ""
    };
  },
  toJSON(message: QueryGetProtoRevPoolRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.otherDenom !== undefined && (obj.otherDenom = message.otherDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevPoolRequest>): QueryGetProtoRevPoolRequest {
    const message = createBaseQueryGetProtoRevPoolRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.otherDenom = object.otherDenom ?? "";
    return message;
  },
  fromAmino(object: QueryGetProtoRevPoolRequestAmino): QueryGetProtoRevPoolRequest {
    const message = createBaseQueryGetProtoRevPoolRequest();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.other_denom !== undefined && object.other_denom !== null) {
      message.otherDenom = object.other_denom;
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    obj.other_denom = message.otherDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevPoolRequestAminoMsg): QueryGetProtoRevPoolRequest {
    return QueryGetProtoRevPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-pool-request",
      value: QueryGetProtoRevPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevPoolRequestProtoMsg): QueryGetProtoRevPoolRequest {
    return QueryGetProtoRevPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetProtoRevPoolRequest): Uint8Array {
    return QueryGetProtoRevPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest",
      value: QueryGetProtoRevPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevPoolRequest.typeUrl, QueryGetProtoRevPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevPoolRequest.aminoType, QueryGetProtoRevPoolRequest.typeUrl);
function createBaseQueryGetProtoRevPoolResponse(): QueryGetProtoRevPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetProtoRevPoolResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse",
  aminoType: "osmosis/protorev/query-get-proto-rev-pool-response",
  is(o: any): o is QueryGetProtoRevPoolResponse {
    return o && (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryGetProtoRevPoolResponseSDKType {
    return o && (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryGetProtoRevPoolResponseAmino {
    return o && (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryGetProtoRevPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetProtoRevPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetProtoRevPoolResponse>): QueryGetProtoRevPoolResponse {
    const message = createBaseQueryGetProtoRevPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProtoRevPoolResponseAmino): QueryGetProtoRevPoolResponse {
    const message = createBaseQueryGetProtoRevPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProtoRevPoolResponseAminoMsg): QueryGetProtoRevPoolResponse {
    return QueryGetProtoRevPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-proto-rev-pool-response",
      value: QueryGetProtoRevPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetProtoRevPoolResponseProtoMsg): QueryGetProtoRevPoolResponse {
    return QueryGetProtoRevPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetProtoRevPoolResponse): Uint8Array {
    return QueryGetProtoRevPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse",
      value: QueryGetProtoRevPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetProtoRevPoolResponse.typeUrl, QueryGetProtoRevPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevPoolResponse.aminoType, QueryGetProtoRevPoolResponse.typeUrl);
function createBaseQueryGetAllProtocolRevenueRequest(): QueryGetAllProtocolRevenueRequest {
  return {};
}
export const QueryGetAllProtocolRevenueRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest",
  aminoType: "osmosis/protorev/query-get-all-protocol-revenue-request",
  is(o: any): o is QueryGetAllProtocolRevenueRequest {
    return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetAllProtocolRevenueRequestSDKType {
    return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetAllProtocolRevenueRequestAmino {
    return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
  },
  encode(_: QueryGetAllProtocolRevenueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllProtocolRevenueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetAllProtocolRevenueRequest {
    return {};
  },
  toJSON(_: QueryGetAllProtocolRevenueRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetAllProtocolRevenueRequest>): QueryGetAllProtocolRevenueRequest {
    const message = createBaseQueryGetAllProtocolRevenueRequest();
    return message;
  },
  fromAmino(_: QueryGetAllProtocolRevenueRequestAmino): QueryGetAllProtocolRevenueRequest {
    const message = createBaseQueryGetAllProtocolRevenueRequest();
    return message;
  },
  toAmino(_: QueryGetAllProtocolRevenueRequest): QueryGetAllProtocolRevenueRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetAllProtocolRevenueRequestAminoMsg): QueryGetAllProtocolRevenueRequest {
    return QueryGetAllProtocolRevenueRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetAllProtocolRevenueRequest): QueryGetAllProtocolRevenueRequestAminoMsg {
    return {
      type: "osmosis/protorev/query-get-all-protocol-revenue-request",
      value: QueryGetAllProtocolRevenueRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetAllProtocolRevenueRequestProtoMsg): QueryGetAllProtocolRevenueRequest {
    return QueryGetAllProtocolRevenueRequest.decode(message.value);
  },
  toProto(message: QueryGetAllProtocolRevenueRequest): Uint8Array {
    return QueryGetAllProtocolRevenueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllProtocolRevenueRequest): QueryGetAllProtocolRevenueRequestProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest",
      value: QueryGetAllProtocolRevenueRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAllProtocolRevenueRequest.typeUrl, QueryGetAllProtocolRevenueRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetAllProtocolRevenueRequest.aminoType, QueryGetAllProtocolRevenueRequest.typeUrl);
function createBaseQueryGetAllProtocolRevenueResponse(): QueryGetAllProtocolRevenueResponse {
  return {
    allProtocolRevenue: AllProtocolRevenue.fromPartial({})
  };
}
export const QueryGetAllProtocolRevenueResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse",
  aminoType: "osmosis/protorev/query-get-all-protocol-revenue-response",
  is(o: any): o is QueryGetAllProtocolRevenueResponse {
    return o && (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl || AllProtocolRevenue.is(o.allProtocolRevenue));
  },
  isSDK(o: any): o is QueryGetAllProtocolRevenueResponseSDKType {
    return o && (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl || AllProtocolRevenue.isSDK(o.all_protocol_revenue));
  },
  isAmino(o: any): o is QueryGetAllProtocolRevenueResponseAmino {
    return o && (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl || AllProtocolRevenue.isAmino(o.all_protocol_revenue));
  },
  encode(message: QueryGetAllProtocolRevenueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allProtocolRevenue !== undefined) {
      AllProtocolRevenue.encode(message.allProtocolRevenue, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllProtocolRevenueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allProtocolRevenue = AllProtocolRevenue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllProtocolRevenueResponse {
    return {
      allProtocolRevenue: isSet(object.allProtocolRevenue) ? AllProtocolRevenue.fromJSON(object.allProtocolRevenue) : undefined
    };
  },
  toJSON(message: QueryGetAllProtocolRevenueResponse): unknown {
    const obj: any = {};
    message.allProtocolRevenue !== undefined && (obj.allProtocolRevenue = message.allProtocolRevenue ? AllProtocolRevenue.toJSON(message.allProtocolRevenue) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAllProtocolRevenueResponse>): QueryGetAllProtocolRevenueResponse {
    const message = createBaseQueryGetAllProtocolRevenueResponse();
    message.allProtocolRevenue = object.allProtocolRevenue !== undefined && object.allProtocolRevenue !== null ? AllProtocolRevenue.fromPartial(object.allProtocolRevenue) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAllProtocolRevenueResponseAmino): QueryGetAllProtocolRevenueResponse {
    const message = createBaseQueryGetAllProtocolRevenueResponse();
    if (object.all_protocol_revenue !== undefined && object.all_protocol_revenue !== null) {
      message.allProtocolRevenue = AllProtocolRevenue.fromAmino(object.all_protocol_revenue);
    }
    return message;
  },
  toAmino(message: QueryGetAllProtocolRevenueResponse): QueryGetAllProtocolRevenueResponseAmino {
    const obj: any = {};
    obj.all_protocol_revenue = message.allProtocolRevenue ? AllProtocolRevenue.toAmino(message.allProtocolRevenue) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAllProtocolRevenueResponseAminoMsg): QueryGetAllProtocolRevenueResponse {
    return QueryGetAllProtocolRevenueResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetAllProtocolRevenueResponse): QueryGetAllProtocolRevenueResponseAminoMsg {
    return {
      type: "osmosis/protorev/query-get-all-protocol-revenue-response",
      value: QueryGetAllProtocolRevenueResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetAllProtocolRevenueResponseProtoMsg): QueryGetAllProtocolRevenueResponse {
    return QueryGetAllProtocolRevenueResponse.decode(message.value);
  },
  toProto(message: QueryGetAllProtocolRevenueResponse): Uint8Array {
    return QueryGetAllProtocolRevenueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllProtocolRevenueResponse): QueryGetAllProtocolRevenueResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse",
      value: QueryGetAllProtocolRevenueResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAllProtocolRevenueResponse.typeUrl, QueryGetAllProtocolRevenueResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetAllProtocolRevenueResponse.aminoType, QueryGetAllProtocolRevenueResponse.typeUrl);