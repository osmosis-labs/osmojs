import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
    value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeAmino {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiate_permission?: AccessConfigAmino;
}
export interface MsgStoreCodeAminoMsg {
    type: "wasm/MsgStoreCode";
    value: MsgStoreCodeAmino;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
    sender: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseAminoMsg {
    type: "wasm/MsgStoreCodeResponse";
    value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    code_id: bigint;
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
    type: "wasm/MsgInstantiateContract";
    value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
export interface MsgInstantiateContract2ProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2Amino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fix_msg: boolean;
}
export interface MsgInstantiateContract2AminoMsg {
    type: "wasm/MsgInstantiateContract2";
    value: MsgInstantiateContract2Amino;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    salt: Uint8Array;
    fix_msg: boolean;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
    value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
    type: "wasm/MsgInstantiateContractResponse";
    value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
    address: string;
    data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
    value: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseAminoMsg {
    type: "wasm/MsgInstantiateContract2Response";
    value: MsgInstantiateContract2ResponseAmino;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
    address: string;
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
    value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
    type: "wasm/MsgExecuteContract";
    value: MsgExecuteContractAmino;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
    value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseAmino {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
    type: "wasm/MsgExecuteContractResponse";
    value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
    value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    code_id: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractAminoMsg {
    type: "wasm/MsgMigrateContract";
    value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
    sender: string;
    contract: string;
    code_id: bigint;
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseAmino {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseAminoMsg {
    type: "wasm/MsgMigrateContractResponse";
    value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
    value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateAdminAminoMsg {
    type: "wasm/MsgUpdateAdmin";
    value: MsgUpdateAdminAmino;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
    sender: string;
    new_admin: string;
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
export interface MsgUpdateAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseAmino {
}
export interface MsgUpdateAdminResponseAminoMsg {
    type: "wasm/MsgUpdateAdminResponse";
    value: MsgUpdateAdminResponseAmino;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
    value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminAmino {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearAdminAminoMsg {
    type: "wasm/MsgClearAdmin";
    value: MsgClearAdminAmino;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
    sender: string;
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export interface MsgClearAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
    value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseAmino {
}
export interface MsgClearAdminResponseAminoMsg {
    type: "wasm/MsgClearAdminResponse";
    value: MsgClearAdminResponseAmino;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfig {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    codeId: bigint;
    /** NewInstantiatePermission is the new access control */
    newInstantiatePermission: AccessConfig;
}
export interface MsgUpdateInstantiateConfigProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig";
    value: Uint8Array;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    code_id: string;
    /** NewInstantiatePermission is the new access control */
    new_instantiate_permission?: AccessConfigAmino;
}
export interface MsgUpdateInstantiateConfigAminoMsg {
    type: "wasm/MsgUpdateInstantiateConfig";
    value: MsgUpdateInstantiateConfigAmino;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigSDKType {
    sender: string;
    code_id: bigint;
    new_instantiate_permission: AccessConfigSDKType;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponse {
}
export interface MsgUpdateInstantiateConfigResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse";
    value: Uint8Array;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseAmino {
}
export interface MsgUpdateInstantiateConfigResponseAminoMsg {
    type: "wasm/MsgUpdateInstantiateConfigResponse";
    value: MsgUpdateInstantiateConfigResponseAmino;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseSDKType {
}
export declare const MsgStoreCode: {
    typeUrl: string;
    encode(message: MsgStoreCode, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
    fromAmino(object: MsgStoreCodeAmino): MsgStoreCode;
    toAmino(message: MsgStoreCode): MsgStoreCodeAmino;
    fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode;
    toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg;
    fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode;
    toProto(message: MsgStoreCode): Uint8Array;
    toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg;
};
export declare const MsgStoreCodeResponse: {
    typeUrl: string;
    encode(message: MsgStoreCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
    fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse;
    toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino;
    fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse;
    toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg;
    fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse;
    toProto(message: MsgStoreCodeResponse): Uint8Array;
    toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg;
};
export declare const MsgInstantiateContract: {
    typeUrl: string;
    encode(message: MsgInstantiateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract;
    fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract;
    fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract;
    toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino;
    fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract;
    toAminoMsg(message: MsgInstantiateContract): MsgInstantiateContractAminoMsg;
    fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract;
    toProto(message: MsgInstantiateContract): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg;
};
export declare const MsgInstantiateContract2: {
    typeUrl: string;
    encode(message: MsgInstantiateContract2, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2;
    fromPartial(object: Partial<MsgInstantiateContract2>): MsgInstantiateContract2;
    fromAmino(object: MsgInstantiateContract2Amino): MsgInstantiateContract2;
    toAmino(message: MsgInstantiateContract2): MsgInstantiateContract2Amino;
    fromAminoMsg(object: MsgInstantiateContract2AminoMsg): MsgInstantiateContract2;
    toAminoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2AminoMsg;
    fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2;
    toProto(message: MsgInstantiateContract2): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg;
};
export declare const MsgInstantiateContractResponse: {
    typeUrl: string;
    encode(message: MsgInstantiateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
    fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse;
    toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino;
    fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse;
    toAminoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAminoMsg;
    fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse;
    toProto(message: MsgInstantiateContractResponse): Uint8Array;
    toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg;
};
export declare const MsgInstantiateContract2Response: {
    typeUrl: string;
    encode(message: MsgInstantiateContract2Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2Response;
    fromPartial(object: Partial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response;
    fromAmino(object: MsgInstantiateContract2ResponseAmino): MsgInstantiateContract2Response;
    toAmino(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAmino;
    fromAminoMsg(object: MsgInstantiateContract2ResponseAminoMsg): MsgInstantiateContract2Response;
    toAminoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAminoMsg;
    fromProtoMsg(message: MsgInstantiateContract2ResponseProtoMsg): MsgInstantiateContract2Response;
    toProto(message: MsgInstantiateContract2Response): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseProtoMsg;
};
export declare const MsgExecuteContract: {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
    fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract;
    toAmino(message: MsgExecuteContract): MsgExecuteContractAmino;
    fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract;
    toAminoMsg(message: MsgExecuteContract): MsgExecuteContractAminoMsg;
    fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract;
    toProto(message: MsgExecuteContract): Uint8Array;
    toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg;
};
export declare const MsgExecuteContractResponse: {
    typeUrl: string;
    encode(message: MsgExecuteContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
    fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse;
    toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino;
    fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse;
    toAminoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseAminoMsg;
    fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse;
    toProto(message: MsgExecuteContractResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg;
};
export declare const MsgMigrateContract: {
    typeUrl: string;
    encode(message: MsgMigrateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract;
    fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract;
    fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract;
    toAmino(message: MsgMigrateContract): MsgMigrateContractAmino;
    fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract;
    toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg;
    fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract;
    toProto(message: MsgMigrateContract): Uint8Array;
    toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg;
};
export declare const MsgMigrateContractResponse: {
    typeUrl: string;
    encode(message: MsgMigrateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromPartial(object: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
    fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse;
    toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino;
    fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse;
    toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg;
    fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse;
    toProto(message: MsgMigrateContractResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg;
};
export declare const MsgUpdateAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromPartial(object: Partial<MsgUpdateAdmin>): MsgUpdateAdmin;
    fromAmino(object: MsgUpdateAdminAmino): MsgUpdateAdmin;
    toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino;
    fromAminoMsg(object: MsgUpdateAdminAminoMsg): MsgUpdateAdmin;
    toAminoMsg(message: MsgUpdateAdmin): MsgUpdateAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin;
    toProto(message: MsgUpdateAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg;
};
export declare const MsgUpdateAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromPartial(_: Partial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse;
    fromAmino(_: MsgUpdateAdminResponseAmino): MsgUpdateAdminResponse;
    toAmino(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateAdminResponseAminoMsg): MsgUpdateAdminResponse;
    toAminoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse;
    toProto(message: MsgUpdateAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg;
};
export declare const MsgClearAdmin: {
    typeUrl: string;
    encode(message: MsgClearAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin;
    fromPartial(object: Partial<MsgClearAdmin>): MsgClearAdmin;
    fromAmino(object: MsgClearAdminAmino): MsgClearAdmin;
    toAmino(message: MsgClearAdmin): MsgClearAdminAmino;
    fromAminoMsg(object: MsgClearAdminAminoMsg): MsgClearAdmin;
    toAminoMsg(message: MsgClearAdmin): MsgClearAdminAminoMsg;
    fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin;
    toProto(message: MsgClearAdmin): Uint8Array;
    toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg;
};
export declare const MsgClearAdminResponse: {
    typeUrl: string;
    encode(_: MsgClearAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse;
    fromPartial(_: Partial<MsgClearAdminResponse>): MsgClearAdminResponse;
    fromAmino(_: MsgClearAdminResponseAmino): MsgClearAdminResponse;
    toAmino(_: MsgClearAdminResponse): MsgClearAdminResponseAmino;
    fromAminoMsg(object: MsgClearAdminResponseAminoMsg): MsgClearAdminResponse;
    toAminoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseAminoMsg;
    fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse;
    toProto(message: MsgClearAdminResponse): Uint8Array;
    toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg;
};
export declare const MsgUpdateInstantiateConfig: {
    typeUrl: string;
    encode(message: MsgUpdateInstantiateConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfig;
    fromPartial(object: Partial<MsgUpdateInstantiateConfig>): MsgUpdateInstantiateConfig;
    fromAmino(object: MsgUpdateInstantiateConfigAmino): MsgUpdateInstantiateConfig;
    toAmino(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAmino;
    fromAminoMsg(object: MsgUpdateInstantiateConfigAminoMsg): MsgUpdateInstantiateConfig;
    toAminoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAminoMsg;
    fromProtoMsg(message: MsgUpdateInstantiateConfigProtoMsg): MsgUpdateInstantiateConfig;
    toProto(message: MsgUpdateInstantiateConfig): Uint8Array;
    toProtoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigProtoMsg;
};
export declare const MsgUpdateInstantiateConfigResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInstantiateConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfigResponse;
    fromPartial(_: Partial<MsgUpdateInstantiateConfigResponse>): MsgUpdateInstantiateConfigResponse;
    fromAmino(_: MsgUpdateInstantiateConfigResponseAmino): MsgUpdateInstantiateConfigResponse;
    toAmino(_: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAmino;
    fromAminoMsg(object: MsgUpdateInstantiateConfigResponseAminoMsg): MsgUpdateInstantiateConfigResponse;
    toAminoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateInstantiateConfigResponseProtoMsg): MsgUpdateInstantiateConfigResponse;
    toProto(message: MsgUpdateInstantiateConfigResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseProtoMsg;
};
