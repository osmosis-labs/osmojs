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
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */

  stepSize: string;
}
/** Route is a hot route for a given pair of tokens */

export interface RouteSDKType {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: TradeSDKType[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */

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
/** Trade is a single trade in a route */

export interface TradeSDKType {
  /** The pool id of the pool that is traded on */
  pool: Long;
  /** The denom of the token that is traded */

  token_in: string;
  /** The denom of the token that is received */

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
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */

export interface RouteStatisticsSDKType {
  /** profits is the total profit from all trades on this route */
  profits: CoinSDKType[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */

  number_of_trades: string;
  /** route is the route that was used (pool ids along the arbitrage route) */

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
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */

export interface PoolWeightsSDKType {
  /** The weight of a stableswap pool */
  stable_weight: Long;
  /** The weight of a balancer pool */

  balancer_weight: Long;
  /** The weight of a concentrated pool */

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
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */

export interface BaseDenomSDKType {
  /** The denom i.e. name of the base denom (ex. uosmo) */
  denom: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */

  step_size: string;
}

function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}

export const TokenPairArbRoutes = {
  encode(message: TokenPairArbRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBaseRoute(): Route {
  return {
    trades: [],
    stepSize: ""
  };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;

        case 2:
          message.stepSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    message.stepSize = object.stepSize ?? "";
    return message;
  }

};

function createBaseTrade(): Trade {
  return {
    pool: Long.UZERO,
    tokenIn: "",
    tokenOut: ""
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool.isZero()) {
      writer.uint32(8).uint64(message.pool);
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? Long.fromValue(object.pool) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBaseRouteStatistics(): RouteStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    route: []
  };
}

export const RouteStatistics = {
  encode(message: RouteStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }

    writer.uint32(26).fork();

    for (const v of message.route) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteStatistics();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.numberOfTrades = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.route.push((reader.uint64() as Long));
            }
          } else {
            message.route.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<RouteStatistics>): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.route = object.route?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBasePoolWeights(): PoolWeights {
  return {
    stableWeight: Long.UZERO,
    balancerWeight: Long.UZERO,
    concentratedWeight: Long.UZERO
  };
}

export const PoolWeights = {
  encode(message: PoolWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.stableWeight.isZero()) {
      writer.uint32(8).uint64(message.stableWeight);
    }

    if (!message.balancerWeight.isZero()) {
      writer.uint32(16).uint64(message.balancerWeight);
    }

    if (!message.concentratedWeight.isZero()) {
      writer.uint32(24).uint64(message.concentratedWeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWeights();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stableWeight = (reader.uint64() as Long);
          break;

        case 2:
          message.balancerWeight = (reader.uint64() as Long);
          break;

        case 3:
          message.concentratedWeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<PoolWeights>): PoolWeights {
    const message = createBasePoolWeights();
    message.stableWeight = object.stableWeight !== undefined && object.stableWeight !== null ? Long.fromValue(object.stableWeight) : Long.UZERO;
    message.balancerWeight = object.balancerWeight !== undefined && object.balancerWeight !== null ? Long.fromValue(object.balancerWeight) : Long.UZERO;
    message.concentratedWeight = object.concentratedWeight !== undefined && object.concentratedWeight !== null ? Long.fromValue(object.concentratedWeight) : Long.UZERO;
    return message;
  }

};

function createBaseBaseDenom(): BaseDenom {
  return {
    denom: "",
    stepSize: ""
  };
}

export const BaseDenom = {
  encode(message: BaseDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.stepSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<BaseDenom>): BaseDenom {
    const message = createBaseBaseDenom();
    message.denom = object.denom ?? "";
    message.stepSize = object.stepSize ?? "";
    return message;
  }

};