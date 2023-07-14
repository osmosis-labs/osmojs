import { BinaryReader, BinaryWriter } from "../../../../../binary";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
    /** host_enabled enables or disables the host submodule. */
    hostEnabled: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allowMessages: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params";
    value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsAmino {
    /** host_enabled enables or disables the host submodule. */
    host_enabled: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allow_messages: string[];
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
    host_enabled: boolean;
    allow_messages: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
