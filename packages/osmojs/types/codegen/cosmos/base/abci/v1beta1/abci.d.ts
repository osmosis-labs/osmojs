import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Event, EventAmino, EventSDKType } from "../../../../tendermint/abci/types";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
    /** The block height */
    height: Long;
    /** The transaction hash. */
    txhash: string;
    /** Namespace for the Code */
    codespace: string;
    /** Response code. */
    code: number;
    /** Result bytes, if any. */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    rawLog: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs: ABCIMessageLog[];
    /** Additional information. May be non-deterministic. */
    info: string;
    /** Amount of gas requested for transaction. */
    gasWanted: Long;
    /** Amount of gas consumed by transaction. */
    gasUsed: Long;
    /** The request transaction bytes. */
    tx?: Any;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante handler. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     */
    events: Event[];
}
export interface TxResponseProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse";
    value: Uint8Array;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseAmino {
    /** The block height */
    height: string;
    /** The transaction hash. */
    txhash: string;
    /** Namespace for the Code */
    codespace: string;
    /** Response code. */
    code: number;
    /** Result bytes, if any. */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    raw_log: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs: ABCIMessageLogAmino[];
    /** Additional information. May be non-deterministic. */
    info: string;
    /** Amount of gas requested for transaction. */
    gas_wanted: string;
    /** Amount of gas consumed by transaction. */
    gas_used: string;
    /** The request transaction bytes. */
    tx?: AnyAmino;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante handler. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     */
    events: EventAmino[];
}
export interface TxResponseAminoMsg {
    type: "cosmos-sdk/TxResponse";
    value: TxResponseAmino;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseSDKType {
    height: Long;
    txhash: string;
    codespace: string;
    code: number;
    data: string;
    raw_log: string;
    logs: ABCIMessageLogSDKType[];
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    tx?: AnySDKType;
    timestamp: string;
    events: EventSDKType[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
    msgIndex: number;
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     */
    events: StringEvent[];
}
export interface ABCIMessageLogProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog";
    value: Uint8Array;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogAmino {
    msg_index: number;
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     */
    events: StringEventAmino[];
}
export interface ABCIMessageLogAminoMsg {
    type: "cosmos-sdk/ABCIMessageLog";
    value: ABCIMessageLogAmino;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogSDKType {
    msg_index: number;
    log: string;
    events: StringEventSDKType[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
    type: string;
    attributes: Attribute[];
}
export interface StringEventProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent";
    value: Uint8Array;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventAmino {
    type: string;
    attributes: AttributeAmino[];
}
export interface StringEventAminoMsg {
    type: "cosmos-sdk/StringEvent";
    value: StringEventAmino;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventSDKType {
    type: string;
    attributes: AttributeSDKType[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
    key: string;
    value: string;
}
export interface AttributeProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute";
    value: Uint8Array;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeAmino {
    key: string;
    value: string;
}
export interface AttributeAminoMsg {
    type: "cosmos-sdk/Attribute";
    value: AttributeAmino;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeSDKType {
    key: string;
    value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
    /** GasWanted is the maximum units of work we allow this tx to perform. */
    gasWanted: Long;
    /** GasUsed is the amount of gas actually consumed. */
    gasUsed: Long;
}
export interface GasInfoProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo";
    value: Uint8Array;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoAmino {
    /** GasWanted is the maximum units of work we allow this tx to perform. */
    gas_wanted: string;
    /** GasUsed is the amount of gas actually consumed. */
    gas_used: string;
}
export interface GasInfoAminoMsg {
    type: "cosmos-sdk/GasInfo";
    value: GasInfoAmino;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoSDKType {
    gas_wanted: Long;
    gas_used: Long;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     */
    data: Uint8Array;
    /** Log contains the log information from message or handler execution. */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events: Event[];
}
export interface ResultProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.Result";
    value: Uint8Array;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultAmino {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     */
    data: Uint8Array;
    /** Log contains the log information from message or handler execution. */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events: EventAmino[];
}
export interface ResultAminoMsg {
    type: "cosmos-sdk/Result";
    value: ResultAmino;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultSDKType {
    data: Uint8Array;
    log: string;
    events: EventSDKType[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
    gasInfo?: GasInfo;
    result?: Result;
}
export interface SimulationResponseProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse";
    value: Uint8Array;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseAmino {
    gas_info?: GasInfoAmino;
    result?: ResultAmino;
}
export interface SimulationResponseAminoMsg {
    type: "cosmos-sdk/SimulationResponse";
    value: SimulationResponseAmino;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseSDKType {
    gas_info?: GasInfoSDKType;
    result?: ResultSDKType;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export interface MsgData {
    msgType: string;
    data: Uint8Array;
}
export interface MsgDataProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData";
    value: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export interface MsgDataAmino {
    msg_type: string;
    data: Uint8Array;
}
export interface MsgDataAminoMsg {
    type: "cosmos-sdk/MsgData";
    value: MsgDataAmino;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export interface MsgDataSDKType {
    msg_type: string;
    data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
    data: MsgData[];
}
export interface TxMsgDataProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData";
    value: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataAmino {
    data: MsgDataAmino[];
}
export interface TxMsgDataAminoMsg {
    type: "cosmos-sdk/TxMsgData";
    value: TxMsgDataAmino;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataSDKType {
    data: MsgDataSDKType[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
    /** Count of all txs */
    totalCount: Long;
    /** Count of txs in current page */
    count: Long;
    /** Index of current page, start from 1 */
    pageNumber: Long;
    /** Count of total pages */
    pageTotal: Long;
    /** Max count txs per page */
    limit: Long;
    /** List of txs in current page */
    txs: TxResponse[];
}
export interface SearchTxsResultProtoMsg {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult";
    value: Uint8Array;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultAmino {
    /** Count of all txs */
    total_count: string;
    /** Count of txs in current page */
    count: string;
    /** Index of current page, start from 1 */
    page_number: string;
    /** Count of total pages */
    page_total: string;
    /** Max count txs per page */
    limit: string;
    /** List of txs in current page */
    txs: TxResponseAmino[];
}
export interface SearchTxsResultAminoMsg {
    type: "cosmos-sdk/SearchTxsResult";
    value: SearchTxsResultAmino;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultSDKType {
    total_count: Long;
    count: Long;
    page_number: Long;
    page_total: Long;
    limit: Long;
    txs: TxResponseSDKType[];
}
export declare const TxResponse: {
    typeUrl: string;
    encode(message: TxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse;
    fromPartial(object: Partial<TxResponse>): TxResponse;
    fromAmino(object: TxResponseAmino): TxResponse;
    toAmino(message: TxResponse): TxResponseAmino;
    fromAminoMsg(object: TxResponseAminoMsg): TxResponse;
    toAminoMsg(message: TxResponse): TxResponseAminoMsg;
    fromProtoMsg(message: TxResponseProtoMsg): TxResponse;
    toProto(message: TxResponse): Uint8Array;
    toProtoMsg(message: TxResponse): TxResponseProtoMsg;
};
export declare const ABCIMessageLog: {
    typeUrl: string;
    encode(message: ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog;
    fromPartial(object: Partial<ABCIMessageLog>): ABCIMessageLog;
    fromAmino(object: ABCIMessageLogAmino): ABCIMessageLog;
    toAmino(message: ABCIMessageLog): ABCIMessageLogAmino;
    fromAminoMsg(object: ABCIMessageLogAminoMsg): ABCIMessageLog;
    toAminoMsg(message: ABCIMessageLog): ABCIMessageLogAminoMsg;
    fromProtoMsg(message: ABCIMessageLogProtoMsg): ABCIMessageLog;
    toProto(message: ABCIMessageLog): Uint8Array;
    toProtoMsg(message: ABCIMessageLog): ABCIMessageLogProtoMsg;
};
export declare const StringEvent: {
    typeUrl: string;
    encode(message: StringEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent;
    fromPartial(object: Partial<StringEvent>): StringEvent;
    fromAmino(object: StringEventAmino): StringEvent;
    toAmino(message: StringEvent): StringEventAmino;
    fromAminoMsg(object: StringEventAminoMsg): StringEvent;
    toAminoMsg(message: StringEvent): StringEventAminoMsg;
    fromProtoMsg(message: StringEventProtoMsg): StringEvent;
    toProto(message: StringEvent): Uint8Array;
    toProtoMsg(message: StringEvent): StringEventProtoMsg;
};
export declare const Attribute: {
    typeUrl: string;
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromPartial(object: Partial<Attribute>): Attribute;
    fromAmino(object: AttributeAmino): Attribute;
    toAmino(message: Attribute): AttributeAmino;
    fromAminoMsg(object: AttributeAminoMsg): Attribute;
    toAminoMsg(message: Attribute): AttributeAminoMsg;
    fromProtoMsg(message: AttributeProtoMsg): Attribute;
    toProto(message: Attribute): Uint8Array;
    toProtoMsg(message: Attribute): AttributeProtoMsg;
};
export declare const GasInfo: {
    typeUrl: string;
    encode(message: GasInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo;
    fromPartial(object: Partial<GasInfo>): GasInfo;
    fromAmino(object: GasInfoAmino): GasInfo;
    toAmino(message: GasInfo): GasInfoAmino;
    fromAminoMsg(object: GasInfoAminoMsg): GasInfo;
    toAminoMsg(message: GasInfo): GasInfoAminoMsg;
    fromProtoMsg(message: GasInfoProtoMsg): GasInfo;
    toProto(message: GasInfo): Uint8Array;
    toProtoMsg(message: GasInfo): GasInfoProtoMsg;
};
export declare const Result: {
    typeUrl: string;
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromPartial(object: Partial<Result>): Result;
    fromAmino(object: ResultAmino): Result;
    toAmino(message: Result): ResultAmino;
    fromAminoMsg(object: ResultAminoMsg): Result;
    toAminoMsg(message: Result): ResultAminoMsg;
    fromProtoMsg(message: ResultProtoMsg): Result;
    toProto(message: Result): Uint8Array;
    toProtoMsg(message: Result): ResultProtoMsg;
};
export declare const SimulationResponse: {
    typeUrl: string;
    encode(message: SimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse;
    fromPartial(object: Partial<SimulationResponse>): SimulationResponse;
    fromAmino(object: SimulationResponseAmino): SimulationResponse;
    toAmino(message: SimulationResponse): SimulationResponseAmino;
    fromAminoMsg(object: SimulationResponseAminoMsg): SimulationResponse;
    toAminoMsg(message: SimulationResponse): SimulationResponseAminoMsg;
    fromProtoMsg(message: SimulationResponseProtoMsg): SimulationResponse;
    toProto(message: SimulationResponse): Uint8Array;
    toProtoMsg(message: SimulationResponse): SimulationResponseProtoMsg;
};
export declare const MsgData: {
    typeUrl: string;
    encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgData;
    fromPartial(object: Partial<MsgData>): MsgData;
    fromAmino(object: MsgDataAmino): MsgData;
    toAmino(message: MsgData): MsgDataAmino;
    fromAminoMsg(object: MsgDataAminoMsg): MsgData;
    toAminoMsg(message: MsgData): MsgDataAminoMsg;
    fromProtoMsg(message: MsgDataProtoMsg): MsgData;
    toProto(message: MsgData): Uint8Array;
    toProtoMsg(message: MsgData): MsgDataProtoMsg;
};
export declare const TxMsgData: {
    typeUrl: string;
    encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData;
    fromPartial(object: Partial<TxMsgData>): TxMsgData;
    fromAmino(object: TxMsgDataAmino): TxMsgData;
    toAmino(message: TxMsgData): TxMsgDataAmino;
    fromAminoMsg(object: TxMsgDataAminoMsg): TxMsgData;
    toAminoMsg(message: TxMsgData): TxMsgDataAminoMsg;
    fromProtoMsg(message: TxMsgDataProtoMsg): TxMsgData;
    toProto(message: TxMsgData): Uint8Array;
    toProtoMsg(message: TxMsgData): TxMsgDataProtoMsg;
};
export declare const SearchTxsResult: {
    typeUrl: string;
    encode(message: SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult;
    fromPartial(object: Partial<SearchTxsResult>): SearchTxsResult;
    fromAmino(object: SearchTxsResultAmino): SearchTxsResult;
    toAmino(message: SearchTxsResult): SearchTxsResultAmino;
    fromAminoMsg(object: SearchTxsResultAminoMsg): SearchTxsResult;
    toAminoMsg(message: SearchTxsResult): SearchTxsResultAminoMsg;
    fromProtoMsg(message: SearchTxsResultProtoMsg): SearchTxsResult;
    toProto(message: SearchTxsResult): Uint8Array;
    toProtoMsg(message: SearchTxsResult): SearchTxsResultProtoMsg;
};
