import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees, IdentifiedPacketFeesAmino, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelAmino, FeeEnabledChannelSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
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
  query_height?: string;
}
export interface QueryIncentivizedPacketsRequestAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketsRequest";
  value: QueryIncentivizedPacketsRequestAmino;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
  pagination?: PageRequestSDKType;
  query_height: bigint;
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
  incentivized_packets?: IdentifiedPacketFeesAmino[];
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
  packetId: PacketId;
  /** block height at which to query */
  queryHeight: bigint;
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
  query_height?: string;
}
export interface QueryIncentivizedPacketRequestAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketRequest";
  value: QueryIncentivizedPacketRequestAmino;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
  packet_id: PacketIdSDKType;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees;
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
  incentivized_packet: IdentifiedPacketFeesSDKType;
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
  queryHeight: bigint;
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
  port_id?: string;
  channel_id?: string;
  /** Height to query at */
  query_height?: string;
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
  query_height: bigint;
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
  incentivized_packets?: IdentifiedPacketFeesAmino[];
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
  packetId: PacketId;
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
  packet_id: PacketIdSDKType;
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
  recv_fees?: CoinAmino[];
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
  packetId: PacketId;
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
  packet_id: PacketIdSDKType;
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
  ack_fees?: CoinAmino[];
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
  packetId: PacketId;
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
  packet_id: PacketIdSDKType;
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
  timeout_fees?: CoinAmino[];
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
  channel_id?: string;
  /** the relayer address to which the distribution address is registered */
  relayer?: string;
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
  payee_address?: string;
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
  channel_id?: string;
  /** the relayer address to which the counterparty is registered */
  relayer?: string;
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
  counterparty_payee?: string;
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
  queryHeight: bigint;
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
  query_height?: string;
}
export interface QueryFeeEnabledChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelsRequest";
  value: QueryFeeEnabledChannelsRequestAmino;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
  pagination?: PageRequestSDKType;
  query_height: bigint;
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
  fee_enabled_channels?: FeeEnabledChannelAmino[];
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
  port_id?: string;
  /** unique channel identifier */
  channel_id?: string;
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
  fee_enabled?: boolean;
}
export interface QueryFeeEnabledChannelResponseAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelResponse";
  value: QueryFeeEnabledChannelResponseAmino;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
  fee_enabled: boolean;
}
function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return {
    pagination: undefined,
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsRequest",
  is(o: any): o is QueryIncentivizedPacketsRequest {
    return o && (o.$typeUrl === QueryIncentivizedPacketsRequest.typeUrl || typeof o.queryHeight === "bigint");
  },
  isSDK(o: any): o is QueryIncentivizedPacketsRequestSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketsRequest.typeUrl || typeof o.query_height === "bigint");
  },
  isAmino(o: any): o is QueryIncentivizedPacketsRequestAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketsRequest.typeUrl || typeof o.query_height === "bigint");
  },
  encode(message: QueryIncentivizedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsRequestProtoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsRequest): Uint8Array {
    return QueryIncentivizedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketsRequest.typeUrl, QueryIncentivizedPacketsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketsRequest.aminoType, QueryIncentivizedPacketsRequest.typeUrl);
function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return {
    incentivizedPackets: [],
    pagination: undefined
  };
}
export const QueryIncentivizedPacketsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsResponse",
  is(o: any): o is QueryIncentivizedPacketsResponse {
    return o && (o.$typeUrl === QueryIncentivizedPacketsResponse.typeUrl || Array.isArray(o.incentivizedPackets) && (!o.incentivizedPackets.length || IdentifiedPacketFees.is(o.incentivizedPackets[0])));
  },
  isSDK(o: any): o is QueryIncentivizedPacketsResponseSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketsResponse.typeUrl || Array.isArray(o.incentivized_packets) && (!o.incentivized_packets.length || IdentifiedPacketFees.isSDK(o.incentivized_packets[0])));
  },
  isAmino(o: any): o is QueryIncentivizedPacketsResponseAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketsResponse.typeUrl || Array.isArray(o.incentivized_packets) && (!o.incentivized_packets.length || IdentifiedPacketFees.isAmino(o.incentivized_packets[0])));
  },
  encode(message: QueryIncentivizedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivized_packets?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsResponseProtoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsResponse): Uint8Array {
    return QueryIncentivizedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketsResponse.typeUrl, QueryIncentivizedPacketsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketsResponse.aminoType, QueryIncentivizedPacketsResponse.typeUrl);
