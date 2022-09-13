import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryGaugeIdsRequest {
  pool_id: Long;
}
export interface QueryGaugeIdsResponse {
  gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
  gauge_id: Long;
  duration: Duration;
}
export interface QueryDistrInfoRequest {}
export interface QueryDistrInfoResponse {
  distr_info: DistrInfo;
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsResponse {
  lockable_durations: Duration[];
}
export interface QueryIncentivizedPoolsRequest {}
export interface IncentivizedPool {
  pool_id: Long;
  lockable_duration: Duration;
  gauge_id: Long;
}
export interface QueryIncentivizedPoolsResponse {
  incentivized_pools: IncentivizedPool[];
}
export interface QueryExternalIncentiveGaugesRequest {}
export interface QueryExternalIncentiveGaugesResponse {
  data: Gauge[];
}

function createBaseQueryGaugeIdsRequest(): QueryGaugeIdsRequest {
  return {
    pool_id: Long.UZERO
  };
}

export const QueryGaugeIdsRequest = {
  encode(message: QueryGaugeIdsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool_id.isZero()) {
      writer.uint32(8).uint64(message.pool_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsRequest {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromString(object.pool_id) : Long.UZERO
    };
  },

  toJSON(message: QueryGaugeIdsRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? Long.fromValue(object.pool_id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGaugeIdsResponse(): QueryGaugeIdsResponse {
  return {
    gauge_ids_with_duration: []
  };
}

export const QueryGaugeIdsResponse = {
  encode(message: QueryGaugeIdsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gauge_ids_with_duration) {
      QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gauge_ids_with_duration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsResponse {
    return {
      gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGaugeIdsResponse): unknown {
    const obj: any = {};

    if (message.gauge_ids_with_duration) {
      obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
    } else {
      obj.gauge_ids_with_duration = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gauge_ids_with_duration = object.gauge_ids_with_duration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration(): QueryGaugeIdsResponse_GaugeIdWithDuration {
  return {
    gauge_id: Long.UZERO,
    duration: undefined
  };
}

export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
  encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gauge_id.isZero()) {
      writer.uint32(8).uint64(message.gauge_id);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gauge_id = (reader.uint64() as Long);
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return {
      gauge_id: isSet(object.gauge_id) ? Long.fromString(object.gauge_id) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown {
    const obj: any = {};
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
    message.duration = object.duration ?? undefined;
    return message;
  }

};

function createBaseQueryDistrInfoRequest(): QueryDistrInfoRequest {
  return {};
}

export const QueryDistrInfoRequest = {
  encode(_: QueryDistrInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoRequest();

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

  fromJSON(_: any): QueryDistrInfoRequest {
    return {};
  },

  toJSON(_: QueryDistrInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryDistrInfoRequest>): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  }

};

function createBaseQueryDistrInfoResponse(): QueryDistrInfoResponse {
  return {
    distr_info: undefined
  };
}

export const QueryDistrInfoResponse = {
  encode(message: QueryDistrInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distr_info !== undefined) {
      DistrInfo.encode(message.distr_info, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distr_info = DistrInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDistrInfoResponse {
    return {
      distr_info: isSet(object.distr_info) ? DistrInfo.fromJSON(object.distr_info) : undefined
    };
  },

  toJSON(message: QueryDistrInfoResponse): unknown {
    const obj: any = {};
    message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toJSON(message.distr_info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDistrInfoResponse>): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? DistrInfo.fromPartial(object.distr_info) : undefined;
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}

export const QueryLockableDurationsRequest = {
  encode(_: QueryLockableDurationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();

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

  fromJSON(_: any): QueryLockableDurationsRequest {
    return {};
  },

  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  }

};

function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockable_durations: []
  };
}

export const QueryLockableDurationsResponse = {
  encode(message: QueryLockableDurationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockable_durations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};

    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}

export const QueryIncentivizedPoolsRequest = {
  encode(_: QueryIncentivizedPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsRequest();

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

  fromJSON(_: any): QueryIncentivizedPoolsRequest {
    return {};
  },

  toJSON(_: QueryIncentivizedPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  }

};

function createBaseIncentivizedPool(): IncentivizedPool {
  return {
    pool_id: Long.UZERO,
    lockable_duration: undefined,
    gauge_id: Long.UZERO
  };
}

export const IncentivizedPool = {
  encode(message: IncentivizedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool_id.isZero()) {
      writer.uint32(8).uint64(message.pool_id);
    }

    if (message.lockable_duration !== undefined) {
      Duration.encode(message.lockable_duration, writer.uint32(18).fork()).ldelim();
    }

    if (!message.gauge_id.isZero()) {
      writer.uint32(24).uint64(message.gauge_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool_id = (reader.uint64() as Long);
          break;

        case 2:
          message.lockable_duration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.gauge_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IncentivizedPool {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromString(object.pool_id) : Long.UZERO,
      lockable_duration: isSet(object.lockable_duration) ? Duration.fromJSON(object.lockable_duration) : undefined,
      gauge_id: isSet(object.gauge_id) ? Long.fromString(object.gauge_id) : Long.UZERO
    };
  },

  toJSON(message: IncentivizedPool): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || Long.UZERO).toString());
    message.lockable_duration !== undefined && (obj.lockable_duration = message.lockable_duration);
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<IncentivizedPool>): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? Long.fromValue(object.pool_id) : Long.UZERO;
    message.lockable_duration = object.lockable_duration ?? undefined;
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivized_pools: []
  };
}

export const QueryIncentivizedPoolsResponse = {
  encode(message: QueryIncentivizedPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivized_pools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentivized_pools.push(IncentivizedPool.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentivizedPoolsResponse {
    return {
      incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e: any) => IncentivizedPool.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryIncentivizedPoolsResponse): unknown {
    const obj: any = {};

    if (message.incentivized_pools) {
      obj.incentivized_pools = message.incentivized_pools.map(e => e ? IncentivizedPool.toJSON(e) : undefined);
    } else {
      obj.incentivized_pools = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivized_pools = object.incentivized_pools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryExternalIncentiveGaugesRequest(): QueryExternalIncentiveGaugesRequest {
  return {};
}

export const QueryExternalIncentiveGaugesRequest = {
  encode(_: QueryExternalIncentiveGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesRequest();

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

  fromJSON(_: any): QueryExternalIncentiveGaugesRequest {
    return {};
  },

  toJSON(_: QueryExternalIncentiveGaugesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  }

};

function createBaseQueryExternalIncentiveGaugesResponse(): QueryExternalIncentiveGaugesResponse {
  return {
    data: []
  };
}

export const QueryExternalIncentiveGaugesResponse = {
  encode(message: QueryExternalIncentiveGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryExternalIncentiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryExternalIncentiveGaugesResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  }

};