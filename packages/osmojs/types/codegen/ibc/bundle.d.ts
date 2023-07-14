import * as _44 from "./applications/fee/v1/ack";
import * as _45 from "./applications/fee/v1/fee";
import * as _46 from "./applications/fee/v1/genesis";
import * as _47 from "./applications/fee/v1/metadata";
import * as _48 from "./applications/fee/v1/query";
import * as _49 from "./applications/fee/v1/tx";
import * as _50 from "./applications/interchain_accounts/controller/v1/controller";
import * as _51 from "./applications/interchain_accounts/controller/v1/query";
import * as _52 from "./applications/interchain_accounts/controller/v1/tx";
import * as _53 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _54 from "./applications/interchain_accounts/host/v1/host";
import * as _55 from "./applications/interchain_accounts/host/v1/query";
import * as _56 from "./applications/interchain_accounts/v1/account";
import * as _57 from "./applications/interchain_accounts/v1/metadata";
import * as _58 from "./applications/interchain_accounts/v1/packet";
import * as _59 from "./applications/transfer/v1/authz";
import * as _60 from "./applications/transfer/v1/genesis";
import * as _61 from "./applications/transfer/v1/query";
import * as _62 from "./applications/transfer/v1/transfer";
import * as _63 from "./applications/transfer/v1/tx";
import * as _64 from "./applications/transfer/v2/packet";
import * as _65 from "./core/channel/v1/channel";
import * as _66 from "./core/channel/v1/genesis";
import * as _67 from "./core/channel/v1/query";
import * as _68 from "./core/channel/v1/tx";
import * as _69 from "./core/client/v1/client";
import * as _70 from "./core/client/v1/genesis";
import * as _71 from "./core/client/v1/query";
import * as _72 from "./core/client/v1/tx";
import * as _73 from "./core/commitment/v1/commitment";
import * as _74 from "./core/connection/v1/connection";
import * as _75 from "./core/connection/v1/genesis";
import * as _76 from "./core/connection/v1/query";
import * as _77 from "./core/connection/v1/tx";
import * as _78 from "./lightclients/localhost/v2/localhost";
import * as _79 from "./lightclients/solomachine/v2/solomachine";
import * as _80 from "./lightclients/solomachine/v3/solomachine";
import * as _81 from "./lightclients/tendermint/v1/tendermint";
import * as _235 from "./applications/fee/v1/query.lcd";
import * as _236 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _237 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _238 from "./applications/transfer/v1/query.lcd";
import * as _239 from "./core/channel/v1/query.lcd";
import * as _240 from "./core/client/v1/query.lcd";
import * as _241 from "./core/connection/v1/query.lcd";
import * as _242 from "./applications/fee/v1/query.rpc.Query";
import * as _243 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _244 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _245 from "./applications/transfer/v1/query.rpc.Query";
import * as _246 from "./core/channel/v1/query.rpc.Query";
import * as _247 from "./core/client/v1/query.rpc.Query";
import * as _248 from "./core/connection/v1/query.rpc.Query";
import * as _249 from "./applications/fee/v1/tx.rpc.msg";
import * as _250 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _251 from "./applications/transfer/v1/tx.rpc.msg";
import * as _252 from "./core/channel/v1/tx.rpc.msg";
import * as _253 from "./core/client/v1/tx.rpc.msg";
import * as _254 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _249.MsgClientImpl;
                QueryClientImpl: typeof _242.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _48.QueryIncentivizedPacketsRequest): Promise<_48.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _48.QueryIncentivizedPacketRequest): Promise<_48.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _48.QueryIncentivizedPacketsForChannelRequest): Promise<_48.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _48.QueryTotalRecvFeesRequest): Promise<_48.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _48.QueryTotalAckFeesRequest): Promise<_48.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _48.QueryTotalTimeoutFeesRequest): Promise<_48.QueryTotalTimeoutFeesResponse>;
                    payee(request: _48.QueryPayeeRequest): Promise<_48.QueryPayeeResponse>;
                    counterpartyPayee(request: _48.QueryCounterpartyPayeeRequest): Promise<_48.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _48.QueryFeeEnabledChannelsRequest): Promise<_48.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _48.QueryFeeEnabledChannelRequest): Promise<_48.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _235.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _49.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _49.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _49.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _49.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _49.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _49.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _49.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _49.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _49.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _49.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _49.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _49.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _49.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _49.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _49.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _49.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _49.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _49.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _49.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _49.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _49.MsgRegisterPayee) => _49.MsgRegisterPayeeAmino;
                        fromAmino: (object: _49.MsgRegisterPayeeAmino) => _49.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _49.MsgRegisterCounterpartyPayee) => _49.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _49.MsgRegisterCounterpartyPayeeAmino) => _49.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _49.MsgPayPacketFee) => _49.MsgPayPacketFeeAmino;
                        fromAmino: (object: _49.MsgPayPacketFeeAmino) => _49.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _49.MsgPayPacketFeeAsync) => _49.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _49.MsgPayPacketFeeAsyncAmino) => _49.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _49.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgRegisterPayee;
                    fromPartial(object: Partial<_49.MsgRegisterPayee>): _49.MsgRegisterPayee;
                    fromAmino(object: _49.MsgRegisterPayeeAmino): _49.MsgRegisterPayee;
                    toAmino(message: _49.MsgRegisterPayee): _49.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _49.MsgRegisterPayeeAminoMsg): _49.MsgRegisterPayee;
                    toAminoMsg(message: _49.MsgRegisterPayee): _49.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _49.MsgRegisterPayeeProtoMsg): _49.MsgRegisterPayee;
                    toProto(message: _49.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _49.MsgRegisterPayee): _49.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _49.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_49.MsgRegisterPayeeResponse>): _49.MsgRegisterPayeeResponse;
                    fromAmino(_: _49.MsgRegisterPayeeResponseAmino): _49.MsgRegisterPayeeResponse;
                    toAmino(_: _49.MsgRegisterPayeeResponse): _49.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _49.MsgRegisterPayeeResponseAminoMsg): _49.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _49.MsgRegisterPayeeResponse): _49.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _49.MsgRegisterPayeeResponseProtoMsg): _49.MsgRegisterPayeeResponse;
                    toProto(message: _49.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _49.MsgRegisterPayeeResponse): _49.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _49.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_49.MsgRegisterCounterpartyPayee>): _49.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _49.MsgRegisterCounterpartyPayeeAmino): _49.MsgRegisterCounterpartyPayee;
                    toAmino(message: _49.MsgRegisterCounterpartyPayee): _49.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _49.MsgRegisterCounterpartyPayeeAminoMsg): _49.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _49.MsgRegisterCounterpartyPayee): _49.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _49.MsgRegisterCounterpartyPayeeProtoMsg): _49.MsgRegisterCounterpartyPayee;
                    toProto(message: _49.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _49.MsgRegisterCounterpartyPayee): _49.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _49.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_49.MsgRegisterCounterpartyPayeeResponse>): _49.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _49.MsgRegisterCounterpartyPayeeResponseAmino): _49.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _49.MsgRegisterCounterpartyPayeeResponse): _49.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _49.MsgRegisterCounterpartyPayeeResponseAminoMsg): _49.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _49.MsgRegisterCounterpartyPayeeResponse): _49.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _49.MsgRegisterCounterpartyPayeeResponseProtoMsg): _49.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _49.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _49.MsgRegisterCounterpartyPayeeResponse): _49.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _49.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgPayPacketFee;
                    fromPartial(object: Partial<_49.MsgPayPacketFee>): _49.MsgPayPacketFee;
                    fromAmino(object: _49.MsgPayPacketFeeAmino): _49.MsgPayPacketFee;
                    toAmino(message: _49.MsgPayPacketFee): _49.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _49.MsgPayPacketFeeAminoMsg): _49.MsgPayPacketFee;
                    toAminoMsg(message: _49.MsgPayPacketFee): _49.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _49.MsgPayPacketFeeProtoMsg): _49.MsgPayPacketFee;
                    toProto(message: _49.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _49.MsgPayPacketFee): _49.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _49.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_49.MsgPayPacketFeeResponse>): _49.MsgPayPacketFeeResponse;
                    fromAmino(_: _49.MsgPayPacketFeeResponseAmino): _49.MsgPayPacketFeeResponse;
                    toAmino(_: _49.MsgPayPacketFeeResponse): _49.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _49.MsgPayPacketFeeResponseAminoMsg): _49.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _49.MsgPayPacketFeeResponse): _49.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _49.MsgPayPacketFeeResponseProtoMsg): _49.MsgPayPacketFeeResponse;
                    toProto(message: _49.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _49.MsgPayPacketFeeResponse): _49.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _49.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_49.MsgPayPacketFeeAsync>): _49.MsgPayPacketFeeAsync;
                    fromAmino(object: _49.MsgPayPacketFeeAsyncAmino): _49.MsgPayPacketFeeAsync;
                    toAmino(message: _49.MsgPayPacketFeeAsync): _49.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _49.MsgPayPacketFeeAsyncAminoMsg): _49.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _49.MsgPayPacketFeeAsync): _49.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _49.MsgPayPacketFeeAsyncProtoMsg): _49.MsgPayPacketFeeAsync;
                    toProto(message: _49.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _49.MsgPayPacketFeeAsync): _49.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _49.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_49.MsgPayPacketFeeAsyncResponse>): _49.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _49.MsgPayPacketFeeAsyncResponseAmino): _49.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _49.MsgPayPacketFeeAsyncResponse): _49.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _49.MsgPayPacketFeeAsyncResponseAminoMsg): _49.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _49.MsgPayPacketFeeAsyncResponse): _49.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _49.MsgPayPacketFeeAsyncResponseProtoMsg): _49.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _49.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _49.MsgPayPacketFeeAsyncResponse): _49.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketsRequest>): _48.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _48.QueryIncentivizedPacketsRequestAmino): _48.QueryIncentivizedPacketsRequest;
                    toAmino(message: _48.QueryIncentivizedPacketsRequest): _48.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketsRequestAminoMsg): _48.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _48.QueryIncentivizedPacketsRequest): _48.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketsRequestProtoMsg): _48.QueryIncentivizedPacketsRequest;
                    toProto(message: _48.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketsRequest): _48.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketsResponse>): _48.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _48.QueryIncentivizedPacketsResponseAmino): _48.QueryIncentivizedPacketsResponse;
                    toAmino(message: _48.QueryIncentivizedPacketsResponse): _48.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketsResponseAminoMsg): _48.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _48.QueryIncentivizedPacketsResponse): _48.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketsResponseProtoMsg): _48.QueryIncentivizedPacketsResponse;
                    toProto(message: _48.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketsResponse): _48.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketRequest>): _48.QueryIncentivizedPacketRequest;
                    fromAmino(object: _48.QueryIncentivizedPacketRequestAmino): _48.QueryIncentivizedPacketRequest;
                    toAmino(message: _48.QueryIncentivizedPacketRequest): _48.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketRequestAminoMsg): _48.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _48.QueryIncentivizedPacketRequest): _48.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketRequestProtoMsg): _48.QueryIncentivizedPacketRequest;
                    toProto(message: _48.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketRequest): _48.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketResponse>): _48.QueryIncentivizedPacketResponse;
                    fromAmino(object: _48.QueryIncentivizedPacketResponseAmino): _48.QueryIncentivizedPacketResponse;
                    toAmino(message: _48.QueryIncentivizedPacketResponse): _48.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketResponseAminoMsg): _48.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _48.QueryIncentivizedPacketResponse): _48.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketResponseProtoMsg): _48.QueryIncentivizedPacketResponse;
                    toProto(message: _48.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketResponse): _48.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketsForChannelRequest>): _48.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _48.QueryIncentivizedPacketsForChannelRequestAmino): _48.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _48.QueryIncentivizedPacketsForChannelRequest): _48.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketsForChannelRequestAminoMsg): _48.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _48.QueryIncentivizedPacketsForChannelRequest): _48.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketsForChannelRequestProtoMsg): _48.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _48.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketsForChannelRequest): _48.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_48.QueryIncentivizedPacketsForChannelResponse>): _48.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _48.QueryIncentivizedPacketsForChannelResponseAmino): _48.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _48.QueryIncentivizedPacketsForChannelResponse): _48.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _48.QueryIncentivizedPacketsForChannelResponseAminoMsg): _48.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _48.QueryIncentivizedPacketsForChannelResponse): _48.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryIncentivizedPacketsForChannelResponseProtoMsg): _48.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _48.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryIncentivizedPacketsForChannelResponse): _48.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_48.QueryTotalRecvFeesRequest>): _48.QueryTotalRecvFeesRequest;
                    fromAmino(object: _48.QueryTotalRecvFeesRequestAmino): _48.QueryTotalRecvFeesRequest;
                    toAmino(message: _48.QueryTotalRecvFeesRequest): _48.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _48.QueryTotalRecvFeesRequestAminoMsg): _48.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _48.QueryTotalRecvFeesRequest): _48.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalRecvFeesRequestProtoMsg): _48.QueryTotalRecvFeesRequest;
                    toProto(message: _48.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalRecvFeesRequest): _48.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_48.QueryTotalRecvFeesResponse>): _48.QueryTotalRecvFeesResponse;
                    fromAmino(object: _48.QueryTotalRecvFeesResponseAmino): _48.QueryTotalRecvFeesResponse;
                    toAmino(message: _48.QueryTotalRecvFeesResponse): _48.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _48.QueryTotalRecvFeesResponseAminoMsg): _48.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _48.QueryTotalRecvFeesResponse): _48.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalRecvFeesResponseProtoMsg): _48.QueryTotalRecvFeesResponse;
                    toProto(message: _48.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalRecvFeesResponse): _48.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_48.QueryTotalAckFeesRequest>): _48.QueryTotalAckFeesRequest;
                    fromAmino(object: _48.QueryTotalAckFeesRequestAmino): _48.QueryTotalAckFeesRequest;
                    toAmino(message: _48.QueryTotalAckFeesRequest): _48.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _48.QueryTotalAckFeesRequestAminoMsg): _48.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _48.QueryTotalAckFeesRequest): _48.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalAckFeesRequestProtoMsg): _48.QueryTotalAckFeesRequest;
                    toProto(message: _48.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalAckFeesRequest): _48.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_48.QueryTotalAckFeesResponse>): _48.QueryTotalAckFeesResponse;
                    fromAmino(object: _48.QueryTotalAckFeesResponseAmino): _48.QueryTotalAckFeesResponse;
                    toAmino(message: _48.QueryTotalAckFeesResponse): _48.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _48.QueryTotalAckFeesResponseAminoMsg): _48.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _48.QueryTotalAckFeesResponse): _48.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalAckFeesResponseProtoMsg): _48.QueryTotalAckFeesResponse;
                    toProto(message: _48.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalAckFeesResponse): _48.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_48.QueryTotalTimeoutFeesRequest>): _48.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _48.QueryTotalTimeoutFeesRequestAmino): _48.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _48.QueryTotalTimeoutFeesRequest): _48.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _48.QueryTotalTimeoutFeesRequestAminoMsg): _48.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _48.QueryTotalTimeoutFeesRequest): _48.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalTimeoutFeesRequestProtoMsg): _48.QueryTotalTimeoutFeesRequest;
                    toProto(message: _48.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalTimeoutFeesRequest): _48.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_48.QueryTotalTimeoutFeesResponse>): _48.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _48.QueryTotalTimeoutFeesResponseAmino): _48.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _48.QueryTotalTimeoutFeesResponse): _48.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _48.QueryTotalTimeoutFeesResponseAminoMsg): _48.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _48.QueryTotalTimeoutFeesResponse): _48.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryTotalTimeoutFeesResponseProtoMsg): _48.QueryTotalTimeoutFeesResponse;
                    toProto(message: _48.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryTotalTimeoutFeesResponse): _48.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryPayeeRequest;
                    fromPartial(object: Partial<_48.QueryPayeeRequest>): _48.QueryPayeeRequest;
                    fromAmino(object: _48.QueryPayeeRequestAmino): _48.QueryPayeeRequest;
                    toAmino(message: _48.QueryPayeeRequest): _48.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _48.QueryPayeeRequestAminoMsg): _48.QueryPayeeRequest;
                    toAminoMsg(message: _48.QueryPayeeRequest): _48.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryPayeeRequestProtoMsg): _48.QueryPayeeRequest;
                    toProto(message: _48.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryPayeeRequest): _48.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryPayeeResponse;
                    fromPartial(object: Partial<_48.QueryPayeeResponse>): _48.QueryPayeeResponse;
                    fromAmino(object: _48.QueryPayeeResponseAmino): _48.QueryPayeeResponse;
                    toAmino(message: _48.QueryPayeeResponse): _48.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _48.QueryPayeeResponseAminoMsg): _48.QueryPayeeResponse;
                    toAminoMsg(message: _48.QueryPayeeResponse): _48.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryPayeeResponseProtoMsg): _48.QueryPayeeResponse;
                    toProto(message: _48.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryPayeeResponse): _48.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_48.QueryCounterpartyPayeeRequest>): _48.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _48.QueryCounterpartyPayeeRequestAmino): _48.QueryCounterpartyPayeeRequest;
                    toAmino(message: _48.QueryCounterpartyPayeeRequest): _48.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _48.QueryCounterpartyPayeeRequestAminoMsg): _48.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _48.QueryCounterpartyPayeeRequest): _48.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryCounterpartyPayeeRequestProtoMsg): _48.QueryCounterpartyPayeeRequest;
                    toProto(message: _48.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryCounterpartyPayeeRequest): _48.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_48.QueryCounterpartyPayeeResponse>): _48.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _48.QueryCounterpartyPayeeResponseAmino): _48.QueryCounterpartyPayeeResponse;
                    toAmino(message: _48.QueryCounterpartyPayeeResponse): _48.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _48.QueryCounterpartyPayeeResponseAminoMsg): _48.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _48.QueryCounterpartyPayeeResponse): _48.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryCounterpartyPayeeResponseProtoMsg): _48.QueryCounterpartyPayeeResponse;
                    toProto(message: _48.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryCounterpartyPayeeResponse): _48.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_48.QueryFeeEnabledChannelsRequest>): _48.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _48.QueryFeeEnabledChannelsRequestAmino): _48.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _48.QueryFeeEnabledChannelsRequest): _48.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _48.QueryFeeEnabledChannelsRequestAminoMsg): _48.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _48.QueryFeeEnabledChannelsRequest): _48.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryFeeEnabledChannelsRequestProtoMsg): _48.QueryFeeEnabledChannelsRequest;
                    toProto(message: _48.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryFeeEnabledChannelsRequest): _48.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_48.QueryFeeEnabledChannelsResponse>): _48.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _48.QueryFeeEnabledChannelsResponseAmino): _48.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _48.QueryFeeEnabledChannelsResponse): _48.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _48.QueryFeeEnabledChannelsResponseAminoMsg): _48.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _48.QueryFeeEnabledChannelsResponse): _48.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryFeeEnabledChannelsResponseProtoMsg): _48.QueryFeeEnabledChannelsResponse;
                    toProto(message: _48.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryFeeEnabledChannelsResponse): _48.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _48.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_48.QueryFeeEnabledChannelRequest>): _48.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _48.QueryFeeEnabledChannelRequestAmino): _48.QueryFeeEnabledChannelRequest;
                    toAmino(message: _48.QueryFeeEnabledChannelRequest): _48.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _48.QueryFeeEnabledChannelRequestAminoMsg): _48.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _48.QueryFeeEnabledChannelRequest): _48.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _48.QueryFeeEnabledChannelRequestProtoMsg): _48.QueryFeeEnabledChannelRequest;
                    toProto(message: _48.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _48.QueryFeeEnabledChannelRequest): _48.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _48.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_48.QueryFeeEnabledChannelResponse>): _48.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _48.QueryFeeEnabledChannelResponseAmino): _48.QueryFeeEnabledChannelResponse;
                    toAmino(message: _48.QueryFeeEnabledChannelResponse): _48.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _48.QueryFeeEnabledChannelResponseAminoMsg): _48.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _48.QueryFeeEnabledChannelResponse): _48.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _48.QueryFeeEnabledChannelResponseProtoMsg): _48.QueryFeeEnabledChannelResponse;
                    toProto(message: _48.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _48.QueryFeeEnabledChannelResponse): _48.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _47.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Metadata;
                    fromPartial(object: Partial<_47.Metadata>): _47.Metadata;
                    fromAmino(object: _47.MetadataAmino): _47.Metadata;
                    toAmino(message: _47.Metadata): _47.MetadataAmino;
                    fromAminoMsg(object: _47.MetadataAminoMsg): _47.Metadata;
                    toAminoMsg(message: _47.Metadata): _47.MetadataAminoMsg;
                    fromProtoMsg(message: _47.MetadataProtoMsg): _47.Metadata;
                    toProto(message: _47.Metadata): Uint8Array;
                    toProtoMsg(message: _47.Metadata): _47.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.GenesisState;
                    fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                    fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                    toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                    fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                    toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                    fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                    toProto(message: _46.GenesisState): Uint8Array;
                    toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _46.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.FeeEnabledChannel;
                    fromPartial(object: Partial<_46.FeeEnabledChannel>): _46.FeeEnabledChannel;
                    fromAmino(object: _46.FeeEnabledChannelAmino): _46.FeeEnabledChannel;
                    toAmino(message: _46.FeeEnabledChannel): _46.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _46.FeeEnabledChannelAminoMsg): _46.FeeEnabledChannel;
                    toAminoMsg(message: _46.FeeEnabledChannel): _46.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _46.FeeEnabledChannelProtoMsg): _46.FeeEnabledChannel;
                    toProto(message: _46.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _46.FeeEnabledChannel): _46.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _46.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.RegisteredPayee;
                    fromPartial(object: Partial<_46.RegisteredPayee>): _46.RegisteredPayee;
                    fromAmino(object: _46.RegisteredPayeeAmino): _46.RegisteredPayee;
                    toAmino(message: _46.RegisteredPayee): _46.RegisteredPayeeAmino;
                    fromAminoMsg(object: _46.RegisteredPayeeAminoMsg): _46.RegisteredPayee;
                    toAminoMsg(message: _46.RegisteredPayee): _46.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _46.RegisteredPayeeProtoMsg): _46.RegisteredPayee;
                    toProto(message: _46.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _46.RegisteredPayee): _46.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _46.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_46.RegisteredCounterpartyPayee>): _46.RegisteredCounterpartyPayee;
                    fromAmino(object: _46.RegisteredCounterpartyPayeeAmino): _46.RegisteredCounterpartyPayee;
                    toAmino(message: _46.RegisteredCounterpartyPayee): _46.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _46.RegisteredCounterpartyPayeeAminoMsg): _46.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _46.RegisteredCounterpartyPayee): _46.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _46.RegisteredCounterpartyPayeeProtoMsg): _46.RegisteredCounterpartyPayee;
                    toProto(message: _46.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _46.RegisteredCounterpartyPayee): _46.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _46.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ForwardRelayerAddress;
                    fromPartial(object: Partial<_46.ForwardRelayerAddress>): _46.ForwardRelayerAddress;
                    fromAmino(object: _46.ForwardRelayerAddressAmino): _46.ForwardRelayerAddress;
                    toAmino(message: _46.ForwardRelayerAddress): _46.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _46.ForwardRelayerAddressAminoMsg): _46.ForwardRelayerAddress;
                    toAminoMsg(message: _46.ForwardRelayerAddress): _46.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _46.ForwardRelayerAddressProtoMsg): _46.ForwardRelayerAddress;
                    toProto(message: _46.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _46.ForwardRelayerAddress): _46.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _45.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Fee;
                    fromPartial(object: Partial<_45.Fee>): _45.Fee;
                    fromAmino(object: _45.FeeAmino): _45.Fee;
                    toAmino(message: _45.Fee): _45.FeeAmino;
                    fromAminoMsg(object: _45.FeeAminoMsg): _45.Fee;
                    toAminoMsg(message: _45.Fee): _45.FeeAminoMsg;
                    fromProtoMsg(message: _45.FeeProtoMsg): _45.Fee;
                    toProto(message: _45.Fee): Uint8Array;
                    toProtoMsg(message: _45.Fee): _45.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _45.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.PacketFee;
                    fromPartial(object: Partial<_45.PacketFee>): _45.PacketFee;
                    fromAmino(object: _45.PacketFeeAmino): _45.PacketFee;
                    toAmino(message: _45.PacketFee): _45.PacketFeeAmino;
                    fromAminoMsg(object: _45.PacketFeeAminoMsg): _45.PacketFee;
                    toAminoMsg(message: _45.PacketFee): _45.PacketFeeAminoMsg;
                    fromProtoMsg(message: _45.PacketFeeProtoMsg): _45.PacketFee;
                    toProto(message: _45.PacketFee): Uint8Array;
                    toProtoMsg(message: _45.PacketFee): _45.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _45.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.PacketFees;
                    fromPartial(object: Partial<_45.PacketFees>): _45.PacketFees;
                    fromAmino(object: _45.PacketFeesAmino): _45.PacketFees;
                    toAmino(message: _45.PacketFees): _45.PacketFeesAmino;
                    fromAminoMsg(object: _45.PacketFeesAminoMsg): _45.PacketFees;
                    toAminoMsg(message: _45.PacketFees): _45.PacketFeesAminoMsg;
                    fromProtoMsg(message: _45.PacketFeesProtoMsg): _45.PacketFees;
                    toProto(message: _45.PacketFees): Uint8Array;
                    toProtoMsg(message: _45.PacketFees): _45.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _45.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.IdentifiedPacketFees;
                    fromPartial(object: Partial<_45.IdentifiedPacketFees>): _45.IdentifiedPacketFees;
                    fromAmino(object: _45.IdentifiedPacketFeesAmino): _45.IdentifiedPacketFees;
                    toAmino(message: _45.IdentifiedPacketFees): _45.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _45.IdentifiedPacketFeesAminoMsg): _45.IdentifiedPacketFees;
                    toAminoMsg(message: _45.IdentifiedPacketFees): _45.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _45.IdentifiedPacketFeesProtoMsg): _45.IdentifiedPacketFees;
                    toProto(message: _45.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _45.IdentifiedPacketFees): _45.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _44.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_44.IncentivizedAcknowledgement>): _44.IncentivizedAcknowledgement;
                    fromAmino(object: _44.IncentivizedAcknowledgementAmino): _44.IncentivizedAcknowledgement;
                    toAmino(message: _44.IncentivizedAcknowledgement): _44.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _44.IncentivizedAcknowledgementAminoMsg): _44.IncentivizedAcknowledgement;
                    toAminoMsg(message: _44.IncentivizedAcknowledgement): _44.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _44.IncentivizedAcknowledgementProtoMsg): _44.IncentivizedAcknowledgement;
                    toProto(message: _44.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _44.IncentivizedAcknowledgement): _44.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _250.MsgClientImpl;
                    QueryClientImpl: typeof _243.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _51.QueryInterchainAccountRequest): Promise<_51.QueryInterchainAccountResponse>;
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _236.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _52.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _52.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _52.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _52.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _52.MsgSendTx): {
                                typeUrl: string;
                                value: _52.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _52.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _52.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _52.MsgSendTx): {
                                typeUrl: string;
                                value: _52.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _52.MsgRegisterInterchainAccount) => _52.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _52.MsgRegisterInterchainAccountAmino) => _52.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _52.MsgSendTx) => _52.MsgSendTxAmino;
                            fromAmino: (object: _52.MsgSendTxAmino) => _52.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _52.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_52.MsgRegisterInterchainAccount>): _52.MsgRegisterInterchainAccount;
                        fromAmino(object: _52.MsgRegisterInterchainAccountAmino): _52.MsgRegisterInterchainAccount;
                        toAmino(message: _52.MsgRegisterInterchainAccount): _52.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _52.MsgRegisterInterchainAccountAminoMsg): _52.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _52.MsgRegisterInterchainAccount): _52.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _52.MsgRegisterInterchainAccountProtoMsg): _52.MsgRegisterInterchainAccount;
                        toProto(message: _52.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _52.MsgRegisterInterchainAccount): _52.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _52.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_52.MsgRegisterInterchainAccountResponse>): _52.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _52.MsgRegisterInterchainAccountResponseAmino): _52.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _52.MsgRegisterInterchainAccountResponse): _52.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _52.MsgRegisterInterchainAccountResponseAminoMsg): _52.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _52.MsgRegisterInterchainAccountResponse): _52.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _52.MsgRegisterInterchainAccountResponseProtoMsg): _52.MsgRegisterInterchainAccountResponse;
                        toProto(message: _52.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _52.MsgRegisterInterchainAccountResponse): _52.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _52.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgSendTx;
                        fromPartial(object: Partial<_52.MsgSendTx>): _52.MsgSendTx;
                        fromAmino(object: _52.MsgSendTxAmino): _52.MsgSendTx;
                        toAmino(message: _52.MsgSendTx): _52.MsgSendTxAmino;
                        fromAminoMsg(object: _52.MsgSendTxAminoMsg): _52.MsgSendTx;
                        toAminoMsg(message: _52.MsgSendTx): _52.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _52.MsgSendTxProtoMsg): _52.MsgSendTx;
                        toProto(message: _52.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _52.MsgSendTx): _52.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _52.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.MsgSendTxResponse;
                        fromPartial(object: Partial<_52.MsgSendTxResponse>): _52.MsgSendTxResponse;
                        fromAmino(object: _52.MsgSendTxResponseAmino): _52.MsgSendTxResponse;
                        toAmino(message: _52.MsgSendTxResponse): _52.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _52.MsgSendTxResponseAminoMsg): _52.MsgSendTxResponse;
                        toAminoMsg(message: _52.MsgSendTxResponse): _52.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _52.MsgSendTxResponseProtoMsg): _52.MsgSendTxResponse;
                        toProto(message: _52.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _52.MsgSendTxResponse): _52.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _51.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_51.QueryInterchainAccountRequest>): _51.QueryInterchainAccountRequest;
                        fromAmino(object: _51.QueryInterchainAccountRequestAmino): _51.QueryInterchainAccountRequest;
                        toAmino(message: _51.QueryInterchainAccountRequest): _51.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _51.QueryInterchainAccountRequestAminoMsg): _51.QueryInterchainAccountRequest;
                        toAminoMsg(message: _51.QueryInterchainAccountRequest): _51.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _51.QueryInterchainAccountRequestProtoMsg): _51.QueryInterchainAccountRequest;
                        toProto(message: _51.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _51.QueryInterchainAccountRequest): _51.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _51.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_51.QueryInterchainAccountResponse>): _51.QueryInterchainAccountResponse;
                        fromAmino(object: _51.QueryInterchainAccountResponseAmino): _51.QueryInterchainAccountResponse;
                        toAmino(message: _51.QueryInterchainAccountResponse): _51.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _51.QueryInterchainAccountResponseAminoMsg): _51.QueryInterchainAccountResponse;
                        toAminoMsg(message: _51.QueryInterchainAccountResponse): _51.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _51.QueryInterchainAccountResponseProtoMsg): _51.QueryInterchainAccountResponse;
                        toProto(message: _51.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _51.QueryInterchainAccountResponse): _51.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _51.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryParamsRequest;
                        fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
                        fromAmino(_: _51.QueryParamsRequestAmino): _51.QueryParamsRequest;
                        toAmino(_: _51.QueryParamsRequest): _51.QueryParamsRequestAmino;
                        fromAminoMsg(object: _51.QueryParamsRequestAminoMsg): _51.QueryParamsRequest;
                        toAminoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _51.QueryParamsRequestProtoMsg): _51.QueryParamsRequest;
                        toProto(message: _51.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _51.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.QueryParamsResponse;
                        fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
                        fromAmino(object: _51.QueryParamsResponseAmino): _51.QueryParamsResponse;
                        toAmino(message: _51.QueryParamsResponse): _51.QueryParamsResponseAmino;
                        fromAminoMsg(object: _51.QueryParamsResponseAminoMsg): _51.QueryParamsResponse;
                        toAminoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _51.QueryParamsResponseProtoMsg): _51.QueryParamsResponse;
                        toProto(message: _51.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.Params;
                        fromPartial(object: Partial<_50.Params>): _50.Params;
                        fromAmino(object: _50.ParamsAmino): _50.Params;
                        toAmino(message: _50.Params): _50.ParamsAmino;
                        fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                        toAminoMsg(message: _50.Params): _50.ParamsAminoMsg;
                        fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                        toProto(message: _50.Params): Uint8Array;
                        toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.GenesisState;
                        fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                        fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                        toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                        fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                        toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                        fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                        toProto(message: _53.GenesisState): Uint8Array;
                        toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _53.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ControllerGenesisState;
                        fromPartial(object: Partial<_53.ControllerGenesisState>): _53.ControllerGenesisState;
                        fromAmino(object: _53.ControllerGenesisStateAmino): _53.ControllerGenesisState;
                        toAmino(message: _53.ControllerGenesisState): _53.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _53.ControllerGenesisStateAminoMsg): _53.ControllerGenesisState;
                        toAminoMsg(message: _53.ControllerGenesisState): _53.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _53.ControllerGenesisStateProtoMsg): _53.ControllerGenesisState;
                        toProto(message: _53.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _53.ControllerGenesisState): _53.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _53.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.HostGenesisState;
                        fromPartial(object: Partial<_53.HostGenesisState>): _53.HostGenesisState;
                        fromAmino(object: _53.HostGenesisStateAmino): _53.HostGenesisState;
                        toAmino(message: _53.HostGenesisState): _53.HostGenesisStateAmino;
                        fromAminoMsg(object: _53.HostGenesisStateAminoMsg): _53.HostGenesisState;
                        toAminoMsg(message: _53.HostGenesisState): _53.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _53.HostGenesisStateProtoMsg): _53.HostGenesisState;
                        toProto(message: _53.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _53.HostGenesisState): _53.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _53.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ActiveChannel;
                        fromPartial(object: Partial<_53.ActiveChannel>): _53.ActiveChannel;
                        fromAmino(object: _53.ActiveChannelAmino): _53.ActiveChannel;
                        toAmino(message: _53.ActiveChannel): _53.ActiveChannelAmino;
                        fromAminoMsg(object: _53.ActiveChannelAminoMsg): _53.ActiveChannel;
                        toAminoMsg(message: _53.ActiveChannel): _53.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _53.ActiveChannelProtoMsg): _53.ActiveChannel;
                        toProto(message: _53.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _53.ActiveChannel): _53.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _53.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_53.RegisteredInterchainAccount>): _53.RegisteredInterchainAccount;
                        fromAmino(object: _53.RegisteredInterchainAccountAmino): _53.RegisteredInterchainAccount;
                        toAmino(message: _53.RegisteredInterchainAccount): _53.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _53.RegisteredInterchainAccountAminoMsg): _53.RegisteredInterchainAccount;
                        toAminoMsg(message: _53.RegisteredInterchainAccount): _53.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _53.RegisteredInterchainAccountProtoMsg): _53.RegisteredInterchainAccount;
                        toProto(message: _53.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _53.RegisteredInterchainAccount): _53.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _244.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _237.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryParamsRequest;
                        fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                        fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                        toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                        fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                        toAminoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                        toProto(message: _55.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _55.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.QueryParamsResponse;
                        fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                        fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                        toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                        fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                        toAminoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                        toProto(message: _55.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Params;
                        fromPartial(object: Partial<_54.Params>): _54.Params;
                        fromAmino(object: _54.ParamsAmino): _54.Params;
                        toAmino(message: _54.Params): _54.ParamsAmino;
                        fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                        toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                        fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                        toProto(message: _54.Params): Uint8Array;
                        toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _58.Type;
                typeToJSON(object: _58.Type): string;
                Type: typeof _58.Type;
                TypeSDKType: typeof _58.Type;
                TypeAmino: typeof _58.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _58.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.InterchainAccountPacketData;
                    fromPartial(object: Partial<_58.InterchainAccountPacketData>): _58.InterchainAccountPacketData;
                    fromAmino(object: _58.InterchainAccountPacketDataAmino): _58.InterchainAccountPacketData;
                    toAmino(message: _58.InterchainAccountPacketData): _58.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _58.InterchainAccountPacketDataAminoMsg): _58.InterchainAccountPacketData;
                    toAminoMsg(message: _58.InterchainAccountPacketData): _58.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _58.InterchainAccountPacketDataProtoMsg): _58.InterchainAccountPacketData;
                    toProto(message: _58.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _58.InterchainAccountPacketData): _58.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _58.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.CosmosTx;
                    fromPartial(object: Partial<_58.CosmosTx>): _58.CosmosTx;
                    fromAmino(object: _58.CosmosTxAmino): _58.CosmosTx;
                    toAmino(message: _58.CosmosTx): _58.CosmosTxAmino;
                    fromAminoMsg(object: _58.CosmosTxAminoMsg): _58.CosmosTx;
                    toAminoMsg(message: _58.CosmosTx): _58.CosmosTxAminoMsg;
                    fromProtoMsg(message: _58.CosmosTxProtoMsg): _58.CosmosTx;
                    toProto(message: _58.CosmosTx): Uint8Array;
                    toProtoMsg(message: _58.CosmosTx): _58.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _57.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Metadata;
                    fromPartial(object: Partial<_57.Metadata>): _57.Metadata;
                    fromAmino(object: _57.MetadataAmino): _57.Metadata;
                    toAmino(message: _57.Metadata): _57.MetadataAmino;
                    fromAminoMsg(object: _57.MetadataAminoMsg): _57.Metadata;
                    toAminoMsg(message: _57.Metadata): _57.MetadataAminoMsg;
                    fromProtoMsg(message: _57.MetadataProtoMsg): _57.Metadata;
                    toProto(message: _57.Metadata): Uint8Array;
                    toProtoMsg(message: _57.Metadata): _57.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _56.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.InterchainAccount;
                    fromPartial(object: Partial<_56.InterchainAccount>): _56.InterchainAccount;
                    fromAmino(object: _56.InterchainAccountAmino): _56.InterchainAccount;
                    toAmino(message: _56.InterchainAccount): _56.InterchainAccountAmino;
                    fromAminoMsg(object: _56.InterchainAccountAminoMsg): _56.InterchainAccount;
                    toAminoMsg(message: _56.InterchainAccount): _56.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _56.InterchainAccountProtoMsg): _56.InterchainAccount;
                    toProto(message: _56.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _56.InterchainAccount): _56.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _251.MsgClientImpl;
                QueryClientImpl: typeof _245.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                    denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                    params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                    denomHash(request: _61.QueryDenomHashRequest): Promise<_61.QueryDenomHashResponse>;
                    escrowAddress(request: _61.QueryEscrowAddressRequest): Promise<_61.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _238.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _63.MsgTransfer) => _63.MsgTransferAmino;
                        fromAmino: (object: _63.MsgTransferAmino) => _63.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _63.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgTransfer;
                    fromPartial(object: Partial<_63.MsgTransfer>): _63.MsgTransfer;
                    fromAmino(object: _63.MsgTransferAmino): _63.MsgTransfer;
                    toAmino(message: _63.MsgTransfer): _63.MsgTransferAmino;
                    fromAminoMsg(object: _63.MsgTransferAminoMsg): _63.MsgTransfer;
                    toAminoMsg(message: _63.MsgTransfer): _63.MsgTransferAminoMsg;
                    fromProtoMsg(message: _63.MsgTransferProtoMsg): _63.MsgTransfer;
                    toProto(message: _63.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _63.MsgTransfer): _63.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _63.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgTransferResponse;
                    fromPartial(object: Partial<_63.MsgTransferResponse>): _63.MsgTransferResponse;
                    fromAmino(object: _63.MsgTransferResponseAmino): _63.MsgTransferResponse;
                    toAmino(message: _63.MsgTransferResponse): _63.MsgTransferResponseAmino;
                    fromAminoMsg(object: _63.MsgTransferResponseAminoMsg): _63.MsgTransferResponse;
                    toAminoMsg(message: _63.MsgTransferResponse): _63.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _63.MsgTransferResponseProtoMsg): _63.MsgTransferResponse;
                    toProto(message: _63.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _63.MsgTransferResponse): _63.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _62.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.DenomTrace;
                    fromPartial(object: Partial<_62.DenomTrace>): _62.DenomTrace;
                    fromAmino(object: _62.DenomTraceAmino): _62.DenomTrace;
                    toAmino(message: _62.DenomTrace): _62.DenomTraceAmino;
                    fromAminoMsg(object: _62.DenomTraceAminoMsg): _62.DenomTrace;
                    toAminoMsg(message: _62.DenomTrace): _62.DenomTraceAminoMsg;
                    fromProtoMsg(message: _62.DenomTraceProtoMsg): _62.DenomTrace;
                    toProto(message: _62.DenomTrace): Uint8Array;
                    toProtoMsg(message: _62.DenomTrace): _62.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.Params;
                    fromPartial(object: Partial<_62.Params>): _62.Params;
                    fromAmino(object: _62.ParamsAmino): _62.Params;
                    toAmino(message: _62.Params): _62.ParamsAmino;
                    fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                    toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                    fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                    toProto(message: _62.Params): Uint8Array;
                    toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_61.QueryDenomTraceRequest>): _61.QueryDenomTraceRequest;
                    fromAmino(object: _61.QueryDenomTraceRequestAmino): _61.QueryDenomTraceRequest;
                    toAmino(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _61.QueryDenomTraceRequestAminoMsg): _61.QueryDenomTraceRequest;
                    toAminoMsg(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTraceRequestProtoMsg): _61.QueryDenomTraceRequest;
                    toProto(message: _61.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_61.QueryDenomTraceResponse>): _61.QueryDenomTraceResponse;
                    fromAmino(object: _61.QueryDenomTraceResponseAmino): _61.QueryDenomTraceResponse;
                    toAmino(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _61.QueryDenomTraceResponseAminoMsg): _61.QueryDenomTraceResponse;
                    toAminoMsg(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTraceResponseProtoMsg): _61.QueryDenomTraceResponse;
                    toProto(message: _61.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_61.QueryDenomTracesRequest>): _61.QueryDenomTracesRequest;
                    fromAmino(object: _61.QueryDenomTracesRequestAmino): _61.QueryDenomTracesRequest;
                    toAmino(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _61.QueryDenomTracesRequestAminoMsg): _61.QueryDenomTracesRequest;
                    toAminoMsg(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTracesRequestProtoMsg): _61.QueryDenomTracesRequest;
                    toProto(message: _61.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_61.QueryDenomTracesResponse>): _61.QueryDenomTracesResponse;
                    fromAmino(object: _61.QueryDenomTracesResponseAmino): _61.QueryDenomTracesResponse;
                    toAmino(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _61.QueryDenomTracesResponseAminoMsg): _61.QueryDenomTracesResponse;
                    toAminoMsg(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTracesResponseProtoMsg): _61.QueryDenomTracesResponse;
                    toProto(message: _61.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryParamsRequest;
                    fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                    fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                    toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                    fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                    toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                    toProto(message: _61.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _61.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryParamsResponse;
                    fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                    fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                    toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                    fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                    toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                    toProto(message: _61.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomHashRequest;
                    fromPartial(object: Partial<_61.QueryDenomHashRequest>): _61.QueryDenomHashRequest;
                    fromAmino(object: _61.QueryDenomHashRequestAmino): _61.QueryDenomHashRequest;
                    toAmino(message: _61.QueryDenomHashRequest): _61.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _61.QueryDenomHashRequestAminoMsg): _61.QueryDenomHashRequest;
                    toAminoMsg(message: _61.QueryDenomHashRequest): _61.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomHashRequestProtoMsg): _61.QueryDenomHashRequest;
                    toProto(message: _61.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomHashRequest): _61.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _61.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomHashResponse;
                    fromPartial(object: Partial<_61.QueryDenomHashResponse>): _61.QueryDenomHashResponse;
                    fromAmino(object: _61.QueryDenomHashResponseAmino): _61.QueryDenomHashResponse;
                    toAmino(message: _61.QueryDenomHashResponse): _61.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _61.QueryDenomHashResponseAminoMsg): _61.QueryDenomHashResponse;
                    toAminoMsg(message: _61.QueryDenomHashResponse): _61.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomHashResponseProtoMsg): _61.QueryDenomHashResponse;
                    toProto(message: _61.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomHashResponse): _61.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _61.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_61.QueryEscrowAddressRequest>): _61.QueryEscrowAddressRequest;
                    fromAmino(object: _61.QueryEscrowAddressRequestAmino): _61.QueryEscrowAddressRequest;
                    toAmino(message: _61.QueryEscrowAddressRequest): _61.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _61.QueryEscrowAddressRequestAminoMsg): _61.QueryEscrowAddressRequest;
                    toAminoMsg(message: _61.QueryEscrowAddressRequest): _61.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryEscrowAddressRequestProtoMsg): _61.QueryEscrowAddressRequest;
                    toProto(message: _61.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryEscrowAddressRequest): _61.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _61.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_61.QueryEscrowAddressResponse>): _61.QueryEscrowAddressResponse;
                    fromAmino(object: _61.QueryEscrowAddressResponseAmino): _61.QueryEscrowAddressResponse;
                    toAmino(message: _61.QueryEscrowAddressResponse): _61.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _61.QueryEscrowAddressResponseAminoMsg): _61.QueryEscrowAddressResponse;
                    toAminoMsg(message: _61.QueryEscrowAddressResponse): _61.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryEscrowAddressResponseProtoMsg): _61.QueryEscrowAddressResponse;
                    toProto(message: _61.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryEscrowAddressResponse): _61.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GenesisState;
                    fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                    fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                    toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                    fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                    toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                    fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                    toProto(message: _60.GenesisState): Uint8Array;
                    toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _59.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Allocation;
                    fromPartial(object: Partial<_59.Allocation>): _59.Allocation;
                    fromAmino(object: _59.AllocationAmino): _59.Allocation;
                    toAmino(message: _59.Allocation): _59.AllocationAmino;
                    fromAminoMsg(object: _59.AllocationAminoMsg): _59.Allocation;
                    toAminoMsg(message: _59.Allocation): _59.AllocationAminoMsg;
                    fromProtoMsg(message: _59.AllocationProtoMsg): _59.Allocation;
                    toProto(message: _59.Allocation): Uint8Array;
                    toProtoMsg(message: _59.Allocation): _59.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _59.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.TransferAuthorization;
                    fromPartial(object: Partial<_59.TransferAuthorization>): _59.TransferAuthorization;
                    fromAmino(object: _59.TransferAuthorizationAmino): _59.TransferAuthorization;
                    toAmino(message: _59.TransferAuthorization): _59.TransferAuthorizationAmino;
                    fromAminoMsg(object: _59.TransferAuthorizationAminoMsg): _59.TransferAuthorization;
                    toAminoMsg(message: _59.TransferAuthorization): _59.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _59.TransferAuthorizationProtoMsg): _59.TransferAuthorization;
                    toProto(message: _59.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _59.TransferAuthorization): _59.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _64.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.FungibleTokenPacketData;
                    fromPartial(object: Partial<_64.FungibleTokenPacketData>): _64.FungibleTokenPacketData;
                    fromAmino(object: _64.FungibleTokenPacketDataAmino): _64.FungibleTokenPacketData;
                    toAmino(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _64.FungibleTokenPacketDataAminoMsg): _64.FungibleTokenPacketData;
                    toAminoMsg(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _64.FungibleTokenPacketDataProtoMsg): _64.FungibleTokenPacketData;
                    toProto(message: _64.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _252.MsgClientImpl;
                QueryClientImpl: typeof _246.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                    channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                    connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                    channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _239.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenInit) => _68.MsgChannelOpenInitAmino;
                        fromAmino: (object: _68.MsgChannelOpenInitAmino) => _68.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenTry) => _68.MsgChannelOpenTryAmino;
                        fromAmino: (object: _68.MsgChannelOpenTryAmino) => _68.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenAck) => _68.MsgChannelOpenAckAmino;
                        fromAmino: (object: _68.MsgChannelOpenAckAmino) => _68.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenConfirm) => _68.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _68.MsgChannelOpenConfirmAmino) => _68.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelCloseInit) => _68.MsgChannelCloseInitAmino;
                        fromAmino: (object: _68.MsgChannelCloseInitAmino) => _68.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelCloseConfirm) => _68.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _68.MsgChannelCloseConfirmAmino) => _68.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _68.MsgRecvPacket) => _68.MsgRecvPacketAmino;
                        fromAmino: (object: _68.MsgRecvPacketAmino) => _68.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _68.MsgTimeout) => _68.MsgTimeoutAmino;
                        fromAmino: (object: _68.MsgTimeoutAmino) => _68.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _68.MsgTimeoutOnClose) => _68.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _68.MsgTimeoutOnCloseAmino) => _68.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _68.MsgAcknowledgement) => _68.MsgAcknowledgementAmino;
                        fromAmino: (object: _68.MsgAcknowledgementAmino) => _68.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _68.ResponseResultType;
                responseResultTypeToJSON(object: _68.ResponseResultType): string;
                ResponseResultType: typeof _68.ResponseResultType;
                ResponseResultTypeSDKType: typeof _68.ResponseResultType;
                ResponseResultTypeAmino: typeof _68.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenInit;
                    fromPartial(object: Partial<_68.MsgChannelOpenInit>): _68.MsgChannelOpenInit;
                    fromAmino(object: _68.MsgChannelOpenInitAmino): _68.MsgChannelOpenInit;
                    toAmino(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenInitAminoMsg): _68.MsgChannelOpenInit;
                    toAminoMsg(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenInitProtoMsg): _68.MsgChannelOpenInit;
                    toProto(message: _68.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_68.MsgChannelOpenInitResponse>): _68.MsgChannelOpenInitResponse;
                    fromAmino(object: _68.MsgChannelOpenInitResponseAmino): _68.MsgChannelOpenInitResponse;
                    toAmino(message: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenInitResponseAminoMsg): _68.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenInitResponseProtoMsg): _68.MsgChannelOpenInitResponse;
                    toProto(message: _68.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenTry;
                    fromPartial(object: Partial<_68.MsgChannelOpenTry>): _68.MsgChannelOpenTry;
                    fromAmino(object: _68.MsgChannelOpenTryAmino): _68.MsgChannelOpenTry;
                    toAmino(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenTryAminoMsg): _68.MsgChannelOpenTry;
                    toAminoMsg(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenTryProtoMsg): _68.MsgChannelOpenTry;
                    toProto(message: _68.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_68.MsgChannelOpenTryResponse>): _68.MsgChannelOpenTryResponse;
                    fromAmino(object: _68.MsgChannelOpenTryResponseAmino): _68.MsgChannelOpenTryResponse;
                    toAmino(message: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenTryResponseAminoMsg): _68.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenTryResponseProtoMsg): _68.MsgChannelOpenTryResponse;
                    toProto(message: _68.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenAck;
                    fromPartial(object: Partial<_68.MsgChannelOpenAck>): _68.MsgChannelOpenAck;
                    fromAmino(object: _68.MsgChannelOpenAckAmino): _68.MsgChannelOpenAck;
                    toAmino(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenAckAminoMsg): _68.MsgChannelOpenAck;
                    toAminoMsg(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenAckProtoMsg): _68.MsgChannelOpenAck;
                    toProto(message: _68.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_68.MsgChannelOpenAckResponse>): _68.MsgChannelOpenAckResponse;
                    fromAmino(_: _68.MsgChannelOpenAckResponseAmino): _68.MsgChannelOpenAckResponse;
                    toAmino(_: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenAckResponseAminoMsg): _68.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenAckResponseProtoMsg): _68.MsgChannelOpenAckResponse;
                    toProto(message: _68.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_68.MsgChannelOpenConfirm>): _68.MsgChannelOpenConfirm;
                    fromAmino(object: _68.MsgChannelOpenConfirmAmino): _68.MsgChannelOpenConfirm;
                    toAmino(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenConfirmAminoMsg): _68.MsgChannelOpenConfirm;
                    toAminoMsg(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenConfirmProtoMsg): _68.MsgChannelOpenConfirm;
                    toProto(message: _68.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_68.MsgChannelOpenConfirmResponse>): _68.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _68.MsgChannelOpenConfirmResponseAmino): _68.MsgChannelOpenConfirmResponse;
                    toAmino(_: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenConfirmResponseAminoMsg): _68.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenConfirmResponseProtoMsg): _68.MsgChannelOpenConfirmResponse;
                    toProto(message: _68.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseInit;
                    fromPartial(object: Partial<_68.MsgChannelCloseInit>): _68.MsgChannelCloseInit;
                    fromAmino(object: _68.MsgChannelCloseInitAmino): _68.MsgChannelCloseInit;
                    toAmino(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseInitAminoMsg): _68.MsgChannelCloseInit;
                    toAminoMsg(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseInitProtoMsg): _68.MsgChannelCloseInit;
                    toProto(message: _68.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_68.MsgChannelCloseInitResponse>): _68.MsgChannelCloseInitResponse;
                    fromAmino(_: _68.MsgChannelCloseInitResponseAmino): _68.MsgChannelCloseInitResponse;
                    toAmino(_: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseInitResponseAminoMsg): _68.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseInitResponseProtoMsg): _68.MsgChannelCloseInitResponse;
                    toProto(message: _68.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _68.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_68.MsgChannelCloseConfirm>): _68.MsgChannelCloseConfirm;
                    fromAmino(object: _68.MsgChannelCloseConfirmAmino): _68.MsgChannelCloseConfirm;
                    toAmino(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseConfirmAminoMsg): _68.MsgChannelCloseConfirm;
                    toAminoMsg(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseConfirmProtoMsg): _68.MsgChannelCloseConfirm;
                    toProto(message: _68.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _68.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_68.MsgChannelCloseConfirmResponse>): _68.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _68.MsgChannelCloseConfirmResponseAmino): _68.MsgChannelCloseConfirmResponse;
                    toAmino(_: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseConfirmResponseAminoMsg): _68.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseConfirmResponseProtoMsg): _68.MsgChannelCloseConfirmResponse;
                    toProto(message: _68.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _68.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRecvPacket;
                    fromPartial(object: Partial<_68.MsgRecvPacket>): _68.MsgRecvPacket;
                    fromAmino(object: _68.MsgRecvPacketAmino): _68.MsgRecvPacket;
                    toAmino(message: _68.MsgRecvPacket): _68.MsgRecvPacketAmino;
                    fromAminoMsg(object: _68.MsgRecvPacketAminoMsg): _68.MsgRecvPacket;
                    toAminoMsg(message: _68.MsgRecvPacket): _68.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _68.MsgRecvPacketProtoMsg): _68.MsgRecvPacket;
                    toProto(message: _68.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _68.MsgRecvPacket): _68.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_68.MsgRecvPacketResponse>): _68.MsgRecvPacketResponse;
                    fromAmino(object: _68.MsgRecvPacketResponseAmino): _68.MsgRecvPacketResponse;
                    toAmino(message: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _68.MsgRecvPacketResponseAminoMsg): _68.MsgRecvPacketResponse;
                    toAminoMsg(message: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgRecvPacketResponseProtoMsg): _68.MsgRecvPacketResponse;
                    toProto(message: _68.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _68.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeout;
                    fromPartial(object: Partial<_68.MsgTimeout>): _68.MsgTimeout;
                    fromAmino(object: _68.MsgTimeoutAmino): _68.MsgTimeout;
                    toAmino(message: _68.MsgTimeout): _68.MsgTimeoutAmino;
                    fromAminoMsg(object: _68.MsgTimeoutAminoMsg): _68.MsgTimeout;
                    toAminoMsg(message: _68.MsgTimeout): _68.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutProtoMsg): _68.MsgTimeout;
                    toProto(message: _68.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeout): _68.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutResponse;
                    fromPartial(object: Partial<_68.MsgTimeoutResponse>): _68.MsgTimeoutResponse;
                    fromAmino(object: _68.MsgTimeoutResponseAmino): _68.MsgTimeoutResponse;
                    toAmino(message: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutResponseAminoMsg): _68.MsgTimeoutResponse;
                    toAminoMsg(message: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutResponseProtoMsg): _68.MsgTimeoutResponse;
                    toProto(message: _68.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _68.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_68.MsgTimeoutOnClose>): _68.MsgTimeoutOnClose;
                    fromAmino(object: _68.MsgTimeoutOnCloseAmino): _68.MsgTimeoutOnClose;
                    toAmino(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutOnCloseAminoMsg): _68.MsgTimeoutOnClose;
                    toAminoMsg(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutOnCloseProtoMsg): _68.MsgTimeoutOnClose;
                    toProto(message: _68.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_68.MsgTimeoutOnCloseResponse>): _68.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _68.MsgTimeoutOnCloseResponseAmino): _68.MsgTimeoutOnCloseResponse;
                    toAmino(message: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutOnCloseResponseAminoMsg): _68.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutOnCloseResponseProtoMsg): _68.MsgTimeoutOnCloseResponse;
                    toProto(message: _68.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _68.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgAcknowledgement;
                    fromPartial(object: Partial<_68.MsgAcknowledgement>): _68.MsgAcknowledgement;
                    fromAmino(object: _68.MsgAcknowledgementAmino): _68.MsgAcknowledgement;
                    toAmino(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _68.MsgAcknowledgementAminoMsg): _68.MsgAcknowledgement;
                    toAminoMsg(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _68.MsgAcknowledgementProtoMsg): _68.MsgAcknowledgement;
                    toProto(message: _68.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _68.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_68.MsgAcknowledgementResponse>): _68.MsgAcknowledgementResponse;
                    fromAmino(object: _68.MsgAcknowledgementResponseAmino): _68.MsgAcknowledgementResponse;
                    toAmino(message: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _68.MsgAcknowledgementResponseAminoMsg): _68.MsgAcknowledgementResponse;
                    toAminoMsg(message: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgAcknowledgementResponseProtoMsg): _68.MsgAcknowledgementResponse;
                    toProto(message: _68.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelRequest;
                    fromPartial(object: Partial<_67.QueryChannelRequest>): _67.QueryChannelRequest;
                    fromAmino(object: _67.QueryChannelRequestAmino): _67.QueryChannelRequest;
                    toAmino(message: _67.QueryChannelRequest): _67.QueryChannelRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelRequestAminoMsg): _67.QueryChannelRequest;
                    toAminoMsg(message: _67.QueryChannelRequest): _67.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelRequestProtoMsg): _67.QueryChannelRequest;
                    toProto(message: _67.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelRequest): _67.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelResponse;
                    fromPartial(object: Partial<_67.QueryChannelResponse>): _67.QueryChannelResponse;
                    fromAmino(object: _67.QueryChannelResponseAmino): _67.QueryChannelResponse;
                    toAmino(message: _67.QueryChannelResponse): _67.QueryChannelResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelResponseAminoMsg): _67.QueryChannelResponse;
                    toAminoMsg(message: _67.QueryChannelResponse): _67.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelResponseProtoMsg): _67.QueryChannelResponse;
                    toProto(message: _67.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelResponse): _67.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelsRequest;
                    fromPartial(object: Partial<_67.QueryChannelsRequest>): _67.QueryChannelsRequest;
                    fromAmino(object: _67.QueryChannelsRequestAmino): _67.QueryChannelsRequest;
                    toAmino(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelsRequestAminoMsg): _67.QueryChannelsRequest;
                    toAminoMsg(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelsRequestProtoMsg): _67.QueryChannelsRequest;
                    toProto(message: _67.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelsResponse;
                    fromPartial(object: Partial<_67.QueryChannelsResponse>): _67.QueryChannelsResponse;
                    fromAmino(object: _67.QueryChannelsResponseAmino): _67.QueryChannelsResponse;
                    toAmino(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelsResponseAminoMsg): _67.QueryChannelsResponse;
                    toAminoMsg(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelsResponseProtoMsg): _67.QueryChannelsResponse;
                    toProto(message: _67.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_67.QueryConnectionChannelsRequest>): _67.QueryConnectionChannelsRequest;
                    fromAmino(object: _67.QueryConnectionChannelsRequestAmino): _67.QueryConnectionChannelsRequest;
                    toAmino(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _67.QueryConnectionChannelsRequestAminoMsg): _67.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryConnectionChannelsRequestProtoMsg): _67.QueryConnectionChannelsRequest;
                    toProto(message: _67.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_67.QueryConnectionChannelsResponse>): _67.QueryConnectionChannelsResponse;
                    fromAmino(object: _67.QueryConnectionChannelsResponseAmino): _67.QueryConnectionChannelsResponse;
                    toAmino(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _67.QueryConnectionChannelsResponseAminoMsg): _67.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryConnectionChannelsResponseProtoMsg): _67.QueryConnectionChannelsResponse;
                    toProto(message: _67.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_67.QueryChannelClientStateRequest>): _67.QueryChannelClientStateRequest;
                    fromAmino(object: _67.QueryChannelClientStateRequestAmino): _67.QueryChannelClientStateRequest;
                    toAmino(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelClientStateRequestAminoMsg): _67.QueryChannelClientStateRequest;
                    toAminoMsg(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelClientStateRequestProtoMsg): _67.QueryChannelClientStateRequest;
                    toProto(message: _67.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_67.QueryChannelClientStateResponse>): _67.QueryChannelClientStateResponse;
                    fromAmino(object: _67.QueryChannelClientStateResponseAmino): _67.QueryChannelClientStateResponse;
                    toAmino(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelClientStateResponseAminoMsg): _67.QueryChannelClientStateResponse;
                    toAminoMsg(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelClientStateResponseProtoMsg): _67.QueryChannelClientStateResponse;
                    toProto(message: _67.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_67.QueryChannelConsensusStateRequest>): _67.QueryChannelConsensusStateRequest;
                    fromAmino(object: _67.QueryChannelConsensusStateRequestAmino): _67.QueryChannelConsensusStateRequest;
                    toAmino(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelConsensusStateRequestAminoMsg): _67.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelConsensusStateRequestProtoMsg): _67.QueryChannelConsensusStateRequest;
                    toProto(message: _67.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_67.QueryChannelConsensusStateResponse>): _67.QueryChannelConsensusStateResponse;
                    fromAmino(object: _67.QueryChannelConsensusStateResponseAmino): _67.QueryChannelConsensusStateResponse;
                    toAmino(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelConsensusStateResponseAminoMsg): _67.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelConsensusStateResponseProtoMsg): _67.QueryChannelConsensusStateResponse;
                    toProto(message: _67.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_67.QueryPacketCommitmentRequest>): _67.QueryPacketCommitmentRequest;
                    fromAmino(object: _67.QueryPacketCommitmentRequestAmino): _67.QueryPacketCommitmentRequest;
                    toAmino(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentRequestAminoMsg): _67.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentRequestProtoMsg): _67.QueryPacketCommitmentRequest;
                    toProto(message: _67.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_67.QueryPacketCommitmentResponse>): _67.QueryPacketCommitmentResponse;
                    fromAmino(object: _67.QueryPacketCommitmentResponseAmino): _67.QueryPacketCommitmentResponse;
                    toAmino(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentResponseAminoMsg): _67.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentResponseProtoMsg): _67.QueryPacketCommitmentResponse;
                    toProto(message: _67.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_67.QueryPacketCommitmentsRequest>): _67.QueryPacketCommitmentsRequest;
                    fromAmino(object: _67.QueryPacketCommitmentsRequestAmino): _67.QueryPacketCommitmentsRequest;
                    toAmino(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentsRequestAminoMsg): _67.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentsRequestProtoMsg): _67.QueryPacketCommitmentsRequest;
                    toProto(message: _67.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_67.QueryPacketCommitmentsResponse>): _67.QueryPacketCommitmentsResponse;
                    fromAmino(object: _67.QueryPacketCommitmentsResponseAmino): _67.QueryPacketCommitmentsResponse;
                    toAmino(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentsResponseAminoMsg): _67.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentsResponseProtoMsg): _67.QueryPacketCommitmentsResponse;
                    toProto(message: _67.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_67.QueryPacketReceiptRequest>): _67.QueryPacketReceiptRequest;
                    fromAmino(object: _67.QueryPacketReceiptRequestAmino): _67.QueryPacketReceiptRequest;
                    toAmino(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketReceiptRequestAminoMsg): _67.QueryPacketReceiptRequest;
                    toAminoMsg(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketReceiptRequestProtoMsg): _67.QueryPacketReceiptRequest;
                    toProto(message: _67.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_67.QueryPacketReceiptResponse>): _67.QueryPacketReceiptResponse;
                    fromAmino(object: _67.QueryPacketReceiptResponseAmino): _67.QueryPacketReceiptResponse;
                    toAmino(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketReceiptResponseAminoMsg): _67.QueryPacketReceiptResponse;
                    toAminoMsg(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketReceiptResponseProtoMsg): _67.QueryPacketReceiptResponse;
                    toProto(message: _67.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementRequest>): _67.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _67.QueryPacketAcknowledgementRequestAmino): _67.QueryPacketAcknowledgementRequest;
                    toAmino(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementRequestAminoMsg): _67.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementRequestProtoMsg): _67.QueryPacketAcknowledgementRequest;
                    toProto(message: _67.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementResponse>): _67.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _67.QueryPacketAcknowledgementResponseAmino): _67.QueryPacketAcknowledgementResponse;
                    toAmino(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementResponseAminoMsg): _67.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementResponseProtoMsg): _67.QueryPacketAcknowledgementResponse;
                    toProto(message: _67.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementsRequest>): _67.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _67.QueryPacketAcknowledgementsRequestAmino): _67.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementsRequestAminoMsg): _67.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementsRequestProtoMsg): _67.QueryPacketAcknowledgementsRequest;
                    toProto(message: _67.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementsResponse>): _67.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _67.QueryPacketAcknowledgementsResponseAmino): _67.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementsResponseAminoMsg): _67.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementsResponseProtoMsg): _67.QueryPacketAcknowledgementsResponse;
                    toProto(message: _67.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_67.QueryUnreceivedPacketsRequest>): _67.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _67.QueryUnreceivedPacketsRequestAmino): _67.QueryUnreceivedPacketsRequest;
                    toAmino(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedPacketsRequestAminoMsg): _67.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedPacketsRequestProtoMsg): _67.QueryUnreceivedPacketsRequest;
                    toProto(message: _67.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_67.QueryUnreceivedPacketsResponse>): _67.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _67.QueryUnreceivedPacketsResponseAmino): _67.QueryUnreceivedPacketsResponse;
                    toAmino(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedPacketsResponseAminoMsg): _67.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedPacketsResponseProtoMsg): _67.QueryUnreceivedPacketsResponse;
                    toProto(message: _67.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_67.QueryUnreceivedAcksRequest>): _67.QueryUnreceivedAcksRequest;
                    fromAmino(object: _67.QueryUnreceivedAcksRequestAmino): _67.QueryUnreceivedAcksRequest;
                    toAmino(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedAcksRequestAminoMsg): _67.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedAcksRequestProtoMsg): _67.QueryUnreceivedAcksRequest;
                    toProto(message: _67.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_67.QueryUnreceivedAcksResponse>): _67.QueryUnreceivedAcksResponse;
                    fromAmino(object: _67.QueryUnreceivedAcksResponseAmino): _67.QueryUnreceivedAcksResponse;
                    toAmino(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedAcksResponseAminoMsg): _67.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedAcksResponseProtoMsg): _67.QueryUnreceivedAcksResponse;
                    toProto(message: _67.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _67.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_67.QueryNextSequenceReceiveRequest>): _67.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _67.QueryNextSequenceReceiveRequestAmino): _67.QueryNextSequenceReceiveRequest;
                    toAmino(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _67.QueryNextSequenceReceiveRequestAminoMsg): _67.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryNextSequenceReceiveRequestProtoMsg): _67.QueryNextSequenceReceiveRequest;
                    toProto(message: _67.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _67.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_67.QueryNextSequenceReceiveResponse>): _67.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _67.QueryNextSequenceReceiveResponseAmino): _67.QueryNextSequenceReceiveResponse;
                    toAmino(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _67.QueryNextSequenceReceiveResponseAminoMsg): _67.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryNextSequenceReceiveResponseProtoMsg): _67.QueryNextSequenceReceiveResponse;
                    toProto(message: _67.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.GenesisState;
                    fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                    fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                    toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                    fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                    toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                    fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                    toProto(message: _66.GenesisState): Uint8Array;
                    toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _66.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.PacketSequence;
                    fromPartial(object: Partial<_66.PacketSequence>): _66.PacketSequence;
                    fromAmino(object: _66.PacketSequenceAmino): _66.PacketSequence;
                    toAmino(message: _66.PacketSequence): _66.PacketSequenceAmino;
                    fromAminoMsg(object: _66.PacketSequenceAminoMsg): _66.PacketSequence;
                    toAminoMsg(message: _66.PacketSequence): _66.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _66.PacketSequenceProtoMsg): _66.PacketSequence;
                    toProto(message: _66.PacketSequence): Uint8Array;
                    toProtoMsg(message: _66.PacketSequence): _66.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _65.State;
                stateToJSON(object: _65.State): string;
                orderFromJSON(object: any): _65.Order;
                orderToJSON(object: _65.Order): string;
                State: typeof _65.State;
                StateSDKType: typeof _65.State;
                StateAmino: typeof _65.State;
                Order: typeof _65.Order;
                OrderSDKType: typeof _65.Order;
                OrderAmino: typeof _65.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _65.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Channel;
                    fromPartial(object: Partial<_65.Channel>): _65.Channel;
                    fromAmino(object: _65.ChannelAmino): _65.Channel;
                    toAmino(message: _65.Channel): _65.ChannelAmino;
                    fromAminoMsg(object: _65.ChannelAminoMsg): _65.Channel;
                    toAminoMsg(message: _65.Channel): _65.ChannelAminoMsg;
                    fromProtoMsg(message: _65.ChannelProtoMsg): _65.Channel;
                    toProto(message: _65.Channel): Uint8Array;
                    toProtoMsg(message: _65.Channel): _65.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _65.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.IdentifiedChannel;
                    fromPartial(object: Partial<_65.IdentifiedChannel>): _65.IdentifiedChannel;
                    fromAmino(object: _65.IdentifiedChannelAmino): _65.IdentifiedChannel;
                    toAmino(message: _65.IdentifiedChannel): _65.IdentifiedChannelAmino;
                    fromAminoMsg(object: _65.IdentifiedChannelAminoMsg): _65.IdentifiedChannel;
                    toAminoMsg(message: _65.IdentifiedChannel): _65.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _65.IdentifiedChannelProtoMsg): _65.IdentifiedChannel;
                    toProto(message: _65.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _65.IdentifiedChannel): _65.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _65.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Counterparty;
                    fromPartial(object: Partial<_65.Counterparty>): _65.Counterparty;
                    fromAmino(object: _65.CounterpartyAmino): _65.Counterparty;
                    toAmino(message: _65.Counterparty): _65.CounterpartyAmino;
                    fromAminoMsg(object: _65.CounterpartyAminoMsg): _65.Counterparty;
                    toAminoMsg(message: _65.Counterparty): _65.CounterpartyAminoMsg;
                    fromProtoMsg(message: _65.CounterpartyProtoMsg): _65.Counterparty;
                    toProto(message: _65.Counterparty): Uint8Array;
                    toProtoMsg(message: _65.Counterparty): _65.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _65.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Packet;
                    fromPartial(object: Partial<_65.Packet>): _65.Packet;
                    fromAmino(object: _65.PacketAmino): _65.Packet;
                    toAmino(message: _65.Packet): _65.PacketAmino;
                    fromAminoMsg(object: _65.PacketAminoMsg): _65.Packet;
                    toAminoMsg(message: _65.Packet): _65.PacketAminoMsg;
                    fromProtoMsg(message: _65.PacketProtoMsg): _65.Packet;
                    toProto(message: _65.Packet): Uint8Array;
                    toProtoMsg(message: _65.Packet): _65.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _65.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.PacketState;
                    fromPartial(object: Partial<_65.PacketState>): _65.PacketState;
                    fromAmino(object: _65.PacketStateAmino): _65.PacketState;
                    toAmino(message: _65.PacketState): _65.PacketStateAmino;
                    fromAminoMsg(object: _65.PacketStateAminoMsg): _65.PacketState;
                    toAminoMsg(message: _65.PacketState): _65.PacketStateAminoMsg;
                    fromProtoMsg(message: _65.PacketStateProtoMsg): _65.PacketState;
                    toProto(message: _65.PacketState): Uint8Array;
                    toProtoMsg(message: _65.PacketState): _65.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _65.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.PacketId;
                    fromPartial(object: Partial<_65.PacketId>): _65.PacketId;
                    fromAmino(object: _65.PacketIdAmino): _65.PacketId;
                    toAmino(message: _65.PacketId): _65.PacketIdAmino;
                    fromAminoMsg(object: _65.PacketIdAminoMsg): _65.PacketId;
                    toAminoMsg(message: _65.PacketId): _65.PacketIdAminoMsg;
                    fromProtoMsg(message: _65.PacketIdProtoMsg): _65.PacketId;
                    toProto(message: _65.PacketId): Uint8Array;
                    toProtoMsg(message: _65.PacketId): _65.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _65.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Acknowledgement;
                    fromPartial(object: Partial<_65.Acknowledgement>): _65.Acknowledgement;
                    fromAmino(object: _65.AcknowledgementAmino): _65.Acknowledgement;
                    toAmino(message: _65.Acknowledgement): _65.AcknowledgementAmino;
                    fromAminoMsg(object: _65.AcknowledgementAminoMsg): _65.Acknowledgement;
                    toAminoMsg(message: _65.Acknowledgement): _65.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _65.AcknowledgementProtoMsg): _65.Acknowledgement;
                    toProto(message: _65.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _65.Acknowledgement): _65.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _253.MsgClientImpl;
                QueryClientImpl: typeof _247.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                    clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                    consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                    consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _71.QueryConsensusStateHeightsRequest): Promise<_71.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                    clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                    upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _240.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgCreateClient) => _72.MsgCreateClientAmino;
                        fromAmino: (object: _72.MsgCreateClientAmino) => _72.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgUpdateClient) => _72.MsgUpdateClientAmino;
                        fromAmino: (object: _72.MsgUpdateClientAmino) => _72.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgUpgradeClient) => _72.MsgUpgradeClientAmino;
                        fromAmino: (object: _72.MsgUpgradeClientAmino) => _72.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _72.MsgSubmitMisbehaviour) => _72.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _72.MsgSubmitMisbehaviourAmino) => _72.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _72.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCreateClient;
                    fromPartial(object: Partial<_72.MsgCreateClient>): _72.MsgCreateClient;
                    fromAmino(object: _72.MsgCreateClientAmino): _72.MsgCreateClient;
                    toAmino(message: _72.MsgCreateClient): _72.MsgCreateClientAmino;
                    fromAminoMsg(object: _72.MsgCreateClientAminoMsg): _72.MsgCreateClient;
                    toAminoMsg(message: _72.MsgCreateClient): _72.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _72.MsgCreateClientProtoMsg): _72.MsgCreateClient;
                    toProto(message: _72.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _72.MsgCreateClient): _72.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _72.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCreateClientResponse;
                    fromPartial(_: Partial<_72.MsgCreateClientResponse>): _72.MsgCreateClientResponse;
                    fromAmino(_: _72.MsgCreateClientResponseAmino): _72.MsgCreateClientResponse;
                    toAmino(_: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _72.MsgCreateClientResponseAminoMsg): _72.MsgCreateClientResponse;
                    toAminoMsg(message: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgCreateClientResponseProtoMsg): _72.MsgCreateClientResponse;
                    toProto(message: _72.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _72.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateClient;
                    fromPartial(object: Partial<_72.MsgUpdateClient>): _72.MsgUpdateClient;
                    fromAmino(object: _72.MsgUpdateClientAmino): _72.MsgUpdateClient;
                    toAmino(message: _72.MsgUpdateClient): _72.MsgUpdateClientAmino;
                    fromAminoMsg(object: _72.MsgUpdateClientAminoMsg): _72.MsgUpdateClient;
                    toAminoMsg(message: _72.MsgUpdateClient): _72.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _72.MsgUpdateClientProtoMsg): _72.MsgUpdateClient;
                    toProto(message: _72.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _72.MsgUpdateClient): _72.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _72.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_72.MsgUpdateClientResponse>): _72.MsgUpdateClientResponse;
                    fromAmino(_: _72.MsgUpdateClientResponseAmino): _72.MsgUpdateClientResponse;
                    toAmino(_: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _72.MsgUpdateClientResponseAminoMsg): _72.MsgUpdateClientResponse;
                    toAminoMsg(message: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgUpdateClientResponseProtoMsg): _72.MsgUpdateClientResponse;
                    toProto(message: _72.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _72.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpgradeClient;
                    fromPartial(object: Partial<_72.MsgUpgradeClient>): _72.MsgUpgradeClient;
                    fromAmino(object: _72.MsgUpgradeClientAmino): _72.MsgUpgradeClient;
                    toAmino(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _72.MsgUpgradeClientAminoMsg): _72.MsgUpgradeClient;
                    toAminoMsg(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _72.MsgUpgradeClientProtoMsg): _72.MsgUpgradeClient;
                    toProto(message: _72.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _72.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_72.MsgUpgradeClientResponse>): _72.MsgUpgradeClientResponse;
                    fromAmino(_: _72.MsgUpgradeClientResponseAmino): _72.MsgUpgradeClientResponse;
                    toAmino(_: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _72.MsgUpgradeClientResponseAminoMsg): _72.MsgUpgradeClientResponse;
                    toAminoMsg(message: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgUpgradeClientResponseProtoMsg): _72.MsgUpgradeClientResponse;
                    toProto(message: _72.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _72.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_72.MsgSubmitMisbehaviour>): _72.MsgSubmitMisbehaviour;
                    fromAmino(object: _72.MsgSubmitMisbehaviourAmino): _72.MsgSubmitMisbehaviour;
                    toAmino(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _72.MsgSubmitMisbehaviourAminoMsg): _72.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _72.MsgSubmitMisbehaviourProtoMsg): _72.MsgSubmitMisbehaviour;
                    toProto(message: _72.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _72.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_72.MsgSubmitMisbehaviourResponse>): _72.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _72.MsgSubmitMisbehaviourResponseAmino): _72.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _72.MsgSubmitMisbehaviourResponseAminoMsg): _72.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgSubmitMisbehaviourResponseProtoMsg): _72.MsgSubmitMisbehaviourResponse;
                    toProto(message: _72.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStateRequest;
                    fromPartial(object: Partial<_71.QueryClientStateRequest>): _71.QueryClientStateRequest;
                    fromAmino(object: _71.QueryClientStateRequestAmino): _71.QueryClientStateRequest;
                    toAmino(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStateRequestAminoMsg): _71.QueryClientStateRequest;
                    toAminoMsg(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStateRequestProtoMsg): _71.QueryClientStateRequest;
                    toProto(message: _71.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStateResponse;
                    fromPartial(object: Partial<_71.QueryClientStateResponse>): _71.QueryClientStateResponse;
                    fromAmino(object: _71.QueryClientStateResponseAmino): _71.QueryClientStateResponse;
                    toAmino(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStateResponseAminoMsg): _71.QueryClientStateResponse;
                    toAminoMsg(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStateResponseProtoMsg): _71.QueryClientStateResponse;
                    toProto(message: _71.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatesRequest;
                    fromPartial(object: Partial<_71.QueryClientStatesRequest>): _71.QueryClientStatesRequest;
                    fromAmino(object: _71.QueryClientStatesRequestAmino): _71.QueryClientStatesRequest;
                    toAmino(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStatesRequestAminoMsg): _71.QueryClientStatesRequest;
                    toAminoMsg(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatesRequestProtoMsg): _71.QueryClientStatesRequest;
                    toProto(message: _71.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatesResponse;
                    fromPartial(object: Partial<_71.QueryClientStatesResponse>): _71.QueryClientStatesResponse;
                    fromAmino(object: _71.QueryClientStatesResponseAmino): _71.QueryClientStatesResponse;
                    toAmino(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStatesResponseAminoMsg): _71.QueryClientStatesResponse;
                    toAminoMsg(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatesResponseProtoMsg): _71.QueryClientStatesResponse;
                    toProto(message: _71.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_71.QueryConsensusStateRequest>): _71.QueryConsensusStateRequest;
                    fromAmino(object: _71.QueryConsensusStateRequestAmino): _71.QueryConsensusStateRequest;
                    toAmino(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateRequestAminoMsg): _71.QueryConsensusStateRequest;
                    toAminoMsg(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateRequestProtoMsg): _71.QueryConsensusStateRequest;
                    toProto(message: _71.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_71.QueryConsensusStateResponse>): _71.QueryConsensusStateResponse;
                    fromAmino(object: _71.QueryConsensusStateResponseAmino): _71.QueryConsensusStateResponse;
                    toAmino(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateResponseAminoMsg): _71.QueryConsensusStateResponse;
                    toAminoMsg(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateResponseProtoMsg): _71.QueryConsensusStateResponse;
                    toProto(message: _71.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_71.QueryConsensusStatesRequest>): _71.QueryConsensusStatesRequest;
                    fromAmino(object: _71.QueryConsensusStatesRequestAmino): _71.QueryConsensusStatesRequest;
                    toAmino(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _71.QueryConsensusStatesRequestAminoMsg): _71.QueryConsensusStatesRequest;
                    toAminoMsg(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStatesRequestProtoMsg): _71.QueryConsensusStatesRequest;
                    toProto(message: _71.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_71.QueryConsensusStatesResponse>): _71.QueryConsensusStatesResponse;
                    fromAmino(object: _71.QueryConsensusStatesResponseAmino): _71.QueryConsensusStatesResponse;
                    toAmino(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _71.QueryConsensusStatesResponseAminoMsg): _71.QueryConsensusStatesResponse;
                    toAminoMsg(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStatesResponseProtoMsg): _71.QueryConsensusStatesResponse;
                    toProto(message: _71.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_71.QueryConsensusStateHeightsRequest>): _71.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _71.QueryConsensusStateHeightsRequestAmino): _71.QueryConsensusStateHeightsRequest;
                    toAmino(message: _71.QueryConsensusStateHeightsRequest): _71.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateHeightsRequestAminoMsg): _71.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _71.QueryConsensusStateHeightsRequest): _71.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateHeightsRequestProtoMsg): _71.QueryConsensusStateHeightsRequest;
                    toProto(message: _71.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateHeightsRequest): _71.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_71.QueryConsensusStateHeightsResponse>): _71.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _71.QueryConsensusStateHeightsResponseAmino): _71.QueryConsensusStateHeightsResponse;
                    toAmino(message: _71.QueryConsensusStateHeightsResponse): _71.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateHeightsResponseAminoMsg): _71.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _71.QueryConsensusStateHeightsResponse): _71.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateHeightsResponseProtoMsg): _71.QueryConsensusStateHeightsResponse;
                    toProto(message: _71.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateHeightsResponse): _71.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatusRequest;
                    fromPartial(object: Partial<_71.QueryClientStatusRequest>): _71.QueryClientStatusRequest;
                    fromAmino(object: _71.QueryClientStatusRequestAmino): _71.QueryClientStatusRequest;
                    toAmino(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStatusRequestAminoMsg): _71.QueryClientStatusRequest;
                    toAminoMsg(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatusRequestProtoMsg): _71.QueryClientStatusRequest;
                    toProto(message: _71.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatusResponse;
                    fromPartial(object: Partial<_71.QueryClientStatusResponse>): _71.QueryClientStatusResponse;
                    fromAmino(object: _71.QueryClientStatusResponseAmino): _71.QueryClientStatusResponse;
                    toAmino(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStatusResponseAminoMsg): _71.QueryClientStatusResponse;
                    toAminoMsg(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatusResponseProtoMsg): _71.QueryClientStatusResponse;
                    toProto(message: _71.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _71.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientParamsRequest;
                    fromPartial(_: Partial<_71.QueryClientParamsRequest>): _71.QueryClientParamsRequest;
                    fromAmino(_: _71.QueryClientParamsRequestAmino): _71.QueryClientParamsRequest;
                    toAmino(_: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _71.QueryClientParamsRequestAminoMsg): _71.QueryClientParamsRequest;
                    toAminoMsg(message: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientParamsRequestProtoMsg): _71.QueryClientParamsRequest;
                    toProto(message: _71.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientParamsResponse;
                    fromPartial(object: Partial<_71.QueryClientParamsResponse>): _71.QueryClientParamsResponse;
                    fromAmino(object: _71.QueryClientParamsResponseAmino): _71.QueryClientParamsResponse;
                    toAmino(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _71.QueryClientParamsResponseAminoMsg): _71.QueryClientParamsResponse;
                    toAminoMsg(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientParamsResponseProtoMsg): _71.QueryClientParamsResponse;
                    toProto(message: _71.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _71.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_71.QueryUpgradedClientStateRequest>): _71.QueryUpgradedClientStateRequest;
                    fromAmino(_: _71.QueryUpgradedClientStateRequestAmino): _71.QueryUpgradedClientStateRequest;
                    toAmino(_: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _71.QueryUpgradedClientStateRequestAminoMsg): _71.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedClientStateRequestProtoMsg): _71.QueryUpgradedClientStateRequest;
                    toProto(message: _71.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_71.QueryUpgradedClientStateResponse>): _71.QueryUpgradedClientStateResponse;
                    fromAmino(object: _71.QueryUpgradedClientStateResponseAmino): _71.QueryUpgradedClientStateResponse;
                    toAmino(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _71.QueryUpgradedClientStateResponseAminoMsg): _71.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedClientStateResponseProtoMsg): _71.QueryUpgradedClientStateResponse;
                    toProto(message: _71.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _71.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_71.QueryUpgradedConsensusStateRequest>): _71.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _71.QueryUpgradedConsensusStateRequestAmino): _71.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _71.QueryUpgradedConsensusStateRequestAminoMsg): _71.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedConsensusStateRequestProtoMsg): _71.QueryUpgradedConsensusStateRequest;
                    toProto(message: _71.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _71.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_71.QueryUpgradedConsensusStateResponse>): _71.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _71.QueryUpgradedConsensusStateResponseAmino): _71.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _71.QueryUpgradedConsensusStateResponseAminoMsg): _71.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedConsensusStateResponseProtoMsg): _71.QueryUpgradedConsensusStateResponse;
                    toProto(message: _71.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisState;
                    fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                    fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                    toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                    fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                    toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                    fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                    toProto(message: _70.GenesisState): Uint8Array;
                    toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _70.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisMetadata;
                    fromPartial(object: Partial<_70.GenesisMetadata>): _70.GenesisMetadata;
                    fromAmino(object: _70.GenesisMetadataAmino): _70.GenesisMetadata;
                    toAmino(message: _70.GenesisMetadata): _70.GenesisMetadataAmino;
                    fromAminoMsg(object: _70.GenesisMetadataAminoMsg): _70.GenesisMetadata;
                    toAminoMsg(message: _70.GenesisMetadata): _70.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _70.GenesisMetadataProtoMsg): _70.GenesisMetadata;
                    toProto(message: _70.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _70.GenesisMetadata): _70.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _70.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_70.IdentifiedGenesisMetadata>): _70.IdentifiedGenesisMetadata;
                    fromAmino(object: _70.IdentifiedGenesisMetadataAmino): _70.IdentifiedGenesisMetadata;
                    toAmino(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _70.IdentifiedGenesisMetadataAminoMsg): _70.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _70.IdentifiedGenesisMetadataProtoMsg): _70.IdentifiedGenesisMetadata;
                    toProto(message: _70.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _69.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.IdentifiedClientState;
                    fromPartial(object: Partial<_69.IdentifiedClientState>): _69.IdentifiedClientState;
                    fromAmino(object: _69.IdentifiedClientStateAmino): _69.IdentifiedClientState;
                    toAmino(message: _69.IdentifiedClientState): _69.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _69.IdentifiedClientStateAminoMsg): _69.IdentifiedClientState;
                    toAminoMsg(message: _69.IdentifiedClientState): _69.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _69.IdentifiedClientStateProtoMsg): _69.IdentifiedClientState;
                    toProto(message: _69.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _69.IdentifiedClientState): _69.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _69.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_69.ConsensusStateWithHeight>): _69.ConsensusStateWithHeight;
                    fromAmino(object: _69.ConsensusStateWithHeightAmino): _69.ConsensusStateWithHeight;
                    toAmino(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _69.ConsensusStateWithHeightAminoMsg): _69.ConsensusStateWithHeight;
                    toAminoMsg(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _69.ConsensusStateWithHeightProtoMsg): _69.ConsensusStateWithHeight;
                    toProto(message: _69.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _69.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ClientConsensusStates;
                    fromPartial(object: Partial<_69.ClientConsensusStates>): _69.ClientConsensusStates;
                    fromAmino(object: _69.ClientConsensusStatesAmino): _69.ClientConsensusStates;
                    toAmino(message: _69.ClientConsensusStates): _69.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _69.ClientConsensusStatesAminoMsg): _69.ClientConsensusStates;
                    toAminoMsg(message: _69.ClientConsensusStates): _69.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _69.ClientConsensusStatesProtoMsg): _69.ClientConsensusStates;
                    toProto(message: _69.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _69.ClientConsensusStates): _69.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _69.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ClientUpdateProposal;
                    fromPartial(object: Partial<_69.ClientUpdateProposal>): _69.ClientUpdateProposal;
                    fromAmino(object: _69.ClientUpdateProposalAmino): _69.ClientUpdateProposal;
                    toAmino(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _69.ClientUpdateProposalAminoMsg): _69.ClientUpdateProposal;
                    toAminoMsg(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _69.ClientUpdateProposalProtoMsg): _69.ClientUpdateProposal;
                    toProto(message: _69.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _69.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.UpgradeProposal;
                    fromPartial(object: Partial<_69.UpgradeProposal>): _69.UpgradeProposal;
                    fromAmino(object: _69.UpgradeProposalAmino): _69.UpgradeProposal;
                    toAmino(message: _69.UpgradeProposal): _69.UpgradeProposalAmino;
                    fromAminoMsg(object: _69.UpgradeProposalAminoMsg): _69.UpgradeProposal;
                    toAminoMsg(message: _69.UpgradeProposal): _69.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _69.UpgradeProposalProtoMsg): _69.UpgradeProposal;
                    toProto(message: _69.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _69.UpgradeProposal): _69.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _69.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Height;
                    fromPartial(object: Partial<_69.Height>): _69.Height;
                    fromAmino(object: _69.HeightAmino): _69.Height;
                    toAmino(message: _69.Height): _69.HeightAmino;
                    fromAminoMsg(object: _69.HeightAminoMsg): _69.Height;
                    toAminoMsg(message: _69.Height): _69.HeightAminoMsg;
                    fromProtoMsg(message: _69.HeightProtoMsg): _69.Height;
                    toProto(message: _69.Height): Uint8Array;
                    toProtoMsg(message: _69.Height): _69.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _69.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Params;
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
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _73.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerkleRoot;
                    fromPartial(object: Partial<_73.MerkleRoot>): _73.MerkleRoot;
                    fromAmino(object: _73.MerkleRootAmino): _73.MerkleRoot;
                    toAmino(message: _73.MerkleRoot): _73.MerkleRootAmino;
                    fromAminoMsg(object: _73.MerkleRootAminoMsg): _73.MerkleRoot;
                    toAminoMsg(message: _73.MerkleRoot): _73.MerkleRootAminoMsg;
                    fromProtoMsg(message: _73.MerkleRootProtoMsg): _73.MerkleRoot;
                    toProto(message: _73.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _73.MerkleRoot): _73.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _73.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerklePrefix;
                    fromPartial(object: Partial<_73.MerklePrefix>): _73.MerklePrefix;
                    fromAmino(object: _73.MerklePrefixAmino): _73.MerklePrefix;
                    toAmino(message: _73.MerklePrefix): _73.MerklePrefixAmino;
                    fromAminoMsg(object: _73.MerklePrefixAminoMsg): _73.MerklePrefix;
                    toAminoMsg(message: _73.MerklePrefix): _73.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _73.MerklePrefixProtoMsg): _73.MerklePrefix;
                    toProto(message: _73.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _73.MerklePrefix): _73.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _73.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerklePath;
                    fromPartial(object: Partial<_73.MerklePath>): _73.MerklePath;
                    fromAmino(object: _73.MerklePathAmino): _73.MerklePath;
                    toAmino(message: _73.MerklePath): _73.MerklePathAmino;
                    fromAminoMsg(object: _73.MerklePathAminoMsg): _73.MerklePath;
                    toAminoMsg(message: _73.MerklePath): _73.MerklePathAminoMsg;
                    fromProtoMsg(message: _73.MerklePathProtoMsg): _73.MerklePath;
                    toProto(message: _73.MerklePath): Uint8Array;
                    toProtoMsg(message: _73.MerklePath): _73.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _73.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerkleProof;
                    fromPartial(object: Partial<_73.MerkleProof>): _73.MerkleProof;
                    fromAmino(object: _73.MerkleProofAmino): _73.MerkleProof;
                    toAmino(message: _73.MerkleProof): _73.MerkleProofAmino;
                    fromAminoMsg(object: _73.MerkleProofAminoMsg): _73.MerkleProof;
                    toAminoMsg(message: _73.MerkleProof): _73.MerkleProofAminoMsg;
                    fromProtoMsg(message: _73.MerkleProofProtoMsg): _73.MerkleProof;
                    toProto(message: _73.MerkleProof): Uint8Array;
                    toProtoMsg(message: _73.MerkleProof): _73.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _254.MsgClientImpl;
                QueryClientImpl: typeof _248.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                    connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                    clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                    connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _76.QueryConnectionParamsRequest): Promise<_76.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _241.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenInit) => _77.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _77.MsgConnectionOpenInitAmino) => _77.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenTry) => _77.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _77.MsgConnectionOpenTryAmino) => _77.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenAck) => _77.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _77.MsgConnectionOpenAckAmino) => _77.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenConfirm) => _77.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _77.MsgConnectionOpenConfirmAmino) => _77.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _77.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_77.MsgConnectionOpenInit>): _77.MsgConnectionOpenInit;
                    fromAmino(object: _77.MsgConnectionOpenInitAmino): _77.MsgConnectionOpenInit;
                    toAmino(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenInitAminoMsg): _77.MsgConnectionOpenInit;
                    toAminoMsg(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenInitProtoMsg): _77.MsgConnectionOpenInit;
                    toProto(message: _77.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _77.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_77.MsgConnectionOpenInitResponse>): _77.MsgConnectionOpenInitResponse;
                    fromAmino(_: _77.MsgConnectionOpenInitResponseAmino): _77.MsgConnectionOpenInitResponse;
                    toAmino(_: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenInitResponseAminoMsg): _77.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenInitResponseProtoMsg): _77.MsgConnectionOpenInitResponse;
                    toProto(message: _77.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _77.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_77.MsgConnectionOpenTry>): _77.MsgConnectionOpenTry;
                    fromAmino(object: _77.MsgConnectionOpenTryAmino): _77.MsgConnectionOpenTry;
                    toAmino(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenTryAminoMsg): _77.MsgConnectionOpenTry;
                    toAminoMsg(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenTryProtoMsg): _77.MsgConnectionOpenTry;
                    toProto(message: _77.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _77.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_77.MsgConnectionOpenTryResponse>): _77.MsgConnectionOpenTryResponse;
                    fromAmino(_: _77.MsgConnectionOpenTryResponseAmino): _77.MsgConnectionOpenTryResponse;
                    toAmino(_: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenTryResponseAminoMsg): _77.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenTryResponseProtoMsg): _77.MsgConnectionOpenTryResponse;
                    toProto(message: _77.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _77.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_77.MsgConnectionOpenAck>): _77.MsgConnectionOpenAck;
                    fromAmino(object: _77.MsgConnectionOpenAckAmino): _77.MsgConnectionOpenAck;
                    toAmino(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenAckAminoMsg): _77.MsgConnectionOpenAck;
                    toAminoMsg(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenAckProtoMsg): _77.MsgConnectionOpenAck;
                    toProto(message: _77.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _77.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_77.MsgConnectionOpenAckResponse>): _77.MsgConnectionOpenAckResponse;
                    fromAmino(_: _77.MsgConnectionOpenAckResponseAmino): _77.MsgConnectionOpenAckResponse;
                    toAmino(_: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenAckResponseAminoMsg): _77.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenAckResponseProtoMsg): _77.MsgConnectionOpenAckResponse;
                    toProto(message: _77.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _77.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_77.MsgConnectionOpenConfirm>): _77.MsgConnectionOpenConfirm;
                    fromAmino(object: _77.MsgConnectionOpenConfirmAmino): _77.MsgConnectionOpenConfirm;
                    toAmino(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenConfirmAminoMsg): _77.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenConfirmProtoMsg): _77.MsgConnectionOpenConfirm;
                    toProto(message: _77.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _77.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_77.MsgConnectionOpenConfirmResponse>): _77.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _77.MsgConnectionOpenConfirmResponseAmino): _77.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenConfirmResponseAminoMsg): _77.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenConfirmResponseProtoMsg): _77.MsgConnectionOpenConfirmResponse;
                    toProto(message: _77.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionRequest;
                    fromPartial(object: Partial<_76.QueryConnectionRequest>): _76.QueryConnectionRequest;
                    fromAmino(object: _76.QueryConnectionRequestAmino): _76.QueryConnectionRequest;
                    toAmino(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionRequestAminoMsg): _76.QueryConnectionRequest;
                    toAminoMsg(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionRequestProtoMsg): _76.QueryConnectionRequest;
                    toProto(message: _76.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionResponse;
                    fromPartial(object: Partial<_76.QueryConnectionResponse>): _76.QueryConnectionResponse;
                    fromAmino(object: _76.QueryConnectionResponseAmino): _76.QueryConnectionResponse;
                    toAmino(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionResponseAminoMsg): _76.QueryConnectionResponse;
                    toAminoMsg(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionResponseProtoMsg): _76.QueryConnectionResponse;
                    toProto(message: _76.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionsRequest;
                    fromPartial(object: Partial<_76.QueryConnectionsRequest>): _76.QueryConnectionsRequest;
                    fromAmino(object: _76.QueryConnectionsRequestAmino): _76.QueryConnectionsRequest;
                    toAmino(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionsRequestAminoMsg): _76.QueryConnectionsRequest;
                    toAminoMsg(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionsRequestProtoMsg): _76.QueryConnectionsRequest;
                    toProto(message: _76.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionsResponse;
                    fromPartial(object: Partial<_76.QueryConnectionsResponse>): _76.QueryConnectionsResponse;
                    fromAmino(object: _76.QueryConnectionsResponseAmino): _76.QueryConnectionsResponse;
                    toAmino(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionsResponseAminoMsg): _76.QueryConnectionsResponse;
                    toAminoMsg(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionsResponseProtoMsg): _76.QueryConnectionsResponse;
                    toProto(message: _76.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_76.QueryClientConnectionsRequest>): _76.QueryClientConnectionsRequest;
                    fromAmino(object: _76.QueryClientConnectionsRequestAmino): _76.QueryClientConnectionsRequest;
                    toAmino(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _76.QueryClientConnectionsRequestAminoMsg): _76.QueryClientConnectionsRequest;
                    toAminoMsg(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryClientConnectionsRequestProtoMsg): _76.QueryClientConnectionsRequest;
                    toProto(message: _76.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_76.QueryClientConnectionsResponse>): _76.QueryClientConnectionsResponse;
                    fromAmino(object: _76.QueryClientConnectionsResponseAmino): _76.QueryClientConnectionsResponse;
                    toAmino(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _76.QueryClientConnectionsResponseAminoMsg): _76.QueryClientConnectionsResponse;
                    toAminoMsg(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryClientConnectionsResponseProtoMsg): _76.QueryClientConnectionsResponse;
                    toProto(message: _76.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_76.QueryConnectionClientStateRequest>): _76.QueryConnectionClientStateRequest;
                    fromAmino(object: _76.QueryConnectionClientStateRequestAmino): _76.QueryConnectionClientStateRequest;
                    toAmino(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionClientStateRequestAminoMsg): _76.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionClientStateRequestProtoMsg): _76.QueryConnectionClientStateRequest;
                    toProto(message: _76.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_76.QueryConnectionClientStateResponse>): _76.QueryConnectionClientStateResponse;
                    fromAmino(object: _76.QueryConnectionClientStateResponseAmino): _76.QueryConnectionClientStateResponse;
                    toAmino(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionClientStateResponseAminoMsg): _76.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionClientStateResponseProtoMsg): _76.QueryConnectionClientStateResponse;
                    toProto(message: _76.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_76.QueryConnectionConsensusStateRequest>): _76.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _76.QueryConnectionConsensusStateRequestAmino): _76.QueryConnectionConsensusStateRequest;
                    toAmino(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionConsensusStateRequestAminoMsg): _76.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionConsensusStateRequestProtoMsg): _76.QueryConnectionConsensusStateRequest;
                    toProto(message: _76.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_76.QueryConnectionConsensusStateResponse>): _76.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _76.QueryConnectionConsensusStateResponseAmino): _76.QueryConnectionConsensusStateResponse;
                    toAmino(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionConsensusStateResponseAminoMsg): _76.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionConsensusStateResponseProtoMsg): _76.QueryConnectionConsensusStateResponse;
                    toProto(message: _76.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _76.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_76.QueryConnectionParamsRequest>): _76.QueryConnectionParamsRequest;
                    fromAmino(_: _76.QueryConnectionParamsRequestAmino): _76.QueryConnectionParamsRequest;
                    toAmino(_: _76.QueryConnectionParamsRequest): _76.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionParamsRequestAminoMsg): _76.QueryConnectionParamsRequest;
                    toAminoMsg(message: _76.QueryConnectionParamsRequest): _76.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionParamsRequestProtoMsg): _76.QueryConnectionParamsRequest;
                    toProto(message: _76.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionParamsRequest): _76.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _76.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_76.QueryConnectionParamsResponse>): _76.QueryConnectionParamsResponse;
                    fromAmino(object: _76.QueryConnectionParamsResponseAmino): _76.QueryConnectionParamsResponse;
                    toAmino(message: _76.QueryConnectionParamsResponse): _76.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionParamsResponseAminoMsg): _76.QueryConnectionParamsResponse;
                    toAminoMsg(message: _76.QueryConnectionParamsResponse): _76.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionParamsResponseProtoMsg): _76.QueryConnectionParamsResponse;
                    toProto(message: _76.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionParamsResponse): _76.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.GenesisState;
                    fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                    fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                    toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                    fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                    toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                    fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                    toProto(message: _75.GenesisState): Uint8Array;
                    toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _74.State;
                stateToJSON(object: _74.State): string;
                State: typeof _74.State;
                StateSDKType: typeof _74.State;
                StateAmino: typeof _74.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _74.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ConnectionEnd;
                    fromPartial(object: Partial<_74.ConnectionEnd>): _74.ConnectionEnd;
                    fromAmino(object: _74.ConnectionEndAmino): _74.ConnectionEnd;
                    toAmino(message: _74.ConnectionEnd): _74.ConnectionEndAmino;
                    fromAminoMsg(object: _74.ConnectionEndAminoMsg): _74.ConnectionEnd;
                    toAminoMsg(message: _74.ConnectionEnd): _74.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _74.ConnectionEndProtoMsg): _74.ConnectionEnd;
                    toProto(message: _74.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _74.ConnectionEnd): _74.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _74.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.IdentifiedConnection;
                    fromPartial(object: Partial<_74.IdentifiedConnection>): _74.IdentifiedConnection;
                    fromAmino(object: _74.IdentifiedConnectionAmino): _74.IdentifiedConnection;
                    toAmino(message: _74.IdentifiedConnection): _74.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _74.IdentifiedConnectionAminoMsg): _74.IdentifiedConnection;
                    toAminoMsg(message: _74.IdentifiedConnection): _74.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _74.IdentifiedConnectionProtoMsg): _74.IdentifiedConnection;
                    toProto(message: _74.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _74.IdentifiedConnection): _74.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _74.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Counterparty;
                    fromPartial(object: Partial<_74.Counterparty>): _74.Counterparty;
                    fromAmino(object: _74.CounterpartyAmino): _74.Counterparty;
                    toAmino(message: _74.Counterparty): _74.CounterpartyAmino;
                    fromAminoMsg(object: _74.CounterpartyAminoMsg): _74.Counterparty;
                    toAminoMsg(message: _74.Counterparty): _74.CounterpartyAminoMsg;
                    fromProtoMsg(message: _74.CounterpartyProtoMsg): _74.Counterparty;
                    toProto(message: _74.Counterparty): Uint8Array;
                    toProtoMsg(message: _74.Counterparty): _74.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _74.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ClientPaths;
                    fromPartial(object: Partial<_74.ClientPaths>): _74.ClientPaths;
                    fromAmino(object: _74.ClientPathsAmino): _74.ClientPaths;
                    toAmino(message: _74.ClientPaths): _74.ClientPathsAmino;
                    fromAminoMsg(object: _74.ClientPathsAminoMsg): _74.ClientPaths;
                    toAminoMsg(message: _74.ClientPaths): _74.ClientPathsAminoMsg;
                    fromProtoMsg(message: _74.ClientPathsProtoMsg): _74.ClientPaths;
                    toProto(message: _74.ClientPaths): Uint8Array;
                    toProtoMsg(message: _74.ClientPaths): _74.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _74.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ConnectionPaths;
                    fromPartial(object: Partial<_74.ConnectionPaths>): _74.ConnectionPaths;
                    fromAmino(object: _74.ConnectionPathsAmino): _74.ConnectionPaths;
                    toAmino(message: _74.ConnectionPaths): _74.ConnectionPathsAmino;
                    fromAminoMsg(object: _74.ConnectionPathsAminoMsg): _74.ConnectionPaths;
                    toAminoMsg(message: _74.ConnectionPaths): _74.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _74.ConnectionPathsProtoMsg): _74.ConnectionPaths;
                    toProto(message: _74.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _74.ConnectionPaths): _74.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _74.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Version;
                    fromPartial(object: Partial<_74.Version>): _74.Version;
                    fromAmino(object: _74.VersionAmino): _74.Version;
                    toAmino(message: _74.Version): _74.VersionAmino;
                    fromAminoMsg(object: _74.VersionAminoMsg): _74.Version;
                    toAminoMsg(message: _74.Version): _74.VersionAminoMsg;
                    fromProtoMsg(message: _74.VersionProtoMsg): _74.Version;
                    toProto(message: _74.Version): Uint8Array;
                    toProtoMsg(message: _74.Version): _74.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Params;
                    fromPartial(object: Partial<_74.Params>): _74.Params;
                    fromAmino(object: _74.ParamsAmino): _74.Params;
                    toAmino(message: _74.Params): _74.ParamsAmino;
                    fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                    toAminoMsg(message: _74.Params): _74.ParamsAminoMsg;
                    fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                    toProto(message: _74.Params): Uint8Array;
                    toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _78.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.ClientState;
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                    fromAmino(object: _78.ClientStateAmino): _78.ClientState;
                    toAmino(message: _78.ClientState): _78.ClientStateAmino;
                    fromAminoMsg(object: _78.ClientStateAminoMsg): _78.ClientState;
                    toAminoMsg(message: _78.ClientState): _78.ClientStateAminoMsg;
                    fromProtoMsg(message: _78.ClientStateProtoMsg): _78.ClientState;
                    toProto(message: _78.ClientState): Uint8Array;
                    toProtoMsg(message: _78.ClientState): _78.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _79.DataType;
                dataTypeToJSON(object: _79.DataType): string;
                DataType: typeof _79.DataType;
                DataTypeSDKType: typeof _79.DataType;
                DataTypeAmino: typeof _79.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _79.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ClientState;
                    fromPartial(object: Partial<_79.ClientState>): _79.ClientState;
                    fromAmino(object: _79.ClientStateAmino): _79.ClientState;
                    toAmino(message: _79.ClientState): _79.ClientStateAmino;
                    fromAminoMsg(object: _79.ClientStateAminoMsg): _79.ClientState;
                    toAminoMsg(message: _79.ClientState): _79.ClientStateAminoMsg;
                    fromProtoMsg(message: _79.ClientStateProtoMsg): _79.ClientState;
                    toProto(message: _79.ClientState): Uint8Array;
                    toProtoMsg(message: _79.ClientState): _79.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _79.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConsensusState;
                    fromPartial(object: Partial<_79.ConsensusState>): _79.ConsensusState;
                    fromAmino(object: _79.ConsensusStateAmino): _79.ConsensusState;
                    toAmino(message: _79.ConsensusState): _79.ConsensusStateAmino;
                    fromAminoMsg(object: _79.ConsensusStateAminoMsg): _79.ConsensusState;
                    toAminoMsg(message: _79.ConsensusState): _79.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _79.ConsensusStateProtoMsg): _79.ConsensusState;
                    toProto(message: _79.ConsensusState): Uint8Array;
                    toProtoMsg(message: _79.ConsensusState): _79.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _79.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Header;
                    fromPartial(object: Partial<_79.Header>): _79.Header;
                    fromAmino(object: _79.HeaderAmino): _79.Header;
                    toAmino(message: _79.Header): _79.HeaderAmino;
                    fromAminoMsg(object: _79.HeaderAminoMsg): _79.Header;
                    toAminoMsg(message: _79.Header): _79.HeaderAminoMsg;
                    fromProtoMsg(message: _79.HeaderProtoMsg): _79.Header;
                    toProto(message: _79.Header): Uint8Array;
                    toProtoMsg(message: _79.Header): _79.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _79.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Misbehaviour;
                    fromPartial(object: Partial<_79.Misbehaviour>): _79.Misbehaviour;
                    fromAmino(object: _79.MisbehaviourAmino): _79.Misbehaviour;
                    toAmino(message: _79.Misbehaviour): _79.MisbehaviourAmino;
                    fromAminoMsg(object: _79.MisbehaviourAminoMsg): _79.Misbehaviour;
                    toAminoMsg(message: _79.Misbehaviour): _79.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _79.MisbehaviourProtoMsg): _79.Misbehaviour;
                    toProto(message: _79.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _79.Misbehaviour): _79.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _79.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.SignatureAndData;
                    fromPartial(object: Partial<_79.SignatureAndData>): _79.SignatureAndData;
                    fromAmino(object: _79.SignatureAndDataAmino): _79.SignatureAndData;
                    toAmino(message: _79.SignatureAndData): _79.SignatureAndDataAmino;
                    fromAminoMsg(object: _79.SignatureAndDataAminoMsg): _79.SignatureAndData;
                    toAminoMsg(message: _79.SignatureAndData): _79.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _79.SignatureAndDataProtoMsg): _79.SignatureAndData;
                    toProto(message: _79.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _79.SignatureAndData): _79.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _79.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.TimestampedSignatureData;
                    fromPartial(object: Partial<_79.TimestampedSignatureData>): _79.TimestampedSignatureData;
                    fromAmino(object: _79.TimestampedSignatureDataAmino): _79.TimestampedSignatureData;
                    toAmino(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _79.TimestampedSignatureDataAminoMsg): _79.TimestampedSignatureData;
                    toAminoMsg(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _79.TimestampedSignatureDataProtoMsg): _79.TimestampedSignatureData;
                    toProto(message: _79.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _79.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.SignBytes;
                    fromPartial(object: Partial<_79.SignBytes>): _79.SignBytes;
                    fromAmino(object: _79.SignBytesAmino): _79.SignBytes;
                    toAmino(message: _79.SignBytes): _79.SignBytesAmino;
                    fromAminoMsg(object: _79.SignBytesAminoMsg): _79.SignBytes;
                    toAminoMsg(message: _79.SignBytes): _79.SignBytesAminoMsg;
                    fromProtoMsg(message: _79.SignBytesProtoMsg): _79.SignBytes;
                    toProto(message: _79.SignBytes): Uint8Array;
                    toProtoMsg(message: _79.SignBytes): _79.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _79.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.HeaderData;
                    fromPartial(object: Partial<_79.HeaderData>): _79.HeaderData;
                    fromAmino(object: _79.HeaderDataAmino): _79.HeaderData;
                    toAmino(message: _79.HeaderData): _79.HeaderDataAmino;
                    fromAminoMsg(object: _79.HeaderDataAminoMsg): _79.HeaderData;
                    toAminoMsg(message: _79.HeaderData): _79.HeaderDataAminoMsg;
                    fromProtoMsg(message: _79.HeaderDataProtoMsg): _79.HeaderData;
                    toProto(message: _79.HeaderData): Uint8Array;
                    toProtoMsg(message: _79.HeaderData): _79.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _79.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ClientStateData;
                    fromPartial(object: Partial<_79.ClientStateData>): _79.ClientStateData;
                    fromAmino(object: _79.ClientStateDataAmino): _79.ClientStateData;
                    toAmino(message: _79.ClientStateData): _79.ClientStateDataAmino;
                    fromAminoMsg(object: _79.ClientStateDataAminoMsg): _79.ClientStateData;
                    toAminoMsg(message: _79.ClientStateData): _79.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _79.ClientStateDataProtoMsg): _79.ClientStateData;
                    toProto(message: _79.ClientStateData): Uint8Array;
                    toProtoMsg(message: _79.ClientStateData): _79.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _79.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConsensusStateData;
                    fromPartial(object: Partial<_79.ConsensusStateData>): _79.ConsensusStateData;
                    fromAmino(object: _79.ConsensusStateDataAmino): _79.ConsensusStateData;
                    toAmino(message: _79.ConsensusStateData): _79.ConsensusStateDataAmino;
                    fromAminoMsg(object: _79.ConsensusStateDataAminoMsg): _79.ConsensusStateData;
                    toAminoMsg(message: _79.ConsensusStateData): _79.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _79.ConsensusStateDataProtoMsg): _79.ConsensusStateData;
                    toProto(message: _79.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _79.ConsensusStateData): _79.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _79.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConnectionStateData;
                    fromPartial(object: Partial<_79.ConnectionStateData>): _79.ConnectionStateData;
                    fromAmino(object: _79.ConnectionStateDataAmino): _79.ConnectionStateData;
                    toAmino(message: _79.ConnectionStateData): _79.ConnectionStateDataAmino;
                    fromAminoMsg(object: _79.ConnectionStateDataAminoMsg): _79.ConnectionStateData;
                    toAminoMsg(message: _79.ConnectionStateData): _79.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _79.ConnectionStateDataProtoMsg): _79.ConnectionStateData;
                    toProto(message: _79.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _79.ConnectionStateData): _79.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _79.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ChannelStateData;
                    fromPartial(object: Partial<_79.ChannelStateData>): _79.ChannelStateData;
                    fromAmino(object: _79.ChannelStateDataAmino): _79.ChannelStateData;
                    toAmino(message: _79.ChannelStateData): _79.ChannelStateDataAmino;
                    fromAminoMsg(object: _79.ChannelStateDataAminoMsg): _79.ChannelStateData;
                    toAminoMsg(message: _79.ChannelStateData): _79.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _79.ChannelStateDataProtoMsg): _79.ChannelStateData;
                    toProto(message: _79.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _79.ChannelStateData): _79.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _79.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketCommitmentData;
                    fromPartial(object: Partial<_79.PacketCommitmentData>): _79.PacketCommitmentData;
                    fromAmino(object: _79.PacketCommitmentDataAmino): _79.PacketCommitmentData;
                    toAmino(message: _79.PacketCommitmentData): _79.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _79.PacketCommitmentDataAminoMsg): _79.PacketCommitmentData;
                    toAminoMsg(message: _79.PacketCommitmentData): _79.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _79.PacketCommitmentDataProtoMsg): _79.PacketCommitmentData;
                    toProto(message: _79.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _79.PacketCommitmentData): _79.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _79.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketAcknowledgementData;
                    fromPartial(object: Partial<_79.PacketAcknowledgementData>): _79.PacketAcknowledgementData;
                    fromAmino(object: _79.PacketAcknowledgementDataAmino): _79.PacketAcknowledgementData;
                    toAmino(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _79.PacketAcknowledgementDataAminoMsg): _79.PacketAcknowledgementData;
                    toAminoMsg(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _79.PacketAcknowledgementDataProtoMsg): _79.PacketAcknowledgementData;
                    toProto(message: _79.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _79.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_79.PacketReceiptAbsenceData>): _79.PacketReceiptAbsenceData;
                    fromAmino(object: _79.PacketReceiptAbsenceDataAmino): _79.PacketReceiptAbsenceData;
                    toAmino(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _79.PacketReceiptAbsenceDataAminoMsg): _79.PacketReceiptAbsenceData;
                    toAminoMsg(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _79.PacketReceiptAbsenceDataProtoMsg): _79.PacketReceiptAbsenceData;
                    toProto(message: _79.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _79.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.NextSequenceRecvData;
                    fromPartial(object: Partial<_79.NextSequenceRecvData>): _79.NextSequenceRecvData;
                    fromAmino(object: _79.NextSequenceRecvDataAmino): _79.NextSequenceRecvData;
                    toAmino(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _79.NextSequenceRecvDataAminoMsg): _79.NextSequenceRecvData;
                    toAminoMsg(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _79.NextSequenceRecvDataProtoMsg): _79.NextSequenceRecvData;
                    toProto(message: _79.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _80.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ClientState;
                    fromPartial(object: Partial<_80.ClientState>): _80.ClientState;
                    fromAmino(object: _80.ClientStateAmino): _80.ClientState;
                    toAmino(message: _80.ClientState): _80.ClientStateAmino;
                    fromAminoMsg(object: _80.ClientStateAminoMsg): _80.ClientState;
                    toAminoMsg(message: _80.ClientState): _80.ClientStateAminoMsg;
                    fromProtoMsg(message: _80.ClientStateProtoMsg): _80.ClientState;
                    toProto(message: _80.ClientState): Uint8Array;
                    toProtoMsg(message: _80.ClientState): _80.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _80.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ConsensusState;
                    fromPartial(object: Partial<_80.ConsensusState>): _80.ConsensusState;
                    fromAmino(object: _80.ConsensusStateAmino): _80.ConsensusState;
                    toAmino(message: _80.ConsensusState): _80.ConsensusStateAmino;
                    fromAminoMsg(object: _80.ConsensusStateAminoMsg): _80.ConsensusState;
                    toAminoMsg(message: _80.ConsensusState): _80.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _80.ConsensusStateProtoMsg): _80.ConsensusState;
                    toProto(message: _80.ConsensusState): Uint8Array;
                    toProtoMsg(message: _80.ConsensusState): _80.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _80.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Header;
                    fromPartial(object: Partial<_80.Header>): _80.Header;
                    fromAmino(object: _80.HeaderAmino): _80.Header;
                    toAmino(message: _80.Header): _80.HeaderAmino;
                    fromAminoMsg(object: _80.HeaderAminoMsg): _80.Header;
                    toAminoMsg(message: _80.Header): _80.HeaderAminoMsg;
                    fromProtoMsg(message: _80.HeaderProtoMsg): _80.Header;
                    toProto(message: _80.Header): Uint8Array;
                    toProtoMsg(message: _80.Header): _80.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _80.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Misbehaviour;
                    fromPartial(object: Partial<_80.Misbehaviour>): _80.Misbehaviour;
                    fromAmino(object: _80.MisbehaviourAmino): _80.Misbehaviour;
                    toAmino(message: _80.Misbehaviour): _80.MisbehaviourAmino;
                    fromAminoMsg(object: _80.MisbehaviourAminoMsg): _80.Misbehaviour;
                    toAminoMsg(message: _80.Misbehaviour): _80.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _80.MisbehaviourProtoMsg): _80.Misbehaviour;
                    toProto(message: _80.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _80.Misbehaviour): _80.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _80.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.SignatureAndData;
                    fromPartial(object: Partial<_80.SignatureAndData>): _80.SignatureAndData;
                    fromAmino(object: _80.SignatureAndDataAmino): _80.SignatureAndData;
                    toAmino(message: _80.SignatureAndData): _80.SignatureAndDataAmino;
                    fromAminoMsg(object: _80.SignatureAndDataAminoMsg): _80.SignatureAndData;
                    toAminoMsg(message: _80.SignatureAndData): _80.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _80.SignatureAndDataProtoMsg): _80.SignatureAndData;
                    toProto(message: _80.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _80.SignatureAndData): _80.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _80.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.TimestampedSignatureData;
                    fromPartial(object: Partial<_80.TimestampedSignatureData>): _80.TimestampedSignatureData;
                    fromAmino(object: _80.TimestampedSignatureDataAmino): _80.TimestampedSignatureData;
                    toAmino(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _80.TimestampedSignatureDataAminoMsg): _80.TimestampedSignatureData;
                    toAminoMsg(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _80.TimestampedSignatureDataProtoMsg): _80.TimestampedSignatureData;
                    toProto(message: _80.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _80.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.SignBytes;
                    fromPartial(object: Partial<_80.SignBytes>): _80.SignBytes;
                    fromAmino(object: _80.SignBytesAmino): _80.SignBytes;
                    toAmino(message: _80.SignBytes): _80.SignBytesAmino;
                    fromAminoMsg(object: _80.SignBytesAminoMsg): _80.SignBytes;
                    toAminoMsg(message: _80.SignBytes): _80.SignBytesAminoMsg;
                    fromProtoMsg(message: _80.SignBytesProtoMsg): _80.SignBytes;
                    toProto(message: _80.SignBytes): Uint8Array;
                    toProtoMsg(message: _80.SignBytes): _80.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _80.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.HeaderData;
                    fromPartial(object: Partial<_80.HeaderData>): _80.HeaderData;
                    fromAmino(object: _80.HeaderDataAmino): _80.HeaderData;
                    toAmino(message: _80.HeaderData): _80.HeaderDataAmino;
                    fromAminoMsg(object: _80.HeaderDataAminoMsg): _80.HeaderData;
                    toAminoMsg(message: _80.HeaderData): _80.HeaderDataAminoMsg;
                    fromProtoMsg(message: _80.HeaderDataProtoMsg): _80.HeaderData;
                    toProto(message: _80.HeaderData): Uint8Array;
                    toProtoMsg(message: _80.HeaderData): _80.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _81.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ClientState;
                    fromPartial(object: Partial<_81.ClientState>): _81.ClientState;
                    fromAmino(object: _81.ClientStateAmino): _81.ClientState;
                    toAmino(message: _81.ClientState): _81.ClientStateAmino;
                    fromAminoMsg(object: _81.ClientStateAminoMsg): _81.ClientState;
                    toAminoMsg(message: _81.ClientState): _81.ClientStateAminoMsg;
                    fromProtoMsg(message: _81.ClientStateProtoMsg): _81.ClientState;
                    toProto(message: _81.ClientState): Uint8Array;
                    toProtoMsg(message: _81.ClientState): _81.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _81.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ConsensusState;
                    fromPartial(object: Partial<_81.ConsensusState>): _81.ConsensusState;
                    fromAmino(object: _81.ConsensusStateAmino): _81.ConsensusState;
                    toAmino(message: _81.ConsensusState): _81.ConsensusStateAmino;
                    fromAminoMsg(object: _81.ConsensusStateAminoMsg): _81.ConsensusState;
                    toAminoMsg(message: _81.ConsensusState): _81.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _81.ConsensusStateProtoMsg): _81.ConsensusState;
                    toProto(message: _81.ConsensusState): Uint8Array;
                    toProtoMsg(message: _81.ConsensusState): _81.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _81.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Misbehaviour;
                    fromPartial(object: Partial<_81.Misbehaviour>): _81.Misbehaviour;
                    fromAmino(object: _81.MisbehaviourAmino): _81.Misbehaviour;
                    toAmino(message: _81.Misbehaviour): _81.MisbehaviourAmino;
                    fromAminoMsg(object: _81.MisbehaviourAminoMsg): _81.Misbehaviour;
                    toAminoMsg(message: _81.Misbehaviour): _81.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _81.MisbehaviourProtoMsg): _81.Misbehaviour;
                    toProto(message: _81.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _81.Misbehaviour): _81.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _81.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Header;
                    fromPartial(object: Partial<_81.Header>): _81.Header;
                    fromAmino(object: _81.HeaderAmino): _81.Header;
                    toAmino(message: _81.Header): _81.HeaderAmino;
                    fromAminoMsg(object: _81.HeaderAminoMsg): _81.Header;
                    toAminoMsg(message: _81.Header): _81.HeaderAminoMsg;
                    fromProtoMsg(message: _81.HeaderProtoMsg): _81.Header;
                    toProto(message: _81.Header): Uint8Array;
                    toProtoMsg(message: _81.Header): _81.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _81.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Fraction;
                    fromPartial(object: Partial<_81.Fraction>): _81.Fraction;
                    fromAmino(object: _81.FractionAmino): _81.Fraction;
                    toAmino(message: _81.Fraction): _81.FractionAmino;
                    fromAminoMsg(object: _81.FractionAminoMsg): _81.Fraction;
                    toAminoMsg(message: _81.Fraction): _81.FractionAminoMsg;
                    fromProtoMsg(message: _81.FractionProtoMsg): _81.Fraction;
                    toProto(message: _81.Fraction): Uint8Array;
                    toProtoMsg(message: _81.Fraction): _81.FractionProtoMsg;
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
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: _249.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _250.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _251.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _252.MsgClientImpl;
                    };
                    client: {
                        v1: _253.MsgClientImpl;
                    };
                    connection: {
                        v1: _254.MsgClientImpl;
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
                            incentivizedPackets(request: _48.QueryIncentivizedPacketsRequest): Promise<_48.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _48.QueryIncentivizedPacketRequest): Promise<_48.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _48.QueryIncentivizedPacketsForChannelRequest): Promise<_48.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _48.QueryTotalRecvFeesRequest): Promise<_48.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _48.QueryTotalAckFeesRequest): Promise<_48.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _48.QueryTotalTimeoutFeesRequest): Promise<_48.QueryTotalTimeoutFeesResponse>;
                            payee(request: _48.QueryPayeeRequest): Promise<_48.QueryPayeeResponse>;
                            counterpartyPayee(request: _48.QueryCounterpartyPayeeRequest): Promise<_48.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _48.QueryFeeEnabledChannelsRequest): Promise<_48.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _48.QueryFeeEnabledChannelRequest): Promise<_48.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _51.QueryInterchainAccountRequest): Promise<_51.QueryInterchainAccountResponse>;
                                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                            denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                            params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                            denomHash(request: _61.QueryDenomHashRequest): Promise<_61.QueryDenomHashResponse>;
                            escrowAddress(request: _61.QueryEscrowAddressRequest): Promise<_61.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                            channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                            connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                            channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                            clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                            consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                            consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _71.QueryConsensusStateHeightsRequest): Promise<_71.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                            clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                            upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                            connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                            clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                            connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _76.QueryConnectionParamsRequest): Promise<_76.QueryConnectionParamsResponse>;
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
                        v1: _235.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _236.LCDQueryClient;
                        };
                        host: {
                            v1: _237.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _238.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _239.LCDQueryClient;
                    };
                    client: {
                        v1: _240.LCDQueryClient;
                    };
                    connection: {
                        v1: _241.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
