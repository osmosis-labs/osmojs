import * as _58 from "./applications/transfer/v1/genesis";
import * as _59 from "./applications/transfer/v1/query";
import * as _60 from "./applications/transfer/v1/transfer";
import * as _61 from "./applications/transfer/v1/tx";
import * as _62 from "./applications/transfer/v2/packet";
import * as _63 from "./core/channel/v1/channel";
import * as _64 from "./core/channel/v1/genesis";
import * as _65 from "./core/channel/v1/query";
import * as _66 from "./core/channel/v1/tx";
import * as _67 from "./core/client/v1/client";
import * as _68 from "./core/client/v1/genesis";
import * as _69 from "./core/client/v1/query";
import * as _70 from "./core/client/v1/tx";
import * as _71 from "./core/commitment/v1/commitment";
import * as _72 from "./core/connection/v1/connection";
import * as _73 from "./core/connection/v1/genesis";
import * as _74 from "./core/connection/v1/query";
import * as _75 from "./core/connection/v1/tx";
import * as _76 from "./lightclients/localhost/v1/localhost";
import * as _77 from "./lightclients/solomachine/v1/solomachine";
import * as _78 from "./lightclients/solomachine/v2/solomachine";
import * as _79 from "./lightclients/tendermint/v1/tendermint";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _225.MsgClientImpl;
                QueryClientImpl: typeof _221.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _59.QueryDenomTraceRequest): Promise<_59.QueryDenomTraceResponse>;
                    denomTraces(request?: _59.QueryDenomTracesRequest): Promise<_59.QueryDenomTracesResponse>;
                    params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: _61.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: _61.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _61.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _61.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _61.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTransfer;
                    fromPartial(object: Partial<_61.MsgTransfer>): _61.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _61.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTransferResponse;
                    fromPartial(_: Partial<_61.MsgTransferResponse>): _61.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _60.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DenomTrace;
                    fromPartial(object: Partial<_60.DenomTrace>): _60.DenomTrace;
                };
                Params: {
                    encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                    fromPartial(object: Partial<_60.Params>): _60.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _59.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_59.QueryDenomTraceRequest>): _59.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _59.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_59.QueryDenomTraceResponse>): _59.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _59.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_59.QueryDenomTracesRequest>): _59.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _59.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_59.QueryDenomTracesResponse>): _59.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                    fromPartial(_: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                    fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                    fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _62.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.FungibleTokenPacketData;
                    fromPartial(object: Partial<_62.FungibleTokenPacketData>): _62.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _226.MsgClientImpl;
                QueryClientImpl: typeof _222.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _65.QueryChannelRequest): Promise<_65.QueryChannelResponse>;
                    channels(request?: _65.QueryChannelsRequest): Promise<_65.QueryChannelsResponse>;
                    connectionChannels(request: _65.QueryConnectionChannelsRequest): Promise<_65.QueryConnectionChannelsResponse>;
                    channelClientState(request: _65.QueryChannelClientStateRequest): Promise<_65.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _65.QueryChannelConsensusStateRequest): Promise<_65.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _65.QueryPacketCommitmentRequest): Promise<_65.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _65.QueryPacketCommitmentsRequest): Promise<_65.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _65.QueryPacketReceiptRequest): Promise<_65.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _65.QueryPacketAcknowledgementRequest): Promise<_65.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _65.QueryPacketAcknowledgementsRequest): Promise<_65.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _65.QueryUnreceivedPacketsRequest): Promise<_65.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _65.QueryUnreceivedAcksRequest): Promise<_65.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _65.QueryNextSequenceReceiveRequest): Promise<_65.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: _66.MsgRecvPacket;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: _66.MsgTimeout;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _66.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _66.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: _66.MsgRecvPacket;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: _66.MsgTimeout;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _66.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _66.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _66.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _66.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _66.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _66.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _66.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _66.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _66.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _66.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _66.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _66.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _66.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _66.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _66.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _66.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _66.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _66.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenInit;
                    fromPartial(object: Partial<_66.MsgChannelOpenInit>): _66.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _66.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_66.MsgChannelOpenInitResponse>): _66.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _66.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenTry;
                    fromPartial(object: Partial<_66.MsgChannelOpenTry>): _66.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _66.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_66.MsgChannelOpenTryResponse>): _66.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _66.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenAck;
                    fromPartial(object: Partial<_66.MsgChannelOpenAck>): _66.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _66.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_66.MsgChannelOpenAckResponse>): _66.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _66.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_66.MsgChannelOpenConfirm>): _66.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _66.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_66.MsgChannelOpenConfirmResponse>): _66.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _66.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelCloseInit;
                    fromPartial(object: Partial<_66.MsgChannelCloseInit>): _66.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _66.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_66.MsgChannelCloseInitResponse>): _66.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _66.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_66.MsgChannelCloseConfirm>): _66.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _66.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_66.MsgChannelCloseConfirmResponse>): _66.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _66.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgRecvPacket;
                    fromPartial(object: Partial<_66.MsgRecvPacket>): _66.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _66.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_66.MsgRecvPacketResponse>): _66.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _66.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTimeout;
                    fromPartial(object: Partial<_66.MsgTimeout>): _66.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _66.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTimeoutResponse;
                    fromPartial(_: Partial<_66.MsgTimeoutResponse>): _66.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _66.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_66.MsgTimeoutOnClose>): _66.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _66.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_66.MsgTimeoutOnCloseResponse>): _66.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _66.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgAcknowledgement;
                    fromPartial(object: Partial<_66.MsgAcknowledgement>): _66.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _66.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_66.MsgAcknowledgementResponse>): _66.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _65.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelRequest;
                    fromPartial(object: Partial<_65.QueryChannelRequest>): _65.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _65.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelResponse;
                    fromPartial(object: Partial<_65.QueryChannelResponse>): _65.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _65.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelsRequest;
                    fromPartial(object: Partial<_65.QueryChannelsRequest>): _65.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _65.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelsResponse;
                    fromPartial(object: Partial<_65.QueryChannelsResponse>): _65.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _65.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_65.QueryConnectionChannelsRequest>): _65.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _65.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_65.QueryConnectionChannelsResponse>): _65.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _65.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_65.QueryChannelClientStateRequest>): _65.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _65.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_65.QueryChannelClientStateResponse>): _65.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _65.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_65.QueryChannelConsensusStateRequest>): _65.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _65.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_65.QueryChannelConsensusStateResponse>): _65.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _65.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentRequest>): _65.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _65.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentResponse>): _65.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _65.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentsRequest>): _65.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _65.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentsResponse>): _65.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _65.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_65.QueryPacketReceiptRequest>): _65.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _65.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_65.QueryPacketReceiptResponse>): _65.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _65.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementRequest>): _65.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _65.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementResponse>): _65.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _65.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementsRequest>): _65.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _65.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementsResponse>): _65.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _65.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_65.QueryUnreceivedPacketsRequest>): _65.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _65.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_65.QueryUnreceivedPacketsResponse>): _65.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _65.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_65.QueryUnreceivedAcksRequest>): _65.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _65.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_65.QueryUnreceivedAcksResponse>): _65.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _65.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_65.QueryNextSequenceReceiveRequest>): _65.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _65.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_65.QueryNextSequenceReceiveResponse>): _65.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                    fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                };
                PacketSequence: {
                    encode(message: _64.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.PacketSequence;
                    fromPartial(object: Partial<_64.PacketSequence>): _64.PacketSequence;
                };
                stateFromJSON(object: any): _63.State;
                stateToJSON(object: _63.State): string;
                orderFromJSON(object: any): _63.Order;
                orderToJSON(object: _63.Order): string;
                State: typeof _63.State;
                StateSDKType: typeof _63.StateSDKType;
                Order: typeof _63.Order;
                OrderSDKType: typeof _63.OrderSDKType;
                Channel: {
                    encode(message: _63.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Channel;
                    fromPartial(object: Partial<_63.Channel>): _63.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _63.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.IdentifiedChannel;
                    fromPartial(object: Partial<_63.IdentifiedChannel>): _63.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _63.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Counterparty;
                    fromPartial(object: Partial<_63.Counterparty>): _63.Counterparty;
                };
                Packet: {
                    encode(message: _63.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Packet;
                    fromPartial(object: Partial<_63.Packet>): _63.Packet;
                };
                PacketState: {
                    encode(message: _63.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PacketState;
                    fromPartial(object: Partial<_63.PacketState>): _63.PacketState;
                };
                Acknowledgement: {
                    encode(message: _63.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Acknowledgement;
                    fromPartial(object: Partial<_63.Acknowledgement>): _63.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _227.MsgClientImpl;
                QueryClientImpl: typeof _223.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _69.QueryClientStateRequest): Promise<_69.QueryClientStateResponse>;
                    clientStates(request?: _69.QueryClientStatesRequest): Promise<_69.QueryClientStatesResponse>;
                    consensusState(request: _69.QueryConsensusStateRequest): Promise<_69.QueryConsensusStateResponse>;
                    consensusStates(request: _69.QueryConsensusStatesRequest): Promise<_69.QueryConsensusStatesResponse>;
                    clientStatus(request: _69.QueryClientStatusRequest): Promise<_69.QueryClientStatusResponse>;
                    clientParams(request?: _69.QueryClientParamsRequest): Promise<_69.QueryClientParamsResponse>;
                    upgradedClientState(request?: _69.QueryUpgradedClientStateRequest): Promise<_69.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _69.QueryUpgradedConsensusStateRequest): Promise<_69.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _219.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: _70.MsgCreateClient;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: _70.MsgUpdateClient;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _70.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _70.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: _70.MsgCreateClient;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: _70.MsgUpdateClient;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _70.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _70.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _70.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _70.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _70.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _70.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _70.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _70.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _70.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _70.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _70.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateClient;
                    fromPartial(object: Partial<_70.MsgCreateClient>): _70.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _70.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateClientResponse;
                    fromPartial(_: Partial<_70.MsgCreateClientResponse>): _70.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _70.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateClient;
                    fromPartial(object: Partial<_70.MsgUpdateClient>): _70.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _70.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_70.MsgUpdateClientResponse>): _70.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _70.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpgradeClient;
                    fromPartial(object: Partial<_70.MsgUpgradeClient>): _70.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _70.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_70.MsgUpgradeClientResponse>): _70.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _70.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_70.MsgSubmitMisbehaviour>): _70.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _70.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_70.MsgSubmitMisbehaviourResponse>): _70.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _69.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStateRequest;
                    fromPartial(object: Partial<_69.QueryClientStateRequest>): _69.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _69.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStateResponse;
                    fromPartial(object: Partial<_69.QueryClientStateResponse>): _69.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _69.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStatesRequest;
                    fromPartial(object: Partial<_69.QueryClientStatesRequest>): _69.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _69.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStatesResponse;
                    fromPartial(object: Partial<_69.QueryClientStatesResponse>): _69.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _69.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_69.QueryConsensusStateRequest>): _69.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _69.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_69.QueryConsensusStateResponse>): _69.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _69.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_69.QueryConsensusStatesRequest>): _69.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _69.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_69.QueryConsensusStatesResponse>): _69.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _69.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStatusRequest;
                    fromPartial(object: Partial<_69.QueryClientStatusRequest>): _69.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _69.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientStatusResponse;
                    fromPartial(object: Partial<_69.QueryClientStatusResponse>): _69.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _69.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientParamsRequest;
                    fromPartial(_: Partial<_69.QueryClientParamsRequest>): _69.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _69.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientParamsResponse;
                    fromPartial(object: Partial<_69.QueryClientParamsResponse>): _69.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _69.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_69.QueryUpgradedClientStateRequest>): _69.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _69.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_69.QueryUpgradedClientStateResponse>): _69.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _69.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_69.QueryUpgradedConsensusStateRequest>): _69.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _69.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_69.QueryUpgradedConsensusStateResponse>): _69.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                    fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _68.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisMetadata;
                    fromPartial(object: Partial<_68.GenesisMetadata>): _68.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _68.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_68.IdentifiedGenesisMetadata>): _68.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _67.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.IdentifiedClientState;
                    fromPartial(object: Partial<_67.IdentifiedClientState>): _67.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _67.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_67.ConsensusStateWithHeight>): _67.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _67.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ClientConsensusStates;
                    fromPartial(object: Partial<_67.ClientConsensusStates>): _67.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _67.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ClientUpdateProposal;
                    fromPartial(object: Partial<_67.ClientUpdateProposal>): _67.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _67.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.UpgradeProposal;
                    fromPartial(object: Partial<_67.UpgradeProposal>): _67.UpgradeProposal;
                };
                Height: {
                    encode(message: _67.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Height;
                    fromPartial(object: Partial<_67.Height>): _67.Height;
                };
                Params: {
                    encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Params;
                    fromPartial(object: Partial<_67.Params>): _67.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _71.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MerkleRoot;
                    fromPartial(object: Partial<_71.MerkleRoot>): _71.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _71.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MerklePrefix;
                    fromPartial(object: Partial<_71.MerklePrefix>): _71.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _71.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MerklePath;
                    fromPartial(object: Partial<_71.MerklePath>): _71.MerklePath;
                };
                MerkleProof: {
                    encode(message: _71.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MerkleProof;
                    fromPartial(object: Partial<_71.MerkleProof>): _71.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _228.MsgClientImpl;
                QueryClientImpl: typeof _224.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _74.QueryConnectionRequest): Promise<_74.QueryConnectionResponse>;
                    connections(request?: _74.QueryConnectionsRequest): Promise<_74.QueryConnectionsResponse>;
                    clientConnections(request: _74.QueryClientConnectionsRequest): Promise<_74.QueryClientConnectionsResponse>;
                    connectionClientState(request: _74.QueryConnectionClientStateRequest): Promise<_74.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _74.QueryConnectionConsensusStateRequest): Promise<_74.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _75.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _75.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _75.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _75.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _75.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _75.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_75.MsgConnectionOpenInit>): _75.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _75.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_75.MsgConnectionOpenInitResponse>): _75.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _75.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_75.MsgConnectionOpenTry>): _75.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _75.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_75.MsgConnectionOpenTryResponse>): _75.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _75.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_75.MsgConnectionOpenAck>): _75.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _75.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_75.MsgConnectionOpenAckResponse>): _75.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _75.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_75.MsgConnectionOpenConfirm>): _75.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _75.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_75.MsgConnectionOpenConfirmResponse>): _75.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _74.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionRequest;
                    fromPartial(object: Partial<_74.QueryConnectionRequest>): _74.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _74.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionResponse;
                    fromPartial(object: Partial<_74.QueryConnectionResponse>): _74.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _74.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionsRequest;
                    fromPartial(object: Partial<_74.QueryConnectionsRequest>): _74.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _74.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionsResponse;
                    fromPartial(object: Partial<_74.QueryConnectionsResponse>): _74.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _74.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_74.QueryClientConnectionsRequest>): _74.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _74.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_74.QueryClientConnectionsResponse>): _74.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _74.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_74.QueryConnectionClientStateRequest>): _74.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _74.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_74.QueryConnectionClientStateResponse>): _74.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _74.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_74.QueryConnectionConsensusStateRequest>): _74.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _74.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_74.QueryConnectionConsensusStateResponse>): _74.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                    fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                };
                stateFromJSON(object: any): _72.State;
                stateToJSON(object: _72.State): string;
                State: typeof _72.State;
                StateSDKType: typeof _72.StateSDKType;
                ConnectionEnd: {
                    encode(message: _72.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConnectionEnd;
                    fromPartial(object: Partial<_72.ConnectionEnd>): _72.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _72.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedConnection;
                    fromPartial(object: Partial<_72.IdentifiedConnection>): _72.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _72.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Counterparty;
                    fromPartial(object: Partial<_72.Counterparty>): _72.Counterparty;
                };
                ClientPaths: {
                    encode(message: _72.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientPaths;
                    fromPartial(object: Partial<_72.ClientPaths>): _72.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _72.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConnectionPaths;
                    fromPartial(object: Partial<_72.ConnectionPaths>): _72.ConnectionPaths;
                };
                Version: {
                    encode(message: _72.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Version;
                    fromPartial(object: Partial<_72.Version>): _72.Version;
                };
                Params: {
                    encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                    fromPartial(object: Partial<_72.Params>): _72.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _76.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientState;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _77.DataType;
                dataTypeToJSON(object: _77.DataType): string;
                DataType: typeof _77.DataType;
                DataTypeSDKType: typeof _77.DataTypeSDKType;
                ClientState: {
                    encode(message: _77.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientState;
                    fromPartial(object: Partial<_77.ClientState>): _77.ClientState;
                };
                ConsensusState: {
                    encode(message: _77.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusState;
                    fromPartial(object: Partial<_77.ConsensusState>): _77.ConsensusState;
                };
                Header: {
                    encode(message: _77.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Header;
                    fromPartial(object: Partial<_77.Header>): _77.Header;
                };
                Misbehaviour: {
                    encode(message: _77.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Misbehaviour;
                    fromPartial(object: Partial<_77.Misbehaviour>): _77.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _77.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureAndData;
                    fromPartial(object: Partial<_77.SignatureAndData>): _77.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _77.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.TimestampedSignatureData;
                    fromPartial(object: Partial<_77.TimestampedSignatureData>): _77.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _77.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignBytes;
                    fromPartial(object: Partial<_77.SignBytes>): _77.SignBytes;
                };
                HeaderData: {
                    encode(message: _77.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.HeaderData;
                    fromPartial(object: Partial<_77.HeaderData>): _77.HeaderData;
                };
                ClientStateData: {
                    encode(message: _77.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientStateData;
                    fromPartial(object: Partial<_77.ClientStateData>): _77.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _77.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusStateData;
                    fromPartial(object: Partial<_77.ConsensusStateData>): _77.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _77.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConnectionStateData;
                    fromPartial(object: Partial<_77.ConnectionStateData>): _77.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _77.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ChannelStateData;
                    fromPartial(object: Partial<_77.ChannelStateData>): _77.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _77.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PacketCommitmentData;
                    fromPartial(object: Partial<_77.PacketCommitmentData>): _77.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _77.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PacketAcknowledgementData;
                    fromPartial(object: Partial<_77.PacketAcknowledgementData>): _77.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _77.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_77.PacketReceiptAbsenceData>): _77.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _77.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.NextSequenceRecvData;
                    fromPartial(object: Partial<_77.NextSequenceRecvData>): _77.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _78.DataType;
                dataTypeToJSON(object: _78.DataType): string;
                DataType: typeof _78.DataType;
                DataTypeSDKType: typeof _78.DataTypeSDKType;
                ClientState: {
                    encode(message: _78.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientState;
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                };
                ConsensusState: {
                    encode(message: _78.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ConsensusState;
                    fromPartial(object: Partial<_78.ConsensusState>): _78.ConsensusState;
                };
                Header: {
                    encode(message: _78.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                };
                Misbehaviour: {
                    encode(message: _78.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Misbehaviour;
                    fromPartial(object: Partial<_78.Misbehaviour>): _78.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _78.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SignatureAndData;
                    fromPartial(object: Partial<_78.SignatureAndData>): _78.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _78.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.TimestampedSignatureData;
                    fromPartial(object: Partial<_78.TimestampedSignatureData>): _78.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _78.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SignBytes;
                    fromPartial(object: Partial<_78.SignBytes>): _78.SignBytes;
                };
                HeaderData: {
                    encode(message: _78.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.HeaderData;
                    fromPartial(object: Partial<_78.HeaderData>): _78.HeaderData;
                };
                ClientStateData: {
                    encode(message: _78.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientStateData;
                    fromPartial(object: Partial<_78.ClientStateData>): _78.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _78.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ConsensusStateData;
                    fromPartial(object: Partial<_78.ConsensusStateData>): _78.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _78.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ConnectionStateData;
                    fromPartial(object: Partial<_78.ConnectionStateData>): _78.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _78.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ChannelStateData;
                    fromPartial(object: Partial<_78.ChannelStateData>): _78.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _78.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PacketCommitmentData;
                    fromPartial(object: Partial<_78.PacketCommitmentData>): _78.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _78.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PacketAcknowledgementData;
                    fromPartial(object: Partial<_78.PacketAcknowledgementData>): _78.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _78.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_78.PacketReceiptAbsenceData>): _78.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _78.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.NextSequenceRecvData;
                    fromPartial(object: Partial<_78.NextSequenceRecvData>): _78.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _79.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientState;
                    fromPartial(object: Partial<_79.ClientState>): _79.ClientState;
                };
                ConsensusState: {
                    encode(message: _79.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConsensusState;
                    fromPartial(object: Partial<_79.ConsensusState>): _79.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _79.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Misbehaviour;
                    fromPartial(object: Partial<_79.Misbehaviour>): _79.Misbehaviour;
                };
                Header: {
                    encode(message: _79.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Header;
                    fromPartial(object: Partial<_79.Header>): _79.Header;
                };
                Fraction: {
                    encode(message: _79.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Fraction;
                    fromPartial(object: Partial<_79.Fraction>): _79.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _225.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _226.MsgClientImpl;
                    };
                    client: {
                        v1: _227.MsgClientImpl;
                    };
                    connection: {
                        v1: _228.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _59.QueryDenomTraceRequest): Promise<_59.QueryDenomTraceResponse>;
                            denomTraces(request?: _59.QueryDenomTracesRequest): Promise<_59.QueryDenomTracesResponse>;
                            params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _65.QueryChannelRequest): Promise<_65.QueryChannelResponse>;
                            channels(request?: _65.QueryChannelsRequest): Promise<_65.QueryChannelsResponse>;
                            connectionChannels(request: _65.QueryConnectionChannelsRequest): Promise<_65.QueryConnectionChannelsResponse>;
                            channelClientState(request: _65.QueryChannelClientStateRequest): Promise<_65.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _65.QueryChannelConsensusStateRequest): Promise<_65.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _65.QueryPacketCommitmentRequest): Promise<_65.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _65.QueryPacketCommitmentsRequest): Promise<_65.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _65.QueryPacketReceiptRequest): Promise<_65.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _65.QueryPacketAcknowledgementRequest): Promise<_65.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _65.QueryPacketAcknowledgementsRequest): Promise<_65.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _65.QueryUnreceivedPacketsRequest): Promise<_65.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _65.QueryUnreceivedAcksRequest): Promise<_65.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _65.QueryNextSequenceReceiveRequest): Promise<_65.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _69.QueryClientStateRequest): Promise<_69.QueryClientStateResponse>;
                            clientStates(request?: _69.QueryClientStatesRequest): Promise<_69.QueryClientStatesResponse>;
                            consensusState(request: _69.QueryConsensusStateRequest): Promise<_69.QueryConsensusStateResponse>;
                            consensusStates(request: _69.QueryConsensusStatesRequest): Promise<_69.QueryConsensusStatesResponse>;
                            clientStatus(request: _69.QueryClientStatusRequest): Promise<_69.QueryClientStatusResponse>;
                            clientParams(request?: _69.QueryClientParamsRequest): Promise<_69.QueryClientParamsResponse>;
                            upgradedClientState(request?: _69.QueryUpgradedClientStateRequest): Promise<_69.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _69.QueryUpgradedConsensusStateRequest): Promise<_69.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _74.QueryConnectionRequest): Promise<_74.QueryConnectionResponse>;
                            connections(request?: _74.QueryConnectionsRequest): Promise<_74.QueryConnectionsResponse>;
                            clientConnections(request: _74.QueryClientConnectionsRequest): Promise<_74.QueryClientConnectionsResponse>;
                            connectionClientState(request: _74.QueryConnectionClientStateRequest): Promise<_74.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _74.QueryConnectionConsensusStateRequest): Promise<_74.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _217.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _218.LCDQueryClient;
                    };
                    client: {
                        v1: _219.LCDQueryClient;
                    };
                    connection: {
                        v1: _220.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
