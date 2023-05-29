import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    $typeUrl?: string;
    address: string;
    pubKey?: Any;
    accountNumber: Long;
    sequence: Long;
}
export interface BaseAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount";
    value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountAmino {
    address: string;
    pub_key?: AnyAmino;
    account_number: string;
    sequence: string;
}
export interface BaseAccountAminoMsg {
    type: "cosmos-sdk/BaseAccount";
    value: BaseAccountAmino;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountSDKType {
    $typeUrl?: string;
    address: string;
    pub_key?: AnySDKType;
    account_number: Long;
    sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    $typeUrl?: string;
    baseAccount?: BaseAccount;
    name: string;
    permissions: string[];
}
export interface ModuleAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount";
    value: Uint8Array;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountAmino {
    base_account?: BaseAccountAmino;
    name: string;
    permissions: string[];
}
export interface ModuleAccountAminoMsg {
    type: "cosmos-sdk/ModuleAccount";
    value: ModuleAccountAmino;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountSDKType {
    $typeUrl?: string;
    base_account?: BaseAccountSDKType;
    name: string;
    permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: Long;
    txSigLimit: Long;
    txSizeCostPerByte: Long;
    sigVerifyCostEd25519: Long;
    sigVerifyCostSecp256k1: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the auth module. */
export interface ParamsAmino {
    max_memo_characters: string;
    tx_sig_limit: string;
    tx_size_cost_per_byte: string;
    sig_verify_cost_ed25519: string;
    sig_verify_cost_secp256k1: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/auth/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the auth module. */
export interface ParamsSDKType {
    max_memo_characters: Long;
    tx_sig_limit: Long;
    tx_size_cost_per_byte: Long;
    sig_verify_cost_ed25519: Long;
    sig_verify_cost_secp256k1: Long;
}
export declare const BaseAccount: {
    typeUrl: string;
    encode(message: BaseAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount;
    fromPartial(object: Partial<BaseAccount>): BaseAccount;
    fromAmino(object: BaseAccountAmino): BaseAccount;
    toAmino(message: BaseAccount): BaseAccountAmino;
    fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount;
    toAminoMsg(message: BaseAccount): BaseAccountAminoMsg;
    fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount;
    toProto(message: BaseAccount): Uint8Array;
    toProtoMsg(message: BaseAccount): BaseAccountProtoMsg;
};
export declare const ModuleAccount: {
    typeUrl: string;
    encode(message: ModuleAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount;
    fromPartial(object: Partial<ModuleAccount>): ModuleAccount;
    fromAmino(object: ModuleAccountAmino): ModuleAccount;
    toAmino(message: ModuleAccount): ModuleAccountAmino;
    fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount;
    toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg;
    fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount;
    toProto(message: ModuleAccount): Uint8Array;
    toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
