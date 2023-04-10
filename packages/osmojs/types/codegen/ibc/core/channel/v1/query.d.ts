import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, ChannelSDKType, IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
export interface QueryChannelRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest";
    value: Uint8Array;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
export interface QueryChannelRequestAminoMsg {
    type: "cosmos-sdk/QueryChannelRequest";
    value: QueryChannelRequestAmino;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel?: Channel;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryChannelResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse";
    value: Uint8Array;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseAmino {
    /** channel associated with the request identifiers */
    channel?: ChannelAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryChannelResponseAminoMsg {
    type: "cosmos-sdk/QueryChannelResponse";
    value: QueryChannelResponseAmino;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseSDKType {
    channel?: ChannelSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination?: PageRequest;
}
export interface QueryChannelsRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest";
    value: Uint8Array;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestAmino {
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryChannelsRequestAminoMsg {
    type: "cosmos-sdk/QueryChannelsRequest";
    value: QueryChannelsRequestAmino;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
export interface QueryChannelsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse";
    value: Uint8Array;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseAmino {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannelAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
export interface QueryChannelsResponseAminoMsg {
    type: "cosmos-sdk/QueryChannelsResponse";
    value: QueryChannelsResponseAmino;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseSDKType {
    channels: IdentifiedChannelSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequest;
}
export interface QueryConnectionChannelsRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestAmino {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryConnectionChannelsRequestAminoMsg {
    type: "cosmos-sdk/QueryConnectionChannelsRequest";
    value: QueryConnectionChannelsRequestAmino;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestSDKType {
    connection: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
export interface QueryConnectionChannelsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseAmino {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannelAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
export interface QueryConnectionChannelsResponseAminoMsg {
    type: "cosmos-sdk/QueryConnectionChannelsResponse";
    value: QueryConnectionChannelsResponseAmino;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseSDKType {
    channels: IdentifiedChannelSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
export interface QueryChannelClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
export interface QueryChannelClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryChannelClientStateRequest";
    value: QueryChannelClientStateRequestAmino;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryChannelClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseAmino {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientStateAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryChannelClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryChannelClientStateResponse";
    value: QueryChannelClientStateResponseAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseSDKType {
    identified_client_state?: IdentifiedClientStateSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** revision number of the consensus state */
    revisionNumber: Long;
    /** revision height of the consensus state */
    revisionHeight: Long;
}
export interface QueryChannelConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** revision number of the consensus state */
    revision_number: string;
    /** revision height of the consensus state */
    revision_height: string;
}
export interface QueryChannelConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryChannelConsensusStateRequest";
    value: QueryChannelConsensusStateRequestAmino;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestSDKType {
    port_id: string;
    channel_id: string;
    revision_number: Long;
    revision_height: Long;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryChannelConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseAmino {
    /** consensus state associated with the channel */
    consensus_state?: AnyAmino;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryChannelConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryChannelConsensusStateResponse";
    value: QueryChannelConsensusStateResponseAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseSDKType {
    consensus_state?: AnySDKType;
    client_id: string;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
export interface QueryPacketCommitmentRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest";
    value: Uint8Array;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
export interface QueryPacketCommitmentRequestAminoMsg {
    type: "cosmos-sdk/QueryPacketCommitmentRequest";
    value: QueryPacketCommitmentRequestAmino;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryPacketCommitmentResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse";
    value: Uint8Array;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseAmino {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryPacketCommitmentResponseAminoMsg {
    type: "cosmos-sdk/QueryPacketCommitmentResponse";
    value: QueryPacketCommitmentResponseAmino;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseSDKType {
    commitment: Uint8Array;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest;
}
export interface QueryPacketCommitmentsRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest";
    value: Uint8Array;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryPacketCommitmentsRequestAminoMsg {
    type: "cosmos-sdk/QueryPacketCommitmentsRequest";
    value: QueryPacketCommitmentsRequestAmino;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestSDKType {
    port_id: string;
    channel_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
export interface QueryPacketCommitmentsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse";
    value: Uint8Array;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseAmino {
    commitments: PacketStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
export interface QueryPacketCommitmentsResponseAminoMsg {
    type: "cosmos-sdk/QueryPacketCommitmentsResponse";
    value: QueryPacketCommitmentsResponseAmino;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseSDKType {
    commitments: PacketStateSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
export interface QueryPacketReceiptRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest";
    value: Uint8Array;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
export interface QueryPacketReceiptRequestAminoMsg {
    type: "cosmos-sdk/QueryPacketReceiptRequest";
    value: QueryPacketReceiptRequestAmino;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryPacketReceiptResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse";
    value: Uint8Array;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseAmino {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryPacketReceiptResponseAminoMsg {
    type: "cosmos-sdk/QueryPacketReceiptResponse";
    value: QueryPacketReceiptResponseAmino;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseSDKType {
    received: boolean;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
export interface QueryPacketAcknowledgementRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest";
    value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
export interface QueryPacketAcknowledgementRequestAminoMsg {
    type: "cosmos-sdk/QueryPacketAcknowledgementRequest";
    value: QueryPacketAcknowledgementRequestAmino;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryPacketAcknowledgementResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse";
    value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseAmino {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryPacketAcknowledgementResponseAminoMsg {
    type: "cosmos-sdk/QueryPacketAcknowledgementResponse";
    value: QueryPacketAcknowledgementResponseAmino;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseSDKType {
    acknowledgement: Uint8Array;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
export interface QueryPacketAcknowledgementsRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest";
    value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequestAmino;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
export interface QueryPacketAcknowledgementsRequestAminoMsg {
    type: "cosmos-sdk/QueryPacketAcknowledgementsRequest";
    value: QueryPacketAcknowledgementsRequestAmino;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestSDKType {
    port_id: string;
    channel_id: string;
    pagination?: PageRequestSDKType;
    packet_commitment_sequences: Long[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
export interface QueryPacketAcknowledgementsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse";
    value: Uint8Array;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseAmino {
    acknowledgements: PacketStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
export interface QueryPacketAcknowledgementsResponseAminoMsg {
    type: "cosmos-sdk/QueryPacketAcknowledgementsResponse";
    value: QueryPacketAcknowledgementsResponseAmino;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseSDKType {
    acknowledgements: PacketStateSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
export interface QueryUnreceivedPacketsRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest";
    value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
export interface QueryUnreceivedPacketsRequestAminoMsg {
    type: "cosmos-sdk/QueryUnreceivedPacketsRequest";
    value: QueryUnreceivedPacketsRequestAmino;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestSDKType {
    port_id: string;
    channel_id: string;
    packet_commitment_sequences: Long[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: Long[];
    /** query block height */
    height?: Height;
}
export interface QueryUnreceivedPacketsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse";
    value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseAmino {
    /** list of unreceived packet sequences */
    sequences: string[];
    /** query block height */
    height?: HeightAmino;
}
export interface QueryUnreceivedPacketsResponseAminoMsg {
    type: "cosmos-sdk/QueryUnreceivedPacketsResponse";
    value: QueryUnreceivedPacketsResponseAmino;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseSDKType {
    sequences: Long[];
    height?: HeightSDKType;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of acknowledgement sequences */
    packetAckSequences: Long[];
}
export interface QueryUnreceivedAcksRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest";
    value: Uint8Array;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of acknowledgement sequences */
    packet_ack_sequences: string[];
}
export interface QueryUnreceivedAcksRequestAminoMsg {
    type: "cosmos-sdk/QueryUnreceivedAcksRequest";
    value: QueryUnreceivedAcksRequestAmino;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestSDKType {
    port_id: string;
    channel_id: string;
    packet_ack_sequences: Long[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: Long[];
    /** query block height */
    height?: Height;
}
export interface QueryUnreceivedAcksResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse";
    value: Uint8Array;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseAmino {
    /** list of unreceived acknowledgement sequences */
    sequences: string[];
    /** query block height */
    height?: HeightAmino;
}
export interface QueryUnreceivedAcksResponseAminoMsg {
    type: "cosmos-sdk/QueryUnreceivedAcksResponse";
    value: QueryUnreceivedAcksResponseAmino;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseSDKType {
    sequences: Long[];
    height?: HeightSDKType;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
export interface QueryNextSequenceReceiveRequestProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest";
    value: Uint8Array;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
export interface QueryNextSequenceReceiveRequestAminoMsg {
    type: "cosmos-sdk/QueryNextSequenceReceiveRequest";
    value: QueryNextSequenceReceiveRequestAmino;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    nextSequenceReceive: Long;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
export interface QueryNextSequenceReceiveResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse";
    value: Uint8Array;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseAmino {
    /** next sequence receive number */
    next_sequence_receive: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryNextSequenceReceiveResponseAminoMsg {
    type: "cosmos-sdk/QueryNextSequenceReceiveResponse";
    value: QueryNextSequenceReceiveResponseAmino;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseSDKType {
    next_sequence_receive: Long;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
export declare const QueryChannelRequest: {
    typeUrl: string;
    encode(message: QueryChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest;
    fromPartial(object: Partial<QueryChannelRequest>): QueryChannelRequest;
    fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest;
    toAmino(message: QueryChannelRequest): QueryChannelRequestAmino;
    fromAminoMsg(object: QueryChannelRequestAminoMsg): QueryChannelRequest;
    toAminoMsg(message: QueryChannelRequest): QueryChannelRequestAminoMsg;
    fromProtoMsg(message: QueryChannelRequestProtoMsg): QueryChannelRequest;
    toProto(message: QueryChannelRequest): Uint8Array;
    toProtoMsg(message: QueryChannelRequest): QueryChannelRequestProtoMsg;
};
export declare const QueryChannelResponse: {
    typeUrl: string;
    encode(message: QueryChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse;
    fromPartial(object: Partial<QueryChannelResponse>): QueryChannelResponse;
    fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse;
    toAmino(message: QueryChannelResponse): QueryChannelResponseAmino;
    fromAminoMsg(object: QueryChannelResponseAminoMsg): QueryChannelResponse;
    toAminoMsg(message: QueryChannelResponse): QueryChannelResponseAminoMsg;
    fromProtoMsg(message: QueryChannelResponseProtoMsg): QueryChannelResponse;
    toProto(message: QueryChannelResponse): Uint8Array;
    toProtoMsg(message: QueryChannelResponse): QueryChannelResponseProtoMsg;
};
export declare const QueryChannelsRequest: {
    typeUrl: string;
    encode(message: QueryChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest;
    fromPartial(object: Partial<QueryChannelsRequest>): QueryChannelsRequest;
    fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest;
    toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino;
    fromAminoMsg(object: QueryChannelsRequestAminoMsg): QueryChannelsRequest;
    toAminoMsg(message: QueryChannelsRequest): QueryChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryChannelsRequestProtoMsg): QueryChannelsRequest;
    toProto(message: QueryChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryChannelsRequest): QueryChannelsRequestProtoMsg;
};
export declare const QueryChannelsResponse: {
    typeUrl: string;
    encode(message: QueryChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse;
    fromPartial(object: Partial<QueryChannelsResponse>): QueryChannelsResponse;
    fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse;
    toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino;
    fromAminoMsg(object: QueryChannelsResponseAminoMsg): QueryChannelsResponse;
    toAminoMsg(message: QueryChannelsResponse): QueryChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryChannelsResponseProtoMsg): QueryChannelsResponse;
    toProto(message: QueryChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryChannelsResponse): QueryChannelsResponseProtoMsg;
};
export declare const QueryConnectionChannelsRequest: {
    typeUrl: string;
    encode(message: QueryConnectionChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest;
    fromPartial(object: Partial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest;
    fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest;
    toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino;
    fromAminoMsg(object: QueryConnectionChannelsRequestAminoMsg): QueryConnectionChannelsRequest;
    toAminoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionChannelsRequestProtoMsg): QueryConnectionChannelsRequest;
    toProto(message: QueryConnectionChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestProtoMsg;
};
export declare const QueryConnectionChannelsResponse: {
    typeUrl: string;
    encode(message: QueryConnectionChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse;
    fromPartial(object: Partial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse;
    fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse;
    toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino;
    fromAminoMsg(object: QueryConnectionChannelsResponseAminoMsg): QueryConnectionChannelsResponse;
    toAminoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionChannelsResponseProtoMsg): QueryConnectionChannelsResponse;
    toProto(message: QueryConnectionChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseProtoMsg;
};
export declare const QueryChannelClientStateRequest: {
    typeUrl: string;
    encode(message: QueryChannelClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest;
    fromPartial(object: Partial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest;
    fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest;
    toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino;
    fromAminoMsg(object: QueryChannelClientStateRequestAminoMsg): QueryChannelClientStateRequest;
    toAminoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryChannelClientStateRequestProtoMsg): QueryChannelClientStateRequest;
    toProto(message: QueryChannelClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestProtoMsg;
};
export declare const QueryChannelClientStateResponse: {
    typeUrl: string;
    encode(message: QueryChannelClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse;
    fromPartial(object: Partial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse;
    fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse;
    toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino;
    fromAminoMsg(object: QueryChannelClientStateResponseAminoMsg): QueryChannelClientStateResponse;
    toAminoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryChannelClientStateResponseProtoMsg): QueryChannelClientStateResponse;
    toProto(message: QueryChannelClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseProtoMsg;
};
export declare const QueryChannelConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryChannelConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest;
    fromPartial(object: Partial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest;
    fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest;
    toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino;
    fromAminoMsg(object: QueryChannelConsensusStateRequestAminoMsg): QueryChannelConsensusStateRequest;
    toAminoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryChannelConsensusStateRequestProtoMsg): QueryChannelConsensusStateRequest;
    toProto(message: QueryChannelConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestProtoMsg;
};
export declare const QueryChannelConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryChannelConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse;
    fromPartial(object: Partial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse;
    fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse;
    toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino;
    fromAminoMsg(object: QueryChannelConsensusStateResponseAminoMsg): QueryChannelConsensusStateResponse;
    toAminoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryChannelConsensusStateResponseProtoMsg): QueryChannelConsensusStateResponse;
    toProto(message: QueryChannelConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseProtoMsg;
};
export declare const QueryPacketCommitmentRequest: {
    typeUrl: string;
    encode(message: QueryPacketCommitmentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest;
    fromPartial(object: Partial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest;
    fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest;
    toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino;
    fromAminoMsg(object: QueryPacketCommitmentRequestAminoMsg): QueryPacketCommitmentRequest;
    toAminoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentRequestProtoMsg): QueryPacketCommitmentRequest;
    toProto(message: QueryPacketCommitmentRequest): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestProtoMsg;
};
export declare const QueryPacketCommitmentResponse: {
    typeUrl: string;
    encode(message: QueryPacketCommitmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse;
    fromPartial(object: Partial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse;
    fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse;
    toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino;
    fromAminoMsg(object: QueryPacketCommitmentResponseAminoMsg): QueryPacketCommitmentResponse;
    toAminoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentResponseProtoMsg): QueryPacketCommitmentResponse;
    toProto(message: QueryPacketCommitmentResponse): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseProtoMsg;
};
export declare const QueryPacketCommitmentsRequest: {
    typeUrl: string;
    encode(message: QueryPacketCommitmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest;
    fromPartial(object: Partial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest;
    fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest;
    toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino;
    fromAminoMsg(object: QueryPacketCommitmentsRequestAminoMsg): QueryPacketCommitmentsRequest;
    toAminoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentsRequestProtoMsg): QueryPacketCommitmentsRequest;
    toProto(message: QueryPacketCommitmentsRequest): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestProtoMsg;
};
export declare const QueryPacketCommitmentsResponse: {
    typeUrl: string;
    encode(message: QueryPacketCommitmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse;
    fromPartial(object: Partial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse;
    fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse;
    toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino;
    fromAminoMsg(object: QueryPacketCommitmentsResponseAminoMsg): QueryPacketCommitmentsResponse;
    toAminoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentsResponseProtoMsg): QueryPacketCommitmentsResponse;
    toProto(message: QueryPacketCommitmentsResponse): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseProtoMsg;
};
export declare const QueryPacketReceiptRequest: {
    typeUrl: string;
    encode(message: QueryPacketReceiptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest;
    fromPartial(object: Partial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest;
    fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest;
    toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino;
    fromAminoMsg(object: QueryPacketReceiptRequestAminoMsg): QueryPacketReceiptRequest;
    toAminoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAminoMsg;
    fromProtoMsg(message: QueryPacketReceiptRequestProtoMsg): QueryPacketReceiptRequest;
    toProto(message: QueryPacketReceiptRequest): Uint8Array;
    toProtoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestProtoMsg;
};
export declare const QueryPacketReceiptResponse: {
    typeUrl: string;
    encode(message: QueryPacketReceiptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse;
    fromPartial(object: Partial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse;
    fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse;
    toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino;
    fromAminoMsg(object: QueryPacketReceiptResponseAminoMsg): QueryPacketReceiptResponse;
    toAminoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAminoMsg;
    fromProtoMsg(message: QueryPacketReceiptResponseProtoMsg): QueryPacketReceiptResponse;
    toProto(message: QueryPacketReceiptResponse): Uint8Array;
    toProtoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseProtoMsg;
};
export declare const QueryPacketAcknowledgementRequest: {
    typeUrl: string;
    encode(message: QueryPacketAcknowledgementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest;
    fromPartial(object: Partial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest;
    fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest;
    toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementRequestAminoMsg): QueryPacketAcknowledgementRequest;
    toAminoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementRequestProtoMsg): QueryPacketAcknowledgementRequest;
    toProto(message: QueryPacketAcknowledgementRequest): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestProtoMsg;
};
export declare const QueryPacketAcknowledgementResponse: {
    typeUrl: string;
    encode(message: QueryPacketAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse;
    fromPartial(object: Partial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse;
    fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse;
    toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementResponseAminoMsg): QueryPacketAcknowledgementResponse;
    toAminoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementResponseProtoMsg): QueryPacketAcknowledgementResponse;
    toProto(message: QueryPacketAcknowledgementResponse): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseProtoMsg;
};
export declare const QueryPacketAcknowledgementsRequest: {
    typeUrl: string;
    encode(message: QueryPacketAcknowledgementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest;
    fromPartial(object: Partial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest;
    fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest;
    toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementsRequestAminoMsg): QueryPacketAcknowledgementsRequest;
    toAminoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementsRequestProtoMsg): QueryPacketAcknowledgementsRequest;
    toProto(message: QueryPacketAcknowledgementsRequest): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestProtoMsg;
};
export declare const QueryPacketAcknowledgementsResponse: {
    typeUrl: string;
    encode(message: QueryPacketAcknowledgementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse;
    fromPartial(object: Partial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse;
    fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse;
    toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementsResponseAminoMsg): QueryPacketAcknowledgementsResponse;
    toAminoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementsResponseProtoMsg): QueryPacketAcknowledgementsResponse;
    toProto(message: QueryPacketAcknowledgementsResponse): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseProtoMsg;
};
export declare const QueryUnreceivedPacketsRequest: {
    typeUrl: string;
    encode(message: QueryUnreceivedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest;
    fromPartial(object: Partial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest;
    fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest;
    toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino;
    fromAminoMsg(object: QueryUnreceivedPacketsRequestAminoMsg): QueryUnreceivedPacketsRequest;
    toAminoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAminoMsg;
    fromProtoMsg(message: QueryUnreceivedPacketsRequestProtoMsg): QueryUnreceivedPacketsRequest;
    toProto(message: QueryUnreceivedPacketsRequest): Uint8Array;
    toProtoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestProtoMsg;
};
export declare const QueryUnreceivedPacketsResponse: {
    typeUrl: string;
    encode(message: QueryUnreceivedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse;
    fromPartial(object: Partial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse;
    fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse;
    toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino;
    fromAminoMsg(object: QueryUnreceivedPacketsResponseAminoMsg): QueryUnreceivedPacketsResponse;
    toAminoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAminoMsg;
    fromProtoMsg(message: QueryUnreceivedPacketsResponseProtoMsg): QueryUnreceivedPacketsResponse;
    toProto(message: QueryUnreceivedPacketsResponse): Uint8Array;
    toProtoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseProtoMsg;
};
export declare const QueryUnreceivedAcksRequest: {
    typeUrl: string;
    encode(message: QueryUnreceivedAcksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest;
    fromPartial(object: Partial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest;
    fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest;
    toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino;
    fromAminoMsg(object: QueryUnreceivedAcksRequestAminoMsg): QueryUnreceivedAcksRequest;
    toAminoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAminoMsg;
    fromProtoMsg(message: QueryUnreceivedAcksRequestProtoMsg): QueryUnreceivedAcksRequest;
    toProto(message: QueryUnreceivedAcksRequest): Uint8Array;
    toProtoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestProtoMsg;
};
export declare const QueryUnreceivedAcksResponse: {
    typeUrl: string;
    encode(message: QueryUnreceivedAcksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse;
    fromPartial(object: Partial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse;
    fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse;
    toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino;
    fromAminoMsg(object: QueryUnreceivedAcksResponseAminoMsg): QueryUnreceivedAcksResponse;
    toAminoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAminoMsg;
    fromProtoMsg(message: QueryUnreceivedAcksResponseProtoMsg): QueryUnreceivedAcksResponse;
    toProto(message: QueryUnreceivedAcksResponse): Uint8Array;
    toProtoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseProtoMsg;
};
export declare const QueryNextSequenceReceiveRequest: {
    typeUrl: string;
    encode(message: QueryNextSequenceReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest;
    fromPartial(object: Partial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest;
    fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest;
    toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino;
    fromAminoMsg(object: QueryNextSequenceReceiveRequestAminoMsg): QueryNextSequenceReceiveRequest;
    toAminoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAminoMsg;
    fromProtoMsg(message: QueryNextSequenceReceiveRequestProtoMsg): QueryNextSequenceReceiveRequest;
    toProto(message: QueryNextSequenceReceiveRequest): Uint8Array;
    toProtoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestProtoMsg;
};
export declare const QueryNextSequenceReceiveResponse: {
    typeUrl: string;
    encode(message: QueryNextSequenceReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse;
    fromPartial(object: Partial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse;
    fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse;
    toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino;
    fromAminoMsg(object: QueryNextSequenceReceiveResponseAminoMsg): QueryNextSequenceReceiveResponse;
    toAminoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAminoMsg;
    fromProtoMsg(message: QueryNextSequenceReceiveResponseProtoMsg): QueryNextSequenceReceiveResponse;
    toProto(message: QueryNextSequenceReceiveResponse): Uint8Array;
    toProtoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseProtoMsg;
};
