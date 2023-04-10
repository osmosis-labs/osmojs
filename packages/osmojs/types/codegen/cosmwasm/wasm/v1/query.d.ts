import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelSDKType, AccessConfig, AccessConfigAmino, AccessConfigSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
    /** address is the address of the contract to query */
    address: string;
}
export interface QueryContractInfoRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
    value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
    /** address is the address of the contract to query */
    address: string;
}
export interface QueryContractInfoRequestAminoMsg {
    type: "wasm/QueryContractInfoRequest";
    value: QueryContractInfoRequestAmino;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
    address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
    /** address is the address of the contract */
    address: string;
    contractInfo?: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
    value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
    /** address is the address of the contract */
    address: string;
    contract_info?: ContractInfoAmino;
}
export interface QueryContractInfoResponseAminoMsg {
    type: "wasm/QueryContractInfoResponse";
    value: QueryContractInfoResponseAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
    address: string;
    contract_info?: ContractInfoSDKType;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryContractHistoryRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
    value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryContractHistoryRequestAminoMsg {
    type: "wasm/QueryContractHistoryRequest";
    value: QueryContractHistoryRequestAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
    entries: ContractCodeHistoryEntry[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryContractHistoryResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
    value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
    entries: ContractCodeHistoryEntryAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryContractHistoryResponseAminoMsg {
    type: "wasm/QueryContractHistoryResponse";
    value: QueryContractHistoryResponseAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
    entries: ContractCodeHistoryEntrySDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    codeId: Long;
    pagination?: PageRequest;
}
export interface QueryContractsByCodeRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
    value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    code_id: string;
    pagination?: PageRequestAmino;
}
export interface QueryContractsByCodeRequestAminoMsg {
    type: "wasm/QueryContractsByCodeRequest";
    value: QueryContractsByCodeRequestAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
    code_id: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryContractsByCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
    value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryContractsByCodeResponseAminoMsg {
    type: "wasm/QueryContractsByCodeResponse";
    value: QueryContractsByCodeResponseAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
    contracts: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryAllContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
    value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllContractStateRequestAminoMsg {
    type: "wasm/QueryAllContractStateRequest";
    value: QueryAllContractStateRequestAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
    models: Model[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAllContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
    value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
    models: ModelAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllContractStateResponseAminoMsg {
    type: "wasm/QueryAllContractStateResponse";
    value: QueryAllContractStateResponseAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
    models: ModelSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
    /** address is the address of the contract */
    address: string;
    queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
    value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    query_data: Uint8Array;
}
export interface QueryRawContractStateRequestAminoMsg {
    type: "wasm/QueryRawContractStateRequest";
    value: QueryRawContractStateRequestAmino;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
    /** Data contains the raw store data */
    data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
    value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
    /** Data contains the raw store data */
    data: Uint8Array;
}
export interface QueryRawContractStateResponseAminoMsg {
    type: "wasm/QueryRawContractStateResponse";
    value: QueryRawContractStateResponseAmino;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
    data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
    value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    query_data: Uint8Array;
}
export interface QuerySmartContractStateRequestAminoMsg {
    type: "wasm/QuerySmartContractStateRequest";
    value: QuerySmartContractStateRequestAmino;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
    value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
export interface QuerySmartContractStateResponseAminoMsg {
    type: "wasm/QuerySmartContractStateResponse";
    value: QuerySmartContractStateResponseAmino;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
    data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: Long;
}
export interface QueryCodeRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
    value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
    /** grpc-gateway_out does not support Go style CodID */
    code_id: string;
}
export interface QueryCodeRequestAminoMsg {
    type: "wasm/QueryCodeRequest";
    value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
    code_id: Long;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
    codeId: Long;
    creator: string;
    dataHash: Uint8Array;
    instantiatePermission?: AccessConfig;
}
export interface CodeInfoResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
    value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
    code_id: string;
    creator: string;
    data_hash: Uint8Array;
    instantiate_permission?: AccessConfigAmino;
}
export interface CodeInfoResponseAminoMsg {
    type: "wasm/CodeInfoResponse";
    value: CodeInfoResponseAmino;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
    code_id: Long;
    creator: string;
    data_hash: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
    codeInfo?: CodeInfoResponse;
    data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
    value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
    code_info?: CodeInfoResponseAmino;
    data: Uint8Array;
}
export interface QueryCodeResponseAminoMsg {
    type: "wasm/QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
    code_info?: CodeInfoResponseSDKType;
    data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryCodesRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
    value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryCodesRequestAminoMsg {
    type: "wasm/QueryCodesRequest";
    value: QueryCodesRequestAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
    value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
    code_infos: CodeInfoResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryCodesResponseAminoMsg {
    type: "wasm/QueryCodesResponse";
    value: QueryCodesResponseAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
    code_infos: CodeInfoResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryPinnedCodesRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
    value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryPinnedCodesRequestAminoMsg {
    type: "wasm/QueryPinnedCodesRequest";
    value: QueryPinnedCodesRequestAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
    codeIds: Long[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPinnedCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
    value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
    code_ids: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPinnedCodesResponseAminoMsg {
    type: "wasm/QueryPinnedCodesResponse";
    value: QueryPinnedCodesResponseAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
    code_ids: Long[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "wasm/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "wasm/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
    /** CreatorAddress is the address of contract creator */
    creatorAddress: string;
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryContractsByCreatorRequestProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
    value: Uint8Array;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestAmino {
    /** CreatorAddress is the address of contract creator */
    creator_address: string;
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryContractsByCreatorRequestAminoMsg {
    type: "wasm/QueryContractsByCreatorRequest";
    value: QueryContractsByCreatorRequestAmino;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestSDKType {
    creator_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
    /** ContractAddresses result set */
    contractAddresses: string[];
    /** Pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryContractsByCreatorResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
    value: Uint8Array;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseAmino {
    /** ContractAddresses result set */
    contract_addresses: string[];
    /** Pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryContractsByCreatorResponseAminoMsg {
    type: "wasm/QueryContractsByCreatorResponse";
    value: QueryContractsByCreatorResponseAmino;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryContractInfoRequest: {
    typeUrl: string;
    encode(message: QueryContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest;
    fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest;
    toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino;
    fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest;
    toAminoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestAminoMsg;
    fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest;
    toProto(message: QueryContractInfoRequest): Uint8Array;
    toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg;
};
export declare const QueryContractInfoResponse: {
    typeUrl: string;
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
    fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse;
    toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino;
    fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse;
    toAminoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseAminoMsg;
    fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse;
    toProto(message: QueryContractInfoResponse): Uint8Array;
    toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg;
};
export declare const QueryContractHistoryRequest: {
    typeUrl: string;
    encode(message: QueryContractHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromPartial(object: Partial<QueryContractHistoryRequest>): QueryContractHistoryRequest;
    fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest;
    toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino;
    fromAminoMsg(object: QueryContractHistoryRequestAminoMsg): QueryContractHistoryRequest;
    toAminoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestAminoMsg;
    fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest;
    toProto(message: QueryContractHistoryRequest): Uint8Array;
    toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg;
};
export declare const QueryContractHistoryResponse: {
    typeUrl: string;
    encode(message: QueryContractHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryResponse;
    fromPartial(object: Partial<QueryContractHistoryResponse>): QueryContractHistoryResponse;
    fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse;
    toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino;
    fromAminoMsg(object: QueryContractHistoryResponseAminoMsg): QueryContractHistoryResponse;
    toAminoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseAminoMsg;
    fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse;
    toProto(message: QueryContractHistoryResponse): Uint8Array;
    toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg;
};
export declare const QueryContractsByCodeRequest: {
    typeUrl: string;
    encode(message: QueryContractsByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
    fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest;
    toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino;
    fromAminoMsg(object: QueryContractsByCodeRequestAminoMsg): QueryContractsByCodeRequest;
    toAminoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAminoMsg;
    fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest;
    toProto(message: QueryContractsByCodeRequest): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg;
};
export declare const QueryContractsByCodeResponse: {
    typeUrl: string;
    encode(message: QueryContractsByCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
    fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse;
    toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino;
    fromAminoMsg(object: QueryContractsByCodeResponseAminoMsg): QueryContractsByCodeResponse;
    toAminoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAminoMsg;
    fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse;
    toProto(message: QueryContractsByCodeResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg;
};
export declare const QueryAllContractStateRequest: {
    typeUrl: string;
    encode(message: QueryAllContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest;
    fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest;
    fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest;
    toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino;
    fromAminoMsg(object: QueryAllContractStateRequestAminoMsg): QueryAllContractStateRequest;
    toAminoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestAminoMsg;
    fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest;
    toProto(message: QueryAllContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg;
};
export declare const QueryAllContractStateResponse: {
    typeUrl: string;
    encode(message: QueryAllContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse;
    fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse;
    fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse;
    toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino;
    fromAminoMsg(object: QueryAllContractStateResponseAminoMsg): QueryAllContractStateResponse;
    toAminoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseAminoMsg;
    fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse;
    toProto(message: QueryAllContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg;
};
export declare const QueryRawContractStateRequest: {
    typeUrl: string;
    encode(message: QueryRawContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest;
    fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest;
    fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest;
    toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino;
    fromAminoMsg(object: QueryRawContractStateRequestAminoMsg): QueryRawContractStateRequest;
    toAminoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestAminoMsg;
    fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest;
    toProto(message: QueryRawContractStateRequest): Uint8Array;
    toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg;
};
export declare const QueryRawContractStateResponse: {
    typeUrl: string;
    encode(message: QueryRawContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse;
    fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse;
    fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse;
    toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino;
    fromAminoMsg(object: QueryRawContractStateResponseAminoMsg): QueryRawContractStateResponse;
    toAminoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseAminoMsg;
    fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse;
    toProto(message: QueryRawContractStateResponse): Uint8Array;
    toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg;
};
export declare const QuerySmartContractStateRequest: {
    typeUrl: string;
    encode(message: QuerySmartContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromPartial(object: Partial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest;
    fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest;
    toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino;
    fromAminoMsg(object: QuerySmartContractStateRequestAminoMsg): QuerySmartContractStateRequest;
    toAminoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAminoMsg;
    fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest;
    toProto(message: QuerySmartContractStateRequest): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg;
};
export declare const QuerySmartContractStateResponse: {
    typeUrl: string;
    encode(message: QuerySmartContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromPartial(object: Partial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse;
    fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse;
    toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino;
    fromAminoMsg(object: QuerySmartContractStateResponseAminoMsg): QuerySmartContractStateResponse;
    toAminoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAminoMsg;
    fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse;
    toProto(message: QuerySmartContractStateResponse): Uint8Array;
    toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
    fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest;
    toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const CodeInfoResponse: {
    typeUrl: string;
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse;
    fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse;
    fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse;
    toAmino(message: CodeInfoResponse): CodeInfoResponseAmino;
    fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse;
    toAminoMsg(message: CodeInfoResponse): CodeInfoResponseAminoMsg;
    fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse;
    toProto(message: CodeInfoResponse): Uint8Array;
    toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryCodesRequest: {
    typeUrl: string;
    encode(message: QueryCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest;
    fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest;
    fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest;
    toAmino(message: QueryCodesRequest): QueryCodesRequestAmino;
    fromAminoMsg(object: QueryCodesRequestAminoMsg): QueryCodesRequest;
    toAminoMsg(message: QueryCodesRequest): QueryCodesRequestAminoMsg;
    fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest;
    toProto(message: QueryCodesRequest): Uint8Array;
    toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg;
};
export declare const QueryCodesResponse: {
    typeUrl: string;
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
    fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse;
    toAmino(message: QueryCodesResponse): QueryCodesResponseAmino;
    fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse;
    toAminoMsg(message: QueryCodesResponse): QueryCodesResponseAminoMsg;
    fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse;
    toProto(message: QueryCodesResponse): Uint8Array;
    toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg;
};
export declare const QueryPinnedCodesRequest: {
    typeUrl: string;
    encode(message: QueryPinnedCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesRequest;
    fromPartial(object: Partial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest;
    fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest;
    toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino;
    fromAminoMsg(object: QueryPinnedCodesRequestAminoMsg): QueryPinnedCodesRequest;
    toAminoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAminoMsg;
    fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest;
    toProto(message: QueryPinnedCodesRequest): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg;
};
export declare const QueryPinnedCodesResponse: {
    typeUrl: string;
    encode(message: QueryPinnedCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesResponse;
    fromPartial(object: Partial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse;
    fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse;
    toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino;
    fromAminoMsg(object: QueryPinnedCodesResponseAminoMsg): QueryPinnedCodesResponse;
    toAminoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAminoMsg;
    fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse;
    toProto(message: QueryPinnedCodesResponse): Uint8Array;
    toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryContractsByCreatorRequest: {
    typeUrl: string;
    encode(message: QueryContractsByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest;
    fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest;
    fromAmino(object: QueryContractsByCreatorRequestAmino): QueryContractsByCreatorRequest;
    toAmino(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAmino;
    fromAminoMsg(object: QueryContractsByCreatorRequestAminoMsg): QueryContractsByCreatorRequest;
    toAminoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAminoMsg;
    fromProtoMsg(message: QueryContractsByCreatorRequestProtoMsg): QueryContractsByCreatorRequest;
    toProto(message: QueryContractsByCreatorRequest): Uint8Array;
    toProtoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestProtoMsg;
};
export declare const QueryContractsByCreatorResponse: {
    typeUrl: string;
    encode(message: QueryContractsByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse;
    fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse;
    fromAmino(object: QueryContractsByCreatorResponseAmino): QueryContractsByCreatorResponse;
    toAmino(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAmino;
    fromAminoMsg(object: QueryContractsByCreatorResponseAminoMsg): QueryContractsByCreatorResponse;
    toAminoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAminoMsg;
    fromProtoMsg(message: QueryContractsByCreatorResponseProtoMsg): QueryContractsByCreatorResponse;
    toProto(message: QueryContractsByCreatorResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseProtoMsg;
};
