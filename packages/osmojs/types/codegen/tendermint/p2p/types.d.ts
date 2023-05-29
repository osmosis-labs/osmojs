import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NetAddress {
    id: string;
    ip: string;
    port: number;
}
export interface NetAddressProtoMsg {
    typeUrl: "/tendermint.p2p.NetAddress";
    value: Uint8Array;
}
export interface NetAddressAmino {
    id: string;
    ip: string;
    port: number;
}
export interface NetAddressAminoMsg {
    type: "/tendermint.p2p.NetAddress";
    value: NetAddressAmino;
}
export interface NetAddressSDKType {
    id: string;
    ip: string;
    port: number;
}
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface ProtocolVersionProtoMsg {
    typeUrl: "/tendermint.p2p.ProtocolVersion";
    value: Uint8Array;
}
export interface ProtocolVersionAmino {
    p2p: string;
    block: string;
    app: string;
}
export interface ProtocolVersionAminoMsg {
    type: "/tendermint.p2p.ProtocolVersion";
    value: ProtocolVersionAmino;
}
export interface ProtocolVersionSDKType {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface DefaultNodeInfo {
    protocolVersion?: ProtocolVersion;
    defaultNodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoProtoMsg {
    typeUrl: "/tendermint.p2p.DefaultNodeInfo";
    value: Uint8Array;
}
export interface DefaultNodeInfoAmino {
    protocol_version?: ProtocolVersionAmino;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOtherAmino;
}
export interface DefaultNodeInfoAminoMsg {
    type: "/tendermint.p2p.DefaultNodeInfo";
    value: DefaultNodeInfoAmino;
}
export interface DefaultNodeInfoSDKType {
    protocol_version?: ProtocolVersionSDKType;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOtherSDKType;
}
export interface DefaultNodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface DefaultNodeInfoOtherProtoMsg {
    typeUrl: "/tendermint.p2p.DefaultNodeInfoOther";
    value: Uint8Array;
}
export interface DefaultNodeInfoOtherAmino {
    tx_index: string;
    rpc_address: string;
}
export interface DefaultNodeInfoOtherAminoMsg {
    type: "/tendermint.p2p.DefaultNodeInfoOther";
    value: DefaultNodeInfoOtherAmino;
}
export interface DefaultNodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export declare const NetAddress: {
    typeUrl: string;
    encode(message: NetAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress;
    fromPartial(object: Partial<NetAddress>): NetAddress;
    fromAmino(object: NetAddressAmino): NetAddress;
    toAmino(message: NetAddress): NetAddressAmino;
    fromAminoMsg(object: NetAddressAminoMsg): NetAddress;
    fromProtoMsg(message: NetAddressProtoMsg): NetAddress;
    toProto(message: NetAddress): Uint8Array;
    toProtoMsg(message: NetAddress): NetAddressProtoMsg;
};
export declare const ProtocolVersion: {
    typeUrl: string;
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromPartial(object: Partial<ProtocolVersion>): ProtocolVersion;
    fromAmino(object: ProtocolVersionAmino): ProtocolVersion;
    toAmino(message: ProtocolVersion): ProtocolVersionAmino;
    fromAminoMsg(object: ProtocolVersionAminoMsg): ProtocolVersion;
    fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion;
    toProto(message: ProtocolVersion): Uint8Array;
    toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg;
};
export declare const DefaultNodeInfo: {
    typeUrl: string;
    encode(message: DefaultNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo;
    fromPartial(object: Partial<DefaultNodeInfo>): DefaultNodeInfo;
    fromAmino(object: DefaultNodeInfoAmino): DefaultNodeInfo;
    toAmino(message: DefaultNodeInfo): DefaultNodeInfoAmino;
    fromAminoMsg(object: DefaultNodeInfoAminoMsg): DefaultNodeInfo;
    fromProtoMsg(message: DefaultNodeInfoProtoMsg): DefaultNodeInfo;
    toProto(message: DefaultNodeInfo): Uint8Array;
    toProtoMsg(message: DefaultNodeInfo): DefaultNodeInfoProtoMsg;
};
export declare const DefaultNodeInfoOther: {
    typeUrl: string;
    encode(message: DefaultNodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther;
    fromPartial(object: Partial<DefaultNodeInfoOther>): DefaultNodeInfoOther;
    fromAmino(object: DefaultNodeInfoOtherAmino): DefaultNodeInfoOther;
    toAmino(message: DefaultNodeInfoOther): DefaultNodeInfoOtherAmino;
    fromAminoMsg(object: DefaultNodeInfoOtherAminoMsg): DefaultNodeInfoOther;
    fromProtoMsg(message: DefaultNodeInfoOtherProtoMsg): DefaultNodeInfoOther;
    toProto(message: DefaultNodeInfoOther): Uint8Array;
    toProtoMsg(message: DefaultNodeInfoOther): DefaultNodeInfoOtherProtoMsg;
};
