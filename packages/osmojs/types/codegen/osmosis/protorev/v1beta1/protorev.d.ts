import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arb_routes: RouteSDKType[];
    /** Token denomination of the first asset */
    token_in: string;
    /** Token denomination of the second asset */
    token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: Trade[];
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: TradeSDKType[];
}
/** Trade is a single trade in a route */
export interface Trade {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: Long;
    /** The denom of token A that is traded */
    tokenIn: string;
    /** The denom of token B that is traded */
    tokenOut: string;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: Long;
    /** The denom of token A that is traded */
    token_in: string;
    /** The denom of token B that is traded */
    token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatistics {
    /** profits is the total profit from all trades on this pool */
    profits: Coin[];
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
    /** pool_id is the id of the pool */
    poolId: Long;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsSDKType {
    /** profits is the total profit from all trades on this pool */
    profits: CoinSDKType[];
    /** number_of_trades is the number of trades the module has executed */
    number_of_trades: string;
    /** pool_id is the id of the pool */
    pool_id: Long;
}
/**
 * RouteWeights contains the weights of all of the different route types. Routes
 * are broken up into different types based on the pool that is sandwiched in
 * between the arbitrage route. This distinction is made and necessary because
 * the execution time ranges fairly between the different route types.
 */
export interface RouteWeights {
    /** The weight of a route that includes a stableswap pool */
    stableWeight: Long;
    /** The weight of a route that includes a balancer pool */
    balancerWeight: Long;
}
/**
 * RouteWeights contains the weights of all of the different route types. Routes
 * are broken up into different types based on the pool that is sandwiched in
 * between the arbitrage route. This distinction is made and necessary because
 * the execution time ranges fairly between the different route types.
 */
export interface RouteWeightsSDKType {
    /** The weight of a route that includes a stableswap pool */
    stable_weight: Long;
    /** The weight of a route that includes a balancer pool */
    balancer_weight: Long;
}
export declare const TokenPairArbRoutes: {
    encode(message: TokenPairArbRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
};
export declare const Route: {
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Route;
    fromPartial(object: Partial<Route>): Route;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromPartial(object: Partial<Trade>): Trade;
};
export declare const PoolStatistics: {
    encode(message: PoolStatistics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolStatistics;
    fromPartial(object: Partial<PoolStatistics>): PoolStatistics;
};
export declare const RouteWeights: {
    encode(message: RouteWeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteWeights;
    fromPartial(object: Partial<RouteWeights>): RouteWeights;
};