function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return {
    packetId: PacketId.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketRequest",
  is(o: any): o is QueryIncentivizedPacketRequest {
    return o && (o.$typeUrl === QueryIncentivizedPacketRequest.typeUrl || PacketId.is(o.packetId) && typeof o.queryHeight === "bigint");
  },
  isSDK(o: any): o is QueryIncentivizedPacketRequestSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketRequest.typeUrl || PacketId.isSDK(o.packet_id) && typeof o.query_height === "bigint");
  },
  isAmino(o: any): o is QueryIncentivizedPacketRequestAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketRequest.typeUrl || PacketId.isAmino(o.packet_id) && typeof o.query_height === "bigint");
  },
  encode(message: QueryIncentivizedPacketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketRequestProtoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketRequest): Uint8Array {
    return QueryIncentivizedPacketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketRequest.typeUrl, QueryIncentivizedPacketRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketRequest.aminoType, QueryIncentivizedPacketRequest.typeUrl);
function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return {
    incentivizedPacket: IdentifiedPacketFees.fromPartial({})
  };
}
export const QueryIncentivizedPacketResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketResponse",
  is(o: any): o is QueryIncentivizedPacketResponse {
    return o && (o.$typeUrl === QueryIncentivizedPacketResponse.typeUrl || IdentifiedPacketFees.is(o.incentivizedPacket));
  },
  isSDK(o: any): o is QueryIncentivizedPacketResponseSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketResponse.typeUrl || IdentifiedPacketFees.isSDK(o.incentivized_packet));
  },
  isAmino(o: any): o is QueryIncentivizedPacketResponseAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketResponse.typeUrl || IdentifiedPacketFees.isAmino(o.incentivized_packet));
  },
  encode(message: QueryIncentivizedPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = object.incentivizedPacket !== undefined && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : undefined;
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    if (object.incentivized_packet !== undefined && object.incentivized_packet !== null) {
      message.incentivizedPacket = IdentifiedPacketFees.fromAmino(object.incentivized_packet);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino {
    const obj: any = {};
    obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toAmino(message.incentivizedPacket) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketResponseProtoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketResponse): Uint8Array {
    return QueryIncentivizedPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketResponse.typeUrl, QueryIncentivizedPacketResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketResponse.aminoType, QueryIncentivizedPacketResponse.typeUrl);
function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return {
    pagination: undefined,
    portId: "",
    channelId: "",
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsForChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
  is(o: any): o is QueryIncentivizedPacketsForChannelRequest {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.queryHeight === "bigint");
  },
  isSDK(o: any): o is QueryIncentivizedPacketsForChannelRequestSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.query_height === "bigint");
  },
  isAmino(o: any): o is QueryIncentivizedPacketsForChannelRequestAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.query_height === "bigint");
  },
  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelRequestAmino): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelRequestAminoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelRequestProtoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelRequest): Uint8Array {
    return QueryIncentivizedPacketsForChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketsForChannelRequest.typeUrl, QueryIncentivizedPacketsForChannelRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketsForChannelRequest.aminoType, QueryIncentivizedPacketsForChannelRequest.typeUrl);
