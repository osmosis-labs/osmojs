import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./applications/transfer/v2/packet";
import * as _111 from "./core/channel/v1/channel";
import * as _112 from "./core/channel/v1/genesis";
import * as _113 from "./core/channel/v1/query";
import * as _114 from "./core/channel/v1/tx";
import * as _115 from "./core/client/v1/client";
import * as _116 from "./core/client/v1/genesis";
import * as _117 from "./core/client/v1/query";
import * as _118 from "./core/client/v1/tx";
import * as _119 from "./core/commitment/v1/commitment";
import * as _120 from "./core/connection/v1/connection";
import * as _121 from "./core/connection/v1/genesis";
import * as _122 from "./core/connection/v1/query";
import * as _123 from "./core/connection/v1/tx";
import * as _124 from "./core/port/v1/query";
import * as _125 from "./core/types/v1/genesis";
import * as _126 from "./lightclients/localhost/v1/localhost";
import * as _127 from "./lightclients/solomachine/v1/solomachine";
import * as _128 from "./lightclients/solomachine/v2/solomachine";
import * as _129 from "./lightclients/tendermint/v1/tendermint";
import * as _266 from "./applications/transfer/v1/query.lcd";
import * as _267 from "./core/channel/v1/query.lcd";
import * as _268 from "./core/client/v1/query.lcd";
import * as _269 from "./core/connection/v1/query.lcd";
import * as _270 from "./applications/transfer/v1/query.rpc.query";
import * as _271 from "./core/channel/v1/query.rpc.query";
import * as _272 from "./core/client/v1/query.rpc.query";
import * as _273 from "./core/connection/v1/query.rpc.query";
import * as _274 from "./core/port/v1/query.rpc.query";
import * as _275 from "./applications/transfer/v1/tx.rpc.msg";
import * as _276 from "./core/channel/v1/tx.rpc.msg";
import * as _277 from "./core/client/v1/tx.rpc.msg";
import * as _278 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _275.MsgClientImpl;
                QueryClientImpl: typeof _270.QueryClientImpl;
                LCDQueryClient: typeof _266.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: _109.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromPartial: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: _109.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _109.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
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
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _109.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _109.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _109.MsgTransfer;
                    fromSDK(object: _109.MsgTransferSDKType): _109.MsgTransfer;
                    toSDK(message: _109.MsgTransfer): _109.MsgTransferSDKType;
                };
                MsgTransferResponse: {
                    encode(_: _109.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgTransferResponseSDKType;
                    fromPartial(_: {}): _109.MsgTransferResponse;
                    fromSDK(_: _109.MsgTransferResponseSDKType): _109.MsgTransferResponse;
                    toSDK(_: _109.MsgTransferResponse): _109.MsgTransferResponseSDKType;
                };
                DenomTrace: {
                    encode(message: _108.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _108.DenomTrace;
                    fromSDK(object: _108.DenomTraceSDKType): _108.DenomTrace;
                    toSDK(message: _108.DenomTrace): _108.DenomTraceSDKType;
                };
                Params: {
                    encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _108.Params;
                    fromSDK(object: _108.ParamsSDKType): _108.Params;
                    toSDK(message: _108.Params): _108.ParamsSDKType;
                };
                QueryDenomTraceRequest: {
                    encode(message: _107.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _107.QueryDenomTraceRequest;
                    fromSDK(object: _107.QueryDenomTraceRequestSDKType): _107.QueryDenomTraceRequest;
                    toSDK(message: _107.QueryDenomTraceRequest): _107.QueryDenomTraceRequestSDKType;
                };
                QueryDenomTraceResponse: {
                    encode(message: _107.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDenomTraceResponseSDKType;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _107.QueryDenomTraceResponse;
                    fromSDK(object: _107.QueryDenomTraceResponseSDKType): _107.QueryDenomTraceResponse;
                    toSDK(message: _107.QueryDenomTraceResponse): _107.QueryDenomTraceResponseSDKType;
                };
                QueryDenomTracesRequest: {
                    encode(message: _107.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _107.QueryDenomTracesRequest;
                    fromSDK(object: _107.QueryDenomTracesRequestSDKType): _107.QueryDenomTracesRequest;
                    toSDK(message: _107.QueryDenomTracesRequest): _107.QueryDenomTracesRequestSDKType;
                };
                QueryDenomTracesResponse: {
                    encode(message: _107.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDenomTracesResponseSDKType;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _107.QueryDenomTracesResponse;
                    fromSDK(object: _107.QueryDenomTracesResponseSDKType): _107.QueryDenomTracesResponse;
                    toSDK(message: _107.QueryDenomTracesResponse): _107.QueryDenomTracesResponseSDKType;
                };
                QueryParamsRequest: {
                    encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                    fromPartial(_: {}): _107.QueryParamsRequest;
                    fromSDK(_: _107.QueryParamsRequestSDKType): _107.QueryParamsRequest;
                    toSDK(_: _107.QueryParamsRequest): _107.QueryParamsRequestSDKType;
                };
                QueryParamsResponse: {
                    encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _107.QueryParamsResponse;
                    fromSDK(object: _107.QueryParamsResponseSDKType): _107.QueryParamsResponse;
                    toSDK(message: _107.QueryParamsResponse): _107.QueryParamsResponseSDKType;
                };
                GenesisState: {
                    encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _106.GenesisState;
                    fromSDK(object: _106.GenesisStateSDKType): _106.GenesisState;
                    toSDK(message: _106.GenesisState): _106.GenesisStateSDKType;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _110.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _110.FungibleTokenPacketData;
                    fromSDK(object: _110.FungibleTokenPacketDataSDKType): _110.FungibleTokenPacketData;
                    toSDK(message: _110.FungibleTokenPacketData): _110.FungibleTokenPacketDataSDKType;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _276.MsgClientImpl;
                QueryClientImpl: typeof _271.QueryClientImpl;
                LCDQueryClient: typeof _267.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _114.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _114.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _114.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _114.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _114.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _114.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _114.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _114.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _114.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _114.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _114.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _114.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _114.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _114.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _114.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _114.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _114.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _114.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _114.MsgRecvPacket): {
                            typeUrl: string;
                            value: _114.MsgRecvPacket;
                        };
                        timeout(value: _114.MsgTimeout): {
                            typeUrl: string;
                            value: _114.MsgTimeout;
                        };
                        timeoutOnClose(value: _114.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _114.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _114.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _114.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _114.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenTry(value: _114.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenAck(value: _114.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenConfirm(value: _114.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: any;
                        };
                        channelCloseInit(value: _114.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: any;
                        };
                        channelCloseConfirm(value: _114.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: any;
                        };
                        recvPacket(value: _114.MsgRecvPacket): {
                            typeUrl: string;
                            value: any;
                        };
                        timeout(value: _114.MsgTimeout): {
                            typeUrl: string;
                            value: any;
                        };
                        timeoutOnClose(value: _114.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: any;
                        };
                        acknowledgement(value: _114.MsgAcknowledgement): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _114.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _114.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _114.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _114.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _114.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _114.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _114.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _114.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _114.MsgRecvPacket): {
                            typeUrl: string;
                            value: _114.MsgRecvPacket;
                        };
                        timeout(value: _114.MsgTimeout): {
                            typeUrl: string;
                            value: _114.MsgTimeout;
                        };
                        timeoutOnClose(value: _114.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _114.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _114.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _114.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _114.MsgChannelOpenInit) => {
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
                        }) => _114.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _114.MsgChannelOpenTry) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _114.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _114.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _114.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _114.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _114.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _114.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _114.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _114.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _114.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _114.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _114.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
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
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _114.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _114.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _114.MsgChannelOpenInit;
                    fromSDK(object: _114.MsgChannelOpenInitSDKType): _114.MsgChannelOpenInit;
                    toSDK(message: _114.MsgChannelOpenInit): _114.MsgChannelOpenInitSDKType;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _114.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenInitResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelOpenInitResponse;
                    fromSDK(_: _114.MsgChannelOpenInitResponseSDKType): _114.MsgChannelOpenInitResponse;
                    toSDK(_: _114.MsgChannelOpenInitResponse): _114.MsgChannelOpenInitResponseSDKType;
                };
                MsgChannelOpenTry: {
                    encode(message: _114.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgChannelOpenTry;
                    fromSDK(object: _114.MsgChannelOpenTrySDKType): _114.MsgChannelOpenTry;
                    toSDK(message: _114.MsgChannelOpenTry): _114.MsgChannelOpenTrySDKType;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _114.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenTryResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelOpenTryResponse;
                    fromSDK(_: _114.MsgChannelOpenTryResponseSDKType): _114.MsgChannelOpenTryResponse;
                    toSDK(_: _114.MsgChannelOpenTryResponse): _114.MsgChannelOpenTryResponseSDKType;
                };
                MsgChannelOpenAck: {
                    encode(message: _114.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgChannelOpenAck;
                    fromSDK(object: _114.MsgChannelOpenAckSDKType): _114.MsgChannelOpenAck;
                    toSDK(message: _114.MsgChannelOpenAck): _114.MsgChannelOpenAckSDKType;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _114.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenAckResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelOpenAckResponse;
                    fromSDK(_: _114.MsgChannelOpenAckResponseSDKType): _114.MsgChannelOpenAckResponse;
                    toSDK(_: _114.MsgChannelOpenAckResponse): _114.MsgChannelOpenAckResponseSDKType;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _114.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgChannelOpenConfirm;
                    fromSDK(object: _114.MsgChannelOpenConfirmSDKType): _114.MsgChannelOpenConfirm;
                    toSDK(message: _114.MsgChannelOpenConfirm): _114.MsgChannelOpenConfirmSDKType;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _114.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelOpenConfirmResponse;
                    fromSDK(_: _114.MsgChannelOpenConfirmResponseSDKType): _114.MsgChannelOpenConfirmResponse;
                    toSDK(_: _114.MsgChannelOpenConfirmResponse): _114.MsgChannelOpenConfirmResponseSDKType;
                };
                MsgChannelCloseInit: {
                    encode(message: _114.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _114.MsgChannelCloseInit;
                    fromSDK(object: _114.MsgChannelCloseInitSDKType): _114.MsgChannelCloseInit;
                    toSDK(message: _114.MsgChannelCloseInit): _114.MsgChannelCloseInitSDKType;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _114.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelCloseInitResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelCloseInitResponse;
                    fromSDK(_: _114.MsgChannelCloseInitResponseSDKType): _114.MsgChannelCloseInitResponse;
                    toSDK(_: _114.MsgChannelCloseInitResponse): _114.MsgChannelCloseInitResponseSDKType;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _114.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgChannelCloseConfirm;
                    fromSDK(object: _114.MsgChannelCloseConfirmSDKType): _114.MsgChannelCloseConfirm;
                    toSDK(message: _114.MsgChannelCloseConfirm): _114.MsgChannelCloseConfirmSDKType;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _114.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChannelCloseConfirmResponseSDKType;
                    fromPartial(_: {}): _114.MsgChannelCloseConfirmResponse;
                    fromSDK(_: _114.MsgChannelCloseConfirmResponseSDKType): _114.MsgChannelCloseConfirmResponse;
                    toSDK(_: _114.MsgChannelCloseConfirmResponse): _114.MsgChannelCloseConfirmResponseSDKType;
                };
                MsgRecvPacket: {
                    encode(message: _114.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgRecvPacket;
                    fromSDK(object: _114.MsgRecvPacketSDKType): _114.MsgRecvPacket;
                    toSDK(message: _114.MsgRecvPacket): _114.MsgRecvPacketSDKType;
                };
                MsgRecvPacketResponse: {
                    encode(_: _114.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgRecvPacketResponseSDKType;
                    fromPartial(_: {}): _114.MsgRecvPacketResponse;
                    fromSDK(_: _114.MsgRecvPacketResponseSDKType): _114.MsgRecvPacketResponse;
                    toSDK(_: _114.MsgRecvPacketResponse): _114.MsgRecvPacketResponseSDKType;
                };
                MsgTimeout: {
                    encode(message: _114.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _114.MsgTimeout;
                    fromSDK(object: _114.MsgTimeoutSDKType): _114.MsgTimeout;
                    toSDK(message: _114.MsgTimeout): _114.MsgTimeoutSDKType;
                };
                MsgTimeoutResponse: {
                    encode(_: _114.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTimeoutResponseSDKType;
                    fromPartial(_: {}): _114.MsgTimeoutResponse;
                    fromSDK(_: _114.MsgTimeoutResponseSDKType): _114.MsgTimeoutResponse;
                    toSDK(_: _114.MsgTimeoutResponse): _114.MsgTimeoutResponseSDKType;
                };
                MsgTimeoutOnClose: {
                    encode(message: _114.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _114.MsgTimeoutOnClose;
                    fromSDK(object: _114.MsgTimeoutOnCloseSDKType): _114.MsgTimeoutOnClose;
                    toSDK(message: _114.MsgTimeoutOnClose): _114.MsgTimeoutOnCloseSDKType;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _114.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTimeoutOnCloseResponseSDKType;
                    fromPartial(_: {}): _114.MsgTimeoutOnCloseResponse;
                    fromSDK(_: _114.MsgTimeoutOnCloseResponseSDKType): _114.MsgTimeoutOnCloseResponse;
                    toSDK(_: _114.MsgTimeoutOnCloseResponse): _114.MsgTimeoutOnCloseResponseSDKType;
                };
                MsgAcknowledgement: {
                    encode(message: _114.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _114.MsgAcknowledgement;
                    fromSDK(object: _114.MsgAcknowledgementSDKType): _114.MsgAcknowledgement;
                    toSDK(message: _114.MsgAcknowledgement): _114.MsgAcknowledgementSDKType;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _114.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgAcknowledgementResponseSDKType;
                    fromPartial(_: {}): _114.MsgAcknowledgementResponse;
                    fromSDK(_: _114.MsgAcknowledgementResponseSDKType): _114.MsgAcknowledgementResponse;
                    toSDK(_: _114.MsgAcknowledgementResponse): _114.MsgAcknowledgementResponseSDKType;
                };
                QueryChannelRequest: {
                    encode(message: _113.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _113.QueryChannelRequest;
                    fromSDK(object: _113.QueryChannelRequestSDKType): _113.QueryChannelRequest;
                    toSDK(message: _113.QueryChannelRequest): _113.QueryChannelRequestSDKType;
                };
                QueryChannelResponse: {
                    encode(message: _113.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelResponseSDKType;
                    fromPartial(object: {
                        channel?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryChannelResponse;
                    fromSDK(object: _113.QueryChannelResponseSDKType): _113.QueryChannelResponse;
                    toSDK(message: _113.QueryChannelResponse): _113.QueryChannelResponseSDKType;
                };
                QueryChannelsRequest: {
                    encode(message: _113.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryChannelsRequest;
                    fromSDK(object: _113.QueryChannelsRequestSDKType): _113.QueryChannelsRequest;
                    toSDK(message: _113.QueryChannelsRequest): _113.QueryChannelsRequestSDKType;
                };
                QueryChannelsResponse: {
                    encode(message: _113.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryChannelsResponse;
                    fromSDK(object: _113.QueryChannelsResponseSDKType): _113.QueryChannelsResponse;
                    toSDK(message: _113.QueryChannelsResponse): _113.QueryChannelsResponseSDKType;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _113.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryConnectionChannelsRequest;
                    fromSDK(object: _113.QueryConnectionChannelsRequestSDKType): _113.QueryConnectionChannelsRequest;
                    toSDK(message: _113.QueryConnectionChannelsRequest): _113.QueryConnectionChannelsRequestSDKType;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _113.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConnectionChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryConnectionChannelsResponse;
                    fromSDK(object: _113.QueryConnectionChannelsResponseSDKType): _113.QueryConnectionChannelsResponse;
                    toSDK(message: _113.QueryConnectionChannelsResponse): _113.QueryConnectionChannelsResponseSDKType;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _113.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _113.QueryChannelClientStateRequest;
                    fromSDK(object: _113.QueryChannelClientStateRequestSDKType): _113.QueryChannelClientStateRequest;
                    toSDK(message: _113.QueryChannelClientStateRequest): _113.QueryChannelClientStateRequestSDKType;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _113.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelClientStateResponseSDKType;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryChannelClientStateResponse;
                    fromSDK(object: _113.QueryChannelClientStateResponseSDKType): _113.QueryChannelClientStateResponse;
                    toSDK(message: _113.QueryChannelClientStateResponse): _113.QueryChannelClientStateResponseSDKType;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _113.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _113.QueryChannelConsensusStateRequest;
                    fromSDK(object: _113.QueryChannelConsensusStateRequestSDKType): _113.QueryChannelConsensusStateRequest;
                    toSDK(message: _113.QueryChannelConsensusStateRequest): _113.QueryChannelConsensusStateRequestSDKType;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _113.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryChannelConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryChannelConsensusStateResponse;
                    fromSDK(object: _113.QueryChannelConsensusStateResponseSDKType): _113.QueryChannelConsensusStateResponse;
                    toSDK(message: _113.QueryChannelConsensusStateResponse): _113.QueryChannelConsensusStateResponseSDKType;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _113.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _113.QueryPacketCommitmentRequest;
                    fromSDK(object: _113.QueryPacketCommitmentRequestSDKType): _113.QueryPacketCommitmentRequest;
                    toSDK(message: _113.QueryPacketCommitmentRequest): _113.QueryPacketCommitmentRequestSDKType;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _113.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketCommitmentResponseSDKType;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryPacketCommitmentResponse;
                    fromSDK(object: _113.QueryPacketCommitmentResponseSDKType): _113.QueryPacketCommitmentResponse;
                    toSDK(message: _113.QueryPacketCommitmentResponse): _113.QueryPacketCommitmentResponseSDKType;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _113.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryPacketCommitmentsRequest;
                    fromSDK(object: _113.QueryPacketCommitmentsRequestSDKType): _113.QueryPacketCommitmentsRequest;
                    toSDK(message: _113.QueryPacketCommitmentsRequest): _113.QueryPacketCommitmentsRequestSDKType;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _113.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketCommitmentsResponseSDKType;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryPacketCommitmentsResponse;
                    fromSDK(object: _113.QueryPacketCommitmentsResponseSDKType): _113.QueryPacketCommitmentsResponse;
                    toSDK(message: _113.QueryPacketCommitmentsResponse): _113.QueryPacketCommitmentsResponseSDKType;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _113.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _113.QueryPacketReceiptRequest;
                    fromSDK(object: _113.QueryPacketReceiptRequestSDKType): _113.QueryPacketReceiptRequest;
                    toSDK(message: _113.QueryPacketReceiptRequest): _113.QueryPacketReceiptRequestSDKType;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _113.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketReceiptResponseSDKType;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryPacketReceiptResponse;
                    fromSDK(object: _113.QueryPacketReceiptResponseSDKType): _113.QueryPacketReceiptResponse;
                    toSDK(message: _113.QueryPacketReceiptResponse): _113.QueryPacketReceiptResponseSDKType;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _113.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _113.QueryPacketAcknowledgementRequest;
                    fromSDK(object: _113.QueryPacketAcknowledgementRequestSDKType): _113.QueryPacketAcknowledgementRequest;
                    toSDK(message: _113.QueryPacketAcknowledgementRequest): _113.QueryPacketAcknowledgementRequestSDKType;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _113.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketAcknowledgementResponseSDKType;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryPacketAcknowledgementResponse;
                    fromSDK(object: _113.QueryPacketAcknowledgementResponseSDKType): _113.QueryPacketAcknowledgementResponse;
                    toSDK(message: _113.QueryPacketAcknowledgementResponse): _113.QueryPacketAcknowledgementResponseSDKType;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _113.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    }): _113.QueryPacketAcknowledgementsRequest;
                    fromSDK(object: _113.QueryPacketAcknowledgementsRequestSDKType): _113.QueryPacketAcknowledgementsRequest;
                    toSDK(message: _113.QueryPacketAcknowledgementsRequest): _113.QueryPacketAcknowledgementsRequestSDKType;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _113.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryPacketAcknowledgementsResponseSDKType;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryPacketAcknowledgementsResponse;
                    fromSDK(object: _113.QueryPacketAcknowledgementsResponseSDKType): _113.QueryPacketAcknowledgementsResponse;
                    toSDK(message: _113.QueryPacketAcknowledgementsResponse): _113.QueryPacketAcknowledgementsResponseSDKType;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _113.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _113.QueryUnreceivedPacketsRequest;
                    fromSDK(object: _113.QueryUnreceivedPacketsRequestSDKType): _113.QueryUnreceivedPacketsRequest;
                    toSDK(message: _113.QueryUnreceivedPacketsRequest): _113.QueryUnreceivedPacketsRequestSDKType;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _113.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnreceivedPacketsResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryUnreceivedPacketsResponse;
                    fromSDK(object: _113.QueryUnreceivedPacketsResponseSDKType): _113.QueryUnreceivedPacketsResponse;
                    toSDK(message: _113.QueryUnreceivedPacketsResponse): _113.QueryUnreceivedPacketsResponseSDKType;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _113.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _113.QueryUnreceivedAcksRequest;
                    fromSDK(object: _113.QueryUnreceivedAcksRequestSDKType): _113.QueryUnreceivedAcksRequest;
                    toSDK(message: _113.QueryUnreceivedAcksRequest): _113.QueryUnreceivedAcksRequestSDKType;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _113.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUnreceivedAcksResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryUnreceivedAcksResponse;
                    fromSDK(object: _113.QueryUnreceivedAcksResponseSDKType): _113.QueryUnreceivedAcksResponse;
                    toSDK(message: _113.QueryUnreceivedAcksResponse): _113.QueryUnreceivedAcksResponseSDKType;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _113.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _113.QueryNextSequenceReceiveRequest;
                    fromSDK(object: _113.QueryNextSequenceReceiveRequestSDKType): _113.QueryNextSequenceReceiveRequest;
                    toSDK(message: _113.QueryNextSequenceReceiveRequest): _113.QueryNextSequenceReceiveRequestSDKType;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _113.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryNextSequenceReceiveResponseSDKType;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _113.QueryNextSequenceReceiveResponse;
                    fromSDK(object: _113.QueryNextSequenceReceiveResponseSDKType): _113.QueryNextSequenceReceiveResponse;
                    toSDK(message: _113.QueryNextSequenceReceiveResponse): _113.QueryNextSequenceReceiveResponseSDKType;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    }): _112.GenesisState;
                    fromSDK(object: _112.GenesisStateSDKType): _112.GenesisState;
                    toSDK(message: _112.GenesisState): _112.GenesisStateSDKType;
                };
                PacketSequence: {
                    encode(message: _112.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _112.PacketSequence;
                    fromSDK(object: _112.PacketSequenceSDKType): _112.PacketSequence;
                    toSDK(message: _112.PacketSequence): _112.PacketSequenceSDKType;
                };
                stateFromJSON(object: any): _111.State;
                stateToJSON(object: _111.State): string;
                orderFromJSON(object: any): _111.Order;
                orderToJSON(object: _111.Order): string;
                State: typeof _111.State;
                StateSDKType: typeof _111.StateSDKType;
                Order: typeof _111.Order;
                OrderSDKType: typeof _111.OrderSDKType;
                Channel: {
                    encode(message: _111.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Channel;
                    fromPartial(object: {
                        state?: _111.State;
                        ordering?: _111.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _111.Channel;
                    fromSDK(object: _111.ChannelSDKType): _111.Channel;
                    toSDK(message: _111.Channel): _111.ChannelSDKType;
                };
                IdentifiedChannel: {
                    encode(message: _111.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _111.State;
                        ordering?: _111.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _111.IdentifiedChannel;
                    fromSDK(object: _111.IdentifiedChannelSDKType): _111.IdentifiedChannel;
                    toSDK(message: _111.IdentifiedChannel): _111.IdentifiedChannelSDKType;
                };
                Counterparty: {
                    encode(message: _111.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _111.Counterparty;
                    fromSDK(object: _111.CounterpartySDKType): _111.Counterparty;
                    toSDK(message: _111.Counterparty): _111.CounterpartySDKType;
                };
                Packet: {
                    encode(message: _111.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Packet;
                    fromPartial(object: {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _111.Packet;
                    fromSDK(object: _111.PacketSDKType): _111.Packet;
                    toSDK(message: _111.Packet): _111.PacketSDKType;
                };
                PacketState: {
                    encode(message: _111.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _111.PacketState;
                    fromSDK(object: _111.PacketStateSDKType): _111.PacketState;
                    toSDK(message: _111.PacketState): _111.PacketStateSDKType;
                };
                Acknowledgement: {
                    encode(message: _111.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _111.Acknowledgement;
                    fromSDK(object: _111.AcknowledgementSDKType): _111.Acknowledgement;
                    toSDK(message: _111.Acknowledgement): _111.AcknowledgementSDKType;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _277.MsgClientImpl;
                QueryClientImpl: typeof _272.QueryClientImpl;
                LCDQueryClient: typeof _268.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _118.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _118.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _118.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _118.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _118.MsgCreateClient): {
                            typeUrl: string;
                            value: _118.MsgCreateClient;
                        };
                        updateClient(value: _118.MsgUpdateClient): {
                            typeUrl: string;
                            value: _118.MsgUpdateClient;
                        };
                        upgradeClient(value: _118.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _118.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _118.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _118.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _118.MsgCreateClient): {
                            typeUrl: string;
                            value: any;
                        };
                        updateClient(value: _118.MsgUpdateClient): {
                            typeUrl: string;
                            value: any;
                        };
                        upgradeClient(value: _118.MsgUpgradeClient): {
                            typeUrl: string;
                            value: any;
                        };
                        submitMisbehaviour(value: _118.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromPartial: {
                        createClient(value: _118.MsgCreateClient): {
                            typeUrl: string;
                            value: _118.MsgCreateClient;
                        };
                        updateClient(value: _118.MsgUpdateClient): {
                            typeUrl: string;
                            value: _118.MsgUpdateClient;
                        };
                        upgradeClient(value: _118.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _118.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _118.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _118.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _118.MsgCreateClient) => {
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
                        }) => _118.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _118.MsgUpdateClient) => {
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
                        }) => _118.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _118.MsgUpgradeClient) => {
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
                        }) => _118.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _118.MsgSubmitMisbehaviour) => {
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
                        }) => _118.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _118.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _118.MsgCreateClient;
                    fromSDK(object: _118.MsgCreateClientSDKType): _118.MsgCreateClient;
                    toSDK(message: _118.MsgCreateClient): _118.MsgCreateClientSDKType;
                };
                MsgCreateClientResponse: {
                    encode(_: _118.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgCreateClientResponseSDKType;
                    fromPartial(_: {}): _118.MsgCreateClientResponse;
                    fromSDK(_: _118.MsgCreateClientResponseSDKType): _118.MsgCreateClientResponse;
                    toSDK(_: _118.MsgCreateClientResponse): _118.MsgCreateClientResponseSDKType;
                };
                MsgUpdateClient: {
                    encode(message: _118.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _118.MsgUpdateClient;
                    fromSDK(object: _118.MsgUpdateClientSDKType): _118.MsgUpdateClient;
                    toSDK(message: _118.MsgUpdateClient): _118.MsgUpdateClientSDKType;
                };
                MsgUpdateClientResponse: {
                    encode(_: _118.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUpdateClientResponseSDKType;
                    fromPartial(_: {}): _118.MsgUpdateClientResponse;
                    fromSDK(_: _118.MsgUpdateClientResponseSDKType): _118.MsgUpdateClientResponse;
                    toSDK(_: _118.MsgUpdateClientResponse): _118.MsgUpdateClientResponseSDKType;
                };
                MsgUpgradeClient: {
                    encode(message: _118.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _118.MsgUpgradeClient;
                    fromSDK(object: _118.MsgUpgradeClientSDKType): _118.MsgUpgradeClient;
                    toSDK(message: _118.MsgUpgradeClient): _118.MsgUpgradeClientSDKType;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _118.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUpgradeClientResponseSDKType;
                    fromPartial(_: {}): _118.MsgUpgradeClientResponse;
                    fromSDK(_: _118.MsgUpgradeClientResponseSDKType): _118.MsgUpgradeClientResponse;
                    toSDK(_: _118.MsgUpgradeClientResponse): _118.MsgUpgradeClientResponseSDKType;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _118.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _118.MsgSubmitMisbehaviour;
                    fromSDK(object: _118.MsgSubmitMisbehaviourSDKType): _118.MsgSubmitMisbehaviour;
                    toSDK(message: _118.MsgSubmitMisbehaviour): _118.MsgSubmitMisbehaviourSDKType;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _118.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSubmitMisbehaviourResponseSDKType;
                    fromPartial(_: {}): _118.MsgSubmitMisbehaviourResponse;
                    fromSDK(_: _118.MsgSubmitMisbehaviourResponseSDKType): _118.MsgSubmitMisbehaviourResponse;
                    toSDK(_: _118.MsgSubmitMisbehaviourResponse): _118.MsgSubmitMisbehaviourResponseSDKType;
                };
                QueryClientStateRequest: {
                    encode(message: _117.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _117.QueryClientStateRequest;
                    fromSDK(object: _117.QueryClientStateRequestSDKType): _117.QueryClientStateRequest;
                    toSDK(message: _117.QueryClientStateRequest): _117.QueryClientStateRequestSDKType;
                };
                QueryClientStateResponse: {
                    encode(message: _117.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStateResponseSDKType;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _117.QueryClientStateResponse;
                    fromSDK(object: _117.QueryClientStateResponseSDKType): _117.QueryClientStateResponse;
                    toSDK(message: _117.QueryClientStateResponse): _117.QueryClientStateResponseSDKType;
                };
                QueryClientStatesRequest: {
                    encode(message: _117.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryClientStatesRequest;
                    fromSDK(object: _117.QueryClientStatesRequestSDKType): _117.QueryClientStatesRequest;
                    toSDK(message: _117.QueryClientStatesRequest): _117.QueryClientStatesRequestSDKType;
                };
                QueryClientStatesResponse: {
                    encode(message: _117.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStatesResponseSDKType;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _117.QueryClientStatesResponse;
                    fromSDK(object: _117.QueryClientStatesResponseSDKType): _117.QueryClientStatesResponse;
                    toSDK(message: _117.QueryClientStatesResponse): _117.QueryClientStatesResponseSDKType;
                };
                QueryConsensusStateRequest: {
                    encode(message: _117.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    }): _117.QueryConsensusStateRequest;
                    fromSDK(object: _117.QueryConsensusStateRequestSDKType): _117.QueryConsensusStateRequest;
                    toSDK(message: _117.QueryConsensusStateRequest): _117.QueryConsensusStateRequestSDKType;
                };
                QueryConsensusStateResponse: {
                    encode(message: _117.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _117.QueryConsensusStateResponse;
                    fromSDK(object: _117.QueryConsensusStateResponseSDKType): _117.QueryConsensusStateResponse;
                    toSDK(message: _117.QueryConsensusStateResponse): _117.QueryConsensusStateResponseSDKType;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _117.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _117.QueryConsensusStatesRequest;
                    fromSDK(object: _117.QueryConsensusStatesRequestSDKType): _117.QueryConsensusStatesRequest;
                    toSDK(message: _117.QueryConsensusStatesRequest): _117.QueryConsensusStatesRequestSDKType;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _117.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConsensusStatesResponseSDKType;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _117.QueryConsensusStatesResponse;
                    fromSDK(object: _117.QueryConsensusStatesResponseSDKType): _117.QueryConsensusStatesResponse;
                    toSDK(message: _117.QueryConsensusStatesResponse): _117.QueryConsensusStatesResponseSDKType;
                };
                QueryClientStatusRequest: {
                    encode(message: _117.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _117.QueryClientStatusRequest;
                    fromSDK(object: _117.QueryClientStatusRequestSDKType): _117.QueryClientStatusRequest;
                    toSDK(message: _117.QueryClientStatusRequest): _117.QueryClientStatusRequestSDKType;
                };
                QueryClientStatusResponse: {
                    encode(message: _117.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientStatusResponseSDKType;
                    fromPartial(object: {
                        status?: string;
                    }): _117.QueryClientStatusResponse;
                    fromSDK(object: _117.QueryClientStatusResponseSDKType): _117.QueryClientStatusResponse;
                    toSDK(message: _117.QueryClientStatusResponse): _117.QueryClientStatusResponseSDKType;
                };
                QueryClientParamsRequest: {
                    encode(_: _117.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientParamsRequest;
                    fromPartial(_: {}): _117.QueryClientParamsRequest;
                    fromSDK(_: _117.QueryClientParamsRequestSDKType): _117.QueryClientParamsRequest;
                    toSDK(_: _117.QueryClientParamsRequest): _117.QueryClientParamsRequestSDKType;
                };
                QueryClientParamsResponse: {
                    encode(message: _117.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryClientParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _117.QueryClientParamsResponse;
                    fromSDK(object: _117.QueryClientParamsResponseSDKType): _117.QueryClientParamsResponse;
                    toSDK(message: _117.QueryClientParamsResponse): _117.QueryClientParamsResponseSDKType;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _117.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _117.QueryUpgradedClientStateRequest;
                    fromSDK(_: _117.QueryUpgradedClientStateRequestSDKType): _117.QueryUpgradedClientStateRequest;
                    toSDK(_: _117.QueryUpgradedClientStateRequest): _117.QueryUpgradedClientStateRequestSDKType;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _117.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUpgradedClientStateResponseSDKType;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _117.QueryUpgradedClientStateResponse;
                    fromSDK(object: _117.QueryUpgradedClientStateResponseSDKType): _117.QueryUpgradedClientStateResponse;
                    toSDK(message: _117.QueryUpgradedClientStateResponse): _117.QueryUpgradedClientStateResponseSDKType;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _117.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _117.QueryUpgradedConsensusStateRequest;
                    fromSDK(_: _117.QueryUpgradedConsensusStateRequestSDKType): _117.QueryUpgradedConsensusStateRequest;
                    toSDK(_: _117.QueryUpgradedConsensusStateRequest): _117.QueryUpgradedConsensusStateRequestSDKType;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _117.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUpgradedConsensusStateResponseSDKType;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _117.QueryUpgradedConsensusStateResponse;
                    fromSDK(object: _117.QueryUpgradedConsensusStateResponseSDKType): _117.QueryUpgradedConsensusStateResponse;
                    toSDK(message: _117.QueryUpgradedConsensusStateResponse): _117.QueryUpgradedConsensusStateResponseSDKType;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    }): _116.GenesisState;
                    fromSDK(object: _116.GenesisStateSDKType): _116.GenesisState;
                    toSDK(message: _116.GenesisState): _116.GenesisStateSDKType;
                };
                GenesisMetadata: {
                    encode(message: _116.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _116.GenesisMetadata;
                    fromSDK(object: _116.GenesisMetadataSDKType): _116.GenesisMetadata;
                    toSDK(message: _116.GenesisMetadata): _116.GenesisMetadataSDKType;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _116.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _116.IdentifiedGenesisMetadata;
                    fromSDK(object: _116.IdentifiedGenesisMetadataSDKType): _116.IdentifiedGenesisMetadata;
                    toSDK(message: _116.IdentifiedGenesisMetadata): _116.IdentifiedGenesisMetadataSDKType;
                };
                IdentifiedClientState: {
                    encode(message: _115.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _115.IdentifiedClientState;
                    fromSDK(object: _115.IdentifiedClientStateSDKType): _115.IdentifiedClientState;
                    toSDK(message: _115.IdentifiedClientState): _115.IdentifiedClientStateSDKType;
                };
                ConsensusStateWithHeight: {
                    encode(message: _115.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _115.ConsensusStateWithHeight;
                    fromSDK(object: _115.ConsensusStateWithHeightSDKType): _115.ConsensusStateWithHeight;
                    toSDK(message: _115.ConsensusStateWithHeight): _115.ConsensusStateWithHeightSDKType;
                };
                ClientConsensusStates: {
                    encode(message: _115.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _115.ClientConsensusStates;
                    fromSDK(object: _115.ClientConsensusStatesSDKType): _115.ClientConsensusStates;
                    toSDK(message: _115.ClientConsensusStates): _115.ClientConsensusStatesSDKType;
                };
                ClientUpdateProposal: {
                    encode(message: _115.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _115.ClientUpdateProposal;
                    fromSDK(object: _115.ClientUpdateProposalSDKType): _115.ClientUpdateProposal;
                    toSDK(message: _115.ClientUpdateProposal): _115.ClientUpdateProposalSDKType;
                };
                UpgradeProposal: {
                    encode(message: _115.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _115.UpgradeProposal;
                    fromSDK(object: _115.UpgradeProposalSDKType): _115.UpgradeProposal;
                    toSDK(message: _115.UpgradeProposal): _115.UpgradeProposalSDKType;
                };
                Height: {
                    encode(message: _115.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Height;
                    fromPartial(object: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _115.Height;
                    fromSDK(object: _115.HeightSDKType): _115.Height;
                    toSDK(message: _115.Height): _115.HeightSDKType;
                };
                Params: {
                    encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _115.Params;
                    fromSDK(object: _115.ParamsSDKType): _115.Params;
                    toSDK(message: _115.Params): _115.ParamsSDKType;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _119.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _119.MerkleRoot;
                    fromSDK(object: _119.MerkleRootSDKType): _119.MerkleRoot;
                    toSDK(message: _119.MerkleRoot): _119.MerkleRootSDKType;
                };
                MerklePrefix: {
                    encode(message: _119.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _119.MerklePrefix;
                    fromSDK(object: _119.MerklePrefixSDKType): _119.MerklePrefix;
                    toSDK(message: _119.MerklePrefix): _119.MerklePrefixSDKType;
                };
                MerklePath: {
                    encode(message: _119.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _119.MerklePath;
                    fromSDK(object: _119.MerklePathSDKType): _119.MerklePath;
                    toSDK(message: _119.MerklePath): _119.MerklePathSDKType;
                };
                MerkleProof: {
                    encode(message: _119.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _119.MerkleProof;
                    fromSDK(object: _119.MerkleProofSDKType): _119.MerkleProof;
                    toSDK(message: _119.MerkleProof): _119.MerkleProofSDKType;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _278.MsgClientImpl;
                QueryClientImpl: typeof _273.QueryClientImpl;
                LCDQueryClient: typeof _269.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _123.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _123.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _123.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _123.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _123.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _123.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _123.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _123.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _123.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenTry(value: _123.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenAck(value: _123.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenConfirm(value: _123.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: any;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _123.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _123.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _123.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _123.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _123.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _123.MsgConnectionOpenInit) => {
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
                        }) => _123.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _123.MsgConnectionOpenTry) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _123.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _123.MsgConnectionOpenAck) => {
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
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
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _123.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _123.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _123.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _123.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    }): _123.MsgConnectionOpenInit;
                    fromSDK(object: _123.MsgConnectionOpenInitSDKType): _123.MsgConnectionOpenInit;
                    toSDK(message: _123.MsgConnectionOpenInit): _123.MsgConnectionOpenInitSDKType;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _123.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenInitResponseSDKType;
                    fromPartial(_: {}): _123.MsgConnectionOpenInitResponse;
                    fromSDK(_: _123.MsgConnectionOpenInitResponseSDKType): _123.MsgConnectionOpenInitResponse;
                    toSDK(_: _123.MsgConnectionOpenInitResponse): _123.MsgConnectionOpenInitResponseSDKType;
                };
                MsgConnectionOpenTry: {
                    encode(message: _123.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _123.MsgConnectionOpenTry;
                    fromSDK(object: _123.MsgConnectionOpenTrySDKType): _123.MsgConnectionOpenTry;
                    toSDK(message: _123.MsgConnectionOpenTry): _123.MsgConnectionOpenTrySDKType;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _123.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenTryResponseSDKType;
                    fromPartial(_: {}): _123.MsgConnectionOpenTryResponse;
                    fromSDK(_: _123.MsgConnectionOpenTryResponseSDKType): _123.MsgConnectionOpenTryResponse;
                    toSDK(_: _123.MsgConnectionOpenTryResponse): _123.MsgConnectionOpenTryResponseSDKType;
                };
                MsgConnectionOpenAck: {
                    encode(message: _123.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _123.MsgConnectionOpenAck;
                    fromSDK(object: _123.MsgConnectionOpenAckSDKType): _123.MsgConnectionOpenAck;
                    toSDK(message: _123.MsgConnectionOpenAck): _123.MsgConnectionOpenAckSDKType;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _123.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenAckResponseSDKType;
                    fromPartial(_: {}): _123.MsgConnectionOpenAckResponse;
                    fromSDK(_: _123.MsgConnectionOpenAckResponseSDKType): _123.MsgConnectionOpenAckResponse;
                    toSDK(_: _123.MsgConnectionOpenAckResponse): _123.MsgConnectionOpenAckResponseSDKType;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _123.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _123.MsgConnectionOpenConfirm;
                    fromSDK(object: _123.MsgConnectionOpenConfirmSDKType): _123.MsgConnectionOpenConfirm;
                    toSDK(message: _123.MsgConnectionOpenConfirm): _123.MsgConnectionOpenConfirmSDKType;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _123.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConnectionOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _123.MsgConnectionOpenConfirmResponse;
                    fromSDK(_: _123.MsgConnectionOpenConfirmResponseSDKType): _123.MsgConnectionOpenConfirmResponse;
                    toSDK(_: _123.MsgConnectionOpenConfirmResponse): _123.MsgConnectionOpenConfirmResponseSDKType;
                };
                QueryConnectionRequest: {
                    encode(message: _122.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _122.QueryConnectionRequest;
                    fromSDK(object: _122.QueryConnectionRequestSDKType): _122.QueryConnectionRequest;
                    toSDK(message: _122.QueryConnectionRequest): _122.QueryConnectionRequestSDKType;
                };
                QueryConnectionResponse: {
                    encode(message: _122.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionResponseSDKType;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _120.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _122.QueryConnectionResponse;
                    fromSDK(object: _122.QueryConnectionResponseSDKType): _122.QueryConnectionResponse;
                    toSDK(message: _122.QueryConnectionResponse): _122.QueryConnectionResponseSDKType;
                };
                QueryConnectionsRequest: {
                    encode(message: _122.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _122.QueryConnectionsRequest;
                    fromSDK(object: _122.QueryConnectionsRequestSDKType): _122.QueryConnectionsRequest;
                    toSDK(message: _122.QueryConnectionsRequest): _122.QueryConnectionsRequestSDKType;
                };
                QueryConnectionsResponse: {
                    encode(message: _122.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionsResponseSDKType;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _120.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _122.QueryConnectionsResponse;
                    fromSDK(object: _122.QueryConnectionsResponseSDKType): _122.QueryConnectionsResponse;
                    toSDK(message: _122.QueryConnectionsResponse): _122.QueryConnectionsResponseSDKType;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _122.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _122.QueryClientConnectionsRequest;
                    fromSDK(object: _122.QueryClientConnectionsRequestSDKType): _122.QueryClientConnectionsRequest;
                    toSDK(message: _122.QueryClientConnectionsRequest): _122.QueryClientConnectionsRequestSDKType;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _122.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientConnectionsResponseSDKType;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _122.QueryClientConnectionsResponse;
                    fromSDK(object: _122.QueryClientConnectionsResponseSDKType): _122.QueryClientConnectionsResponse;
                    toSDK(message: _122.QueryClientConnectionsResponse): _122.QueryClientConnectionsResponseSDKType;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _122.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _122.QueryConnectionClientStateRequest;
                    fromSDK(object: _122.QueryConnectionClientStateRequestSDKType): _122.QueryConnectionClientStateRequest;
                    toSDK(message: _122.QueryConnectionClientStateRequest): _122.QueryConnectionClientStateRequestSDKType;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _122.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionClientStateResponseSDKType;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _122.QueryConnectionClientStateResponse;
                    fromSDK(object: _122.QueryConnectionClientStateResponseSDKType): _122.QueryConnectionClientStateResponse;
                    toSDK(message: _122.QueryConnectionClientStateResponse): _122.QueryConnectionClientStateResponseSDKType;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _122.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _122.QueryConnectionConsensusStateRequest;
                    fromSDK(object: _122.QueryConnectionConsensusStateRequestSDKType): _122.QueryConnectionConsensusStateRequest;
                    toSDK(message: _122.QueryConnectionConsensusStateRequest): _122.QueryConnectionConsensusStateRequestSDKType;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _122.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConnectionConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _122.QueryConnectionConsensusStateResponse;
                    fromSDK(object: _122.QueryConnectionConsensusStateResponseSDKType): _122.QueryConnectionConsensusStateResponse;
                    toSDK(message: _122.QueryConnectionConsensusStateResponse): _122.QueryConnectionConsensusStateResponseSDKType;
                };
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _120.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    }): _121.GenesisState;
                    fromSDK(object: _121.GenesisStateSDKType): _121.GenesisState;
                    toSDK(message: _121.GenesisState): _121.GenesisStateSDKType;
                };
                stateFromJSON(object: any): _120.State;
                stateToJSON(object: _120.State): string;
                State: typeof _120.State;
                StateSDKType: typeof _120.StateSDKType;
                ConnectionEnd: {
                    encode(message: _120.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _120.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _120.ConnectionEnd;
                    fromSDK(object: _120.ConnectionEndSDKType): _120.ConnectionEnd;
                    toSDK(message: _120.ConnectionEnd): _120.ConnectionEndSDKType;
                };
                IdentifiedConnection: {
                    encode(message: _120.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _120.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _120.IdentifiedConnection;
                    fromSDK(object: _120.IdentifiedConnectionSDKType): _120.IdentifiedConnection;
                    toSDK(message: _120.IdentifiedConnection): _120.IdentifiedConnectionSDKType;
                };
                Counterparty: {
                    encode(message: _120.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _120.Counterparty;
                    fromSDK(object: _120.CounterpartySDKType): _120.Counterparty;
                    toSDK(message: _120.Counterparty): _120.CounterpartySDKType;
                };
                ClientPaths: {
                    encode(message: _120.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _120.ClientPaths;
                    fromSDK(object: _120.ClientPathsSDKType): _120.ClientPaths;
                    toSDK(message: _120.ClientPaths): _120.ClientPathsSDKType;
                };
                ConnectionPaths: {
                    encode(message: _120.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _120.ConnectionPaths;
                    fromSDK(object: _120.ConnectionPathsSDKType): _120.ConnectionPaths;
                    toSDK(message: _120.ConnectionPaths): _120.ConnectionPathsSDKType;
                };
                Version: {
                    encode(message: _120.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _120.Version;
                    fromSDK(object: _120.VersionSDKType): _120.Version;
                    toSDK(message: _120.Version): _120.VersionSDKType;
                };
                Params: {
                    encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: any;
                    }): _120.Params;
                    fromSDK(object: _120.ParamsSDKType): _120.Params;
                    toSDK(message: _120.Params): _120.ParamsSDKType;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _274.QueryClientImpl;
                QueryAppVersionRequest: {
                    encode(message: _124.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAppVersionRequest;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _111.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _124.QueryAppVersionRequest;
                    fromSDK(object: _124.QueryAppVersionRequestSDKType): _124.QueryAppVersionRequest;
                    toSDK(message: _124.QueryAppVersionRequest): _124.QueryAppVersionRequestSDKType;
                };
                QueryAppVersionResponse: {
                    encode(message: _124.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAppVersionResponseSDKType;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _124.QueryAppVersionResponse;
                    fromSDK(object: _124.QueryAppVersionResponseSDKType): _124.QueryAppVersionResponse;
                    toSDK(message: _124.QueryAppVersionResponse): _124.QueryAppVersionResponseSDKType;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _120.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _111.State;
                                ordering?: _111.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    }): _125.GenesisState;
                    fromSDK(object: _125.GenesisStateSDKType): _125.GenesisState;
                    toSDK(message: _125.GenesisState): _125.GenesisStateSDKType;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _126.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _126.ClientState;
                    fromSDK(object: _126.ClientStateSDKType): _126.ClientState;
                    toSDK(message: _126.ClientState): _126.ClientStateSDKType;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _127.DataType;
                dataTypeToJSON(object: _127.DataType): string;
                DataType: typeof _127.DataType;
                DataTypeSDKType: typeof _127.DataTypeSDKType;
                ClientState: {
                    encode(message: _127.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _127.ClientState;
                    fromSDK(object: _127.ClientStateSDKType): _127.ClientState;
                    toSDK(message: _127.ClientState): _127.ClientStateSDKType;
                };
                ConsensusState: {
                    encode(message: _127.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _127.ConsensusState;
                    fromSDK(object: _127.ConsensusStateSDKType): _127.ConsensusState;
                    toSDK(message: _127.ConsensusState): _127.ConsensusStateSDKType;
                };
                Header: {
                    encode(message: _127.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _127.Header;
                    fromSDK(object: _127.HeaderSDKType): _127.Header;
                    toSDK(message: _127.Header): _127.HeaderSDKType;
                };
                Misbehaviour: {
                    encode(message: _127.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _127.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _127.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _127.Misbehaviour;
                    fromSDK(object: _127.MisbehaviourSDKType): _127.Misbehaviour;
                    toSDK(message: _127.Misbehaviour): _127.MisbehaviourSDKType;
                };
                SignatureAndData: {
                    encode(message: _127.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _127.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _127.SignatureAndData;
                    fromSDK(object: _127.SignatureAndDataSDKType): _127.SignatureAndData;
                    toSDK(message: _127.SignatureAndData): _127.SignatureAndDataSDKType;
                };
                TimestampedSignatureData: {
                    encode(message: _127.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _127.TimestampedSignatureData;
                    fromSDK(object: _127.TimestampedSignatureDataSDKType): _127.TimestampedSignatureData;
                    toSDK(message: _127.TimestampedSignatureData): _127.TimestampedSignatureDataSDKType;
                };
                SignBytes: {
                    encode(message: _127.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _127.DataType;
                        data?: Uint8Array;
                    }): _127.SignBytes;
                    fromSDK(object: _127.SignBytesSDKType): _127.SignBytes;
                    toSDK(message: _127.SignBytes): _127.SignBytesSDKType;
                };
                HeaderData: {
                    encode(message: _127.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _127.HeaderData;
                    fromSDK(object: _127.HeaderDataSDKType): _127.HeaderData;
                    toSDK(message: _127.HeaderData): _127.HeaderDataSDKType;
                };
                ClientStateData: {
                    encode(message: _127.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _127.ClientStateData;
                    fromSDK(object: _127.ClientStateDataSDKType): _127.ClientStateData;
                    toSDK(message: _127.ClientStateData): _127.ClientStateDataSDKType;
                };
                ConsensusStateData: {
                    encode(message: _127.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _127.ConsensusStateData;
                    fromSDK(object: _127.ConsensusStateDataSDKType): _127.ConsensusStateData;
                    toSDK(message: _127.ConsensusStateData): _127.ConsensusStateDataSDKType;
                };
                ConnectionStateData: {
                    encode(message: _127.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _120.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _127.ConnectionStateData;
                    fromSDK(object: _127.ConnectionStateDataSDKType): _127.ConnectionStateData;
                    toSDK(message: _127.ConnectionStateData): _127.ConnectionStateDataSDKType;
                };
                ChannelStateData: {
                    encode(message: _127.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _127.ChannelStateData;
                    fromSDK(object: _127.ChannelStateDataSDKType): _127.ChannelStateData;
                    toSDK(message: _127.ChannelStateData): _127.ChannelStateDataSDKType;
                };
                PacketCommitmentData: {
                    encode(message: _127.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _127.PacketCommitmentData;
                    fromSDK(object: _127.PacketCommitmentDataSDKType): _127.PacketCommitmentData;
                    toSDK(message: _127.PacketCommitmentData): _127.PacketCommitmentDataSDKType;
                };
                PacketAcknowledgementData: {
                    encode(message: _127.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _127.PacketAcknowledgementData;
                    fromSDK(object: _127.PacketAcknowledgementDataSDKType): _127.PacketAcknowledgementData;
                    toSDK(message: _127.PacketAcknowledgementData): _127.PacketAcknowledgementDataSDKType;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _127.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _127.PacketReceiptAbsenceData;
                    fromSDK(object: _127.PacketReceiptAbsenceDataSDKType): _127.PacketReceiptAbsenceData;
                    toSDK(message: _127.PacketReceiptAbsenceData): _127.PacketReceiptAbsenceDataSDKType;
                };
                NextSequenceRecvData: {
                    encode(message: _127.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _127.NextSequenceRecvData;
                    fromSDK(object: _127.NextSequenceRecvDataSDKType): _127.NextSequenceRecvData;
                    toSDK(message: _127.NextSequenceRecvData): _127.NextSequenceRecvDataSDKType;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _128.DataType;
                dataTypeToJSON(object: _128.DataType): string;
                DataType: typeof _128.DataType;
                DataTypeSDKType: typeof _128.DataTypeSDKType;
                ClientState: {
                    encode(message: _128.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _128.ClientState;
                    fromSDK(object: _128.ClientStateSDKType): _128.ClientState;
                    toSDK(message: _128.ClientState): _128.ClientStateSDKType;
                };
                ConsensusState: {
                    encode(message: _128.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _128.ConsensusState;
                    fromSDK(object: _128.ConsensusStateSDKType): _128.ConsensusState;
                    toSDK(message: _128.ConsensusState): _128.ConsensusStateSDKType;
                };
                Header: {
                    encode(message: _128.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _128.Header;
                    fromSDK(object: _128.HeaderSDKType): _128.Header;
                    toSDK(message: _128.Header): _128.HeaderSDKType;
                };
                Misbehaviour: {
                    encode(message: _128.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _128.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _128.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _128.Misbehaviour;
                    fromSDK(object: _128.MisbehaviourSDKType): _128.Misbehaviour;
                    toSDK(message: _128.Misbehaviour): _128.MisbehaviourSDKType;
                };
                SignatureAndData: {
                    encode(message: _128.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _128.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _128.SignatureAndData;
                    fromSDK(object: _128.SignatureAndDataSDKType): _128.SignatureAndData;
                    toSDK(message: _128.SignatureAndData): _128.SignatureAndDataSDKType;
                };
                TimestampedSignatureData: {
                    encode(message: _128.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _128.TimestampedSignatureData;
                    fromSDK(object: _128.TimestampedSignatureDataSDKType): _128.TimestampedSignatureData;
                    toSDK(message: _128.TimestampedSignatureData): _128.TimestampedSignatureDataSDKType;
                };
                SignBytes: {
                    encode(message: _128.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _128.DataType;
                        data?: Uint8Array;
                    }): _128.SignBytes;
                    fromSDK(object: _128.SignBytesSDKType): _128.SignBytes;
                    toSDK(message: _128.SignBytes): _128.SignBytesSDKType;
                };
                HeaderData: {
                    encode(message: _128.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _128.HeaderData;
                    fromSDK(object: _128.HeaderDataSDKType): _128.HeaderData;
                    toSDK(message: _128.HeaderData): _128.HeaderDataSDKType;
                };
                ClientStateData: {
                    encode(message: _128.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _128.ClientStateData;
                    fromSDK(object: _128.ClientStateDataSDKType): _128.ClientStateData;
                    toSDK(message: _128.ClientStateData): _128.ClientStateDataSDKType;
                };
                ConsensusStateData: {
                    encode(message: _128.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _128.ConsensusStateData;
                    fromSDK(object: _128.ConsensusStateDataSDKType): _128.ConsensusStateData;
                    toSDK(message: _128.ConsensusStateData): _128.ConsensusStateDataSDKType;
                };
                ConnectionStateData: {
                    encode(message: _128.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _120.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _128.ConnectionStateData;
                    fromSDK(object: _128.ConnectionStateDataSDKType): _128.ConnectionStateData;
                    toSDK(message: _128.ConnectionStateData): _128.ConnectionStateDataSDKType;
                };
                ChannelStateData: {
                    encode(message: _128.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _111.State;
                            ordering?: _111.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _128.ChannelStateData;
                    fromSDK(object: _128.ChannelStateDataSDKType): _128.ChannelStateData;
                    toSDK(message: _128.ChannelStateData): _128.ChannelStateDataSDKType;
                };
                PacketCommitmentData: {
                    encode(message: _128.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _128.PacketCommitmentData;
                    fromSDK(object: _128.PacketCommitmentDataSDKType): _128.PacketCommitmentData;
                    toSDK(message: _128.PacketCommitmentData): _128.PacketCommitmentDataSDKType;
                };
                PacketAcknowledgementData: {
                    encode(message: _128.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _128.PacketAcknowledgementData;
                    fromSDK(object: _128.PacketAcknowledgementDataSDKType): _128.PacketAcknowledgementData;
                    toSDK(message: _128.PacketAcknowledgementData): _128.PacketAcknowledgementDataSDKType;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _128.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _128.PacketReceiptAbsenceData;
                    fromSDK(object: _128.PacketReceiptAbsenceDataSDKType): _128.PacketReceiptAbsenceData;
                    toSDK(message: _128.PacketReceiptAbsenceData): _128.PacketReceiptAbsenceDataSDKType;
                };
                NextSequenceRecvData: {
                    encode(message: _128.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _128.NextSequenceRecvData;
                    fromSDK(object: _128.NextSequenceRecvDataSDKType): _128.NextSequenceRecvData;
                    toSDK(message: _128.NextSequenceRecvData): _128.NextSequenceRecvDataSDKType;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _129.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _129.ClientState;
                    fromSDK(object: _129.ClientStateSDKType): _129.ClientState;
                    toSDK(message: _129.ClientState): _129.ClientStateSDKType;
                };
                ConsensusState: {
                    encode(message: _129.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _129.ConsensusState;
                    fromSDK(object: _129.ConsensusStateSDKType): _129.ConsensusState;
                    toSDK(message: _129.ConsensusState): _129.ConsensusStateSDKType;
                };
                Misbehaviour: {
                    encode(message: _129.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    }): _129.Misbehaviour;
                    fromSDK(object: _129.MisbehaviourSDKType): _129.Misbehaviour;
                    toSDK(message: _129.Misbehaviour): _129.MisbehaviourSDKType;
                };
                Header: {
                    encode(message: _129.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Header;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    }): _129.Header;
                    fromSDK(object: _129.HeaderSDKType): _129.Header;
                    toSDK(message: _129.Header): _129.HeaderSDKType;
                };
                Fraction: {
                    encode(message: _129.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Fraction;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _129.Fraction;
                    fromSDK(object: _129.FractionSDKType): _129.Fraction;
                    toSDK(message: _129.Fraction): _129.FractionSDKType;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _275.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _276.MsgClientImpl;
                    };
                    client: {
                        v1: _277.MsgClientImpl;
                    };
                    connection: {
                        v1: _278.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _270.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _271.QueryClientImpl;
                    };
                    client: {
                        v1: _272.QueryClientImpl;
                    };
                    connection: {
                        v1: _273.QueryClientImpl;
                    };
                    port: {
                        v1: _274.QueryClientImpl;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
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
                        v1: _266.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _267.LCDQueryClient;
                    };
                    client: {
                        v1: _268.LCDQueryClient;
                    };
                    connection: {
                        v1: _269.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
