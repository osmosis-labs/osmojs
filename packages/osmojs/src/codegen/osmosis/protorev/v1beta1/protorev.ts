import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TakerFeesTracker, TakerFeesTrackerAmino, TakerFeesTrackerSDKType } from "../../poolmanager/v1beta1/genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
  arb_routes?: RouteAmino[];
  /** Token denomination of the first asset */
  token_in?: string;
  /** Token denomination of the second asset */
  token_out?: string;
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
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
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
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
   * -> right)
   */
  trades?: TradeAmino[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */
  step_size?: string;
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
  pool: bigint;
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
  pool?: string;
  /** The denom of the token that is traded */
  token_in?: string;
  /** The denom of the token that is received */
  token_out?: string;
}
export interface TradeAminoMsg {
  type: "osmosis/protorev/trade";
  value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
  pool: bigint;
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
  route: bigint[];
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
  profits?: CoinAmino[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */
  number_of_trades?: string;
  /** route is the route that was used (pool ids along the arbitrage route) */
  route?: string[];
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
  route: bigint[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeights {
  /** The weight of a stableswap pool */
  stableWeight: bigint;
  /** The weight of a balancer pool */
  balancerWeight: bigint;
  /** The weight of a concentrated pool */
  concentratedWeight: bigint;
  /** The weight of a cosmwasm pool */
  cosmwasmWeight: bigint;
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
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsAmino {
  /** The weight of a stableswap pool */
  stable_weight?: string;
  /** The weight of a balancer pool */
  balancer_weight?: string;
  /** The weight of a concentrated pool */
  concentrated_weight?: string;
  /** The weight of a cosmwasm pool */
  cosmwasm_weight?: string;
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
 * 
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsSDKType {
  stable_weight: bigint;
  balancer_weight: bigint;
  concentrated_weight: bigint;
  cosmwasm_weight: bigint;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolType {
  /** The stable pool info */
  stable: StablePoolInfo;
  /** The balancer pool info */
  balancer: BalancerPoolInfo;
  /** The concentrated pool info */
  concentrated: ConcentratedPoolInfo;
  /** The cosmwasm pool info */
  cosmwasm: CosmwasmPoolInfo;
}
export interface InfoByPoolTypeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType";
  value: Uint8Array;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeAmino {
  /** The stable pool info */
  stable?: StablePoolInfoAmino;
  /** The balancer pool info */
  balancer?: BalancerPoolInfoAmino;
  /** The concentrated pool info */
  concentrated?: ConcentratedPoolInfoAmino;
  /** The cosmwasm pool info */
  cosmwasm?: CosmwasmPoolInfoAmino;
}
export interface InfoByPoolTypeAminoMsg {
  type: "osmosis/protorev/info-by-pool-type";
  value: InfoByPoolTypeAmino;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeSDKType {
  stable: StablePoolInfoSDKType;
  balancer: BalancerPoolInfoSDKType;
  concentrated: ConcentratedPoolInfoSDKType;
  cosmwasm: CosmwasmPoolInfoSDKType;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfo {
  /** The weight of a stableswap pool */
  weight: bigint;
}
export interface StablePoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo";
  value: Uint8Array;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoAmino {
  /** The weight of a stableswap pool */
  weight?: string;
}
export interface StablePoolInfoAminoMsg {
  type: "osmosis/protorev/stable-pool-info";
  value: StablePoolInfoAmino;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoSDKType {
  weight: bigint;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfo {
  /** The weight of a balancer pool */
  weight: bigint;
}
export interface BalancerPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo";
  value: Uint8Array;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoAmino {
  /** The weight of a balancer pool */
  weight?: string;
}
export interface BalancerPoolInfoAminoMsg {
  type: "osmosis/protorev/balancer-pool-info";
  value: BalancerPoolInfoAmino;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoSDKType {
  weight: bigint;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfo {
  /** The weight of a concentrated pool */
  weight: bigint;
  /** The maximum number of ticks we can move when rebalancing */
  maxTicksCrossed: bigint;
}
export interface ConcentratedPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo";
  value: Uint8Array;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoAmino {
  /** The weight of a concentrated pool */
  weight?: string;
  /** The maximum number of ticks we can move when rebalancing */
  max_ticks_crossed?: string;
}
export interface ConcentratedPoolInfoAminoMsg {
  type: "osmosis/protorev/concentrated-pool-info";
  value: ConcentratedPoolInfoAmino;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoSDKType {
  weight: bigint;
  max_ticks_crossed: bigint;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfo {
  /** The weight of a cosmwasm pool (by contract address) */
  weightMaps: WeightMap[];
}
export interface CosmwasmPoolInfoProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo";
  value: Uint8Array;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoAmino {
  /** The weight of a cosmwasm pool (by contract address) */
  weight_maps?: WeightMapAmino[];
}
export interface CosmwasmPoolInfoAminoMsg {
  type: "osmosis/protorev/cosmwasm-pool-info";
  value: CosmwasmPoolInfoAmino;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoSDKType {
  weight_maps: WeightMapSDKType[];
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMap {
  /** The weight of a cosmwasm pool (by contract address) */
  weight: bigint;
  /** The contract address */
  contractAddress: string;
}
export interface WeightMapProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.WeightMap";
  value: Uint8Array;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapAmino {
  /** The weight of a cosmwasm pool (by contract address) */
  weight?: string;
  /** The contract address */
  contract_address?: string;
}
export interface WeightMapAminoMsg {
  type: "osmosis/protorev/weight-map";
  value: WeightMapAmino;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapSDKType {
  weight: bigint;
  contract_address: string;
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
  denom?: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */
  step_size?: string;
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
export interface AllProtocolRevenue {
  takerFeesTracker: TakerFeesTracker;
  cyclicArbTracker: CyclicArbTracker;
}
export interface AllProtocolRevenueProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue";
  value: Uint8Array;
}
export interface AllProtocolRevenueAmino {
  taker_fees_tracker?: TakerFeesTrackerAmino;
  cyclic_arb_tracker?: CyclicArbTrackerAmino;
}
export interface AllProtocolRevenueAminoMsg {
  type: "osmosis/protorev/all-protocol-revenue";
  value: AllProtocolRevenueAmino;
}
export interface AllProtocolRevenueSDKType {
  taker_fees_tracker: TakerFeesTrackerSDKType;
  cyclic_arb_tracker: CyclicArbTrackerSDKType;
}
export interface CyclicArbTracker {
  cyclicArb: Coin[];
  heightAccountingStartsFrom: bigint;
}
export interface CyclicArbTrackerProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker";
  value: Uint8Array;
}
export interface CyclicArbTrackerAmino {
  cyclic_arb?: CoinAmino[];
  height_accounting_starts_from?: string;
}
export interface CyclicArbTrackerAminoMsg {
  type: "osmosis/protorev/cyclic-arb-tracker";
  value: CyclicArbTrackerAmino;
}
export interface CyclicArbTrackerSDKType {
  cyclic_arb: CoinSDKType[];
  height_accounting_starts_from: bigint;
}
function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}
export const TokenPairArbRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
  aminoType: "osmosis/protorev/token-pair-arb-routes",
  is(o: any): o is TokenPairArbRoutes {
    return o && (o.$typeUrl === TokenPairArbRoutes.typeUrl || Array.isArray(o.arbRoutes) && (!o.arbRoutes.length || Route.is(o.arbRoutes[0])) && typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is TokenPairArbRoutesSDKType {
    return o && (o.$typeUrl === TokenPairArbRoutes.typeUrl || Array.isArray(o.arb_routes) && (!o.arb_routes.length || Route.isSDK(o.arb_routes[0])) && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is TokenPairArbRoutesAmino {
    return o && (o.$typeUrl === TokenPairArbRoutes.typeUrl || Array.isArray(o.arb_routes) && (!o.arb_routes.length || Route.isAmino(o.arb_routes[0])) && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: TokenPairArbRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arbRoutes) ? object.arbRoutes.map((e: any) => Route.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: TokenPairArbRoutes): unknown {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arbRoutes = message.arbRoutes.map(e => e ? Route.toJSON(e) : undefined);
    } else {
      obj.arbRoutes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arb_routes?.map(e => Route.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arb_routes = message.arbRoutes.map(e => e ? Route.toAmino(e) : undefined);
    } else {
      obj.arb_routes = [];
    }
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg {
    return {
      type: "osmosis/protorev/token-pair-arb-routes",
      value: TokenPairArbRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.decode(message.value);
  },
  toProto(message: TokenPairArbRoutes): Uint8Array {
    return TokenPairArbRoutes.encode(message).finish();
  },
  toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
      value: TokenPairArbRoutes.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenPairArbRoutes.typeUrl, TokenPairArbRoutes);
GlobalDecoderRegistry.registerAminoProtoMapping(TokenPairArbRoutes.aminoType, TokenPairArbRoutes.typeUrl);
function createBaseRoute(): Route {
  return {
    trades: [],
    stepSize: ""
  };
}
export const Route = {
  typeUrl: "/osmosis.protorev.v1beta1.Route",
  aminoType: "osmosis/protorev/route",
  is(o: any): o is Route {
    return o && (o.$typeUrl === Route.typeUrl || Array.isArray(o.trades) && (!o.trades.length || Trade.is(o.trades[0])) && typeof o.stepSize === "string");
  },
  isSDK(o: any): o is RouteSDKType {
    return o && (o.$typeUrl === Route.typeUrl || Array.isArray(o.trades) && (!o.trades.length || Trade.isSDK(o.trades[0])) && typeof o.step_size === "string");
  },
  isAmino(o: any): o is RouteAmino {
    return o && (o.$typeUrl === Route.typeUrl || Array.isArray(o.trades) && (!o.trades.length || Trade.isAmino(o.trades[0])) && typeof o.step_size === "string");
  },
  encode(message: Route, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : [],
      stepSize: isSet(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  toJSON(message: Route): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial(object: Partial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    message.stepSize = object.stepSize ?? "";
    return message;
  },
  fromAmino(object: RouteAmino): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromAmino(e)) || [];
    if (object.step_size !== undefined && object.step_size !== null) {
      message.stepSize = object.step_size;
    }
    return message;
  },
  toAmino(message: Route): RouteAmino {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toAmino(e) : undefined);
    } else {
      obj.trades = [];
    }
    obj.step_size = message.stepSize;
    return obj;
  },
  fromAminoMsg(object: RouteAminoMsg): Route {
    return Route.fromAmino(object.value);
  },
  toAminoMsg(message: Route): RouteAminoMsg {
    return {
      type: "osmosis/protorev/route",
      value: Route.toAmino(message)
    };
  },
  fromProtoMsg(message: RouteProtoMsg): Route {
    return Route.decode(message.value);
  },
  toProto(message: Route): Uint8Array {
    return Route.encode(message).finish();
  },
  toProtoMsg(message: Route): RouteProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Route",
      value: Route.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Route.typeUrl, Route);
GlobalDecoderRegistry.registerAminoProtoMapping(Route.aminoType, Route.typeUrl);
function createBaseTrade(): Trade {
  return {
    pool: BigInt(0),
    tokenIn: "",
    tokenOut: ""
  };
}
export const Trade = {
  typeUrl: "/osmosis.protorev.v1beta1.Trade",
  aminoType: "osmosis/protorev/trade",
  is(o: any): o is Trade {
    return o && (o.$typeUrl === Trade.typeUrl || typeof o.pool === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is TradeSDKType {
    return o && (o.$typeUrl === Trade.typeUrl || typeof o.pool === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is TradeAmino {
    return o && (o.$typeUrl === Trade.typeUrl || typeof o.pool === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: Trade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Trade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.uint64();
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
  fromJSON(object: any): Trade {
    return {
      pool: isSet(object.pool) ? BigInt(object.pool.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? BigInt(object.pool.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: TradeAmino): Trade {
    const message = createBaseTrade();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BigInt(object.pool);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: Trade): TradeAmino {
    const obj: any = {};
    obj.pool = message.pool ? message.pool.toString() : undefined;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TradeAminoMsg): Trade {
    return Trade.fromAmino(object.value);
  },
  toAminoMsg(message: Trade): TradeAminoMsg {
    return {
      type: "osmosis/protorev/trade",
      value: Trade.toAmino(message)
    };
  },
  fromProtoMsg(message: TradeProtoMsg): Trade {
    return Trade.decode(message.value);
  },
  toProto(message: Trade): Uint8Array {
    return Trade.encode(message).finish();
  },
  toProtoMsg(message: Trade): TradeProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Trade",
      value: Trade.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Trade.typeUrl, Trade);
GlobalDecoderRegistry.registerAminoProtoMapping(Trade.aminoType, Trade.typeUrl);
function createBaseRouteStatistics(): RouteStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    route: []
  };
}
export const RouteStatistics = {
  typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
  aminoType: "osmosis/protorev/route-statistics",
  is(o: any): o is RouteStatistics {
    return o && (o.$typeUrl === RouteStatistics.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.is(o.profits[0])) && typeof o.numberOfTrades === "string" && Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  isSDK(o: any): o is RouteStatisticsSDKType {
    return o && (o.$typeUrl === RouteStatistics.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.isSDK(o.profits[0])) && typeof o.number_of_trades === "string" && Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  isAmino(o: any): o is RouteStatisticsAmino {
    return o && (o.$typeUrl === RouteStatistics.typeUrl || Array.isArray(o.profits) && (!o.profits.length || Coin.isAmino(o.profits[0])) && typeof o.number_of_trades === "string" && Array.isArray(o.route) && (!o.route.length || typeof o.route[0] === "bigint"));
  },
  encode(message: RouteStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): RouteStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): RouteStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : [],
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : "",
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: RouteStatistics): unknown {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    if (message.route) {
      obj.route = message.route.map(e => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RouteStatistics>): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.route = object.route?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: RouteStatisticsAmino): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
      message.numberOfTrades = object.number_of_trades;
    }
    message.route = object.route?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: RouteStatistics): RouteStatisticsAmino {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = [];
    }
    obj.number_of_trades = message.numberOfTrades;
    if (message.route) {
      obj.route = message.route.map(e => e.toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromAminoMsg(object: RouteStatisticsAminoMsg): RouteStatistics {
    return RouteStatistics.fromAmino(object.value);
  },
  toAminoMsg(message: RouteStatistics): RouteStatisticsAminoMsg {
    return {
      type: "osmosis/protorev/route-statistics",
      value: RouteStatistics.toAmino(message)
    };
  },
  fromProtoMsg(message: RouteStatisticsProtoMsg): RouteStatistics {
    return RouteStatistics.decode(message.value);
  },
  toProto(message: RouteStatistics): Uint8Array {
    return RouteStatistics.encode(message).finish();
  },
  toProtoMsg(message: RouteStatistics): RouteStatisticsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
      value: RouteStatistics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RouteStatistics.typeUrl, RouteStatistics);
GlobalDecoderRegistry.registerAminoProtoMapping(RouteStatistics.aminoType, RouteStatistics.typeUrl);
function createBasePoolWeights(): PoolWeights {
  return {
    stableWeight: BigInt(0),
    balancerWeight: BigInt(0),
    concentratedWeight: BigInt(0),
    cosmwasmWeight: BigInt(0)
  };
}
export const PoolWeights = {
  typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
  aminoType: "osmosis/protorev/pool-weights",
  is(o: any): o is PoolWeights {
    return o && (o.$typeUrl === PoolWeights.typeUrl || typeof o.stableWeight === "bigint" && typeof o.balancerWeight === "bigint" && typeof o.concentratedWeight === "bigint" && typeof o.cosmwasmWeight === "bigint");
  },
  isSDK(o: any): o is PoolWeightsSDKType {
    return o && (o.$typeUrl === PoolWeights.typeUrl || typeof o.stable_weight === "bigint" && typeof o.balancer_weight === "bigint" && typeof o.concentrated_weight === "bigint" && typeof o.cosmwasm_weight === "bigint");
  },
  isAmino(o: any): o is PoolWeightsAmino {
    return o && (o.$typeUrl === PoolWeights.typeUrl || typeof o.stable_weight === "bigint" && typeof o.balancer_weight === "bigint" && typeof o.concentrated_weight === "bigint" && typeof o.cosmwasm_weight === "bigint");
  },
  encode(message: PoolWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stableWeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.stableWeight);
    }
    if (message.balancerWeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.balancerWeight);
    }
    if (message.concentratedWeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.concentratedWeight);
    }
    if (message.cosmwasmWeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.cosmwasmWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableWeight = reader.uint64();
          break;
        case 2:
          message.balancerWeight = reader.uint64();
          break;
        case 3:
          message.concentratedWeight = reader.uint64();
          break;
        case 4:
          message.cosmwasmWeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolWeights {
    return {
      stableWeight: isSet(object.stableWeight) ? BigInt(object.stableWeight.toString()) : BigInt(0),
      balancerWeight: isSet(object.balancerWeight) ? BigInt(object.balancerWeight.toString()) : BigInt(0),
      concentratedWeight: isSet(object.concentratedWeight) ? BigInt(object.concentratedWeight.toString()) : BigInt(0),
      cosmwasmWeight: isSet(object.cosmwasmWeight) ? BigInt(object.cosmwasmWeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolWeights): unknown {
    const obj: any = {};
    message.stableWeight !== undefined && (obj.stableWeight = (message.stableWeight || BigInt(0)).toString());
    message.balancerWeight !== undefined && (obj.balancerWeight = (message.balancerWeight || BigInt(0)).toString());
    message.concentratedWeight !== undefined && (obj.concentratedWeight = (message.concentratedWeight || BigInt(0)).toString());
    message.cosmwasmWeight !== undefined && (obj.cosmwasmWeight = (message.cosmwasmWeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PoolWeights>): PoolWeights {
    const message = createBasePoolWeights();
    message.stableWeight = object.stableWeight !== undefined && object.stableWeight !== null ? BigInt(object.stableWeight.toString()) : BigInt(0);
    message.balancerWeight = object.balancerWeight !== undefined && object.balancerWeight !== null ? BigInt(object.balancerWeight.toString()) : BigInt(0);
    message.concentratedWeight = object.concentratedWeight !== undefined && object.concentratedWeight !== null ? BigInt(object.concentratedWeight.toString()) : BigInt(0);
    message.cosmwasmWeight = object.cosmwasmWeight !== undefined && object.cosmwasmWeight !== null ? BigInt(object.cosmwasmWeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolWeightsAmino): PoolWeights {
    const message = createBasePoolWeights();
    if (object.stable_weight !== undefined && object.stable_weight !== null) {
      message.stableWeight = BigInt(object.stable_weight);
    }
    if (object.balancer_weight !== undefined && object.balancer_weight !== null) {
      message.balancerWeight = BigInt(object.balancer_weight);
    }
    if (object.concentrated_weight !== undefined && object.concentrated_weight !== null) {
      message.concentratedWeight = BigInt(object.concentrated_weight);
    }
    if (object.cosmwasm_weight !== undefined && object.cosmwasm_weight !== null) {
      message.cosmwasmWeight = BigInt(object.cosmwasm_weight);
    }
    return message;
  },
  toAmino(message: PoolWeights): PoolWeightsAmino {
    const obj: any = {};
    obj.stable_weight = message.stableWeight ? message.stableWeight.toString() : undefined;
    obj.balancer_weight = message.balancerWeight ? message.balancerWeight.toString() : undefined;
    obj.concentrated_weight = message.concentratedWeight ? message.concentratedWeight.toString() : undefined;
    obj.cosmwasm_weight = message.cosmwasmWeight ? message.cosmwasmWeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolWeightsAminoMsg): PoolWeights {
    return PoolWeights.fromAmino(object.value);
  },
  toAminoMsg(message: PoolWeights): PoolWeightsAminoMsg {
    return {
      type: "osmosis/protorev/pool-weights",
      value: PoolWeights.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolWeightsProtoMsg): PoolWeights {
    return PoolWeights.decode(message.value);
  },
  toProto(message: PoolWeights): Uint8Array {
    return PoolWeights.encode(message).finish();
  },
  toProtoMsg(message: PoolWeights): PoolWeightsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
      value: PoolWeights.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolWeights.typeUrl, PoolWeights);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolWeights.aminoType, PoolWeights.typeUrl);
function createBaseInfoByPoolType(): InfoByPoolType {
  return {
    stable: StablePoolInfo.fromPartial({}),
    balancer: BalancerPoolInfo.fromPartial({}),
    concentrated: ConcentratedPoolInfo.fromPartial({}),
    cosmwasm: CosmwasmPoolInfo.fromPartial({})
  };
}
export const InfoByPoolType = {
  typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType",
  aminoType: "osmosis/protorev/info-by-pool-type",
  is(o: any): o is InfoByPoolType {
    return o && (o.$typeUrl === InfoByPoolType.typeUrl || StablePoolInfo.is(o.stable) && BalancerPoolInfo.is(o.balancer) && ConcentratedPoolInfo.is(o.concentrated) && CosmwasmPoolInfo.is(o.cosmwasm));
  },
  isSDK(o: any): o is InfoByPoolTypeSDKType {
    return o && (o.$typeUrl === InfoByPoolType.typeUrl || StablePoolInfo.isSDK(o.stable) && BalancerPoolInfo.isSDK(o.balancer) && ConcentratedPoolInfo.isSDK(o.concentrated) && CosmwasmPoolInfo.isSDK(o.cosmwasm));
  },
  isAmino(o: any): o is InfoByPoolTypeAmino {
    return o && (o.$typeUrl === InfoByPoolType.typeUrl || StablePoolInfo.isAmino(o.stable) && BalancerPoolInfo.isAmino(o.balancer) && ConcentratedPoolInfo.isAmino(o.concentrated) && CosmwasmPoolInfo.isAmino(o.cosmwasm));
  },
  encode(message: InfoByPoolType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stable !== undefined) {
      StablePoolInfo.encode(message.stable, writer.uint32(10).fork()).ldelim();
    }
    if (message.balancer !== undefined) {
      BalancerPoolInfo.encode(message.balancer, writer.uint32(18).fork()).ldelim();
    }
    if (message.concentrated !== undefined) {
      ConcentratedPoolInfo.encode(message.concentrated, writer.uint32(26).fork()).ldelim();
    }
    if (message.cosmwasm !== undefined) {
      CosmwasmPoolInfo.encode(message.cosmwasm, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InfoByPoolType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoByPoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stable = StablePoolInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.balancer = BalancerPoolInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.concentrated = ConcentratedPoolInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.cosmwasm = CosmwasmPoolInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InfoByPoolType {
    return {
      stable: isSet(object.stable) ? StablePoolInfo.fromJSON(object.stable) : undefined,
      balancer: isSet(object.balancer) ? BalancerPoolInfo.fromJSON(object.balancer) : undefined,
      concentrated: isSet(object.concentrated) ? ConcentratedPoolInfo.fromJSON(object.concentrated) : undefined,
      cosmwasm: isSet(object.cosmwasm) ? CosmwasmPoolInfo.fromJSON(object.cosmwasm) : undefined
    };
  },
  toJSON(message: InfoByPoolType): unknown {
    const obj: any = {};
    message.stable !== undefined && (obj.stable = message.stable ? StablePoolInfo.toJSON(message.stable) : undefined);
    message.balancer !== undefined && (obj.balancer = message.balancer ? BalancerPoolInfo.toJSON(message.balancer) : undefined);
    message.concentrated !== undefined && (obj.concentrated = message.concentrated ? ConcentratedPoolInfo.toJSON(message.concentrated) : undefined);
    message.cosmwasm !== undefined && (obj.cosmwasm = message.cosmwasm ? CosmwasmPoolInfo.toJSON(message.cosmwasm) : undefined);
    return obj;
  },
  fromPartial(object: Partial<InfoByPoolType>): InfoByPoolType {
    const message = createBaseInfoByPoolType();
    message.stable = object.stable !== undefined && object.stable !== null ? StablePoolInfo.fromPartial(object.stable) : undefined;
    message.balancer = object.balancer !== undefined && object.balancer !== null ? BalancerPoolInfo.fromPartial(object.balancer) : undefined;
    message.concentrated = object.concentrated !== undefined && object.concentrated !== null ? ConcentratedPoolInfo.fromPartial(object.concentrated) : undefined;
    message.cosmwasm = object.cosmwasm !== undefined && object.cosmwasm !== null ? CosmwasmPoolInfo.fromPartial(object.cosmwasm) : undefined;
    return message;
  },
  fromAmino(object: InfoByPoolTypeAmino): InfoByPoolType {
    const message = createBaseInfoByPoolType();
    if (object.stable !== undefined && object.stable !== null) {
      message.stable = StablePoolInfo.fromAmino(object.stable);
    }
    if (object.balancer !== undefined && object.balancer !== null) {
      message.balancer = BalancerPoolInfo.fromAmino(object.balancer);
    }
    if (object.concentrated !== undefined && object.concentrated !== null) {
      message.concentrated = ConcentratedPoolInfo.fromAmino(object.concentrated);
    }
    if (object.cosmwasm !== undefined && object.cosmwasm !== null) {
      message.cosmwasm = CosmwasmPoolInfo.fromAmino(object.cosmwasm);
    }
    return message;
  },
  toAmino(message: InfoByPoolType): InfoByPoolTypeAmino {
    const obj: any = {};
    obj.stable = message.stable ? StablePoolInfo.toAmino(message.stable) : undefined;
    obj.balancer = message.balancer ? BalancerPoolInfo.toAmino(message.balancer) : undefined;
    obj.concentrated = message.concentrated ? ConcentratedPoolInfo.toAmino(message.concentrated) : undefined;
    obj.cosmwasm = message.cosmwasm ? CosmwasmPoolInfo.toAmino(message.cosmwasm) : undefined;
    return obj;
  },
  fromAminoMsg(object: InfoByPoolTypeAminoMsg): InfoByPoolType {
    return InfoByPoolType.fromAmino(object.value);
  },
  toAminoMsg(message: InfoByPoolType): InfoByPoolTypeAminoMsg {
    return {
      type: "osmosis/protorev/info-by-pool-type",
      value: InfoByPoolType.toAmino(message)
    };
  },
  fromProtoMsg(message: InfoByPoolTypeProtoMsg): InfoByPoolType {
    return InfoByPoolType.decode(message.value);
  },
  toProto(message: InfoByPoolType): Uint8Array {
    return InfoByPoolType.encode(message).finish();
  },
  toProtoMsg(message: InfoByPoolType): InfoByPoolTypeProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType",
      value: InfoByPoolType.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InfoByPoolType.typeUrl, InfoByPoolType);
GlobalDecoderRegistry.registerAminoProtoMapping(InfoByPoolType.aminoType, InfoByPoolType.typeUrl);
function createBaseStablePoolInfo(): StablePoolInfo {
  return {
    weight: BigInt(0)
  };
}
export const StablePoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo",
  aminoType: "osmosis/protorev/stable-pool-info",
  is(o: any): o is StablePoolInfo {
    return o && (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  isSDK(o: any): o is StablePoolInfoSDKType {
    return o && (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  isAmino(o: any): o is StablePoolInfoAmino {
    return o && (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  encode(message: StablePoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StablePoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStablePoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StablePoolInfo {
    return {
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  toJSON(message: StablePoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<StablePoolInfo>): StablePoolInfo {
    const message = createBaseStablePoolInfo();
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StablePoolInfoAmino): StablePoolInfo {
    const message = createBaseStablePoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    return message;
  },
  toAmino(message: StablePoolInfo): StablePoolInfoAmino {
    const obj: any = {};
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StablePoolInfoAminoMsg): StablePoolInfo {
    return StablePoolInfo.fromAmino(object.value);
  },
  toAminoMsg(message: StablePoolInfo): StablePoolInfoAminoMsg {
    return {
      type: "osmosis/protorev/stable-pool-info",
      value: StablePoolInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: StablePoolInfoProtoMsg): StablePoolInfo {
    return StablePoolInfo.decode(message.value);
  },
  toProto(message: StablePoolInfo): Uint8Array {
    return StablePoolInfo.encode(message).finish();
  },
  toProtoMsg(message: StablePoolInfo): StablePoolInfoProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo",
      value: StablePoolInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StablePoolInfo.typeUrl, StablePoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(StablePoolInfo.aminoType, StablePoolInfo.typeUrl);
function createBaseBalancerPoolInfo(): BalancerPoolInfo {
  return {
    weight: BigInt(0)
  };
}
export const BalancerPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo",
  aminoType: "osmosis/protorev/balancer-pool-info",
  is(o: any): o is BalancerPoolInfo {
    return o && (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  isSDK(o: any): o is BalancerPoolInfoSDKType {
    return o && (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  isAmino(o: any): o is BalancerPoolInfoAmino {
    return o && (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === "bigint");
  },
  encode(message: BalancerPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalancerPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BalancerPoolInfo {
    return {
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  toJSON(message: BalancerPoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BalancerPoolInfo>): BalancerPoolInfo {
    const message = createBaseBalancerPoolInfo();
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BalancerPoolInfoAmino): BalancerPoolInfo {
    const message = createBaseBalancerPoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    return message;
  },
  toAmino(message: BalancerPoolInfo): BalancerPoolInfoAmino {
    const obj: any = {};
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BalancerPoolInfoAminoMsg): BalancerPoolInfo {
    return BalancerPoolInfo.fromAmino(object.value);
  },
  toAminoMsg(message: BalancerPoolInfo): BalancerPoolInfoAminoMsg {
    return {
      type: "osmosis/protorev/balancer-pool-info",
      value: BalancerPoolInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: BalancerPoolInfoProtoMsg): BalancerPoolInfo {
    return BalancerPoolInfo.decode(message.value);
  },
  toProto(message: BalancerPoolInfo): Uint8Array {
    return BalancerPoolInfo.encode(message).finish();
  },
  toProtoMsg(message: BalancerPoolInfo): BalancerPoolInfoProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo",
      value: BalancerPoolInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BalancerPoolInfo.typeUrl, BalancerPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(BalancerPoolInfo.aminoType, BalancerPoolInfo.typeUrl);
function createBaseConcentratedPoolInfo(): ConcentratedPoolInfo {
  return {
    weight: BigInt(0),
    maxTicksCrossed: BigInt(0)
  };
}
export const ConcentratedPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo",
  aminoType: "osmosis/protorev/concentrated-pool-info",
  is(o: any): o is ConcentratedPoolInfo {
    return o && (o.$typeUrl === ConcentratedPoolInfo.typeUrl || typeof o.weight === "bigint" && typeof o.maxTicksCrossed === "bigint");
  },
  isSDK(o: any): o is ConcentratedPoolInfoSDKType {
    return o && (o.$typeUrl === ConcentratedPoolInfo.typeUrl || typeof o.weight === "bigint" && typeof o.max_ticks_crossed === "bigint");
  },
  isAmino(o: any): o is ConcentratedPoolInfoAmino {
    return o && (o.$typeUrl === ConcentratedPoolInfo.typeUrl || typeof o.weight === "bigint" && typeof o.max_ticks_crossed === "bigint");
  },
  encode(message: ConcentratedPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    if (message.maxTicksCrossed !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxTicksCrossed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConcentratedPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        case 2:
          message.maxTicksCrossed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConcentratedPoolInfo {
    return {
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      maxTicksCrossed: isSet(object.maxTicksCrossed) ? BigInt(object.maxTicksCrossed.toString()) : BigInt(0)
    };
  },
  toJSON(message: ConcentratedPoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    message.maxTicksCrossed !== undefined && (obj.maxTicksCrossed = (message.maxTicksCrossed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ConcentratedPoolInfo>): ConcentratedPoolInfo {
    const message = createBaseConcentratedPoolInfo();
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.maxTicksCrossed = object.maxTicksCrossed !== undefined && object.maxTicksCrossed !== null ? BigInt(object.maxTicksCrossed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConcentratedPoolInfoAmino): ConcentratedPoolInfo {
    const message = createBaseConcentratedPoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    if (object.max_ticks_crossed !== undefined && object.max_ticks_crossed !== null) {
      message.maxTicksCrossed = BigInt(object.max_ticks_crossed);
    }
    return message;
  },
  toAmino(message: ConcentratedPoolInfo): ConcentratedPoolInfoAmino {
    const obj: any = {};
    obj.weight = message.weight ? message.weight.toString() : undefined;
    obj.max_ticks_crossed = message.maxTicksCrossed ? message.maxTicksCrossed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConcentratedPoolInfoAminoMsg): ConcentratedPoolInfo {
    return ConcentratedPoolInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ConcentratedPoolInfo): ConcentratedPoolInfoAminoMsg {
    return {
      type: "osmosis/protorev/concentrated-pool-info",
      value: ConcentratedPoolInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ConcentratedPoolInfoProtoMsg): ConcentratedPoolInfo {
    return ConcentratedPoolInfo.decode(message.value);
  },
  toProto(message: ConcentratedPoolInfo): Uint8Array {
    return ConcentratedPoolInfo.encode(message).finish();
  },
  toProtoMsg(message: ConcentratedPoolInfo): ConcentratedPoolInfoProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo",
      value: ConcentratedPoolInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConcentratedPoolInfo.typeUrl, ConcentratedPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ConcentratedPoolInfo.aminoType, ConcentratedPoolInfo.typeUrl);
function createBaseCosmwasmPoolInfo(): CosmwasmPoolInfo {
  return {
    weightMaps: []
  };
}
export const CosmwasmPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo",
  aminoType: "osmosis/protorev/cosmwasm-pool-info",
  is(o: any): o is CosmwasmPoolInfo {
    return o && (o.$typeUrl === CosmwasmPoolInfo.typeUrl || Array.isArray(o.weightMaps) && (!o.weightMaps.length || WeightMap.is(o.weightMaps[0])));
  },
  isSDK(o: any): o is CosmwasmPoolInfoSDKType {
    return o && (o.$typeUrl === CosmwasmPoolInfo.typeUrl || Array.isArray(o.weight_maps) && (!o.weight_maps.length || WeightMap.isSDK(o.weight_maps[0])));
  },
  isAmino(o: any): o is CosmwasmPoolInfoAmino {
    return o && (o.$typeUrl === CosmwasmPoolInfo.typeUrl || Array.isArray(o.weight_maps) && (!o.weight_maps.length || WeightMap.isAmino(o.weight_maps[0])));
  },
  encode(message: CosmwasmPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightMaps) {
      WeightMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmwasmPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmwasmPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightMaps.push(WeightMap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CosmwasmPoolInfo {
    return {
      weightMaps: Array.isArray(object?.weightMaps) ? object.weightMaps.map((e: any) => WeightMap.fromJSON(e)) : []
    };
  },
  toJSON(message: CosmwasmPoolInfo): unknown {
    const obj: any = {};
    if (message.weightMaps) {
      obj.weightMaps = message.weightMaps.map(e => e ? WeightMap.toJSON(e) : undefined);
    } else {
      obj.weightMaps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CosmwasmPoolInfo>): CosmwasmPoolInfo {
    const message = createBaseCosmwasmPoolInfo();
    message.weightMaps = object.weightMaps?.map(e => WeightMap.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CosmwasmPoolInfoAmino): CosmwasmPoolInfo {
    const message = createBaseCosmwasmPoolInfo();
    message.weightMaps = object.weight_maps?.map(e => WeightMap.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CosmwasmPoolInfo): CosmwasmPoolInfoAmino {
    const obj: any = {};
    if (message.weightMaps) {
      obj.weight_maps = message.weightMaps.map(e => e ? WeightMap.toAmino(e) : undefined);
    } else {
      obj.weight_maps = [];
    }
    return obj;
  },
  fromAminoMsg(object: CosmwasmPoolInfoAminoMsg): CosmwasmPoolInfo {
    return CosmwasmPoolInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CosmwasmPoolInfo): CosmwasmPoolInfoAminoMsg {
    return {
      type: "osmosis/protorev/cosmwasm-pool-info",
      value: CosmwasmPoolInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: CosmwasmPoolInfoProtoMsg): CosmwasmPoolInfo {
    return CosmwasmPoolInfo.decode(message.value);
  },
  toProto(message: CosmwasmPoolInfo): Uint8Array {
    return CosmwasmPoolInfo.encode(message).finish();
  },
  toProtoMsg(message: CosmwasmPoolInfo): CosmwasmPoolInfoProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo",
      value: CosmwasmPoolInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CosmwasmPoolInfo.typeUrl, CosmwasmPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(CosmwasmPoolInfo.aminoType, CosmwasmPoolInfo.typeUrl);
function createBaseWeightMap(): WeightMap {
  return {
    weight: BigInt(0),
    contractAddress: ""
  };
}
export const WeightMap = {
  typeUrl: "/osmosis.protorev.v1beta1.WeightMap",
  aminoType: "osmosis/protorev/weight-map",
  is(o: any): o is WeightMap {
    return o && (o.$typeUrl === WeightMap.typeUrl || typeof o.weight === "bigint" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is WeightMapSDKType {
    return o && (o.$typeUrl === WeightMap.typeUrl || typeof o.weight === "bigint" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is WeightMapAmino {
    return o && (o.$typeUrl === WeightMap.typeUrl || typeof o.weight === "bigint" && typeof o.contract_address === "string");
  },
  encode(message: WeightMap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightMap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightMap {
    return {
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: WeightMap): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<WeightMap>): WeightMap {
    const message = createBaseWeightMap();
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: WeightMapAmino): WeightMap {
    const message = createBaseWeightMap();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: WeightMap): WeightMapAmino {
    const obj: any = {};
    obj.weight = message.weight ? message.weight.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: WeightMapAminoMsg): WeightMap {
    return WeightMap.fromAmino(object.value);
  },
  toAminoMsg(message: WeightMap): WeightMapAminoMsg {
    return {
      type: "osmosis/protorev/weight-map",
      value: WeightMap.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightMapProtoMsg): WeightMap {
    return WeightMap.decode(message.value);
  },
  toProto(message: WeightMap): Uint8Array {
    return WeightMap.encode(message).finish();
  },
  toProtoMsg(message: WeightMap): WeightMapProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.WeightMap",
      value: WeightMap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightMap.typeUrl, WeightMap);
GlobalDecoderRegistry.registerAminoProtoMapping(WeightMap.aminoType, WeightMap.typeUrl);
function createBaseBaseDenom(): BaseDenom {
  return {
    denom: "",
    stepSize: ""
  };
}
export const BaseDenom = {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
  aminoType: "osmosis/protorev/base-denom",
  is(o: any): o is BaseDenom {
    return o && (o.$typeUrl === BaseDenom.typeUrl || typeof o.denom === "string" && typeof o.stepSize === "string");
  },
  isSDK(o: any): o is BaseDenomSDKType {
    return o && (o.$typeUrl === BaseDenom.typeUrl || typeof o.denom === "string" && typeof o.step_size === "string");
  },
  isAmino(o: any): o is BaseDenomAmino {
    return o && (o.$typeUrl === BaseDenom.typeUrl || typeof o.denom === "string" && typeof o.step_size === "string");
  },
  encode(message: BaseDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): BaseDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      stepSize: isSet(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  toJSON(message: BaseDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial(object: Partial<BaseDenom>): BaseDenom {
    const message = createBaseBaseDenom();
    message.denom = object.denom ?? "";
    message.stepSize = object.stepSize ?? "";
    return message;
  },
  fromAmino(object: BaseDenomAmino): BaseDenom {
    const message = createBaseBaseDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.step_size !== undefined && object.step_size !== null) {
      message.stepSize = object.step_size;
    }
    return message;
  },
  toAmino(message: BaseDenom): BaseDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.step_size = message.stepSize;
    return obj;
  },
  fromAminoMsg(object: BaseDenomAminoMsg): BaseDenom {
    return BaseDenom.fromAmino(object.value);
  },
  toAminoMsg(message: BaseDenom): BaseDenomAminoMsg {
    return {
      type: "osmosis/protorev/base-denom",
      value: BaseDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseDenomProtoMsg): BaseDenom {
    return BaseDenom.decode(message.value);
  },
  toProto(message: BaseDenom): Uint8Array {
    return BaseDenom.encode(message).finish();
  },
  toProtoMsg(message: BaseDenom): BaseDenomProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
      value: BaseDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BaseDenom.typeUrl, BaseDenom);
GlobalDecoderRegistry.registerAminoProtoMapping(BaseDenom.aminoType, BaseDenom.typeUrl);
function createBaseAllProtocolRevenue(): AllProtocolRevenue {
  return {
    takerFeesTracker: TakerFeesTracker.fromPartial({}),
    cyclicArbTracker: CyclicArbTracker.fromPartial({})
  };
}
export const AllProtocolRevenue = {
  typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue",
  aminoType: "osmosis/protorev/all-protocol-revenue",
  is(o: any): o is AllProtocolRevenue {
    return o && (o.$typeUrl === AllProtocolRevenue.typeUrl || TakerFeesTracker.is(o.takerFeesTracker) && CyclicArbTracker.is(o.cyclicArbTracker));
  },
  isSDK(o: any): o is AllProtocolRevenueSDKType {
    return o && (o.$typeUrl === AllProtocolRevenue.typeUrl || TakerFeesTracker.isSDK(o.taker_fees_tracker) && CyclicArbTracker.isSDK(o.cyclic_arb_tracker));
  },
  isAmino(o: any): o is AllProtocolRevenueAmino {
    return o && (o.$typeUrl === AllProtocolRevenue.typeUrl || TakerFeesTracker.isAmino(o.taker_fees_tracker) && CyclicArbTracker.isAmino(o.cyclic_arb_tracker));
  },
  encode(message: AllProtocolRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFeesTracker !== undefined) {
      TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(10).fork()).ldelim();
    }
    if (message.cyclicArbTracker !== undefined) {
      CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllProtocolRevenue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllProtocolRevenue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
          break;
        case 3:
          message.cyclicArbTracker = CyclicArbTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllProtocolRevenue {
    return {
      takerFeesTracker: isSet(object.takerFeesTracker) ? TakerFeesTracker.fromJSON(object.takerFeesTracker) : undefined,
      cyclicArbTracker: isSet(object.cyclicArbTracker) ? CyclicArbTracker.fromJSON(object.cyclicArbTracker) : undefined
    };
  },
  toJSON(message: AllProtocolRevenue): unknown {
    const obj: any = {};
    message.takerFeesTracker !== undefined && (obj.takerFeesTracker = message.takerFeesTracker ? TakerFeesTracker.toJSON(message.takerFeesTracker) : undefined);
    message.cyclicArbTracker !== undefined && (obj.cyclicArbTracker = message.cyclicArbTracker ? CyclicArbTracker.toJSON(message.cyclicArbTracker) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AllProtocolRevenue>): AllProtocolRevenue {
    const message = createBaseAllProtocolRevenue();
    message.takerFeesTracker = object.takerFeesTracker !== undefined && object.takerFeesTracker !== null ? TakerFeesTracker.fromPartial(object.takerFeesTracker) : undefined;
    message.cyclicArbTracker = object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null ? CyclicArbTracker.fromPartial(object.cyclicArbTracker) : undefined;
    return message;
  },
  fromAmino(object: AllProtocolRevenueAmino): AllProtocolRevenue {
    const message = createBaseAllProtocolRevenue();
    if (object.taker_fees_tracker !== undefined && object.taker_fees_tracker !== null) {
      message.takerFeesTracker = TakerFeesTracker.fromAmino(object.taker_fees_tracker);
    }
    if (object.cyclic_arb_tracker !== undefined && object.cyclic_arb_tracker !== null) {
      message.cyclicArbTracker = CyclicArbTracker.fromAmino(object.cyclic_arb_tracker);
    }
    return message;
  },
  toAmino(message: AllProtocolRevenue): AllProtocolRevenueAmino {
    const obj: any = {};
    obj.taker_fees_tracker = message.takerFeesTracker ? TakerFeesTracker.toAmino(message.takerFeesTracker) : undefined;
    obj.cyclic_arb_tracker = message.cyclicArbTracker ? CyclicArbTracker.toAmino(message.cyclicArbTracker) : undefined;
    return obj;
  },
  fromAminoMsg(object: AllProtocolRevenueAminoMsg): AllProtocolRevenue {
    return AllProtocolRevenue.fromAmino(object.value);
  },
  toAminoMsg(message: AllProtocolRevenue): AllProtocolRevenueAminoMsg {
    return {
      type: "osmosis/protorev/all-protocol-revenue",
      value: AllProtocolRevenue.toAmino(message)
    };
  },
  fromProtoMsg(message: AllProtocolRevenueProtoMsg): AllProtocolRevenue {
    return AllProtocolRevenue.decode(message.value);
  },
  toProto(message: AllProtocolRevenue): Uint8Array {
    return AllProtocolRevenue.encode(message).finish();
  },
  toProtoMsg(message: AllProtocolRevenue): AllProtocolRevenueProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue",
      value: AllProtocolRevenue.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllProtocolRevenue.typeUrl, AllProtocolRevenue);
GlobalDecoderRegistry.registerAminoProtoMapping(AllProtocolRevenue.aminoType, AllProtocolRevenue.typeUrl);
function createBaseCyclicArbTracker(): CyclicArbTracker {
  return {
    cyclicArb: [],
    heightAccountingStartsFrom: BigInt(0)
  };
}
export const CyclicArbTracker = {
  typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker",
  aminoType: "osmosis/protorev/cyclic-arb-tracker",
  is(o: any): o is CyclicArbTracker {
    return o && (o.$typeUrl === CyclicArbTracker.typeUrl || Array.isArray(o.cyclicArb) && (!o.cyclicArb.length || Coin.is(o.cyclicArb[0])) && typeof o.heightAccountingStartsFrom === "bigint");
  },
  isSDK(o: any): o is CyclicArbTrackerSDKType {
    return o && (o.$typeUrl === CyclicArbTracker.typeUrl || Array.isArray(o.cyclic_arb) && (!o.cyclic_arb.length || Coin.isSDK(o.cyclic_arb[0])) && typeof o.height_accounting_starts_from === "bigint");
  },
  isAmino(o: any): o is CyclicArbTrackerAmino {
    return o && (o.$typeUrl === CyclicArbTracker.typeUrl || Array.isArray(o.cyclic_arb) && (!o.cyclic_arb.length || Coin.isAmino(o.cyclic_arb[0])) && typeof o.height_accounting_starts_from === "bigint");
  },
  encode(message: CyclicArbTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cyclicArb) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.heightAccountingStartsFrom !== BigInt(0)) {
      writer.uint32(16).int64(message.heightAccountingStartsFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CyclicArbTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCyclicArbTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cyclicArb.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.heightAccountingStartsFrom = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CyclicArbTracker {
    return {
      cyclicArb: Array.isArray(object?.cyclicArb) ? object.cyclicArb.map((e: any) => Coin.fromJSON(e)) : [],
      heightAccountingStartsFrom: isSet(object.heightAccountingStartsFrom) ? BigInt(object.heightAccountingStartsFrom.toString()) : BigInt(0)
    };
  },
  toJSON(message: CyclicArbTracker): unknown {
    const obj: any = {};
    if (message.cyclicArb) {
      obj.cyclicArb = message.cyclicArb.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.cyclicArb = [];
    }
    message.heightAccountingStartsFrom !== undefined && (obj.heightAccountingStartsFrom = (message.heightAccountingStartsFrom || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<CyclicArbTracker>): CyclicArbTracker {
    const message = createBaseCyclicArbTracker();
    message.cyclicArb = object.cyclicArb?.map(e => Coin.fromPartial(e)) || [];
    message.heightAccountingStartsFrom = object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null ? BigInt(object.heightAccountingStartsFrom.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CyclicArbTrackerAmino): CyclicArbTracker {
    const message = createBaseCyclicArbTracker();
    message.cyclicArb = object.cyclic_arb?.map(e => Coin.fromAmino(e)) || [];
    if (object.height_accounting_starts_from !== undefined && object.height_accounting_starts_from !== null) {
      message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
    }
    return message;
  },
  toAmino(message: CyclicArbTracker): CyclicArbTrackerAmino {
    const obj: any = {};
    if (message.cyclicArb) {
      obj.cyclic_arb = message.cyclicArb.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.cyclic_arb = [];
    }
    obj.height_accounting_starts_from = message.heightAccountingStartsFrom ? message.heightAccountingStartsFrom.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CyclicArbTrackerAminoMsg): CyclicArbTracker {
    return CyclicArbTracker.fromAmino(object.value);
  },
  toAminoMsg(message: CyclicArbTracker): CyclicArbTrackerAminoMsg {
    return {
      type: "osmosis/protorev/cyclic-arb-tracker",
      value: CyclicArbTracker.toAmino(message)
    };
  },
  fromProtoMsg(message: CyclicArbTrackerProtoMsg): CyclicArbTracker {
    return CyclicArbTracker.decode(message.value);
  },
  toProto(message: CyclicArbTracker): Uint8Array {
    return CyclicArbTracker.encode(message).finish();
  },
  toProtoMsg(message: CyclicArbTracker): CyclicArbTrackerProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker",
      value: CyclicArbTracker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CyclicArbTracker.typeUrl, CyclicArbTracker);
GlobalDecoderRegistry.registerAminoProtoMapping(CyclicArbTracker.aminoType, CyclicArbTracker.typeUrl);