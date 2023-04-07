import * as _59 from "./applications/fee/v1/ack";
import * as _60 from "./applications/fee/v1/fee";
import * as _61 from "./applications/fee/v1/genesis";
import * as _62 from "./applications/fee/v1/metadata";
import * as _63 from "./applications/fee/v1/query";
import * as _64 from "./applications/fee/v1/tx";
import * as _65 from "./applications/interchain_accounts/controller/v1/controller";
import * as _66 from "./applications/interchain_accounts/controller/v1/query";
import * as _67 from "./applications/interchain_accounts/controller/v1/tx";
import * as _68 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _69 from "./applications/interchain_accounts/host/v1/host";
import * as _70 from "./applications/interchain_accounts/host/v1/query";
import * as _71 from "./applications/interchain_accounts/v1/account";
import * as _72 from "./applications/interchain_accounts/v1/metadata";
import * as _73 from "./applications/interchain_accounts/v1/packet";
import * as _74 from "./applications/transfer/v1/authz";
import * as _75 from "./applications/transfer/v1/genesis";
import * as _76 from "./applications/transfer/v1/query";
import * as _77 from "./applications/transfer/v1/transfer";
import * as _78 from "./applications/transfer/v1/tx";
import * as _79 from "./applications/transfer/v2/packet";
import * as _80 from "./core/channel/v1/channel";
import * as _81 from "./core/channel/v1/genesis";
import * as _82 from "./core/channel/v1/query";
import * as _83 from "./core/channel/v1/tx";
import * as _84 from "./core/client/v1/client";
import * as _85 from "./core/client/v1/genesis";
import * as _86 from "./core/client/v1/query";
import * as _87 from "./core/client/v1/tx";
import * as _88 from "./core/commitment/v1/commitment";
import * as _89 from "./core/connection/v1/connection";
import * as _90 from "./core/connection/v1/genesis";
import * as _91 from "./core/connection/v1/query";
import * as _92 from "./core/connection/v1/tx";
import * as _93 from "./lightclients/localhost/v2/localhost";
import * as _94 from "./lightclients/solomachine/v2/solomachine";
import * as _95 from "./lightclients/solomachine/v3/solomachine";
import * as _96 from "./lightclients/tendermint/v1/tendermint";
import * as _236 from "./applications/fee/v1/query.lcd";
import * as _237 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _238 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _239 from "./applications/transfer/v1/query.lcd";
import * as _240 from "./core/channel/v1/query.lcd";
import * as _241 from "./core/client/v1/query.lcd";
import * as _242 from "./core/connection/v1/query.lcd";
import * as _243 from "./applications/fee/v1/query.rpc.Query";
import * as _244 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _245 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _246 from "./applications/transfer/v1/query.rpc.Query";
import * as _247 from "./core/channel/v1/query.rpc.Query";
import * as _248 from "./core/client/v1/query.rpc.Query";
import * as _249 from "./core/connection/v1/query.rpc.Query";
import * as _250 from "./applications/fee/v1/tx.rpc.msg";
import * as _251 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _252 from "./applications/transfer/v1/tx.rpc.msg";
import * as _253 from "./core/channel/v1/tx.rpc.msg";
import * as _254 from "./core/client/v1/tx.rpc.msg";
import * as _255 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _250.MsgClientImpl;
                QueryClientImpl: typeof _243.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _63.QueryIncentivizedPacketsRequest): Promise<_63.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _63.QueryIncentivizedPacketRequest): Promise<_63.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _63.QueryIncentivizedPacketsForChannelRequest): Promise<_63.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _63.QueryTotalRecvFeesRequest): Promise<_63.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _63.QueryTotalAckFeesRequest): Promise<_63.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _63.QueryTotalTimeoutFeesRequest): Promise<_63.QueryTotalTimeoutFeesResponse>;
                    payee(request: _63.QueryPayeeRequest): Promise<_63.QueryPayeeResponse>;
                    counterpartyPayee(request: _63.QueryCounterpartyPayeeRequest): Promise<_63.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _63.QueryFeeEnabledChannelsRequest): Promise<_63.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _63.QueryFeeEnabledChannelRequest): Promise<_63.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _236.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _64.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _64.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _64.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _64.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _64.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _64.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _64.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _64.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _64.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _64.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _64.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _64.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _64.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _64.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _64.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _64.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _64.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _64.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _64.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _64.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _64.MsgRegisterPayee) => _64.MsgRegisterPayeeAmino;
                        fromAmino: (object: _64.MsgRegisterPayeeAmino) => _64.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _64.MsgRegisterCounterpartyPayee) => _64.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _64.MsgRegisterCounterpartyPayeeAmino) => _64.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _64.MsgPayPacketFee) => _64.MsgPayPacketFeeAmino;
                        fromAmino: (object: _64.MsgPayPacketFeeAmino) => _64.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _64.MsgPayPacketFeeAsync) => _64.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _64.MsgPayPacketFeeAsyncAmino) => _64.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _64.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRegisterPayee;
                    fromPartial(object: Partial<_64.MsgRegisterPayee>): _64.MsgRegisterPayee;
                    fromAmino(object: _64.MsgRegisterPayeeAmino): _64.MsgRegisterPayee;
                    toAmino(message: _64.MsgRegisterPayee): _64.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _64.MsgRegisterPayeeAminoMsg): _64.MsgRegisterPayee;
                    toAminoMsg(message: _64.MsgRegisterPayee): _64.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _64.MsgRegisterPayeeProtoMsg): _64.MsgRegisterPayee;
                    toProto(message: _64.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _64.MsgRegisterPayee): _64.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_64.MsgRegisterPayeeResponse>): _64.MsgRegisterPayeeResponse;
                    fromAmino(_: _64.MsgRegisterPayeeResponseAmino): _64.MsgRegisterPayeeResponse;
                    toAmino(_: _64.MsgRegisterPayeeResponse): _64.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _64.MsgRegisterPayeeResponseAminoMsg): _64.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _64.MsgRegisterPayeeResponse): _64.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgRegisterPayeeResponseProtoMsg): _64.MsgRegisterPayeeResponse;
                    toProto(message: _64.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgRegisterPayeeResponse): _64.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _64.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_64.MsgRegisterCounterpartyPayee>): _64.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _64.MsgRegisterCounterpartyPayeeAmino): _64.MsgRegisterCounterpartyPayee;
                    toAmino(message: _64.MsgRegisterCounterpartyPayee): _64.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _64.MsgRegisterCounterpartyPayeeAminoMsg): _64.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _64.MsgRegisterCounterpartyPayee): _64.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _64.MsgRegisterCounterpartyPayeeProtoMsg): _64.MsgRegisterCounterpartyPayee;
                    toProto(message: _64.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _64.MsgRegisterCounterpartyPayee): _64.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_64.MsgRegisterCounterpartyPayeeResponse>): _64.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _64.MsgRegisterCounterpartyPayeeResponseAmino): _64.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _64.MsgRegisterCounterpartyPayeeResponse): _64.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _64.MsgRegisterCounterpartyPayeeResponseAminoMsg): _64.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _64.MsgRegisterCounterpartyPayeeResponse): _64.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgRegisterCounterpartyPayeeResponseProtoMsg): _64.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _64.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgRegisterCounterpartyPayeeResponse): _64.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _64.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPayPacketFee;
                    fromPartial(object: Partial<_64.MsgPayPacketFee>): _64.MsgPayPacketFee;
                    fromAmino(object: _64.MsgPayPacketFeeAmino): _64.MsgPayPacketFee;
                    toAmino(message: _64.MsgPayPacketFee): _64.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _64.MsgPayPacketFeeAminoMsg): _64.MsgPayPacketFee;
                    toAminoMsg(message: _64.MsgPayPacketFee): _64.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _64.MsgPayPacketFeeProtoMsg): _64.MsgPayPacketFee;
                    toProto(message: _64.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _64.MsgPayPacketFee): _64.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_64.MsgPayPacketFeeResponse>): _64.MsgPayPacketFeeResponse;
                    fromAmino(_: _64.MsgPayPacketFeeResponseAmino): _64.MsgPayPacketFeeResponse;
                    toAmino(_: _64.MsgPayPacketFeeResponse): _64.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _64.MsgPayPacketFeeResponseAminoMsg): _64.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _64.MsgPayPacketFeeResponse): _64.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgPayPacketFeeResponseProtoMsg): _64.MsgPayPacketFeeResponse;
                    toProto(message: _64.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgPayPacketFeeResponse): _64.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _64.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_64.MsgPayPacketFeeAsync>): _64.MsgPayPacketFeeAsync;
                    fromAmino(object: _64.MsgPayPacketFeeAsyncAmino): _64.MsgPayPacketFeeAsync;
                    toAmino(message: _64.MsgPayPacketFeeAsync): _64.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _64.MsgPayPacketFeeAsyncAminoMsg): _64.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _64.MsgPayPacketFeeAsync): _64.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _64.MsgPayPacketFeeAsyncProtoMsg): _64.MsgPayPacketFeeAsync;
                    toProto(message: _64.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _64.MsgPayPacketFeeAsync): _64.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _64.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_64.MsgPayPacketFeeAsyncResponse>): _64.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _64.MsgPayPacketFeeAsyncResponseAmino): _64.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _64.MsgPayPacketFeeAsyncResponse): _64.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _64.MsgPayPacketFeeAsyncResponseAminoMsg): _64.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _64.MsgPayPacketFeeAsyncResponse): _64.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _64.MsgPayPacketFeeAsyncResponseProtoMsg): _64.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _64.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _64.MsgPayPacketFeeAsyncResponse): _64.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketsRequest>): _63.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _63.QueryIncentivizedPacketsRequestAmino): _63.QueryIncentivizedPacketsRequest;
                    toAmino(message: _63.QueryIncentivizedPacketsRequest): _63.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketsRequestAminoMsg): _63.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _63.QueryIncentivizedPacketsRequest): _63.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketsRequestProtoMsg): _63.QueryIncentivizedPacketsRequest;
                    toProto(message: _63.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketsRequest): _63.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketsResponse>): _63.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _63.QueryIncentivizedPacketsResponseAmino): _63.QueryIncentivizedPacketsResponse;
                    toAmino(message: _63.QueryIncentivizedPacketsResponse): _63.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketsResponseAminoMsg): _63.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _63.QueryIncentivizedPacketsResponse): _63.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketsResponseProtoMsg): _63.QueryIncentivizedPacketsResponse;
                    toProto(message: _63.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketsResponse): _63.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketRequest>): _63.QueryIncentivizedPacketRequest;
                    fromAmino(object: _63.QueryIncentivizedPacketRequestAmino): _63.QueryIncentivizedPacketRequest;
                    toAmino(message: _63.QueryIncentivizedPacketRequest): _63.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketRequestAminoMsg): _63.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _63.QueryIncentivizedPacketRequest): _63.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketRequestProtoMsg): _63.QueryIncentivizedPacketRequest;
                    toProto(message: _63.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketRequest): _63.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketResponse>): _63.QueryIncentivizedPacketResponse;
                    fromAmino(object: _63.QueryIncentivizedPacketResponseAmino): _63.QueryIncentivizedPacketResponse;
                    toAmino(message: _63.QueryIncentivizedPacketResponse): _63.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketResponseAminoMsg): _63.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _63.QueryIncentivizedPacketResponse): _63.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketResponseProtoMsg): _63.QueryIncentivizedPacketResponse;
                    toProto(message: _63.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketResponse): _63.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketsForChannelRequest>): _63.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _63.QueryIncentivizedPacketsForChannelRequestAmino): _63.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _63.QueryIncentivizedPacketsForChannelRequest): _63.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketsForChannelRequestAminoMsg): _63.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _63.QueryIncentivizedPacketsForChannelRequest): _63.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketsForChannelRequestProtoMsg): _63.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _63.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketsForChannelRequest): _63.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_63.QueryIncentivizedPacketsForChannelResponse>): _63.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _63.QueryIncentivizedPacketsForChannelResponseAmino): _63.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _63.QueryIncentivizedPacketsForChannelResponse): _63.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _63.QueryIncentivizedPacketsForChannelResponseAminoMsg): _63.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _63.QueryIncentivizedPacketsForChannelResponse): _63.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryIncentivizedPacketsForChannelResponseProtoMsg): _63.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _63.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryIncentivizedPacketsForChannelResponse): _63.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_63.QueryTotalRecvFeesRequest>): _63.QueryTotalRecvFeesRequest;
                    fromAmino(object: _63.QueryTotalRecvFeesRequestAmino): _63.QueryTotalRecvFeesRequest;
                    toAmino(message: _63.QueryTotalRecvFeesRequest): _63.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _63.QueryTotalRecvFeesRequestAminoMsg): _63.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _63.QueryTotalRecvFeesRequest): _63.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalRecvFeesRequestProtoMsg): _63.QueryTotalRecvFeesRequest;
                    toProto(message: _63.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalRecvFeesRequest): _63.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_63.QueryTotalRecvFeesResponse>): _63.QueryTotalRecvFeesResponse;
                    fromAmino(object: _63.QueryTotalRecvFeesResponseAmino): _63.QueryTotalRecvFeesResponse;
                    toAmino(message: _63.QueryTotalRecvFeesResponse): _63.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _63.QueryTotalRecvFeesResponseAminoMsg): _63.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _63.QueryTotalRecvFeesResponse): _63.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalRecvFeesResponseProtoMsg): _63.QueryTotalRecvFeesResponse;
                    toProto(message: _63.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalRecvFeesResponse): _63.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_63.QueryTotalAckFeesRequest>): _63.QueryTotalAckFeesRequest;
                    fromAmino(object: _63.QueryTotalAckFeesRequestAmino): _63.QueryTotalAckFeesRequest;
                    toAmino(message: _63.QueryTotalAckFeesRequest): _63.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _63.QueryTotalAckFeesRequestAminoMsg): _63.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _63.QueryTotalAckFeesRequest): _63.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalAckFeesRequestProtoMsg): _63.QueryTotalAckFeesRequest;
                    toProto(message: _63.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalAckFeesRequest): _63.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_63.QueryTotalAckFeesResponse>): _63.QueryTotalAckFeesResponse;
                    fromAmino(object: _63.QueryTotalAckFeesResponseAmino): _63.QueryTotalAckFeesResponse;
                    toAmino(message: _63.QueryTotalAckFeesResponse): _63.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _63.QueryTotalAckFeesResponseAminoMsg): _63.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _63.QueryTotalAckFeesResponse): _63.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalAckFeesResponseProtoMsg): _63.QueryTotalAckFeesResponse;
                    toProto(message: _63.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalAckFeesResponse): _63.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_63.QueryTotalTimeoutFeesRequest>): _63.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _63.QueryTotalTimeoutFeesRequestAmino): _63.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _63.QueryTotalTimeoutFeesRequest): _63.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _63.QueryTotalTimeoutFeesRequestAminoMsg): _63.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _63.QueryTotalTimeoutFeesRequest): _63.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalTimeoutFeesRequestProtoMsg): _63.QueryTotalTimeoutFeesRequest;
                    toProto(message: _63.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalTimeoutFeesRequest): _63.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_63.QueryTotalTimeoutFeesResponse>): _63.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _63.QueryTotalTimeoutFeesResponseAmino): _63.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _63.QueryTotalTimeoutFeesResponse): _63.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _63.QueryTotalTimeoutFeesResponseAminoMsg): _63.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _63.QueryTotalTimeoutFeesResponse): _63.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryTotalTimeoutFeesResponseProtoMsg): _63.QueryTotalTimeoutFeesResponse;
                    toProto(message: _63.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryTotalTimeoutFeesResponse): _63.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPayeeRequest;
                    fromPartial(object: Partial<_63.QueryPayeeRequest>): _63.QueryPayeeRequest;
                    fromAmino(object: _63.QueryPayeeRequestAmino): _63.QueryPayeeRequest;
                    toAmino(message: _63.QueryPayeeRequest): _63.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _63.QueryPayeeRequestAminoMsg): _63.QueryPayeeRequest;
                    toAminoMsg(message: _63.QueryPayeeRequest): _63.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryPayeeRequestProtoMsg): _63.QueryPayeeRequest;
                    toProto(message: _63.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryPayeeRequest): _63.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryPayeeResponse;
                    fromPartial(object: Partial<_63.QueryPayeeResponse>): _63.QueryPayeeResponse;
                    fromAmino(object: _63.QueryPayeeResponseAmino): _63.QueryPayeeResponse;
                    toAmino(message: _63.QueryPayeeResponse): _63.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _63.QueryPayeeResponseAminoMsg): _63.QueryPayeeResponse;
                    toAminoMsg(message: _63.QueryPayeeResponse): _63.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryPayeeResponseProtoMsg): _63.QueryPayeeResponse;
                    toProto(message: _63.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryPayeeResponse): _63.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_63.QueryCounterpartyPayeeRequest>): _63.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _63.QueryCounterpartyPayeeRequestAmino): _63.QueryCounterpartyPayeeRequest;
                    toAmino(message: _63.QueryCounterpartyPayeeRequest): _63.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _63.QueryCounterpartyPayeeRequestAminoMsg): _63.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _63.QueryCounterpartyPayeeRequest): _63.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryCounterpartyPayeeRequestProtoMsg): _63.QueryCounterpartyPayeeRequest;
                    toProto(message: _63.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryCounterpartyPayeeRequest): _63.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_63.QueryCounterpartyPayeeResponse>): _63.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _63.QueryCounterpartyPayeeResponseAmino): _63.QueryCounterpartyPayeeResponse;
                    toAmino(message: _63.QueryCounterpartyPayeeResponse): _63.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _63.QueryCounterpartyPayeeResponseAminoMsg): _63.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _63.QueryCounterpartyPayeeResponse): _63.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryCounterpartyPayeeResponseProtoMsg): _63.QueryCounterpartyPayeeResponse;
                    toProto(message: _63.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryCounterpartyPayeeResponse): _63.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_63.QueryFeeEnabledChannelsRequest>): _63.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _63.QueryFeeEnabledChannelsRequestAmino): _63.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _63.QueryFeeEnabledChannelsRequest): _63.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _63.QueryFeeEnabledChannelsRequestAminoMsg): _63.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _63.QueryFeeEnabledChannelsRequest): _63.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryFeeEnabledChannelsRequestProtoMsg): _63.QueryFeeEnabledChannelsRequest;
                    toProto(message: _63.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryFeeEnabledChannelsRequest): _63.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_63.QueryFeeEnabledChannelsResponse>): _63.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _63.QueryFeeEnabledChannelsResponseAmino): _63.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _63.QueryFeeEnabledChannelsResponse): _63.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _63.QueryFeeEnabledChannelsResponseAminoMsg): _63.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _63.QueryFeeEnabledChannelsResponse): _63.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryFeeEnabledChannelsResponseProtoMsg): _63.QueryFeeEnabledChannelsResponse;
                    toProto(message: _63.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryFeeEnabledChannelsResponse): _63.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _63.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_63.QueryFeeEnabledChannelRequest>): _63.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _63.QueryFeeEnabledChannelRequestAmino): _63.QueryFeeEnabledChannelRequest;
                    toAmino(message: _63.QueryFeeEnabledChannelRequest): _63.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _63.QueryFeeEnabledChannelRequestAminoMsg): _63.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _63.QueryFeeEnabledChannelRequest): _63.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryFeeEnabledChannelRequestProtoMsg): _63.QueryFeeEnabledChannelRequest;
                    toProto(message: _63.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryFeeEnabledChannelRequest): _63.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _63.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_63.QueryFeeEnabledChannelResponse>): _63.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _63.QueryFeeEnabledChannelResponseAmino): _63.QueryFeeEnabledChannelResponse;
                    toAmino(message: _63.QueryFeeEnabledChannelResponse): _63.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _63.QueryFeeEnabledChannelResponseAminoMsg): _63.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _63.QueryFeeEnabledChannelResponse): _63.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryFeeEnabledChannelResponseProtoMsg): _63.QueryFeeEnabledChannelResponse;
                    toProto(message: _63.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryFeeEnabledChannelResponse): _63.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _62.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Metadata;
                    fromPartial(object: Partial<_62.Metadata>): _62.Metadata;
                    fromAmino(object: _62.MetadataAmino): _62.Metadata;
                    toAmino(message: _62.Metadata): _62.MetadataAmino;
                    fromAminoMsg(object: _62.MetadataAminoMsg): _62.Metadata;
                    toAminoMsg(message: _62.Metadata): _62.MetadataAminoMsg;
                    fromProtoMsg(message: _62.MetadataProtoMsg): _62.Metadata;
                    toProto(message: _62.Metadata): Uint8Array;
                    toProtoMsg(message: _62.Metadata): _62.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                    fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
                    fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                    toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                    fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                    toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                    fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                    toProto(message: _61.GenesisState): Uint8Array;
                    toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _61.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.FeeEnabledChannel;
                    fromPartial(object: Partial<_61.FeeEnabledChannel>): _61.FeeEnabledChannel;
                    fromAmino(object: _61.FeeEnabledChannelAmino): _61.FeeEnabledChannel;
                    toAmino(message: _61.FeeEnabledChannel): _61.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _61.FeeEnabledChannelAminoMsg): _61.FeeEnabledChannel;
                    toAminoMsg(message: _61.FeeEnabledChannel): _61.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _61.FeeEnabledChannelProtoMsg): _61.FeeEnabledChannel;
                    toProto(message: _61.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _61.FeeEnabledChannel): _61.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _61.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.RegisteredPayee;
                    fromPartial(object: Partial<_61.RegisteredPayee>): _61.RegisteredPayee;
                    fromAmino(object: _61.RegisteredPayeeAmino): _61.RegisteredPayee;
                    toAmino(message: _61.RegisteredPayee): _61.RegisteredPayeeAmino;
                    fromAminoMsg(object: _61.RegisteredPayeeAminoMsg): _61.RegisteredPayee;
                    toAminoMsg(message: _61.RegisteredPayee): _61.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _61.RegisteredPayeeProtoMsg): _61.RegisteredPayee;
                    toProto(message: _61.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _61.RegisteredPayee): _61.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _61.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_61.RegisteredCounterpartyPayee>): _61.RegisteredCounterpartyPayee;
                    fromAmino(object: _61.RegisteredCounterpartyPayeeAmino): _61.RegisteredCounterpartyPayee;
                    toAmino(message: _61.RegisteredCounterpartyPayee): _61.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _61.RegisteredCounterpartyPayeeAminoMsg): _61.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _61.RegisteredCounterpartyPayee): _61.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _61.RegisteredCounterpartyPayeeProtoMsg): _61.RegisteredCounterpartyPayee;
                    toProto(message: _61.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _61.RegisteredCounterpartyPayee): _61.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _61.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ForwardRelayerAddress;
                    fromPartial(object: Partial<_61.ForwardRelayerAddress>): _61.ForwardRelayerAddress;
                    fromAmino(object: _61.ForwardRelayerAddressAmino): _61.ForwardRelayerAddress;
                    toAmino(message: _61.ForwardRelayerAddress): _61.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _61.ForwardRelayerAddressAminoMsg): _61.ForwardRelayerAddress;
                    toAminoMsg(message: _61.ForwardRelayerAddress): _61.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _61.ForwardRelayerAddressProtoMsg): _61.ForwardRelayerAddress;
                    toProto(message: _61.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _61.ForwardRelayerAddress): _61.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _60.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Fee;
                    fromPartial(object: Partial<_60.Fee>): _60.Fee;
                    fromAmino(object: _60.FeeAmino): _60.Fee;
                    toAmino(message: _60.Fee): _60.FeeAmino;
                    fromAminoMsg(object: _60.FeeAminoMsg): _60.Fee;
                    toAminoMsg(message: _60.Fee): _60.FeeAminoMsg;
                    fromProtoMsg(message: _60.FeeProtoMsg): _60.Fee;
                    toProto(message: _60.Fee): Uint8Array;
                    toProtoMsg(message: _60.Fee): _60.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _60.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PacketFee;
                    fromPartial(object: Partial<_60.PacketFee>): _60.PacketFee;
                    fromAmino(object: _60.PacketFeeAmino): _60.PacketFee;
                    toAmino(message: _60.PacketFee): _60.PacketFeeAmino;
                    fromAminoMsg(object: _60.PacketFeeAminoMsg): _60.PacketFee;
                    toAminoMsg(message: _60.PacketFee): _60.PacketFeeAminoMsg;
                    fromProtoMsg(message: _60.PacketFeeProtoMsg): _60.PacketFee;
                    toProto(message: _60.PacketFee): Uint8Array;
                    toProtoMsg(message: _60.PacketFee): _60.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _60.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PacketFees;
                    fromPartial(object: Partial<_60.PacketFees>): _60.PacketFees;
                    fromAmino(object: _60.PacketFeesAmino): _60.PacketFees;
                    toAmino(message: _60.PacketFees): _60.PacketFeesAmino;
                    fromAminoMsg(object: _60.PacketFeesAminoMsg): _60.PacketFees;
                    toAminoMsg(message: _60.PacketFees): _60.PacketFeesAminoMsg;
                    fromProtoMsg(message: _60.PacketFeesProtoMsg): _60.PacketFees;
                    toProto(message: _60.PacketFees): Uint8Array;
                    toProtoMsg(message: _60.PacketFees): _60.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _60.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.IdentifiedPacketFees;
                    fromPartial(object: Partial<_60.IdentifiedPacketFees>): _60.IdentifiedPacketFees;
                    fromAmino(object: _60.IdentifiedPacketFeesAmino): _60.IdentifiedPacketFees;
                    toAmino(message: _60.IdentifiedPacketFees): _60.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _60.IdentifiedPacketFeesAminoMsg): _60.IdentifiedPacketFees;
                    toAminoMsg(message: _60.IdentifiedPacketFees): _60.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _60.IdentifiedPacketFeesProtoMsg): _60.IdentifiedPacketFees;
                    toProto(message: _60.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _60.IdentifiedPacketFees): _60.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _59.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_59.IncentivizedAcknowledgement>): _59.IncentivizedAcknowledgement;
                    fromAmino(object: _59.IncentivizedAcknowledgementAmino): _59.IncentivizedAcknowledgement;
                    toAmino(message: _59.IncentivizedAcknowledgement): _59.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _59.IncentivizedAcknowledgementAminoMsg): _59.IncentivizedAcknowledgement;
                    toAminoMsg(message: _59.IncentivizedAcknowledgement): _59.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _59.IncentivizedAcknowledgementProtoMsg): _59.IncentivizedAcknowledgement;
                    toProto(message: _59.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _59.IncentivizedAcknowledgement): _59.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _251.MsgClientImpl;
                    QueryClientImpl: typeof _244.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _66.QueryInterchainAccountRequest): Promise<_66.QueryInterchainAccountResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _237.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _67.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: _67.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _67.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: _67.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _67.MsgRegisterInterchainAccount) => _67.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _67.MsgRegisterInterchainAccountAmino) => _67.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _67.MsgSendTx) => _67.MsgSendTxAmino;
                            fromAmino: (object: _67.MsgSendTxAmino) => _67.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _67.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_67.MsgRegisterInterchainAccount>): _67.MsgRegisterInterchainAccount;
                        fromAmino(object: _67.MsgRegisterInterchainAccountAmino): _67.MsgRegisterInterchainAccount;
                        toAmino(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _67.MsgRegisterInterchainAccountAminoMsg): _67.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _67.MsgRegisterInterchainAccountProtoMsg): _67.MsgRegisterInterchainAccount;
                        toProto(message: _67.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _67.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_67.MsgRegisterInterchainAccountResponse>): _67.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _67.MsgRegisterInterchainAccountResponseAmino): _67.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _67.MsgRegisterInterchainAccountResponseAminoMsg): _67.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _67.MsgRegisterInterchainAccountResponseProtoMsg): _67.MsgRegisterInterchainAccountResponse;
                        toProto(message: _67.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _67.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSendTx;
                        fromPartial(object: Partial<_67.MsgSendTx>): _67.MsgSendTx;
                        fromAmino(object: _67.MsgSendTxAmino): _67.MsgSendTx;
                        toAmino(message: _67.MsgSendTx): _67.MsgSendTxAmino;
                        fromAminoMsg(object: _67.MsgSendTxAminoMsg): _67.MsgSendTx;
                        toAminoMsg(message: _67.MsgSendTx): _67.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _67.MsgSendTxProtoMsg): _67.MsgSendTx;
                        toProto(message: _67.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _67.MsgSendTx): _67.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _67.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSendTxResponse;
                        fromPartial(object: Partial<_67.MsgSendTxResponse>): _67.MsgSendTxResponse;
                        fromAmino(object: _67.MsgSendTxResponseAmino): _67.MsgSendTxResponse;
                        toAmino(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _67.MsgSendTxResponseAminoMsg): _67.MsgSendTxResponse;
                        toAminoMsg(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _67.MsgSendTxResponseProtoMsg): _67.MsgSendTxResponse;
                        toProto(message: _67.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _66.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_66.QueryInterchainAccountRequest>): _66.QueryInterchainAccountRequest;
                        fromAmino(object: _66.QueryInterchainAccountRequestAmino): _66.QueryInterchainAccountRequest;
                        toAmino(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _66.QueryInterchainAccountRequestAminoMsg): _66.QueryInterchainAccountRequest;
                        toAminoMsg(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _66.QueryInterchainAccountRequestProtoMsg): _66.QueryInterchainAccountRequest;
                        toProto(message: _66.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _66.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_66.QueryInterchainAccountResponse>): _66.QueryInterchainAccountResponse;
                        fromAmino(object: _66.QueryInterchainAccountResponseAmino): _66.QueryInterchainAccountResponse;
                        toAmino(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _66.QueryInterchainAccountResponseAminoMsg): _66.QueryInterchainAccountResponse;
                        toAminoMsg(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _66.QueryInterchainAccountResponseProtoMsg): _66.QueryInterchainAccountResponse;
                        toProto(message: _66.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                        fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                        fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                        toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                        fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                        toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                        toProto(message: _66.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                        fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                        fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                        toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                        fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                        toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                        toProto(message: _66.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                        fromPartial(object: Partial<_65.Params>): _65.Params;
                        fromAmino(object: _65.ParamsAmino): _65.Params;
                        toAmino(message: _65.Params): _65.ParamsAmino;
                        fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                        toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                        fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                        toProto(message: _65.Params): Uint8Array;
                        toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
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
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _68.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ControllerGenesisState;
                        fromPartial(object: Partial<_68.ControllerGenesisState>): _68.ControllerGenesisState;
                        fromAmino(object: _68.ControllerGenesisStateAmino): _68.ControllerGenesisState;
                        toAmino(message: _68.ControllerGenesisState): _68.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _68.ControllerGenesisStateAminoMsg): _68.ControllerGenesisState;
                        toAminoMsg(message: _68.ControllerGenesisState): _68.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _68.ControllerGenesisStateProtoMsg): _68.ControllerGenesisState;
                        toProto(message: _68.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _68.ControllerGenesisState): _68.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _68.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.HostGenesisState;
                        fromPartial(object: Partial<_68.HostGenesisState>): _68.HostGenesisState;
                        fromAmino(object: _68.HostGenesisStateAmino): _68.HostGenesisState;
                        toAmino(message: _68.HostGenesisState): _68.HostGenesisStateAmino;
                        fromAminoMsg(object: _68.HostGenesisStateAminoMsg): _68.HostGenesisState;
                        toAminoMsg(message: _68.HostGenesisState): _68.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _68.HostGenesisStateProtoMsg): _68.HostGenesisState;
                        toProto(message: _68.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _68.HostGenesisState): _68.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _68.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ActiveChannel;
                        fromPartial(object: Partial<_68.ActiveChannel>): _68.ActiveChannel;
                        fromAmino(object: _68.ActiveChannelAmino): _68.ActiveChannel;
                        toAmino(message: _68.ActiveChannel): _68.ActiveChannelAmino;
                        fromAminoMsg(object: _68.ActiveChannelAminoMsg): _68.ActiveChannel;
                        toAminoMsg(message: _68.ActiveChannel): _68.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _68.ActiveChannelProtoMsg): _68.ActiveChannel;
                        toProto(message: _68.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _68.ActiveChannel): _68.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _68.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_68.RegisteredInterchainAccount>): _68.RegisteredInterchainAccount;
                        fromAmino(object: _68.RegisteredInterchainAccountAmino): _68.RegisteredInterchainAccount;
                        toAmino(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _68.RegisteredInterchainAccountAminoMsg): _68.RegisteredInterchainAccount;
                        toAminoMsg(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _68.RegisteredInterchainAccountProtoMsg): _68.RegisteredInterchainAccount;
                        toProto(message: _68.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _245.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _238.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsRequest;
                        fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
                        fromAmino(_: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                        toAmino(_: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
                        fromAminoMsg(object: _70.QueryParamsRequestAminoMsg): _70.QueryParamsRequest;
                        toAminoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
                        toProto(message: _70.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsResponse;
                        fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
                        fromAmino(object: _70.QueryParamsResponseAmino): _70.QueryParamsResponse;
                        toAmino(message: _70.QueryParamsResponse): _70.QueryParamsResponseAmino;
                        fromAminoMsg(object: _70.QueryParamsResponseAminoMsg): _70.QueryParamsResponse;
                        toAminoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
                        toProto(message: _70.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                        fromPartial(object: Partial<_69.Params>): _69.Params;
                        fromAmino(object: _69.ParamsAmino): _69.Params;
                        toAmino(message: _69.Params): _69.ParamsAmino;
                        fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                        toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                        fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                        toProto(message: _69.Params): Uint8Array;
                        toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _73.Type;
                typeToJSON(object: _73.Type): string;
                Type: typeof _73.Type;
                TypeSDKType: typeof _73.Type;
                TypeAmino: typeof _73.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _73.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.InterchainAccountPacketData;
                    fromPartial(object: Partial<_73.InterchainAccountPacketData>): _73.InterchainAccountPacketData;
                    fromAmino(object: _73.InterchainAccountPacketDataAmino): _73.InterchainAccountPacketData;
                    toAmino(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _73.InterchainAccountPacketDataAminoMsg): _73.InterchainAccountPacketData;
                    toAminoMsg(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _73.InterchainAccountPacketDataProtoMsg): _73.InterchainAccountPacketData;
                    toProto(message: _73.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _73.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CosmosTx;
                    fromPartial(object: Partial<_73.CosmosTx>): _73.CosmosTx;
                    fromAmino(object: _73.CosmosTxAmino): _73.CosmosTx;
                    toAmino(message: _73.CosmosTx): _73.CosmosTxAmino;
                    fromAminoMsg(object: _73.CosmosTxAminoMsg): _73.CosmosTx;
                    toAminoMsg(message: _73.CosmosTx): _73.CosmosTxAminoMsg;
                    fromProtoMsg(message: _73.CosmosTxProtoMsg): _73.CosmosTx;
                    toProto(message: _73.CosmosTx): Uint8Array;
                    toProtoMsg(message: _73.CosmosTx): _73.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _72.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Metadata;
                    fromPartial(object: Partial<_72.Metadata>): _72.Metadata;
                    fromAmino(object: _72.MetadataAmino): _72.Metadata;
                    toAmino(message: _72.Metadata): _72.MetadataAmino;
                    fromAminoMsg(object: _72.MetadataAminoMsg): _72.Metadata;
                    toAminoMsg(message: _72.Metadata): _72.MetadataAminoMsg;
                    fromProtoMsg(message: _72.MetadataProtoMsg): _72.Metadata;
                    toProto(message: _72.Metadata): Uint8Array;
                    toProtoMsg(message: _72.Metadata): _72.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _71.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InterchainAccount;
                    fromPartial(object: Partial<_71.InterchainAccount>): _71.InterchainAccount;
                    fromAmino(object: _71.InterchainAccountAmino): _71.InterchainAccount;
                    toAmino(message: _71.InterchainAccount): _71.InterchainAccountAmino;
                    fromAminoMsg(object: _71.InterchainAccountAminoMsg): _71.InterchainAccount;
                    toAminoMsg(message: _71.InterchainAccount): _71.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _71.InterchainAccountProtoMsg): _71.InterchainAccount;
                    toProto(message: _71.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _71.InterchainAccount): _71.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _252.MsgClientImpl;
                QueryClientImpl: typeof _246.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _76.QueryDenomTraceRequest): Promise<_76.QueryDenomTraceResponse>;
                    denomTraces(request?: _76.QueryDenomTracesRequest): Promise<_76.QueryDenomTracesResponse>;
                    params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                    denomHash(request: _76.QueryDenomHashRequest): Promise<_76.QueryDenomHashResponse>;
                    escrowAddress(request: _76.QueryEscrowAddressRequest): Promise<_76.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _239.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _78.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _78.MsgTransfer): {
                            typeUrl: string;
                            value: _78.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _78.MsgTransfer): {
                            typeUrl: string;
                            value: _78.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _78.MsgTransfer) => _78.MsgTransferAmino;
                        fromAmino: (object: _78.MsgTransferAmino) => _78.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _78.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTransfer;
                    fromPartial(object: Partial<_78.MsgTransfer>): _78.MsgTransfer;
                    fromAmino(object: _78.MsgTransferAmino): _78.MsgTransfer;
                    toAmino(message: _78.MsgTransfer): _78.MsgTransferAmino;
                    fromAminoMsg(object: _78.MsgTransferAminoMsg): _78.MsgTransfer;
                    toAminoMsg(message: _78.MsgTransfer): _78.MsgTransferAminoMsg;
                    fromProtoMsg(message: _78.MsgTransferProtoMsg): _78.MsgTransfer;
                    toProto(message: _78.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _78.MsgTransfer): _78.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _78.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTransferResponse;
                    fromPartial(object: Partial<_78.MsgTransferResponse>): _78.MsgTransferResponse;
                    fromAmino(object: _78.MsgTransferResponseAmino): _78.MsgTransferResponse;
                    toAmino(message: _78.MsgTransferResponse): _78.MsgTransferResponseAmino;
                    fromAminoMsg(object: _78.MsgTransferResponseAminoMsg): _78.MsgTransferResponse;
                    toAminoMsg(message: _78.MsgTransferResponse): _78.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _78.MsgTransferResponseProtoMsg): _78.MsgTransferResponse;
                    toProto(message: _78.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _78.MsgTransferResponse): _78.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _77.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.DenomTrace;
                    fromPartial(object: Partial<_77.DenomTrace>): _77.DenomTrace;
                    fromAmino(object: _77.DenomTraceAmino): _77.DenomTrace;
                    toAmino(message: _77.DenomTrace): _77.DenomTraceAmino;
                    fromAminoMsg(object: _77.DenomTraceAminoMsg): _77.DenomTrace;
                    toAminoMsg(message: _77.DenomTrace): _77.DenomTraceAminoMsg;
                    fromProtoMsg(message: _77.DenomTraceProtoMsg): _77.DenomTrace;
                    toProto(message: _77.DenomTrace): Uint8Array;
                    toProtoMsg(message: _77.DenomTrace): _77.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                    fromPartial(object: Partial<_77.Params>): _77.Params;
                    fromAmino(object: _77.ParamsAmino): _77.Params;
                    toAmino(message: _77.Params): _77.ParamsAmino;
                    fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                    toAminoMsg(message: _77.Params): _77.ParamsAminoMsg;
                    fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                    toProto(message: _77.Params): Uint8Array;
                    toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_76.QueryDenomTraceRequest>): _76.QueryDenomTraceRequest;
                    fromAmino(object: _76.QueryDenomTraceRequestAmino): _76.QueryDenomTraceRequest;
                    toAmino(message: _76.QueryDenomTraceRequest): _76.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _76.QueryDenomTraceRequestAminoMsg): _76.QueryDenomTraceRequest;
                    toAminoMsg(message: _76.QueryDenomTraceRequest): _76.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomTraceRequestProtoMsg): _76.QueryDenomTraceRequest;
                    toProto(message: _76.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomTraceRequest): _76.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_76.QueryDenomTraceResponse>): _76.QueryDenomTraceResponse;
                    fromAmino(object: _76.QueryDenomTraceResponseAmino): _76.QueryDenomTraceResponse;
                    toAmino(message: _76.QueryDenomTraceResponse): _76.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _76.QueryDenomTraceResponseAminoMsg): _76.QueryDenomTraceResponse;
                    toAminoMsg(message: _76.QueryDenomTraceResponse): _76.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomTraceResponseProtoMsg): _76.QueryDenomTraceResponse;
                    toProto(message: _76.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomTraceResponse): _76.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_76.QueryDenomTracesRequest>): _76.QueryDenomTracesRequest;
                    fromAmino(object: _76.QueryDenomTracesRequestAmino): _76.QueryDenomTracesRequest;
                    toAmino(message: _76.QueryDenomTracesRequest): _76.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _76.QueryDenomTracesRequestAminoMsg): _76.QueryDenomTracesRequest;
                    toAminoMsg(message: _76.QueryDenomTracesRequest): _76.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomTracesRequestProtoMsg): _76.QueryDenomTracesRequest;
                    toProto(message: _76.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomTracesRequest): _76.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_76.QueryDenomTracesResponse>): _76.QueryDenomTracesResponse;
                    fromAmino(object: _76.QueryDenomTracesResponseAmino): _76.QueryDenomTracesResponse;
                    toAmino(message: _76.QueryDenomTracesResponse): _76.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _76.QueryDenomTracesResponseAminoMsg): _76.QueryDenomTracesResponse;
                    toAminoMsg(message: _76.QueryDenomTracesResponse): _76.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomTracesResponseProtoMsg): _76.QueryDenomTracesResponse;
                    toProto(message: _76.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomTracesResponse): _76.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsRequest;
                    fromPartial(_: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                    fromAmino(_: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                    toAmino(_: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                    fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                    toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                    toProto(message: _76.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsResponse;
                    fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                    fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                    toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                    fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                    toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                    toProto(message: _76.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomHashRequest;
                    fromPartial(object: Partial<_76.QueryDenomHashRequest>): _76.QueryDenomHashRequest;
                    fromAmino(object: _76.QueryDenomHashRequestAmino): _76.QueryDenomHashRequest;
                    toAmino(message: _76.QueryDenomHashRequest): _76.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _76.QueryDenomHashRequestAminoMsg): _76.QueryDenomHashRequest;
                    toAminoMsg(message: _76.QueryDenomHashRequest): _76.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomHashRequestProtoMsg): _76.QueryDenomHashRequest;
                    toProto(message: _76.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomHashRequest): _76.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDenomHashResponse;
                    fromPartial(object: Partial<_76.QueryDenomHashResponse>): _76.QueryDenomHashResponse;
                    fromAmino(object: _76.QueryDenomHashResponseAmino): _76.QueryDenomHashResponse;
                    toAmino(message: _76.QueryDenomHashResponse): _76.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _76.QueryDenomHashResponseAminoMsg): _76.QueryDenomHashResponse;
                    toAminoMsg(message: _76.QueryDenomHashResponse): _76.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryDenomHashResponseProtoMsg): _76.QueryDenomHashResponse;
                    toProto(message: _76.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryDenomHashResponse): _76.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_76.QueryEscrowAddressRequest>): _76.QueryEscrowAddressRequest;
                    fromAmino(object: _76.QueryEscrowAddressRequestAmino): _76.QueryEscrowAddressRequest;
                    toAmino(message: _76.QueryEscrowAddressRequest): _76.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _76.QueryEscrowAddressRequestAminoMsg): _76.QueryEscrowAddressRequest;
                    toAminoMsg(message: _76.QueryEscrowAddressRequest): _76.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryEscrowAddressRequestProtoMsg): _76.QueryEscrowAddressRequest;
                    toProto(message: _76.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryEscrowAddressRequest): _76.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_76.QueryEscrowAddressResponse>): _76.QueryEscrowAddressResponse;
                    fromAmino(object: _76.QueryEscrowAddressResponseAmino): _76.QueryEscrowAddressResponse;
                    toAmino(message: _76.QueryEscrowAddressResponse): _76.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _76.QueryEscrowAddressResponseAminoMsg): _76.QueryEscrowAddressResponse;
                    toAminoMsg(message: _76.QueryEscrowAddressResponse): _76.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryEscrowAddressResponseProtoMsg): _76.QueryEscrowAddressResponse;
                    toProto(message: _76.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryEscrowAddressResponse): _76.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                    fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                    fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                    toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                    fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                    toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                    fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                    toProto(message: _75.GenesisState): Uint8Array;
                    toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _74.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Allocation;
                    fromPartial(object: Partial<_74.Allocation>): _74.Allocation;
                    fromAmino(object: _74.AllocationAmino): _74.Allocation;
                    toAmino(message: _74.Allocation): _74.AllocationAmino;
                    fromAminoMsg(object: _74.AllocationAminoMsg): _74.Allocation;
                    toAminoMsg(message: _74.Allocation): _74.AllocationAminoMsg;
                    fromProtoMsg(message: _74.AllocationProtoMsg): _74.Allocation;
                    toProto(message: _74.Allocation): Uint8Array;
                    toProtoMsg(message: _74.Allocation): _74.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _74.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TransferAuthorization;
                    fromPartial(object: Partial<_74.TransferAuthorization>): _74.TransferAuthorization;
                    fromAmino(object: _74.TransferAuthorizationAmino): _74.TransferAuthorization;
                    toAmino(message: _74.TransferAuthorization): _74.TransferAuthorizationAmino;
                    fromAminoMsg(object: _74.TransferAuthorizationAminoMsg): _74.TransferAuthorization;
                    toAminoMsg(message: _74.TransferAuthorization): _74.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _74.TransferAuthorizationProtoMsg): _74.TransferAuthorization;
                    toProto(message: _74.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _74.TransferAuthorization): _74.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _79.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.FungibleTokenPacketData;
                    fromPartial(object: Partial<_79.FungibleTokenPacketData>): _79.FungibleTokenPacketData;
                    fromAmino(object: _79.FungibleTokenPacketDataAmino): _79.FungibleTokenPacketData;
                    toAmino(message: _79.FungibleTokenPacketData): _79.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _79.FungibleTokenPacketDataAminoMsg): _79.FungibleTokenPacketData;
                    toAminoMsg(message: _79.FungibleTokenPacketData): _79.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _79.FungibleTokenPacketDataProtoMsg): _79.FungibleTokenPacketData;
                    toProto(message: _79.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _79.FungibleTokenPacketData): _79.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _253.MsgClientImpl;
                QueryClientImpl: typeof _247.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _82.QueryChannelRequest): Promise<_82.QueryChannelResponse>;
                    channels(request?: _82.QueryChannelsRequest): Promise<_82.QueryChannelsResponse>;
                    connectionChannels(request: _82.QueryConnectionChannelsRequest): Promise<_82.QueryConnectionChannelsResponse>;
                    channelClientState(request: _82.QueryChannelClientStateRequest): Promise<_82.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _82.QueryChannelConsensusStateRequest): Promise<_82.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _82.QueryPacketCommitmentRequest): Promise<_82.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _82.QueryPacketCommitmentsRequest): Promise<_82.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _82.QueryPacketReceiptRequest): Promise<_82.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _82.QueryPacketAcknowledgementRequest): Promise<_82.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _82.QueryPacketAcknowledgementsRequest): Promise<_82.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _82.QueryUnreceivedPacketsRequest): Promise<_82.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _82.QueryUnreceivedAcksRequest): Promise<_82.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _82.QueryNextSequenceReceiveRequest): Promise<_82.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _240.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _83.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _83.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _83.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _83.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _83.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _83.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _83.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _83.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _83.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _83.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _83.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _83.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _83.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _83.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _83.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _83.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _83.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _83.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _83.MsgRecvPacket): {
                            typeUrl: string;
                            value: _83.MsgRecvPacket;
                        };
                        timeout(value: _83.MsgTimeout): {
                            typeUrl: string;
                            value: _83.MsgTimeout;
                        };
                        timeoutOnClose(value: _83.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _83.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _83.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _83.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _83.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _83.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _83.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _83.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _83.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _83.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _83.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _83.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _83.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _83.MsgRecvPacket): {
                            typeUrl: string;
                            value: _83.MsgRecvPacket;
                        };
                        timeout(value: _83.MsgTimeout): {
                            typeUrl: string;
                            value: _83.MsgTimeout;
                        };
                        timeoutOnClose(value: _83.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _83.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _83.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _83.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelOpenInit) => _83.MsgChannelOpenInitAmino;
                        fromAmino: (object: _83.MsgChannelOpenInitAmino) => _83.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelOpenTry) => _83.MsgChannelOpenTryAmino;
                        fromAmino: (object: _83.MsgChannelOpenTryAmino) => _83.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelOpenAck) => _83.MsgChannelOpenAckAmino;
                        fromAmino: (object: _83.MsgChannelOpenAckAmino) => _83.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelOpenConfirm) => _83.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _83.MsgChannelOpenConfirmAmino) => _83.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelCloseInit) => _83.MsgChannelCloseInitAmino;
                        fromAmino: (object: _83.MsgChannelCloseInitAmino) => _83.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _83.MsgChannelCloseConfirm) => _83.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _83.MsgChannelCloseConfirmAmino) => _83.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _83.MsgRecvPacket) => _83.MsgRecvPacketAmino;
                        fromAmino: (object: _83.MsgRecvPacketAmino) => _83.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _83.MsgTimeout) => _83.MsgTimeoutAmino;
                        fromAmino: (object: _83.MsgTimeoutAmino) => _83.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _83.MsgTimeoutOnClose) => _83.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _83.MsgTimeoutOnCloseAmino) => _83.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _83.MsgAcknowledgement) => _83.MsgAcknowledgementAmino;
                        fromAmino: (object: _83.MsgAcknowledgementAmino) => _83.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _83.ResponseResultType;
                responseResultTypeToJSON(object: _83.ResponseResultType): string;
                ResponseResultType: typeof _83.ResponseResultType;
                ResponseResultTypeSDKType: typeof _83.ResponseResultType;
                ResponseResultTypeAmino: typeof _83.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenInit;
                    fromPartial(object: Partial<_83.MsgChannelOpenInit>): _83.MsgChannelOpenInit;
                    fromAmino(object: _83.MsgChannelOpenInitAmino): _83.MsgChannelOpenInit;
                    toAmino(message: _83.MsgChannelOpenInit): _83.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenInitAminoMsg): _83.MsgChannelOpenInit;
                    toAminoMsg(message: _83.MsgChannelOpenInit): _83.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenInitProtoMsg): _83.MsgChannelOpenInit;
                    toProto(message: _83.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenInit): _83.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_83.MsgChannelOpenInitResponse>): _83.MsgChannelOpenInitResponse;
                    fromAmino(object: _83.MsgChannelOpenInitResponseAmino): _83.MsgChannelOpenInitResponse;
                    toAmino(message: _83.MsgChannelOpenInitResponse): _83.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenInitResponseAminoMsg): _83.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _83.MsgChannelOpenInitResponse): _83.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenInitResponseProtoMsg): _83.MsgChannelOpenInitResponse;
                    toProto(message: _83.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenInitResponse): _83.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenTry;
                    fromPartial(object: Partial<_83.MsgChannelOpenTry>): _83.MsgChannelOpenTry;
                    fromAmino(object: _83.MsgChannelOpenTryAmino): _83.MsgChannelOpenTry;
                    toAmino(message: _83.MsgChannelOpenTry): _83.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenTryAminoMsg): _83.MsgChannelOpenTry;
                    toAminoMsg(message: _83.MsgChannelOpenTry): _83.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenTryProtoMsg): _83.MsgChannelOpenTry;
                    toProto(message: _83.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenTry): _83.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_83.MsgChannelOpenTryResponse>): _83.MsgChannelOpenTryResponse;
                    fromAmino(object: _83.MsgChannelOpenTryResponseAmino): _83.MsgChannelOpenTryResponse;
                    toAmino(message: _83.MsgChannelOpenTryResponse): _83.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenTryResponseAminoMsg): _83.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _83.MsgChannelOpenTryResponse): _83.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenTryResponseProtoMsg): _83.MsgChannelOpenTryResponse;
                    toProto(message: _83.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenTryResponse): _83.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenAck;
                    fromPartial(object: Partial<_83.MsgChannelOpenAck>): _83.MsgChannelOpenAck;
                    fromAmino(object: _83.MsgChannelOpenAckAmino): _83.MsgChannelOpenAck;
                    toAmino(message: _83.MsgChannelOpenAck): _83.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenAckAminoMsg): _83.MsgChannelOpenAck;
                    toAminoMsg(message: _83.MsgChannelOpenAck): _83.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenAckProtoMsg): _83.MsgChannelOpenAck;
                    toProto(message: _83.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenAck): _83.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _83.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_83.MsgChannelOpenAckResponse>): _83.MsgChannelOpenAckResponse;
                    fromAmino(_: _83.MsgChannelOpenAckResponseAmino): _83.MsgChannelOpenAckResponse;
                    toAmino(_: _83.MsgChannelOpenAckResponse): _83.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenAckResponseAminoMsg): _83.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _83.MsgChannelOpenAckResponse): _83.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenAckResponseProtoMsg): _83.MsgChannelOpenAckResponse;
                    toProto(message: _83.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenAckResponse): _83.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_83.MsgChannelOpenConfirm>): _83.MsgChannelOpenConfirm;
                    fromAmino(object: _83.MsgChannelOpenConfirmAmino): _83.MsgChannelOpenConfirm;
                    toAmino(message: _83.MsgChannelOpenConfirm): _83.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenConfirmAminoMsg): _83.MsgChannelOpenConfirm;
                    toAminoMsg(message: _83.MsgChannelOpenConfirm): _83.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenConfirmProtoMsg): _83.MsgChannelOpenConfirm;
                    toProto(message: _83.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenConfirm): _83.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _83.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_83.MsgChannelOpenConfirmResponse>): _83.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _83.MsgChannelOpenConfirmResponseAmino): _83.MsgChannelOpenConfirmResponse;
                    toAmino(_: _83.MsgChannelOpenConfirmResponse): _83.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelOpenConfirmResponseAminoMsg): _83.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _83.MsgChannelOpenConfirmResponse): _83.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelOpenConfirmResponseProtoMsg): _83.MsgChannelOpenConfirmResponse;
                    toProto(message: _83.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelOpenConfirmResponse): _83.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelCloseInit;
                    fromPartial(object: Partial<_83.MsgChannelCloseInit>): _83.MsgChannelCloseInit;
                    fromAmino(object: _83.MsgChannelCloseInitAmino): _83.MsgChannelCloseInit;
                    toAmino(message: _83.MsgChannelCloseInit): _83.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _83.MsgChannelCloseInitAminoMsg): _83.MsgChannelCloseInit;
                    toAminoMsg(message: _83.MsgChannelCloseInit): _83.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelCloseInitProtoMsg): _83.MsgChannelCloseInit;
                    toProto(message: _83.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelCloseInit): _83.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _83.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_83.MsgChannelCloseInitResponse>): _83.MsgChannelCloseInitResponse;
                    fromAmino(_: _83.MsgChannelCloseInitResponseAmino): _83.MsgChannelCloseInitResponse;
                    toAmino(_: _83.MsgChannelCloseInitResponse): _83.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelCloseInitResponseAminoMsg): _83.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _83.MsgChannelCloseInitResponse): _83.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelCloseInitResponseProtoMsg): _83.MsgChannelCloseInitResponse;
                    toProto(message: _83.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelCloseInitResponse): _83.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _83.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_83.MsgChannelCloseConfirm>): _83.MsgChannelCloseConfirm;
                    fromAmino(object: _83.MsgChannelCloseConfirmAmino): _83.MsgChannelCloseConfirm;
                    toAmino(message: _83.MsgChannelCloseConfirm): _83.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _83.MsgChannelCloseConfirmAminoMsg): _83.MsgChannelCloseConfirm;
                    toAminoMsg(message: _83.MsgChannelCloseConfirm): _83.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelCloseConfirmProtoMsg): _83.MsgChannelCloseConfirm;
                    toProto(message: _83.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelCloseConfirm): _83.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _83.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_83.MsgChannelCloseConfirmResponse>): _83.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _83.MsgChannelCloseConfirmResponseAmino): _83.MsgChannelCloseConfirmResponse;
                    toAmino(_: _83.MsgChannelCloseConfirmResponse): _83.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _83.MsgChannelCloseConfirmResponseAminoMsg): _83.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _83.MsgChannelCloseConfirmResponse): _83.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgChannelCloseConfirmResponseProtoMsg): _83.MsgChannelCloseConfirmResponse;
                    toProto(message: _83.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgChannelCloseConfirmResponse): _83.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _83.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRecvPacket;
                    fromPartial(object: Partial<_83.MsgRecvPacket>): _83.MsgRecvPacket;
                    fromAmino(object: _83.MsgRecvPacketAmino): _83.MsgRecvPacket;
                    toAmino(message: _83.MsgRecvPacket): _83.MsgRecvPacketAmino;
                    fromAminoMsg(object: _83.MsgRecvPacketAminoMsg): _83.MsgRecvPacket;
                    toAminoMsg(message: _83.MsgRecvPacket): _83.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _83.MsgRecvPacketProtoMsg): _83.MsgRecvPacket;
                    toProto(message: _83.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _83.MsgRecvPacket): _83.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_83.MsgRecvPacketResponse>): _83.MsgRecvPacketResponse;
                    fromAmino(object: _83.MsgRecvPacketResponseAmino): _83.MsgRecvPacketResponse;
                    toAmino(message: _83.MsgRecvPacketResponse): _83.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _83.MsgRecvPacketResponseAminoMsg): _83.MsgRecvPacketResponse;
                    toAminoMsg(message: _83.MsgRecvPacketResponse): _83.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgRecvPacketResponseProtoMsg): _83.MsgRecvPacketResponse;
                    toProto(message: _83.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgRecvPacketResponse): _83.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _83.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgTimeout;
                    fromPartial(object: Partial<_83.MsgTimeout>): _83.MsgTimeout;
                    fromAmino(object: _83.MsgTimeoutAmino): _83.MsgTimeout;
                    toAmino(message: _83.MsgTimeout): _83.MsgTimeoutAmino;
                    fromAminoMsg(object: _83.MsgTimeoutAminoMsg): _83.MsgTimeout;
                    toAminoMsg(message: _83.MsgTimeout): _83.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _83.MsgTimeoutProtoMsg): _83.MsgTimeout;
                    toProto(message: _83.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _83.MsgTimeout): _83.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgTimeoutResponse;
                    fromPartial(object: Partial<_83.MsgTimeoutResponse>): _83.MsgTimeoutResponse;
                    fromAmino(object: _83.MsgTimeoutResponseAmino): _83.MsgTimeoutResponse;
                    toAmino(message: _83.MsgTimeoutResponse): _83.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _83.MsgTimeoutResponseAminoMsg): _83.MsgTimeoutResponse;
                    toAminoMsg(message: _83.MsgTimeoutResponse): _83.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgTimeoutResponseProtoMsg): _83.MsgTimeoutResponse;
                    toProto(message: _83.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgTimeoutResponse): _83.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _83.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_83.MsgTimeoutOnClose>): _83.MsgTimeoutOnClose;
                    fromAmino(object: _83.MsgTimeoutOnCloseAmino): _83.MsgTimeoutOnClose;
                    toAmino(message: _83.MsgTimeoutOnClose): _83.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _83.MsgTimeoutOnCloseAminoMsg): _83.MsgTimeoutOnClose;
                    toAminoMsg(message: _83.MsgTimeoutOnClose): _83.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _83.MsgTimeoutOnCloseProtoMsg): _83.MsgTimeoutOnClose;
                    toProto(message: _83.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _83.MsgTimeoutOnClose): _83.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_83.MsgTimeoutOnCloseResponse>): _83.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _83.MsgTimeoutOnCloseResponseAmino): _83.MsgTimeoutOnCloseResponse;
                    toAmino(message: _83.MsgTimeoutOnCloseResponse): _83.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _83.MsgTimeoutOnCloseResponseAminoMsg): _83.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _83.MsgTimeoutOnCloseResponse): _83.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgTimeoutOnCloseResponseProtoMsg): _83.MsgTimeoutOnCloseResponse;
                    toProto(message: _83.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgTimeoutOnCloseResponse): _83.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _83.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgAcknowledgement;
                    fromPartial(object: Partial<_83.MsgAcknowledgement>): _83.MsgAcknowledgement;
                    fromAmino(object: _83.MsgAcknowledgementAmino): _83.MsgAcknowledgement;
                    toAmino(message: _83.MsgAcknowledgement): _83.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _83.MsgAcknowledgementAminoMsg): _83.MsgAcknowledgement;
                    toAminoMsg(message: _83.MsgAcknowledgement): _83.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _83.MsgAcknowledgementProtoMsg): _83.MsgAcknowledgement;
                    toProto(message: _83.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _83.MsgAcknowledgement): _83.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _83.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_83.MsgAcknowledgementResponse>): _83.MsgAcknowledgementResponse;
                    fromAmino(object: _83.MsgAcknowledgementResponseAmino): _83.MsgAcknowledgementResponse;
                    toAmino(message: _83.MsgAcknowledgementResponse): _83.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _83.MsgAcknowledgementResponseAminoMsg): _83.MsgAcknowledgementResponse;
                    toAminoMsg(message: _83.MsgAcknowledgementResponse): _83.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _83.MsgAcknowledgementResponseProtoMsg): _83.MsgAcknowledgementResponse;
                    toProto(message: _83.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _83.MsgAcknowledgementResponse): _83.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelRequest;
                    fromPartial(object: Partial<_82.QueryChannelRequest>): _82.QueryChannelRequest;
                    fromAmino(object: _82.QueryChannelRequestAmino): _82.QueryChannelRequest;
                    toAmino(message: _82.QueryChannelRequest): _82.QueryChannelRequestAmino;
                    fromAminoMsg(object: _82.QueryChannelRequestAminoMsg): _82.QueryChannelRequest;
                    toAminoMsg(message: _82.QueryChannelRequest): _82.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelRequestProtoMsg): _82.QueryChannelRequest;
                    toProto(message: _82.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelRequest): _82.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelResponse;
                    fromPartial(object: Partial<_82.QueryChannelResponse>): _82.QueryChannelResponse;
                    fromAmino(object: _82.QueryChannelResponseAmino): _82.QueryChannelResponse;
                    toAmino(message: _82.QueryChannelResponse): _82.QueryChannelResponseAmino;
                    fromAminoMsg(object: _82.QueryChannelResponseAminoMsg): _82.QueryChannelResponse;
                    toAminoMsg(message: _82.QueryChannelResponse): _82.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelResponseProtoMsg): _82.QueryChannelResponse;
                    toProto(message: _82.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelResponse): _82.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelsRequest;
                    fromPartial(object: Partial<_82.QueryChannelsRequest>): _82.QueryChannelsRequest;
                    fromAmino(object: _82.QueryChannelsRequestAmino): _82.QueryChannelsRequest;
                    toAmino(message: _82.QueryChannelsRequest): _82.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _82.QueryChannelsRequestAminoMsg): _82.QueryChannelsRequest;
                    toAminoMsg(message: _82.QueryChannelsRequest): _82.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelsRequestProtoMsg): _82.QueryChannelsRequest;
                    toProto(message: _82.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelsRequest): _82.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelsResponse;
                    fromPartial(object: Partial<_82.QueryChannelsResponse>): _82.QueryChannelsResponse;
                    fromAmino(object: _82.QueryChannelsResponseAmino): _82.QueryChannelsResponse;
                    toAmino(message: _82.QueryChannelsResponse): _82.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _82.QueryChannelsResponseAminoMsg): _82.QueryChannelsResponse;
                    toAminoMsg(message: _82.QueryChannelsResponse): _82.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelsResponseProtoMsg): _82.QueryChannelsResponse;
                    toProto(message: _82.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelsResponse): _82.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_82.QueryConnectionChannelsRequest>): _82.QueryConnectionChannelsRequest;
                    fromAmino(object: _82.QueryConnectionChannelsRequestAmino): _82.QueryConnectionChannelsRequest;
                    toAmino(message: _82.QueryConnectionChannelsRequest): _82.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _82.QueryConnectionChannelsRequestAminoMsg): _82.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _82.QueryConnectionChannelsRequest): _82.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryConnectionChannelsRequestProtoMsg): _82.QueryConnectionChannelsRequest;
                    toProto(message: _82.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryConnectionChannelsRequest): _82.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_82.QueryConnectionChannelsResponse>): _82.QueryConnectionChannelsResponse;
                    fromAmino(object: _82.QueryConnectionChannelsResponseAmino): _82.QueryConnectionChannelsResponse;
                    toAmino(message: _82.QueryConnectionChannelsResponse): _82.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _82.QueryConnectionChannelsResponseAminoMsg): _82.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _82.QueryConnectionChannelsResponse): _82.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryConnectionChannelsResponseProtoMsg): _82.QueryConnectionChannelsResponse;
                    toProto(message: _82.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryConnectionChannelsResponse): _82.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_82.QueryChannelClientStateRequest>): _82.QueryChannelClientStateRequest;
                    fromAmino(object: _82.QueryChannelClientStateRequestAmino): _82.QueryChannelClientStateRequest;
                    toAmino(message: _82.QueryChannelClientStateRequest): _82.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _82.QueryChannelClientStateRequestAminoMsg): _82.QueryChannelClientStateRequest;
                    toAminoMsg(message: _82.QueryChannelClientStateRequest): _82.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelClientStateRequestProtoMsg): _82.QueryChannelClientStateRequest;
                    toProto(message: _82.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelClientStateRequest): _82.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_82.QueryChannelClientStateResponse>): _82.QueryChannelClientStateResponse;
                    fromAmino(object: _82.QueryChannelClientStateResponseAmino): _82.QueryChannelClientStateResponse;
                    toAmino(message: _82.QueryChannelClientStateResponse): _82.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _82.QueryChannelClientStateResponseAminoMsg): _82.QueryChannelClientStateResponse;
                    toAminoMsg(message: _82.QueryChannelClientStateResponse): _82.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelClientStateResponseProtoMsg): _82.QueryChannelClientStateResponse;
                    toProto(message: _82.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelClientStateResponse): _82.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_82.QueryChannelConsensusStateRequest>): _82.QueryChannelConsensusStateRequest;
                    fromAmino(object: _82.QueryChannelConsensusStateRequestAmino): _82.QueryChannelConsensusStateRequest;
                    toAmino(message: _82.QueryChannelConsensusStateRequest): _82.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _82.QueryChannelConsensusStateRequestAminoMsg): _82.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _82.QueryChannelConsensusStateRequest): _82.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelConsensusStateRequestProtoMsg): _82.QueryChannelConsensusStateRequest;
                    toProto(message: _82.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelConsensusStateRequest): _82.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_82.QueryChannelConsensusStateResponse>): _82.QueryChannelConsensusStateResponse;
                    fromAmino(object: _82.QueryChannelConsensusStateResponseAmino): _82.QueryChannelConsensusStateResponse;
                    toAmino(message: _82.QueryChannelConsensusStateResponse): _82.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _82.QueryChannelConsensusStateResponseAminoMsg): _82.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _82.QueryChannelConsensusStateResponse): _82.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryChannelConsensusStateResponseProtoMsg): _82.QueryChannelConsensusStateResponse;
                    toProto(message: _82.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryChannelConsensusStateResponse): _82.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_82.QueryPacketCommitmentRequest>): _82.QueryPacketCommitmentRequest;
                    fromAmino(object: _82.QueryPacketCommitmentRequestAmino): _82.QueryPacketCommitmentRequest;
                    toAmino(message: _82.QueryPacketCommitmentRequest): _82.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _82.QueryPacketCommitmentRequestAminoMsg): _82.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _82.QueryPacketCommitmentRequest): _82.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketCommitmentRequestProtoMsg): _82.QueryPacketCommitmentRequest;
                    toProto(message: _82.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketCommitmentRequest): _82.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_82.QueryPacketCommitmentResponse>): _82.QueryPacketCommitmentResponse;
                    fromAmino(object: _82.QueryPacketCommitmentResponseAmino): _82.QueryPacketCommitmentResponse;
                    toAmino(message: _82.QueryPacketCommitmentResponse): _82.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _82.QueryPacketCommitmentResponseAminoMsg): _82.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _82.QueryPacketCommitmentResponse): _82.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketCommitmentResponseProtoMsg): _82.QueryPacketCommitmentResponse;
                    toProto(message: _82.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketCommitmentResponse): _82.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_82.QueryPacketCommitmentsRequest>): _82.QueryPacketCommitmentsRequest;
                    fromAmino(object: _82.QueryPacketCommitmentsRequestAmino): _82.QueryPacketCommitmentsRequest;
                    toAmino(message: _82.QueryPacketCommitmentsRequest): _82.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _82.QueryPacketCommitmentsRequestAminoMsg): _82.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _82.QueryPacketCommitmentsRequest): _82.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketCommitmentsRequestProtoMsg): _82.QueryPacketCommitmentsRequest;
                    toProto(message: _82.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketCommitmentsRequest): _82.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_82.QueryPacketCommitmentsResponse>): _82.QueryPacketCommitmentsResponse;
                    fromAmino(object: _82.QueryPacketCommitmentsResponseAmino): _82.QueryPacketCommitmentsResponse;
                    toAmino(message: _82.QueryPacketCommitmentsResponse): _82.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _82.QueryPacketCommitmentsResponseAminoMsg): _82.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _82.QueryPacketCommitmentsResponse): _82.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketCommitmentsResponseProtoMsg): _82.QueryPacketCommitmentsResponse;
                    toProto(message: _82.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketCommitmentsResponse): _82.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_82.QueryPacketReceiptRequest>): _82.QueryPacketReceiptRequest;
                    fromAmino(object: _82.QueryPacketReceiptRequestAmino): _82.QueryPacketReceiptRequest;
                    toAmino(message: _82.QueryPacketReceiptRequest): _82.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _82.QueryPacketReceiptRequestAminoMsg): _82.QueryPacketReceiptRequest;
                    toAminoMsg(message: _82.QueryPacketReceiptRequest): _82.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketReceiptRequestProtoMsg): _82.QueryPacketReceiptRequest;
                    toProto(message: _82.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketReceiptRequest): _82.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_82.QueryPacketReceiptResponse>): _82.QueryPacketReceiptResponse;
                    fromAmino(object: _82.QueryPacketReceiptResponseAmino): _82.QueryPacketReceiptResponse;
                    toAmino(message: _82.QueryPacketReceiptResponse): _82.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _82.QueryPacketReceiptResponseAminoMsg): _82.QueryPacketReceiptResponse;
                    toAminoMsg(message: _82.QueryPacketReceiptResponse): _82.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketReceiptResponseProtoMsg): _82.QueryPacketReceiptResponse;
                    toProto(message: _82.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketReceiptResponse): _82.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_82.QueryPacketAcknowledgementRequest>): _82.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _82.QueryPacketAcknowledgementRequestAmino): _82.QueryPacketAcknowledgementRequest;
                    toAmino(message: _82.QueryPacketAcknowledgementRequest): _82.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _82.QueryPacketAcknowledgementRequestAminoMsg): _82.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _82.QueryPacketAcknowledgementRequest): _82.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketAcknowledgementRequestProtoMsg): _82.QueryPacketAcknowledgementRequest;
                    toProto(message: _82.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketAcknowledgementRequest): _82.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_82.QueryPacketAcknowledgementResponse>): _82.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _82.QueryPacketAcknowledgementResponseAmino): _82.QueryPacketAcknowledgementResponse;
                    toAmino(message: _82.QueryPacketAcknowledgementResponse): _82.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _82.QueryPacketAcknowledgementResponseAminoMsg): _82.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _82.QueryPacketAcknowledgementResponse): _82.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketAcknowledgementResponseProtoMsg): _82.QueryPacketAcknowledgementResponse;
                    toProto(message: _82.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketAcknowledgementResponse): _82.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_82.QueryPacketAcknowledgementsRequest>): _82.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _82.QueryPacketAcknowledgementsRequestAmino): _82.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _82.QueryPacketAcknowledgementsRequest): _82.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _82.QueryPacketAcknowledgementsRequestAminoMsg): _82.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _82.QueryPacketAcknowledgementsRequest): _82.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketAcknowledgementsRequestProtoMsg): _82.QueryPacketAcknowledgementsRequest;
                    toProto(message: _82.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketAcknowledgementsRequest): _82.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_82.QueryPacketAcknowledgementsResponse>): _82.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _82.QueryPacketAcknowledgementsResponseAmino): _82.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _82.QueryPacketAcknowledgementsResponse): _82.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _82.QueryPacketAcknowledgementsResponseAminoMsg): _82.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _82.QueryPacketAcknowledgementsResponse): _82.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryPacketAcknowledgementsResponseProtoMsg): _82.QueryPacketAcknowledgementsResponse;
                    toProto(message: _82.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryPacketAcknowledgementsResponse): _82.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_82.QueryUnreceivedPacketsRequest>): _82.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _82.QueryUnreceivedPacketsRequestAmino): _82.QueryUnreceivedPacketsRequest;
                    toAmino(message: _82.QueryUnreceivedPacketsRequest): _82.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _82.QueryUnreceivedPacketsRequestAminoMsg): _82.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _82.QueryUnreceivedPacketsRequest): _82.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryUnreceivedPacketsRequestProtoMsg): _82.QueryUnreceivedPacketsRequest;
                    toProto(message: _82.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryUnreceivedPacketsRequest): _82.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_82.QueryUnreceivedPacketsResponse>): _82.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _82.QueryUnreceivedPacketsResponseAmino): _82.QueryUnreceivedPacketsResponse;
                    toAmino(message: _82.QueryUnreceivedPacketsResponse): _82.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _82.QueryUnreceivedPacketsResponseAminoMsg): _82.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _82.QueryUnreceivedPacketsResponse): _82.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryUnreceivedPacketsResponseProtoMsg): _82.QueryUnreceivedPacketsResponse;
                    toProto(message: _82.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryUnreceivedPacketsResponse): _82.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_82.QueryUnreceivedAcksRequest>): _82.QueryUnreceivedAcksRequest;
                    fromAmino(object: _82.QueryUnreceivedAcksRequestAmino): _82.QueryUnreceivedAcksRequest;
                    toAmino(message: _82.QueryUnreceivedAcksRequest): _82.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _82.QueryUnreceivedAcksRequestAminoMsg): _82.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _82.QueryUnreceivedAcksRequest): _82.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryUnreceivedAcksRequestProtoMsg): _82.QueryUnreceivedAcksRequest;
                    toProto(message: _82.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryUnreceivedAcksRequest): _82.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_82.QueryUnreceivedAcksResponse>): _82.QueryUnreceivedAcksResponse;
                    fromAmino(object: _82.QueryUnreceivedAcksResponseAmino): _82.QueryUnreceivedAcksResponse;
                    toAmino(message: _82.QueryUnreceivedAcksResponse): _82.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _82.QueryUnreceivedAcksResponseAminoMsg): _82.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _82.QueryUnreceivedAcksResponse): _82.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryUnreceivedAcksResponseProtoMsg): _82.QueryUnreceivedAcksResponse;
                    toProto(message: _82.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryUnreceivedAcksResponse): _82.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_82.QueryNextSequenceReceiveRequest>): _82.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _82.QueryNextSequenceReceiveRequestAmino): _82.QueryNextSequenceReceiveRequest;
                    toAmino(message: _82.QueryNextSequenceReceiveRequest): _82.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _82.QueryNextSequenceReceiveRequestAminoMsg): _82.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _82.QueryNextSequenceReceiveRequest): _82.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _82.QueryNextSequenceReceiveRequestProtoMsg): _82.QueryNextSequenceReceiveRequest;
                    toProto(message: _82.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryNextSequenceReceiveRequest): _82.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_82.QueryNextSequenceReceiveResponse>): _82.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _82.QueryNextSequenceReceiveResponseAmino): _82.QueryNextSequenceReceiveResponse;
                    toAmino(message: _82.QueryNextSequenceReceiveResponse): _82.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _82.QueryNextSequenceReceiveResponseAminoMsg): _82.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _82.QueryNextSequenceReceiveResponse): _82.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _82.QueryNextSequenceReceiveResponseProtoMsg): _82.QueryNextSequenceReceiveResponse;
                    toProto(message: _82.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryNextSequenceReceiveResponse): _82.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                    fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                    fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                    toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                    fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                    toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                    fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                    toProto(message: _81.GenesisState): Uint8Array;
                    toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _81.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PacketSequence;
                    fromPartial(object: Partial<_81.PacketSequence>): _81.PacketSequence;
                    fromAmino(object: _81.PacketSequenceAmino): _81.PacketSequence;
                    toAmino(message: _81.PacketSequence): _81.PacketSequenceAmino;
                    fromAminoMsg(object: _81.PacketSequenceAminoMsg): _81.PacketSequence;
                    toAminoMsg(message: _81.PacketSequence): _81.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _81.PacketSequenceProtoMsg): _81.PacketSequence;
                    toProto(message: _81.PacketSequence): Uint8Array;
                    toProtoMsg(message: _81.PacketSequence): _81.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _80.State;
                stateToJSON(object: _80.State): string;
                orderFromJSON(object: any): _80.Order;
                orderToJSON(object: _80.Order): string;
                State: typeof _80.State;
                StateSDKType: typeof _80.State;
                StateAmino: typeof _80.State;
                Order: typeof _80.Order;
                OrderSDKType: typeof _80.Order;
                OrderAmino: typeof _80.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _80.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Channel;
                    fromPartial(object: Partial<_80.Channel>): _80.Channel;
                    fromAmino(object: _80.ChannelAmino): _80.Channel;
                    toAmino(message: _80.Channel): _80.ChannelAmino;
                    fromAminoMsg(object: _80.ChannelAminoMsg): _80.Channel;
                    toAminoMsg(message: _80.Channel): _80.ChannelAminoMsg;
                    fromProtoMsg(message: _80.ChannelProtoMsg): _80.Channel;
                    toProto(message: _80.Channel): Uint8Array;
                    toProtoMsg(message: _80.Channel): _80.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _80.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.IdentifiedChannel;
                    fromPartial(object: Partial<_80.IdentifiedChannel>): _80.IdentifiedChannel;
                    fromAmino(object: _80.IdentifiedChannelAmino): _80.IdentifiedChannel;
                    toAmino(message: _80.IdentifiedChannel): _80.IdentifiedChannelAmino;
                    fromAminoMsg(object: _80.IdentifiedChannelAminoMsg): _80.IdentifiedChannel;
                    toAminoMsg(message: _80.IdentifiedChannel): _80.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _80.IdentifiedChannelProtoMsg): _80.IdentifiedChannel;
                    toProto(message: _80.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _80.IdentifiedChannel): _80.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _80.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Counterparty;
                    fromPartial(object: Partial<_80.Counterparty>): _80.Counterparty;
                    fromAmino(object: _80.CounterpartyAmino): _80.Counterparty;
                    toAmino(message: _80.Counterparty): _80.CounterpartyAmino;
                    fromAminoMsg(object: _80.CounterpartyAminoMsg): _80.Counterparty;
                    toAminoMsg(message: _80.Counterparty): _80.CounterpartyAminoMsg;
                    fromProtoMsg(message: _80.CounterpartyProtoMsg): _80.Counterparty;
                    toProto(message: _80.Counterparty): Uint8Array;
                    toProtoMsg(message: _80.Counterparty): _80.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _80.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Packet;
                    fromPartial(object: Partial<_80.Packet>): _80.Packet;
                    fromAmino(object: _80.PacketAmino): _80.Packet;
                    toAmino(message: _80.Packet): _80.PacketAmino;
                    fromAminoMsg(object: _80.PacketAminoMsg): _80.Packet;
                    toAminoMsg(message: _80.Packet): _80.PacketAminoMsg;
                    fromProtoMsg(message: _80.PacketProtoMsg): _80.Packet;
                    toProto(message: _80.Packet): Uint8Array;
                    toProtoMsg(message: _80.Packet): _80.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _80.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketState;
                    fromPartial(object: Partial<_80.PacketState>): _80.PacketState;
                    fromAmino(object: _80.PacketStateAmino): _80.PacketState;
                    toAmino(message: _80.PacketState): _80.PacketStateAmino;
                    fromAminoMsg(object: _80.PacketStateAminoMsg): _80.PacketState;
                    toAminoMsg(message: _80.PacketState): _80.PacketStateAminoMsg;
                    fromProtoMsg(message: _80.PacketStateProtoMsg): _80.PacketState;
                    toProto(message: _80.PacketState): Uint8Array;
                    toProtoMsg(message: _80.PacketState): _80.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _80.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketId;
                    fromPartial(object: Partial<_80.PacketId>): _80.PacketId;
                    fromAmino(object: _80.PacketIdAmino): _80.PacketId;
                    toAmino(message: _80.PacketId): _80.PacketIdAmino;
                    fromAminoMsg(object: _80.PacketIdAminoMsg): _80.PacketId;
                    toAminoMsg(message: _80.PacketId): _80.PacketIdAminoMsg;
                    fromProtoMsg(message: _80.PacketIdProtoMsg): _80.PacketId;
                    toProto(message: _80.PacketId): Uint8Array;
                    toProtoMsg(message: _80.PacketId): _80.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _80.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Acknowledgement;
                    fromPartial(object: Partial<_80.Acknowledgement>): _80.Acknowledgement;
                    fromAmino(object: _80.AcknowledgementAmino): _80.Acknowledgement;
                    toAmino(message: _80.Acknowledgement): _80.AcknowledgementAmino;
                    fromAminoMsg(object: _80.AcknowledgementAminoMsg): _80.Acknowledgement;
                    toAminoMsg(message: _80.Acknowledgement): _80.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _80.AcknowledgementProtoMsg): _80.Acknowledgement;
                    toProto(message: _80.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _80.Acknowledgement): _80.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _254.MsgClientImpl;
                QueryClientImpl: typeof _248.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _86.QueryClientStateRequest): Promise<_86.QueryClientStateResponse>;
                    clientStates(request?: _86.QueryClientStatesRequest): Promise<_86.QueryClientStatesResponse>;
                    consensusState(request: _86.QueryConsensusStateRequest): Promise<_86.QueryConsensusStateResponse>;
                    consensusStates(request: _86.QueryConsensusStatesRequest): Promise<_86.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _86.QueryConsensusStateHeightsRequest): Promise<_86.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _86.QueryClientStatusRequest): Promise<_86.QueryClientStatusResponse>;
                    clientParams(request?: _86.QueryClientParamsRequest): Promise<_86.QueryClientParamsResponse>;
                    upgradedClientState(request?: _86.QueryUpgradedClientStateRequest): Promise<_86.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _86.QueryUpgradedConsensusStateRequest): Promise<_86.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _241.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _87.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _87.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _87.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _87.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _87.MsgCreateClient): {
                            typeUrl: string;
                            value: _87.MsgCreateClient;
                        };
                        updateClient(value: _87.MsgUpdateClient): {
                            typeUrl: string;
                            value: _87.MsgUpdateClient;
                        };
                        upgradeClient(value: _87.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _87.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _87.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _87.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _87.MsgCreateClient): {
                            typeUrl: string;
                            value: _87.MsgCreateClient;
                        };
                        updateClient(value: _87.MsgUpdateClient): {
                            typeUrl: string;
                            value: _87.MsgUpdateClient;
                        };
                        upgradeClient(value: _87.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _87.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _87.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _87.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _87.MsgCreateClient) => _87.MsgCreateClientAmino;
                        fromAmino: (object: _87.MsgCreateClientAmino) => _87.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _87.MsgUpdateClient) => _87.MsgUpdateClientAmino;
                        fromAmino: (object: _87.MsgUpdateClientAmino) => _87.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _87.MsgUpgradeClient) => _87.MsgUpgradeClientAmino;
                        fromAmino: (object: _87.MsgUpgradeClientAmino) => _87.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _87.MsgSubmitMisbehaviour) => _87.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _87.MsgSubmitMisbehaviourAmino) => _87.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _87.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateClient;
                    fromPartial(object: Partial<_87.MsgCreateClient>): _87.MsgCreateClient;
                    fromAmino(object: _87.MsgCreateClientAmino): _87.MsgCreateClient;
                    toAmino(message: _87.MsgCreateClient): _87.MsgCreateClientAmino;
                    fromAminoMsg(object: _87.MsgCreateClientAminoMsg): _87.MsgCreateClient;
                    toAminoMsg(message: _87.MsgCreateClient): _87.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _87.MsgCreateClientProtoMsg): _87.MsgCreateClient;
                    toProto(message: _87.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _87.MsgCreateClient): _87.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _87.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateClientResponse;
                    fromPartial(_: Partial<_87.MsgCreateClientResponse>): _87.MsgCreateClientResponse;
                    fromAmino(_: _87.MsgCreateClientResponseAmino): _87.MsgCreateClientResponse;
                    toAmino(_: _87.MsgCreateClientResponse): _87.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _87.MsgCreateClientResponseAminoMsg): _87.MsgCreateClientResponse;
                    toAminoMsg(message: _87.MsgCreateClientResponse): _87.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _87.MsgCreateClientResponseProtoMsg): _87.MsgCreateClientResponse;
                    toProto(message: _87.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _87.MsgCreateClientResponse): _87.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _87.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateClient;
                    fromPartial(object: Partial<_87.MsgUpdateClient>): _87.MsgUpdateClient;
                    fromAmino(object: _87.MsgUpdateClientAmino): _87.MsgUpdateClient;
                    toAmino(message: _87.MsgUpdateClient): _87.MsgUpdateClientAmino;
                    fromAminoMsg(object: _87.MsgUpdateClientAminoMsg): _87.MsgUpdateClient;
                    toAminoMsg(message: _87.MsgUpdateClient): _87.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _87.MsgUpdateClientProtoMsg): _87.MsgUpdateClient;
                    toProto(message: _87.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _87.MsgUpdateClient): _87.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _87.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_87.MsgUpdateClientResponse>): _87.MsgUpdateClientResponse;
                    fromAmino(_: _87.MsgUpdateClientResponseAmino): _87.MsgUpdateClientResponse;
                    toAmino(_: _87.MsgUpdateClientResponse): _87.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _87.MsgUpdateClientResponseAminoMsg): _87.MsgUpdateClientResponse;
                    toAminoMsg(message: _87.MsgUpdateClientResponse): _87.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _87.MsgUpdateClientResponseProtoMsg): _87.MsgUpdateClientResponse;
                    toProto(message: _87.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _87.MsgUpdateClientResponse): _87.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _87.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpgradeClient;
                    fromPartial(object: Partial<_87.MsgUpgradeClient>): _87.MsgUpgradeClient;
                    fromAmino(object: _87.MsgUpgradeClientAmino): _87.MsgUpgradeClient;
                    toAmino(message: _87.MsgUpgradeClient): _87.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _87.MsgUpgradeClientAminoMsg): _87.MsgUpgradeClient;
                    toAminoMsg(message: _87.MsgUpgradeClient): _87.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _87.MsgUpgradeClientProtoMsg): _87.MsgUpgradeClient;
                    toProto(message: _87.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _87.MsgUpgradeClient): _87.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _87.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_87.MsgUpgradeClientResponse>): _87.MsgUpgradeClientResponse;
                    fromAmino(_: _87.MsgUpgradeClientResponseAmino): _87.MsgUpgradeClientResponse;
                    toAmino(_: _87.MsgUpgradeClientResponse): _87.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _87.MsgUpgradeClientResponseAminoMsg): _87.MsgUpgradeClientResponse;
                    toAminoMsg(message: _87.MsgUpgradeClientResponse): _87.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _87.MsgUpgradeClientResponseProtoMsg): _87.MsgUpgradeClientResponse;
                    toProto(message: _87.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _87.MsgUpgradeClientResponse): _87.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _87.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_87.MsgSubmitMisbehaviour>): _87.MsgSubmitMisbehaviour;
                    fromAmino(object: _87.MsgSubmitMisbehaviourAmino): _87.MsgSubmitMisbehaviour;
                    toAmino(message: _87.MsgSubmitMisbehaviour): _87.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _87.MsgSubmitMisbehaviourAminoMsg): _87.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _87.MsgSubmitMisbehaviour): _87.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _87.MsgSubmitMisbehaviourProtoMsg): _87.MsgSubmitMisbehaviour;
                    toProto(message: _87.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _87.MsgSubmitMisbehaviour): _87.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _87.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_87.MsgSubmitMisbehaviourResponse>): _87.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _87.MsgSubmitMisbehaviourResponseAmino): _87.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _87.MsgSubmitMisbehaviourResponse): _87.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _87.MsgSubmitMisbehaviourResponseAminoMsg): _87.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _87.MsgSubmitMisbehaviourResponse): _87.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _87.MsgSubmitMisbehaviourResponseProtoMsg): _87.MsgSubmitMisbehaviourResponse;
                    toProto(message: _87.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _87.MsgSubmitMisbehaviourResponse): _87.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStateRequest;
                    fromPartial(object: Partial<_86.QueryClientStateRequest>): _86.QueryClientStateRequest;
                    fromAmino(object: _86.QueryClientStateRequestAmino): _86.QueryClientStateRequest;
                    toAmino(message: _86.QueryClientStateRequest): _86.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _86.QueryClientStateRequestAminoMsg): _86.QueryClientStateRequest;
                    toAminoMsg(message: _86.QueryClientStateRequest): _86.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStateRequestProtoMsg): _86.QueryClientStateRequest;
                    toProto(message: _86.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStateRequest): _86.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStateResponse;
                    fromPartial(object: Partial<_86.QueryClientStateResponse>): _86.QueryClientStateResponse;
                    fromAmino(object: _86.QueryClientStateResponseAmino): _86.QueryClientStateResponse;
                    toAmino(message: _86.QueryClientStateResponse): _86.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _86.QueryClientStateResponseAminoMsg): _86.QueryClientStateResponse;
                    toAminoMsg(message: _86.QueryClientStateResponse): _86.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStateResponseProtoMsg): _86.QueryClientStateResponse;
                    toProto(message: _86.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStateResponse): _86.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStatesRequest;
                    fromPartial(object: Partial<_86.QueryClientStatesRequest>): _86.QueryClientStatesRequest;
                    fromAmino(object: _86.QueryClientStatesRequestAmino): _86.QueryClientStatesRequest;
                    toAmino(message: _86.QueryClientStatesRequest): _86.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _86.QueryClientStatesRequestAminoMsg): _86.QueryClientStatesRequest;
                    toAminoMsg(message: _86.QueryClientStatesRequest): _86.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStatesRequestProtoMsg): _86.QueryClientStatesRequest;
                    toProto(message: _86.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStatesRequest): _86.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStatesResponse;
                    fromPartial(object: Partial<_86.QueryClientStatesResponse>): _86.QueryClientStatesResponse;
                    fromAmino(object: _86.QueryClientStatesResponseAmino): _86.QueryClientStatesResponse;
                    toAmino(message: _86.QueryClientStatesResponse): _86.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _86.QueryClientStatesResponseAminoMsg): _86.QueryClientStatesResponse;
                    toAminoMsg(message: _86.QueryClientStatesResponse): _86.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStatesResponseProtoMsg): _86.QueryClientStatesResponse;
                    toProto(message: _86.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStatesResponse): _86.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_86.QueryConsensusStateRequest>): _86.QueryConsensusStateRequest;
                    fromAmino(object: _86.QueryConsensusStateRequestAmino): _86.QueryConsensusStateRequest;
                    toAmino(message: _86.QueryConsensusStateRequest): _86.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _86.QueryConsensusStateRequestAminoMsg): _86.QueryConsensusStateRequest;
                    toAminoMsg(message: _86.QueryConsensusStateRequest): _86.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStateRequestProtoMsg): _86.QueryConsensusStateRequest;
                    toProto(message: _86.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStateRequest): _86.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_86.QueryConsensusStateResponse>): _86.QueryConsensusStateResponse;
                    fromAmino(object: _86.QueryConsensusStateResponseAmino): _86.QueryConsensusStateResponse;
                    toAmino(message: _86.QueryConsensusStateResponse): _86.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _86.QueryConsensusStateResponseAminoMsg): _86.QueryConsensusStateResponse;
                    toAminoMsg(message: _86.QueryConsensusStateResponse): _86.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStateResponseProtoMsg): _86.QueryConsensusStateResponse;
                    toProto(message: _86.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStateResponse): _86.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_86.QueryConsensusStatesRequest>): _86.QueryConsensusStatesRequest;
                    fromAmino(object: _86.QueryConsensusStatesRequestAmino): _86.QueryConsensusStatesRequest;
                    toAmino(message: _86.QueryConsensusStatesRequest): _86.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _86.QueryConsensusStatesRequestAminoMsg): _86.QueryConsensusStatesRequest;
                    toAminoMsg(message: _86.QueryConsensusStatesRequest): _86.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStatesRequestProtoMsg): _86.QueryConsensusStatesRequest;
                    toProto(message: _86.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStatesRequest): _86.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_86.QueryConsensusStatesResponse>): _86.QueryConsensusStatesResponse;
                    fromAmino(object: _86.QueryConsensusStatesResponseAmino): _86.QueryConsensusStatesResponse;
                    toAmino(message: _86.QueryConsensusStatesResponse): _86.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _86.QueryConsensusStatesResponseAminoMsg): _86.QueryConsensusStatesResponse;
                    toAminoMsg(message: _86.QueryConsensusStatesResponse): _86.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStatesResponseProtoMsg): _86.QueryConsensusStatesResponse;
                    toProto(message: _86.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStatesResponse): _86.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_86.QueryConsensusStateHeightsRequest>): _86.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _86.QueryConsensusStateHeightsRequestAmino): _86.QueryConsensusStateHeightsRequest;
                    toAmino(message: _86.QueryConsensusStateHeightsRequest): _86.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _86.QueryConsensusStateHeightsRequestAminoMsg): _86.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _86.QueryConsensusStateHeightsRequest): _86.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStateHeightsRequestProtoMsg): _86.QueryConsensusStateHeightsRequest;
                    toProto(message: _86.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStateHeightsRequest): _86.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_86.QueryConsensusStateHeightsResponse>): _86.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _86.QueryConsensusStateHeightsResponseAmino): _86.QueryConsensusStateHeightsResponse;
                    toAmino(message: _86.QueryConsensusStateHeightsResponse): _86.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _86.QueryConsensusStateHeightsResponseAminoMsg): _86.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _86.QueryConsensusStateHeightsResponse): _86.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryConsensusStateHeightsResponseProtoMsg): _86.QueryConsensusStateHeightsResponse;
                    toProto(message: _86.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryConsensusStateHeightsResponse): _86.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStatusRequest;
                    fromPartial(object: Partial<_86.QueryClientStatusRequest>): _86.QueryClientStatusRequest;
                    fromAmino(object: _86.QueryClientStatusRequestAmino): _86.QueryClientStatusRequest;
                    toAmino(message: _86.QueryClientStatusRequest): _86.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _86.QueryClientStatusRequestAminoMsg): _86.QueryClientStatusRequest;
                    toAminoMsg(message: _86.QueryClientStatusRequest): _86.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStatusRequestProtoMsg): _86.QueryClientStatusRequest;
                    toProto(message: _86.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStatusRequest): _86.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientStatusResponse;
                    fromPartial(object: Partial<_86.QueryClientStatusResponse>): _86.QueryClientStatusResponse;
                    fromAmino(object: _86.QueryClientStatusResponseAmino): _86.QueryClientStatusResponse;
                    toAmino(message: _86.QueryClientStatusResponse): _86.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _86.QueryClientStatusResponseAminoMsg): _86.QueryClientStatusResponse;
                    toAminoMsg(message: _86.QueryClientStatusResponse): _86.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryClientStatusResponseProtoMsg): _86.QueryClientStatusResponse;
                    toProto(message: _86.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryClientStatusResponse): _86.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _86.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientParamsRequest;
                    fromPartial(_: Partial<_86.QueryClientParamsRequest>): _86.QueryClientParamsRequest;
                    fromAmino(_: _86.QueryClientParamsRequestAmino): _86.QueryClientParamsRequest;
                    toAmino(_: _86.QueryClientParamsRequest): _86.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _86.QueryClientParamsRequestAminoMsg): _86.QueryClientParamsRequest;
                    toAminoMsg(message: _86.QueryClientParamsRequest): _86.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryClientParamsRequestProtoMsg): _86.QueryClientParamsRequest;
                    toProto(message: _86.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryClientParamsRequest): _86.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientParamsResponse;
                    fromPartial(object: Partial<_86.QueryClientParamsResponse>): _86.QueryClientParamsResponse;
                    fromAmino(object: _86.QueryClientParamsResponseAmino): _86.QueryClientParamsResponse;
                    toAmino(message: _86.QueryClientParamsResponse): _86.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _86.QueryClientParamsResponseAminoMsg): _86.QueryClientParamsResponse;
                    toAminoMsg(message: _86.QueryClientParamsResponse): _86.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryClientParamsResponseProtoMsg): _86.QueryClientParamsResponse;
                    toProto(message: _86.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryClientParamsResponse): _86.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _86.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_86.QueryUpgradedClientStateRequest>): _86.QueryUpgradedClientStateRequest;
                    fromAmino(_: _86.QueryUpgradedClientStateRequestAmino): _86.QueryUpgradedClientStateRequest;
                    toAmino(_: _86.QueryUpgradedClientStateRequest): _86.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _86.QueryUpgradedClientStateRequestAminoMsg): _86.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _86.QueryUpgradedClientStateRequest): _86.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryUpgradedClientStateRequestProtoMsg): _86.QueryUpgradedClientStateRequest;
                    toProto(message: _86.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryUpgradedClientStateRequest): _86.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_86.QueryUpgradedClientStateResponse>): _86.QueryUpgradedClientStateResponse;
                    fromAmino(object: _86.QueryUpgradedClientStateResponseAmino): _86.QueryUpgradedClientStateResponse;
                    toAmino(message: _86.QueryUpgradedClientStateResponse): _86.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _86.QueryUpgradedClientStateResponseAminoMsg): _86.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _86.QueryUpgradedClientStateResponse): _86.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryUpgradedClientStateResponseProtoMsg): _86.QueryUpgradedClientStateResponse;
                    toProto(message: _86.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryUpgradedClientStateResponse): _86.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _86.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_86.QueryUpgradedConsensusStateRequest>): _86.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _86.QueryUpgradedConsensusStateRequestAmino): _86.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _86.QueryUpgradedConsensusStateRequest): _86.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _86.QueryUpgradedConsensusStateRequestAminoMsg): _86.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _86.QueryUpgradedConsensusStateRequest): _86.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _86.QueryUpgradedConsensusStateRequestProtoMsg): _86.QueryUpgradedConsensusStateRequest;
                    toProto(message: _86.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _86.QueryUpgradedConsensusStateRequest): _86.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _86.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_86.QueryUpgradedConsensusStateResponse>): _86.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _86.QueryUpgradedConsensusStateResponseAmino): _86.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _86.QueryUpgradedConsensusStateResponse): _86.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _86.QueryUpgradedConsensusStateResponseAminoMsg): _86.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _86.QueryUpgradedConsensusStateResponse): _86.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _86.QueryUpgradedConsensusStateResponseProtoMsg): _86.QueryUpgradedConsensusStateResponse;
                    toProto(message: _86.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _86.QueryUpgradedConsensusStateResponse): _86.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
                    fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                    fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                    toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                    fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                    toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                    fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                    toProto(message: _85.GenesisState): Uint8Array;
                    toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _85.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisMetadata;
                    fromPartial(object: Partial<_85.GenesisMetadata>): _85.GenesisMetadata;
                    fromAmino(object: _85.GenesisMetadataAmino): _85.GenesisMetadata;
                    toAmino(message: _85.GenesisMetadata): _85.GenesisMetadataAmino;
                    fromAminoMsg(object: _85.GenesisMetadataAminoMsg): _85.GenesisMetadata;
                    toAminoMsg(message: _85.GenesisMetadata): _85.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _85.GenesisMetadataProtoMsg): _85.GenesisMetadata;
                    toProto(message: _85.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _85.GenesisMetadata): _85.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _85.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_85.IdentifiedGenesisMetadata>): _85.IdentifiedGenesisMetadata;
                    fromAmino(object: _85.IdentifiedGenesisMetadataAmino): _85.IdentifiedGenesisMetadata;
                    toAmino(message: _85.IdentifiedGenesisMetadata): _85.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _85.IdentifiedGenesisMetadataAminoMsg): _85.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _85.IdentifiedGenesisMetadata): _85.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _85.IdentifiedGenesisMetadataProtoMsg): _85.IdentifiedGenesisMetadata;
                    toProto(message: _85.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _85.IdentifiedGenesisMetadata): _85.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _84.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.IdentifiedClientState;
                    fromPartial(object: Partial<_84.IdentifiedClientState>): _84.IdentifiedClientState;
                    fromAmino(object: _84.IdentifiedClientStateAmino): _84.IdentifiedClientState;
                    toAmino(message: _84.IdentifiedClientState): _84.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _84.IdentifiedClientStateAminoMsg): _84.IdentifiedClientState;
                    toAminoMsg(message: _84.IdentifiedClientState): _84.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _84.IdentifiedClientStateProtoMsg): _84.IdentifiedClientState;
                    toProto(message: _84.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _84.IdentifiedClientState): _84.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _84.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_84.ConsensusStateWithHeight>): _84.ConsensusStateWithHeight;
                    fromAmino(object: _84.ConsensusStateWithHeightAmino): _84.ConsensusStateWithHeight;
                    toAmino(message: _84.ConsensusStateWithHeight): _84.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _84.ConsensusStateWithHeightAminoMsg): _84.ConsensusStateWithHeight;
                    toAminoMsg(message: _84.ConsensusStateWithHeight): _84.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _84.ConsensusStateWithHeightProtoMsg): _84.ConsensusStateWithHeight;
                    toProto(message: _84.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _84.ConsensusStateWithHeight): _84.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _84.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientConsensusStates;
                    fromPartial(object: Partial<_84.ClientConsensusStates>): _84.ClientConsensusStates;
                    fromAmino(object: _84.ClientConsensusStatesAmino): _84.ClientConsensusStates;
                    toAmino(message: _84.ClientConsensusStates): _84.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _84.ClientConsensusStatesAminoMsg): _84.ClientConsensusStates;
                    toAminoMsg(message: _84.ClientConsensusStates): _84.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _84.ClientConsensusStatesProtoMsg): _84.ClientConsensusStates;
                    toProto(message: _84.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _84.ClientConsensusStates): _84.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _84.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientUpdateProposal;
                    fromPartial(object: Partial<_84.ClientUpdateProposal>): _84.ClientUpdateProposal;
                    fromAmino(object: _84.ClientUpdateProposalAmino): _84.ClientUpdateProposal;
                    toAmino(message: _84.ClientUpdateProposal): _84.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _84.ClientUpdateProposalAminoMsg): _84.ClientUpdateProposal;
                    toAminoMsg(message: _84.ClientUpdateProposal): _84.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _84.ClientUpdateProposalProtoMsg): _84.ClientUpdateProposal;
                    toProto(message: _84.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _84.ClientUpdateProposal): _84.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _84.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.UpgradeProposal;
                    fromPartial(object: Partial<_84.UpgradeProposal>): _84.UpgradeProposal;
                    fromAmino(object: _84.UpgradeProposalAmino): _84.UpgradeProposal;
                    toAmino(message: _84.UpgradeProposal): _84.UpgradeProposalAmino;
                    fromAminoMsg(object: _84.UpgradeProposalAminoMsg): _84.UpgradeProposal;
                    toAminoMsg(message: _84.UpgradeProposal): _84.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _84.UpgradeProposalProtoMsg): _84.UpgradeProposal;
                    toProto(message: _84.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _84.UpgradeProposal): _84.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _84.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Height;
                    fromPartial(object: Partial<_84.Height>): _84.Height;
                    fromAmino(object: _84.HeightAmino): _84.Height;
                    toAmino(message: _84.Height): _84.HeightAmino;
                    fromAminoMsg(object: _84.HeightAminoMsg): _84.Height;
                    toAminoMsg(message: _84.Height): _84.HeightAminoMsg;
                    fromProtoMsg(message: _84.HeightProtoMsg): _84.Height;
                    toProto(message: _84.Height): Uint8Array;
                    toProtoMsg(message: _84.Height): _84.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                    fromPartial(object: Partial<_84.Params>): _84.Params;
                    fromAmino(object: _84.ParamsAmino): _84.Params;
                    toAmino(message: _84.Params): _84.ParamsAmino;
                    fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                    toAminoMsg(message: _84.Params): _84.ParamsAminoMsg;
                    fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                    toProto(message: _84.Params): Uint8Array;
                    toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _88.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MerkleRoot;
                    fromPartial(object: Partial<_88.MerkleRoot>): _88.MerkleRoot;
                    fromAmino(object: _88.MerkleRootAmino): _88.MerkleRoot;
                    toAmino(message: _88.MerkleRoot): _88.MerkleRootAmino;
                    fromAminoMsg(object: _88.MerkleRootAminoMsg): _88.MerkleRoot;
                    toAminoMsg(message: _88.MerkleRoot): _88.MerkleRootAminoMsg;
                    fromProtoMsg(message: _88.MerkleRootProtoMsg): _88.MerkleRoot;
                    toProto(message: _88.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _88.MerkleRoot): _88.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _88.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MerklePrefix;
                    fromPartial(object: Partial<_88.MerklePrefix>): _88.MerklePrefix;
                    fromAmino(object: _88.MerklePrefixAmino): _88.MerklePrefix;
                    toAmino(message: _88.MerklePrefix): _88.MerklePrefixAmino;
                    fromAminoMsg(object: _88.MerklePrefixAminoMsg): _88.MerklePrefix;
                    toAminoMsg(message: _88.MerklePrefix): _88.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _88.MerklePrefixProtoMsg): _88.MerklePrefix;
                    toProto(message: _88.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _88.MerklePrefix): _88.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _88.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MerklePath;
                    fromPartial(object: Partial<_88.MerklePath>): _88.MerklePath;
                    fromAmino(object: _88.MerklePathAmino): _88.MerklePath;
                    toAmino(message: _88.MerklePath): _88.MerklePathAmino;
                    fromAminoMsg(object: _88.MerklePathAminoMsg): _88.MerklePath;
                    toAminoMsg(message: _88.MerklePath): _88.MerklePathAminoMsg;
                    fromProtoMsg(message: _88.MerklePathProtoMsg): _88.MerklePath;
                    toProto(message: _88.MerklePath): Uint8Array;
                    toProtoMsg(message: _88.MerklePath): _88.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _88.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MerkleProof;
                    fromPartial(object: Partial<_88.MerkleProof>): _88.MerkleProof;
                    fromAmino(object: _88.MerkleProofAmino): _88.MerkleProof;
                    toAmino(message: _88.MerkleProof): _88.MerkleProofAmino;
                    fromAminoMsg(object: _88.MerkleProofAminoMsg): _88.MerkleProof;
                    toAminoMsg(message: _88.MerkleProof): _88.MerkleProofAminoMsg;
                    fromProtoMsg(message: _88.MerkleProofProtoMsg): _88.MerkleProof;
                    toProto(message: _88.MerkleProof): Uint8Array;
                    toProtoMsg(message: _88.MerkleProof): _88.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _255.MsgClientImpl;
                QueryClientImpl: typeof _249.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _91.QueryConnectionRequest): Promise<_91.QueryConnectionResponse>;
                    connections(request?: _91.QueryConnectionsRequest): Promise<_91.QueryConnectionsResponse>;
                    clientConnections(request: _91.QueryClientConnectionsRequest): Promise<_91.QueryClientConnectionsResponse>;
                    connectionClientState(request: _91.QueryConnectionClientStateRequest): Promise<_91.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _91.QueryConnectionConsensusStateRequest): Promise<_91.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _91.QueryConnectionParamsRequest): Promise<_91.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _242.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _92.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _92.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _92.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _92.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _92.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _92.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _92.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _92.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _92.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _92.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _92.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _92.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _92.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _92.MsgConnectionOpenInit) => _92.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _92.MsgConnectionOpenInitAmino) => _92.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _92.MsgConnectionOpenTry) => _92.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _92.MsgConnectionOpenTryAmino) => _92.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _92.MsgConnectionOpenAck) => _92.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _92.MsgConnectionOpenAckAmino) => _92.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _92.MsgConnectionOpenConfirm) => _92.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _92.MsgConnectionOpenConfirmAmino) => _92.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _92.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_92.MsgConnectionOpenInit>): _92.MsgConnectionOpenInit;
                    fromAmino(object: _92.MsgConnectionOpenInitAmino): _92.MsgConnectionOpenInit;
                    toAmino(message: _92.MsgConnectionOpenInit): _92.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenInitAminoMsg): _92.MsgConnectionOpenInit;
                    toAminoMsg(message: _92.MsgConnectionOpenInit): _92.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenInitProtoMsg): _92.MsgConnectionOpenInit;
                    toProto(message: _92.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenInit): _92.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _92.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_92.MsgConnectionOpenInitResponse>): _92.MsgConnectionOpenInitResponse;
                    fromAmino(_: _92.MsgConnectionOpenInitResponseAmino): _92.MsgConnectionOpenInitResponse;
                    toAmino(_: _92.MsgConnectionOpenInitResponse): _92.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenInitResponseAminoMsg): _92.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _92.MsgConnectionOpenInitResponse): _92.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenInitResponseProtoMsg): _92.MsgConnectionOpenInitResponse;
                    toProto(message: _92.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenInitResponse): _92.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _92.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_92.MsgConnectionOpenTry>): _92.MsgConnectionOpenTry;
                    fromAmino(object: _92.MsgConnectionOpenTryAmino): _92.MsgConnectionOpenTry;
                    toAmino(message: _92.MsgConnectionOpenTry): _92.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenTryAminoMsg): _92.MsgConnectionOpenTry;
                    toAminoMsg(message: _92.MsgConnectionOpenTry): _92.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenTryProtoMsg): _92.MsgConnectionOpenTry;
                    toProto(message: _92.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenTry): _92.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _92.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_92.MsgConnectionOpenTryResponse>): _92.MsgConnectionOpenTryResponse;
                    fromAmino(_: _92.MsgConnectionOpenTryResponseAmino): _92.MsgConnectionOpenTryResponse;
                    toAmino(_: _92.MsgConnectionOpenTryResponse): _92.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenTryResponseAminoMsg): _92.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _92.MsgConnectionOpenTryResponse): _92.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenTryResponseProtoMsg): _92.MsgConnectionOpenTryResponse;
                    toProto(message: _92.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenTryResponse): _92.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _92.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_92.MsgConnectionOpenAck>): _92.MsgConnectionOpenAck;
                    fromAmino(object: _92.MsgConnectionOpenAckAmino): _92.MsgConnectionOpenAck;
                    toAmino(message: _92.MsgConnectionOpenAck): _92.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenAckAminoMsg): _92.MsgConnectionOpenAck;
                    toAminoMsg(message: _92.MsgConnectionOpenAck): _92.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenAckProtoMsg): _92.MsgConnectionOpenAck;
                    toProto(message: _92.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenAck): _92.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _92.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_92.MsgConnectionOpenAckResponse>): _92.MsgConnectionOpenAckResponse;
                    fromAmino(_: _92.MsgConnectionOpenAckResponseAmino): _92.MsgConnectionOpenAckResponse;
                    toAmino(_: _92.MsgConnectionOpenAckResponse): _92.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenAckResponseAminoMsg): _92.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _92.MsgConnectionOpenAckResponse): _92.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenAckResponseProtoMsg): _92.MsgConnectionOpenAckResponse;
                    toProto(message: _92.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenAckResponse): _92.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _92.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_92.MsgConnectionOpenConfirm>): _92.MsgConnectionOpenConfirm;
                    fromAmino(object: _92.MsgConnectionOpenConfirmAmino): _92.MsgConnectionOpenConfirm;
                    toAmino(message: _92.MsgConnectionOpenConfirm): _92.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenConfirmAminoMsg): _92.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _92.MsgConnectionOpenConfirm): _92.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenConfirmProtoMsg): _92.MsgConnectionOpenConfirm;
                    toProto(message: _92.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenConfirm): _92.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _92.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_92.MsgConnectionOpenConfirmResponse>): _92.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _92.MsgConnectionOpenConfirmResponseAmino): _92.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _92.MsgConnectionOpenConfirmResponse): _92.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _92.MsgConnectionOpenConfirmResponseAminoMsg): _92.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _92.MsgConnectionOpenConfirmResponse): _92.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _92.MsgConnectionOpenConfirmResponseProtoMsg): _92.MsgConnectionOpenConfirmResponse;
                    toProto(message: _92.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _92.MsgConnectionOpenConfirmResponse): _92.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionRequest;
                    fromPartial(object: Partial<_91.QueryConnectionRequest>): _91.QueryConnectionRequest;
                    fromAmino(object: _91.QueryConnectionRequestAmino): _91.QueryConnectionRequest;
                    toAmino(message: _91.QueryConnectionRequest): _91.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _91.QueryConnectionRequestAminoMsg): _91.QueryConnectionRequest;
                    toAminoMsg(message: _91.QueryConnectionRequest): _91.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionRequestProtoMsg): _91.QueryConnectionRequest;
                    toProto(message: _91.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionRequest): _91.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionResponse;
                    fromPartial(object: Partial<_91.QueryConnectionResponse>): _91.QueryConnectionResponse;
                    fromAmino(object: _91.QueryConnectionResponseAmino): _91.QueryConnectionResponse;
                    toAmino(message: _91.QueryConnectionResponse): _91.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _91.QueryConnectionResponseAminoMsg): _91.QueryConnectionResponse;
                    toAminoMsg(message: _91.QueryConnectionResponse): _91.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionResponseProtoMsg): _91.QueryConnectionResponse;
                    toProto(message: _91.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionResponse): _91.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionsRequest;
                    fromPartial(object: Partial<_91.QueryConnectionsRequest>): _91.QueryConnectionsRequest;
                    fromAmino(object: _91.QueryConnectionsRequestAmino): _91.QueryConnectionsRequest;
                    toAmino(message: _91.QueryConnectionsRequest): _91.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _91.QueryConnectionsRequestAminoMsg): _91.QueryConnectionsRequest;
                    toAminoMsg(message: _91.QueryConnectionsRequest): _91.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionsRequestProtoMsg): _91.QueryConnectionsRequest;
                    toProto(message: _91.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionsRequest): _91.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionsResponse;
                    fromPartial(object: Partial<_91.QueryConnectionsResponse>): _91.QueryConnectionsResponse;
                    fromAmino(object: _91.QueryConnectionsResponseAmino): _91.QueryConnectionsResponse;
                    toAmino(message: _91.QueryConnectionsResponse): _91.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _91.QueryConnectionsResponseAminoMsg): _91.QueryConnectionsResponse;
                    toAminoMsg(message: _91.QueryConnectionsResponse): _91.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionsResponseProtoMsg): _91.QueryConnectionsResponse;
                    toProto(message: _91.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionsResponse): _91.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _91.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_91.QueryClientConnectionsRequest>): _91.QueryClientConnectionsRequest;
                    fromAmino(object: _91.QueryClientConnectionsRequestAmino): _91.QueryClientConnectionsRequest;
                    toAmino(message: _91.QueryClientConnectionsRequest): _91.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _91.QueryClientConnectionsRequestAminoMsg): _91.QueryClientConnectionsRequest;
                    toAminoMsg(message: _91.QueryClientConnectionsRequest): _91.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryClientConnectionsRequestProtoMsg): _91.QueryClientConnectionsRequest;
                    toProto(message: _91.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryClientConnectionsRequest): _91.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_91.QueryClientConnectionsResponse>): _91.QueryClientConnectionsResponse;
                    fromAmino(object: _91.QueryClientConnectionsResponseAmino): _91.QueryClientConnectionsResponse;
                    toAmino(message: _91.QueryClientConnectionsResponse): _91.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _91.QueryClientConnectionsResponseAminoMsg): _91.QueryClientConnectionsResponse;
                    toAminoMsg(message: _91.QueryClientConnectionsResponse): _91.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryClientConnectionsResponseProtoMsg): _91.QueryClientConnectionsResponse;
                    toProto(message: _91.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryClientConnectionsResponse): _91.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_91.QueryConnectionClientStateRequest>): _91.QueryConnectionClientStateRequest;
                    fromAmino(object: _91.QueryConnectionClientStateRequestAmino): _91.QueryConnectionClientStateRequest;
                    toAmino(message: _91.QueryConnectionClientStateRequest): _91.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _91.QueryConnectionClientStateRequestAminoMsg): _91.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _91.QueryConnectionClientStateRequest): _91.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionClientStateRequestProtoMsg): _91.QueryConnectionClientStateRequest;
                    toProto(message: _91.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionClientStateRequest): _91.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_91.QueryConnectionClientStateResponse>): _91.QueryConnectionClientStateResponse;
                    fromAmino(object: _91.QueryConnectionClientStateResponseAmino): _91.QueryConnectionClientStateResponse;
                    toAmino(message: _91.QueryConnectionClientStateResponse): _91.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _91.QueryConnectionClientStateResponseAminoMsg): _91.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _91.QueryConnectionClientStateResponse): _91.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionClientStateResponseProtoMsg): _91.QueryConnectionClientStateResponse;
                    toProto(message: _91.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionClientStateResponse): _91.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_91.QueryConnectionConsensusStateRequest>): _91.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _91.QueryConnectionConsensusStateRequestAmino): _91.QueryConnectionConsensusStateRequest;
                    toAmino(message: _91.QueryConnectionConsensusStateRequest): _91.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _91.QueryConnectionConsensusStateRequestAminoMsg): _91.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _91.QueryConnectionConsensusStateRequest): _91.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionConsensusStateRequestProtoMsg): _91.QueryConnectionConsensusStateRequest;
                    toProto(message: _91.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionConsensusStateRequest): _91.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_91.QueryConnectionConsensusStateResponse>): _91.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _91.QueryConnectionConsensusStateResponseAmino): _91.QueryConnectionConsensusStateResponse;
                    toAmino(message: _91.QueryConnectionConsensusStateResponse): _91.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _91.QueryConnectionConsensusStateResponseAminoMsg): _91.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _91.QueryConnectionConsensusStateResponse): _91.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionConsensusStateResponseProtoMsg): _91.QueryConnectionConsensusStateResponse;
                    toProto(message: _91.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionConsensusStateResponse): _91.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _91.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_91.QueryConnectionParamsRequest>): _91.QueryConnectionParamsRequest;
                    fromAmino(_: _91.QueryConnectionParamsRequestAmino): _91.QueryConnectionParamsRequest;
                    toAmino(_: _91.QueryConnectionParamsRequest): _91.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _91.QueryConnectionParamsRequestAminoMsg): _91.QueryConnectionParamsRequest;
                    toAminoMsg(message: _91.QueryConnectionParamsRequest): _91.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionParamsRequestProtoMsg): _91.QueryConnectionParamsRequest;
                    toProto(message: _91.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionParamsRequest): _91.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _91.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_91.QueryConnectionParamsResponse>): _91.QueryConnectionParamsResponse;
                    fromAmino(object: _91.QueryConnectionParamsResponseAmino): _91.QueryConnectionParamsResponse;
                    toAmino(message: _91.QueryConnectionParamsResponse): _91.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _91.QueryConnectionParamsResponseAminoMsg): _91.QueryConnectionParamsResponse;
                    toAminoMsg(message: _91.QueryConnectionParamsResponse): _91.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryConnectionParamsResponseProtoMsg): _91.QueryConnectionParamsResponse;
                    toProto(message: _91.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryConnectionParamsResponse): _91.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                    fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                    fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                    toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                    fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                    toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                    fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                    toProto(message: _90.GenesisState): Uint8Array;
                    toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _89.State;
                stateToJSON(object: _89.State): string;
                State: typeof _89.State;
                StateSDKType: typeof _89.State;
                StateAmino: typeof _89.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _89.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConnectionEnd;
                    fromPartial(object: Partial<_89.ConnectionEnd>): _89.ConnectionEnd;
                    fromAmino(object: _89.ConnectionEndAmino): _89.ConnectionEnd;
                    toAmino(message: _89.ConnectionEnd): _89.ConnectionEndAmino;
                    fromAminoMsg(object: _89.ConnectionEndAminoMsg): _89.ConnectionEnd;
                    toAminoMsg(message: _89.ConnectionEnd): _89.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _89.ConnectionEndProtoMsg): _89.ConnectionEnd;
                    toProto(message: _89.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _89.ConnectionEnd): _89.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _89.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.IdentifiedConnection;
                    fromPartial(object: Partial<_89.IdentifiedConnection>): _89.IdentifiedConnection;
                    fromAmino(object: _89.IdentifiedConnectionAmino): _89.IdentifiedConnection;
                    toAmino(message: _89.IdentifiedConnection): _89.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _89.IdentifiedConnectionAminoMsg): _89.IdentifiedConnection;
                    toAminoMsg(message: _89.IdentifiedConnection): _89.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _89.IdentifiedConnectionProtoMsg): _89.IdentifiedConnection;
                    toProto(message: _89.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _89.IdentifiedConnection): _89.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _89.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Counterparty;
                    fromPartial(object: Partial<_89.Counterparty>): _89.Counterparty;
                    fromAmino(object: _89.CounterpartyAmino): _89.Counterparty;
                    toAmino(message: _89.Counterparty): _89.CounterpartyAmino;
                    fromAminoMsg(object: _89.CounterpartyAminoMsg): _89.Counterparty;
                    toAminoMsg(message: _89.Counterparty): _89.CounterpartyAminoMsg;
                    fromProtoMsg(message: _89.CounterpartyProtoMsg): _89.Counterparty;
                    toProto(message: _89.Counterparty): Uint8Array;
                    toProtoMsg(message: _89.Counterparty): _89.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _89.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientPaths;
                    fromPartial(object: Partial<_89.ClientPaths>): _89.ClientPaths;
                    fromAmino(object: _89.ClientPathsAmino): _89.ClientPaths;
                    toAmino(message: _89.ClientPaths): _89.ClientPathsAmino;
                    fromAminoMsg(object: _89.ClientPathsAminoMsg): _89.ClientPaths;
                    toAminoMsg(message: _89.ClientPaths): _89.ClientPathsAminoMsg;
                    fromProtoMsg(message: _89.ClientPathsProtoMsg): _89.ClientPaths;
                    toProto(message: _89.ClientPaths): Uint8Array;
                    toProtoMsg(message: _89.ClientPaths): _89.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _89.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConnectionPaths;
                    fromPartial(object: Partial<_89.ConnectionPaths>): _89.ConnectionPaths;
                    fromAmino(object: _89.ConnectionPathsAmino): _89.ConnectionPaths;
                    toAmino(message: _89.ConnectionPaths): _89.ConnectionPathsAmino;
                    fromAminoMsg(object: _89.ConnectionPathsAminoMsg): _89.ConnectionPaths;
                    toAminoMsg(message: _89.ConnectionPaths): _89.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _89.ConnectionPathsProtoMsg): _89.ConnectionPaths;
                    toProto(message: _89.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _89.ConnectionPaths): _89.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _89.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Version;
                    fromPartial(object: Partial<_89.Version>): _89.Version;
                    fromAmino(object: _89.VersionAmino): _89.Version;
                    toAmino(message: _89.Version): _89.VersionAmino;
                    fromAminoMsg(object: _89.VersionAminoMsg): _89.Version;
                    toAminoMsg(message: _89.Version): _89.VersionAminoMsg;
                    fromProtoMsg(message: _89.VersionProtoMsg): _89.Version;
                    toProto(message: _89.Version): Uint8Array;
                    toProtoMsg(message: _89.Version): _89.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Params;
                    fromPartial(object: Partial<_89.Params>): _89.Params;
                    fromAmino(object: _89.ParamsAmino): _89.Params;
                    toAmino(message: _89.Params): _89.ParamsAmino;
                    fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                    toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                    fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                    toProto(message: _89.Params): Uint8Array;
                    toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _93.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ClientState;
                    fromPartial(object: Partial<_93.ClientState>): _93.ClientState;
                    fromAmino(object: _93.ClientStateAmino): _93.ClientState;
                    toAmino(message: _93.ClientState): _93.ClientStateAmino;
                    fromAminoMsg(object: _93.ClientStateAminoMsg): _93.ClientState;
                    toAminoMsg(message: _93.ClientState): _93.ClientStateAminoMsg;
                    fromProtoMsg(message: _93.ClientStateProtoMsg): _93.ClientState;
                    toProto(message: _93.ClientState): Uint8Array;
                    toProtoMsg(message: _93.ClientState): _93.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _94.DataType;
                dataTypeToJSON(object: _94.DataType): string;
                DataType: typeof _94.DataType;
                DataTypeSDKType: typeof _94.DataType;
                DataTypeAmino: typeof _94.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _94.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ClientState;
                    fromPartial(object: Partial<_94.ClientState>): _94.ClientState;
                    fromAmino(object: _94.ClientStateAmino): _94.ClientState;
                    toAmino(message: _94.ClientState): _94.ClientStateAmino;
                    fromAminoMsg(object: _94.ClientStateAminoMsg): _94.ClientState;
                    toAminoMsg(message: _94.ClientState): _94.ClientStateAminoMsg;
                    fromProtoMsg(message: _94.ClientStateProtoMsg): _94.ClientState;
                    toProto(message: _94.ClientState): Uint8Array;
                    toProtoMsg(message: _94.ClientState): _94.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _94.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusState;
                    fromPartial(object: Partial<_94.ConsensusState>): _94.ConsensusState;
                    fromAmino(object: _94.ConsensusStateAmino): _94.ConsensusState;
                    toAmino(message: _94.ConsensusState): _94.ConsensusStateAmino;
                    fromAminoMsg(object: _94.ConsensusStateAminoMsg): _94.ConsensusState;
                    toAminoMsg(message: _94.ConsensusState): _94.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _94.ConsensusStateProtoMsg): _94.ConsensusState;
                    toProto(message: _94.ConsensusState): Uint8Array;
                    toProtoMsg(message: _94.ConsensusState): _94.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Header;
                    fromPartial(object: Partial<_94.Header>): _94.Header;
                    fromAmino(object: _94.HeaderAmino): _94.Header;
                    toAmino(message: _94.Header): _94.HeaderAmino;
                    fromAminoMsg(object: _94.HeaderAminoMsg): _94.Header;
                    toAminoMsg(message: _94.Header): _94.HeaderAminoMsg;
                    fromProtoMsg(message: _94.HeaderProtoMsg): _94.Header;
                    toProto(message: _94.Header): Uint8Array;
                    toProtoMsg(message: _94.Header): _94.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _94.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Misbehaviour;
                    fromPartial(object: Partial<_94.Misbehaviour>): _94.Misbehaviour;
                    fromAmino(object: _94.MisbehaviourAmino): _94.Misbehaviour;
                    toAmino(message: _94.Misbehaviour): _94.MisbehaviourAmino;
                    fromAminoMsg(object: _94.MisbehaviourAminoMsg): _94.Misbehaviour;
                    toAminoMsg(message: _94.Misbehaviour): _94.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _94.MisbehaviourProtoMsg): _94.Misbehaviour;
                    toProto(message: _94.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _94.Misbehaviour): _94.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _94.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignatureAndData;
                    fromPartial(object: Partial<_94.SignatureAndData>): _94.SignatureAndData;
                    fromAmino(object: _94.SignatureAndDataAmino): _94.SignatureAndData;
                    toAmino(message: _94.SignatureAndData): _94.SignatureAndDataAmino;
                    fromAminoMsg(object: _94.SignatureAndDataAminoMsg): _94.SignatureAndData;
                    toAminoMsg(message: _94.SignatureAndData): _94.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _94.SignatureAndDataProtoMsg): _94.SignatureAndData;
                    toProto(message: _94.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _94.SignatureAndData): _94.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _94.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TimestampedSignatureData;
                    fromPartial(object: Partial<_94.TimestampedSignatureData>): _94.TimestampedSignatureData;
                    fromAmino(object: _94.TimestampedSignatureDataAmino): _94.TimestampedSignatureData;
                    toAmino(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _94.TimestampedSignatureDataAminoMsg): _94.TimestampedSignatureData;
                    toAminoMsg(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _94.TimestampedSignatureDataProtoMsg): _94.TimestampedSignatureData;
                    toProto(message: _94.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _94.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignBytes;
                    fromPartial(object: Partial<_94.SignBytes>): _94.SignBytes;
                    fromAmino(object: _94.SignBytesAmino): _94.SignBytes;
                    toAmino(message: _94.SignBytes): _94.SignBytesAmino;
                    fromAminoMsg(object: _94.SignBytesAminoMsg): _94.SignBytes;
                    toAminoMsg(message: _94.SignBytes): _94.SignBytesAminoMsg;
                    fromProtoMsg(message: _94.SignBytesProtoMsg): _94.SignBytes;
                    toProto(message: _94.SignBytes): Uint8Array;
                    toProtoMsg(message: _94.SignBytes): _94.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _94.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.HeaderData;
                    fromPartial(object: Partial<_94.HeaderData>): _94.HeaderData;
                    fromAmino(object: _94.HeaderDataAmino): _94.HeaderData;
                    toAmino(message: _94.HeaderData): _94.HeaderDataAmino;
                    fromAminoMsg(object: _94.HeaderDataAminoMsg): _94.HeaderData;
                    toAminoMsg(message: _94.HeaderData): _94.HeaderDataAminoMsg;
                    fromProtoMsg(message: _94.HeaderDataProtoMsg): _94.HeaderData;
                    toProto(message: _94.HeaderData): Uint8Array;
                    toProtoMsg(message: _94.HeaderData): _94.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _94.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ClientStateData;
                    fromPartial(object: Partial<_94.ClientStateData>): _94.ClientStateData;
                    fromAmino(object: _94.ClientStateDataAmino): _94.ClientStateData;
                    toAmino(message: _94.ClientStateData): _94.ClientStateDataAmino;
                    fromAminoMsg(object: _94.ClientStateDataAminoMsg): _94.ClientStateData;
                    toAminoMsg(message: _94.ClientStateData): _94.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _94.ClientStateDataProtoMsg): _94.ClientStateData;
                    toProto(message: _94.ClientStateData): Uint8Array;
                    toProtoMsg(message: _94.ClientStateData): _94.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _94.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusStateData;
                    fromPartial(object: Partial<_94.ConsensusStateData>): _94.ConsensusStateData;
                    fromAmino(object: _94.ConsensusStateDataAmino): _94.ConsensusStateData;
                    toAmino(message: _94.ConsensusStateData): _94.ConsensusStateDataAmino;
                    fromAminoMsg(object: _94.ConsensusStateDataAminoMsg): _94.ConsensusStateData;
                    toAminoMsg(message: _94.ConsensusStateData): _94.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _94.ConsensusStateDataProtoMsg): _94.ConsensusStateData;
                    toProto(message: _94.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _94.ConsensusStateData): _94.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _94.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConnectionStateData;
                    fromPartial(object: Partial<_94.ConnectionStateData>): _94.ConnectionStateData;
                    fromAmino(object: _94.ConnectionStateDataAmino): _94.ConnectionStateData;
                    toAmino(message: _94.ConnectionStateData): _94.ConnectionStateDataAmino;
                    fromAminoMsg(object: _94.ConnectionStateDataAminoMsg): _94.ConnectionStateData;
                    toAminoMsg(message: _94.ConnectionStateData): _94.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _94.ConnectionStateDataProtoMsg): _94.ConnectionStateData;
                    toProto(message: _94.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _94.ConnectionStateData): _94.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _94.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ChannelStateData;
                    fromPartial(object: Partial<_94.ChannelStateData>): _94.ChannelStateData;
                    fromAmino(object: _94.ChannelStateDataAmino): _94.ChannelStateData;
                    toAmino(message: _94.ChannelStateData): _94.ChannelStateDataAmino;
                    fromAminoMsg(object: _94.ChannelStateDataAminoMsg): _94.ChannelStateData;
                    toAminoMsg(message: _94.ChannelStateData): _94.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _94.ChannelStateDataProtoMsg): _94.ChannelStateData;
                    toProto(message: _94.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _94.ChannelStateData): _94.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _94.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketCommitmentData;
                    fromPartial(object: Partial<_94.PacketCommitmentData>): _94.PacketCommitmentData;
                    fromAmino(object: _94.PacketCommitmentDataAmino): _94.PacketCommitmentData;
                    toAmino(message: _94.PacketCommitmentData): _94.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _94.PacketCommitmentDataAminoMsg): _94.PacketCommitmentData;
                    toAminoMsg(message: _94.PacketCommitmentData): _94.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _94.PacketCommitmentDataProtoMsg): _94.PacketCommitmentData;
                    toProto(message: _94.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _94.PacketCommitmentData): _94.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _94.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketAcknowledgementData;
                    fromPartial(object: Partial<_94.PacketAcknowledgementData>): _94.PacketAcknowledgementData;
                    fromAmino(object: _94.PacketAcknowledgementDataAmino): _94.PacketAcknowledgementData;
                    toAmino(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _94.PacketAcknowledgementDataAminoMsg): _94.PacketAcknowledgementData;
                    toAminoMsg(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _94.PacketAcknowledgementDataProtoMsg): _94.PacketAcknowledgementData;
                    toProto(message: _94.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _94.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_94.PacketReceiptAbsenceData>): _94.PacketReceiptAbsenceData;
                    fromAmino(object: _94.PacketReceiptAbsenceDataAmino): _94.PacketReceiptAbsenceData;
                    toAmino(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _94.PacketReceiptAbsenceDataAminoMsg): _94.PacketReceiptAbsenceData;
                    toAminoMsg(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _94.PacketReceiptAbsenceDataProtoMsg): _94.PacketReceiptAbsenceData;
                    toProto(message: _94.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _94.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.NextSequenceRecvData;
                    fromPartial(object: Partial<_94.NextSequenceRecvData>): _94.NextSequenceRecvData;
                    fromAmino(object: _94.NextSequenceRecvDataAmino): _94.NextSequenceRecvData;
                    toAmino(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _94.NextSequenceRecvDataAminoMsg): _94.NextSequenceRecvData;
                    toAminoMsg(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _94.NextSequenceRecvDataProtoMsg): _94.NextSequenceRecvData;
                    toProto(message: _94.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _95.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ClientState;
                    fromPartial(object: Partial<_95.ClientState>): _95.ClientState;
                    fromAmino(object: _95.ClientStateAmino): _95.ClientState;
                    toAmino(message: _95.ClientState): _95.ClientStateAmino;
                    fromAminoMsg(object: _95.ClientStateAminoMsg): _95.ClientState;
                    toAminoMsg(message: _95.ClientState): _95.ClientStateAminoMsg;
                    fromProtoMsg(message: _95.ClientStateProtoMsg): _95.ClientState;
                    toProto(message: _95.ClientState): Uint8Array;
                    toProtoMsg(message: _95.ClientState): _95.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _95.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ConsensusState;
                    fromPartial(object: Partial<_95.ConsensusState>): _95.ConsensusState;
                    fromAmino(object: _95.ConsensusStateAmino): _95.ConsensusState;
                    toAmino(message: _95.ConsensusState): _95.ConsensusStateAmino;
                    fromAminoMsg(object: _95.ConsensusStateAminoMsg): _95.ConsensusState;
                    toAminoMsg(message: _95.ConsensusState): _95.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _95.ConsensusStateProtoMsg): _95.ConsensusState;
                    toProto(message: _95.ConsensusState): Uint8Array;
                    toProtoMsg(message: _95.ConsensusState): _95.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _95.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Header;
                    fromPartial(object: Partial<_95.Header>): _95.Header;
                    fromAmino(object: _95.HeaderAmino): _95.Header;
                    toAmino(message: _95.Header): _95.HeaderAmino;
                    fromAminoMsg(object: _95.HeaderAminoMsg): _95.Header;
                    toAminoMsg(message: _95.Header): _95.HeaderAminoMsg;
                    fromProtoMsg(message: _95.HeaderProtoMsg): _95.Header;
                    toProto(message: _95.Header): Uint8Array;
                    toProtoMsg(message: _95.Header): _95.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _95.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Misbehaviour;
                    fromPartial(object: Partial<_95.Misbehaviour>): _95.Misbehaviour;
                    fromAmino(object: _95.MisbehaviourAmino): _95.Misbehaviour;
                    toAmino(message: _95.Misbehaviour): _95.MisbehaviourAmino;
                    fromAminoMsg(object: _95.MisbehaviourAminoMsg): _95.Misbehaviour;
                    toAminoMsg(message: _95.Misbehaviour): _95.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _95.MisbehaviourProtoMsg): _95.Misbehaviour;
                    toProto(message: _95.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _95.Misbehaviour): _95.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _95.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureAndData;
                    fromPartial(object: Partial<_95.SignatureAndData>): _95.SignatureAndData;
                    fromAmino(object: _95.SignatureAndDataAmino): _95.SignatureAndData;
                    toAmino(message: _95.SignatureAndData): _95.SignatureAndDataAmino;
                    fromAminoMsg(object: _95.SignatureAndDataAminoMsg): _95.SignatureAndData;
                    toAminoMsg(message: _95.SignatureAndData): _95.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _95.SignatureAndDataProtoMsg): _95.SignatureAndData;
                    toProto(message: _95.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _95.SignatureAndData): _95.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _95.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.TimestampedSignatureData;
                    fromPartial(object: Partial<_95.TimestampedSignatureData>): _95.TimestampedSignatureData;
                    fromAmino(object: _95.TimestampedSignatureDataAmino): _95.TimestampedSignatureData;
                    toAmino(message: _95.TimestampedSignatureData): _95.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _95.TimestampedSignatureDataAminoMsg): _95.TimestampedSignatureData;
                    toAminoMsg(message: _95.TimestampedSignatureData): _95.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _95.TimestampedSignatureDataProtoMsg): _95.TimestampedSignatureData;
                    toProto(message: _95.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _95.TimestampedSignatureData): _95.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _95.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignBytes;
                    fromPartial(object: Partial<_95.SignBytes>): _95.SignBytes;
                    fromAmino(object: _95.SignBytesAmino): _95.SignBytes;
                    toAmino(message: _95.SignBytes): _95.SignBytesAmino;
                    fromAminoMsg(object: _95.SignBytesAminoMsg): _95.SignBytes;
                    toAminoMsg(message: _95.SignBytes): _95.SignBytesAminoMsg;
                    fromProtoMsg(message: _95.SignBytesProtoMsg): _95.SignBytes;
                    toProto(message: _95.SignBytes): Uint8Array;
                    toProtoMsg(message: _95.SignBytes): _95.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _95.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.HeaderData;
                    fromPartial(object: Partial<_95.HeaderData>): _95.HeaderData;
                    fromAmino(object: _95.HeaderDataAmino): _95.HeaderData;
                    toAmino(message: _95.HeaderData): _95.HeaderDataAmino;
                    fromAminoMsg(object: _95.HeaderDataAminoMsg): _95.HeaderData;
                    toAminoMsg(message: _95.HeaderData): _95.HeaderDataAminoMsg;
                    fromProtoMsg(message: _95.HeaderDataProtoMsg): _95.HeaderData;
                    toProto(message: _95.HeaderData): Uint8Array;
                    toProtoMsg(message: _95.HeaderData): _95.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _96.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClientState;
                    fromPartial(object: Partial<_96.ClientState>): _96.ClientState;
                    fromAmino(object: _96.ClientStateAmino): _96.ClientState;
                    toAmino(message: _96.ClientState): _96.ClientStateAmino;
                    fromAminoMsg(object: _96.ClientStateAminoMsg): _96.ClientState;
                    toAminoMsg(message: _96.ClientState): _96.ClientStateAminoMsg;
                    fromProtoMsg(message: _96.ClientStateProtoMsg): _96.ClientState;
                    toProto(message: _96.ClientState): Uint8Array;
                    toProtoMsg(message: _96.ClientState): _96.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _96.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ConsensusState;
                    fromPartial(object: Partial<_96.ConsensusState>): _96.ConsensusState;
                    fromAmino(object: _96.ConsensusStateAmino): _96.ConsensusState;
                    toAmino(message: _96.ConsensusState): _96.ConsensusStateAmino;
                    fromAminoMsg(object: _96.ConsensusStateAminoMsg): _96.ConsensusState;
                    toAminoMsg(message: _96.ConsensusState): _96.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _96.ConsensusStateProtoMsg): _96.ConsensusState;
                    toProto(message: _96.ConsensusState): Uint8Array;
                    toProtoMsg(message: _96.ConsensusState): _96.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _96.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Misbehaviour;
                    fromPartial(object: Partial<_96.Misbehaviour>): _96.Misbehaviour;
                    fromAmino(object: _96.MisbehaviourAmino): _96.Misbehaviour;
                    toAmino(message: _96.Misbehaviour): _96.MisbehaviourAmino;
                    fromAminoMsg(object: _96.MisbehaviourAminoMsg): _96.Misbehaviour;
                    toAminoMsg(message: _96.Misbehaviour): _96.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _96.MisbehaviourProtoMsg): _96.Misbehaviour;
                    toProto(message: _96.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _96.Misbehaviour): _96.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _96.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Header;
                    fromPartial(object: Partial<_96.Header>): _96.Header;
                    fromAmino(object: _96.HeaderAmino): _96.Header;
                    toAmino(message: _96.Header): _96.HeaderAmino;
                    fromAminoMsg(object: _96.HeaderAminoMsg): _96.Header;
                    toAminoMsg(message: _96.Header): _96.HeaderAminoMsg;
                    fromProtoMsg(message: _96.HeaderProtoMsg): _96.Header;
                    toProto(message: _96.Header): Uint8Array;
                    toProtoMsg(message: _96.Header): _96.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _96.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Fraction;
                    fromPartial(object: Partial<_96.Fraction>): _96.Fraction;
                    fromAmino(object: _96.FractionAmino): _96.Fraction;
                    toAmino(message: _96.Fraction): _96.FractionAmino;
                    fromAminoMsg(object: _96.FractionAminoMsg): _96.Fraction;
                    toAminoMsg(message: _96.Fraction): _96.FractionAminoMsg;
                    fromProtoMsg(message: _96.FractionProtoMsg): _96.Fraction;
                    toProto(message: _96.Fraction): Uint8Array;
                    toProtoMsg(message: _96.Fraction): _96.FractionProtoMsg;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
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
                    fee: {
                        v1: _250.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _251.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _252.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _253.MsgClientImpl;
                    };
                    client: {
                        v1: _254.MsgClientImpl;
                    };
                    connection: {
                        v1: _255.MsgClientImpl;
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
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        baseDenom(request: import("../cosmos/bank/v1beta1/query").QueryBaseDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _63.QueryIncentivizedPacketsRequest): Promise<_63.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _63.QueryIncentivizedPacketRequest): Promise<_63.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _63.QueryIncentivizedPacketsForChannelRequest): Promise<_63.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _63.QueryTotalRecvFeesRequest): Promise<_63.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _63.QueryTotalAckFeesRequest): Promise<_63.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _63.QueryTotalTimeoutFeesRequest): Promise<_63.QueryTotalTimeoutFeesResponse>;
                            payee(request: _63.QueryPayeeRequest): Promise<_63.QueryPayeeResponse>;
                            counterpartyPayee(request: _63.QueryCounterpartyPayeeRequest): Promise<_63.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _63.QueryFeeEnabledChannelsRequest): Promise<_63.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _63.QueryFeeEnabledChannelRequest): Promise<_63.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _66.QueryInterchainAccountRequest): Promise<_66.QueryInterchainAccountResponse>;
                                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _76.QueryDenomTraceRequest): Promise<_76.QueryDenomTraceResponse>;
                            denomTraces(request?: _76.QueryDenomTracesRequest): Promise<_76.QueryDenomTracesResponse>;
                            params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                            denomHash(request: _76.QueryDenomHashRequest): Promise<_76.QueryDenomHashResponse>;
                            escrowAddress(request: _76.QueryEscrowAddressRequest): Promise<_76.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _82.QueryChannelRequest): Promise<_82.QueryChannelResponse>;
                            channels(request?: _82.QueryChannelsRequest): Promise<_82.QueryChannelsResponse>;
                            connectionChannels(request: _82.QueryConnectionChannelsRequest): Promise<_82.QueryConnectionChannelsResponse>;
                            channelClientState(request: _82.QueryChannelClientStateRequest): Promise<_82.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _82.QueryChannelConsensusStateRequest): Promise<_82.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _82.QueryPacketCommitmentRequest): Promise<_82.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _82.QueryPacketCommitmentsRequest): Promise<_82.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _82.QueryPacketReceiptRequest): Promise<_82.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _82.QueryPacketAcknowledgementRequest): Promise<_82.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _82.QueryPacketAcknowledgementsRequest): Promise<_82.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _82.QueryUnreceivedPacketsRequest): Promise<_82.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _82.QueryUnreceivedAcksRequest): Promise<_82.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _82.QueryNextSequenceReceiveRequest): Promise<_82.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _86.QueryClientStateRequest): Promise<_86.QueryClientStateResponse>;
                            clientStates(request?: _86.QueryClientStatesRequest): Promise<_86.QueryClientStatesResponse>;
                            consensusState(request: _86.QueryConsensusStateRequest): Promise<_86.QueryConsensusStateResponse>;
                            consensusStates(request: _86.QueryConsensusStatesRequest): Promise<_86.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _86.QueryConsensusStateHeightsRequest): Promise<_86.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _86.QueryClientStatusRequest): Promise<_86.QueryClientStatusResponse>;
                            clientParams(request?: _86.QueryClientParamsRequest): Promise<_86.QueryClientParamsResponse>;
                            upgradedClientState(request?: _86.QueryUpgradedClientStateRequest): Promise<_86.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _86.QueryUpgradedConsensusStateRequest): Promise<_86.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _91.QueryConnectionRequest): Promise<_91.QueryConnectionResponse>;
                            connections(request?: _91.QueryConnectionsRequest): Promise<_91.QueryConnectionsResponse>;
                            clientConnections(request: _91.QueryClientConnectionsRequest): Promise<_91.QueryClientConnectionsResponse>;
                            connectionClientState(request: _91.QueryConnectionClientStateRequest): Promise<_91.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _91.QueryConnectionConsensusStateRequest): Promise<_91.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _91.QueryConnectionParamsRequest): Promise<_91.QueryConnectionParamsResponse>;
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
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
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
                    fee: {
                        v1: _236.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _237.LCDQueryClient;
                        };
                        host: {
                            v1: _238.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _239.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _240.LCDQueryClient;
                    };
                    client: {
                        v1: _241.LCDQueryClient;
                    };
                    connection: {
                        v1: _242.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
