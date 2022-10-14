import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== Pool */

export interface QueryPoolRequest {
  poolId: Long;
}
/** =============================== Pool */

export interface QueryPoolRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolResponse {
  pool?: Any;
}
export interface QueryPoolResponseSDKType {
  pool?: AnySDKType;
}
/** =============================== Pools */

export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** =============================== Pools */

export interface QueryPoolsRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
export interface QueryPoolsResponseSDKType {
  pools: AnySDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** =============================== NumPools */

export interface QueryNumPoolsRequest {}
/** =============================== NumPools */

export interface QueryNumPoolsRequestSDKType {}
export interface QueryNumPoolsResponse {
  numPools: Long;
}
export interface QueryNumPoolsResponseSDKType {
  num_pools: Long;
}
/** =============================== PoolType */

export interface QueryPoolTypeRequest {
  poolId: Long;
}
/** =============================== PoolType */

export interface QueryPoolTypeRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== PoolParams */

export interface QueryPoolParamsRequest {
  poolId: Long;
}
/** =============================== PoolParams */

export interface QueryPoolParamsRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/** =============================== PoolLiquidity */

export interface QueryTotalPoolLiquidityRequest {
  poolId: Long;
}
/** =============================== PoolLiquidity */

export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: Long;
}
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalShares */

export interface QueryTotalSharesRequest {
  poolId: Long;
}
/** =============================== TotalShares */

export interface QueryTotalSharesRequestSDKType {
  pool_id: Long;
}
export interface QueryTotalSharesResponse {
  totalShares?: Coin;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares?: CoinSDKType;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */

export interface QuerySpotPriceRequest {
  poolId: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */

export interface QuerySpotPriceRequestSDKType {
  pool_id: Long;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */

export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */

export interface QuerySpotPriceResponseSDKType {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */

export interface QuerySwapExactAmountInRequest {
  sender: string;
  poolId: Long;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */

export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: Long;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */

export interface QuerySwapExactAmountOutRequest {
  sender: string;
  poolId: Long;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */

export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: Long;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    return message;
  }

};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}

export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}

export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}

export const QueryNumPoolsRequest = {
  encode(_: QueryNumPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();

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

  fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  }

};

function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: Long.UZERO
  };
}

export const QueryNumPoolsResponse = {
  encode(message: QueryNumPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numPools = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? Long.fromValue(object.numPools) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryPoolTypeRequest = {
  encode(message: QueryPoolTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}

export const QueryPoolTypeResponse = {
  encode(message: QueryPoolTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.poolType = object.poolType ?? "";
    return message;
  }

};

function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryPoolParamsRequest = {
  encode(message: QueryPoolParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}

export const QueryPoolParamsResponse = {
  encode(message: QueryPoolParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryTotalPoolLiquidityRequest = {
  encode(message: QueryTotalPoolLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}

export const QueryTotalPoolLiquidityResponse = {
  encode(message: QueryTotalPoolLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryTotalSharesRequest = {
  encode(message: QueryTotalSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: undefined
  };
}

export const QueryTotalSharesResponse = {
  encode(message: QueryTotalSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    return message;
  }

};

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: Long.UZERO,
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}

export const QuerySpotPriceRequest = {
  encode(message: QuerySpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }

    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.baseAssetDenom = reader.string();
          break;

        case 3:
          message.quoteAssetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  }

};

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}

export const QuerySpotPriceResponse = {
  encode(message: QuerySpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  }

};

function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenIn: "",
    routes: []
  };
}

export const QuerySwapExactAmountInRequest = {
  encode(message: QuerySwapExactAmountInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }

    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenIn = reader.string();
          break;

        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}

export const QuerySwapExactAmountInResponse = {
  encode(message: QuerySwapExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  }

};

function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: Long.UZERO,
    routes: [],
    tokenOut: ""
  };
}

export const QuerySwapExactAmountOutRequest = {
  encode(message: QuerySwapExactAmountOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;

        case 4:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}

export const QuerySwapExactAmountOutResponse = {
  encode(message: QuerySwapExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  }

};

function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}

export const QueryTotalLiquidityRequest = {
  encode(_: QueryTotalLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();

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

  fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  }

};

function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}

export const QueryTotalLiquidityResponse = {
  encode(message: QueryTotalLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};