function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return {
    incentivizedPackets: [],
    pagination: undefined
  };
}
export const QueryIncentivizedPacketsForChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
  is(o: any): o is QueryIncentivizedPacketsForChannelResponse {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelResponse.typeUrl || Array.isArray(o.incentivizedPackets) && (!o.incentivizedPackets.length || IdentifiedPacketFees.is(o.incentivizedPackets[0])));
  },
  isSDK(o: any): o is QueryIncentivizedPacketsForChannelResponseSDKType {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelResponse.typeUrl || Array.isArray(o.incentivized_packets) && (!o.incentivized_packets.length || IdentifiedPacketFees.isSDK(o.incentivized_packets[0])));
  },
  isAmino(o: any): o is QueryIncentivizedPacketsForChannelResponseAmino {
    return o && (o.$typeUrl === QueryIncentivizedPacketsForChannelResponse.typeUrl || Array.isArray(o.incentivized_packets) && (!o.incentivized_packets.length || IdentifiedPacketFees.isAmino(o.incentivized_packets[0])));
  },
  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelResponseAmino): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivized_packets?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelResponseAminoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelResponseProtoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelResponse): Uint8Array {
    return QueryIncentivizedPacketsForChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIncentivizedPacketsForChannelResponse.typeUrl, QueryIncentivizedPacketsForChannelResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryIncentivizedPacketsForChannelResponse.aminoType, QueryIncentivizedPacketsForChannelResponse.typeUrl);
function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalRecvFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalRecvFeesRequest",
  is(o: any): o is QueryTotalRecvFeesRequest {
    return o && (o.$typeUrl === QueryTotalRecvFeesRequest.typeUrl || PacketId.is(o.packetId));
  },
  isSDK(o: any): o is QueryTotalRecvFeesRequestSDKType {
    return o && (o.$typeUrl === QueryTotalRecvFeesRequest.typeUrl || PacketId.isSDK(o.packet_id));
  },
  isAmino(o: any): o is QueryTotalRecvFeesRequestAmino {
    return o && (o.$typeUrl === QueryTotalRecvFeesRequest.typeUrl || PacketId.isAmino(o.packet_id));
  },
  encode(message: QueryTotalRecvFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesRequestProtoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesRequest): Uint8Array {
    return QueryTotalRecvFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalRecvFeesRequest.typeUrl, QueryTotalRecvFeesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalRecvFeesRequest.aminoType, QueryTotalRecvFeesRequest.typeUrl);
function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return {
    recvFees: []
  };
}
export const QueryTotalRecvFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalRecvFeesResponse",
  is(o: any): o is QueryTotalRecvFeesResponse {
    return o && (o.$typeUrl === QueryTotalRecvFeesResponse.typeUrl || Array.isArray(o.recvFees) && (!o.recvFees.length || Coin.is(o.recvFees[0])));
  },
  isSDK(o: any): o is QueryTotalRecvFeesResponseSDKType {
    return o && (o.$typeUrl === QueryTotalRecvFeesResponse.typeUrl || Array.isArray(o.recv_fees) && (!o.recv_fees.length || Coin.isSDK(o.recv_fees[0])));
  },
  isAmino(o: any): o is QueryTotalRecvFeesResponseAmino {
    return o && (o.$typeUrl === QueryTotalRecvFeesResponse.typeUrl || Array.isArray(o.recv_fees) && (!o.recv_fees.length || Coin.isAmino(o.recv_fees[0])));
  },
  encode(message: QueryTotalRecvFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recv_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesResponseProtoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesResponse): Uint8Array {
    return QueryTotalRecvFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalRecvFeesResponse.typeUrl, QueryTotalRecvFeesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalRecvFeesResponse.aminoType, QueryTotalRecvFeesResponse.typeUrl);
function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalAckFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalAckFeesRequest",
  is(o: any): o is QueryTotalAckFeesRequest {
    return o && (o.$typeUrl === QueryTotalAckFeesRequest.typeUrl || PacketId.is(o.packetId));
  },
  isSDK(o: any): o is QueryTotalAckFeesRequestSDKType {
    return o && (o.$typeUrl === QueryTotalAckFeesRequest.typeUrl || PacketId.isSDK(o.packet_id));
  },
  isAmino(o: any): o is QueryTotalAckFeesRequestAmino {
    return o && (o.$typeUrl === QueryTotalAckFeesRequest.typeUrl || PacketId.isAmino(o.packet_id));
  },
  encode(message: QueryTotalAckFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesRequestProtoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesRequest): Uint8Array {
    return QueryTotalAckFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalAckFeesRequest.typeUrl, QueryTotalAckFeesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalAckFeesRequest.aminoType, QueryTotalAckFeesRequest.typeUrl);
