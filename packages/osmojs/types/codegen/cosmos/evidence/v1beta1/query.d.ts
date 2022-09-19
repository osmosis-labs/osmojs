import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
    /** evidence_hash defines the hash of the requested evidence. */
    evidenceHash: Uint8Array;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestSDKType {
    /** evidence_hash defines the hash of the requested evidence. */
    evidence_hash: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
    /** evidence returns the requested evidence. */
    evidence: Any;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseSDKType {
    /** evidence returns the requested evidence. */
    evidence: AnySDKType;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
    /** evidence returns all evidences. */
    evidence: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseSDKType {
    /** evidence returns all evidences. */
    evidence: AnySDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
export declare const QueryEvidenceRequest: {
    encode(message: QueryEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest;
    fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest;
    fromSDK(object: QueryEvidenceRequestSDKType): QueryEvidenceRequest;
    toSDK(message: QueryEvidenceRequest): QueryEvidenceRequestSDKType;
};
export declare const QueryEvidenceResponse: {
    encode(message: QueryEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceResponseSDKType;
    fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse;
    fromSDK(object: QueryEvidenceResponseSDKType): QueryEvidenceResponse;
    toSDK(message: QueryEvidenceResponse): QueryEvidenceResponseSDKType;
};
export declare const QueryAllEvidenceRequest: {
    encode(message: QueryAllEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceRequest;
    fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest;
    fromSDK(object: QueryAllEvidenceRequestSDKType): QueryAllEvidenceRequest;
    toSDK(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestSDKType;
};
export declare const QueryAllEvidenceResponse: {
    encode(message: QueryAllEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceResponseSDKType;
    fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse;
    fromSDK(object: QueryAllEvidenceResponseSDKType): QueryAllEvidenceResponse;
    toSDK(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseSDKType;
};
