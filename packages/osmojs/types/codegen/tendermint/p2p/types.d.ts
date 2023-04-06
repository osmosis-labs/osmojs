import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface NodeInfo {
    protocolVersion?: ProtocolVersion;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOther;
}
export interface NodeInfoProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfo";
    value: Uint8Array;
}
export interface NodeInfoAmino {
    protocol_version?: ProtocolVersionAmino;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOtherAmino;
}
export interface NodeInfoAminoMsg {
    type: "/tendermint.p2p.NodeInfo";
    value: NodeInfoAmino;
}
export interface NodeInfoSDKType {
    protocol_version?: ProtocolVersionSDKType;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface NodeInfoOtherProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfoOther";
    value: Uint8Array;
}
export interface NodeInfoOtherAmino {
    tx_index: string;
    rpc_address: string;
}
export interface NodeInfoOtherAminoMsg {
    type: "/tendermint.p2p.NodeInfoOther";
    value: NodeInfoOtherAmino;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected?: Date;
}
export interface PeerInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerInfo";
    value: Uint8Array;
}
export interface PeerInfoAmino {
    id: string;
    address_info: PeerAddressInfoAmino[];
    last_connected?: Date;
}
export interface PeerInfoAminoMsg {
    type: "/tendermint.p2p.PeerInfo";
    value: PeerInfoAmino;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected?: Date;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess?: Date;
    lastDialFailure?: Date;
    dialFailures: number;
}
export interface PeerAddressInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerAddressInfo";
    value: Uint8Array;
}
export interface PeerAddressInfoAmino {
    address: string;
    last_dial_success?: Date;
    last_dial_failure?: Date;
    dial_failures: number;
}
export interface PeerAddressInfoAminoMsg {
    type: "/tendermint.p2p.PeerAddressInfo";
    value: PeerAddressInfoAmino;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success?: Date;
    last_dial_failure?: Date;
    dial_failures: number;
}
export declare const ProtocolVersion: {
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
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromPartial(object: Partial<NodeInfo>): NodeInfo;
    fromAmino(object: NodeInfoAmino): NodeInfo;
    toAmino(message: NodeInfo): NodeInfoAmino;
    fromAminoMsg(object: NodeInfoAminoMsg): NodeInfo;
    fromProtoMsg(message: NodeInfoProtoMsg): NodeInfo;
    toProto(message: NodeInfo): Uint8Array;
    toProtoMsg(message: NodeInfo): NodeInfoProtoMsg;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther;
    fromPartial(object: Partial<NodeInfoOther>): NodeInfoOther;
    fromAmino(object: NodeInfoOtherAmino): NodeInfoOther;
    toAmino(message: NodeInfoOther): NodeInfoOtherAmino;
    fromAminoMsg(object: NodeInfoOtherAminoMsg): NodeInfoOther;
    fromProtoMsg(message: NodeInfoOtherProtoMsg): NodeInfoOther;
    toProto(message: NodeInfoOther): Uint8Array;
    toProtoMsg(message: NodeInfoOther): NodeInfoOtherProtoMsg;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromPartial(object: Partial<PeerInfo>): PeerInfo;
    fromAmino(object: PeerInfoAmino): PeerInfo;
    toAmino(message: PeerInfo): PeerInfoAmino;
    fromAminoMsg(object: PeerInfoAminoMsg): PeerInfo;
    fromProtoMsg(message: PeerInfoProtoMsg): PeerInfo;
    toProto(message: PeerInfo): Uint8Array;
    toProtoMsg(message: PeerInfo): PeerInfoProtoMsg;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo;
    fromPartial(object: Partial<PeerAddressInfo>): PeerAddressInfo;
    fromAmino(object: PeerAddressInfoAmino): PeerAddressInfo;
    toAmino(message: PeerAddressInfo): PeerAddressInfoAmino;
    fromAminoMsg(object: PeerAddressInfoAminoMsg): PeerAddressInfo;
    fromProtoMsg(message: PeerAddressInfoProtoMsg): PeerAddressInfo;
    toProto(message: PeerAddressInfo): Uint8Array;
    toProtoMsg(message: PeerAddressInfo): PeerAddressInfoProtoMsg;
};
