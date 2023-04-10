import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the bank module. */
export interface Params {
    sendEnabled: SendEnabled[];
    defaultSendEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the bank module. */
export interface ParamsAmino {
    send_enabled: SendEnabledAmino[];
    default_send_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/bank/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the bank module. */
export interface ParamsSDKType {
    send_enabled: SendEnabledSDKType[];
    default_send_enabled: boolean;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
    denom: string;
    enabled: boolean;
}
export interface SendEnabledProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled";
    value: Uint8Array;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabledAmino {
    denom: string;
    enabled: boolean;
}
export interface SendEnabledAminoMsg {
    type: "cosmos-sdk/SendEnabled";
    value: SendEnabledAmino;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabledSDKType {
    denom: string;
    enabled: boolean;
}
/** Input models transaction input. */
export interface Input {
    address: string;
    coins: Coin[];
}
export interface InputProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Input";
    value: Uint8Array;
}
/** Input models transaction input. */
export interface InputAmino {
    address: string;
    coins: CoinAmino[];
}
export interface InputAminoMsg {
    type: "cosmos-sdk/Input";
    value: InputAmino;
}
/** Input models transaction input. */
export interface InputSDKType {
    address: string;
    coins: CoinSDKType[];
}
/** Output models transaction outputs. */
export interface Output {
    address: string;
    coins: Coin[];
}
export interface OutputProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Output";
    value: Uint8Array;
}
/** Output models transaction outputs. */
export interface OutputAmino {
    address: string;
    coins: CoinAmino[];
}
export interface OutputAminoMsg {
    type: "cosmos-sdk/Output";
    value: OutputAmino;
}
/** Output models transaction outputs. */
export interface OutputSDKType {
    address: string;
    coins: CoinSDKType[];
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
export interface Supply {
    $typeUrl?: string;
    total: Coin[];
}
export interface SupplyProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Supply";
    value: Uint8Array;
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
export interface SupplyAmino {
    total: CoinAmino[];
}
export interface SupplyAminoMsg {
    type: "cosmos-sdk/Supply";
    value: SupplyAmino;
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
export interface SupplySDKType {
    $typeUrl?: string;
    total: CoinSDKType[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 1^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     */
    exponent: number;
    /** aliases is a list of string aliases for the given denom */
    aliases: string[];
}
export interface DenomUnitProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit";
    value: Uint8Array;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitAmino {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 1^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     */
    exponent: number;
    /** aliases is a list of string aliases for the given denom */
    aliases: string[];
}
export interface DenomUnitAminoMsg {
    type: "cosmos-sdk/DenomUnit";
    value: DenomUnitAmino;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitSDKType {
    denom: string;
    exponent: number;
    aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denomUnits: DenomUnit[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     */
    symbol: string;
}
export interface MetadataProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Metadata";
    value: Uint8Array;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface MetadataAmino {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denom_units: DenomUnitAmino[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     */
    symbol: string;
}
export interface MetadataAminoMsg {
    type: "cosmos-sdk/Metadata";
    value: MetadataAmino;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface MetadataSDKType {
    description: string;
    denom_units: DenomUnitSDKType[];
    base: string;
    display: string;
    name: string;
    symbol: string;
}
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
export declare const SendEnabled: {
    typeUrl: string;
    encode(message: SendEnabled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled;
    fromPartial(object: Partial<SendEnabled>): SendEnabled;
    fromAmino(object: SendEnabledAmino): SendEnabled;
    toAmino(message: SendEnabled): SendEnabledAmino;
    fromAminoMsg(object: SendEnabledAminoMsg): SendEnabled;
    toAminoMsg(message: SendEnabled): SendEnabledAminoMsg;
    fromProtoMsg(message: SendEnabledProtoMsg): SendEnabled;
    toProto(message: SendEnabled): Uint8Array;
    toProtoMsg(message: SendEnabled): SendEnabledProtoMsg;
};
export declare const Input: {
    typeUrl: string;
    encode(message: Input, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Input;
    fromPartial(object: Partial<Input>): Input;
    fromAmino(object: InputAmino): Input;
    toAmino(message: Input): InputAmino;
    fromAminoMsg(object: InputAminoMsg): Input;
    toAminoMsg(message: Input): InputAminoMsg;
    fromProtoMsg(message: InputProtoMsg): Input;
    toProto(message: Input): Uint8Array;
    toProtoMsg(message: Input): InputProtoMsg;
};
export declare const Output: {
    typeUrl: string;
    encode(message: Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Output;
    fromPartial(object: Partial<Output>): Output;
    fromAmino(object: OutputAmino): Output;
    toAmino(message: Output): OutputAmino;
    fromAminoMsg(object: OutputAminoMsg): Output;
    toAminoMsg(message: Output): OutputAminoMsg;
    fromProtoMsg(message: OutputProtoMsg): Output;
    toProto(message: Output): Uint8Array;
    toProtoMsg(message: Output): OutputProtoMsg;
};
export declare const Supply: {
    typeUrl: string;
    encode(message: Supply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supply;
    fromPartial(object: Partial<Supply>): Supply;
    fromAmino(object: SupplyAmino): Supply;
    toAmino(message: Supply): SupplyAmino;
    fromAminoMsg(object: SupplyAminoMsg): Supply;
    toAminoMsg(message: Supply): SupplyAminoMsg;
    fromProtoMsg(message: SupplyProtoMsg): Supply;
    toProto(message: Supply): Uint8Array;
    toProtoMsg(message: Supply): SupplyProtoMsg;
};
export declare const DenomUnit: {
    typeUrl: string;
    encode(message: DenomUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit;
    fromPartial(object: Partial<DenomUnit>): DenomUnit;
    fromAmino(object: DenomUnitAmino): DenomUnit;
    toAmino(message: DenomUnit): DenomUnitAmino;
    fromAminoMsg(object: DenomUnitAminoMsg): DenomUnit;
    toAminoMsg(message: DenomUnit): DenomUnitAminoMsg;
    fromProtoMsg(message: DenomUnitProtoMsg): DenomUnit;
    toProto(message: DenomUnit): Uint8Array;
    toProtoMsg(message: DenomUnit): DenomUnitProtoMsg;
};
export declare const Metadata: {
    typeUrl: string;
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromPartial(object: Partial<Metadata>): Metadata;
    fromAmino(object: MetadataAmino): Metadata;
    toAmino(message: Metadata): MetadataAmino;
    fromAminoMsg(object: MetadataAminoMsg): Metadata;
    toAminoMsg(message: Metadata): MetadataAminoMsg;
    fromProtoMsg(message: MetadataProtoMsg): Metadata;
    toProto(message: Metadata): Uint8Array;
    toProtoMsg(message: Metadata): MetadataProtoMsg;
};
