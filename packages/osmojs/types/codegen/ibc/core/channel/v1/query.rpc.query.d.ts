import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryChannelRequest, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponseSDKType>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponseSDKType>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponseSDKType>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponseSDKType>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponseSDKType>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponseSDKType>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponseSDKType>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponseSDKType>;
};
