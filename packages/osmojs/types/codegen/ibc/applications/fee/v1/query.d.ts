import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees, IdentifiedPacketFeesAmino, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelAmino, FeeEnabledChannelSDKType } from "./genesis";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
export interface QueryIncentivizedPacketsRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryIncentivizedPacketsRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsRequest";
    value: QueryIncentivizedPacketsRequestAmino;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
    pagination?: PageRequestSDKType;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryIncentivizedPacketsResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseAmino {
    /** list of identified fees for incentivized packets */
    incentivized_packets: IdentifiedPacketFeesAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryIncentivizedPacketsResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsResponse";
    value: QueryIncentivizedPacketsResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId?: PacketId;
    /** block height at which to query */
    queryHeight: Long;
}
export interface QueryIncentivizedPacketRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest";
    value: Uint8Array;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestAmino {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packet_id?: PacketIdAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryIncentivizedPacketRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketRequest";
    value: QueryIncentivizedPacketRequestAmino;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
    packet_id?: PacketIdSDKType;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket?: IdentifiedPacketFees;
}
export interface QueryIncentivizedPacketResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseAmino {
    /** the identified fees for the incentivized packet */
    incentivized_packet?: IdentifiedPacketFeesAmino;
}
export interface QueryIncentivizedPacketResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketResponse";
    value: QueryIncentivizedPacketResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
    incentivized_packet?: IdentifiedPacketFeesSDKType;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: Long;
}
export interface QueryIncentivizedPacketsForChannelRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest";
    value: Uint8Array;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    port_id: string;
    channel_id: string;
    /** Height to query at */
    query_height: string;
}
export interface QueryIncentivizedPacketsForChannelRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest";
    value: QueryIncentivizedPacketsForChannelRequestAmino;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
    pagination?: PageRequestSDKType;
    port_id: string;
    channel_id: string;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryIncentivizedPacketsForChannelResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseAmino {
    /** Map of all incentivized_packets */
    incentivized_packets: IdentifiedPacketFeesAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryIncentivizedPacketsForChannelResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse";
    value: QueryIncentivizedPacketsForChannelResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
export interface QueryTotalRecvFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest";
    value: Uint8Array;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalRecvFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalRecvFeesRequest";
    value: QueryTotalRecvFeesRequestAmino;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
export interface QueryTotalRecvFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse";
    value: Uint8Array;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseAmino {
    /** the total packet receive fees */
    recv_fees: CoinAmino[];
}
export interface QueryTotalRecvFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalRecvFeesResponse";
    value: QueryTotalRecvFeesResponseAmino;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
    recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
export interface QueryTotalAckFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest";
    value: Uint8Array;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalAckFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalAckFeesRequest";
    value: QueryTotalAckFeesRequestAmino;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
export interface QueryTotalAckFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse";
    value: Uint8Array;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseAmino {
    /** the total packet acknowledgement fees */
    ack_fees: CoinAmino[];
}
export interface QueryTotalAckFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalAckFeesResponse";
    value: QueryTotalAckFeesResponseAmino;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
    ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
export interface QueryTotalTimeoutFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest";
    value: Uint8Array;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalTimeoutFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalTimeoutFeesRequest";
    value: QueryTotalTimeoutFeesRequestAmino;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
export interface QueryTotalTimeoutFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse";
    value: Uint8Array;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseAmino {
    /** the total packet timeout fees */
    timeout_fees: CoinAmino[];
}
export interface QueryTotalTimeoutFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalTimeoutFeesResponse";
    value: QueryTotalTimeoutFeesResponseAmino;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
    timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
export interface QueryPayeeRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest";
    value: Uint8Array;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
export interface QueryPayeeRequestAminoMsg {
    type: "cosmos-sdk/QueryPayeeRequest";
    value: QueryPayeeRequestAmino;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
export interface QueryPayeeResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse";
    value: Uint8Array;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseAmino {
    /** the payee address to which packet fees are paid out */
    payee_address: string;
}
export interface QueryPayeeResponseAminoMsg {
    type: "cosmos-sdk/QueryPayeeResponse";
    value: QueryPayeeResponseAmino;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
    payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
export interface QueryCounterpartyPayeeRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest";
    value: Uint8Array;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
export interface QueryCounterpartyPayeeRequestAminoMsg {
    type: "cosmos-sdk/QueryCounterpartyPayeeRequest";
    value: QueryCounterpartyPayeeRequestAmino;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
export interface QueryCounterpartyPayeeResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse";
    value: Uint8Array;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseAmino {
    /** the counterparty payee address used to compensate forward relaying */
    counterparty_payee: string;
}
export interface QueryCounterpartyPayeeResponseAminoMsg {
    type: "cosmos-sdk/QueryCounterpartyPayeeResponse";
    value: QueryCounterpartyPayeeResponseAmino;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
    counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
export interface QueryFeeEnabledChannelsRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryFeeEnabledChannelsRequestAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelsRequest";
    value: QueryFeeEnabledChannelsRequestAmino;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
    pagination?: PageRequestSDKType;
    query_height: Long;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryFeeEnabledChannelsResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseAmino {
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannelAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryFeeEnabledChannelsResponseAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelsResponse";
    value: QueryFeeEnabledChannelsResponseAmino;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
    fee_enabled_channels: FeeEnabledChannelSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface QueryFeeEnabledChannelRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface QueryFeeEnabledChannelRequestAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelRequest";
    value: QueryFeeEnabledChannelRequestAmino;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
export interface QueryFeeEnabledChannelResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseAmino {
    /** boolean flag representing the fee enabled channel status */
    fee_enabled: boolean;
}
export interface QueryFeeEnabledChannelResponseAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelResponse";
    value: QueryFeeEnabledChannelResponseAmino;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
    fee_enabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest;
    fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest;
    toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest;
    toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsRequestProtoMsg): QueryIncentivizedPacketsRequest;
    toProto(message: QueryIncentivizedPacketsRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestProtoMsg;
};
export declare const QueryIncentivizedPacketsResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse;
    fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse;
    toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse;
    toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsResponseProtoMsg): QueryIncentivizedPacketsResponse;
    toProto(message: QueryIncentivizedPacketsResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseProtoMsg;
};
export declare const QueryIncentivizedPacketRequest: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest;
    fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest;
    toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest;
    toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketRequestProtoMsg): QueryIncentivizedPacketRequest;
    toProto(message: QueryIncentivizedPacketRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestProtoMsg;
};
export declare const QueryIncentivizedPacketResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse;
    fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse;
    toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse;
    toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketResponseProtoMsg): QueryIncentivizedPacketResponse;
    toProto(message: QueryIncentivizedPacketResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseProtoMsg;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest;
    fromAmino(object: QueryIncentivizedPacketsForChannelRequestAmino): QueryIncentivizedPacketsForChannelRequest;
    toAmino(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsForChannelRequestAminoMsg): QueryIncentivizedPacketsForChannelRequest;
    toAminoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsForChannelRequestProtoMsg): QueryIncentivizedPacketsForChannelRequest;
    toProto(message: QueryIncentivizedPacketsForChannelRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestProtoMsg;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse;
    fromAmino(object: QueryIncentivizedPacketsForChannelResponseAmino): QueryIncentivizedPacketsForChannelResponse;
    toAmino(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsForChannelResponseAminoMsg): QueryIncentivizedPacketsForChannelResponse;
    toAminoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsForChannelResponseProtoMsg): QueryIncentivizedPacketsForChannelResponse;
    toProto(message: QueryIncentivizedPacketsForChannelResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseProtoMsg;
};
export declare const QueryTotalRecvFeesRequest: {
    typeUrl: string;
    encode(message: QueryTotalRecvFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest;
    fromPartial(object: Partial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest;
    fromAmino(object: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest;
    toAmino(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino;
    fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest;
    toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalRecvFeesRequestProtoMsg): QueryTotalRecvFeesRequest;
    toProto(message: QueryTotalRecvFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestProtoMsg;
};
export declare const QueryTotalRecvFeesResponse: {
    typeUrl: string;
    encode(message: QueryTotalRecvFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse;
    fromPartial(object: Partial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse;
    fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse;
    toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino;
    fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse;
    toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalRecvFeesResponseProtoMsg): QueryTotalRecvFeesResponse;
    toProto(message: QueryTotalRecvFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseProtoMsg;
};
export declare const QueryTotalAckFeesRequest: {
    typeUrl: string;
    encode(message: QueryTotalAckFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest;
    fromPartial(object: Partial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest;
    fromAmino(object: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest;
    toAmino(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino;
    fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest;
    toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalAckFeesRequestProtoMsg): QueryTotalAckFeesRequest;
    toProto(message: QueryTotalAckFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestProtoMsg;
};
export declare const QueryTotalAckFeesResponse: {
    typeUrl: string;
    encode(message: QueryTotalAckFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse;
    fromPartial(object: Partial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse;
    fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse;
    toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino;
    fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse;
    toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalAckFeesResponseProtoMsg): QueryTotalAckFeesResponse;
    toProto(message: QueryTotalAckFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseProtoMsg;
};
export declare const QueryTotalTimeoutFeesRequest: {
    typeUrl: string;
    encode(message: QueryTotalTimeoutFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest;
    fromPartial(object: Partial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest;
    fromAmino(object: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest;
    toAmino(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino;
    fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest;
    toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalTimeoutFeesRequestProtoMsg): QueryTotalTimeoutFeesRequest;
    toProto(message: QueryTotalTimeoutFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestProtoMsg;
};
export declare const QueryTotalTimeoutFeesResponse: {
    typeUrl: string;
    encode(message: QueryTotalTimeoutFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse;
    fromPartial(object: Partial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse;
    fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse;
    toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino;
    fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse;
    toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalTimeoutFeesResponseProtoMsg): QueryTotalTimeoutFeesResponse;
    toProto(message: QueryTotalTimeoutFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseProtoMsg;
};
export declare const QueryPayeeRequest: {
    typeUrl: string;
    encode(message: QueryPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest;
    fromPartial(object: Partial<QueryPayeeRequest>): QueryPayeeRequest;
    fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest;
    toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino;
    fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest;
    toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg;
    fromProtoMsg(message: QueryPayeeRequestProtoMsg): QueryPayeeRequest;
    toProto(message: QueryPayeeRequest): Uint8Array;
    toProtoMsg(message: QueryPayeeRequest): QueryPayeeRequestProtoMsg;
};
export declare const QueryPayeeResponse: {
    typeUrl: string;
    encode(message: QueryPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse;
    fromPartial(object: Partial<QueryPayeeResponse>): QueryPayeeResponse;
    fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse;
    toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino;
    fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse;
    toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg;
    fromProtoMsg(message: QueryPayeeResponseProtoMsg): QueryPayeeResponse;
    toProto(message: QueryPayeeResponse): Uint8Array;
    toProtoMsg(message: QueryPayeeResponse): QueryPayeeResponseProtoMsg;
};
export declare const QueryCounterpartyPayeeRequest: {
    typeUrl: string;
    encode(message: QueryCounterpartyPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest;
    fromPartial(object: Partial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest;
    fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest;
    toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino;
    fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest;
    toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg;
    fromProtoMsg(message: QueryCounterpartyPayeeRequestProtoMsg): QueryCounterpartyPayeeRequest;
    toProto(message: QueryCounterpartyPayeeRequest): Uint8Array;
    toProtoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestProtoMsg;
};
export declare const QueryCounterpartyPayeeResponse: {
    typeUrl: string;
    encode(message: QueryCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse;
    fromPartial(object: Partial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse;
    fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse;
    toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino;
    fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse;
    toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg;
    fromProtoMsg(message: QueryCounterpartyPayeeResponseProtoMsg): QueryCounterpartyPayeeResponse;
    toProto(message: QueryCounterpartyPayeeResponse): Uint8Array;
    toProtoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseProtoMsg;
};
export declare const QueryFeeEnabledChannelsRequest: {
    typeUrl: string;
    encode(message: QueryFeeEnabledChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest;
    fromPartial(object: Partial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest;
    fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest;
    toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest;
    toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelsRequestProtoMsg): QueryFeeEnabledChannelsRequest;
    toProto(message: QueryFeeEnabledChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestProtoMsg;
};
export declare const QueryFeeEnabledChannelsResponse: {
    typeUrl: string;
    encode(message: QueryFeeEnabledChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse;
    fromPartial(object: Partial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse;
    fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse;
    toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse;
    toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelsResponseProtoMsg): QueryFeeEnabledChannelsResponse;
    toProto(message: QueryFeeEnabledChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseProtoMsg;
};
export declare const QueryFeeEnabledChannelRequest: {
    typeUrl: string;
    encode(message: QueryFeeEnabledChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest;
    fromPartial(object: Partial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest;
    fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest;
    toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest;
    toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelRequestProtoMsg): QueryFeeEnabledChannelRequest;
    toProto(message: QueryFeeEnabledChannelRequest): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestProtoMsg;
};
export declare const QueryFeeEnabledChannelResponse: {
    typeUrl: string;
    encode(message: QueryFeeEnabledChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse;
    fromPartial(object: Partial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse;
    fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse;
    toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse;
    toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelResponseProtoMsg): QueryFeeEnabledChannelResponse;
    toProto(message: QueryFeeEnabledChannelResponse): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseProtoMsg;
};
