import * as _53 from "./applications/transfer/v1/genesis";
import * as _54 from "./applications/transfer/v1/query";
import * as _55 from "./applications/transfer/v1/transfer";
import * as _56 from "./applications/transfer/v1/tx";
import * as _57 from "./applications/transfer/v2/packet";
import * as _58 from "./core/channel/v1/channel";
import * as _59 from "./core/channel/v1/genesis";
import * as _60 from "./core/channel/v1/query";
import * as _61 from "./core/channel/v1/tx";
import * as _62 from "./core/client/v1/client";
import * as _63 from "./core/client/v1/genesis";
import * as _64 from "./core/client/v1/query";
import * as _65 from "./core/client/v1/tx";
import * as _66 from "./core/commitment/v1/commitment";
import * as _67 from "./core/connection/v1/connection";
import * as _68 from "./core/connection/v1/genesis";
import * as _69 from "./core/connection/v1/query";
import * as _70 from "./core/connection/v1/tx";
import * as _71 from "./lightclients/localhost/v1/localhost";
import * as _72 from "./lightclients/solomachine/v1/solomachine";
import * as _73 from "./lightclients/solomachine/v2/solomachine";
import * as _74 from "./lightclients/tendermint/v1/tendermint";
import * as _213 from "./applications/transfer/v1/query.lcd";
import * as _214 from "./core/channel/v1/query.lcd";
import * as _215 from "./core/client/v1/query.lcd";
import * as _216 from "./core/connection/v1/query.lcd";
import * as _217 from "./applications/transfer/v1/query.rpc.Query";
import * as _218 from "./core/channel/v1/query.rpc.Query";
import * as _219 from "./core/client/v1/query.rpc.Query";
import * as _220 from "./core/connection/v1/query.rpc.Query";
import * as _221 from "./applications/transfer/v1/tx.rpc.msg";
import * as _222 from "./core/channel/v1/tx.rpc.msg";
import * as _223 from "./core/client/v1/tx.rpc.msg";
import * as _224 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _221.MsgClientImpl;
                QueryClientImpl: typeof _217.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _54.QueryDenomTraceRequest): Promise<_54.QueryDenomTraceResponse>;
                    denomTraces(request?: _54.QueryDenomTracesRequest): Promise<_54.QueryDenomTracesResponse>;
                    params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _213.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _56.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _56.MsgTransfer): {
                            typeUrl: string;
                            value: _56.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _56.MsgTransfer): {
                            typeUrl: string;
                            value: _56.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _56.MsgTransfer) => _56.MsgTransferAmino;
                        fromAmino: (object: _56.MsgTransferAmino) => _56.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _56.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgTransfer;
                    fromPartial(object: Partial<_56.MsgTransfer>): _56.MsgTransfer;
                    fromAmino(object: _56.MsgTransferAmino): _56.MsgTransfer;
                    toAmino(message: _56.MsgTransfer): _56.MsgTransferAmino;
                    fromAminoMsg(object: _56.MsgTransferAminoMsg): _56.MsgTransfer;
                    toAminoMsg(message: _56.MsgTransfer): _56.MsgTransferAminoMsg;
                    fromProtoMsg(message: _56.MsgTransferProtoMsg): _56.MsgTransfer;
                    toProto(message: _56.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _56.MsgTransfer): _56.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(_: _56.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgTransferResponse;
                    fromPartial(_: Partial<_56.MsgTransferResponse>): _56.MsgTransferResponse;
                    fromAmino(_: _56.MsgTransferResponseAmino): _56.MsgTransferResponse;
                    toAmino(_: _56.MsgTransferResponse): _56.MsgTransferResponseAmino;
                    fromAminoMsg(object: _56.MsgTransferResponseAminoMsg): _56.MsgTransferResponse;
                    toAminoMsg(message: _56.MsgTransferResponse): _56.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _56.MsgTransferResponseProtoMsg): _56.MsgTransferResponse;
                    toProto(message: _56.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _56.MsgTransferResponse): _56.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _55.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DenomTrace;
                    fromPartial(object: Partial<_55.DenomTrace>): _55.DenomTrace;
                    fromAmino(object: _55.DenomTraceAmino): _55.DenomTrace;
                    toAmino(message: _55.DenomTrace): _55.DenomTraceAmino;
                    fromAminoMsg(object: _55.DenomTraceAminoMsg): _55.DenomTrace;
                    toAminoMsg(message: _55.DenomTrace): _55.DenomTraceAminoMsg;
                    fromProtoMsg(message: _55.DenomTraceProtoMsg): _55.DenomTrace;
                    toProto(message: _55.DenomTrace): Uint8Array;
                    toProtoMsg(message: _55.DenomTrace): _55.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                    fromPartial(object: Partial<_55.Params>): _55.Params;
                    fromAmino(object: _55.ParamsAmino): _55.Params;
                    toAmino(message: _55.Params): _55.ParamsAmino;
                    fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                    toAminoMsg(message: _55.Params): _55.ParamsAminoMsg;
                    fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                    toProto(message: _55.Params): Uint8Array;
                    toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _54.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_54.QueryDenomTraceRequest>): _54.QueryDenomTraceRequest;
                    fromAmino(object: _54.QueryDenomTraceRequestAmino): _54.QueryDenomTraceRequest;
                    toAmino(message: _54.QueryDenomTraceRequest): _54.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _54.QueryDenomTraceRequestAminoMsg): _54.QueryDenomTraceRequest;
                    toAminoMsg(message: _54.QueryDenomTraceRequest): _54.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _54.QueryDenomTraceRequestProtoMsg): _54.QueryDenomTraceRequest;
                    toProto(message: _54.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _54.QueryDenomTraceRequest): _54.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _54.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_54.QueryDenomTraceResponse>): _54.QueryDenomTraceResponse;
                    fromAmino(object: _54.QueryDenomTraceResponseAmino): _54.QueryDenomTraceResponse;
                    toAmino(message: _54.QueryDenomTraceResponse): _54.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _54.QueryDenomTraceResponseAminoMsg): _54.QueryDenomTraceResponse;
                    toAminoMsg(message: _54.QueryDenomTraceResponse): _54.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _54.QueryDenomTraceResponseProtoMsg): _54.QueryDenomTraceResponse;
                    toProto(message: _54.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _54.QueryDenomTraceResponse): _54.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _54.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_54.QueryDenomTracesRequest>): _54.QueryDenomTracesRequest;
                    fromAmino(object: _54.QueryDenomTracesRequestAmino): _54.QueryDenomTracesRequest;
                    toAmino(message: _54.QueryDenomTracesRequest): _54.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _54.QueryDenomTracesRequestAminoMsg): _54.QueryDenomTracesRequest;
                    toAminoMsg(message: _54.QueryDenomTracesRequest): _54.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _54.QueryDenomTracesRequestProtoMsg): _54.QueryDenomTracesRequest;
                    toProto(message: _54.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _54.QueryDenomTracesRequest): _54.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _54.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_54.QueryDenomTracesResponse>): _54.QueryDenomTracesResponse;
                    fromAmino(object: _54.QueryDenomTracesResponseAmino): _54.QueryDenomTracesResponse;
                    toAmino(message: _54.QueryDenomTracesResponse): _54.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _54.QueryDenomTracesResponseAminoMsg): _54.QueryDenomTracesResponse;
                    toAminoMsg(message: _54.QueryDenomTracesResponse): _54.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _54.QueryDenomTracesResponseProtoMsg): _54.QueryDenomTracesResponse;
                    toProto(message: _54.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _54.QueryDenomTracesResponse): _54.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                    fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                    fromAmino(_: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                    toAmino(_: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                    fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                    toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                    toProto(message: _54.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                    fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                    fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                    toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                    fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                    toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                    toProto(message: _54.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                    fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                    fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                    toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                    fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                    toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                    fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                    toProto(message: _53.GenesisState): Uint8Array;
                    toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _57.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FungibleTokenPacketData;
                    fromPartial(object: Partial<_57.FungibleTokenPacketData>): _57.FungibleTokenPacketData;
                    fromAmino(object: _57.FungibleTokenPacketDataAmino): _57.FungibleTokenPacketData;
                    toAmino(message: _57.FungibleTokenPacketData): _57.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _57.FungibleTokenPacketDataAminoMsg): _57.FungibleTokenPacketData;
                    toAminoMsg(message: _57.FungibleTokenPacketData): _57.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _57.FungibleTokenPacketDataProtoMsg): _57.FungibleTokenPacketData;
                    toProto(message: _57.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _57.FungibleTokenPacketData): _57.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _222.MsgClientImpl;
                QueryClientImpl: typeof _218.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _60.QueryChannelRequest): Promise<_60.QueryChannelResponse>;
                    channels(request?: _60.QueryChannelsRequest): Promise<_60.QueryChannelsResponse>;
                    connectionChannels(request: _60.QueryConnectionChannelsRequest): Promise<_60.QueryConnectionChannelsResponse>;
                    channelClientState(request: _60.QueryChannelClientStateRequest): Promise<_60.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _60.QueryChannelConsensusStateRequest): Promise<_60.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _60.QueryPacketCommitmentRequest): Promise<_60.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _60.QueryPacketCommitmentsRequest): Promise<_60.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _60.QueryPacketReceiptRequest): Promise<_60.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _60.QueryPacketAcknowledgementRequest): Promise<_60.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _60.QueryPacketAcknowledgementsRequest): Promise<_60.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _60.QueryUnreceivedPacketsRequest): Promise<_60.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _60.QueryUnreceivedAcksRequest): Promise<_60.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _60.QueryNextSequenceReceiveRequest): Promise<_60.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _214.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _61.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _61.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _61.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _61.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _61.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _61.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _61.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _61.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _61.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _61.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _61.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _61.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _61.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _61.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _61.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _61.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _61.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _61.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _61.MsgRecvPacket): {
                            typeUrl: string;
                            value: _61.MsgRecvPacket;
                        };
                        timeout(value: _61.MsgTimeout): {
                            typeUrl: string;
                            value: _61.MsgTimeout;
                        };
                        timeoutOnClose(value: _61.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _61.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _61.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _61.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _61.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _61.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _61.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _61.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _61.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _61.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _61.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _61.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _61.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _61.MsgRecvPacket): {
                            typeUrl: string;
                            value: _61.MsgRecvPacket;
                        };
                        timeout(value: _61.MsgTimeout): {
                            typeUrl: string;
                            value: _61.MsgTimeout;
                        };
                        timeoutOnClose(value: _61.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _61.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _61.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _61.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelOpenInit) => _61.MsgChannelOpenInitAmino;
                        fromAmino: (object: _61.MsgChannelOpenInitAmino) => _61.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelOpenTry) => _61.MsgChannelOpenTryAmino;
                        fromAmino: (object: _61.MsgChannelOpenTryAmino) => _61.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelOpenAck) => _61.MsgChannelOpenAckAmino;
                        fromAmino: (object: _61.MsgChannelOpenAckAmino) => _61.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelOpenConfirm) => _61.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _61.MsgChannelOpenConfirmAmino) => _61.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelCloseInit) => _61.MsgChannelCloseInitAmino;
                        fromAmino: (object: _61.MsgChannelCloseInitAmino) => _61.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _61.MsgChannelCloseConfirm) => _61.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _61.MsgChannelCloseConfirmAmino) => _61.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _61.MsgRecvPacket) => _61.MsgRecvPacketAmino;
                        fromAmino: (object: _61.MsgRecvPacketAmino) => _61.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _61.MsgTimeout) => _61.MsgTimeoutAmino;
                        fromAmino: (object: _61.MsgTimeoutAmino) => _61.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _61.MsgTimeoutOnClose) => _61.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _61.MsgTimeoutOnCloseAmino) => _61.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _61.MsgAcknowledgement) => _61.MsgAcknowledgementAmino;
                        fromAmino: (object: _61.MsgAcknowledgementAmino) => _61.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _61.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenInit;
                    fromPartial(object: Partial<_61.MsgChannelOpenInit>): _61.MsgChannelOpenInit;
                    fromAmino(object: _61.MsgChannelOpenInitAmino): _61.MsgChannelOpenInit;
                    toAmino(message: _61.MsgChannelOpenInit): _61.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenInitAminoMsg): _61.MsgChannelOpenInit;
                    toAminoMsg(message: _61.MsgChannelOpenInit): _61.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenInitProtoMsg): _61.MsgChannelOpenInit;
                    toProto(message: _61.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenInit): _61.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _61.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_61.MsgChannelOpenInitResponse>): _61.MsgChannelOpenInitResponse;
                    fromAmino(_: _61.MsgChannelOpenInitResponseAmino): _61.MsgChannelOpenInitResponse;
                    toAmino(_: _61.MsgChannelOpenInitResponse): _61.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenInitResponseAminoMsg): _61.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _61.MsgChannelOpenInitResponse): _61.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenInitResponseProtoMsg): _61.MsgChannelOpenInitResponse;
                    toProto(message: _61.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenInitResponse): _61.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    encode(message: _61.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenTry;
                    fromPartial(object: Partial<_61.MsgChannelOpenTry>): _61.MsgChannelOpenTry;
                    fromAmino(object: _61.MsgChannelOpenTryAmino): _61.MsgChannelOpenTry;
                    toAmino(message: _61.MsgChannelOpenTry): _61.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenTryAminoMsg): _61.MsgChannelOpenTry;
                    toAminoMsg(message: _61.MsgChannelOpenTry): _61.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenTryProtoMsg): _61.MsgChannelOpenTry;
                    toProto(message: _61.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenTry): _61.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _61.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_61.MsgChannelOpenTryResponse>): _61.MsgChannelOpenTryResponse;
                    fromAmino(_: _61.MsgChannelOpenTryResponseAmino): _61.MsgChannelOpenTryResponse;
                    toAmino(_: _61.MsgChannelOpenTryResponse): _61.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenTryResponseAminoMsg): _61.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _61.MsgChannelOpenTryResponse): _61.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenTryResponseProtoMsg): _61.MsgChannelOpenTryResponse;
                    toProto(message: _61.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenTryResponse): _61.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    encode(message: _61.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenAck;
                    fromPartial(object: Partial<_61.MsgChannelOpenAck>): _61.MsgChannelOpenAck;
                    fromAmino(object: _61.MsgChannelOpenAckAmino): _61.MsgChannelOpenAck;
                    toAmino(message: _61.MsgChannelOpenAck): _61.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenAckAminoMsg): _61.MsgChannelOpenAck;
                    toAminoMsg(message: _61.MsgChannelOpenAck): _61.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenAckProtoMsg): _61.MsgChannelOpenAck;
                    toProto(message: _61.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenAck): _61.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _61.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_61.MsgChannelOpenAckResponse>): _61.MsgChannelOpenAckResponse;
                    fromAmino(_: _61.MsgChannelOpenAckResponseAmino): _61.MsgChannelOpenAckResponse;
                    toAmino(_: _61.MsgChannelOpenAckResponse): _61.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenAckResponseAminoMsg): _61.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _61.MsgChannelOpenAckResponse): _61.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenAckResponseProtoMsg): _61.MsgChannelOpenAckResponse;
                    toProto(message: _61.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenAckResponse): _61.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _61.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_61.MsgChannelOpenConfirm>): _61.MsgChannelOpenConfirm;
                    fromAmino(object: _61.MsgChannelOpenConfirmAmino): _61.MsgChannelOpenConfirm;
                    toAmino(message: _61.MsgChannelOpenConfirm): _61.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenConfirmAminoMsg): _61.MsgChannelOpenConfirm;
                    toAminoMsg(message: _61.MsgChannelOpenConfirm): _61.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenConfirmProtoMsg): _61.MsgChannelOpenConfirm;
                    toProto(message: _61.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenConfirm): _61.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _61.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_61.MsgChannelOpenConfirmResponse>): _61.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _61.MsgChannelOpenConfirmResponseAmino): _61.MsgChannelOpenConfirmResponse;
                    toAmino(_: _61.MsgChannelOpenConfirmResponse): _61.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelOpenConfirmResponseAminoMsg): _61.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _61.MsgChannelOpenConfirmResponse): _61.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelOpenConfirmResponseProtoMsg): _61.MsgChannelOpenConfirmResponse;
                    toProto(message: _61.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelOpenConfirmResponse): _61.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    encode(message: _61.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelCloseInit;
                    fromPartial(object: Partial<_61.MsgChannelCloseInit>): _61.MsgChannelCloseInit;
                    fromAmino(object: _61.MsgChannelCloseInitAmino): _61.MsgChannelCloseInit;
                    toAmino(message: _61.MsgChannelCloseInit): _61.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _61.MsgChannelCloseInitAminoMsg): _61.MsgChannelCloseInit;
                    toAminoMsg(message: _61.MsgChannelCloseInit): _61.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelCloseInitProtoMsg): _61.MsgChannelCloseInit;
                    toProto(message: _61.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelCloseInit): _61.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _61.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_61.MsgChannelCloseInitResponse>): _61.MsgChannelCloseInitResponse;
                    fromAmino(_: _61.MsgChannelCloseInitResponseAmino): _61.MsgChannelCloseInitResponse;
                    toAmino(_: _61.MsgChannelCloseInitResponse): _61.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelCloseInitResponseAminoMsg): _61.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _61.MsgChannelCloseInitResponse): _61.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelCloseInitResponseProtoMsg): _61.MsgChannelCloseInitResponse;
                    toProto(message: _61.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelCloseInitResponse): _61.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _61.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_61.MsgChannelCloseConfirm>): _61.MsgChannelCloseConfirm;
                    fromAmino(object: _61.MsgChannelCloseConfirmAmino): _61.MsgChannelCloseConfirm;
                    toAmino(message: _61.MsgChannelCloseConfirm): _61.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _61.MsgChannelCloseConfirmAminoMsg): _61.MsgChannelCloseConfirm;
                    toAminoMsg(message: _61.MsgChannelCloseConfirm): _61.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelCloseConfirmProtoMsg): _61.MsgChannelCloseConfirm;
                    toProto(message: _61.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelCloseConfirm): _61.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _61.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_61.MsgChannelCloseConfirmResponse>): _61.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _61.MsgChannelCloseConfirmResponseAmino): _61.MsgChannelCloseConfirmResponse;
                    toAmino(_: _61.MsgChannelCloseConfirmResponse): _61.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _61.MsgChannelCloseConfirmResponseAminoMsg): _61.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _61.MsgChannelCloseConfirmResponse): _61.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgChannelCloseConfirmResponseProtoMsg): _61.MsgChannelCloseConfirmResponse;
                    toProto(message: _61.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgChannelCloseConfirmResponse): _61.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    encode(message: _61.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgRecvPacket;
                    fromPartial(object: Partial<_61.MsgRecvPacket>): _61.MsgRecvPacket;
                    fromAmino(object: _61.MsgRecvPacketAmino): _61.MsgRecvPacket;
                    toAmino(message: _61.MsgRecvPacket): _61.MsgRecvPacketAmino;
                    fromAminoMsg(object: _61.MsgRecvPacketAminoMsg): _61.MsgRecvPacket;
                    toAminoMsg(message: _61.MsgRecvPacket): _61.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _61.MsgRecvPacketProtoMsg): _61.MsgRecvPacket;
                    toProto(message: _61.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _61.MsgRecvPacket): _61.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    encode(_: _61.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_61.MsgRecvPacketResponse>): _61.MsgRecvPacketResponse;
                    fromAmino(_: _61.MsgRecvPacketResponseAmino): _61.MsgRecvPacketResponse;
                    toAmino(_: _61.MsgRecvPacketResponse): _61.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _61.MsgRecvPacketResponseAminoMsg): _61.MsgRecvPacketResponse;
                    toAminoMsg(message: _61.MsgRecvPacketResponse): _61.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgRecvPacketResponseProtoMsg): _61.MsgRecvPacketResponse;
                    toProto(message: _61.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgRecvPacketResponse): _61.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    encode(message: _61.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTimeout;
                    fromPartial(object: Partial<_61.MsgTimeout>): _61.MsgTimeout;
                    fromAmino(object: _61.MsgTimeoutAmino): _61.MsgTimeout;
                    toAmino(message: _61.MsgTimeout): _61.MsgTimeoutAmino;
                    fromAminoMsg(object: _61.MsgTimeoutAminoMsg): _61.MsgTimeout;
                    toAminoMsg(message: _61.MsgTimeout): _61.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _61.MsgTimeoutProtoMsg): _61.MsgTimeout;
                    toProto(message: _61.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _61.MsgTimeout): _61.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    encode(_: _61.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTimeoutResponse;
                    fromPartial(_: Partial<_61.MsgTimeoutResponse>): _61.MsgTimeoutResponse;
                    fromAmino(_: _61.MsgTimeoutResponseAmino): _61.MsgTimeoutResponse;
                    toAmino(_: _61.MsgTimeoutResponse): _61.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _61.MsgTimeoutResponseAminoMsg): _61.MsgTimeoutResponse;
                    toAminoMsg(message: _61.MsgTimeoutResponse): _61.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgTimeoutResponseProtoMsg): _61.MsgTimeoutResponse;
                    toProto(message: _61.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgTimeoutResponse): _61.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    encode(message: _61.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_61.MsgTimeoutOnClose>): _61.MsgTimeoutOnClose;
                    fromAmino(object: _61.MsgTimeoutOnCloseAmino): _61.MsgTimeoutOnClose;
                    toAmino(message: _61.MsgTimeoutOnClose): _61.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _61.MsgTimeoutOnCloseAminoMsg): _61.MsgTimeoutOnClose;
                    toAminoMsg(message: _61.MsgTimeoutOnClose): _61.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _61.MsgTimeoutOnCloseProtoMsg): _61.MsgTimeoutOnClose;
                    toProto(message: _61.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _61.MsgTimeoutOnClose): _61.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _61.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_61.MsgTimeoutOnCloseResponse>): _61.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _61.MsgTimeoutOnCloseResponseAmino): _61.MsgTimeoutOnCloseResponse;
                    toAmino(_: _61.MsgTimeoutOnCloseResponse): _61.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _61.MsgTimeoutOnCloseResponseAminoMsg): _61.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _61.MsgTimeoutOnCloseResponse): _61.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgTimeoutOnCloseResponseProtoMsg): _61.MsgTimeoutOnCloseResponse;
                    toProto(message: _61.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgTimeoutOnCloseResponse): _61.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    encode(message: _61.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgAcknowledgement;
                    fromPartial(object: Partial<_61.MsgAcknowledgement>): _61.MsgAcknowledgement;
                    fromAmino(object: _61.MsgAcknowledgementAmino): _61.MsgAcknowledgement;
                    toAmino(message: _61.MsgAcknowledgement): _61.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _61.MsgAcknowledgementAminoMsg): _61.MsgAcknowledgement;
                    toAminoMsg(message: _61.MsgAcknowledgement): _61.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _61.MsgAcknowledgementProtoMsg): _61.MsgAcknowledgement;
                    toProto(message: _61.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _61.MsgAcknowledgement): _61.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _61.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_61.MsgAcknowledgementResponse>): _61.MsgAcknowledgementResponse;
                    fromAmino(_: _61.MsgAcknowledgementResponseAmino): _61.MsgAcknowledgementResponse;
                    toAmino(_: _61.MsgAcknowledgementResponse): _61.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _61.MsgAcknowledgementResponseAminoMsg): _61.MsgAcknowledgementResponse;
                    toAminoMsg(message: _61.MsgAcknowledgementResponse): _61.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgAcknowledgementResponseProtoMsg): _61.MsgAcknowledgementResponse;
                    toProto(message: _61.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgAcknowledgementResponse): _61.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    encode(message: _60.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelRequest;
                    fromPartial(object: Partial<_60.QueryChannelRequest>): _60.QueryChannelRequest;
                    fromAmino(object: _60.QueryChannelRequestAmino): _60.QueryChannelRequest;
                    toAmino(message: _60.QueryChannelRequest): _60.QueryChannelRequestAmino;
                    fromAminoMsg(object: _60.QueryChannelRequestAminoMsg): _60.QueryChannelRequest;
                    toAminoMsg(message: _60.QueryChannelRequest): _60.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelRequestProtoMsg): _60.QueryChannelRequest;
                    toProto(message: _60.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelRequest): _60.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    encode(message: _60.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelResponse;
                    fromPartial(object: Partial<_60.QueryChannelResponse>): _60.QueryChannelResponse;
                    fromAmino(object: _60.QueryChannelResponseAmino): _60.QueryChannelResponse;
                    toAmino(message: _60.QueryChannelResponse): _60.QueryChannelResponseAmino;
                    fromAminoMsg(object: _60.QueryChannelResponseAminoMsg): _60.QueryChannelResponse;
                    toAminoMsg(message: _60.QueryChannelResponse): _60.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelResponseProtoMsg): _60.QueryChannelResponse;
                    toProto(message: _60.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelResponse): _60.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    encode(message: _60.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelsRequest;
                    fromPartial(object: Partial<_60.QueryChannelsRequest>): _60.QueryChannelsRequest;
                    fromAmino(object: _60.QueryChannelsRequestAmino): _60.QueryChannelsRequest;
                    toAmino(message: _60.QueryChannelsRequest): _60.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _60.QueryChannelsRequestAminoMsg): _60.QueryChannelsRequest;
                    toAminoMsg(message: _60.QueryChannelsRequest): _60.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelsRequestProtoMsg): _60.QueryChannelsRequest;
                    toProto(message: _60.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelsRequest): _60.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    encode(message: _60.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelsResponse;
                    fromPartial(object: Partial<_60.QueryChannelsResponse>): _60.QueryChannelsResponse;
                    fromAmino(object: _60.QueryChannelsResponseAmino): _60.QueryChannelsResponse;
                    toAmino(message: _60.QueryChannelsResponse): _60.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _60.QueryChannelsResponseAminoMsg): _60.QueryChannelsResponse;
                    toAminoMsg(message: _60.QueryChannelsResponse): _60.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelsResponseProtoMsg): _60.QueryChannelsResponse;
                    toProto(message: _60.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelsResponse): _60.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _60.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_60.QueryConnectionChannelsRequest>): _60.QueryConnectionChannelsRequest;
                    fromAmino(object: _60.QueryConnectionChannelsRequestAmino): _60.QueryConnectionChannelsRequest;
                    toAmino(message: _60.QueryConnectionChannelsRequest): _60.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _60.QueryConnectionChannelsRequestAminoMsg): _60.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _60.QueryConnectionChannelsRequest): _60.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryConnectionChannelsRequestProtoMsg): _60.QueryConnectionChannelsRequest;
                    toProto(message: _60.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryConnectionChannelsRequest): _60.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _60.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_60.QueryConnectionChannelsResponse>): _60.QueryConnectionChannelsResponse;
                    fromAmino(object: _60.QueryConnectionChannelsResponseAmino): _60.QueryConnectionChannelsResponse;
                    toAmino(message: _60.QueryConnectionChannelsResponse): _60.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _60.QueryConnectionChannelsResponseAminoMsg): _60.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _60.QueryConnectionChannelsResponse): _60.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryConnectionChannelsResponseProtoMsg): _60.QueryConnectionChannelsResponse;
                    toProto(message: _60.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryConnectionChannelsResponse): _60.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _60.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_60.QueryChannelClientStateRequest>): _60.QueryChannelClientStateRequest;
                    fromAmino(object: _60.QueryChannelClientStateRequestAmino): _60.QueryChannelClientStateRequest;
                    toAmino(message: _60.QueryChannelClientStateRequest): _60.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _60.QueryChannelClientStateRequestAminoMsg): _60.QueryChannelClientStateRequest;
                    toAminoMsg(message: _60.QueryChannelClientStateRequest): _60.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelClientStateRequestProtoMsg): _60.QueryChannelClientStateRequest;
                    toProto(message: _60.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelClientStateRequest): _60.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _60.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_60.QueryChannelClientStateResponse>): _60.QueryChannelClientStateResponse;
                    fromAmino(object: _60.QueryChannelClientStateResponseAmino): _60.QueryChannelClientStateResponse;
                    toAmino(message: _60.QueryChannelClientStateResponse): _60.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _60.QueryChannelClientStateResponseAminoMsg): _60.QueryChannelClientStateResponse;
                    toAminoMsg(message: _60.QueryChannelClientStateResponse): _60.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelClientStateResponseProtoMsg): _60.QueryChannelClientStateResponse;
                    toProto(message: _60.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelClientStateResponse): _60.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _60.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_60.QueryChannelConsensusStateRequest>): _60.QueryChannelConsensusStateRequest;
                    fromAmino(object: _60.QueryChannelConsensusStateRequestAmino): _60.QueryChannelConsensusStateRequest;
                    toAmino(message: _60.QueryChannelConsensusStateRequest): _60.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _60.QueryChannelConsensusStateRequestAminoMsg): _60.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _60.QueryChannelConsensusStateRequest): _60.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelConsensusStateRequestProtoMsg): _60.QueryChannelConsensusStateRequest;
                    toProto(message: _60.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelConsensusStateRequest): _60.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _60.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_60.QueryChannelConsensusStateResponse>): _60.QueryChannelConsensusStateResponse;
                    fromAmino(object: _60.QueryChannelConsensusStateResponseAmino): _60.QueryChannelConsensusStateResponse;
                    toAmino(message: _60.QueryChannelConsensusStateResponse): _60.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _60.QueryChannelConsensusStateResponseAminoMsg): _60.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _60.QueryChannelConsensusStateResponse): _60.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryChannelConsensusStateResponseProtoMsg): _60.QueryChannelConsensusStateResponse;
                    toProto(message: _60.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryChannelConsensusStateResponse): _60.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _60.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_60.QueryPacketCommitmentRequest>): _60.QueryPacketCommitmentRequest;
                    fromAmino(object: _60.QueryPacketCommitmentRequestAmino): _60.QueryPacketCommitmentRequest;
                    toAmino(message: _60.QueryPacketCommitmentRequest): _60.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _60.QueryPacketCommitmentRequestAminoMsg): _60.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _60.QueryPacketCommitmentRequest): _60.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketCommitmentRequestProtoMsg): _60.QueryPacketCommitmentRequest;
                    toProto(message: _60.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketCommitmentRequest): _60.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _60.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_60.QueryPacketCommitmentResponse>): _60.QueryPacketCommitmentResponse;
                    fromAmino(object: _60.QueryPacketCommitmentResponseAmino): _60.QueryPacketCommitmentResponse;
                    toAmino(message: _60.QueryPacketCommitmentResponse): _60.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _60.QueryPacketCommitmentResponseAminoMsg): _60.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _60.QueryPacketCommitmentResponse): _60.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketCommitmentResponseProtoMsg): _60.QueryPacketCommitmentResponse;
                    toProto(message: _60.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketCommitmentResponse): _60.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _60.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_60.QueryPacketCommitmentsRequest>): _60.QueryPacketCommitmentsRequest;
                    fromAmino(object: _60.QueryPacketCommitmentsRequestAmino): _60.QueryPacketCommitmentsRequest;
                    toAmino(message: _60.QueryPacketCommitmentsRequest): _60.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _60.QueryPacketCommitmentsRequestAminoMsg): _60.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _60.QueryPacketCommitmentsRequest): _60.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketCommitmentsRequestProtoMsg): _60.QueryPacketCommitmentsRequest;
                    toProto(message: _60.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketCommitmentsRequest): _60.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _60.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_60.QueryPacketCommitmentsResponse>): _60.QueryPacketCommitmentsResponse;
                    fromAmino(object: _60.QueryPacketCommitmentsResponseAmino): _60.QueryPacketCommitmentsResponse;
                    toAmino(message: _60.QueryPacketCommitmentsResponse): _60.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _60.QueryPacketCommitmentsResponseAminoMsg): _60.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _60.QueryPacketCommitmentsResponse): _60.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketCommitmentsResponseProtoMsg): _60.QueryPacketCommitmentsResponse;
                    toProto(message: _60.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketCommitmentsResponse): _60.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _60.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_60.QueryPacketReceiptRequest>): _60.QueryPacketReceiptRequest;
                    fromAmino(object: _60.QueryPacketReceiptRequestAmino): _60.QueryPacketReceiptRequest;
                    toAmino(message: _60.QueryPacketReceiptRequest): _60.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _60.QueryPacketReceiptRequestAminoMsg): _60.QueryPacketReceiptRequest;
                    toAminoMsg(message: _60.QueryPacketReceiptRequest): _60.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketReceiptRequestProtoMsg): _60.QueryPacketReceiptRequest;
                    toProto(message: _60.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketReceiptRequest): _60.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _60.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_60.QueryPacketReceiptResponse>): _60.QueryPacketReceiptResponse;
                    fromAmino(object: _60.QueryPacketReceiptResponseAmino): _60.QueryPacketReceiptResponse;
                    toAmino(message: _60.QueryPacketReceiptResponse): _60.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _60.QueryPacketReceiptResponseAminoMsg): _60.QueryPacketReceiptResponse;
                    toAminoMsg(message: _60.QueryPacketReceiptResponse): _60.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketReceiptResponseProtoMsg): _60.QueryPacketReceiptResponse;
                    toProto(message: _60.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketReceiptResponse): _60.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _60.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_60.QueryPacketAcknowledgementRequest>): _60.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _60.QueryPacketAcknowledgementRequestAmino): _60.QueryPacketAcknowledgementRequest;
                    toAmino(message: _60.QueryPacketAcknowledgementRequest): _60.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _60.QueryPacketAcknowledgementRequestAminoMsg): _60.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _60.QueryPacketAcknowledgementRequest): _60.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketAcknowledgementRequestProtoMsg): _60.QueryPacketAcknowledgementRequest;
                    toProto(message: _60.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketAcknowledgementRequest): _60.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _60.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_60.QueryPacketAcknowledgementResponse>): _60.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _60.QueryPacketAcknowledgementResponseAmino): _60.QueryPacketAcknowledgementResponse;
                    toAmino(message: _60.QueryPacketAcknowledgementResponse): _60.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _60.QueryPacketAcknowledgementResponseAminoMsg): _60.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _60.QueryPacketAcknowledgementResponse): _60.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketAcknowledgementResponseProtoMsg): _60.QueryPacketAcknowledgementResponse;
                    toProto(message: _60.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketAcknowledgementResponse): _60.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _60.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_60.QueryPacketAcknowledgementsRequest>): _60.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _60.QueryPacketAcknowledgementsRequestAmino): _60.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _60.QueryPacketAcknowledgementsRequest): _60.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _60.QueryPacketAcknowledgementsRequestAminoMsg): _60.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _60.QueryPacketAcknowledgementsRequest): _60.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketAcknowledgementsRequestProtoMsg): _60.QueryPacketAcknowledgementsRequest;
                    toProto(message: _60.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketAcknowledgementsRequest): _60.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _60.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_60.QueryPacketAcknowledgementsResponse>): _60.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _60.QueryPacketAcknowledgementsResponseAmino): _60.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _60.QueryPacketAcknowledgementsResponse): _60.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _60.QueryPacketAcknowledgementsResponseAminoMsg): _60.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _60.QueryPacketAcknowledgementsResponse): _60.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryPacketAcknowledgementsResponseProtoMsg): _60.QueryPacketAcknowledgementsResponse;
                    toProto(message: _60.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryPacketAcknowledgementsResponse): _60.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _60.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_60.QueryUnreceivedPacketsRequest>): _60.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _60.QueryUnreceivedPacketsRequestAmino): _60.QueryUnreceivedPacketsRequest;
                    toAmino(message: _60.QueryUnreceivedPacketsRequest): _60.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _60.QueryUnreceivedPacketsRequestAminoMsg): _60.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _60.QueryUnreceivedPacketsRequest): _60.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryUnreceivedPacketsRequestProtoMsg): _60.QueryUnreceivedPacketsRequest;
                    toProto(message: _60.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryUnreceivedPacketsRequest): _60.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _60.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_60.QueryUnreceivedPacketsResponse>): _60.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _60.QueryUnreceivedPacketsResponseAmino): _60.QueryUnreceivedPacketsResponse;
                    toAmino(message: _60.QueryUnreceivedPacketsResponse): _60.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _60.QueryUnreceivedPacketsResponseAminoMsg): _60.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _60.QueryUnreceivedPacketsResponse): _60.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryUnreceivedPacketsResponseProtoMsg): _60.QueryUnreceivedPacketsResponse;
                    toProto(message: _60.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryUnreceivedPacketsResponse): _60.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _60.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_60.QueryUnreceivedAcksRequest>): _60.QueryUnreceivedAcksRequest;
                    fromAmino(object: _60.QueryUnreceivedAcksRequestAmino): _60.QueryUnreceivedAcksRequest;
                    toAmino(message: _60.QueryUnreceivedAcksRequest): _60.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _60.QueryUnreceivedAcksRequestAminoMsg): _60.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _60.QueryUnreceivedAcksRequest): _60.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryUnreceivedAcksRequestProtoMsg): _60.QueryUnreceivedAcksRequest;
                    toProto(message: _60.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryUnreceivedAcksRequest): _60.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _60.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_60.QueryUnreceivedAcksResponse>): _60.QueryUnreceivedAcksResponse;
                    fromAmino(object: _60.QueryUnreceivedAcksResponseAmino): _60.QueryUnreceivedAcksResponse;
                    toAmino(message: _60.QueryUnreceivedAcksResponse): _60.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _60.QueryUnreceivedAcksResponseAminoMsg): _60.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _60.QueryUnreceivedAcksResponse): _60.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryUnreceivedAcksResponseProtoMsg): _60.QueryUnreceivedAcksResponse;
                    toProto(message: _60.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryUnreceivedAcksResponse): _60.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _60.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_60.QueryNextSequenceReceiveRequest>): _60.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _60.QueryNextSequenceReceiveRequestAmino): _60.QueryNextSequenceReceiveRequest;
                    toAmino(message: _60.QueryNextSequenceReceiveRequest): _60.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _60.QueryNextSequenceReceiveRequestAminoMsg): _60.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _60.QueryNextSequenceReceiveRequest): _60.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _60.QueryNextSequenceReceiveRequestProtoMsg): _60.QueryNextSequenceReceiveRequest;
                    toProto(message: _60.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _60.QueryNextSequenceReceiveRequest): _60.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _60.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_60.QueryNextSequenceReceiveResponse>): _60.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _60.QueryNextSequenceReceiveResponseAmino): _60.QueryNextSequenceReceiveResponse;
                    toAmino(message: _60.QueryNextSequenceReceiveResponse): _60.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _60.QueryNextSequenceReceiveResponseAminoMsg): _60.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _60.QueryNextSequenceReceiveResponse): _60.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _60.QueryNextSequenceReceiveResponseProtoMsg): _60.QueryNextSequenceReceiveResponse;
                    toProto(message: _60.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _60.QueryNextSequenceReceiveResponse): _60.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                    fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                    fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                    toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                    fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                    toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                    fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                    toProto(message: _59.GenesisState): Uint8Array;
                    toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    encode(message: _59.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.PacketSequence;
                    fromPartial(object: Partial<_59.PacketSequence>): _59.PacketSequence;
                    fromAmino(object: _59.PacketSequenceAmino): _59.PacketSequence;
                    toAmino(message: _59.PacketSequence): _59.PacketSequenceAmino;
                    fromAminoMsg(object: _59.PacketSequenceAminoMsg): _59.PacketSequence;
                    toAminoMsg(message: _59.PacketSequence): _59.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _59.PacketSequenceProtoMsg): _59.PacketSequence;
                    toProto(message: _59.PacketSequence): Uint8Array;
                    toProtoMsg(message: _59.PacketSequence): _59.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _58.State;
                stateToJSON(object: _58.State): string;
                orderFromJSON(object: any): _58.Order;
                orderToJSON(object: _58.Order): string;
                State: typeof _58.State;
                StateSDKType: typeof _58.State;
                StateAmino: typeof _58.State;
                Order: typeof _58.Order;
                OrderSDKType: typeof _58.Order;
                OrderAmino: typeof _58.Order;
                Channel: {
                    encode(message: _58.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Channel;
                    fromPartial(object: Partial<_58.Channel>): _58.Channel;
                    fromAmino(object: _58.ChannelAmino): _58.Channel;
                    toAmino(message: _58.Channel): _58.ChannelAmino;
                    fromAminoMsg(object: _58.ChannelAminoMsg): _58.Channel;
                    toAminoMsg(message: _58.Channel): _58.ChannelAminoMsg;
                    fromProtoMsg(message: _58.ChannelProtoMsg): _58.Channel;
                    toProto(message: _58.Channel): Uint8Array;
                    toProtoMsg(message: _58.Channel): _58.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    encode(message: _58.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.IdentifiedChannel;
                    fromPartial(object: Partial<_58.IdentifiedChannel>): _58.IdentifiedChannel;
                    fromAmino(object: _58.IdentifiedChannelAmino): _58.IdentifiedChannel;
                    toAmino(message: _58.IdentifiedChannel): _58.IdentifiedChannelAmino;
                    fromAminoMsg(object: _58.IdentifiedChannelAminoMsg): _58.IdentifiedChannel;
                    toAminoMsg(message: _58.IdentifiedChannel): _58.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _58.IdentifiedChannelProtoMsg): _58.IdentifiedChannel;
                    toProto(message: _58.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _58.IdentifiedChannel): _58.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    encode(message: _58.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Counterparty;
                    fromPartial(object: Partial<_58.Counterparty>): _58.Counterparty;
                    fromAmino(object: _58.CounterpartyAmino): _58.Counterparty;
                    toAmino(message: _58.Counterparty): _58.CounterpartyAmino;
                    fromAminoMsg(object: _58.CounterpartyAminoMsg): _58.Counterparty;
                    toAminoMsg(message: _58.Counterparty): _58.CounterpartyAminoMsg;
                    fromProtoMsg(message: _58.CounterpartyProtoMsg): _58.Counterparty;
                    toProto(message: _58.Counterparty): Uint8Array;
                    toProtoMsg(message: _58.Counterparty): _58.CounterpartyProtoMsg;
                };
                Packet: {
                    encode(message: _58.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Packet;
                    fromPartial(object: Partial<_58.Packet>): _58.Packet;
                    fromAmino(object: _58.PacketAmino): _58.Packet;
                    toAmino(message: _58.Packet): _58.PacketAmino;
                    fromAminoMsg(object: _58.PacketAminoMsg): _58.Packet;
                    toAminoMsg(message: _58.Packet): _58.PacketAminoMsg;
                    fromProtoMsg(message: _58.PacketProtoMsg): _58.Packet;
                    toProto(message: _58.Packet): Uint8Array;
                    toProtoMsg(message: _58.Packet): _58.PacketProtoMsg;
                };
                PacketState: {
                    encode(message: _58.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.PacketState;
                    fromPartial(object: Partial<_58.PacketState>): _58.PacketState;
                    fromAmino(object: _58.PacketStateAmino): _58.PacketState;
                    toAmino(message: _58.PacketState): _58.PacketStateAmino;
                    fromAminoMsg(object: _58.PacketStateAminoMsg): _58.PacketState;
                    toAminoMsg(message: _58.PacketState): _58.PacketStateAminoMsg;
                    fromProtoMsg(message: _58.PacketStateProtoMsg): _58.PacketState;
                    toProto(message: _58.PacketState): Uint8Array;
                    toProtoMsg(message: _58.PacketState): _58.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    encode(message: _58.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Acknowledgement;
                    fromPartial(object: Partial<_58.Acknowledgement>): _58.Acknowledgement;
                    fromAmino(object: _58.AcknowledgementAmino): _58.Acknowledgement;
                    toAmino(message: _58.Acknowledgement): _58.AcknowledgementAmino;
                    fromAminoMsg(object: _58.AcknowledgementAminoMsg): _58.Acknowledgement;
                    toAminoMsg(message: _58.Acknowledgement): _58.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _58.AcknowledgementProtoMsg): _58.Acknowledgement;
                    toProto(message: _58.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _58.Acknowledgement): _58.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _223.MsgClientImpl;
                QueryClientImpl: typeof _219.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _64.QueryClientStateRequest): Promise<_64.QueryClientStateResponse>;
                    clientStates(request?: _64.QueryClientStatesRequest): Promise<_64.QueryClientStatesResponse>;
                    consensusState(request: _64.QueryConsensusStateRequest): Promise<_64.QueryConsensusStateResponse>;
                    consensusStates(request: _64.QueryConsensusStatesRequest): Promise<_64.QueryConsensusStatesResponse>;
                    clientStatus(request: _64.QueryClientStatusRequest): Promise<_64.QueryClientStatusResponse>;
                    clientParams(request?: _64.QueryClientParamsRequest): Promise<_64.QueryClientParamsResponse>;
                    upgradedClientState(request?: _64.QueryUpgradedClientStateRequest): Promise<_64.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _64.QueryUpgradedConsensusStateRequest): Promise<_64.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _215.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _65.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _65.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _65.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _65.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _65.MsgCreateClient): {
                            typeUrl: string;
                            value: _65.MsgCreateClient;
                        };
                        updateClient(value: _65.MsgUpdateClient): {
                            typeUrl: string;
                            value: _65.MsgUpdateClient;
                        };
                        upgradeClient(value: _65.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _65.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _65.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _65.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _65.MsgCreateClient): {
                            typeUrl: string;
                            value: _65.MsgCreateClient;
                        };
                        updateClient(value: _65.MsgUpdateClient): {
                            typeUrl: string;
                            value: _65.MsgUpdateClient;
                        };
                        upgradeClient(value: _65.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _65.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _65.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _65.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _65.MsgCreateClient) => _65.MsgCreateClientAmino;
                        fromAmino: (object: _65.MsgCreateClientAmino) => _65.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _65.MsgUpdateClient) => _65.MsgUpdateClientAmino;
                        fromAmino: (object: _65.MsgUpdateClientAmino) => _65.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _65.MsgUpgradeClient) => _65.MsgUpgradeClientAmino;
                        fromAmino: (object: _65.MsgUpgradeClientAmino) => _65.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _65.MsgSubmitMisbehaviour) => _65.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _65.MsgSubmitMisbehaviourAmino) => _65.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _65.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateClient;
                    fromPartial(object: Partial<_65.MsgCreateClient>): _65.MsgCreateClient;
                    fromAmino(object: _65.MsgCreateClientAmino): _65.MsgCreateClient;
                    toAmino(message: _65.MsgCreateClient): _65.MsgCreateClientAmino;
                    fromAminoMsg(object: _65.MsgCreateClientAminoMsg): _65.MsgCreateClient;
                    toAminoMsg(message: _65.MsgCreateClient): _65.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _65.MsgCreateClientProtoMsg): _65.MsgCreateClient;
                    toProto(message: _65.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _65.MsgCreateClient): _65.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _65.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgCreateClientResponse;
                    fromPartial(_: Partial<_65.MsgCreateClientResponse>): _65.MsgCreateClientResponse;
                    fromAmino(_: _65.MsgCreateClientResponseAmino): _65.MsgCreateClientResponse;
                    toAmino(_: _65.MsgCreateClientResponse): _65.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _65.MsgCreateClientResponseAminoMsg): _65.MsgCreateClientResponse;
                    toAminoMsg(message: _65.MsgCreateClientResponse): _65.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgCreateClientResponseProtoMsg): _65.MsgCreateClientResponse;
                    toProto(message: _65.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgCreateClientResponse): _65.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _65.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateClient;
                    fromPartial(object: Partial<_65.MsgUpdateClient>): _65.MsgUpdateClient;
                    fromAmino(object: _65.MsgUpdateClientAmino): _65.MsgUpdateClient;
                    toAmino(message: _65.MsgUpdateClient): _65.MsgUpdateClientAmino;
                    fromAminoMsg(object: _65.MsgUpdateClientAminoMsg): _65.MsgUpdateClient;
                    toAminoMsg(message: _65.MsgUpdateClient): _65.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _65.MsgUpdateClientProtoMsg): _65.MsgUpdateClient;
                    toProto(message: _65.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _65.MsgUpdateClient): _65.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _65.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_65.MsgUpdateClientResponse>): _65.MsgUpdateClientResponse;
                    fromAmino(_: _65.MsgUpdateClientResponseAmino): _65.MsgUpdateClientResponse;
                    toAmino(_: _65.MsgUpdateClientResponse): _65.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _65.MsgUpdateClientResponseAminoMsg): _65.MsgUpdateClientResponse;
                    toAminoMsg(message: _65.MsgUpdateClientResponse): _65.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgUpdateClientResponseProtoMsg): _65.MsgUpdateClientResponse;
                    toProto(message: _65.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgUpdateClientResponse): _65.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _65.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpgradeClient;
                    fromPartial(object: Partial<_65.MsgUpgradeClient>): _65.MsgUpgradeClient;
                    fromAmino(object: _65.MsgUpgradeClientAmino): _65.MsgUpgradeClient;
                    toAmino(message: _65.MsgUpgradeClient): _65.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _65.MsgUpgradeClientAminoMsg): _65.MsgUpgradeClient;
                    toAminoMsg(message: _65.MsgUpgradeClient): _65.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _65.MsgUpgradeClientProtoMsg): _65.MsgUpgradeClient;
                    toProto(message: _65.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _65.MsgUpgradeClient): _65.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _65.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_65.MsgUpgradeClientResponse>): _65.MsgUpgradeClientResponse;
                    fromAmino(_: _65.MsgUpgradeClientResponseAmino): _65.MsgUpgradeClientResponse;
                    toAmino(_: _65.MsgUpgradeClientResponse): _65.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _65.MsgUpgradeClientResponseAminoMsg): _65.MsgUpgradeClientResponse;
                    toAminoMsg(message: _65.MsgUpgradeClientResponse): _65.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgUpgradeClientResponseProtoMsg): _65.MsgUpgradeClientResponse;
                    toProto(message: _65.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgUpgradeClientResponse): _65.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _65.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_65.MsgSubmitMisbehaviour>): _65.MsgSubmitMisbehaviour;
                    fromAmino(object: _65.MsgSubmitMisbehaviourAmino): _65.MsgSubmitMisbehaviour;
                    toAmino(message: _65.MsgSubmitMisbehaviour): _65.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _65.MsgSubmitMisbehaviourAminoMsg): _65.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _65.MsgSubmitMisbehaviour): _65.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _65.MsgSubmitMisbehaviourProtoMsg): _65.MsgSubmitMisbehaviour;
                    toProto(message: _65.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _65.MsgSubmitMisbehaviour): _65.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _65.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_65.MsgSubmitMisbehaviourResponse>): _65.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _65.MsgSubmitMisbehaviourResponseAmino): _65.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _65.MsgSubmitMisbehaviourResponse): _65.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _65.MsgSubmitMisbehaviourResponseAminoMsg): _65.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _65.MsgSubmitMisbehaviourResponse): _65.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgSubmitMisbehaviourResponseProtoMsg): _65.MsgSubmitMisbehaviourResponse;
                    toProto(message: _65.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgSubmitMisbehaviourResponse): _65.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _64.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStateRequest;
                    fromPartial(object: Partial<_64.QueryClientStateRequest>): _64.QueryClientStateRequest;
                    fromAmino(object: _64.QueryClientStateRequestAmino): _64.QueryClientStateRequest;
                    toAmino(message: _64.QueryClientStateRequest): _64.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _64.QueryClientStateRequestAminoMsg): _64.QueryClientStateRequest;
                    toAminoMsg(message: _64.QueryClientStateRequest): _64.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStateRequestProtoMsg): _64.QueryClientStateRequest;
                    toProto(message: _64.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStateRequest): _64.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _64.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStateResponse;
                    fromPartial(object: Partial<_64.QueryClientStateResponse>): _64.QueryClientStateResponse;
                    fromAmino(object: _64.QueryClientStateResponseAmino): _64.QueryClientStateResponse;
                    toAmino(message: _64.QueryClientStateResponse): _64.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _64.QueryClientStateResponseAminoMsg): _64.QueryClientStateResponse;
                    toAminoMsg(message: _64.QueryClientStateResponse): _64.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStateResponseProtoMsg): _64.QueryClientStateResponse;
                    toProto(message: _64.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStateResponse): _64.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _64.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStatesRequest;
                    fromPartial(object: Partial<_64.QueryClientStatesRequest>): _64.QueryClientStatesRequest;
                    fromAmino(object: _64.QueryClientStatesRequestAmino): _64.QueryClientStatesRequest;
                    toAmino(message: _64.QueryClientStatesRequest): _64.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _64.QueryClientStatesRequestAminoMsg): _64.QueryClientStatesRequest;
                    toAminoMsg(message: _64.QueryClientStatesRequest): _64.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStatesRequestProtoMsg): _64.QueryClientStatesRequest;
                    toProto(message: _64.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStatesRequest): _64.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _64.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStatesResponse;
                    fromPartial(object: Partial<_64.QueryClientStatesResponse>): _64.QueryClientStatesResponse;
                    fromAmino(object: _64.QueryClientStatesResponseAmino): _64.QueryClientStatesResponse;
                    toAmino(message: _64.QueryClientStatesResponse): _64.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _64.QueryClientStatesResponseAminoMsg): _64.QueryClientStatesResponse;
                    toAminoMsg(message: _64.QueryClientStatesResponse): _64.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStatesResponseProtoMsg): _64.QueryClientStatesResponse;
                    toProto(message: _64.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStatesResponse): _64.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _64.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_64.QueryConsensusStateRequest>): _64.QueryConsensusStateRequest;
                    fromAmino(object: _64.QueryConsensusStateRequestAmino): _64.QueryConsensusStateRequest;
                    toAmino(message: _64.QueryConsensusStateRequest): _64.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _64.QueryConsensusStateRequestAminoMsg): _64.QueryConsensusStateRequest;
                    toAminoMsg(message: _64.QueryConsensusStateRequest): _64.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryConsensusStateRequestProtoMsg): _64.QueryConsensusStateRequest;
                    toProto(message: _64.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryConsensusStateRequest): _64.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _64.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_64.QueryConsensusStateResponse>): _64.QueryConsensusStateResponse;
                    fromAmino(object: _64.QueryConsensusStateResponseAmino): _64.QueryConsensusStateResponse;
                    toAmino(message: _64.QueryConsensusStateResponse): _64.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _64.QueryConsensusStateResponseAminoMsg): _64.QueryConsensusStateResponse;
                    toAminoMsg(message: _64.QueryConsensusStateResponse): _64.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryConsensusStateResponseProtoMsg): _64.QueryConsensusStateResponse;
                    toProto(message: _64.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryConsensusStateResponse): _64.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _64.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_64.QueryConsensusStatesRequest>): _64.QueryConsensusStatesRequest;
                    fromAmino(object: _64.QueryConsensusStatesRequestAmino): _64.QueryConsensusStatesRequest;
                    toAmino(message: _64.QueryConsensusStatesRequest): _64.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _64.QueryConsensusStatesRequestAminoMsg): _64.QueryConsensusStatesRequest;
                    toAminoMsg(message: _64.QueryConsensusStatesRequest): _64.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryConsensusStatesRequestProtoMsg): _64.QueryConsensusStatesRequest;
                    toProto(message: _64.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryConsensusStatesRequest): _64.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _64.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_64.QueryConsensusStatesResponse>): _64.QueryConsensusStatesResponse;
                    fromAmino(object: _64.QueryConsensusStatesResponseAmino): _64.QueryConsensusStatesResponse;
                    toAmino(message: _64.QueryConsensusStatesResponse): _64.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _64.QueryConsensusStatesResponseAminoMsg): _64.QueryConsensusStatesResponse;
                    toAminoMsg(message: _64.QueryConsensusStatesResponse): _64.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryConsensusStatesResponseProtoMsg): _64.QueryConsensusStatesResponse;
                    toProto(message: _64.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryConsensusStatesResponse): _64.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _64.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStatusRequest;
                    fromPartial(object: Partial<_64.QueryClientStatusRequest>): _64.QueryClientStatusRequest;
                    fromAmino(object: _64.QueryClientStatusRequestAmino): _64.QueryClientStatusRequest;
                    toAmino(message: _64.QueryClientStatusRequest): _64.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _64.QueryClientStatusRequestAminoMsg): _64.QueryClientStatusRequest;
                    toAminoMsg(message: _64.QueryClientStatusRequest): _64.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStatusRequestProtoMsg): _64.QueryClientStatusRequest;
                    toProto(message: _64.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStatusRequest): _64.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _64.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientStatusResponse;
                    fromPartial(object: Partial<_64.QueryClientStatusResponse>): _64.QueryClientStatusResponse;
                    fromAmino(object: _64.QueryClientStatusResponseAmino): _64.QueryClientStatusResponse;
                    toAmino(message: _64.QueryClientStatusResponse): _64.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _64.QueryClientStatusResponseAminoMsg): _64.QueryClientStatusResponse;
                    toAminoMsg(message: _64.QueryClientStatusResponse): _64.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryClientStatusResponseProtoMsg): _64.QueryClientStatusResponse;
                    toProto(message: _64.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryClientStatusResponse): _64.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _64.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientParamsRequest;
                    fromPartial(_: Partial<_64.QueryClientParamsRequest>): _64.QueryClientParamsRequest;
                    fromAmino(_: _64.QueryClientParamsRequestAmino): _64.QueryClientParamsRequest;
                    toAmino(_: _64.QueryClientParamsRequest): _64.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _64.QueryClientParamsRequestAminoMsg): _64.QueryClientParamsRequest;
                    toAminoMsg(message: _64.QueryClientParamsRequest): _64.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryClientParamsRequestProtoMsg): _64.QueryClientParamsRequest;
                    toProto(message: _64.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryClientParamsRequest): _64.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _64.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryClientParamsResponse;
                    fromPartial(object: Partial<_64.QueryClientParamsResponse>): _64.QueryClientParamsResponse;
                    fromAmino(object: _64.QueryClientParamsResponseAmino): _64.QueryClientParamsResponse;
                    toAmino(message: _64.QueryClientParamsResponse): _64.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _64.QueryClientParamsResponseAminoMsg): _64.QueryClientParamsResponse;
                    toAminoMsg(message: _64.QueryClientParamsResponse): _64.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryClientParamsResponseProtoMsg): _64.QueryClientParamsResponse;
                    toProto(message: _64.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryClientParamsResponse): _64.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _64.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_64.QueryUpgradedClientStateRequest>): _64.QueryUpgradedClientStateRequest;
                    fromAmino(_: _64.QueryUpgradedClientStateRequestAmino): _64.QueryUpgradedClientStateRequest;
                    toAmino(_: _64.QueryUpgradedClientStateRequest): _64.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _64.QueryUpgradedClientStateRequestAminoMsg): _64.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _64.QueryUpgradedClientStateRequest): _64.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryUpgradedClientStateRequestProtoMsg): _64.QueryUpgradedClientStateRequest;
                    toProto(message: _64.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryUpgradedClientStateRequest): _64.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _64.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_64.QueryUpgradedClientStateResponse>): _64.QueryUpgradedClientStateResponse;
                    fromAmino(object: _64.QueryUpgradedClientStateResponseAmino): _64.QueryUpgradedClientStateResponse;
                    toAmino(message: _64.QueryUpgradedClientStateResponse): _64.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _64.QueryUpgradedClientStateResponseAminoMsg): _64.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _64.QueryUpgradedClientStateResponse): _64.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryUpgradedClientStateResponseProtoMsg): _64.QueryUpgradedClientStateResponse;
                    toProto(message: _64.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryUpgradedClientStateResponse): _64.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _64.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_64.QueryUpgradedConsensusStateRequest>): _64.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _64.QueryUpgradedConsensusStateRequestAmino): _64.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _64.QueryUpgradedConsensusStateRequest): _64.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _64.QueryUpgradedConsensusStateRequestAminoMsg): _64.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _64.QueryUpgradedConsensusStateRequest): _64.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryUpgradedConsensusStateRequestProtoMsg): _64.QueryUpgradedConsensusStateRequest;
                    toProto(message: _64.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryUpgradedConsensusStateRequest): _64.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _64.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_64.QueryUpgradedConsensusStateResponse>): _64.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _64.QueryUpgradedConsensusStateResponseAmino): _64.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _64.QueryUpgradedConsensusStateResponse): _64.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _64.QueryUpgradedConsensusStateResponseAminoMsg): _64.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _64.QueryUpgradedConsensusStateResponse): _64.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryUpgradedConsensusStateResponseProtoMsg): _64.QueryUpgradedConsensusStateResponse;
                    toProto(message: _64.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryUpgradedConsensusStateResponse): _64.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                    fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                    fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                    toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                    fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                    toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                    fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                    toProto(message: _63.GenesisState): Uint8Array;
                    toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _63.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisMetadata;
                    fromPartial(object: Partial<_63.GenesisMetadata>): _63.GenesisMetadata;
                    fromAmino(object: _63.GenesisMetadataAmino): _63.GenesisMetadata;
                    toAmino(message: _63.GenesisMetadata): _63.GenesisMetadataAmino;
                    fromAminoMsg(object: _63.GenesisMetadataAminoMsg): _63.GenesisMetadata;
                    toAminoMsg(message: _63.GenesisMetadata): _63.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _63.GenesisMetadataProtoMsg): _63.GenesisMetadata;
                    toProto(message: _63.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _63.GenesisMetadata): _63.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _63.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_63.IdentifiedGenesisMetadata>): _63.IdentifiedGenesisMetadata;
                    fromAmino(object: _63.IdentifiedGenesisMetadataAmino): _63.IdentifiedGenesisMetadata;
                    toAmino(message: _63.IdentifiedGenesisMetadata): _63.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _63.IdentifiedGenesisMetadataAminoMsg): _63.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _63.IdentifiedGenesisMetadata): _63.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _63.IdentifiedGenesisMetadataProtoMsg): _63.IdentifiedGenesisMetadata;
                    toProto(message: _63.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _63.IdentifiedGenesisMetadata): _63.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _62.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.IdentifiedClientState;
                    fromPartial(object: Partial<_62.IdentifiedClientState>): _62.IdentifiedClientState;
                    fromAmino(object: _62.IdentifiedClientStateAmino): _62.IdentifiedClientState;
                    toAmino(message: _62.IdentifiedClientState): _62.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _62.IdentifiedClientStateAminoMsg): _62.IdentifiedClientState;
                    toAminoMsg(message: _62.IdentifiedClientState): _62.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _62.IdentifiedClientStateProtoMsg): _62.IdentifiedClientState;
                    toProto(message: _62.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _62.IdentifiedClientState): _62.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _62.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_62.ConsensusStateWithHeight>): _62.ConsensusStateWithHeight;
                    fromAmino(object: _62.ConsensusStateWithHeightAmino): _62.ConsensusStateWithHeight;
                    toAmino(message: _62.ConsensusStateWithHeight): _62.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _62.ConsensusStateWithHeightAminoMsg): _62.ConsensusStateWithHeight;
                    toAminoMsg(message: _62.ConsensusStateWithHeight): _62.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _62.ConsensusStateWithHeightProtoMsg): _62.ConsensusStateWithHeight;
                    toProto(message: _62.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _62.ConsensusStateWithHeight): _62.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _62.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ClientConsensusStates;
                    fromPartial(object: Partial<_62.ClientConsensusStates>): _62.ClientConsensusStates;
                    fromAmino(object: _62.ClientConsensusStatesAmino): _62.ClientConsensusStates;
                    toAmino(message: _62.ClientConsensusStates): _62.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _62.ClientConsensusStatesAminoMsg): _62.ClientConsensusStates;
                    toAminoMsg(message: _62.ClientConsensusStates): _62.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _62.ClientConsensusStatesProtoMsg): _62.ClientConsensusStates;
                    toProto(message: _62.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _62.ClientConsensusStates): _62.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _62.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ClientUpdateProposal;
                    fromPartial(object: Partial<_62.ClientUpdateProposal>): _62.ClientUpdateProposal;
                    fromAmino(object: _62.ClientUpdateProposalAmino): _62.ClientUpdateProposal;
                    toAmino(message: _62.ClientUpdateProposal): _62.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _62.ClientUpdateProposalAminoMsg): _62.ClientUpdateProposal;
                    toAminoMsg(message: _62.ClientUpdateProposal): _62.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _62.ClientUpdateProposalProtoMsg): _62.ClientUpdateProposal;
                    toProto(message: _62.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _62.ClientUpdateProposal): _62.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _62.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UpgradeProposal;
                    fromPartial(object: Partial<_62.UpgradeProposal>): _62.UpgradeProposal;
                    fromAmino(object: _62.UpgradeProposalAmino): _62.UpgradeProposal;
                    toAmino(message: _62.UpgradeProposal): _62.UpgradeProposalAmino;
                    fromAminoMsg(object: _62.UpgradeProposalAminoMsg): _62.UpgradeProposal;
                    toAminoMsg(message: _62.UpgradeProposal): _62.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _62.UpgradeProposalProtoMsg): _62.UpgradeProposal;
                    toProto(message: _62.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _62.UpgradeProposal): _62.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _62.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Height;
                    fromPartial(object: Partial<_62.Height>): _62.Height;
                    fromAmino(object: _62.HeightAmino): _62.Height;
                    toAmino(message: _62.Height): _62.HeightAmino;
                    fromAminoMsg(object: _62.HeightAminoMsg): _62.Height;
                    toAminoMsg(message: _62.Height): _62.HeightAminoMsg;
                    fromProtoMsg(message: _62.HeightProtoMsg): _62.Height;
                    toProto(message: _62.Height): Uint8Array;
                    toProtoMsg(message: _62.Height): _62.HeightProtoMsg;
                };
                Params: {
                    encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                    fromPartial(object: Partial<_62.Params>): _62.Params;
                    fromAmino(object: _62.ParamsAmino): _62.Params;
                    toAmino(message: _62.Params): _62.ParamsAmino;
                    fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                    toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                    fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                    toProto(message: _62.Params): Uint8Array;
                    toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _66.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MerkleRoot;
                    fromPartial(object: Partial<_66.MerkleRoot>): _66.MerkleRoot;
                    fromAmino(object: _66.MerkleRootAmino): _66.MerkleRoot;
                    toAmino(message: _66.MerkleRoot): _66.MerkleRootAmino;
                    fromAminoMsg(object: _66.MerkleRootAminoMsg): _66.MerkleRoot;
                    toAminoMsg(message: _66.MerkleRoot): _66.MerkleRootAminoMsg;
                    fromProtoMsg(message: _66.MerkleRootProtoMsg): _66.MerkleRoot;
                    toProto(message: _66.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _66.MerkleRoot): _66.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    encode(message: _66.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MerklePrefix;
                    fromPartial(object: Partial<_66.MerklePrefix>): _66.MerklePrefix;
                    fromAmino(object: _66.MerklePrefixAmino): _66.MerklePrefix;
                    toAmino(message: _66.MerklePrefix): _66.MerklePrefixAmino;
                    fromAminoMsg(object: _66.MerklePrefixAminoMsg): _66.MerklePrefix;
                    toAminoMsg(message: _66.MerklePrefix): _66.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _66.MerklePrefixProtoMsg): _66.MerklePrefix;
                    toProto(message: _66.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _66.MerklePrefix): _66.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    encode(message: _66.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MerklePath;
                    fromPartial(object: Partial<_66.MerklePath>): _66.MerklePath;
                    fromAmino(object: _66.MerklePathAmino): _66.MerklePath;
                    toAmino(message: _66.MerklePath): _66.MerklePathAmino;
                    fromAminoMsg(object: _66.MerklePathAminoMsg): _66.MerklePath;
                    toAminoMsg(message: _66.MerklePath): _66.MerklePathAminoMsg;
                    fromProtoMsg(message: _66.MerklePathProtoMsg): _66.MerklePath;
                    toProto(message: _66.MerklePath): Uint8Array;
                    toProtoMsg(message: _66.MerklePath): _66.MerklePathProtoMsg;
                };
                MerkleProof: {
                    encode(message: _66.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MerkleProof;
                    fromPartial(object: Partial<_66.MerkleProof>): _66.MerkleProof;
                    fromAmino(object: _66.MerkleProofAmino): _66.MerkleProof;
                    toAmino(message: _66.MerkleProof): _66.MerkleProofAmino;
                    fromAminoMsg(object: _66.MerkleProofAminoMsg): _66.MerkleProof;
                    toAminoMsg(message: _66.MerkleProof): _66.MerkleProofAminoMsg;
                    fromProtoMsg(message: _66.MerkleProofProtoMsg): _66.MerkleProof;
                    toProto(message: _66.MerkleProof): Uint8Array;
                    toProtoMsg(message: _66.MerkleProof): _66.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _224.MsgClientImpl;
                QueryClientImpl: typeof _220.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _69.QueryConnectionRequest): Promise<_69.QueryConnectionResponse>;
                    connections(request?: _69.QueryConnectionsRequest): Promise<_69.QueryConnectionsResponse>;
                    clientConnections(request: _69.QueryClientConnectionsRequest): Promise<_69.QueryClientConnectionsResponse>;
                    connectionClientState(request: _69.QueryConnectionClientStateRequest): Promise<_69.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _69.QueryConnectionConsensusStateRequest): Promise<_69.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _216.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _70.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _70.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _70.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _70.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _70.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _70.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _70.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _70.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _70.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _70.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _70.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _70.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _70.MsgConnectionOpenInit) => _70.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _70.MsgConnectionOpenInitAmino) => _70.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _70.MsgConnectionOpenTry) => _70.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _70.MsgConnectionOpenTryAmino) => _70.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _70.MsgConnectionOpenAck) => _70.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _70.MsgConnectionOpenAckAmino) => _70.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _70.MsgConnectionOpenConfirm) => _70.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _70.MsgConnectionOpenConfirmAmino) => _70.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _70.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_70.MsgConnectionOpenInit>): _70.MsgConnectionOpenInit;
                    fromAmino(object: _70.MsgConnectionOpenInitAmino): _70.MsgConnectionOpenInit;
                    toAmino(message: _70.MsgConnectionOpenInit): _70.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenInitAminoMsg): _70.MsgConnectionOpenInit;
                    toAminoMsg(message: _70.MsgConnectionOpenInit): _70.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenInitProtoMsg): _70.MsgConnectionOpenInit;
                    toProto(message: _70.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenInit): _70.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _70.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_70.MsgConnectionOpenInitResponse>): _70.MsgConnectionOpenInitResponse;
                    fromAmino(_: _70.MsgConnectionOpenInitResponseAmino): _70.MsgConnectionOpenInitResponse;
                    toAmino(_: _70.MsgConnectionOpenInitResponse): _70.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenInitResponseAminoMsg): _70.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _70.MsgConnectionOpenInitResponse): _70.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenInitResponseProtoMsg): _70.MsgConnectionOpenInitResponse;
                    toProto(message: _70.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenInitResponse): _70.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    encode(message: _70.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_70.MsgConnectionOpenTry>): _70.MsgConnectionOpenTry;
                    fromAmino(object: _70.MsgConnectionOpenTryAmino): _70.MsgConnectionOpenTry;
                    toAmino(message: _70.MsgConnectionOpenTry): _70.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenTryAminoMsg): _70.MsgConnectionOpenTry;
                    toAminoMsg(message: _70.MsgConnectionOpenTry): _70.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenTryProtoMsg): _70.MsgConnectionOpenTry;
                    toProto(message: _70.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenTry): _70.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _70.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_70.MsgConnectionOpenTryResponse>): _70.MsgConnectionOpenTryResponse;
                    fromAmino(_: _70.MsgConnectionOpenTryResponseAmino): _70.MsgConnectionOpenTryResponse;
                    toAmino(_: _70.MsgConnectionOpenTryResponse): _70.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenTryResponseAminoMsg): _70.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _70.MsgConnectionOpenTryResponse): _70.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenTryResponseProtoMsg): _70.MsgConnectionOpenTryResponse;
                    toProto(message: _70.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenTryResponse): _70.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    encode(message: _70.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_70.MsgConnectionOpenAck>): _70.MsgConnectionOpenAck;
                    fromAmino(object: _70.MsgConnectionOpenAckAmino): _70.MsgConnectionOpenAck;
                    toAmino(message: _70.MsgConnectionOpenAck): _70.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenAckAminoMsg): _70.MsgConnectionOpenAck;
                    toAminoMsg(message: _70.MsgConnectionOpenAck): _70.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenAckProtoMsg): _70.MsgConnectionOpenAck;
                    toProto(message: _70.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenAck): _70.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _70.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_70.MsgConnectionOpenAckResponse>): _70.MsgConnectionOpenAckResponse;
                    fromAmino(_: _70.MsgConnectionOpenAckResponseAmino): _70.MsgConnectionOpenAckResponse;
                    toAmino(_: _70.MsgConnectionOpenAckResponse): _70.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenAckResponseAminoMsg): _70.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _70.MsgConnectionOpenAckResponse): _70.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenAckResponseProtoMsg): _70.MsgConnectionOpenAckResponse;
                    toProto(message: _70.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenAckResponse): _70.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _70.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_70.MsgConnectionOpenConfirm>): _70.MsgConnectionOpenConfirm;
                    fromAmino(object: _70.MsgConnectionOpenConfirmAmino): _70.MsgConnectionOpenConfirm;
                    toAmino(message: _70.MsgConnectionOpenConfirm): _70.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenConfirmAminoMsg): _70.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _70.MsgConnectionOpenConfirm): _70.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenConfirmProtoMsg): _70.MsgConnectionOpenConfirm;
                    toProto(message: _70.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenConfirm): _70.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _70.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_70.MsgConnectionOpenConfirmResponse>): _70.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _70.MsgConnectionOpenConfirmResponseAmino): _70.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _70.MsgConnectionOpenConfirmResponse): _70.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _70.MsgConnectionOpenConfirmResponseAminoMsg): _70.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _70.MsgConnectionOpenConfirmResponse): _70.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgConnectionOpenConfirmResponseProtoMsg): _70.MsgConnectionOpenConfirmResponse;
                    toProto(message: _70.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgConnectionOpenConfirmResponse): _70.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    encode(message: _69.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionRequest;
                    fromPartial(object: Partial<_69.QueryConnectionRequest>): _69.QueryConnectionRequest;
                    fromAmino(object: _69.QueryConnectionRequestAmino): _69.QueryConnectionRequest;
                    toAmino(message: _69.QueryConnectionRequest): _69.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _69.QueryConnectionRequestAminoMsg): _69.QueryConnectionRequest;
                    toAminoMsg(message: _69.QueryConnectionRequest): _69.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionRequestProtoMsg): _69.QueryConnectionRequest;
                    toProto(message: _69.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionRequest): _69.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    encode(message: _69.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionResponse;
                    fromPartial(object: Partial<_69.QueryConnectionResponse>): _69.QueryConnectionResponse;
                    fromAmino(object: _69.QueryConnectionResponseAmino): _69.QueryConnectionResponse;
                    toAmino(message: _69.QueryConnectionResponse): _69.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _69.QueryConnectionResponseAminoMsg): _69.QueryConnectionResponse;
                    toAminoMsg(message: _69.QueryConnectionResponse): _69.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionResponseProtoMsg): _69.QueryConnectionResponse;
                    toProto(message: _69.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionResponse): _69.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    encode(message: _69.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionsRequest;
                    fromPartial(object: Partial<_69.QueryConnectionsRequest>): _69.QueryConnectionsRequest;
                    fromAmino(object: _69.QueryConnectionsRequestAmino): _69.QueryConnectionsRequest;
                    toAmino(message: _69.QueryConnectionsRequest): _69.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _69.QueryConnectionsRequestAminoMsg): _69.QueryConnectionsRequest;
                    toAminoMsg(message: _69.QueryConnectionsRequest): _69.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionsRequestProtoMsg): _69.QueryConnectionsRequest;
                    toProto(message: _69.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionsRequest): _69.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    encode(message: _69.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionsResponse;
                    fromPartial(object: Partial<_69.QueryConnectionsResponse>): _69.QueryConnectionsResponse;
                    fromAmino(object: _69.QueryConnectionsResponseAmino): _69.QueryConnectionsResponse;
                    toAmino(message: _69.QueryConnectionsResponse): _69.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _69.QueryConnectionsResponseAminoMsg): _69.QueryConnectionsResponse;
                    toAminoMsg(message: _69.QueryConnectionsResponse): _69.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionsResponseProtoMsg): _69.QueryConnectionsResponse;
                    toProto(message: _69.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionsResponse): _69.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _69.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_69.QueryClientConnectionsRequest>): _69.QueryClientConnectionsRequest;
                    fromAmino(object: _69.QueryClientConnectionsRequestAmino): _69.QueryClientConnectionsRequest;
                    toAmino(message: _69.QueryClientConnectionsRequest): _69.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _69.QueryClientConnectionsRequestAminoMsg): _69.QueryClientConnectionsRequest;
                    toAminoMsg(message: _69.QueryClientConnectionsRequest): _69.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryClientConnectionsRequestProtoMsg): _69.QueryClientConnectionsRequest;
                    toProto(message: _69.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryClientConnectionsRequest): _69.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _69.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_69.QueryClientConnectionsResponse>): _69.QueryClientConnectionsResponse;
                    fromAmino(object: _69.QueryClientConnectionsResponseAmino): _69.QueryClientConnectionsResponse;
                    toAmino(message: _69.QueryClientConnectionsResponse): _69.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _69.QueryClientConnectionsResponseAminoMsg): _69.QueryClientConnectionsResponse;
                    toAminoMsg(message: _69.QueryClientConnectionsResponse): _69.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryClientConnectionsResponseProtoMsg): _69.QueryClientConnectionsResponse;
                    toProto(message: _69.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryClientConnectionsResponse): _69.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _69.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_69.QueryConnectionClientStateRequest>): _69.QueryConnectionClientStateRequest;
                    fromAmino(object: _69.QueryConnectionClientStateRequestAmino): _69.QueryConnectionClientStateRequest;
                    toAmino(message: _69.QueryConnectionClientStateRequest): _69.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _69.QueryConnectionClientStateRequestAminoMsg): _69.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _69.QueryConnectionClientStateRequest): _69.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionClientStateRequestProtoMsg): _69.QueryConnectionClientStateRequest;
                    toProto(message: _69.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionClientStateRequest): _69.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _69.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_69.QueryConnectionClientStateResponse>): _69.QueryConnectionClientStateResponse;
                    fromAmino(object: _69.QueryConnectionClientStateResponseAmino): _69.QueryConnectionClientStateResponse;
                    toAmino(message: _69.QueryConnectionClientStateResponse): _69.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _69.QueryConnectionClientStateResponseAminoMsg): _69.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _69.QueryConnectionClientStateResponse): _69.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionClientStateResponseProtoMsg): _69.QueryConnectionClientStateResponse;
                    toProto(message: _69.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionClientStateResponse): _69.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _69.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_69.QueryConnectionConsensusStateRequest>): _69.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _69.QueryConnectionConsensusStateRequestAmino): _69.QueryConnectionConsensusStateRequest;
                    toAmino(message: _69.QueryConnectionConsensusStateRequest): _69.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _69.QueryConnectionConsensusStateRequestAminoMsg): _69.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _69.QueryConnectionConsensusStateRequest): _69.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionConsensusStateRequestProtoMsg): _69.QueryConnectionConsensusStateRequest;
                    toProto(message: _69.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionConsensusStateRequest): _69.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _69.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_69.QueryConnectionConsensusStateResponse>): _69.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _69.QueryConnectionConsensusStateResponseAmino): _69.QueryConnectionConsensusStateResponse;
                    toAmino(message: _69.QueryConnectionConsensusStateResponse): _69.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _69.QueryConnectionConsensusStateResponseAminoMsg): _69.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _69.QueryConnectionConsensusStateResponse): _69.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionConsensusStateResponseProtoMsg): _69.QueryConnectionConsensusStateResponse;
                    toProto(message: _69.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionConsensusStateResponse): _69.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                    fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                    fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                    toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                    fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                    toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                    fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                    toProto(message: _68.GenesisState): Uint8Array;
                    toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _67.State;
                stateToJSON(object: _67.State): string;
                State: typeof _67.State;
                StateSDKType: typeof _67.State;
                StateAmino: typeof _67.State;
                ConnectionEnd: {
                    encode(message: _67.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ConnectionEnd;
                    fromPartial(object: Partial<_67.ConnectionEnd>): _67.ConnectionEnd;
                    fromAmino(object: _67.ConnectionEndAmino): _67.ConnectionEnd;
                    toAmino(message: _67.ConnectionEnd): _67.ConnectionEndAmino;
                    fromAminoMsg(object: _67.ConnectionEndAminoMsg): _67.ConnectionEnd;
                    toAminoMsg(message: _67.ConnectionEnd): _67.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _67.ConnectionEndProtoMsg): _67.ConnectionEnd;
                    toProto(message: _67.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _67.ConnectionEnd): _67.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    encode(message: _67.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.IdentifiedConnection;
                    fromPartial(object: Partial<_67.IdentifiedConnection>): _67.IdentifiedConnection;
                    fromAmino(object: _67.IdentifiedConnectionAmino): _67.IdentifiedConnection;
                    toAmino(message: _67.IdentifiedConnection): _67.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _67.IdentifiedConnectionAminoMsg): _67.IdentifiedConnection;
                    toAminoMsg(message: _67.IdentifiedConnection): _67.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _67.IdentifiedConnectionProtoMsg): _67.IdentifiedConnection;
                    toProto(message: _67.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _67.IdentifiedConnection): _67.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    encode(message: _67.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Counterparty;
                    fromPartial(object: Partial<_67.Counterparty>): _67.Counterparty;
                    fromAmino(object: _67.CounterpartyAmino): _67.Counterparty;
                    toAmino(message: _67.Counterparty): _67.CounterpartyAmino;
                    fromAminoMsg(object: _67.CounterpartyAminoMsg): _67.Counterparty;
                    toAminoMsg(message: _67.Counterparty): _67.CounterpartyAminoMsg;
                    fromProtoMsg(message: _67.CounterpartyProtoMsg): _67.Counterparty;
                    toProto(message: _67.Counterparty): Uint8Array;
                    toProtoMsg(message: _67.Counterparty): _67.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    encode(message: _67.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ClientPaths;
                    fromPartial(object: Partial<_67.ClientPaths>): _67.ClientPaths;
                    fromAmino(object: _67.ClientPathsAmino): _67.ClientPaths;
                    toAmino(message: _67.ClientPaths): _67.ClientPathsAmino;
                    fromAminoMsg(object: _67.ClientPathsAminoMsg): _67.ClientPaths;
                    toAminoMsg(message: _67.ClientPaths): _67.ClientPathsAminoMsg;
                    fromProtoMsg(message: _67.ClientPathsProtoMsg): _67.ClientPaths;
                    toProto(message: _67.ClientPaths): Uint8Array;
                    toProtoMsg(message: _67.ClientPaths): _67.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    encode(message: _67.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ConnectionPaths;
                    fromPartial(object: Partial<_67.ConnectionPaths>): _67.ConnectionPaths;
                    fromAmino(object: _67.ConnectionPathsAmino): _67.ConnectionPaths;
                    toAmino(message: _67.ConnectionPaths): _67.ConnectionPathsAmino;
                    fromAminoMsg(object: _67.ConnectionPathsAminoMsg): _67.ConnectionPaths;
                    toAminoMsg(message: _67.ConnectionPaths): _67.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _67.ConnectionPathsProtoMsg): _67.ConnectionPaths;
                    toProto(message: _67.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _67.ConnectionPaths): _67.ConnectionPathsProtoMsg;
                };
                Version: {
                    encode(message: _67.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Version;
                    fromPartial(object: Partial<_67.Version>): _67.Version;
                    fromAmino(object: _67.VersionAmino): _67.Version;
                    toAmino(message: _67.Version): _67.VersionAmino;
                    fromAminoMsg(object: _67.VersionAminoMsg): _67.Version;
                    toAminoMsg(message: _67.Version): _67.VersionAminoMsg;
                    fromProtoMsg(message: _67.VersionProtoMsg): _67.Version;
                    toProto(message: _67.Version): Uint8Array;
                    toProtoMsg(message: _67.Version): _67.VersionProtoMsg;
                };
                Params: {
                    encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Params;
                    fromPartial(object: Partial<_67.Params>): _67.Params;
                    fromAmino(object: _67.ParamsAmino): _67.Params;
                    toAmino(message: _67.Params): _67.ParamsAmino;
                    fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                    toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                    fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                    toProto(message: _67.Params): Uint8Array;
                    toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _71.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientState;
                    fromPartial(object: Partial<_71.ClientState>): _71.ClientState;
                    fromAmino(object: _71.ClientStateAmino): _71.ClientState;
                    toAmino(message: _71.ClientState): _71.ClientStateAmino;
                    fromAminoMsg(object: _71.ClientStateAminoMsg): _71.ClientState;
                    toAminoMsg(message: _71.ClientState): _71.ClientStateAminoMsg;
                    fromProtoMsg(message: _71.ClientStateProtoMsg): _71.ClientState;
                    toProto(message: _71.ClientState): Uint8Array;
                    toProtoMsg(message: _71.ClientState): _71.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _72.DataType;
                dataTypeToJSON(object: _72.DataType): string;
                DataType: typeof _72.DataType;
                DataTypeSDKType: typeof _72.DataType;
                DataTypeAmino: typeof _72.DataType;
                ClientState: {
                    encode(message: _72.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientState;
                    fromPartial(object: Partial<_72.ClientState>): _72.ClientState;
                    fromAmino(object: _72.ClientStateAmino): _72.ClientState;
                    toAmino(message: _72.ClientState): _72.ClientStateAmino;
                    fromAminoMsg(object: _72.ClientStateAminoMsg): _72.ClientState;
                    toAminoMsg(message: _72.ClientState): _72.ClientStateAminoMsg;
                    fromProtoMsg(message: _72.ClientStateProtoMsg): _72.ClientState;
                    toProto(message: _72.ClientState): Uint8Array;
                    toProtoMsg(message: _72.ClientState): _72.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _72.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConsensusState;
                    fromPartial(object: Partial<_72.ConsensusState>): _72.ConsensusState;
                    fromAmino(object: _72.ConsensusStateAmino): _72.ConsensusState;
                    toAmino(message: _72.ConsensusState): _72.ConsensusStateAmino;
                    fromAminoMsg(object: _72.ConsensusStateAminoMsg): _72.ConsensusState;
                    toAminoMsg(message: _72.ConsensusState): _72.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _72.ConsensusStateProtoMsg): _72.ConsensusState;
                    toProto(message: _72.ConsensusState): Uint8Array;
                    toProtoMsg(message: _72.ConsensusState): _72.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _72.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Header;
                    fromPartial(object: Partial<_72.Header>): _72.Header;
                    fromAmino(object: _72.HeaderAmino): _72.Header;
                    toAmino(message: _72.Header): _72.HeaderAmino;
                    fromAminoMsg(object: _72.HeaderAminoMsg): _72.Header;
                    toAminoMsg(message: _72.Header): _72.HeaderAminoMsg;
                    fromProtoMsg(message: _72.HeaderProtoMsg): _72.Header;
                    toProto(message: _72.Header): Uint8Array;
                    toProtoMsg(message: _72.Header): _72.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _72.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Misbehaviour;
                    fromPartial(object: Partial<_72.Misbehaviour>): _72.Misbehaviour;
                    fromAmino(object: _72.MisbehaviourAmino): _72.Misbehaviour;
                    toAmino(message: _72.Misbehaviour): _72.MisbehaviourAmino;
                    fromAminoMsg(object: _72.MisbehaviourAminoMsg): _72.Misbehaviour;
                    toAminoMsg(message: _72.Misbehaviour): _72.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _72.MisbehaviourProtoMsg): _72.Misbehaviour;
                    toProto(message: _72.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _72.Misbehaviour): _72.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _72.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SignatureAndData;
                    fromPartial(object: Partial<_72.SignatureAndData>): _72.SignatureAndData;
                    fromAmino(object: _72.SignatureAndDataAmino): _72.SignatureAndData;
                    toAmino(message: _72.SignatureAndData): _72.SignatureAndDataAmino;
                    fromAminoMsg(object: _72.SignatureAndDataAminoMsg): _72.SignatureAndData;
                    toAminoMsg(message: _72.SignatureAndData): _72.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _72.SignatureAndDataProtoMsg): _72.SignatureAndData;
                    toProto(message: _72.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _72.SignatureAndData): _72.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _72.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TimestampedSignatureData;
                    fromPartial(object: Partial<_72.TimestampedSignatureData>): _72.TimestampedSignatureData;
                    fromAmino(object: _72.TimestampedSignatureDataAmino): _72.TimestampedSignatureData;
                    toAmino(message: _72.TimestampedSignatureData): _72.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _72.TimestampedSignatureDataAminoMsg): _72.TimestampedSignatureData;
                    toAminoMsg(message: _72.TimestampedSignatureData): _72.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _72.TimestampedSignatureDataProtoMsg): _72.TimestampedSignatureData;
                    toProto(message: _72.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _72.TimestampedSignatureData): _72.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _72.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SignBytes;
                    fromPartial(object: Partial<_72.SignBytes>): _72.SignBytes;
                    fromAmino(object: _72.SignBytesAmino): _72.SignBytes;
                    toAmino(message: _72.SignBytes): _72.SignBytesAmino;
                    fromAminoMsg(object: _72.SignBytesAminoMsg): _72.SignBytes;
                    toAminoMsg(message: _72.SignBytes): _72.SignBytesAminoMsg;
                    fromProtoMsg(message: _72.SignBytesProtoMsg): _72.SignBytes;
                    toProto(message: _72.SignBytes): Uint8Array;
                    toProtoMsg(message: _72.SignBytes): _72.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _72.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.HeaderData;
                    fromPartial(object: Partial<_72.HeaderData>): _72.HeaderData;
                    fromAmino(object: _72.HeaderDataAmino): _72.HeaderData;
                    toAmino(message: _72.HeaderData): _72.HeaderDataAmino;
                    fromAminoMsg(object: _72.HeaderDataAminoMsg): _72.HeaderData;
                    toAminoMsg(message: _72.HeaderData): _72.HeaderDataAminoMsg;
                    fromProtoMsg(message: _72.HeaderDataProtoMsg): _72.HeaderData;
                    toProto(message: _72.HeaderData): Uint8Array;
                    toProtoMsg(message: _72.HeaderData): _72.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _72.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientStateData;
                    fromPartial(object: Partial<_72.ClientStateData>): _72.ClientStateData;
                    fromAmino(object: _72.ClientStateDataAmino): _72.ClientStateData;
                    toAmino(message: _72.ClientStateData): _72.ClientStateDataAmino;
                    fromAminoMsg(object: _72.ClientStateDataAminoMsg): _72.ClientStateData;
                    toAminoMsg(message: _72.ClientStateData): _72.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _72.ClientStateDataProtoMsg): _72.ClientStateData;
                    toProto(message: _72.ClientStateData): Uint8Array;
                    toProtoMsg(message: _72.ClientStateData): _72.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _72.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConsensusStateData;
                    fromPartial(object: Partial<_72.ConsensusStateData>): _72.ConsensusStateData;
                    fromAmino(object: _72.ConsensusStateDataAmino): _72.ConsensusStateData;
                    toAmino(message: _72.ConsensusStateData): _72.ConsensusStateDataAmino;
                    fromAminoMsg(object: _72.ConsensusStateDataAminoMsg): _72.ConsensusStateData;
                    toAminoMsg(message: _72.ConsensusStateData): _72.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _72.ConsensusStateDataProtoMsg): _72.ConsensusStateData;
                    toProto(message: _72.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _72.ConsensusStateData): _72.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _72.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConnectionStateData;
                    fromPartial(object: Partial<_72.ConnectionStateData>): _72.ConnectionStateData;
                    fromAmino(object: _72.ConnectionStateDataAmino): _72.ConnectionStateData;
                    toAmino(message: _72.ConnectionStateData): _72.ConnectionStateDataAmino;
                    fromAminoMsg(object: _72.ConnectionStateDataAminoMsg): _72.ConnectionStateData;
                    toAminoMsg(message: _72.ConnectionStateData): _72.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _72.ConnectionStateDataProtoMsg): _72.ConnectionStateData;
                    toProto(message: _72.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _72.ConnectionStateData): _72.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _72.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ChannelStateData;
                    fromPartial(object: Partial<_72.ChannelStateData>): _72.ChannelStateData;
                    fromAmino(object: _72.ChannelStateDataAmino): _72.ChannelStateData;
                    toAmino(message: _72.ChannelStateData): _72.ChannelStateDataAmino;
                    fromAminoMsg(object: _72.ChannelStateDataAminoMsg): _72.ChannelStateData;
                    toAminoMsg(message: _72.ChannelStateData): _72.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _72.ChannelStateDataProtoMsg): _72.ChannelStateData;
                    toProto(message: _72.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _72.ChannelStateData): _72.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _72.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PacketCommitmentData;
                    fromPartial(object: Partial<_72.PacketCommitmentData>): _72.PacketCommitmentData;
                    fromAmino(object: _72.PacketCommitmentDataAmino): _72.PacketCommitmentData;
                    toAmino(message: _72.PacketCommitmentData): _72.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _72.PacketCommitmentDataAminoMsg): _72.PacketCommitmentData;
                    toAminoMsg(message: _72.PacketCommitmentData): _72.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _72.PacketCommitmentDataProtoMsg): _72.PacketCommitmentData;
                    toProto(message: _72.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _72.PacketCommitmentData): _72.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _72.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PacketAcknowledgementData;
                    fromPartial(object: Partial<_72.PacketAcknowledgementData>): _72.PacketAcknowledgementData;
                    fromAmino(object: _72.PacketAcknowledgementDataAmino): _72.PacketAcknowledgementData;
                    toAmino(message: _72.PacketAcknowledgementData): _72.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _72.PacketAcknowledgementDataAminoMsg): _72.PacketAcknowledgementData;
                    toAminoMsg(message: _72.PacketAcknowledgementData): _72.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _72.PacketAcknowledgementDataProtoMsg): _72.PacketAcknowledgementData;
                    toProto(message: _72.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _72.PacketAcknowledgementData): _72.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _72.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_72.PacketReceiptAbsenceData>): _72.PacketReceiptAbsenceData;
                    fromAmino(object: _72.PacketReceiptAbsenceDataAmino): _72.PacketReceiptAbsenceData;
                    toAmino(message: _72.PacketReceiptAbsenceData): _72.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _72.PacketReceiptAbsenceDataAminoMsg): _72.PacketReceiptAbsenceData;
                    toAminoMsg(message: _72.PacketReceiptAbsenceData): _72.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _72.PacketReceiptAbsenceDataProtoMsg): _72.PacketReceiptAbsenceData;
                    toProto(message: _72.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _72.PacketReceiptAbsenceData): _72.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _72.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.NextSequenceRecvData;
                    fromPartial(object: Partial<_72.NextSequenceRecvData>): _72.NextSequenceRecvData;
                    fromAmino(object: _72.NextSequenceRecvDataAmino): _72.NextSequenceRecvData;
                    toAmino(message: _72.NextSequenceRecvData): _72.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _72.NextSequenceRecvDataAminoMsg): _72.NextSequenceRecvData;
                    toAminoMsg(message: _72.NextSequenceRecvData): _72.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _72.NextSequenceRecvDataProtoMsg): _72.NextSequenceRecvData;
                    toProto(message: _72.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _72.NextSequenceRecvData): _72.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _73.DataType;
                dataTypeToJSON(object: _73.DataType): string;
                DataType: typeof _73.DataType;
                DataTypeSDKType: typeof _73.DataType;
                DataTypeAmino: typeof _73.DataType;
                ClientState: {
                    encode(message: _73.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ClientState;
                    fromPartial(object: Partial<_73.ClientState>): _73.ClientState;
                    fromAmino(object: _73.ClientStateAmino): _73.ClientState;
                    toAmino(message: _73.ClientState): _73.ClientStateAmino;
                    fromAminoMsg(object: _73.ClientStateAminoMsg): _73.ClientState;
                    toAminoMsg(message: _73.ClientState): _73.ClientStateAminoMsg;
                    fromProtoMsg(message: _73.ClientStateProtoMsg): _73.ClientState;
                    toProto(message: _73.ClientState): Uint8Array;
                    toProtoMsg(message: _73.ClientState): _73.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _73.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ConsensusState;
                    fromPartial(object: Partial<_73.ConsensusState>): _73.ConsensusState;
                    fromAmino(object: _73.ConsensusStateAmino): _73.ConsensusState;
                    toAmino(message: _73.ConsensusState): _73.ConsensusStateAmino;
                    fromAminoMsg(object: _73.ConsensusStateAminoMsg): _73.ConsensusState;
                    toAminoMsg(message: _73.ConsensusState): _73.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _73.ConsensusStateProtoMsg): _73.ConsensusState;
                    toProto(message: _73.ConsensusState): Uint8Array;
                    toProtoMsg(message: _73.ConsensusState): _73.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _73.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Header;
                    fromPartial(object: Partial<_73.Header>): _73.Header;
                    fromAmino(object: _73.HeaderAmino): _73.Header;
                    toAmino(message: _73.Header): _73.HeaderAmino;
                    fromAminoMsg(object: _73.HeaderAminoMsg): _73.Header;
                    toAminoMsg(message: _73.Header): _73.HeaderAminoMsg;
                    fromProtoMsg(message: _73.HeaderProtoMsg): _73.Header;
                    toProto(message: _73.Header): Uint8Array;
                    toProtoMsg(message: _73.Header): _73.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _73.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Misbehaviour;
                    fromPartial(object: Partial<_73.Misbehaviour>): _73.Misbehaviour;
                    fromAmino(object: _73.MisbehaviourAmino): _73.Misbehaviour;
                    toAmino(message: _73.Misbehaviour): _73.MisbehaviourAmino;
                    fromAminoMsg(object: _73.MisbehaviourAminoMsg): _73.Misbehaviour;
                    toAminoMsg(message: _73.Misbehaviour): _73.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _73.MisbehaviourProtoMsg): _73.Misbehaviour;
                    toProto(message: _73.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _73.Misbehaviour): _73.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _73.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignatureAndData;
                    fromPartial(object: Partial<_73.SignatureAndData>): _73.SignatureAndData;
                    fromAmino(object: _73.SignatureAndDataAmino): _73.SignatureAndData;
                    toAmino(message: _73.SignatureAndData): _73.SignatureAndDataAmino;
                    fromAminoMsg(object: _73.SignatureAndDataAminoMsg): _73.SignatureAndData;
                    toAminoMsg(message: _73.SignatureAndData): _73.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _73.SignatureAndDataProtoMsg): _73.SignatureAndData;
                    toProto(message: _73.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _73.SignatureAndData): _73.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _73.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TimestampedSignatureData;
                    fromPartial(object: Partial<_73.TimestampedSignatureData>): _73.TimestampedSignatureData;
                    fromAmino(object: _73.TimestampedSignatureDataAmino): _73.TimestampedSignatureData;
                    toAmino(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _73.TimestampedSignatureDataAminoMsg): _73.TimestampedSignatureData;
                    toAminoMsg(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _73.TimestampedSignatureDataProtoMsg): _73.TimestampedSignatureData;
                    toProto(message: _73.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _73.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SignBytes;
                    fromPartial(object: Partial<_73.SignBytes>): _73.SignBytes;
                    fromAmino(object: _73.SignBytesAmino): _73.SignBytes;
                    toAmino(message: _73.SignBytes): _73.SignBytesAmino;
                    fromAminoMsg(object: _73.SignBytesAminoMsg): _73.SignBytes;
                    toAminoMsg(message: _73.SignBytes): _73.SignBytesAminoMsg;
                    fromProtoMsg(message: _73.SignBytesProtoMsg): _73.SignBytes;
                    toProto(message: _73.SignBytes): Uint8Array;
                    toProtoMsg(message: _73.SignBytes): _73.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _73.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.HeaderData;
                    fromPartial(object: Partial<_73.HeaderData>): _73.HeaderData;
                    fromAmino(object: _73.HeaderDataAmino): _73.HeaderData;
                    toAmino(message: _73.HeaderData): _73.HeaderDataAmino;
                    fromAminoMsg(object: _73.HeaderDataAminoMsg): _73.HeaderData;
                    toAminoMsg(message: _73.HeaderData): _73.HeaderDataAminoMsg;
                    fromProtoMsg(message: _73.HeaderDataProtoMsg): _73.HeaderData;
                    toProto(message: _73.HeaderData): Uint8Array;
                    toProtoMsg(message: _73.HeaderData): _73.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _73.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ClientStateData;
                    fromPartial(object: Partial<_73.ClientStateData>): _73.ClientStateData;
                    fromAmino(object: _73.ClientStateDataAmino): _73.ClientStateData;
                    toAmino(message: _73.ClientStateData): _73.ClientStateDataAmino;
                    fromAminoMsg(object: _73.ClientStateDataAminoMsg): _73.ClientStateData;
                    toAminoMsg(message: _73.ClientStateData): _73.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _73.ClientStateDataProtoMsg): _73.ClientStateData;
                    toProto(message: _73.ClientStateData): Uint8Array;
                    toProtoMsg(message: _73.ClientStateData): _73.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _73.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ConsensusStateData;
                    fromPartial(object: Partial<_73.ConsensusStateData>): _73.ConsensusStateData;
                    fromAmino(object: _73.ConsensusStateDataAmino): _73.ConsensusStateData;
                    toAmino(message: _73.ConsensusStateData): _73.ConsensusStateDataAmino;
                    fromAminoMsg(object: _73.ConsensusStateDataAminoMsg): _73.ConsensusStateData;
                    toAminoMsg(message: _73.ConsensusStateData): _73.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _73.ConsensusStateDataProtoMsg): _73.ConsensusStateData;
                    toProto(message: _73.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _73.ConsensusStateData): _73.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _73.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ConnectionStateData;
                    fromPartial(object: Partial<_73.ConnectionStateData>): _73.ConnectionStateData;
                    fromAmino(object: _73.ConnectionStateDataAmino): _73.ConnectionStateData;
                    toAmino(message: _73.ConnectionStateData): _73.ConnectionStateDataAmino;
                    fromAminoMsg(object: _73.ConnectionStateDataAminoMsg): _73.ConnectionStateData;
                    toAminoMsg(message: _73.ConnectionStateData): _73.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _73.ConnectionStateDataProtoMsg): _73.ConnectionStateData;
                    toProto(message: _73.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _73.ConnectionStateData): _73.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _73.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ChannelStateData;
                    fromPartial(object: Partial<_73.ChannelStateData>): _73.ChannelStateData;
                    fromAmino(object: _73.ChannelStateDataAmino): _73.ChannelStateData;
                    toAmino(message: _73.ChannelStateData): _73.ChannelStateDataAmino;
                    fromAminoMsg(object: _73.ChannelStateDataAminoMsg): _73.ChannelStateData;
                    toAminoMsg(message: _73.ChannelStateData): _73.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _73.ChannelStateDataProtoMsg): _73.ChannelStateData;
                    toProto(message: _73.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _73.ChannelStateData): _73.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _73.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PacketCommitmentData;
                    fromPartial(object: Partial<_73.PacketCommitmentData>): _73.PacketCommitmentData;
                    fromAmino(object: _73.PacketCommitmentDataAmino): _73.PacketCommitmentData;
                    toAmino(message: _73.PacketCommitmentData): _73.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _73.PacketCommitmentDataAminoMsg): _73.PacketCommitmentData;
                    toAminoMsg(message: _73.PacketCommitmentData): _73.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _73.PacketCommitmentDataProtoMsg): _73.PacketCommitmentData;
                    toProto(message: _73.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _73.PacketCommitmentData): _73.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _73.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PacketAcknowledgementData;
                    fromPartial(object: Partial<_73.PacketAcknowledgementData>): _73.PacketAcknowledgementData;
                    fromAmino(object: _73.PacketAcknowledgementDataAmino): _73.PacketAcknowledgementData;
                    toAmino(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _73.PacketAcknowledgementDataAminoMsg): _73.PacketAcknowledgementData;
                    toAminoMsg(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _73.PacketAcknowledgementDataProtoMsg): _73.PacketAcknowledgementData;
                    toProto(message: _73.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _73.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_73.PacketReceiptAbsenceData>): _73.PacketReceiptAbsenceData;
                    fromAmino(object: _73.PacketReceiptAbsenceDataAmino): _73.PacketReceiptAbsenceData;
                    toAmino(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _73.PacketReceiptAbsenceDataAminoMsg): _73.PacketReceiptAbsenceData;
                    toAminoMsg(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _73.PacketReceiptAbsenceDataProtoMsg): _73.PacketReceiptAbsenceData;
                    toProto(message: _73.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _73.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.NextSequenceRecvData;
                    fromPartial(object: Partial<_73.NextSequenceRecvData>): _73.NextSequenceRecvData;
                    fromAmino(object: _73.NextSequenceRecvDataAmino): _73.NextSequenceRecvData;
                    toAmino(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _73.NextSequenceRecvDataAminoMsg): _73.NextSequenceRecvData;
                    toAminoMsg(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _73.NextSequenceRecvDataProtoMsg): _73.NextSequenceRecvData;
                    toProto(message: _73.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _74.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientState;
                    fromPartial(object: Partial<_74.ClientState>): _74.ClientState;
                    fromAmino(object: _74.ClientStateAmino): _74.ClientState;
                    toAmino(message: _74.ClientState): _74.ClientStateAmino;
                    fromAminoMsg(object: _74.ClientStateAminoMsg): _74.ClientState;
                    toAminoMsg(message: _74.ClientState): _74.ClientStateAminoMsg;
                    fromProtoMsg(message: _74.ClientStateProtoMsg): _74.ClientState;
                    toProto(message: _74.ClientState): Uint8Array;
                    toProtoMsg(message: _74.ClientState): _74.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _74.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ConsensusState;
                    fromPartial(object: Partial<_74.ConsensusState>): _74.ConsensusState;
                    fromAmino(object: _74.ConsensusStateAmino): _74.ConsensusState;
                    toAmino(message: _74.ConsensusState): _74.ConsensusStateAmino;
                    fromAminoMsg(object: _74.ConsensusStateAminoMsg): _74.ConsensusState;
                    toAminoMsg(message: _74.ConsensusState): _74.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _74.ConsensusStateProtoMsg): _74.ConsensusState;
                    toProto(message: _74.ConsensusState): Uint8Array;
                    toProtoMsg(message: _74.ConsensusState): _74.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _74.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Misbehaviour;
                    fromPartial(object: Partial<_74.Misbehaviour>): _74.Misbehaviour;
                    fromAmino(object: _74.MisbehaviourAmino): _74.Misbehaviour;
                    toAmino(message: _74.Misbehaviour): _74.MisbehaviourAmino;
                    fromAminoMsg(object: _74.MisbehaviourAminoMsg): _74.Misbehaviour;
                    toAminoMsg(message: _74.Misbehaviour): _74.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _74.MisbehaviourProtoMsg): _74.Misbehaviour;
                    toProto(message: _74.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _74.Misbehaviour): _74.MisbehaviourProtoMsg;
                };
                Header: {
                    encode(message: _74.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Header;
                    fromPartial(object: Partial<_74.Header>): _74.Header;
                    fromAmino(object: _74.HeaderAmino): _74.Header;
                    toAmino(message: _74.Header): _74.HeaderAmino;
                    fromAminoMsg(object: _74.HeaderAminoMsg): _74.Header;
                    toAminoMsg(message: _74.Header): _74.HeaderAminoMsg;
                    fromProtoMsg(message: _74.HeaderProtoMsg): _74.Header;
                    toProto(message: _74.Header): Uint8Array;
                    toProtoMsg(message: _74.Header): _74.HeaderProtoMsg;
                };
                Fraction: {
                    encode(message: _74.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Fraction;
                    fromPartial(object: Partial<_74.Fraction>): _74.Fraction;
                    fromAmino(object: _74.FractionAmino): _74.Fraction;
                    toAmino(message: _74.Fraction): _74.FractionAmino;
                    fromAminoMsg(object: _74.FractionAminoMsg): _74.Fraction;
                    toAminoMsg(message: _74.Fraction): _74.FractionAminoMsg;
                    fromProtoMsg(message: _74.FractionProtoMsg): _74.Fraction;
                    toProto(message: _74.Fraction): Uint8Array;
                    toProtoMsg(message: _74.Fraction): _74.FractionProtoMsg;
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
                        v1: _221.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _222.MsgClientImpl;
                    };
                    client: {
                        v1: _223.MsgClientImpl;
                    };
                    connection: {
                        v1: _224.MsgClientImpl;
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
                            denomTrace(request: _54.QueryDenomTraceRequest): Promise<_54.QueryDenomTraceResponse>;
                            denomTraces(request?: _54.QueryDenomTracesRequest): Promise<_54.QueryDenomTracesResponse>;
                            params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _60.QueryChannelRequest): Promise<_60.QueryChannelResponse>;
                            channels(request?: _60.QueryChannelsRequest): Promise<_60.QueryChannelsResponse>;
                            connectionChannels(request: _60.QueryConnectionChannelsRequest): Promise<_60.QueryConnectionChannelsResponse>;
                            channelClientState(request: _60.QueryChannelClientStateRequest): Promise<_60.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _60.QueryChannelConsensusStateRequest): Promise<_60.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _60.QueryPacketCommitmentRequest): Promise<_60.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _60.QueryPacketCommitmentsRequest): Promise<_60.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _60.QueryPacketReceiptRequest): Promise<_60.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _60.QueryPacketAcknowledgementRequest): Promise<_60.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _60.QueryPacketAcknowledgementsRequest): Promise<_60.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _60.QueryUnreceivedPacketsRequest): Promise<_60.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _60.QueryUnreceivedAcksRequest): Promise<_60.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _60.QueryNextSequenceReceiveRequest): Promise<_60.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _64.QueryClientStateRequest): Promise<_64.QueryClientStateResponse>;
                            clientStates(request?: _64.QueryClientStatesRequest): Promise<_64.QueryClientStatesResponse>;
                            consensusState(request: _64.QueryConsensusStateRequest): Promise<_64.QueryConsensusStateResponse>;
                            consensusStates(request: _64.QueryConsensusStatesRequest): Promise<_64.QueryConsensusStatesResponse>;
                            clientStatus(request: _64.QueryClientStatusRequest): Promise<_64.QueryClientStatusResponse>;
                            clientParams(request?: _64.QueryClientParamsRequest): Promise<_64.QueryClientParamsResponse>;
                            upgradedClientState(request?: _64.QueryUpgradedClientStateRequest): Promise<_64.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _64.QueryUpgradedConsensusStateRequest): Promise<_64.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _69.QueryConnectionRequest): Promise<_69.QueryConnectionResponse>;
                            connections(request?: _69.QueryConnectionsRequest): Promise<_69.QueryConnectionsResponse>;
                            clientConnections(request: _69.QueryClientConnectionsRequest): Promise<_69.QueryClientConnectionsResponse>;
                            connectionClientState(request: _69.QueryConnectionClientStateRequest): Promise<_69.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _69.QueryConnectionConsensusStateRequest): Promise<_69.QueryConnectionConsensusStateResponse>;
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
                        v1: _213.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _214.LCDQueryClient;
                    };
                    client: {
                        v1: _215.LCDQueryClient;
                    };
                    connection: {
                        v1: _216.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
