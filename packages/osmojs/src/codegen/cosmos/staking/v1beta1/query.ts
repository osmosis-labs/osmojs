import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the the validator info. */
  validator: Validator;
}

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegation_responses: DelegationResponse[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbonding_responses: UnbondingDelegation[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response: DelegationResponse;
}

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation;
}

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses: DelegationResponse[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbonding_responses: UnbondingDelegation[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** src_validator_addr defines the validator address to redelegate from. */
  src_validator_addr: string;

  /** dst_validator_addr defines the validator address to redelegate to. */
  dst_validator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegation_responses: RedelegationResponse[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the the validators' info of a delegator. */
  validators: Validator[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;

  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the the validator info. */
  validator: Validator;
}

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: Long;
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist: HistoricalInfo;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

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

  fromJSON(object: any): QueryValidatorsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validator_addr: ""
  };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorRequest {
    return {
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validator_addr = object.validator_addr ?? "";
    return message;
  }

};

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }

};

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validator_addr: "",
    pagination: undefined
  };
}

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;

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

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    return {
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validator_addr = object.validator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegation_responses: [],
    pagination: undefined
  };
}

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegation_responses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    return {
      delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};

    if (message.delegation_responses) {
      obj.delegation_responses = message.delegation_responses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegation_responses = object.delegation_responses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validator_addr: "",
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;

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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validator_addr = object.validator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbonding_responses: [],
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbonding_responses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};

    if (message.unbonding_responses) {
      obj.unbonding_responses = message.unbonding_responses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbonding_responses = object.unbonding_responses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

        case 2:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.validator_addr = object.validator_addr ?? "";
    return message;
  }

};

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegation_response: undefined
  };
}

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation_response !== undefined) {
      DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegation_response = DelegationResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    return {
      delegation_response: isSet(object.delegation_response) ? DelegationResponse.fromJSON(object.delegation_response) : undefined
    };
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegation_response !== undefined && (obj.delegation_response = message.delegation_response ? DelegationResponse.toJSON(message.delegation_response) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegation_response = object.delegation_response !== undefined && object.delegation_response !== null ? DelegationResponse.fromPartial(object.delegation_response) : undefined;
    return message;
  }

};

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

        case 2:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.validator_addr = object.validator_addr ?? "";
    return message;
  }

};

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: undefined
  };
}

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    return {
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined
    };
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegator_addr: "",
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

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

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegation_responses: [],
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegation_responses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    return {
      delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};

    if (message.delegation_responses) {
      obj.delegation_responses = message.delegation_responses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegation_responses = object.delegation_responses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegator_addr: "",
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbonding_responses: [],
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbonding_responses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};

    if (message.unbonding_responses) {
      obj.unbonding_responses = message.unbonding_responses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbonding_responses = object.unbonding_responses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegator_addr: "",
    src_validator_addr: "",
    dst_validator_addr: "",
    pagination: undefined
  };
}

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.src_validator_addr !== "") {
      writer.uint32(18).string(message.src_validator_addr);
    }

    if (message.dst_validator_addr !== "") {
      writer.uint32(26).string(message.dst_validator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

        case 2:
          message.src_validator_addr = reader.string();
          break;

        case 3:
          message.dst_validator_addr = reader.string();
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

  fromJSON(object: any): QueryRedelegationsRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      src_validator_addr: isSet(object.src_validator_addr) ? String(object.src_validator_addr) : "",
      dst_validator_addr: isSet(object.dst_validator_addr) ? String(object.dst_validator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.src_validator_addr !== undefined && (obj.src_validator_addr = message.src_validator_addr);
    message.dst_validator_addr !== undefined && (obj.dst_validator_addr = message.dst_validator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.src_validator_addr = object.src_validator_addr ?? "";
    message.dst_validator_addr = object.dst_validator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegation_responses: [],
    pagination: undefined
  };
}

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegation_responses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redelegation_responses.push(RedelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRedelegationsResponse {
    return {
      redelegation_responses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e: any) => RedelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};

    if (message.redelegation_responses) {
      obj.redelegation_responses = message.redelegation_responses.map(e => e ? RedelegationResponse.toJSON(e) : undefined);
    } else {
      obj.redelegation_responses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegation_responses = object.redelegation_responses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegator_addr: "",
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.delegator_addr = reader.string();
          break;

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

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegator_addr: "",
    validator_addr: ""
  };
}

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_addr !== "") {
      writer.uint32(10).string(message.delegator_addr);
    }

    if (message.validator_addr !== "") {
      writer.uint32(18).string(message.validator_addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_addr = reader.string();
          break;

        case 2:
          message.validator_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    return {
      delegator_addr: isSet(object.delegator_addr) ? String(object.delegator_addr) : "",
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegator_addr = object.delegator_addr ?? "";
    message.validator_addr = object.validator_addr ?? "";
    return message;
  }

};

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }

};

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: Long.ZERO
  };
}

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    return {
      hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined
    };
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  }

};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();

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

  fromJSON(_: any): QueryPoolRequest {
    return {};
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
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
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
          message.pool = Pool.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
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