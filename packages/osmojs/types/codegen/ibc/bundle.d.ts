import * as _57 from "./applications/transfer/v1/genesis";
import * as _58 from "./applications/transfer/v1/query";
import * as _59 from "./applications/transfer/v1/transfer";
import * as _60 from "./applications/transfer/v1/tx";
import * as _61 from "./applications/transfer/v2/packet";
import * as _62 from "./core/channel/v1/channel";
import * as _63 from "./core/channel/v1/genesis";
import * as _64 from "./core/channel/v1/query";
import * as _65 from "./core/channel/v1/tx";
import * as _66 from "./core/client/v1/client";
import * as _67 from "./core/client/v1/genesis";
import * as _68 from "./core/client/v1/query";
import * as _69 from "./core/client/v1/tx";
import * as _70 from "./core/commitment/v1/commitment";
import * as _71 from "./core/connection/v1/connection";
import * as _72 from "./core/connection/v1/genesis";
import * as _73 from "./core/connection/v1/query";
import * as _74 from "./core/connection/v1/tx";
import * as _75 from "./lightclients/localhost/v1/localhost";
import * as _76 from "./lightclients/solomachine/v1/solomachine";
import * as _77 from "./lightclients/solomachine/v2/solomachine";
import * as _78 from "./lightclients/tendermint/v1/tendermint";
import * as _207 from "./applications/transfer/v1/query.lcd";
import * as _208 from "./core/channel/v1/query.lcd";
import * as _209 from "./core/client/v1/query.lcd";
import * as _210 from "./core/connection/v1/query.lcd";
import * as _211 from "./applications/transfer/v1/query.rpc.Query";
import * as _212 from "./core/channel/v1/query.rpc.Query";
import * as _213 from "./core/client/v1/query.rpc.Query";
import * as _214 from "./core/connection/v1/query.rpc.Query";
import * as _215 from "./applications/transfer/v1/tx.rpc.msg";
import * as _216 from "./core/channel/v1/tx.rpc.msg";
import * as _217 from "./core/client/v1/tx.rpc.msg";
import * as _218 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _215.MsgClientImpl;
                QueryClientImpl: typeof _211.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _58.QueryDenomTraceRequest): Promise<_58.QueryDenomTraceResponse>;
                    denomTraces(request?: _58.QueryDenomTracesRequest): Promise<_58.QueryDenomTracesResponse>;
                    params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _207.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: _60.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: _60.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _60.MsgTransfer) => {
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
                        }) => _60.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _60.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgTransfer;
                    fromPartial(object: Partial<_60.MsgTransfer>): _60.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _60.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgTransferResponse;
                    fromPartial(_: Partial<_60.MsgTransferResponse>): _60.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _59.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DenomTrace;
                    fromPartial(object: Partial<_59.DenomTrace>): _59.DenomTrace;
                };
                Params: {
                    encode(message: _59.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Params;
                    fromPartial(object: Partial<_59.Params>): _59.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _58.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_58.QueryDenomTraceRequest>): _58.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _58.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_58.QueryDenomTraceResponse>): _58.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _58.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_58.QueryDenomTracesRequest>): _58.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _58.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_58.QueryDenomTracesResponse>): _58.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsRequest;
                    fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsResponse;
                    fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                    fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _61.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.FungibleTokenPacketData;
                    fromPartial(object: Partial<_61.FungibleTokenPacketData>): _61.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _216.MsgClientImpl;
                QueryClientImpl: typeof _212.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _64.QueryChannelRequest): Promise<_64.QueryChannelResponse>;
                    channels(request?: _64.QueryChannelsRequest): Promise<_64.QueryChannelsResponse>;
                    connectionChannels(request: _64.QueryConnectionChannelsRequest): Promise<_64.QueryConnectionChannelsResponse>;
                    channelClientState(request: _64.QueryChannelClientStateRequest): Promise<_64.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _64.QueryChannelConsensusStateRequest): Promise<_64.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _64.QueryPacketCommitmentRequest): Promise<_64.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _64.QueryPacketCommitmentsRequest): Promise<_64.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _64.QueryPacketReceiptRequest): Promise<_64.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _64.QueryPacketAcknowledgementRequest): Promise<_64.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _64.QueryPacketAcknowledgementsRequest): Promise<_64.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _64.QueryUnreceivedPacketsRequest): Promise<_64.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _64.QueryUnreceivedAcksRequest): Promise<_64.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _64.QueryNextSequenceReceiveRequest): Promise<_64.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _208.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: _65.MsgRecvPacket;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: _65.MsgTimeout;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _65.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _65.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: _65.MsgRecvPacket;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: _65.MsgTimeout;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _65.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _65.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _65.MsgChannelOpenInit) => {
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
                        }) => _65.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _65.MsgChannelOpenTry) => {
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
                        }) => _65.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _65.MsgChannelOpenAck) => {
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
                        }) => _65.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _65.MsgChannelOpenConfirm) => {
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
                        }) => _65.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _65.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _65.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _65.MsgChannelCloseConfirm) => {
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
                        }) => _65.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _65.MsgRecvPacket) => {
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
                        }) => _65.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _65.MsgTimeout) => {
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
                        }) => _65.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _65.MsgTimeoutOnClose) => {
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
                        }) => _65.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _65.MsgAcknowledgement) => {
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
                        }) => _65.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _65.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenInit;
                    fromPartial(object: Partial<_65.MsgChannelOpenInit>): _65.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _65.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenInitResponse>): _65.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _65.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenTry;
                    fromPartial(object: Partial<_65.MsgChannelOpenTry>): _65.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _65.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenTryResponse>): _65.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _65.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenAck;
                    fromPartial(object: Partial<_65.MsgChannelOpenAck>): _65.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _65.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenAckResponse>): _65.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _65.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_65.MsgChannelOpenConfirm>): _65.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _65.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenConfirmResponse>): _65.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _65.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelCloseInit;
                    fromPartial(object: Partial<_65.MsgChannelCloseInit>): _65.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _65.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_65.MsgChannelCloseInitResponse>): _65.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _65.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_65.MsgChannelCloseConfirm>): _65.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _65.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_65.MsgChannelCloseConfirmResponse>): _65.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _65.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRecvPacket;
                    fromPartial(object: Partial<_65.MsgRecvPacket>): _65.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _65.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_65.MsgRecvPacketResponse>): _65.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _65.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTimeout;
                    fromPartial(object: Partial<_65.MsgTimeout>): _65.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _65.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTimeoutResponse;
                    fromPartial(_: Partial<_65.MsgTimeoutResponse>): _65.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _65.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_65.MsgTimeoutOnClose>): _65.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _65.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_65.MsgTimeoutOnCloseResponse>): _65.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _65.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgAcknowledgement;
                    fromPartial(object: Partial<_65.MsgAcknowledgement>): _65.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _65.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_65.MsgAcknowledgementResponse>): _65.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _64.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelRequest;
                    fromPartial(object: Partial<_64.QueryChannelRequest>): _64.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _64.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelResponse;
                    fromPartial(object: Partial<_64.QueryChannelResponse>): _64.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _64.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelsRequest;
                    fromPartial(object: Partial<_64.QueryChannelsRequest>): _64.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _64.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelsResponse;
                    fromPartial(object: Partial<_64.QueryChannelsResponse>): _64.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _64.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_64.QueryConnectionChannelsRequest>): _64.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _64.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_64.QueryConnectionChannelsResponse>): _64.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _64.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_64.QueryChannelClientStateRequest>): _64.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _64.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_64.QueryChannelClientStateResponse>): _64.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _64.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_64.QueryChannelConsensusStateRequest>): _64.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _64.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_64.QueryChannelConsensusStateResponse>): _64.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _64.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentRequest>): _64.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _64.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentResponse>): _64.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _64.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentsRequest>): _64.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _64.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentsResponse>): _64.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _64.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_64.QueryPacketReceiptRequest>): _64.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _64.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_64.QueryPacketReceiptResponse>): _64.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _64.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementRequest>): _64.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _64.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementResponse>): _64.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _64.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementsRequest>): _64.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _64.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementsResponse>): _64.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _64.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_64.QueryUnreceivedPacketsRequest>): _64.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _64.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_64.QueryUnreceivedPacketsResponse>): _64.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _64.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_64.QueryUnreceivedAcksRequest>): _64.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _64.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_64.QueryUnreceivedAcksResponse>): _64.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _64.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_64.QueryNextSequenceReceiveRequest>): _64.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _64.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_64.QueryNextSequenceReceiveResponse>): _64.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                    fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                };
                PacketSequence: {
                    encode(message: _63.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PacketSequence;
                    fromPartial(object: Partial<_63.PacketSequence>): _63.PacketSequence;
                };
                stateFromJSON(object: any): _62.State;
                stateToJSON(object: _62.State): string;
                orderFromJSON(object: any): _62.Order;
                orderToJSON(object: _62.Order): string;
                State: typeof _62.State;
                StateSDKType: typeof _62.StateSDKType;
                Order: typeof _62.Order;
                OrderSDKType: typeof _62.OrderSDKType;
                Channel: {
                    encode(message: _62.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Channel;
                    fromPartial(object: Partial<_62.Channel>): _62.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _62.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.IdentifiedChannel;
                    fromPartial(object: Partial<_62.IdentifiedChannel>): _62.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _62.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Counterparty;
                    fromPartial(object: Partial<_62.Counterparty>): _62.Counterparty;
                };
                Packet: {
                    encode(message: _62.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Packet;
                    fromPartial(object: Partial<_62.Packet>): _62.Packet;
                };
                PacketState: {
                    encode(message: _62.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PacketState;
                    fromPartial(object: Partial<_62.PacketState>): _62.PacketState;
                };
                Acknowledgement: {
                    encode(message: _62.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Acknowledgement;
                    fromPartial(object: Partial<_62.Acknowledgement>): _62.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _217.MsgClientImpl;
                QueryClientImpl: typeof _213.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _68.QueryClientStateRequest): Promise<_68.QueryClientStateResponse>;
                    clientStates(request?: _68.QueryClientStatesRequest): Promise<_68.QueryClientStatesResponse>;
                    consensusState(request: _68.QueryConsensusStateRequest): Promise<_68.QueryConsensusStateResponse>;
                    consensusStates(request: _68.QueryConsensusStatesRequest): Promise<_68.QueryConsensusStatesResponse>;
                    clientStatus(request: _68.QueryClientStatusRequest): Promise<_68.QueryClientStatusResponse>;
                    clientParams(request?: _68.QueryClientParamsRequest): Promise<_68.QueryClientParamsResponse>;
                    upgradedClientState(request?: _68.QueryUpgradedClientStateRequest): Promise<_68.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _209.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: _69.MsgCreateClient;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: _69.MsgUpdateClient;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _69.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _69.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: _69.MsgCreateClient;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: _69.MsgUpdateClient;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _69.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _69.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _69.MsgCreateClient) => {
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
                        }) => _69.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _69.MsgUpdateClient) => {
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
                        }) => _69.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _69.MsgUpgradeClient) => {
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
                        }) => _69.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _69.MsgSubmitMisbehaviour) => {
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
                        }) => _69.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _69.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateClient;
                    fromPartial(object: Partial<_69.MsgCreateClient>): _69.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _69.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateClientResponse;
                    fromPartial(_: Partial<_69.MsgCreateClientResponse>): _69.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _69.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateClient;
                    fromPartial(object: Partial<_69.MsgUpdateClient>): _69.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _69.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_69.MsgUpdateClientResponse>): _69.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _69.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpgradeClient;
                    fromPartial(object: Partial<_69.MsgUpgradeClient>): _69.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _69.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_69.MsgUpgradeClientResponse>): _69.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _69.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_69.MsgSubmitMisbehaviour>): _69.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _69.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_69.MsgSubmitMisbehaviourResponse>): _69.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _68.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStateRequest;
                    fromPartial(object: Partial<_68.QueryClientStateRequest>): _68.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _68.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStateResponse;
                    fromPartial(object: Partial<_68.QueryClientStateResponse>): _68.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _68.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStatesRequest;
                    fromPartial(object: Partial<_68.QueryClientStatesRequest>): _68.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _68.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStatesResponse;
                    fromPartial(object: Partial<_68.QueryClientStatesResponse>): _68.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _68.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_68.QueryConsensusStateRequest>): _68.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _68.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_68.QueryConsensusStateResponse>): _68.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _68.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_68.QueryConsensusStatesRequest>): _68.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _68.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_68.QueryConsensusStatesResponse>): _68.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _68.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStatusRequest;
                    fromPartial(object: Partial<_68.QueryClientStatusRequest>): _68.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _68.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientStatusResponse;
                    fromPartial(object: Partial<_68.QueryClientStatusResponse>): _68.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _68.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientParamsRequest;
                    fromPartial(_: Partial<_68.QueryClientParamsRequest>): _68.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _68.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryClientParamsResponse;
                    fromPartial(object: Partial<_68.QueryClientParamsResponse>): _68.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _68.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_68.QueryUpgradedClientStateRequest>): _68.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _68.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_68.QueryUpgradedClientStateResponse>): _68.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _68.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_68.QueryUpgradedConsensusStateRequest>): _68.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _68.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_68.QueryUpgradedConsensusStateResponse>): _68.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                    fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _67.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisMetadata;
                    fromPartial(object: Partial<_67.GenesisMetadata>): _67.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _67.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_67.IdentifiedGenesisMetadata>): _67.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _66.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.IdentifiedClientState;
                    fromPartial(object: Partial<_66.IdentifiedClientState>): _66.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _66.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_66.ConsensusStateWithHeight>): _66.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _66.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ClientConsensusStates;
                    fromPartial(object: Partial<_66.ClientConsensusStates>): _66.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _66.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ClientUpdateProposal;
                    fromPartial(object: Partial<_66.ClientUpdateProposal>): _66.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _66.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.UpgradeProposal;
                    fromPartial(object: Partial<_66.UpgradeProposal>): _66.UpgradeProposal;
                };
                Height: {
                    encode(message: _66.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Height;
                    fromPartial(object: Partial<_66.Height>): _66.Height;
                };
                Params: {
                    encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Params;
                    fromPartial(object: Partial<_66.Params>): _66.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _70.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MerkleRoot;
                    fromPartial(object: Partial<_70.MerkleRoot>): _70.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _70.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MerklePrefix;
                    fromPartial(object: Partial<_70.MerklePrefix>): _70.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _70.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MerklePath;
                    fromPartial(object: Partial<_70.MerklePath>): _70.MerklePath;
                };
                MerkleProof: {
                    encode(message: _70.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MerkleProof;
                    fromPartial(object: Partial<_70.MerkleProof>): _70.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _218.MsgClientImpl;
                QueryClientImpl: typeof _214.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _73.QueryConnectionRequest): Promise<_73.QueryConnectionResponse>;
                    connections(request?: _73.QueryConnectionsRequest): Promise<_73.QueryConnectionsResponse>;
                    clientConnections(request: _73.QueryClientConnectionsRequest): Promise<_73.QueryClientConnectionsResponse>;
                    connectionClientState(request: _73.QueryConnectionClientStateRequest): Promise<_73.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _73.QueryConnectionConsensusStateRequest): Promise<_73.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _210.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _74.MsgConnectionOpenInit) => {
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
                        }) => _74.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _74.MsgConnectionOpenTry) => {
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
                        }) => _74.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _74.MsgConnectionOpenAck) => {
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
                        }) => _74.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _74.MsgConnectionOpenConfirm) => {
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
                        }) => _74.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _74.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_74.MsgConnectionOpenInit>): _74.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _74.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenInitResponse>): _74.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _74.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_74.MsgConnectionOpenTry>): _74.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _74.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenTryResponse>): _74.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _74.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_74.MsgConnectionOpenAck>): _74.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _74.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenAckResponse>): _74.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _74.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_74.MsgConnectionOpenConfirm>): _74.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _74.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenConfirmResponse>): _74.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _73.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionRequest;
                    fromPartial(object: Partial<_73.QueryConnectionRequest>): _73.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _73.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionResponse;
                    fromPartial(object: Partial<_73.QueryConnectionResponse>): _73.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _73.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionsRequest;
                    fromPartial(object: Partial<_73.QueryConnectionsRequest>): _73.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _73.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionsResponse;
                    fromPartial(object: Partial<_73.QueryConnectionsResponse>): _73.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _73.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_73.QueryClientConnectionsRequest>): _73.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _73.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_73.QueryClientConnectionsResponse>): _73.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _73.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_73.QueryConnectionClientStateRequest>): _73.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _73.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_73.QueryConnectionClientStateResponse>): _73.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _73.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_73.QueryConnectionConsensusStateRequest>): _73.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _73.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_73.QueryConnectionConsensusStateResponse>): _73.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                    fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                };
                stateFromJSON(object: any): _71.State;
                stateToJSON(object: _71.State): string;
                State: typeof _71.State;
                StateSDKType: typeof _71.StateSDKType;
                ConnectionEnd: {
                    encode(message: _71.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ConnectionEnd;
                    fromPartial(object: Partial<_71.ConnectionEnd>): _71.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _71.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.IdentifiedConnection;
                    fromPartial(object: Partial<_71.IdentifiedConnection>): _71.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _71.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Counterparty;
                    fromPartial(object: Partial<_71.Counterparty>): _71.Counterparty;
                };
                ClientPaths: {
                    encode(message: _71.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientPaths;
                    fromPartial(object: Partial<_71.ClientPaths>): _71.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _71.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ConnectionPaths;
                    fromPartial(object: Partial<_71.ConnectionPaths>): _71.ConnectionPaths;
                };
                Version: {
                    encode(message: _71.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Version;
                    fromPartial(object: Partial<_71.Version>): _71.Version;
                };
                Params: {
                    encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                    fromPartial(object: Partial<_71.Params>): _71.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _75.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ClientState;
                    fromPartial(object: Partial<_75.ClientState>): _75.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _76.DataType;
                dataTypeToJSON(object: _76.DataType): string;
                DataType: typeof _76.DataType;
                DataTypeSDKType: typeof _76.DataTypeSDKType;
                ClientState: {
                    encode(message: _76.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientState;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                };
                ConsensusState: {
                    encode(message: _76.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusState;
                    fromPartial(object: Partial<_76.ConsensusState>): _76.ConsensusState;
                };
                Header: {
                    encode(message: _76.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Header;
                    fromPartial(object: Partial<_76.Header>): _76.Header;
                };
                Misbehaviour: {
                    encode(message: _76.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Misbehaviour;
                    fromPartial(object: Partial<_76.Misbehaviour>): _76.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _76.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignatureAndData;
                    fromPartial(object: Partial<_76.SignatureAndData>): _76.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _76.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.TimestampedSignatureData;
                    fromPartial(object: Partial<_76.TimestampedSignatureData>): _76.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _76.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignBytes;
                    fromPartial(object: Partial<_76.SignBytes>): _76.SignBytes;
                };
                HeaderData: {
                    encode(message: _76.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.HeaderData;
                    fromPartial(object: Partial<_76.HeaderData>): _76.HeaderData;
                };
                ClientStateData: {
                    encode(message: _76.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientStateData;
                    fromPartial(object: Partial<_76.ClientStateData>): _76.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _76.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusStateData;
                    fromPartial(object: Partial<_76.ConsensusStateData>): _76.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _76.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionStateData;
                    fromPartial(object: Partial<_76.ConnectionStateData>): _76.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _76.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ChannelStateData;
                    fromPartial(object: Partial<_76.ChannelStateData>): _76.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _76.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketCommitmentData;
                    fromPartial(object: Partial<_76.PacketCommitmentData>): _76.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _76.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketAcknowledgementData;
                    fromPartial(object: Partial<_76.PacketAcknowledgementData>): _76.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _76.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_76.PacketReceiptAbsenceData>): _76.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _76.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.NextSequenceRecvData;
                    fromPartial(object: Partial<_76.NextSequenceRecvData>): _76.NextSequenceRecvData;
                };
            };
            const v2: {
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
        }
        namespace tendermint {
            const v1: {
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
                Misbehaviour: {
                    encode(message: _78.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Misbehaviour;
                    fromPartial(object: Partial<_78.Misbehaviour>): _78.Misbehaviour;
                };
                Header: {
                    encode(message: _78.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                };
                Fraction: {
                    encode(message: _78.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Fraction;
                    fromPartial(object: Partial<_78.Fraction>): _78.Fraction;
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
                        v1: _215.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _216.MsgClientImpl;
                    };
                    client: {
                        v1: _217.MsgClientImpl;
                    };
                    connection: {
                        v1: _218.MsgClientImpl;
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
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _58.QueryDenomTraceRequest): Promise<_58.QueryDenomTraceResponse>;
                            denomTraces(request?: _58.QueryDenomTracesRequest): Promise<_58.QueryDenomTracesResponse>;
                            params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _64.QueryChannelRequest): Promise<_64.QueryChannelResponse>;
                            channels(request?: _64.QueryChannelsRequest): Promise<_64.QueryChannelsResponse>;
                            connectionChannels(request: _64.QueryConnectionChannelsRequest): Promise<_64.QueryConnectionChannelsResponse>;
                            channelClientState(request: _64.QueryChannelClientStateRequest): Promise<_64.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _64.QueryChannelConsensusStateRequest): Promise<_64.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _64.QueryPacketCommitmentRequest): Promise<_64.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _64.QueryPacketCommitmentsRequest): Promise<_64.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _64.QueryPacketReceiptRequest): Promise<_64.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _64.QueryPacketAcknowledgementRequest): Promise<_64.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _64.QueryPacketAcknowledgementsRequest): Promise<_64.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _64.QueryUnreceivedPacketsRequest): Promise<_64.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _64.QueryUnreceivedAcksRequest): Promise<_64.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _64.QueryNextSequenceReceiveRequest): Promise<_64.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _68.QueryClientStateRequest): Promise<_68.QueryClientStateResponse>;
                            clientStates(request?: _68.QueryClientStatesRequest): Promise<_68.QueryClientStatesResponse>;
                            consensusState(request: _68.QueryConsensusStateRequest): Promise<_68.QueryConsensusStateResponse>;
                            consensusStates(request: _68.QueryConsensusStatesRequest): Promise<_68.QueryConsensusStatesResponse>;
                            clientStatus(request: _68.QueryClientStatusRequest): Promise<_68.QueryClientStatusResponse>;
                            clientParams(request?: _68.QueryClientParamsRequest): Promise<_68.QueryClientParamsResponse>;
                            upgradedClientState(request?: _68.QueryUpgradedClientStateRequest): Promise<_68.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _73.QueryConnectionRequest): Promise<_73.QueryConnectionResponse>;
                            connections(request?: _73.QueryConnectionsRequest): Promise<_73.QueryConnectionsResponse>;
                            clientConnections(request: _73.QueryClientConnectionsRequest): Promise<_73.QueryClientConnectionsResponse>;
                            connectionClientState(request: _73.QueryConnectionClientStateRequest): Promise<_73.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _73.QueryConnectionConsensusStateRequest): Promise<_73.QueryConnectionConsensusStateResponse>;
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
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _207.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _208.LCDQueryClient;
                    };
                    client: {
                        v1: _209.LCDQueryClient;
                    };
                    connection: {
                        v1: _210.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
