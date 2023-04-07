import * as _62 from "./applications/fee/v1/ack";
import * as _63 from "./applications/fee/v1/fee";
import * as _64 from "./applications/fee/v1/genesis";
import * as _65 from "./applications/fee/v1/metadata";
import * as _66 from "./applications/fee/v1/query";
import * as _67 from "./applications/fee/v1/tx";
import * as _68 from "./applications/interchain_accounts/controller/v1/controller";
import * as _69 from "./applications/interchain_accounts/controller/v1/query";
import * as _70 from "./applications/interchain_accounts/controller/v1/tx";
import * as _71 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _72 from "./applications/interchain_accounts/host/v1/host";
import * as _73 from "./applications/interchain_accounts/host/v1/query";
import * as _74 from "./applications/interchain_accounts/v1/account";
import * as _75 from "./applications/interchain_accounts/v1/metadata";
import * as _76 from "./applications/interchain_accounts/v1/packet";
import * as _77 from "./applications/transfer/v1/authz";
import * as _78 from "./applications/transfer/v1/genesis";
import * as _79 from "./applications/transfer/v1/query";
import * as _80 from "./applications/transfer/v1/transfer";
import * as _81 from "./applications/transfer/v1/tx";
import * as _82 from "./applications/transfer/v2/packet";
import * as _83 from "./core/channel/v1/channel";
import * as _84 from "./core/channel/v1/genesis";
import * as _85 from "./core/channel/v1/query";
import * as _86 from "./core/channel/v1/tx";
import * as _87 from "./core/client/v1/client";
import * as _88 from "./core/client/v1/genesis";
import * as _89 from "./core/client/v1/query";
import * as _90 from "./core/client/v1/tx";
import * as _91 from "./core/commitment/v1/commitment";
import * as _92 from "./core/connection/v1/connection";
import * as _93 from "./core/connection/v1/genesis";
import * as _94 from "./core/connection/v1/query";
import * as _95 from "./core/connection/v1/tx";
import * as _96 from "./lightclients/localhost/v2/localhost";
import * as _97 from "./lightclients/solomachine/v2/solomachine";
import * as _98 from "./lightclients/solomachine/v3/solomachine";
import * as _99 from "./lightclients/tendermint/v1/tendermint";
import * as _241 from "./applications/fee/v1/query.lcd";
import * as _242 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _243 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _244 from "./applications/transfer/v1/query.lcd";
import * as _245 from "./core/channel/v1/query.lcd";
import * as _246 from "./core/client/v1/query.lcd";
import * as _247 from "./core/connection/v1/query.lcd";
import * as _248 from "./applications/fee/v1/query.rpc.Query";
import * as _249 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _250 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _251 from "./applications/transfer/v1/query.rpc.Query";
import * as _252 from "./core/channel/v1/query.rpc.Query";
import * as _253 from "./core/client/v1/query.rpc.Query";
import * as _254 from "./core/connection/v1/query.rpc.Query";
import * as _255 from "./applications/fee/v1/tx.rpc.msg";
import * as _256 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _257 from "./applications/transfer/v1/tx.rpc.msg";
import * as _258 from "./core/channel/v1/tx.rpc.msg";
import * as _259 from "./core/client/v1/tx.rpc.msg";
import * as _260 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _255.MsgClientImpl;
                QueryClientImpl: typeof _248.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _66.QueryIncentivizedPacketsRequest): Promise<_66.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _66.QueryIncentivizedPacketRequest): Promise<_66.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _66.QueryIncentivizedPacketsForChannelRequest): Promise<_66.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _66.QueryTotalRecvFeesRequest): Promise<_66.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _66.QueryTotalAckFeesRequest): Promise<_66.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _66.QueryTotalTimeoutFeesRequest): Promise<_66.QueryTotalTimeoutFeesResponse>;
                    payee(request: _66.QueryPayeeRequest): Promise<_66.QueryPayeeResponse>;
                    counterpartyPayee(request: _66.QueryCounterpartyPayeeRequest): Promise<_66.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _66.QueryFeeEnabledChannelsRequest): Promise<_66.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _66.QueryFeeEnabledChannelRequest): Promise<_66.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _241.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _67.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _67.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _67.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _67.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _67.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _67.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _67.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _67.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _67.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _67.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _67.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _67.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _67.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _67.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _67.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _67.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _67.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _67.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _67.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _67.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _67.MsgRegisterPayee) => _67.MsgRegisterPayeeAmino;
                        fromAmino: (object: _67.MsgRegisterPayeeAmino) => _67.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _67.MsgRegisterCounterpartyPayee) => _67.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _67.MsgRegisterCounterpartyPayeeAmino) => _67.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _67.MsgPayPacketFee) => _67.MsgPayPacketFeeAmino;
                        fromAmino: (object: _67.MsgPayPacketFeeAmino) => _67.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _67.MsgPayPacketFeeAsync) => _67.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _67.MsgPayPacketFeeAsyncAmino) => _67.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _67.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterPayee;
                    fromPartial(object: Partial<_67.MsgRegisterPayee>): _67.MsgRegisterPayee;
                    fromAmino(object: _67.MsgRegisterPayeeAmino): _67.MsgRegisterPayee;
                    toAmino(message: _67.MsgRegisterPayee): _67.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _67.MsgRegisterPayeeAminoMsg): _67.MsgRegisterPayee;
                    toAminoMsg(message: _67.MsgRegisterPayee): _67.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _67.MsgRegisterPayeeProtoMsg): _67.MsgRegisterPayee;
                    toProto(message: _67.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _67.MsgRegisterPayee): _67.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _67.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_67.MsgRegisterPayeeResponse>): _67.MsgRegisterPayeeResponse;
                    fromAmino(_: _67.MsgRegisterPayeeResponseAmino): _67.MsgRegisterPayeeResponse;
                    toAmino(_: _67.MsgRegisterPayeeResponse): _67.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _67.MsgRegisterPayeeResponseAminoMsg): _67.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _67.MsgRegisterPayeeResponse): _67.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _67.MsgRegisterPayeeResponseProtoMsg): _67.MsgRegisterPayeeResponse;
                    toProto(message: _67.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _67.MsgRegisterPayeeResponse): _67.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _67.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_67.MsgRegisterCounterpartyPayee>): _67.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _67.MsgRegisterCounterpartyPayeeAmino): _67.MsgRegisterCounterpartyPayee;
                    toAmino(message: _67.MsgRegisterCounterpartyPayee): _67.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _67.MsgRegisterCounterpartyPayeeAminoMsg): _67.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _67.MsgRegisterCounterpartyPayee): _67.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _67.MsgRegisterCounterpartyPayeeProtoMsg): _67.MsgRegisterCounterpartyPayee;
                    toProto(message: _67.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _67.MsgRegisterCounterpartyPayee): _67.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _67.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_67.MsgRegisterCounterpartyPayeeResponse>): _67.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _67.MsgRegisterCounterpartyPayeeResponseAmino): _67.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _67.MsgRegisterCounterpartyPayeeResponse): _67.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _67.MsgRegisterCounterpartyPayeeResponseAminoMsg): _67.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _67.MsgRegisterCounterpartyPayeeResponse): _67.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _67.MsgRegisterCounterpartyPayeeResponseProtoMsg): _67.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _67.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _67.MsgRegisterCounterpartyPayeeResponse): _67.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _67.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgPayPacketFee;
                    fromPartial(object: Partial<_67.MsgPayPacketFee>): _67.MsgPayPacketFee;
                    fromAmino(object: _67.MsgPayPacketFeeAmino): _67.MsgPayPacketFee;
                    toAmino(message: _67.MsgPayPacketFee): _67.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _67.MsgPayPacketFeeAminoMsg): _67.MsgPayPacketFee;
                    toAminoMsg(message: _67.MsgPayPacketFee): _67.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _67.MsgPayPacketFeeProtoMsg): _67.MsgPayPacketFee;
                    toProto(message: _67.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _67.MsgPayPacketFee): _67.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _67.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_67.MsgPayPacketFeeResponse>): _67.MsgPayPacketFeeResponse;
                    fromAmino(_: _67.MsgPayPacketFeeResponseAmino): _67.MsgPayPacketFeeResponse;
                    toAmino(_: _67.MsgPayPacketFeeResponse): _67.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _67.MsgPayPacketFeeResponseAminoMsg): _67.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _67.MsgPayPacketFeeResponse): _67.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _67.MsgPayPacketFeeResponseProtoMsg): _67.MsgPayPacketFeeResponse;
                    toProto(message: _67.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _67.MsgPayPacketFeeResponse): _67.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _67.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_67.MsgPayPacketFeeAsync>): _67.MsgPayPacketFeeAsync;
                    fromAmino(object: _67.MsgPayPacketFeeAsyncAmino): _67.MsgPayPacketFeeAsync;
                    toAmino(message: _67.MsgPayPacketFeeAsync): _67.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _67.MsgPayPacketFeeAsyncAminoMsg): _67.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _67.MsgPayPacketFeeAsync): _67.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _67.MsgPayPacketFeeAsyncProtoMsg): _67.MsgPayPacketFeeAsync;
                    toProto(message: _67.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _67.MsgPayPacketFeeAsync): _67.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _67.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_67.MsgPayPacketFeeAsyncResponse>): _67.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _67.MsgPayPacketFeeAsyncResponseAmino): _67.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _67.MsgPayPacketFeeAsyncResponse): _67.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _67.MsgPayPacketFeeAsyncResponseAminoMsg): _67.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _67.MsgPayPacketFeeAsyncResponse): _67.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _67.MsgPayPacketFeeAsyncResponseProtoMsg): _67.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _67.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _67.MsgPayPacketFeeAsyncResponse): _67.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketsRequest>): _66.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _66.QueryIncentivizedPacketsRequestAmino): _66.QueryIncentivizedPacketsRequest;
                    toAmino(message: _66.QueryIncentivizedPacketsRequest): _66.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketsRequestAminoMsg): _66.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _66.QueryIncentivizedPacketsRequest): _66.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketsRequestProtoMsg): _66.QueryIncentivizedPacketsRequest;
                    toProto(message: _66.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketsRequest): _66.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketsResponse>): _66.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _66.QueryIncentivizedPacketsResponseAmino): _66.QueryIncentivizedPacketsResponse;
                    toAmino(message: _66.QueryIncentivizedPacketsResponse): _66.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketsResponseAminoMsg): _66.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _66.QueryIncentivizedPacketsResponse): _66.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketsResponseProtoMsg): _66.QueryIncentivizedPacketsResponse;
                    toProto(message: _66.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketsResponse): _66.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketRequest>): _66.QueryIncentivizedPacketRequest;
                    fromAmino(object: _66.QueryIncentivizedPacketRequestAmino): _66.QueryIncentivizedPacketRequest;
                    toAmino(message: _66.QueryIncentivizedPacketRequest): _66.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketRequestAminoMsg): _66.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _66.QueryIncentivizedPacketRequest): _66.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketRequestProtoMsg): _66.QueryIncentivizedPacketRequest;
                    toProto(message: _66.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketRequest): _66.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketResponse>): _66.QueryIncentivizedPacketResponse;
                    fromAmino(object: _66.QueryIncentivizedPacketResponseAmino): _66.QueryIncentivizedPacketResponse;
                    toAmino(message: _66.QueryIncentivizedPacketResponse): _66.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketResponseAminoMsg): _66.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _66.QueryIncentivizedPacketResponse): _66.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketResponseProtoMsg): _66.QueryIncentivizedPacketResponse;
                    toProto(message: _66.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketResponse): _66.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketsForChannelRequest>): _66.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _66.QueryIncentivizedPacketsForChannelRequestAmino): _66.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _66.QueryIncentivizedPacketsForChannelRequest): _66.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketsForChannelRequestAminoMsg): _66.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _66.QueryIncentivizedPacketsForChannelRequest): _66.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketsForChannelRequestProtoMsg): _66.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _66.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketsForChannelRequest): _66.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_66.QueryIncentivizedPacketsForChannelResponse>): _66.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _66.QueryIncentivizedPacketsForChannelResponseAmino): _66.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _66.QueryIncentivizedPacketsForChannelResponse): _66.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _66.QueryIncentivizedPacketsForChannelResponseAminoMsg): _66.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _66.QueryIncentivizedPacketsForChannelResponse): _66.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryIncentivizedPacketsForChannelResponseProtoMsg): _66.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _66.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryIncentivizedPacketsForChannelResponse): _66.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_66.QueryTotalRecvFeesRequest>): _66.QueryTotalRecvFeesRequest;
                    fromAmino(object: _66.QueryTotalRecvFeesRequestAmino): _66.QueryTotalRecvFeesRequest;
                    toAmino(message: _66.QueryTotalRecvFeesRequest): _66.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _66.QueryTotalRecvFeesRequestAminoMsg): _66.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _66.QueryTotalRecvFeesRequest): _66.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalRecvFeesRequestProtoMsg): _66.QueryTotalRecvFeesRequest;
                    toProto(message: _66.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalRecvFeesRequest): _66.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_66.QueryTotalRecvFeesResponse>): _66.QueryTotalRecvFeesResponse;
                    fromAmino(object: _66.QueryTotalRecvFeesResponseAmino): _66.QueryTotalRecvFeesResponse;
                    toAmino(message: _66.QueryTotalRecvFeesResponse): _66.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _66.QueryTotalRecvFeesResponseAminoMsg): _66.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _66.QueryTotalRecvFeesResponse): _66.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalRecvFeesResponseProtoMsg): _66.QueryTotalRecvFeesResponse;
                    toProto(message: _66.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalRecvFeesResponse): _66.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_66.QueryTotalAckFeesRequest>): _66.QueryTotalAckFeesRequest;
                    fromAmino(object: _66.QueryTotalAckFeesRequestAmino): _66.QueryTotalAckFeesRequest;
                    toAmino(message: _66.QueryTotalAckFeesRequest): _66.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _66.QueryTotalAckFeesRequestAminoMsg): _66.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _66.QueryTotalAckFeesRequest): _66.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalAckFeesRequestProtoMsg): _66.QueryTotalAckFeesRequest;
                    toProto(message: _66.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalAckFeesRequest): _66.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_66.QueryTotalAckFeesResponse>): _66.QueryTotalAckFeesResponse;
                    fromAmino(object: _66.QueryTotalAckFeesResponseAmino): _66.QueryTotalAckFeesResponse;
                    toAmino(message: _66.QueryTotalAckFeesResponse): _66.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _66.QueryTotalAckFeesResponseAminoMsg): _66.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _66.QueryTotalAckFeesResponse): _66.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalAckFeesResponseProtoMsg): _66.QueryTotalAckFeesResponse;
                    toProto(message: _66.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalAckFeesResponse): _66.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_66.QueryTotalTimeoutFeesRequest>): _66.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _66.QueryTotalTimeoutFeesRequestAmino): _66.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _66.QueryTotalTimeoutFeesRequest): _66.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _66.QueryTotalTimeoutFeesRequestAminoMsg): _66.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _66.QueryTotalTimeoutFeesRequest): _66.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalTimeoutFeesRequestProtoMsg): _66.QueryTotalTimeoutFeesRequest;
                    toProto(message: _66.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalTimeoutFeesRequest): _66.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_66.QueryTotalTimeoutFeesResponse>): _66.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _66.QueryTotalTimeoutFeesResponseAmino): _66.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _66.QueryTotalTimeoutFeesResponse): _66.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _66.QueryTotalTimeoutFeesResponseAminoMsg): _66.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _66.QueryTotalTimeoutFeesResponse): _66.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryTotalTimeoutFeesResponseProtoMsg): _66.QueryTotalTimeoutFeesResponse;
                    toProto(message: _66.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryTotalTimeoutFeesResponse): _66.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryPayeeRequest;
                    fromPartial(object: Partial<_66.QueryPayeeRequest>): _66.QueryPayeeRequest;
                    fromAmino(object: _66.QueryPayeeRequestAmino): _66.QueryPayeeRequest;
                    toAmino(message: _66.QueryPayeeRequest): _66.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _66.QueryPayeeRequestAminoMsg): _66.QueryPayeeRequest;
                    toAminoMsg(message: _66.QueryPayeeRequest): _66.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryPayeeRequestProtoMsg): _66.QueryPayeeRequest;
                    toProto(message: _66.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryPayeeRequest): _66.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryPayeeResponse;
                    fromPartial(object: Partial<_66.QueryPayeeResponse>): _66.QueryPayeeResponse;
                    fromAmino(object: _66.QueryPayeeResponseAmino): _66.QueryPayeeResponse;
                    toAmino(message: _66.QueryPayeeResponse): _66.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _66.QueryPayeeResponseAminoMsg): _66.QueryPayeeResponse;
                    toAminoMsg(message: _66.QueryPayeeResponse): _66.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryPayeeResponseProtoMsg): _66.QueryPayeeResponse;
                    toProto(message: _66.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryPayeeResponse): _66.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_66.QueryCounterpartyPayeeRequest>): _66.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _66.QueryCounterpartyPayeeRequestAmino): _66.QueryCounterpartyPayeeRequest;
                    toAmino(message: _66.QueryCounterpartyPayeeRequest): _66.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _66.QueryCounterpartyPayeeRequestAminoMsg): _66.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _66.QueryCounterpartyPayeeRequest): _66.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryCounterpartyPayeeRequestProtoMsg): _66.QueryCounterpartyPayeeRequest;
                    toProto(message: _66.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryCounterpartyPayeeRequest): _66.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_66.QueryCounterpartyPayeeResponse>): _66.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _66.QueryCounterpartyPayeeResponseAmino): _66.QueryCounterpartyPayeeResponse;
                    toAmino(message: _66.QueryCounterpartyPayeeResponse): _66.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _66.QueryCounterpartyPayeeResponseAminoMsg): _66.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _66.QueryCounterpartyPayeeResponse): _66.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryCounterpartyPayeeResponseProtoMsg): _66.QueryCounterpartyPayeeResponse;
                    toProto(message: _66.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryCounterpartyPayeeResponse): _66.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_66.QueryFeeEnabledChannelsRequest>): _66.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _66.QueryFeeEnabledChannelsRequestAmino): _66.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _66.QueryFeeEnabledChannelsRequest): _66.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _66.QueryFeeEnabledChannelsRequestAminoMsg): _66.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _66.QueryFeeEnabledChannelsRequest): _66.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryFeeEnabledChannelsRequestProtoMsg): _66.QueryFeeEnabledChannelsRequest;
                    toProto(message: _66.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryFeeEnabledChannelsRequest): _66.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_66.QueryFeeEnabledChannelsResponse>): _66.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _66.QueryFeeEnabledChannelsResponseAmino): _66.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _66.QueryFeeEnabledChannelsResponse): _66.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _66.QueryFeeEnabledChannelsResponseAminoMsg): _66.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _66.QueryFeeEnabledChannelsResponse): _66.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryFeeEnabledChannelsResponseProtoMsg): _66.QueryFeeEnabledChannelsResponse;
                    toProto(message: _66.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryFeeEnabledChannelsResponse): _66.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _66.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_66.QueryFeeEnabledChannelRequest>): _66.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _66.QueryFeeEnabledChannelRequestAmino): _66.QueryFeeEnabledChannelRequest;
                    toAmino(message: _66.QueryFeeEnabledChannelRequest): _66.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _66.QueryFeeEnabledChannelRequestAminoMsg): _66.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _66.QueryFeeEnabledChannelRequest): _66.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _66.QueryFeeEnabledChannelRequestProtoMsg): _66.QueryFeeEnabledChannelRequest;
                    toProto(message: _66.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _66.QueryFeeEnabledChannelRequest): _66.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _66.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_66.QueryFeeEnabledChannelResponse>): _66.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _66.QueryFeeEnabledChannelResponseAmino): _66.QueryFeeEnabledChannelResponse;
                    toAmino(message: _66.QueryFeeEnabledChannelResponse): _66.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _66.QueryFeeEnabledChannelResponseAminoMsg): _66.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _66.QueryFeeEnabledChannelResponse): _66.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _66.QueryFeeEnabledChannelResponseProtoMsg): _66.QueryFeeEnabledChannelResponse;
                    toProto(message: _66.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _66.QueryFeeEnabledChannelResponse): _66.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _65.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Metadata;
                    fromPartial(object: Partial<_65.Metadata>): _65.Metadata;
                    fromAmino(object: _65.MetadataAmino): _65.Metadata;
                    toAmino(message: _65.Metadata): _65.MetadataAmino;
                    fromAminoMsg(object: _65.MetadataAminoMsg): _65.Metadata;
                    toAminoMsg(message: _65.Metadata): _65.MetadataAminoMsg;
                    fromProtoMsg(message: _65.MetadataProtoMsg): _65.Metadata;
                    toProto(message: _65.Metadata): Uint8Array;
                    toProtoMsg(message: _65.Metadata): _65.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                    fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                    fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                    toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                    fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                    toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                    fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                    toProto(message: _64.GenesisState): Uint8Array;
                    toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _64.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.FeeEnabledChannel;
                    fromPartial(object: Partial<_64.FeeEnabledChannel>): _64.FeeEnabledChannel;
                    fromAmino(object: _64.FeeEnabledChannelAmino): _64.FeeEnabledChannel;
                    toAmino(message: _64.FeeEnabledChannel): _64.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _64.FeeEnabledChannelAminoMsg): _64.FeeEnabledChannel;
                    toAminoMsg(message: _64.FeeEnabledChannel): _64.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _64.FeeEnabledChannelProtoMsg): _64.FeeEnabledChannel;
                    toProto(message: _64.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _64.FeeEnabledChannel): _64.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _64.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RegisteredPayee;
                    fromPartial(object: Partial<_64.RegisteredPayee>): _64.RegisteredPayee;
                    fromAmino(object: _64.RegisteredPayeeAmino): _64.RegisteredPayee;
                    toAmino(message: _64.RegisteredPayee): _64.RegisteredPayeeAmino;
                    fromAminoMsg(object: _64.RegisteredPayeeAminoMsg): _64.RegisteredPayee;
                    toAminoMsg(message: _64.RegisteredPayee): _64.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _64.RegisteredPayeeProtoMsg): _64.RegisteredPayee;
                    toProto(message: _64.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _64.RegisteredPayee): _64.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _64.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_64.RegisteredCounterpartyPayee>): _64.RegisteredCounterpartyPayee;
                    fromAmino(object: _64.RegisteredCounterpartyPayeeAmino): _64.RegisteredCounterpartyPayee;
                    toAmino(message: _64.RegisteredCounterpartyPayee): _64.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _64.RegisteredCounterpartyPayeeAminoMsg): _64.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _64.RegisteredCounterpartyPayee): _64.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _64.RegisteredCounterpartyPayeeProtoMsg): _64.RegisteredCounterpartyPayee;
                    toProto(message: _64.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _64.RegisteredCounterpartyPayee): _64.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _64.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ForwardRelayerAddress;
                    fromPartial(object: Partial<_64.ForwardRelayerAddress>): _64.ForwardRelayerAddress;
                    fromAmino(object: _64.ForwardRelayerAddressAmino): _64.ForwardRelayerAddress;
                    toAmino(message: _64.ForwardRelayerAddress): _64.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _64.ForwardRelayerAddressAminoMsg): _64.ForwardRelayerAddress;
                    toAminoMsg(message: _64.ForwardRelayerAddress): _64.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _64.ForwardRelayerAddressProtoMsg): _64.ForwardRelayerAddress;
                    toProto(message: _64.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _64.ForwardRelayerAddress): _64.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _63.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Fee;
                    fromPartial(object: Partial<_63.Fee>): _63.Fee;
                    fromAmino(object: _63.FeeAmino): _63.Fee;
                    toAmino(message: _63.Fee): _63.FeeAmino;
                    fromAminoMsg(object: _63.FeeAminoMsg): _63.Fee;
                    toAminoMsg(message: _63.Fee): _63.FeeAminoMsg;
                    fromProtoMsg(message: _63.FeeProtoMsg): _63.Fee;
                    toProto(message: _63.Fee): Uint8Array;
                    toProtoMsg(message: _63.Fee): _63.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _63.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PacketFee;
                    fromPartial(object: Partial<_63.PacketFee>): _63.PacketFee;
                    fromAmino(object: _63.PacketFeeAmino): _63.PacketFee;
                    toAmino(message: _63.PacketFee): _63.PacketFeeAmino;
                    fromAminoMsg(object: _63.PacketFeeAminoMsg): _63.PacketFee;
                    toAminoMsg(message: _63.PacketFee): _63.PacketFeeAminoMsg;
                    fromProtoMsg(message: _63.PacketFeeProtoMsg): _63.PacketFee;
                    toProto(message: _63.PacketFee): Uint8Array;
                    toProtoMsg(message: _63.PacketFee): _63.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _63.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PacketFees;
                    fromPartial(object: Partial<_63.PacketFees>): _63.PacketFees;
                    fromAmino(object: _63.PacketFeesAmino): _63.PacketFees;
                    toAmino(message: _63.PacketFees): _63.PacketFeesAmino;
                    fromAminoMsg(object: _63.PacketFeesAminoMsg): _63.PacketFees;
                    toAminoMsg(message: _63.PacketFees): _63.PacketFeesAminoMsg;
                    fromProtoMsg(message: _63.PacketFeesProtoMsg): _63.PacketFees;
                    toProto(message: _63.PacketFees): Uint8Array;
                    toProtoMsg(message: _63.PacketFees): _63.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _63.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.IdentifiedPacketFees;
                    fromPartial(object: Partial<_63.IdentifiedPacketFees>): _63.IdentifiedPacketFees;
                    fromAmino(object: _63.IdentifiedPacketFeesAmino): _63.IdentifiedPacketFees;
                    toAmino(message: _63.IdentifiedPacketFees): _63.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _63.IdentifiedPacketFeesAminoMsg): _63.IdentifiedPacketFees;
                    toAminoMsg(message: _63.IdentifiedPacketFees): _63.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _63.IdentifiedPacketFeesProtoMsg): _63.IdentifiedPacketFees;
                    toProto(message: _63.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _63.IdentifiedPacketFees): _63.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _62.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_62.IncentivizedAcknowledgement>): _62.IncentivizedAcknowledgement;
                    fromAmino(object: _62.IncentivizedAcknowledgementAmino): _62.IncentivizedAcknowledgement;
                    toAmino(message: _62.IncentivizedAcknowledgement): _62.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _62.IncentivizedAcknowledgementAminoMsg): _62.IncentivizedAcknowledgement;
                    toAminoMsg(message: _62.IncentivizedAcknowledgement): _62.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _62.IncentivizedAcknowledgementProtoMsg): _62.IncentivizedAcknowledgement;
                    toProto(message: _62.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _62.IncentivizedAcknowledgement): _62.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _256.MsgClientImpl;
                    QueryClientImpl: typeof _249.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _69.QueryInterchainAccountRequest): Promise<_69.QueryInterchainAccountResponse>;
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _242.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _70.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _70.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _70.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _70.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _70.MsgSendTx): {
                                typeUrl: string;
                                value: _70.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _70.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _70.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _70.MsgSendTx): {
                                typeUrl: string;
                                value: _70.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _70.MsgRegisterInterchainAccount) => _70.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _70.MsgRegisterInterchainAccountAmino) => _70.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _70.MsgSendTx) => _70.MsgSendTxAmino;
                            fromAmino: (object: _70.MsgSendTxAmino) => _70.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _70.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_70.MsgRegisterInterchainAccount>): _70.MsgRegisterInterchainAccount;
                        fromAmino(object: _70.MsgRegisterInterchainAccountAmino): _70.MsgRegisterInterchainAccount;
                        toAmino(message: _70.MsgRegisterInterchainAccount): _70.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _70.MsgRegisterInterchainAccountAminoMsg): _70.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _70.MsgRegisterInterchainAccount): _70.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _70.MsgRegisterInterchainAccountProtoMsg): _70.MsgRegisterInterchainAccount;
                        toProto(message: _70.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _70.MsgRegisterInterchainAccount): _70.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _70.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_70.MsgRegisterInterchainAccountResponse>): _70.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _70.MsgRegisterInterchainAccountResponseAmino): _70.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _70.MsgRegisterInterchainAccountResponse): _70.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _70.MsgRegisterInterchainAccountResponseAminoMsg): _70.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _70.MsgRegisterInterchainAccountResponse): _70.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _70.MsgRegisterInterchainAccountResponseProtoMsg): _70.MsgRegisterInterchainAccountResponse;
                        toProto(message: _70.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _70.MsgRegisterInterchainAccountResponse): _70.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _70.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSendTx;
                        fromPartial(object: Partial<_70.MsgSendTx>): _70.MsgSendTx;
                        fromAmino(object: _70.MsgSendTxAmino): _70.MsgSendTx;
                        toAmino(message: _70.MsgSendTx): _70.MsgSendTxAmino;
                        fromAminoMsg(object: _70.MsgSendTxAminoMsg): _70.MsgSendTx;
                        toAminoMsg(message: _70.MsgSendTx): _70.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _70.MsgSendTxProtoMsg): _70.MsgSendTx;
                        toProto(message: _70.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _70.MsgSendTx): _70.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _70.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSendTxResponse;
                        fromPartial(object: Partial<_70.MsgSendTxResponse>): _70.MsgSendTxResponse;
                        fromAmino(object: _70.MsgSendTxResponseAmino): _70.MsgSendTxResponse;
                        toAmino(message: _70.MsgSendTxResponse): _70.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _70.MsgSendTxResponseAminoMsg): _70.MsgSendTxResponse;
                        toAminoMsg(message: _70.MsgSendTxResponse): _70.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _70.MsgSendTxResponseProtoMsg): _70.MsgSendTxResponse;
                        toProto(message: _70.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _70.MsgSendTxResponse): _70.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _69.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_69.QueryInterchainAccountRequest>): _69.QueryInterchainAccountRequest;
                        fromAmino(object: _69.QueryInterchainAccountRequestAmino): _69.QueryInterchainAccountRequest;
                        toAmino(message: _69.QueryInterchainAccountRequest): _69.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _69.QueryInterchainAccountRequestAminoMsg): _69.QueryInterchainAccountRequest;
                        toAminoMsg(message: _69.QueryInterchainAccountRequest): _69.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _69.QueryInterchainAccountRequestProtoMsg): _69.QueryInterchainAccountRequest;
                        toProto(message: _69.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _69.QueryInterchainAccountRequest): _69.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _69.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_69.QueryInterchainAccountResponse>): _69.QueryInterchainAccountResponse;
                        fromAmino(object: _69.QueryInterchainAccountResponseAmino): _69.QueryInterchainAccountResponse;
                        toAmino(message: _69.QueryInterchainAccountResponse): _69.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _69.QueryInterchainAccountResponseAminoMsg): _69.QueryInterchainAccountResponse;
                        toAminoMsg(message: _69.QueryInterchainAccountResponse): _69.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _69.QueryInterchainAccountResponseProtoMsg): _69.QueryInterchainAccountResponse;
                        toProto(message: _69.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _69.QueryInterchainAccountResponse): _69.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                        fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                        fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                        toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
                        fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
                        toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
                        toProto(message: _69.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                        fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                        fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                        toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                        fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                        toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                        toProto(message: _69.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Params;
                        fromPartial(object: Partial<_68.Params>): _68.Params;
                        fromAmino(object: _68.ParamsAmino): _68.Params;
                        toAmino(message: _68.Params): _68.ParamsAmino;
                        fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
                        toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
                        fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
                        toProto(message: _68.Params): Uint8Array;
                        toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                        fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
                        fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                        toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                        fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                        toAminoMsg(message: _71.GenesisState): _71.GenesisStateAminoMsg;
                        fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                        toProto(message: _71.GenesisState): Uint8Array;
                        toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _71.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ControllerGenesisState;
                        fromPartial(object: Partial<_71.ControllerGenesisState>): _71.ControllerGenesisState;
                        fromAmino(object: _71.ControllerGenesisStateAmino): _71.ControllerGenesisState;
                        toAmino(message: _71.ControllerGenesisState): _71.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _71.ControllerGenesisStateAminoMsg): _71.ControllerGenesisState;
                        toAminoMsg(message: _71.ControllerGenesisState): _71.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _71.ControllerGenesisStateProtoMsg): _71.ControllerGenesisState;
                        toProto(message: _71.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _71.ControllerGenesisState): _71.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _71.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.HostGenesisState;
                        fromPartial(object: Partial<_71.HostGenesisState>): _71.HostGenesisState;
                        fromAmino(object: _71.HostGenesisStateAmino): _71.HostGenesisState;
                        toAmino(message: _71.HostGenesisState): _71.HostGenesisStateAmino;
                        fromAminoMsg(object: _71.HostGenesisStateAminoMsg): _71.HostGenesisState;
                        toAminoMsg(message: _71.HostGenesisState): _71.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _71.HostGenesisStateProtoMsg): _71.HostGenesisState;
                        toProto(message: _71.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _71.HostGenesisState): _71.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _71.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ActiveChannel;
                        fromPartial(object: Partial<_71.ActiveChannel>): _71.ActiveChannel;
                        fromAmino(object: _71.ActiveChannelAmino): _71.ActiveChannel;
                        toAmino(message: _71.ActiveChannel): _71.ActiveChannelAmino;
                        fromAminoMsg(object: _71.ActiveChannelAminoMsg): _71.ActiveChannel;
                        toAminoMsg(message: _71.ActiveChannel): _71.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _71.ActiveChannelProtoMsg): _71.ActiveChannel;
                        toProto(message: _71.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _71.ActiveChannel): _71.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _71.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_71.RegisteredInterchainAccount>): _71.RegisteredInterchainAccount;
                        fromAmino(object: _71.RegisteredInterchainAccountAmino): _71.RegisteredInterchainAccount;
                        toAmino(message: _71.RegisteredInterchainAccount): _71.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _71.RegisteredInterchainAccountAminoMsg): _71.RegisteredInterchainAccount;
                        toAminoMsg(message: _71.RegisteredInterchainAccount): _71.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _71.RegisteredInterchainAccountProtoMsg): _71.RegisteredInterchainAccount;
                        toProto(message: _71.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _71.RegisteredInterchainAccount): _71.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _250.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _243.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                        fromPartial(_: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
                        fromAmino(_: _73.QueryParamsRequestAmino): _73.QueryParamsRequest;
                        toAmino(_: _73.QueryParamsRequest): _73.QueryParamsRequestAmino;
                        fromAminoMsg(object: _73.QueryParamsRequestAminoMsg): _73.QueryParamsRequest;
                        toAminoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _73.QueryParamsRequestProtoMsg): _73.QueryParamsRequest;
                        toProto(message: _73.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponse;
                        fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
                        fromAmino(object: _73.QueryParamsResponseAmino): _73.QueryParamsResponse;
                        toAmino(message: _73.QueryParamsResponse): _73.QueryParamsResponseAmino;
                        fromAminoMsg(object: _73.QueryParamsResponseAminoMsg): _73.QueryParamsResponse;
                        toAminoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _73.QueryParamsResponseProtoMsg): _73.QueryParamsResponse;
                        toProto(message: _73.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                        fromPartial(object: Partial<_72.Params>): _72.Params;
                        fromAmino(object: _72.ParamsAmino): _72.Params;
                        toAmino(message: _72.Params): _72.ParamsAmino;
                        fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                        toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                        fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                        toProto(message: _72.Params): Uint8Array;
                        toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _76.Type;
                typeToJSON(object: _76.Type): string;
                Type: typeof _76.Type;
                TypeSDKType: typeof _76.Type;
                TypeAmino: typeof _76.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _76.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.InterchainAccountPacketData;
                    fromPartial(object: Partial<_76.InterchainAccountPacketData>): _76.InterchainAccountPacketData;
                    fromAmino(object: _76.InterchainAccountPacketDataAmino): _76.InterchainAccountPacketData;
                    toAmino(message: _76.InterchainAccountPacketData): _76.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _76.InterchainAccountPacketDataAminoMsg): _76.InterchainAccountPacketData;
                    toAminoMsg(message: _76.InterchainAccountPacketData): _76.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _76.InterchainAccountPacketDataProtoMsg): _76.InterchainAccountPacketData;
                    toProto(message: _76.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _76.InterchainAccountPacketData): _76.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _76.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.CosmosTx;
                    fromPartial(object: Partial<_76.CosmosTx>): _76.CosmosTx;
                    fromAmino(object: _76.CosmosTxAmino): _76.CosmosTx;
                    toAmino(message: _76.CosmosTx): _76.CosmosTxAmino;
                    fromAminoMsg(object: _76.CosmosTxAminoMsg): _76.CosmosTx;
                    toAminoMsg(message: _76.CosmosTx): _76.CosmosTxAminoMsg;
                    fromProtoMsg(message: _76.CosmosTxProtoMsg): _76.CosmosTx;
                    toProto(message: _76.CosmosTx): Uint8Array;
                    toProtoMsg(message: _76.CosmosTx): _76.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _75.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Metadata;
                    fromPartial(object: Partial<_75.Metadata>): _75.Metadata;
                    fromAmino(object: _75.MetadataAmino): _75.Metadata;
                    toAmino(message: _75.Metadata): _75.MetadataAmino;
                    fromAminoMsg(object: _75.MetadataAminoMsg): _75.Metadata;
                    toAminoMsg(message: _75.Metadata): _75.MetadataAminoMsg;
                    fromProtoMsg(message: _75.MetadataProtoMsg): _75.Metadata;
                    toProto(message: _75.Metadata): Uint8Array;
                    toProtoMsg(message: _75.Metadata): _75.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _74.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.InterchainAccount;
                    fromPartial(object: Partial<_74.InterchainAccount>): _74.InterchainAccount;
                    fromAmino(object: _74.InterchainAccountAmino): _74.InterchainAccount;
                    toAmino(message: _74.InterchainAccount): _74.InterchainAccountAmino;
                    fromAminoMsg(object: _74.InterchainAccountAminoMsg): _74.InterchainAccount;
                    toAminoMsg(message: _74.InterchainAccount): _74.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _74.InterchainAccountProtoMsg): _74.InterchainAccount;
                    toProto(message: _74.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _74.InterchainAccount): _74.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _257.MsgClientImpl;
                QueryClientImpl: typeof _251.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _79.QueryDenomTraceRequest): Promise<_79.QueryDenomTraceResponse>;
                    denomTraces(request?: _79.QueryDenomTracesRequest): Promise<_79.QueryDenomTracesResponse>;
                    params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                    denomHash(request: _79.QueryDenomHashRequest): Promise<_79.QueryDenomHashResponse>;
                    escrowAddress(request: _79.QueryEscrowAddressRequest): Promise<_79.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _244.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _81.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _81.MsgTransfer): {
                            typeUrl: string;
                            value: _81.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _81.MsgTransfer): {
                            typeUrl: string;
                            value: _81.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _81.MsgTransfer) => _81.MsgTransferAmino;
                        fromAmino: (object: _81.MsgTransferAmino) => _81.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _81.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTransfer;
                    fromPartial(object: Partial<_81.MsgTransfer>): _81.MsgTransfer;
                    fromAmino(object: _81.MsgTransferAmino): _81.MsgTransfer;
                    toAmino(message: _81.MsgTransfer): _81.MsgTransferAmino;
                    fromAminoMsg(object: _81.MsgTransferAminoMsg): _81.MsgTransfer;
                    toAminoMsg(message: _81.MsgTransfer): _81.MsgTransferAminoMsg;
                    fromProtoMsg(message: _81.MsgTransferProtoMsg): _81.MsgTransfer;
                    toProto(message: _81.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _81.MsgTransfer): _81.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _81.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTransferResponse;
                    fromPartial(object: Partial<_81.MsgTransferResponse>): _81.MsgTransferResponse;
                    fromAmino(object: _81.MsgTransferResponseAmino): _81.MsgTransferResponse;
                    toAmino(message: _81.MsgTransferResponse): _81.MsgTransferResponseAmino;
                    fromAminoMsg(object: _81.MsgTransferResponseAminoMsg): _81.MsgTransferResponse;
                    toAminoMsg(message: _81.MsgTransferResponse): _81.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _81.MsgTransferResponseProtoMsg): _81.MsgTransferResponse;
                    toProto(message: _81.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _81.MsgTransferResponse): _81.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _80.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DenomTrace;
                    fromPartial(object: Partial<_80.DenomTrace>): _80.DenomTrace;
                    fromAmino(object: _80.DenomTraceAmino): _80.DenomTrace;
                    toAmino(message: _80.DenomTrace): _80.DenomTraceAmino;
                    fromAminoMsg(object: _80.DenomTraceAminoMsg): _80.DenomTrace;
                    toAminoMsg(message: _80.DenomTrace): _80.DenomTraceAminoMsg;
                    fromProtoMsg(message: _80.DenomTraceProtoMsg): _80.DenomTrace;
                    toProto(message: _80.DenomTrace): Uint8Array;
                    toProtoMsg(message: _80.DenomTrace): _80.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                    fromPartial(object: Partial<_80.Params>): _80.Params;
                    fromAmino(object: _80.ParamsAmino): _80.Params;
                    toAmino(message: _80.Params): _80.ParamsAmino;
                    fromAminoMsg(object: _80.ParamsAminoMsg): _80.Params;
                    toAminoMsg(message: _80.Params): _80.ParamsAminoMsg;
                    fromProtoMsg(message: _80.ParamsProtoMsg): _80.Params;
                    toProto(message: _80.Params): Uint8Array;
                    toProtoMsg(message: _80.Params): _80.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_79.QueryDenomTraceRequest>): _79.QueryDenomTraceRequest;
                    fromAmino(object: _79.QueryDenomTraceRequestAmino): _79.QueryDenomTraceRequest;
                    toAmino(message: _79.QueryDenomTraceRequest): _79.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _79.QueryDenomTraceRequestAminoMsg): _79.QueryDenomTraceRequest;
                    toAminoMsg(message: _79.QueryDenomTraceRequest): _79.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomTraceRequestProtoMsg): _79.QueryDenomTraceRequest;
                    toProto(message: _79.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomTraceRequest): _79.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_79.QueryDenomTraceResponse>): _79.QueryDenomTraceResponse;
                    fromAmino(object: _79.QueryDenomTraceResponseAmino): _79.QueryDenomTraceResponse;
                    toAmino(message: _79.QueryDenomTraceResponse): _79.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _79.QueryDenomTraceResponseAminoMsg): _79.QueryDenomTraceResponse;
                    toAminoMsg(message: _79.QueryDenomTraceResponse): _79.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomTraceResponseProtoMsg): _79.QueryDenomTraceResponse;
                    toProto(message: _79.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomTraceResponse): _79.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_79.QueryDenomTracesRequest>): _79.QueryDenomTracesRequest;
                    fromAmino(object: _79.QueryDenomTracesRequestAmino): _79.QueryDenomTracesRequest;
                    toAmino(message: _79.QueryDenomTracesRequest): _79.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _79.QueryDenomTracesRequestAminoMsg): _79.QueryDenomTracesRequest;
                    toAminoMsg(message: _79.QueryDenomTracesRequest): _79.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomTracesRequestProtoMsg): _79.QueryDenomTracesRequest;
                    toProto(message: _79.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomTracesRequest): _79.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_79.QueryDenomTracesResponse>): _79.QueryDenomTracesResponse;
                    fromAmino(object: _79.QueryDenomTracesResponseAmino): _79.QueryDenomTracesResponse;
                    toAmino(message: _79.QueryDenomTracesResponse): _79.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _79.QueryDenomTracesResponseAminoMsg): _79.QueryDenomTracesResponse;
                    toAminoMsg(message: _79.QueryDenomTracesResponse): _79.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomTracesResponseProtoMsg): _79.QueryDenomTracesResponse;
                    toProto(message: _79.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomTracesResponse): _79.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                    fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                    fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                    toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                    fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                    toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                    toProto(message: _79.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                    fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                    fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                    toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                    fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                    toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                    toProto(message: _79.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomHashRequest;
                    fromPartial(object: Partial<_79.QueryDenomHashRequest>): _79.QueryDenomHashRequest;
                    fromAmino(object: _79.QueryDenomHashRequestAmino): _79.QueryDenomHashRequest;
                    toAmino(message: _79.QueryDenomHashRequest): _79.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _79.QueryDenomHashRequestAminoMsg): _79.QueryDenomHashRequest;
                    toAminoMsg(message: _79.QueryDenomHashRequest): _79.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomHashRequestProtoMsg): _79.QueryDenomHashRequest;
                    toProto(message: _79.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomHashRequest): _79.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _79.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDenomHashResponse;
                    fromPartial(object: Partial<_79.QueryDenomHashResponse>): _79.QueryDenomHashResponse;
                    fromAmino(object: _79.QueryDenomHashResponseAmino): _79.QueryDenomHashResponse;
                    toAmino(message: _79.QueryDenomHashResponse): _79.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _79.QueryDenomHashResponseAminoMsg): _79.QueryDenomHashResponse;
                    toAminoMsg(message: _79.QueryDenomHashResponse): _79.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryDenomHashResponseProtoMsg): _79.QueryDenomHashResponse;
                    toProto(message: _79.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryDenomHashResponse): _79.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _79.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_79.QueryEscrowAddressRequest>): _79.QueryEscrowAddressRequest;
                    fromAmino(object: _79.QueryEscrowAddressRequestAmino): _79.QueryEscrowAddressRequest;
                    toAmino(message: _79.QueryEscrowAddressRequest): _79.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _79.QueryEscrowAddressRequestAminoMsg): _79.QueryEscrowAddressRequest;
                    toAminoMsg(message: _79.QueryEscrowAddressRequest): _79.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryEscrowAddressRequestProtoMsg): _79.QueryEscrowAddressRequest;
                    toProto(message: _79.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryEscrowAddressRequest): _79.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _79.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_79.QueryEscrowAddressResponse>): _79.QueryEscrowAddressResponse;
                    fromAmino(object: _79.QueryEscrowAddressResponseAmino): _79.QueryEscrowAddressResponse;
                    toAmino(message: _79.QueryEscrowAddressResponse): _79.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _79.QueryEscrowAddressResponseAminoMsg): _79.QueryEscrowAddressResponse;
                    toAminoMsg(message: _79.QueryEscrowAddressResponse): _79.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryEscrowAddressResponseProtoMsg): _79.QueryEscrowAddressResponse;
                    toProto(message: _79.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryEscrowAddressResponse): _79.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                    fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
                    fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                    toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                    fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                    toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                    fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                    toProto(message: _78.GenesisState): Uint8Array;
                    toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _77.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Allocation;
                    fromPartial(object: Partial<_77.Allocation>): _77.Allocation;
                    fromAmino(object: _77.AllocationAmino): _77.Allocation;
                    toAmino(message: _77.Allocation): _77.AllocationAmino;
                    fromAminoMsg(object: _77.AllocationAminoMsg): _77.Allocation;
                    toAminoMsg(message: _77.Allocation): _77.AllocationAminoMsg;
                    fromProtoMsg(message: _77.AllocationProtoMsg): _77.Allocation;
                    toProto(message: _77.Allocation): Uint8Array;
                    toProtoMsg(message: _77.Allocation): _77.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _77.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.TransferAuthorization;
                    fromPartial(object: Partial<_77.TransferAuthorization>): _77.TransferAuthorization;
                    fromAmino(object: _77.TransferAuthorizationAmino): _77.TransferAuthorization;
                    toAmino(message: _77.TransferAuthorization): _77.TransferAuthorizationAmino;
                    fromAminoMsg(object: _77.TransferAuthorizationAminoMsg): _77.TransferAuthorization;
                    toAminoMsg(message: _77.TransferAuthorization): _77.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _77.TransferAuthorizationProtoMsg): _77.TransferAuthorization;
                    toProto(message: _77.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _77.TransferAuthorization): _77.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _82.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.FungibleTokenPacketData;
                    fromPartial(object: Partial<_82.FungibleTokenPacketData>): _82.FungibleTokenPacketData;
                    fromAmino(object: _82.FungibleTokenPacketDataAmino): _82.FungibleTokenPacketData;
                    toAmino(message: _82.FungibleTokenPacketData): _82.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _82.FungibleTokenPacketDataAminoMsg): _82.FungibleTokenPacketData;
                    toAminoMsg(message: _82.FungibleTokenPacketData): _82.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _82.FungibleTokenPacketDataProtoMsg): _82.FungibleTokenPacketData;
                    toProto(message: _82.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _82.FungibleTokenPacketData): _82.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _258.MsgClientImpl;
                QueryClientImpl: typeof _252.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _85.QueryChannelRequest): Promise<_85.QueryChannelResponse>;
                    channels(request?: _85.QueryChannelsRequest): Promise<_85.QueryChannelsResponse>;
                    connectionChannels(request: _85.QueryConnectionChannelsRequest): Promise<_85.QueryConnectionChannelsResponse>;
                    channelClientState(request: _85.QueryChannelClientStateRequest): Promise<_85.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _85.QueryChannelConsensusStateRequest): Promise<_85.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _85.QueryPacketCommitmentRequest): Promise<_85.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _85.QueryPacketCommitmentsRequest): Promise<_85.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _85.QueryPacketReceiptRequest): Promise<_85.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _85.QueryPacketAcknowledgementRequest): Promise<_85.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _85.QueryPacketAcknowledgementsRequest): Promise<_85.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _85.QueryUnreceivedPacketsRequest): Promise<_85.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _85.QueryUnreceivedAcksRequest): Promise<_85.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _85.QueryNextSequenceReceiveRequest): Promise<_85.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _245.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _86.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _86.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _86.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _86.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _86.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _86.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _86.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _86.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _86.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _86.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _86.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _86.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _86.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _86.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _86.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _86.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _86.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _86.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _86.MsgRecvPacket): {
                            typeUrl: string;
                            value: _86.MsgRecvPacket;
                        };
                        timeout(value: _86.MsgTimeout): {
                            typeUrl: string;
                            value: _86.MsgTimeout;
                        };
                        timeoutOnClose(value: _86.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _86.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _86.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _86.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _86.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _86.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _86.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _86.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _86.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _86.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _86.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _86.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _86.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _86.MsgRecvPacket): {
                            typeUrl: string;
                            value: _86.MsgRecvPacket;
                        };
                        timeout(value: _86.MsgTimeout): {
                            typeUrl: string;
                            value: _86.MsgTimeout;
                        };
                        timeoutOnClose(value: _86.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _86.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _86.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _86.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelOpenInit) => _86.MsgChannelOpenInitAmino;
                        fromAmino: (object: _86.MsgChannelOpenInitAmino) => _86.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelOpenTry) => _86.MsgChannelOpenTryAmino;
                        fromAmino: (object: _86.MsgChannelOpenTryAmino) => _86.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelOpenAck) => _86.MsgChannelOpenAckAmino;
                        fromAmino: (object: _86.MsgChannelOpenAckAmino) => _86.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelOpenConfirm) => _86.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _86.MsgChannelOpenConfirmAmino) => _86.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelCloseInit) => _86.MsgChannelCloseInitAmino;
                        fromAmino: (object: _86.MsgChannelCloseInitAmino) => _86.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _86.MsgChannelCloseConfirm) => _86.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _86.MsgChannelCloseConfirmAmino) => _86.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _86.MsgRecvPacket) => _86.MsgRecvPacketAmino;
                        fromAmino: (object: _86.MsgRecvPacketAmino) => _86.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _86.MsgTimeout) => _86.MsgTimeoutAmino;
                        fromAmino: (object: _86.MsgTimeoutAmino) => _86.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _86.MsgTimeoutOnClose) => _86.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _86.MsgTimeoutOnCloseAmino) => _86.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _86.MsgAcknowledgement) => _86.MsgAcknowledgementAmino;
                        fromAmino: (object: _86.MsgAcknowledgementAmino) => _86.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _86.ResponseResultType;
                responseResultTypeToJSON(object: _86.ResponseResultType): string;
                ResponseResultType: typeof _86.ResponseResultType;
                ResponseResultTypeSDKType: typeof _86.ResponseResultType;
                ResponseResultTypeAmino: typeof _86.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenInit;
                    fromPartial(object: Partial<_86.MsgChannelOpenInit>): _86.MsgChannelOpenInit;
                    fromAmino(object: _86.MsgChannelOpenInitAmino): _86.MsgChannelOpenInit;
                    toAmino(message: _86.MsgChannelOpenInit): _86.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenInitAminoMsg): _86.MsgChannelOpenInit;
                    toAminoMsg(message: _86.MsgChannelOpenInit): _86.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenInitProtoMsg): _86.MsgChannelOpenInit;
                    toProto(message: _86.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenInit): _86.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_86.MsgChannelOpenInitResponse>): _86.MsgChannelOpenInitResponse;
                    fromAmino(object: _86.MsgChannelOpenInitResponseAmino): _86.MsgChannelOpenInitResponse;
                    toAmino(message: _86.MsgChannelOpenInitResponse): _86.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenInitResponseAminoMsg): _86.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _86.MsgChannelOpenInitResponse): _86.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenInitResponseProtoMsg): _86.MsgChannelOpenInitResponse;
                    toProto(message: _86.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenInitResponse): _86.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenTry;
                    fromPartial(object: Partial<_86.MsgChannelOpenTry>): _86.MsgChannelOpenTry;
                    fromAmino(object: _86.MsgChannelOpenTryAmino): _86.MsgChannelOpenTry;
                    toAmino(message: _86.MsgChannelOpenTry): _86.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenTryAminoMsg): _86.MsgChannelOpenTry;
                    toAminoMsg(message: _86.MsgChannelOpenTry): _86.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenTryProtoMsg): _86.MsgChannelOpenTry;
                    toProto(message: _86.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenTry): _86.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_86.MsgChannelOpenTryResponse>): _86.MsgChannelOpenTryResponse;
                    fromAmino(object: _86.MsgChannelOpenTryResponseAmino): _86.MsgChannelOpenTryResponse;
                    toAmino(message: _86.MsgChannelOpenTryResponse): _86.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenTryResponseAminoMsg): _86.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _86.MsgChannelOpenTryResponse): _86.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenTryResponseProtoMsg): _86.MsgChannelOpenTryResponse;
                    toProto(message: _86.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenTryResponse): _86.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenAck;
                    fromPartial(object: Partial<_86.MsgChannelOpenAck>): _86.MsgChannelOpenAck;
                    fromAmino(object: _86.MsgChannelOpenAckAmino): _86.MsgChannelOpenAck;
                    toAmino(message: _86.MsgChannelOpenAck): _86.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenAckAminoMsg): _86.MsgChannelOpenAck;
                    toAminoMsg(message: _86.MsgChannelOpenAck): _86.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenAckProtoMsg): _86.MsgChannelOpenAck;
                    toProto(message: _86.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenAck): _86.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _86.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_86.MsgChannelOpenAckResponse>): _86.MsgChannelOpenAckResponse;
                    fromAmino(_: _86.MsgChannelOpenAckResponseAmino): _86.MsgChannelOpenAckResponse;
                    toAmino(_: _86.MsgChannelOpenAckResponse): _86.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenAckResponseAminoMsg): _86.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _86.MsgChannelOpenAckResponse): _86.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenAckResponseProtoMsg): _86.MsgChannelOpenAckResponse;
                    toProto(message: _86.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenAckResponse): _86.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_86.MsgChannelOpenConfirm>): _86.MsgChannelOpenConfirm;
                    fromAmino(object: _86.MsgChannelOpenConfirmAmino): _86.MsgChannelOpenConfirm;
                    toAmino(message: _86.MsgChannelOpenConfirm): _86.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenConfirmAminoMsg): _86.MsgChannelOpenConfirm;
                    toAminoMsg(message: _86.MsgChannelOpenConfirm): _86.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenConfirmProtoMsg): _86.MsgChannelOpenConfirm;
                    toProto(message: _86.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenConfirm): _86.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _86.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_86.MsgChannelOpenConfirmResponse>): _86.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _86.MsgChannelOpenConfirmResponseAmino): _86.MsgChannelOpenConfirmResponse;
                    toAmino(_: _86.MsgChannelOpenConfirmResponse): _86.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelOpenConfirmResponseAminoMsg): _86.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _86.MsgChannelOpenConfirmResponse): _86.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelOpenConfirmResponseProtoMsg): _86.MsgChannelOpenConfirmResponse;
                    toProto(message: _86.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelOpenConfirmResponse): _86.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelCloseInit;
                    fromPartial(object: Partial<_86.MsgChannelCloseInit>): _86.MsgChannelCloseInit;
                    fromAmino(object: _86.MsgChannelCloseInitAmino): _86.MsgChannelCloseInit;
                    toAmino(message: _86.MsgChannelCloseInit): _86.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _86.MsgChannelCloseInitAminoMsg): _86.MsgChannelCloseInit;
                    toAminoMsg(message: _86.MsgChannelCloseInit): _86.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelCloseInitProtoMsg): _86.MsgChannelCloseInit;
                    toProto(message: _86.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelCloseInit): _86.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _86.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_86.MsgChannelCloseInitResponse>): _86.MsgChannelCloseInitResponse;
                    fromAmino(_: _86.MsgChannelCloseInitResponseAmino): _86.MsgChannelCloseInitResponse;
                    toAmino(_: _86.MsgChannelCloseInitResponse): _86.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelCloseInitResponseAminoMsg): _86.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _86.MsgChannelCloseInitResponse): _86.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelCloseInitResponseProtoMsg): _86.MsgChannelCloseInitResponse;
                    toProto(message: _86.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelCloseInitResponse): _86.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _86.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_86.MsgChannelCloseConfirm>): _86.MsgChannelCloseConfirm;
                    fromAmino(object: _86.MsgChannelCloseConfirmAmino): _86.MsgChannelCloseConfirm;
                    toAmino(message: _86.MsgChannelCloseConfirm): _86.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _86.MsgChannelCloseConfirmAminoMsg): _86.MsgChannelCloseConfirm;
                    toAminoMsg(message: _86.MsgChannelCloseConfirm): _86.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelCloseConfirmProtoMsg): _86.MsgChannelCloseConfirm;
                    toProto(message: _86.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelCloseConfirm): _86.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _86.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_86.MsgChannelCloseConfirmResponse>): _86.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _86.MsgChannelCloseConfirmResponseAmino): _86.MsgChannelCloseConfirmResponse;
                    toAmino(_: _86.MsgChannelCloseConfirmResponse): _86.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _86.MsgChannelCloseConfirmResponseAminoMsg): _86.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _86.MsgChannelCloseConfirmResponse): _86.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgChannelCloseConfirmResponseProtoMsg): _86.MsgChannelCloseConfirmResponse;
                    toProto(message: _86.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgChannelCloseConfirmResponse): _86.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _86.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgRecvPacket;
                    fromPartial(object: Partial<_86.MsgRecvPacket>): _86.MsgRecvPacket;
                    fromAmino(object: _86.MsgRecvPacketAmino): _86.MsgRecvPacket;
                    toAmino(message: _86.MsgRecvPacket): _86.MsgRecvPacketAmino;
                    fromAminoMsg(object: _86.MsgRecvPacketAminoMsg): _86.MsgRecvPacket;
                    toAminoMsg(message: _86.MsgRecvPacket): _86.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _86.MsgRecvPacketProtoMsg): _86.MsgRecvPacket;
                    toProto(message: _86.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _86.MsgRecvPacket): _86.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_86.MsgRecvPacketResponse>): _86.MsgRecvPacketResponse;
                    fromAmino(object: _86.MsgRecvPacketResponseAmino): _86.MsgRecvPacketResponse;
                    toAmino(message: _86.MsgRecvPacketResponse): _86.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _86.MsgRecvPacketResponseAminoMsg): _86.MsgRecvPacketResponse;
                    toAminoMsg(message: _86.MsgRecvPacketResponse): _86.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgRecvPacketResponseProtoMsg): _86.MsgRecvPacketResponse;
                    toProto(message: _86.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgRecvPacketResponse): _86.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _86.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgTimeout;
                    fromPartial(object: Partial<_86.MsgTimeout>): _86.MsgTimeout;
                    fromAmino(object: _86.MsgTimeoutAmino): _86.MsgTimeout;
                    toAmino(message: _86.MsgTimeout): _86.MsgTimeoutAmino;
                    fromAminoMsg(object: _86.MsgTimeoutAminoMsg): _86.MsgTimeout;
                    toAminoMsg(message: _86.MsgTimeout): _86.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _86.MsgTimeoutProtoMsg): _86.MsgTimeout;
                    toProto(message: _86.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _86.MsgTimeout): _86.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgTimeoutResponse;
                    fromPartial(object: Partial<_86.MsgTimeoutResponse>): _86.MsgTimeoutResponse;
                    fromAmino(object: _86.MsgTimeoutResponseAmino): _86.MsgTimeoutResponse;
                    toAmino(message: _86.MsgTimeoutResponse): _86.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _86.MsgTimeoutResponseAminoMsg): _86.MsgTimeoutResponse;
                    toAminoMsg(message: _86.MsgTimeoutResponse): _86.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgTimeoutResponseProtoMsg): _86.MsgTimeoutResponse;
                    toProto(message: _86.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgTimeoutResponse): _86.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _86.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_86.MsgTimeoutOnClose>): _86.MsgTimeoutOnClose;
                    fromAmino(object: _86.MsgTimeoutOnCloseAmino): _86.MsgTimeoutOnClose;
                    toAmino(message: _86.MsgTimeoutOnClose): _86.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _86.MsgTimeoutOnCloseAminoMsg): _86.MsgTimeoutOnClose;
                    toAminoMsg(message: _86.MsgTimeoutOnClose): _86.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _86.MsgTimeoutOnCloseProtoMsg): _86.MsgTimeoutOnClose;
                    toProto(message: _86.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _86.MsgTimeoutOnClose): _86.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_86.MsgTimeoutOnCloseResponse>): _86.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _86.MsgTimeoutOnCloseResponseAmino): _86.MsgTimeoutOnCloseResponse;
                    toAmino(message: _86.MsgTimeoutOnCloseResponse): _86.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _86.MsgTimeoutOnCloseResponseAminoMsg): _86.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _86.MsgTimeoutOnCloseResponse): _86.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgTimeoutOnCloseResponseProtoMsg): _86.MsgTimeoutOnCloseResponse;
                    toProto(message: _86.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgTimeoutOnCloseResponse): _86.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _86.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgAcknowledgement;
                    fromPartial(object: Partial<_86.MsgAcknowledgement>): _86.MsgAcknowledgement;
                    fromAmino(object: _86.MsgAcknowledgementAmino): _86.MsgAcknowledgement;
                    toAmino(message: _86.MsgAcknowledgement): _86.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _86.MsgAcknowledgementAminoMsg): _86.MsgAcknowledgement;
                    toAminoMsg(message: _86.MsgAcknowledgement): _86.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _86.MsgAcknowledgementProtoMsg): _86.MsgAcknowledgement;
                    toProto(message: _86.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _86.MsgAcknowledgement): _86.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _86.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_86.MsgAcknowledgementResponse>): _86.MsgAcknowledgementResponse;
                    fromAmino(object: _86.MsgAcknowledgementResponseAmino): _86.MsgAcknowledgementResponse;
                    toAmino(message: _86.MsgAcknowledgementResponse): _86.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _86.MsgAcknowledgementResponseAminoMsg): _86.MsgAcknowledgementResponse;
                    toAminoMsg(message: _86.MsgAcknowledgementResponse): _86.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgAcknowledgementResponseProtoMsg): _86.MsgAcknowledgementResponse;
                    toProto(message: _86.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgAcknowledgementResponse): _86.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelRequest;
                    fromPartial(object: Partial<_85.QueryChannelRequest>): _85.QueryChannelRequest;
                    fromAmino(object: _85.QueryChannelRequestAmino): _85.QueryChannelRequest;
                    toAmino(message: _85.QueryChannelRequest): _85.QueryChannelRequestAmino;
                    fromAminoMsg(object: _85.QueryChannelRequestAminoMsg): _85.QueryChannelRequest;
                    toAminoMsg(message: _85.QueryChannelRequest): _85.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelRequestProtoMsg): _85.QueryChannelRequest;
                    toProto(message: _85.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelRequest): _85.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelResponse;
                    fromPartial(object: Partial<_85.QueryChannelResponse>): _85.QueryChannelResponse;
                    fromAmino(object: _85.QueryChannelResponseAmino): _85.QueryChannelResponse;
                    toAmino(message: _85.QueryChannelResponse): _85.QueryChannelResponseAmino;
                    fromAminoMsg(object: _85.QueryChannelResponseAminoMsg): _85.QueryChannelResponse;
                    toAminoMsg(message: _85.QueryChannelResponse): _85.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelResponseProtoMsg): _85.QueryChannelResponse;
                    toProto(message: _85.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelResponse): _85.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelsRequest;
                    fromPartial(object: Partial<_85.QueryChannelsRequest>): _85.QueryChannelsRequest;
                    fromAmino(object: _85.QueryChannelsRequestAmino): _85.QueryChannelsRequest;
                    toAmino(message: _85.QueryChannelsRequest): _85.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _85.QueryChannelsRequestAminoMsg): _85.QueryChannelsRequest;
                    toAminoMsg(message: _85.QueryChannelsRequest): _85.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelsRequestProtoMsg): _85.QueryChannelsRequest;
                    toProto(message: _85.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelsRequest): _85.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelsResponse;
                    fromPartial(object: Partial<_85.QueryChannelsResponse>): _85.QueryChannelsResponse;
                    fromAmino(object: _85.QueryChannelsResponseAmino): _85.QueryChannelsResponse;
                    toAmino(message: _85.QueryChannelsResponse): _85.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _85.QueryChannelsResponseAminoMsg): _85.QueryChannelsResponse;
                    toAminoMsg(message: _85.QueryChannelsResponse): _85.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelsResponseProtoMsg): _85.QueryChannelsResponse;
                    toProto(message: _85.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelsResponse): _85.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_85.QueryConnectionChannelsRequest>): _85.QueryConnectionChannelsRequest;
                    fromAmino(object: _85.QueryConnectionChannelsRequestAmino): _85.QueryConnectionChannelsRequest;
                    toAmino(message: _85.QueryConnectionChannelsRequest): _85.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionChannelsRequestAminoMsg): _85.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _85.QueryConnectionChannelsRequest): _85.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionChannelsRequestProtoMsg): _85.QueryConnectionChannelsRequest;
                    toProto(message: _85.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionChannelsRequest): _85.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_85.QueryConnectionChannelsResponse>): _85.QueryConnectionChannelsResponse;
                    fromAmino(object: _85.QueryConnectionChannelsResponseAmino): _85.QueryConnectionChannelsResponse;
                    toAmino(message: _85.QueryConnectionChannelsResponse): _85.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionChannelsResponseAminoMsg): _85.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _85.QueryConnectionChannelsResponse): _85.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionChannelsResponseProtoMsg): _85.QueryConnectionChannelsResponse;
                    toProto(message: _85.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionChannelsResponse): _85.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_85.QueryChannelClientStateRequest>): _85.QueryChannelClientStateRequest;
                    fromAmino(object: _85.QueryChannelClientStateRequestAmino): _85.QueryChannelClientStateRequest;
                    toAmino(message: _85.QueryChannelClientStateRequest): _85.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _85.QueryChannelClientStateRequestAminoMsg): _85.QueryChannelClientStateRequest;
                    toAminoMsg(message: _85.QueryChannelClientStateRequest): _85.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelClientStateRequestProtoMsg): _85.QueryChannelClientStateRequest;
                    toProto(message: _85.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelClientStateRequest): _85.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_85.QueryChannelClientStateResponse>): _85.QueryChannelClientStateResponse;
                    fromAmino(object: _85.QueryChannelClientStateResponseAmino): _85.QueryChannelClientStateResponse;
                    toAmino(message: _85.QueryChannelClientStateResponse): _85.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _85.QueryChannelClientStateResponseAminoMsg): _85.QueryChannelClientStateResponse;
                    toAminoMsg(message: _85.QueryChannelClientStateResponse): _85.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelClientStateResponseProtoMsg): _85.QueryChannelClientStateResponse;
                    toProto(message: _85.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelClientStateResponse): _85.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_85.QueryChannelConsensusStateRequest>): _85.QueryChannelConsensusStateRequest;
                    fromAmino(object: _85.QueryChannelConsensusStateRequestAmino): _85.QueryChannelConsensusStateRequest;
                    toAmino(message: _85.QueryChannelConsensusStateRequest): _85.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _85.QueryChannelConsensusStateRequestAminoMsg): _85.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _85.QueryChannelConsensusStateRequest): _85.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelConsensusStateRequestProtoMsg): _85.QueryChannelConsensusStateRequest;
                    toProto(message: _85.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelConsensusStateRequest): _85.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_85.QueryChannelConsensusStateResponse>): _85.QueryChannelConsensusStateResponse;
                    fromAmino(object: _85.QueryChannelConsensusStateResponseAmino): _85.QueryChannelConsensusStateResponse;
                    toAmino(message: _85.QueryChannelConsensusStateResponse): _85.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _85.QueryChannelConsensusStateResponseAminoMsg): _85.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _85.QueryChannelConsensusStateResponse): _85.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryChannelConsensusStateResponseProtoMsg): _85.QueryChannelConsensusStateResponse;
                    toProto(message: _85.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryChannelConsensusStateResponse): _85.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_85.QueryPacketCommitmentRequest>): _85.QueryPacketCommitmentRequest;
                    fromAmino(object: _85.QueryPacketCommitmentRequestAmino): _85.QueryPacketCommitmentRequest;
                    toAmino(message: _85.QueryPacketCommitmentRequest): _85.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _85.QueryPacketCommitmentRequestAminoMsg): _85.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _85.QueryPacketCommitmentRequest): _85.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketCommitmentRequestProtoMsg): _85.QueryPacketCommitmentRequest;
                    toProto(message: _85.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketCommitmentRequest): _85.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_85.QueryPacketCommitmentResponse>): _85.QueryPacketCommitmentResponse;
                    fromAmino(object: _85.QueryPacketCommitmentResponseAmino): _85.QueryPacketCommitmentResponse;
                    toAmino(message: _85.QueryPacketCommitmentResponse): _85.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _85.QueryPacketCommitmentResponseAminoMsg): _85.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _85.QueryPacketCommitmentResponse): _85.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketCommitmentResponseProtoMsg): _85.QueryPacketCommitmentResponse;
                    toProto(message: _85.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketCommitmentResponse): _85.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_85.QueryPacketCommitmentsRequest>): _85.QueryPacketCommitmentsRequest;
                    fromAmino(object: _85.QueryPacketCommitmentsRequestAmino): _85.QueryPacketCommitmentsRequest;
                    toAmino(message: _85.QueryPacketCommitmentsRequest): _85.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _85.QueryPacketCommitmentsRequestAminoMsg): _85.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _85.QueryPacketCommitmentsRequest): _85.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketCommitmentsRequestProtoMsg): _85.QueryPacketCommitmentsRequest;
                    toProto(message: _85.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketCommitmentsRequest): _85.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_85.QueryPacketCommitmentsResponse>): _85.QueryPacketCommitmentsResponse;
                    fromAmino(object: _85.QueryPacketCommitmentsResponseAmino): _85.QueryPacketCommitmentsResponse;
                    toAmino(message: _85.QueryPacketCommitmentsResponse): _85.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _85.QueryPacketCommitmentsResponseAminoMsg): _85.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _85.QueryPacketCommitmentsResponse): _85.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketCommitmentsResponseProtoMsg): _85.QueryPacketCommitmentsResponse;
                    toProto(message: _85.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketCommitmentsResponse): _85.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_85.QueryPacketReceiptRequest>): _85.QueryPacketReceiptRequest;
                    fromAmino(object: _85.QueryPacketReceiptRequestAmino): _85.QueryPacketReceiptRequest;
                    toAmino(message: _85.QueryPacketReceiptRequest): _85.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _85.QueryPacketReceiptRequestAminoMsg): _85.QueryPacketReceiptRequest;
                    toAminoMsg(message: _85.QueryPacketReceiptRequest): _85.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketReceiptRequestProtoMsg): _85.QueryPacketReceiptRequest;
                    toProto(message: _85.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketReceiptRequest): _85.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_85.QueryPacketReceiptResponse>): _85.QueryPacketReceiptResponse;
                    fromAmino(object: _85.QueryPacketReceiptResponseAmino): _85.QueryPacketReceiptResponse;
                    toAmino(message: _85.QueryPacketReceiptResponse): _85.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _85.QueryPacketReceiptResponseAminoMsg): _85.QueryPacketReceiptResponse;
                    toAminoMsg(message: _85.QueryPacketReceiptResponse): _85.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketReceiptResponseProtoMsg): _85.QueryPacketReceiptResponse;
                    toProto(message: _85.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketReceiptResponse): _85.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_85.QueryPacketAcknowledgementRequest>): _85.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _85.QueryPacketAcknowledgementRequestAmino): _85.QueryPacketAcknowledgementRequest;
                    toAmino(message: _85.QueryPacketAcknowledgementRequest): _85.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _85.QueryPacketAcknowledgementRequestAminoMsg): _85.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _85.QueryPacketAcknowledgementRequest): _85.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketAcknowledgementRequestProtoMsg): _85.QueryPacketAcknowledgementRequest;
                    toProto(message: _85.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketAcknowledgementRequest): _85.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_85.QueryPacketAcknowledgementResponse>): _85.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _85.QueryPacketAcknowledgementResponseAmino): _85.QueryPacketAcknowledgementResponse;
                    toAmino(message: _85.QueryPacketAcknowledgementResponse): _85.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _85.QueryPacketAcknowledgementResponseAminoMsg): _85.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _85.QueryPacketAcknowledgementResponse): _85.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketAcknowledgementResponseProtoMsg): _85.QueryPacketAcknowledgementResponse;
                    toProto(message: _85.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketAcknowledgementResponse): _85.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_85.QueryPacketAcknowledgementsRequest>): _85.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _85.QueryPacketAcknowledgementsRequestAmino): _85.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _85.QueryPacketAcknowledgementsRequest): _85.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _85.QueryPacketAcknowledgementsRequestAminoMsg): _85.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _85.QueryPacketAcknowledgementsRequest): _85.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketAcknowledgementsRequestProtoMsg): _85.QueryPacketAcknowledgementsRequest;
                    toProto(message: _85.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketAcknowledgementsRequest): _85.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_85.QueryPacketAcknowledgementsResponse>): _85.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _85.QueryPacketAcknowledgementsResponseAmino): _85.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _85.QueryPacketAcknowledgementsResponse): _85.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _85.QueryPacketAcknowledgementsResponseAminoMsg): _85.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _85.QueryPacketAcknowledgementsResponse): _85.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryPacketAcknowledgementsResponseProtoMsg): _85.QueryPacketAcknowledgementsResponse;
                    toProto(message: _85.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryPacketAcknowledgementsResponse): _85.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_85.QueryUnreceivedPacketsRequest>): _85.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _85.QueryUnreceivedPacketsRequestAmino): _85.QueryUnreceivedPacketsRequest;
                    toAmino(message: _85.QueryUnreceivedPacketsRequest): _85.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _85.QueryUnreceivedPacketsRequestAminoMsg): _85.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _85.QueryUnreceivedPacketsRequest): _85.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryUnreceivedPacketsRequestProtoMsg): _85.QueryUnreceivedPacketsRequest;
                    toProto(message: _85.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryUnreceivedPacketsRequest): _85.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_85.QueryUnreceivedPacketsResponse>): _85.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _85.QueryUnreceivedPacketsResponseAmino): _85.QueryUnreceivedPacketsResponse;
                    toAmino(message: _85.QueryUnreceivedPacketsResponse): _85.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _85.QueryUnreceivedPacketsResponseAminoMsg): _85.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _85.QueryUnreceivedPacketsResponse): _85.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryUnreceivedPacketsResponseProtoMsg): _85.QueryUnreceivedPacketsResponse;
                    toProto(message: _85.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryUnreceivedPacketsResponse): _85.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_85.QueryUnreceivedAcksRequest>): _85.QueryUnreceivedAcksRequest;
                    fromAmino(object: _85.QueryUnreceivedAcksRequestAmino): _85.QueryUnreceivedAcksRequest;
                    toAmino(message: _85.QueryUnreceivedAcksRequest): _85.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _85.QueryUnreceivedAcksRequestAminoMsg): _85.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _85.QueryUnreceivedAcksRequest): _85.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryUnreceivedAcksRequestProtoMsg): _85.QueryUnreceivedAcksRequest;
                    toProto(message: _85.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryUnreceivedAcksRequest): _85.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_85.QueryUnreceivedAcksResponse>): _85.QueryUnreceivedAcksResponse;
                    fromAmino(object: _85.QueryUnreceivedAcksResponseAmino): _85.QueryUnreceivedAcksResponse;
                    toAmino(message: _85.QueryUnreceivedAcksResponse): _85.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _85.QueryUnreceivedAcksResponseAminoMsg): _85.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _85.QueryUnreceivedAcksResponse): _85.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryUnreceivedAcksResponseProtoMsg): _85.QueryUnreceivedAcksResponse;
                    toProto(message: _85.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryUnreceivedAcksResponse): _85.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _85.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_85.QueryNextSequenceReceiveRequest>): _85.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _85.QueryNextSequenceReceiveRequestAmino): _85.QueryNextSequenceReceiveRequest;
                    toAmino(message: _85.QueryNextSequenceReceiveRequest): _85.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _85.QueryNextSequenceReceiveRequestAminoMsg): _85.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _85.QueryNextSequenceReceiveRequest): _85.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryNextSequenceReceiveRequestProtoMsg): _85.QueryNextSequenceReceiveRequest;
                    toProto(message: _85.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryNextSequenceReceiveRequest): _85.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _85.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_85.QueryNextSequenceReceiveResponse>): _85.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _85.QueryNextSequenceReceiveResponseAmino): _85.QueryNextSequenceReceiveResponse;
                    toAmino(message: _85.QueryNextSequenceReceiveResponse): _85.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _85.QueryNextSequenceReceiveResponseAminoMsg): _85.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _85.QueryNextSequenceReceiveResponse): _85.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryNextSequenceReceiveResponseProtoMsg): _85.QueryNextSequenceReceiveResponse;
                    toProto(message: _85.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryNextSequenceReceiveResponse): _85.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                    fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
                    fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                    toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                    fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                    toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                    fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                    toProto(message: _84.GenesisState): Uint8Array;
                    toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _84.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PacketSequence;
                    fromPartial(object: Partial<_84.PacketSequence>): _84.PacketSequence;
                    fromAmino(object: _84.PacketSequenceAmino): _84.PacketSequence;
                    toAmino(message: _84.PacketSequence): _84.PacketSequenceAmino;
                    fromAminoMsg(object: _84.PacketSequenceAminoMsg): _84.PacketSequence;
                    toAminoMsg(message: _84.PacketSequence): _84.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _84.PacketSequenceProtoMsg): _84.PacketSequence;
                    toProto(message: _84.PacketSequence): Uint8Array;
                    toProtoMsg(message: _84.PacketSequence): _84.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _83.State;
                stateToJSON(object: _83.State): string;
                orderFromJSON(object: any): _83.Order;
                orderToJSON(object: _83.Order): string;
                State: typeof _83.State;
                StateSDKType: typeof _83.State;
                StateAmino: typeof _83.State;
                Order: typeof _83.Order;
                OrderSDKType: typeof _83.Order;
                OrderAmino: typeof _83.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _83.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Channel;
                    fromPartial(object: Partial<_83.Channel>): _83.Channel;
                    fromAmino(object: _83.ChannelAmino): _83.Channel;
                    toAmino(message: _83.Channel): _83.ChannelAmino;
                    fromAminoMsg(object: _83.ChannelAminoMsg): _83.Channel;
                    toAminoMsg(message: _83.Channel): _83.ChannelAminoMsg;
                    fromProtoMsg(message: _83.ChannelProtoMsg): _83.Channel;
                    toProto(message: _83.Channel): Uint8Array;
                    toProtoMsg(message: _83.Channel): _83.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _83.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.IdentifiedChannel;
                    fromPartial(object: Partial<_83.IdentifiedChannel>): _83.IdentifiedChannel;
                    fromAmino(object: _83.IdentifiedChannelAmino): _83.IdentifiedChannel;
                    toAmino(message: _83.IdentifiedChannel): _83.IdentifiedChannelAmino;
                    fromAminoMsg(object: _83.IdentifiedChannelAminoMsg): _83.IdentifiedChannel;
                    toAminoMsg(message: _83.IdentifiedChannel): _83.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _83.IdentifiedChannelProtoMsg): _83.IdentifiedChannel;
                    toProto(message: _83.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _83.IdentifiedChannel): _83.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _83.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Counterparty;
                    fromPartial(object: Partial<_83.Counterparty>): _83.Counterparty;
                    fromAmino(object: _83.CounterpartyAmino): _83.Counterparty;
                    toAmino(message: _83.Counterparty): _83.CounterpartyAmino;
                    fromAminoMsg(object: _83.CounterpartyAminoMsg): _83.Counterparty;
                    toAminoMsg(message: _83.Counterparty): _83.CounterpartyAminoMsg;
                    fromProtoMsg(message: _83.CounterpartyProtoMsg): _83.Counterparty;
                    toProto(message: _83.Counterparty): Uint8Array;
                    toProtoMsg(message: _83.Counterparty): _83.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _83.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Packet;
                    fromPartial(object: Partial<_83.Packet>): _83.Packet;
                    fromAmino(object: _83.PacketAmino): _83.Packet;
                    toAmino(message: _83.Packet): _83.PacketAmino;
                    fromAminoMsg(object: _83.PacketAminoMsg): _83.Packet;
                    toAminoMsg(message: _83.Packet): _83.PacketAminoMsg;
                    fromProtoMsg(message: _83.PacketProtoMsg): _83.Packet;
                    toProto(message: _83.Packet): Uint8Array;
                    toProtoMsg(message: _83.Packet): _83.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _83.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketState;
                    fromPartial(object: Partial<_83.PacketState>): _83.PacketState;
                    fromAmino(object: _83.PacketStateAmino): _83.PacketState;
                    toAmino(message: _83.PacketState): _83.PacketStateAmino;
                    fromAminoMsg(object: _83.PacketStateAminoMsg): _83.PacketState;
                    toAminoMsg(message: _83.PacketState): _83.PacketStateAminoMsg;
                    fromProtoMsg(message: _83.PacketStateProtoMsg): _83.PacketState;
                    toProto(message: _83.PacketState): Uint8Array;
                    toProtoMsg(message: _83.PacketState): _83.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _83.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketId;
                    fromPartial(object: Partial<_83.PacketId>): _83.PacketId;
                    fromAmino(object: _83.PacketIdAmino): _83.PacketId;
                    toAmino(message: _83.PacketId): _83.PacketIdAmino;
                    fromAminoMsg(object: _83.PacketIdAminoMsg): _83.PacketId;
                    toAminoMsg(message: _83.PacketId): _83.PacketIdAminoMsg;
                    fromProtoMsg(message: _83.PacketIdProtoMsg): _83.PacketId;
                    toProto(message: _83.PacketId): Uint8Array;
                    toProtoMsg(message: _83.PacketId): _83.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _83.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Acknowledgement;
                    fromPartial(object: Partial<_83.Acknowledgement>): _83.Acknowledgement;
                    fromAmino(object: _83.AcknowledgementAmino): _83.Acknowledgement;
                    toAmino(message: _83.Acknowledgement): _83.AcknowledgementAmino;
                    fromAminoMsg(object: _83.AcknowledgementAminoMsg): _83.Acknowledgement;
                    toAminoMsg(message: _83.Acknowledgement): _83.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _83.AcknowledgementProtoMsg): _83.Acknowledgement;
                    toProto(message: _83.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _83.Acknowledgement): _83.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _259.MsgClientImpl;
                QueryClientImpl: typeof _253.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _89.QueryClientStateRequest): Promise<_89.QueryClientStateResponse>;
                    clientStates(request?: _89.QueryClientStatesRequest): Promise<_89.QueryClientStatesResponse>;
                    consensusState(request: _89.QueryConsensusStateRequest): Promise<_89.QueryConsensusStateResponse>;
                    consensusStates(request: _89.QueryConsensusStatesRequest): Promise<_89.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _89.QueryConsensusStateHeightsRequest): Promise<_89.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _89.QueryClientStatusRequest): Promise<_89.QueryClientStatusResponse>;
                    clientParams(request?: _89.QueryClientParamsRequest): Promise<_89.QueryClientParamsResponse>;
                    upgradedClientState(request?: _89.QueryUpgradedClientStateRequest): Promise<_89.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _89.QueryUpgradedConsensusStateRequest): Promise<_89.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _246.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _90.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _90.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _90.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _90.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _90.MsgCreateClient): {
                            typeUrl: string;
                            value: _90.MsgCreateClient;
                        };
                        updateClient(value: _90.MsgUpdateClient): {
                            typeUrl: string;
                            value: _90.MsgUpdateClient;
                        };
                        upgradeClient(value: _90.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _90.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _90.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _90.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _90.MsgCreateClient): {
                            typeUrl: string;
                            value: _90.MsgCreateClient;
                        };
                        updateClient(value: _90.MsgUpdateClient): {
                            typeUrl: string;
                            value: _90.MsgUpdateClient;
                        };
                        upgradeClient(value: _90.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _90.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _90.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _90.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _90.MsgCreateClient) => _90.MsgCreateClientAmino;
                        fromAmino: (object: _90.MsgCreateClientAmino) => _90.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _90.MsgUpdateClient) => _90.MsgUpdateClientAmino;
                        fromAmino: (object: _90.MsgUpdateClientAmino) => _90.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _90.MsgUpgradeClient) => _90.MsgUpgradeClientAmino;
                        fromAmino: (object: _90.MsgUpgradeClientAmino) => _90.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _90.MsgSubmitMisbehaviour) => _90.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _90.MsgSubmitMisbehaviourAmino) => _90.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _90.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateClient;
                    fromPartial(object: Partial<_90.MsgCreateClient>): _90.MsgCreateClient;
                    fromAmino(object: _90.MsgCreateClientAmino): _90.MsgCreateClient;
                    toAmino(message: _90.MsgCreateClient): _90.MsgCreateClientAmino;
                    fromAminoMsg(object: _90.MsgCreateClientAminoMsg): _90.MsgCreateClient;
                    toAminoMsg(message: _90.MsgCreateClient): _90.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _90.MsgCreateClientProtoMsg): _90.MsgCreateClient;
                    toProto(message: _90.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _90.MsgCreateClient): _90.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateClientResponse;
                    fromPartial(_: Partial<_90.MsgCreateClientResponse>): _90.MsgCreateClientResponse;
                    fromAmino(_: _90.MsgCreateClientResponseAmino): _90.MsgCreateClientResponse;
                    toAmino(_: _90.MsgCreateClientResponse): _90.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _90.MsgCreateClientResponseAminoMsg): _90.MsgCreateClientResponse;
                    toAminoMsg(message: _90.MsgCreateClientResponse): _90.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgCreateClientResponseProtoMsg): _90.MsgCreateClientResponse;
                    toProto(message: _90.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgCreateClientResponse): _90.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _90.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUpdateClient;
                    fromPartial(object: Partial<_90.MsgUpdateClient>): _90.MsgUpdateClient;
                    fromAmino(object: _90.MsgUpdateClientAmino): _90.MsgUpdateClient;
                    toAmino(message: _90.MsgUpdateClient): _90.MsgUpdateClientAmino;
                    fromAminoMsg(object: _90.MsgUpdateClientAminoMsg): _90.MsgUpdateClient;
                    toAminoMsg(message: _90.MsgUpdateClient): _90.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _90.MsgUpdateClientProtoMsg): _90.MsgUpdateClient;
                    toProto(message: _90.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _90.MsgUpdateClient): _90.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_90.MsgUpdateClientResponse>): _90.MsgUpdateClientResponse;
                    fromAmino(_: _90.MsgUpdateClientResponseAmino): _90.MsgUpdateClientResponse;
                    toAmino(_: _90.MsgUpdateClientResponse): _90.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _90.MsgUpdateClientResponseAminoMsg): _90.MsgUpdateClientResponse;
                    toAminoMsg(message: _90.MsgUpdateClientResponse): _90.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgUpdateClientResponseProtoMsg): _90.MsgUpdateClientResponse;
                    toProto(message: _90.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgUpdateClientResponse): _90.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _90.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUpgradeClient;
                    fromPartial(object: Partial<_90.MsgUpgradeClient>): _90.MsgUpgradeClient;
                    fromAmino(object: _90.MsgUpgradeClientAmino): _90.MsgUpgradeClient;
                    toAmino(message: _90.MsgUpgradeClient): _90.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _90.MsgUpgradeClientAminoMsg): _90.MsgUpgradeClient;
                    toAminoMsg(message: _90.MsgUpgradeClient): _90.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _90.MsgUpgradeClientProtoMsg): _90.MsgUpgradeClient;
                    toProto(message: _90.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _90.MsgUpgradeClient): _90.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_90.MsgUpgradeClientResponse>): _90.MsgUpgradeClientResponse;
                    fromAmino(_: _90.MsgUpgradeClientResponseAmino): _90.MsgUpgradeClientResponse;
                    toAmino(_: _90.MsgUpgradeClientResponse): _90.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _90.MsgUpgradeClientResponseAminoMsg): _90.MsgUpgradeClientResponse;
                    toAminoMsg(message: _90.MsgUpgradeClientResponse): _90.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgUpgradeClientResponseProtoMsg): _90.MsgUpgradeClientResponse;
                    toProto(message: _90.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgUpgradeClientResponse): _90.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _90.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_90.MsgSubmitMisbehaviour>): _90.MsgSubmitMisbehaviour;
                    fromAmino(object: _90.MsgSubmitMisbehaviourAmino): _90.MsgSubmitMisbehaviour;
                    toAmino(message: _90.MsgSubmitMisbehaviour): _90.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _90.MsgSubmitMisbehaviourAminoMsg): _90.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _90.MsgSubmitMisbehaviour): _90.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _90.MsgSubmitMisbehaviourProtoMsg): _90.MsgSubmitMisbehaviour;
                    toProto(message: _90.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _90.MsgSubmitMisbehaviour): _90.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_90.MsgSubmitMisbehaviourResponse>): _90.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _90.MsgSubmitMisbehaviourResponseAmino): _90.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _90.MsgSubmitMisbehaviourResponse): _90.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _90.MsgSubmitMisbehaviourResponseAminoMsg): _90.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _90.MsgSubmitMisbehaviourResponse): _90.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgSubmitMisbehaviourResponseProtoMsg): _90.MsgSubmitMisbehaviourResponse;
                    toProto(message: _90.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgSubmitMisbehaviourResponse): _90.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStateRequest;
                    fromPartial(object: Partial<_89.QueryClientStateRequest>): _89.QueryClientStateRequest;
                    fromAmino(object: _89.QueryClientStateRequestAmino): _89.QueryClientStateRequest;
                    toAmino(message: _89.QueryClientStateRequest): _89.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _89.QueryClientStateRequestAminoMsg): _89.QueryClientStateRequest;
                    toAminoMsg(message: _89.QueryClientStateRequest): _89.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStateRequestProtoMsg): _89.QueryClientStateRequest;
                    toProto(message: _89.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStateRequest): _89.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStateResponse;
                    fromPartial(object: Partial<_89.QueryClientStateResponse>): _89.QueryClientStateResponse;
                    fromAmino(object: _89.QueryClientStateResponseAmino): _89.QueryClientStateResponse;
                    toAmino(message: _89.QueryClientStateResponse): _89.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _89.QueryClientStateResponseAminoMsg): _89.QueryClientStateResponse;
                    toAminoMsg(message: _89.QueryClientStateResponse): _89.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStateResponseProtoMsg): _89.QueryClientStateResponse;
                    toProto(message: _89.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStateResponse): _89.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStatesRequest;
                    fromPartial(object: Partial<_89.QueryClientStatesRequest>): _89.QueryClientStatesRequest;
                    fromAmino(object: _89.QueryClientStatesRequestAmino): _89.QueryClientStatesRequest;
                    toAmino(message: _89.QueryClientStatesRequest): _89.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _89.QueryClientStatesRequestAminoMsg): _89.QueryClientStatesRequest;
                    toAminoMsg(message: _89.QueryClientStatesRequest): _89.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStatesRequestProtoMsg): _89.QueryClientStatesRequest;
                    toProto(message: _89.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStatesRequest): _89.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStatesResponse;
                    fromPartial(object: Partial<_89.QueryClientStatesResponse>): _89.QueryClientStatesResponse;
                    fromAmino(object: _89.QueryClientStatesResponseAmino): _89.QueryClientStatesResponse;
                    toAmino(message: _89.QueryClientStatesResponse): _89.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _89.QueryClientStatesResponseAminoMsg): _89.QueryClientStatesResponse;
                    toAminoMsg(message: _89.QueryClientStatesResponse): _89.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStatesResponseProtoMsg): _89.QueryClientStatesResponse;
                    toProto(message: _89.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStatesResponse): _89.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_89.QueryConsensusStateRequest>): _89.QueryConsensusStateRequest;
                    fromAmino(object: _89.QueryConsensusStateRequestAmino): _89.QueryConsensusStateRequest;
                    toAmino(message: _89.QueryConsensusStateRequest): _89.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _89.QueryConsensusStateRequestAminoMsg): _89.QueryConsensusStateRequest;
                    toAminoMsg(message: _89.QueryConsensusStateRequest): _89.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStateRequestProtoMsg): _89.QueryConsensusStateRequest;
                    toProto(message: _89.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStateRequest): _89.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_89.QueryConsensusStateResponse>): _89.QueryConsensusStateResponse;
                    fromAmino(object: _89.QueryConsensusStateResponseAmino): _89.QueryConsensusStateResponse;
                    toAmino(message: _89.QueryConsensusStateResponse): _89.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _89.QueryConsensusStateResponseAminoMsg): _89.QueryConsensusStateResponse;
                    toAminoMsg(message: _89.QueryConsensusStateResponse): _89.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStateResponseProtoMsg): _89.QueryConsensusStateResponse;
                    toProto(message: _89.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStateResponse): _89.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_89.QueryConsensusStatesRequest>): _89.QueryConsensusStatesRequest;
                    fromAmino(object: _89.QueryConsensusStatesRequestAmino): _89.QueryConsensusStatesRequest;
                    toAmino(message: _89.QueryConsensusStatesRequest): _89.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _89.QueryConsensusStatesRequestAminoMsg): _89.QueryConsensusStatesRequest;
                    toAminoMsg(message: _89.QueryConsensusStatesRequest): _89.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStatesRequestProtoMsg): _89.QueryConsensusStatesRequest;
                    toProto(message: _89.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStatesRequest): _89.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_89.QueryConsensusStatesResponse>): _89.QueryConsensusStatesResponse;
                    fromAmino(object: _89.QueryConsensusStatesResponseAmino): _89.QueryConsensusStatesResponse;
                    toAmino(message: _89.QueryConsensusStatesResponse): _89.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _89.QueryConsensusStatesResponseAminoMsg): _89.QueryConsensusStatesResponse;
                    toAminoMsg(message: _89.QueryConsensusStatesResponse): _89.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStatesResponseProtoMsg): _89.QueryConsensusStatesResponse;
                    toProto(message: _89.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStatesResponse): _89.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_89.QueryConsensusStateHeightsRequest>): _89.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _89.QueryConsensusStateHeightsRequestAmino): _89.QueryConsensusStateHeightsRequest;
                    toAmino(message: _89.QueryConsensusStateHeightsRequest): _89.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _89.QueryConsensusStateHeightsRequestAminoMsg): _89.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _89.QueryConsensusStateHeightsRequest): _89.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStateHeightsRequestProtoMsg): _89.QueryConsensusStateHeightsRequest;
                    toProto(message: _89.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStateHeightsRequest): _89.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_89.QueryConsensusStateHeightsResponse>): _89.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _89.QueryConsensusStateHeightsResponseAmino): _89.QueryConsensusStateHeightsResponse;
                    toAmino(message: _89.QueryConsensusStateHeightsResponse): _89.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _89.QueryConsensusStateHeightsResponseAminoMsg): _89.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _89.QueryConsensusStateHeightsResponse): _89.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryConsensusStateHeightsResponseProtoMsg): _89.QueryConsensusStateHeightsResponse;
                    toProto(message: _89.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryConsensusStateHeightsResponse): _89.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStatusRequest;
                    fromPartial(object: Partial<_89.QueryClientStatusRequest>): _89.QueryClientStatusRequest;
                    fromAmino(object: _89.QueryClientStatusRequestAmino): _89.QueryClientStatusRequest;
                    toAmino(message: _89.QueryClientStatusRequest): _89.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _89.QueryClientStatusRequestAminoMsg): _89.QueryClientStatusRequest;
                    toAminoMsg(message: _89.QueryClientStatusRequest): _89.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStatusRequestProtoMsg): _89.QueryClientStatusRequest;
                    toProto(message: _89.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStatusRequest): _89.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientStatusResponse;
                    fromPartial(object: Partial<_89.QueryClientStatusResponse>): _89.QueryClientStatusResponse;
                    fromAmino(object: _89.QueryClientStatusResponseAmino): _89.QueryClientStatusResponse;
                    toAmino(message: _89.QueryClientStatusResponse): _89.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _89.QueryClientStatusResponseAminoMsg): _89.QueryClientStatusResponse;
                    toAminoMsg(message: _89.QueryClientStatusResponse): _89.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryClientStatusResponseProtoMsg): _89.QueryClientStatusResponse;
                    toProto(message: _89.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryClientStatusResponse): _89.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _89.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientParamsRequest;
                    fromPartial(_: Partial<_89.QueryClientParamsRequest>): _89.QueryClientParamsRequest;
                    fromAmino(_: _89.QueryClientParamsRequestAmino): _89.QueryClientParamsRequest;
                    toAmino(_: _89.QueryClientParamsRequest): _89.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _89.QueryClientParamsRequestAminoMsg): _89.QueryClientParamsRequest;
                    toAminoMsg(message: _89.QueryClientParamsRequest): _89.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryClientParamsRequestProtoMsg): _89.QueryClientParamsRequest;
                    toProto(message: _89.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryClientParamsRequest): _89.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientParamsResponse;
                    fromPartial(object: Partial<_89.QueryClientParamsResponse>): _89.QueryClientParamsResponse;
                    fromAmino(object: _89.QueryClientParamsResponseAmino): _89.QueryClientParamsResponse;
                    toAmino(message: _89.QueryClientParamsResponse): _89.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _89.QueryClientParamsResponseAminoMsg): _89.QueryClientParamsResponse;
                    toAminoMsg(message: _89.QueryClientParamsResponse): _89.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryClientParamsResponseProtoMsg): _89.QueryClientParamsResponse;
                    toProto(message: _89.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryClientParamsResponse): _89.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _89.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_89.QueryUpgradedClientStateRequest>): _89.QueryUpgradedClientStateRequest;
                    fromAmino(_: _89.QueryUpgradedClientStateRequestAmino): _89.QueryUpgradedClientStateRequest;
                    toAmino(_: _89.QueryUpgradedClientStateRequest): _89.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _89.QueryUpgradedClientStateRequestAminoMsg): _89.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _89.QueryUpgradedClientStateRequest): _89.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryUpgradedClientStateRequestProtoMsg): _89.QueryUpgradedClientStateRequest;
                    toProto(message: _89.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryUpgradedClientStateRequest): _89.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_89.QueryUpgradedClientStateResponse>): _89.QueryUpgradedClientStateResponse;
                    fromAmino(object: _89.QueryUpgradedClientStateResponseAmino): _89.QueryUpgradedClientStateResponse;
                    toAmino(message: _89.QueryUpgradedClientStateResponse): _89.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _89.QueryUpgradedClientStateResponseAminoMsg): _89.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _89.QueryUpgradedClientStateResponse): _89.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryUpgradedClientStateResponseProtoMsg): _89.QueryUpgradedClientStateResponse;
                    toProto(message: _89.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryUpgradedClientStateResponse): _89.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _89.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_89.QueryUpgradedConsensusStateRequest>): _89.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _89.QueryUpgradedConsensusStateRequestAmino): _89.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _89.QueryUpgradedConsensusStateRequestAminoMsg): _89.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _89.QueryUpgradedConsensusStateRequestProtoMsg): _89.QueryUpgradedConsensusStateRequest;
                    toProto(message: _89.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _89.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_89.QueryUpgradedConsensusStateResponse>): _89.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _89.QueryUpgradedConsensusStateResponseAmino): _89.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _89.QueryUpgradedConsensusStateResponseAminoMsg): _89.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _89.QueryUpgradedConsensusStateResponseProtoMsg): _89.QueryUpgradedConsensusStateResponse;
                    toProto(message: _89.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisState;
                    fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                    fromAmino(object: _88.GenesisStateAmino): _88.GenesisState;
                    toAmino(message: _88.GenesisState): _88.GenesisStateAmino;
                    fromAminoMsg(object: _88.GenesisStateAminoMsg): _88.GenesisState;
                    toAminoMsg(message: _88.GenesisState): _88.GenesisStateAminoMsg;
                    fromProtoMsg(message: _88.GenesisStateProtoMsg): _88.GenesisState;
                    toProto(message: _88.GenesisState): Uint8Array;
                    toProtoMsg(message: _88.GenesisState): _88.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _88.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisMetadata;
                    fromPartial(object: Partial<_88.GenesisMetadata>): _88.GenesisMetadata;
                    fromAmino(object: _88.GenesisMetadataAmino): _88.GenesisMetadata;
                    toAmino(message: _88.GenesisMetadata): _88.GenesisMetadataAmino;
                    fromAminoMsg(object: _88.GenesisMetadataAminoMsg): _88.GenesisMetadata;
                    toAminoMsg(message: _88.GenesisMetadata): _88.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _88.GenesisMetadataProtoMsg): _88.GenesisMetadata;
                    toProto(message: _88.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _88.GenesisMetadata): _88.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _88.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_88.IdentifiedGenesisMetadata>): _88.IdentifiedGenesisMetadata;
                    fromAmino(object: _88.IdentifiedGenesisMetadataAmino): _88.IdentifiedGenesisMetadata;
                    toAmino(message: _88.IdentifiedGenesisMetadata): _88.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _88.IdentifiedGenesisMetadataAminoMsg): _88.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _88.IdentifiedGenesisMetadata): _88.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _88.IdentifiedGenesisMetadataProtoMsg): _88.IdentifiedGenesisMetadata;
                    toProto(message: _88.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _88.IdentifiedGenesisMetadata): _88.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _87.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.IdentifiedClientState;
                    fromPartial(object: Partial<_87.IdentifiedClientState>): _87.IdentifiedClientState;
                    fromAmino(object: _87.IdentifiedClientStateAmino): _87.IdentifiedClientState;
                    toAmino(message: _87.IdentifiedClientState): _87.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _87.IdentifiedClientStateAminoMsg): _87.IdentifiedClientState;
                    toAminoMsg(message: _87.IdentifiedClientState): _87.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _87.IdentifiedClientStateProtoMsg): _87.IdentifiedClientState;
                    toProto(message: _87.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _87.IdentifiedClientState): _87.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _87.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_87.ConsensusStateWithHeight>): _87.ConsensusStateWithHeight;
                    fromAmino(object: _87.ConsensusStateWithHeightAmino): _87.ConsensusStateWithHeight;
                    toAmino(message: _87.ConsensusStateWithHeight): _87.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _87.ConsensusStateWithHeightAminoMsg): _87.ConsensusStateWithHeight;
                    toAminoMsg(message: _87.ConsensusStateWithHeight): _87.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _87.ConsensusStateWithHeightProtoMsg): _87.ConsensusStateWithHeight;
                    toProto(message: _87.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _87.ConsensusStateWithHeight): _87.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _87.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientConsensusStates;
                    fromPartial(object: Partial<_87.ClientConsensusStates>): _87.ClientConsensusStates;
                    fromAmino(object: _87.ClientConsensusStatesAmino): _87.ClientConsensusStates;
                    toAmino(message: _87.ClientConsensusStates): _87.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _87.ClientConsensusStatesAminoMsg): _87.ClientConsensusStates;
                    toAminoMsg(message: _87.ClientConsensusStates): _87.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _87.ClientConsensusStatesProtoMsg): _87.ClientConsensusStates;
                    toProto(message: _87.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _87.ClientConsensusStates): _87.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _87.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientUpdateProposal;
                    fromPartial(object: Partial<_87.ClientUpdateProposal>): _87.ClientUpdateProposal;
                    fromAmino(object: _87.ClientUpdateProposalAmino): _87.ClientUpdateProposal;
                    toAmino(message: _87.ClientUpdateProposal): _87.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _87.ClientUpdateProposalAminoMsg): _87.ClientUpdateProposal;
                    toAminoMsg(message: _87.ClientUpdateProposal): _87.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _87.ClientUpdateProposalProtoMsg): _87.ClientUpdateProposal;
                    toProto(message: _87.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _87.ClientUpdateProposal): _87.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _87.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UpgradeProposal;
                    fromPartial(object: Partial<_87.UpgradeProposal>): _87.UpgradeProposal;
                    fromAmino(object: _87.UpgradeProposalAmino): _87.UpgradeProposal;
                    toAmino(message: _87.UpgradeProposal): _87.UpgradeProposalAmino;
                    fromAminoMsg(object: _87.UpgradeProposalAminoMsg): _87.UpgradeProposal;
                    toAminoMsg(message: _87.UpgradeProposal): _87.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _87.UpgradeProposalProtoMsg): _87.UpgradeProposal;
                    toProto(message: _87.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _87.UpgradeProposal): _87.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _87.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Height;
                    fromPartial(object: Partial<_87.Height>): _87.Height;
                    fromAmino(object: _87.HeightAmino): _87.Height;
                    toAmino(message: _87.Height): _87.HeightAmino;
                    fromAminoMsg(object: _87.HeightAminoMsg): _87.Height;
                    toAminoMsg(message: _87.Height): _87.HeightAminoMsg;
                    fromProtoMsg(message: _87.HeightProtoMsg): _87.Height;
                    toProto(message: _87.Height): Uint8Array;
                    toProtoMsg(message: _87.Height): _87.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _87.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Params;
                    fromPartial(object: Partial<_87.Params>): _87.Params;
                    fromAmino(object: _87.ParamsAmino): _87.Params;
                    toAmino(message: _87.Params): _87.ParamsAmino;
                    fromAminoMsg(object: _87.ParamsAminoMsg): _87.Params;
                    toAminoMsg(message: _87.Params): _87.ParamsAminoMsg;
                    fromProtoMsg(message: _87.ParamsProtoMsg): _87.Params;
                    toProto(message: _87.Params): Uint8Array;
                    toProtoMsg(message: _87.Params): _87.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _91.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MerkleRoot;
                    fromPartial(object: Partial<_91.MerkleRoot>): _91.MerkleRoot;
                    fromAmino(object: _91.MerkleRootAmino): _91.MerkleRoot;
                    toAmino(message: _91.MerkleRoot): _91.MerkleRootAmino;
                    fromAminoMsg(object: _91.MerkleRootAminoMsg): _91.MerkleRoot;
                    toAminoMsg(message: _91.MerkleRoot): _91.MerkleRootAminoMsg;
                    fromProtoMsg(message: _91.MerkleRootProtoMsg): _91.MerkleRoot;
                    toProto(message: _91.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _91.MerkleRoot): _91.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _91.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MerklePrefix;
                    fromPartial(object: Partial<_91.MerklePrefix>): _91.MerklePrefix;
                    fromAmino(object: _91.MerklePrefixAmino): _91.MerklePrefix;
                    toAmino(message: _91.MerklePrefix): _91.MerklePrefixAmino;
                    fromAminoMsg(object: _91.MerklePrefixAminoMsg): _91.MerklePrefix;
                    toAminoMsg(message: _91.MerklePrefix): _91.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _91.MerklePrefixProtoMsg): _91.MerklePrefix;
                    toProto(message: _91.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _91.MerklePrefix): _91.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _91.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MerklePath;
                    fromPartial(object: Partial<_91.MerklePath>): _91.MerklePath;
                    fromAmino(object: _91.MerklePathAmino): _91.MerklePath;
                    toAmino(message: _91.MerklePath): _91.MerklePathAmino;
                    fromAminoMsg(object: _91.MerklePathAminoMsg): _91.MerklePath;
                    toAminoMsg(message: _91.MerklePath): _91.MerklePathAminoMsg;
                    fromProtoMsg(message: _91.MerklePathProtoMsg): _91.MerklePath;
                    toProto(message: _91.MerklePath): Uint8Array;
                    toProtoMsg(message: _91.MerklePath): _91.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _91.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MerkleProof;
                    fromPartial(object: Partial<_91.MerkleProof>): _91.MerkleProof;
                    fromAmino(object: _91.MerkleProofAmino): _91.MerkleProof;
                    toAmino(message: _91.MerkleProof): _91.MerkleProofAmino;
                    fromAminoMsg(object: _91.MerkleProofAminoMsg): _91.MerkleProof;
                    toAminoMsg(message: _91.MerkleProof): _91.MerkleProofAminoMsg;
                    fromProtoMsg(message: _91.MerkleProofProtoMsg): _91.MerkleProof;
                    toProto(message: _91.MerkleProof): Uint8Array;
                    toProtoMsg(message: _91.MerkleProof): _91.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _260.MsgClientImpl;
                QueryClientImpl: typeof _254.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _94.QueryConnectionRequest): Promise<_94.QueryConnectionResponse>;
                    connections(request?: _94.QueryConnectionsRequest): Promise<_94.QueryConnectionsResponse>;
                    clientConnections(request: _94.QueryClientConnectionsRequest): Promise<_94.QueryClientConnectionsResponse>;
                    connectionClientState(request: _94.QueryConnectionClientStateRequest): Promise<_94.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _94.QueryConnectionConsensusStateRequest): Promise<_94.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _94.QueryConnectionParamsRequest): Promise<_94.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _247.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _95.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _95.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _95.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _95.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _95.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _95.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _95.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _95.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _95.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _95.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _95.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _95.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _95.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _95.MsgConnectionOpenInit) => _95.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _95.MsgConnectionOpenInitAmino) => _95.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _95.MsgConnectionOpenTry) => _95.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _95.MsgConnectionOpenTryAmino) => _95.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _95.MsgConnectionOpenAck) => _95.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _95.MsgConnectionOpenAckAmino) => _95.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _95.MsgConnectionOpenConfirm) => _95.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _95.MsgConnectionOpenConfirmAmino) => _95.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _95.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_95.MsgConnectionOpenInit>): _95.MsgConnectionOpenInit;
                    fromAmino(object: _95.MsgConnectionOpenInitAmino): _95.MsgConnectionOpenInit;
                    toAmino(message: _95.MsgConnectionOpenInit): _95.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenInitAminoMsg): _95.MsgConnectionOpenInit;
                    toAminoMsg(message: _95.MsgConnectionOpenInit): _95.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenInitProtoMsg): _95.MsgConnectionOpenInit;
                    toProto(message: _95.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenInit): _95.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _95.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_95.MsgConnectionOpenInitResponse>): _95.MsgConnectionOpenInitResponse;
                    fromAmino(_: _95.MsgConnectionOpenInitResponseAmino): _95.MsgConnectionOpenInitResponse;
                    toAmino(_: _95.MsgConnectionOpenInitResponse): _95.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenInitResponseAminoMsg): _95.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _95.MsgConnectionOpenInitResponse): _95.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenInitResponseProtoMsg): _95.MsgConnectionOpenInitResponse;
                    toProto(message: _95.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenInitResponse): _95.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _95.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_95.MsgConnectionOpenTry>): _95.MsgConnectionOpenTry;
                    fromAmino(object: _95.MsgConnectionOpenTryAmino): _95.MsgConnectionOpenTry;
                    toAmino(message: _95.MsgConnectionOpenTry): _95.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenTryAminoMsg): _95.MsgConnectionOpenTry;
                    toAminoMsg(message: _95.MsgConnectionOpenTry): _95.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenTryProtoMsg): _95.MsgConnectionOpenTry;
                    toProto(message: _95.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenTry): _95.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _95.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_95.MsgConnectionOpenTryResponse>): _95.MsgConnectionOpenTryResponse;
                    fromAmino(_: _95.MsgConnectionOpenTryResponseAmino): _95.MsgConnectionOpenTryResponse;
                    toAmino(_: _95.MsgConnectionOpenTryResponse): _95.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenTryResponseAminoMsg): _95.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _95.MsgConnectionOpenTryResponse): _95.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenTryResponseProtoMsg): _95.MsgConnectionOpenTryResponse;
                    toProto(message: _95.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenTryResponse): _95.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _95.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_95.MsgConnectionOpenAck>): _95.MsgConnectionOpenAck;
                    fromAmino(object: _95.MsgConnectionOpenAckAmino): _95.MsgConnectionOpenAck;
                    toAmino(message: _95.MsgConnectionOpenAck): _95.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenAckAminoMsg): _95.MsgConnectionOpenAck;
                    toAminoMsg(message: _95.MsgConnectionOpenAck): _95.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenAckProtoMsg): _95.MsgConnectionOpenAck;
                    toProto(message: _95.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenAck): _95.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _95.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_95.MsgConnectionOpenAckResponse>): _95.MsgConnectionOpenAckResponse;
                    fromAmino(_: _95.MsgConnectionOpenAckResponseAmino): _95.MsgConnectionOpenAckResponse;
                    toAmino(_: _95.MsgConnectionOpenAckResponse): _95.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenAckResponseAminoMsg): _95.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _95.MsgConnectionOpenAckResponse): _95.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenAckResponseProtoMsg): _95.MsgConnectionOpenAckResponse;
                    toProto(message: _95.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenAckResponse): _95.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _95.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_95.MsgConnectionOpenConfirm>): _95.MsgConnectionOpenConfirm;
                    fromAmino(object: _95.MsgConnectionOpenConfirmAmino): _95.MsgConnectionOpenConfirm;
                    toAmino(message: _95.MsgConnectionOpenConfirm): _95.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenConfirmAminoMsg): _95.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _95.MsgConnectionOpenConfirm): _95.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenConfirmProtoMsg): _95.MsgConnectionOpenConfirm;
                    toProto(message: _95.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenConfirm): _95.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _95.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_95.MsgConnectionOpenConfirmResponse>): _95.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _95.MsgConnectionOpenConfirmResponseAmino): _95.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _95.MsgConnectionOpenConfirmResponse): _95.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _95.MsgConnectionOpenConfirmResponseAminoMsg): _95.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _95.MsgConnectionOpenConfirmResponse): _95.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _95.MsgConnectionOpenConfirmResponseProtoMsg): _95.MsgConnectionOpenConfirmResponse;
                    toProto(message: _95.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _95.MsgConnectionOpenConfirmResponse): _95.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionRequest;
                    fromPartial(object: Partial<_94.QueryConnectionRequest>): _94.QueryConnectionRequest;
                    fromAmino(object: _94.QueryConnectionRequestAmino): _94.QueryConnectionRequest;
                    toAmino(message: _94.QueryConnectionRequest): _94.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _94.QueryConnectionRequestAminoMsg): _94.QueryConnectionRequest;
                    toAminoMsg(message: _94.QueryConnectionRequest): _94.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionRequestProtoMsg): _94.QueryConnectionRequest;
                    toProto(message: _94.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionRequest): _94.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionResponse;
                    fromPartial(object: Partial<_94.QueryConnectionResponse>): _94.QueryConnectionResponse;
                    fromAmino(object: _94.QueryConnectionResponseAmino): _94.QueryConnectionResponse;
                    toAmino(message: _94.QueryConnectionResponse): _94.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _94.QueryConnectionResponseAminoMsg): _94.QueryConnectionResponse;
                    toAminoMsg(message: _94.QueryConnectionResponse): _94.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionResponseProtoMsg): _94.QueryConnectionResponse;
                    toProto(message: _94.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionResponse): _94.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionsRequest;
                    fromPartial(object: Partial<_94.QueryConnectionsRequest>): _94.QueryConnectionsRequest;
                    fromAmino(object: _94.QueryConnectionsRequestAmino): _94.QueryConnectionsRequest;
                    toAmino(message: _94.QueryConnectionsRequest): _94.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _94.QueryConnectionsRequestAminoMsg): _94.QueryConnectionsRequest;
                    toAminoMsg(message: _94.QueryConnectionsRequest): _94.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionsRequestProtoMsg): _94.QueryConnectionsRequest;
                    toProto(message: _94.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionsRequest): _94.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionsResponse;
                    fromPartial(object: Partial<_94.QueryConnectionsResponse>): _94.QueryConnectionsResponse;
                    fromAmino(object: _94.QueryConnectionsResponseAmino): _94.QueryConnectionsResponse;
                    toAmino(message: _94.QueryConnectionsResponse): _94.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _94.QueryConnectionsResponseAminoMsg): _94.QueryConnectionsResponse;
                    toAminoMsg(message: _94.QueryConnectionsResponse): _94.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionsResponseProtoMsg): _94.QueryConnectionsResponse;
                    toProto(message: _94.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionsResponse): _94.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _94.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_94.QueryClientConnectionsRequest>): _94.QueryClientConnectionsRequest;
                    fromAmino(object: _94.QueryClientConnectionsRequestAmino): _94.QueryClientConnectionsRequest;
                    toAmino(message: _94.QueryClientConnectionsRequest): _94.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _94.QueryClientConnectionsRequestAminoMsg): _94.QueryClientConnectionsRequest;
                    toAminoMsg(message: _94.QueryClientConnectionsRequest): _94.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryClientConnectionsRequestProtoMsg): _94.QueryClientConnectionsRequest;
                    toProto(message: _94.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryClientConnectionsRequest): _94.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_94.QueryClientConnectionsResponse>): _94.QueryClientConnectionsResponse;
                    fromAmino(object: _94.QueryClientConnectionsResponseAmino): _94.QueryClientConnectionsResponse;
                    toAmino(message: _94.QueryClientConnectionsResponse): _94.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _94.QueryClientConnectionsResponseAminoMsg): _94.QueryClientConnectionsResponse;
                    toAminoMsg(message: _94.QueryClientConnectionsResponse): _94.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryClientConnectionsResponseProtoMsg): _94.QueryClientConnectionsResponse;
                    toProto(message: _94.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryClientConnectionsResponse): _94.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_94.QueryConnectionClientStateRequest>): _94.QueryConnectionClientStateRequest;
                    fromAmino(object: _94.QueryConnectionClientStateRequestAmino): _94.QueryConnectionClientStateRequest;
                    toAmino(message: _94.QueryConnectionClientStateRequest): _94.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _94.QueryConnectionClientStateRequestAminoMsg): _94.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _94.QueryConnectionClientStateRequest): _94.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionClientStateRequestProtoMsg): _94.QueryConnectionClientStateRequest;
                    toProto(message: _94.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionClientStateRequest): _94.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_94.QueryConnectionClientStateResponse>): _94.QueryConnectionClientStateResponse;
                    fromAmino(object: _94.QueryConnectionClientStateResponseAmino): _94.QueryConnectionClientStateResponse;
                    toAmino(message: _94.QueryConnectionClientStateResponse): _94.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _94.QueryConnectionClientStateResponseAminoMsg): _94.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _94.QueryConnectionClientStateResponse): _94.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionClientStateResponseProtoMsg): _94.QueryConnectionClientStateResponse;
                    toProto(message: _94.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionClientStateResponse): _94.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_94.QueryConnectionConsensusStateRequest>): _94.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _94.QueryConnectionConsensusStateRequestAmino): _94.QueryConnectionConsensusStateRequest;
                    toAmino(message: _94.QueryConnectionConsensusStateRequest): _94.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _94.QueryConnectionConsensusStateRequestAminoMsg): _94.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _94.QueryConnectionConsensusStateRequest): _94.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionConsensusStateRequestProtoMsg): _94.QueryConnectionConsensusStateRequest;
                    toProto(message: _94.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionConsensusStateRequest): _94.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_94.QueryConnectionConsensusStateResponse>): _94.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _94.QueryConnectionConsensusStateResponseAmino): _94.QueryConnectionConsensusStateResponse;
                    toAmino(message: _94.QueryConnectionConsensusStateResponse): _94.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _94.QueryConnectionConsensusStateResponseAminoMsg): _94.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _94.QueryConnectionConsensusStateResponse): _94.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionConsensusStateResponseProtoMsg): _94.QueryConnectionConsensusStateResponse;
                    toProto(message: _94.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionConsensusStateResponse): _94.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _94.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_94.QueryConnectionParamsRequest>): _94.QueryConnectionParamsRequest;
                    fromAmino(_: _94.QueryConnectionParamsRequestAmino): _94.QueryConnectionParamsRequest;
                    toAmino(_: _94.QueryConnectionParamsRequest): _94.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _94.QueryConnectionParamsRequestAminoMsg): _94.QueryConnectionParamsRequest;
                    toAminoMsg(message: _94.QueryConnectionParamsRequest): _94.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionParamsRequestProtoMsg): _94.QueryConnectionParamsRequest;
                    toProto(message: _94.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionParamsRequest): _94.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _94.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_94.QueryConnectionParamsResponse>): _94.QueryConnectionParamsResponse;
                    fromAmino(object: _94.QueryConnectionParamsResponseAmino): _94.QueryConnectionParamsResponse;
                    toAmino(message: _94.QueryConnectionParamsResponse): _94.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _94.QueryConnectionParamsResponseAminoMsg): _94.QueryConnectionParamsResponse;
                    toAminoMsg(message: _94.QueryConnectionParamsResponse): _94.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _94.QueryConnectionParamsResponseProtoMsg): _94.QueryConnectionParamsResponse;
                    toProto(message: _94.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _94.QueryConnectionParamsResponse): _94.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                    fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                    fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                    toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                    fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                    toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                    fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                    toProto(message: _93.GenesisState): Uint8Array;
                    toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _92.State;
                stateToJSON(object: _92.State): string;
                State: typeof _92.State;
                StateSDKType: typeof _92.State;
                StateAmino: typeof _92.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _92.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ConnectionEnd;
                    fromPartial(object: Partial<_92.ConnectionEnd>): _92.ConnectionEnd;
                    fromAmino(object: _92.ConnectionEndAmino): _92.ConnectionEnd;
                    toAmino(message: _92.ConnectionEnd): _92.ConnectionEndAmino;
                    fromAminoMsg(object: _92.ConnectionEndAminoMsg): _92.ConnectionEnd;
                    toAminoMsg(message: _92.ConnectionEnd): _92.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _92.ConnectionEndProtoMsg): _92.ConnectionEnd;
                    toProto(message: _92.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _92.ConnectionEnd): _92.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _92.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.IdentifiedConnection;
                    fromPartial(object: Partial<_92.IdentifiedConnection>): _92.IdentifiedConnection;
                    fromAmino(object: _92.IdentifiedConnectionAmino): _92.IdentifiedConnection;
                    toAmino(message: _92.IdentifiedConnection): _92.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _92.IdentifiedConnectionAminoMsg): _92.IdentifiedConnection;
                    toAminoMsg(message: _92.IdentifiedConnection): _92.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _92.IdentifiedConnectionProtoMsg): _92.IdentifiedConnection;
                    toProto(message: _92.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _92.IdentifiedConnection): _92.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _92.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Counterparty;
                    fromPartial(object: Partial<_92.Counterparty>): _92.Counterparty;
                    fromAmino(object: _92.CounterpartyAmino): _92.Counterparty;
                    toAmino(message: _92.Counterparty): _92.CounterpartyAmino;
                    fromAminoMsg(object: _92.CounterpartyAminoMsg): _92.Counterparty;
                    toAminoMsg(message: _92.Counterparty): _92.CounterpartyAminoMsg;
                    fromProtoMsg(message: _92.CounterpartyProtoMsg): _92.Counterparty;
                    toProto(message: _92.Counterparty): Uint8Array;
                    toProtoMsg(message: _92.Counterparty): _92.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _92.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ClientPaths;
                    fromPartial(object: Partial<_92.ClientPaths>): _92.ClientPaths;
                    fromAmino(object: _92.ClientPathsAmino): _92.ClientPaths;
                    toAmino(message: _92.ClientPaths): _92.ClientPathsAmino;
                    fromAminoMsg(object: _92.ClientPathsAminoMsg): _92.ClientPaths;
                    toAminoMsg(message: _92.ClientPaths): _92.ClientPathsAminoMsg;
                    fromProtoMsg(message: _92.ClientPathsProtoMsg): _92.ClientPaths;
                    toProto(message: _92.ClientPaths): Uint8Array;
                    toProtoMsg(message: _92.ClientPaths): _92.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _92.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ConnectionPaths;
                    fromPartial(object: Partial<_92.ConnectionPaths>): _92.ConnectionPaths;
                    fromAmino(object: _92.ConnectionPathsAmino): _92.ConnectionPaths;
                    toAmino(message: _92.ConnectionPaths): _92.ConnectionPathsAmino;
                    fromAminoMsg(object: _92.ConnectionPathsAminoMsg): _92.ConnectionPaths;
                    toAminoMsg(message: _92.ConnectionPaths): _92.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _92.ConnectionPathsProtoMsg): _92.ConnectionPaths;
                    toProto(message: _92.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _92.ConnectionPaths): _92.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _92.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Version;
                    fromPartial(object: Partial<_92.Version>): _92.Version;
                    fromAmino(object: _92.VersionAmino): _92.Version;
                    toAmino(message: _92.Version): _92.VersionAmino;
                    fromAminoMsg(object: _92.VersionAminoMsg): _92.Version;
                    toAminoMsg(message: _92.Version): _92.VersionAminoMsg;
                    fromProtoMsg(message: _92.VersionProtoMsg): _92.Version;
                    toProto(message: _92.Version): Uint8Array;
                    toProtoMsg(message: _92.Version): _92.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                    fromPartial(object: Partial<_92.Params>): _92.Params;
                    fromAmino(object: _92.ParamsAmino): _92.Params;
                    toAmino(message: _92.Params): _92.ParamsAmino;
                    fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                    toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                    fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                    toProto(message: _92.Params): Uint8Array;
                    toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
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
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _97.DataType;
                dataTypeToJSON(object: _97.DataType): string;
                DataType: typeof _97.DataType;
                DataTypeSDKType: typeof _97.DataType;
                DataTypeAmino: typeof _97.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _97.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ClientState;
                    fromPartial(object: Partial<_97.ClientState>): _97.ClientState;
                    fromAmino(object: _97.ClientStateAmino): _97.ClientState;
                    toAmino(message: _97.ClientState): _97.ClientStateAmino;
                    fromAminoMsg(object: _97.ClientStateAminoMsg): _97.ClientState;
                    toAminoMsg(message: _97.ClientState): _97.ClientStateAminoMsg;
                    fromProtoMsg(message: _97.ClientStateProtoMsg): _97.ClientState;
                    toProto(message: _97.ClientState): Uint8Array;
                    toProtoMsg(message: _97.ClientState): _97.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _97.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ConsensusState;
                    fromPartial(object: Partial<_97.ConsensusState>): _97.ConsensusState;
                    fromAmino(object: _97.ConsensusStateAmino): _97.ConsensusState;
                    toAmino(message: _97.ConsensusState): _97.ConsensusStateAmino;
                    fromAminoMsg(object: _97.ConsensusStateAminoMsg): _97.ConsensusState;
                    toAminoMsg(message: _97.ConsensusState): _97.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _97.ConsensusStateProtoMsg): _97.ConsensusState;
                    toProto(message: _97.ConsensusState): Uint8Array;
                    toProtoMsg(message: _97.ConsensusState): _97.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _97.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Header;
                    fromPartial(object: Partial<_97.Header>): _97.Header;
                    fromAmino(object: _97.HeaderAmino): _97.Header;
                    toAmino(message: _97.Header): _97.HeaderAmino;
                    fromAminoMsg(object: _97.HeaderAminoMsg): _97.Header;
                    toAminoMsg(message: _97.Header): _97.HeaderAminoMsg;
                    fromProtoMsg(message: _97.HeaderProtoMsg): _97.Header;
                    toProto(message: _97.Header): Uint8Array;
                    toProtoMsg(message: _97.Header): _97.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _97.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Misbehaviour;
                    fromPartial(object: Partial<_97.Misbehaviour>): _97.Misbehaviour;
                    fromAmino(object: _97.MisbehaviourAmino): _97.Misbehaviour;
                    toAmino(message: _97.Misbehaviour): _97.MisbehaviourAmino;
                    fromAminoMsg(object: _97.MisbehaviourAminoMsg): _97.Misbehaviour;
                    toAminoMsg(message: _97.Misbehaviour): _97.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _97.MisbehaviourProtoMsg): _97.Misbehaviour;
                    toProto(message: _97.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _97.Misbehaviour): _97.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _97.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureAndData;
                    fromPartial(object: Partial<_97.SignatureAndData>): _97.SignatureAndData;
                    fromAmino(object: _97.SignatureAndDataAmino): _97.SignatureAndData;
                    toAmino(message: _97.SignatureAndData): _97.SignatureAndDataAmino;
                    fromAminoMsg(object: _97.SignatureAndDataAminoMsg): _97.SignatureAndData;
                    toAminoMsg(message: _97.SignatureAndData): _97.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _97.SignatureAndDataProtoMsg): _97.SignatureAndData;
                    toProto(message: _97.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _97.SignatureAndData): _97.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _97.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TimestampedSignatureData;
                    fromPartial(object: Partial<_97.TimestampedSignatureData>): _97.TimestampedSignatureData;
                    fromAmino(object: _97.TimestampedSignatureDataAmino): _97.TimestampedSignatureData;
                    toAmino(message: _97.TimestampedSignatureData): _97.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _97.TimestampedSignatureDataAminoMsg): _97.TimestampedSignatureData;
                    toAminoMsg(message: _97.TimestampedSignatureData): _97.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _97.TimestampedSignatureDataProtoMsg): _97.TimestampedSignatureData;
                    toProto(message: _97.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _97.TimestampedSignatureData): _97.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _97.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignBytes;
                    fromPartial(object: Partial<_97.SignBytes>): _97.SignBytes;
                    fromAmino(object: _97.SignBytesAmino): _97.SignBytes;
                    toAmino(message: _97.SignBytes): _97.SignBytesAmino;
                    fromAminoMsg(object: _97.SignBytesAminoMsg): _97.SignBytes;
                    toAminoMsg(message: _97.SignBytes): _97.SignBytesAminoMsg;
                    fromProtoMsg(message: _97.SignBytesProtoMsg): _97.SignBytes;
                    toProto(message: _97.SignBytes): Uint8Array;
                    toProtoMsg(message: _97.SignBytes): _97.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _97.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HeaderData;
                    fromPartial(object: Partial<_97.HeaderData>): _97.HeaderData;
                    fromAmino(object: _97.HeaderDataAmino): _97.HeaderData;
                    toAmino(message: _97.HeaderData): _97.HeaderDataAmino;
                    fromAminoMsg(object: _97.HeaderDataAminoMsg): _97.HeaderData;
                    toAminoMsg(message: _97.HeaderData): _97.HeaderDataAminoMsg;
                    fromProtoMsg(message: _97.HeaderDataProtoMsg): _97.HeaderData;
                    toProto(message: _97.HeaderData): Uint8Array;
                    toProtoMsg(message: _97.HeaderData): _97.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _97.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ClientStateData;
                    fromPartial(object: Partial<_97.ClientStateData>): _97.ClientStateData;
                    fromAmino(object: _97.ClientStateDataAmino): _97.ClientStateData;
                    toAmino(message: _97.ClientStateData): _97.ClientStateDataAmino;
                    fromAminoMsg(object: _97.ClientStateDataAminoMsg): _97.ClientStateData;
                    toAminoMsg(message: _97.ClientStateData): _97.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _97.ClientStateDataProtoMsg): _97.ClientStateData;
                    toProto(message: _97.ClientStateData): Uint8Array;
                    toProtoMsg(message: _97.ClientStateData): _97.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _97.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ConsensusStateData;
                    fromPartial(object: Partial<_97.ConsensusStateData>): _97.ConsensusStateData;
                    fromAmino(object: _97.ConsensusStateDataAmino): _97.ConsensusStateData;
                    toAmino(message: _97.ConsensusStateData): _97.ConsensusStateDataAmino;
                    fromAminoMsg(object: _97.ConsensusStateDataAminoMsg): _97.ConsensusStateData;
                    toAminoMsg(message: _97.ConsensusStateData): _97.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _97.ConsensusStateDataProtoMsg): _97.ConsensusStateData;
                    toProto(message: _97.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _97.ConsensusStateData): _97.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _97.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ConnectionStateData;
                    fromPartial(object: Partial<_97.ConnectionStateData>): _97.ConnectionStateData;
                    fromAmino(object: _97.ConnectionStateDataAmino): _97.ConnectionStateData;
                    toAmino(message: _97.ConnectionStateData): _97.ConnectionStateDataAmino;
                    fromAminoMsg(object: _97.ConnectionStateDataAminoMsg): _97.ConnectionStateData;
                    toAminoMsg(message: _97.ConnectionStateData): _97.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _97.ConnectionStateDataProtoMsg): _97.ConnectionStateData;
                    toProto(message: _97.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _97.ConnectionStateData): _97.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _97.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ChannelStateData;
                    fromPartial(object: Partial<_97.ChannelStateData>): _97.ChannelStateData;
                    fromAmino(object: _97.ChannelStateDataAmino): _97.ChannelStateData;
                    toAmino(message: _97.ChannelStateData): _97.ChannelStateDataAmino;
                    fromAminoMsg(object: _97.ChannelStateDataAminoMsg): _97.ChannelStateData;
                    toAminoMsg(message: _97.ChannelStateData): _97.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _97.ChannelStateDataProtoMsg): _97.ChannelStateData;
                    toProto(message: _97.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _97.ChannelStateData): _97.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _97.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PacketCommitmentData;
                    fromPartial(object: Partial<_97.PacketCommitmentData>): _97.PacketCommitmentData;
                    fromAmino(object: _97.PacketCommitmentDataAmino): _97.PacketCommitmentData;
                    toAmino(message: _97.PacketCommitmentData): _97.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _97.PacketCommitmentDataAminoMsg): _97.PacketCommitmentData;
                    toAminoMsg(message: _97.PacketCommitmentData): _97.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _97.PacketCommitmentDataProtoMsg): _97.PacketCommitmentData;
                    toProto(message: _97.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _97.PacketCommitmentData): _97.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _97.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PacketAcknowledgementData;
                    fromPartial(object: Partial<_97.PacketAcknowledgementData>): _97.PacketAcknowledgementData;
                    fromAmino(object: _97.PacketAcknowledgementDataAmino): _97.PacketAcknowledgementData;
                    toAmino(message: _97.PacketAcknowledgementData): _97.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _97.PacketAcknowledgementDataAminoMsg): _97.PacketAcknowledgementData;
                    toAminoMsg(message: _97.PacketAcknowledgementData): _97.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _97.PacketAcknowledgementDataProtoMsg): _97.PacketAcknowledgementData;
                    toProto(message: _97.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _97.PacketAcknowledgementData): _97.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _97.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_97.PacketReceiptAbsenceData>): _97.PacketReceiptAbsenceData;
                    fromAmino(object: _97.PacketReceiptAbsenceDataAmino): _97.PacketReceiptAbsenceData;
                    toAmino(message: _97.PacketReceiptAbsenceData): _97.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _97.PacketReceiptAbsenceDataAminoMsg): _97.PacketReceiptAbsenceData;
                    toAminoMsg(message: _97.PacketReceiptAbsenceData): _97.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _97.PacketReceiptAbsenceDataProtoMsg): _97.PacketReceiptAbsenceData;
                    toProto(message: _97.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _97.PacketReceiptAbsenceData): _97.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _97.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.NextSequenceRecvData;
                    fromPartial(object: Partial<_97.NextSequenceRecvData>): _97.NextSequenceRecvData;
                    fromAmino(object: _97.NextSequenceRecvDataAmino): _97.NextSequenceRecvData;
                    toAmino(message: _97.NextSequenceRecvData): _97.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _97.NextSequenceRecvDataAminoMsg): _97.NextSequenceRecvData;
                    toAminoMsg(message: _97.NextSequenceRecvData): _97.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _97.NextSequenceRecvDataProtoMsg): _97.NextSequenceRecvData;
                    toProto(message: _97.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _97.NextSequenceRecvData): _97.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _98.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ClientState;
                    fromPartial(object: Partial<_98.ClientState>): _98.ClientState;
                    fromAmino(object: _98.ClientStateAmino): _98.ClientState;
                    toAmino(message: _98.ClientState): _98.ClientStateAmino;
                    fromAminoMsg(object: _98.ClientStateAminoMsg): _98.ClientState;
                    toAminoMsg(message: _98.ClientState): _98.ClientStateAminoMsg;
                    fromProtoMsg(message: _98.ClientStateProtoMsg): _98.ClientState;
                    toProto(message: _98.ClientState): Uint8Array;
                    toProtoMsg(message: _98.ClientState): _98.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _98.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ConsensusState;
                    fromPartial(object: Partial<_98.ConsensusState>): _98.ConsensusState;
                    fromAmino(object: _98.ConsensusStateAmino): _98.ConsensusState;
                    toAmino(message: _98.ConsensusState): _98.ConsensusStateAmino;
                    fromAminoMsg(object: _98.ConsensusStateAminoMsg): _98.ConsensusState;
                    toAminoMsg(message: _98.ConsensusState): _98.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _98.ConsensusStateProtoMsg): _98.ConsensusState;
                    toProto(message: _98.ConsensusState): Uint8Array;
                    toProtoMsg(message: _98.ConsensusState): _98.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _98.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Header;
                    fromPartial(object: Partial<_98.Header>): _98.Header;
                    fromAmino(object: _98.HeaderAmino): _98.Header;
                    toAmino(message: _98.Header): _98.HeaderAmino;
                    fromAminoMsg(object: _98.HeaderAminoMsg): _98.Header;
                    toAminoMsg(message: _98.Header): _98.HeaderAminoMsg;
                    fromProtoMsg(message: _98.HeaderProtoMsg): _98.Header;
                    toProto(message: _98.Header): Uint8Array;
                    toProtoMsg(message: _98.Header): _98.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _98.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Misbehaviour;
                    fromPartial(object: Partial<_98.Misbehaviour>): _98.Misbehaviour;
                    fromAmino(object: _98.MisbehaviourAmino): _98.Misbehaviour;
                    toAmino(message: _98.Misbehaviour): _98.MisbehaviourAmino;
                    fromAminoMsg(object: _98.MisbehaviourAminoMsg): _98.Misbehaviour;
                    toAminoMsg(message: _98.Misbehaviour): _98.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _98.MisbehaviourProtoMsg): _98.Misbehaviour;
                    toProto(message: _98.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _98.Misbehaviour): _98.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _98.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SignatureAndData;
                    fromPartial(object: Partial<_98.SignatureAndData>): _98.SignatureAndData;
                    fromAmino(object: _98.SignatureAndDataAmino): _98.SignatureAndData;
                    toAmino(message: _98.SignatureAndData): _98.SignatureAndDataAmino;
                    fromAminoMsg(object: _98.SignatureAndDataAminoMsg): _98.SignatureAndData;
                    toAminoMsg(message: _98.SignatureAndData): _98.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _98.SignatureAndDataProtoMsg): _98.SignatureAndData;
                    toProto(message: _98.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _98.SignatureAndData): _98.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _98.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.TimestampedSignatureData;
                    fromPartial(object: Partial<_98.TimestampedSignatureData>): _98.TimestampedSignatureData;
                    fromAmino(object: _98.TimestampedSignatureDataAmino): _98.TimestampedSignatureData;
                    toAmino(message: _98.TimestampedSignatureData): _98.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _98.TimestampedSignatureDataAminoMsg): _98.TimestampedSignatureData;
                    toAminoMsg(message: _98.TimestampedSignatureData): _98.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _98.TimestampedSignatureDataProtoMsg): _98.TimestampedSignatureData;
                    toProto(message: _98.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _98.TimestampedSignatureData): _98.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _98.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SignBytes;
                    fromPartial(object: Partial<_98.SignBytes>): _98.SignBytes;
                    fromAmino(object: _98.SignBytesAmino): _98.SignBytes;
                    toAmino(message: _98.SignBytes): _98.SignBytesAmino;
                    fromAminoMsg(object: _98.SignBytesAminoMsg): _98.SignBytes;
                    toAminoMsg(message: _98.SignBytes): _98.SignBytesAminoMsg;
                    fromProtoMsg(message: _98.SignBytesProtoMsg): _98.SignBytes;
                    toProto(message: _98.SignBytes): Uint8Array;
                    toProtoMsg(message: _98.SignBytes): _98.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _98.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.HeaderData;
                    fromPartial(object: Partial<_98.HeaderData>): _98.HeaderData;
                    fromAmino(object: _98.HeaderDataAmino): _98.HeaderData;
                    toAmino(message: _98.HeaderData): _98.HeaderDataAmino;
                    fromAminoMsg(object: _98.HeaderDataAminoMsg): _98.HeaderData;
                    toAminoMsg(message: _98.HeaderData): _98.HeaderDataAminoMsg;
                    fromProtoMsg(message: _98.HeaderDataProtoMsg): _98.HeaderData;
                    toProto(message: _98.HeaderData): Uint8Array;
                    toProtoMsg(message: _98.HeaderData): _98.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _99.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ClientState;
                    fromPartial(object: Partial<_99.ClientState>): _99.ClientState;
                    fromAmino(object: _99.ClientStateAmino): _99.ClientState;
                    toAmino(message: _99.ClientState): _99.ClientStateAmino;
                    fromAminoMsg(object: _99.ClientStateAminoMsg): _99.ClientState;
                    toAminoMsg(message: _99.ClientState): _99.ClientStateAminoMsg;
                    fromProtoMsg(message: _99.ClientStateProtoMsg): _99.ClientState;
                    toProto(message: _99.ClientState): Uint8Array;
                    toProtoMsg(message: _99.ClientState): _99.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _99.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ConsensusState;
                    fromPartial(object: Partial<_99.ConsensusState>): _99.ConsensusState;
                    fromAmino(object: _99.ConsensusStateAmino): _99.ConsensusState;
                    toAmino(message: _99.ConsensusState): _99.ConsensusStateAmino;
                    fromAminoMsg(object: _99.ConsensusStateAminoMsg): _99.ConsensusState;
                    toAminoMsg(message: _99.ConsensusState): _99.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _99.ConsensusStateProtoMsg): _99.ConsensusState;
                    toProto(message: _99.ConsensusState): Uint8Array;
                    toProtoMsg(message: _99.ConsensusState): _99.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _99.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Misbehaviour;
                    fromPartial(object: Partial<_99.Misbehaviour>): _99.Misbehaviour;
                    fromAmino(object: _99.MisbehaviourAmino): _99.Misbehaviour;
                    toAmino(message: _99.Misbehaviour): _99.MisbehaviourAmino;
                    fromAminoMsg(object: _99.MisbehaviourAminoMsg): _99.Misbehaviour;
                    toAminoMsg(message: _99.Misbehaviour): _99.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _99.MisbehaviourProtoMsg): _99.Misbehaviour;
                    toProto(message: _99.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _99.Misbehaviour): _99.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _99.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Header;
                    fromPartial(object: Partial<_99.Header>): _99.Header;
                    fromAmino(object: _99.HeaderAmino): _99.Header;
                    toAmino(message: _99.Header): _99.HeaderAmino;
                    fromAminoMsg(object: _99.HeaderAminoMsg): _99.Header;
                    toAminoMsg(message: _99.Header): _99.HeaderAminoMsg;
                    fromProtoMsg(message: _99.HeaderProtoMsg): _99.Header;
                    toProto(message: _99.Header): Uint8Array;
                    toProtoMsg(message: _99.Header): _99.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _99.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Fraction;
                    fromPartial(object: Partial<_99.Fraction>): _99.Fraction;
                    fromAmino(object: _99.FractionAmino): _99.Fraction;
                    toAmino(message: _99.Fraction): _99.FractionAmino;
                    fromAminoMsg(object: _99.FractionAminoMsg): _99.Fraction;
                    toAminoMsg(message: _99.Fraction): _99.FractionAminoMsg;
                    fromProtoMsg(message: _99.FractionProtoMsg): _99.Fraction;
                    toProto(message: _99.Fraction): Uint8Array;
                    toProtoMsg(message: _99.Fraction): _99.FractionProtoMsg;
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
                        v1: _255.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _256.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _257.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _258.MsgClientImpl;
                    };
                    client: {
                        v1: _259.MsgClientImpl;
                    };
                    connection: {
                        v1: _260.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                    };
                };
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
                            incentivizedPackets(request: _66.QueryIncentivizedPacketsRequest): Promise<_66.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _66.QueryIncentivizedPacketRequest): Promise<_66.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _66.QueryIncentivizedPacketsForChannelRequest): Promise<_66.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _66.QueryTotalRecvFeesRequest): Promise<_66.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _66.QueryTotalAckFeesRequest): Promise<_66.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _66.QueryTotalTimeoutFeesRequest): Promise<_66.QueryTotalTimeoutFeesResponse>;
                            payee(request: _66.QueryPayeeRequest): Promise<_66.QueryPayeeResponse>;
                            counterpartyPayee(request: _66.QueryCounterpartyPayeeRequest): Promise<_66.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _66.QueryFeeEnabledChannelsRequest): Promise<_66.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _66.QueryFeeEnabledChannelRequest): Promise<_66.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _69.QueryInterchainAccountRequest): Promise<_69.QueryInterchainAccountResponse>;
                                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _79.QueryDenomTraceRequest): Promise<_79.QueryDenomTraceResponse>;
                            denomTraces(request?: _79.QueryDenomTracesRequest): Promise<_79.QueryDenomTracesResponse>;
                            params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                            denomHash(request: _79.QueryDenomHashRequest): Promise<_79.QueryDenomHashResponse>;
                            escrowAddress(request: _79.QueryEscrowAddressRequest): Promise<_79.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _85.QueryChannelRequest): Promise<_85.QueryChannelResponse>;
                            channels(request?: _85.QueryChannelsRequest): Promise<_85.QueryChannelsResponse>;
                            connectionChannels(request: _85.QueryConnectionChannelsRequest): Promise<_85.QueryConnectionChannelsResponse>;
                            channelClientState(request: _85.QueryChannelClientStateRequest): Promise<_85.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _85.QueryChannelConsensusStateRequest): Promise<_85.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _85.QueryPacketCommitmentRequest): Promise<_85.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _85.QueryPacketCommitmentsRequest): Promise<_85.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _85.QueryPacketReceiptRequest): Promise<_85.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _85.QueryPacketAcknowledgementRequest): Promise<_85.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _85.QueryPacketAcknowledgementsRequest): Promise<_85.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _85.QueryUnreceivedPacketsRequest): Promise<_85.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _85.QueryUnreceivedAcksRequest): Promise<_85.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _85.QueryNextSequenceReceiveRequest): Promise<_85.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _89.QueryClientStateRequest): Promise<_89.QueryClientStateResponse>;
                            clientStates(request?: _89.QueryClientStatesRequest): Promise<_89.QueryClientStatesResponse>;
                            consensusState(request: _89.QueryConsensusStateRequest): Promise<_89.QueryConsensusStateResponse>;
                            consensusStates(request: _89.QueryConsensusStatesRequest): Promise<_89.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _89.QueryConsensusStateHeightsRequest): Promise<_89.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _89.QueryClientStatusRequest): Promise<_89.QueryClientStatusResponse>;
                            clientParams(request?: _89.QueryClientParamsRequest): Promise<_89.QueryClientParamsResponse>;
                            upgradedClientState(request?: _89.QueryUpgradedClientStateRequest): Promise<_89.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _89.QueryUpgradedConsensusStateRequest): Promise<_89.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _94.QueryConnectionRequest): Promise<_94.QueryConnectionResponse>;
                            connections(request?: _94.QueryConnectionsRequest): Promise<_94.QueryConnectionsResponse>;
                            clientConnections(request: _94.QueryClientConnectionsRequest): Promise<_94.QueryClientConnectionsResponse>;
                            connectionClientState(request: _94.QueryConnectionClientStateRequest): Promise<_94.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _94.QueryConnectionConsensusStateRequest): Promise<_94.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _94.QueryConnectionParamsRequest): Promise<_94.QueryConnectionParamsResponse>;
                        };
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
                        v1: _241.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _242.LCDQueryClient;
                        };
                        host: {
                            v1: _243.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _244.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _245.LCDQueryClient;
                    };
                    client: {
                        v1: _246.LCDQueryClient;
                    };
                    connection: {
                        v1: _247.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
