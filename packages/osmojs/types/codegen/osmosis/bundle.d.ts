import * as _93 from "./accum/v1beta1/accum";
import * as _94 from "./concentrated-liquidity/params";
import * as _95 from "./cosmwasmpool/v1beta1/genesis";
import * as _96 from "./cosmwasmpool/v1beta1/model/pool";
import * as _97 from "./cosmwasmpool/v1beta1/model/tx";
import * as _98 from "./cosmwasmpool/v1beta1/query";
import * as _100 from "./downtime-detector/v1beta1/downtime_duration";
import * as _101 from "./downtime-detector/v1beta1/genesis";
import * as _102 from "./downtime-detector/v1beta1/query";
import * as _103 from "./epochs/genesis";
import * as _104 from "./epochs/query";
import * as _105 from "./gamm/pool-models/balancer/balancerPool";
import * as _106 from "./gamm/v1beta1/genesis";
import * as _107 from "./gamm/v1beta1/gov";
import * as _108 from "./gamm/v1beta1/query";
import * as _109 from "./gamm/v1beta1/tx";
import * as _110 from "./gamm/pool-models/balancer/tx/tx";
import * as _111 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _112 from "./gamm/pool-models/stableswap/tx";
import * as _113 from "./gamm/v2/query";
import * as _114 from "./ibc-rate-limit/v1beta1/genesis";
import * as _115 from "./ibc-rate-limit/v1beta1/params";
import * as _116 from "./ibc-rate-limit/v1beta1/query";
import * as _117 from "./incentives/gauge";
import * as _118 from "./incentives/genesis";
import * as _119 from "./incentives/params";
import * as _120 from "./incentives/query";
import * as _121 from "./incentives/tx";
import * as _122 from "./lockup/genesis";
import * as _123 from "./lockup/lock";
import * as _124 from "./lockup/params";
import * as _125 from "./lockup/query";
import * as _126 from "./lockup/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _130 from "./pool-incentives/v1beta1/genesis";
import * as _131 from "./pool-incentives/v1beta1/gov";
import * as _132 from "./pool-incentives/v1beta1/incentives";
import * as _133 from "./pool-incentives/v1beta1/query";
import * as _134 from "./poolmanager/v1beta1/genesis";
import * as _135 from "./poolmanager/v1beta1/module_route";
import * as _136 from "./poolmanager/v1beta1/query";
import * as _137 from "./poolmanager/v1beta1/swap_route";
import * as _138 from "./poolmanager/v1beta1/tx";
import * as _139 from "./protorev/v1beta1/genesis";
import * as _140 from "./protorev/v1beta1/gov";
import * as _141 from "./protorev/v1beta1/params";
import * as _142 from "./protorev/v1beta1/protorev";
import * as _143 from "./protorev/v1beta1/query";
import * as _144 from "./protorev/v1beta1/tx";
import * as _145 from "./sumtree/v1beta1/tree";
import * as _146 from "./superfluid/genesis";
import * as _147 from "./superfluid/params";
import * as _148 from "./superfluid/query";
import * as _149 from "./superfluid/superfluid";
import * as _150 from "./superfluid/tx";
import * as _151 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _152 from "./tokenfactory/v1beta1/genesis";
import * as _153 from "./tokenfactory/v1beta1/params";
import * as _154 from "./tokenfactory/v1beta1/query";
import * as _155 from "./tokenfactory/v1beta1/tx";
import * as _156 from "./twap/v1beta1/genesis";
import * as _157 from "./twap/v1beta1/query";
import * as _158 from "./twap/v1beta1/twap_record";
import * as _159 from "./txfees/v1beta1/feetoken";
import * as _160 from "./txfees/v1beta1/genesis";
import * as _161 from "./txfees/v1beta1/gov";
import * as _162 from "./txfees/v1beta1/query";
import * as _163 from "./valset-pref/v1beta1/query";
import * as _164 from "./valset-pref/v1beta1/state";
import * as _165 from "./valset-pref/v1beta1/tx";
import * as _253 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _254 from "./downtime-detector/v1beta1/query.lcd";
import * as _255 from "./epochs/query.lcd";
import * as _256 from "./gamm/v1beta1/query.lcd";
import * as _257 from "./gamm/v2/query.lcd";
import * as _258 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _259 from "./incentives/query.lcd";
import * as _260 from "./lockup/query.lcd";
import * as _261 from "./mint/v1beta1/query.lcd";
import * as _262 from "./pool-incentives/v1beta1/query.lcd";
import * as _263 from "./poolmanager/v1beta1/query.lcd";
import * as _264 from "./protorev/v1beta1/query.lcd";
import * as _265 from "./superfluid/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.lcd";
import * as _267 from "./twap/v1beta1/query.lcd";
import * as _268 from "./txfees/v1beta1/query.lcd";
import * as _269 from "./valset-pref/v1beta1/query.lcd";
import * as _271 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _272 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _273 from "./epochs/query.rpc.Query";
import * as _274 from "./gamm/v1beta1/query.rpc.Query";
import * as _275 from "./gamm/v2/query.rpc.Query";
import * as _276 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _277 from "./incentives/query.rpc.Query";
import * as _278 from "./lockup/query.rpc.Query";
import * as _279 from "./mint/v1beta1/query.rpc.Query";
import * as _280 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _281 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _282 from "./protorev/v1beta1/query.rpc.Query";
import * as _283 from "./superfluid/query.rpc.Query";
import * as _284 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _285 from "./twap/v1beta1/query.rpc.Query";
import * as _286 from "./txfees/v1beta1/query.rpc.Query";
import * as _287 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _289 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _290 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _291 from "./gamm/v1beta1/tx.rpc.msg";
import * as _292 from "./incentives/tx.rpc.msg";
import * as _293 from "./lockup/tx.rpc.msg";
import * as _294 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _295 from "./protorev/v1beta1/tx.rpc.msg";
import * as _296 from "./superfluid/tx.rpc.msg";
import * as _297 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _298 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                encode(message: _93.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.AccumulatorContent;
                fromPartial(object: Partial<_93.AccumulatorContent>): _93.AccumulatorContent;
                fromAmino(object: _93.AccumulatorContentAmino): _93.AccumulatorContent;
                toAmino(message: _93.AccumulatorContent): _93.AccumulatorContentAmino;
                fromAminoMsg(object: _93.AccumulatorContentAminoMsg): _93.AccumulatorContent;
                toAminoMsg(message: _93.AccumulatorContent): _93.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _93.AccumulatorContentProtoMsg): _93.AccumulatorContent;
                toProto(message: _93.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _93.AccumulatorContent): _93.AccumulatorContentProtoMsg;
            };
            Options: {
                encode(_: _93.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Options;
                fromPartial(_: Partial<_93.Options>): _93.Options;
                fromAmino(_: _93.OptionsAmino): _93.Options;
                toAmino(_: _93.Options): _93.OptionsAmino;
                fromAminoMsg(object: _93.OptionsAminoMsg): _93.Options;
                toAminoMsg(message: _93.Options): _93.OptionsAminoMsg;
                fromProtoMsg(message: _93.OptionsProtoMsg): _93.Options;
                toProto(message: _93.Options): Uint8Array;
                toProtoMsg(message: _93.Options): _93.OptionsProtoMsg;
            };
            Record: {
                encode(message: _93.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Record;
                fromPartial(object: Partial<_93.Record>): _93.Record;
                fromAmino(object: _93.RecordAmino): _93.Record;
                toAmino(message: _93.Record): _93.RecordAmino;
                fromAminoMsg(object: _93.RecordAminoMsg): _93.Record;
                toAminoMsg(message: _93.Record): _93.RecordAminoMsg;
                fromProtoMsg(message: _93.RecordProtoMsg): _93.Record;
                toProto(message: _93.Record): Uint8Array;
                toProtoMsg(message: _93.Record): _93.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        Params: {
            encode(message: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
            fromPartial(object: Partial<_94.Params>): _94.Params;
            fromAmino(object: _94.ParamsAmino): _94.Params;
            toAmino(message: _94.Params): _94.ParamsAmino;
            fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
            toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
            fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
            toProto(message: _94.Params): Uint8Array;
            toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _98.ParamsRequest): Promise<_98.ParamsResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            ParamsRequest: {
                encode(_: _98.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ParamsRequest;
                fromPartial(_: Partial<_98.ParamsRequest>): _98.ParamsRequest;
                fromAmino(_: _98.ParamsRequestAmino): _98.ParamsRequest;
                toAmino(_: _98.ParamsRequest): _98.ParamsRequestAmino;
                fromAminoMsg(object: _98.ParamsRequestAminoMsg): _98.ParamsRequest;
                toAminoMsg(message: _98.ParamsRequest): _98.ParamsRequestAminoMsg;
                fromProtoMsg(message: _98.ParamsRequestProtoMsg): _98.ParamsRequest;
                toProto(message: _98.ParamsRequest): Uint8Array;
                toProtoMsg(message: _98.ParamsRequest): _98.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                encode(message: _98.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ParamsResponse;
                fromPartial(object: Partial<_98.ParamsResponse>): _98.ParamsResponse;
                fromAmino(object: _98.ParamsResponseAmino): _98.ParamsResponse;
                toAmino(message: _98.ParamsResponse): _98.ParamsResponseAmino;
                fromAminoMsg(object: _98.ParamsResponseAminoMsg): _98.ParamsResponse;
                toAminoMsg(message: _98.ParamsResponse): _98.ParamsResponseAminoMsg;
                fromProtoMsg(message: _98.ParamsResponseProtoMsg): _98.ParamsResponse;
                toProto(message: _98.ParamsResponse): Uint8Array;
                toProtoMsg(message: _98.ParamsResponse): _98.ParamsResponseProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                encode(message: _97.MsgCreateCosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_97.MsgCreateCosmWasmPool>): _97.MsgCreateCosmWasmPool;
                fromAmino(object: _97.MsgCreateCosmWasmPoolAmino): _97.MsgCreateCosmWasmPool;
                toAmino(message: _97.MsgCreateCosmWasmPool): _97.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _97.MsgCreateCosmWasmPoolAminoMsg): _97.MsgCreateCosmWasmPool;
                toAminoMsg(message: _97.MsgCreateCosmWasmPool): _97.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _97.MsgCreateCosmWasmPoolProtoMsg): _97.MsgCreateCosmWasmPool;
                toProto(message: _97.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _97.MsgCreateCosmWasmPool): _97.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                encode(message: _97.MsgCreateCosmWasmPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_97.MsgCreateCosmWasmPoolResponse>): _97.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _97.MsgCreateCosmWasmPoolResponseAmino): _97.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _97.MsgCreateCosmWasmPoolResponse): _97.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _97.MsgCreateCosmWasmPoolResponseAminoMsg): _97.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _97.MsgCreateCosmWasmPoolResponse): _97.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _97.MsgCreateCosmWasmPoolResponseProtoMsg): _97.MsgCreateCosmWasmPoolResponse;
                toProto(message: _97.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _97.MsgCreateCosmWasmPoolResponse): _97.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            CosmWasmPool: {
                encode(message: _96.CosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.CosmWasmPool;
                fromPartial(object: Partial<_96.CosmWasmPool>): _96.CosmWasmPool;
                fromAmino(object: _96.CosmWasmPoolAmino): _96.CosmWasmPool;
                toAmino(message: _96.CosmWasmPool): _96.CosmWasmPoolAmino;
                fromAminoMsg(object: _96.CosmWasmPoolAminoMsg): _96.CosmWasmPool;
                toAminoMsg(message: _96.CosmWasmPool): _96.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _96.CosmWasmPoolProtoMsg): _96.CosmWasmPool;
                toProto(message: _96.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _96.CosmWasmPool): _96.CosmWasmPoolProtoMsg;
            };
            Params: {
                encode(_: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
                fromPartial(_: Partial<_95.Params>): _95.Params;
                fromAmino(_: _95.ParamsAmino): _95.Params;
                toAmino(_: _95.Params): _95.ParamsAmino;
                fromAminoMsg(object: _95.ParamsAminoMsg): _95.Params;
                toAminoMsg(message: _95.Params): _95.ParamsAminoMsg;
                fromProtoMsg(message: _95.ParamsProtoMsg): _95.Params;
                toProto(message: _95.Params): Uint8Array;
                toProtoMsg(message: _95.Params): _95.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _102.RecoveredSinceDowntimeOfLengthRequest): Promise<_102.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _102.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_102.RecoveredSinceDowntimeOfLengthRequest>): _102.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _102.RecoveredSinceDowntimeOfLengthRequestAmino): _102.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _102.RecoveredSinceDowntimeOfLengthRequest): _102.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _102.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _102.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _102.RecoveredSinceDowntimeOfLengthRequest): _102.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _102.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _102.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _102.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _102.RecoveredSinceDowntimeOfLengthRequest): _102.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _102.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_102.RecoveredSinceDowntimeOfLengthResponse>): _102.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _102.RecoveredSinceDowntimeOfLengthResponseAmino): _102.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _102.RecoveredSinceDowntimeOfLengthResponse): _102.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _102.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _102.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _102.RecoveredSinceDowntimeOfLengthResponse): _102.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _102.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _102.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _102.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _102.RecoveredSinceDowntimeOfLengthResponse): _102.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                encode(message: _101.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisDowntimeEntry;
                fromPartial(object: Partial<_101.GenesisDowntimeEntry>): _101.GenesisDowntimeEntry;
                fromAmino(object: _101.GenesisDowntimeEntryAmino): _101.GenesisDowntimeEntry;
                toAmino(message: _101.GenesisDowntimeEntry): _101.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _101.GenesisDowntimeEntryAminoMsg): _101.GenesisDowntimeEntry;
                toAminoMsg(message: _101.GenesisDowntimeEntry): _101.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _101.GenesisDowntimeEntryProtoMsg): _101.GenesisDowntimeEntry;
                toProto(message: _101.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _101.GenesisDowntimeEntry): _101.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _100.Downtime;
            downtimeToJSON(object: _100.Downtime): string;
            Downtime: typeof _100.Downtime;
            DowntimeSDKType: typeof _100.Downtime;
            DowntimeAmino: typeof _100.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _104.QueryEpochsInfoRequest): Promise<_104.QueryEpochsInfoResponse>;
                currentEpoch(request: _104.QueryCurrentEpochRequest): Promise<_104.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _104.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_104.QueryEpochsInfoRequest>): _104.QueryEpochsInfoRequest;
                fromAmino(_: _104.QueryEpochsInfoRequestAmino): _104.QueryEpochsInfoRequest;
                toAmino(_: _104.QueryEpochsInfoRequest): _104.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _104.QueryEpochsInfoRequestAminoMsg): _104.QueryEpochsInfoRequest;
                toAminoMsg(message: _104.QueryEpochsInfoRequest): _104.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _104.QueryEpochsInfoRequestProtoMsg): _104.QueryEpochsInfoRequest;
                toProto(message: _104.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _104.QueryEpochsInfoRequest): _104.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                encode(message: _104.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_104.QueryEpochsInfoResponse>): _104.QueryEpochsInfoResponse;
                fromAmino(object: _104.QueryEpochsInfoResponseAmino): _104.QueryEpochsInfoResponse;
                toAmino(message: _104.QueryEpochsInfoResponse): _104.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _104.QueryEpochsInfoResponseAminoMsg): _104.QueryEpochsInfoResponse;
                toAminoMsg(message: _104.QueryEpochsInfoResponse): _104.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _104.QueryEpochsInfoResponseProtoMsg): _104.QueryEpochsInfoResponse;
                toProto(message: _104.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _104.QueryEpochsInfoResponse): _104.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                encode(message: _104.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_104.QueryCurrentEpochRequest>): _104.QueryCurrentEpochRequest;
                fromAmino(object: _104.QueryCurrentEpochRequestAmino): _104.QueryCurrentEpochRequest;
                toAmino(message: _104.QueryCurrentEpochRequest): _104.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _104.QueryCurrentEpochRequestAminoMsg): _104.QueryCurrentEpochRequest;
                toAminoMsg(message: _104.QueryCurrentEpochRequest): _104.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _104.QueryCurrentEpochRequestProtoMsg): _104.QueryCurrentEpochRequest;
                toProto(message: _104.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _104.QueryCurrentEpochRequest): _104.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                encode(message: _104.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_104.QueryCurrentEpochResponse>): _104.QueryCurrentEpochResponse;
                fromAmino(object: _104.QueryCurrentEpochResponseAmino): _104.QueryCurrentEpochResponse;
                toAmino(message: _104.QueryCurrentEpochResponse): _104.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _104.QueryCurrentEpochResponseAminoMsg): _104.QueryCurrentEpochResponse;
                toAminoMsg(message: _104.QueryCurrentEpochResponse): _104.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _104.QueryCurrentEpochResponseProtoMsg): _104.QueryCurrentEpochResponse;
                toProto(message: _104.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _104.QueryCurrentEpochResponse): _104.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                encode(message: _103.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EpochInfo;
                fromPartial(object: Partial<_103.EpochInfo>): _103.EpochInfo;
                fromAmino(object: _103.EpochInfoAmino): _103.EpochInfo;
                toAmino(message: _103.EpochInfo): _103.EpochInfoAmino;
                fromAminoMsg(object: _103.EpochInfoAminoMsg): _103.EpochInfo;
                toAminoMsg(message: _103.EpochInfo): _103.EpochInfoAminoMsg;
                fromProtoMsg(message: _103.EpochInfoProtoMsg): _103.EpochInfo;
                toProto(message: _103.EpochInfo): Uint8Array;
                toProtoMsg(message: _103.EpochInfo): _103.EpochInfoProtoMsg;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                fromAminoMsg(object: _103.GenesisStateAminoMsg): _103.GenesisState;
                toAminoMsg(message: _103.GenesisState): _103.GenesisStateAminoMsg;
                fromProtoMsg(message: _103.GenesisStateProtoMsg): _103.GenesisState;
                toProto(message: _103.GenesisState): Uint8Array;
                toProtoMsg(message: _103.GenesisState): _103.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _108.QueryPoolsRequest): Promise<_108.QueryPoolsResponse>;
                numPools(request?: _108.QueryNumPoolsRequest): Promise<_108.QueryNumPoolsResponse>;
                totalLiquidity(request?: _108.QueryTotalLiquidityRequest): Promise<_108.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _108.QueryPoolsWithFilterRequest): Promise<_108.QueryPoolsWithFilterResponse>;
                pool(request: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                poolType(request: _108.QueryPoolTypeRequest): Promise<_108.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _108.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_108.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _108.QueryCalcJoinPoolSharesRequest): Promise<_108.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _108.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_108.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _108.QueryPoolParamsRequest): Promise<_108.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _108.QueryTotalPoolLiquidityRequest): Promise<_108.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _108.QueryTotalSharesRequest): Promise<_108.QueryTotalSharesResponse>;
                spotPrice(request: _108.QuerySpotPriceRequest): Promise<_108.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _108.QuerySwapExactAmountInRequest): Promise<_108.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _108.QuerySwapExactAmountOutRequest): Promise<_108.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _109.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _109.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _109.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _109.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _109.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _109.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _109.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _109.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _109.MsgJoinPool): {
                        typeUrl: string;
                        value: _109.MsgJoinPool;
                    };
                    exitPool(value: _109.MsgExitPool): {
                        typeUrl: string;
                        value: _109.MsgExitPool;
                    };
                    swapExactAmountIn(value: _109.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _109.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _109.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _109.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _109.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _109.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _109.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _109.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _109.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _109.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _109.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _109.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _109.MsgJoinPool): {
                        typeUrl: string;
                        value: _109.MsgJoinPool;
                    };
                    exitPool(value: _109.MsgExitPool): {
                        typeUrl: string;
                        value: _109.MsgExitPool;
                    };
                    swapExactAmountIn(value: _109.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _109.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _109.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _109.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _109.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _109.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _109.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _109.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _109.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _109.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _109.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _109.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _109.MsgJoinPool) => _109.MsgJoinPoolAmino;
                    fromAmino: (object: _109.MsgJoinPoolAmino) => _109.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _109.MsgExitPool) => _109.MsgExitPoolAmino;
                    fromAmino: (object: _109.MsgExitPoolAmino) => _109.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _109.MsgSwapExactAmountIn) => _109.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _109.MsgSwapExactAmountInAmino) => _109.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _109.MsgSwapExactAmountOut) => _109.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _109.MsgSwapExactAmountOutAmino) => _109.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _109.MsgJoinSwapExternAmountIn) => _109.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _109.MsgJoinSwapExternAmountInAmino) => _109.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _109.MsgJoinSwapShareAmountOut) => _109.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _109.MsgJoinSwapShareAmountOutAmino) => _109.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _109.MsgExitSwapExternAmountOut) => _109.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _109.MsgExitSwapExternAmountOutAmino) => _109.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _109.MsgExitSwapShareAmountIn) => _109.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _109.MsgExitSwapShareAmountInAmino) => _109.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _109.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinPool;
                fromPartial(object: Partial<_109.MsgJoinPool>): _109.MsgJoinPool;
                fromAmino(object: _109.MsgJoinPoolAmino): _109.MsgJoinPool;
                toAmino(message: _109.MsgJoinPool): _109.MsgJoinPoolAmino;
                fromAminoMsg(object: _109.MsgJoinPoolAminoMsg): _109.MsgJoinPool;
                toAminoMsg(message: _109.MsgJoinPool): _109.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _109.MsgJoinPoolProtoMsg): _109.MsgJoinPool;
                toProto(message: _109.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _109.MsgJoinPool): _109.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                encode(message: _109.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinPoolResponse;
                fromPartial(object: Partial<_109.MsgJoinPoolResponse>): _109.MsgJoinPoolResponse;
                fromAmino(object: _109.MsgJoinPoolResponseAmino): _109.MsgJoinPoolResponse;
                toAmino(message: _109.MsgJoinPoolResponse): _109.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _109.MsgJoinPoolResponseAminoMsg): _109.MsgJoinPoolResponse;
                toAminoMsg(message: _109.MsgJoinPoolResponse): _109.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _109.MsgJoinPoolResponseProtoMsg): _109.MsgJoinPoolResponse;
                toProto(message: _109.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _109.MsgJoinPoolResponse): _109.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                encode(message: _109.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitPool;
                fromPartial(object: Partial<_109.MsgExitPool>): _109.MsgExitPool;
                fromAmino(object: _109.MsgExitPoolAmino): _109.MsgExitPool;
                toAmino(message: _109.MsgExitPool): _109.MsgExitPoolAmino;
                fromAminoMsg(object: _109.MsgExitPoolAminoMsg): _109.MsgExitPool;
                toAminoMsg(message: _109.MsgExitPool): _109.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _109.MsgExitPoolProtoMsg): _109.MsgExitPool;
                toProto(message: _109.MsgExitPool): Uint8Array;
                toProtoMsg(message: _109.MsgExitPool): _109.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                encode(message: _109.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitPoolResponse;
                fromPartial(object: Partial<_109.MsgExitPoolResponse>): _109.MsgExitPoolResponse;
                fromAmino(object: _109.MsgExitPoolResponseAmino): _109.MsgExitPoolResponse;
                toAmino(message: _109.MsgExitPoolResponse): _109.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _109.MsgExitPoolResponseAminoMsg): _109.MsgExitPoolResponse;
                toAminoMsg(message: _109.MsgExitPoolResponse): _109.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _109.MsgExitPoolResponseProtoMsg): _109.MsgExitPoolResponse;
                toProto(message: _109.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _109.MsgExitPoolResponse): _109.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                encode(message: _109.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_109.MsgSwapExactAmountIn>): _109.MsgSwapExactAmountIn;
                fromAmino(object: _109.MsgSwapExactAmountInAmino): _109.MsgSwapExactAmountIn;
                toAmino(message: _109.MsgSwapExactAmountIn): _109.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _109.MsgSwapExactAmountInAminoMsg): _109.MsgSwapExactAmountIn;
                toAminoMsg(message: _109.MsgSwapExactAmountIn): _109.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _109.MsgSwapExactAmountInProtoMsg): _109.MsgSwapExactAmountIn;
                toProto(message: _109.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _109.MsgSwapExactAmountIn): _109.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _109.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_109.MsgSwapExactAmountInResponse>): _109.MsgSwapExactAmountInResponse;
                fromAmino(object: _109.MsgSwapExactAmountInResponseAmino): _109.MsgSwapExactAmountInResponse;
                toAmino(message: _109.MsgSwapExactAmountInResponse): _109.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _109.MsgSwapExactAmountInResponseAminoMsg): _109.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _109.MsgSwapExactAmountInResponse): _109.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _109.MsgSwapExactAmountInResponseProtoMsg): _109.MsgSwapExactAmountInResponse;
                toProto(message: _109.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _109.MsgSwapExactAmountInResponse): _109.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                encode(message: _109.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_109.MsgSwapExactAmountOut>): _109.MsgSwapExactAmountOut;
                fromAmino(object: _109.MsgSwapExactAmountOutAmino): _109.MsgSwapExactAmountOut;
                toAmino(message: _109.MsgSwapExactAmountOut): _109.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _109.MsgSwapExactAmountOutAminoMsg): _109.MsgSwapExactAmountOut;
                toAminoMsg(message: _109.MsgSwapExactAmountOut): _109.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _109.MsgSwapExactAmountOutProtoMsg): _109.MsgSwapExactAmountOut;
                toProto(message: _109.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _109.MsgSwapExactAmountOut): _109.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _109.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_109.MsgSwapExactAmountOutResponse>): _109.MsgSwapExactAmountOutResponse;
                fromAmino(object: _109.MsgSwapExactAmountOutResponseAmino): _109.MsgSwapExactAmountOutResponse;
                toAmino(message: _109.MsgSwapExactAmountOutResponse): _109.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _109.MsgSwapExactAmountOutResponseAminoMsg): _109.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _109.MsgSwapExactAmountOutResponse): _109.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _109.MsgSwapExactAmountOutResponseProtoMsg): _109.MsgSwapExactAmountOutResponse;
                toProto(message: _109.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _109.MsgSwapExactAmountOutResponse): _109.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _109.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_109.MsgJoinSwapExternAmountIn>): _109.MsgJoinSwapExternAmountIn;
                fromAmino(object: _109.MsgJoinSwapExternAmountInAmino): _109.MsgJoinSwapExternAmountIn;
                toAmino(message: _109.MsgJoinSwapExternAmountIn): _109.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _109.MsgJoinSwapExternAmountInAminoMsg): _109.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _109.MsgJoinSwapExternAmountIn): _109.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _109.MsgJoinSwapExternAmountInProtoMsg): _109.MsgJoinSwapExternAmountIn;
                toProto(message: _109.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _109.MsgJoinSwapExternAmountIn): _109.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _109.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_109.MsgJoinSwapExternAmountInResponse>): _109.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _109.MsgJoinSwapExternAmountInResponseAmino): _109.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _109.MsgJoinSwapExternAmountInResponse): _109.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _109.MsgJoinSwapExternAmountInResponseAminoMsg): _109.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _109.MsgJoinSwapExternAmountInResponse): _109.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _109.MsgJoinSwapExternAmountInResponseProtoMsg): _109.MsgJoinSwapExternAmountInResponse;
                toProto(message: _109.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _109.MsgJoinSwapExternAmountInResponse): _109.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _109.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_109.MsgJoinSwapShareAmountOut>): _109.MsgJoinSwapShareAmountOut;
                fromAmino(object: _109.MsgJoinSwapShareAmountOutAmino): _109.MsgJoinSwapShareAmountOut;
                toAmino(message: _109.MsgJoinSwapShareAmountOut): _109.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _109.MsgJoinSwapShareAmountOutAminoMsg): _109.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _109.MsgJoinSwapShareAmountOut): _109.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _109.MsgJoinSwapShareAmountOutProtoMsg): _109.MsgJoinSwapShareAmountOut;
                toProto(message: _109.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _109.MsgJoinSwapShareAmountOut): _109.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _109.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_109.MsgJoinSwapShareAmountOutResponse>): _109.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _109.MsgJoinSwapShareAmountOutResponseAmino): _109.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _109.MsgJoinSwapShareAmountOutResponse): _109.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _109.MsgJoinSwapShareAmountOutResponseAminoMsg): _109.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _109.MsgJoinSwapShareAmountOutResponse): _109.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _109.MsgJoinSwapShareAmountOutResponseProtoMsg): _109.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _109.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _109.MsgJoinSwapShareAmountOutResponse): _109.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _109.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_109.MsgExitSwapShareAmountIn>): _109.MsgExitSwapShareAmountIn;
                fromAmino(object: _109.MsgExitSwapShareAmountInAmino): _109.MsgExitSwapShareAmountIn;
                toAmino(message: _109.MsgExitSwapShareAmountIn): _109.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _109.MsgExitSwapShareAmountInAminoMsg): _109.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _109.MsgExitSwapShareAmountIn): _109.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _109.MsgExitSwapShareAmountInProtoMsg): _109.MsgExitSwapShareAmountIn;
                toProto(message: _109.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _109.MsgExitSwapShareAmountIn): _109.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _109.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_109.MsgExitSwapShareAmountInResponse>): _109.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _109.MsgExitSwapShareAmountInResponseAmino): _109.MsgExitSwapShareAmountInResponse;
                toAmino(message: _109.MsgExitSwapShareAmountInResponse): _109.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _109.MsgExitSwapShareAmountInResponseAminoMsg): _109.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _109.MsgExitSwapShareAmountInResponse): _109.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _109.MsgExitSwapShareAmountInResponseProtoMsg): _109.MsgExitSwapShareAmountInResponse;
                toProto(message: _109.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _109.MsgExitSwapShareAmountInResponse): _109.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _109.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_109.MsgExitSwapExternAmountOut>): _109.MsgExitSwapExternAmountOut;
                fromAmino(object: _109.MsgExitSwapExternAmountOutAmino): _109.MsgExitSwapExternAmountOut;
                toAmino(message: _109.MsgExitSwapExternAmountOut): _109.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _109.MsgExitSwapExternAmountOutAminoMsg): _109.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _109.MsgExitSwapExternAmountOut): _109.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _109.MsgExitSwapExternAmountOutProtoMsg): _109.MsgExitSwapExternAmountOut;
                toProto(message: _109.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _109.MsgExitSwapExternAmountOut): _109.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _109.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_109.MsgExitSwapExternAmountOutResponse>): _109.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _109.MsgExitSwapExternAmountOutResponseAmino): _109.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _109.MsgExitSwapExternAmountOutResponse): _109.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _109.MsgExitSwapExternAmountOutResponseAminoMsg): _109.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _109.MsgExitSwapExternAmountOutResponse): _109.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _109.MsgExitSwapExternAmountOutResponseProtoMsg): _109.MsgExitSwapExternAmountOutResponse;
                toProto(message: _109.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _109.MsgExitSwapExternAmountOutResponse): _109.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(message: _108.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolRequest;
                fromPartial(object: Partial<_108.QueryPoolRequest>): _108.QueryPoolRequest;
                fromAmino(object: _108.QueryPoolRequestAmino): _108.QueryPoolRequest;
                toAmino(message: _108.QueryPoolRequest): _108.QueryPoolRequestAmino;
                fromAminoMsg(object: _108.QueryPoolRequestAminoMsg): _108.QueryPoolRequest;
                toAminoMsg(message: _108.QueryPoolRequest): _108.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolRequestProtoMsg): _108.QueryPoolRequest;
                toProto(message: _108.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolRequest): _108.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _108.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolResponse;
                fromPartial(object: Partial<_108.QueryPoolResponse>): _108.QueryPoolResponse;
                fromAmino(object: _108.QueryPoolResponseAmino): _108.QueryPoolResponse;
                toAmino(message: _108.QueryPoolResponse): _108.QueryPoolResponseAmino;
                fromAminoMsg(object: _108.QueryPoolResponseAminoMsg): _108.QueryPoolResponse;
                toAminoMsg(message: _108.QueryPoolResponse): _108.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolResponseProtoMsg): _108.QueryPoolResponse;
                toProto(message: _108.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolResponse): _108.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                encode(message: _108.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolsRequest;
                fromPartial(object: Partial<_108.QueryPoolsRequest>): _108.QueryPoolsRequest;
                fromAmino(object: _108.QueryPoolsRequestAmino): _108.QueryPoolsRequest;
                toAmino(message: _108.QueryPoolsRequest): _108.QueryPoolsRequestAmino;
                fromAminoMsg(object: _108.QueryPoolsRequestAminoMsg): _108.QueryPoolsRequest;
                toAminoMsg(message: _108.QueryPoolsRequest): _108.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolsRequestProtoMsg): _108.QueryPoolsRequest;
                toProto(message: _108.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolsRequest): _108.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                encode(message: _108.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolsResponse;
                fromPartial(object: Partial<_108.QueryPoolsResponse>): _108.QueryPoolsResponse;
                fromAmino(object: _108.QueryPoolsResponseAmino): _108.QueryPoolsResponse;
                toAmino(message: _108.QueryPoolsResponse): _108.QueryPoolsResponseAmino;
                fromAminoMsg(object: _108.QueryPoolsResponseAminoMsg): _108.QueryPoolsResponse;
                toAminoMsg(message: _108.QueryPoolsResponse): _108.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolsResponseProtoMsg): _108.QueryPoolsResponse;
                toProto(message: _108.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolsResponse): _108.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                encode(_: _108.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryNumPoolsRequest;
                fromPartial(_: Partial<_108.QueryNumPoolsRequest>): _108.QueryNumPoolsRequest;
                fromAmino(_: _108.QueryNumPoolsRequestAmino): _108.QueryNumPoolsRequest;
                toAmino(_: _108.QueryNumPoolsRequest): _108.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _108.QueryNumPoolsRequestAminoMsg): _108.QueryNumPoolsRequest;
                toAminoMsg(message: _108.QueryNumPoolsRequest): _108.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryNumPoolsRequestProtoMsg): _108.QueryNumPoolsRequest;
                toProto(message: _108.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryNumPoolsRequest): _108.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                encode(message: _108.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryNumPoolsResponse;
                fromPartial(object: Partial<_108.QueryNumPoolsResponse>): _108.QueryNumPoolsResponse;
                fromAmino(object: _108.QueryNumPoolsResponseAmino): _108.QueryNumPoolsResponse;
                toAmino(message: _108.QueryNumPoolsResponse): _108.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _108.QueryNumPoolsResponseAminoMsg): _108.QueryNumPoolsResponse;
                toAminoMsg(message: _108.QueryNumPoolsResponse): _108.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryNumPoolsResponseProtoMsg): _108.QueryNumPoolsResponse;
                toProto(message: _108.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryNumPoolsResponse): _108.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                encode(message: _108.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolTypeRequest;
                fromPartial(object: Partial<_108.QueryPoolTypeRequest>): _108.QueryPoolTypeRequest;
                fromAmino(object: _108.QueryPoolTypeRequestAmino): _108.QueryPoolTypeRequest;
                toAmino(message: _108.QueryPoolTypeRequest): _108.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _108.QueryPoolTypeRequestAminoMsg): _108.QueryPoolTypeRequest;
                toAminoMsg(message: _108.QueryPoolTypeRequest): _108.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolTypeRequestProtoMsg): _108.QueryPoolTypeRequest;
                toProto(message: _108.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolTypeRequest): _108.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                encode(message: _108.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolTypeResponse;
                fromPartial(object: Partial<_108.QueryPoolTypeResponse>): _108.QueryPoolTypeResponse;
                fromAmino(object: _108.QueryPoolTypeResponseAmino): _108.QueryPoolTypeResponse;
                toAmino(message: _108.QueryPoolTypeResponse): _108.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _108.QueryPoolTypeResponseAminoMsg): _108.QueryPoolTypeResponse;
                toAminoMsg(message: _108.QueryPoolTypeResponse): _108.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolTypeResponseProtoMsg): _108.QueryPoolTypeResponse;
                toProto(message: _108.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolTypeResponse): _108.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _108.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_108.QueryCalcJoinPoolSharesRequest>): _108.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _108.QueryCalcJoinPoolSharesRequestAmino): _108.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _108.QueryCalcJoinPoolSharesRequest): _108.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _108.QueryCalcJoinPoolSharesRequestAminoMsg): _108.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _108.QueryCalcJoinPoolSharesRequest): _108.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryCalcJoinPoolSharesRequestProtoMsg): _108.QueryCalcJoinPoolSharesRequest;
                toProto(message: _108.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryCalcJoinPoolSharesRequest): _108.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _108.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_108.QueryCalcJoinPoolSharesResponse>): _108.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _108.QueryCalcJoinPoolSharesResponseAmino): _108.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _108.QueryCalcJoinPoolSharesResponse): _108.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _108.QueryCalcJoinPoolSharesResponseAminoMsg): _108.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _108.QueryCalcJoinPoolSharesResponse): _108.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryCalcJoinPoolSharesResponseProtoMsg): _108.QueryCalcJoinPoolSharesResponse;
                toProto(message: _108.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryCalcJoinPoolSharesResponse): _108.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _108.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_108.QueryCalcExitPoolCoinsFromSharesRequest>): _108.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _108.QueryCalcExitPoolCoinsFromSharesRequestAmino): _108.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _108.QueryCalcExitPoolCoinsFromSharesRequest): _108.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _108.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _108.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesRequest): _108.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _108.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _108.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesRequest): _108.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _108.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_108.QueryCalcExitPoolCoinsFromSharesResponse>): _108.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _108.QueryCalcExitPoolCoinsFromSharesResponseAmino): _108.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _108.QueryCalcExitPoolCoinsFromSharesResponse): _108.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _108.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _108.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesResponse): _108.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _108.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _108.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryCalcExitPoolCoinsFromSharesResponse): _108.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                encode(message: _108.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolParamsRequest;
                fromPartial(object: Partial<_108.QueryPoolParamsRequest>): _108.QueryPoolParamsRequest;
                fromAmino(object: _108.QueryPoolParamsRequestAmino): _108.QueryPoolParamsRequest;
                toAmino(message: _108.QueryPoolParamsRequest): _108.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _108.QueryPoolParamsRequestAminoMsg): _108.QueryPoolParamsRequest;
                toAminoMsg(message: _108.QueryPoolParamsRequest): _108.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolParamsRequestProtoMsg): _108.QueryPoolParamsRequest;
                toProto(message: _108.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolParamsRequest): _108.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                encode(message: _108.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolParamsResponse;
                fromPartial(object: Partial<_108.QueryPoolParamsResponse>): _108.QueryPoolParamsResponse;
                fromAmino(object: _108.QueryPoolParamsResponseAmino): _108.QueryPoolParamsResponse;
                toAmino(message: _108.QueryPoolParamsResponse): _108.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _108.QueryPoolParamsResponseAminoMsg): _108.QueryPoolParamsResponse;
                toAminoMsg(message: _108.QueryPoolParamsResponse): _108.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolParamsResponseProtoMsg): _108.QueryPoolParamsResponse;
                toProto(message: _108.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolParamsResponse): _108.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _108.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_108.QueryTotalPoolLiquidityRequest>): _108.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _108.QueryTotalPoolLiquidityRequestAmino): _108.QueryTotalPoolLiquidityRequest;
                toAmino(message: _108.QueryTotalPoolLiquidityRequest): _108.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _108.QueryTotalPoolLiquidityRequestAminoMsg): _108.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _108.QueryTotalPoolLiquidityRequest): _108.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _108.QueryTotalPoolLiquidityRequestProtoMsg): _108.QueryTotalPoolLiquidityRequest;
                toProto(message: _108.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _108.QueryTotalPoolLiquidityRequest): _108.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _108.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_108.QueryTotalPoolLiquidityResponse>): _108.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _108.QueryTotalPoolLiquidityResponseAmino): _108.QueryTotalPoolLiquidityResponse;
                toAmino(message: _108.QueryTotalPoolLiquidityResponse): _108.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _108.QueryTotalPoolLiquidityResponseAminoMsg): _108.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _108.QueryTotalPoolLiquidityResponse): _108.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _108.QueryTotalPoolLiquidityResponseProtoMsg): _108.QueryTotalPoolLiquidityResponse;
                toProto(message: _108.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _108.QueryTotalPoolLiquidityResponse): _108.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                encode(message: _108.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalSharesRequest;
                fromPartial(object: Partial<_108.QueryTotalSharesRequest>): _108.QueryTotalSharesRequest;
                fromAmino(object: _108.QueryTotalSharesRequestAmino): _108.QueryTotalSharesRequest;
                toAmino(message: _108.QueryTotalSharesRequest): _108.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _108.QueryTotalSharesRequestAminoMsg): _108.QueryTotalSharesRequest;
                toAminoMsg(message: _108.QueryTotalSharesRequest): _108.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryTotalSharesRequestProtoMsg): _108.QueryTotalSharesRequest;
                toProto(message: _108.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryTotalSharesRequest): _108.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                encode(message: _108.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalSharesResponse;
                fromPartial(object: Partial<_108.QueryTotalSharesResponse>): _108.QueryTotalSharesResponse;
                fromAmino(object: _108.QueryTotalSharesResponseAmino): _108.QueryTotalSharesResponse;
                toAmino(message: _108.QueryTotalSharesResponse): _108.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _108.QueryTotalSharesResponseAminoMsg): _108.QueryTotalSharesResponse;
                toAminoMsg(message: _108.QueryTotalSharesResponse): _108.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryTotalSharesResponseProtoMsg): _108.QueryTotalSharesResponse;
                toProto(message: _108.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryTotalSharesResponse): _108.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _108.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_108.QueryCalcJoinPoolNoSwapSharesRequest>): _108.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _108.QueryCalcJoinPoolNoSwapSharesRequestAmino): _108.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _108.QueryCalcJoinPoolNoSwapSharesRequest): _108.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _108.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _108.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesRequest): _108.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _108.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _108.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesRequest): _108.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _108.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_108.QueryCalcJoinPoolNoSwapSharesResponse>): _108.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _108.QueryCalcJoinPoolNoSwapSharesResponseAmino): _108.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _108.QueryCalcJoinPoolNoSwapSharesResponse): _108.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _108.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _108.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesResponse): _108.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _108.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _108.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryCalcJoinPoolNoSwapSharesResponse): _108.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                encode(message: _108.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySpotPriceRequest;
                fromPartial(object: Partial<_108.QuerySpotPriceRequest>): _108.QuerySpotPriceRequest;
                fromAmino(object: _108.QuerySpotPriceRequestAmino): _108.QuerySpotPriceRequest;
                toAmino(message: _108.QuerySpotPriceRequest): _108.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _108.QuerySpotPriceRequestAminoMsg): _108.QuerySpotPriceRequest;
                toAminoMsg(message: _108.QuerySpotPriceRequest): _108.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySpotPriceRequestProtoMsg): _108.QuerySpotPriceRequest;
                toProto(message: _108.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySpotPriceRequest): _108.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _108.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_108.QueryPoolsWithFilterRequest>): _108.QueryPoolsWithFilterRequest;
                fromAmino(object: _108.QueryPoolsWithFilterRequestAmino): _108.QueryPoolsWithFilterRequest;
                toAmino(message: _108.QueryPoolsWithFilterRequest): _108.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _108.QueryPoolsWithFilterRequestAminoMsg): _108.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _108.QueryPoolsWithFilterRequest): _108.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _108.QueryPoolsWithFilterRequestProtoMsg): _108.QueryPoolsWithFilterRequest;
                toProto(message: _108.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _108.QueryPoolsWithFilterRequest): _108.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _108.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_108.QueryPoolsWithFilterResponse>): _108.QueryPoolsWithFilterResponse;
                fromAmino(object: _108.QueryPoolsWithFilterResponseAmino): _108.QueryPoolsWithFilterResponse;
                toAmino(message: _108.QueryPoolsWithFilterResponse): _108.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _108.QueryPoolsWithFilterResponseAminoMsg): _108.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _108.QueryPoolsWithFilterResponse): _108.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _108.QueryPoolsWithFilterResponseProtoMsg): _108.QueryPoolsWithFilterResponse;
                toProto(message: _108.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _108.QueryPoolsWithFilterResponse): _108.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                encode(message: _108.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySpotPriceResponse;
                fromPartial(object: Partial<_108.QuerySpotPriceResponse>): _108.QuerySpotPriceResponse;
                fromAmino(object: _108.QuerySpotPriceResponseAmino): _108.QuerySpotPriceResponse;
                toAmino(message: _108.QuerySpotPriceResponse): _108.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _108.QuerySpotPriceResponseAminoMsg): _108.QuerySpotPriceResponse;
                toAminoMsg(message: _108.QuerySpotPriceResponse): _108.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySpotPriceResponseProtoMsg): _108.QuerySpotPriceResponse;
                toProto(message: _108.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySpotPriceResponse): _108.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _108.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_108.QuerySwapExactAmountInRequest>): _108.QuerySwapExactAmountInRequest;
                fromAmino(object: _108.QuerySwapExactAmountInRequestAmino): _108.QuerySwapExactAmountInRequest;
                toAmino(message: _108.QuerySwapExactAmountInRequest): _108.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _108.QuerySwapExactAmountInRequestAminoMsg): _108.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _108.QuerySwapExactAmountInRequest): _108.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySwapExactAmountInRequestProtoMsg): _108.QuerySwapExactAmountInRequest;
                toProto(message: _108.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySwapExactAmountInRequest): _108.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _108.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_108.QuerySwapExactAmountInResponse>): _108.QuerySwapExactAmountInResponse;
                fromAmino(object: _108.QuerySwapExactAmountInResponseAmino): _108.QuerySwapExactAmountInResponse;
                toAmino(message: _108.QuerySwapExactAmountInResponse): _108.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _108.QuerySwapExactAmountInResponseAminoMsg): _108.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _108.QuerySwapExactAmountInResponse): _108.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySwapExactAmountInResponseProtoMsg): _108.QuerySwapExactAmountInResponse;
                toProto(message: _108.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySwapExactAmountInResponse): _108.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _108.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_108.QuerySwapExactAmountOutRequest>): _108.QuerySwapExactAmountOutRequest;
                fromAmino(object: _108.QuerySwapExactAmountOutRequestAmino): _108.QuerySwapExactAmountOutRequest;
                toAmino(message: _108.QuerySwapExactAmountOutRequest): _108.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _108.QuerySwapExactAmountOutRequestAminoMsg): _108.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _108.QuerySwapExactAmountOutRequest): _108.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySwapExactAmountOutRequestProtoMsg): _108.QuerySwapExactAmountOutRequest;
                toProto(message: _108.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySwapExactAmountOutRequest): _108.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _108.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_108.QuerySwapExactAmountOutResponse>): _108.QuerySwapExactAmountOutResponse;
                fromAmino(object: _108.QuerySwapExactAmountOutResponseAmino): _108.QuerySwapExactAmountOutResponse;
                toAmino(message: _108.QuerySwapExactAmountOutResponse): _108.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _108.QuerySwapExactAmountOutResponseAminoMsg): _108.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _108.QuerySwapExactAmountOutResponse): _108.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySwapExactAmountOutResponseProtoMsg): _108.QuerySwapExactAmountOutResponse;
                toProto(message: _108.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySwapExactAmountOutResponse): _108.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _108.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_108.QueryTotalLiquidityRequest>): _108.QueryTotalLiquidityRequest;
                fromAmino(_: _108.QueryTotalLiquidityRequestAmino): _108.QueryTotalLiquidityRequest;
                toAmino(_: _108.QueryTotalLiquidityRequest): _108.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _108.QueryTotalLiquidityRequestAminoMsg): _108.QueryTotalLiquidityRequest;
                toAminoMsg(message: _108.QueryTotalLiquidityRequest): _108.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _108.QueryTotalLiquidityRequestProtoMsg): _108.QueryTotalLiquidityRequest;
                toProto(message: _108.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _108.QueryTotalLiquidityRequest): _108.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _108.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_108.QueryTotalLiquidityResponse>): _108.QueryTotalLiquidityResponse;
                fromAmino(object: _108.QueryTotalLiquidityResponseAmino): _108.QueryTotalLiquidityResponse;
                toAmino(message: _108.QueryTotalLiquidityResponse): _108.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _108.QueryTotalLiquidityResponseAminoMsg): _108.QueryTotalLiquidityResponse;
                toAminoMsg(message: _108.QueryTotalLiquidityResponse): _108.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _108.QueryTotalLiquidityResponseProtoMsg): _108.QueryTotalLiquidityResponse;
                toProto(message: _108.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _108.QueryTotalLiquidityResponse): _108.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _96.CosmWasmPool | _105.Pool | import("./concentrated-liquidity/pool").Pool | _111.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                encode(message: _107.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_107.ReplaceMigrationRecordsProposal>): _107.ReplaceMigrationRecordsProposal;
                fromAmino(object: _107.ReplaceMigrationRecordsProposalAmino): _107.ReplaceMigrationRecordsProposal;
                toAmino(message: _107.ReplaceMigrationRecordsProposal): _107.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _107.ReplaceMigrationRecordsProposalAminoMsg): _107.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _107.ReplaceMigrationRecordsProposal): _107.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _107.ReplaceMigrationRecordsProposalProtoMsg): _107.ReplaceMigrationRecordsProposal;
                toProto(message: _107.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _107.ReplaceMigrationRecordsProposal): _107.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                encode(message: _107.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_107.UpdateMigrationRecordsProposal>): _107.UpdateMigrationRecordsProposal;
                fromAmino(object: _107.UpdateMigrationRecordsProposalAmino): _107.UpdateMigrationRecordsProposal;
                toAmino(message: _107.UpdateMigrationRecordsProposal): _107.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _107.UpdateMigrationRecordsProposalAminoMsg): _107.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _107.UpdateMigrationRecordsProposal): _107.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _107.UpdateMigrationRecordsProposalProtoMsg): _107.UpdateMigrationRecordsProposal;
                toProto(message: _107.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _107.UpdateMigrationRecordsProposal): _107.UpdateMigrationRecordsProposalProtoMsg;
            };
            Params: {
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(object: Partial<_106.Params>): _106.Params;
                fromAmino(object: _106.ParamsAmino): _106.Params;
                toAmino(message: _106.Params): _106.ParamsAmino;
                fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                toProto(message: _106.Params): Uint8Array;
                toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
            };
            GenesisState: {
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
            MigrationRecords: {
                encode(message: _106.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MigrationRecords;
                fromPartial(object: Partial<_106.MigrationRecords>): _106.MigrationRecords;
                fromAmino(object: _106.MigrationRecordsAmino): _106.MigrationRecords;
                toAmino(message: _106.MigrationRecords): _106.MigrationRecordsAmino;
                fromAminoMsg(object: _106.MigrationRecordsAminoMsg): _106.MigrationRecords;
                toAminoMsg(message: _106.MigrationRecords): _106.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _106.MigrationRecordsProtoMsg): _106.MigrationRecords;
                toProto(message: _106.MigrationRecords): Uint8Array;
                toProtoMsg(message: _106.MigrationRecords): _106.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                encode(message: _106.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_106.BalancerToConcentratedPoolLink>): _106.BalancerToConcentratedPoolLink;
                fromAmino(object: _106.BalancerToConcentratedPoolLinkAmino): _106.BalancerToConcentratedPoolLink;
                toAmino(message: _106.BalancerToConcentratedPoolLink): _106.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _106.BalancerToConcentratedPoolLinkAminoMsg): _106.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _106.BalancerToConcentratedPoolLink): _106.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _106.BalancerToConcentratedPoolLinkProtoMsg): _106.BalancerToConcentratedPoolLink;
                toProto(message: _106.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _106.BalancerToConcentratedPoolLink): _106.BalancerToConcentratedPoolLinkProtoMsg;
            };
            SmoothWeightChangeParams: {
                encode(message: _105.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SmoothWeightChangeParams;
                fromPartial(object: Partial<_105.SmoothWeightChangeParams>): _105.SmoothWeightChangeParams;
                fromAmino(object: _105.SmoothWeightChangeParamsAmino): _105.SmoothWeightChangeParams;
                toAmino(message: _105.SmoothWeightChangeParams): _105.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _105.SmoothWeightChangeParamsAminoMsg): _105.SmoothWeightChangeParams;
                toAminoMsg(message: _105.SmoothWeightChangeParams): _105.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _105.SmoothWeightChangeParamsProtoMsg): _105.SmoothWeightChangeParams;
                toProto(message: _105.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _105.SmoothWeightChangeParams): _105.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                encode(message: _105.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PoolParams;
                fromPartial(object: Partial<_105.PoolParams>): _105.PoolParams;
                fromAmino(object: _105.PoolParamsAmino): _105.PoolParams;
                toAmino(message: _105.PoolParams): _105.PoolParamsAmino;
                fromAminoMsg(object: _105.PoolParamsAminoMsg): _105.PoolParams;
                toAminoMsg(message: _105.PoolParams): _105.PoolParamsAminoMsg;
                fromProtoMsg(message: _105.PoolParamsProtoMsg): _105.PoolParams;
                toProto(message: _105.PoolParams): Uint8Array;
                toProtoMsg(message: _105.PoolParams): _105.PoolParamsProtoMsg;
            };
            PoolAsset: {
                encode(message: _105.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PoolAsset;
                fromPartial(object: Partial<_105.PoolAsset>): _105.PoolAsset;
                fromAmino(object: _105.PoolAssetAmino): _105.PoolAsset;
                toAmino(message: _105.PoolAsset): _105.PoolAssetAmino;
                fromAminoMsg(object: _105.PoolAssetAminoMsg): _105.PoolAsset;
                toAminoMsg(message: _105.PoolAsset): _105.PoolAssetAminoMsg;
                fromProtoMsg(message: _105.PoolAssetProtoMsg): _105.PoolAsset;
                toProto(message: _105.PoolAsset): Uint8Array;
                toProtoMsg(message: _105.PoolAsset): _105.PoolAssetProtoMsg;
            };
            Pool: {
                encode(message: _105.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Pool;
                fromPartial(object: Partial<_105.Pool>): _105.Pool;
                fromAmino(object: _105.PoolAmino): _105.Pool;
                toAmino(message: _105.Pool): _105.PoolAmino;
                fromAminoMsg(object: _105.PoolAminoMsg): _105.Pool;
                toAminoMsg(message: _105.Pool): _105.PoolAminoMsg;
                fromProtoMsg(message: _105.PoolProtoMsg): _105.Pool;
                toProto(message: _105.Pool): Uint8Array;
                toProtoMsg(message: _105.Pool): _105.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _289.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _110.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _110.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _110.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _110.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _110.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _110.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _110.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _110.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _110.MsgCreateBalancerPool) => _110.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _110.MsgCreateBalancerPoolAmino) => _110.MsgCreateBalancerPool;
                        };
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
                            aminoType: string;
                            toAmino: (message: _110.MsgMigrateSharesToFullRangeConcentratedPosition) => _110.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                            fromAmino: (object: _110.MsgMigrateSharesToFullRangeConcentratedPositionAmino) => _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _110.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_110.MsgCreateBalancerPool>): _110.MsgCreateBalancerPool;
                        fromAmino(object: _110.MsgCreateBalancerPoolAmino): _110.MsgCreateBalancerPool;
                        toAmino(message: _110.MsgCreateBalancerPool): _110.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _110.MsgCreateBalancerPoolAminoMsg): _110.MsgCreateBalancerPool;
                        toAminoMsg(message: _110.MsgCreateBalancerPool): _110.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _110.MsgCreateBalancerPoolProtoMsg): _110.MsgCreateBalancerPool;
                        toProto(message: _110.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _110.MsgCreateBalancerPool): _110.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _110.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_110.MsgCreateBalancerPoolResponse>): _110.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _110.MsgCreateBalancerPoolResponseAmino): _110.MsgCreateBalancerPoolResponse;
                        toAmino(message: _110.MsgCreateBalancerPoolResponse): _110.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _110.MsgCreateBalancerPoolResponseAminoMsg): _110.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _110.MsgCreateBalancerPoolResponse): _110.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _110.MsgCreateBalancerPoolResponseProtoMsg): _110.MsgCreateBalancerPoolResponse;
                        toProto(message: _110.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _110.MsgCreateBalancerPoolResponse): _110.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPosition: {
                        encode(message: _110.MsgMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromPartial(object: Partial<_110.MsgMigrateSharesToFullRangeConcentratedPosition>): _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromAmino(object: _110.MsgMigrateSharesToFullRangeConcentratedPositionAmino): _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAmino(message: _110.MsgMigrateSharesToFullRangeConcentratedPosition): _110.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                        fromAminoMsg(object: _110.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg): _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAminoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPosition): _110.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg;
                        fromProtoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg): _110.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toProto(message: _110.MsgMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
                        toProtoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPosition): _110.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
                        encode(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromPartial(object: Partial<_110.MsgMigrateSharesToFullRangeConcentratedPositionResponse>): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromAmino(object: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAmino(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino;
                        fromAminoMsg(object: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAminoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
                        fromProtoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toProto(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
                        toProtoMsg(message: _110.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _110.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _290.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _112.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _112.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _112.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _112.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _112.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _112.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _112.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _112.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _112.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _112.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _112.MsgCreateStableswapPool) => _112.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _112.MsgCreateStableswapPoolAmino) => _112.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _112.MsgStableSwapAdjustScalingFactors) => _112.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _112.MsgStableSwapAdjustScalingFactorsAmino) => _112.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _112.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_112.MsgCreateStableswapPool>): _112.MsgCreateStableswapPool;
                        fromAmino(object: _112.MsgCreateStableswapPoolAmino): _112.MsgCreateStableswapPool;
                        toAmino(message: _112.MsgCreateStableswapPool): _112.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _112.MsgCreateStableswapPoolAminoMsg): _112.MsgCreateStableswapPool;
                        toAminoMsg(message: _112.MsgCreateStableswapPool): _112.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _112.MsgCreateStableswapPoolProtoMsg): _112.MsgCreateStableswapPool;
                        toProto(message: _112.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _112.MsgCreateStableswapPool): _112.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _112.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_112.MsgCreateStableswapPoolResponse>): _112.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _112.MsgCreateStableswapPoolResponseAmino): _112.MsgCreateStableswapPoolResponse;
                        toAmino(message: _112.MsgCreateStableswapPoolResponse): _112.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _112.MsgCreateStableswapPoolResponseAminoMsg): _112.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _112.MsgCreateStableswapPoolResponse): _112.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _112.MsgCreateStableswapPoolResponseProtoMsg): _112.MsgCreateStableswapPoolResponse;
                        toProto(message: _112.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _112.MsgCreateStableswapPoolResponse): _112.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _112.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_112.MsgStableSwapAdjustScalingFactors>): _112.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _112.MsgStableSwapAdjustScalingFactorsAmino): _112.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _112.MsgStableSwapAdjustScalingFactors): _112.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _112.MsgStableSwapAdjustScalingFactorsAminoMsg): _112.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _112.MsgStableSwapAdjustScalingFactors): _112.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _112.MsgStableSwapAdjustScalingFactorsProtoMsg): _112.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _112.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _112.MsgStableSwapAdjustScalingFactors): _112.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _112.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_112.MsgStableSwapAdjustScalingFactorsResponse>): _112.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _112.MsgStableSwapAdjustScalingFactorsResponseAmino): _112.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _112.MsgStableSwapAdjustScalingFactorsResponse): _112.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _112.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _112.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _112.MsgStableSwapAdjustScalingFactorsResponse): _112.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _112.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _112.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _112.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _112.MsgStableSwapAdjustScalingFactorsResponse): _112.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        encode(message: _111.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PoolParams;
                        fromPartial(object: Partial<_111.PoolParams>): _111.PoolParams;
                        fromAmino(object: _111.PoolParamsAmino): _111.PoolParams;
                        toAmino(message: _111.PoolParams): _111.PoolParamsAmino;
                        fromAminoMsg(object: _111.PoolParamsAminoMsg): _111.PoolParams;
                        toAminoMsg(message: _111.PoolParams): _111.PoolParamsAminoMsg;
                        fromProtoMsg(message: _111.PoolParamsProtoMsg): _111.PoolParams;
                        toProto(message: _111.PoolParams): Uint8Array;
                        toProtoMsg(message: _111.PoolParams): _111.PoolParamsProtoMsg;
                    };
                    Pool: {
                        encode(message: _111.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Pool;
                        fromPartial(object: Partial<_111.Pool>): _111.Pool;
                        fromAmino(object: _111.PoolAmino): _111.Pool;
                        toAmino(message: _111.Pool): _111.PoolAmino;
                        fromAminoMsg(object: _111.PoolAminoMsg): _111.Pool;
                        toAminoMsg(message: _111.Pool): _111.PoolAminoMsg;
                        fromProtoMsg(message: _111.PoolProtoMsg): _111.Pool;
                        toProto(message: _111.Pool): Uint8Array;
                        toProtoMsg(message: _111.Pool): _111.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _113.QuerySpotPriceRequest): Promise<_113.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            QuerySpotPriceRequest: {
                encode(message: _113.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QuerySpotPriceRequest;
                fromPartial(object: Partial<_113.QuerySpotPriceRequest>): _113.QuerySpotPriceRequest;
                fromAmino(object: _113.QuerySpotPriceRequestAmino): _113.QuerySpotPriceRequest;
                toAmino(message: _113.QuerySpotPriceRequest): _113.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _113.QuerySpotPriceRequestAminoMsg): _113.QuerySpotPriceRequest;
                toAminoMsg(message: _113.QuerySpotPriceRequest): _113.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _113.QuerySpotPriceRequestProtoMsg): _113.QuerySpotPriceRequest;
                toProto(message: _113.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _113.QuerySpotPriceRequest): _113.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                encode(message: _113.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QuerySpotPriceResponse;
                fromPartial(object: Partial<_113.QuerySpotPriceResponse>): _113.QuerySpotPriceResponse;
                fromAmino(object: _113.QuerySpotPriceResponseAmino): _113.QuerySpotPriceResponse;
                toAmino(message: _113.QuerySpotPriceResponse): _113.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _113.QuerySpotPriceResponseAminoMsg): _113.QuerySpotPriceResponse;
                toAminoMsg(message: _113.QuerySpotPriceResponse): _113.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _113.QuerySpotPriceResponseProtoMsg): _113.QuerySpotPriceResponse;
                toProto(message: _113.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _113.QuerySpotPriceResponse): _113.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _116.ParamsRequest): Promise<_116.ParamsResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            ParamsRequest: {
                encode(_: _116.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ParamsRequest;
                fromPartial(_: Partial<_116.ParamsRequest>): _116.ParamsRequest;
                fromAmino(_: _116.ParamsRequestAmino): _116.ParamsRequest;
                toAmino(_: _116.ParamsRequest): _116.ParamsRequestAmino;
                fromAminoMsg(object: _116.ParamsRequestAminoMsg): _116.ParamsRequest;
                toAminoMsg(message: _116.ParamsRequest): _116.ParamsRequestAminoMsg;
                fromProtoMsg(message: _116.ParamsRequestProtoMsg): _116.ParamsRequest;
                toProto(message: _116.ParamsRequest): Uint8Array;
                toProtoMsg(message: _116.ParamsRequest): _116.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                encode(message: _116.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ParamsResponse;
                fromPartial(object: Partial<_116.ParamsResponse>): _116.ParamsResponse;
                fromAmino(object: _116.ParamsResponseAmino): _116.ParamsResponse;
                toAmino(message: _116.ParamsResponse): _116.ParamsResponseAmino;
                fromAminoMsg(object: _116.ParamsResponseAminoMsg): _116.ParamsResponse;
                toAminoMsg(message: _116.ParamsResponse): _116.ParamsResponseAminoMsg;
                fromProtoMsg(message: _116.ParamsResponseProtoMsg): _116.ParamsResponse;
                toProto(message: _116.ParamsResponse): Uint8Array;
                toProtoMsg(message: _116.ParamsResponse): _116.ParamsResponseProtoMsg;
            };
            Params: {
                encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
                fromPartial(object: Partial<_115.Params>): _115.Params;
                fromAmino(object: _115.ParamsAmino): _115.Params;
                toAmino(message: _115.Params): _115.ParamsAmino;
                fromAminoMsg(object: _115.ParamsAminoMsg): _115.Params;
                toAminoMsg(message: _115.Params): _115.ParamsAminoMsg;
                fromProtoMsg(message: _115.ParamsProtoMsg): _115.Params;
                toProto(message: _115.Params): Uint8Array;
                toProtoMsg(message: _115.Params): _115.ParamsProtoMsg;
            };
            GenesisState: {
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
    const incentives: {
        MsgClientImpl: typeof _292.MsgClientImpl;
        QueryClientImpl: typeof _277.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _120.ModuleToDistributeCoinsRequest): Promise<_120.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _120.GaugeByIDRequest): Promise<_120.GaugeByIDResponse>;
            gauges(request?: _120.GaugesRequest): Promise<_120.GaugesResponse>;
            activeGauges(request?: _120.ActiveGaugesRequest): Promise<_120.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _120.ActiveGaugesPerDenomRequest): Promise<_120.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _120.UpcomingGaugesRequest): Promise<_120.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _120.UpcomingGaugesPerDenomRequest): Promise<_120.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _120.RewardsEstRequest): Promise<_120.RewardsEstResponse>;
            lockableDurations(request?: _120.QueryLockableDurationsRequest): Promise<_120.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _259.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _121.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _121.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _121.MsgCreateGauge): {
                    typeUrl: string;
                    value: _121.MsgCreateGauge;
                };
                addToGauge(value: _121.MsgAddToGauge): {
                    typeUrl: string;
                    value: _121.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _121.MsgCreateGauge): {
                    typeUrl: string;
                    value: _121.MsgCreateGauge;
                };
                addToGauge(value: _121.MsgAddToGauge): {
                    typeUrl: string;
                    value: _121.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _121.MsgCreateGauge) => _121.MsgCreateGaugeAmino;
                fromAmino: (object: _121.MsgCreateGaugeAmino) => _121.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _121.MsgAddToGauge) => _121.MsgAddToGaugeAmino;
                fromAmino: (object: _121.MsgAddToGaugeAmino) => _121.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _121.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgCreateGauge;
            fromPartial(object: Partial<_121.MsgCreateGauge>): _121.MsgCreateGauge;
            fromAmino(object: _121.MsgCreateGaugeAmino): _121.MsgCreateGauge;
            toAmino(message: _121.MsgCreateGauge): _121.MsgCreateGaugeAmino;
            fromAminoMsg(object: _121.MsgCreateGaugeAminoMsg): _121.MsgCreateGauge;
            toAminoMsg(message: _121.MsgCreateGauge): _121.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _121.MsgCreateGaugeProtoMsg): _121.MsgCreateGauge;
            toProto(message: _121.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _121.MsgCreateGauge): _121.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            encode(_: _121.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_121.MsgCreateGaugeResponse>): _121.MsgCreateGaugeResponse;
            fromAmino(_: _121.MsgCreateGaugeResponseAmino): _121.MsgCreateGaugeResponse;
            toAmino(_: _121.MsgCreateGaugeResponse): _121.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _121.MsgCreateGaugeResponseAminoMsg): _121.MsgCreateGaugeResponse;
            toAminoMsg(message: _121.MsgCreateGaugeResponse): _121.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _121.MsgCreateGaugeResponseProtoMsg): _121.MsgCreateGaugeResponse;
            toProto(message: _121.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _121.MsgCreateGaugeResponse): _121.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            encode(message: _121.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgAddToGauge;
            fromPartial(object: Partial<_121.MsgAddToGauge>): _121.MsgAddToGauge;
            fromAmino(object: _121.MsgAddToGaugeAmino): _121.MsgAddToGauge;
            toAmino(message: _121.MsgAddToGauge): _121.MsgAddToGaugeAmino;
            fromAminoMsg(object: _121.MsgAddToGaugeAminoMsg): _121.MsgAddToGauge;
            toAminoMsg(message: _121.MsgAddToGauge): _121.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _121.MsgAddToGaugeProtoMsg): _121.MsgAddToGauge;
            toProto(message: _121.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _121.MsgAddToGauge): _121.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            encode(_: _121.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_121.MsgAddToGaugeResponse>): _121.MsgAddToGaugeResponse;
            fromAmino(_: _121.MsgAddToGaugeResponseAmino): _121.MsgAddToGaugeResponse;
            toAmino(_: _121.MsgAddToGaugeResponse): _121.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _121.MsgAddToGaugeResponseAminoMsg): _121.MsgAddToGaugeResponse;
            toAminoMsg(message: _121.MsgAddToGaugeResponse): _121.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _121.MsgAddToGaugeResponseProtoMsg): _121.MsgAddToGaugeResponse;
            toProto(message: _121.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _121.MsgAddToGaugeResponse): _121.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _120.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_120.ModuleToDistributeCoinsRequest>): _120.ModuleToDistributeCoinsRequest;
            fromAmino(_: _120.ModuleToDistributeCoinsRequestAmino): _120.ModuleToDistributeCoinsRequest;
            toAmino(_: _120.ModuleToDistributeCoinsRequest): _120.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _120.ModuleToDistributeCoinsRequestAminoMsg): _120.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _120.ModuleToDistributeCoinsRequest): _120.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _120.ModuleToDistributeCoinsRequestProtoMsg): _120.ModuleToDistributeCoinsRequest;
            toProto(message: _120.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _120.ModuleToDistributeCoinsRequest): _120.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _120.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_120.ModuleToDistributeCoinsResponse>): _120.ModuleToDistributeCoinsResponse;
            fromAmino(object: _120.ModuleToDistributeCoinsResponseAmino): _120.ModuleToDistributeCoinsResponse;
            toAmino(message: _120.ModuleToDistributeCoinsResponse): _120.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _120.ModuleToDistributeCoinsResponseAminoMsg): _120.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _120.ModuleToDistributeCoinsResponse): _120.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _120.ModuleToDistributeCoinsResponseProtoMsg): _120.ModuleToDistributeCoinsResponse;
            toProto(message: _120.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _120.ModuleToDistributeCoinsResponse): _120.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            encode(message: _120.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GaugeByIDRequest;
            fromPartial(object: Partial<_120.GaugeByIDRequest>): _120.GaugeByIDRequest;
            fromAmino(object: _120.GaugeByIDRequestAmino): _120.GaugeByIDRequest;
            toAmino(message: _120.GaugeByIDRequest): _120.GaugeByIDRequestAmino;
            fromAminoMsg(object: _120.GaugeByIDRequestAminoMsg): _120.GaugeByIDRequest;
            toAminoMsg(message: _120.GaugeByIDRequest): _120.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _120.GaugeByIDRequestProtoMsg): _120.GaugeByIDRequest;
            toProto(message: _120.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _120.GaugeByIDRequest): _120.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            encode(message: _120.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GaugeByIDResponse;
            fromPartial(object: Partial<_120.GaugeByIDResponse>): _120.GaugeByIDResponse;
            fromAmino(object: _120.GaugeByIDResponseAmino): _120.GaugeByIDResponse;
            toAmino(message: _120.GaugeByIDResponse): _120.GaugeByIDResponseAmino;
            fromAminoMsg(object: _120.GaugeByIDResponseAminoMsg): _120.GaugeByIDResponse;
            toAminoMsg(message: _120.GaugeByIDResponse): _120.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _120.GaugeByIDResponseProtoMsg): _120.GaugeByIDResponse;
            toProto(message: _120.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _120.GaugeByIDResponse): _120.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            encode(message: _120.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GaugesRequest;
            fromPartial(object: Partial<_120.GaugesRequest>): _120.GaugesRequest;
            fromAmino(object: _120.GaugesRequestAmino): _120.GaugesRequest;
            toAmino(message: _120.GaugesRequest): _120.GaugesRequestAmino;
            fromAminoMsg(object: _120.GaugesRequestAminoMsg): _120.GaugesRequest;
            toAminoMsg(message: _120.GaugesRequest): _120.GaugesRequestAminoMsg;
            fromProtoMsg(message: _120.GaugesRequestProtoMsg): _120.GaugesRequest;
            toProto(message: _120.GaugesRequest): Uint8Array;
            toProtoMsg(message: _120.GaugesRequest): _120.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            encode(message: _120.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GaugesResponse;
            fromPartial(object: Partial<_120.GaugesResponse>): _120.GaugesResponse;
            fromAmino(object: _120.GaugesResponseAmino): _120.GaugesResponse;
            toAmino(message: _120.GaugesResponse): _120.GaugesResponseAmino;
            fromAminoMsg(object: _120.GaugesResponseAminoMsg): _120.GaugesResponse;
            toAminoMsg(message: _120.GaugesResponse): _120.GaugesResponseAminoMsg;
            fromProtoMsg(message: _120.GaugesResponseProtoMsg): _120.GaugesResponse;
            toProto(message: _120.GaugesResponse): Uint8Array;
            toProtoMsg(message: _120.GaugesResponse): _120.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            encode(message: _120.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ActiveGaugesRequest;
            fromPartial(object: Partial<_120.ActiveGaugesRequest>): _120.ActiveGaugesRequest;
            fromAmino(object: _120.ActiveGaugesRequestAmino): _120.ActiveGaugesRequest;
            toAmino(message: _120.ActiveGaugesRequest): _120.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _120.ActiveGaugesRequestAminoMsg): _120.ActiveGaugesRequest;
            toAminoMsg(message: _120.ActiveGaugesRequest): _120.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _120.ActiveGaugesRequestProtoMsg): _120.ActiveGaugesRequest;
            toProto(message: _120.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _120.ActiveGaugesRequest): _120.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            encode(message: _120.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ActiveGaugesResponse;
            fromPartial(object: Partial<_120.ActiveGaugesResponse>): _120.ActiveGaugesResponse;
            fromAmino(object: _120.ActiveGaugesResponseAmino): _120.ActiveGaugesResponse;
            toAmino(message: _120.ActiveGaugesResponse): _120.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _120.ActiveGaugesResponseAminoMsg): _120.ActiveGaugesResponse;
            toAminoMsg(message: _120.ActiveGaugesResponse): _120.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _120.ActiveGaugesResponseProtoMsg): _120.ActiveGaugesResponse;
            toProto(message: _120.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _120.ActiveGaugesResponse): _120.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _120.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_120.ActiveGaugesPerDenomRequest>): _120.ActiveGaugesPerDenomRequest;
            fromAmino(object: _120.ActiveGaugesPerDenomRequestAmino): _120.ActiveGaugesPerDenomRequest;
            toAmino(message: _120.ActiveGaugesPerDenomRequest): _120.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _120.ActiveGaugesPerDenomRequestAminoMsg): _120.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _120.ActiveGaugesPerDenomRequest): _120.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _120.ActiveGaugesPerDenomRequestProtoMsg): _120.ActiveGaugesPerDenomRequest;
            toProto(message: _120.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _120.ActiveGaugesPerDenomRequest): _120.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _120.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_120.ActiveGaugesPerDenomResponse>): _120.ActiveGaugesPerDenomResponse;
            fromAmino(object: _120.ActiveGaugesPerDenomResponseAmino): _120.ActiveGaugesPerDenomResponse;
            toAmino(message: _120.ActiveGaugesPerDenomResponse): _120.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _120.ActiveGaugesPerDenomResponseAminoMsg): _120.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _120.ActiveGaugesPerDenomResponse): _120.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _120.ActiveGaugesPerDenomResponseProtoMsg): _120.ActiveGaugesPerDenomResponse;
            toProto(message: _120.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _120.ActiveGaugesPerDenomResponse): _120.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            encode(message: _120.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpcomingGaugesRequest;
            fromPartial(object: Partial<_120.UpcomingGaugesRequest>): _120.UpcomingGaugesRequest;
            fromAmino(object: _120.UpcomingGaugesRequestAmino): _120.UpcomingGaugesRequest;
            toAmino(message: _120.UpcomingGaugesRequest): _120.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _120.UpcomingGaugesRequestAminoMsg): _120.UpcomingGaugesRequest;
            toAminoMsg(message: _120.UpcomingGaugesRequest): _120.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _120.UpcomingGaugesRequestProtoMsg): _120.UpcomingGaugesRequest;
            toProto(message: _120.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _120.UpcomingGaugesRequest): _120.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            encode(message: _120.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpcomingGaugesResponse;
            fromPartial(object: Partial<_120.UpcomingGaugesResponse>): _120.UpcomingGaugesResponse;
            fromAmino(object: _120.UpcomingGaugesResponseAmino): _120.UpcomingGaugesResponse;
            toAmino(message: _120.UpcomingGaugesResponse): _120.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _120.UpcomingGaugesResponseAminoMsg): _120.UpcomingGaugesResponse;
            toAminoMsg(message: _120.UpcomingGaugesResponse): _120.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _120.UpcomingGaugesResponseProtoMsg): _120.UpcomingGaugesResponse;
            toProto(message: _120.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _120.UpcomingGaugesResponse): _120.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _120.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_120.UpcomingGaugesPerDenomRequest>): _120.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _120.UpcomingGaugesPerDenomRequestAmino): _120.UpcomingGaugesPerDenomRequest;
            toAmino(message: _120.UpcomingGaugesPerDenomRequest): _120.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _120.UpcomingGaugesPerDenomRequestAminoMsg): _120.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _120.UpcomingGaugesPerDenomRequest): _120.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _120.UpcomingGaugesPerDenomRequestProtoMsg): _120.UpcomingGaugesPerDenomRequest;
            toProto(message: _120.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _120.UpcomingGaugesPerDenomRequest): _120.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _120.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_120.UpcomingGaugesPerDenomResponse>): _120.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _120.UpcomingGaugesPerDenomResponseAmino): _120.UpcomingGaugesPerDenomResponse;
            toAmino(message: _120.UpcomingGaugesPerDenomResponse): _120.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _120.UpcomingGaugesPerDenomResponseAminoMsg): _120.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _120.UpcomingGaugesPerDenomResponse): _120.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _120.UpcomingGaugesPerDenomResponseProtoMsg): _120.UpcomingGaugesPerDenomResponse;
            toProto(message: _120.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _120.UpcomingGaugesPerDenomResponse): _120.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            encode(message: _120.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RewardsEstRequest;
            fromPartial(object: Partial<_120.RewardsEstRequest>): _120.RewardsEstRequest;
            fromAmino(object: _120.RewardsEstRequestAmino): _120.RewardsEstRequest;
            toAmino(message: _120.RewardsEstRequest): _120.RewardsEstRequestAmino;
            fromAminoMsg(object: _120.RewardsEstRequestAminoMsg): _120.RewardsEstRequest;
            toAminoMsg(message: _120.RewardsEstRequest): _120.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _120.RewardsEstRequestProtoMsg): _120.RewardsEstRequest;
            toProto(message: _120.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _120.RewardsEstRequest): _120.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            encode(message: _120.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RewardsEstResponse;
            fromPartial(object: Partial<_120.RewardsEstResponse>): _120.RewardsEstResponse;
            fromAmino(object: _120.RewardsEstResponseAmino): _120.RewardsEstResponse;
            toAmino(message: _120.RewardsEstResponse): _120.RewardsEstResponseAmino;
            fromAminoMsg(object: _120.RewardsEstResponseAminoMsg): _120.RewardsEstResponse;
            toAminoMsg(message: _120.RewardsEstResponse): _120.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _120.RewardsEstResponseProtoMsg): _120.RewardsEstResponse;
            toProto(message: _120.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _120.RewardsEstResponse): _120.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            encode(_: _120.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_120.QueryLockableDurationsRequest>): _120.QueryLockableDurationsRequest;
            fromAmino(_: _120.QueryLockableDurationsRequestAmino): _120.QueryLockableDurationsRequest;
            toAmino(_: _120.QueryLockableDurationsRequest): _120.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _120.QueryLockableDurationsRequestAminoMsg): _120.QueryLockableDurationsRequest;
            toAminoMsg(message: _120.QueryLockableDurationsRequest): _120.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _120.QueryLockableDurationsRequestProtoMsg): _120.QueryLockableDurationsRequest;
            toProto(message: _120.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _120.QueryLockableDurationsRequest): _120.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            encode(message: _120.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_120.QueryLockableDurationsResponse>): _120.QueryLockableDurationsResponse;
            fromAmino(object: _120.QueryLockableDurationsResponseAmino): _120.QueryLockableDurationsResponse;
            toAmino(message: _120.QueryLockableDurationsResponse): _120.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _120.QueryLockableDurationsResponseAminoMsg): _120.QueryLockableDurationsResponse;
            toAminoMsg(message: _120.QueryLockableDurationsResponse): _120.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _120.QueryLockableDurationsResponseProtoMsg): _120.QueryLockableDurationsResponse;
            toProto(message: _120.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _120.QueryLockableDurationsResponse): _120.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params;
            fromPartial(object: Partial<_119.Params>): _119.Params;
            fromAmino(object: _119.ParamsAmino): _119.Params;
            toAmino(message: _119.Params): _119.ParamsAmino;
            fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
            toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
            fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
            toProto(message: _119.Params): Uint8Array;
            toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
            fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
            fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
            toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
            fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
            toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
            fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
            toProto(message: _118.GenesisState): Uint8Array;
            toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
        };
        Gauge: {
            encode(message: _117.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Gauge;
            fromPartial(object: Partial<_117.Gauge>): _117.Gauge;
            fromAmino(object: _117.GaugeAmino): _117.Gauge;
            toAmino(message: _117.Gauge): _117.GaugeAmino;
            fromAminoMsg(object: _117.GaugeAminoMsg): _117.Gauge;
            toAminoMsg(message: _117.Gauge): _117.GaugeAminoMsg;
            fromProtoMsg(message: _117.GaugeProtoMsg): _117.Gauge;
            toProto(message: _117.Gauge): Uint8Array;
            toProtoMsg(message: _117.Gauge): _117.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            encode(message: _117.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.LockableDurationsInfo;
            fromPartial(object: Partial<_117.LockableDurationsInfo>): _117.LockableDurationsInfo;
            fromAmino(object: _117.LockableDurationsInfoAmino): _117.LockableDurationsInfo;
            toAmino(message: _117.LockableDurationsInfo): _117.LockableDurationsInfoAmino;
            fromAminoMsg(object: _117.LockableDurationsInfoAminoMsg): _117.LockableDurationsInfo;
            toAminoMsg(message: _117.LockableDurationsInfo): _117.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _117.LockableDurationsInfoProtoMsg): _117.LockableDurationsInfo;
            toProto(message: _117.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _117.LockableDurationsInfo): _117.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _293.MsgClientImpl;
        QueryClientImpl: typeof _278.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _125.ModuleBalanceRequest): Promise<_125.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _125.ModuleLockedAmountRequest): Promise<_125.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _125.AccountUnlockableCoinsRequest): Promise<_125.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _125.AccountUnlockingCoinsRequest): Promise<_125.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _125.AccountLockedCoinsRequest): Promise<_125.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _125.AccountLockedPastTimeRequest): Promise<_125.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_125.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _125.AccountUnlockedBeforeTimeRequest): Promise<_125.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _125.AccountLockedPastTimeDenomRequest): Promise<_125.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _125.LockedDenomRequest): Promise<_125.LockedDenomResponse>;
            lockedByID(request: _125.LockedRequest): Promise<_125.LockedResponse>;
            nextLockID(request?: _125.NextLockIDRequest): Promise<_125.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _125.SyntheticLockupsByLockupIDRequest): Promise<_125.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _125.AccountLockedLongerDurationRequest): Promise<_125.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _125.AccountLockedDurationRequest): Promise<_125.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_125.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _125.AccountLockedLongerDurationDenomRequest): Promise<_125.AccountLockedLongerDurationDenomResponse>;
            params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _260.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _126.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _126.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _126.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _126.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _126.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _126.MsgLockTokens): {
                    typeUrl: string;
                    value: _126.MsgLockTokens;
                };
                beginUnlockingAll(value: _126.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _126.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _126.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _126.MsgBeginUnlocking;
                };
                extendLockup(value: _126.MsgExtendLockup): {
                    typeUrl: string;
                    value: _126.MsgExtendLockup;
                };
                forceUnlock(value: _126.MsgForceUnlock): {
                    typeUrl: string;
                    value: _126.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _126.MsgLockTokens): {
                    typeUrl: string;
                    value: _126.MsgLockTokens;
                };
                beginUnlockingAll(value: _126.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _126.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _126.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _126.MsgBeginUnlocking;
                };
                extendLockup(value: _126.MsgExtendLockup): {
                    typeUrl: string;
                    value: _126.MsgExtendLockup;
                };
                forceUnlock(value: _126.MsgForceUnlock): {
                    typeUrl: string;
                    value: _126.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _126.MsgLockTokens) => _126.MsgLockTokensAmino;
                fromAmino: (object: _126.MsgLockTokensAmino) => _126.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _126.MsgBeginUnlockingAll) => _126.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _126.MsgBeginUnlockingAllAmino) => _126.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _126.MsgBeginUnlocking) => _126.MsgBeginUnlockingAmino;
                fromAmino: (object: _126.MsgBeginUnlockingAmino) => _126.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _126.MsgExtendLockup) => _126.MsgExtendLockupAmino;
                fromAmino: (object: _126.MsgExtendLockupAmino) => _126.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _126.MsgForceUnlock) => _126.MsgForceUnlockAmino;
                fromAmino: (object: _126.MsgForceUnlockAmino) => _126.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _126.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgLockTokens;
            fromPartial(object: Partial<_126.MsgLockTokens>): _126.MsgLockTokens;
            fromAmino(object: _126.MsgLockTokensAmino): _126.MsgLockTokens;
            toAmino(message: _126.MsgLockTokens): _126.MsgLockTokensAmino;
            fromAminoMsg(object: _126.MsgLockTokensAminoMsg): _126.MsgLockTokens;
            toAminoMsg(message: _126.MsgLockTokens): _126.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _126.MsgLockTokensProtoMsg): _126.MsgLockTokens;
            toProto(message: _126.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _126.MsgLockTokens): _126.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            encode(message: _126.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgLockTokensResponse;
            fromPartial(object: Partial<_126.MsgLockTokensResponse>): _126.MsgLockTokensResponse;
            fromAmino(object: _126.MsgLockTokensResponseAmino): _126.MsgLockTokensResponse;
            toAmino(message: _126.MsgLockTokensResponse): _126.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _126.MsgLockTokensResponseAminoMsg): _126.MsgLockTokensResponse;
            toAminoMsg(message: _126.MsgLockTokensResponse): _126.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _126.MsgLockTokensResponseProtoMsg): _126.MsgLockTokensResponse;
            toProto(message: _126.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _126.MsgLockTokensResponse): _126.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            encode(message: _126.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_126.MsgBeginUnlockingAll>): _126.MsgBeginUnlockingAll;
            fromAmino(object: _126.MsgBeginUnlockingAllAmino): _126.MsgBeginUnlockingAll;
            toAmino(message: _126.MsgBeginUnlockingAll): _126.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _126.MsgBeginUnlockingAllAminoMsg): _126.MsgBeginUnlockingAll;
            toAminoMsg(message: _126.MsgBeginUnlockingAll): _126.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _126.MsgBeginUnlockingAllProtoMsg): _126.MsgBeginUnlockingAll;
            toProto(message: _126.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _126.MsgBeginUnlockingAll): _126.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _126.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_126.MsgBeginUnlockingAllResponse>): _126.MsgBeginUnlockingAllResponse;
            fromAmino(object: _126.MsgBeginUnlockingAllResponseAmino): _126.MsgBeginUnlockingAllResponse;
            toAmino(message: _126.MsgBeginUnlockingAllResponse): _126.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _126.MsgBeginUnlockingAllResponseAminoMsg): _126.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _126.MsgBeginUnlockingAllResponse): _126.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _126.MsgBeginUnlockingAllResponseProtoMsg): _126.MsgBeginUnlockingAllResponse;
            toProto(message: _126.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _126.MsgBeginUnlockingAllResponse): _126.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            encode(message: _126.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgBeginUnlocking;
            fromPartial(object: Partial<_126.MsgBeginUnlocking>): _126.MsgBeginUnlocking;
            fromAmino(object: _126.MsgBeginUnlockingAmino): _126.MsgBeginUnlocking;
            toAmino(message: _126.MsgBeginUnlocking): _126.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _126.MsgBeginUnlockingAminoMsg): _126.MsgBeginUnlocking;
            toAminoMsg(message: _126.MsgBeginUnlocking): _126.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _126.MsgBeginUnlockingProtoMsg): _126.MsgBeginUnlocking;
            toProto(message: _126.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _126.MsgBeginUnlocking): _126.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _126.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_126.MsgBeginUnlockingResponse>): _126.MsgBeginUnlockingResponse;
            fromAmino(object: _126.MsgBeginUnlockingResponseAmino): _126.MsgBeginUnlockingResponse;
            toAmino(message: _126.MsgBeginUnlockingResponse): _126.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _126.MsgBeginUnlockingResponseAminoMsg): _126.MsgBeginUnlockingResponse;
            toAminoMsg(message: _126.MsgBeginUnlockingResponse): _126.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _126.MsgBeginUnlockingResponseProtoMsg): _126.MsgBeginUnlockingResponse;
            toProto(message: _126.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _126.MsgBeginUnlockingResponse): _126.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            encode(message: _126.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExtendLockup;
            fromPartial(object: Partial<_126.MsgExtendLockup>): _126.MsgExtendLockup;
            fromAmino(object: _126.MsgExtendLockupAmino): _126.MsgExtendLockup;
            toAmino(message: _126.MsgExtendLockup): _126.MsgExtendLockupAmino;
            fromAminoMsg(object: _126.MsgExtendLockupAminoMsg): _126.MsgExtendLockup;
            toAminoMsg(message: _126.MsgExtendLockup): _126.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _126.MsgExtendLockupProtoMsg): _126.MsgExtendLockup;
            toProto(message: _126.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _126.MsgExtendLockup): _126.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            encode(message: _126.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExtendLockupResponse;
            fromPartial(object: Partial<_126.MsgExtendLockupResponse>): _126.MsgExtendLockupResponse;
            fromAmino(object: _126.MsgExtendLockupResponseAmino): _126.MsgExtendLockupResponse;
            toAmino(message: _126.MsgExtendLockupResponse): _126.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _126.MsgExtendLockupResponseAminoMsg): _126.MsgExtendLockupResponse;
            toAminoMsg(message: _126.MsgExtendLockupResponse): _126.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _126.MsgExtendLockupResponseProtoMsg): _126.MsgExtendLockupResponse;
            toProto(message: _126.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _126.MsgExtendLockupResponse): _126.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            encode(message: _126.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgForceUnlock;
            fromPartial(object: Partial<_126.MsgForceUnlock>): _126.MsgForceUnlock;
            fromAmino(object: _126.MsgForceUnlockAmino): _126.MsgForceUnlock;
            toAmino(message: _126.MsgForceUnlock): _126.MsgForceUnlockAmino;
            fromAminoMsg(object: _126.MsgForceUnlockAminoMsg): _126.MsgForceUnlock;
            toAminoMsg(message: _126.MsgForceUnlock): _126.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _126.MsgForceUnlockProtoMsg): _126.MsgForceUnlock;
            toProto(message: _126.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _126.MsgForceUnlock): _126.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            encode(message: _126.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgForceUnlockResponse;
            fromPartial(object: Partial<_126.MsgForceUnlockResponse>): _126.MsgForceUnlockResponse;
            fromAmino(object: _126.MsgForceUnlockResponseAmino): _126.MsgForceUnlockResponse;
            toAmino(message: _126.MsgForceUnlockResponse): _126.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _126.MsgForceUnlockResponseAminoMsg): _126.MsgForceUnlockResponse;
            toAminoMsg(message: _126.MsgForceUnlockResponse): _126.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _126.MsgForceUnlockResponseProtoMsg): _126.MsgForceUnlockResponse;
            toProto(message: _126.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _126.MsgForceUnlockResponse): _126.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            encode(_: _125.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ModuleBalanceRequest;
            fromPartial(_: Partial<_125.ModuleBalanceRequest>): _125.ModuleBalanceRequest;
            fromAmino(_: _125.ModuleBalanceRequestAmino): _125.ModuleBalanceRequest;
            toAmino(_: _125.ModuleBalanceRequest): _125.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _125.ModuleBalanceRequestAminoMsg): _125.ModuleBalanceRequest;
            toAminoMsg(message: _125.ModuleBalanceRequest): _125.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _125.ModuleBalanceRequestProtoMsg): _125.ModuleBalanceRequest;
            toProto(message: _125.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _125.ModuleBalanceRequest): _125.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            encode(message: _125.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ModuleBalanceResponse;
            fromPartial(object: Partial<_125.ModuleBalanceResponse>): _125.ModuleBalanceResponse;
            fromAmino(object: _125.ModuleBalanceResponseAmino): _125.ModuleBalanceResponse;
            toAmino(message: _125.ModuleBalanceResponse): _125.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _125.ModuleBalanceResponseAminoMsg): _125.ModuleBalanceResponse;
            toAminoMsg(message: _125.ModuleBalanceResponse): _125.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _125.ModuleBalanceResponseProtoMsg): _125.ModuleBalanceResponse;
            toProto(message: _125.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _125.ModuleBalanceResponse): _125.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            encode(_: _125.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_125.ModuleLockedAmountRequest>): _125.ModuleLockedAmountRequest;
            fromAmino(_: _125.ModuleLockedAmountRequestAmino): _125.ModuleLockedAmountRequest;
            toAmino(_: _125.ModuleLockedAmountRequest): _125.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _125.ModuleLockedAmountRequestAminoMsg): _125.ModuleLockedAmountRequest;
            toAminoMsg(message: _125.ModuleLockedAmountRequest): _125.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _125.ModuleLockedAmountRequestProtoMsg): _125.ModuleLockedAmountRequest;
            toProto(message: _125.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _125.ModuleLockedAmountRequest): _125.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            encode(message: _125.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_125.ModuleLockedAmountResponse>): _125.ModuleLockedAmountResponse;
            fromAmino(object: _125.ModuleLockedAmountResponseAmino): _125.ModuleLockedAmountResponse;
            toAmino(message: _125.ModuleLockedAmountResponse): _125.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _125.ModuleLockedAmountResponseAminoMsg): _125.ModuleLockedAmountResponse;
            toAminoMsg(message: _125.ModuleLockedAmountResponse): _125.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _125.ModuleLockedAmountResponseProtoMsg): _125.ModuleLockedAmountResponse;
            toProto(message: _125.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _125.ModuleLockedAmountResponse): _125.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _125.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_125.AccountUnlockableCoinsRequest>): _125.AccountUnlockableCoinsRequest;
            fromAmino(object: _125.AccountUnlockableCoinsRequestAmino): _125.AccountUnlockableCoinsRequest;
            toAmino(message: _125.AccountUnlockableCoinsRequest): _125.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _125.AccountUnlockableCoinsRequestAminoMsg): _125.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _125.AccountUnlockableCoinsRequest): _125.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockableCoinsRequestProtoMsg): _125.AccountUnlockableCoinsRequest;
            toProto(message: _125.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockableCoinsRequest): _125.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _125.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_125.AccountUnlockableCoinsResponse>): _125.AccountUnlockableCoinsResponse;
            fromAmino(object: _125.AccountUnlockableCoinsResponseAmino): _125.AccountUnlockableCoinsResponse;
            toAmino(message: _125.AccountUnlockableCoinsResponse): _125.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _125.AccountUnlockableCoinsResponseAminoMsg): _125.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _125.AccountUnlockableCoinsResponse): _125.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockableCoinsResponseProtoMsg): _125.AccountUnlockableCoinsResponse;
            toProto(message: _125.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockableCoinsResponse): _125.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _125.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_125.AccountUnlockingCoinsRequest>): _125.AccountUnlockingCoinsRequest;
            fromAmino(object: _125.AccountUnlockingCoinsRequestAmino): _125.AccountUnlockingCoinsRequest;
            toAmino(message: _125.AccountUnlockingCoinsRequest): _125.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _125.AccountUnlockingCoinsRequestAminoMsg): _125.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _125.AccountUnlockingCoinsRequest): _125.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockingCoinsRequestProtoMsg): _125.AccountUnlockingCoinsRequest;
            toProto(message: _125.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockingCoinsRequest): _125.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _125.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_125.AccountUnlockingCoinsResponse>): _125.AccountUnlockingCoinsResponse;
            fromAmino(object: _125.AccountUnlockingCoinsResponseAmino): _125.AccountUnlockingCoinsResponse;
            toAmino(message: _125.AccountUnlockingCoinsResponse): _125.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _125.AccountUnlockingCoinsResponseAminoMsg): _125.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _125.AccountUnlockingCoinsResponse): _125.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockingCoinsResponseProtoMsg): _125.AccountUnlockingCoinsResponse;
            toProto(message: _125.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockingCoinsResponse): _125.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            encode(message: _125.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_125.AccountLockedCoinsRequest>): _125.AccountLockedCoinsRequest;
            fromAmino(object: _125.AccountLockedCoinsRequestAmino): _125.AccountLockedCoinsRequest;
            toAmino(message: _125.AccountLockedCoinsRequest): _125.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _125.AccountLockedCoinsRequestAminoMsg): _125.AccountLockedCoinsRequest;
            toAminoMsg(message: _125.AccountLockedCoinsRequest): _125.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedCoinsRequestProtoMsg): _125.AccountLockedCoinsRequest;
            toProto(message: _125.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedCoinsRequest): _125.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            encode(message: _125.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_125.AccountLockedCoinsResponse>): _125.AccountLockedCoinsResponse;
            fromAmino(object: _125.AccountLockedCoinsResponseAmino): _125.AccountLockedCoinsResponse;
            toAmino(message: _125.AccountLockedCoinsResponse): _125.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _125.AccountLockedCoinsResponseAminoMsg): _125.AccountLockedCoinsResponse;
            toAminoMsg(message: _125.AccountLockedCoinsResponse): _125.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedCoinsResponseProtoMsg): _125.AccountLockedCoinsResponse;
            toProto(message: _125.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedCoinsResponse): _125.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _125.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_125.AccountLockedPastTimeRequest>): _125.AccountLockedPastTimeRequest;
            fromAmino(object: _125.AccountLockedPastTimeRequestAmino): _125.AccountLockedPastTimeRequest;
            toAmino(message: _125.AccountLockedPastTimeRequest): _125.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeRequestAminoMsg): _125.AccountLockedPastTimeRequest;
            toAminoMsg(message: _125.AccountLockedPastTimeRequest): _125.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeRequestProtoMsg): _125.AccountLockedPastTimeRequest;
            toProto(message: _125.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeRequest): _125.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _125.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_125.AccountLockedPastTimeResponse>): _125.AccountLockedPastTimeResponse;
            fromAmino(object: _125.AccountLockedPastTimeResponseAmino): _125.AccountLockedPastTimeResponse;
            toAmino(message: _125.AccountLockedPastTimeResponse): _125.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeResponseAminoMsg): _125.AccountLockedPastTimeResponse;
            toAminoMsg(message: _125.AccountLockedPastTimeResponse): _125.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeResponseProtoMsg): _125.AccountLockedPastTimeResponse;
            toProto(message: _125.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeResponse): _125.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_125.AccountLockedPastTimeNotUnlockingOnlyRequest>): _125.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _125.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _125.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): _125.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _125.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): _125.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _125.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): _125.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_125.AccountLockedPastTimeNotUnlockingOnlyResponse>): _125.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _125.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _125.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponse): _125.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _125.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponse): _125.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _125.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeNotUnlockingOnlyResponse): _125.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _125.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_125.AccountUnlockedBeforeTimeRequest>): _125.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _125.AccountUnlockedBeforeTimeRequestAmino): _125.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _125.AccountUnlockedBeforeTimeRequest): _125.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _125.AccountUnlockedBeforeTimeRequestAminoMsg): _125.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _125.AccountUnlockedBeforeTimeRequest): _125.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockedBeforeTimeRequestProtoMsg): _125.AccountUnlockedBeforeTimeRequest;
            toProto(message: _125.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockedBeforeTimeRequest): _125.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _125.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_125.AccountUnlockedBeforeTimeResponse>): _125.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _125.AccountUnlockedBeforeTimeResponseAmino): _125.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _125.AccountUnlockedBeforeTimeResponse): _125.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _125.AccountUnlockedBeforeTimeResponseAminoMsg): _125.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _125.AccountUnlockedBeforeTimeResponse): _125.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _125.AccountUnlockedBeforeTimeResponseProtoMsg): _125.AccountUnlockedBeforeTimeResponse;
            toProto(message: _125.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _125.AccountUnlockedBeforeTimeResponse): _125.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _125.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_125.AccountLockedPastTimeDenomRequest>): _125.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _125.AccountLockedPastTimeDenomRequestAmino): _125.AccountLockedPastTimeDenomRequest;
            toAmino(message: _125.AccountLockedPastTimeDenomRequest): _125.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeDenomRequestAminoMsg): _125.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _125.AccountLockedPastTimeDenomRequest): _125.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeDenomRequestProtoMsg): _125.AccountLockedPastTimeDenomRequest;
            toProto(message: _125.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeDenomRequest): _125.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _125.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_125.AccountLockedPastTimeDenomResponse>): _125.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _125.AccountLockedPastTimeDenomResponseAmino): _125.AccountLockedPastTimeDenomResponse;
            toAmino(message: _125.AccountLockedPastTimeDenomResponse): _125.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _125.AccountLockedPastTimeDenomResponseAminoMsg): _125.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _125.AccountLockedPastTimeDenomResponse): _125.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedPastTimeDenomResponseProtoMsg): _125.AccountLockedPastTimeDenomResponse;
            toProto(message: _125.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedPastTimeDenomResponse): _125.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            encode(message: _125.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LockedDenomRequest;
            fromPartial(object: Partial<_125.LockedDenomRequest>): _125.LockedDenomRequest;
            fromAmino(object: _125.LockedDenomRequestAmino): _125.LockedDenomRequest;
            toAmino(message: _125.LockedDenomRequest): _125.LockedDenomRequestAmino;
            fromAminoMsg(object: _125.LockedDenomRequestAminoMsg): _125.LockedDenomRequest;
            toAminoMsg(message: _125.LockedDenomRequest): _125.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _125.LockedDenomRequestProtoMsg): _125.LockedDenomRequest;
            toProto(message: _125.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _125.LockedDenomRequest): _125.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            encode(message: _125.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LockedDenomResponse;
            fromPartial(object: Partial<_125.LockedDenomResponse>): _125.LockedDenomResponse;
            fromAmino(object: _125.LockedDenomResponseAmino): _125.LockedDenomResponse;
            toAmino(message: _125.LockedDenomResponse): _125.LockedDenomResponseAmino;
            fromAminoMsg(object: _125.LockedDenomResponseAminoMsg): _125.LockedDenomResponse;
            toAminoMsg(message: _125.LockedDenomResponse): _125.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _125.LockedDenomResponseProtoMsg): _125.LockedDenomResponse;
            toProto(message: _125.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _125.LockedDenomResponse): _125.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            encode(message: _125.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LockedRequest;
            fromPartial(object: Partial<_125.LockedRequest>): _125.LockedRequest;
            fromAmino(object: _125.LockedRequestAmino): _125.LockedRequest;
            toAmino(message: _125.LockedRequest): _125.LockedRequestAmino;
            fromAminoMsg(object: _125.LockedRequestAminoMsg): _125.LockedRequest;
            toAminoMsg(message: _125.LockedRequest): _125.LockedRequestAminoMsg;
            fromProtoMsg(message: _125.LockedRequestProtoMsg): _125.LockedRequest;
            toProto(message: _125.LockedRequest): Uint8Array;
            toProtoMsg(message: _125.LockedRequest): _125.LockedRequestProtoMsg;
        };
        LockedResponse: {
            encode(message: _125.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LockedResponse;
            fromPartial(object: Partial<_125.LockedResponse>): _125.LockedResponse;
            fromAmino(object: _125.LockedResponseAmino): _125.LockedResponse;
            toAmino(message: _125.LockedResponse): _125.LockedResponseAmino;
            fromAminoMsg(object: _125.LockedResponseAminoMsg): _125.LockedResponse;
            toAminoMsg(message: _125.LockedResponse): _125.LockedResponseAminoMsg;
            fromProtoMsg(message: _125.LockedResponseProtoMsg): _125.LockedResponse;
            toProto(message: _125.LockedResponse): Uint8Array;
            toProtoMsg(message: _125.LockedResponse): _125.LockedResponseProtoMsg;
        };
        NextLockIDRequest: {
            encode(_: _125.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.NextLockIDRequest;
            fromPartial(_: Partial<_125.NextLockIDRequest>): _125.NextLockIDRequest;
            fromAmino(_: _125.NextLockIDRequestAmino): _125.NextLockIDRequest;
            toAmino(_: _125.NextLockIDRequest): _125.NextLockIDRequestAmino;
            fromAminoMsg(object: _125.NextLockIDRequestAminoMsg): _125.NextLockIDRequest;
            toAminoMsg(message: _125.NextLockIDRequest): _125.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _125.NextLockIDRequestProtoMsg): _125.NextLockIDRequest;
            toProto(message: _125.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _125.NextLockIDRequest): _125.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            encode(message: _125.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.NextLockIDResponse;
            fromPartial(object: Partial<_125.NextLockIDResponse>): _125.NextLockIDResponse;
            fromAmino(object: _125.NextLockIDResponseAmino): _125.NextLockIDResponse;
            toAmino(message: _125.NextLockIDResponse): _125.NextLockIDResponseAmino;
            fromAminoMsg(object: _125.NextLockIDResponseAminoMsg): _125.NextLockIDResponse;
            toAminoMsg(message: _125.NextLockIDResponse): _125.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _125.NextLockIDResponseProtoMsg): _125.NextLockIDResponse;
            toProto(message: _125.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _125.NextLockIDResponse): _125.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _125.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_125.SyntheticLockupsByLockupIDRequest>): _125.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _125.SyntheticLockupsByLockupIDRequestAmino): _125.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _125.SyntheticLockupsByLockupIDRequest): _125.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _125.SyntheticLockupsByLockupIDRequestAminoMsg): _125.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _125.SyntheticLockupsByLockupIDRequest): _125.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _125.SyntheticLockupsByLockupIDRequestProtoMsg): _125.SyntheticLockupsByLockupIDRequest;
            toProto(message: _125.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _125.SyntheticLockupsByLockupIDRequest): _125.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _125.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_125.SyntheticLockupsByLockupIDResponse>): _125.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _125.SyntheticLockupsByLockupIDResponseAmino): _125.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _125.SyntheticLockupsByLockupIDResponse): _125.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _125.SyntheticLockupsByLockupIDResponseAminoMsg): _125.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _125.SyntheticLockupsByLockupIDResponse): _125.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _125.SyntheticLockupsByLockupIDResponseProtoMsg): _125.SyntheticLockupsByLockupIDResponse;
            toProto(message: _125.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _125.SyntheticLockupsByLockupIDResponse): _125.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _125.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationRequest>): _125.AccountLockedLongerDurationRequest;
            fromAmino(object: _125.AccountLockedLongerDurationRequestAmino): _125.AccountLockedLongerDurationRequest;
            toAmino(message: _125.AccountLockedLongerDurationRequest): _125.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationRequestAminoMsg): _125.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _125.AccountLockedLongerDurationRequest): _125.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationRequestProtoMsg): _125.AccountLockedLongerDurationRequest;
            toProto(message: _125.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationRequest): _125.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _125.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationResponse>): _125.AccountLockedLongerDurationResponse;
            fromAmino(object: _125.AccountLockedLongerDurationResponseAmino): _125.AccountLockedLongerDurationResponse;
            toAmino(message: _125.AccountLockedLongerDurationResponse): _125.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationResponseAminoMsg): _125.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _125.AccountLockedLongerDurationResponse): _125.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationResponseProtoMsg): _125.AccountLockedLongerDurationResponse;
            toProto(message: _125.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationResponse): _125.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            encode(message: _125.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedDurationRequest;
            fromPartial(object: Partial<_125.AccountLockedDurationRequest>): _125.AccountLockedDurationRequest;
            fromAmino(object: _125.AccountLockedDurationRequestAmino): _125.AccountLockedDurationRequest;
            toAmino(message: _125.AccountLockedDurationRequest): _125.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _125.AccountLockedDurationRequestAminoMsg): _125.AccountLockedDurationRequest;
            toAminoMsg(message: _125.AccountLockedDurationRequest): _125.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedDurationRequestProtoMsg): _125.AccountLockedDurationRequest;
            toProto(message: _125.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedDurationRequest): _125.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            encode(message: _125.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedDurationResponse;
            fromPartial(object: Partial<_125.AccountLockedDurationResponse>): _125.AccountLockedDurationResponse;
            fromAmino(object: _125.AccountLockedDurationResponseAmino): _125.AccountLockedDurationResponse;
            toAmino(message: _125.AccountLockedDurationResponse): _125.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _125.AccountLockedDurationResponseAminoMsg): _125.AccountLockedDurationResponse;
            toAminoMsg(message: _125.AccountLockedDurationResponse): _125.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedDurationResponseProtoMsg): _125.AccountLockedDurationResponse;
            toProto(message: _125.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedDurationResponse): _125.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _125.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _125.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _125.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): _125.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _125.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): _125.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _125.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): _125.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _125.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _125.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _125.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponse): _125.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _125.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponse): _125.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _125.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationNotUnlockingOnlyResponse): _125.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _125.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationDenomRequest>): _125.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _125.AccountLockedLongerDurationDenomRequestAmino): _125.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _125.AccountLockedLongerDurationDenomRequest): _125.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationDenomRequestAminoMsg): _125.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _125.AccountLockedLongerDurationDenomRequest): _125.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationDenomRequestProtoMsg): _125.AccountLockedLongerDurationDenomRequest;
            toProto(message: _125.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationDenomRequest): _125.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _125.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_125.AccountLockedLongerDurationDenomResponse>): _125.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _125.AccountLockedLongerDurationDenomResponseAmino): _125.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _125.AccountLockedLongerDurationDenomResponse): _125.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _125.AccountLockedLongerDurationDenomResponseAminoMsg): _125.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _125.AccountLockedLongerDurationDenomResponse): _125.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _125.AccountLockedLongerDurationDenomResponseProtoMsg): _125.AccountLockedLongerDurationDenomResponse;
            toProto(message: _125.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _125.AccountLockedLongerDurationDenomResponse): _125.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _125.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryParamsRequest;
            fromPartial(_: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
            fromAmino(_: _125.QueryParamsRequestAmino): _125.QueryParamsRequest;
            toAmino(_: _125.QueryParamsRequest): _125.QueryParamsRequestAmino;
            fromAminoMsg(object: _125.QueryParamsRequestAminoMsg): _125.QueryParamsRequest;
            toAminoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _125.QueryParamsRequestProtoMsg): _125.QueryParamsRequest;
            toProto(message: _125.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _125.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryParamsResponse;
            fromPartial(object: Partial<_125.QueryParamsResponse>): _125.QueryParamsResponse;
            fromAmino(object: _125.QueryParamsResponseAmino): _125.QueryParamsResponse;
            toAmino(message: _125.QueryParamsResponse): _125.QueryParamsResponseAmino;
            fromAminoMsg(object: _125.QueryParamsResponseAminoMsg): _125.QueryParamsResponse;
            toAminoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _125.QueryParamsResponseProtoMsg): _125.QueryParamsResponse;
            toProto(message: _125.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseProtoMsg;
        };
        Params: {
            encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
            fromPartial(object: Partial<_124.Params>): _124.Params;
            fromAmino(object: _124.ParamsAmino): _124.Params;
            toAmino(message: _124.Params): _124.ParamsAmino;
            fromAminoMsg(object: _124.ParamsAminoMsg): _124.Params;
            toAminoMsg(message: _124.Params): _124.ParamsAminoMsg;
            fromProtoMsg(message: _124.ParamsProtoMsg): _124.Params;
            toProto(message: _124.Params): Uint8Array;
            toProtoMsg(message: _124.Params): _124.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _123.LockQueryType;
        lockQueryTypeToJSON(object: _123.LockQueryType): string;
        LockQueryType: typeof _123.LockQueryType;
        LockQueryTypeSDKType: typeof _123.LockQueryType;
        LockQueryTypeAmino: typeof _123.LockQueryType;
        PeriodLock: {
            encode(message: _123.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PeriodLock;
            fromPartial(object: Partial<_123.PeriodLock>): _123.PeriodLock;
            fromAmino(object: _123.PeriodLockAmino): _123.PeriodLock;
            toAmino(message: _123.PeriodLock): _123.PeriodLockAmino;
            fromAminoMsg(object: _123.PeriodLockAminoMsg): _123.PeriodLock;
            toAminoMsg(message: _123.PeriodLock): _123.PeriodLockAminoMsg;
            fromProtoMsg(message: _123.PeriodLockProtoMsg): _123.PeriodLock;
            toProto(message: _123.PeriodLock): Uint8Array;
            toProtoMsg(message: _123.PeriodLock): _123.PeriodLockProtoMsg;
        };
        QueryCondition: {
            encode(message: _123.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryCondition;
            fromPartial(object: Partial<_123.QueryCondition>): _123.QueryCondition;
            fromAmino(object: _123.QueryConditionAmino): _123.QueryCondition;
            toAmino(message: _123.QueryCondition): _123.QueryConditionAmino;
            fromAminoMsg(object: _123.QueryConditionAminoMsg): _123.QueryCondition;
            toAminoMsg(message: _123.QueryCondition): _123.QueryConditionAminoMsg;
            fromProtoMsg(message: _123.QueryConditionProtoMsg): _123.QueryCondition;
            toProto(message: _123.QueryCondition): Uint8Array;
            toProtoMsg(message: _123.QueryCondition): _123.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            encode(message: _123.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SyntheticLock;
            fromPartial(object: Partial<_123.SyntheticLock>): _123.SyntheticLock;
            fromAmino(object: _123.SyntheticLockAmino): _123.SyntheticLock;
            toAmino(message: _123.SyntheticLock): _123.SyntheticLockAmino;
            fromAminoMsg(object: _123.SyntheticLockAminoMsg): _123.SyntheticLock;
            toAminoMsg(message: _123.SyntheticLock): _123.SyntheticLockAminoMsg;
            fromProtoMsg(message: _123.SyntheticLockProtoMsg): _123.SyntheticLock;
            toProto(message: _123.SyntheticLock): Uint8Array;
            toProtoMsg(message: _123.SyntheticLock): _123.SyntheticLockProtoMsg;
        };
        GenesisState: {
            encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
            fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
            fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
            toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
            fromAminoMsg(object: _122.GenesisStateAminoMsg): _122.GenesisState;
            toAminoMsg(message: _122.GenesisState): _122.GenesisStateAminoMsg;
            fromProtoMsg(message: _122.GenesisStateProtoMsg): _122.GenesisState;
            toProto(message: _122.GenesisState): Uint8Array;
            toProtoMsg(message: _122.GenesisState): _122.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                epochProvisions(request?: _129.QueryEpochProvisionsRequest): Promise<_129.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsRequest;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                toAminoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsResponse;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                toAminoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _129.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_129.QueryEpochProvisionsRequest>): _129.QueryEpochProvisionsRequest;
                fromAmino(_: _129.QueryEpochProvisionsRequestAmino): _129.QueryEpochProvisionsRequest;
                toAmino(_: _129.QueryEpochProvisionsRequest): _129.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _129.QueryEpochProvisionsRequestAminoMsg): _129.QueryEpochProvisionsRequest;
                toAminoMsg(message: _129.QueryEpochProvisionsRequest): _129.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryEpochProvisionsRequestProtoMsg): _129.QueryEpochProvisionsRequest;
                toProto(message: _129.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryEpochProvisionsRequest): _129.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _129.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_129.QueryEpochProvisionsResponse>): _129.QueryEpochProvisionsResponse;
                fromAmino(object: _129.QueryEpochProvisionsResponseAmino): _129.QueryEpochProvisionsResponse;
                toAmino(message: _129.QueryEpochProvisionsResponse): _129.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _129.QueryEpochProvisionsResponseAminoMsg): _129.QueryEpochProvisionsResponse;
                toAminoMsg(message: _129.QueryEpochProvisionsResponse): _129.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryEpochProvisionsResponseProtoMsg): _129.QueryEpochProvisionsResponse;
                toProto(message: _129.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryEpochProvisionsResponse): _129.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _128.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Minter;
                fromPartial(object: Partial<_128.Minter>): _128.Minter;
                fromAmino(object: _128.MinterAmino): _128.Minter;
                toAmino(message: _128.Minter): _128.MinterAmino;
                fromAminoMsg(object: _128.MinterAminoMsg): _128.Minter;
                toAminoMsg(message: _128.Minter): _128.MinterAminoMsg;
                fromProtoMsg(message: _128.MinterProtoMsg): _128.Minter;
                toProto(message: _128.Minter): Uint8Array;
                toProtoMsg(message: _128.Minter): _128.MinterProtoMsg;
            };
            WeightedAddress: {
                encode(message: _128.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.WeightedAddress;
                fromPartial(object: Partial<_128.WeightedAddress>): _128.WeightedAddress;
                fromAmino(object: _128.WeightedAddressAmino): _128.WeightedAddress;
                toAmino(message: _128.WeightedAddress): _128.WeightedAddressAmino;
                fromAminoMsg(object: _128.WeightedAddressAminoMsg): _128.WeightedAddress;
                toAminoMsg(message: _128.WeightedAddress): _128.WeightedAddressAminoMsg;
                fromProtoMsg(message: _128.WeightedAddressProtoMsg): _128.WeightedAddress;
                toProto(message: _128.WeightedAddress): Uint8Array;
                toProtoMsg(message: _128.WeightedAddress): _128.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                encode(message: _128.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.DistributionProportions;
                fromPartial(object: Partial<_128.DistributionProportions>): _128.DistributionProportions;
                fromAmino(object: _128.DistributionProportionsAmino): _128.DistributionProportions;
                toAmino(message: _128.DistributionProportions): _128.DistributionProportionsAmino;
                fromAminoMsg(object: _128.DistributionProportionsAminoMsg): _128.DistributionProportions;
                toAminoMsg(message: _128.DistributionProportions): _128.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _128.DistributionProportionsProtoMsg): _128.DistributionProportions;
                toProto(message: _128.DistributionProportions): Uint8Array;
                toProtoMsg(message: _128.DistributionProportions): _128.DistributionProportionsProtoMsg;
            };
            Params: {
                encode(message: _128.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
                fromAmino(object: _128.ParamsAmino): _128.Params;
                toAmino(message: _128.Params): _128.ParamsAmino;
                fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
                fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                toProto(message: _128.Params): Uint8Array;
                toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
                toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
                fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
                toAminoMsg(message: _127.GenesisState): _127.GenesisStateAminoMsg;
                fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
                toProto(message: _127.GenesisState): Uint8Array;
                toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _133.QueryGaugeIdsRequest): Promise<_133.QueryGaugeIdsResponse>;
                distrInfo(request?: _133.QueryDistrInfoRequest): Promise<_133.QueryDistrInfoResponse>;
                params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                lockableDurations(request?: _133.QueryLockableDurationsRequest): Promise<_133.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _133.QueryIncentivizedPoolsRequest): Promise<_133.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _133.QueryExternalIncentiveGaugesRequest): Promise<_133.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _133.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_133.QueryGaugeIdsRequest>): _133.QueryGaugeIdsRequest;
                fromAmino(object: _133.QueryGaugeIdsRequestAmino): _133.QueryGaugeIdsRequest;
                toAmino(message: _133.QueryGaugeIdsRequest): _133.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _133.QueryGaugeIdsRequestAminoMsg): _133.QueryGaugeIdsRequest;
                toAminoMsg(message: _133.QueryGaugeIdsRequest): _133.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryGaugeIdsRequestProtoMsg): _133.QueryGaugeIdsRequest;
                toProto(message: _133.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryGaugeIdsRequest): _133.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                encode(message: _133.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_133.QueryGaugeIdsResponse>): _133.QueryGaugeIdsResponse;
                fromAmino(object: _133.QueryGaugeIdsResponseAmino): _133.QueryGaugeIdsResponse;
                toAmino(message: _133.QueryGaugeIdsResponse): _133.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _133.QueryGaugeIdsResponseAminoMsg): _133.QueryGaugeIdsResponse;
                toAminoMsg(message: _133.QueryGaugeIdsResponse): _133.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryGaugeIdsResponseProtoMsg): _133.QueryGaugeIdsResponse;
                toProto(message: _133.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryGaugeIdsResponse): _133.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _133.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_133.QueryGaugeIdsResponse_GaugeIdWithDuration>): _133.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _133.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _133.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _133.QueryGaugeIdsResponse_GaugeIdWithDuration): _133.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _133.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _133.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _133.QueryGaugeIdsResponse_GaugeIdWithDuration): _133.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _133.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _133.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _133.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _133.QueryGaugeIdsResponse_GaugeIdWithDuration): _133.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                encode(_: _133.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryDistrInfoRequest;
                fromPartial(_: Partial<_133.QueryDistrInfoRequest>): _133.QueryDistrInfoRequest;
                fromAmino(_: _133.QueryDistrInfoRequestAmino): _133.QueryDistrInfoRequest;
                toAmino(_: _133.QueryDistrInfoRequest): _133.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _133.QueryDistrInfoRequestAminoMsg): _133.QueryDistrInfoRequest;
                toAminoMsg(message: _133.QueryDistrInfoRequest): _133.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _133.QueryDistrInfoRequestProtoMsg): _133.QueryDistrInfoRequest;
                toProto(message: _133.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _133.QueryDistrInfoRequest): _133.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                encode(message: _133.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryDistrInfoResponse;
                fromPartial(object: Partial<_133.QueryDistrInfoResponse>): _133.QueryDistrInfoResponse;
                fromAmino(object: _133.QueryDistrInfoResponseAmino): _133.QueryDistrInfoResponse;
                toAmino(message: _133.QueryDistrInfoResponse): _133.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _133.QueryDistrInfoResponseAminoMsg): _133.QueryDistrInfoResponse;
                toAminoMsg(message: _133.QueryDistrInfoResponse): _133.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _133.QueryDistrInfoResponseProtoMsg): _133.QueryDistrInfoResponse;
                toProto(message: _133.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _133.QueryDistrInfoResponse): _133.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
                fromAmino(_: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
                toAmino(_: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
                fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
                toAminoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
                toProto(message: _133.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
                fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
                toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
                fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
                toAminoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
                toProto(message: _133.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                encode(_: _133.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_133.QueryLockableDurationsRequest>): _133.QueryLockableDurationsRequest;
                fromAmino(_: _133.QueryLockableDurationsRequestAmino): _133.QueryLockableDurationsRequest;
                toAmino(_: _133.QueryLockableDurationsRequest): _133.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _133.QueryLockableDurationsRequestAminoMsg): _133.QueryLockableDurationsRequest;
                toAminoMsg(message: _133.QueryLockableDurationsRequest): _133.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryLockableDurationsRequestProtoMsg): _133.QueryLockableDurationsRequest;
                toProto(message: _133.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryLockableDurationsRequest): _133.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                encode(message: _133.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_133.QueryLockableDurationsResponse>): _133.QueryLockableDurationsResponse;
                fromAmino(object: _133.QueryLockableDurationsResponseAmino): _133.QueryLockableDurationsResponse;
                toAmino(message: _133.QueryLockableDurationsResponse): _133.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _133.QueryLockableDurationsResponseAminoMsg): _133.QueryLockableDurationsResponse;
                toAminoMsg(message: _133.QueryLockableDurationsResponse): _133.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryLockableDurationsResponseProtoMsg): _133.QueryLockableDurationsResponse;
                toProto(message: _133.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryLockableDurationsResponse): _133.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _133.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_133.QueryIncentivizedPoolsRequest>): _133.QueryIncentivizedPoolsRequest;
                fromAmino(_: _133.QueryIncentivizedPoolsRequestAmino): _133.QueryIncentivizedPoolsRequest;
                toAmino(_: _133.QueryIncentivizedPoolsRequest): _133.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _133.QueryIncentivizedPoolsRequestAminoMsg): _133.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _133.QueryIncentivizedPoolsRequest): _133.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryIncentivizedPoolsRequestProtoMsg): _133.QueryIncentivizedPoolsRequest;
                toProto(message: _133.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryIncentivizedPoolsRequest): _133.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                encode(message: _133.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.IncentivizedPool;
                fromPartial(object: Partial<_133.IncentivizedPool>): _133.IncentivizedPool;
                fromAmino(object: _133.IncentivizedPoolAmino): _133.IncentivizedPool;
                toAmino(message: _133.IncentivizedPool): _133.IncentivizedPoolAmino;
                fromAminoMsg(object: _133.IncentivizedPoolAminoMsg): _133.IncentivizedPool;
                toAminoMsg(message: _133.IncentivizedPool): _133.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _133.IncentivizedPoolProtoMsg): _133.IncentivizedPool;
                toProto(message: _133.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _133.IncentivizedPool): _133.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _133.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_133.QueryIncentivizedPoolsResponse>): _133.QueryIncentivizedPoolsResponse;
                fromAmino(object: _133.QueryIncentivizedPoolsResponseAmino): _133.QueryIncentivizedPoolsResponse;
                toAmino(message: _133.QueryIncentivizedPoolsResponse): _133.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _133.QueryIncentivizedPoolsResponseAminoMsg): _133.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _133.QueryIncentivizedPoolsResponse): _133.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryIncentivizedPoolsResponseProtoMsg): _133.QueryIncentivizedPoolsResponse;
                toProto(message: _133.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryIncentivizedPoolsResponse): _133.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _133.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_133.QueryExternalIncentiveGaugesRequest>): _133.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _133.QueryExternalIncentiveGaugesRequestAmino): _133.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _133.QueryExternalIncentiveGaugesRequest): _133.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _133.QueryExternalIncentiveGaugesRequestAminoMsg): _133.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _133.QueryExternalIncentiveGaugesRequest): _133.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _133.QueryExternalIncentiveGaugesRequestProtoMsg): _133.QueryExternalIncentiveGaugesRequest;
                toProto(message: _133.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryExternalIncentiveGaugesRequest): _133.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _133.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_133.QueryExternalIncentiveGaugesResponse>): _133.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _133.QueryExternalIncentiveGaugesResponseAmino): _133.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _133.QueryExternalIncentiveGaugesResponse): _133.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _133.QueryExternalIncentiveGaugesResponseAminoMsg): _133.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _133.QueryExternalIncentiveGaugesResponse): _133.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _133.QueryExternalIncentiveGaugesResponseProtoMsg): _133.QueryExternalIncentiveGaugesResponse;
                toProto(message: _133.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryExternalIncentiveGaugesResponse): _133.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromPartial(object: Partial<_132.Params>): _132.Params;
                fromAmino(object: _132.ParamsAmino): _132.Params;
                toAmino(message: _132.Params): _132.ParamsAmino;
                fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
                toAminoMsg(message: _132.Params): _132.ParamsAminoMsg;
                fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
                toProto(message: _132.Params): Uint8Array;
                toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                encode(message: _132.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LockableDurationsInfo;
                fromPartial(object: Partial<_132.LockableDurationsInfo>): _132.LockableDurationsInfo;
                fromAmino(object: _132.LockableDurationsInfoAmino): _132.LockableDurationsInfo;
                toAmino(message: _132.LockableDurationsInfo): _132.LockableDurationsInfoAmino;
                fromAminoMsg(object: _132.LockableDurationsInfoAminoMsg): _132.LockableDurationsInfo;
                toAminoMsg(message: _132.LockableDurationsInfo): _132.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _132.LockableDurationsInfoProtoMsg): _132.LockableDurationsInfo;
                toProto(message: _132.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _132.LockableDurationsInfo): _132.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                encode(message: _132.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DistrInfo;
                fromPartial(object: Partial<_132.DistrInfo>): _132.DistrInfo;
                fromAmino(object: _132.DistrInfoAmino): _132.DistrInfo;
                toAmino(message: _132.DistrInfo): _132.DistrInfoAmino;
                fromAminoMsg(object: _132.DistrInfoAminoMsg): _132.DistrInfo;
                toAminoMsg(message: _132.DistrInfo): _132.DistrInfoAminoMsg;
                fromProtoMsg(message: _132.DistrInfoProtoMsg): _132.DistrInfo;
                toProto(message: _132.DistrInfo): Uint8Array;
                toProtoMsg(message: _132.DistrInfo): _132.DistrInfoProtoMsg;
            };
            DistrRecord: {
                encode(message: _132.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DistrRecord;
                fromPartial(object: Partial<_132.DistrRecord>): _132.DistrRecord;
                fromAmino(object: _132.DistrRecordAmino): _132.DistrRecord;
                toAmino(message: _132.DistrRecord): _132.DistrRecordAmino;
                fromAminoMsg(object: _132.DistrRecordAminoMsg): _132.DistrRecord;
                toAminoMsg(message: _132.DistrRecord): _132.DistrRecordAminoMsg;
                fromProtoMsg(message: _132.DistrRecordProtoMsg): _132.DistrRecord;
                toProto(message: _132.DistrRecord): Uint8Array;
                toProtoMsg(message: _132.DistrRecord): _132.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                encode(message: _132.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolToGauge;
                fromPartial(object: Partial<_132.PoolToGauge>): _132.PoolToGauge;
                fromAmino(object: _132.PoolToGaugeAmino): _132.PoolToGauge;
                toAmino(message: _132.PoolToGauge): _132.PoolToGaugeAmino;
                fromAminoMsg(object: _132.PoolToGaugeAminoMsg): _132.PoolToGauge;
                toAminoMsg(message: _132.PoolToGauge): _132.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _132.PoolToGaugeProtoMsg): _132.PoolToGauge;
                toProto(message: _132.PoolToGauge): Uint8Array;
                toProtoMsg(message: _132.PoolToGauge): _132.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                encode(message: _132.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolToGauges;
                fromPartial(object: Partial<_132.PoolToGauges>): _132.PoolToGauges;
                fromAmino(object: _132.PoolToGaugesAmino): _132.PoolToGauges;
                toAmino(message: _132.PoolToGauges): _132.PoolToGaugesAmino;
                fromAminoMsg(object: _132.PoolToGaugesAminoMsg): _132.PoolToGauges;
                toAminoMsg(message: _132.PoolToGauges): _132.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _132.PoolToGaugesProtoMsg): _132.PoolToGauges;
                toProto(message: _132.PoolToGauges): Uint8Array;
                toProtoMsg(message: _132.PoolToGauges): _132.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _131.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_131.ReplacePoolIncentivesProposal>): _131.ReplacePoolIncentivesProposal;
                fromAmino(object: _131.ReplacePoolIncentivesProposalAmino): _131.ReplacePoolIncentivesProposal;
                toAmino(message: _131.ReplacePoolIncentivesProposal): _131.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _131.ReplacePoolIncentivesProposalAminoMsg): _131.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _131.ReplacePoolIncentivesProposal): _131.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _131.ReplacePoolIncentivesProposalProtoMsg): _131.ReplacePoolIncentivesProposal;
                toProto(message: _131.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _131.ReplacePoolIncentivesProposal): _131.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _131.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_131.UpdatePoolIncentivesProposal>): _131.UpdatePoolIncentivesProposal;
                fromAmino(object: _131.UpdatePoolIncentivesProposalAmino): _131.UpdatePoolIncentivesProposal;
                toAmino(message: _131.UpdatePoolIncentivesProposal): _131.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _131.UpdatePoolIncentivesProposalAminoMsg): _131.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _131.UpdatePoolIncentivesProposal): _131.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _131.UpdatePoolIncentivesProposalProtoMsg): _131.UpdatePoolIncentivesProposal;
                toProto(message: _131.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _131.UpdatePoolIncentivesProposal): _131.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                fromAmino(object: _130.GenesisStateAmino): _130.GenesisState;
                toAmino(message: _130.GenesisState): _130.GenesisStateAmino;
                fromAminoMsg(object: _130.GenesisStateAminoMsg): _130.GenesisState;
                toAminoMsg(message: _130.GenesisState): _130.GenesisStateAminoMsg;
                fromProtoMsg(message: _130.GenesisStateProtoMsg): _130.GenesisState;
                toProto(message: _130.GenesisState): Uint8Array;
                toProtoMsg(message: _130.GenesisState): _130.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _136.ParamsRequest): Promise<_136.ParamsResponse>;
                estimateSwapExactAmountIn(request: _136.EstimateSwapExactAmountInRequest): Promise<_136.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _136.EstimateSinglePoolSwapExactAmountInRequest): Promise<_136.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _136.EstimateSwapExactAmountOutRequest): Promise<_136.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _136.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_136.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _136.NumPoolsRequest): Promise<_136.NumPoolsResponse>;
                pool(request: _136.PoolRequest): Promise<_136.PoolResponse>;
                allPools(request: _136.AllPoolsRequest): Promise<_136.AllPoolsResponse>;
                spotPrice(request: _136.SpotPriceRequest): Promise<_136.SpotPriceResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _138.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _138.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _138.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSwapExactAmountIn) => _138.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _138.MsgSwapExactAmountInAmino) => _138.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSwapExactAmountOut) => _138.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _138.MsgSwapExactAmountOutAmino) => _138.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _138.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_138.MsgSwapExactAmountIn>): _138.MsgSwapExactAmountIn;
                fromAmino(object: _138.MsgSwapExactAmountInAmino): _138.MsgSwapExactAmountIn;
                toAmino(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountInAminoMsg): _138.MsgSwapExactAmountIn;
                toAminoMsg(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountInProtoMsg): _138.MsgSwapExactAmountIn;
                toProto(message: _138.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountIn): _138.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _138.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_138.MsgSwapExactAmountInResponse>): _138.MsgSwapExactAmountInResponse;
                fromAmino(object: _138.MsgSwapExactAmountInResponseAmino): _138.MsgSwapExactAmountInResponse;
                toAmino(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountInResponseAminoMsg): _138.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountInResponseProtoMsg): _138.MsgSwapExactAmountInResponse;
                toProto(message: _138.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountInResponse): _138.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                encode(message: _138.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_138.MsgSwapExactAmountOut>): _138.MsgSwapExactAmountOut;
                fromAmino(object: _138.MsgSwapExactAmountOutAmino): _138.MsgSwapExactAmountOut;
                toAmino(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountOutAminoMsg): _138.MsgSwapExactAmountOut;
                toAminoMsg(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountOutProtoMsg): _138.MsgSwapExactAmountOut;
                toProto(message: _138.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountOut): _138.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _138.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_138.MsgSwapExactAmountOutResponse>): _138.MsgSwapExactAmountOutResponse;
                fromAmino(object: _138.MsgSwapExactAmountOutResponseAmino): _138.MsgSwapExactAmountOutResponse;
                toAmino(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _138.MsgSwapExactAmountOutResponseAminoMsg): _138.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _138.MsgSwapExactAmountOutResponseProtoMsg): _138.MsgSwapExactAmountOutResponse;
                toProto(message: _138.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSwapExactAmountOutResponse): _138.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                encode(message: _137.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SwapAmountInRoute;
                fromPartial(object: Partial<_137.SwapAmountInRoute>): _137.SwapAmountInRoute;
                fromAmino(object: _137.SwapAmountInRouteAmino): _137.SwapAmountInRoute;
                toAmino(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteAmino;
                fromAminoMsg(object: _137.SwapAmountInRouteAminoMsg): _137.SwapAmountInRoute;
                toAminoMsg(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _137.SwapAmountInRouteProtoMsg): _137.SwapAmountInRoute;
                toProto(message: _137.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _137.SwapAmountInRoute): _137.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                encode(message: _137.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SwapAmountOutRoute;
                fromPartial(object: Partial<_137.SwapAmountOutRoute>): _137.SwapAmountOutRoute;
                fromAmino(object: _137.SwapAmountOutRouteAmino): _137.SwapAmountOutRoute;
                toAmino(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _137.SwapAmountOutRouteAminoMsg): _137.SwapAmountOutRoute;
                toAminoMsg(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _137.SwapAmountOutRouteProtoMsg): _137.SwapAmountOutRoute;
                toProto(message: _137.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _137.SwapAmountOutRoute): _137.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                encode(_: _136.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ParamsRequest;
                fromPartial(_: Partial<_136.ParamsRequest>): _136.ParamsRequest;
                fromAmino(_: _136.ParamsRequestAmino): _136.ParamsRequest;
                toAmino(_: _136.ParamsRequest): _136.ParamsRequestAmino;
                fromAminoMsg(object: _136.ParamsRequestAminoMsg): _136.ParamsRequest;
                toAminoMsg(message: _136.ParamsRequest): _136.ParamsRequestAminoMsg;
                fromProtoMsg(message: _136.ParamsRequestProtoMsg): _136.ParamsRequest;
                toProto(message: _136.ParamsRequest): Uint8Array;
                toProtoMsg(message: _136.ParamsRequest): _136.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                encode(message: _136.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ParamsResponse;
                fromPartial(object: Partial<_136.ParamsResponse>): _136.ParamsResponse;
                fromAmino(object: _136.ParamsResponseAmino): _136.ParamsResponse;
                toAmino(message: _136.ParamsResponse): _136.ParamsResponseAmino;
                fromAminoMsg(object: _136.ParamsResponseAminoMsg): _136.ParamsResponse;
                toAminoMsg(message: _136.ParamsResponse): _136.ParamsResponseAminoMsg;
                fromProtoMsg(message: _136.ParamsResponseProtoMsg): _136.ParamsResponse;
                toProto(message: _136.ParamsResponse): Uint8Array;
                toProtoMsg(message: _136.ParamsResponse): _136.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _136.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountInRequest>): _136.EstimateSwapExactAmountInRequest;
                fromAmino(object: _136.EstimateSwapExactAmountInRequestAmino): _136.EstimateSwapExactAmountInRequest;
                toAmino(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountInRequestAminoMsg): _136.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountInRequestProtoMsg): _136.EstimateSwapExactAmountInRequest;
                toProto(message: _136.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountInRequest): _136.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                encode(message: _136.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_136.EstimateSinglePoolSwapExactAmountInRequest>): _136.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _136.EstimateSinglePoolSwapExactAmountInRequestAmino): _136.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _136.EstimateSinglePoolSwapExactAmountInRequest): _136.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _136.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _136.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _136.EstimateSinglePoolSwapExactAmountInRequest): _136.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _136.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _136.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSinglePoolSwapExactAmountInRequest): _136.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _136.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountInResponse>): _136.EstimateSwapExactAmountInResponse;
                fromAmino(object: _136.EstimateSwapExactAmountInResponseAmino): _136.EstimateSwapExactAmountInResponse;
                toAmino(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountInResponseAminoMsg): _136.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountInResponseProtoMsg): _136.EstimateSwapExactAmountInResponse;
                toProto(message: _136.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountInResponse): _136.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _136.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountOutRequest>): _136.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _136.EstimateSwapExactAmountOutRequestAmino): _136.EstimateSwapExactAmountOutRequest;
                toAmino(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountOutRequestAminoMsg): _136.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountOutRequestProtoMsg): _136.EstimateSwapExactAmountOutRequest;
                toProto(message: _136.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountOutRequest): _136.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                encode(message: _136.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_136.EstimateSinglePoolSwapExactAmountOutRequest>): _136.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _136.EstimateSinglePoolSwapExactAmountOutRequestAmino): _136.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _136.EstimateSinglePoolSwapExactAmountOutRequest): _136.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _136.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _136.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _136.EstimateSinglePoolSwapExactAmountOutRequest): _136.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _136.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _136.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _136.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _136.EstimateSinglePoolSwapExactAmountOutRequest): _136.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _136.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_136.EstimateSwapExactAmountOutResponse>): _136.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _136.EstimateSwapExactAmountOutResponseAmino): _136.EstimateSwapExactAmountOutResponse;
                toAmino(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _136.EstimateSwapExactAmountOutResponseAminoMsg): _136.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _136.EstimateSwapExactAmountOutResponseProtoMsg): _136.EstimateSwapExactAmountOutResponse;
                toProto(message: _136.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _136.EstimateSwapExactAmountOutResponse): _136.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                encode(_: _136.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NumPoolsRequest;
                fromPartial(_: Partial<_136.NumPoolsRequest>): _136.NumPoolsRequest;
                fromAmino(_: _136.NumPoolsRequestAmino): _136.NumPoolsRequest;
                toAmino(_: _136.NumPoolsRequest): _136.NumPoolsRequestAmino;
                fromAminoMsg(object: _136.NumPoolsRequestAminoMsg): _136.NumPoolsRequest;
                toAminoMsg(message: _136.NumPoolsRequest): _136.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _136.NumPoolsRequestProtoMsg): _136.NumPoolsRequest;
                toProto(message: _136.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _136.NumPoolsRequest): _136.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                encode(message: _136.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NumPoolsResponse;
                fromPartial(object: Partial<_136.NumPoolsResponse>): _136.NumPoolsResponse;
                fromAmino(object: _136.NumPoolsResponseAmino): _136.NumPoolsResponse;
                toAmino(message: _136.NumPoolsResponse): _136.NumPoolsResponseAmino;
                fromAminoMsg(object: _136.NumPoolsResponseAminoMsg): _136.NumPoolsResponse;
                toAminoMsg(message: _136.NumPoolsResponse): _136.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _136.NumPoolsResponseProtoMsg): _136.NumPoolsResponse;
                toProto(message: _136.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _136.NumPoolsResponse): _136.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                encode(message: _136.PoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PoolRequest;
                fromPartial(object: Partial<_136.PoolRequest>): _136.PoolRequest;
                fromAmino(object: _136.PoolRequestAmino): _136.PoolRequest;
                toAmino(message: _136.PoolRequest): _136.PoolRequestAmino;
                fromAminoMsg(object: _136.PoolRequestAminoMsg): _136.PoolRequest;
                toAminoMsg(message: _136.PoolRequest): _136.PoolRequestAminoMsg;
                fromProtoMsg(message: _136.PoolRequestProtoMsg): _136.PoolRequest;
                toProto(message: _136.PoolRequest): Uint8Array;
                toProtoMsg(message: _136.PoolRequest): _136.PoolRequestProtoMsg;
            };
            PoolResponse: {
                encode(message: _136.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PoolResponse;
                fromPartial(object: Partial<_136.PoolResponse>): _136.PoolResponse;
                fromAmino(object: _136.PoolResponseAmino): _136.PoolResponse;
                toAmino(message: _136.PoolResponse): _136.PoolResponseAmino;
                fromAminoMsg(object: _136.PoolResponseAminoMsg): _136.PoolResponse;
                toAminoMsg(message: _136.PoolResponse): _136.PoolResponseAminoMsg;
                fromProtoMsg(message: _136.PoolResponseProtoMsg): _136.PoolResponse;
                toProto(message: _136.PoolResponse): Uint8Array;
                toProtoMsg(message: _136.PoolResponse): _136.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                encode(message: _136.AllPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AllPoolsRequest;
                fromPartial(object: Partial<_136.AllPoolsRequest>): _136.AllPoolsRequest;
                fromAmino(object: _136.AllPoolsRequestAmino): _136.AllPoolsRequest;
                toAmino(message: _136.AllPoolsRequest): _136.AllPoolsRequestAmino;
                fromAminoMsg(object: _136.AllPoolsRequestAminoMsg): _136.AllPoolsRequest;
                toAminoMsg(message: _136.AllPoolsRequest): _136.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _136.AllPoolsRequestProtoMsg): _136.AllPoolsRequest;
                toProto(message: _136.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _136.AllPoolsRequest): _136.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                encode(message: _136.AllPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.AllPoolsResponse;
                fromPartial(object: Partial<_136.AllPoolsResponse>): _136.AllPoolsResponse;
                fromAmino(object: _136.AllPoolsResponseAmino): _136.AllPoolsResponse;
                toAmino(message: _136.AllPoolsResponse): _136.AllPoolsResponseAmino;
                fromAminoMsg(object: _136.AllPoolsResponseAminoMsg): _136.AllPoolsResponse;
                toAminoMsg(message: _136.AllPoolsResponse): _136.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _136.AllPoolsResponseProtoMsg): _136.AllPoolsResponse;
                toProto(message: _136.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _136.AllPoolsResponse): _136.AllPoolsResponseProtoMsg;
            };
            SpotPriceRequest: {
                encode(message: _136.SpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SpotPriceRequest;
                fromPartial(object: Partial<_136.SpotPriceRequest>): _136.SpotPriceRequest;
                fromAmino(object: _136.SpotPriceRequestAmino): _136.SpotPriceRequest;
                toAmino(message: _136.SpotPriceRequest): _136.SpotPriceRequestAmino;
                fromAminoMsg(object: _136.SpotPriceRequestAminoMsg): _136.SpotPriceRequest;
                toAminoMsg(message: _136.SpotPriceRequest): _136.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _136.SpotPriceRequestProtoMsg): _136.SpotPriceRequest;
                toProto(message: _136.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _136.SpotPriceRequest): _136.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                encode(message: _136.SpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SpotPriceResponse;
                fromPartial(object: Partial<_136.SpotPriceResponse>): _136.SpotPriceResponse;
                fromAmino(object: _136.SpotPriceResponseAmino): _136.SpotPriceResponse;
                toAmino(message: _136.SpotPriceResponse): _136.SpotPriceResponseAmino;
                fromAminoMsg(object: _136.SpotPriceResponseAminoMsg): _136.SpotPriceResponse;
                toAminoMsg(message: _136.SpotPriceResponse): _136.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _136.SpotPriceResponseProtoMsg): _136.SpotPriceResponse;
                toProto(message: _136.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _136.SpotPriceResponse): _136.SpotPriceResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _96.CosmWasmPool | _105.Pool | import("./concentrated-liquidity/pool").Pool | _111.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _135.PoolType;
            poolTypeToJSON(object: _135.PoolType): string;
            PoolType: typeof _135.PoolType;
            PoolTypeSDKType: typeof _135.PoolType;
            PoolTypeAmino: typeof _135.PoolType;
            ModuleRoute: {
                encode(message: _135.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ModuleRoute;
                fromPartial(object: Partial<_135.ModuleRoute>): _135.ModuleRoute;
                fromAmino(object: _135.ModuleRouteAmino): _135.ModuleRoute;
                toAmino(message: _135.ModuleRoute): _135.ModuleRouteAmino;
                fromAminoMsg(object: _135.ModuleRouteAminoMsg): _135.ModuleRoute;
                toAminoMsg(message: _135.ModuleRoute): _135.ModuleRouteAminoMsg;
                fromProtoMsg(message: _135.ModuleRouteProtoMsg): _135.ModuleRoute;
                toProto(message: _135.ModuleRoute): Uint8Array;
                toProtoMsg(message: _135.ModuleRoute): _135.ModuleRouteProtoMsg;
            };
            Params: {
                encode(message: _134.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Params;
                fromPartial(object: Partial<_134.Params>): _134.Params;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                toAminoMsg(message: _134.GenesisState): _134.GenesisStateAminoMsg;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _143.QueryGetProtoRevNumberOfTradesRequest): Promise<_143.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _143.QueryGetProtoRevProfitsByDenomRequest): Promise<_143.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _143.QueryGetProtoRevAllProfitsRequest): Promise<_143.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _143.QueryGetProtoRevStatisticsByRouteRequest): Promise<_143.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _143.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_143.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _143.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_143.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _143.QueryGetProtoRevAdminAccountRequest): Promise<_143.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _143.QueryGetProtoRevDeveloperAccountRequest): Promise<_143.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _143.QueryGetProtoRevPoolWeightsRequest): Promise<_143.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_143.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_143.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _143.QueryGetProtoRevBaseDenomsRequest): Promise<_143.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _143.QueryGetProtoRevEnabledRequest): Promise<_143.QueryGetProtoRevEnabledResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _144.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _144.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _144.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _144.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _144.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _144.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _144.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _144.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _144.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _144.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _144.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _144.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _144.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _144.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _144.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _144.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _144.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _144.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _144.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _144.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _144.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _144.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _144.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _144.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _144.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _144.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _144.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _144.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _144.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _144.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetHotRoutes) => _144.MsgSetHotRoutesAmino;
                    fromAmino: (object: _144.MsgSetHotRoutesAmino) => _144.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetDeveloperAccount) => _144.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _144.MsgSetDeveloperAccountAmino) => _144.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetMaxPoolPointsPerTx) => _144.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _144.MsgSetMaxPoolPointsPerTxAmino) => _144.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetMaxPoolPointsPerBlock) => _144.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _144.MsgSetMaxPoolPointsPerBlockAmino) => _144.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetPoolWeights) => _144.MsgSetPoolWeightsAmino;
                    fromAmino: (object: _144.MsgSetPoolWeightsAmino) => _144.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSetBaseDenoms) => _144.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _144.MsgSetBaseDenomsAmino) => _144.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _144.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetHotRoutes;
                fromPartial(object: Partial<_144.MsgSetHotRoutes>): _144.MsgSetHotRoutes;
                fromAmino(object: _144.MsgSetHotRoutesAmino): _144.MsgSetHotRoutes;
                toAmino(message: _144.MsgSetHotRoutes): _144.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _144.MsgSetHotRoutesAminoMsg): _144.MsgSetHotRoutes;
                toAminoMsg(message: _144.MsgSetHotRoutes): _144.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _144.MsgSetHotRoutesProtoMsg): _144.MsgSetHotRoutes;
                toProto(message: _144.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _144.MsgSetHotRoutes): _144.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _144.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_144.MsgSetHotRoutesResponse>): _144.MsgSetHotRoutesResponse;
                fromAmino(_: _144.MsgSetHotRoutesResponseAmino): _144.MsgSetHotRoutesResponse;
                toAmino(_: _144.MsgSetHotRoutesResponse): _144.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _144.MsgSetHotRoutesResponseAminoMsg): _144.MsgSetHotRoutesResponse;
                toAminoMsg(message: _144.MsgSetHotRoutesResponse): _144.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetHotRoutesResponseProtoMsg): _144.MsgSetHotRoutesResponse;
                toProto(message: _144.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetHotRoutesResponse): _144.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                encode(message: _144.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_144.MsgSetDeveloperAccount>): _144.MsgSetDeveloperAccount;
                fromAmino(object: _144.MsgSetDeveloperAccountAmino): _144.MsgSetDeveloperAccount;
                toAmino(message: _144.MsgSetDeveloperAccount): _144.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _144.MsgSetDeveloperAccountAminoMsg): _144.MsgSetDeveloperAccount;
                toAminoMsg(message: _144.MsgSetDeveloperAccount): _144.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _144.MsgSetDeveloperAccountProtoMsg): _144.MsgSetDeveloperAccount;
                toProto(message: _144.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _144.MsgSetDeveloperAccount): _144.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _144.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_144.MsgSetDeveloperAccountResponse>): _144.MsgSetDeveloperAccountResponse;
                fromAmino(_: _144.MsgSetDeveloperAccountResponseAmino): _144.MsgSetDeveloperAccountResponse;
                toAmino(_: _144.MsgSetDeveloperAccountResponse): _144.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _144.MsgSetDeveloperAccountResponseAminoMsg): _144.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _144.MsgSetDeveloperAccountResponse): _144.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetDeveloperAccountResponseProtoMsg): _144.MsgSetDeveloperAccountResponse;
                toProto(message: _144.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetDeveloperAccountResponse): _144.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetPoolWeights: {
                encode(message: _144.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetPoolWeights;
                fromPartial(object: Partial<_144.MsgSetPoolWeights>): _144.MsgSetPoolWeights;
                fromAmino(object: _144.MsgSetPoolWeightsAmino): _144.MsgSetPoolWeights;
                toAmino(message: _144.MsgSetPoolWeights): _144.MsgSetPoolWeightsAmino;
                fromAminoMsg(object: _144.MsgSetPoolWeightsAminoMsg): _144.MsgSetPoolWeights;
                toAminoMsg(message: _144.MsgSetPoolWeights): _144.MsgSetPoolWeightsAminoMsg;
                fromProtoMsg(message: _144.MsgSetPoolWeightsProtoMsg): _144.MsgSetPoolWeights;
                toProto(message: _144.MsgSetPoolWeights): Uint8Array;
                toProtoMsg(message: _144.MsgSetPoolWeights): _144.MsgSetPoolWeightsProtoMsg;
            };
            MsgSetPoolWeightsResponse: {
                encode(_: _144.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_144.MsgSetPoolWeightsResponse>): _144.MsgSetPoolWeightsResponse;
                fromAmino(_: _144.MsgSetPoolWeightsResponseAmino): _144.MsgSetPoolWeightsResponse;
                toAmino(_: _144.MsgSetPoolWeightsResponse): _144.MsgSetPoolWeightsResponseAmino;
                fromAminoMsg(object: _144.MsgSetPoolWeightsResponseAminoMsg): _144.MsgSetPoolWeightsResponse;
                toAminoMsg(message: _144.MsgSetPoolWeightsResponse): _144.MsgSetPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetPoolWeightsResponseProtoMsg): _144.MsgSetPoolWeightsResponse;
                toProto(message: _144.MsgSetPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetPoolWeightsResponse): _144.MsgSetPoolWeightsResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                encode(message: _144.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_144.MsgSetMaxPoolPointsPerTx>): _144.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _144.MsgSetMaxPoolPointsPerTxAmino): _144.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _144.MsgSetMaxPoolPointsPerTx): _144.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _144.MsgSetMaxPoolPointsPerTxAminoMsg): _144.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _144.MsgSetMaxPoolPointsPerTx): _144.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _144.MsgSetMaxPoolPointsPerTxProtoMsg): _144.MsgSetMaxPoolPointsPerTx;
                toProto(message: _144.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _144.MsgSetMaxPoolPointsPerTx): _144.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                encode(_: _144.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_144.MsgSetMaxPoolPointsPerTxResponse>): _144.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _144.MsgSetMaxPoolPointsPerTxResponseAmino): _144.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _144.MsgSetMaxPoolPointsPerTxResponse): _144.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _144.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _144.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _144.MsgSetMaxPoolPointsPerTxResponse): _144.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _144.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _144.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetMaxPoolPointsPerTxResponse): _144.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                encode(message: _144.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_144.MsgSetMaxPoolPointsPerBlock>): _144.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _144.MsgSetMaxPoolPointsPerBlockAmino): _144.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _144.MsgSetMaxPoolPointsPerBlock): _144.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _144.MsgSetMaxPoolPointsPerBlockAminoMsg): _144.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _144.MsgSetMaxPoolPointsPerBlock): _144.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _144.MsgSetMaxPoolPointsPerBlockProtoMsg): _144.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _144.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _144.MsgSetMaxPoolPointsPerBlock): _144.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                encode(_: _144.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_144.MsgSetMaxPoolPointsPerBlockResponse>): _144.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _144.MsgSetMaxPoolPointsPerBlockResponseAmino): _144.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _144.MsgSetMaxPoolPointsPerBlockResponse): _144.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _144.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _144.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _144.MsgSetMaxPoolPointsPerBlockResponse): _144.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _144.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _144.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetMaxPoolPointsPerBlockResponse): _144.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                encode(message: _144.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetBaseDenoms;
                fromPartial(object: Partial<_144.MsgSetBaseDenoms>): _144.MsgSetBaseDenoms;
                fromAmino(object: _144.MsgSetBaseDenomsAmino): _144.MsgSetBaseDenoms;
                toAmino(message: _144.MsgSetBaseDenoms): _144.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _144.MsgSetBaseDenomsAminoMsg): _144.MsgSetBaseDenoms;
                toAminoMsg(message: _144.MsgSetBaseDenoms): _144.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _144.MsgSetBaseDenomsProtoMsg): _144.MsgSetBaseDenoms;
                toProto(message: _144.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _144.MsgSetBaseDenoms): _144.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                encode(_: _144.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_144.MsgSetBaseDenomsResponse>): _144.MsgSetBaseDenomsResponse;
                fromAmino(_: _144.MsgSetBaseDenomsResponseAmino): _144.MsgSetBaseDenomsResponse;
                toAmino(_: _144.MsgSetBaseDenomsResponse): _144.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _144.MsgSetBaseDenomsResponseAminoMsg): _144.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _144.MsgSetBaseDenomsResponse): _144.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSetBaseDenomsResponseProtoMsg): _144.MsgSetBaseDenomsResponse;
                toProto(message: _144.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSetBaseDenomsResponse): _144.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _143.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryParamsRequest;
                fromPartial(_: Partial<_143.QueryParamsRequest>): _143.QueryParamsRequest;
                fromAmino(_: _143.QueryParamsRequestAmino): _143.QueryParamsRequest;
                toAmino(_: _143.QueryParamsRequest): _143.QueryParamsRequestAmino;
                fromAminoMsg(object: _143.QueryParamsRequestAminoMsg): _143.QueryParamsRequest;
                toAminoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryParamsRequestProtoMsg): _143.QueryParamsRequest;
                toProto(message: _143.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _143.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryParamsResponse;
                fromPartial(object: Partial<_143.QueryParamsResponse>): _143.QueryParamsResponse;
                fromAmino(object: _143.QueryParamsResponseAmino): _143.QueryParamsResponse;
                toAmino(message: _143.QueryParamsResponse): _143.QueryParamsResponseAmino;
                fromAminoMsg(object: _143.QueryParamsResponseAminoMsg): _143.QueryParamsResponse;
                toAminoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryParamsResponseProtoMsg): _143.QueryParamsResponse;
                toProto(message: _143.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _143.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevNumberOfTradesRequest>): _143.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _143.QueryGetProtoRevNumberOfTradesRequestAmino): _143.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _143.QueryGetProtoRevNumberOfTradesRequest): _143.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _143.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _143.QueryGetProtoRevNumberOfTradesRequest): _143.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _143.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _143.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevNumberOfTradesRequest): _143.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _143.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevNumberOfTradesResponse>): _143.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _143.QueryGetProtoRevNumberOfTradesResponseAmino): _143.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _143.QueryGetProtoRevNumberOfTradesResponse): _143.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _143.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _143.QueryGetProtoRevNumberOfTradesResponse): _143.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _143.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _143.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevNumberOfTradesResponse): _143.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _143.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_143.QueryGetProtoRevProfitsByDenomRequest>): _143.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _143.QueryGetProtoRevProfitsByDenomRequestAmino): _143.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _143.QueryGetProtoRevProfitsByDenomRequest): _143.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _143.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _143.QueryGetProtoRevProfitsByDenomRequest): _143.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _143.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _143.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevProfitsByDenomRequest): _143.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _143.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevProfitsByDenomResponse>): _143.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _143.QueryGetProtoRevProfitsByDenomResponseAmino): _143.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _143.QueryGetProtoRevProfitsByDenomResponse): _143.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _143.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _143.QueryGetProtoRevProfitsByDenomResponse): _143.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _143.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _143.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevProfitsByDenomResponse): _143.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _143.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevAllProfitsRequest>): _143.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _143.QueryGetProtoRevAllProfitsRequestAmino): _143.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _143.QueryGetProtoRevAllProfitsRequest): _143.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAllProfitsRequestAminoMsg): _143.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _143.QueryGetProtoRevAllProfitsRequest): _143.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAllProfitsRequestProtoMsg): _143.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _143.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAllProfitsRequest): _143.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _143.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevAllProfitsResponse>): _143.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _143.QueryGetProtoRevAllProfitsResponseAmino): _143.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _143.QueryGetProtoRevAllProfitsResponse): _143.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAllProfitsResponseAminoMsg): _143.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _143.QueryGetProtoRevAllProfitsResponse): _143.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAllProfitsResponseProtoMsg): _143.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _143.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAllProfitsResponse): _143.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                encode(message: _143.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_143.QueryGetProtoRevStatisticsByRouteRequest>): _143.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _143.QueryGetProtoRevStatisticsByRouteRequestAmino): _143.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _143.QueryGetProtoRevStatisticsByRouteRequest): _143.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _143.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _143.QueryGetProtoRevStatisticsByRouteRequest): _143.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _143.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _143.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevStatisticsByRouteRequest): _143.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                encode(message: _143.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevStatisticsByRouteResponse>): _143.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _143.QueryGetProtoRevStatisticsByRouteResponseAmino): _143.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _143.QueryGetProtoRevStatisticsByRouteResponse): _143.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _143.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _143.QueryGetProtoRevStatisticsByRouteResponse): _143.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _143.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _143.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevStatisticsByRouteResponse): _143.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                encode(_: _143.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevAllRouteStatisticsRequest>): _143.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _143.QueryGetProtoRevAllRouteStatisticsRequestAmino): _143.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _143.QueryGetProtoRevAllRouteStatisticsRequest): _143.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _143.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsRequest): _143.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _143.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _143.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsRequest): _143.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                encode(message: _143.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevAllRouteStatisticsResponse>): _143.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _143.QueryGetProtoRevAllRouteStatisticsResponseAmino): _143.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _143.QueryGetProtoRevAllRouteStatisticsResponse): _143.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _143.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsResponse): _143.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _143.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _143.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAllRouteStatisticsResponse): _143.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _143.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevTokenPairArbRoutesRequest>): _143.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _143.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _143.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _143.QueryGetProtoRevTokenPairArbRoutesRequest): _143.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _143.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesRequest): _143.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _143.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _143.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesRequest): _143.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _143.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevTokenPairArbRoutesResponse>): _143.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _143.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _143.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _143.QueryGetProtoRevTokenPairArbRoutesResponse): _143.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _143.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesResponse): _143.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _143.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _143.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevTokenPairArbRoutesResponse): _143.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                encode(_: _143.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevAdminAccountRequest>): _143.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _143.QueryGetProtoRevAdminAccountRequestAmino): _143.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _143.QueryGetProtoRevAdminAccountRequest): _143.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAdminAccountRequestAminoMsg): _143.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _143.QueryGetProtoRevAdminAccountRequest): _143.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAdminAccountRequestProtoMsg): _143.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _143.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAdminAccountRequest): _143.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                encode(message: _143.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevAdminAccountResponse>): _143.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _143.QueryGetProtoRevAdminAccountResponseAmino): _143.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _143.QueryGetProtoRevAdminAccountResponse): _143.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevAdminAccountResponseAminoMsg): _143.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _143.QueryGetProtoRevAdminAccountResponse): _143.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevAdminAccountResponseProtoMsg): _143.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _143.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevAdminAccountResponse): _143.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                encode(_: _143.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevDeveloperAccountRequest>): _143.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _143.QueryGetProtoRevDeveloperAccountRequestAmino): _143.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _143.QueryGetProtoRevDeveloperAccountRequest): _143.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _143.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _143.QueryGetProtoRevDeveloperAccountRequest): _143.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _143.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _143.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevDeveloperAccountRequest): _143.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                encode(message: _143.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevDeveloperAccountResponse>): _143.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _143.QueryGetProtoRevDeveloperAccountResponseAmino): _143.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _143.QueryGetProtoRevDeveloperAccountResponse): _143.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _143.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _143.QueryGetProtoRevDeveloperAccountResponse): _143.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _143.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _143.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevDeveloperAccountResponse): _143.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                encode(_: _143.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevPoolWeightsRequest>): _143.QueryGetProtoRevPoolWeightsRequest;
                fromAmino(_: _143.QueryGetProtoRevPoolWeightsRequestAmino): _143.QueryGetProtoRevPoolWeightsRequest;
                toAmino(_: _143.QueryGetProtoRevPoolWeightsRequest): _143.QueryGetProtoRevPoolWeightsRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevPoolWeightsRequestAminoMsg): _143.QueryGetProtoRevPoolWeightsRequest;
                toAminoMsg(message: _143.QueryGetProtoRevPoolWeightsRequest): _143.QueryGetProtoRevPoolWeightsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevPoolWeightsRequestProtoMsg): _143.QueryGetProtoRevPoolWeightsRequest;
                toProto(message: _143.QueryGetProtoRevPoolWeightsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevPoolWeightsRequest): _143.QueryGetProtoRevPoolWeightsRequestProtoMsg;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                encode(message: _143.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevPoolWeightsResponse>): _143.QueryGetProtoRevPoolWeightsResponse;
                fromAmino(object: _143.QueryGetProtoRevPoolWeightsResponseAmino): _143.QueryGetProtoRevPoolWeightsResponse;
                toAmino(message: _143.QueryGetProtoRevPoolWeightsResponse): _143.QueryGetProtoRevPoolWeightsResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevPoolWeightsResponseAminoMsg): _143.QueryGetProtoRevPoolWeightsResponse;
                toAminoMsg(message: _143.QueryGetProtoRevPoolWeightsResponse): _143.QueryGetProtoRevPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevPoolWeightsResponseProtoMsg): _143.QueryGetProtoRevPoolWeightsResponse;
                toProto(message: _143.QueryGetProtoRevPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevPoolWeightsResponse): _143.QueryGetProtoRevPoolWeightsResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                encode(_: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _143.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                encode(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _143.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                encode(_: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _143.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _143.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _143.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): _143.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _143.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): _143.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _143.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): _143.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                encode(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _143.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _143.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _143.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponse): _143.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _143.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponse): _143.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _143.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevMaxPoolPointsPerTxResponse): _143.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                encode(_: _143.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevBaseDenomsRequest>): _143.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _143.QueryGetProtoRevBaseDenomsRequestAmino): _143.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _143.QueryGetProtoRevBaseDenomsRequest): _143.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevBaseDenomsRequestAminoMsg): _143.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _143.QueryGetProtoRevBaseDenomsRequest): _143.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevBaseDenomsRequestProtoMsg): _143.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _143.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevBaseDenomsRequest): _143.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                encode(message: _143.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevBaseDenomsResponse>): _143.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _143.QueryGetProtoRevBaseDenomsResponseAmino): _143.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _143.QueryGetProtoRevBaseDenomsResponse): _143.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevBaseDenomsResponseAminoMsg): _143.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _143.QueryGetProtoRevBaseDenomsResponse): _143.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevBaseDenomsResponseProtoMsg): _143.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _143.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevBaseDenomsResponse): _143.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                encode(_: _143.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_143.QueryGetProtoRevEnabledRequest>): _143.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _143.QueryGetProtoRevEnabledRequestAmino): _143.QueryGetProtoRevEnabledRequest;
                toAmino(_: _143.QueryGetProtoRevEnabledRequest): _143.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevEnabledRequestAminoMsg): _143.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _143.QueryGetProtoRevEnabledRequest): _143.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevEnabledRequestProtoMsg): _143.QueryGetProtoRevEnabledRequest;
                toProto(message: _143.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevEnabledRequest): _143.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                encode(message: _143.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_143.QueryGetProtoRevEnabledResponse>): _143.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _143.QueryGetProtoRevEnabledResponseAmino): _143.QueryGetProtoRevEnabledResponse;
                toAmino(message: _143.QueryGetProtoRevEnabledResponse): _143.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _143.QueryGetProtoRevEnabledResponseAminoMsg): _143.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _143.QueryGetProtoRevEnabledResponse): _143.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _143.QueryGetProtoRevEnabledResponseProtoMsg): _143.QueryGetProtoRevEnabledResponse;
                toProto(message: _143.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _143.QueryGetProtoRevEnabledResponse): _143.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                encode(message: _142.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TokenPairArbRoutes;
                fromPartial(object: Partial<_142.TokenPairArbRoutes>): _142.TokenPairArbRoutes;
                fromAmino(object: _142.TokenPairArbRoutesAmino): _142.TokenPairArbRoutes;
                toAmino(message: _142.TokenPairArbRoutes): _142.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _142.TokenPairArbRoutesAminoMsg): _142.TokenPairArbRoutes;
                toAminoMsg(message: _142.TokenPairArbRoutes): _142.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _142.TokenPairArbRoutesProtoMsg): _142.TokenPairArbRoutes;
                toProto(message: _142.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _142.TokenPairArbRoutes): _142.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                encode(message: _142.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Route;
                fromPartial(object: Partial<_142.Route>): _142.Route;
                fromAmino(object: _142.RouteAmino): _142.Route;
                toAmino(message: _142.Route): _142.RouteAmino;
                fromAminoMsg(object: _142.RouteAminoMsg): _142.Route;
                toAminoMsg(message: _142.Route): _142.RouteAminoMsg;
                fromProtoMsg(message: _142.RouteProtoMsg): _142.Route;
                toProto(message: _142.Route): Uint8Array;
                toProtoMsg(message: _142.Route): _142.RouteProtoMsg;
            };
            Trade: {
                encode(message: _142.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Trade;
                fromPartial(object: Partial<_142.Trade>): _142.Trade;
                fromAmino(object: _142.TradeAmino): _142.Trade;
                toAmino(message: _142.Trade): _142.TradeAmino;
                fromAminoMsg(object: _142.TradeAminoMsg): _142.Trade;
                toAminoMsg(message: _142.Trade): _142.TradeAminoMsg;
                fromProtoMsg(message: _142.TradeProtoMsg): _142.Trade;
                toProto(message: _142.Trade): Uint8Array;
                toProtoMsg(message: _142.Trade): _142.TradeProtoMsg;
            };
            RouteStatistics: {
                encode(message: _142.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RouteStatistics;
                fromPartial(object: Partial<_142.RouteStatistics>): _142.RouteStatistics;
                fromAmino(object: _142.RouteStatisticsAmino): _142.RouteStatistics;
                toAmino(message: _142.RouteStatistics): _142.RouteStatisticsAmino;
                fromAminoMsg(object: _142.RouteStatisticsAminoMsg): _142.RouteStatistics;
                toAminoMsg(message: _142.RouteStatistics): _142.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _142.RouteStatisticsProtoMsg): _142.RouteStatistics;
                toProto(message: _142.RouteStatistics): Uint8Array;
                toProtoMsg(message: _142.RouteStatistics): _142.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                encode(message: _142.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PoolWeights;
                fromPartial(object: Partial<_142.PoolWeights>): _142.PoolWeights;
                fromAmino(object: _142.PoolWeightsAmino): _142.PoolWeights;
                toAmino(message: _142.PoolWeights): _142.PoolWeightsAmino;
                fromAminoMsg(object: _142.PoolWeightsAminoMsg): _142.PoolWeights;
                toAminoMsg(message: _142.PoolWeights): _142.PoolWeightsAminoMsg;
                fromProtoMsg(message: _142.PoolWeightsProtoMsg): _142.PoolWeights;
                toProto(message: _142.PoolWeights): Uint8Array;
                toProtoMsg(message: _142.PoolWeights): _142.PoolWeightsProtoMsg;
            };
            BaseDenom: {
                encode(message: _142.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BaseDenom;
                fromPartial(object: Partial<_142.BaseDenom>): _142.BaseDenom;
                fromAmino(object: _142.BaseDenomAmino): _142.BaseDenom;
                toAmino(message: _142.BaseDenom): _142.BaseDenomAmino;
                fromAminoMsg(object: _142.BaseDenomAminoMsg): _142.BaseDenom;
                toAminoMsg(message: _142.BaseDenom): _142.BaseDenomAminoMsg;
                fromProtoMsg(message: _142.BaseDenomProtoMsg): _142.BaseDenom;
                toProto(message: _142.BaseDenom): Uint8Array;
                toProtoMsg(message: _142.BaseDenom): _142.BaseDenomProtoMsg;
            };
            Params: {
                encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
                fromPartial(object: Partial<_141.Params>): _141.Params;
                fromAmino(object: _141.ParamsAmino): _141.Params;
                toAmino(message: _141.Params): _141.ParamsAmino;
                fromAminoMsg(object: _141.ParamsAminoMsg): _141.Params;
                toAminoMsg(message: _141.Params): _141.ParamsAminoMsg;
                fromProtoMsg(message: _141.ParamsProtoMsg): _141.Params;
                toProto(message: _141.Params): Uint8Array;
                toProtoMsg(message: _141.Params): _141.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _140.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_140.SetProtoRevEnabledProposal>): _140.SetProtoRevEnabledProposal;
                fromAmino(object: _140.SetProtoRevEnabledProposalAmino): _140.SetProtoRevEnabledProposal;
                toAmino(message: _140.SetProtoRevEnabledProposal): _140.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _140.SetProtoRevEnabledProposalAminoMsg): _140.SetProtoRevEnabledProposal;
                toAminoMsg(message: _140.SetProtoRevEnabledProposal): _140.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _140.SetProtoRevEnabledProposalProtoMsg): _140.SetProtoRevEnabledProposal;
                toProto(message: _140.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _140.SetProtoRevEnabledProposal): _140.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _140.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_140.SetProtoRevAdminAccountProposal>): _140.SetProtoRevAdminAccountProposal;
                fromAmino(object: _140.SetProtoRevAdminAccountProposalAmino): _140.SetProtoRevAdminAccountProposal;
                toAmino(message: _140.SetProtoRevAdminAccountProposal): _140.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _140.SetProtoRevAdminAccountProposalAminoMsg): _140.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _140.SetProtoRevAdminAccountProposal): _140.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _140.SetProtoRevAdminAccountProposalProtoMsg): _140.SetProtoRevAdminAccountProposal;
                toProto(message: _140.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _140.SetProtoRevAdminAccountProposal): _140.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.GenesisState;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
                toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
                fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
                toAminoMsg(message: _139.GenesisState): _139.GenesisStateAminoMsg;
                fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
                toProto(message: _139.GenesisState): Uint8Array;
                toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _145.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Node;
                fromPartial(object: Partial<_145.Node>): _145.Node;
                fromAmino(object: _145.NodeAmino): _145.Node;
                toAmino(message: _145.Node): _145.NodeAmino;
                fromAminoMsg(object: _145.NodeAminoMsg): _145.Node;
                toAminoMsg(message: _145.Node): _145.NodeAminoMsg;
                fromProtoMsg(message: _145.NodeProtoMsg): _145.Node;
                toProto(message: _145.Node): Uint8Array;
                toProtoMsg(message: _145.Node): _145.NodeProtoMsg;
            };
            Child: {
                encode(message: _145.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Child;
                fromPartial(object: Partial<_145.Child>): _145.Child;
                fromAmino(object: _145.ChildAmino): _145.Child;
                toAmino(message: _145.Child): _145.ChildAmino;
                fromAminoMsg(object: _145.ChildAminoMsg): _145.Child;
                toAminoMsg(message: _145.Child): _145.ChildAminoMsg;
                fromProtoMsg(message: _145.ChildProtoMsg): _145.Child;
                toProto(message: _145.Child): Uint8Array;
                toProtoMsg(message: _145.Child): _145.ChildProtoMsg;
            };
            Leaf: {
                encode(message: _145.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Leaf;
                fromPartial(object: Partial<_145.Leaf>): _145.Leaf;
                fromAmino(object: _145.LeafAmino): _145.Leaf;
                toAmino(message: _145.Leaf): _145.LeafAmino;
                fromAminoMsg(object: _145.LeafAminoMsg): _145.Leaf;
                toAminoMsg(message: _145.Leaf): _145.LeafAminoMsg;
                fromProtoMsg(message: _145.LeafProtoMsg): _145.Leaf;
                toProto(message: _145.Leaf): Uint8Array;
                toProtoMsg(message: _145.Leaf): _145.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _296.MsgClientImpl;
        QueryClientImpl: typeof _283.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
            assetType(request: _148.AssetTypeRequest): Promise<_148.AssetTypeResponse>;
            allAssets(request?: _148.AllAssetsRequest): Promise<_148.AllAssetsResponse>;
            assetMultiplier(request: _148.AssetMultiplierRequest): Promise<_148.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _148.AllIntermediaryAccountsRequest): Promise<_148.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _148.ConnectedIntermediaryAccountRequest): Promise<_148.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _148.QueryTotalDelegationByValidatorForDenomRequest): Promise<_148.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _148.TotalSuperfluidDelegationsRequest): Promise<_148.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _148.SuperfluidDelegationAmountRequest): Promise<_148.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _148.SuperfluidDelegationsByDelegatorRequest): Promise<_148.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _148.SuperfluidUndelegationsByDelegatorRequest): Promise<_148.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _148.SuperfluidDelegationsByValidatorDenomRequest): Promise<_148.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _148.QueryTotalDelegationByDelegatorRequest): Promise<_148.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _148.QueryUnpoolWhitelistRequest): Promise<_148.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _265.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _150.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _150.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _150.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _150.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _150.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _150.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _150.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _150.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _150.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _150.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _150.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _150.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _150.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _150.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _150.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _150.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _150.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _150.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _150.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _150.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _150.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _150.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _150.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _150.MsgSuperfluidDelegate) => _150.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _150.MsgSuperfluidDelegateAmino) => _150.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _150.MsgSuperfluidUndelegate) => _150.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _150.MsgSuperfluidUndelegateAmino) => _150.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _150.MsgSuperfluidUnbondLock) => _150.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _150.MsgSuperfluidUnbondLockAmino) => _150.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _150.MsgSuperfluidUndelegateAndUnbondLock) => _150.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _150.MsgSuperfluidUndelegateAndUnbondLockAmino) => _150.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _150.MsgLockAndSuperfluidDelegate) => _150.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _150.MsgLockAndSuperfluidDelegateAmino) => _150.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _150.MsgUnPoolWhitelistedPool) => _150.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _150.MsgUnPoolWhitelistedPoolAmino) => _150.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _150.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_150.MsgSuperfluidDelegate>): _150.MsgSuperfluidDelegate;
            fromAmino(object: _150.MsgSuperfluidDelegateAmino): _150.MsgSuperfluidDelegate;
            toAmino(message: _150.MsgSuperfluidDelegate): _150.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _150.MsgSuperfluidDelegateAminoMsg): _150.MsgSuperfluidDelegate;
            toAminoMsg(message: _150.MsgSuperfluidDelegate): _150.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidDelegateProtoMsg): _150.MsgSuperfluidDelegate;
            toProto(message: _150.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidDelegate): _150.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _150.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_150.MsgSuperfluidDelegateResponse>): _150.MsgSuperfluidDelegateResponse;
            fromAmino(_: _150.MsgSuperfluidDelegateResponseAmino): _150.MsgSuperfluidDelegateResponse;
            toAmino(_: _150.MsgSuperfluidDelegateResponse): _150.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _150.MsgSuperfluidDelegateResponseAminoMsg): _150.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _150.MsgSuperfluidDelegateResponse): _150.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidDelegateResponseProtoMsg): _150.MsgSuperfluidDelegateResponse;
            toProto(message: _150.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidDelegateResponse): _150.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _150.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_150.MsgSuperfluidUndelegate>): _150.MsgSuperfluidUndelegate;
            fromAmino(object: _150.MsgSuperfluidUndelegateAmino): _150.MsgSuperfluidUndelegate;
            toAmino(message: _150.MsgSuperfluidUndelegate): _150.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUndelegateAminoMsg): _150.MsgSuperfluidUndelegate;
            toAminoMsg(message: _150.MsgSuperfluidUndelegate): _150.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUndelegateProtoMsg): _150.MsgSuperfluidUndelegate;
            toProto(message: _150.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUndelegate): _150.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _150.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_150.MsgSuperfluidUndelegateResponse>): _150.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _150.MsgSuperfluidUndelegateResponseAmino): _150.MsgSuperfluidUndelegateResponse;
            toAmino(_: _150.MsgSuperfluidUndelegateResponse): _150.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUndelegateResponseAminoMsg): _150.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _150.MsgSuperfluidUndelegateResponse): _150.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUndelegateResponseProtoMsg): _150.MsgSuperfluidUndelegateResponse;
            toProto(message: _150.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUndelegateResponse): _150.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _150.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_150.MsgSuperfluidUnbondLock>): _150.MsgSuperfluidUnbondLock;
            fromAmino(object: _150.MsgSuperfluidUnbondLockAmino): _150.MsgSuperfluidUnbondLock;
            toAmino(message: _150.MsgSuperfluidUnbondLock): _150.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUnbondLockAminoMsg): _150.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _150.MsgSuperfluidUnbondLock): _150.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUnbondLockProtoMsg): _150.MsgSuperfluidUnbondLock;
            toProto(message: _150.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUnbondLock): _150.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _150.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_150.MsgSuperfluidUnbondLockResponse>): _150.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _150.MsgSuperfluidUnbondLockResponseAmino): _150.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _150.MsgSuperfluidUnbondLockResponse): _150.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUnbondLockResponseAminoMsg): _150.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _150.MsgSuperfluidUnbondLockResponse): _150.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUnbondLockResponseProtoMsg): _150.MsgSuperfluidUnbondLockResponse;
            toProto(message: _150.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUnbondLockResponse): _150.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            encode(message: _150.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_150.MsgSuperfluidUndelegateAndUnbondLock>): _150.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _150.MsgSuperfluidUndelegateAndUnbondLockAmino): _150.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _150.MsgSuperfluidUndelegateAndUnbondLock): _150.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _150.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLock): _150.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _150.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _150.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLock): _150.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            encode(_: _150.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(_: Partial<_150.MsgSuperfluidUndelegateAndUnbondLockResponse>): _150.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(_: _150.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _150.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(_: _150.MsgSuperfluidUndelegateAndUnbondLockResponse): _150.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _150.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _150.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLockResponse): _150.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _150.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _150.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _150.MsgSuperfluidUndelegateAndUnbondLockResponse): _150.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _150.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_150.MsgLockAndSuperfluidDelegate>): _150.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _150.MsgLockAndSuperfluidDelegateAmino): _150.MsgLockAndSuperfluidDelegate;
            toAmino(message: _150.MsgLockAndSuperfluidDelegate): _150.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _150.MsgLockAndSuperfluidDelegateAminoMsg): _150.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _150.MsgLockAndSuperfluidDelegate): _150.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _150.MsgLockAndSuperfluidDelegateProtoMsg): _150.MsgLockAndSuperfluidDelegate;
            toProto(message: _150.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _150.MsgLockAndSuperfluidDelegate): _150.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _150.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_150.MsgLockAndSuperfluidDelegateResponse>): _150.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _150.MsgLockAndSuperfluidDelegateResponseAmino): _150.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _150.MsgLockAndSuperfluidDelegateResponse): _150.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _150.MsgLockAndSuperfluidDelegateResponseAminoMsg): _150.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _150.MsgLockAndSuperfluidDelegateResponse): _150.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _150.MsgLockAndSuperfluidDelegateResponseProtoMsg): _150.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _150.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _150.MsgLockAndSuperfluidDelegateResponse): _150.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _150.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_150.MsgUnPoolWhitelistedPool>): _150.MsgUnPoolWhitelistedPool;
            fromAmino(object: _150.MsgUnPoolWhitelistedPoolAmino): _150.MsgUnPoolWhitelistedPool;
            toAmino(message: _150.MsgUnPoolWhitelistedPool): _150.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _150.MsgUnPoolWhitelistedPoolAminoMsg): _150.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _150.MsgUnPoolWhitelistedPool): _150.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _150.MsgUnPoolWhitelistedPoolProtoMsg): _150.MsgUnPoolWhitelistedPool;
            toProto(message: _150.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _150.MsgUnPoolWhitelistedPool): _150.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _150.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_150.MsgUnPoolWhitelistedPoolResponse>): _150.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _150.MsgUnPoolWhitelistedPoolResponseAmino): _150.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _150.MsgUnPoolWhitelistedPoolResponse): _150.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _150.MsgUnPoolWhitelistedPoolResponseAminoMsg): _150.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _150.MsgUnPoolWhitelistedPoolResponse): _150.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _150.MsgUnPoolWhitelistedPoolResponseProtoMsg): _150.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _150.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _150.MsgUnPoolWhitelistedPoolResponse): _150.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            encode(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            encode(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _150.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _149.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _149.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _149.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _149.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _149.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _149.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SuperfluidAsset;
            fromPartial(object: Partial<_149.SuperfluidAsset>): _149.SuperfluidAsset;
            fromAmino(object: _149.SuperfluidAssetAmino): _149.SuperfluidAsset;
            toAmino(message: _149.SuperfluidAsset): _149.SuperfluidAssetAmino;
            fromAminoMsg(object: _149.SuperfluidAssetAminoMsg): _149.SuperfluidAsset;
            toAminoMsg(message: _149.SuperfluidAsset): _149.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _149.SuperfluidAssetProtoMsg): _149.SuperfluidAsset;
            toProto(message: _149.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _149.SuperfluidAsset): _149.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _149.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_149.SuperfluidIntermediaryAccount>): _149.SuperfluidIntermediaryAccount;
            fromAmino(object: _149.SuperfluidIntermediaryAccountAmino): _149.SuperfluidIntermediaryAccount;
            toAmino(message: _149.SuperfluidIntermediaryAccount): _149.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _149.SuperfluidIntermediaryAccountAminoMsg): _149.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _149.SuperfluidIntermediaryAccount): _149.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _149.SuperfluidIntermediaryAccountProtoMsg): _149.SuperfluidIntermediaryAccount;
            toProto(message: _149.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _149.SuperfluidIntermediaryAccount): _149.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _149.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_149.OsmoEquivalentMultiplierRecord>): _149.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _149.OsmoEquivalentMultiplierRecordAmino): _149.OsmoEquivalentMultiplierRecord;
            toAmino(message: _149.OsmoEquivalentMultiplierRecord): _149.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _149.OsmoEquivalentMultiplierRecordAminoMsg): _149.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _149.OsmoEquivalentMultiplierRecord): _149.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _149.OsmoEquivalentMultiplierRecordProtoMsg): _149.OsmoEquivalentMultiplierRecord;
            toProto(message: _149.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _149.OsmoEquivalentMultiplierRecord): _149.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            encode(message: _149.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_149.SuperfluidDelegationRecord>): _149.SuperfluidDelegationRecord;
            fromAmino(object: _149.SuperfluidDelegationRecordAmino): _149.SuperfluidDelegationRecord;
            toAmino(message: _149.SuperfluidDelegationRecord): _149.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _149.SuperfluidDelegationRecordAminoMsg): _149.SuperfluidDelegationRecord;
            toAminoMsg(message: _149.SuperfluidDelegationRecord): _149.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _149.SuperfluidDelegationRecordProtoMsg): _149.SuperfluidDelegationRecord;
            toProto(message: _149.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _149.SuperfluidDelegationRecord): _149.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _149.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_149.LockIdIntermediaryAccountConnection>): _149.LockIdIntermediaryAccountConnection;
            fromAmino(object: _149.LockIdIntermediaryAccountConnectionAmino): _149.LockIdIntermediaryAccountConnection;
            toAmino(message: _149.LockIdIntermediaryAccountConnection): _149.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _149.LockIdIntermediaryAccountConnectionAminoMsg): _149.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _149.LockIdIntermediaryAccountConnection): _149.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _149.LockIdIntermediaryAccountConnectionProtoMsg): _149.LockIdIntermediaryAccountConnection;
            toProto(message: _149.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _149.LockIdIntermediaryAccountConnection): _149.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            encode(message: _149.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_149.UnpoolWhitelistedPools>): _149.UnpoolWhitelistedPools;
            fromAmino(object: _149.UnpoolWhitelistedPoolsAmino): _149.UnpoolWhitelistedPools;
            toAmino(message: _149.UnpoolWhitelistedPools): _149.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _149.UnpoolWhitelistedPoolsAminoMsg): _149.UnpoolWhitelistedPools;
            toAminoMsg(message: _149.UnpoolWhitelistedPools): _149.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _149.UnpoolWhitelistedPoolsProtoMsg): _149.UnpoolWhitelistedPools;
            toProto(message: _149.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _149.UnpoolWhitelistedPools): _149.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
            fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
            fromAmino(_: _148.QueryParamsRequestAmino): _148.QueryParamsRequest;
            toAmino(_: _148.QueryParamsRequest): _148.QueryParamsRequestAmino;
            fromAminoMsg(object: _148.QueryParamsRequestAminoMsg): _148.QueryParamsRequest;
            toAminoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _148.QueryParamsRequestProtoMsg): _148.QueryParamsRequest;
            toProto(message: _148.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
            fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
            fromAmino(object: _148.QueryParamsResponseAmino): _148.QueryParamsResponse;
            toAmino(message: _148.QueryParamsResponse): _148.QueryParamsResponseAmino;
            fromAminoMsg(object: _148.QueryParamsResponseAminoMsg): _148.QueryParamsResponse;
            toAminoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _148.QueryParamsResponseProtoMsg): _148.QueryParamsResponse;
            toProto(message: _148.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            encode(message: _148.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AssetTypeRequest;
            fromPartial(object: Partial<_148.AssetTypeRequest>): _148.AssetTypeRequest;
            fromAmino(object: _148.AssetTypeRequestAmino): _148.AssetTypeRequest;
            toAmino(message: _148.AssetTypeRequest): _148.AssetTypeRequestAmino;
            fromAminoMsg(object: _148.AssetTypeRequestAminoMsg): _148.AssetTypeRequest;
            toAminoMsg(message: _148.AssetTypeRequest): _148.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _148.AssetTypeRequestProtoMsg): _148.AssetTypeRequest;
            toProto(message: _148.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _148.AssetTypeRequest): _148.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            encode(message: _148.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AssetTypeResponse;
            fromPartial(object: Partial<_148.AssetTypeResponse>): _148.AssetTypeResponse;
            fromAmino(object: _148.AssetTypeResponseAmino): _148.AssetTypeResponse;
            toAmino(message: _148.AssetTypeResponse): _148.AssetTypeResponseAmino;
            fromAminoMsg(object: _148.AssetTypeResponseAminoMsg): _148.AssetTypeResponse;
            toAminoMsg(message: _148.AssetTypeResponse): _148.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _148.AssetTypeResponseProtoMsg): _148.AssetTypeResponse;
            toProto(message: _148.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _148.AssetTypeResponse): _148.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            encode(_: _148.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AllAssetsRequest;
            fromPartial(_: Partial<_148.AllAssetsRequest>): _148.AllAssetsRequest;
            fromAmino(_: _148.AllAssetsRequestAmino): _148.AllAssetsRequest;
            toAmino(_: _148.AllAssetsRequest): _148.AllAssetsRequestAmino;
            fromAminoMsg(object: _148.AllAssetsRequestAminoMsg): _148.AllAssetsRequest;
            toAminoMsg(message: _148.AllAssetsRequest): _148.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _148.AllAssetsRequestProtoMsg): _148.AllAssetsRequest;
            toProto(message: _148.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _148.AllAssetsRequest): _148.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            encode(message: _148.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AllAssetsResponse;
            fromPartial(object: Partial<_148.AllAssetsResponse>): _148.AllAssetsResponse;
            fromAmino(object: _148.AllAssetsResponseAmino): _148.AllAssetsResponse;
            toAmino(message: _148.AllAssetsResponse): _148.AllAssetsResponseAmino;
            fromAminoMsg(object: _148.AllAssetsResponseAminoMsg): _148.AllAssetsResponse;
            toAminoMsg(message: _148.AllAssetsResponse): _148.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _148.AllAssetsResponseProtoMsg): _148.AllAssetsResponse;
            toProto(message: _148.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _148.AllAssetsResponse): _148.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            encode(message: _148.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AssetMultiplierRequest;
            fromPartial(object: Partial<_148.AssetMultiplierRequest>): _148.AssetMultiplierRequest;
            fromAmino(object: _148.AssetMultiplierRequestAmino): _148.AssetMultiplierRequest;
            toAmino(message: _148.AssetMultiplierRequest): _148.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _148.AssetMultiplierRequestAminoMsg): _148.AssetMultiplierRequest;
            toAminoMsg(message: _148.AssetMultiplierRequest): _148.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _148.AssetMultiplierRequestProtoMsg): _148.AssetMultiplierRequest;
            toProto(message: _148.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _148.AssetMultiplierRequest): _148.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            encode(message: _148.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AssetMultiplierResponse;
            fromPartial(object: Partial<_148.AssetMultiplierResponse>): _148.AssetMultiplierResponse;
            fromAmino(object: _148.AssetMultiplierResponseAmino): _148.AssetMultiplierResponse;
            toAmino(message: _148.AssetMultiplierResponse): _148.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _148.AssetMultiplierResponseAminoMsg): _148.AssetMultiplierResponse;
            toAminoMsg(message: _148.AssetMultiplierResponse): _148.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _148.AssetMultiplierResponseProtoMsg): _148.AssetMultiplierResponse;
            toProto(message: _148.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _148.AssetMultiplierResponse): _148.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _148.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_148.SuperfluidIntermediaryAccountInfo>): _148.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _148.SuperfluidIntermediaryAccountInfoAmino): _148.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _148.SuperfluidIntermediaryAccountInfo): _148.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _148.SuperfluidIntermediaryAccountInfoAminoMsg): _148.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _148.SuperfluidIntermediaryAccountInfo): _148.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _148.SuperfluidIntermediaryAccountInfoProtoMsg): _148.SuperfluidIntermediaryAccountInfo;
            toProto(message: _148.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _148.SuperfluidIntermediaryAccountInfo): _148.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _148.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_148.AllIntermediaryAccountsRequest>): _148.AllIntermediaryAccountsRequest;
            fromAmino(object: _148.AllIntermediaryAccountsRequestAmino): _148.AllIntermediaryAccountsRequest;
            toAmino(message: _148.AllIntermediaryAccountsRequest): _148.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _148.AllIntermediaryAccountsRequestAminoMsg): _148.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _148.AllIntermediaryAccountsRequest): _148.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _148.AllIntermediaryAccountsRequestProtoMsg): _148.AllIntermediaryAccountsRequest;
            toProto(message: _148.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _148.AllIntermediaryAccountsRequest): _148.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _148.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_148.AllIntermediaryAccountsResponse>): _148.AllIntermediaryAccountsResponse;
            fromAmino(object: _148.AllIntermediaryAccountsResponseAmino): _148.AllIntermediaryAccountsResponse;
            toAmino(message: _148.AllIntermediaryAccountsResponse): _148.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _148.AllIntermediaryAccountsResponseAminoMsg): _148.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _148.AllIntermediaryAccountsResponse): _148.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _148.AllIntermediaryAccountsResponseProtoMsg): _148.AllIntermediaryAccountsResponse;
            toProto(message: _148.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _148.AllIntermediaryAccountsResponse): _148.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _148.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_148.ConnectedIntermediaryAccountRequest>): _148.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _148.ConnectedIntermediaryAccountRequestAmino): _148.ConnectedIntermediaryAccountRequest;
            toAmino(message: _148.ConnectedIntermediaryAccountRequest): _148.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _148.ConnectedIntermediaryAccountRequestAminoMsg): _148.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _148.ConnectedIntermediaryAccountRequest): _148.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _148.ConnectedIntermediaryAccountRequestProtoMsg): _148.ConnectedIntermediaryAccountRequest;
            toProto(message: _148.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _148.ConnectedIntermediaryAccountRequest): _148.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _148.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_148.ConnectedIntermediaryAccountResponse>): _148.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _148.ConnectedIntermediaryAccountResponseAmino): _148.ConnectedIntermediaryAccountResponse;
            toAmino(message: _148.ConnectedIntermediaryAccountResponse): _148.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _148.ConnectedIntermediaryAccountResponseAminoMsg): _148.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _148.ConnectedIntermediaryAccountResponse): _148.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _148.ConnectedIntermediaryAccountResponseProtoMsg): _148.ConnectedIntermediaryAccountResponse;
            toProto(message: _148.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _148.ConnectedIntermediaryAccountResponse): _148.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _148.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_148.QueryTotalDelegationByValidatorForDenomRequest>): _148.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _148.QueryTotalDelegationByValidatorForDenomRequestAmino): _148.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _148.QueryTotalDelegationByValidatorForDenomRequest): _148.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _148.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _148.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _148.QueryTotalDelegationByValidatorForDenomRequest): _148.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _148.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _148.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _148.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _148.QueryTotalDelegationByValidatorForDenomRequest): _148.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _148.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_148.QueryTotalDelegationByValidatorForDenomResponse>): _148.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _148.QueryTotalDelegationByValidatorForDenomResponseAmino): _148.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _148.QueryTotalDelegationByValidatorForDenomResponse): _148.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _148.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _148.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _148.QueryTotalDelegationByValidatorForDenomResponse): _148.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _148.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _148.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _148.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _148.QueryTotalDelegationByValidatorForDenomResponse): _148.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            encode(message: _148.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Delegations;
            fromPartial(object: Partial<_148.Delegations>): _148.Delegations;
            fromAmino(object: _148.DelegationsAmino): _148.Delegations;
            toAmino(message: _148.Delegations): _148.DelegationsAmino;
            fromAminoMsg(object: _148.DelegationsAminoMsg): _148.Delegations;
            toAminoMsg(message: _148.Delegations): _148.DelegationsAminoMsg;
            fromProtoMsg(message: _148.DelegationsProtoMsg): _148.Delegations;
            toProto(message: _148.Delegations): Uint8Array;
            toProtoMsg(message: _148.Delegations): _148.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _148.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_148.TotalSuperfluidDelegationsRequest>): _148.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _148.TotalSuperfluidDelegationsRequestAmino): _148.TotalSuperfluidDelegationsRequest;
            toAmino(_: _148.TotalSuperfluidDelegationsRequest): _148.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _148.TotalSuperfluidDelegationsRequestAminoMsg): _148.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _148.TotalSuperfluidDelegationsRequest): _148.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _148.TotalSuperfluidDelegationsRequestProtoMsg): _148.TotalSuperfluidDelegationsRequest;
            toProto(message: _148.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _148.TotalSuperfluidDelegationsRequest): _148.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _148.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_148.TotalSuperfluidDelegationsResponse>): _148.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _148.TotalSuperfluidDelegationsResponseAmino): _148.TotalSuperfluidDelegationsResponse;
            toAmino(message: _148.TotalSuperfluidDelegationsResponse): _148.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _148.TotalSuperfluidDelegationsResponseAminoMsg): _148.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _148.TotalSuperfluidDelegationsResponse): _148.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _148.TotalSuperfluidDelegationsResponseProtoMsg): _148.TotalSuperfluidDelegationsResponse;
            toProto(message: _148.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _148.TotalSuperfluidDelegationsResponse): _148.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _148.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_148.SuperfluidDelegationAmountRequest>): _148.SuperfluidDelegationAmountRequest;
            fromAmino(object: _148.SuperfluidDelegationAmountRequestAmino): _148.SuperfluidDelegationAmountRequest;
            toAmino(message: _148.SuperfluidDelegationAmountRequest): _148.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationAmountRequestAminoMsg): _148.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _148.SuperfluidDelegationAmountRequest): _148.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationAmountRequestProtoMsg): _148.SuperfluidDelegationAmountRequest;
            toProto(message: _148.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationAmountRequest): _148.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _148.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_148.SuperfluidDelegationAmountResponse>): _148.SuperfluidDelegationAmountResponse;
            fromAmino(object: _148.SuperfluidDelegationAmountResponseAmino): _148.SuperfluidDelegationAmountResponse;
            toAmino(message: _148.SuperfluidDelegationAmountResponse): _148.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationAmountResponseAminoMsg): _148.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _148.SuperfluidDelegationAmountResponse): _148.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationAmountResponseProtoMsg): _148.SuperfluidDelegationAmountResponse;
            toProto(message: _148.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationAmountResponse): _148.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _148.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_148.SuperfluidDelegationsByDelegatorRequest>): _148.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _148.SuperfluidDelegationsByDelegatorRequestAmino): _148.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _148.SuperfluidDelegationsByDelegatorRequest): _148.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationsByDelegatorRequestAminoMsg): _148.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _148.SuperfluidDelegationsByDelegatorRequest): _148.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationsByDelegatorRequestProtoMsg): _148.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _148.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationsByDelegatorRequest): _148.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _148.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_148.SuperfluidDelegationsByDelegatorResponse>): _148.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _148.SuperfluidDelegationsByDelegatorResponseAmino): _148.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _148.SuperfluidDelegationsByDelegatorResponse): _148.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationsByDelegatorResponseAminoMsg): _148.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _148.SuperfluidDelegationsByDelegatorResponse): _148.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationsByDelegatorResponseProtoMsg): _148.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _148.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationsByDelegatorResponse): _148.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _148.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_148.SuperfluidUndelegationsByDelegatorRequest>): _148.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _148.SuperfluidUndelegationsByDelegatorRequestAmino): _148.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _148.SuperfluidUndelegationsByDelegatorRequest): _148.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _148.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _148.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _148.SuperfluidUndelegationsByDelegatorRequest): _148.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _148.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _148.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _148.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _148.SuperfluidUndelegationsByDelegatorRequest): _148.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _148.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_148.SuperfluidUndelegationsByDelegatorResponse>): _148.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _148.SuperfluidUndelegationsByDelegatorResponseAmino): _148.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _148.SuperfluidUndelegationsByDelegatorResponse): _148.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _148.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _148.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _148.SuperfluidUndelegationsByDelegatorResponse): _148.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _148.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _148.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _148.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _148.SuperfluidUndelegationsByDelegatorResponse): _148.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _148.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_148.SuperfluidDelegationsByValidatorDenomRequest>): _148.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _148.SuperfluidDelegationsByValidatorDenomRequestAmino): _148.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _148.SuperfluidDelegationsByValidatorDenomRequest): _148.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _148.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _148.SuperfluidDelegationsByValidatorDenomRequest): _148.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _148.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _148.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationsByValidatorDenomRequest): _148.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _148.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_148.SuperfluidDelegationsByValidatorDenomResponse>): _148.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _148.SuperfluidDelegationsByValidatorDenomResponseAmino): _148.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _148.SuperfluidDelegationsByValidatorDenomResponse): _148.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _148.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _148.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _148.SuperfluidDelegationsByValidatorDenomResponse): _148.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _148.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _148.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _148.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _148.SuperfluidDelegationsByValidatorDenomResponse): _148.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _148.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_148.QueryTotalDelegationByDelegatorRequest>): _148.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _148.QueryTotalDelegationByDelegatorRequestAmino): _148.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _148.QueryTotalDelegationByDelegatorRequest): _148.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _148.QueryTotalDelegationByDelegatorRequestAminoMsg): _148.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _148.QueryTotalDelegationByDelegatorRequest): _148.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _148.QueryTotalDelegationByDelegatorRequestProtoMsg): _148.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _148.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _148.QueryTotalDelegationByDelegatorRequest): _148.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _148.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_148.QueryTotalDelegationByDelegatorResponse>): _148.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _148.QueryTotalDelegationByDelegatorResponseAmino): _148.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _148.QueryTotalDelegationByDelegatorResponse): _148.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _148.QueryTotalDelegationByDelegatorResponseAminoMsg): _148.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _148.QueryTotalDelegationByDelegatorResponse): _148.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _148.QueryTotalDelegationByDelegatorResponseProtoMsg): _148.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _148.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _148.QueryTotalDelegationByDelegatorResponse): _148.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _148.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_148.QueryUnpoolWhitelistRequest>): _148.QueryUnpoolWhitelistRequest;
            fromAmino(_: _148.QueryUnpoolWhitelistRequestAmino): _148.QueryUnpoolWhitelistRequest;
            toAmino(_: _148.QueryUnpoolWhitelistRequest): _148.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _148.QueryUnpoolWhitelistRequestAminoMsg): _148.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _148.QueryUnpoolWhitelistRequest): _148.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _148.QueryUnpoolWhitelistRequestProtoMsg): _148.QueryUnpoolWhitelistRequest;
            toProto(message: _148.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _148.QueryUnpoolWhitelistRequest): _148.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _148.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_148.QueryUnpoolWhitelistResponse>): _148.QueryUnpoolWhitelistResponse;
            fromAmino(object: _148.QueryUnpoolWhitelistResponseAmino): _148.QueryUnpoolWhitelistResponse;
            toAmino(message: _148.QueryUnpoolWhitelistResponse): _148.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _148.QueryUnpoolWhitelistResponseAminoMsg): _148.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _148.QueryUnpoolWhitelistResponse): _148.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _148.QueryUnpoolWhitelistResponseProtoMsg): _148.QueryUnpoolWhitelistResponse;
            toProto(message: _148.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _148.QueryUnpoolWhitelistResponse): _148.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
            fromPartial(object: Partial<_147.Params>): _147.Params;
            fromAmino(object: _147.ParamsAmino): _147.Params;
            toAmino(message: _147.Params): _147.ParamsAmino;
            fromAminoMsg(object: _147.ParamsAminoMsg): _147.Params;
            toAminoMsg(message: _147.Params): _147.ParamsAminoMsg;
            fromProtoMsg(message: _147.ParamsProtoMsg): _147.Params;
            toProto(message: _147.Params): Uint8Array;
            toProtoMsg(message: _147.Params): _147.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
            fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            fromAmino(object: _146.GenesisStateAmino): _146.GenesisState;
            toAmino(message: _146.GenesisState): _146.GenesisStateAmino;
            fromAminoMsg(object: _146.GenesisStateAminoMsg): _146.GenesisState;
            toAminoMsg(message: _146.GenesisState): _146.GenesisStateAminoMsg;
            fromProtoMsg(message: _146.GenesisStateProtoMsg): _146.GenesisState;
            toProto(message: _146.GenesisState): Uint8Array;
            toProtoMsg(message: _146.GenesisState): _146.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                denomAuthorityMetadata(request: _154.QueryDenomAuthorityMetadataRequest): Promise<_154.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _154.QueryDenomsFromCreatorRequest): Promise<_154.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _154.QueryBeforeSendHookAddressRequest): Promise<_154.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _155.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _155.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _155.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _155.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _155.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _155.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _155.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _155.MsgCreateDenom): {
                        typeUrl: string;
                        value: _155.MsgCreateDenom;
                    };
                    mint(value: _155.MsgMint): {
                        typeUrl: string;
                        value: _155.MsgMint;
                    };
                    burn(value: _155.MsgBurn): {
                        typeUrl: string;
                        value: _155.MsgBurn;
                    };
                    changeAdmin(value: _155.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _155.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _155.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _155.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _155.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _155.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _155.MsgForceTransfer): {
                        typeUrl: string;
                        value: _155.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _155.MsgCreateDenom): {
                        typeUrl: string;
                        value: _155.MsgCreateDenom;
                    };
                    mint(value: _155.MsgMint): {
                        typeUrl: string;
                        value: _155.MsgMint;
                    };
                    burn(value: _155.MsgBurn): {
                        typeUrl: string;
                        value: _155.MsgBurn;
                    };
                    changeAdmin(value: _155.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _155.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _155.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _155.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _155.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _155.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _155.MsgForceTransfer): {
                        typeUrl: string;
                        value: _155.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreateDenom) => _155.MsgCreateDenomAmino;
                    fromAmino: (object: _155.MsgCreateDenomAmino) => _155.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _155.MsgMint) => _155.MsgMintAmino;
                    fromAmino: (object: _155.MsgMintAmino) => _155.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _155.MsgBurn) => _155.MsgBurnAmino;
                    fromAmino: (object: _155.MsgBurnAmino) => _155.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _155.MsgChangeAdmin) => _155.MsgChangeAdminAmino;
                    fromAmino: (object: _155.MsgChangeAdminAmino) => _155.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetDenomMetadata) => _155.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _155.MsgSetDenomMetadataAmino) => _155.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSetBeforeSendHook) => _155.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _155.MsgSetBeforeSendHookAmino) => _155.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _155.MsgForceTransfer) => _155.MsgForceTransferAmino;
                    fromAmino: (object: _155.MsgForceTransferAmino) => _155.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _155.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateDenom;
                fromPartial(object: Partial<_155.MsgCreateDenom>): _155.MsgCreateDenom;
                fromAmino(object: _155.MsgCreateDenomAmino): _155.MsgCreateDenom;
                toAmino(message: _155.MsgCreateDenom): _155.MsgCreateDenomAmino;
                fromAminoMsg(object: _155.MsgCreateDenomAminoMsg): _155.MsgCreateDenom;
                toAminoMsg(message: _155.MsgCreateDenom): _155.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _155.MsgCreateDenomProtoMsg): _155.MsgCreateDenom;
                toProto(message: _155.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _155.MsgCreateDenom): _155.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                encode(message: _155.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgCreateDenomResponse;
                fromPartial(object: Partial<_155.MsgCreateDenomResponse>): _155.MsgCreateDenomResponse;
                fromAmino(object: _155.MsgCreateDenomResponseAmino): _155.MsgCreateDenomResponse;
                toAmino(message: _155.MsgCreateDenomResponse): _155.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _155.MsgCreateDenomResponseAminoMsg): _155.MsgCreateDenomResponse;
                toAminoMsg(message: _155.MsgCreateDenomResponse): _155.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreateDenomResponseProtoMsg): _155.MsgCreateDenomResponse;
                toProto(message: _155.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreateDenomResponse): _155.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                encode(message: _155.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgMint;
                fromPartial(object: Partial<_155.MsgMint>): _155.MsgMint;
                fromAmino(object: _155.MsgMintAmino): _155.MsgMint;
                toAmino(message: _155.MsgMint): _155.MsgMintAmino;
                fromAminoMsg(object: _155.MsgMintAminoMsg): _155.MsgMint;
                toAminoMsg(message: _155.MsgMint): _155.MsgMintAminoMsg;
                fromProtoMsg(message: _155.MsgMintProtoMsg): _155.MsgMint;
                toProto(message: _155.MsgMint): Uint8Array;
                toProtoMsg(message: _155.MsgMint): _155.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                encode(_: _155.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgMintResponse;
                fromPartial(_: Partial<_155.MsgMintResponse>): _155.MsgMintResponse;
                fromAmino(_: _155.MsgMintResponseAmino): _155.MsgMintResponse;
                toAmino(_: _155.MsgMintResponse): _155.MsgMintResponseAmino;
                fromAminoMsg(object: _155.MsgMintResponseAminoMsg): _155.MsgMintResponse;
                toAminoMsg(message: _155.MsgMintResponse): _155.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _155.MsgMintResponseProtoMsg): _155.MsgMintResponse;
                toProto(message: _155.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _155.MsgMintResponse): _155.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                encode(message: _155.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgBurn;
                fromPartial(object: Partial<_155.MsgBurn>): _155.MsgBurn;
                fromAmino(object: _155.MsgBurnAmino): _155.MsgBurn;
                toAmino(message: _155.MsgBurn): _155.MsgBurnAmino;
                fromAminoMsg(object: _155.MsgBurnAminoMsg): _155.MsgBurn;
                toAminoMsg(message: _155.MsgBurn): _155.MsgBurnAminoMsg;
                fromProtoMsg(message: _155.MsgBurnProtoMsg): _155.MsgBurn;
                toProto(message: _155.MsgBurn): Uint8Array;
                toProtoMsg(message: _155.MsgBurn): _155.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                encode(_: _155.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgBurnResponse;
                fromPartial(_: Partial<_155.MsgBurnResponse>): _155.MsgBurnResponse;
                fromAmino(_: _155.MsgBurnResponseAmino): _155.MsgBurnResponse;
                toAmino(_: _155.MsgBurnResponse): _155.MsgBurnResponseAmino;
                fromAminoMsg(object: _155.MsgBurnResponseAminoMsg): _155.MsgBurnResponse;
                toAminoMsg(message: _155.MsgBurnResponse): _155.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _155.MsgBurnResponseProtoMsg): _155.MsgBurnResponse;
                toProto(message: _155.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _155.MsgBurnResponse): _155.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                encode(message: _155.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgChangeAdmin;
                fromPartial(object: Partial<_155.MsgChangeAdmin>): _155.MsgChangeAdmin;
                fromAmino(object: _155.MsgChangeAdminAmino): _155.MsgChangeAdmin;
                toAmino(message: _155.MsgChangeAdmin): _155.MsgChangeAdminAmino;
                fromAminoMsg(object: _155.MsgChangeAdminAminoMsg): _155.MsgChangeAdmin;
                toAminoMsg(message: _155.MsgChangeAdmin): _155.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _155.MsgChangeAdminProtoMsg): _155.MsgChangeAdmin;
                toProto(message: _155.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _155.MsgChangeAdmin): _155.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                encode(_: _155.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgChangeAdminResponse;
                fromPartial(_: Partial<_155.MsgChangeAdminResponse>): _155.MsgChangeAdminResponse;
                fromAmino(_: _155.MsgChangeAdminResponseAmino): _155.MsgChangeAdminResponse;
                toAmino(_: _155.MsgChangeAdminResponse): _155.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _155.MsgChangeAdminResponseAminoMsg): _155.MsgChangeAdminResponse;
                toAminoMsg(message: _155.MsgChangeAdminResponse): _155.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _155.MsgChangeAdminResponseProtoMsg): _155.MsgChangeAdminResponse;
                toProto(message: _155.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _155.MsgChangeAdminResponse): _155.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                encode(message: _155.MsgSetBeforeSendHook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_155.MsgSetBeforeSendHook>): _155.MsgSetBeforeSendHook;
                fromAmino(object: _155.MsgSetBeforeSendHookAmino): _155.MsgSetBeforeSendHook;
                toAmino(message: _155.MsgSetBeforeSendHook): _155.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _155.MsgSetBeforeSendHookAminoMsg): _155.MsgSetBeforeSendHook;
                toAminoMsg(message: _155.MsgSetBeforeSendHook): _155.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _155.MsgSetBeforeSendHookProtoMsg): _155.MsgSetBeforeSendHook;
                toProto(message: _155.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _155.MsgSetBeforeSendHook): _155.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                encode(_: _155.MsgSetBeforeSendHookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_155.MsgSetBeforeSendHookResponse>): _155.MsgSetBeforeSendHookResponse;
                fromAmino(_: _155.MsgSetBeforeSendHookResponseAmino): _155.MsgSetBeforeSendHookResponse;
                toAmino(_: _155.MsgSetBeforeSendHookResponse): _155.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _155.MsgSetBeforeSendHookResponseAminoMsg): _155.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _155.MsgSetBeforeSendHookResponse): _155.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetBeforeSendHookResponseProtoMsg): _155.MsgSetBeforeSendHookResponse;
                toProto(message: _155.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetBeforeSendHookResponse): _155.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                encode(message: _155.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetDenomMetadata;
                fromPartial(object: Partial<_155.MsgSetDenomMetadata>): _155.MsgSetDenomMetadata;
                fromAmino(object: _155.MsgSetDenomMetadataAmino): _155.MsgSetDenomMetadata;
                toAmino(message: _155.MsgSetDenomMetadata): _155.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _155.MsgSetDenomMetadataAminoMsg): _155.MsgSetDenomMetadata;
                toAminoMsg(message: _155.MsgSetDenomMetadata): _155.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _155.MsgSetDenomMetadataProtoMsg): _155.MsgSetDenomMetadata;
                toProto(message: _155.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _155.MsgSetDenomMetadata): _155.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _155.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_155.MsgSetDenomMetadataResponse>): _155.MsgSetDenomMetadataResponse;
                fromAmino(_: _155.MsgSetDenomMetadataResponseAmino): _155.MsgSetDenomMetadataResponse;
                toAmino(_: _155.MsgSetDenomMetadataResponse): _155.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _155.MsgSetDenomMetadataResponseAminoMsg): _155.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _155.MsgSetDenomMetadataResponse): _155.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSetDenomMetadataResponseProtoMsg): _155.MsgSetDenomMetadataResponse;
                toProto(message: _155.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSetDenomMetadataResponse): _155.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                encode(message: _155.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgForceTransfer;
                fromPartial(object: Partial<_155.MsgForceTransfer>): _155.MsgForceTransfer;
                fromAmino(object: _155.MsgForceTransferAmino): _155.MsgForceTransfer;
                toAmino(message: _155.MsgForceTransfer): _155.MsgForceTransferAmino;
                fromAminoMsg(object: _155.MsgForceTransferAminoMsg): _155.MsgForceTransfer;
                toAminoMsg(message: _155.MsgForceTransfer): _155.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _155.MsgForceTransferProtoMsg): _155.MsgForceTransfer;
                toProto(message: _155.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _155.MsgForceTransfer): _155.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                encode(_: _155.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgForceTransferResponse;
                fromPartial(_: Partial<_155.MsgForceTransferResponse>): _155.MsgForceTransferResponse;
                fromAmino(_: _155.MsgForceTransferResponseAmino): _155.MsgForceTransferResponse;
                toAmino(_: _155.MsgForceTransferResponse): _155.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _155.MsgForceTransferResponseAminoMsg): _155.MsgForceTransferResponse;
                toAminoMsg(message: _155.MsgForceTransferResponse): _155.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _155.MsgForceTransferResponseProtoMsg): _155.MsgForceTransferResponse;
                toProto(message: _155.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _155.MsgForceTransferResponse): _155.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
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
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _154.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_154.QueryDenomAuthorityMetadataRequest>): _154.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _154.QueryDenomAuthorityMetadataRequestAmino): _154.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _154.QueryDenomAuthorityMetadataRequest): _154.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _154.QueryDenomAuthorityMetadataRequestAminoMsg): _154.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _154.QueryDenomAuthorityMetadataRequest): _154.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _154.QueryDenomAuthorityMetadataRequestProtoMsg): _154.QueryDenomAuthorityMetadataRequest;
                toProto(message: _154.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _154.QueryDenomAuthorityMetadataRequest): _154.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _154.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_154.QueryDenomAuthorityMetadataResponse>): _154.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _154.QueryDenomAuthorityMetadataResponseAmino): _154.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _154.QueryDenomAuthorityMetadataResponse): _154.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _154.QueryDenomAuthorityMetadataResponseAminoMsg): _154.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _154.QueryDenomAuthorityMetadataResponse): _154.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _154.QueryDenomAuthorityMetadataResponseProtoMsg): _154.QueryDenomAuthorityMetadataResponse;
                toProto(message: _154.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _154.QueryDenomAuthorityMetadataResponse): _154.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _154.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_154.QueryDenomsFromCreatorRequest>): _154.QueryDenomsFromCreatorRequest;
                fromAmino(object: _154.QueryDenomsFromCreatorRequestAmino): _154.QueryDenomsFromCreatorRequest;
                toAmino(message: _154.QueryDenomsFromCreatorRequest): _154.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _154.QueryDenomsFromCreatorRequestAminoMsg): _154.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _154.QueryDenomsFromCreatorRequest): _154.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _154.QueryDenomsFromCreatorRequestProtoMsg): _154.QueryDenomsFromCreatorRequest;
                toProto(message: _154.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _154.QueryDenomsFromCreatorRequest): _154.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _154.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_154.QueryDenomsFromCreatorResponse>): _154.QueryDenomsFromCreatorResponse;
                fromAmino(object: _154.QueryDenomsFromCreatorResponseAmino): _154.QueryDenomsFromCreatorResponse;
                toAmino(message: _154.QueryDenomsFromCreatorResponse): _154.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _154.QueryDenomsFromCreatorResponseAminoMsg): _154.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _154.QueryDenomsFromCreatorResponse): _154.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _154.QueryDenomsFromCreatorResponseProtoMsg): _154.QueryDenomsFromCreatorResponse;
                toProto(message: _154.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _154.QueryDenomsFromCreatorResponse): _154.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                encode(message: _154.QueryBeforeSendHookAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_154.QueryBeforeSendHookAddressRequest>): _154.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _154.QueryBeforeSendHookAddressRequestAmino): _154.QueryBeforeSendHookAddressRequest;
                toAmino(message: _154.QueryBeforeSendHookAddressRequest): _154.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _154.QueryBeforeSendHookAddressRequestAminoMsg): _154.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _154.QueryBeforeSendHookAddressRequest): _154.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _154.QueryBeforeSendHookAddressRequestProtoMsg): _154.QueryBeforeSendHookAddressRequest;
                toProto(message: _154.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _154.QueryBeforeSendHookAddressRequest): _154.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                encode(message: _154.QueryBeforeSendHookAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_154.QueryBeforeSendHookAddressResponse>): _154.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _154.QueryBeforeSendHookAddressResponseAmino): _154.QueryBeforeSendHookAddressResponse;
                toAmino(message: _154.QueryBeforeSendHookAddressResponse): _154.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _154.QueryBeforeSendHookAddressResponseAminoMsg): _154.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _154.QueryBeforeSendHookAddressResponse): _154.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _154.QueryBeforeSendHookAddressResponseProtoMsg): _154.QueryBeforeSendHookAddressResponse;
                toProto(message: _154.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _154.QueryBeforeSendHookAddressResponse): _154.QueryBeforeSendHookAddressResponseProtoMsg;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromPartial(object: Partial<_153.Params>): _153.Params;
                fromAmino(object: _153.ParamsAmino): _153.Params;
                toAmino(message: _153.Params): _153.ParamsAmino;
                fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
                toAminoMsg(message: _153.Params): _153.ParamsAminoMsg;
                fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
                toProto(message: _153.Params): Uint8Array;
                toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
                fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                toProto(message: _152.GenesisState): Uint8Array;
                toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                encode(message: _152.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisDenom;
                fromPartial(object: Partial<_152.GenesisDenom>): _152.GenesisDenom;
                fromAmino(object: _152.GenesisDenomAmino): _152.GenesisDenom;
                toAmino(message: _152.GenesisDenom): _152.GenesisDenomAmino;
                fromAminoMsg(object: _152.GenesisDenomAminoMsg): _152.GenesisDenom;
                toAminoMsg(message: _152.GenesisDenom): _152.GenesisDenomAminoMsg;
                fromProtoMsg(message: _152.GenesisDenomProtoMsg): _152.GenesisDenom;
                toProto(message: _152.GenesisDenom): Uint8Array;
                toProtoMsg(message: _152.GenesisDenom): _152.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                encode(message: _151.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.DenomAuthorityMetadata;
                fromPartial(object: Partial<_151.DenomAuthorityMetadata>): _151.DenomAuthorityMetadata;
                fromAmino(object: _151.DenomAuthorityMetadataAmino): _151.DenomAuthorityMetadata;
                toAmino(message: _151.DenomAuthorityMetadata): _151.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _151.DenomAuthorityMetadataAminoMsg): _151.DenomAuthorityMetadata;
                toAminoMsg(message: _151.DenomAuthorityMetadata): _151.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _151.DenomAuthorityMetadataProtoMsg): _151.DenomAuthorityMetadata;
                toProto(message: _151.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _151.DenomAuthorityMetadata): _151.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _157.ParamsRequest): Promise<_157.ParamsResponse>;
                arithmeticTwap(request: _157.ArithmeticTwapRequest): Promise<_157.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _157.ArithmeticTwapToNowRequest): Promise<_157.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _157.GeometricTwapRequest): Promise<_157.GeometricTwapResponse>;
                geometricTwapToNow(request: _157.GeometricTwapToNowRequest): Promise<_157.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            TwapRecord: {
                encode(message: _158.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TwapRecord;
                fromPartial(object: Partial<_158.TwapRecord>): _158.TwapRecord;
                fromAmino(object: _158.TwapRecordAmino): _158.TwapRecord;
                toAmino(message: _158.TwapRecord): _158.TwapRecordAmino;
                fromAminoMsg(object: _158.TwapRecordAminoMsg): _158.TwapRecord;
                toAminoMsg(message: _158.TwapRecord): _158.TwapRecordAminoMsg;
                fromProtoMsg(message: _158.TwapRecordProtoMsg): _158.TwapRecord;
                toProto(message: _158.TwapRecord): Uint8Array;
                toProtoMsg(message: _158.TwapRecord): _158.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                encode(message: _157.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ArithmeticTwapRequest;
                fromPartial(object: Partial<_157.ArithmeticTwapRequest>): _157.ArithmeticTwapRequest;
                fromAmino(object: _157.ArithmeticTwapRequestAmino): _157.ArithmeticTwapRequest;
                toAmino(message: _157.ArithmeticTwapRequest): _157.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _157.ArithmeticTwapRequestAminoMsg): _157.ArithmeticTwapRequest;
                toAminoMsg(message: _157.ArithmeticTwapRequest): _157.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _157.ArithmeticTwapRequestProtoMsg): _157.ArithmeticTwapRequest;
                toProto(message: _157.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _157.ArithmeticTwapRequest): _157.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                encode(message: _157.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ArithmeticTwapResponse;
                fromPartial(object: Partial<_157.ArithmeticTwapResponse>): _157.ArithmeticTwapResponse;
                fromAmino(object: _157.ArithmeticTwapResponseAmino): _157.ArithmeticTwapResponse;
                toAmino(message: _157.ArithmeticTwapResponse): _157.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _157.ArithmeticTwapResponseAminoMsg): _157.ArithmeticTwapResponse;
                toAminoMsg(message: _157.ArithmeticTwapResponse): _157.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _157.ArithmeticTwapResponseProtoMsg): _157.ArithmeticTwapResponse;
                toProto(message: _157.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _157.ArithmeticTwapResponse): _157.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _157.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_157.ArithmeticTwapToNowRequest>): _157.ArithmeticTwapToNowRequest;
                fromAmino(object: _157.ArithmeticTwapToNowRequestAmino): _157.ArithmeticTwapToNowRequest;
                toAmino(message: _157.ArithmeticTwapToNowRequest): _157.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _157.ArithmeticTwapToNowRequestAminoMsg): _157.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _157.ArithmeticTwapToNowRequest): _157.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _157.ArithmeticTwapToNowRequestProtoMsg): _157.ArithmeticTwapToNowRequest;
                toProto(message: _157.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _157.ArithmeticTwapToNowRequest): _157.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _157.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_157.ArithmeticTwapToNowResponse>): _157.ArithmeticTwapToNowResponse;
                fromAmino(object: _157.ArithmeticTwapToNowResponseAmino): _157.ArithmeticTwapToNowResponse;
                toAmino(message: _157.ArithmeticTwapToNowResponse): _157.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _157.ArithmeticTwapToNowResponseAminoMsg): _157.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _157.ArithmeticTwapToNowResponse): _157.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _157.ArithmeticTwapToNowResponseProtoMsg): _157.ArithmeticTwapToNowResponse;
                toProto(message: _157.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _157.ArithmeticTwapToNowResponse): _157.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                encode(message: _157.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GeometricTwapRequest;
                fromPartial(object: Partial<_157.GeometricTwapRequest>): _157.GeometricTwapRequest;
                fromAmino(object: _157.GeometricTwapRequestAmino): _157.GeometricTwapRequest;
                toAmino(message: _157.GeometricTwapRequest): _157.GeometricTwapRequestAmino;
                fromAminoMsg(object: _157.GeometricTwapRequestAminoMsg): _157.GeometricTwapRequest;
                toAminoMsg(message: _157.GeometricTwapRequest): _157.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _157.GeometricTwapRequestProtoMsg): _157.GeometricTwapRequest;
                toProto(message: _157.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _157.GeometricTwapRequest): _157.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                encode(message: _157.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GeometricTwapResponse;
                fromPartial(object: Partial<_157.GeometricTwapResponse>): _157.GeometricTwapResponse;
                fromAmino(object: _157.GeometricTwapResponseAmino): _157.GeometricTwapResponse;
                toAmino(message: _157.GeometricTwapResponse): _157.GeometricTwapResponseAmino;
                fromAminoMsg(object: _157.GeometricTwapResponseAminoMsg): _157.GeometricTwapResponse;
                toAminoMsg(message: _157.GeometricTwapResponse): _157.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _157.GeometricTwapResponseProtoMsg): _157.GeometricTwapResponse;
                toProto(message: _157.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _157.GeometricTwapResponse): _157.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                encode(message: _157.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_157.GeometricTwapToNowRequest>): _157.GeometricTwapToNowRequest;
                fromAmino(object: _157.GeometricTwapToNowRequestAmino): _157.GeometricTwapToNowRequest;
                toAmino(message: _157.GeometricTwapToNowRequest): _157.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _157.GeometricTwapToNowRequestAminoMsg): _157.GeometricTwapToNowRequest;
                toAminoMsg(message: _157.GeometricTwapToNowRequest): _157.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _157.GeometricTwapToNowRequestProtoMsg): _157.GeometricTwapToNowRequest;
                toProto(message: _157.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _157.GeometricTwapToNowRequest): _157.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                encode(message: _157.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_157.GeometricTwapToNowResponse>): _157.GeometricTwapToNowResponse;
                fromAmino(object: _157.GeometricTwapToNowResponseAmino): _157.GeometricTwapToNowResponse;
                toAmino(message: _157.GeometricTwapToNowResponse): _157.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _157.GeometricTwapToNowResponseAminoMsg): _157.GeometricTwapToNowResponse;
                toAminoMsg(message: _157.GeometricTwapToNowResponse): _157.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _157.GeometricTwapToNowResponseProtoMsg): _157.GeometricTwapToNowResponse;
                toProto(message: _157.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _157.GeometricTwapToNowResponse): _157.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                encode(_: _157.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ParamsRequest;
                fromPartial(_: Partial<_157.ParamsRequest>): _157.ParamsRequest;
                fromAmino(_: _157.ParamsRequestAmino): _157.ParamsRequest;
                toAmino(_: _157.ParamsRequest): _157.ParamsRequestAmino;
                fromAminoMsg(object: _157.ParamsRequestAminoMsg): _157.ParamsRequest;
                toAminoMsg(message: _157.ParamsRequest): _157.ParamsRequestAminoMsg;
                fromProtoMsg(message: _157.ParamsRequestProtoMsg): _157.ParamsRequest;
                toProto(message: _157.ParamsRequest): Uint8Array;
                toProtoMsg(message: _157.ParamsRequest): _157.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                encode(message: _157.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ParamsResponse;
                fromPartial(object: Partial<_157.ParamsResponse>): _157.ParamsResponse;
                fromAmino(object: _157.ParamsResponseAmino): _157.ParamsResponse;
                toAmino(message: _157.ParamsResponse): _157.ParamsResponseAmino;
                fromAminoMsg(object: _157.ParamsResponseAminoMsg): _157.ParamsResponse;
                toAminoMsg(message: _157.ParamsResponse): _157.ParamsResponseAminoMsg;
                fromProtoMsg(message: _157.ParamsResponseProtoMsg): _157.ParamsResponse;
                toProto(message: _157.ParamsResponse): Uint8Array;
                toProtoMsg(message: _157.ParamsResponse): _157.ParamsResponseProtoMsg;
            };
            Params: {
                encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(object: Partial<_156.Params>): _156.Params;
                fromAmino(object: _156.ParamsAmino): _156.Params;
                toAmino(message: _156.Params): _156.ParamsAmino;
                fromAminoMsg(object: _156.ParamsAminoMsg): _156.Params;
                toAminoMsg(message: _156.Params): _156.ParamsAminoMsg;
                fromProtoMsg(message: _156.ParamsProtoMsg): _156.Params;
                toProto(message: _156.Params): Uint8Array;
                toProtoMsg(message: _156.Params): _156.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
                fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
                toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
                fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
                toAminoMsg(message: _156.GenesisState): _156.GenesisStateAminoMsg;
                fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
                toProto(message: _156.GenesisState): Uint8Array;
                toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _162.QueryFeeTokensRequest): Promise<_162.QueryFeeTokensResponse>;
                denomSpotPrice(request: _162.QueryDenomSpotPriceRequest): Promise<_162.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _162.QueryDenomPoolIdRequest): Promise<_162.QueryDenomPoolIdResponse>;
                baseDenom(request?: _162.QueryBaseDenomRequest): Promise<_162.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _162.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeeTokensRequest;
                fromPartial(_: Partial<_162.QueryFeeTokensRequest>): _162.QueryFeeTokensRequest;
                fromAmino(_: _162.QueryFeeTokensRequestAmino): _162.QueryFeeTokensRequest;
                toAmino(_: _162.QueryFeeTokensRequest): _162.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _162.QueryFeeTokensRequestAminoMsg): _162.QueryFeeTokensRequest;
                toAminoMsg(message: _162.QueryFeeTokensRequest): _162.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _162.QueryFeeTokensRequestProtoMsg): _162.QueryFeeTokensRequest;
                toProto(message: _162.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _162.QueryFeeTokensRequest): _162.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                encode(message: _162.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeeTokensResponse;
                fromPartial(object: Partial<_162.QueryFeeTokensResponse>): _162.QueryFeeTokensResponse;
                fromAmino(object: _162.QueryFeeTokensResponseAmino): _162.QueryFeeTokensResponse;
                toAmino(message: _162.QueryFeeTokensResponse): _162.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _162.QueryFeeTokensResponseAminoMsg): _162.QueryFeeTokensResponse;
                toAminoMsg(message: _162.QueryFeeTokensResponse): _162.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _162.QueryFeeTokensResponseProtoMsg): _162.QueryFeeTokensResponse;
                toProto(message: _162.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _162.QueryFeeTokensResponse): _162.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _162.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_162.QueryDenomSpotPriceRequest>): _162.QueryDenomSpotPriceRequest;
                fromAmino(object: _162.QueryDenomSpotPriceRequestAmino): _162.QueryDenomSpotPriceRequest;
                toAmino(message: _162.QueryDenomSpotPriceRequest): _162.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _162.QueryDenomSpotPriceRequestAminoMsg): _162.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _162.QueryDenomSpotPriceRequest): _162.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _162.QueryDenomSpotPriceRequestProtoMsg): _162.QueryDenomSpotPriceRequest;
                toProto(message: _162.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _162.QueryDenomSpotPriceRequest): _162.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _162.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_162.QueryDenomSpotPriceResponse>): _162.QueryDenomSpotPriceResponse;
                fromAmino(object: _162.QueryDenomSpotPriceResponseAmino): _162.QueryDenomSpotPriceResponse;
                toAmino(message: _162.QueryDenomSpotPriceResponse): _162.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _162.QueryDenomSpotPriceResponseAminoMsg): _162.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _162.QueryDenomSpotPriceResponse): _162.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _162.QueryDenomSpotPriceResponseProtoMsg): _162.QueryDenomSpotPriceResponse;
                toProto(message: _162.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _162.QueryDenomSpotPriceResponse): _162.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _162.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_162.QueryDenomPoolIdRequest>): _162.QueryDenomPoolIdRequest;
                fromAmino(object: _162.QueryDenomPoolIdRequestAmino): _162.QueryDenomPoolIdRequest;
                toAmino(message: _162.QueryDenomPoolIdRequest): _162.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _162.QueryDenomPoolIdRequestAminoMsg): _162.QueryDenomPoolIdRequest;
                toAminoMsg(message: _162.QueryDenomPoolIdRequest): _162.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _162.QueryDenomPoolIdRequestProtoMsg): _162.QueryDenomPoolIdRequest;
                toProto(message: _162.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _162.QueryDenomPoolIdRequest): _162.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _162.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_162.QueryDenomPoolIdResponse>): _162.QueryDenomPoolIdResponse;
                fromAmino(object: _162.QueryDenomPoolIdResponseAmino): _162.QueryDenomPoolIdResponse;
                toAmino(message: _162.QueryDenomPoolIdResponse): _162.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _162.QueryDenomPoolIdResponseAminoMsg): _162.QueryDenomPoolIdResponse;
                toAminoMsg(message: _162.QueryDenomPoolIdResponse): _162.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _162.QueryDenomPoolIdResponseProtoMsg): _162.QueryDenomPoolIdResponse;
                toProto(message: _162.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _162.QueryDenomPoolIdResponse): _162.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                encode(_: _162.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryBaseDenomRequest;
                fromPartial(_: Partial<_162.QueryBaseDenomRequest>): _162.QueryBaseDenomRequest;
                fromAmino(_: _162.QueryBaseDenomRequestAmino): _162.QueryBaseDenomRequest;
                toAmino(_: _162.QueryBaseDenomRequest): _162.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _162.QueryBaseDenomRequestAminoMsg): _162.QueryBaseDenomRequest;
                toAminoMsg(message: _162.QueryBaseDenomRequest): _162.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _162.QueryBaseDenomRequestProtoMsg): _162.QueryBaseDenomRequest;
                toProto(message: _162.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _162.QueryBaseDenomRequest): _162.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                encode(message: _162.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryBaseDenomResponse;
                fromPartial(object: Partial<_162.QueryBaseDenomResponse>): _162.QueryBaseDenomResponse;
                fromAmino(object: _162.QueryBaseDenomResponseAmino): _162.QueryBaseDenomResponse;
                toAmino(message: _162.QueryBaseDenomResponse): _162.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _162.QueryBaseDenomResponseAminoMsg): _162.QueryBaseDenomResponse;
                toAminoMsg(message: _162.QueryBaseDenomResponse): _162.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _162.QueryBaseDenomResponseProtoMsg): _162.QueryBaseDenomResponse;
                toProto(message: _162.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _162.QueryBaseDenomResponse): _162.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                encode(message: _161.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_161.UpdateFeeTokenProposal>): _161.UpdateFeeTokenProposal;
                fromAmino(object: _161.UpdateFeeTokenProposalAmino): _161.UpdateFeeTokenProposal;
                toAmino(message: _161.UpdateFeeTokenProposal): _161.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _161.UpdateFeeTokenProposalAminoMsg): _161.UpdateFeeTokenProposal;
                toAminoMsg(message: _161.UpdateFeeTokenProposal): _161.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _161.UpdateFeeTokenProposalProtoMsg): _161.UpdateFeeTokenProposal;
                toProto(message: _161.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _161.UpdateFeeTokenProposal): _161.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
                fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
                fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
                toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
                fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
                toAminoMsg(message: _160.GenesisState): _160.GenesisStateAminoMsg;
                fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
                toProto(message: _160.GenesisState): Uint8Array;
                toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
            };
            FeeToken: {
                encode(message: _159.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.FeeToken;
                fromPartial(object: Partial<_159.FeeToken>): _159.FeeToken;
                fromAmino(object: _159.FeeTokenAmino): _159.FeeToken;
                toAmino(message: _159.FeeToken): _159.FeeTokenAmino;
                fromAminoMsg(object: _159.FeeTokenAminoMsg): _159.FeeToken;
                toAminoMsg(message: _159.FeeToken): _159.FeeTokenAminoMsg;
                fromProtoMsg(message: _159.FeeTokenProtoMsg): _159.FeeToken;
                toProto(message: _159.FeeToken): Uint8Array;
                toProtoMsg(message: _159.FeeToken): _159.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _163.UserValidatorPreferencesRequest): Promise<_163.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _165.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _165.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _165.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _165.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _165.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _165.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _165.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _165.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _165.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _165.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _165.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _165.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _165.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _165.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _165.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _165.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _165.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _165.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _165.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _165.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _165.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _165.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _165.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _165.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _165.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _165.MsgSetValidatorSetPreference) => _165.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _165.MsgSetValidatorSetPreferenceAmino) => _165.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _165.MsgDelegateToValidatorSet) => _165.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _165.MsgDelegateToValidatorSetAmino) => _165.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _165.MsgUndelegateFromValidatorSet) => _165.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _165.MsgUndelegateFromValidatorSetAmino) => _165.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _165.MsgRedelegateValidatorSet) => _165.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _165.MsgRedelegateValidatorSetAmino) => _165.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _165.MsgWithdrawDelegationRewards) => _165.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _165.MsgWithdrawDelegationRewardsAmino) => _165.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _165.MsgDelegateBondedTokens) => _165.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _165.MsgDelegateBondedTokensAmino) => _165.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _165.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_165.MsgSetValidatorSetPreference>): _165.MsgSetValidatorSetPreference;
                fromAmino(object: _165.MsgSetValidatorSetPreferenceAmino): _165.MsgSetValidatorSetPreference;
                toAmino(message: _165.MsgSetValidatorSetPreference): _165.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _165.MsgSetValidatorSetPreferenceAminoMsg): _165.MsgSetValidatorSetPreference;
                toAminoMsg(message: _165.MsgSetValidatorSetPreference): _165.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _165.MsgSetValidatorSetPreferenceProtoMsg): _165.MsgSetValidatorSetPreference;
                toProto(message: _165.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _165.MsgSetValidatorSetPreference): _165.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _165.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_165.MsgSetValidatorSetPreferenceResponse>): _165.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _165.MsgSetValidatorSetPreferenceResponseAmino): _165.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _165.MsgSetValidatorSetPreferenceResponse): _165.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _165.MsgSetValidatorSetPreferenceResponseAminoMsg): _165.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _165.MsgSetValidatorSetPreferenceResponse): _165.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _165.MsgSetValidatorSetPreferenceResponseProtoMsg): _165.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _165.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _165.MsgSetValidatorSetPreferenceResponse): _165.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _165.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_165.MsgDelegateToValidatorSet>): _165.MsgDelegateToValidatorSet;
                fromAmino(object: _165.MsgDelegateToValidatorSetAmino): _165.MsgDelegateToValidatorSet;
                toAmino(message: _165.MsgDelegateToValidatorSet): _165.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _165.MsgDelegateToValidatorSetAminoMsg): _165.MsgDelegateToValidatorSet;
                toAminoMsg(message: _165.MsgDelegateToValidatorSet): _165.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _165.MsgDelegateToValidatorSetProtoMsg): _165.MsgDelegateToValidatorSet;
                toProto(message: _165.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _165.MsgDelegateToValidatorSet): _165.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _165.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_165.MsgDelegateToValidatorSetResponse>): _165.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _165.MsgDelegateToValidatorSetResponseAmino): _165.MsgDelegateToValidatorSetResponse;
                toAmino(_: _165.MsgDelegateToValidatorSetResponse): _165.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _165.MsgDelegateToValidatorSetResponseAminoMsg): _165.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _165.MsgDelegateToValidatorSetResponse): _165.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _165.MsgDelegateToValidatorSetResponseProtoMsg): _165.MsgDelegateToValidatorSetResponse;
                toProto(message: _165.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _165.MsgDelegateToValidatorSetResponse): _165.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _165.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_165.MsgUndelegateFromValidatorSet>): _165.MsgUndelegateFromValidatorSet;
                fromAmino(object: _165.MsgUndelegateFromValidatorSetAmino): _165.MsgUndelegateFromValidatorSet;
                toAmino(message: _165.MsgUndelegateFromValidatorSet): _165.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _165.MsgUndelegateFromValidatorSetAminoMsg): _165.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _165.MsgUndelegateFromValidatorSet): _165.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _165.MsgUndelegateFromValidatorSetProtoMsg): _165.MsgUndelegateFromValidatorSet;
                toProto(message: _165.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _165.MsgUndelegateFromValidatorSet): _165.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _165.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_165.MsgUndelegateFromValidatorSetResponse>): _165.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _165.MsgUndelegateFromValidatorSetResponseAmino): _165.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _165.MsgUndelegateFromValidatorSetResponse): _165.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _165.MsgUndelegateFromValidatorSetResponseAminoMsg): _165.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _165.MsgUndelegateFromValidatorSetResponse): _165.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _165.MsgUndelegateFromValidatorSetResponseProtoMsg): _165.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _165.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _165.MsgUndelegateFromValidatorSetResponse): _165.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _165.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_165.MsgRedelegateValidatorSet>): _165.MsgRedelegateValidatorSet;
                fromAmino(object: _165.MsgRedelegateValidatorSetAmino): _165.MsgRedelegateValidatorSet;
                toAmino(message: _165.MsgRedelegateValidatorSet): _165.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _165.MsgRedelegateValidatorSetAminoMsg): _165.MsgRedelegateValidatorSet;
                toAminoMsg(message: _165.MsgRedelegateValidatorSet): _165.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _165.MsgRedelegateValidatorSetProtoMsg): _165.MsgRedelegateValidatorSet;
                toProto(message: _165.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _165.MsgRedelegateValidatorSet): _165.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _165.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_165.MsgRedelegateValidatorSetResponse>): _165.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _165.MsgRedelegateValidatorSetResponseAmino): _165.MsgRedelegateValidatorSetResponse;
                toAmino(_: _165.MsgRedelegateValidatorSetResponse): _165.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _165.MsgRedelegateValidatorSetResponseAminoMsg): _165.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _165.MsgRedelegateValidatorSetResponse): _165.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _165.MsgRedelegateValidatorSetResponseProtoMsg): _165.MsgRedelegateValidatorSetResponse;
                toProto(message: _165.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _165.MsgRedelegateValidatorSetResponse): _165.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _165.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_165.MsgWithdrawDelegationRewards>): _165.MsgWithdrawDelegationRewards;
                fromAmino(object: _165.MsgWithdrawDelegationRewardsAmino): _165.MsgWithdrawDelegationRewards;
                toAmino(message: _165.MsgWithdrawDelegationRewards): _165.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _165.MsgWithdrawDelegationRewardsAminoMsg): _165.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _165.MsgWithdrawDelegationRewards): _165.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _165.MsgWithdrawDelegationRewardsProtoMsg): _165.MsgWithdrawDelegationRewards;
                toProto(message: _165.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _165.MsgWithdrawDelegationRewards): _165.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _165.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_165.MsgWithdrawDelegationRewardsResponse>): _165.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _165.MsgWithdrawDelegationRewardsResponseAmino): _165.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _165.MsgWithdrawDelegationRewardsResponse): _165.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _165.MsgWithdrawDelegationRewardsResponseAminoMsg): _165.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _165.MsgWithdrawDelegationRewardsResponse): _165.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _165.MsgWithdrawDelegationRewardsResponseProtoMsg): _165.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _165.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _165.MsgWithdrawDelegationRewardsResponse): _165.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                encode(message: _165.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_165.MsgDelegateBondedTokens>): _165.MsgDelegateBondedTokens;
                fromAmino(object: _165.MsgDelegateBondedTokensAmino): _165.MsgDelegateBondedTokens;
                toAmino(message: _165.MsgDelegateBondedTokens): _165.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _165.MsgDelegateBondedTokensAminoMsg): _165.MsgDelegateBondedTokens;
                toAminoMsg(message: _165.MsgDelegateBondedTokens): _165.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _165.MsgDelegateBondedTokensProtoMsg): _165.MsgDelegateBondedTokens;
                toProto(message: _165.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _165.MsgDelegateBondedTokens): _165.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                encode(_: _165.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_165.MsgDelegateBondedTokensResponse>): _165.MsgDelegateBondedTokensResponse;
                fromAmino(_: _165.MsgDelegateBondedTokensResponseAmino): _165.MsgDelegateBondedTokensResponse;
                toAmino(_: _165.MsgDelegateBondedTokensResponse): _165.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _165.MsgDelegateBondedTokensResponseAminoMsg): _165.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _165.MsgDelegateBondedTokensResponse): _165.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _165.MsgDelegateBondedTokensResponseProtoMsg): _165.MsgDelegateBondedTokensResponse;
                toProto(message: _165.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _165.MsgDelegateBondedTokensResponse): _165.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                encode(message: _164.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorPreference;
                fromPartial(object: Partial<_164.ValidatorPreference>): _164.ValidatorPreference;
                fromAmino(object: _164.ValidatorPreferenceAmino): _164.ValidatorPreference;
                toAmino(message: _164.ValidatorPreference): _164.ValidatorPreferenceAmino;
                fromAminoMsg(object: _164.ValidatorPreferenceAminoMsg): _164.ValidatorPreference;
                toAminoMsg(message: _164.ValidatorPreference): _164.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _164.ValidatorPreferenceProtoMsg): _164.ValidatorPreference;
                toProto(message: _164.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _164.ValidatorPreference): _164.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                encode(message: _164.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorSetPreferences;
                fromPartial(object: Partial<_164.ValidatorSetPreferences>): _164.ValidatorSetPreferences;
                fromAmino(object: _164.ValidatorSetPreferencesAmino): _164.ValidatorSetPreferences;
                toAmino(message: _164.ValidatorSetPreferences): _164.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _164.ValidatorSetPreferencesAminoMsg): _164.ValidatorSetPreferences;
                toAminoMsg(message: _164.ValidatorSetPreferences): _164.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _164.ValidatorSetPreferencesProtoMsg): _164.ValidatorSetPreferences;
                toProto(message: _164.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _164.ValidatorSetPreferences): _164.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _163.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_163.UserValidatorPreferencesRequest>): _163.UserValidatorPreferencesRequest;
                fromAmino(object: _163.UserValidatorPreferencesRequestAmino): _163.UserValidatorPreferencesRequest;
                toAmino(message: _163.UserValidatorPreferencesRequest): _163.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _163.UserValidatorPreferencesRequestAminoMsg): _163.UserValidatorPreferencesRequest;
                toAminoMsg(message: _163.UserValidatorPreferencesRequest): _163.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _163.UserValidatorPreferencesRequestProtoMsg): _163.UserValidatorPreferencesRequest;
                toProto(message: _163.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _163.UserValidatorPreferencesRequest): _163.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _163.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_163.UserValidatorPreferencesResponse>): _163.UserValidatorPreferencesResponse;
                fromAmino(object: _163.UserValidatorPreferencesResponseAmino): _163.UserValidatorPreferencesResponse;
                toAmino(message: _163.UserValidatorPreferencesResponse): _163.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _163.UserValidatorPreferencesResponseAminoMsg): _163.UserValidatorPreferencesResponse;
                toAminoMsg(message: _163.UserValidatorPreferencesResponse): _163.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _163.UserValidatorPreferencesResponseProtoMsg): _163.UserValidatorPreferencesResponse;
                toProto(message: _163.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _163.UserValidatorPreferencesResponse): _163.UserValidatorPreferencesResponseProtoMsg;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/tx.rpc.msg").MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _289.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _290.MsgClientImpl;
                        };
                    };
                    v1beta1: _291.MsgClientImpl;
                };
                incentives: _292.MsgClientImpl;
                lockup: _293.MsgClientImpl;
                poolmanager: {
                    v1beta1: _294.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _295.MsgClientImpl;
                };
                superfluid: _296.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _297.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _298.MsgClientImpl;
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
                        params(request?: _98.ParamsRequest): Promise<_98.ParamsResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _102.RecoveredSinceDowntimeOfLengthRequest): Promise<_102.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _104.QueryEpochsInfoRequest): Promise<_104.QueryEpochsInfoResponse>;
                        currentEpoch(request: _104.QueryCurrentEpochRequest): Promise<_104.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _108.QueryPoolsRequest): Promise<_108.QueryPoolsResponse>;
                        numPools(request?: _108.QueryNumPoolsRequest): Promise<_108.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _108.QueryTotalLiquidityRequest): Promise<_108.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _108.QueryPoolsWithFilterRequest): Promise<_108.QueryPoolsWithFilterResponse>;
                        pool(request: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                        poolType(request: _108.QueryPoolTypeRequest): Promise<_108.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _108.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_108.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _108.QueryCalcJoinPoolSharesRequest): Promise<_108.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _108.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_108.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _108.QueryPoolParamsRequest): Promise<_108.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _108.QueryTotalPoolLiquidityRequest): Promise<_108.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _108.QueryTotalSharesRequest): Promise<_108.QueryTotalSharesResponse>;
                        spotPrice(request: _108.QuerySpotPriceRequest): Promise<_108.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _108.QuerySwapExactAmountInRequest): Promise<_108.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _108.QuerySwapExactAmountOutRequest): Promise<_108.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _113.QuerySpotPriceRequest): Promise<_113.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _116.ParamsRequest): Promise<_116.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _120.ModuleToDistributeCoinsRequest): Promise<_120.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _120.GaugeByIDRequest): Promise<_120.GaugeByIDResponse>;
                    gauges(request?: _120.GaugesRequest): Promise<_120.GaugesResponse>;
                    activeGauges(request?: _120.ActiveGaugesRequest): Promise<_120.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _120.ActiveGaugesPerDenomRequest): Promise<_120.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _120.UpcomingGaugesRequest): Promise<_120.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _120.UpcomingGaugesPerDenomRequest): Promise<_120.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _120.RewardsEstRequest): Promise<_120.RewardsEstResponse>;
                    lockableDurations(request?: _120.QueryLockableDurationsRequest): Promise<_120.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _125.ModuleBalanceRequest): Promise<_125.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _125.ModuleLockedAmountRequest): Promise<_125.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _125.AccountUnlockableCoinsRequest): Promise<_125.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _125.AccountUnlockingCoinsRequest): Promise<_125.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _125.AccountLockedCoinsRequest): Promise<_125.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _125.AccountLockedPastTimeRequest): Promise<_125.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _125.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_125.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _125.AccountUnlockedBeforeTimeRequest): Promise<_125.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _125.AccountLockedPastTimeDenomRequest): Promise<_125.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _125.LockedDenomRequest): Promise<_125.LockedDenomResponse>;
                    lockedByID(request: _125.LockedRequest): Promise<_125.LockedResponse>;
                    nextLockID(request?: _125.NextLockIDRequest): Promise<_125.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _125.SyntheticLockupsByLockupIDRequest): Promise<_125.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _125.AccountLockedLongerDurationRequest): Promise<_125.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _125.AccountLockedDurationRequest): Promise<_125.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _125.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_125.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _125.AccountLockedLongerDurationDenomRequest): Promise<_125.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                        epochProvisions(request?: _129.QueryEpochProvisionsRequest): Promise<_129.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _133.QueryGaugeIdsRequest): Promise<_133.QueryGaugeIdsResponse>;
                        distrInfo(request?: _133.QueryDistrInfoRequest): Promise<_133.QueryDistrInfoResponse>;
                        params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        lockableDurations(request?: _133.QueryLockableDurationsRequest): Promise<_133.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _133.QueryIncentivizedPoolsRequest): Promise<_133.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _133.QueryExternalIncentiveGaugesRequest): Promise<_133.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _136.ParamsRequest): Promise<_136.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _136.EstimateSwapExactAmountInRequest): Promise<_136.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _136.EstimateSinglePoolSwapExactAmountInRequest): Promise<_136.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _136.EstimateSwapExactAmountOutRequest): Promise<_136.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _136.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_136.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _136.NumPoolsRequest): Promise<_136.NumPoolsResponse>;
                        pool(request: _136.PoolRequest): Promise<_136.PoolResponse>;
                        allPools(request: _136.AllPoolsRequest): Promise<_136.AllPoolsResponse>;
                        spotPrice(request: _136.SpotPriceRequest): Promise<_136.SpotPriceResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _143.QueryGetProtoRevNumberOfTradesRequest): Promise<_143.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _143.QueryGetProtoRevProfitsByDenomRequest): Promise<_143.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _143.QueryGetProtoRevAllProfitsRequest): Promise<_143.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _143.QueryGetProtoRevStatisticsByRouteRequest): Promise<_143.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _143.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_143.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _143.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_143.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _143.QueryGetProtoRevAdminAccountRequest): Promise<_143.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _143.QueryGetProtoRevDeveloperAccountRequest): Promise<_143.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _143.QueryGetProtoRevPoolWeightsRequest): Promise<_143.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _143.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_143.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _143.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_143.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _143.QueryGetProtoRevBaseDenomsRequest): Promise<_143.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _143.QueryGetProtoRevEnabledRequest): Promise<_143.QueryGetProtoRevEnabledResponse>;
                    };
                };
                superfluid: {
                    params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                    assetType(request: _148.AssetTypeRequest): Promise<_148.AssetTypeResponse>;
                    allAssets(request?: _148.AllAssetsRequest): Promise<_148.AllAssetsResponse>;
                    assetMultiplier(request: _148.AssetMultiplierRequest): Promise<_148.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _148.AllIntermediaryAccountsRequest): Promise<_148.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _148.ConnectedIntermediaryAccountRequest): Promise<_148.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _148.QueryTotalDelegationByValidatorForDenomRequest): Promise<_148.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _148.TotalSuperfluidDelegationsRequest): Promise<_148.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _148.SuperfluidDelegationAmountRequest): Promise<_148.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _148.SuperfluidDelegationsByDelegatorRequest): Promise<_148.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _148.SuperfluidUndelegationsByDelegatorRequest): Promise<_148.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _148.SuperfluidDelegationsByValidatorDenomRequest): Promise<_148.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _148.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_148.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _148.QueryTotalDelegationByDelegatorRequest): Promise<_148.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _148.QueryUnpoolWhitelistRequest): Promise<_148.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _154.QueryDenomAuthorityMetadataRequest): Promise<_154.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _154.QueryDenomsFromCreatorRequest): Promise<_154.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _154.QueryBeforeSendHookAddressRequest): Promise<_154.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _157.ParamsRequest): Promise<_157.ParamsResponse>;
                        arithmeticTwap(request: _157.ArithmeticTwapRequest): Promise<_157.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _157.ArithmeticTwapToNowRequest): Promise<_157.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _157.GeometricTwapRequest): Promise<_157.GeometricTwapResponse>;
                        geometricTwapToNow(request: _157.GeometricTwapToNowRequest): Promise<_157.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _162.QueryFeeTokensRequest): Promise<_162.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _162.QueryDenomSpotPriceRequest): Promise<_162.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _162.QueryDenomPoolIdRequest): Promise<_162.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _162.QueryBaseDenomRequest): Promise<_162.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _163.UserValidatorPreferencesRequest): Promise<_163.UserValidatorPreferencesResponse>;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/pool-model/query.lcd").LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _253.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _254.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _255.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _256.LCDQueryClient;
                    v2: _257.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _258.LCDQueryClient;
                };
                incentives: _259.LCDQueryClient;
                lockup: _260.LCDQueryClient;
                mint: {
                    v1beta1: _261.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _262.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _263.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _264.LCDQueryClient;
                };
                superfluid: _265.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _266.LCDQueryClient;
                };
                twap: {
                    v1beta1: _267.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _268.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _269.LCDQueryClient;
                };
            };
        }>;
    };
}
