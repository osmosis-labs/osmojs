import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export declare enum State {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    STATE_UNINITIALIZED_UNSPECIFIED = 0,
    /** STATE_INIT - A channel has just started the opening handshake. */
    STATE_INIT = 1,
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    STATE_TRYOPEN = 2,
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    STATE_OPEN = 3,
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    STATE_CLOSED = 4,
    UNRECOGNIZED = -1
}
export declare const StateSDKType: typeof State;
export declare const StateAmino: typeof State;
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/** Order defines if a channel is ORDERED or UNORDERED */
export declare enum Order {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    ORDER_NONE_UNSPECIFIED = 0,
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    ORDER_UNORDERED = 1,
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    ORDER_ORDERED = 2,
    UNRECOGNIZED = -1
}
export declare const OrderSDKType: typeof Order;
export declare const OrderAmino: typeof Order;
export declare function orderFromJSON(object: any): Order;
export declare function orderToJSON(object: Order): string;
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface Channel {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connectionHops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
}
export interface ChannelProtoMsg {
    typeUrl: "/ibc.core.channel.v1.Channel";
    value: Uint8Array;
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface ChannelAmino {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: CounterpartyAmino;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
}
export interface ChannelAminoMsg {
    type: "cosmos-sdk/Channel";
    value: ChannelAmino;
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface ChannelSDKType {
    state: State;
    ordering: Order;
    counterparty?: CounterpartySDKType;
    connection_hops: string[];
    version: string;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannel {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connectionHops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
    /** port identifier */
    portId: string;
    /** channel identifier */
    channelId: string;
}
export interface IdentifiedChannelProtoMsg {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel";
    value: Uint8Array;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannelAmino {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: CounterpartyAmino;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
    /** port identifier */
    port_id: string;
    /** channel identifier */
    channel_id: string;
}
export interface IdentifiedChannelAminoMsg {
    type: "cosmos-sdk/IdentifiedChannel";
    value: IdentifiedChannelAmino;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannelSDKType {
    state: State;
    ordering: Order;
    counterparty?: CounterpartySDKType;
    connection_hops: string[];
    version: string;
    port_id: string;
    channel_id: string;
}
/** Counterparty defines a channel end counterparty */
export interface Counterparty {
    /** port on the counterparty chain which owns the other end of the channel. */
    portId: string;
    /** channel end on the counterparty chain */
    channelId: string;
}
export interface CounterpartyProtoMsg {
    typeUrl: "/ibc.core.channel.v1.Counterparty";
    value: Uint8Array;
}
/** Counterparty defines a channel end counterparty */
export interface CounterpartyAmino {
    /** port on the counterparty chain which owns the other end of the channel. */
    port_id: string;
    /** channel end on the counterparty chain */
    channel_id: string;
}
export interface CounterpartyAminoMsg {
    type: "cosmos-sdk/Counterparty";
    value: CounterpartyAmino;
}
/** Counterparty defines a channel end counterparty */
export interface CounterpartySDKType {
    port_id: string;
    channel_id: string;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
    /**
     * number corresponds to the order of sends and receives, where a Packet
     * with an earlier sequence number must be sent and received before a Packet
     * with a later sequence number.
     */
    sequence: Long;
    /** identifies the port on the sending chain. */
    sourcePort: string;
    /** identifies the channel end on the sending chain. */
    sourceChannel: string;
    /** identifies the port on the receiving chain. */
    destinationPort: string;
    /** identifies the channel end on the receiving chain. */
    destinationChannel: string;
    /** actual opaque bytes transferred directly to the application module */
    data: Uint8Array;
    /** block height after which the packet times out */
    timeoutHeight?: Height;
    /** block timestamp (in nanoseconds) after which the packet times out */
    timeoutTimestamp: Long;
}
export interface PacketProtoMsg {
    typeUrl: "/ibc.core.channel.v1.Packet";
    value: Uint8Array;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface PacketAmino {
    /**
     * number corresponds to the order of sends and receives, where a Packet
     * with an earlier sequence number must be sent and received before a Packet
     * with a later sequence number.
     */
    sequence: string;
    /** identifies the port on the sending chain. */
    source_port: string;
    /** identifies the channel end on the sending chain. */
    source_channel: string;
    /** identifies the port on the receiving chain. */
    destination_port: string;
    /** identifies the channel end on the receiving chain. */
    destination_channel: string;
    /** actual opaque bytes transferred directly to the application module */
    data: Uint8Array;
    /** block height after which the packet times out */
    timeout_height?: HeightAmino;
    /** block timestamp (in nanoseconds) after which the packet times out */
    timeout_timestamp: string;
}
export interface PacketAminoMsg {
    type: "cosmos-sdk/Packet";
    value: PacketAmino;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface PacketSDKType {
    sequence: Long;
    source_port: string;
    source_channel: string;
    destination_port: string;
    destination_channel: string;
    data: Uint8Array;
    timeout_height?: HeightSDKType;
    timeout_timestamp: Long;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
    /** channel port identifier. */
    portId: string;
    /** channel unique identifier. */
    channelId: string;
    /** packet sequence. */
    sequence: Long;
    /** embedded data that represents packet state. */
    data: Uint8Array;
}
export interface PacketStateProtoMsg {
    typeUrl: "/ibc.core.channel.v1.PacketState";
    value: Uint8Array;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketStateAmino {
    /** channel port identifier. */
    port_id: string;
    /** channel unique identifier. */
    channel_id: string;
    /** packet sequence. */
    sequence: string;
    /** embedded data that represents packet state. */
    data: Uint8Array;
}
export interface PacketStateAminoMsg {
    type: "cosmos-sdk/PacketState";
    value: PacketStateAmino;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketStateSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
    data: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketId {
    /** channel port identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
export interface PacketIdProtoMsg {
    typeUrl: "/ibc.core.channel.v1.PacketId";
    value: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketIdAmino {
    /** channel port identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
export interface PacketIdAminoMsg {
    type: "cosmos-sdk/PacketId";
    value: PacketIdAmino;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketIdSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface Acknowledgement {
    result?: Uint8Array;
    error?: string;
}
export interface AcknowledgementProtoMsg {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement";
    value: Uint8Array;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface AcknowledgementAmino {
    result?: Uint8Array;
    error?: string;
}
export interface AcknowledgementAminoMsg {
    type: "cosmos-sdk/Acknowledgement";
    value: AcknowledgementAmino;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface AcknowledgementSDKType {
    result?: Uint8Array;
    error?: string;
}
export declare const Channel: {
    typeUrl: string;
    encode(message: Channel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Channel;
    fromPartial(object: Partial<Channel>): Channel;
    fromAmino(object: ChannelAmino): Channel;
    toAmino(message: Channel): ChannelAmino;
    fromAminoMsg(object: ChannelAminoMsg): Channel;
    toAminoMsg(message: Channel): ChannelAminoMsg;
    fromProtoMsg(message: ChannelProtoMsg): Channel;
    toProto(message: Channel): Uint8Array;
    toProtoMsg(message: Channel): ChannelProtoMsg;
};
export declare const IdentifiedChannel: {
    typeUrl: string;
    encode(message: IdentifiedChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedChannel;
    fromPartial(object: Partial<IdentifiedChannel>): IdentifiedChannel;
    fromAmino(object: IdentifiedChannelAmino): IdentifiedChannel;
    toAmino(message: IdentifiedChannel): IdentifiedChannelAmino;
    fromAminoMsg(object: IdentifiedChannelAminoMsg): IdentifiedChannel;
    toAminoMsg(message: IdentifiedChannel): IdentifiedChannelAminoMsg;
    fromProtoMsg(message: IdentifiedChannelProtoMsg): IdentifiedChannel;
    toProto(message: IdentifiedChannel): Uint8Array;
    toProtoMsg(message: IdentifiedChannel): IdentifiedChannelProtoMsg;
};
export declare const Counterparty: {
    typeUrl: string;
    encode(message: Counterparty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty;
    fromPartial(object: Partial<Counterparty>): Counterparty;
    fromAmino(object: CounterpartyAmino): Counterparty;
    toAmino(message: Counterparty): CounterpartyAmino;
    fromAminoMsg(object: CounterpartyAminoMsg): Counterparty;
    toAminoMsg(message: Counterparty): CounterpartyAminoMsg;
    fromProtoMsg(message: CounterpartyProtoMsg): Counterparty;
    toProto(message: Counterparty): Uint8Array;
    toProtoMsg(message: Counterparty): CounterpartyProtoMsg;
};
export declare const Packet: {
    typeUrl: string;
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Packet;
    fromPartial(object: Partial<Packet>): Packet;
    fromAmino(object: PacketAmino): Packet;
    toAmino(message: Packet): PacketAmino;
    fromAminoMsg(object: PacketAminoMsg): Packet;
    toAminoMsg(message: Packet): PacketAminoMsg;
    fromProtoMsg(message: PacketProtoMsg): Packet;
    toProto(message: Packet): Uint8Array;
    toProtoMsg(message: Packet): PacketProtoMsg;
};
export declare const PacketState: {
    typeUrl: string;
    encode(message: PacketState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketState;
    fromPartial(object: Partial<PacketState>): PacketState;
    fromAmino(object: PacketStateAmino): PacketState;
    toAmino(message: PacketState): PacketStateAmino;
    fromAminoMsg(object: PacketStateAminoMsg): PacketState;
    toAminoMsg(message: PacketState): PacketStateAminoMsg;
    fromProtoMsg(message: PacketStateProtoMsg): PacketState;
    toProto(message: PacketState): Uint8Array;
    toProtoMsg(message: PacketState): PacketStateProtoMsg;
};
export declare const PacketId: {
    typeUrl: string;
    encode(message: PacketId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketId;
    fromPartial(object: Partial<PacketId>): PacketId;
    fromAmino(object: PacketIdAmino): PacketId;
    toAmino(message: PacketId): PacketIdAmino;
    fromAminoMsg(object: PacketIdAminoMsg): PacketId;
    toAminoMsg(message: PacketId): PacketIdAminoMsg;
    fromProtoMsg(message: PacketIdProtoMsg): PacketId;
    toProto(message: PacketId): Uint8Array;
    toProtoMsg(message: PacketId): PacketIdProtoMsg;
};
export declare const Acknowledgement: {
    typeUrl: string;
    encode(message: Acknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Acknowledgement;
    fromPartial(object: Partial<Acknowledgement>): Acknowledgement;
    fromAmino(object: AcknowledgementAmino): Acknowledgement;
    toAmino(message: Acknowledgement): AcknowledgementAmino;
    fromAminoMsg(object: AcknowledgementAminoMsg): Acknowledgement;
    toAminoMsg(message: Acknowledgement): AcknowledgementAminoMsg;
    fromProtoMsg(message: AcknowledgementProtoMsg): Acknowledgement;
    toProto(message: Acknowledgement): Uint8Array;
    toProtoMsg(message: Acknowledgement): AcknowledgementProtoMsg;
};
