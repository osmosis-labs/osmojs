import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
export interface FeeProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.Fee";
    value: Uint8Array;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeAmino {
    /** the packet receive fee */
    recv_fee: CoinAmino[];
    /** the packet acknowledgement fee */
    ack_fee: CoinAmino[];
    /** the packet timeout fee */
    timeout_fee: CoinAmino[];
}
export interface FeeAminoMsg {
    type: "cosmos-sdk/Fee";
    value: FeeAmino;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
    recv_fee: CoinSDKType[];
    ack_fee: CoinSDKType[];
    timeout_fee: CoinSDKType[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the refund address for unspent fees */
    refundAddress: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
export interface PacketFeeProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.PacketFee";
    value: Uint8Array;
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeAmino {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: FeeAmino;
    /** the refund address for unspent fees */
    refund_address: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
export interface PacketFeeAminoMsg {
    type: "cosmos-sdk/PacketFee";
    value: PacketFeeAmino;
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeSDKType {
    fee?: FeeSDKType;
    refund_address: string;
    relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
    /** list of packet fees */
    packetFees: PacketFee[];
}
export interface PacketFeesProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.PacketFees";
    value: Uint8Array;
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesAmino {
    /** list of packet fees */
    packet_fees: PacketFeeAmino[];
}
export interface PacketFeesAminoMsg {
    type: "cosmos-sdk/PacketFees";
    value: PacketFeesAmino;
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesSDKType {
    packet_fees: PacketFeeSDKType[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
    /** list of packet fees */
    packetFees: PacketFee[];
}
export interface IdentifiedPacketFeesProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees";
    value: Uint8Array;
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesAmino {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packet_id?: PacketIdAmino;
    /** list of packet fees */
    packet_fees: PacketFeeAmino[];
}
export interface IdentifiedPacketFeesAminoMsg {
    type: "cosmos-sdk/IdentifiedPacketFees";
    value: IdentifiedPacketFeesAmino;
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesSDKType {
    packet_id?: PacketIdSDKType;
    packet_fees: PacketFeeSDKType[];
}
export declare const Fee: {
    typeUrl: string;
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromPartial(object: Partial<Fee>): Fee;
    fromAmino(object: FeeAmino): Fee;
    toAmino(message: Fee): FeeAmino;
    fromAminoMsg(object: FeeAminoMsg): Fee;
    toAminoMsg(message: Fee): FeeAminoMsg;
    fromProtoMsg(message: FeeProtoMsg): Fee;
    toProto(message: Fee): Uint8Array;
    toProtoMsg(message: Fee): FeeProtoMsg;
};
export declare const PacketFee: {
    typeUrl: string;
    encode(message: PacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee;
    fromPartial(object: Partial<PacketFee>): PacketFee;
    fromAmino(object: PacketFeeAmino): PacketFee;
    toAmino(message: PacketFee): PacketFeeAmino;
    fromAminoMsg(object: PacketFeeAminoMsg): PacketFee;
    toAminoMsg(message: PacketFee): PacketFeeAminoMsg;
    fromProtoMsg(message: PacketFeeProtoMsg): PacketFee;
    toProto(message: PacketFee): Uint8Array;
    toProtoMsg(message: PacketFee): PacketFeeProtoMsg;
};
export declare const PacketFees: {
    typeUrl: string;
    encode(message: PacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees;
    fromPartial(object: Partial<PacketFees>): PacketFees;
    fromAmino(object: PacketFeesAmino): PacketFees;
    toAmino(message: PacketFees): PacketFeesAmino;
    fromAminoMsg(object: PacketFeesAminoMsg): PacketFees;
    toAminoMsg(message: PacketFees): PacketFeesAminoMsg;
    fromProtoMsg(message: PacketFeesProtoMsg): PacketFees;
    toProto(message: PacketFees): Uint8Array;
    toProtoMsg(message: PacketFees): PacketFeesProtoMsg;
};
export declare const IdentifiedPacketFees: {
    typeUrl: string;
    encode(message: IdentifiedPacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees;
    fromPartial(object: Partial<IdentifiedPacketFees>): IdentifiedPacketFees;
    fromAmino(object: IdentifiedPacketFeesAmino): IdentifiedPacketFees;
    toAmino(message: IdentifiedPacketFees): IdentifiedPacketFeesAmino;
    fromAminoMsg(object: IdentifiedPacketFeesAminoMsg): IdentifiedPacketFees;
    toAminoMsg(message: IdentifiedPacketFees): IdentifiedPacketFeesAminoMsg;
    fromProtoMsg(message: IdentifiedPacketFeesProtoMsg): IdentifiedPacketFees;
    toProto(message: IdentifiedPacketFees): Uint8Array;
    toProtoMsg(message: IdentifiedPacketFees): IdentifiedPacketFeesProtoMsg;
};
