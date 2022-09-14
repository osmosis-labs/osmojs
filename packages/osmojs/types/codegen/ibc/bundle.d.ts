import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _257 from "./applications/transfer/v1/query.lcd";
import * as _258 from "./core/channel/v1/query.lcd";
import * as _259 from "./core/client/v1/query.lcd";
import * as _260 from "./core/connection/v1/query.lcd";
import * as _261 from "./applications/transfer/v1/query.rpc.query";
import * as _262 from "./core/channel/v1/query.rpc.query";
import * as _263 from "./core/client/v1/query.rpc.query";
import * as _264 from "./core/connection/v1/query.rpc.query";
import * as _265 from "./core/port/v1/query.rpc.query";
import * as _266 from "./applications/transfer/v1/tx.rpc.msg";
import * as _267 from "./core/channel/v1/tx.rpc.msg";
import * as _268 from "./core/client/v1/tx.rpc.msg";
import * as _269 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _266.MsgClientImpl;
                QueryClientImpl: typeof _261.QueryClientImpl;
                LCDQueryClient: typeof _257.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: _105.MsgTransfer) => {
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
                        }) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransfer;
                    fromJSON(object: any): _105.MsgTransfer;
                    toJSON(message: _105.MsgTransfer): unknown;
                    fromPartial(object: {
                        source_port?: string;
                        source_channel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransferResponse;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    toJSON(_: _105.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _105.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DenomTrace;
                    fromJSON(object: any): _104.DenomTrace;
                    toJSON(message: _104.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        base_denom?: string;
                    }): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromJSON(object: any): _104.Params;
                    toJSON(message: _104.Params): unknown;
                    fromPartial(object: {
                        send_enabled?: boolean;
                        receive_enabled?: boolean;
                    }): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceRequest;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    toJSON(message: _103.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceResponse;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    toJSON(message: _103.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denom_trace?: {
                            path?: string;
                            base_denom?: string;
                        };
                    }): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesRequest;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    toJSON(message: _103.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesResponse;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    toJSON(message: _103.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    toJSON(_: _103.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    toJSON(message: _103.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _103.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromJSON(object: any): _102.GenesisState;
                    toJSON(message: _102.GenesisState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _102.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _106.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FungibleTokenPacketData;
                    fromJSON(object: any): _106.FungibleTokenPacketData;
                    toJSON(message: _106.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _106.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _267.MsgClientImpl;
                QueryClientImpl: typeof _262.QueryClientImpl;
                LCDQueryClient: typeof _258.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel, signer }: _110.MsgChannelOpenInit) => {
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
                        }) => _110.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: _110.MsgChannelOpenTry) => {
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
                        }) => _110.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: _110.MsgChannelOpenAck) => {
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
                        }) => _110.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: _110.MsgChannelOpenConfirm) => {
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
                        }) => _110.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, signer }: _110.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _110.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: _110.MsgChannelCloseConfirm) => {
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
                        }) => _110.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proof_commitment, proof_height, signer }: _110.MsgRecvPacket) => {
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
                        }) => _110.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: _110.MsgTimeout) => {
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
                        }) => _110.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: _110.MsgTimeoutOnClose) => {
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
                        }) => _110.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: _110.MsgAcknowledgement) => {
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
                        }) => _110.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _110.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInit;
                    fromJSON(object: any): _110.MsgChannelOpenInit;
                    toJSON(message: _110.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _110.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _110.MsgChannelOpenInitResponse;
                    toJSON(_: _110.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _110.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTry;
                    fromJSON(object: any): _110.MsgChannelOpenTry;
                    toJSON(message: _110.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        previous_channel_id?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        counterparty_version?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _110.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _110.MsgChannelOpenTryResponse;
                    toJSON(_: _110.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _110.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAck;
                    fromJSON(object: any): _110.MsgChannelOpenAck;
                    toJSON(message: _110.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        counterparty_channel_id?: string;
                        counterparty_version?: string;
                        proof_try?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _110.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _110.MsgChannelOpenAckResponse;
                    toJSON(_: _110.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _110.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirm;
                    fromJSON(object: any): _110.MsgChannelOpenConfirm;
                    toJSON(message: _110.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _110.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelOpenConfirmResponse;
                    toJSON(_: _110.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _110.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInit;
                    fromJSON(object: any): _110.MsgChannelCloseInit;
                    toJSON(message: _110.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        signer?: string;
                    }): _110.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _110.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _110.MsgChannelCloseInitResponse;
                    toJSON(_: _110.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _110.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirm;
                    fromJSON(object: any): _110.MsgChannelCloseConfirm;
                    toJSON(message: _110.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _110.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelCloseConfirmResponse;
                    toJSON(_: _110.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _110.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacket;
                    fromJSON(object: any): _110.MsgRecvPacket;
                    toJSON(message: _110.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_commitment?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _110.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacketResponse;
                    fromJSON(_: any): _110.MsgRecvPacketResponse;
                    toJSON(_: _110.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _110.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _110.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeout;
                    fromJSON(object: any): _110.MsgTimeout;
                    toJSON(message: _110.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _110.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _110.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutResponse;
                    fromJSON(_: any): _110.MsgTimeoutResponse;
                    toJSON(_: _110.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _110.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _110.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnClose;
                    fromJSON(object: any): _110.MsgTimeoutOnClose;
                    toJSON(message: _110.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_close?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _110.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _110.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _110.MsgTimeoutOnCloseResponse;
                    toJSON(_: _110.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _110.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _110.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgement;
                    fromJSON(object: any): _110.MsgAcknowledgement;
                    toJSON(message: _110.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proof_acked?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _110.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgementResponse;
                    fromJSON(_: any): _110.MsgAcknowledgementResponse;
                    toJSON(_: _110.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _110.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _109.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelRequest;
                    fromJSON(object: any): _109.QueryChannelRequest;
                    toJSON(message: _109.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _109.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelResponse;
                    fromJSON(object: any): _109.QueryChannelResponse;
                    toJSON(message: _109.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _109.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsRequest;
                    fromJSON(object: any): _109.QueryChannelsRequest;
                    toJSON(message: _109.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _109.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsResponse;
                    fromJSON(object: any): _109.QueryChannelsResponse;
                    toJSON(message: _109.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _109.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _109.QueryConnectionChannelsRequest;
                    toJSON(message: _109.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _109.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _109.QueryConnectionChannelsResponse;
                    toJSON(message: _109.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _109.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateRequest;
                    fromJSON(object: any): _109.QueryChannelClientStateRequest;
                    toJSON(message: _109.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _109.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateResponse;
                    fromJSON(object: any): _109.QueryChannelClientStateResponse;
                    toJSON(message: _109.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _109.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _109.QueryChannelConsensusStateRequest;
                    toJSON(message: _109.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _109.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _109.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _109.QueryChannelConsensusStateResponse;
                    toJSON(message: _109.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _109.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentRequest;
                    toJSON(message: _109.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _109.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentResponse;
                    toJSON(message: _109.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _109.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentsRequest;
                    toJSON(message: _109.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _109.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentsResponse;
                    toJSON(message: _109.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _109.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptRequest;
                    fromJSON(object: any): _109.QueryPacketReceiptRequest;
                    toJSON(message: _109.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _109.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptResponse;
                    fromJSON(object: any): _109.QueryPacketReceiptResponse;
                    toJSON(message: _109.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _109.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _109.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _109.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                        packet_commitment_sequences?: any[];
                    }): _109.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _109.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _109.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsRequest;
                    toJSON(message: _109.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_commitment_sequences?: any[];
                    }): _109.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _109.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsResponse;
                    toJSON(message: _109.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _109.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _109.QueryUnreceivedAcksRequest;
                    toJSON(message: _109.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_ack_sequences?: any[];
                    }): _109.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _109.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _109.QueryUnreceivedAcksResponse;
                    toJSON(message: _109.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _109.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveRequest;
                    toJSON(message: _109.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _109.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveResponse;
                    toJSON(message: _109.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        next_sequence_receive?: any;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        send_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        recv_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        ack_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        next_channel_sequence?: any;
                    }): _108.GenesisState;
                };
                PacketSequence: {
                    encode(message: _108.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketSequence;
                    fromJSON(object: any): _108.PacketSequence;
                    toJSON(message: _108.PacketSequence): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _108.PacketSequence;
                };
                stateFromJSON(object: any): _107.State;
                stateToJSON(object: _107.State): string;
                orderFromJSON(object: any): _107.Order;
                orderToJSON(object: _107.Order): string;
                State: typeof _107.State;
                Order: typeof _107.Order;
                Channel: {
                    encode(message: _107.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Channel;
                    fromJSON(object: any): _107.Channel;
                    toJSON(message: _107.Channel): unknown;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                    }): _107.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _107.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedChannel;
                    fromJSON(object: any): _107.IdentifiedChannel;
                    toJSON(message: _107.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                        port_id?: string;
                        channel_id?: string;
                    }): _107.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _107.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Counterparty;
                    fromJSON(object: any): _107.Counterparty;
                    toJSON(message: _107.Counterparty): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _107.Counterparty;
                };
                Packet: {
                    encode(message: _107.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Packet;
                    fromJSON(object: any): _107.Packet;
                    toJSON(message: _107.Packet): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        source_port?: string;
                        source_channel?: string;
                        destination_port?: string;
                        destination_channel?: string;
                        data?: Uint8Array;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _107.Packet;
                };
                PacketState: {
                    encode(message: _107.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketState;
                    fromJSON(object: any): _107.PacketState;
                    toJSON(message: _107.PacketState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _107.PacketState;
                };
                Acknowledgement: {
                    encode(message: _107.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Acknowledgement;
                    fromJSON(object: any): _107.Acknowledgement;
                    toJSON(message: _107.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _107.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _268.MsgClientImpl;
                QueryClientImpl: typeof _263.QueryClientImpl;
                LCDQueryClient: typeof _259.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ client_state, consensus_state, signer }: _114.MsgCreateClient) => {
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
                        }) => _114.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ client_id, header, signer }: _114.MsgUpdateClient) => {
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
                        }) => _114.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: _114.MsgUpgradeClient) => {
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
                        }) => _114.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ client_id, misbehaviour, signer }: _114.MsgSubmitMisbehaviour) => {
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
                        }) => _114.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _114.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClient;
                    fromJSON(object: any): _114.MsgCreateClient;
                    toJSON(message: _114.MsgCreateClient): unknown;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _114.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClientResponse;
                    fromJSON(_: any): _114.MsgCreateClientResponse;
                    toJSON(_: _114.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _114.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClient;
                    fromJSON(object: any): _114.MsgUpdateClient;
                    toJSON(message: _114.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _114.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClientResponse;
                    fromJSON(_: any): _114.MsgUpdateClientResponse;
                    toJSON(_: _114.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _114.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClient;
                    fromJSON(object: any): _114.MsgUpgradeClient;
                    toJSON(message: _114.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_upgrade_client?: Uint8Array;
                        proof_upgrade_consensus_state?: Uint8Array;
                        signer?: string;
                    }): _114.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _114.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClientResponse;
                    fromJSON(_: any): _114.MsgUpgradeClientResponse;
                    toJSON(_: _114.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _114.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _114.MsgSubmitMisbehaviour;
                    toJSON(message: _114.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        misbehaviour?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _114.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _114.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _114.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _114.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _113.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateRequest;
                    fromJSON(object: any): _113.QueryClientStateRequest;
                    toJSON(message: _113.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _113.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _113.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateResponse;
                    fromJSON(object: any): _113.QueryClientStateResponse;
                    toJSON(message: _113.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _113.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _113.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesRequest;
                    fromJSON(object: any): _113.QueryClientStatesRequest;
                    toJSON(message: _113.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _113.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesResponse;
                    fromJSON(object: any): _113.QueryClientStatesResponse;
                    toJSON(message: _113.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        client_states?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _113.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _113.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateRequest;
                    fromJSON(object: any): _113.QueryConsensusStateRequest;
                    toJSON(message: _113.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                        latest_height?: boolean;
                    }): _113.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _113.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateResponse;
                    fromJSON(object: any): _113.QueryConsensusStateResponse;
                    toJSON(message: _113.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _113.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _113.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesRequest;
                    fromJSON(object: any): _113.QueryConsensusStatesRequest;
                    toJSON(message: _113.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _113.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesResponse;
                    fromJSON(object: any): _113.QueryConsensusStatesResponse;
                    toJSON(message: _113.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _113.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _113.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusRequest;
                    fromJSON(object: any): _113.QueryClientStatusRequest;
                    toJSON(message: _113.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _113.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _113.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusResponse;
                    fromJSON(object: any): _113.QueryClientStatusResponse;
                    toJSON(message: _113.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _113.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _113.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsRequest;
                    fromJSON(_: any): _113.QueryClientParamsRequest;
                    toJSON(_: _113.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _113.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _113.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsResponse;
                    fromJSON(object: any): _113.QueryClientParamsResponse;
                    toJSON(message: _113.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _113.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _113.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedClientStateRequest;
                    toJSON(_: _113.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _113.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _113.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedClientStateResponse;
                    toJSON(message: _113.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _113.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _113.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _113.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _113.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromJSON(object: any): _112.GenesisState;
                    toJSON(message: _112.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clients_consensus?: {
                            client_id?: string;
                            consensus_states?: {
                                height?: {
                                    revision_number?: any;
                                    revision_height?: any;
                                };
                                consensus_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clients_metadata?: {
                            client_id?: string;
                            client_metadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowed_clients?: string[];
                        };
                        create_localhost?: boolean;
                        next_client_sequence?: any;
                    }): _112.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _112.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisMetadata;
                    fromJSON(object: any): _112.GenesisMetadata;
                    toJSON(message: _112.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _112.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _112.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _112.IdentifiedGenesisMetadata;
                    toJSON(message: _112.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_metadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _112.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _111.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedClientState;
                    fromJSON(object: any): _111.IdentifiedClientState;
                    toJSON(message: _111.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _111.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateWithHeight;
                    fromJSON(object: any): _111.ConsensusStateWithHeight;
                    toJSON(message: _111.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _111.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientConsensusStates;
                    fromJSON(object: any): _111.ClientConsensusStates;
                    toJSON(message: _111.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _111.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _111.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientUpdateProposal;
                    fromJSON(object: any): _111.ClientUpdateProposal;
                    toJSON(message: _111.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subject_client_id?: string;
                        substitute_client_id?: string;
                    }): _111.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _111.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpgradeProposal;
                    fromJSON(object: any): _111.UpgradeProposal;
                    toJSON(message: _111.UpgradeProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgraded_client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.UpgradeProposal;
                };
                Height: {
                    encode(message: _111.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Height;
                    fromJSON(object: any): _111.Height;
                    toJSON(message: _111.Height): unknown;
                    fromPartial(object: {
                        revision_number?: any;
                        revision_height?: any;
                    }): _111.Height;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                    fromJSON(object: any): _111.Params;
                    toJSON(message: _111.Params): unknown;
                    fromPartial(object: {
                        allowed_clients?: string[];
                    }): _111.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _115.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleRoot;
                    fromJSON(object: any): _115.MerkleRoot;
                    toJSON(message: _115.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _115.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _115.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePrefix;
                    fromJSON(object: any): _115.MerklePrefix;
                    toJSON(message: _115.MerklePrefix): unknown;
                    fromPartial(object: {
                        key_prefix?: Uint8Array;
                    }): _115.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _115.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePath;
                    fromJSON(object: any): _115.MerklePath;
                    toJSON(message: _115.MerklePath): unknown;
                    fromPartial(object: {
                        key_path?: string[];
                    }): _115.MerklePath;
                };
                MerkleProof: {
                    encode(message: _115.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleProof;
                    fromJSON(object: any): _115.MerkleProof;
                    toJSON(message: _115.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehash_key?: import("../confio/proofs").HashOp;
                                    prehash_value?: import("../confio/proofs").HashOp;
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
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
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
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
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
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
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
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
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
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
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
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
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
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
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
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookup_inners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _115.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _269.MsgClientImpl;
                QueryClientImpl: typeof _264.QueryClientImpl;
                LCDQueryClient: typeof _260.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ client_id, counterparty, version, delay_period, signer }: _119.MsgConnectionOpenInit) => {
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
                        }) => _119.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: _119.MsgConnectionOpenTry) => {
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
                        }) => _119.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: _119.MsgConnectionOpenAck) => {
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
                        }) => _119.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connection_id, proof_ack, proof_height, signer }: _119.MsgConnectionOpenConfirm) => {
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
                        }) => _119.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _119.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInit;
                    fromJSON(object: any): _119.MsgConnectionOpenInit;
                    toJSON(message: _119.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delay_period?: any;
                        signer?: string;
                    }): _119.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _119.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenInitResponse;
                    toJSON(_: _119.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _119.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTry;
                    fromJSON(object: any): _119.MsgConnectionOpenTry;
                    toJSON(message: _119.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        previous_connection_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                        counterparty_versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_init?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _119.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenTryResponse;
                    toJSON(_: _119.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _119.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAck;
                    fromJSON(object: any): _119.MsgConnectionOpenAck;
                    toJSON(message: _119.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        counterparty_connection_id?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_try?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _119.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenAckResponse;
                    toJSON(_: _119.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _119.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _119.MsgConnectionOpenConfirm;
                    toJSON(message: _119.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _119.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _119.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _118.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionRequest;
                    fromJSON(object: any): _118.QueryConnectionRequest;
                    toJSON(message: _118.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _118.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _118.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionResponse;
                    fromJSON(object: any): _118.QueryConnectionResponse;
                    toJSON(message: _118.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _118.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsRequest;
                    fromJSON(object: any): _118.QueryConnectionsRequest;
                    toJSON(message: _118.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _118.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _118.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsResponse;
                    fromJSON(object: any): _118.QueryConnectionsResponse;
                    toJSON(message: _118.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _118.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsRequest;
                    fromJSON(object: any): _118.QueryClientConnectionsRequest;
                    toJSON(message: _118.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _118.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _118.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsResponse;
                    fromJSON(object: any): _118.QueryClientConnectionsResponse;
                    toJSON(message: _118.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connection_paths?: string[];
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _118.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _118.QueryConnectionClientStateRequest;
                    toJSON(message: _118.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _118.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _118.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _118.QueryConnectionClientStateResponse;
                    toJSON(message: _118.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _118.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateRequest;
                    toJSON(message: _118.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _118.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _118.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateResponse;
                    toJSON(message: _118.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        client_connection_paths?: {
                            client_id?: string;
                            paths?: string[];
                        }[];
                        next_connection_sequence?: any;
                        params?: {
                            max_expected_time_per_block?: any;
                        };
                    }): _117.GenesisState;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                State: typeof _116.State;
                ConnectionEnd: {
                    encode(message: _116.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionEnd;
                    fromJSON(object: any): _116.ConnectionEnd;
                    toJSON(message: _116.ConnectionEnd): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _116.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _116.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedConnection;
                    fromJSON(object: any): _116.IdentifiedConnection;
                    toJSON(message: _116.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _116.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        connection_id?: string;
                        prefix?: {
                            key_prefix?: Uint8Array;
                        };
                    }): _116.Counterparty;
                };
                ClientPaths: {
                    encode(message: _116.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ClientPaths;
                    fromJSON(object: any): _116.ClientPaths;
                    toJSON(message: _116.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _116.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _116.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionPaths;
                    fromJSON(object: any): _116.ConnectionPaths;
                    toJSON(message: _116.ConnectionPaths): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        paths?: string[];
                    }): _116.ConnectionPaths;
                };
                Version: {
                    encode(message: _116.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Version;
                    fromJSON(object: any): _116.Version;
                    toJSON(message: _116.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _116.Version;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                    fromJSON(object: any): _116.Params;
                    toJSON(message: _116.Params): unknown;
                    fromPartial(object: {
                        max_expected_time_per_block?: any;
                    }): _116.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _265.QueryClientImpl;
                QueryAppVersionRequest: {
                    encode(message: _120.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionRequest;
                    fromJSON(object: any): _120.QueryAppVersionRequest;
                    toJSON(message: _120.QueryAppVersionRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        connection_id?: string;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        proposed_version?: string;
                    }): _120.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _120.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionResponse;
                    fromJSON(object: any): _120.QueryAppVersionResponse;
                    toJSON(message: _120.QueryAppVersionResponse): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        version?: string;
                    }): _120.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromJSON(object: any): _121.GenesisState;
                    toJSON(message: _121.GenesisState): unknown;
                    fromPartial(object: {
                        client_genesis?: {
                            clients?: {
                                client_id?: string;
                                client_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clients_consensus?: {
                                client_id?: string;
                                consensus_states?: {
                                    height?: {
                                        revision_number?: any;
                                        revision_height?: any;
                                    };
                                    consensus_state?: {
                                        type_url?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clients_metadata?: {
                                client_id?: string;
                                client_metadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowed_clients?: string[];
                            };
                            create_localhost?: boolean;
                            next_client_sequence?: any;
                        };
                        connection_genesis?: {
                            connections?: {
                                id?: string;
                                client_id?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    client_id?: string;
                                    connection_id?: string;
                                    prefix?: {
                                        key_prefix?: Uint8Array;
                                    };
                                };
                                delay_period?: any;
                            }[];
                            client_connection_paths?: {
                                client_id?: string;
                                paths?: string[];
                            }[];
                            next_connection_sequence?: any;
                            params?: {
                                max_expected_time_per_block?: any;
                            };
                        };
                        channel_genesis?: {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    port_id?: string;
                                    channel_id?: string;
                                };
                                connection_hops?: string[];
                                version?: string;
                                port_id?: string;
                                channel_id?: string;
                            }[];
                            acknowledgements?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            send_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            recv_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            ack_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            next_channel_sequence?: any;
                        };
                    }): _121.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromJSON(object: any): _122.ClientState;
                    toJSON(message: _122.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _122.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        frozen_sequence?: any;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromJSON(object: any): _123.ConsensusState;
                    toJSON(message: _123.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _123.ConsensusState;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromJSON(object: any): _123.Header;
                    toJSON(message: _123.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _123.Header;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromJSON(object: any): _123.Misbehaviour;
                    toJSON(message: _123.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _123.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromJSON(object: any): _123.SignatureAndData;
                    toJSON(message: _123.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _123.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromJSON(object: any): _123.TimestampedSignatureData;
                    toJSON(message: _123.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _123.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromJSON(object: any): _123.SignBytes;
                    toJSON(message: _123.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _123.DataType;
                        data?: Uint8Array;
                    }): _123.SignBytes;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromJSON(object: any): _123.HeaderData;
                    toJSON(message: _123.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _123.HeaderData;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromJSON(object: any): _123.ClientStateData;
                    toJSON(message: _123.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromJSON(object: any): _123.ConsensusStateData;
                    toJSON(message: _123.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromJSON(object: any): _123.ConnectionStateData;
                    toJSON(message: _123.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _123.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromJSON(object: any): _123.ChannelStateData;
                    toJSON(message: _123.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _123.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromJSON(object: any): _123.PacketCommitmentData;
                    toJSON(message: _123.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _123.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromJSON(object: any): _123.PacketAcknowledgementData;
                    toJSON(message: _123.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _123.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromJSON(object: any): _123.PacketReceiptAbsenceData;
                    toJSON(message: _123.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _123.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromJSON(object: any): _123.NextSequenceRecvData;
                    toJSON(message: _123.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _123.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        is_frozen?: boolean;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _124.ClientState;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _124.ConsensusState;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _124.Header;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _124.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromJSON(object: any): _124.SignatureAndData;
                    toJSON(message: _124.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _124.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _124.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromJSON(object: any): _124.TimestampedSignatureData;
                    toJSON(message: _124.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _124.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromJSON(object: any): _124.SignBytes;
                    toJSON(message: _124.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _124.DataType;
                        data?: Uint8Array;
                    }): _124.SignBytes;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromJSON(object: any): _124.HeaderData;
                    toJSON(message: _124.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _124.HeaderData;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromJSON(object: any): _124.ClientStateData;
                    toJSON(message: _124.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromJSON(object: any): _124.ConsensusStateData;
                    toJSON(message: _124.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromJSON(object: any): _124.ConnectionStateData;
                    toJSON(message: _124.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _124.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromJSON(object: any): _124.ChannelStateData;
                    toJSON(message: _124.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _124.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromJSON(object: any): _124.PacketCommitmentData;
                    toJSON(message: _124.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _124.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromJSON(object: any): _124.PacketAcknowledgementData;
                    toJSON(message: _124.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _124.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromJSON(object: any): _124.PacketReceiptAbsenceData;
                    toJSON(message: _124.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _124.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromJSON(object: any): _124.NextSequenceRecvData;
                    toJSON(message: _124.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _124.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromJSON(object: any): _125.ClientState;
                    toJSON(message: _125.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        trust_level?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trusting_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbonding_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_clock_drift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozen_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        latest_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_specs?: {
                            leaf_spec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehash_key?: import("../confio/proofs").HashOp;
                                prehash_value?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            inner_spec?: {
                                child_order?: number[];
                                child_size?: number;
                                min_prefix_length?: number;
                                max_prefix_length?: number;
                                empty_child?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            max_depth?: number;
                            min_depth?: number;
                        }[];
                        upgrade_path?: string[];
                        allow_update_after_expiry?: boolean;
                        allow_update_after_misbehaviour?: boolean;
                    }): _125.ClientState;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromJSON(object: any): _125.ConsensusState;
                    toJSON(message: _125.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        next_validators_hash?: Uint8Array;
                    }): _125.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromJSON(object: any): _125.Misbehaviour;
                    toJSON(message: _125.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header_1?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                        header_2?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                    }): _125.Misbehaviour;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
                    fromJSON(object: any): _125.Header;
                    toJSON(message: _125.Header): unknown;
                    fromPartial(object: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                        trusted_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        trusted_validators?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                    }): _125.Header;
                };
                Fraction: {
                    encode(message: _125.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Fraction;
                    fromJSON(object: any): _125.Fraction;
                    toJSON(message: _125.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _125.Fraction;
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
                        v1: _266.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _267.MsgClientImpl;
                    };
                    client: {
                        v1: _268.MsgClientImpl;
                    };
                    connection: {
                        v1: _269.MsgClientImpl;
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
                        v1: _261.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _262.QueryClientImpl;
                    };
                    client: {
                        v1: _263.QueryClientImpl;
                    };
                    connection: {
                        v1: _264.QueryClientImpl;
                    };
                    port: {
                        v1: _265.QueryClientImpl;
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
                        v1beta1: any;
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
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _257.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _258.LCDQueryClient;
                    };
                    client: {
                        v1: _259.LCDQueryClient;
                    };
                    connection: {
                        v1: _260.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
