import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface NodeInfo {
    protocol_version: ProtocolVersion;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther;
}
export interface NodeInfoOther {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    address_info: PeerAddressInfo[];
    last_connected: Date;
}
export interface PeerAddressInfo {
    address: string;
    last_dial_success: Date;
    last_dial_failure: Date;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion;
};
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    fromPartial(object: DeepPartial<NodeInfo>): NodeInfo;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther;
    fromJSON(object: any): NodeInfoOther;
    toJSON(message: NodeInfoOther): unknown;
    fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    fromPartial(object: DeepPartial<PeerInfo>): PeerInfo;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo;
    fromJSON(object: any): PeerAddressInfo;
    toJSON(message: PeerAddressInfo): unknown;
    fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo;
};