function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return {
    ackFees: []
  };
}
export const QueryTotalAckFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalAckFeesResponse",
  is(o: any): o is QueryTotalAckFeesResponse {
    return o && (o.$typeUrl === QueryTotalAckFeesResponse.typeUrl || Array.isArray(o.ackFees) && (!o.ackFees.length || Coin.is(o.ackFees[0])));
  },
  isSDK(o: any): o is QueryTotalAckFeesResponseSDKType {
    return o && (o.$typeUrl === QueryTotalAckFeesResponse.typeUrl || Array.isArray(o.ack_fees) && (!o.ack_fees.length || Coin.isSDK(o.ack_fees[0])));
  },
  isAmino(o: any): o is QueryTotalAckFeesResponseAmino {
    return o && (o.$typeUrl === QueryTotalAckFeesResponse.typeUrl || Array.isArray(o.ack_fees) && (!o.ack_fees.length || Coin.isAmino(o.ack_fees[0])));
  },
  encode(message: QueryTotalAckFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ack_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesResponseProtoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesResponse): Uint8Array {
    return QueryTotalAckFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalAckFeesResponse.typeUrl, QueryTotalAckFeesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalAckFeesResponse.aminoType, QueryTotalAckFeesResponse.typeUrl);
function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalTimeoutFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
  is(o: any): o is QueryTotalTimeoutFeesRequest {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesRequest.typeUrl || PacketId.is(o.packetId));
  },
  isSDK(o: any): o is QueryTotalTimeoutFeesRequestSDKType {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesRequest.typeUrl || PacketId.isSDK(o.packet_id));
  },
  isAmino(o: any): o is QueryTotalTimeoutFeesRequestAmino {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesRequest.typeUrl || PacketId.isAmino(o.packet_id));
  },
  encode(message: QueryTotalTimeoutFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesRequestProtoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesRequest): Uint8Array {
    return QueryTotalTimeoutFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTimeoutFeesRequest.typeUrl, QueryTotalTimeoutFeesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalTimeoutFeesRequest.aminoType, QueryTotalTimeoutFeesRequest.typeUrl);
function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return {
    timeoutFees: []
  };
}
export const QueryTotalTimeoutFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
  is(o: any): o is QueryTotalTimeoutFeesResponse {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesResponse.typeUrl || Array.isArray(o.timeoutFees) && (!o.timeoutFees.length || Coin.is(o.timeoutFees[0])));
  },
  isSDK(o: any): o is QueryTotalTimeoutFeesResponseSDKType {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesResponse.typeUrl || Array.isArray(o.timeout_fees) && (!o.timeout_fees.length || Coin.isSDK(o.timeout_fees[0])));
  },
  isAmino(o: any): o is QueryTotalTimeoutFeesResponseAmino {
    return o && (o.$typeUrl === QueryTotalTimeoutFeesResponse.typeUrl || Array.isArray(o.timeout_fees) && (!o.timeout_fees.length || Coin.isAmino(o.timeout_fees[0])));
  },
  encode(message: QueryTotalTimeoutFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeout_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesResponseProtoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesResponse): Uint8Array {
    return QueryTotalTimeoutFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTimeoutFeesResponse.typeUrl, QueryTotalTimeoutFeesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalTimeoutFeesResponse.aminoType, QueryTotalTimeoutFeesResponse.typeUrl);
function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
  aminoType: "cosmos-sdk/QueryPayeeRequest",
  is(o: any): o is QueryPayeeRequest {
    return o && (o.$typeUrl === QueryPayeeRequest.typeUrl || typeof o.channelId === "string" && typeof o.relayer === "string");
  },
  isSDK(o: any): o is QueryPayeeRequestSDKType {
    return o && (o.$typeUrl === QueryPayeeRequest.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string");
  },
  isAmino(o: any): o is QueryPayeeRequestAmino {
    return o && (o.$typeUrl === QueryPayeeRequest.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string");
  },
  encode(message: QueryPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    return message;
  },
  toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeRequest",
      value: QueryPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeRequestProtoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.decode(message.value);
  },
  toProto(message: QueryPayeeRequest): Uint8Array {
    return QueryPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeRequest): QueryPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
      value: QueryPayeeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPayeeRequest.typeUrl, QueryPayeeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPayeeRequest.aminoType, QueryPayeeRequest.typeUrl);
