import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
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
/** =============================== ModuleParams */
export interface QueryParamsRequest {
}
/** =============================== ModuleParams */
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
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
