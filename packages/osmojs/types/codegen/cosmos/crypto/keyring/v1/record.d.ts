import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsAmino, BIP44ParamsSDKType } from "../../hd/v1/hd";
import * as _m0 from "protobufjs/minimal";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey?: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger;
    /** Multi does not store any information. */
    multi?: Record_Multi;
    /** Offline does not store any information. */
    offline?: Record_Offline;
}
export interface RecordProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Record";
    value: Uint8Array;
}
/** Record is used for representing a key in the keyring. */
export interface RecordAmino {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pub_key?: AnyAmino;
    /** local stores the public information about a locally stored key */
    local?: Record_LocalAmino;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_LedgerAmino;
    /** Multi does not store any information. */
    multi?: Record_MultiAmino;
    /** Offline does not store any information. */
    offline?: Record_OfflineAmino;
}
export interface RecordAminoMsg {
    type: "cosmos-sdk/Record";
    value: RecordAmino;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
    name: string;
    pub_key?: AnySDKType;
    local?: Record_LocalSDKType;
    ledger?: Record_LedgerSDKType;
    multi?: Record_MultiSDKType;
    offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey?: Any;
    privKeyType: string;
}
export interface Record_LocalProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Local";
    value: Uint8Array;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalAmino {
    priv_key?: AnyAmino;
    priv_key_type: string;
}
export interface Record_LocalAminoMsg {
    type: "cosmos-sdk/Local";
    value: Record_LocalAmino;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
    priv_key?: AnySDKType;
    priv_key_type: string;
}
/** Ledger item */
export interface Record_Ledger {
    path?: BIP44Params;
}
export interface Record_LedgerProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger";
    value: Uint8Array;
}
/** Ledger item */
export interface Record_LedgerAmino {
    path?: BIP44ParamsAmino;
}
export interface Record_LedgerAminoMsg {
    type: "cosmos-sdk/Ledger";
    value: Record_LedgerAmino;
}
/** Ledger item */
export interface Record_LedgerSDKType {
    path?: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {
}
export interface Record_MultiProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi";
    value: Uint8Array;
}
/** Multi item */
export interface Record_MultiAmino {
}
export interface Record_MultiAminoMsg {
    type: "cosmos-sdk/Multi";
    value: Record_MultiAmino;
}
/** Multi item */
export interface Record_MultiSDKType {
}
/** Offline item */
export interface Record_Offline {
}
export interface Record_OfflineProtoMsg {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline";
    value: Uint8Array;
}
/** Offline item */
export interface Record_OfflineAmino {
}
export interface Record_OfflineAminoMsg {
    type: "cosmos-sdk/Offline";
    value: Record_OfflineAmino;
}
/** Offline item */
export interface Record_OfflineSDKType {
}
export declare const Record: {
    typeUrl: string;
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromPartial(object: Partial<Record>): Record;
    fromAmino(object: RecordAmino): Record;
    toAmino(message: Record): RecordAmino;
    fromAminoMsg(object: RecordAminoMsg): Record;
    toAminoMsg(message: Record): RecordAminoMsg;
    fromProtoMsg(message: RecordProtoMsg): Record;
    toProto(message: Record): Uint8Array;
    toProtoMsg(message: Record): RecordProtoMsg;
};
export declare const Record_Local: {
    typeUrl: string;
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromPartial(object: Partial<Record_Local>): Record_Local;
    fromAmino(object: Record_LocalAmino): Record_Local;
    toAmino(message: Record_Local): Record_LocalAmino;
    fromAminoMsg(object: Record_LocalAminoMsg): Record_Local;
    toAminoMsg(message: Record_Local): Record_LocalAminoMsg;
    fromProtoMsg(message: Record_LocalProtoMsg): Record_Local;
    toProto(message: Record_Local): Uint8Array;
    toProtoMsg(message: Record_Local): Record_LocalProtoMsg;
};
export declare const Record_Ledger: {
    typeUrl: string;
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromPartial(object: Partial<Record_Ledger>): Record_Ledger;
    fromAmino(object: Record_LedgerAmino): Record_Ledger;
    toAmino(message: Record_Ledger): Record_LedgerAmino;
    fromAminoMsg(object: Record_LedgerAminoMsg): Record_Ledger;
    toAminoMsg(message: Record_Ledger): Record_LedgerAminoMsg;
    fromProtoMsg(message: Record_LedgerProtoMsg): Record_Ledger;
    toProto(message: Record_Ledger): Uint8Array;
    toProtoMsg(message: Record_Ledger): Record_LedgerProtoMsg;
};
export declare const Record_Multi: {
    typeUrl: string;
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromPartial(_: Partial<Record_Multi>): Record_Multi;
    fromAmino(_: Record_MultiAmino): Record_Multi;
    toAmino(_: Record_Multi): Record_MultiAmino;
    fromAminoMsg(object: Record_MultiAminoMsg): Record_Multi;
    toAminoMsg(message: Record_Multi): Record_MultiAminoMsg;
    fromProtoMsg(message: Record_MultiProtoMsg): Record_Multi;
    toProto(message: Record_Multi): Uint8Array;
    toProtoMsg(message: Record_Multi): Record_MultiProtoMsg;
};
export declare const Record_Offline: {
    typeUrl: string;
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromPartial(_: Partial<Record_Offline>): Record_Offline;
    fromAmino(_: Record_OfflineAmino): Record_Offline;
    toAmino(_: Record_Offline): Record_OfflineAmino;
    fromAminoMsg(object: Record_OfflineAminoMsg): Record_Offline;
    toAminoMsg(message: Record_Offline): Record_OfflineAminoMsg;
    fromProtoMsg(message: Record_OfflineProtoMsg): Record_Offline;
    toProto(message: Record_Offline): Uint8Array;
    toProtoMsg(message: Record_Offline): Record_OfflineProtoMsg;
};
