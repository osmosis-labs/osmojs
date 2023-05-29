import { Tx, TxAmino, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoSDKType, Result, ResultAmino, ResultSDKType } from "../../base/abci/v1beta1/abci";
import * as _m0 from "protobufjs/minimal";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare const OrderBySDKType: typeof OrderBy;
export declare const OrderByAmino: typeof OrderBy;
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare const BroadcastModeSDKType: typeof BroadcastMode;
export declare const BroadcastModeAmino: typeof BroadcastMode;
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
    orderBy: OrderBy;
}
export interface GetTxsEventRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
    value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestAmino {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
    order_by: OrderBy;
}
export interface GetTxsEventRequestAminoMsg {
    type: "cosmos-sdk/GetTxsEventRequest";
    value: GetTxsEventRequestAmino;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestSDKType {
    events: string[];
    pagination?: PageRequestSDKType;
    order_by: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface GetTxsEventResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
    value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseAmino {
    /** txs is the list of queried transactions. */
    txs: TxAmino[];
    /** tx_responses is the list of queried TxResponses. */
    tx_responses: TxResponseAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface GetTxsEventResponseAminoMsg {
    type: "cosmos-sdk/GetTxsEventResponse";
    value: GetTxsEventResponseAmino;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseSDKType {
    txs: TxSDKType[];
    tx_responses: TxResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
    mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
    value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestAmino {
    /** tx_bytes is the raw transaction. */
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
export interface BroadcastTxRequestAminoMsg {
    type: "cosmos-sdk/BroadcastTxRequest";
    value: BroadcastTxRequestAmino;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestSDKType {
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
export interface BroadcastTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
    value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseAmino {
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino;
}
export interface BroadcastTxResponseAminoMsg {
    type: "cosmos-sdk/BroadcastTxResponse";
    value: BroadcastTxResponseAmino;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseSDKType {
    tx_response?: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
    value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestAmino {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: TxAmino;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    tx_bytes: Uint8Array;
}
export interface SimulateRequestAminoMsg {
    type: "cosmos-sdk/SimulateRequest";
    value: SimulateRequestAmino;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestSDKType {
    /** @deprecated */
    tx?: TxSDKType;
    tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo?: GasInfo;
    /** result is the result of the simulation. */
    result?: Result;
}
export interface SimulateResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
    value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseAmino {
    /** gas_info is the information about gas used in the simulation. */
    gas_info?: GasInfoAmino;
    /** result is the result of the simulation. */
    result?: ResultAmino;
}
export interface SimulateResponseAminoMsg {
    type: "cosmos-sdk/SimulateResponse";
    value: SimulateResponseAmino;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseSDKType {
    gas_info?: GasInfoSDKType;
    result?: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
export interface GetTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
    value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestAmino {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
export interface GetTxRequestAminoMsg {
    type: "cosmos-sdk/GetTxRequest";
    value: GetTxRequestAmino;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestSDKType {
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx?: Tx;
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
export interface GetTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
    value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseAmino {
    /** tx is the queried transaction. */
    tx?: TxAmino;
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino;
}
export interface GetTxResponseAminoMsg {
    type: "cosmos-sdk/GetTxResponse";
    value: GetTxResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
    tx?: TxSDKType;
    tx_response?: TxResponseSDKType;
}
export declare const GetTxsEventRequest: {
    typeUrl: string;
    encode(message: GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest;
    fromPartial(object: Partial<GetTxsEventRequest>): GetTxsEventRequest;
    fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest;
    toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino;
    fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest;
    toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg;
    fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest;
    toProto(message: GetTxsEventRequest): Uint8Array;
    toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg;
};
export declare const GetTxsEventResponse: {
    typeUrl: string;
    encode(message: GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse;
    fromPartial(object: Partial<GetTxsEventResponse>): GetTxsEventResponse;
    fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse;
    toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino;
    fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse;
    toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg;
    fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse;
    toProto(message: GetTxsEventResponse): Uint8Array;
    toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg;
};
export declare const BroadcastTxRequest: {
    typeUrl: string;
    encode(message: BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest;
    fromPartial(object: Partial<BroadcastTxRequest>): BroadcastTxRequest;
    fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest;
    toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino;
    fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest;
    toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg;
    fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest;
    toProto(message: BroadcastTxRequest): Uint8Array;
    toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg;
};
export declare const BroadcastTxResponse: {
    typeUrl: string;
    encode(message: BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse;
    fromPartial(object: Partial<BroadcastTxResponse>): BroadcastTxResponse;
    fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse;
    toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino;
    fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse;
    toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg;
    fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse;
    toProto(message: BroadcastTxResponse): Uint8Array;
    toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg;
};
export declare const SimulateRequest: {
    typeUrl: string;
    encode(message: SimulateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest;
    fromPartial(object: Partial<SimulateRequest>): SimulateRequest;
    fromAmino(object: SimulateRequestAmino): SimulateRequest;
    toAmino(message: SimulateRequest): SimulateRequestAmino;
    fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest;
    toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg;
    fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest;
    toProto(message: SimulateRequest): Uint8Array;
    toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg;
};
export declare const SimulateResponse: {
    typeUrl: string;
    encode(message: SimulateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse;
    fromPartial(object: Partial<SimulateResponse>): SimulateResponse;
    fromAmino(object: SimulateResponseAmino): SimulateResponse;
    toAmino(message: SimulateResponse): SimulateResponseAmino;
    fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse;
    toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg;
    fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse;
    toProto(message: SimulateResponse): Uint8Array;
    toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg;
};
export declare const GetTxRequest: {
    typeUrl: string;
    encode(message: GetTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest;
    fromPartial(object: Partial<GetTxRequest>): GetTxRequest;
    fromAmino(object: GetTxRequestAmino): GetTxRequest;
    toAmino(message: GetTxRequest): GetTxRequestAmino;
    fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest;
    toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg;
    fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest;
    toProto(message: GetTxRequest): Uint8Array;
    toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg;
};
export declare const GetTxResponse: {
    typeUrl: string;
    encode(message: GetTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse;
    fromPartial(object: Partial<GetTxResponse>): GetTxResponse;
    fromAmino(object: GetTxResponseAmino): GetTxResponse;
    toAmino(message: GetTxResponse): GetTxResponseAmino;
    fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse;
    toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg;
    fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse;
    toProto(message: GetTxResponse): Uint8Array;
    toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg;
};
