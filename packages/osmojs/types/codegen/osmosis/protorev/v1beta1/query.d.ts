import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, PoolStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
    /** number_of_trades is the number of trades the module has executed */
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
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
    /** denom is the denom to query profits by */
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
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
    /** profit is the profits of the module by the selected denom */
    profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
    /** profits is a list of all of the profits from the module */
    profits: Coin[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
    /** profits is a list of all of the profits from the module */
    profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequest {
    /** pool_id is the pool id to query statistics by */
    poolId: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequestSDKType {
    /** pool_id is the pool id to query statistics by */
    pool_id: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: PoolStatistics;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponseSDKType {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: PoolStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequest {
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequestSDKType {
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades for all pools
     */
    statistics: PoolStatistics[];
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponseSDKType {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades for all pools
     */
    statistics: PoolStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
}
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
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutesSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest;
    fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse;
    fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse;
};
export declare const QueryGetProtoRevStatisticsByPoolRequest: {
    encode(message: QueryGetProtoRevStatisticsByPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolRequest;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolRequest>): QueryGetProtoRevStatisticsByPoolRequest;
};
export declare const QueryGetProtoRevStatisticsByPoolResponse: {
    encode(message: QueryGetProtoRevStatisticsByPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolResponse;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolResponse>): QueryGetProtoRevStatisticsByPoolResponse;
};
export declare const QueryGetProtoRevAllStatisticsRequest: {
    encode(_: QueryGetProtoRevAllStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllStatisticsRequest>): QueryGetProtoRevAllStatisticsRequest;
};
export declare const QueryGetProtoRevAllStatisticsResponse: {
    encode(message: QueryGetProtoRevAllStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllStatisticsResponse>): QueryGetProtoRevAllStatisticsResponse;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse;
};
