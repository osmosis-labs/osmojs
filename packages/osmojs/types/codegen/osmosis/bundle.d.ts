import * as _104 from "./accum/v1beta1/accum";
import * as _105 from "./concentrated-liquidity/params";
import * as _106 from "./cosmwasmpool/v1beta1/genesis";
import * as _107 from "./cosmwasmpool/v1beta1/model/pool";
import * as _108 from "./cosmwasmpool/v1beta1/model/tx";
import * as _109 from "./cosmwasmpool/v1beta1/query";
import * as _111 from "./downtime-detector/v1beta1/downtime_duration";
import * as _112 from "./downtime-detector/v1beta1/genesis";
import * as _113 from "./downtime-detector/v1beta1/query";
import * as _114 from "./epochs/genesis";
import * as _115 from "./epochs/query";
import * as _116 from "./gamm/pool-models/balancer/balancerPool";
import * as _117 from "./gamm/v1beta1/genesis";
import * as _118 from "./gamm/v1beta1/gov";
import * as _119 from "./gamm/v1beta1/query";
import * as _120 from "./gamm/v1beta1/tx";
import * as _121 from "./gamm/pool-models/balancer/tx/tx";
import * as _122 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _123 from "./gamm/pool-models/stableswap/tx";
import * as _124 from "./gamm/v2/query";
import * as _125 from "./ibc-rate-limit/v1beta1/genesis";
import * as _126 from "./ibc-rate-limit/v1beta1/params";
import * as _127 from "./ibc-rate-limit/v1beta1/query";
import * as _128 from "./incentives/gauge";
import * as _129 from "./incentives/genesis";
import * as _130 from "./incentives/params";
import * as _131 from "./incentives/query";
import * as _132 from "./incentives/tx";
import * as _133 from "./lockup/genesis";
import * as _134 from "./lockup/lock";
import * as _135 from "./lockup/params";
import * as _136 from "./lockup/query";
import * as _137 from "./lockup/tx";
import * as _138 from "./mint/v1beta1/genesis";
import * as _139 from "./mint/v1beta1/mint";
import * as _140 from "./mint/v1beta1/query";
import * as _141 from "./pool-incentives/v1beta1/genesis";
import * as _142 from "./pool-incentives/v1beta1/gov";
import * as _143 from "./pool-incentives/v1beta1/incentives";
import * as _144 from "./pool-incentives/v1beta1/query";
import * as _145 from "./poolmanager/v1beta1/genesis";
import * as _146 from "./poolmanager/v1beta1/module_route";
import * as _147 from "./poolmanager/v1beta1/query";
import * as _148 from "./poolmanager/v1beta1/swap_route";
import * as _149 from "./poolmanager/v1beta1/tx";
import * as _150 from "./protorev/v1beta1/genesis";
import * as _151 from "./protorev/v1beta1/gov";
import * as _152 from "./protorev/v1beta1/params";
import * as _153 from "./protorev/v1beta1/protorev";
import * as _154 from "./protorev/v1beta1/query";
import * as _155 from "./protorev/v1beta1/tx";
import * as _156 from "./sumtree/v1beta1/tree";
import * as _157 from "./superfluid/genesis";
import * as _158 from "./superfluid/params";
import * as _159 from "./superfluid/query";
import * as _160 from "./superfluid/superfluid";
import * as _161 from "./superfluid/tx";
import * as _162 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _163 from "./tokenfactory/v1beta1/genesis";
import * as _164 from "./tokenfactory/v1beta1/params";
import * as _165 from "./tokenfactory/v1beta1/query";
import * as _166 from "./tokenfactory/v1beta1/tx";
import * as _167 from "./twap/v1beta1/genesis";
import * as _168 from "./twap/v1beta1/query";
import * as _169 from "./twap/v1beta1/twap_record";
import * as _170 from "./txfees/v1beta1/feetoken";
import * as _171 from "./txfees/v1beta1/genesis";
import * as _172 from "./txfees/v1beta1/gov";
import * as _173 from "./txfees/v1beta1/query";
import * as _174 from "./valset-pref/v1beta1/query";
import * as _175 from "./valset-pref/v1beta1/state";
import * as _176 from "./valset-pref/v1beta1/tx";
import * as _284 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _285 from "./downtime-detector/v1beta1/query.lcd";
import * as _286 from "./epochs/query.lcd";
import * as _287 from "./gamm/v1beta1/query.lcd";
import * as _288 from "./gamm/v2/query.lcd";
import * as _289 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _290 from "./incentives/query.lcd";
import * as _291 from "./lockup/query.lcd";
import * as _292 from "./mint/v1beta1/query.lcd";
import * as _293 from "./pool-incentives/v1beta1/query.lcd";
import * as _294 from "./poolmanager/v1beta1/query.lcd";
import * as _295 from "./protorev/v1beta1/query.lcd";
import * as _296 from "./superfluid/query.lcd";
import * as _297 from "./tokenfactory/v1beta1/query.lcd";
import * as _298 from "./twap/v1beta1/query.lcd";
import * as _299 from "./txfees/v1beta1/query.lcd";
import * as _300 from "./valset-pref/v1beta1/query.lcd";
import * as _302 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _303 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _304 from "./epochs/query.rpc.Query";
import * as _305 from "./gamm/v1beta1/query.rpc.Query";
import * as _306 from "./gamm/v2/query.rpc.Query";
import * as _307 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _308 from "./incentives/query.rpc.Query";
import * as _309 from "./lockup/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _312 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _313 from "./protorev/v1beta1/query.rpc.Query";
import * as _314 from "./superfluid/query.rpc.Query";
import * as _315 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _316 from "./twap/v1beta1/query.rpc.Query";
import * as _317 from "./txfees/v1beta1/query.rpc.Query";
import * as _318 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _320 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _321 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _322 from "./gamm/v1beta1/tx.rpc.msg";
import * as _323 from "./incentives/tx.rpc.msg";
import * as _324 from "./lockup/tx.rpc.msg";
import * as _325 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _326 from "./protorev/v1beta1/tx.rpc.msg";
import * as _327 from "./superfluid/tx.rpc.msg";
import * as _328 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _329 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                typeUrl: string;
                encode(message: _104.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.AccumulatorContent;
                fromPartial(object: Partial<_104.AccumulatorContent>): _104.AccumulatorContent;
                fromAmino(object: _104.AccumulatorContentAmino): _104.AccumulatorContent;
                toAmino(message: _104.AccumulatorContent): _104.AccumulatorContentAmino;
                fromAminoMsg(object: _104.AccumulatorContentAminoMsg): _104.AccumulatorContent;
                toAminoMsg(message: _104.AccumulatorContent): _104.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _104.AccumulatorContentProtoMsg): _104.AccumulatorContent;
                toProto(message: _104.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _104.AccumulatorContent): _104.AccumulatorContentProtoMsg;
            };
            Options: {
                typeUrl: string;
                encode(_: _104.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Options;
                fromPartial(_: Partial<_104.Options>): _104.Options;
                fromAmino(_: _104.OptionsAmino): _104.Options;
                toAmino(_: _104.Options): _104.OptionsAmino;
                fromAminoMsg(object: _104.OptionsAminoMsg): _104.Options;
                toAminoMsg(message: _104.Options): _104.OptionsAminoMsg;
                fromProtoMsg(message: _104.OptionsProtoMsg): _104.Options;
                toProto(message: _104.Options): Uint8Array;
                toProtoMsg(message: _104.Options): _104.OptionsProtoMsg;
            };
            Record: {
                typeUrl: string;
                encode(message: _104.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Record;
                fromPartial(object: Partial<_104.Record>): _104.Record;
                fromAmino(object: _104.RecordAmino): _104.Record;
                toAmino(message: _104.Record): _104.RecordAmino;
                fromAminoMsg(object: _104.RecordAminoMsg): _104.Record;
                toAminoMsg(message: _104.Record): _104.RecordAminoMsg;
                fromProtoMsg(message: _104.RecordProtoMsg): _104.Record;
                toProto(message: _104.Record): Uint8Array;
                toProtoMsg(message: _104.Record): _104.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        Params: {
            typeUrl: string;
            encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
            fromPartial(object: Partial<_105.Params>): _105.Params;
            fromAmino(object: _105.ParamsAmino): _105.Params;
            toAmino(message: _105.Params): _105.ParamsAmino;
            fromAminoMsg(object: _105.ParamsAminoMsg): _105.Params;
            toAminoMsg(message: _105.Params): _105.ParamsAminoMsg;
            fromProtoMsg(message: _105.ParamsProtoMsg): _105.Params;
            toProto(message: _105.Params): Uint8Array;
            toProtoMsg(message: _105.Params): _105.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _109.ParamsRequest): Promise<_109.ParamsResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _109.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ParamsRequest;
                fromPartial(_: Partial<_109.ParamsRequest>): _109.ParamsRequest;
                fromAmino(_: _109.ParamsRequestAmino): _109.ParamsRequest;
                toAmino(_: _109.ParamsRequest): _109.ParamsRequestAmino;
                fromAminoMsg(object: _109.ParamsRequestAminoMsg): _109.ParamsRequest;
                toAminoMsg(message: _109.ParamsRequest): _109.ParamsRequestAminoMsg;
                fromProtoMsg(message: _109.ParamsRequestProtoMsg): _109.ParamsRequest;
                toProto(message: _109.ParamsRequest): Uint8Array;
                toProtoMsg(message: _109.ParamsRequest): _109.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _109.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ParamsResponse;
                fromPartial(object: Partial<_109.ParamsResponse>): _109.ParamsResponse;
                fromAmino(object: _109.ParamsResponseAmino): _109.ParamsResponse;
                toAmino(message: _109.ParamsResponse): _109.ParamsResponseAmino;
                fromAminoMsg(object: _109.ParamsResponseAminoMsg): _109.ParamsResponse;
                toAminoMsg(message: _109.ParamsResponse): _109.ParamsResponseAminoMsg;
                fromProtoMsg(message: _109.ParamsResponseProtoMsg): _109.ParamsResponse;
                toProto(message: _109.ParamsResponse): Uint8Array;
                toProtoMsg(message: _109.ParamsResponse): _109.ParamsResponseProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                typeUrl: string;
                encode(message: _108.MsgCreateCosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_108.MsgCreateCosmWasmPool>): _108.MsgCreateCosmWasmPool;
                fromAmino(object: _108.MsgCreateCosmWasmPoolAmino): _108.MsgCreateCosmWasmPool;
                toAmino(message: _108.MsgCreateCosmWasmPool): _108.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _108.MsgCreateCosmWasmPoolAminoMsg): _108.MsgCreateCosmWasmPool;
                toAminoMsg(message: _108.MsgCreateCosmWasmPool): _108.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _108.MsgCreateCosmWasmPoolProtoMsg): _108.MsgCreateCosmWasmPool;
                toProto(message: _108.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _108.MsgCreateCosmWasmPool): _108.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                typeUrl: string;
                encode(message: _108.MsgCreateCosmWasmPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_108.MsgCreateCosmWasmPoolResponse>): _108.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _108.MsgCreateCosmWasmPoolResponseAmino): _108.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _108.MsgCreateCosmWasmPoolResponse): _108.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _108.MsgCreateCosmWasmPoolResponseAminoMsg): _108.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _108.MsgCreateCosmWasmPoolResponse): _108.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _108.MsgCreateCosmWasmPoolResponseProtoMsg): _108.MsgCreateCosmWasmPoolResponse;
                toProto(message: _108.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _108.MsgCreateCosmWasmPoolResponse): _108.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            CosmWasmPool: {
                typeUrl: string;
                encode(message: _107.CosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.CosmWasmPool;
                fromPartial(object: Partial<_107.CosmWasmPool>): _107.CosmWasmPool;
                fromAmino(object: _107.CosmWasmPoolAmino): _107.CosmWasmPool;
                toAmino(message: _107.CosmWasmPool): _107.CosmWasmPoolAmino;
                fromAminoMsg(object: _107.CosmWasmPoolAminoMsg): _107.CosmWasmPool;
                toAminoMsg(message: _107.CosmWasmPool): _107.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _107.CosmWasmPoolProtoMsg): _107.CosmWasmPool;
                toProto(message: _107.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _107.CosmWasmPool): _107.CosmWasmPoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(_: Partial<_106.Params>): _106.Params;
                fromAmino(_: _106.ParamsAmino): _106.Params;
                toAmino(_: _106.Params): _106.ParamsAmino;
                fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                toProto(message: _106.Params): Uint8Array;
                toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _113.RecoveredSinceDowntimeOfLengthRequest): Promise<_113.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _113.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_113.RecoveredSinceDowntimeOfLengthRequest>): _113.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _113.RecoveredSinceDowntimeOfLengthRequestAmino): _113.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _113.RecoveredSinceDowntimeOfLengthRequest): _113.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _113.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _113.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _113.RecoveredSinceDowntimeOfLengthRequest): _113.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _113.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _113.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _113.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _113.RecoveredSinceDowntimeOfLengthRequest): _113.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _113.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_113.RecoveredSinceDowntimeOfLengthResponse>): _113.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _113.RecoveredSinceDowntimeOfLengthResponseAmino): _113.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _113.RecoveredSinceDowntimeOfLengthResponse): _113.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _113.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _113.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _113.RecoveredSinceDowntimeOfLengthResponse): _113.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _113.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _113.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _113.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _113.RecoveredSinceDowntimeOfLengthResponse): _113.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _112.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisDowntimeEntry;
                fromPartial(object: Partial<_112.GenesisDowntimeEntry>): _112.GenesisDowntimeEntry;
                fromAmino(object: _112.GenesisDowntimeEntryAmino): _112.GenesisDowntimeEntry;
                toAmino(message: _112.GenesisDowntimeEntry): _112.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _112.GenesisDowntimeEntryAminoMsg): _112.GenesisDowntimeEntry;
                toAminoMsg(message: _112.GenesisDowntimeEntry): _112.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _112.GenesisDowntimeEntryProtoMsg): _112.GenesisDowntimeEntry;
                toProto(message: _112.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _112.GenesisDowntimeEntry): _112.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _111.Downtime;
            downtimeToJSON(object: _111.Downtime): string;
            Downtime: typeof _111.Downtime;
            DowntimeSDKType: typeof _111.Downtime;
            DowntimeAmino: typeof _111.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _115.QueryEpochsInfoRequest): Promise<_115.QueryEpochsInfoResponse>;
                currentEpoch(request: _115.QueryCurrentEpochRequest): Promise<_115.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _115.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_115.QueryEpochsInfoRequest>): _115.QueryEpochsInfoRequest;
                fromAmino(_: _115.QueryEpochsInfoRequestAmino): _115.QueryEpochsInfoRequest;
                toAmino(_: _115.QueryEpochsInfoRequest): _115.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _115.QueryEpochsInfoRequestAminoMsg): _115.QueryEpochsInfoRequest;
                toAminoMsg(message: _115.QueryEpochsInfoRequest): _115.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _115.QueryEpochsInfoRequestProtoMsg): _115.QueryEpochsInfoRequest;
                toProto(message: _115.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _115.QueryEpochsInfoRequest): _115.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _115.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_115.QueryEpochsInfoResponse>): _115.QueryEpochsInfoResponse;
                fromAmino(object: _115.QueryEpochsInfoResponseAmino): _115.QueryEpochsInfoResponse;
                toAmino(message: _115.QueryEpochsInfoResponse): _115.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _115.QueryEpochsInfoResponseAminoMsg): _115.QueryEpochsInfoResponse;
                toAminoMsg(message: _115.QueryEpochsInfoResponse): _115.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _115.QueryEpochsInfoResponseProtoMsg): _115.QueryEpochsInfoResponse;
                toProto(message: _115.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _115.QueryEpochsInfoResponse): _115.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _115.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_115.QueryCurrentEpochRequest>): _115.QueryCurrentEpochRequest;
                fromAmino(object: _115.QueryCurrentEpochRequestAmino): _115.QueryCurrentEpochRequest;
                toAmino(message: _115.QueryCurrentEpochRequest): _115.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _115.QueryCurrentEpochRequestAminoMsg): _115.QueryCurrentEpochRequest;
                toAminoMsg(message: _115.QueryCurrentEpochRequest): _115.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _115.QueryCurrentEpochRequestProtoMsg): _115.QueryCurrentEpochRequest;
                toProto(message: _115.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _115.QueryCurrentEpochRequest): _115.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _115.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_115.QueryCurrentEpochResponse>): _115.QueryCurrentEpochResponse;
                fromAmino(object: _115.QueryCurrentEpochResponseAmino): _115.QueryCurrentEpochResponse;
                toAmino(message: _115.QueryCurrentEpochResponse): _115.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _115.QueryCurrentEpochResponseAminoMsg): _115.QueryCurrentEpochResponse;
                toAminoMsg(message: _115.QueryCurrentEpochResponse): _115.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _115.QueryCurrentEpochResponseProtoMsg): _115.QueryCurrentEpochResponse;
                toProto(message: _115.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _115.QueryCurrentEpochResponse): _115.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _114.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.EpochInfo;
                fromPartial(object: Partial<_114.EpochInfo>): _114.EpochInfo;
                fromAmino(object: _114.EpochInfoAmino): _114.EpochInfo;
                toAmino(message: _114.EpochInfo): _114.EpochInfoAmino;
                fromAminoMsg(object: _114.EpochInfoAminoMsg): _114.EpochInfo;
                toAminoMsg(message: _114.EpochInfo): _114.EpochInfoAminoMsg;
                fromProtoMsg(message: _114.EpochInfoProtoMsg): _114.EpochInfo;
                toProto(message: _114.EpochInfo): Uint8Array;
                toProtoMsg(message: _114.EpochInfo): _114.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                toProto(message: _114.GenesisState): Uint8Array;
                toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _119.QueryPoolsRequest): Promise<_119.QueryPoolsResponse>;
                numPools(request?: _119.QueryNumPoolsRequest): Promise<_119.QueryNumPoolsResponse>;
                totalLiquidity(request?: _119.QueryTotalLiquidityRequest): Promise<_119.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _119.QueryPoolsWithFilterRequest): Promise<_119.QueryPoolsWithFilterResponse>;
                pool(request: _119.QueryPoolRequest): Promise<_119.QueryPoolResponse>;
                poolType(request: _119.QueryPoolTypeRequest): Promise<_119.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _119.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_119.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _119.QueryCalcJoinPoolSharesRequest): Promise<_119.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _119.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_119.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _119.QueryPoolParamsRequest): Promise<_119.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _119.QueryTotalPoolLiquidityRequest): Promise<_119.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _119.QueryTotalSharesRequest): Promise<_119.QueryTotalSharesResponse>;
                spotPrice(request: _119.QuerySpotPriceRequest): Promise<_119.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _119.QuerySwapExactAmountInRequest): Promise<_119.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _119.QuerySwapExactAmountOutRequest): Promise<_119.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _120.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _120.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _120.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _120.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _120.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _120.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _120.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _120.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _120.MsgJoinPool): {
                        typeUrl: string;
                        value: _120.MsgJoinPool;
                    };
                    exitPool(value: _120.MsgExitPool): {
                        typeUrl: string;
                        value: _120.MsgExitPool;
                    };
                    swapExactAmountIn(value: _120.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _120.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _120.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _120.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _120.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _120.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _120.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _120.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _120.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _120.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _120.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _120.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _120.MsgJoinPool): {
                        typeUrl: string;
                        value: _120.MsgJoinPool;
                    };
                    exitPool(value: _120.MsgExitPool): {
                        typeUrl: string;
                        value: _120.MsgExitPool;
                    };
                    swapExactAmountIn(value: _120.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _120.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _120.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _120.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _120.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _120.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _120.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _120.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _120.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _120.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _120.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _120.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _120.MsgJoinPool) => _120.MsgJoinPoolAmino;
                    fromAmino: (object: _120.MsgJoinPoolAmino) => _120.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _120.MsgExitPool) => _120.MsgExitPoolAmino;
                    fromAmino: (object: _120.MsgExitPoolAmino) => _120.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSwapExactAmountIn) => _120.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _120.MsgSwapExactAmountInAmino) => _120.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSwapExactAmountOut) => _120.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _120.MsgSwapExactAmountOutAmino) => _120.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _120.MsgJoinSwapExternAmountIn) => _120.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _120.MsgJoinSwapExternAmountInAmino) => _120.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _120.MsgJoinSwapShareAmountOut) => _120.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _120.MsgJoinSwapShareAmountOutAmino) => _120.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _120.MsgExitSwapExternAmountOut) => _120.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _120.MsgExitSwapExternAmountOutAmino) => _120.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _120.MsgExitSwapShareAmountIn) => _120.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _120.MsgExitSwapShareAmountInAmino) => _120.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _120.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinPool;
                fromPartial(object: Partial<_120.MsgJoinPool>): _120.MsgJoinPool;
                fromAmino(object: _120.MsgJoinPoolAmino): _120.MsgJoinPool;
                toAmino(message: _120.MsgJoinPool): _120.MsgJoinPoolAmino;
                fromAminoMsg(object: _120.MsgJoinPoolAminoMsg): _120.MsgJoinPool;
                toAminoMsg(message: _120.MsgJoinPool): _120.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _120.MsgJoinPoolProtoMsg): _120.MsgJoinPool;
                toProto(message: _120.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _120.MsgJoinPool): _120.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _120.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinPoolResponse;
                fromPartial(object: Partial<_120.MsgJoinPoolResponse>): _120.MsgJoinPoolResponse;
                fromAmino(object: _120.MsgJoinPoolResponseAmino): _120.MsgJoinPoolResponse;
                toAmino(message: _120.MsgJoinPoolResponse): _120.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _120.MsgJoinPoolResponseAminoMsg): _120.MsgJoinPoolResponse;
                toAminoMsg(message: _120.MsgJoinPoolResponse): _120.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _120.MsgJoinPoolResponseProtoMsg): _120.MsgJoinPoolResponse;
                toProto(message: _120.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _120.MsgJoinPoolResponse): _120.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _120.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitPool;
                fromPartial(object: Partial<_120.MsgExitPool>): _120.MsgExitPool;
                fromAmino(object: _120.MsgExitPoolAmino): _120.MsgExitPool;
                toAmino(message: _120.MsgExitPool): _120.MsgExitPoolAmino;
                fromAminoMsg(object: _120.MsgExitPoolAminoMsg): _120.MsgExitPool;
                toAminoMsg(message: _120.MsgExitPool): _120.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _120.MsgExitPoolProtoMsg): _120.MsgExitPool;
                toProto(message: _120.MsgExitPool): Uint8Array;
                toProtoMsg(message: _120.MsgExitPool): _120.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _120.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitPoolResponse;
                fromPartial(object: Partial<_120.MsgExitPoolResponse>): _120.MsgExitPoolResponse;
                fromAmino(object: _120.MsgExitPoolResponseAmino): _120.MsgExitPoolResponse;
                toAmino(message: _120.MsgExitPoolResponse): _120.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _120.MsgExitPoolResponseAminoMsg): _120.MsgExitPoolResponse;
                toAminoMsg(message: _120.MsgExitPoolResponse): _120.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _120.MsgExitPoolResponseProtoMsg): _120.MsgExitPoolResponse;
                toProto(message: _120.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _120.MsgExitPoolResponse): _120.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _120.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_120.MsgSwapExactAmountIn>): _120.MsgSwapExactAmountIn;
                fromAmino(object: _120.MsgSwapExactAmountInAmino): _120.MsgSwapExactAmountIn;
                toAmino(message: _120.MsgSwapExactAmountIn): _120.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _120.MsgSwapExactAmountInAminoMsg): _120.MsgSwapExactAmountIn;
                toAminoMsg(message: _120.MsgSwapExactAmountIn): _120.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _120.MsgSwapExactAmountInProtoMsg): _120.MsgSwapExactAmountIn;
                toProto(message: _120.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _120.MsgSwapExactAmountIn): _120.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _120.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_120.MsgSwapExactAmountInResponse>): _120.MsgSwapExactAmountInResponse;
                fromAmino(object: _120.MsgSwapExactAmountInResponseAmino): _120.MsgSwapExactAmountInResponse;
                toAmino(message: _120.MsgSwapExactAmountInResponse): _120.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _120.MsgSwapExactAmountInResponseAminoMsg): _120.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _120.MsgSwapExactAmountInResponse): _120.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSwapExactAmountInResponseProtoMsg): _120.MsgSwapExactAmountInResponse;
                toProto(message: _120.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSwapExactAmountInResponse): _120.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _120.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_120.MsgSwapExactAmountOut>): _120.MsgSwapExactAmountOut;
                fromAmino(object: _120.MsgSwapExactAmountOutAmino): _120.MsgSwapExactAmountOut;
                toAmino(message: _120.MsgSwapExactAmountOut): _120.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _120.MsgSwapExactAmountOutAminoMsg): _120.MsgSwapExactAmountOut;
                toAminoMsg(message: _120.MsgSwapExactAmountOut): _120.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _120.MsgSwapExactAmountOutProtoMsg): _120.MsgSwapExactAmountOut;
                toProto(message: _120.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _120.MsgSwapExactAmountOut): _120.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _120.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_120.MsgSwapExactAmountOutResponse>): _120.MsgSwapExactAmountOutResponse;
                fromAmino(object: _120.MsgSwapExactAmountOutResponseAmino): _120.MsgSwapExactAmountOutResponse;
                toAmino(message: _120.MsgSwapExactAmountOutResponse): _120.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _120.MsgSwapExactAmountOutResponseAminoMsg): _120.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _120.MsgSwapExactAmountOutResponse): _120.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSwapExactAmountOutResponseProtoMsg): _120.MsgSwapExactAmountOutResponse;
                toProto(message: _120.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSwapExactAmountOutResponse): _120.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _120.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_120.MsgJoinSwapExternAmountIn>): _120.MsgJoinSwapExternAmountIn;
                fromAmino(object: _120.MsgJoinSwapExternAmountInAmino): _120.MsgJoinSwapExternAmountIn;
                toAmino(message: _120.MsgJoinSwapExternAmountIn): _120.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _120.MsgJoinSwapExternAmountInAminoMsg): _120.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _120.MsgJoinSwapExternAmountIn): _120.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _120.MsgJoinSwapExternAmountInProtoMsg): _120.MsgJoinSwapExternAmountIn;
                toProto(message: _120.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _120.MsgJoinSwapExternAmountIn): _120.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _120.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_120.MsgJoinSwapExternAmountInResponse>): _120.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _120.MsgJoinSwapExternAmountInResponseAmino): _120.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _120.MsgJoinSwapExternAmountInResponse): _120.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _120.MsgJoinSwapExternAmountInResponseAminoMsg): _120.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _120.MsgJoinSwapExternAmountInResponse): _120.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _120.MsgJoinSwapExternAmountInResponseProtoMsg): _120.MsgJoinSwapExternAmountInResponse;
                toProto(message: _120.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _120.MsgJoinSwapExternAmountInResponse): _120.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _120.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_120.MsgJoinSwapShareAmountOut>): _120.MsgJoinSwapShareAmountOut;
                fromAmino(object: _120.MsgJoinSwapShareAmountOutAmino): _120.MsgJoinSwapShareAmountOut;
                toAmino(message: _120.MsgJoinSwapShareAmountOut): _120.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _120.MsgJoinSwapShareAmountOutAminoMsg): _120.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _120.MsgJoinSwapShareAmountOut): _120.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _120.MsgJoinSwapShareAmountOutProtoMsg): _120.MsgJoinSwapShareAmountOut;
                toProto(message: _120.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _120.MsgJoinSwapShareAmountOut): _120.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _120.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_120.MsgJoinSwapShareAmountOutResponse>): _120.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _120.MsgJoinSwapShareAmountOutResponseAmino): _120.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _120.MsgJoinSwapShareAmountOutResponse): _120.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _120.MsgJoinSwapShareAmountOutResponseAminoMsg): _120.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _120.MsgJoinSwapShareAmountOutResponse): _120.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _120.MsgJoinSwapShareAmountOutResponseProtoMsg): _120.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _120.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _120.MsgJoinSwapShareAmountOutResponse): _120.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _120.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_120.MsgExitSwapShareAmountIn>): _120.MsgExitSwapShareAmountIn;
                fromAmino(object: _120.MsgExitSwapShareAmountInAmino): _120.MsgExitSwapShareAmountIn;
                toAmino(message: _120.MsgExitSwapShareAmountIn): _120.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _120.MsgExitSwapShareAmountInAminoMsg): _120.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _120.MsgExitSwapShareAmountIn): _120.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _120.MsgExitSwapShareAmountInProtoMsg): _120.MsgExitSwapShareAmountIn;
                toProto(message: _120.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _120.MsgExitSwapShareAmountIn): _120.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _120.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_120.MsgExitSwapShareAmountInResponse>): _120.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _120.MsgExitSwapShareAmountInResponseAmino): _120.MsgExitSwapShareAmountInResponse;
                toAmino(message: _120.MsgExitSwapShareAmountInResponse): _120.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _120.MsgExitSwapShareAmountInResponseAminoMsg): _120.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _120.MsgExitSwapShareAmountInResponse): _120.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _120.MsgExitSwapShareAmountInResponseProtoMsg): _120.MsgExitSwapShareAmountInResponse;
                toProto(message: _120.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _120.MsgExitSwapShareAmountInResponse): _120.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _120.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_120.MsgExitSwapExternAmountOut>): _120.MsgExitSwapExternAmountOut;
                fromAmino(object: _120.MsgExitSwapExternAmountOutAmino): _120.MsgExitSwapExternAmountOut;
                toAmino(message: _120.MsgExitSwapExternAmountOut): _120.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _120.MsgExitSwapExternAmountOutAminoMsg): _120.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _120.MsgExitSwapExternAmountOut): _120.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _120.MsgExitSwapExternAmountOutProtoMsg): _120.MsgExitSwapExternAmountOut;
                toProto(message: _120.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _120.MsgExitSwapExternAmountOut): _120.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _120.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_120.MsgExitSwapExternAmountOutResponse>): _120.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _120.MsgExitSwapExternAmountOutResponseAmino): _120.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _120.MsgExitSwapExternAmountOutResponse): _120.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _120.MsgExitSwapExternAmountOutResponseAminoMsg): _120.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _120.MsgExitSwapExternAmountOutResponse): _120.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _120.MsgExitSwapExternAmountOutResponseProtoMsg): _120.MsgExitSwapExternAmountOutResponse;
                toProto(message: _120.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _120.MsgExitSwapExternAmountOutResponse): _120.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _119.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolRequest;
                fromPartial(object: Partial<_119.QueryPoolRequest>): _119.QueryPoolRequest;
                fromAmino(object: _119.QueryPoolRequestAmino): _119.QueryPoolRequest;
                toAmino(message: _119.QueryPoolRequest): _119.QueryPoolRequestAmino;
                fromAminoMsg(object: _119.QueryPoolRequestAminoMsg): _119.QueryPoolRequest;
                toAminoMsg(message: _119.QueryPoolRequest): _119.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPoolRequestProtoMsg): _119.QueryPoolRequest;
                toProto(message: _119.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPoolRequest): _119.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _119.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolResponse;
                fromPartial(object: Partial<_119.QueryPoolResponse>): _119.QueryPoolResponse;
                fromAmino(object: _119.QueryPoolResponseAmino): _119.QueryPoolResponse;
                toAmino(message: _119.QueryPoolResponse): _119.QueryPoolResponseAmino;
                fromAminoMsg(object: _119.QueryPoolResponseAminoMsg): _119.QueryPoolResponse;
                toAminoMsg(message: _119.QueryPoolResponse): _119.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPoolResponseProtoMsg): _119.QueryPoolResponse;
                toProto(message: _119.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPoolResponse): _119.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _119.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolsRequest;
                fromPartial(object: Partial<_119.QueryPoolsRequest>): _119.QueryPoolsRequest;
                fromAmino(object: _119.QueryPoolsRequestAmino): _119.QueryPoolsRequest;
                toAmino(message: _119.QueryPoolsRequest): _119.QueryPoolsRequestAmino;
                fromAminoMsg(object: _119.QueryPoolsRequestAminoMsg): _119.QueryPoolsRequest;
                toAminoMsg(message: _119.QueryPoolsRequest): _119.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPoolsRequestProtoMsg): _119.QueryPoolsRequest;
                toProto(message: _119.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPoolsRequest): _119.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _119.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolsResponse;
                fromPartial(object: Partial<_119.QueryPoolsResponse>): _119.QueryPoolsResponse;
                fromAmino(object: _119.QueryPoolsResponseAmino): _119.QueryPoolsResponse;
                toAmino(message: _119.QueryPoolsResponse): _119.QueryPoolsResponseAmino;
                fromAminoMsg(object: _119.QueryPoolsResponseAminoMsg): _119.QueryPoolsResponse;
                toAminoMsg(message: _119.QueryPoolsResponse): _119.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPoolsResponseProtoMsg): _119.QueryPoolsResponse;
                toProto(message: _119.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPoolsResponse): _119.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _119.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryNumPoolsRequest;
                fromPartial(_: Partial<_119.QueryNumPoolsRequest>): _119.QueryNumPoolsRequest;
                fromAmino(_: _119.QueryNumPoolsRequestAmino): _119.QueryNumPoolsRequest;
                toAmino(_: _119.QueryNumPoolsRequest): _119.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _119.QueryNumPoolsRequestAminoMsg): _119.QueryNumPoolsRequest;
                toAminoMsg(message: _119.QueryNumPoolsRequest): _119.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryNumPoolsRequestProtoMsg): _119.QueryNumPoolsRequest;
                toProto(message: _119.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryNumPoolsRequest): _119.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _119.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryNumPoolsResponse;
                fromPartial(object: Partial<_119.QueryNumPoolsResponse>): _119.QueryNumPoolsResponse;
                fromAmino(object: _119.QueryNumPoolsResponseAmino): _119.QueryNumPoolsResponse;
                toAmino(message: _119.QueryNumPoolsResponse): _119.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _119.QueryNumPoolsResponseAminoMsg): _119.QueryNumPoolsResponse;
                toAminoMsg(message: _119.QueryNumPoolsResponse): _119.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryNumPoolsResponseProtoMsg): _119.QueryNumPoolsResponse;
                toProto(message: _119.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryNumPoolsResponse): _119.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _119.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolTypeRequest;
                fromPartial(object: Partial<_119.QueryPoolTypeRequest>): _119.QueryPoolTypeRequest;
                fromAmino(object: _119.QueryPoolTypeRequestAmino): _119.QueryPoolTypeRequest;
                toAmino(message: _119.QueryPoolTypeRequest): _119.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _119.QueryPoolTypeRequestAminoMsg): _119.QueryPoolTypeRequest;
                toAminoMsg(message: _119.QueryPoolTypeRequest): _119.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPoolTypeRequestProtoMsg): _119.QueryPoolTypeRequest;
                toProto(message: _119.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPoolTypeRequest): _119.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _119.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolTypeResponse;
                fromPartial(object: Partial<_119.QueryPoolTypeResponse>): _119.QueryPoolTypeResponse;
                fromAmino(object: _119.QueryPoolTypeResponseAmino): _119.QueryPoolTypeResponse;
                toAmino(message: _119.QueryPoolTypeResponse): _119.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _119.QueryPoolTypeResponseAminoMsg): _119.QueryPoolTypeResponse;
                toAminoMsg(message: _119.QueryPoolTypeResponse): _119.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPoolTypeResponseProtoMsg): _119.QueryPoolTypeResponse;
                toProto(message: _119.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPoolTypeResponse): _119.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _119.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_119.QueryCalcJoinPoolSharesRequest>): _119.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _119.QueryCalcJoinPoolSharesRequestAmino): _119.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _119.QueryCalcJoinPoolSharesRequest): _119.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _119.QueryCalcJoinPoolSharesRequestAminoMsg): _119.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _119.QueryCalcJoinPoolSharesRequest): _119.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCalcJoinPoolSharesRequestProtoMsg): _119.QueryCalcJoinPoolSharesRequest;
                toProto(message: _119.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCalcJoinPoolSharesRequest): _119.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _119.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_119.QueryCalcJoinPoolSharesResponse>): _119.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _119.QueryCalcJoinPoolSharesResponseAmino): _119.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _119.QueryCalcJoinPoolSharesResponse): _119.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _119.QueryCalcJoinPoolSharesResponseAminoMsg): _119.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _119.QueryCalcJoinPoolSharesResponse): _119.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCalcJoinPoolSharesResponseProtoMsg): _119.QueryCalcJoinPoolSharesResponse;
                toProto(message: _119.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCalcJoinPoolSharesResponse): _119.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _119.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_119.QueryCalcExitPoolCoinsFromSharesRequest>): _119.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _119.QueryCalcExitPoolCoinsFromSharesRequestAmino): _119.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _119.QueryCalcExitPoolCoinsFromSharesRequest): _119.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _119.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _119.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesRequest): _119.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _119.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _119.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesRequest): _119.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _119.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_119.QueryCalcExitPoolCoinsFromSharesResponse>): _119.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _119.QueryCalcExitPoolCoinsFromSharesResponseAmino): _119.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _119.QueryCalcExitPoolCoinsFromSharesResponse): _119.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _119.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _119.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesResponse): _119.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _119.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _119.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCalcExitPoolCoinsFromSharesResponse): _119.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _119.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolParamsRequest;
                fromPartial(object: Partial<_119.QueryPoolParamsRequest>): _119.QueryPoolParamsRequest;
                fromAmino(object: _119.QueryPoolParamsRequestAmino): _119.QueryPoolParamsRequest;
                toAmino(message: _119.QueryPoolParamsRequest): _119.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _119.QueryPoolParamsRequestAminoMsg): _119.QueryPoolParamsRequest;
                toAminoMsg(message: _119.QueryPoolParamsRequest): _119.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPoolParamsRequestProtoMsg): _119.QueryPoolParamsRequest;
                toProto(message: _119.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPoolParamsRequest): _119.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _119.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolParamsResponse;
                fromPartial(object: Partial<_119.QueryPoolParamsResponse>): _119.QueryPoolParamsResponse;
                fromAmino(object: _119.QueryPoolParamsResponseAmino): _119.QueryPoolParamsResponse;
                toAmino(message: _119.QueryPoolParamsResponse): _119.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _119.QueryPoolParamsResponseAminoMsg): _119.QueryPoolParamsResponse;
                toAminoMsg(message: _119.QueryPoolParamsResponse): _119.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPoolParamsResponseProtoMsg): _119.QueryPoolParamsResponse;
                toProto(message: _119.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPoolParamsResponse): _119.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _119.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_119.QueryTotalPoolLiquidityRequest>): _119.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _119.QueryTotalPoolLiquidityRequestAmino): _119.QueryTotalPoolLiquidityRequest;
                toAmino(message: _119.QueryTotalPoolLiquidityRequest): _119.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _119.QueryTotalPoolLiquidityRequestAminoMsg): _119.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _119.QueryTotalPoolLiquidityRequest): _119.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _119.QueryTotalPoolLiquidityRequestProtoMsg): _119.QueryTotalPoolLiquidityRequest;
                toProto(message: _119.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _119.QueryTotalPoolLiquidityRequest): _119.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _119.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_119.QueryTotalPoolLiquidityResponse>): _119.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _119.QueryTotalPoolLiquidityResponseAmino): _119.QueryTotalPoolLiquidityResponse;
                toAmino(message: _119.QueryTotalPoolLiquidityResponse): _119.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _119.QueryTotalPoolLiquidityResponseAminoMsg): _119.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _119.QueryTotalPoolLiquidityResponse): _119.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _119.QueryTotalPoolLiquidityResponseProtoMsg): _119.QueryTotalPoolLiquidityResponse;
                toProto(message: _119.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _119.QueryTotalPoolLiquidityResponse): _119.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _119.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalSharesRequest;
                fromPartial(object: Partial<_119.QueryTotalSharesRequest>): _119.QueryTotalSharesRequest;
                fromAmino(object: _119.QueryTotalSharesRequestAmino): _119.QueryTotalSharesRequest;
                toAmino(message: _119.QueryTotalSharesRequest): _119.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _119.QueryTotalSharesRequestAminoMsg): _119.QueryTotalSharesRequest;
                toAminoMsg(message: _119.QueryTotalSharesRequest): _119.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryTotalSharesRequestProtoMsg): _119.QueryTotalSharesRequest;
                toProto(message: _119.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryTotalSharesRequest): _119.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _119.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalSharesResponse;
                fromPartial(object: Partial<_119.QueryTotalSharesResponse>): _119.QueryTotalSharesResponse;
                fromAmino(object: _119.QueryTotalSharesResponseAmino): _119.QueryTotalSharesResponse;
                toAmino(message: _119.QueryTotalSharesResponse): _119.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _119.QueryTotalSharesResponseAminoMsg): _119.QueryTotalSharesResponse;
                toAminoMsg(message: _119.QueryTotalSharesResponse): _119.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryTotalSharesResponseProtoMsg): _119.QueryTotalSharesResponse;
                toProto(message: _119.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryTotalSharesResponse): _119.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _119.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_119.QueryCalcJoinPoolNoSwapSharesRequest>): _119.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _119.QueryCalcJoinPoolNoSwapSharesRequestAmino): _119.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _119.QueryCalcJoinPoolNoSwapSharesRequest): _119.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _119.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _119.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesRequest): _119.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _119.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _119.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesRequest): _119.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _119.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_119.QueryCalcJoinPoolNoSwapSharesResponse>): _119.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _119.QueryCalcJoinPoolNoSwapSharesResponseAmino): _119.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _119.QueryCalcJoinPoolNoSwapSharesResponse): _119.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _119.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _119.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesResponse): _119.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _119.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _119.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCalcJoinPoolNoSwapSharesResponse): _119.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _119.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySpotPriceRequest;
                fromPartial(object: Partial<_119.QuerySpotPriceRequest>): _119.QuerySpotPriceRequest;
                fromAmino(object: _119.QuerySpotPriceRequestAmino): _119.QuerySpotPriceRequest;
                toAmino(message: _119.QuerySpotPriceRequest): _119.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _119.QuerySpotPriceRequestAminoMsg): _119.QuerySpotPriceRequest;
                toAminoMsg(message: _119.QuerySpotPriceRequest): _119.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySpotPriceRequestProtoMsg): _119.QuerySpotPriceRequest;
                toProto(message: _119.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySpotPriceRequest): _119.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _119.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_119.QueryPoolsWithFilterRequest>): _119.QueryPoolsWithFilterRequest;
                fromAmino(object: _119.QueryPoolsWithFilterRequestAmino): _119.QueryPoolsWithFilterRequest;
                toAmino(message: _119.QueryPoolsWithFilterRequest): _119.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _119.QueryPoolsWithFilterRequestAminoMsg): _119.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _119.QueryPoolsWithFilterRequest): _119.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPoolsWithFilterRequestProtoMsg): _119.QueryPoolsWithFilterRequest;
                toProto(message: _119.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPoolsWithFilterRequest): _119.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _119.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_119.QueryPoolsWithFilterResponse>): _119.QueryPoolsWithFilterResponse;
                fromAmino(object: _119.QueryPoolsWithFilterResponseAmino): _119.QueryPoolsWithFilterResponse;
                toAmino(message: _119.QueryPoolsWithFilterResponse): _119.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _119.QueryPoolsWithFilterResponseAminoMsg): _119.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _119.QueryPoolsWithFilterResponse): _119.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPoolsWithFilterResponseProtoMsg): _119.QueryPoolsWithFilterResponse;
                toProto(message: _119.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPoolsWithFilterResponse): _119.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _119.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySpotPriceResponse;
                fromPartial(object: Partial<_119.QuerySpotPriceResponse>): _119.QuerySpotPriceResponse;
                fromAmino(object: _119.QuerySpotPriceResponseAmino): _119.QuerySpotPriceResponse;
                toAmino(message: _119.QuerySpotPriceResponse): _119.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _119.QuerySpotPriceResponseAminoMsg): _119.QuerySpotPriceResponse;
                toAminoMsg(message: _119.QuerySpotPriceResponse): _119.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySpotPriceResponseProtoMsg): _119.QuerySpotPriceResponse;
                toProto(message: _119.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySpotPriceResponse): _119.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _119.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_119.QuerySwapExactAmountInRequest>): _119.QuerySwapExactAmountInRequest;
                fromAmino(object: _119.QuerySwapExactAmountInRequestAmino): _119.QuerySwapExactAmountInRequest;
                toAmino(message: _119.QuerySwapExactAmountInRequest): _119.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _119.QuerySwapExactAmountInRequestAminoMsg): _119.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _119.QuerySwapExactAmountInRequest): _119.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySwapExactAmountInRequestProtoMsg): _119.QuerySwapExactAmountInRequest;
                toProto(message: _119.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySwapExactAmountInRequest): _119.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _119.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_119.QuerySwapExactAmountInResponse>): _119.QuerySwapExactAmountInResponse;
                fromAmino(object: _119.QuerySwapExactAmountInResponseAmino): _119.QuerySwapExactAmountInResponse;
                toAmino(message: _119.QuerySwapExactAmountInResponse): _119.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _119.QuerySwapExactAmountInResponseAminoMsg): _119.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _119.QuerySwapExactAmountInResponse): _119.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySwapExactAmountInResponseProtoMsg): _119.QuerySwapExactAmountInResponse;
                toProto(message: _119.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySwapExactAmountInResponse): _119.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _119.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_119.QuerySwapExactAmountOutRequest>): _119.QuerySwapExactAmountOutRequest;
                fromAmino(object: _119.QuerySwapExactAmountOutRequestAmino): _119.QuerySwapExactAmountOutRequest;
                toAmino(message: _119.QuerySwapExactAmountOutRequest): _119.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _119.QuerySwapExactAmountOutRequestAminoMsg): _119.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _119.QuerySwapExactAmountOutRequest): _119.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySwapExactAmountOutRequestProtoMsg): _119.QuerySwapExactAmountOutRequest;
                toProto(message: _119.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySwapExactAmountOutRequest): _119.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _119.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_119.QuerySwapExactAmountOutResponse>): _119.QuerySwapExactAmountOutResponse;
                fromAmino(object: _119.QuerySwapExactAmountOutResponseAmino): _119.QuerySwapExactAmountOutResponse;
                toAmino(message: _119.QuerySwapExactAmountOutResponse): _119.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _119.QuerySwapExactAmountOutResponseAminoMsg): _119.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _119.QuerySwapExactAmountOutResponse): _119.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySwapExactAmountOutResponseProtoMsg): _119.QuerySwapExactAmountOutResponse;
                toProto(message: _119.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySwapExactAmountOutResponse): _119.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _119.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_119.QueryTotalLiquidityRequest>): _119.QueryTotalLiquidityRequest;
                fromAmino(_: _119.QueryTotalLiquidityRequestAmino): _119.QueryTotalLiquidityRequest;
                toAmino(_: _119.QueryTotalLiquidityRequest): _119.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _119.QueryTotalLiquidityRequestAminoMsg): _119.QueryTotalLiquidityRequest;
                toAminoMsg(message: _119.QueryTotalLiquidityRequest): _119.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _119.QueryTotalLiquidityRequestProtoMsg): _119.QueryTotalLiquidityRequest;
                toProto(message: _119.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _119.QueryTotalLiquidityRequest): _119.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _119.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_119.QueryTotalLiquidityResponse>): _119.QueryTotalLiquidityResponse;
                fromAmino(object: _119.QueryTotalLiquidityResponseAmino): _119.QueryTotalLiquidityResponse;
                toAmino(message: _119.QueryTotalLiquidityResponse): _119.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _119.QueryTotalLiquidityResponseAminoMsg): _119.QueryTotalLiquidityResponse;
                toAminoMsg(message: _119.QueryTotalLiquidityResponse): _119.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _119.QueryTotalLiquidityResponseProtoMsg): _119.QueryTotalLiquidityResponse;
                toProto(message: _119.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _119.QueryTotalLiquidityResponse): _119.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _107.CosmWasmPool | _116.Pool | import("./concentrated-liquidity/pool").Pool | _122.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _118.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_118.ReplaceMigrationRecordsProposal>): _118.ReplaceMigrationRecordsProposal;
                fromAmino(object: _118.ReplaceMigrationRecordsProposalAmino): _118.ReplaceMigrationRecordsProposal;
                toAmino(message: _118.ReplaceMigrationRecordsProposal): _118.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _118.ReplaceMigrationRecordsProposalAminoMsg): _118.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _118.ReplaceMigrationRecordsProposal): _118.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _118.ReplaceMigrationRecordsProposalProtoMsg): _118.ReplaceMigrationRecordsProposal;
                toProto(message: _118.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _118.ReplaceMigrationRecordsProposal): _118.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _118.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_118.UpdateMigrationRecordsProposal>): _118.UpdateMigrationRecordsProposal;
                fromAmino(object: _118.UpdateMigrationRecordsProposalAmino): _118.UpdateMigrationRecordsProposal;
                toAmino(message: _118.UpdateMigrationRecordsProposal): _118.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _118.UpdateMigrationRecordsProposalAminoMsg): _118.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _118.UpdateMigrationRecordsProposal): _118.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _118.UpdateMigrationRecordsProposalProtoMsg): _118.UpdateMigrationRecordsProposal;
                toProto(message: _118.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _118.UpdateMigrationRecordsProposal): _118.UpdateMigrationRecordsProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                fromPartial(object: Partial<_117.Params>): _117.Params;
                fromAmino(object: _117.ParamsAmino): _117.Params;
                toAmino(message: _117.Params): _117.ParamsAmino;
                fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                toAminoMsg(message: _117.Params): _117.ParamsAminoMsg;
                fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                toProto(message: _117.Params): Uint8Array;
                toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                toProto(message: _117.GenesisState): Uint8Array;
                toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
            };
            MigrationRecords: {
                typeUrl: string;
                encode(message: _117.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MigrationRecords;
                fromPartial(object: Partial<_117.MigrationRecords>): _117.MigrationRecords;
                fromAmino(object: _117.MigrationRecordsAmino): _117.MigrationRecords;
                toAmino(message: _117.MigrationRecords): _117.MigrationRecordsAmino;
                fromAminoMsg(object: _117.MigrationRecordsAminoMsg): _117.MigrationRecords;
                toAminoMsg(message: _117.MigrationRecords): _117.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _117.MigrationRecordsProtoMsg): _117.MigrationRecords;
                toProto(message: _117.MigrationRecords): Uint8Array;
                toProtoMsg(message: _117.MigrationRecords): _117.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _117.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_117.BalancerToConcentratedPoolLink>): _117.BalancerToConcentratedPoolLink;
                fromAmino(object: _117.BalancerToConcentratedPoolLinkAmino): _117.BalancerToConcentratedPoolLink;
                toAmino(message: _117.BalancerToConcentratedPoolLink): _117.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _117.BalancerToConcentratedPoolLinkAminoMsg): _117.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _117.BalancerToConcentratedPoolLink): _117.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _117.BalancerToConcentratedPoolLinkProtoMsg): _117.BalancerToConcentratedPoolLink;
                toProto(message: _117.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _117.BalancerToConcentratedPoolLink): _117.BalancerToConcentratedPoolLinkProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _116.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SmoothWeightChangeParams;
                fromPartial(object: Partial<_116.SmoothWeightChangeParams>): _116.SmoothWeightChangeParams;
                fromAmino(object: _116.SmoothWeightChangeParamsAmino): _116.SmoothWeightChangeParams;
                toAmino(message: _116.SmoothWeightChangeParams): _116.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _116.SmoothWeightChangeParamsAminoMsg): _116.SmoothWeightChangeParams;
                toAminoMsg(message: _116.SmoothWeightChangeParams): _116.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _116.SmoothWeightChangeParamsProtoMsg): _116.SmoothWeightChangeParams;
                toProto(message: _116.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _116.SmoothWeightChangeParams): _116.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _116.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PoolParams;
                fromPartial(object: Partial<_116.PoolParams>): _116.PoolParams;
                fromAmino(object: _116.PoolParamsAmino): _116.PoolParams;
                toAmino(message: _116.PoolParams): _116.PoolParamsAmino;
                fromAminoMsg(object: _116.PoolParamsAminoMsg): _116.PoolParams;
                toAminoMsg(message: _116.PoolParams): _116.PoolParamsAminoMsg;
                fromProtoMsg(message: _116.PoolParamsProtoMsg): _116.PoolParams;
                toProto(message: _116.PoolParams): Uint8Array;
                toProtoMsg(message: _116.PoolParams): _116.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _116.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PoolAsset;
                fromPartial(object: Partial<_116.PoolAsset>): _116.PoolAsset;
                fromAmino(object: _116.PoolAssetAmino): _116.PoolAsset;
                toAmino(message: _116.PoolAsset): _116.PoolAssetAmino;
                fromAminoMsg(object: _116.PoolAssetAminoMsg): _116.PoolAsset;
                toAminoMsg(message: _116.PoolAsset): _116.PoolAssetAminoMsg;
                fromProtoMsg(message: _116.PoolAssetProtoMsg): _116.PoolAsset;
                toProto(message: _116.PoolAsset): Uint8Array;
                toProtoMsg(message: _116.PoolAsset): _116.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _116.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Pool;
                fromPartial(object: Partial<_116.Pool>): _116.Pool;
                fromAmino(object: _116.PoolAmino): _116.Pool;
                toAmino(message: _116.Pool): _116.PoolAmino;
                fromAminoMsg(object: _116.PoolAminoMsg): _116.Pool;
                toAminoMsg(message: _116.Pool): _116.PoolAminoMsg;
                fromProtoMsg(message: _116.PoolProtoMsg): _116.Pool;
                toProto(message: _116.Pool): Uint8Array;
                toProtoMsg(message: _116.Pool): _116.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _320.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _121.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _121.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _121.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _121.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _121.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _121.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _121.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _121.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _121.MsgCreateBalancerPool) => _121.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _121.MsgCreateBalancerPoolAmino) => _121.MsgCreateBalancerPool;
                        };
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
                            aminoType: string;
                            toAmino: (message: _121.MsgMigrateSharesToFullRangeConcentratedPosition) => _121.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                            fromAmino: (object: _121.MsgMigrateSharesToFullRangeConcentratedPositionAmino) => _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _121.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_121.MsgCreateBalancerPool>): _121.MsgCreateBalancerPool;
                        fromAmino(object: _121.MsgCreateBalancerPoolAmino): _121.MsgCreateBalancerPool;
                        toAmino(message: _121.MsgCreateBalancerPool): _121.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _121.MsgCreateBalancerPoolAminoMsg): _121.MsgCreateBalancerPool;
                        toAminoMsg(message: _121.MsgCreateBalancerPool): _121.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _121.MsgCreateBalancerPoolProtoMsg): _121.MsgCreateBalancerPool;
                        toProto(message: _121.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _121.MsgCreateBalancerPool): _121.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _121.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_121.MsgCreateBalancerPoolResponse>): _121.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _121.MsgCreateBalancerPoolResponseAmino): _121.MsgCreateBalancerPoolResponse;
                        toAmino(message: _121.MsgCreateBalancerPoolResponse): _121.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _121.MsgCreateBalancerPoolResponseAminoMsg): _121.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _121.MsgCreateBalancerPoolResponse): _121.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _121.MsgCreateBalancerPoolResponseProtoMsg): _121.MsgCreateBalancerPoolResponse;
                        toProto(message: _121.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _121.MsgCreateBalancerPoolResponse): _121.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPosition: {
                        typeUrl: string;
                        encode(message: _121.MsgMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromPartial(object: Partial<_121.MsgMigrateSharesToFullRangeConcentratedPosition>): _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromAmino(object: _121.MsgMigrateSharesToFullRangeConcentratedPositionAmino): _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAmino(message: _121.MsgMigrateSharesToFullRangeConcentratedPosition): _121.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                        fromAminoMsg(object: _121.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg): _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAminoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPosition): _121.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg;
                        fromProtoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg): _121.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toProto(message: _121.MsgMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
                        toProtoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPosition): _121.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
                        typeUrl: string;
                        encode(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromPartial(object: Partial<_121.MsgMigrateSharesToFullRangeConcentratedPositionResponse>): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromAmino(object: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAmino(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino;
                        fromAminoMsg(object: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAminoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
                        fromProtoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toProto(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
                        toProtoMsg(message: _121.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _121.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _321.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _123.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _123.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _123.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _123.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _123.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _123.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _123.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _123.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _123.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _123.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _123.MsgCreateStableswapPool) => _123.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _123.MsgCreateStableswapPoolAmino) => _123.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _123.MsgStableSwapAdjustScalingFactors) => _123.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _123.MsgStableSwapAdjustScalingFactorsAmino) => _123.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _123.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_123.MsgCreateStableswapPool>): _123.MsgCreateStableswapPool;
                        fromAmino(object: _123.MsgCreateStableswapPoolAmino): _123.MsgCreateStableswapPool;
                        toAmino(message: _123.MsgCreateStableswapPool): _123.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _123.MsgCreateStableswapPoolAminoMsg): _123.MsgCreateStableswapPool;
                        toAminoMsg(message: _123.MsgCreateStableswapPool): _123.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _123.MsgCreateStableswapPoolProtoMsg): _123.MsgCreateStableswapPool;
                        toProto(message: _123.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _123.MsgCreateStableswapPool): _123.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _123.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_123.MsgCreateStableswapPoolResponse>): _123.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _123.MsgCreateStableswapPoolResponseAmino): _123.MsgCreateStableswapPoolResponse;
                        toAmino(message: _123.MsgCreateStableswapPoolResponse): _123.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _123.MsgCreateStableswapPoolResponseAminoMsg): _123.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _123.MsgCreateStableswapPoolResponse): _123.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _123.MsgCreateStableswapPoolResponseProtoMsg): _123.MsgCreateStableswapPoolResponse;
                        toProto(message: _123.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _123.MsgCreateStableswapPoolResponse): _123.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _123.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_123.MsgStableSwapAdjustScalingFactors>): _123.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _123.MsgStableSwapAdjustScalingFactorsAmino): _123.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _123.MsgStableSwapAdjustScalingFactors): _123.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _123.MsgStableSwapAdjustScalingFactorsAminoMsg): _123.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _123.MsgStableSwapAdjustScalingFactors): _123.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _123.MsgStableSwapAdjustScalingFactorsProtoMsg): _123.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _123.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _123.MsgStableSwapAdjustScalingFactors): _123.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _123.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_123.MsgStableSwapAdjustScalingFactorsResponse>): _123.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _123.MsgStableSwapAdjustScalingFactorsResponseAmino): _123.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _123.MsgStableSwapAdjustScalingFactorsResponse): _123.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _123.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _123.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _123.MsgStableSwapAdjustScalingFactorsResponse): _123.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _123.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _123.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _123.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _123.MsgStableSwapAdjustScalingFactorsResponse): _123.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _122.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PoolParams;
                        fromPartial(object: Partial<_122.PoolParams>): _122.PoolParams;
                        fromAmino(object: _122.PoolParamsAmino): _122.PoolParams;
                        toAmino(message: _122.PoolParams): _122.PoolParamsAmino;
                        fromAminoMsg(object: _122.PoolParamsAminoMsg): _122.PoolParams;
                        toAminoMsg(message: _122.PoolParams): _122.PoolParamsAminoMsg;
                        fromProtoMsg(message: _122.PoolParamsProtoMsg): _122.PoolParams;
                        toProto(message: _122.PoolParams): Uint8Array;
                        toProtoMsg(message: _122.PoolParams): _122.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _122.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Pool;
                        fromPartial(object: Partial<_122.Pool>): _122.Pool;
                        fromAmino(object: _122.PoolAmino): _122.Pool;
                        toAmino(message: _122.Pool): _122.PoolAmino;
                        fromAminoMsg(object: _122.PoolAminoMsg): _122.Pool;
                        toAminoMsg(message: _122.Pool): _122.PoolAminoMsg;
                        fromProtoMsg(message: _122.PoolProtoMsg): _122.Pool;
                        toProto(message: _122.Pool): Uint8Array;
                        toProtoMsg(message: _122.Pool): _122.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _124.QuerySpotPriceRequest): Promise<_124.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _124.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QuerySpotPriceRequest;
                fromPartial(object: Partial<_124.QuerySpotPriceRequest>): _124.QuerySpotPriceRequest;
                fromAmino(object: _124.QuerySpotPriceRequestAmino): _124.QuerySpotPriceRequest;
                toAmino(message: _124.QuerySpotPriceRequest): _124.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _124.QuerySpotPriceRequestAminoMsg): _124.QuerySpotPriceRequest;
                toAminoMsg(message: _124.QuerySpotPriceRequest): _124.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _124.QuerySpotPriceRequestProtoMsg): _124.QuerySpotPriceRequest;
                toProto(message: _124.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _124.QuerySpotPriceRequest): _124.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _124.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QuerySpotPriceResponse;
                fromPartial(object: Partial<_124.QuerySpotPriceResponse>): _124.QuerySpotPriceResponse;
                fromAmino(object: _124.QuerySpotPriceResponseAmino): _124.QuerySpotPriceResponse;
                toAmino(message: _124.QuerySpotPriceResponse): _124.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _124.QuerySpotPriceResponseAminoMsg): _124.QuerySpotPriceResponse;
                toAminoMsg(message: _124.QuerySpotPriceResponse): _124.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _124.QuerySpotPriceResponseProtoMsg): _124.QuerySpotPriceResponse;
                toProto(message: _124.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _124.QuerySpotPriceResponse): _124.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.ParamsRequest): Promise<_127.ParamsResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _127.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ParamsRequest;
                fromPartial(_: Partial<_127.ParamsRequest>): _127.ParamsRequest;
                fromAmino(_: _127.ParamsRequestAmino): _127.ParamsRequest;
                toAmino(_: _127.ParamsRequest): _127.ParamsRequestAmino;
                fromAminoMsg(object: _127.ParamsRequestAminoMsg): _127.ParamsRequest;
                toAminoMsg(message: _127.ParamsRequest): _127.ParamsRequestAminoMsg;
                fromProtoMsg(message: _127.ParamsRequestProtoMsg): _127.ParamsRequest;
                toProto(message: _127.ParamsRequest): Uint8Array;
                toProtoMsg(message: _127.ParamsRequest): _127.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _127.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ParamsResponse;
                fromPartial(object: Partial<_127.ParamsResponse>): _127.ParamsResponse;
                fromAmino(object: _127.ParamsResponseAmino): _127.ParamsResponse;
                toAmino(message: _127.ParamsResponse): _127.ParamsResponseAmino;
                fromAminoMsg(object: _127.ParamsResponseAminoMsg): _127.ParamsResponse;
                toAminoMsg(message: _127.ParamsResponse): _127.ParamsResponseAminoMsg;
                fromProtoMsg(message: _127.ParamsResponseProtoMsg): _127.ParamsResponse;
                toProto(message: _127.ParamsResponse): Uint8Array;
                toProtoMsg(message: _127.ParamsResponse): _127.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _126.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Params;
                fromPartial(object: Partial<_126.Params>): _126.Params;
                fromAmino(object: _126.ParamsAmino): _126.Params;
                toAmino(message: _126.Params): _126.ParamsAmino;
                fromAminoMsg(object: _126.ParamsAminoMsg): _126.Params;
                toAminoMsg(message: _126.Params): _126.ParamsAminoMsg;
                fromProtoMsg(message: _126.ParamsProtoMsg): _126.Params;
                toProto(message: _126.Params): Uint8Array;
                toProtoMsg(message: _126.Params): _126.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                toProto(message: _125.GenesisState): Uint8Array;
                toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _323.MsgClientImpl;
        QueryClientImpl: typeof _308.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _131.ModuleToDistributeCoinsRequest): Promise<_131.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _131.GaugeByIDRequest): Promise<_131.GaugeByIDResponse>;
            gauges(request?: _131.GaugesRequest): Promise<_131.GaugesResponse>;
            activeGauges(request?: _131.ActiveGaugesRequest): Promise<_131.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _131.ActiveGaugesPerDenomRequest): Promise<_131.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _131.UpcomingGaugesRequest): Promise<_131.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _131.UpcomingGaugesPerDenomRequest): Promise<_131.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _131.RewardsEstRequest): Promise<_131.RewardsEstResponse>;
            lockableDurations(request?: _131.QueryLockableDurationsRequest): Promise<_131.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _290.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _132.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _132.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _132.MsgCreateGauge): {
                    typeUrl: string;
                    value: _132.MsgCreateGauge;
                };
                addToGauge(value: _132.MsgAddToGauge): {
                    typeUrl: string;
                    value: _132.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _132.MsgCreateGauge): {
                    typeUrl: string;
                    value: _132.MsgCreateGauge;
                };
                addToGauge(value: _132.MsgAddToGauge): {
                    typeUrl: string;
                    value: _132.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _132.MsgCreateGauge) => _132.MsgCreateGaugeAmino;
                fromAmino: (object: _132.MsgCreateGaugeAmino) => _132.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _132.MsgAddToGauge) => _132.MsgAddToGaugeAmino;
                fromAmino: (object: _132.MsgAddToGaugeAmino) => _132.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _132.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateGauge;
            fromPartial(object: Partial<_132.MsgCreateGauge>): _132.MsgCreateGauge;
            fromAmino(object: _132.MsgCreateGaugeAmino): _132.MsgCreateGauge;
            toAmino(message: _132.MsgCreateGauge): _132.MsgCreateGaugeAmino;
            fromAminoMsg(object: _132.MsgCreateGaugeAminoMsg): _132.MsgCreateGauge;
            toAminoMsg(message: _132.MsgCreateGauge): _132.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _132.MsgCreateGaugeProtoMsg): _132.MsgCreateGauge;
            toProto(message: _132.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _132.MsgCreateGauge): _132.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _132.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_132.MsgCreateGaugeResponse>): _132.MsgCreateGaugeResponse;
            fromAmino(_: _132.MsgCreateGaugeResponseAmino): _132.MsgCreateGaugeResponse;
            toAmino(_: _132.MsgCreateGaugeResponse): _132.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _132.MsgCreateGaugeResponseAminoMsg): _132.MsgCreateGaugeResponse;
            toAminoMsg(message: _132.MsgCreateGaugeResponse): _132.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _132.MsgCreateGaugeResponseProtoMsg): _132.MsgCreateGaugeResponse;
            toProto(message: _132.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _132.MsgCreateGaugeResponse): _132.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _132.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgAddToGauge;
            fromPartial(object: Partial<_132.MsgAddToGauge>): _132.MsgAddToGauge;
            fromAmino(object: _132.MsgAddToGaugeAmino): _132.MsgAddToGauge;
            toAmino(message: _132.MsgAddToGauge): _132.MsgAddToGaugeAmino;
            fromAminoMsg(object: _132.MsgAddToGaugeAminoMsg): _132.MsgAddToGauge;
            toAminoMsg(message: _132.MsgAddToGauge): _132.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _132.MsgAddToGaugeProtoMsg): _132.MsgAddToGauge;
            toProto(message: _132.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _132.MsgAddToGauge): _132.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _132.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_132.MsgAddToGaugeResponse>): _132.MsgAddToGaugeResponse;
            fromAmino(_: _132.MsgAddToGaugeResponseAmino): _132.MsgAddToGaugeResponse;
            toAmino(_: _132.MsgAddToGaugeResponse): _132.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _132.MsgAddToGaugeResponseAminoMsg): _132.MsgAddToGaugeResponse;
            toAminoMsg(message: _132.MsgAddToGaugeResponse): _132.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _132.MsgAddToGaugeResponseProtoMsg): _132.MsgAddToGaugeResponse;
            toProto(message: _132.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _132.MsgAddToGaugeResponse): _132.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _131.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_131.ModuleToDistributeCoinsRequest>): _131.ModuleToDistributeCoinsRequest;
            fromAmino(_: _131.ModuleToDistributeCoinsRequestAmino): _131.ModuleToDistributeCoinsRequest;
            toAmino(_: _131.ModuleToDistributeCoinsRequest): _131.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _131.ModuleToDistributeCoinsRequestAminoMsg): _131.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _131.ModuleToDistributeCoinsRequest): _131.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _131.ModuleToDistributeCoinsRequestProtoMsg): _131.ModuleToDistributeCoinsRequest;
            toProto(message: _131.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _131.ModuleToDistributeCoinsRequest): _131.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _131.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_131.ModuleToDistributeCoinsResponse>): _131.ModuleToDistributeCoinsResponse;
            fromAmino(object: _131.ModuleToDistributeCoinsResponseAmino): _131.ModuleToDistributeCoinsResponse;
            toAmino(message: _131.ModuleToDistributeCoinsResponse): _131.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _131.ModuleToDistributeCoinsResponseAminoMsg): _131.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _131.ModuleToDistributeCoinsResponse): _131.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _131.ModuleToDistributeCoinsResponseProtoMsg): _131.ModuleToDistributeCoinsResponse;
            toProto(message: _131.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _131.ModuleToDistributeCoinsResponse): _131.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _131.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GaugeByIDRequest;
            fromPartial(object: Partial<_131.GaugeByIDRequest>): _131.GaugeByIDRequest;
            fromAmino(object: _131.GaugeByIDRequestAmino): _131.GaugeByIDRequest;
            toAmino(message: _131.GaugeByIDRequest): _131.GaugeByIDRequestAmino;
            fromAminoMsg(object: _131.GaugeByIDRequestAminoMsg): _131.GaugeByIDRequest;
            toAminoMsg(message: _131.GaugeByIDRequest): _131.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _131.GaugeByIDRequestProtoMsg): _131.GaugeByIDRequest;
            toProto(message: _131.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _131.GaugeByIDRequest): _131.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _131.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GaugeByIDResponse;
            fromPartial(object: Partial<_131.GaugeByIDResponse>): _131.GaugeByIDResponse;
            fromAmino(object: _131.GaugeByIDResponseAmino): _131.GaugeByIDResponse;
            toAmino(message: _131.GaugeByIDResponse): _131.GaugeByIDResponseAmino;
            fromAminoMsg(object: _131.GaugeByIDResponseAminoMsg): _131.GaugeByIDResponse;
            toAminoMsg(message: _131.GaugeByIDResponse): _131.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _131.GaugeByIDResponseProtoMsg): _131.GaugeByIDResponse;
            toProto(message: _131.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _131.GaugeByIDResponse): _131.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _131.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GaugesRequest;
            fromPartial(object: Partial<_131.GaugesRequest>): _131.GaugesRequest;
            fromAmino(object: _131.GaugesRequestAmino): _131.GaugesRequest;
            toAmino(message: _131.GaugesRequest): _131.GaugesRequestAmino;
            fromAminoMsg(object: _131.GaugesRequestAminoMsg): _131.GaugesRequest;
            toAminoMsg(message: _131.GaugesRequest): _131.GaugesRequestAminoMsg;
            fromProtoMsg(message: _131.GaugesRequestProtoMsg): _131.GaugesRequest;
            toProto(message: _131.GaugesRequest): Uint8Array;
            toProtoMsg(message: _131.GaugesRequest): _131.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _131.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GaugesResponse;
            fromPartial(object: Partial<_131.GaugesResponse>): _131.GaugesResponse;
            fromAmino(object: _131.GaugesResponseAmino): _131.GaugesResponse;
            toAmino(message: _131.GaugesResponse): _131.GaugesResponseAmino;
            fromAminoMsg(object: _131.GaugesResponseAminoMsg): _131.GaugesResponse;
            toAminoMsg(message: _131.GaugesResponse): _131.GaugesResponseAminoMsg;
            fromProtoMsg(message: _131.GaugesResponseProtoMsg): _131.GaugesResponse;
            toProto(message: _131.GaugesResponse): Uint8Array;
            toProtoMsg(message: _131.GaugesResponse): _131.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _131.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ActiveGaugesRequest;
            fromPartial(object: Partial<_131.ActiveGaugesRequest>): _131.ActiveGaugesRequest;
            fromAmino(object: _131.ActiveGaugesRequestAmino): _131.ActiveGaugesRequest;
            toAmino(message: _131.ActiveGaugesRequest): _131.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _131.ActiveGaugesRequestAminoMsg): _131.ActiveGaugesRequest;
            toAminoMsg(message: _131.ActiveGaugesRequest): _131.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _131.ActiveGaugesRequestProtoMsg): _131.ActiveGaugesRequest;
            toProto(message: _131.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _131.ActiveGaugesRequest): _131.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _131.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ActiveGaugesResponse;
            fromPartial(object: Partial<_131.ActiveGaugesResponse>): _131.ActiveGaugesResponse;
            fromAmino(object: _131.ActiveGaugesResponseAmino): _131.ActiveGaugesResponse;
            toAmino(message: _131.ActiveGaugesResponse): _131.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _131.ActiveGaugesResponseAminoMsg): _131.ActiveGaugesResponse;
            toAminoMsg(message: _131.ActiveGaugesResponse): _131.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _131.ActiveGaugesResponseProtoMsg): _131.ActiveGaugesResponse;
            toProto(message: _131.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _131.ActiveGaugesResponse): _131.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _131.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_131.ActiveGaugesPerDenomRequest>): _131.ActiveGaugesPerDenomRequest;
            fromAmino(object: _131.ActiveGaugesPerDenomRequestAmino): _131.ActiveGaugesPerDenomRequest;
            toAmino(message: _131.ActiveGaugesPerDenomRequest): _131.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _131.ActiveGaugesPerDenomRequestAminoMsg): _131.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _131.ActiveGaugesPerDenomRequest): _131.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _131.ActiveGaugesPerDenomRequestProtoMsg): _131.ActiveGaugesPerDenomRequest;
            toProto(message: _131.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _131.ActiveGaugesPerDenomRequest): _131.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _131.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_131.ActiveGaugesPerDenomResponse>): _131.ActiveGaugesPerDenomResponse;
            fromAmino(object: _131.ActiveGaugesPerDenomResponseAmino): _131.ActiveGaugesPerDenomResponse;
            toAmino(message: _131.ActiveGaugesPerDenomResponse): _131.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _131.ActiveGaugesPerDenomResponseAminoMsg): _131.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _131.ActiveGaugesPerDenomResponse): _131.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _131.ActiveGaugesPerDenomResponseProtoMsg): _131.ActiveGaugesPerDenomResponse;
            toProto(message: _131.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _131.ActiveGaugesPerDenomResponse): _131.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _131.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpcomingGaugesRequest;
            fromPartial(object: Partial<_131.UpcomingGaugesRequest>): _131.UpcomingGaugesRequest;
            fromAmino(object: _131.UpcomingGaugesRequestAmino): _131.UpcomingGaugesRequest;
            toAmino(message: _131.UpcomingGaugesRequest): _131.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _131.UpcomingGaugesRequestAminoMsg): _131.UpcomingGaugesRequest;
            toAminoMsg(message: _131.UpcomingGaugesRequest): _131.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _131.UpcomingGaugesRequestProtoMsg): _131.UpcomingGaugesRequest;
            toProto(message: _131.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _131.UpcomingGaugesRequest): _131.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _131.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpcomingGaugesResponse;
            fromPartial(object: Partial<_131.UpcomingGaugesResponse>): _131.UpcomingGaugesResponse;
            fromAmino(object: _131.UpcomingGaugesResponseAmino): _131.UpcomingGaugesResponse;
            toAmino(message: _131.UpcomingGaugesResponse): _131.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _131.UpcomingGaugesResponseAminoMsg): _131.UpcomingGaugesResponse;
            toAminoMsg(message: _131.UpcomingGaugesResponse): _131.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _131.UpcomingGaugesResponseProtoMsg): _131.UpcomingGaugesResponse;
            toProto(message: _131.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _131.UpcomingGaugesResponse): _131.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _131.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_131.UpcomingGaugesPerDenomRequest>): _131.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _131.UpcomingGaugesPerDenomRequestAmino): _131.UpcomingGaugesPerDenomRequest;
            toAmino(message: _131.UpcomingGaugesPerDenomRequest): _131.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _131.UpcomingGaugesPerDenomRequestAminoMsg): _131.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _131.UpcomingGaugesPerDenomRequest): _131.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _131.UpcomingGaugesPerDenomRequestProtoMsg): _131.UpcomingGaugesPerDenomRequest;
            toProto(message: _131.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _131.UpcomingGaugesPerDenomRequest): _131.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _131.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_131.UpcomingGaugesPerDenomResponse>): _131.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _131.UpcomingGaugesPerDenomResponseAmino): _131.UpcomingGaugesPerDenomResponse;
            toAmino(message: _131.UpcomingGaugesPerDenomResponse): _131.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _131.UpcomingGaugesPerDenomResponseAminoMsg): _131.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _131.UpcomingGaugesPerDenomResponse): _131.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _131.UpcomingGaugesPerDenomResponseProtoMsg): _131.UpcomingGaugesPerDenomResponse;
            toProto(message: _131.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _131.UpcomingGaugesPerDenomResponse): _131.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _131.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.RewardsEstRequest;
            fromPartial(object: Partial<_131.RewardsEstRequest>): _131.RewardsEstRequest;
            fromAmino(object: _131.RewardsEstRequestAmino): _131.RewardsEstRequest;
            toAmino(message: _131.RewardsEstRequest): _131.RewardsEstRequestAmino;
            fromAminoMsg(object: _131.RewardsEstRequestAminoMsg): _131.RewardsEstRequest;
            toAminoMsg(message: _131.RewardsEstRequest): _131.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _131.RewardsEstRequestProtoMsg): _131.RewardsEstRequest;
            toProto(message: _131.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _131.RewardsEstRequest): _131.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _131.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.RewardsEstResponse;
            fromPartial(object: Partial<_131.RewardsEstResponse>): _131.RewardsEstResponse;
            fromAmino(object: _131.RewardsEstResponseAmino): _131.RewardsEstResponse;
            toAmino(message: _131.RewardsEstResponse): _131.RewardsEstResponseAmino;
            fromAminoMsg(object: _131.RewardsEstResponseAminoMsg): _131.RewardsEstResponse;
            toAminoMsg(message: _131.RewardsEstResponse): _131.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _131.RewardsEstResponseProtoMsg): _131.RewardsEstResponse;
            toProto(message: _131.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _131.RewardsEstResponse): _131.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _131.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_131.QueryLockableDurationsRequest>): _131.QueryLockableDurationsRequest;
            fromAmino(_: _131.QueryLockableDurationsRequestAmino): _131.QueryLockableDurationsRequest;
            toAmino(_: _131.QueryLockableDurationsRequest): _131.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _131.QueryLockableDurationsRequestAminoMsg): _131.QueryLockableDurationsRequest;
            toAminoMsg(message: _131.QueryLockableDurationsRequest): _131.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _131.QueryLockableDurationsRequestProtoMsg): _131.QueryLockableDurationsRequest;
            toProto(message: _131.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _131.QueryLockableDurationsRequest): _131.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _131.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_131.QueryLockableDurationsResponse>): _131.QueryLockableDurationsResponse;
            fromAmino(object: _131.QueryLockableDurationsResponseAmino): _131.QueryLockableDurationsResponse;
            toAmino(message: _131.QueryLockableDurationsResponse): _131.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _131.QueryLockableDurationsResponseAminoMsg): _131.QueryLockableDurationsResponse;
            toAminoMsg(message: _131.QueryLockableDurationsResponse): _131.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _131.QueryLockableDurationsResponseProtoMsg): _131.QueryLockableDurationsResponse;
            toProto(message: _131.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _131.QueryLockableDurationsResponse): _131.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
            fromPartial(object: Partial<_130.Params>): _130.Params;
            fromAmino(object: _130.ParamsAmino): _130.Params;
            toAmino(message: _130.Params): _130.ParamsAmino;
            fromAminoMsg(object: _130.ParamsAminoMsg): _130.Params;
            toAminoMsg(message: _130.Params): _130.ParamsAminoMsg;
            fromProtoMsg(message: _130.ParamsProtoMsg): _130.Params;
            toProto(message: _130.Params): Uint8Array;
            toProtoMsg(message: _130.Params): _130.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
            fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
            fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
            toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
            fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
            toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
            fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
            toProto(message: _129.GenesisState): Uint8Array;
            toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _128.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Gauge;
            fromPartial(object: Partial<_128.Gauge>): _128.Gauge;
            fromAmino(object: _128.GaugeAmino): _128.Gauge;
            toAmino(message: _128.Gauge): _128.GaugeAmino;
            fromAminoMsg(object: _128.GaugeAminoMsg): _128.Gauge;
            toAminoMsg(message: _128.Gauge): _128.GaugeAminoMsg;
            fromProtoMsg(message: _128.GaugeProtoMsg): _128.Gauge;
            toProto(message: _128.Gauge): Uint8Array;
            toProtoMsg(message: _128.Gauge): _128.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _128.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.LockableDurationsInfo;
            fromPartial(object: Partial<_128.LockableDurationsInfo>): _128.LockableDurationsInfo;
            fromAmino(object: _128.LockableDurationsInfoAmino): _128.LockableDurationsInfo;
            toAmino(message: _128.LockableDurationsInfo): _128.LockableDurationsInfoAmino;
            fromAminoMsg(object: _128.LockableDurationsInfoAminoMsg): _128.LockableDurationsInfo;
            toAminoMsg(message: _128.LockableDurationsInfo): _128.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _128.LockableDurationsInfoProtoMsg): _128.LockableDurationsInfo;
            toProto(message: _128.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _128.LockableDurationsInfo): _128.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _324.MsgClientImpl;
        QueryClientImpl: typeof _309.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _136.ModuleBalanceRequest): Promise<_136.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _136.ModuleLockedAmountRequest): Promise<_136.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _136.AccountUnlockableCoinsRequest): Promise<_136.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _136.AccountUnlockingCoinsRequest): Promise<_136.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _136.AccountLockedCoinsRequest): Promise<_136.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _136.AccountLockedPastTimeRequest): Promise<_136.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_136.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _136.AccountUnlockedBeforeTimeRequest): Promise<_136.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _136.AccountLockedPastTimeDenomRequest): Promise<_136.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _136.LockedDenomRequest): Promise<_136.LockedDenomResponse>;
            lockedByID(request: _136.LockedRequest): Promise<_136.LockedResponse>;
            nextLockID(request?: _136.NextLockIDRequest): Promise<_136.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _136.SyntheticLockupsByLockupIDRequest): Promise<_136.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _136.AccountLockedLongerDurationRequest): Promise<_136.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _136.AccountLockedDurationRequest): Promise<_136.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_136.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _136.AccountLockedLongerDurationDenomRequest): Promise<_136.AccountLockedLongerDurationDenomResponse>;
            params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _291.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _137.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _137.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _137.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _137.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _137.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _137.MsgLockTokens): {
                    typeUrl: string;
                    value: _137.MsgLockTokens;
                };
                beginUnlockingAll(value: _137.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _137.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _137.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _137.MsgBeginUnlocking;
                };
                extendLockup(value: _137.MsgExtendLockup): {
                    typeUrl: string;
                    value: _137.MsgExtendLockup;
                };
                forceUnlock(value: _137.MsgForceUnlock): {
                    typeUrl: string;
                    value: _137.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _137.MsgLockTokens): {
                    typeUrl: string;
                    value: _137.MsgLockTokens;
                };
                beginUnlockingAll(value: _137.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _137.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _137.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _137.MsgBeginUnlocking;
                };
                extendLockup(value: _137.MsgExtendLockup): {
                    typeUrl: string;
                    value: _137.MsgExtendLockup;
                };
                forceUnlock(value: _137.MsgForceUnlock): {
                    typeUrl: string;
                    value: _137.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _137.MsgLockTokens) => _137.MsgLockTokensAmino;
                fromAmino: (object: _137.MsgLockTokensAmino) => _137.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _137.MsgBeginUnlockingAll) => _137.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _137.MsgBeginUnlockingAllAmino) => _137.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _137.MsgBeginUnlocking) => _137.MsgBeginUnlockingAmino;
                fromAmino: (object: _137.MsgBeginUnlockingAmino) => _137.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _137.MsgExtendLockup) => _137.MsgExtendLockupAmino;
                fromAmino: (object: _137.MsgExtendLockupAmino) => _137.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _137.MsgForceUnlock) => _137.MsgForceUnlockAmino;
                fromAmino: (object: _137.MsgForceUnlockAmino) => _137.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _137.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgLockTokens;
            fromPartial(object: Partial<_137.MsgLockTokens>): _137.MsgLockTokens;
            fromAmino(object: _137.MsgLockTokensAmino): _137.MsgLockTokens;
            toAmino(message: _137.MsgLockTokens): _137.MsgLockTokensAmino;
            fromAminoMsg(object: _137.MsgLockTokensAminoMsg): _137.MsgLockTokens;
            toAminoMsg(message: _137.MsgLockTokens): _137.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _137.MsgLockTokensProtoMsg): _137.MsgLockTokens;
            toProto(message: _137.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _137.MsgLockTokens): _137.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _137.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgLockTokensResponse;
            fromPartial(object: Partial<_137.MsgLockTokensResponse>): _137.MsgLockTokensResponse;
            fromAmino(object: _137.MsgLockTokensResponseAmino): _137.MsgLockTokensResponse;
            toAmino(message: _137.MsgLockTokensResponse): _137.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _137.MsgLockTokensResponseAminoMsg): _137.MsgLockTokensResponse;
            toAminoMsg(message: _137.MsgLockTokensResponse): _137.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _137.MsgLockTokensResponseProtoMsg): _137.MsgLockTokensResponse;
            toProto(message: _137.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _137.MsgLockTokensResponse): _137.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _137.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_137.MsgBeginUnlockingAll>): _137.MsgBeginUnlockingAll;
            fromAmino(object: _137.MsgBeginUnlockingAllAmino): _137.MsgBeginUnlockingAll;
            toAmino(message: _137.MsgBeginUnlockingAll): _137.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _137.MsgBeginUnlockingAllAminoMsg): _137.MsgBeginUnlockingAll;
            toAminoMsg(message: _137.MsgBeginUnlockingAll): _137.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _137.MsgBeginUnlockingAllProtoMsg): _137.MsgBeginUnlockingAll;
            toProto(message: _137.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _137.MsgBeginUnlockingAll): _137.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _137.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_137.MsgBeginUnlockingAllResponse>): _137.MsgBeginUnlockingAllResponse;
            fromAmino(object: _137.MsgBeginUnlockingAllResponseAmino): _137.MsgBeginUnlockingAllResponse;
            toAmino(message: _137.MsgBeginUnlockingAllResponse): _137.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _137.MsgBeginUnlockingAllResponseAminoMsg): _137.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _137.MsgBeginUnlockingAllResponse): _137.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _137.MsgBeginUnlockingAllResponseProtoMsg): _137.MsgBeginUnlockingAllResponse;
            toProto(message: _137.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _137.MsgBeginUnlockingAllResponse): _137.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _137.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgBeginUnlocking;
            fromPartial(object: Partial<_137.MsgBeginUnlocking>): _137.MsgBeginUnlocking;
            fromAmino(object: _137.MsgBeginUnlockingAmino): _137.MsgBeginUnlocking;
            toAmino(message: _137.MsgBeginUnlocking): _137.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _137.MsgBeginUnlockingAminoMsg): _137.MsgBeginUnlocking;
            toAminoMsg(message: _137.MsgBeginUnlocking): _137.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _137.MsgBeginUnlockingProtoMsg): _137.MsgBeginUnlocking;
            toProto(message: _137.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _137.MsgBeginUnlocking): _137.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _137.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_137.MsgBeginUnlockingResponse>): _137.MsgBeginUnlockingResponse;
            fromAmino(object: _137.MsgBeginUnlockingResponseAmino): _137.MsgBeginUnlockingResponse;
            toAmino(message: _137.MsgBeginUnlockingResponse): _137.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _137.MsgBeginUnlockingResponseAminoMsg): _137.MsgBeginUnlockingResponse;
            toAminoMsg(message: _137.MsgBeginUnlockingResponse): _137.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _137.MsgBeginUnlockingResponseProtoMsg): _137.MsgBeginUnlockingResponse;
            toProto(message: _137.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _137.MsgBeginUnlockingResponse): _137.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _137.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExtendLockup;
            fromPartial(object: Partial<_137.MsgExtendLockup>): _137.MsgExtendLockup;
            fromAmino(object: _137.MsgExtendLockupAmino): _137.MsgExtendLockup;
            toAmino(message: _137.MsgExtendLockup): _137.MsgExtendLockupAmino;
            fromAminoMsg(object: _137.MsgExtendLockupAminoMsg): _137.MsgExtendLockup;
            toAminoMsg(message: _137.MsgExtendLockup): _137.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _137.MsgExtendLockupProtoMsg): _137.MsgExtendLockup;
            toProto(message: _137.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _137.MsgExtendLockup): _137.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _137.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExtendLockupResponse;
            fromPartial(object: Partial<_137.MsgExtendLockupResponse>): _137.MsgExtendLockupResponse;
            fromAmino(object: _137.MsgExtendLockupResponseAmino): _137.MsgExtendLockupResponse;
            toAmino(message: _137.MsgExtendLockupResponse): _137.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _137.MsgExtendLockupResponseAminoMsg): _137.MsgExtendLockupResponse;
            toAminoMsg(message: _137.MsgExtendLockupResponse): _137.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _137.MsgExtendLockupResponseProtoMsg): _137.MsgExtendLockupResponse;
            toProto(message: _137.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _137.MsgExtendLockupResponse): _137.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _137.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgForceUnlock;
            fromPartial(object: Partial<_137.MsgForceUnlock>): _137.MsgForceUnlock;
            fromAmino(object: _137.MsgForceUnlockAmino): _137.MsgForceUnlock;
            toAmino(message: _137.MsgForceUnlock): _137.MsgForceUnlockAmino;
            fromAminoMsg(object: _137.MsgForceUnlockAminoMsg): _137.MsgForceUnlock;
            toAminoMsg(message: _137.MsgForceUnlock): _137.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _137.MsgForceUnlockProtoMsg): _137.MsgForceUnlock;
            toProto(message: _137.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _137.MsgForceUnlock): _137.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _137.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgForceUnlockResponse;
            fromPartial(object: Partial<_137.MsgForceUnlockResponse>): _137.MsgForceUnlockResponse;
            fromAmino(object: _137.MsgForceUnlockResponseAmino): _137.MsgForceUnlockResponse;
            toAmino(message: _137.MsgForceUnlockResponse): _137.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _137.MsgForceUnlockResponseAminoMsg): _137.MsgForceUnlockResponse;
            toAminoMsg(message: _137.MsgForceUnlockResponse): _137.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _137.MsgForceUnlockResponseProtoMsg): _137.MsgForceUnlockResponse;
            toProto(message: _137.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _137.MsgForceUnlockResponse): _137.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _136.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ModuleBalanceRequest;
            fromPartial(_: Partial<_136.ModuleBalanceRequest>): _136.ModuleBalanceRequest;
            fromAmino(_: _136.ModuleBalanceRequestAmino): _136.ModuleBalanceRequest;
            toAmino(_: _136.ModuleBalanceRequest): _136.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _136.ModuleBalanceRequestAminoMsg): _136.ModuleBalanceRequest;
            toAminoMsg(message: _136.ModuleBalanceRequest): _136.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _136.ModuleBalanceRequestProtoMsg): _136.ModuleBalanceRequest;
            toProto(message: _136.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _136.ModuleBalanceRequest): _136.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _136.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ModuleBalanceResponse;
            fromPartial(object: Partial<_136.ModuleBalanceResponse>): _136.ModuleBalanceResponse;
            fromAmino(object: _136.ModuleBalanceResponseAmino): _136.ModuleBalanceResponse;
            toAmino(message: _136.ModuleBalanceResponse): _136.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _136.ModuleBalanceResponseAminoMsg): _136.ModuleBalanceResponse;
            toAminoMsg(message: _136.ModuleBalanceResponse): _136.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _136.ModuleBalanceResponseProtoMsg): _136.ModuleBalanceResponse;
            toProto(message: _136.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _136.ModuleBalanceResponse): _136.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _136.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_136.ModuleLockedAmountRequest>): _136.ModuleLockedAmountRequest;
            fromAmino(_: _136.ModuleLockedAmountRequestAmino): _136.ModuleLockedAmountRequest;
            toAmino(_: _136.ModuleLockedAmountRequest): _136.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _136.ModuleLockedAmountRequestAminoMsg): _136.ModuleLockedAmountRequest;
            toAminoMsg(message: _136.ModuleLockedAmountRequest): _136.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _136.ModuleLockedAmountRequestProtoMsg): _136.ModuleLockedAmountRequest;
            toProto(message: _136.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _136.ModuleLockedAmountRequest): _136.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _136.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_136.ModuleLockedAmountResponse>): _136.ModuleLockedAmountResponse;
            fromAmino(object: _136.ModuleLockedAmountResponseAmino): _136.ModuleLockedAmountResponse;
            toAmino(message: _136.ModuleLockedAmountResponse): _136.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _136.ModuleLockedAmountResponseAminoMsg): _136.ModuleLockedAmountResponse;
            toAminoMsg(message: _136.ModuleLockedAmountResponse): _136.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _136.ModuleLockedAmountResponseProtoMsg): _136.ModuleLockedAmountResponse;
            toProto(message: _136.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _136.ModuleLockedAmountResponse): _136.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _136.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_136.AccountUnlockableCoinsRequest>): _136.AccountUnlockableCoinsRequest;
            fromAmino(object: _136.AccountUnlockableCoinsRequestAmino): _136.AccountUnlockableCoinsRequest;
            toAmino(message: _136.AccountUnlockableCoinsRequest): _136.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _136.AccountUnlockableCoinsRequestAminoMsg): _136.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _136.AccountUnlockableCoinsRequest): _136.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockableCoinsRequestProtoMsg): _136.AccountUnlockableCoinsRequest;
            toProto(message: _136.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockableCoinsRequest): _136.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _136.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_136.AccountUnlockableCoinsResponse>): _136.AccountUnlockableCoinsResponse;
            fromAmino(object: _136.AccountUnlockableCoinsResponseAmino): _136.AccountUnlockableCoinsResponse;
            toAmino(message: _136.AccountUnlockableCoinsResponse): _136.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _136.AccountUnlockableCoinsResponseAminoMsg): _136.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _136.AccountUnlockableCoinsResponse): _136.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockableCoinsResponseProtoMsg): _136.AccountUnlockableCoinsResponse;
            toProto(message: _136.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockableCoinsResponse): _136.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _136.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_136.AccountUnlockingCoinsRequest>): _136.AccountUnlockingCoinsRequest;
            fromAmino(object: _136.AccountUnlockingCoinsRequestAmino): _136.AccountUnlockingCoinsRequest;
            toAmino(message: _136.AccountUnlockingCoinsRequest): _136.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _136.AccountUnlockingCoinsRequestAminoMsg): _136.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _136.AccountUnlockingCoinsRequest): _136.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockingCoinsRequestProtoMsg): _136.AccountUnlockingCoinsRequest;
            toProto(message: _136.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockingCoinsRequest): _136.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _136.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_136.AccountUnlockingCoinsResponse>): _136.AccountUnlockingCoinsResponse;
            fromAmino(object: _136.AccountUnlockingCoinsResponseAmino): _136.AccountUnlockingCoinsResponse;
            toAmino(message: _136.AccountUnlockingCoinsResponse): _136.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _136.AccountUnlockingCoinsResponseAminoMsg): _136.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _136.AccountUnlockingCoinsResponse): _136.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockingCoinsResponseProtoMsg): _136.AccountUnlockingCoinsResponse;
            toProto(message: _136.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockingCoinsResponse): _136.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_136.AccountLockedCoinsRequest>): _136.AccountLockedCoinsRequest;
            fromAmino(object: _136.AccountLockedCoinsRequestAmino): _136.AccountLockedCoinsRequest;
            toAmino(message: _136.AccountLockedCoinsRequest): _136.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _136.AccountLockedCoinsRequestAminoMsg): _136.AccountLockedCoinsRequest;
            toAminoMsg(message: _136.AccountLockedCoinsRequest): _136.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedCoinsRequestProtoMsg): _136.AccountLockedCoinsRequest;
            toProto(message: _136.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedCoinsRequest): _136.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_136.AccountLockedCoinsResponse>): _136.AccountLockedCoinsResponse;
            fromAmino(object: _136.AccountLockedCoinsResponseAmino): _136.AccountLockedCoinsResponse;
            toAmino(message: _136.AccountLockedCoinsResponse): _136.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _136.AccountLockedCoinsResponseAminoMsg): _136.AccountLockedCoinsResponse;
            toAminoMsg(message: _136.AccountLockedCoinsResponse): _136.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedCoinsResponseProtoMsg): _136.AccountLockedCoinsResponse;
            toProto(message: _136.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedCoinsResponse): _136.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_136.AccountLockedPastTimeRequest>): _136.AccountLockedPastTimeRequest;
            fromAmino(object: _136.AccountLockedPastTimeRequestAmino): _136.AccountLockedPastTimeRequest;
            toAmino(message: _136.AccountLockedPastTimeRequest): _136.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeRequestAminoMsg): _136.AccountLockedPastTimeRequest;
            toAminoMsg(message: _136.AccountLockedPastTimeRequest): _136.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeRequestProtoMsg): _136.AccountLockedPastTimeRequest;
            toProto(message: _136.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeRequest): _136.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_136.AccountLockedPastTimeResponse>): _136.AccountLockedPastTimeResponse;
            fromAmino(object: _136.AccountLockedPastTimeResponseAmino): _136.AccountLockedPastTimeResponse;
            toAmino(message: _136.AccountLockedPastTimeResponse): _136.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeResponseAminoMsg): _136.AccountLockedPastTimeResponse;
            toAminoMsg(message: _136.AccountLockedPastTimeResponse): _136.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeResponseProtoMsg): _136.AccountLockedPastTimeResponse;
            toProto(message: _136.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeResponse): _136.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_136.AccountLockedPastTimeNotUnlockingOnlyRequest>): _136.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _136.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _136.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): _136.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _136.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): _136.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _136.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): _136.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_136.AccountLockedPastTimeNotUnlockingOnlyResponse>): _136.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _136.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _136.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponse): _136.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _136.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponse): _136.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _136.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeNotUnlockingOnlyResponse): _136.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _136.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_136.AccountUnlockedBeforeTimeRequest>): _136.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _136.AccountUnlockedBeforeTimeRequestAmino): _136.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _136.AccountUnlockedBeforeTimeRequest): _136.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _136.AccountUnlockedBeforeTimeRequestAminoMsg): _136.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _136.AccountUnlockedBeforeTimeRequest): _136.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockedBeforeTimeRequestProtoMsg): _136.AccountUnlockedBeforeTimeRequest;
            toProto(message: _136.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockedBeforeTimeRequest): _136.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _136.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_136.AccountUnlockedBeforeTimeResponse>): _136.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _136.AccountUnlockedBeforeTimeResponseAmino): _136.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _136.AccountUnlockedBeforeTimeResponse): _136.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _136.AccountUnlockedBeforeTimeResponseAminoMsg): _136.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _136.AccountUnlockedBeforeTimeResponse): _136.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _136.AccountUnlockedBeforeTimeResponseProtoMsg): _136.AccountUnlockedBeforeTimeResponse;
            toProto(message: _136.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _136.AccountUnlockedBeforeTimeResponse): _136.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_136.AccountLockedPastTimeDenomRequest>): _136.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _136.AccountLockedPastTimeDenomRequestAmino): _136.AccountLockedPastTimeDenomRequest;
            toAmino(message: _136.AccountLockedPastTimeDenomRequest): _136.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeDenomRequestAminoMsg): _136.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _136.AccountLockedPastTimeDenomRequest): _136.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeDenomRequestProtoMsg): _136.AccountLockedPastTimeDenomRequest;
            toProto(message: _136.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeDenomRequest): _136.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_136.AccountLockedPastTimeDenomResponse>): _136.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _136.AccountLockedPastTimeDenomResponseAmino): _136.AccountLockedPastTimeDenomResponse;
            toAmino(message: _136.AccountLockedPastTimeDenomResponse): _136.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _136.AccountLockedPastTimeDenomResponseAminoMsg): _136.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _136.AccountLockedPastTimeDenomResponse): _136.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedPastTimeDenomResponseProtoMsg): _136.AccountLockedPastTimeDenomResponse;
            toProto(message: _136.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedPastTimeDenomResponse): _136.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _136.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LockedDenomRequest;
            fromPartial(object: Partial<_136.LockedDenomRequest>): _136.LockedDenomRequest;
            fromAmino(object: _136.LockedDenomRequestAmino): _136.LockedDenomRequest;
            toAmino(message: _136.LockedDenomRequest): _136.LockedDenomRequestAmino;
            fromAminoMsg(object: _136.LockedDenomRequestAminoMsg): _136.LockedDenomRequest;
            toAminoMsg(message: _136.LockedDenomRequest): _136.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _136.LockedDenomRequestProtoMsg): _136.LockedDenomRequest;
            toProto(message: _136.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _136.LockedDenomRequest): _136.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _136.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LockedDenomResponse;
            fromPartial(object: Partial<_136.LockedDenomResponse>): _136.LockedDenomResponse;
            fromAmino(object: _136.LockedDenomResponseAmino): _136.LockedDenomResponse;
            toAmino(message: _136.LockedDenomResponse): _136.LockedDenomResponseAmino;
            fromAminoMsg(object: _136.LockedDenomResponseAminoMsg): _136.LockedDenomResponse;
            toAminoMsg(message: _136.LockedDenomResponse): _136.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _136.LockedDenomResponseProtoMsg): _136.LockedDenomResponse;
            toProto(message: _136.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _136.LockedDenomResponse): _136.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _136.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LockedRequest;
            fromPartial(object: Partial<_136.LockedRequest>): _136.LockedRequest;
            fromAmino(object: _136.LockedRequestAmino): _136.LockedRequest;
            toAmino(message: _136.LockedRequest): _136.LockedRequestAmino;
            fromAminoMsg(object: _136.LockedRequestAminoMsg): _136.LockedRequest;
            toAminoMsg(message: _136.LockedRequest): _136.LockedRequestAminoMsg;
            fromProtoMsg(message: _136.LockedRequestProtoMsg): _136.LockedRequest;
            toProto(message: _136.LockedRequest): Uint8Array;
            toProtoMsg(message: _136.LockedRequest): _136.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _136.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LockedResponse;
            fromPartial(object: Partial<_136.LockedResponse>): _136.LockedResponse;
            fromAmino(object: _136.LockedResponseAmino): _136.LockedResponse;
            toAmino(message: _136.LockedResponse): _136.LockedResponseAmino;
            fromAminoMsg(object: _136.LockedResponseAminoMsg): _136.LockedResponse;
            toAminoMsg(message: _136.LockedResponse): _136.LockedResponseAminoMsg;
            fromProtoMsg(message: _136.LockedResponseProtoMsg): _136.LockedResponse;
            toProto(message: _136.LockedResponse): Uint8Array;
            toProtoMsg(message: _136.LockedResponse): _136.LockedResponseProtoMsg;
        };
        NextLockIDRequest: {
            typeUrl: string;
            encode(_: _136.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NextLockIDRequest;
            fromPartial(_: Partial<_136.NextLockIDRequest>): _136.NextLockIDRequest;
            fromAmino(_: _136.NextLockIDRequestAmino): _136.NextLockIDRequest;
            toAmino(_: _136.NextLockIDRequest): _136.NextLockIDRequestAmino;
            fromAminoMsg(object: _136.NextLockIDRequestAminoMsg): _136.NextLockIDRequest;
            toAminoMsg(message: _136.NextLockIDRequest): _136.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _136.NextLockIDRequestProtoMsg): _136.NextLockIDRequest;
            toProto(message: _136.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _136.NextLockIDRequest): _136.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            typeUrl: string;
            encode(message: _136.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NextLockIDResponse;
            fromPartial(object: Partial<_136.NextLockIDResponse>): _136.NextLockIDResponse;
            fromAmino(object: _136.NextLockIDResponseAmino): _136.NextLockIDResponse;
            toAmino(message: _136.NextLockIDResponse): _136.NextLockIDResponseAmino;
            fromAminoMsg(object: _136.NextLockIDResponseAminoMsg): _136.NextLockIDResponse;
            toAminoMsg(message: _136.NextLockIDResponse): _136.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _136.NextLockIDResponseProtoMsg): _136.NextLockIDResponse;
            toProto(message: _136.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _136.NextLockIDResponse): _136.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _136.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_136.SyntheticLockupsByLockupIDRequest>): _136.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _136.SyntheticLockupsByLockupIDRequestAmino): _136.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _136.SyntheticLockupsByLockupIDRequest): _136.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _136.SyntheticLockupsByLockupIDRequestAminoMsg): _136.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _136.SyntheticLockupsByLockupIDRequest): _136.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _136.SyntheticLockupsByLockupIDRequestProtoMsg): _136.SyntheticLockupsByLockupIDRequest;
            toProto(message: _136.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _136.SyntheticLockupsByLockupIDRequest): _136.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _136.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_136.SyntheticLockupsByLockupIDResponse>): _136.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _136.SyntheticLockupsByLockupIDResponseAmino): _136.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _136.SyntheticLockupsByLockupIDResponse): _136.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _136.SyntheticLockupsByLockupIDResponseAminoMsg): _136.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _136.SyntheticLockupsByLockupIDResponse): _136.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _136.SyntheticLockupsByLockupIDResponseProtoMsg): _136.SyntheticLockupsByLockupIDResponse;
            toProto(message: _136.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _136.SyntheticLockupsByLockupIDResponse): _136.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationRequest>): _136.AccountLockedLongerDurationRequest;
            fromAmino(object: _136.AccountLockedLongerDurationRequestAmino): _136.AccountLockedLongerDurationRequest;
            toAmino(message: _136.AccountLockedLongerDurationRequest): _136.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationRequestAminoMsg): _136.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _136.AccountLockedLongerDurationRequest): _136.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationRequestProtoMsg): _136.AccountLockedLongerDurationRequest;
            toProto(message: _136.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationRequest): _136.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationResponse>): _136.AccountLockedLongerDurationResponse;
            fromAmino(object: _136.AccountLockedLongerDurationResponseAmino): _136.AccountLockedLongerDurationResponse;
            toAmino(message: _136.AccountLockedLongerDurationResponse): _136.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationResponseAminoMsg): _136.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _136.AccountLockedLongerDurationResponse): _136.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationResponseProtoMsg): _136.AccountLockedLongerDurationResponse;
            toProto(message: _136.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationResponse): _136.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedDurationRequest;
            fromPartial(object: Partial<_136.AccountLockedDurationRequest>): _136.AccountLockedDurationRequest;
            fromAmino(object: _136.AccountLockedDurationRequestAmino): _136.AccountLockedDurationRequest;
            toAmino(message: _136.AccountLockedDurationRequest): _136.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _136.AccountLockedDurationRequestAminoMsg): _136.AccountLockedDurationRequest;
            toAminoMsg(message: _136.AccountLockedDurationRequest): _136.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedDurationRequestProtoMsg): _136.AccountLockedDurationRequest;
            toProto(message: _136.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedDurationRequest): _136.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedDurationResponse;
            fromPartial(object: Partial<_136.AccountLockedDurationResponse>): _136.AccountLockedDurationResponse;
            fromAmino(object: _136.AccountLockedDurationResponseAmino): _136.AccountLockedDurationResponse;
            toAmino(message: _136.AccountLockedDurationResponse): _136.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _136.AccountLockedDurationResponseAminoMsg): _136.AccountLockedDurationResponse;
            toAminoMsg(message: _136.AccountLockedDurationResponse): _136.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedDurationResponseProtoMsg): _136.AccountLockedDurationResponse;
            toProto(message: _136.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedDurationResponse): _136.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _136.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _136.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _136.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): _136.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _136.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): _136.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _136.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): _136.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _136.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _136.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _136.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponse): _136.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _136.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponse): _136.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _136.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationNotUnlockingOnlyResponse): _136.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationDenomRequest>): _136.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _136.AccountLockedLongerDurationDenomRequestAmino): _136.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _136.AccountLockedLongerDurationDenomRequest): _136.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationDenomRequestAminoMsg): _136.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _136.AccountLockedLongerDurationDenomRequest): _136.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationDenomRequestProtoMsg): _136.AccountLockedLongerDurationDenomRequest;
            toProto(message: _136.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationDenomRequest): _136.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _136.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_136.AccountLockedLongerDurationDenomResponse>): _136.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _136.AccountLockedLongerDurationDenomResponseAmino): _136.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _136.AccountLockedLongerDurationDenomResponse): _136.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _136.AccountLockedLongerDurationDenomResponseAminoMsg): _136.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _136.AccountLockedLongerDurationDenomResponse): _136.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _136.AccountLockedLongerDurationDenomResponseProtoMsg): _136.AccountLockedLongerDurationDenomResponse;
            toProto(message: _136.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _136.AccountLockedLongerDurationDenomResponse): _136.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsRequest;
            fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
            fromAmino(_: _136.QueryParamsRequestAmino): _136.QueryParamsRequest;
            toAmino(_: _136.QueryParamsRequest): _136.QueryParamsRequestAmino;
            fromAminoMsg(object: _136.QueryParamsRequestAminoMsg): _136.QueryParamsRequest;
            toAminoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _136.QueryParamsRequestProtoMsg): _136.QueryParamsRequest;
            toProto(message: _136.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsResponse;
            fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
            fromAmino(object: _136.QueryParamsResponseAmino): _136.QueryParamsResponse;
            toAmino(message: _136.QueryParamsResponse): _136.QueryParamsResponseAmino;
            fromAminoMsg(object: _136.QueryParamsResponseAminoMsg): _136.QueryParamsResponse;
            toAminoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _136.QueryParamsResponseProtoMsg): _136.QueryParamsResponse;
            toProto(message: _136.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _135.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Params;
            fromPartial(object: Partial<_135.Params>): _135.Params;
            fromAmino(object: _135.ParamsAmino): _135.Params;
            toAmino(message: _135.Params): _135.ParamsAmino;
            fromAminoMsg(object: _135.ParamsAminoMsg): _135.Params;
            toAminoMsg(message: _135.Params): _135.ParamsAminoMsg;
            fromProtoMsg(message: _135.ParamsProtoMsg): _135.Params;
            toProto(message: _135.Params): Uint8Array;
            toProtoMsg(message: _135.Params): _135.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _134.LockQueryType;
        lockQueryTypeToJSON(object: _134.LockQueryType): string;
        LockQueryType: typeof _134.LockQueryType;
        LockQueryTypeSDKType: typeof _134.LockQueryType;
        LockQueryTypeAmino: typeof _134.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _134.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PeriodLock;
            fromPartial(object: Partial<_134.PeriodLock>): _134.PeriodLock;
            fromAmino(object: _134.PeriodLockAmino): _134.PeriodLock;
            toAmino(message: _134.PeriodLock): _134.PeriodLockAmino;
            fromAminoMsg(object: _134.PeriodLockAminoMsg): _134.PeriodLock;
            toAminoMsg(message: _134.PeriodLock): _134.PeriodLockAminoMsg;
            fromProtoMsg(message: _134.PeriodLockProtoMsg): _134.PeriodLock;
            toProto(message: _134.PeriodLock): Uint8Array;
            toProtoMsg(message: _134.PeriodLock): _134.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _134.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCondition;
            fromPartial(object: Partial<_134.QueryCondition>): _134.QueryCondition;
            fromAmino(object: _134.QueryConditionAmino): _134.QueryCondition;
            toAmino(message: _134.QueryCondition): _134.QueryConditionAmino;
            fromAminoMsg(object: _134.QueryConditionAminoMsg): _134.QueryCondition;
            toAminoMsg(message: _134.QueryCondition): _134.QueryConditionAminoMsg;
            fromProtoMsg(message: _134.QueryConditionProtoMsg): _134.QueryCondition;
            toProto(message: _134.QueryCondition): Uint8Array;
            toProtoMsg(message: _134.QueryCondition): _134.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _134.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.SyntheticLock;
            fromPartial(object: Partial<_134.SyntheticLock>): _134.SyntheticLock;
            fromAmino(object: _134.SyntheticLockAmino): _134.SyntheticLock;
            toAmino(message: _134.SyntheticLock): _134.SyntheticLockAmino;
            fromAminoMsg(object: _134.SyntheticLockAminoMsg): _134.SyntheticLock;
            toAminoMsg(message: _134.SyntheticLock): _134.SyntheticLockAminoMsg;
            fromProtoMsg(message: _134.SyntheticLockProtoMsg): _134.SyntheticLock;
            toProto(message: _134.SyntheticLock): Uint8Array;
            toProtoMsg(message: _134.SyntheticLock): _134.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
            fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
            fromAmino(object: _133.GenesisStateAmino): _133.GenesisState;
            toAmino(message: _133.GenesisState): _133.GenesisStateAmino;
            fromAminoMsg(object: _133.GenesisStateAminoMsg): _133.GenesisState;
            toAminoMsg(message: _133.GenesisState): _133.GenesisStateAminoMsg;
            fromProtoMsg(message: _133.GenesisStateProtoMsg): _133.GenesisState;
            toProto(message: _133.GenesisState): Uint8Array;
            toProtoMsg(message: _133.GenesisState): _133.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                epochProvisions(request?: _140.QueryEpochProvisionsRequest): Promise<_140.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsRequest;
                fromPartial(_: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
                fromAmino(_: _140.QueryParamsRequestAmino): _140.QueryParamsRequest;
                toAmino(_: _140.QueryParamsRequest): _140.QueryParamsRequestAmino;
                fromAminoMsg(object: _140.QueryParamsRequestAminoMsg): _140.QueryParamsRequest;
                toAminoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _140.QueryParamsRequestProtoMsg): _140.QueryParamsRequest;
                toProto(message: _140.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsResponse;
                fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
                fromAmino(object: _140.QueryParamsResponseAmino): _140.QueryParamsResponse;
                toAmino(message: _140.QueryParamsResponse): _140.QueryParamsResponseAmino;
                fromAminoMsg(object: _140.QueryParamsResponseAminoMsg): _140.QueryParamsResponse;
                toAminoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _140.QueryParamsResponseProtoMsg): _140.QueryParamsResponse;
                toProto(message: _140.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _140.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_140.QueryEpochProvisionsRequest>): _140.QueryEpochProvisionsRequest;
                fromAmino(_: _140.QueryEpochProvisionsRequestAmino): _140.QueryEpochProvisionsRequest;
                toAmino(_: _140.QueryEpochProvisionsRequest): _140.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _140.QueryEpochProvisionsRequestAminoMsg): _140.QueryEpochProvisionsRequest;
                toAminoMsg(message: _140.QueryEpochProvisionsRequest): _140.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _140.QueryEpochProvisionsRequestProtoMsg): _140.QueryEpochProvisionsRequest;
                toProto(message: _140.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _140.QueryEpochProvisionsRequest): _140.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _140.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_140.QueryEpochProvisionsResponse>): _140.QueryEpochProvisionsResponse;
                fromAmino(object: _140.QueryEpochProvisionsResponseAmino): _140.QueryEpochProvisionsResponse;
                toAmino(message: _140.QueryEpochProvisionsResponse): _140.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _140.QueryEpochProvisionsResponseAminoMsg): _140.QueryEpochProvisionsResponse;
                toAminoMsg(message: _140.QueryEpochProvisionsResponse): _140.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _140.QueryEpochProvisionsResponseProtoMsg): _140.QueryEpochProvisionsResponse;
                toProto(message: _140.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _140.QueryEpochProvisionsResponse): _140.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _139.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Minter;
                fromPartial(object: Partial<_139.Minter>): _139.Minter;
                fromAmino(object: _139.MinterAmino): _139.Minter;
                toAmino(message: _139.Minter): _139.MinterAmino;
                fromAminoMsg(object: _139.MinterAminoMsg): _139.Minter;
                toAminoMsg(message: _139.Minter): _139.MinterAminoMsg;
                fromProtoMsg(message: _139.MinterProtoMsg): _139.Minter;
                toProto(message: _139.Minter): Uint8Array;
                toProtoMsg(message: _139.Minter): _139.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _139.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.WeightedAddress;
                fromPartial(object: Partial<_139.WeightedAddress>): _139.WeightedAddress;
                fromAmino(object: _139.WeightedAddressAmino): _139.WeightedAddress;
                toAmino(message: _139.WeightedAddress): _139.WeightedAddressAmino;
                fromAminoMsg(object: _139.WeightedAddressAminoMsg): _139.WeightedAddress;
                toAminoMsg(message: _139.WeightedAddress): _139.WeightedAddressAminoMsg;
                fromProtoMsg(message: _139.WeightedAddressProtoMsg): _139.WeightedAddress;
                toProto(message: _139.WeightedAddress): Uint8Array;
                toProtoMsg(message: _139.WeightedAddress): _139.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _139.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.DistributionProportions;
                fromPartial(object: Partial<_139.DistributionProportions>): _139.DistributionProportions;
                fromAmino(object: _139.DistributionProportionsAmino): _139.DistributionProportions;
                toAmino(message: _139.DistributionProportions): _139.DistributionProportionsAmino;
                fromAminoMsg(object: _139.DistributionProportionsAminoMsg): _139.DistributionProportions;
                toAminoMsg(message: _139.DistributionProportions): _139.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _139.DistributionProportionsProtoMsg): _139.DistributionProportions;
                toProto(message: _139.DistributionProportions): Uint8Array;
                toProtoMsg(message: _139.DistributionProportions): _139.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Params;
                fromPartial(object: Partial<_139.Params>): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
                fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
                toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
                fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
                toAminoMsg(message: _138.GenesisState): _138.GenesisStateAminoMsg;
                fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
                toProto(message: _138.GenesisState): Uint8Array;
                toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _144.QueryGaugeIdsRequest): Promise<_144.QueryGaugeIdsResponse>;
                distrInfo(request?: _144.QueryDistrInfoRequest): Promise<_144.QueryDistrInfoResponse>;
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                lockableDurations(request?: _144.QueryLockableDurationsRequest): Promise<_144.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _144.QueryIncentivizedPoolsRequest): Promise<_144.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _144.QueryExternalIncentiveGaugesRequest): Promise<_144.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _144.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_144.QueryGaugeIdsRequest>): _144.QueryGaugeIdsRequest;
                fromAmino(object: _144.QueryGaugeIdsRequestAmino): _144.QueryGaugeIdsRequest;
                toAmino(message: _144.QueryGaugeIdsRequest): _144.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _144.QueryGaugeIdsRequestAminoMsg): _144.QueryGaugeIdsRequest;
                toAminoMsg(message: _144.QueryGaugeIdsRequest): _144.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryGaugeIdsRequestProtoMsg): _144.QueryGaugeIdsRequest;
                toProto(message: _144.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryGaugeIdsRequest): _144.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _144.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_144.QueryGaugeIdsResponse>): _144.QueryGaugeIdsResponse;
                fromAmino(object: _144.QueryGaugeIdsResponseAmino): _144.QueryGaugeIdsResponse;
                toAmino(message: _144.QueryGaugeIdsResponse): _144.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _144.QueryGaugeIdsResponseAminoMsg): _144.QueryGaugeIdsResponse;
                toAminoMsg(message: _144.QueryGaugeIdsResponse): _144.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryGaugeIdsResponseProtoMsg): _144.QueryGaugeIdsResponse;
                toProto(message: _144.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryGaugeIdsResponse): _144.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _144.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_144.QueryGaugeIdsResponse_GaugeIdWithDuration>): _144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _144.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _144.QueryGaugeIdsResponse_GaugeIdWithDuration): _144.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _144.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _144.QueryGaugeIdsResponse_GaugeIdWithDuration): _144.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _144.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _144.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _144.QueryGaugeIdsResponse_GaugeIdWithDuration): _144.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _144.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDistrInfoRequest;
                fromPartial(_: Partial<_144.QueryDistrInfoRequest>): _144.QueryDistrInfoRequest;
                fromAmino(_: _144.QueryDistrInfoRequestAmino): _144.QueryDistrInfoRequest;
                toAmino(_: _144.QueryDistrInfoRequest): _144.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _144.QueryDistrInfoRequestAminoMsg): _144.QueryDistrInfoRequest;
                toAminoMsg(message: _144.QueryDistrInfoRequest): _144.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _144.QueryDistrInfoRequestProtoMsg): _144.QueryDistrInfoRequest;
                toProto(message: _144.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _144.QueryDistrInfoRequest): _144.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _144.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDistrInfoResponse;
                fromPartial(object: Partial<_144.QueryDistrInfoResponse>): _144.QueryDistrInfoResponse;
                fromAmino(object: _144.QueryDistrInfoResponseAmino): _144.QueryDistrInfoResponse;
                toAmino(message: _144.QueryDistrInfoResponse): _144.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _144.QueryDistrInfoResponseAminoMsg): _144.QueryDistrInfoResponse;
                toAminoMsg(message: _144.QueryDistrInfoResponse): _144.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _144.QueryDistrInfoResponseProtoMsg): _144.QueryDistrInfoResponse;
                toProto(message: _144.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _144.QueryDistrInfoResponse): _144.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _144.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryParamsRequest;
                fromPartial(_: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
                fromAmino(_: _144.QueryParamsRequestAmino): _144.QueryParamsRequest;
                toAmino(_: _144.QueryParamsRequest): _144.QueryParamsRequestAmino;
                fromAminoMsg(object: _144.QueryParamsRequestAminoMsg): _144.QueryParamsRequest;
                toAminoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryParamsRequestProtoMsg): _144.QueryParamsRequest;
                toProto(message: _144.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryParamsRequest): _144.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _144.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
                fromAmino(object: _144.QueryParamsResponseAmino): _144.QueryParamsResponse;
                toAmino(message: _144.QueryParamsResponse): _144.QueryParamsResponseAmino;
                fromAminoMsg(object: _144.QueryParamsResponseAminoMsg): _144.QueryParamsResponse;
                toAminoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryParamsResponseProtoMsg): _144.QueryParamsResponse;
                toProto(message: _144.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryParamsResponse): _144.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _144.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_144.QueryLockableDurationsRequest>): _144.QueryLockableDurationsRequest;
                fromAmino(_: _144.QueryLockableDurationsRequestAmino): _144.QueryLockableDurationsRequest;
                toAmino(_: _144.QueryLockableDurationsRequest): _144.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _144.QueryLockableDurationsRequestAminoMsg): _144.QueryLockableDurationsRequest;
                toAminoMsg(message: _144.QueryLockableDurationsRequest): _144.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryLockableDurationsRequestProtoMsg): _144.QueryLockableDurationsRequest;
                toProto(message: _144.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryLockableDurationsRequest): _144.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _144.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_144.QueryLockableDurationsResponse>): _144.QueryLockableDurationsResponse;
                fromAmino(object: _144.QueryLockableDurationsResponseAmino): _144.QueryLockableDurationsResponse;
                toAmino(message: _144.QueryLockableDurationsResponse): _144.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _144.QueryLockableDurationsResponseAminoMsg): _144.QueryLockableDurationsResponse;
                toAminoMsg(message: _144.QueryLockableDurationsResponse): _144.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryLockableDurationsResponseProtoMsg): _144.QueryLockableDurationsResponse;
                toProto(message: _144.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryLockableDurationsResponse): _144.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _144.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_144.QueryIncentivizedPoolsRequest>): _144.QueryIncentivizedPoolsRequest;
                fromAmino(_: _144.QueryIncentivizedPoolsRequestAmino): _144.QueryIncentivizedPoolsRequest;
                toAmino(_: _144.QueryIncentivizedPoolsRequest): _144.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _144.QueryIncentivizedPoolsRequestAminoMsg): _144.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _144.QueryIncentivizedPoolsRequest): _144.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _144.QueryIncentivizedPoolsRequestProtoMsg): _144.QueryIncentivizedPoolsRequest;
                toProto(message: _144.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryIncentivizedPoolsRequest): _144.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _144.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.IncentivizedPool;
                fromPartial(object: Partial<_144.IncentivizedPool>): _144.IncentivizedPool;
                fromAmino(object: _144.IncentivizedPoolAmino): _144.IncentivizedPool;
                toAmino(message: _144.IncentivizedPool): _144.IncentivizedPoolAmino;
                fromAminoMsg(object: _144.IncentivizedPoolAminoMsg): _144.IncentivizedPool;
                toAminoMsg(message: _144.IncentivizedPool): _144.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _144.IncentivizedPoolProtoMsg): _144.IncentivizedPool;
                toProto(message: _144.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _144.IncentivizedPool): _144.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _144.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_144.QueryIncentivizedPoolsResponse>): _144.QueryIncentivizedPoolsResponse;
                fromAmino(object: _144.QueryIncentivizedPoolsResponseAmino): _144.QueryIncentivizedPoolsResponse;
                toAmino(message: _144.QueryIncentivizedPoolsResponse): _144.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _144.QueryIncentivizedPoolsResponseAminoMsg): _144.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _144.QueryIncentivizedPoolsResponse): _144.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _144.QueryIncentivizedPoolsResponseProtoMsg): _144.QueryIncentivizedPoolsResponse;
                toProto(message: _144.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryIncentivizedPoolsResponse): _144.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _144.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_144.QueryExternalIncentiveGaugesRequest>): _144.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _144.QueryExternalIncentiveGaugesRequestAmino): _144.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _144.QueryExternalIncentiveGaugesRequest): _144.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _144.QueryExternalIncentiveGaugesRequestAminoMsg): _144.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _144.QueryExternalIncentiveGaugesRequest): _144.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _144.QueryExternalIncentiveGaugesRequestProtoMsg): _144.QueryExternalIncentiveGaugesRequest;
                toProto(message: _144.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _144.QueryExternalIncentiveGaugesRequest): _144.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _144.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_144.QueryExternalIncentiveGaugesResponse>): _144.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _144.QueryExternalIncentiveGaugesResponseAmino): _144.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _144.QueryExternalIncentiveGaugesResponse): _144.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _144.QueryExternalIncentiveGaugesResponseAminoMsg): _144.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _144.QueryExternalIncentiveGaugesResponse): _144.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _144.QueryExternalIncentiveGaugesResponseProtoMsg): _144.QueryExternalIncentiveGaugesResponse;
                toProto(message: _144.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _144.QueryExternalIncentiveGaugesResponse): _144.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _143.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Params;
                fromPartial(object: Partial<_143.Params>): _143.Params;
                fromAmino(object: _143.ParamsAmino): _143.Params;
                toAmino(message: _143.Params): _143.ParamsAmino;
                fromAminoMsg(object: _143.ParamsAminoMsg): _143.Params;
                toAminoMsg(message: _143.Params): _143.ParamsAminoMsg;
                fromProtoMsg(message: _143.ParamsProtoMsg): _143.Params;
                toProto(message: _143.Params): Uint8Array;
                toProtoMsg(message: _143.Params): _143.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _143.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.LockableDurationsInfo;
                fromPartial(object: Partial<_143.LockableDurationsInfo>): _143.LockableDurationsInfo;
                fromAmino(object: _143.LockableDurationsInfoAmino): _143.LockableDurationsInfo;
                toAmino(message: _143.LockableDurationsInfo): _143.LockableDurationsInfoAmino;
                fromAminoMsg(object: _143.LockableDurationsInfoAminoMsg): _143.LockableDurationsInfo;
                toAminoMsg(message: _143.LockableDurationsInfo): _143.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _143.LockableDurationsInfoProtoMsg): _143.LockableDurationsInfo;
                toProto(message: _143.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _143.LockableDurationsInfo): _143.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _143.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DistrInfo;
                fromPartial(object: Partial<_143.DistrInfo>): _143.DistrInfo;
                fromAmino(object: _143.DistrInfoAmino): _143.DistrInfo;
                toAmino(message: _143.DistrInfo): _143.DistrInfoAmino;
                fromAminoMsg(object: _143.DistrInfoAminoMsg): _143.DistrInfo;
                toAminoMsg(message: _143.DistrInfo): _143.DistrInfoAminoMsg;
                fromProtoMsg(message: _143.DistrInfoProtoMsg): _143.DistrInfo;
                toProto(message: _143.DistrInfo): Uint8Array;
                toProtoMsg(message: _143.DistrInfo): _143.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _143.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DistrRecord;
                fromPartial(object: Partial<_143.DistrRecord>): _143.DistrRecord;
                fromAmino(object: _143.DistrRecordAmino): _143.DistrRecord;
                toAmino(message: _143.DistrRecord): _143.DistrRecordAmino;
                fromAminoMsg(object: _143.DistrRecordAminoMsg): _143.DistrRecord;
                toAminoMsg(message: _143.DistrRecord): _143.DistrRecordAminoMsg;
                fromProtoMsg(message: _143.DistrRecordProtoMsg): _143.DistrRecord;
                toProto(message: _143.DistrRecord): Uint8Array;
                toProtoMsg(message: _143.DistrRecord): _143.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _143.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PoolToGauge;
                fromPartial(object: Partial<_143.PoolToGauge>): _143.PoolToGauge;
                fromAmino(object: _143.PoolToGaugeAmino): _143.PoolToGauge;
                toAmino(message: _143.PoolToGauge): _143.PoolToGaugeAmino;
                fromAminoMsg(object: _143.PoolToGaugeAminoMsg): _143.PoolToGauge;
                toAminoMsg(message: _143.PoolToGauge): _143.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _143.PoolToGaugeProtoMsg): _143.PoolToGauge;
                toProto(message: _143.PoolToGauge): Uint8Array;
                toProtoMsg(message: _143.PoolToGauge): _143.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _143.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PoolToGauges;
                fromPartial(object: Partial<_143.PoolToGauges>): _143.PoolToGauges;
                fromAmino(object: _143.PoolToGaugesAmino): _143.PoolToGauges;
                toAmino(message: _143.PoolToGauges): _143.PoolToGaugesAmino;
                fromAminoMsg(object: _143.PoolToGaugesAminoMsg): _143.PoolToGauges;
                toAminoMsg(message: _143.PoolToGauges): _143.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _143.PoolToGaugesProtoMsg): _143.PoolToGauges;
                toProto(message: _143.PoolToGauges): Uint8Array;
                toProtoMsg(message: _143.PoolToGauges): _143.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _142.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_142.ReplacePoolIncentivesProposal>): _142.ReplacePoolIncentivesProposal;
                fromAmino(object: _142.ReplacePoolIncentivesProposalAmino): _142.ReplacePoolIncentivesProposal;
                toAmino(message: _142.ReplacePoolIncentivesProposal): _142.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _142.ReplacePoolIncentivesProposalAminoMsg): _142.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _142.ReplacePoolIncentivesProposal): _142.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _142.ReplacePoolIncentivesProposalProtoMsg): _142.ReplacePoolIncentivesProposal;
                toProto(message: _142.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _142.ReplacePoolIncentivesProposal): _142.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _142.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_142.UpdatePoolIncentivesProposal>): _142.UpdatePoolIncentivesProposal;
                fromAmino(object: _142.UpdatePoolIncentivesProposalAmino): _142.UpdatePoolIncentivesProposal;
                toAmino(message: _142.UpdatePoolIncentivesProposal): _142.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _142.UpdatePoolIncentivesProposalAminoMsg): _142.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _142.UpdatePoolIncentivesProposal): _142.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _142.UpdatePoolIncentivesProposalProtoMsg): _142.UpdatePoolIncentivesProposal;
                toProto(message: _142.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _142.UpdatePoolIncentivesProposal): _142.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _141.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.GenesisState;
                fromPartial(object: Partial<_141.GenesisState>): _141.GenesisState;
                fromAmino(object: _141.GenesisStateAmino): _141.GenesisState;
                toAmino(message: _141.GenesisState): _141.GenesisStateAmino;
                fromAminoMsg(object: _141.GenesisStateAminoMsg): _141.GenesisState;
                toAminoMsg(message: _141.GenesisState): _141.GenesisStateAminoMsg;
                fromProtoMsg(message: _141.GenesisStateProtoMsg): _141.GenesisState;
                toProto(message: _141.GenesisState): Uint8Array;
                toProtoMsg(message: _141.GenesisState): _141.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _147.ParamsRequest): Promise<_147.ParamsResponse>;
                estimateSwapExactAmountIn(request: _147.EstimateSwapExactAmountInRequest): Promise<_147.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _147.EstimateSinglePoolSwapExactAmountInRequest): Promise<_147.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _147.EstimateSwapExactAmountOutRequest): Promise<_147.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _147.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_147.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _147.NumPoolsRequest): Promise<_147.NumPoolsResponse>;
                pool(request: _147.PoolRequest): Promise<_147.PoolResponse>;
                allPools(request: _147.AllPoolsRequest): Promise<_147.AllPoolsResponse>;
                spotPrice(request: _147.SpotPriceRequest): Promise<_147.SpotPriceResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _149.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _149.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _149.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _149.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _149.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _149.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _149.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _149.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _149.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _149.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSwapExactAmountIn) => _149.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _149.MsgSwapExactAmountInAmino) => _149.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSwapExactAmountOut) => _149.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _149.MsgSwapExactAmountOutAmino) => _149.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _149.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_149.MsgSwapExactAmountIn>): _149.MsgSwapExactAmountIn;
                fromAmino(object: _149.MsgSwapExactAmountInAmino): _149.MsgSwapExactAmountIn;
                toAmino(message: _149.MsgSwapExactAmountIn): _149.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _149.MsgSwapExactAmountInAminoMsg): _149.MsgSwapExactAmountIn;
                toAminoMsg(message: _149.MsgSwapExactAmountIn): _149.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _149.MsgSwapExactAmountInProtoMsg): _149.MsgSwapExactAmountIn;
                toProto(message: _149.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _149.MsgSwapExactAmountIn): _149.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _149.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_149.MsgSwapExactAmountInResponse>): _149.MsgSwapExactAmountInResponse;
                fromAmino(object: _149.MsgSwapExactAmountInResponseAmino): _149.MsgSwapExactAmountInResponse;
                toAmino(message: _149.MsgSwapExactAmountInResponse): _149.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _149.MsgSwapExactAmountInResponseAminoMsg): _149.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _149.MsgSwapExactAmountInResponse): _149.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSwapExactAmountInResponseProtoMsg): _149.MsgSwapExactAmountInResponse;
                toProto(message: _149.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSwapExactAmountInResponse): _149.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _149.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_149.MsgSwapExactAmountOut>): _149.MsgSwapExactAmountOut;
                fromAmino(object: _149.MsgSwapExactAmountOutAmino): _149.MsgSwapExactAmountOut;
                toAmino(message: _149.MsgSwapExactAmountOut): _149.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _149.MsgSwapExactAmountOutAminoMsg): _149.MsgSwapExactAmountOut;
                toAminoMsg(message: _149.MsgSwapExactAmountOut): _149.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _149.MsgSwapExactAmountOutProtoMsg): _149.MsgSwapExactAmountOut;
                toProto(message: _149.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _149.MsgSwapExactAmountOut): _149.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _149.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_149.MsgSwapExactAmountOutResponse>): _149.MsgSwapExactAmountOutResponse;
                fromAmino(object: _149.MsgSwapExactAmountOutResponseAmino): _149.MsgSwapExactAmountOutResponse;
                toAmino(message: _149.MsgSwapExactAmountOutResponse): _149.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _149.MsgSwapExactAmountOutResponseAminoMsg): _149.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _149.MsgSwapExactAmountOutResponse): _149.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSwapExactAmountOutResponseProtoMsg): _149.MsgSwapExactAmountOutResponse;
                toProto(message: _149.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSwapExactAmountOutResponse): _149.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _148.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SwapAmountInRoute;
                fromPartial(object: Partial<_148.SwapAmountInRoute>): _148.SwapAmountInRoute;
                fromAmino(object: _148.SwapAmountInRouteAmino): _148.SwapAmountInRoute;
                toAmino(message: _148.SwapAmountInRoute): _148.SwapAmountInRouteAmino;
                fromAminoMsg(object: _148.SwapAmountInRouteAminoMsg): _148.SwapAmountInRoute;
                toAminoMsg(message: _148.SwapAmountInRoute): _148.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _148.SwapAmountInRouteProtoMsg): _148.SwapAmountInRoute;
                toProto(message: _148.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _148.SwapAmountInRoute): _148.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _148.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SwapAmountOutRoute;
                fromPartial(object: Partial<_148.SwapAmountOutRoute>): _148.SwapAmountOutRoute;
                fromAmino(object: _148.SwapAmountOutRouteAmino): _148.SwapAmountOutRoute;
                toAmino(message: _148.SwapAmountOutRoute): _148.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _148.SwapAmountOutRouteAminoMsg): _148.SwapAmountOutRoute;
                toAminoMsg(message: _148.SwapAmountOutRoute): _148.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _148.SwapAmountOutRouteProtoMsg): _148.SwapAmountOutRoute;
                toProto(message: _148.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _148.SwapAmountOutRoute): _148.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _147.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ParamsRequest;
                fromPartial(_: Partial<_147.ParamsRequest>): _147.ParamsRequest;
                fromAmino(_: _147.ParamsRequestAmino): _147.ParamsRequest;
                toAmino(_: _147.ParamsRequest): _147.ParamsRequestAmino;
                fromAminoMsg(object: _147.ParamsRequestAminoMsg): _147.ParamsRequest;
                toAminoMsg(message: _147.ParamsRequest): _147.ParamsRequestAminoMsg;
                fromProtoMsg(message: _147.ParamsRequestProtoMsg): _147.ParamsRequest;
                toProto(message: _147.ParamsRequest): Uint8Array;
                toProtoMsg(message: _147.ParamsRequest): _147.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _147.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ParamsResponse;
                fromPartial(object: Partial<_147.ParamsResponse>): _147.ParamsResponse;
                fromAmino(object: _147.ParamsResponseAmino): _147.ParamsResponse;
                toAmino(message: _147.ParamsResponse): _147.ParamsResponseAmino;
                fromAminoMsg(object: _147.ParamsResponseAminoMsg): _147.ParamsResponse;
                toAminoMsg(message: _147.ParamsResponse): _147.ParamsResponseAminoMsg;
                fromProtoMsg(message: _147.ParamsResponseProtoMsg): _147.ParamsResponse;
                toProto(message: _147.ParamsResponse): Uint8Array;
                toProtoMsg(message: _147.ParamsResponse): _147.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _147.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_147.EstimateSwapExactAmountInRequest>): _147.EstimateSwapExactAmountInRequest;
                fromAmino(object: _147.EstimateSwapExactAmountInRequestAmino): _147.EstimateSwapExactAmountInRequest;
                toAmino(message: _147.EstimateSwapExactAmountInRequest): _147.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _147.EstimateSwapExactAmountInRequestAminoMsg): _147.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _147.EstimateSwapExactAmountInRequest): _147.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _147.EstimateSwapExactAmountInRequestProtoMsg): _147.EstimateSwapExactAmountInRequest;
                toProto(message: _147.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _147.EstimateSwapExactAmountInRequest): _147.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _147.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_147.EstimateSinglePoolSwapExactAmountInRequest>): _147.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _147.EstimateSinglePoolSwapExactAmountInRequestAmino): _147.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _147.EstimateSinglePoolSwapExactAmountInRequest): _147.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _147.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _147.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _147.EstimateSinglePoolSwapExactAmountInRequest): _147.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _147.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _147.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _147.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _147.EstimateSinglePoolSwapExactAmountInRequest): _147.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _147.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_147.EstimateSwapExactAmountInResponse>): _147.EstimateSwapExactAmountInResponse;
                fromAmino(object: _147.EstimateSwapExactAmountInResponseAmino): _147.EstimateSwapExactAmountInResponse;
                toAmino(message: _147.EstimateSwapExactAmountInResponse): _147.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _147.EstimateSwapExactAmountInResponseAminoMsg): _147.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _147.EstimateSwapExactAmountInResponse): _147.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _147.EstimateSwapExactAmountInResponseProtoMsg): _147.EstimateSwapExactAmountInResponse;
                toProto(message: _147.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _147.EstimateSwapExactAmountInResponse): _147.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _147.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_147.EstimateSwapExactAmountOutRequest>): _147.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _147.EstimateSwapExactAmountOutRequestAmino): _147.EstimateSwapExactAmountOutRequest;
                toAmino(message: _147.EstimateSwapExactAmountOutRequest): _147.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _147.EstimateSwapExactAmountOutRequestAminoMsg): _147.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _147.EstimateSwapExactAmountOutRequest): _147.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _147.EstimateSwapExactAmountOutRequestProtoMsg): _147.EstimateSwapExactAmountOutRequest;
                toProto(message: _147.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _147.EstimateSwapExactAmountOutRequest): _147.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _147.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_147.EstimateSinglePoolSwapExactAmountOutRequest>): _147.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _147.EstimateSinglePoolSwapExactAmountOutRequestAmino): _147.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _147.EstimateSinglePoolSwapExactAmountOutRequest): _147.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _147.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _147.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _147.EstimateSinglePoolSwapExactAmountOutRequest): _147.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _147.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _147.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _147.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _147.EstimateSinglePoolSwapExactAmountOutRequest): _147.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _147.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_147.EstimateSwapExactAmountOutResponse>): _147.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _147.EstimateSwapExactAmountOutResponseAmino): _147.EstimateSwapExactAmountOutResponse;
                toAmino(message: _147.EstimateSwapExactAmountOutResponse): _147.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _147.EstimateSwapExactAmountOutResponseAminoMsg): _147.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _147.EstimateSwapExactAmountOutResponse): _147.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _147.EstimateSwapExactAmountOutResponseProtoMsg): _147.EstimateSwapExactAmountOutResponse;
                toProto(message: _147.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _147.EstimateSwapExactAmountOutResponse): _147.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _147.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.NumPoolsRequest;
                fromPartial(_: Partial<_147.NumPoolsRequest>): _147.NumPoolsRequest;
                fromAmino(_: _147.NumPoolsRequestAmino): _147.NumPoolsRequest;
                toAmino(_: _147.NumPoolsRequest): _147.NumPoolsRequestAmino;
                fromAminoMsg(object: _147.NumPoolsRequestAminoMsg): _147.NumPoolsRequest;
                toAminoMsg(message: _147.NumPoolsRequest): _147.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _147.NumPoolsRequestProtoMsg): _147.NumPoolsRequest;
                toProto(message: _147.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _147.NumPoolsRequest): _147.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _147.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.NumPoolsResponse;
                fromPartial(object: Partial<_147.NumPoolsResponse>): _147.NumPoolsResponse;
                fromAmino(object: _147.NumPoolsResponseAmino): _147.NumPoolsResponse;
                toAmino(message: _147.NumPoolsResponse): _147.NumPoolsResponseAmino;
                fromAminoMsg(object: _147.NumPoolsResponseAminoMsg): _147.NumPoolsResponse;
                toAminoMsg(message: _147.NumPoolsResponse): _147.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _147.NumPoolsResponseProtoMsg): _147.NumPoolsResponse;
                toProto(message: _147.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _147.NumPoolsResponse): _147.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                typeUrl: string;
                encode(message: _147.PoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PoolRequest;
                fromPartial(object: Partial<_147.PoolRequest>): _147.PoolRequest;
                fromAmino(object: _147.PoolRequestAmino): _147.PoolRequest;
                toAmino(message: _147.PoolRequest): _147.PoolRequestAmino;
                fromAminoMsg(object: _147.PoolRequestAminoMsg): _147.PoolRequest;
                toAminoMsg(message: _147.PoolRequest): _147.PoolRequestAminoMsg;
                fromProtoMsg(message: _147.PoolRequestProtoMsg): _147.PoolRequest;
                toProto(message: _147.PoolRequest): Uint8Array;
                toProtoMsg(message: _147.PoolRequest): _147.PoolRequestProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _147.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PoolResponse;
                fromPartial(object: Partial<_147.PoolResponse>): _147.PoolResponse;
                fromAmino(object: _147.PoolResponseAmino): _147.PoolResponse;
                toAmino(message: _147.PoolResponse): _147.PoolResponseAmino;
                fromAminoMsg(object: _147.PoolResponseAminoMsg): _147.PoolResponse;
                toAminoMsg(message: _147.PoolResponse): _147.PoolResponseAminoMsg;
                fromProtoMsg(message: _147.PoolResponseProtoMsg): _147.PoolResponse;
                toProto(message: _147.PoolResponse): Uint8Array;
                toProtoMsg(message: _147.PoolResponse): _147.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                typeUrl: string;
                encode(message: _147.AllPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllPoolsRequest;
                fromPartial(object: Partial<_147.AllPoolsRequest>): _147.AllPoolsRequest;
                fromAmino(object: _147.AllPoolsRequestAmino): _147.AllPoolsRequest;
                toAmino(message: _147.AllPoolsRequest): _147.AllPoolsRequestAmino;
                fromAminoMsg(object: _147.AllPoolsRequestAminoMsg): _147.AllPoolsRequest;
                toAminoMsg(message: _147.AllPoolsRequest): _147.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _147.AllPoolsRequestProtoMsg): _147.AllPoolsRequest;
                toProto(message: _147.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _147.AllPoolsRequest): _147.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                typeUrl: string;
                encode(message: _147.AllPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllPoolsResponse;
                fromPartial(object: Partial<_147.AllPoolsResponse>): _147.AllPoolsResponse;
                fromAmino(object: _147.AllPoolsResponseAmino): _147.AllPoolsResponse;
                toAmino(message: _147.AllPoolsResponse): _147.AllPoolsResponseAmino;
                fromAminoMsg(object: _147.AllPoolsResponseAminoMsg): _147.AllPoolsResponse;
                toAminoMsg(message: _147.AllPoolsResponse): _147.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _147.AllPoolsResponseProtoMsg): _147.AllPoolsResponse;
                toProto(message: _147.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _147.AllPoolsResponse): _147.AllPoolsResponseProtoMsg;
            };
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _147.SpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SpotPriceRequest;
                fromPartial(object: Partial<_147.SpotPriceRequest>): _147.SpotPriceRequest;
                fromAmino(object: _147.SpotPriceRequestAmino): _147.SpotPriceRequest;
                toAmino(message: _147.SpotPriceRequest): _147.SpotPriceRequestAmino;
                fromAminoMsg(object: _147.SpotPriceRequestAminoMsg): _147.SpotPriceRequest;
                toAminoMsg(message: _147.SpotPriceRequest): _147.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _147.SpotPriceRequestProtoMsg): _147.SpotPriceRequest;
                toProto(message: _147.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _147.SpotPriceRequest): _147.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _147.SpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SpotPriceResponse;
                fromPartial(object: Partial<_147.SpotPriceResponse>): _147.SpotPriceResponse;
                fromAmino(object: _147.SpotPriceResponseAmino): _147.SpotPriceResponse;
                toAmino(message: _147.SpotPriceResponse): _147.SpotPriceResponseAmino;
                fromAminoMsg(object: _147.SpotPriceResponseAminoMsg): _147.SpotPriceResponse;
                toAminoMsg(message: _147.SpotPriceResponse): _147.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _147.SpotPriceResponseProtoMsg): _147.SpotPriceResponse;
                toProto(message: _147.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _147.SpotPriceResponse): _147.SpotPriceResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _107.CosmWasmPool | _116.Pool | import("./concentrated-liquidity/pool").Pool | _122.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _146.PoolType;
            poolTypeToJSON(object: _146.PoolType): string;
            PoolType: typeof _146.PoolType;
            PoolTypeSDKType: typeof _146.PoolType;
            PoolTypeAmino: typeof _146.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _146.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleRoute;
                fromPartial(object: Partial<_146.ModuleRoute>): _146.ModuleRoute;
                fromAmino(object: _146.ModuleRouteAmino): _146.ModuleRoute;
                toAmino(message: _146.ModuleRoute): _146.ModuleRouteAmino;
                fromAminoMsg(object: _146.ModuleRouteAminoMsg): _146.ModuleRoute;
                toAminoMsg(message: _146.ModuleRoute): _146.ModuleRouteAminoMsg;
                fromProtoMsg(message: _146.ModuleRouteProtoMsg): _146.ModuleRoute;
                toProto(message: _146.ModuleRoute): Uint8Array;
                toProtoMsg(message: _146.ModuleRoute): _146.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromPartial(object: Partial<_145.Params>): _145.Params;
                fromAmino(object: _145.ParamsAmino): _145.Params;
                toAmino(message: _145.Params): _145.ParamsAmino;
                fromAminoMsg(object: _145.ParamsAminoMsg): _145.Params;
                toAminoMsg(message: _145.Params): _145.ParamsAminoMsg;
                fromProtoMsg(message: _145.ParamsProtoMsg): _145.Params;
                toProto(message: _145.Params): Uint8Array;
                toProtoMsg(message: _145.Params): _145.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
                toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
                fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
                toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
                fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
                toProto(message: _145.GenesisState): Uint8Array;
                toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _154.QueryGetProtoRevNumberOfTradesRequest): Promise<_154.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _154.QueryGetProtoRevProfitsByDenomRequest): Promise<_154.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _154.QueryGetProtoRevAllProfitsRequest): Promise<_154.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _154.QueryGetProtoRevStatisticsByRouteRequest): Promise<_154.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _154.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_154.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _154.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_154.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _154.QueryGetProtoRevAdminAccountRequest): Promise<_154.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _154.QueryGetProtoRevDeveloperAccountRequest): Promise<_154.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _154.QueryGetProtoRevPoolWeightsRequest): Promise<_154.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_154.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_154.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _154.QueryGetProtoRevBaseDenomsRequest): Promise<_154.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _154.QueryGetProtoRevEnabledRequest): Promise<_154.QueryGetProtoRevEnabledResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _155.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _155.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _155.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _155.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _155.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _155.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _155.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _155.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _155.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _155.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _155.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _155.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _155.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _155.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _155.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _155.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _155.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _155.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _155.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _155.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _155.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _155.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _155.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _155.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _155.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _155.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _155.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _155.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _155.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _155.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetHotRoutes) => _155.MsgSetHotRoutesAmino;
                    fromAmino: (object: _155.MsgSetHotRoutesAmino) => _155.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetDeveloperAccount) => _155.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _155.MsgSetDeveloperAccountAmino) => _155.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetMaxPoolPointsPerTx) => _155.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _155.MsgSetMaxPoolPointsPerTxAmino) => _155.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetMaxPoolPointsPerBlock) => _155.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _155.MsgSetMaxPoolPointsPerBlockAmino) => _155.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetPoolWeights) => _155.MsgSetPoolWeightsAmino;
                    fromAmino: (object: _155.MsgSetPoolWeightsAmino) => _155.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetBaseDenoms) => _155.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _155.MsgSetBaseDenomsAmino) => _155.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _155.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetHotRoutes;
                fromPartial(object: Partial<_155.MsgSetHotRoutes>): _155.MsgSetHotRoutes;
                fromAmino(object: _155.MsgSetHotRoutesAmino): _155.MsgSetHotRoutes;
                toAmino(message: _155.MsgSetHotRoutes): _155.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _155.MsgSetHotRoutesAminoMsg): _155.MsgSetHotRoutes;
                toAminoMsg(message: _155.MsgSetHotRoutes): _155.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _155.MsgSetHotRoutesProtoMsg): _155.MsgSetHotRoutes;
                toProto(message: _155.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _155.MsgSetHotRoutes): _155.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_155.MsgSetHotRoutesResponse>): _155.MsgSetHotRoutesResponse;
                fromAmino(_: _155.MsgSetHotRoutesResponseAmino): _155.MsgSetHotRoutesResponse;
                toAmino(_: _155.MsgSetHotRoutesResponse): _155.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _155.MsgSetHotRoutesResponseAminoMsg): _155.MsgSetHotRoutesResponse;
                toAminoMsg(message: _155.MsgSetHotRoutesResponse): _155.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetHotRoutesResponseProtoMsg): _155.MsgSetHotRoutesResponse;
                toProto(message: _155.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetHotRoutesResponse): _155.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _155.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_155.MsgSetDeveloperAccount>): _155.MsgSetDeveloperAccount;
                fromAmino(object: _155.MsgSetDeveloperAccountAmino): _155.MsgSetDeveloperAccount;
                toAmino(message: _155.MsgSetDeveloperAccount): _155.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _155.MsgSetDeveloperAccountAminoMsg): _155.MsgSetDeveloperAccount;
                toAminoMsg(message: _155.MsgSetDeveloperAccount): _155.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _155.MsgSetDeveloperAccountProtoMsg): _155.MsgSetDeveloperAccount;
                toProto(message: _155.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _155.MsgSetDeveloperAccount): _155.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_155.MsgSetDeveloperAccountResponse>): _155.MsgSetDeveloperAccountResponse;
                fromAmino(_: _155.MsgSetDeveloperAccountResponseAmino): _155.MsgSetDeveloperAccountResponse;
                toAmino(_: _155.MsgSetDeveloperAccountResponse): _155.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _155.MsgSetDeveloperAccountResponseAminoMsg): _155.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _155.MsgSetDeveloperAccountResponse): _155.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetDeveloperAccountResponseProtoMsg): _155.MsgSetDeveloperAccountResponse;
                toProto(message: _155.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetDeveloperAccountResponse): _155.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetPoolWeights: {
                typeUrl: string;
                encode(message: _155.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetPoolWeights;
                fromPartial(object: Partial<_155.MsgSetPoolWeights>): _155.MsgSetPoolWeights;
                fromAmino(object: _155.MsgSetPoolWeightsAmino): _155.MsgSetPoolWeights;
                toAmino(message: _155.MsgSetPoolWeights): _155.MsgSetPoolWeightsAmino;
                fromAminoMsg(object: _155.MsgSetPoolWeightsAminoMsg): _155.MsgSetPoolWeights;
                toAminoMsg(message: _155.MsgSetPoolWeights): _155.MsgSetPoolWeightsAminoMsg;
                fromProtoMsg(message: _155.MsgSetPoolWeightsProtoMsg): _155.MsgSetPoolWeights;
                toProto(message: _155.MsgSetPoolWeights): Uint8Array;
                toProtoMsg(message: _155.MsgSetPoolWeights): _155.MsgSetPoolWeightsProtoMsg;
            };
            MsgSetPoolWeightsResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_155.MsgSetPoolWeightsResponse>): _155.MsgSetPoolWeightsResponse;
                fromAmino(_: _155.MsgSetPoolWeightsResponseAmino): _155.MsgSetPoolWeightsResponse;
                toAmino(_: _155.MsgSetPoolWeightsResponse): _155.MsgSetPoolWeightsResponseAmino;
                fromAminoMsg(object: _155.MsgSetPoolWeightsResponseAminoMsg): _155.MsgSetPoolWeightsResponse;
                toAminoMsg(message: _155.MsgSetPoolWeightsResponse): _155.MsgSetPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetPoolWeightsResponseProtoMsg): _155.MsgSetPoolWeightsResponse;
                toProto(message: _155.MsgSetPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetPoolWeightsResponse): _155.MsgSetPoolWeightsResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                typeUrl: string;
                encode(message: _155.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_155.MsgSetMaxPoolPointsPerTx>): _155.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _155.MsgSetMaxPoolPointsPerTxAmino): _155.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _155.MsgSetMaxPoolPointsPerTx): _155.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _155.MsgSetMaxPoolPointsPerTxAminoMsg): _155.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _155.MsgSetMaxPoolPointsPerTx): _155.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _155.MsgSetMaxPoolPointsPerTxProtoMsg): _155.MsgSetMaxPoolPointsPerTx;
                toProto(message: _155.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _155.MsgSetMaxPoolPointsPerTx): _155.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_155.MsgSetMaxPoolPointsPerTxResponse>): _155.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _155.MsgSetMaxPoolPointsPerTxResponseAmino): _155.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _155.MsgSetMaxPoolPointsPerTxResponse): _155.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _155.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _155.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _155.MsgSetMaxPoolPointsPerTxResponse): _155.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _155.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _155.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetMaxPoolPointsPerTxResponse): _155.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                typeUrl: string;
                encode(message: _155.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_155.MsgSetMaxPoolPointsPerBlock>): _155.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _155.MsgSetMaxPoolPointsPerBlockAmino): _155.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _155.MsgSetMaxPoolPointsPerBlock): _155.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _155.MsgSetMaxPoolPointsPerBlockAminoMsg): _155.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _155.MsgSetMaxPoolPointsPerBlock): _155.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _155.MsgSetMaxPoolPointsPerBlockProtoMsg): _155.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _155.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _155.MsgSetMaxPoolPointsPerBlock): _155.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_155.MsgSetMaxPoolPointsPerBlockResponse>): _155.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _155.MsgSetMaxPoolPointsPerBlockResponseAmino): _155.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _155.MsgSetMaxPoolPointsPerBlockResponse): _155.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _155.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _155.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _155.MsgSetMaxPoolPointsPerBlockResponse): _155.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _155.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _155.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetMaxPoolPointsPerBlockResponse): _155.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                typeUrl: string;
                encode(message: _155.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetBaseDenoms;
                fromPartial(object: Partial<_155.MsgSetBaseDenoms>): _155.MsgSetBaseDenoms;
                fromAmino(object: _155.MsgSetBaseDenomsAmino): _155.MsgSetBaseDenoms;
                toAmino(message: _155.MsgSetBaseDenoms): _155.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _155.MsgSetBaseDenomsAminoMsg): _155.MsgSetBaseDenoms;
                toAminoMsg(message: _155.MsgSetBaseDenoms): _155.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _155.MsgSetBaseDenomsProtoMsg): _155.MsgSetBaseDenoms;
                toProto(message: _155.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _155.MsgSetBaseDenoms): _155.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                typeUrl: string;
                encode(_: _155.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_155.MsgSetBaseDenomsResponse>): _155.MsgSetBaseDenomsResponse;
                fromAmino(_: _155.MsgSetBaseDenomsResponseAmino): _155.MsgSetBaseDenomsResponse;
                toAmino(_: _155.MsgSetBaseDenomsResponse): _155.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _155.MsgSetBaseDenomsResponseAminoMsg): _155.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _155.MsgSetBaseDenomsResponse): _155.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetBaseDenomsResponseProtoMsg): _155.MsgSetBaseDenomsResponse;
                toProto(message: _155.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetBaseDenomsResponse): _155.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
                fromAminoMsg(object: _154.QueryParamsRequestAminoMsg): _154.QueryParamsRequest;
                toAminoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryParamsRequestProtoMsg): _154.QueryParamsRequest;
                toProto(message: _154.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                fromAmino(object: _154.QueryParamsResponseAmino): _154.QueryParamsResponse;
                toAmino(message: _154.QueryParamsResponse): _154.QueryParamsResponseAmino;
                fromAminoMsg(object: _154.QueryParamsResponseAminoMsg): _154.QueryParamsResponse;
                toAminoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryParamsResponseProtoMsg): _154.QueryParamsResponse;
                toProto(message: _154.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevNumberOfTradesRequest>): _154.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _154.QueryGetProtoRevNumberOfTradesRequestAmino): _154.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _154.QueryGetProtoRevNumberOfTradesRequest): _154.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _154.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _154.QueryGetProtoRevNumberOfTradesRequest): _154.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _154.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _154.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevNumberOfTradesRequest): _154.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevNumberOfTradesResponse>): _154.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _154.QueryGetProtoRevNumberOfTradesResponseAmino): _154.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _154.QueryGetProtoRevNumberOfTradesResponse): _154.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _154.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _154.QueryGetProtoRevNumberOfTradesResponse): _154.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _154.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _154.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevNumberOfTradesResponse): _154.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_154.QueryGetProtoRevProfitsByDenomRequest>): _154.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _154.QueryGetProtoRevProfitsByDenomRequestAmino): _154.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _154.QueryGetProtoRevProfitsByDenomRequest): _154.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _154.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _154.QueryGetProtoRevProfitsByDenomRequest): _154.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _154.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _154.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevProfitsByDenomRequest): _154.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevProfitsByDenomResponse>): _154.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _154.QueryGetProtoRevProfitsByDenomResponseAmino): _154.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _154.QueryGetProtoRevProfitsByDenomResponse): _154.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _154.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _154.QueryGetProtoRevProfitsByDenomResponse): _154.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _154.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _154.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevProfitsByDenomResponse): _154.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevAllProfitsRequest>): _154.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _154.QueryGetProtoRevAllProfitsRequestAmino): _154.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _154.QueryGetProtoRevAllProfitsRequest): _154.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAllProfitsRequestAminoMsg): _154.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _154.QueryGetProtoRevAllProfitsRequest): _154.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAllProfitsRequestProtoMsg): _154.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _154.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAllProfitsRequest): _154.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevAllProfitsResponse>): _154.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _154.QueryGetProtoRevAllProfitsResponseAmino): _154.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _154.QueryGetProtoRevAllProfitsResponse): _154.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAllProfitsResponseAminoMsg): _154.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _154.QueryGetProtoRevAllProfitsResponse): _154.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAllProfitsResponseProtoMsg): _154.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _154.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAllProfitsResponse): _154.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_154.QueryGetProtoRevStatisticsByRouteRequest>): _154.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _154.QueryGetProtoRevStatisticsByRouteRequestAmino): _154.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _154.QueryGetProtoRevStatisticsByRouteRequest): _154.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _154.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _154.QueryGetProtoRevStatisticsByRouteRequest): _154.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _154.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _154.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevStatisticsByRouteRequest): _154.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevStatisticsByRouteResponse>): _154.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _154.QueryGetProtoRevStatisticsByRouteResponseAmino): _154.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _154.QueryGetProtoRevStatisticsByRouteResponse): _154.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _154.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _154.QueryGetProtoRevStatisticsByRouteResponse): _154.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _154.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _154.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevStatisticsByRouteResponse): _154.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevAllRouteStatisticsRequest>): _154.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _154.QueryGetProtoRevAllRouteStatisticsRequestAmino): _154.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _154.QueryGetProtoRevAllRouteStatisticsRequest): _154.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _154.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsRequest): _154.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _154.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _154.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsRequest): _154.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevAllRouteStatisticsResponse>): _154.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _154.QueryGetProtoRevAllRouteStatisticsResponseAmino): _154.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _154.QueryGetProtoRevAllRouteStatisticsResponse): _154.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _154.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsResponse): _154.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _154.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _154.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAllRouteStatisticsResponse): _154.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevTokenPairArbRoutesRequest>): _154.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _154.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _154.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _154.QueryGetProtoRevTokenPairArbRoutesRequest): _154.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _154.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesRequest): _154.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _154.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _154.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesRequest): _154.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevTokenPairArbRoutesResponse>): _154.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _154.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _154.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _154.QueryGetProtoRevTokenPairArbRoutesResponse): _154.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _154.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesResponse): _154.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _154.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _154.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevTokenPairArbRoutesResponse): _154.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevAdminAccountRequest>): _154.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _154.QueryGetProtoRevAdminAccountRequestAmino): _154.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _154.QueryGetProtoRevAdminAccountRequest): _154.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAdminAccountRequestAminoMsg): _154.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _154.QueryGetProtoRevAdminAccountRequest): _154.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAdminAccountRequestProtoMsg): _154.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _154.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAdminAccountRequest): _154.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevAdminAccountResponse>): _154.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _154.QueryGetProtoRevAdminAccountResponseAmino): _154.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _154.QueryGetProtoRevAdminAccountResponse): _154.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevAdminAccountResponseAminoMsg): _154.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _154.QueryGetProtoRevAdminAccountResponse): _154.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevAdminAccountResponseProtoMsg): _154.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _154.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevAdminAccountResponse): _154.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevDeveloperAccountRequest>): _154.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _154.QueryGetProtoRevDeveloperAccountRequestAmino): _154.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _154.QueryGetProtoRevDeveloperAccountRequest): _154.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _154.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _154.QueryGetProtoRevDeveloperAccountRequest): _154.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _154.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _154.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevDeveloperAccountRequest): _154.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevDeveloperAccountResponse>): _154.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _154.QueryGetProtoRevDeveloperAccountResponseAmino): _154.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _154.QueryGetProtoRevDeveloperAccountResponse): _154.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _154.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _154.QueryGetProtoRevDeveloperAccountResponse): _154.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _154.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _154.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevDeveloperAccountResponse): _154.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevPoolWeightsRequest>): _154.QueryGetProtoRevPoolWeightsRequest;
                fromAmino(_: _154.QueryGetProtoRevPoolWeightsRequestAmino): _154.QueryGetProtoRevPoolWeightsRequest;
                toAmino(_: _154.QueryGetProtoRevPoolWeightsRequest): _154.QueryGetProtoRevPoolWeightsRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevPoolWeightsRequestAminoMsg): _154.QueryGetProtoRevPoolWeightsRequest;
                toAminoMsg(message: _154.QueryGetProtoRevPoolWeightsRequest): _154.QueryGetProtoRevPoolWeightsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevPoolWeightsRequestProtoMsg): _154.QueryGetProtoRevPoolWeightsRequest;
                toProto(message: _154.QueryGetProtoRevPoolWeightsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevPoolWeightsRequest): _154.QueryGetProtoRevPoolWeightsRequestProtoMsg;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevPoolWeightsResponse>): _154.QueryGetProtoRevPoolWeightsResponse;
                fromAmino(object: _154.QueryGetProtoRevPoolWeightsResponseAmino): _154.QueryGetProtoRevPoolWeightsResponse;
                toAmino(message: _154.QueryGetProtoRevPoolWeightsResponse): _154.QueryGetProtoRevPoolWeightsResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevPoolWeightsResponseAminoMsg): _154.QueryGetProtoRevPoolWeightsResponse;
                toAminoMsg(message: _154.QueryGetProtoRevPoolWeightsResponse): _154.QueryGetProtoRevPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevPoolWeightsResponseProtoMsg): _154.QueryGetProtoRevPoolWeightsResponse;
                toProto(message: _154.QueryGetProtoRevPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevPoolWeightsResponse): _154.QueryGetProtoRevPoolWeightsResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _154.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _154.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _154.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _154.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _154.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): _154.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _154.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): _154.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _154.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): _154.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _154.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _154.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _154.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponse): _154.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _154.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponse): _154.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _154.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevMaxPoolPointsPerTxResponse): _154.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevBaseDenomsRequest>): _154.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _154.QueryGetProtoRevBaseDenomsRequestAmino): _154.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _154.QueryGetProtoRevBaseDenomsRequest): _154.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevBaseDenomsRequestAminoMsg): _154.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _154.QueryGetProtoRevBaseDenomsRequest): _154.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevBaseDenomsRequestProtoMsg): _154.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _154.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevBaseDenomsRequest): _154.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevBaseDenomsResponse>): _154.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _154.QueryGetProtoRevBaseDenomsResponseAmino): _154.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _154.QueryGetProtoRevBaseDenomsResponse): _154.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevBaseDenomsResponseAminoMsg): _154.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _154.QueryGetProtoRevBaseDenomsResponse): _154.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevBaseDenomsResponseProtoMsg): _154.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _154.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevBaseDenomsResponse): _154.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                typeUrl: string;
                encode(_: _154.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_154.QueryGetProtoRevEnabledRequest>): _154.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _154.QueryGetProtoRevEnabledRequestAmino): _154.QueryGetProtoRevEnabledRequest;
                toAmino(_: _154.QueryGetProtoRevEnabledRequest): _154.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevEnabledRequestAminoMsg): _154.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _154.QueryGetProtoRevEnabledRequest): _154.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevEnabledRequestProtoMsg): _154.QueryGetProtoRevEnabledRequest;
                toProto(message: _154.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevEnabledRequest): _154.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                typeUrl: string;
                encode(message: _154.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_154.QueryGetProtoRevEnabledResponse>): _154.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _154.QueryGetProtoRevEnabledResponseAmino): _154.QueryGetProtoRevEnabledResponse;
                toAmino(message: _154.QueryGetProtoRevEnabledResponse): _154.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _154.QueryGetProtoRevEnabledResponseAminoMsg): _154.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _154.QueryGetProtoRevEnabledResponse): _154.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _154.QueryGetProtoRevEnabledResponseProtoMsg): _154.QueryGetProtoRevEnabledResponse;
                toProto(message: _154.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _154.QueryGetProtoRevEnabledResponse): _154.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _153.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.TokenPairArbRoutes;
                fromPartial(object: Partial<_153.TokenPairArbRoutes>): _153.TokenPairArbRoutes;
                fromAmino(object: _153.TokenPairArbRoutesAmino): _153.TokenPairArbRoutes;
                toAmino(message: _153.TokenPairArbRoutes): _153.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _153.TokenPairArbRoutesAminoMsg): _153.TokenPairArbRoutes;
                toAminoMsg(message: _153.TokenPairArbRoutes): _153.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _153.TokenPairArbRoutesProtoMsg): _153.TokenPairArbRoutes;
                toProto(message: _153.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _153.TokenPairArbRoutes): _153.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _153.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Route;
                fromPartial(object: Partial<_153.Route>): _153.Route;
                fromAmino(object: _153.RouteAmino): _153.Route;
                toAmino(message: _153.Route): _153.RouteAmino;
                fromAminoMsg(object: _153.RouteAminoMsg): _153.Route;
                toAminoMsg(message: _153.Route): _153.RouteAminoMsg;
                fromProtoMsg(message: _153.RouteProtoMsg): _153.Route;
                toProto(message: _153.Route): Uint8Array;
                toProtoMsg(message: _153.Route): _153.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _153.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Trade;
                fromPartial(object: Partial<_153.Trade>): _153.Trade;
                fromAmino(object: _153.TradeAmino): _153.Trade;
                toAmino(message: _153.Trade): _153.TradeAmino;
                fromAminoMsg(object: _153.TradeAminoMsg): _153.Trade;
                toAminoMsg(message: _153.Trade): _153.TradeAminoMsg;
                fromProtoMsg(message: _153.TradeProtoMsg): _153.Trade;
                toProto(message: _153.Trade): Uint8Array;
                toProtoMsg(message: _153.Trade): _153.TradeProtoMsg;
            };
            RouteStatistics: {
                typeUrl: string;
                encode(message: _153.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.RouteStatistics;
                fromPartial(object: Partial<_153.RouteStatistics>): _153.RouteStatistics;
                fromAmino(object: _153.RouteStatisticsAmino): _153.RouteStatistics;
                toAmino(message: _153.RouteStatistics): _153.RouteStatisticsAmino;
                fromAminoMsg(object: _153.RouteStatisticsAminoMsg): _153.RouteStatistics;
                toAminoMsg(message: _153.RouteStatistics): _153.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _153.RouteStatisticsProtoMsg): _153.RouteStatistics;
                toProto(message: _153.RouteStatistics): Uint8Array;
                toProtoMsg(message: _153.RouteStatistics): _153.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                typeUrl: string;
                encode(message: _153.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.PoolWeights;
                fromPartial(object: Partial<_153.PoolWeights>): _153.PoolWeights;
                fromAmino(object: _153.PoolWeightsAmino): _153.PoolWeights;
                toAmino(message: _153.PoolWeights): _153.PoolWeightsAmino;
                fromAminoMsg(object: _153.PoolWeightsAminoMsg): _153.PoolWeights;
                toAminoMsg(message: _153.PoolWeights): _153.PoolWeightsAminoMsg;
                fromProtoMsg(message: _153.PoolWeightsProtoMsg): _153.PoolWeights;
                toProto(message: _153.PoolWeights): Uint8Array;
                toProtoMsg(message: _153.PoolWeights): _153.PoolWeightsProtoMsg;
            };
            BaseDenom: {
                typeUrl: string;
                encode(message: _153.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.BaseDenom;
                fromPartial(object: Partial<_153.BaseDenom>): _153.BaseDenom;
                fromAmino(object: _153.BaseDenomAmino): _153.BaseDenom;
                toAmino(message: _153.BaseDenom): _153.BaseDenomAmino;
                fromAminoMsg(object: _153.BaseDenomAminoMsg): _153.BaseDenom;
                toAminoMsg(message: _153.BaseDenom): _153.BaseDenomAminoMsg;
                fromProtoMsg(message: _153.BaseDenomProtoMsg): _153.BaseDenom;
                toProto(message: _153.BaseDenom): Uint8Array;
                toProtoMsg(message: _153.BaseDenom): _153.BaseDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _152.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Params;
                fromPartial(object: Partial<_152.Params>): _152.Params;
                fromAmino(object: _152.ParamsAmino): _152.Params;
                toAmino(message: _152.Params): _152.ParamsAmino;
                fromAminoMsg(object: _152.ParamsAminoMsg): _152.Params;
                toAminoMsg(message: _152.Params): _152.ParamsAminoMsg;
                fromProtoMsg(message: _152.ParamsProtoMsg): _152.Params;
                toProto(message: _152.Params): Uint8Array;
                toProtoMsg(message: _152.Params): _152.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _151.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_151.SetProtoRevEnabledProposal>): _151.SetProtoRevEnabledProposal;
                fromAmino(object: _151.SetProtoRevEnabledProposalAmino): _151.SetProtoRevEnabledProposal;
                toAmino(message: _151.SetProtoRevEnabledProposal): _151.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _151.SetProtoRevEnabledProposalAminoMsg): _151.SetProtoRevEnabledProposal;
                toAminoMsg(message: _151.SetProtoRevEnabledProposal): _151.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _151.SetProtoRevEnabledProposalProtoMsg): _151.SetProtoRevEnabledProposal;
                toProto(message: _151.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _151.SetProtoRevEnabledProposal): _151.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _151.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_151.SetProtoRevAdminAccountProposal>): _151.SetProtoRevAdminAccountProposal;
                fromAmino(object: _151.SetProtoRevAdminAccountProposalAmino): _151.SetProtoRevAdminAccountProposal;
                toAmino(message: _151.SetProtoRevAdminAccountProposal): _151.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _151.SetProtoRevAdminAccountProposalAminoMsg): _151.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _151.SetProtoRevAdminAccountProposal): _151.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _151.SetProtoRevAdminAccountProposalProtoMsg): _151.SetProtoRevAdminAccountProposal;
                toProto(message: _151.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _151.SetProtoRevAdminAccountProposal): _151.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
                fromAmino(object: _150.GenesisStateAmino): _150.GenesisState;
                toAmino(message: _150.GenesisState): _150.GenesisStateAmino;
                fromAminoMsg(object: _150.GenesisStateAminoMsg): _150.GenesisState;
                toAminoMsg(message: _150.GenesisState): _150.GenesisStateAminoMsg;
                fromProtoMsg(message: _150.GenesisStateProtoMsg): _150.GenesisState;
                toProto(message: _150.GenesisState): Uint8Array;
                toProtoMsg(message: _150.GenesisState): _150.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _156.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Node;
                fromPartial(object: Partial<_156.Node>): _156.Node;
                fromAmino(object: _156.NodeAmino): _156.Node;
                toAmino(message: _156.Node): _156.NodeAmino;
                fromAminoMsg(object: _156.NodeAminoMsg): _156.Node;
                toAminoMsg(message: _156.Node): _156.NodeAminoMsg;
                fromProtoMsg(message: _156.NodeProtoMsg): _156.Node;
                toProto(message: _156.Node): Uint8Array;
                toProtoMsg(message: _156.Node): _156.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _156.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Child;
                fromPartial(object: Partial<_156.Child>): _156.Child;
                fromAmino(object: _156.ChildAmino): _156.Child;
                toAmino(message: _156.Child): _156.ChildAmino;
                fromAminoMsg(object: _156.ChildAminoMsg): _156.Child;
                toAminoMsg(message: _156.Child): _156.ChildAminoMsg;
                fromProtoMsg(message: _156.ChildProtoMsg): _156.Child;
                toProto(message: _156.Child): Uint8Array;
                toProtoMsg(message: _156.Child): _156.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _156.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Leaf;
                fromPartial(object: Partial<_156.Leaf>): _156.Leaf;
                fromAmino(object: _156.LeafAmino): _156.Leaf;
                toAmino(message: _156.Leaf): _156.LeafAmino;
                fromAminoMsg(object: _156.LeafAminoMsg): _156.Leaf;
                toAminoMsg(message: _156.Leaf): _156.LeafAminoMsg;
                fromProtoMsg(message: _156.LeafProtoMsg): _156.Leaf;
                toProto(message: _156.Leaf): Uint8Array;
                toProtoMsg(message: _156.Leaf): _156.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _327.MsgClientImpl;
        QueryClientImpl: typeof _314.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
            assetType(request: _159.AssetTypeRequest): Promise<_159.AssetTypeResponse>;
            allAssets(request?: _159.AllAssetsRequest): Promise<_159.AllAssetsResponse>;
            assetMultiplier(request: _159.AssetMultiplierRequest): Promise<_159.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _159.AllIntermediaryAccountsRequest): Promise<_159.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _159.ConnectedIntermediaryAccountRequest): Promise<_159.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _159.QueryTotalDelegationByValidatorForDenomRequest): Promise<_159.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _159.TotalSuperfluidDelegationsRequest): Promise<_159.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _159.SuperfluidDelegationAmountRequest): Promise<_159.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _159.SuperfluidDelegationsByDelegatorRequest): Promise<_159.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _159.SuperfluidUndelegationsByDelegatorRequest): Promise<_159.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _159.SuperfluidDelegationsByValidatorDenomRequest): Promise<_159.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _159.QueryTotalDelegationByDelegatorRequest): Promise<_159.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _159.QueryUnpoolWhitelistRequest): Promise<_159.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _296.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _161.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _161.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _161.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _161.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _161.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _161.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _161.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _161.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _161.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _161.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _161.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _161.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _161.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _161.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _161.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _161.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _161.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _161.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _161.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _161.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _161.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _161.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _161.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _161.MsgSuperfluidDelegate) => _161.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _161.MsgSuperfluidDelegateAmino) => _161.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _161.MsgSuperfluidUndelegate) => _161.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _161.MsgSuperfluidUndelegateAmino) => _161.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _161.MsgSuperfluidUnbondLock) => _161.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _161.MsgSuperfluidUnbondLockAmino) => _161.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _161.MsgSuperfluidUndelegateAndUnbondLock) => _161.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _161.MsgSuperfluidUndelegateAndUnbondLockAmino) => _161.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _161.MsgLockAndSuperfluidDelegate) => _161.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _161.MsgLockAndSuperfluidDelegateAmino) => _161.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _161.MsgUnPoolWhitelistedPool) => _161.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _161.MsgUnPoolWhitelistedPoolAmino) => _161.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _161.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_161.MsgSuperfluidDelegate>): _161.MsgSuperfluidDelegate;
            fromAmino(object: _161.MsgSuperfluidDelegateAmino): _161.MsgSuperfluidDelegate;
            toAmino(message: _161.MsgSuperfluidDelegate): _161.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _161.MsgSuperfluidDelegateAminoMsg): _161.MsgSuperfluidDelegate;
            toAminoMsg(message: _161.MsgSuperfluidDelegate): _161.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidDelegateProtoMsg): _161.MsgSuperfluidDelegate;
            toProto(message: _161.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidDelegate): _161.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _161.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_161.MsgSuperfluidDelegateResponse>): _161.MsgSuperfluidDelegateResponse;
            fromAmino(_: _161.MsgSuperfluidDelegateResponseAmino): _161.MsgSuperfluidDelegateResponse;
            toAmino(_: _161.MsgSuperfluidDelegateResponse): _161.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _161.MsgSuperfluidDelegateResponseAminoMsg): _161.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _161.MsgSuperfluidDelegateResponse): _161.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidDelegateResponseProtoMsg): _161.MsgSuperfluidDelegateResponse;
            toProto(message: _161.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidDelegateResponse): _161.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _161.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_161.MsgSuperfluidUndelegate>): _161.MsgSuperfluidUndelegate;
            fromAmino(object: _161.MsgSuperfluidUndelegateAmino): _161.MsgSuperfluidUndelegate;
            toAmino(message: _161.MsgSuperfluidUndelegate): _161.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUndelegateAminoMsg): _161.MsgSuperfluidUndelegate;
            toAminoMsg(message: _161.MsgSuperfluidUndelegate): _161.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUndelegateProtoMsg): _161.MsgSuperfluidUndelegate;
            toProto(message: _161.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUndelegate): _161.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _161.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_161.MsgSuperfluidUndelegateResponse>): _161.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _161.MsgSuperfluidUndelegateResponseAmino): _161.MsgSuperfluidUndelegateResponse;
            toAmino(_: _161.MsgSuperfluidUndelegateResponse): _161.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUndelegateResponseAminoMsg): _161.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _161.MsgSuperfluidUndelegateResponse): _161.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUndelegateResponseProtoMsg): _161.MsgSuperfluidUndelegateResponse;
            toProto(message: _161.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUndelegateResponse): _161.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _161.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_161.MsgSuperfluidUnbondLock>): _161.MsgSuperfluidUnbondLock;
            fromAmino(object: _161.MsgSuperfluidUnbondLockAmino): _161.MsgSuperfluidUnbondLock;
            toAmino(message: _161.MsgSuperfluidUnbondLock): _161.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUnbondLockAminoMsg): _161.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _161.MsgSuperfluidUnbondLock): _161.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUnbondLockProtoMsg): _161.MsgSuperfluidUnbondLock;
            toProto(message: _161.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUnbondLock): _161.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _161.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_161.MsgSuperfluidUnbondLockResponse>): _161.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _161.MsgSuperfluidUnbondLockResponseAmino): _161.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _161.MsgSuperfluidUnbondLockResponse): _161.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUnbondLockResponseAminoMsg): _161.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _161.MsgSuperfluidUnbondLockResponse): _161.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUnbondLockResponseProtoMsg): _161.MsgSuperfluidUnbondLockResponse;
            toProto(message: _161.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUnbondLockResponse): _161.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            typeUrl: string;
            encode(message: _161.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_161.MsgSuperfluidUndelegateAndUnbondLock>): _161.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _161.MsgSuperfluidUndelegateAndUnbondLockAmino): _161.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _161.MsgSuperfluidUndelegateAndUnbondLock): _161.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _161.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLock): _161.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _161.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _161.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLock): _161.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            typeUrl: string;
            encode(_: _161.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(_: Partial<_161.MsgSuperfluidUndelegateAndUnbondLockResponse>): _161.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(_: _161.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _161.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(_: _161.MsgSuperfluidUndelegateAndUnbondLockResponse): _161.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _161.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _161.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLockResponse): _161.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _161.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _161.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _161.MsgSuperfluidUndelegateAndUnbondLockResponse): _161.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _161.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_161.MsgLockAndSuperfluidDelegate>): _161.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _161.MsgLockAndSuperfluidDelegateAmino): _161.MsgLockAndSuperfluidDelegate;
            toAmino(message: _161.MsgLockAndSuperfluidDelegate): _161.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _161.MsgLockAndSuperfluidDelegateAminoMsg): _161.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _161.MsgLockAndSuperfluidDelegate): _161.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _161.MsgLockAndSuperfluidDelegateProtoMsg): _161.MsgLockAndSuperfluidDelegate;
            toProto(message: _161.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _161.MsgLockAndSuperfluidDelegate): _161.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _161.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_161.MsgLockAndSuperfluidDelegateResponse>): _161.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _161.MsgLockAndSuperfluidDelegateResponseAmino): _161.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _161.MsgLockAndSuperfluidDelegateResponse): _161.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _161.MsgLockAndSuperfluidDelegateResponseAminoMsg): _161.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _161.MsgLockAndSuperfluidDelegateResponse): _161.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _161.MsgLockAndSuperfluidDelegateResponseProtoMsg): _161.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _161.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _161.MsgLockAndSuperfluidDelegateResponse): _161.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _161.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_161.MsgUnPoolWhitelistedPool>): _161.MsgUnPoolWhitelistedPool;
            fromAmino(object: _161.MsgUnPoolWhitelistedPoolAmino): _161.MsgUnPoolWhitelistedPool;
            toAmino(message: _161.MsgUnPoolWhitelistedPool): _161.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _161.MsgUnPoolWhitelistedPoolAminoMsg): _161.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _161.MsgUnPoolWhitelistedPool): _161.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _161.MsgUnPoolWhitelistedPoolProtoMsg): _161.MsgUnPoolWhitelistedPool;
            toProto(message: _161.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _161.MsgUnPoolWhitelistedPool): _161.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _161.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_161.MsgUnPoolWhitelistedPoolResponse>): _161.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _161.MsgUnPoolWhitelistedPoolResponseAmino): _161.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _161.MsgUnPoolWhitelistedPoolResponse): _161.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _161.MsgUnPoolWhitelistedPoolResponseAminoMsg): _161.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _161.MsgUnPoolWhitelistedPoolResponse): _161.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _161.MsgUnPoolWhitelistedPoolResponseProtoMsg): _161.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _161.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _161.MsgUnPoolWhitelistedPoolResponse): _161.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            typeUrl: string;
            encode(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            typeUrl: string;
            encode(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _161.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _160.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _160.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _160.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _160.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _160.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _160.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidAsset;
            fromPartial(object: Partial<_160.SuperfluidAsset>): _160.SuperfluidAsset;
            fromAmino(object: _160.SuperfluidAssetAmino): _160.SuperfluidAsset;
            toAmino(message: _160.SuperfluidAsset): _160.SuperfluidAssetAmino;
            fromAminoMsg(object: _160.SuperfluidAssetAminoMsg): _160.SuperfluidAsset;
            toAminoMsg(message: _160.SuperfluidAsset): _160.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _160.SuperfluidAssetProtoMsg): _160.SuperfluidAsset;
            toProto(message: _160.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _160.SuperfluidAsset): _160.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _160.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_160.SuperfluidIntermediaryAccount>): _160.SuperfluidIntermediaryAccount;
            fromAmino(object: _160.SuperfluidIntermediaryAccountAmino): _160.SuperfluidIntermediaryAccount;
            toAmino(message: _160.SuperfluidIntermediaryAccount): _160.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _160.SuperfluidIntermediaryAccountAminoMsg): _160.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _160.SuperfluidIntermediaryAccount): _160.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _160.SuperfluidIntermediaryAccountProtoMsg): _160.SuperfluidIntermediaryAccount;
            toProto(message: _160.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _160.SuperfluidIntermediaryAccount): _160.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _160.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_160.OsmoEquivalentMultiplierRecord>): _160.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _160.OsmoEquivalentMultiplierRecordAmino): _160.OsmoEquivalentMultiplierRecord;
            toAmino(message: _160.OsmoEquivalentMultiplierRecord): _160.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _160.OsmoEquivalentMultiplierRecordAminoMsg): _160.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _160.OsmoEquivalentMultiplierRecord): _160.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _160.OsmoEquivalentMultiplierRecordProtoMsg): _160.OsmoEquivalentMultiplierRecord;
            toProto(message: _160.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _160.OsmoEquivalentMultiplierRecord): _160.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _160.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_160.SuperfluidDelegationRecord>): _160.SuperfluidDelegationRecord;
            fromAmino(object: _160.SuperfluidDelegationRecordAmino): _160.SuperfluidDelegationRecord;
            toAmino(message: _160.SuperfluidDelegationRecord): _160.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _160.SuperfluidDelegationRecordAminoMsg): _160.SuperfluidDelegationRecord;
            toAminoMsg(message: _160.SuperfluidDelegationRecord): _160.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _160.SuperfluidDelegationRecordProtoMsg): _160.SuperfluidDelegationRecord;
            toProto(message: _160.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _160.SuperfluidDelegationRecord): _160.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _160.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_160.LockIdIntermediaryAccountConnection>): _160.LockIdIntermediaryAccountConnection;
            fromAmino(object: _160.LockIdIntermediaryAccountConnectionAmino): _160.LockIdIntermediaryAccountConnection;
            toAmino(message: _160.LockIdIntermediaryAccountConnection): _160.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _160.LockIdIntermediaryAccountConnectionAminoMsg): _160.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _160.LockIdIntermediaryAccountConnection): _160.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _160.LockIdIntermediaryAccountConnectionProtoMsg): _160.LockIdIntermediaryAccountConnection;
            toProto(message: _160.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _160.LockIdIntermediaryAccountConnection): _160.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _160.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_160.UnpoolWhitelistedPools>): _160.UnpoolWhitelistedPools;
            fromAmino(object: _160.UnpoolWhitelistedPoolsAmino): _160.UnpoolWhitelistedPools;
            toAmino(message: _160.UnpoolWhitelistedPools): _160.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _160.UnpoolWhitelistedPoolsAminoMsg): _160.UnpoolWhitelistedPools;
            toAminoMsg(message: _160.UnpoolWhitelistedPools): _160.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _160.UnpoolWhitelistedPoolsProtoMsg): _160.UnpoolWhitelistedPools;
            toProto(message: _160.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _160.UnpoolWhitelistedPools): _160.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
            fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
            fromAmino(_: _159.QueryParamsRequestAmino): _159.QueryParamsRequest;
            toAmino(_: _159.QueryParamsRequest): _159.QueryParamsRequestAmino;
            fromAminoMsg(object: _159.QueryParamsRequestAminoMsg): _159.QueryParamsRequest;
            toAminoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _159.QueryParamsRequestProtoMsg): _159.QueryParamsRequest;
            toProto(message: _159.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _159.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
            fromPartial(object: Partial<_159.QueryParamsResponse>): _159.QueryParamsResponse;
            fromAmino(object: _159.QueryParamsResponseAmino): _159.QueryParamsResponse;
            toAmino(message: _159.QueryParamsResponse): _159.QueryParamsResponseAmino;
            fromAminoMsg(object: _159.QueryParamsResponseAminoMsg): _159.QueryParamsResponse;
            toAminoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _159.QueryParamsResponseProtoMsg): _159.QueryParamsResponse;
            toProto(message: _159.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _159.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AssetTypeRequest;
            fromPartial(object: Partial<_159.AssetTypeRequest>): _159.AssetTypeRequest;
            fromAmino(object: _159.AssetTypeRequestAmino): _159.AssetTypeRequest;
            toAmino(message: _159.AssetTypeRequest): _159.AssetTypeRequestAmino;
            fromAminoMsg(object: _159.AssetTypeRequestAminoMsg): _159.AssetTypeRequest;
            toAminoMsg(message: _159.AssetTypeRequest): _159.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _159.AssetTypeRequestProtoMsg): _159.AssetTypeRequest;
            toProto(message: _159.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _159.AssetTypeRequest): _159.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _159.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AssetTypeResponse;
            fromPartial(object: Partial<_159.AssetTypeResponse>): _159.AssetTypeResponse;
            fromAmino(object: _159.AssetTypeResponseAmino): _159.AssetTypeResponse;
            toAmino(message: _159.AssetTypeResponse): _159.AssetTypeResponseAmino;
            fromAminoMsg(object: _159.AssetTypeResponseAminoMsg): _159.AssetTypeResponse;
            toAminoMsg(message: _159.AssetTypeResponse): _159.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _159.AssetTypeResponseProtoMsg): _159.AssetTypeResponse;
            toProto(message: _159.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _159.AssetTypeResponse): _159.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _159.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AllAssetsRequest;
            fromPartial(_: Partial<_159.AllAssetsRequest>): _159.AllAssetsRequest;
            fromAmino(_: _159.AllAssetsRequestAmino): _159.AllAssetsRequest;
            toAmino(_: _159.AllAssetsRequest): _159.AllAssetsRequestAmino;
            fromAminoMsg(object: _159.AllAssetsRequestAminoMsg): _159.AllAssetsRequest;
            toAminoMsg(message: _159.AllAssetsRequest): _159.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _159.AllAssetsRequestProtoMsg): _159.AllAssetsRequest;
            toProto(message: _159.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _159.AllAssetsRequest): _159.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _159.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AllAssetsResponse;
            fromPartial(object: Partial<_159.AllAssetsResponse>): _159.AllAssetsResponse;
            fromAmino(object: _159.AllAssetsResponseAmino): _159.AllAssetsResponse;
            toAmino(message: _159.AllAssetsResponse): _159.AllAssetsResponseAmino;
            fromAminoMsg(object: _159.AllAssetsResponseAminoMsg): _159.AllAssetsResponse;
            toAminoMsg(message: _159.AllAssetsResponse): _159.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _159.AllAssetsResponseProtoMsg): _159.AllAssetsResponse;
            toProto(message: _159.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _159.AllAssetsResponse): _159.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _159.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AssetMultiplierRequest;
            fromPartial(object: Partial<_159.AssetMultiplierRequest>): _159.AssetMultiplierRequest;
            fromAmino(object: _159.AssetMultiplierRequestAmino): _159.AssetMultiplierRequest;
            toAmino(message: _159.AssetMultiplierRequest): _159.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _159.AssetMultiplierRequestAminoMsg): _159.AssetMultiplierRequest;
            toAminoMsg(message: _159.AssetMultiplierRequest): _159.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _159.AssetMultiplierRequestProtoMsg): _159.AssetMultiplierRequest;
            toProto(message: _159.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _159.AssetMultiplierRequest): _159.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _159.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AssetMultiplierResponse;
            fromPartial(object: Partial<_159.AssetMultiplierResponse>): _159.AssetMultiplierResponse;
            fromAmino(object: _159.AssetMultiplierResponseAmino): _159.AssetMultiplierResponse;
            toAmino(message: _159.AssetMultiplierResponse): _159.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _159.AssetMultiplierResponseAminoMsg): _159.AssetMultiplierResponse;
            toAminoMsg(message: _159.AssetMultiplierResponse): _159.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _159.AssetMultiplierResponseProtoMsg): _159.AssetMultiplierResponse;
            toProto(message: _159.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _159.AssetMultiplierResponse): _159.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _159.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_159.SuperfluidIntermediaryAccountInfo>): _159.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _159.SuperfluidIntermediaryAccountInfoAmino): _159.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _159.SuperfluidIntermediaryAccountInfo): _159.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _159.SuperfluidIntermediaryAccountInfoAminoMsg): _159.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _159.SuperfluidIntermediaryAccountInfo): _159.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _159.SuperfluidIntermediaryAccountInfoProtoMsg): _159.SuperfluidIntermediaryAccountInfo;
            toProto(message: _159.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _159.SuperfluidIntermediaryAccountInfo): _159.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _159.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_159.AllIntermediaryAccountsRequest>): _159.AllIntermediaryAccountsRequest;
            fromAmino(object: _159.AllIntermediaryAccountsRequestAmino): _159.AllIntermediaryAccountsRequest;
            toAmino(message: _159.AllIntermediaryAccountsRequest): _159.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _159.AllIntermediaryAccountsRequestAminoMsg): _159.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _159.AllIntermediaryAccountsRequest): _159.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _159.AllIntermediaryAccountsRequestProtoMsg): _159.AllIntermediaryAccountsRequest;
            toProto(message: _159.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _159.AllIntermediaryAccountsRequest): _159.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _159.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_159.AllIntermediaryAccountsResponse>): _159.AllIntermediaryAccountsResponse;
            fromAmino(object: _159.AllIntermediaryAccountsResponseAmino): _159.AllIntermediaryAccountsResponse;
            toAmino(message: _159.AllIntermediaryAccountsResponse): _159.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _159.AllIntermediaryAccountsResponseAminoMsg): _159.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _159.AllIntermediaryAccountsResponse): _159.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _159.AllIntermediaryAccountsResponseProtoMsg): _159.AllIntermediaryAccountsResponse;
            toProto(message: _159.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _159.AllIntermediaryAccountsResponse): _159.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _159.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_159.ConnectedIntermediaryAccountRequest>): _159.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _159.ConnectedIntermediaryAccountRequestAmino): _159.ConnectedIntermediaryAccountRequest;
            toAmino(message: _159.ConnectedIntermediaryAccountRequest): _159.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _159.ConnectedIntermediaryAccountRequestAminoMsg): _159.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _159.ConnectedIntermediaryAccountRequest): _159.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _159.ConnectedIntermediaryAccountRequestProtoMsg): _159.ConnectedIntermediaryAccountRequest;
            toProto(message: _159.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _159.ConnectedIntermediaryAccountRequest): _159.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _159.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_159.ConnectedIntermediaryAccountResponse>): _159.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _159.ConnectedIntermediaryAccountResponseAmino): _159.ConnectedIntermediaryAccountResponse;
            toAmino(message: _159.ConnectedIntermediaryAccountResponse): _159.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _159.ConnectedIntermediaryAccountResponseAminoMsg): _159.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _159.ConnectedIntermediaryAccountResponse): _159.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _159.ConnectedIntermediaryAccountResponseProtoMsg): _159.ConnectedIntermediaryAccountResponse;
            toProto(message: _159.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _159.ConnectedIntermediaryAccountResponse): _159.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _159.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_159.QueryTotalDelegationByValidatorForDenomRequest>): _159.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _159.QueryTotalDelegationByValidatorForDenomRequestAmino): _159.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _159.QueryTotalDelegationByValidatorForDenomRequest): _159.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _159.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _159.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _159.QueryTotalDelegationByValidatorForDenomRequest): _159.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _159.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _159.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _159.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _159.QueryTotalDelegationByValidatorForDenomRequest): _159.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _159.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_159.QueryTotalDelegationByValidatorForDenomResponse>): _159.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _159.QueryTotalDelegationByValidatorForDenomResponseAmino): _159.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _159.QueryTotalDelegationByValidatorForDenomResponse): _159.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _159.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _159.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _159.QueryTotalDelegationByValidatorForDenomResponse): _159.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _159.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _159.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _159.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _159.QueryTotalDelegationByValidatorForDenomResponse): _159.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _159.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Delegations;
            fromPartial(object: Partial<_159.Delegations>): _159.Delegations;
            fromAmino(object: _159.DelegationsAmino): _159.Delegations;
            toAmino(message: _159.Delegations): _159.DelegationsAmino;
            fromAminoMsg(object: _159.DelegationsAminoMsg): _159.Delegations;
            toAminoMsg(message: _159.Delegations): _159.DelegationsAminoMsg;
            fromProtoMsg(message: _159.DelegationsProtoMsg): _159.Delegations;
            toProto(message: _159.Delegations): Uint8Array;
            toProtoMsg(message: _159.Delegations): _159.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _159.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_159.TotalSuperfluidDelegationsRequest>): _159.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _159.TotalSuperfluidDelegationsRequestAmino): _159.TotalSuperfluidDelegationsRequest;
            toAmino(_: _159.TotalSuperfluidDelegationsRequest): _159.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _159.TotalSuperfluidDelegationsRequestAminoMsg): _159.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _159.TotalSuperfluidDelegationsRequest): _159.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _159.TotalSuperfluidDelegationsRequestProtoMsg): _159.TotalSuperfluidDelegationsRequest;
            toProto(message: _159.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _159.TotalSuperfluidDelegationsRequest): _159.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _159.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_159.TotalSuperfluidDelegationsResponse>): _159.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _159.TotalSuperfluidDelegationsResponseAmino): _159.TotalSuperfluidDelegationsResponse;
            toAmino(message: _159.TotalSuperfluidDelegationsResponse): _159.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _159.TotalSuperfluidDelegationsResponseAminoMsg): _159.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _159.TotalSuperfluidDelegationsResponse): _159.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _159.TotalSuperfluidDelegationsResponseProtoMsg): _159.TotalSuperfluidDelegationsResponse;
            toProto(message: _159.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _159.TotalSuperfluidDelegationsResponse): _159.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_159.SuperfluidDelegationAmountRequest>): _159.SuperfluidDelegationAmountRequest;
            fromAmino(object: _159.SuperfluidDelegationAmountRequestAmino): _159.SuperfluidDelegationAmountRequest;
            toAmino(message: _159.SuperfluidDelegationAmountRequest): _159.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationAmountRequestAminoMsg): _159.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _159.SuperfluidDelegationAmountRequest): _159.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationAmountRequestProtoMsg): _159.SuperfluidDelegationAmountRequest;
            toProto(message: _159.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationAmountRequest): _159.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_159.SuperfluidDelegationAmountResponse>): _159.SuperfluidDelegationAmountResponse;
            fromAmino(object: _159.SuperfluidDelegationAmountResponseAmino): _159.SuperfluidDelegationAmountResponse;
            toAmino(message: _159.SuperfluidDelegationAmountResponse): _159.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationAmountResponseAminoMsg): _159.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _159.SuperfluidDelegationAmountResponse): _159.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationAmountResponseProtoMsg): _159.SuperfluidDelegationAmountResponse;
            toProto(message: _159.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationAmountResponse): _159.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_159.SuperfluidDelegationsByDelegatorRequest>): _159.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _159.SuperfluidDelegationsByDelegatorRequestAmino): _159.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _159.SuperfluidDelegationsByDelegatorRequest): _159.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationsByDelegatorRequestAminoMsg): _159.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _159.SuperfluidDelegationsByDelegatorRequest): _159.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationsByDelegatorRequestProtoMsg): _159.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _159.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationsByDelegatorRequest): _159.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_159.SuperfluidDelegationsByDelegatorResponse>): _159.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _159.SuperfluidDelegationsByDelegatorResponseAmino): _159.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _159.SuperfluidDelegationsByDelegatorResponse): _159.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationsByDelegatorResponseAminoMsg): _159.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _159.SuperfluidDelegationsByDelegatorResponse): _159.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationsByDelegatorResponseProtoMsg): _159.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _159.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationsByDelegatorResponse): _159.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _159.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_159.SuperfluidUndelegationsByDelegatorRequest>): _159.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _159.SuperfluidUndelegationsByDelegatorRequestAmino): _159.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _159.SuperfluidUndelegationsByDelegatorRequest): _159.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _159.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _159.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _159.SuperfluidUndelegationsByDelegatorRequest): _159.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _159.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _159.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _159.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _159.SuperfluidUndelegationsByDelegatorRequest): _159.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _159.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_159.SuperfluidUndelegationsByDelegatorResponse>): _159.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _159.SuperfluidUndelegationsByDelegatorResponseAmino): _159.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _159.SuperfluidUndelegationsByDelegatorResponse): _159.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _159.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _159.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _159.SuperfluidUndelegationsByDelegatorResponse): _159.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _159.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _159.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _159.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _159.SuperfluidUndelegationsByDelegatorResponse): _159.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_159.SuperfluidDelegationsByValidatorDenomRequest>): _159.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _159.SuperfluidDelegationsByValidatorDenomRequestAmino): _159.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _159.SuperfluidDelegationsByValidatorDenomRequest): _159.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _159.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _159.SuperfluidDelegationsByValidatorDenomRequest): _159.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _159.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _159.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationsByValidatorDenomRequest): _159.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _159.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_159.SuperfluidDelegationsByValidatorDenomResponse>): _159.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _159.SuperfluidDelegationsByValidatorDenomResponseAmino): _159.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _159.SuperfluidDelegationsByValidatorDenomResponse): _159.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _159.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _159.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _159.SuperfluidDelegationsByValidatorDenomResponse): _159.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _159.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _159.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _159.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _159.SuperfluidDelegationsByValidatorDenomResponse): _159.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _159.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_159.QueryTotalDelegationByDelegatorRequest>): _159.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _159.QueryTotalDelegationByDelegatorRequestAmino): _159.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _159.QueryTotalDelegationByDelegatorRequest): _159.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _159.QueryTotalDelegationByDelegatorRequestAminoMsg): _159.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _159.QueryTotalDelegationByDelegatorRequest): _159.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _159.QueryTotalDelegationByDelegatorRequestProtoMsg): _159.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _159.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _159.QueryTotalDelegationByDelegatorRequest): _159.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _159.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_159.QueryTotalDelegationByDelegatorResponse>): _159.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _159.QueryTotalDelegationByDelegatorResponseAmino): _159.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _159.QueryTotalDelegationByDelegatorResponse): _159.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _159.QueryTotalDelegationByDelegatorResponseAminoMsg): _159.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _159.QueryTotalDelegationByDelegatorResponse): _159.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _159.QueryTotalDelegationByDelegatorResponseProtoMsg): _159.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _159.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _159.QueryTotalDelegationByDelegatorResponse): _159.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _159.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_159.QueryUnpoolWhitelistRequest>): _159.QueryUnpoolWhitelistRequest;
            fromAmino(_: _159.QueryUnpoolWhitelistRequestAmino): _159.QueryUnpoolWhitelistRequest;
            toAmino(_: _159.QueryUnpoolWhitelistRequest): _159.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _159.QueryUnpoolWhitelistRequestAminoMsg): _159.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _159.QueryUnpoolWhitelistRequest): _159.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _159.QueryUnpoolWhitelistRequestProtoMsg): _159.QueryUnpoolWhitelistRequest;
            toProto(message: _159.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _159.QueryUnpoolWhitelistRequest): _159.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _159.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_159.QueryUnpoolWhitelistResponse>): _159.QueryUnpoolWhitelistResponse;
            fromAmino(object: _159.QueryUnpoolWhitelistResponseAmino): _159.QueryUnpoolWhitelistResponse;
            toAmino(message: _159.QueryUnpoolWhitelistResponse): _159.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _159.QueryUnpoolWhitelistResponseAminoMsg): _159.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _159.QueryUnpoolWhitelistResponse): _159.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _159.QueryUnpoolWhitelistResponseProtoMsg): _159.QueryUnpoolWhitelistResponse;
            toProto(message: _159.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _159.QueryUnpoolWhitelistResponse): _159.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _158.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Params;
            fromPartial(object: Partial<_158.Params>): _158.Params;
            fromAmino(object: _158.ParamsAmino): _158.Params;
            toAmino(message: _158.Params): _158.ParamsAmino;
            fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
            toAminoMsg(message: _158.Params): _158.ParamsAminoMsg;
            fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
            toProto(message: _158.Params): Uint8Array;
            toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GenesisState;
            fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
            fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
            toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
            fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
            toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
            fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
            toProto(message: _157.GenesisState): Uint8Array;
            toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                denomAuthorityMetadata(request: _165.QueryDenomAuthorityMetadataRequest): Promise<_165.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _165.QueryDenomsFromCreatorRequest): Promise<_165.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _165.QueryBeforeSendHookAddressRequest): Promise<_165.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _166.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _166.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _166.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _166.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _166.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _166.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _166.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _166.MsgCreateDenom): {
                        typeUrl: string;
                        value: _166.MsgCreateDenom;
                    };
                    mint(value: _166.MsgMint): {
                        typeUrl: string;
                        value: _166.MsgMint;
                    };
                    burn(value: _166.MsgBurn): {
                        typeUrl: string;
                        value: _166.MsgBurn;
                    };
                    changeAdmin(value: _166.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _166.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _166.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _166.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _166.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _166.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _166.MsgForceTransfer): {
                        typeUrl: string;
                        value: _166.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _166.MsgCreateDenom): {
                        typeUrl: string;
                        value: _166.MsgCreateDenom;
                    };
                    mint(value: _166.MsgMint): {
                        typeUrl: string;
                        value: _166.MsgMint;
                    };
                    burn(value: _166.MsgBurn): {
                        typeUrl: string;
                        value: _166.MsgBurn;
                    };
                    changeAdmin(value: _166.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _166.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _166.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _166.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _166.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _166.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _166.MsgForceTransfer): {
                        typeUrl: string;
                        value: _166.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _166.MsgCreateDenom) => _166.MsgCreateDenomAmino;
                    fromAmino: (object: _166.MsgCreateDenomAmino) => _166.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _166.MsgMint) => _166.MsgMintAmino;
                    fromAmino: (object: _166.MsgMintAmino) => _166.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _166.MsgBurn) => _166.MsgBurnAmino;
                    fromAmino: (object: _166.MsgBurnAmino) => _166.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _166.MsgChangeAdmin) => _166.MsgChangeAdminAmino;
                    fromAmino: (object: _166.MsgChangeAdminAmino) => _166.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _166.MsgSetDenomMetadata) => _166.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _166.MsgSetDenomMetadataAmino) => _166.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _166.MsgSetBeforeSendHook) => _166.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _166.MsgSetBeforeSendHookAmino) => _166.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _166.MsgForceTransfer) => _166.MsgForceTransferAmino;
                    fromAmino: (object: _166.MsgForceTransferAmino) => _166.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _166.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgCreateDenom;
                fromPartial(object: Partial<_166.MsgCreateDenom>): _166.MsgCreateDenom;
                fromAmino(object: _166.MsgCreateDenomAmino): _166.MsgCreateDenom;
                toAmino(message: _166.MsgCreateDenom): _166.MsgCreateDenomAmino;
                fromAminoMsg(object: _166.MsgCreateDenomAminoMsg): _166.MsgCreateDenom;
                toAminoMsg(message: _166.MsgCreateDenom): _166.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _166.MsgCreateDenomProtoMsg): _166.MsgCreateDenom;
                toProto(message: _166.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _166.MsgCreateDenom): _166.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _166.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgCreateDenomResponse;
                fromPartial(object: Partial<_166.MsgCreateDenomResponse>): _166.MsgCreateDenomResponse;
                fromAmino(object: _166.MsgCreateDenomResponseAmino): _166.MsgCreateDenomResponse;
                toAmino(message: _166.MsgCreateDenomResponse): _166.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _166.MsgCreateDenomResponseAminoMsg): _166.MsgCreateDenomResponse;
                toAminoMsg(message: _166.MsgCreateDenomResponse): _166.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _166.MsgCreateDenomResponseProtoMsg): _166.MsgCreateDenomResponse;
                toProto(message: _166.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _166.MsgCreateDenomResponse): _166.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _166.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgMint;
                fromPartial(object: Partial<_166.MsgMint>): _166.MsgMint;
                fromAmino(object: _166.MsgMintAmino): _166.MsgMint;
                toAmino(message: _166.MsgMint): _166.MsgMintAmino;
                fromAminoMsg(object: _166.MsgMintAminoMsg): _166.MsgMint;
                toAminoMsg(message: _166.MsgMint): _166.MsgMintAminoMsg;
                fromProtoMsg(message: _166.MsgMintProtoMsg): _166.MsgMint;
                toProto(message: _166.MsgMint): Uint8Array;
                toProtoMsg(message: _166.MsgMint): _166.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _166.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgMintResponse;
                fromPartial(_: Partial<_166.MsgMintResponse>): _166.MsgMintResponse;
                fromAmino(_: _166.MsgMintResponseAmino): _166.MsgMintResponse;
                toAmino(_: _166.MsgMintResponse): _166.MsgMintResponseAmino;
                fromAminoMsg(object: _166.MsgMintResponseAminoMsg): _166.MsgMintResponse;
                toAminoMsg(message: _166.MsgMintResponse): _166.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _166.MsgMintResponseProtoMsg): _166.MsgMintResponse;
                toProto(message: _166.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _166.MsgMintResponse): _166.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _166.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgBurn;
                fromPartial(object: Partial<_166.MsgBurn>): _166.MsgBurn;
                fromAmino(object: _166.MsgBurnAmino): _166.MsgBurn;
                toAmino(message: _166.MsgBurn): _166.MsgBurnAmino;
                fromAminoMsg(object: _166.MsgBurnAminoMsg): _166.MsgBurn;
                toAminoMsg(message: _166.MsgBurn): _166.MsgBurnAminoMsg;
                fromProtoMsg(message: _166.MsgBurnProtoMsg): _166.MsgBurn;
                toProto(message: _166.MsgBurn): Uint8Array;
                toProtoMsg(message: _166.MsgBurn): _166.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _166.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgBurnResponse;
                fromPartial(_: Partial<_166.MsgBurnResponse>): _166.MsgBurnResponse;
                fromAmino(_: _166.MsgBurnResponseAmino): _166.MsgBurnResponse;
                toAmino(_: _166.MsgBurnResponse): _166.MsgBurnResponseAmino;
                fromAminoMsg(object: _166.MsgBurnResponseAminoMsg): _166.MsgBurnResponse;
                toAminoMsg(message: _166.MsgBurnResponse): _166.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _166.MsgBurnResponseProtoMsg): _166.MsgBurnResponse;
                toProto(message: _166.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _166.MsgBurnResponse): _166.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _166.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgChangeAdmin;
                fromPartial(object: Partial<_166.MsgChangeAdmin>): _166.MsgChangeAdmin;
                fromAmino(object: _166.MsgChangeAdminAmino): _166.MsgChangeAdmin;
                toAmino(message: _166.MsgChangeAdmin): _166.MsgChangeAdminAmino;
                fromAminoMsg(object: _166.MsgChangeAdminAminoMsg): _166.MsgChangeAdmin;
                toAminoMsg(message: _166.MsgChangeAdmin): _166.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _166.MsgChangeAdminProtoMsg): _166.MsgChangeAdmin;
                toProto(message: _166.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _166.MsgChangeAdmin): _166.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _166.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgChangeAdminResponse;
                fromPartial(_: Partial<_166.MsgChangeAdminResponse>): _166.MsgChangeAdminResponse;
                fromAmino(_: _166.MsgChangeAdminResponseAmino): _166.MsgChangeAdminResponse;
                toAmino(_: _166.MsgChangeAdminResponse): _166.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _166.MsgChangeAdminResponseAminoMsg): _166.MsgChangeAdminResponse;
                toAminoMsg(message: _166.MsgChangeAdminResponse): _166.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _166.MsgChangeAdminResponseProtoMsg): _166.MsgChangeAdminResponse;
                toProto(message: _166.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _166.MsgChangeAdminResponse): _166.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _166.MsgSetBeforeSendHook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_166.MsgSetBeforeSendHook>): _166.MsgSetBeforeSendHook;
                fromAmino(object: _166.MsgSetBeforeSendHookAmino): _166.MsgSetBeforeSendHook;
                toAmino(message: _166.MsgSetBeforeSendHook): _166.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _166.MsgSetBeforeSendHookAminoMsg): _166.MsgSetBeforeSendHook;
                toAminoMsg(message: _166.MsgSetBeforeSendHook): _166.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _166.MsgSetBeforeSendHookProtoMsg): _166.MsgSetBeforeSendHook;
                toProto(message: _166.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _166.MsgSetBeforeSendHook): _166.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _166.MsgSetBeforeSendHookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_166.MsgSetBeforeSendHookResponse>): _166.MsgSetBeforeSendHookResponse;
                fromAmino(_: _166.MsgSetBeforeSendHookResponseAmino): _166.MsgSetBeforeSendHookResponse;
                toAmino(_: _166.MsgSetBeforeSendHookResponse): _166.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _166.MsgSetBeforeSendHookResponseAminoMsg): _166.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _166.MsgSetBeforeSendHookResponse): _166.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _166.MsgSetBeforeSendHookResponseProtoMsg): _166.MsgSetBeforeSendHookResponse;
                toProto(message: _166.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _166.MsgSetBeforeSendHookResponse): _166.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _166.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetDenomMetadata;
                fromPartial(object: Partial<_166.MsgSetDenomMetadata>): _166.MsgSetDenomMetadata;
                fromAmino(object: _166.MsgSetDenomMetadataAmino): _166.MsgSetDenomMetadata;
                toAmino(message: _166.MsgSetDenomMetadata): _166.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _166.MsgSetDenomMetadataAminoMsg): _166.MsgSetDenomMetadata;
                toAminoMsg(message: _166.MsgSetDenomMetadata): _166.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _166.MsgSetDenomMetadataProtoMsg): _166.MsgSetDenomMetadata;
                toProto(message: _166.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _166.MsgSetDenomMetadata): _166.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _166.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_166.MsgSetDenomMetadataResponse>): _166.MsgSetDenomMetadataResponse;
                fromAmino(_: _166.MsgSetDenomMetadataResponseAmino): _166.MsgSetDenomMetadataResponse;
                toAmino(_: _166.MsgSetDenomMetadataResponse): _166.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _166.MsgSetDenomMetadataResponseAminoMsg): _166.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _166.MsgSetDenomMetadataResponse): _166.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _166.MsgSetDenomMetadataResponseProtoMsg): _166.MsgSetDenomMetadataResponse;
                toProto(message: _166.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _166.MsgSetDenomMetadataResponse): _166.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _166.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgForceTransfer;
                fromPartial(object: Partial<_166.MsgForceTransfer>): _166.MsgForceTransfer;
                fromAmino(object: _166.MsgForceTransferAmino): _166.MsgForceTransfer;
                toAmino(message: _166.MsgForceTransfer): _166.MsgForceTransferAmino;
                fromAminoMsg(object: _166.MsgForceTransferAminoMsg): _166.MsgForceTransfer;
                toAminoMsg(message: _166.MsgForceTransfer): _166.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _166.MsgForceTransferProtoMsg): _166.MsgForceTransfer;
                toProto(message: _166.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _166.MsgForceTransfer): _166.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _166.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgForceTransferResponse;
                fromPartial(_: Partial<_166.MsgForceTransferResponse>): _166.MsgForceTransferResponse;
                fromAmino(_: _166.MsgForceTransferResponseAmino): _166.MsgForceTransferResponse;
                toAmino(_: _166.MsgForceTransferResponse): _166.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _166.MsgForceTransferResponseAminoMsg): _166.MsgForceTransferResponse;
                toAminoMsg(message: _166.MsgForceTransferResponse): _166.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _166.MsgForceTransferResponseProtoMsg): _166.MsgForceTransferResponse;
                toProto(message: _166.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _166.MsgForceTransferResponse): _166.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _165.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsRequest;
                fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                fromAmino(_: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                toAmino(_: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
                fromAminoMsg(object: _165.QueryParamsRequestAminoMsg): _165.QueryParamsRequest;
                toAminoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _165.QueryParamsRequestProtoMsg): _165.QueryParamsRequest;
                toProto(message: _165.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _165.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsResponse;
                fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
                fromAminoMsg(object: _165.QueryParamsResponseAminoMsg): _165.QueryParamsResponse;
                toAminoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _165.QueryParamsResponseProtoMsg): _165.QueryParamsResponse;
                toProto(message: _165.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _165.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_165.QueryDenomAuthorityMetadataRequest>): _165.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _165.QueryDenomAuthorityMetadataRequestAmino): _165.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _165.QueryDenomAuthorityMetadataRequest): _165.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _165.QueryDenomAuthorityMetadataRequestAminoMsg): _165.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _165.QueryDenomAuthorityMetadataRequest): _165.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _165.QueryDenomAuthorityMetadataRequestProtoMsg): _165.QueryDenomAuthorityMetadataRequest;
                toProto(message: _165.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _165.QueryDenomAuthorityMetadataRequest): _165.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _165.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_165.QueryDenomAuthorityMetadataResponse>): _165.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _165.QueryDenomAuthorityMetadataResponseAmino): _165.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _165.QueryDenomAuthorityMetadataResponse): _165.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _165.QueryDenomAuthorityMetadataResponseAminoMsg): _165.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _165.QueryDenomAuthorityMetadataResponse): _165.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _165.QueryDenomAuthorityMetadataResponseProtoMsg): _165.QueryDenomAuthorityMetadataResponse;
                toProto(message: _165.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _165.QueryDenomAuthorityMetadataResponse): _165.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _165.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_165.QueryDenomsFromCreatorRequest>): _165.QueryDenomsFromCreatorRequest;
                fromAmino(object: _165.QueryDenomsFromCreatorRequestAmino): _165.QueryDenomsFromCreatorRequest;
                toAmino(message: _165.QueryDenomsFromCreatorRequest): _165.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _165.QueryDenomsFromCreatorRequestAminoMsg): _165.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _165.QueryDenomsFromCreatorRequest): _165.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _165.QueryDenomsFromCreatorRequestProtoMsg): _165.QueryDenomsFromCreatorRequest;
                toProto(message: _165.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _165.QueryDenomsFromCreatorRequest): _165.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _165.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_165.QueryDenomsFromCreatorResponse>): _165.QueryDenomsFromCreatorResponse;
                fromAmino(object: _165.QueryDenomsFromCreatorResponseAmino): _165.QueryDenomsFromCreatorResponse;
                toAmino(message: _165.QueryDenomsFromCreatorResponse): _165.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _165.QueryDenomsFromCreatorResponseAminoMsg): _165.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _165.QueryDenomsFromCreatorResponse): _165.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _165.QueryDenomsFromCreatorResponseProtoMsg): _165.QueryDenomsFromCreatorResponse;
                toProto(message: _165.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _165.QueryDenomsFromCreatorResponse): _165.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _165.QueryBeforeSendHookAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_165.QueryBeforeSendHookAddressRequest>): _165.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _165.QueryBeforeSendHookAddressRequestAmino): _165.QueryBeforeSendHookAddressRequest;
                toAmino(message: _165.QueryBeforeSendHookAddressRequest): _165.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _165.QueryBeforeSendHookAddressRequestAminoMsg): _165.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _165.QueryBeforeSendHookAddressRequest): _165.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _165.QueryBeforeSendHookAddressRequestProtoMsg): _165.QueryBeforeSendHookAddressRequest;
                toProto(message: _165.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _165.QueryBeforeSendHookAddressRequest): _165.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _165.QueryBeforeSendHookAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_165.QueryBeforeSendHookAddressResponse>): _165.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _165.QueryBeforeSendHookAddressResponseAmino): _165.QueryBeforeSendHookAddressResponse;
                toAmino(message: _165.QueryBeforeSendHookAddressResponse): _165.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _165.QueryBeforeSendHookAddressResponseAminoMsg): _165.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _165.QueryBeforeSendHookAddressResponse): _165.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _165.QueryBeforeSendHookAddressResponseProtoMsg): _165.QueryBeforeSendHookAddressResponse;
                toProto(message: _165.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _165.QueryBeforeSendHookAddressResponse): _165.QueryBeforeSendHookAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _164.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Params;
                fromPartial(object: Partial<_164.Params>): _164.Params;
                fromAmino(object: _164.ParamsAmino): _164.Params;
                toAmino(message: _164.Params): _164.ParamsAmino;
                fromAminoMsg(object: _164.ParamsAminoMsg): _164.Params;
                toAminoMsg(message: _164.Params): _164.ParamsAminoMsg;
                fromProtoMsg(message: _164.ParamsProtoMsg): _164.Params;
                toProto(message: _164.Params): Uint8Array;
                toProtoMsg(message: _164.Params): _164.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                toProto(message: _163.GenesisState): Uint8Array;
                toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _163.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisDenom;
                fromPartial(object: Partial<_163.GenesisDenom>): _163.GenesisDenom;
                fromAmino(object: _163.GenesisDenomAmino): _163.GenesisDenom;
                toAmino(message: _163.GenesisDenom): _163.GenesisDenomAmino;
                fromAminoMsg(object: _163.GenesisDenomAminoMsg): _163.GenesisDenom;
                toAminoMsg(message: _163.GenesisDenom): _163.GenesisDenomAminoMsg;
                fromProtoMsg(message: _163.GenesisDenomProtoMsg): _163.GenesisDenom;
                toProto(message: _163.GenesisDenom): Uint8Array;
                toProtoMsg(message: _163.GenesisDenom): _163.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _162.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DenomAuthorityMetadata;
                fromPartial(object: Partial<_162.DenomAuthorityMetadata>): _162.DenomAuthorityMetadata;
                fromAmino(object: _162.DenomAuthorityMetadataAmino): _162.DenomAuthorityMetadata;
                toAmino(message: _162.DenomAuthorityMetadata): _162.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _162.DenomAuthorityMetadataAminoMsg): _162.DenomAuthorityMetadata;
                toAminoMsg(message: _162.DenomAuthorityMetadata): _162.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _162.DenomAuthorityMetadataProtoMsg): _162.DenomAuthorityMetadata;
                toProto(message: _162.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _162.DenomAuthorityMetadata): _162.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.ParamsRequest): Promise<_168.ParamsResponse>;
                arithmeticTwap(request: _168.ArithmeticTwapRequest): Promise<_168.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _168.ArithmeticTwapToNowRequest): Promise<_168.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _168.GeometricTwapRequest): Promise<_168.GeometricTwapResponse>;
                geometricTwapToNow(request: _168.GeometricTwapToNowRequest): Promise<_168.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _169.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TwapRecord;
                fromPartial(object: Partial<_169.TwapRecord>): _169.TwapRecord;
                fromAmino(object: _169.TwapRecordAmino): _169.TwapRecord;
                toAmino(message: _169.TwapRecord): _169.TwapRecordAmino;
                fromAminoMsg(object: _169.TwapRecordAminoMsg): _169.TwapRecord;
                toAminoMsg(message: _169.TwapRecord): _169.TwapRecordAminoMsg;
                fromProtoMsg(message: _169.TwapRecordProtoMsg): _169.TwapRecord;
                toProto(message: _169.TwapRecord): Uint8Array;
                toProtoMsg(message: _169.TwapRecord): _169.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _168.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ArithmeticTwapRequest;
                fromPartial(object: Partial<_168.ArithmeticTwapRequest>): _168.ArithmeticTwapRequest;
                fromAmino(object: _168.ArithmeticTwapRequestAmino): _168.ArithmeticTwapRequest;
                toAmino(message: _168.ArithmeticTwapRequest): _168.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _168.ArithmeticTwapRequestAminoMsg): _168.ArithmeticTwapRequest;
                toAminoMsg(message: _168.ArithmeticTwapRequest): _168.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _168.ArithmeticTwapRequestProtoMsg): _168.ArithmeticTwapRequest;
                toProto(message: _168.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _168.ArithmeticTwapRequest): _168.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _168.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ArithmeticTwapResponse;
                fromPartial(object: Partial<_168.ArithmeticTwapResponse>): _168.ArithmeticTwapResponse;
                fromAmino(object: _168.ArithmeticTwapResponseAmino): _168.ArithmeticTwapResponse;
                toAmino(message: _168.ArithmeticTwapResponse): _168.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _168.ArithmeticTwapResponseAminoMsg): _168.ArithmeticTwapResponse;
                toAminoMsg(message: _168.ArithmeticTwapResponse): _168.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _168.ArithmeticTwapResponseProtoMsg): _168.ArithmeticTwapResponse;
                toProto(message: _168.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _168.ArithmeticTwapResponse): _168.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _168.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_168.ArithmeticTwapToNowRequest>): _168.ArithmeticTwapToNowRequest;
                fromAmino(object: _168.ArithmeticTwapToNowRequestAmino): _168.ArithmeticTwapToNowRequest;
                toAmino(message: _168.ArithmeticTwapToNowRequest): _168.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _168.ArithmeticTwapToNowRequestAminoMsg): _168.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _168.ArithmeticTwapToNowRequest): _168.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _168.ArithmeticTwapToNowRequestProtoMsg): _168.ArithmeticTwapToNowRequest;
                toProto(message: _168.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _168.ArithmeticTwapToNowRequest): _168.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _168.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_168.ArithmeticTwapToNowResponse>): _168.ArithmeticTwapToNowResponse;
                fromAmino(object: _168.ArithmeticTwapToNowResponseAmino): _168.ArithmeticTwapToNowResponse;
                toAmino(message: _168.ArithmeticTwapToNowResponse): _168.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _168.ArithmeticTwapToNowResponseAminoMsg): _168.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _168.ArithmeticTwapToNowResponse): _168.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _168.ArithmeticTwapToNowResponseProtoMsg): _168.ArithmeticTwapToNowResponse;
                toProto(message: _168.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _168.ArithmeticTwapToNowResponse): _168.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                typeUrl: string;
                encode(message: _168.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GeometricTwapRequest;
                fromPartial(object: Partial<_168.GeometricTwapRequest>): _168.GeometricTwapRequest;
                fromAmino(object: _168.GeometricTwapRequestAmino): _168.GeometricTwapRequest;
                toAmino(message: _168.GeometricTwapRequest): _168.GeometricTwapRequestAmino;
                fromAminoMsg(object: _168.GeometricTwapRequestAminoMsg): _168.GeometricTwapRequest;
                toAminoMsg(message: _168.GeometricTwapRequest): _168.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _168.GeometricTwapRequestProtoMsg): _168.GeometricTwapRequest;
                toProto(message: _168.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _168.GeometricTwapRequest): _168.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                typeUrl: string;
                encode(message: _168.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GeometricTwapResponse;
                fromPartial(object: Partial<_168.GeometricTwapResponse>): _168.GeometricTwapResponse;
                fromAmino(object: _168.GeometricTwapResponseAmino): _168.GeometricTwapResponse;
                toAmino(message: _168.GeometricTwapResponse): _168.GeometricTwapResponseAmino;
                fromAminoMsg(object: _168.GeometricTwapResponseAminoMsg): _168.GeometricTwapResponse;
                toAminoMsg(message: _168.GeometricTwapResponse): _168.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _168.GeometricTwapResponseProtoMsg): _168.GeometricTwapResponse;
                toProto(message: _168.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _168.GeometricTwapResponse): _168.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                typeUrl: string;
                encode(message: _168.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_168.GeometricTwapToNowRequest>): _168.GeometricTwapToNowRequest;
                fromAmino(object: _168.GeometricTwapToNowRequestAmino): _168.GeometricTwapToNowRequest;
                toAmino(message: _168.GeometricTwapToNowRequest): _168.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _168.GeometricTwapToNowRequestAminoMsg): _168.GeometricTwapToNowRequest;
                toAminoMsg(message: _168.GeometricTwapToNowRequest): _168.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _168.GeometricTwapToNowRequestProtoMsg): _168.GeometricTwapToNowRequest;
                toProto(message: _168.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _168.GeometricTwapToNowRequest): _168.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                typeUrl: string;
                encode(message: _168.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_168.GeometricTwapToNowResponse>): _168.GeometricTwapToNowResponse;
                fromAmino(object: _168.GeometricTwapToNowResponseAmino): _168.GeometricTwapToNowResponse;
                toAmino(message: _168.GeometricTwapToNowResponse): _168.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _168.GeometricTwapToNowResponseAminoMsg): _168.GeometricTwapToNowResponse;
                toAminoMsg(message: _168.GeometricTwapToNowResponse): _168.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _168.GeometricTwapToNowResponseProtoMsg): _168.GeometricTwapToNowResponse;
                toProto(message: _168.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _168.GeometricTwapToNowResponse): _168.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _168.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ParamsRequest;
                fromPartial(_: Partial<_168.ParamsRequest>): _168.ParamsRequest;
                fromAmino(_: _168.ParamsRequestAmino): _168.ParamsRequest;
                toAmino(_: _168.ParamsRequest): _168.ParamsRequestAmino;
                fromAminoMsg(object: _168.ParamsRequestAminoMsg): _168.ParamsRequest;
                toAminoMsg(message: _168.ParamsRequest): _168.ParamsRequestAminoMsg;
                fromProtoMsg(message: _168.ParamsRequestProtoMsg): _168.ParamsRequest;
                toProto(message: _168.ParamsRequest): Uint8Array;
                toProtoMsg(message: _168.ParamsRequest): _168.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _168.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ParamsResponse;
                fromPartial(object: Partial<_168.ParamsResponse>): _168.ParamsResponse;
                fromAmino(object: _168.ParamsResponseAmino): _168.ParamsResponse;
                toAmino(message: _168.ParamsResponse): _168.ParamsResponseAmino;
                fromAminoMsg(object: _168.ParamsResponseAminoMsg): _168.ParamsResponse;
                toAminoMsg(message: _168.ParamsResponse): _168.ParamsResponseAminoMsg;
                fromProtoMsg(message: _168.ParamsResponseProtoMsg): _168.ParamsResponse;
                toProto(message: _168.ParamsResponse): Uint8Array;
                toProtoMsg(message: _168.ParamsResponse): _168.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Params;
                fromPartial(object: Partial<_167.Params>): _167.Params;
                fromAmino(object: _167.ParamsAmino): _167.Params;
                toAmino(message: _167.Params): _167.ParamsAmino;
                fromAminoMsg(object: _167.ParamsAminoMsg): _167.Params;
                toAminoMsg(message: _167.Params): _167.ParamsAminoMsg;
                fromProtoMsg(message: _167.ParamsProtoMsg): _167.Params;
                toProto(message: _167.Params): Uint8Array;
                toProtoMsg(message: _167.Params): _167.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _167.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.GenesisState;
                fromPartial(object: Partial<_167.GenesisState>): _167.GenesisState;
                fromAmino(object: _167.GenesisStateAmino): _167.GenesisState;
                toAmino(message: _167.GenesisState): _167.GenesisStateAmino;
                fromAminoMsg(object: _167.GenesisStateAminoMsg): _167.GenesisState;
                toAminoMsg(message: _167.GenesisState): _167.GenesisStateAminoMsg;
                fromProtoMsg(message: _167.GenesisStateProtoMsg): _167.GenesisState;
                toProto(message: _167.GenesisState): Uint8Array;
                toProtoMsg(message: _167.GenesisState): _167.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _173.QueryFeeTokensRequest): Promise<_173.QueryFeeTokensResponse>;
                denomSpotPrice(request: _173.QueryDenomSpotPriceRequest): Promise<_173.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _173.QueryDenomPoolIdRequest): Promise<_173.QueryDenomPoolIdResponse>;
                baseDenom(request?: _173.QueryBaseDenomRequest): Promise<_173.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _173.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryFeeTokensRequest;
                fromPartial(_: Partial<_173.QueryFeeTokensRequest>): _173.QueryFeeTokensRequest;
                fromAmino(_: _173.QueryFeeTokensRequestAmino): _173.QueryFeeTokensRequest;
                toAmino(_: _173.QueryFeeTokensRequest): _173.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _173.QueryFeeTokensRequestAminoMsg): _173.QueryFeeTokensRequest;
                toAminoMsg(message: _173.QueryFeeTokensRequest): _173.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _173.QueryFeeTokensRequestProtoMsg): _173.QueryFeeTokensRequest;
                toProto(message: _173.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _173.QueryFeeTokensRequest): _173.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _173.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryFeeTokensResponse;
                fromPartial(object: Partial<_173.QueryFeeTokensResponse>): _173.QueryFeeTokensResponse;
                fromAmino(object: _173.QueryFeeTokensResponseAmino): _173.QueryFeeTokensResponse;
                toAmino(message: _173.QueryFeeTokensResponse): _173.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _173.QueryFeeTokensResponseAminoMsg): _173.QueryFeeTokensResponse;
                toAminoMsg(message: _173.QueryFeeTokensResponse): _173.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _173.QueryFeeTokensResponseProtoMsg): _173.QueryFeeTokensResponse;
                toProto(message: _173.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _173.QueryFeeTokensResponse): _173.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _173.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_173.QueryDenomSpotPriceRequest>): _173.QueryDenomSpotPriceRequest;
                fromAmino(object: _173.QueryDenomSpotPriceRequestAmino): _173.QueryDenomSpotPriceRequest;
                toAmino(message: _173.QueryDenomSpotPriceRequest): _173.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _173.QueryDenomSpotPriceRequestAminoMsg): _173.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _173.QueryDenomSpotPriceRequest): _173.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _173.QueryDenomSpotPriceRequestProtoMsg): _173.QueryDenomSpotPriceRequest;
                toProto(message: _173.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _173.QueryDenomSpotPriceRequest): _173.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _173.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_173.QueryDenomSpotPriceResponse>): _173.QueryDenomSpotPriceResponse;
                fromAmino(object: _173.QueryDenomSpotPriceResponseAmino): _173.QueryDenomSpotPriceResponse;
                toAmino(message: _173.QueryDenomSpotPriceResponse): _173.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _173.QueryDenomSpotPriceResponseAminoMsg): _173.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _173.QueryDenomSpotPriceResponse): _173.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _173.QueryDenomSpotPriceResponseProtoMsg): _173.QueryDenomSpotPriceResponse;
                toProto(message: _173.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _173.QueryDenomSpotPriceResponse): _173.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _173.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_173.QueryDenomPoolIdRequest>): _173.QueryDenomPoolIdRequest;
                fromAmino(object: _173.QueryDenomPoolIdRequestAmino): _173.QueryDenomPoolIdRequest;
                toAmino(message: _173.QueryDenomPoolIdRequest): _173.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _173.QueryDenomPoolIdRequestAminoMsg): _173.QueryDenomPoolIdRequest;
                toAminoMsg(message: _173.QueryDenomPoolIdRequest): _173.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _173.QueryDenomPoolIdRequestProtoMsg): _173.QueryDenomPoolIdRequest;
                toProto(message: _173.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _173.QueryDenomPoolIdRequest): _173.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _173.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_173.QueryDenomPoolIdResponse>): _173.QueryDenomPoolIdResponse;
                fromAmino(object: _173.QueryDenomPoolIdResponseAmino): _173.QueryDenomPoolIdResponse;
                toAmino(message: _173.QueryDenomPoolIdResponse): _173.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _173.QueryDenomPoolIdResponseAminoMsg): _173.QueryDenomPoolIdResponse;
                toAminoMsg(message: _173.QueryDenomPoolIdResponse): _173.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _173.QueryDenomPoolIdResponseProtoMsg): _173.QueryDenomPoolIdResponse;
                toProto(message: _173.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _173.QueryDenomPoolIdResponse): _173.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _173.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryBaseDenomRequest;
                fromPartial(_: Partial<_173.QueryBaseDenomRequest>): _173.QueryBaseDenomRequest;
                fromAmino(_: _173.QueryBaseDenomRequestAmino): _173.QueryBaseDenomRequest;
                toAmino(_: _173.QueryBaseDenomRequest): _173.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _173.QueryBaseDenomRequestAminoMsg): _173.QueryBaseDenomRequest;
                toAminoMsg(message: _173.QueryBaseDenomRequest): _173.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _173.QueryBaseDenomRequestProtoMsg): _173.QueryBaseDenomRequest;
                toProto(message: _173.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _173.QueryBaseDenomRequest): _173.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _173.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryBaseDenomResponse;
                fromPartial(object: Partial<_173.QueryBaseDenomResponse>): _173.QueryBaseDenomResponse;
                fromAmino(object: _173.QueryBaseDenomResponseAmino): _173.QueryBaseDenomResponse;
                toAmino(message: _173.QueryBaseDenomResponse): _173.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _173.QueryBaseDenomResponseAminoMsg): _173.QueryBaseDenomResponse;
                toAminoMsg(message: _173.QueryBaseDenomResponse): _173.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _173.QueryBaseDenomResponseProtoMsg): _173.QueryBaseDenomResponse;
                toProto(message: _173.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _173.QueryBaseDenomResponse): _173.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _172.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_172.UpdateFeeTokenProposal>): _172.UpdateFeeTokenProposal;
                fromAmino(object: _172.UpdateFeeTokenProposalAmino): _172.UpdateFeeTokenProposal;
                toAmino(message: _172.UpdateFeeTokenProposal): _172.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _172.UpdateFeeTokenProposalAminoMsg): _172.UpdateFeeTokenProposal;
                toAminoMsg(message: _172.UpdateFeeTokenProposal): _172.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _172.UpdateFeeTokenProposalProtoMsg): _172.UpdateFeeTokenProposal;
                toProto(message: _172.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _172.UpdateFeeTokenProposal): _172.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
                fromAmino(object: _171.GenesisStateAmino): _171.GenesisState;
                toAmino(message: _171.GenesisState): _171.GenesisStateAmino;
                fromAminoMsg(object: _171.GenesisStateAminoMsg): _171.GenesisState;
                toAminoMsg(message: _171.GenesisState): _171.GenesisStateAminoMsg;
                fromProtoMsg(message: _171.GenesisStateProtoMsg): _171.GenesisState;
                toProto(message: _171.GenesisState): Uint8Array;
                toProtoMsg(message: _171.GenesisState): _171.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _170.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.FeeToken;
                fromPartial(object: Partial<_170.FeeToken>): _170.FeeToken;
                fromAmino(object: _170.FeeTokenAmino): _170.FeeToken;
                toAmino(message: _170.FeeToken): _170.FeeTokenAmino;
                fromAminoMsg(object: _170.FeeTokenAminoMsg): _170.FeeToken;
                toAminoMsg(message: _170.FeeToken): _170.FeeTokenAminoMsg;
                fromProtoMsg(message: _170.FeeTokenProtoMsg): _170.FeeToken;
                toProto(message: _170.FeeToken): Uint8Array;
                toProtoMsg(message: _170.FeeToken): _170.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _174.UserValidatorPreferencesRequest): Promise<_174.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _300.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _176.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _176.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _176.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _176.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _176.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _176.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _176.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _176.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _176.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _176.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _176.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _176.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _176.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _176.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _176.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _176.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _176.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _176.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _176.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _176.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _176.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _176.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _176.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _176.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _176.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _176.MsgSetValidatorSetPreference) => _176.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _176.MsgSetValidatorSetPreferenceAmino) => _176.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _176.MsgDelegateToValidatorSet) => _176.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _176.MsgDelegateToValidatorSetAmino) => _176.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _176.MsgUndelegateFromValidatorSet) => _176.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _176.MsgUndelegateFromValidatorSetAmino) => _176.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _176.MsgRedelegateValidatorSet) => _176.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _176.MsgRedelegateValidatorSetAmino) => _176.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _176.MsgWithdrawDelegationRewards) => _176.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _176.MsgWithdrawDelegationRewardsAmino) => _176.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _176.MsgDelegateBondedTokens) => _176.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _176.MsgDelegateBondedTokensAmino) => _176.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _176.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_176.MsgSetValidatorSetPreference>): _176.MsgSetValidatorSetPreference;
                fromAmino(object: _176.MsgSetValidatorSetPreferenceAmino): _176.MsgSetValidatorSetPreference;
                toAmino(message: _176.MsgSetValidatorSetPreference): _176.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _176.MsgSetValidatorSetPreferenceAminoMsg): _176.MsgSetValidatorSetPreference;
                toAminoMsg(message: _176.MsgSetValidatorSetPreference): _176.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _176.MsgSetValidatorSetPreferenceProtoMsg): _176.MsgSetValidatorSetPreference;
                toProto(message: _176.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _176.MsgSetValidatorSetPreference): _176.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _176.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_176.MsgSetValidatorSetPreferenceResponse>): _176.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _176.MsgSetValidatorSetPreferenceResponseAmino): _176.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _176.MsgSetValidatorSetPreferenceResponse): _176.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _176.MsgSetValidatorSetPreferenceResponseAminoMsg): _176.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _176.MsgSetValidatorSetPreferenceResponse): _176.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _176.MsgSetValidatorSetPreferenceResponseProtoMsg): _176.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _176.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _176.MsgSetValidatorSetPreferenceResponse): _176.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _176.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_176.MsgDelegateToValidatorSet>): _176.MsgDelegateToValidatorSet;
                fromAmino(object: _176.MsgDelegateToValidatorSetAmino): _176.MsgDelegateToValidatorSet;
                toAmino(message: _176.MsgDelegateToValidatorSet): _176.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _176.MsgDelegateToValidatorSetAminoMsg): _176.MsgDelegateToValidatorSet;
                toAminoMsg(message: _176.MsgDelegateToValidatorSet): _176.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _176.MsgDelegateToValidatorSetProtoMsg): _176.MsgDelegateToValidatorSet;
                toProto(message: _176.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _176.MsgDelegateToValidatorSet): _176.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _176.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_176.MsgDelegateToValidatorSetResponse>): _176.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _176.MsgDelegateToValidatorSetResponseAmino): _176.MsgDelegateToValidatorSetResponse;
                toAmino(_: _176.MsgDelegateToValidatorSetResponse): _176.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _176.MsgDelegateToValidatorSetResponseAminoMsg): _176.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _176.MsgDelegateToValidatorSetResponse): _176.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _176.MsgDelegateToValidatorSetResponseProtoMsg): _176.MsgDelegateToValidatorSetResponse;
                toProto(message: _176.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _176.MsgDelegateToValidatorSetResponse): _176.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _176.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_176.MsgUndelegateFromValidatorSet>): _176.MsgUndelegateFromValidatorSet;
                fromAmino(object: _176.MsgUndelegateFromValidatorSetAmino): _176.MsgUndelegateFromValidatorSet;
                toAmino(message: _176.MsgUndelegateFromValidatorSet): _176.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _176.MsgUndelegateFromValidatorSetAminoMsg): _176.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _176.MsgUndelegateFromValidatorSet): _176.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _176.MsgUndelegateFromValidatorSetProtoMsg): _176.MsgUndelegateFromValidatorSet;
                toProto(message: _176.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _176.MsgUndelegateFromValidatorSet): _176.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _176.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_176.MsgUndelegateFromValidatorSetResponse>): _176.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _176.MsgUndelegateFromValidatorSetResponseAmino): _176.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _176.MsgUndelegateFromValidatorSetResponse): _176.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _176.MsgUndelegateFromValidatorSetResponseAminoMsg): _176.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _176.MsgUndelegateFromValidatorSetResponse): _176.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _176.MsgUndelegateFromValidatorSetResponseProtoMsg): _176.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _176.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _176.MsgUndelegateFromValidatorSetResponse): _176.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _176.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_176.MsgRedelegateValidatorSet>): _176.MsgRedelegateValidatorSet;
                fromAmino(object: _176.MsgRedelegateValidatorSetAmino): _176.MsgRedelegateValidatorSet;
                toAmino(message: _176.MsgRedelegateValidatorSet): _176.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _176.MsgRedelegateValidatorSetAminoMsg): _176.MsgRedelegateValidatorSet;
                toAminoMsg(message: _176.MsgRedelegateValidatorSet): _176.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _176.MsgRedelegateValidatorSetProtoMsg): _176.MsgRedelegateValidatorSet;
                toProto(message: _176.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _176.MsgRedelegateValidatorSet): _176.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _176.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_176.MsgRedelegateValidatorSetResponse>): _176.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _176.MsgRedelegateValidatorSetResponseAmino): _176.MsgRedelegateValidatorSetResponse;
                toAmino(_: _176.MsgRedelegateValidatorSetResponse): _176.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _176.MsgRedelegateValidatorSetResponseAminoMsg): _176.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _176.MsgRedelegateValidatorSetResponse): _176.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _176.MsgRedelegateValidatorSetResponseProtoMsg): _176.MsgRedelegateValidatorSetResponse;
                toProto(message: _176.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _176.MsgRedelegateValidatorSetResponse): _176.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _176.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_176.MsgWithdrawDelegationRewards>): _176.MsgWithdrawDelegationRewards;
                fromAmino(object: _176.MsgWithdrawDelegationRewardsAmino): _176.MsgWithdrawDelegationRewards;
                toAmino(message: _176.MsgWithdrawDelegationRewards): _176.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _176.MsgWithdrawDelegationRewardsAminoMsg): _176.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _176.MsgWithdrawDelegationRewards): _176.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _176.MsgWithdrawDelegationRewardsProtoMsg): _176.MsgWithdrawDelegationRewards;
                toProto(message: _176.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _176.MsgWithdrawDelegationRewards): _176.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _176.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_176.MsgWithdrawDelegationRewardsResponse>): _176.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _176.MsgWithdrawDelegationRewardsResponseAmino): _176.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _176.MsgWithdrawDelegationRewardsResponse): _176.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _176.MsgWithdrawDelegationRewardsResponseAminoMsg): _176.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _176.MsgWithdrawDelegationRewardsResponse): _176.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _176.MsgWithdrawDelegationRewardsResponseProtoMsg): _176.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _176.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _176.MsgWithdrawDelegationRewardsResponse): _176.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                typeUrl: string;
                encode(message: _176.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_176.MsgDelegateBondedTokens>): _176.MsgDelegateBondedTokens;
                fromAmino(object: _176.MsgDelegateBondedTokensAmino): _176.MsgDelegateBondedTokens;
                toAmino(message: _176.MsgDelegateBondedTokens): _176.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _176.MsgDelegateBondedTokensAminoMsg): _176.MsgDelegateBondedTokens;
                toAminoMsg(message: _176.MsgDelegateBondedTokens): _176.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _176.MsgDelegateBondedTokensProtoMsg): _176.MsgDelegateBondedTokens;
                toProto(message: _176.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _176.MsgDelegateBondedTokens): _176.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                typeUrl: string;
                encode(_: _176.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_176.MsgDelegateBondedTokensResponse>): _176.MsgDelegateBondedTokensResponse;
                fromAmino(_: _176.MsgDelegateBondedTokensResponseAmino): _176.MsgDelegateBondedTokensResponse;
                toAmino(_: _176.MsgDelegateBondedTokensResponse): _176.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _176.MsgDelegateBondedTokensResponseAminoMsg): _176.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _176.MsgDelegateBondedTokensResponse): _176.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _176.MsgDelegateBondedTokensResponseProtoMsg): _176.MsgDelegateBondedTokensResponse;
                toProto(message: _176.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _176.MsgDelegateBondedTokensResponse): _176.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _175.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ValidatorPreference;
                fromPartial(object: Partial<_175.ValidatorPreference>): _175.ValidatorPreference;
                fromAmino(object: _175.ValidatorPreferenceAmino): _175.ValidatorPreference;
                toAmino(message: _175.ValidatorPreference): _175.ValidatorPreferenceAmino;
                fromAminoMsg(object: _175.ValidatorPreferenceAminoMsg): _175.ValidatorPreference;
                toAminoMsg(message: _175.ValidatorPreference): _175.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _175.ValidatorPreferenceProtoMsg): _175.ValidatorPreference;
                toProto(message: _175.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _175.ValidatorPreference): _175.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _175.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ValidatorSetPreferences;
                fromPartial(object: Partial<_175.ValidatorSetPreferences>): _175.ValidatorSetPreferences;
                fromAmino(object: _175.ValidatorSetPreferencesAmino): _175.ValidatorSetPreferences;
                toAmino(message: _175.ValidatorSetPreferences): _175.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _175.ValidatorSetPreferencesAminoMsg): _175.ValidatorSetPreferences;
                toAminoMsg(message: _175.ValidatorSetPreferences): _175.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _175.ValidatorSetPreferencesProtoMsg): _175.ValidatorSetPreferences;
                toProto(message: _175.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _175.ValidatorSetPreferences): _175.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _174.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_174.UserValidatorPreferencesRequest>): _174.UserValidatorPreferencesRequest;
                fromAmino(object: _174.UserValidatorPreferencesRequestAmino): _174.UserValidatorPreferencesRequest;
                toAmino(message: _174.UserValidatorPreferencesRequest): _174.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _174.UserValidatorPreferencesRequestAminoMsg): _174.UserValidatorPreferencesRequest;
                toAminoMsg(message: _174.UserValidatorPreferencesRequest): _174.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _174.UserValidatorPreferencesRequestProtoMsg): _174.UserValidatorPreferencesRequest;
                toProto(message: _174.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _174.UserValidatorPreferencesRequest): _174.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _174.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_174.UserValidatorPreferencesResponse>): _174.UserValidatorPreferencesResponse;
                fromAmino(object: _174.UserValidatorPreferencesResponseAmino): _174.UserValidatorPreferencesResponse;
                toAmino(message: _174.UserValidatorPreferencesResponse): _174.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _174.UserValidatorPreferencesResponseAminoMsg): _174.UserValidatorPreferencesResponse;
                toAminoMsg(message: _174.UserValidatorPreferencesResponse): _174.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _174.UserValidatorPreferencesResponseProtoMsg): _174.UserValidatorPreferencesResponse;
                toProto(message: _174.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _174.UserValidatorPreferencesResponse): _174.UserValidatorPreferencesResponseProtoMsg;
            };
        };
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/tx.rpc.msg").MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _320.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _321.MsgClientImpl;
                        };
                    };
                    v1beta1: _322.MsgClientImpl;
                };
                incentives: _323.MsgClientImpl;
                lockup: _324.MsgClientImpl;
                poolmanager: {
                    v1beta1: _325.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _326.MsgClientImpl;
                };
                superfluid: _327.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _328.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _329.MsgClientImpl;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: {
                        pools(request?: import("./concentrated-liquidity/pool-model/query").QueryPoolsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryPoolsResponse>;
                        params(request?: import("./concentrated-liquidity/pool-model/query").QueryParamsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryParamsResponse>;
                        userPositions(request: import("./concentrated-liquidity/pool-model/query").QueryUserPositionsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryUserPositionsResponse>;
                        totalLiquidityForRange(request: import("./concentrated-liquidity/pool-model/query").QueryTotalLiquidityForRangeRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryTotalLiquidityForRangeResponse>;
                        liquidityNetInDirection(request: import("./concentrated-liquidity/pool-model/query").QueryLiquidityNetInDirectionRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryLiquidityNetInDirectionResponse>;
                        claimableFees(request: import("./concentrated-liquidity/pool-model/query").QueryClaimableFeesRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryClaimableFeesResponse>;
                        positionById(request: import("./concentrated-liquidity/pool-model/query").QueryPositionByIdRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryPositionByIdResponse>;
                    };
                };
                cosmwasmpool: {
                    v1beta1: {
                        params(request?: _109.ParamsRequest): Promise<_109.ParamsResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _113.RecoveredSinceDowntimeOfLengthRequest): Promise<_113.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _115.QueryEpochsInfoRequest): Promise<_115.QueryEpochsInfoResponse>;
                        currentEpoch(request: _115.QueryCurrentEpochRequest): Promise<_115.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _119.QueryPoolsRequest): Promise<_119.QueryPoolsResponse>;
                        numPools(request?: _119.QueryNumPoolsRequest): Promise<_119.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _119.QueryTotalLiquidityRequest): Promise<_119.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _119.QueryPoolsWithFilterRequest): Promise<_119.QueryPoolsWithFilterResponse>;
                        pool(request: _119.QueryPoolRequest): Promise<_119.QueryPoolResponse>;
                        poolType(request: _119.QueryPoolTypeRequest): Promise<_119.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _119.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_119.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _119.QueryCalcJoinPoolSharesRequest): Promise<_119.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _119.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_119.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _119.QueryPoolParamsRequest): Promise<_119.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _119.QueryTotalPoolLiquidityRequest): Promise<_119.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _119.QueryTotalSharesRequest): Promise<_119.QueryTotalSharesResponse>;
                        spotPrice(request: _119.QuerySpotPriceRequest): Promise<_119.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _119.QuerySwapExactAmountInRequest): Promise<_119.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _119.QuerySwapExactAmountOutRequest): Promise<_119.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _124.QuerySpotPriceRequest): Promise<_124.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _127.ParamsRequest): Promise<_127.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _131.ModuleToDistributeCoinsRequest): Promise<_131.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _131.GaugeByIDRequest): Promise<_131.GaugeByIDResponse>;
                    gauges(request?: _131.GaugesRequest): Promise<_131.GaugesResponse>;
                    activeGauges(request?: _131.ActiveGaugesRequest): Promise<_131.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _131.ActiveGaugesPerDenomRequest): Promise<_131.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _131.UpcomingGaugesRequest): Promise<_131.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _131.UpcomingGaugesPerDenomRequest): Promise<_131.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _131.RewardsEstRequest): Promise<_131.RewardsEstResponse>;
                    lockableDurations(request?: _131.QueryLockableDurationsRequest): Promise<_131.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _136.ModuleBalanceRequest): Promise<_136.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _136.ModuleLockedAmountRequest): Promise<_136.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _136.AccountUnlockableCoinsRequest): Promise<_136.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _136.AccountUnlockingCoinsRequest): Promise<_136.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _136.AccountLockedCoinsRequest): Promise<_136.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _136.AccountLockedPastTimeRequest): Promise<_136.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _136.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_136.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _136.AccountUnlockedBeforeTimeRequest): Promise<_136.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _136.AccountLockedPastTimeDenomRequest): Promise<_136.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _136.LockedDenomRequest): Promise<_136.LockedDenomResponse>;
                    lockedByID(request: _136.LockedRequest): Promise<_136.LockedResponse>;
                    nextLockID(request?: _136.NextLockIDRequest): Promise<_136.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _136.SyntheticLockupsByLockupIDRequest): Promise<_136.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _136.AccountLockedLongerDurationRequest): Promise<_136.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _136.AccountLockedDurationRequest): Promise<_136.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _136.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_136.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _136.AccountLockedLongerDurationDenomRequest): Promise<_136.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                        epochProvisions(request?: _140.QueryEpochProvisionsRequest): Promise<_140.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _144.QueryGaugeIdsRequest): Promise<_144.QueryGaugeIdsResponse>;
                        distrInfo(request?: _144.QueryDistrInfoRequest): Promise<_144.QueryDistrInfoResponse>;
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        lockableDurations(request?: _144.QueryLockableDurationsRequest): Promise<_144.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _144.QueryIncentivizedPoolsRequest): Promise<_144.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _144.QueryExternalIncentiveGaugesRequest): Promise<_144.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _147.ParamsRequest): Promise<_147.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _147.EstimateSwapExactAmountInRequest): Promise<_147.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _147.EstimateSinglePoolSwapExactAmountInRequest): Promise<_147.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _147.EstimateSwapExactAmountOutRequest): Promise<_147.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _147.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_147.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _147.NumPoolsRequest): Promise<_147.NumPoolsResponse>;
                        pool(request: _147.PoolRequest): Promise<_147.PoolResponse>;
                        allPools(request: _147.AllPoolsRequest): Promise<_147.AllPoolsResponse>;
                        spotPrice(request: _147.SpotPriceRequest): Promise<_147.SpotPriceResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _154.QueryGetProtoRevNumberOfTradesRequest): Promise<_154.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _154.QueryGetProtoRevProfitsByDenomRequest): Promise<_154.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _154.QueryGetProtoRevAllProfitsRequest): Promise<_154.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _154.QueryGetProtoRevStatisticsByRouteRequest): Promise<_154.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _154.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_154.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _154.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_154.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _154.QueryGetProtoRevAdminAccountRequest): Promise<_154.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _154.QueryGetProtoRevDeveloperAccountRequest): Promise<_154.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _154.QueryGetProtoRevPoolWeightsRequest): Promise<_154.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _154.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_154.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _154.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_154.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _154.QueryGetProtoRevBaseDenomsRequest): Promise<_154.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _154.QueryGetProtoRevEnabledRequest): Promise<_154.QueryGetProtoRevEnabledResponse>;
                    };
                };
                superfluid: {
                    params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                    assetType(request: _159.AssetTypeRequest): Promise<_159.AssetTypeResponse>;
                    allAssets(request?: _159.AllAssetsRequest): Promise<_159.AllAssetsResponse>;
                    assetMultiplier(request: _159.AssetMultiplierRequest): Promise<_159.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _159.AllIntermediaryAccountsRequest): Promise<_159.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _159.ConnectedIntermediaryAccountRequest): Promise<_159.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _159.QueryTotalDelegationByValidatorForDenomRequest): Promise<_159.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _159.TotalSuperfluidDelegationsRequest): Promise<_159.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _159.SuperfluidDelegationAmountRequest): Promise<_159.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _159.SuperfluidDelegationsByDelegatorRequest): Promise<_159.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _159.SuperfluidUndelegationsByDelegatorRequest): Promise<_159.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _159.SuperfluidDelegationsByValidatorDenomRequest): Promise<_159.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _159.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_159.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _159.QueryTotalDelegationByDelegatorRequest): Promise<_159.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _159.QueryUnpoolWhitelistRequest): Promise<_159.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _165.QueryDenomAuthorityMetadataRequest): Promise<_165.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _165.QueryDenomsFromCreatorRequest): Promise<_165.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _165.QueryBeforeSendHookAddressRequest): Promise<_165.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _168.ParamsRequest): Promise<_168.ParamsResponse>;
                        arithmeticTwap(request: _168.ArithmeticTwapRequest): Promise<_168.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _168.ArithmeticTwapToNowRequest): Promise<_168.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _168.GeometricTwapRequest): Promise<_168.GeometricTwapResponse>;
                        geometricTwapToNow(request: _168.GeometricTwapToNowRequest): Promise<_168.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _173.QueryFeeTokensRequest): Promise<_173.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _173.QueryDenomSpotPriceRequest): Promise<_173.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _173.QueryDenomPoolIdRequest): Promise<_173.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _173.QueryBaseDenomRequest): Promise<_173.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _174.UserValidatorPreferencesRequest): Promise<_174.UserValidatorPreferencesResponse>;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/pool-model/query.lcd").LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _284.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _285.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _286.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _287.LCDQueryClient;
                    v2: _288.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _289.LCDQueryClient;
                };
                incentives: _290.LCDQueryClient;
                lockup: _291.LCDQueryClient;
                mint: {
                    v1beta1: _292.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _293.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _294.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _295.LCDQueryClient;
                };
                superfluid: _296.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _297.LCDQueryClient;
                };
                twap: {
                    v1beta1: _298.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _299.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _300.LCDQueryClient;
                };
            };
        }>;
    };
}
