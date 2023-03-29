import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== UserPositions */

export interface QueryUserPositionsRequest {
  address: string;
  poolId: Long;
}
/** =============================== UserPositions */

export interface QueryUserPositionsRequestSDKType {
  address: string;
  pool_id: Long;
}
export interface QueryUserPositionsResponse {
  positions: PositionWithUnderlyingAssetBreakdown[];
}
export interface QueryUserPositionsResponseSDKType {
  positions: PositionWithUnderlyingAssetBreakdownSDKType[];
}
/** =============================== PositionById */

export interface QueryPositionByIdRequest {
  positionId: Long;
}
/** =============================== PositionById */

export interface QueryPositionByIdRequestSDKType {
  position_id: Long;
}
export interface QueryPositionByIdResponse {
  position?: PositionWithUnderlyingAssetBreakdown;
}
export interface QueryPositionByIdResponseSDKType {
  position?: PositionWithUnderlyingAssetBreakdownSDKType;
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
/** =============================== ModuleParams */

export interface QueryParamsRequest {}
/** =============================== ModuleParams */

export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** =============================== LiquidityDepthsForRange */

export interface QueryLiquidityDepthsForRangeRequest {
  poolId: Long;
  lowerTick: string;
  upperTick: string;
}
/** =============================== LiquidityDepthsForRange */

export interface QueryLiquidityDepthsForRangeRequestSDKType {
  pool_id: Long;
  lower_tick: string;
  upper_tick: string;
}
export interface QueryLiquidityDepthsForRangeResponse {
  liquidityDepths: LiquidityDepth[];
}
export interface QueryLiquidityDepthsForRangeResponseSDKType {
  liquidity_depths: LiquidityDepthSDKType[];
}
export interface LiquidityDepth {
  liquidityNet: string;
  tickIndex: string;
}
export interface LiquidityDepthSDKType {
  liquidity_net: string;
  tick_index: string;
}
export interface LiquidityDepthWithRange {
  liquidityAmount: string;
  lowerTick: string;
  upperTick: string;
}
export interface LiquidityDepthWithRangeSDKType {
  liquidity_amount: string;
  lower_tick: string;
  upper_tick: string;
}
/** =============================== TickLiquidityInBatches */

export interface QueryTotalLiquidityForRangeRequest {
  poolId: Long;
}
/** =============================== TickLiquidityInBatches */

export interface QueryTotalLiquidityForRangeRequestSDKType {
  pool_id: Long;
}
export interface QueryTotalLiquidityForRangeResponse {
  liquidity: LiquidityDepthWithRange[];
}
export interface QueryTotalLiquidityForRangeResponseSDKType {
  liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== MsgQueryClaimableFees */

export interface QueryClaimableFeesRequest {
  positionId: Long;
}
/** ===================== MsgQueryClaimableFees */

export interface QueryClaimableFeesRequestSDKType {
  position_id: Long;
}
export interface QueryClaimableFeesResponse {
  claimableFees: Coin[];
}
export interface QueryClaimableFeesResponseSDKType {
  claimable_fees: CoinSDKType[];
}

function createBaseQueryUserPositionsRequest(): QueryUserPositionsRequest {
  return {
    address: "",
    poolId: Long.UZERO
  };
}

export const QueryUserPositionsRequest = {
  encode(message: QueryUserPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPositionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryUserPositionsRequest>): QueryUserPositionsRequest {
    const message = createBaseQueryUserPositionsRequest();
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryUserPositionsResponse(): QueryUserPositionsResponse {
  return {
    positions: []
  };
}

export const QueryUserPositionsResponse = {
  encode(message: QueryUserPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      PositionWithUnderlyingAssetBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPositionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.positions.push(PositionWithUnderlyingAssetBreakdown.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryUserPositionsResponse>): QueryUserPositionsResponse {
    const message = createBaseQueryUserPositionsResponse();
    message.positions = object.positions?.map(e => PositionWithUnderlyingAssetBreakdown.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryPositionByIdRequest(): QueryPositionByIdRequest {
  return {
    positionId: Long.UZERO
  };
}

export const QueryPositionByIdRequest = {
  encode(message: QueryPositionByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.positionId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPositionByIdRequest>): QueryPositionByIdRequest {
    const message = createBaseQueryPositionByIdRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPositionByIdResponse(): QueryPositionByIdResponse {
  return {
    position: undefined
  };
}

export const QueryPositionByIdResponse = {
  encode(message: QueryPositionByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      PositionWithUnderlyingAssetBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionByIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.position = PositionWithUnderlyingAssetBreakdown.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryPositionByIdResponse>): QueryPositionByIdResponse {
    const message = createBaseQueryPositionByIdResponse();
    message.position = object.position !== undefined && object.position !== null ? PositionWithUnderlyingAssetBreakdown.fromPartial(object.position) : undefined;
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryLiquidityDepthsForRangeRequest(): QueryLiquidityDepthsForRangeRequest {
  return {
    poolId: Long.UZERO,
    lowerTick: "",
    upperTick: ""
  };
}

export const QueryLiquidityDepthsForRangeRequest = {
  encode(message: QueryLiquidityDepthsForRangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.lowerTick !== "") {
      writer.uint32(18).string(message.lowerTick);
    }

    if (message.upperTick !== "") {
      writer.uint32(26).string(message.upperTick);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityDepthsForRangeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityDepthsForRangeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.lowerTick = reader.string();
          break;

        case 3:
          message.upperTick = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryLiquidityDepthsForRangeRequest>): QueryLiquidityDepthsForRangeRequest {
    const message = createBaseQueryLiquidityDepthsForRangeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lowerTick = object.lowerTick ?? "";
    message.upperTick = object.upperTick ?? "";
    return message;
  }

};

function createBaseQueryLiquidityDepthsForRangeResponse(): QueryLiquidityDepthsForRangeResponse {
  return {
    liquidityDepths: []
  };
}

export const QueryLiquidityDepthsForRangeResponse = {
  encode(message: QueryLiquidityDepthsForRangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityDepths) {
      LiquidityDepth.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityDepthsForRangeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityDepthsForRangeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(LiquidityDepth.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryLiquidityDepthsForRangeResponse>): QueryLiquidityDepthsForRangeResponse {
    const message = createBaseQueryLiquidityDepthsForRangeResponse();
    message.liquidityDepths = object.liquidityDepths?.map(e => LiquidityDepth.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLiquidityDepth(): LiquidityDepth {
  return {
    liquidityNet: "",
    tickIndex: ""
  };
}

export const LiquidityDepth = {
  encode(message: LiquidityDepth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityNet !== "") {
      writer.uint32(10).string(message.liquidityNet);
    }

    if (message.tickIndex !== "") {
      writer.uint32(18).string(message.tickIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityDepth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityNet = reader.string();
          break;

        case 2:
          message.tickIndex = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<LiquidityDepth>): LiquidityDepth {
    const message = createBaseLiquidityDepth();
    message.liquidityNet = object.liquidityNet ?? "";
    message.tickIndex = object.tickIndex ?? "";
    return message;
  }

};

function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: "",
    lowerTick: "",
    upperTick: ""
  };
}

export const LiquidityDepthWithRange = {
  encode(message: LiquidityDepthWithRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityAmount !== "") {
      writer.uint32(10).string(message.liquidityAmount);
    }

    if (message.lowerTick !== "") {
      writer.uint32(18).string(message.lowerTick);
    }

    if (message.upperTick !== "") {
      writer.uint32(26).string(message.upperTick);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityDepthWithRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepthWithRange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityAmount = reader.string();
          break;

        case 2:
          message.lowerTick = reader.string();
          break;

        case 3:
          message.upperTick = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? "";
    message.lowerTick = object.lowerTick ?? "";
    message.upperTick = object.upperTick ?? "";
    return message;
  }

};

function createBaseQueryTotalLiquidityForRangeRequest(): QueryTotalLiquidityForRangeRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryTotalLiquidityForRangeRequest = {
  encode(message: QueryTotalLiquidityForRangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityForRangeRequest();

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

  fromPartial(object: Partial<QueryTotalLiquidityForRangeRequest>): QueryTotalLiquidityForRangeRequest {
    const message = createBaseQueryTotalLiquidityForRangeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTotalLiquidityForRangeResponse(): QueryTotalLiquidityForRangeResponse {
  return {
    liquidity: []
  };
}

export const QueryTotalLiquidityForRangeResponse = {
  encode(message: QueryTotalLiquidityForRangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityForRangeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityForRangeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(LiquidityDepthWithRange.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryTotalLiquidityForRangeResponse>): QueryTotalLiquidityForRangeResponse {
    const message = createBaseQueryTotalLiquidityForRangeResponse();
    message.liquidity = object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryClaimableFeesRequest(): QueryClaimableFeesRequest {
  return {
    positionId: Long.UZERO
  };
}

export const QueryClaimableFeesRequest = {
  encode(message: QueryClaimableFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableFeesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.positionId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryClaimableFeesRequest>): QueryClaimableFeesRequest {
    const message = createBaseQueryClaimableFeesRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryClaimableFeesResponse(): QueryClaimableFeesResponse {
  return {
    claimableFees: []
  };
}

export const QueryClaimableFeesResponse = {
  encode(message: QueryClaimableFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimableFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableFeesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimableFees.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryClaimableFeesResponse>): QueryClaimableFeesResponse {
    const message = createBaseQueryClaimableFeesResponse();
    message.claimableFees = object.claimableFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};