function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return {
    payeeAddress: ""
  };
}
export const QueryPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
  aminoType: "cosmos-sdk/QueryPayeeResponse",
  is(o: any): o is QueryPayeeResponse {
    return o && (o.$typeUrl === QueryPayeeResponse.typeUrl || typeof o.payeeAddress === "string");
  },
  isSDK(o: any): o is QueryPayeeResponseSDKType {
    return o && (o.$typeUrl === QueryPayeeResponse.typeUrl || typeof o.payee_address === "string");
  },
  isAmino(o: any): o is QueryPayeeResponseAmino {
    return o && (o.$typeUrl === QueryPayeeResponse.typeUrl || typeof o.payee_address === "string");
  },
  encode(message: QueryPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    if (object.payee_address !== undefined && object.payee_address !== null) {
      message.payeeAddress = object.payee_address;
    }
    return message;
  },
  toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeResponse",
      value: QueryPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeResponseProtoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.decode(message.value);
  },
  toProto(message: QueryPayeeResponse): Uint8Array {
    return QueryPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeResponse): QueryPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
      value: QueryPayeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPayeeResponse.typeUrl, QueryPayeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPayeeResponse.aminoType, QueryPayeeResponse.typeUrl);
function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryCounterpartyPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
  aminoType: "cosmos-sdk/QueryCounterpartyPayeeRequest",
  is(o: any): o is QueryCounterpartyPayeeRequest {
    return o && (o.$typeUrl === QueryCounterpartyPayeeRequest.typeUrl || typeof o.channelId === "string" && typeof o.relayer === "string");
  },
  isSDK(o: any): o is QueryCounterpartyPayeeRequestSDKType {
    return o && (o.$typeUrl === QueryCounterpartyPayeeRequest.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string");
  },
  isAmino(o: any): o is QueryCounterpartyPayeeRequestAmino {
    return o && (o.$typeUrl === QueryCounterpartyPayeeRequest.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string");
  },
  encode(message: QueryCounterpartyPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    return message;
  },
  toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeRequestProtoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeRequest): Uint8Array {
    return QueryCounterpartyPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCounterpartyPayeeRequest.typeUrl, QueryCounterpartyPayeeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCounterpartyPayeeRequest.aminoType, QueryCounterpartyPayeeRequest.typeUrl);
function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return {
    counterpartyPayee: ""
  };
}
export const QueryCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
  aminoType: "cosmos-sdk/QueryCounterpartyPayeeResponse",
  is(o: any): o is QueryCounterpartyPayeeResponse {
    return o && (o.$typeUrl === QueryCounterpartyPayeeResponse.typeUrl || typeof o.counterpartyPayee === "string");
  },
  isSDK(o: any): o is QueryCounterpartyPayeeResponseSDKType {
    return o && (o.$typeUrl === QueryCounterpartyPayeeResponse.typeUrl || typeof o.counterparty_payee === "string");
  },
  isAmino(o: any): o is QueryCounterpartyPayeeResponseAmino {
    return o && (o.$typeUrl === QueryCounterpartyPayeeResponse.typeUrl || typeof o.counterparty_payee === "string");
  },
  encode(message: QueryCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeResponseProtoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeResponse): Uint8Array {
    return QueryCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCounterpartyPayeeResponse.typeUrl, QueryCounterpartyPayeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCounterpartyPayeeResponse.aminoType, QueryCounterpartyPayeeResponse.typeUrl);
