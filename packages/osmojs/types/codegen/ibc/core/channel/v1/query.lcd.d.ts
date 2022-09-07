import { LCDClient } from "@osmonauts/lcd";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    channel(params: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(params?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
