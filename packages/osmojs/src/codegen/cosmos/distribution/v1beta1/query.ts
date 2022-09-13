import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validator_address: string;
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards;
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validator_address: string;
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission: ValidatorAccumulatedCommission;
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validator_address: string;

  /** starting_height defines the optional starting height to query the slashes. */
  starting_height: Long;

  /** starting_height defines the optional ending height to query the slashes. */
  ending_height: Long;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegator_address: string;

  /** validator_address defines the validator address to query for. */
  validator_address: string;
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegator_address: string;
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];

  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegator_address: string;
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegator_address: string;
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address: string;
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

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

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validator_address: ""
  };
}

export const QueryValidatorOutstandingRewardsRequest = {
  encode(message: QueryValidatorOutstandingRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validator_address = object.validator_address ?? "";
    return message;
  }

};

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: undefined
  };
}

export const QueryValidatorOutstandingRewardsResponse = {
  encode(message: QueryValidatorOutstandingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    return {
      rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  }

};

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validator_address: ""
  };
}

export const QueryValidatorCommissionRequest = {
  encode(message: QueryValidatorCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionRequest {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },

  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validator_address = object.validator_address ?? "";
    return message;
  }

};

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: undefined
  };
}

export const QueryValidatorCommissionResponse = {
  encode(message: QueryValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionResponse {
    return {
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
    };
  },

  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
    return message;
  }

};

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validator_address: "",
    starting_height: Long.UZERO,
    ending_height: Long.UZERO,
    pagination: undefined
  };
}

export const QueryValidatorSlashesRequest = {
  encode(message: QueryValidatorSlashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }

    if (!message.starting_height.isZero()) {
      writer.uint32(16).uint64(message.starting_height);
    }

    if (!message.ending_height.isZero()) {
      writer.uint32(24).uint64(message.ending_height);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;

        case 2:
          message.starting_height = (reader.uint64() as Long);
          break;

        case 3:
          message.ending_height = (reader.uint64() as Long);
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorSlashesRequest {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_height: isSet(object.starting_height) ? Long.fromString(object.starting_height) : Long.UZERO,
      ending_height: isSet(object.ending_height) ? Long.fromString(object.ending_height) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.starting_height !== undefined && (obj.starting_height = (message.starting_height || Long.UZERO).toString());
    message.ending_height !== undefined && (obj.ending_height = (message.ending_height || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validator_address = object.validator_address ?? "";
    message.starting_height = object.starting_height !== undefined && object.starting_height !== null ? Long.fromValue(object.starting_height) : Long.UZERO;
    message.ending_height = object.ending_height !== undefined && object.ending_height !== null ? Long.fromValue(object.ending_height) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined
  };
}

export const QueryValidatorSlashesResponse = {
  encode(message: QueryValidatorSlashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorSlashesResponse {
    return {
      slashes: Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};

    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.slashes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegator_address: "",
    validator_address: ""
  };
}

export const QueryDelegationRewardsRequest = {
  encode(message: QueryDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },

  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  }

};

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: []
  };
}

export const QueryDelegationRewardsResponse = {
  encode(message: QueryDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegator_address: ""
  };
}

export const QueryDelegationTotalRewardsRequest = {
  encode(message: QueryDelegationTotalRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },

  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  }

};

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: []
  };
}

export const QueryDelegationTotalRewardsResponse = {
  encode(message: QueryDelegationTotalRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;

        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }

    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegator_address: ""
  };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  }

};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: []
  };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegator_address: ""
  };
}

export const QueryDelegatorWithdrawAddressRequest = {
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },

  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  }

};

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdraw_address: ""
  };
}

export const QueryDelegatorWithdrawAddressResponse = {
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdraw_address !== "") {
      writer.uint32(10).string(message.withdraw_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdraw_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return {
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },

  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdraw_address = object.withdraw_address ?? "";
    return message;
  }

};

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}

export const QueryCommunityPoolRequest = {
  encode(_: QueryCommunityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();

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

  fromJSON(_: any): QueryCommunityPoolRequest {
    return {};
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  }

};

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: []
  };
}

export const QueryCommunityPoolResponse = {
  encode(message: QueryCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};

    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};