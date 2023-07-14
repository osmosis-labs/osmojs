import { IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
    channels: IdentifiedChannel[];
    acknowledgements: PacketState[];
    commitments: PacketState[];
    receipts: PacketState[];
    sendSequences: PacketSequence[];
    recvSequences: PacketSequence[];
    ackSequences: PacketSequence[];
    /** the sequence for the next generated channel identifier */
    nextChannelSequence: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.core.channel.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateAmino {
    channels: IdentifiedChannelAmino[];
    acknowledgements: PacketStateAmino[];
    commitments: PacketStateAmino[];
    receipts: PacketStateAmino[];
    send_sequences: PacketSequenceAmino[];
    recv_sequences: PacketSequenceAmino[];
    ack_sequences: PacketSequenceAmino[];
    /** the sequence for the next generated channel identifier */
    next_channel_sequence: string;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
    channels: IdentifiedChannelSDKType[];
    acknowledgements: PacketStateSDKType[];
    commitments: PacketStateSDKType[];
    receipts: PacketStateSDKType[];
    send_sequences: PacketSequenceSDKType[];
    recv_sequences: PacketSequenceSDKType[];
    ack_sequences: PacketSequenceSDKType[];
    next_channel_sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
    portId: string;
    channelId: string;
    sequence: bigint;
}
export interface PacketSequenceProtoMsg {
    typeUrl: "/ibc.core.channel.v1.PacketSequence";
    value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceAmino {
    port_id: string;
    channel_id: string;
    sequence: string;
}
export interface PacketSequenceAminoMsg {
    type: "cosmos-sdk/PacketSequence";
    value: PacketSequenceAmino;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
    port_id: string;
    channel_id: string;
    sequence: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const PacketSequence: {
    typeUrl: string;
    encode(message: PacketSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence;
    fromPartial(object: Partial<PacketSequence>): PacketSequence;
    fromAmino(object: PacketSequenceAmino): PacketSequence;
    toAmino(message: PacketSequence): PacketSequenceAmino;
    fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence;
    toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg;
    fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence;
    toProto(message: PacketSequence): Uint8Array;
    toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg;
};