function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return {
    pagination: undefined,
    queryHeight: BigInt(0)
  };
}
export const QueryFeeEnabledChannelsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
  is(o: any): o is QueryFeeEnabledChannelsRequest {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsRequest.typeUrl || typeof o.queryHeight === "bigint");
  },
  isSDK(o: any): o is QueryFeeEnabledChannelsRequestSDKType {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsRequest.typeUrl || typeof o.query_height === "bigint");
  },
  isAmino(o: any): o is QueryFeeEnabledChannelsRequestAmino {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsRequest.typeUrl || typeof o.query_height === "bigint");
  },
  encode(message: QueryFeeEnabledChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsRequestProtoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsRequest): Uint8Array {
    return QueryFeeEnabledChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeEnabledChannelsRequest.typeUrl, QueryFeeEnabledChannelsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryFeeEnabledChannelsRequest.aminoType, QueryFeeEnabledChannelsRequest.typeUrl);
function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return {
    feeEnabledChannels: [],
    pagination: undefined
  };
}
export const QueryFeeEnabledChannelsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
  is(o: any): o is QueryFeeEnabledChannelsResponse {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsResponse.typeUrl || Array.isArray(o.feeEnabledChannels) && (!o.feeEnabledChannels.length || FeeEnabledChannel.is(o.feeEnabledChannels[0])));
  },
  isSDK(o: any): o is QueryFeeEnabledChannelsResponseSDKType {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsResponse.typeUrl || Array.isArray(o.fee_enabled_channels) && (!o.fee_enabled_channels.length || FeeEnabledChannel.isSDK(o.fee_enabled_channels[0])));
  },
  isAmino(o: any): o is QueryFeeEnabledChannelsResponseAmino {
    return o && (o.$typeUrl === QueryFeeEnabledChannelsResponse.typeUrl || Array.isArray(o.fee_enabled_channels) && (!o.fee_enabled_channels.length || FeeEnabledChannel.isAmino(o.fee_enabled_channels[0])));
  },
  encode(message: QueryFeeEnabledChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsResponseProtoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsResponse): Uint8Array {
    return QueryFeeEnabledChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeEnabledChannelsResponse.typeUrl, QueryFeeEnabledChannelsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryFeeEnabledChannelsResponse.aminoType, QueryFeeEnabledChannelsResponse.typeUrl);
function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryFeeEnabledChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelRequest",
  is(o: any): o is QueryFeeEnabledChannelRequest {
    return o && (o.$typeUrl === QueryFeeEnabledChannelRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is QueryFeeEnabledChannelRequestSDKType {
    return o && (o.$typeUrl === QueryFeeEnabledChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryFeeEnabledChannelRequestAmino {
    return o && (o.$typeUrl === QueryFeeEnabledChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryFeeEnabledChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelRequestProtoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelRequest): Uint8Array {
    return QueryFeeEnabledChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeEnabledChannelRequest.typeUrl, QueryFeeEnabledChannelRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryFeeEnabledChannelRequest.aminoType, QueryFeeEnabledChannelRequest.typeUrl);
function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return {
    feeEnabled: false
  };
}
export const QueryFeeEnabledChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelResponse",
  is(o: any): o is QueryFeeEnabledChannelResponse {
    return o && (o.$typeUrl === QueryFeeEnabledChannelResponse.typeUrl || typeof o.feeEnabled === "boolean");
  },
  isSDK(o: any): o is QueryFeeEnabledChannelResponseSDKType {
    return o && (o.$typeUrl === QueryFeeEnabledChannelResponse.typeUrl || typeof o.fee_enabled === "boolean");
  },
  isAmino(o: any): o is QueryFeeEnabledChannelResponseAmino {
    return o && (o.$typeUrl === QueryFeeEnabledChannelResponse.typeUrl || typeof o.fee_enabled === "boolean");
  },
  encode(message: QueryFeeEnabledChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    if (object.fee_enabled !== undefined && object.fee_enabled !== null) {
      message.feeEnabled = object.fee_enabled;
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelResponseProtoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelResponse): Uint8Array {
    return QueryFeeEnabledChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeEnabledChannelResponse.typeUrl, QueryFeeEnabledChannelResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryFeeEnabledChannelResponse.aminoType, QueryFeeEnabledChannelResponse.typeUrl);