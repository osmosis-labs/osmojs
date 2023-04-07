import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
export interface TokenPairArbRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
    value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arb_routes: RouteAmino[];
    /** Token denomination of the first asset */
    token_in: string;
    /** Token denomination of the second asset */
    token_out: string;
}
export interface TokenPairArbRoutesAminoMsg {
    type: "osmosis/protorev/token-pair-arb-routes";
    value: TokenPairArbRoutesAmino;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
    arb_routes: RouteSDKType[];
    token_in: string;
    token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: Trade[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    stepSize: string;
}
export interface RouteProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Route";
    value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: TradeAmino[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    step_size: string;
}
export interface RouteAminoMsg {
    type: "osmosis/protorev/route";
    value: RouteAmino;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    trades: TradeSDKType[];
    step_size: string;
}
/** Trade is a single trade in a route */
export interface Trade {
    /** The pool id of the pool that is traded on */
    pool: Long;
    /** The denom of the token that is traded */
    tokenIn: string;
    /** The denom of the token that is received */
    tokenOut: string;
}
export interface TradeProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Trade";
    value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
    /** The pool id of the pool that is traded on */
    pool: string;
    /** The denom of the token that is traded */
    token_in: string;
    /** The denom of the token that is received */
    token_out: string;
}
export interface TradeAminoMsg {
    type: "osmosis/protorev/trade";
    value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    pool: Long;
    token_in: string;
    token_out: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
    /** profits is the total profit from all trades on this route */
    profits: Coin[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     */
    numberOfTrades: string;
    /** route is the route that was used (pool ids along the arbitrage route) */
    route: Long[];
}
export interface RouteStatisticsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics";
    value: Uint8Array;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsAmino {
    /** profits is the total profit from all trades on this route */
    profits: CoinAmino[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     */
    number_of_trades: string;
    /** route is the route that was used (pool ids along the arbitrage route) */
    route: string[];
}
export interface RouteStatisticsAminoMsg {
    type: "osmosis/protorev/route-statistics";
    value: RouteStatisticsAmino;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsSDKType {
    profits: CoinSDKType[];
    number_of_trades: string;
    route: Long[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeights {
    /** The weight of a stableswap pool */
    stableWeight: Long;
    /** The weight of a balancer pool */
    balancerWeight: Long;
    /** The weight of a concentrated pool */
    concentratedWeight: Long;
}
export interface PoolWeightsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.PoolWeights";
    value: Uint8Array;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeightsAmino {
    /** The weight of a stableswap pool */
    stable_weight: string;
    /** The weight of a balancer pool */
    balancer_weight: string;
    /** The weight of a concentrated pool */
    concentrated_weight: string;
}
export interface PoolWeightsAminoMsg {
    type: "osmosis/protorev/pool-weights";
    value: PoolWeightsAmino;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeightsSDKType {
    stable_weight: Long;
    balancer_weight: Long;
    concentrated_weight: Long;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
    /** The denom i.e. name of the base denom (ex. uosmo) */
    denom: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     */
    stepSize: string;
}
export interface BaseDenomProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.BaseDenom";
    value: Uint8Array;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomAmino {
    /** The denom i.e. name of the base denom (ex. uosmo) */
    denom: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     */
    step_size: string;
}
export interface BaseDenomAminoMsg {
    type: "osmosis/protorev/base-denom";
    value: BaseDenomAmino;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomSDKType {
    denom: string;
    step_size: string;
}
export declare const TokenPairArbRoutes: {
    typeUrl: string;
    encode(message: TokenPairArbRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
    fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes;
    toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino;
    fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes;
    toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg;
    fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes;
    toProto(message: TokenPairArbRoutes): Uint8Array;
    toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg;
};
export declare const Route: {
    typeUrl: string;
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Route;
    fromPartial(object: Partial<Route>): Route;
    fromAmino(object: RouteAmino): Route;
    toAmino(message: Route): RouteAmino;
    fromAminoMsg(object: RouteAminoMsg): Route;
    toAminoMsg(message: Route): RouteAminoMsg;
    fromProtoMsg(message: RouteProtoMsg): Route;
    toProto(message: Route): Uint8Array;
    toProtoMsg(message: Route): RouteProtoMsg;
};
export declare const Trade: {
    typeUrl: string;
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromPartial(object: Partial<Trade>): Trade;
    fromAmino(object: TradeAmino): Trade;
    toAmino(message: Trade): TradeAmino;
    fromAminoMsg(object: TradeAminoMsg): Trade;
    toAminoMsg(message: Trade): TradeAminoMsg;
    fromProtoMsg(message: TradeProtoMsg): Trade;
    toProto(message: Trade): Uint8Array;
    toProtoMsg(message: Trade): TradeProtoMsg;
};
export declare const RouteStatistics: {
    typeUrl: string;
    encode(message: RouteStatistics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteStatistics;
    fromPartial(object: Partial<RouteStatistics>): RouteStatistics;
    fromAmino(object: RouteStatisticsAmino): RouteStatistics;
    toAmino(message: RouteStatistics): RouteStatisticsAmino;
    fromAminoMsg(object: RouteStatisticsAminoMsg): RouteStatistics;
    toAminoMsg(message: RouteStatistics): RouteStatisticsAminoMsg;
    fromProtoMsg(message: RouteStatisticsProtoMsg): RouteStatistics;
    toProto(message: RouteStatistics): Uint8Array;
    toProtoMsg(message: RouteStatistics): RouteStatisticsProtoMsg;
};
export declare const PoolWeights: {
    typeUrl: string;
    encode(message: PoolWeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolWeights;
    fromPartial(object: Partial<PoolWeights>): PoolWeights;
    fromAmino(object: PoolWeightsAmino): PoolWeights;
    toAmino(message: PoolWeights): PoolWeightsAmino;
    fromAminoMsg(object: PoolWeightsAminoMsg): PoolWeights;
    toAminoMsg(message: PoolWeights): PoolWeightsAminoMsg;
    fromProtoMsg(message: PoolWeightsProtoMsg): PoolWeights;
    toProto(message: PoolWeights): Uint8Array;
    toProtoMsg(message: PoolWeights): PoolWeightsProtoMsg;
};
export declare const BaseDenom: {
    typeUrl: string;
    encode(message: BaseDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseDenom;
    fromPartial(object: Partial<BaseDenom>): BaseDenom;
    fromAmino(object: BaseDenomAmino): BaseDenom;
    toAmino(message: BaseDenom): BaseDenomAmino;
    fromAminoMsg(object: BaseDenomAminoMsg): BaseDenom;
    toAminoMsg(message: BaseDenom): BaseDenomAminoMsg;
    fromProtoMsg(message: BaseDenomProtoMsg): BaseDenom;
    toProto(message: BaseDenom): Uint8Array;
    toProtoMsg(message: BaseDenom): BaseDenomProtoMsg;
};
