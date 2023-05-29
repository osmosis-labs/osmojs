import * as _107 from "./accum/v1beta1/accum";
import * as _108 from "./concentrated-liquidity/params";
import * as _109 from "./cosmwasmpool/v1beta1/genesis";
import * as _110 from "./cosmwasmpool/v1beta1/model/pool";
import * as _111 from "./cosmwasmpool/v1beta1/model/tx";
import * as _112 from "./cosmwasmpool/v1beta1/query";
import * as _114 from "./downtime-detector/v1beta1/downtime_duration";
import * as _115 from "./downtime-detector/v1beta1/genesis";
import * as _116 from "./downtime-detector/v1beta1/query";
import * as _117 from "./epochs/genesis";
import * as _118 from "./epochs/query";
import * as _119 from "./gamm/pool-models/balancer/balancerPool";
import * as _120 from "./gamm/v1beta1/genesis";
import * as _121 from "./gamm/v1beta1/gov";
import * as _122 from "./gamm/v1beta1/query";
import * as _123 from "./gamm/v1beta1/tx";
import * as _124 from "./gamm/pool-models/balancer/tx/tx";
import * as _125 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _126 from "./gamm/pool-models/stableswap/tx";
import * as _127 from "./gamm/v2/query";
import * as _128 from "./ibc-rate-limit/v1beta1/genesis";
import * as _129 from "./ibc-rate-limit/v1beta1/params";
import * as _130 from "./ibc-rate-limit/v1beta1/query";
import * as _131 from "./incentives/gauge";
import * as _132 from "./incentives/genesis";
import * as _133 from "./incentives/params";
import * as _134 from "./incentives/query";
import * as _135 from "./incentives/tx";
import * as _136 from "./lockup/genesis";
import * as _137 from "./lockup/lock";
import * as _138 from "./lockup/params";
import * as _139 from "./lockup/query";
import * as _140 from "./lockup/tx";
import * as _141 from "./mint/v1beta1/genesis";
import * as _142 from "./mint/v1beta1/mint";
import * as _143 from "./mint/v1beta1/query";
import * as _144 from "./pool-incentives/v1beta1/genesis";
import * as _145 from "./pool-incentives/v1beta1/gov";
import * as _146 from "./pool-incentives/v1beta1/incentives";
import * as _147 from "./pool-incentives/v1beta1/query";
import * as _148 from "./poolmanager/v1beta1/genesis";
import * as _149 from "./poolmanager/v1beta1/module_route";
import * as _150 from "./poolmanager/v1beta1/query";
import * as _151 from "./poolmanager/v1beta1/swap_route";
import * as _152 from "./poolmanager/v1beta1/tx";
import * as _153 from "./protorev/v1beta1/genesis";
import * as _154 from "./protorev/v1beta1/gov";
import * as _155 from "./protorev/v1beta1/params";
import * as _156 from "./protorev/v1beta1/protorev";
import * as _157 from "./protorev/v1beta1/query";
import * as _158 from "./protorev/v1beta1/tx";
import * as _159 from "./sumtree/v1beta1/tree";
import * as _160 from "./superfluid/genesis";
import * as _161 from "./superfluid/params";
import * as _162 from "./superfluid/query";
import * as _163 from "./superfluid/superfluid";
import * as _164 from "./superfluid/tx";
import * as _165 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _166 from "./tokenfactory/v1beta1/genesis";
import * as _167 from "./tokenfactory/v1beta1/params";
import * as _168 from "./tokenfactory/v1beta1/query";
import * as _169 from "./tokenfactory/v1beta1/tx";
import * as _170 from "./twap/v1beta1/genesis";
import * as _171 from "./twap/v1beta1/query";
import * as _172 from "./twap/v1beta1/twap_record";
import * as _173 from "./txfees/v1beta1/feetoken";
import * as _174 from "./txfees/v1beta1/genesis";
import * as _175 from "./txfees/v1beta1/gov";
import * as _176 from "./txfees/v1beta1/query";
import * as _177 from "./valset-pref/v1beta1/query";
import * as _178 from "./valset-pref/v1beta1/state";
import * as _179 from "./valset-pref/v1beta1/tx";
import * as _289 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _290 from "./downtime-detector/v1beta1/query.lcd";
import * as _291 from "./epochs/query.lcd";
import * as _292 from "./gamm/v1beta1/query.lcd";
import * as _293 from "./gamm/v2/query.lcd";
import * as _294 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _295 from "./incentives/query.lcd";
import * as _296 from "./lockup/query.lcd";
import * as _297 from "./mint/v1beta1/query.lcd";
import * as _298 from "./pool-incentives/v1beta1/query.lcd";
import * as _299 from "./poolmanager/v1beta1/query.lcd";
import * as _300 from "./protorev/v1beta1/query.lcd";
import * as _301 from "./superfluid/query.lcd";
import * as _302 from "./tokenfactory/v1beta1/query.lcd";
import * as _303 from "./twap/v1beta1/query.lcd";
import * as _304 from "./txfees/v1beta1/query.lcd";
import * as _305 from "./valset-pref/v1beta1/query.lcd";
import * as _307 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _308 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _309 from "./epochs/query.rpc.Query";
import * as _310 from "./gamm/v1beta1/query.rpc.Query";
import * as _311 from "./gamm/v2/query.rpc.Query";
import * as _312 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _313 from "./incentives/query.rpc.Query";
import * as _314 from "./lockup/query.rpc.Query";
import * as _315 from "./mint/v1beta1/query.rpc.Query";
import * as _316 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _317 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _318 from "./protorev/v1beta1/query.rpc.Query";
import * as _319 from "./superfluid/query.rpc.Query";
import * as _320 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _321 from "./twap/v1beta1/query.rpc.Query";
import * as _322 from "./txfees/v1beta1/query.rpc.Query";
import * as _323 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _325 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _326 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _327 from "./gamm/v1beta1/tx.rpc.msg";
import * as _328 from "./incentives/tx.rpc.msg";
import * as _329 from "./lockup/tx.rpc.msg";
import * as _330 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _331 from "./protorev/v1beta1/tx.rpc.msg";
import * as _332 from "./superfluid/tx.rpc.msg";
import * as _333 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _334 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                typeUrl: string;
                encode(message: _107.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AccumulatorContent;
                fromPartial(object: Partial<_107.AccumulatorContent>): _107.AccumulatorContent;
                fromAmino(object: _107.AccumulatorContentAmino): _107.AccumulatorContent;
                toAmino(message: _107.AccumulatorContent): _107.AccumulatorContentAmino;
                fromAminoMsg(object: _107.AccumulatorContentAminoMsg): _107.AccumulatorContent;
                toAminoMsg(message: _107.AccumulatorContent): _107.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _107.AccumulatorContentProtoMsg): _107.AccumulatorContent;
                toProto(message: _107.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _107.AccumulatorContent): _107.AccumulatorContentProtoMsg;
            };
            Options: {
                typeUrl: string;
                encode(_: _107.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Options;
                fromPartial(_: Partial<_107.Options>): _107.Options;
                fromAmino(_: _107.OptionsAmino): _107.Options;
                toAmino(_: _107.Options): _107.OptionsAmino;
                fromAminoMsg(object: _107.OptionsAminoMsg): _107.Options;
                toAminoMsg(message: _107.Options): _107.OptionsAminoMsg;
                fromProtoMsg(message: _107.OptionsProtoMsg): _107.Options;
                toProto(message: _107.Options): Uint8Array;
                toProtoMsg(message: _107.Options): _107.OptionsProtoMsg;
            };
            Record: {
                typeUrl: string;
                encode(message: _107.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Record;
                fromPartial(object: Partial<_107.Record>): _107.Record;
                fromAmino(object: _107.RecordAmino): _107.Record;
                toAmino(message: _107.Record): _107.RecordAmino;
                fromAminoMsg(object: _107.RecordAminoMsg): _107.Record;
                toAminoMsg(message: _107.Record): _107.RecordAminoMsg;
                fromProtoMsg(message: _107.RecordProtoMsg): _107.Record;
                toProto(message: _107.Record): Uint8Array;
                toProtoMsg(message: _107.Record): _107.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        Params: {
            typeUrl: string;
            encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Params;
            fromPartial(object: Partial<_108.Params>): _108.Params;
            fromAmino(object: _108.ParamsAmino): _108.Params;
            toAmino(message: _108.Params): _108.ParamsAmino;
            fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
            toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
            fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
            toProto(message: _108.Params): Uint8Array;
            toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _112.ParamsRequest): Promise<_112.ParamsResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _112.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ParamsRequest;
                fromPartial(_: Partial<_112.ParamsRequest>): _112.ParamsRequest;
                fromAmino(_: _112.ParamsRequestAmino): _112.ParamsRequest;
                toAmino(_: _112.ParamsRequest): _112.ParamsRequestAmino;
                fromAminoMsg(object: _112.ParamsRequestAminoMsg): _112.ParamsRequest;
                toAminoMsg(message: _112.ParamsRequest): _112.ParamsRequestAminoMsg;
                fromProtoMsg(message: _112.ParamsRequestProtoMsg): _112.ParamsRequest;
                toProto(message: _112.ParamsRequest): Uint8Array;
                toProtoMsg(message: _112.ParamsRequest): _112.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _112.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ParamsResponse;
                fromPartial(object: Partial<_112.ParamsResponse>): _112.ParamsResponse;
                fromAmino(object: _112.ParamsResponseAmino): _112.ParamsResponse;
                toAmino(message: _112.ParamsResponse): _112.ParamsResponseAmino;
                fromAminoMsg(object: _112.ParamsResponseAminoMsg): _112.ParamsResponse;
                toAminoMsg(message: _112.ParamsResponse): _112.ParamsResponseAminoMsg;
                fromProtoMsg(message: _112.ParamsResponseProtoMsg): _112.ParamsResponse;
                toProto(message: _112.ParamsResponse): Uint8Array;
                toProtoMsg(message: _112.ParamsResponse): _112.ParamsResponseProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                typeUrl: string;
                encode(message: _111.MsgCreateCosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_111.MsgCreateCosmWasmPool>): _111.MsgCreateCosmWasmPool;
                fromAmino(object: _111.MsgCreateCosmWasmPoolAmino): _111.MsgCreateCosmWasmPool;
                toAmino(message: _111.MsgCreateCosmWasmPool): _111.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _111.MsgCreateCosmWasmPoolAminoMsg): _111.MsgCreateCosmWasmPool;
                toAminoMsg(message: _111.MsgCreateCosmWasmPool): _111.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _111.MsgCreateCosmWasmPoolProtoMsg): _111.MsgCreateCosmWasmPool;
                toProto(message: _111.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _111.MsgCreateCosmWasmPool): _111.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                typeUrl: string;
                encode(message: _111.MsgCreateCosmWasmPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_111.MsgCreateCosmWasmPoolResponse>): _111.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _111.MsgCreateCosmWasmPoolResponseAmino): _111.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _111.MsgCreateCosmWasmPoolResponse): _111.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _111.MsgCreateCosmWasmPoolResponseAminoMsg): _111.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _111.MsgCreateCosmWasmPoolResponse): _111.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreateCosmWasmPoolResponseProtoMsg): _111.MsgCreateCosmWasmPoolResponse;
                toProto(message: _111.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreateCosmWasmPoolResponse): _111.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            CosmWasmPool: {
                typeUrl: string;
                encode(message: _110.CosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CosmWasmPool;
                fromPartial(object: Partial<_110.CosmWasmPool>): _110.CosmWasmPool;
                fromAmino(object: _110.CosmWasmPoolAmino): _110.CosmWasmPool;
                toAmino(message: _110.CosmWasmPool): _110.CosmWasmPoolAmino;
                fromAminoMsg(object: _110.CosmWasmPoolAminoMsg): _110.CosmWasmPool;
                toAminoMsg(message: _110.CosmWasmPool): _110.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _110.CosmWasmPoolProtoMsg): _110.CosmWasmPool;
                toProto(message: _110.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _110.CosmWasmPool): _110.CosmWasmPoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _109.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Params;
                fromPartial(_: Partial<_109.Params>): _109.Params;
                fromAmino(_: _109.ParamsAmino): _109.Params;
                toAmino(_: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _116.RecoveredSinceDowntimeOfLengthRequest): Promise<_116.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _116.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_116.RecoveredSinceDowntimeOfLengthRequest>): _116.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _116.RecoveredSinceDowntimeOfLengthRequestAmino): _116.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _116.RecoveredSinceDowntimeOfLengthRequest): _116.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _116.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _116.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _116.RecoveredSinceDowntimeOfLengthRequest): _116.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _116.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _116.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _116.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _116.RecoveredSinceDowntimeOfLengthRequest): _116.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _116.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_116.RecoveredSinceDowntimeOfLengthResponse>): _116.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _116.RecoveredSinceDowntimeOfLengthResponseAmino): _116.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _116.RecoveredSinceDowntimeOfLengthResponse): _116.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _116.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _116.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _116.RecoveredSinceDowntimeOfLengthResponse): _116.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _116.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _116.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _116.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _116.RecoveredSinceDowntimeOfLengthResponse): _116.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _115.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisDowntimeEntry;
                fromPartial(object: Partial<_115.GenesisDowntimeEntry>): _115.GenesisDowntimeEntry;
                fromAmino(object: _115.GenesisDowntimeEntryAmino): _115.GenesisDowntimeEntry;
                toAmino(message: _115.GenesisDowntimeEntry): _115.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _115.GenesisDowntimeEntryAminoMsg): _115.GenesisDowntimeEntry;
                toAminoMsg(message: _115.GenesisDowntimeEntry): _115.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _115.GenesisDowntimeEntryProtoMsg): _115.GenesisDowntimeEntry;
                toProto(message: _115.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _115.GenesisDowntimeEntry): _115.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                toProto(message: _115.GenesisState): Uint8Array;
                toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _114.Downtime;
            downtimeToJSON(object: _114.Downtime): string;
            Downtime: typeof _114.Downtime;
            DowntimeSDKType: typeof _114.Downtime;
            DowntimeAmino: typeof _114.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _118.QueryEpochsInfoRequest): Promise<_118.QueryEpochsInfoResponse>;
                currentEpoch(request: _118.QueryCurrentEpochRequest): Promise<_118.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _118.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_118.QueryEpochsInfoRequest>): _118.QueryEpochsInfoRequest;
                fromAmino(_: _118.QueryEpochsInfoRequestAmino): _118.QueryEpochsInfoRequest;
                toAmino(_: _118.QueryEpochsInfoRequest): _118.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _118.QueryEpochsInfoRequestAminoMsg): _118.QueryEpochsInfoRequest;
                toAminoMsg(message: _118.QueryEpochsInfoRequest): _118.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _118.QueryEpochsInfoRequestProtoMsg): _118.QueryEpochsInfoRequest;
                toProto(message: _118.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _118.QueryEpochsInfoRequest): _118.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _118.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_118.QueryEpochsInfoResponse>): _118.QueryEpochsInfoResponse;
                fromAmino(object: _118.QueryEpochsInfoResponseAmino): _118.QueryEpochsInfoResponse;
                toAmino(message: _118.QueryEpochsInfoResponse): _118.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _118.QueryEpochsInfoResponseAminoMsg): _118.QueryEpochsInfoResponse;
                toAminoMsg(message: _118.QueryEpochsInfoResponse): _118.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _118.QueryEpochsInfoResponseProtoMsg): _118.QueryEpochsInfoResponse;
                toProto(message: _118.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _118.QueryEpochsInfoResponse): _118.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _118.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_118.QueryCurrentEpochRequest>): _118.QueryCurrentEpochRequest;
                fromAmino(object: _118.QueryCurrentEpochRequestAmino): _118.QueryCurrentEpochRequest;
                toAmino(message: _118.QueryCurrentEpochRequest): _118.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _118.QueryCurrentEpochRequestAminoMsg): _118.QueryCurrentEpochRequest;
                toAminoMsg(message: _118.QueryCurrentEpochRequest): _118.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentEpochRequestProtoMsg): _118.QueryCurrentEpochRequest;
                toProto(message: _118.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentEpochRequest): _118.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _118.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_118.QueryCurrentEpochResponse>): _118.QueryCurrentEpochResponse;
                fromAmino(object: _118.QueryCurrentEpochResponseAmino): _118.QueryCurrentEpochResponse;
                toAmino(message: _118.QueryCurrentEpochResponse): _118.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _118.QueryCurrentEpochResponseAminoMsg): _118.QueryCurrentEpochResponse;
                toAminoMsg(message: _118.QueryCurrentEpochResponse): _118.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentEpochResponseProtoMsg): _118.QueryCurrentEpochResponse;
                toProto(message: _118.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentEpochResponse): _118.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _117.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.EpochInfo;
                fromPartial(object: Partial<_117.EpochInfo>): _117.EpochInfo;
                fromAmino(object: _117.EpochInfoAmino): _117.EpochInfo;
                toAmino(message: _117.EpochInfo): _117.EpochInfoAmino;
                fromAminoMsg(object: _117.EpochInfoAminoMsg): _117.EpochInfo;
                toAminoMsg(message: _117.EpochInfo): _117.EpochInfoAminoMsg;
                fromProtoMsg(message: _117.EpochInfoProtoMsg): _117.EpochInfo;
                toProto(message: _117.EpochInfo): Uint8Array;
                toProtoMsg(message: _117.EpochInfo): _117.EpochInfoProtoMsg;
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
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _122.QueryPoolsRequest): Promise<_122.QueryPoolsResponse>;
                numPools(request?: _122.QueryNumPoolsRequest): Promise<_122.QueryNumPoolsResponse>;
                totalLiquidity(request?: _122.QueryTotalLiquidityRequest): Promise<_122.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _122.QueryPoolsWithFilterRequest): Promise<_122.QueryPoolsWithFilterResponse>;
                pool(request: _122.QueryPoolRequest): Promise<_122.QueryPoolResponse>;
                poolType(request: _122.QueryPoolTypeRequest): Promise<_122.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _122.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_122.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _122.QueryCalcJoinPoolSharesRequest): Promise<_122.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _122.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_122.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _122.QueryPoolParamsRequest): Promise<_122.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _122.QueryTotalPoolLiquidityRequest): Promise<_122.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _122.QueryTotalSharesRequest): Promise<_122.QueryTotalSharesResponse>;
                spotPrice(request: _122.QuerySpotPriceRequest): Promise<_122.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _122.QuerySwapExactAmountInRequest): Promise<_122.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _122.QuerySwapExactAmountOutRequest): Promise<_122.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _123.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _123.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _123.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _123.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _123.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _123.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _123.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _123.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _123.MsgJoinPool): {
                        typeUrl: string;
                        value: _123.MsgJoinPool;
                    };
                    exitPool(value: _123.MsgExitPool): {
                        typeUrl: string;
                        value: _123.MsgExitPool;
                    };
                    swapExactAmountIn(value: _123.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _123.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _123.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _123.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _123.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _123.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _123.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _123.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _123.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _123.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _123.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _123.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _123.MsgJoinPool): {
                        typeUrl: string;
                        value: _123.MsgJoinPool;
                    };
                    exitPool(value: _123.MsgExitPool): {
                        typeUrl: string;
                        value: _123.MsgExitPool;
                    };
                    swapExactAmountIn(value: _123.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _123.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _123.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _123.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _123.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _123.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _123.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _123.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _123.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _123.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _123.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _123.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _123.MsgJoinPool) => _123.MsgJoinPoolAmino;
                    fromAmino: (object: _123.MsgJoinPoolAmino) => _123.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _123.MsgExitPool) => _123.MsgExitPoolAmino;
                    fromAmino: (object: _123.MsgExitPoolAmino) => _123.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSwapExactAmountIn) => _123.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _123.MsgSwapExactAmountInAmino) => _123.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSwapExactAmountOut) => _123.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _123.MsgSwapExactAmountOutAmino) => _123.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _123.MsgJoinSwapExternAmountIn) => _123.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _123.MsgJoinSwapExternAmountInAmino) => _123.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _123.MsgJoinSwapShareAmountOut) => _123.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _123.MsgJoinSwapShareAmountOutAmino) => _123.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _123.MsgExitSwapExternAmountOut) => _123.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _123.MsgExitSwapExternAmountOutAmino) => _123.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _123.MsgExitSwapShareAmountIn) => _123.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _123.MsgExitSwapShareAmountInAmino) => _123.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _123.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinPool;
                fromPartial(object: Partial<_123.MsgJoinPool>): _123.MsgJoinPool;
                fromAmino(object: _123.MsgJoinPoolAmino): _123.MsgJoinPool;
                toAmino(message: _123.MsgJoinPool): _123.MsgJoinPoolAmino;
                fromAminoMsg(object: _123.MsgJoinPoolAminoMsg): _123.MsgJoinPool;
                toAminoMsg(message: _123.MsgJoinPool): _123.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _123.MsgJoinPoolProtoMsg): _123.MsgJoinPool;
                toProto(message: _123.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _123.MsgJoinPool): _123.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _123.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinPoolResponse;
                fromPartial(object: Partial<_123.MsgJoinPoolResponse>): _123.MsgJoinPoolResponse;
                fromAmino(object: _123.MsgJoinPoolResponseAmino): _123.MsgJoinPoolResponse;
                toAmino(message: _123.MsgJoinPoolResponse): _123.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _123.MsgJoinPoolResponseAminoMsg): _123.MsgJoinPoolResponse;
                toAminoMsg(message: _123.MsgJoinPoolResponse): _123.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _123.MsgJoinPoolResponseProtoMsg): _123.MsgJoinPoolResponse;
                toProto(message: _123.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _123.MsgJoinPoolResponse): _123.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _123.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitPool;
                fromPartial(object: Partial<_123.MsgExitPool>): _123.MsgExitPool;
                fromAmino(object: _123.MsgExitPoolAmino): _123.MsgExitPool;
                toAmino(message: _123.MsgExitPool): _123.MsgExitPoolAmino;
                fromAminoMsg(object: _123.MsgExitPoolAminoMsg): _123.MsgExitPool;
                toAminoMsg(message: _123.MsgExitPool): _123.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _123.MsgExitPoolProtoMsg): _123.MsgExitPool;
                toProto(message: _123.MsgExitPool): Uint8Array;
                toProtoMsg(message: _123.MsgExitPool): _123.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _123.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitPoolResponse;
                fromPartial(object: Partial<_123.MsgExitPoolResponse>): _123.MsgExitPoolResponse;
                fromAmino(object: _123.MsgExitPoolResponseAmino): _123.MsgExitPoolResponse;
                toAmino(message: _123.MsgExitPoolResponse): _123.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _123.MsgExitPoolResponseAminoMsg): _123.MsgExitPoolResponse;
                toAminoMsg(message: _123.MsgExitPoolResponse): _123.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _123.MsgExitPoolResponseProtoMsg): _123.MsgExitPoolResponse;
                toProto(message: _123.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _123.MsgExitPoolResponse): _123.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _123.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_123.MsgSwapExactAmountIn>): _123.MsgSwapExactAmountIn;
                fromAmino(object: _123.MsgSwapExactAmountInAmino): _123.MsgSwapExactAmountIn;
                toAmino(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _123.MsgSwapExactAmountInAminoMsg): _123.MsgSwapExactAmountIn;
                toAminoMsg(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _123.MsgSwapExactAmountInProtoMsg): _123.MsgSwapExactAmountIn;
                toProto(message: _123.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _123.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_123.MsgSwapExactAmountInResponse>): _123.MsgSwapExactAmountInResponse;
                fromAmino(object: _123.MsgSwapExactAmountInResponseAmino): _123.MsgSwapExactAmountInResponse;
                toAmino(message: _123.MsgSwapExactAmountInResponse): _123.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _123.MsgSwapExactAmountInResponseAminoMsg): _123.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _123.MsgSwapExactAmountInResponse): _123.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSwapExactAmountInResponseProtoMsg): _123.MsgSwapExactAmountInResponse;
                toProto(message: _123.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSwapExactAmountInResponse): _123.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _123.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_123.MsgSwapExactAmountOut>): _123.MsgSwapExactAmountOut;
                fromAmino(object: _123.MsgSwapExactAmountOutAmino): _123.MsgSwapExactAmountOut;
                toAmino(message: _123.MsgSwapExactAmountOut): _123.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _123.MsgSwapExactAmountOutAminoMsg): _123.MsgSwapExactAmountOut;
                toAminoMsg(message: _123.MsgSwapExactAmountOut): _123.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _123.MsgSwapExactAmountOutProtoMsg): _123.MsgSwapExactAmountOut;
                toProto(message: _123.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _123.MsgSwapExactAmountOut): _123.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _123.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_123.MsgSwapExactAmountOutResponse>): _123.MsgSwapExactAmountOutResponse;
                fromAmino(object: _123.MsgSwapExactAmountOutResponseAmino): _123.MsgSwapExactAmountOutResponse;
                toAmino(message: _123.MsgSwapExactAmountOutResponse): _123.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _123.MsgSwapExactAmountOutResponseAminoMsg): _123.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _123.MsgSwapExactAmountOutResponse): _123.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSwapExactAmountOutResponseProtoMsg): _123.MsgSwapExactAmountOutResponse;
                toProto(message: _123.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSwapExactAmountOutResponse): _123.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _123.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_123.MsgJoinSwapExternAmountIn>): _123.MsgJoinSwapExternAmountIn;
                fromAmino(object: _123.MsgJoinSwapExternAmountInAmino): _123.MsgJoinSwapExternAmountIn;
                toAmino(message: _123.MsgJoinSwapExternAmountIn): _123.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _123.MsgJoinSwapExternAmountInAminoMsg): _123.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _123.MsgJoinSwapExternAmountIn): _123.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _123.MsgJoinSwapExternAmountInProtoMsg): _123.MsgJoinSwapExternAmountIn;
                toProto(message: _123.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _123.MsgJoinSwapExternAmountIn): _123.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _123.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_123.MsgJoinSwapExternAmountInResponse>): _123.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _123.MsgJoinSwapExternAmountInResponseAmino): _123.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _123.MsgJoinSwapExternAmountInResponse): _123.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _123.MsgJoinSwapExternAmountInResponseAminoMsg): _123.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _123.MsgJoinSwapExternAmountInResponse): _123.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _123.MsgJoinSwapExternAmountInResponseProtoMsg): _123.MsgJoinSwapExternAmountInResponse;
                toProto(message: _123.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _123.MsgJoinSwapExternAmountInResponse): _123.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _123.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_123.MsgJoinSwapShareAmountOut>): _123.MsgJoinSwapShareAmountOut;
                fromAmino(object: _123.MsgJoinSwapShareAmountOutAmino): _123.MsgJoinSwapShareAmountOut;
                toAmino(message: _123.MsgJoinSwapShareAmountOut): _123.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _123.MsgJoinSwapShareAmountOutAminoMsg): _123.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _123.MsgJoinSwapShareAmountOut): _123.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _123.MsgJoinSwapShareAmountOutProtoMsg): _123.MsgJoinSwapShareAmountOut;
                toProto(message: _123.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _123.MsgJoinSwapShareAmountOut): _123.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _123.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_123.MsgJoinSwapShareAmountOutResponse>): _123.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _123.MsgJoinSwapShareAmountOutResponseAmino): _123.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _123.MsgJoinSwapShareAmountOutResponse): _123.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _123.MsgJoinSwapShareAmountOutResponseAminoMsg): _123.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _123.MsgJoinSwapShareAmountOutResponse): _123.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _123.MsgJoinSwapShareAmountOutResponseProtoMsg): _123.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _123.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _123.MsgJoinSwapShareAmountOutResponse): _123.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _123.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_123.MsgExitSwapShareAmountIn>): _123.MsgExitSwapShareAmountIn;
                fromAmino(object: _123.MsgExitSwapShareAmountInAmino): _123.MsgExitSwapShareAmountIn;
                toAmino(message: _123.MsgExitSwapShareAmountIn): _123.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _123.MsgExitSwapShareAmountInAminoMsg): _123.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _123.MsgExitSwapShareAmountIn): _123.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _123.MsgExitSwapShareAmountInProtoMsg): _123.MsgExitSwapShareAmountIn;
                toProto(message: _123.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _123.MsgExitSwapShareAmountIn): _123.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _123.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_123.MsgExitSwapShareAmountInResponse>): _123.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _123.MsgExitSwapShareAmountInResponseAmino): _123.MsgExitSwapShareAmountInResponse;
                toAmino(message: _123.MsgExitSwapShareAmountInResponse): _123.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _123.MsgExitSwapShareAmountInResponseAminoMsg): _123.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _123.MsgExitSwapShareAmountInResponse): _123.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _123.MsgExitSwapShareAmountInResponseProtoMsg): _123.MsgExitSwapShareAmountInResponse;
                toProto(message: _123.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _123.MsgExitSwapShareAmountInResponse): _123.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _123.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_123.MsgExitSwapExternAmountOut>): _123.MsgExitSwapExternAmountOut;
                fromAmino(object: _123.MsgExitSwapExternAmountOutAmino): _123.MsgExitSwapExternAmountOut;
                toAmino(message: _123.MsgExitSwapExternAmountOut): _123.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _123.MsgExitSwapExternAmountOutAminoMsg): _123.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _123.MsgExitSwapExternAmountOut): _123.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _123.MsgExitSwapExternAmountOutProtoMsg): _123.MsgExitSwapExternAmountOut;
                toProto(message: _123.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _123.MsgExitSwapExternAmountOut): _123.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _123.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_123.MsgExitSwapExternAmountOutResponse>): _123.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _123.MsgExitSwapExternAmountOutResponseAmino): _123.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _123.MsgExitSwapExternAmountOutResponse): _123.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _123.MsgExitSwapExternAmountOutResponseAminoMsg): _123.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _123.MsgExitSwapExternAmountOutResponse): _123.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _123.MsgExitSwapExternAmountOutResponseProtoMsg): _123.MsgExitSwapExternAmountOutResponse;
                toProto(message: _123.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _123.MsgExitSwapExternAmountOutResponse): _123.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _122.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolRequest;
                fromPartial(object: Partial<_122.QueryPoolRequest>): _122.QueryPoolRequest;
                fromAmino(object: _122.QueryPoolRequestAmino): _122.QueryPoolRequest;
                toAmino(message: _122.QueryPoolRequest): _122.QueryPoolRequestAmino;
                fromAminoMsg(object: _122.QueryPoolRequestAminoMsg): _122.QueryPoolRequest;
                toAminoMsg(message: _122.QueryPoolRequest): _122.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _122.QueryPoolRequestProtoMsg): _122.QueryPoolRequest;
                toProto(message: _122.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _122.QueryPoolRequest): _122.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _122.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolResponse;
                fromPartial(object: Partial<_122.QueryPoolResponse>): _122.QueryPoolResponse;
                fromAmino(object: _122.QueryPoolResponseAmino): _122.QueryPoolResponse;
                toAmino(message: _122.QueryPoolResponse): _122.QueryPoolResponseAmino;
                fromAminoMsg(object: _122.QueryPoolResponseAminoMsg): _122.QueryPoolResponse;
                toAminoMsg(message: _122.QueryPoolResponse): _122.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _122.QueryPoolResponseProtoMsg): _122.QueryPoolResponse;
                toProto(message: _122.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _122.QueryPoolResponse): _122.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _122.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolsRequest;
                fromPartial(object: Partial<_122.QueryPoolsRequest>): _122.QueryPoolsRequest;
                fromAmino(object: _122.QueryPoolsRequestAmino): _122.QueryPoolsRequest;
                toAmino(message: _122.QueryPoolsRequest): _122.QueryPoolsRequestAmino;
                fromAminoMsg(object: _122.QueryPoolsRequestAminoMsg): _122.QueryPoolsRequest;
                toAminoMsg(message: _122.QueryPoolsRequest): _122.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryPoolsRequestProtoMsg): _122.QueryPoolsRequest;
                toProto(message: _122.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryPoolsRequest): _122.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _122.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolsResponse;
                fromPartial(object: Partial<_122.QueryPoolsResponse>): _122.QueryPoolsResponse;
                fromAmino(object: _122.QueryPoolsResponseAmino): _122.QueryPoolsResponse;
                toAmino(message: _122.QueryPoolsResponse): _122.QueryPoolsResponseAmino;
                fromAminoMsg(object: _122.QueryPoolsResponseAminoMsg): _122.QueryPoolsResponse;
                toAminoMsg(message: _122.QueryPoolsResponse): _122.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryPoolsResponseProtoMsg): _122.QueryPoolsResponse;
                toProto(message: _122.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryPoolsResponse): _122.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _122.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryNumPoolsRequest;
                fromPartial(_: Partial<_122.QueryNumPoolsRequest>): _122.QueryNumPoolsRequest;
                fromAmino(_: _122.QueryNumPoolsRequestAmino): _122.QueryNumPoolsRequest;
                toAmino(_: _122.QueryNumPoolsRequest): _122.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _122.QueryNumPoolsRequestAminoMsg): _122.QueryNumPoolsRequest;
                toAminoMsg(message: _122.QueryNumPoolsRequest): _122.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryNumPoolsRequestProtoMsg): _122.QueryNumPoolsRequest;
                toProto(message: _122.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryNumPoolsRequest): _122.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _122.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryNumPoolsResponse;
                fromPartial(object: Partial<_122.QueryNumPoolsResponse>): _122.QueryNumPoolsResponse;
                fromAmino(object: _122.QueryNumPoolsResponseAmino): _122.QueryNumPoolsResponse;
                toAmino(message: _122.QueryNumPoolsResponse): _122.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _122.QueryNumPoolsResponseAminoMsg): _122.QueryNumPoolsResponse;
                toAminoMsg(message: _122.QueryNumPoolsResponse): _122.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryNumPoolsResponseProtoMsg): _122.QueryNumPoolsResponse;
                toProto(message: _122.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryNumPoolsResponse): _122.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _122.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolTypeRequest;
                fromPartial(object: Partial<_122.QueryPoolTypeRequest>): _122.QueryPoolTypeRequest;
                fromAmino(object: _122.QueryPoolTypeRequestAmino): _122.QueryPoolTypeRequest;
                toAmino(message: _122.QueryPoolTypeRequest): _122.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _122.QueryPoolTypeRequestAminoMsg): _122.QueryPoolTypeRequest;
                toAminoMsg(message: _122.QueryPoolTypeRequest): _122.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _122.QueryPoolTypeRequestProtoMsg): _122.QueryPoolTypeRequest;
                toProto(message: _122.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _122.QueryPoolTypeRequest): _122.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _122.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolTypeResponse;
                fromPartial(object: Partial<_122.QueryPoolTypeResponse>): _122.QueryPoolTypeResponse;
                fromAmino(object: _122.QueryPoolTypeResponseAmino): _122.QueryPoolTypeResponse;
                toAmino(message: _122.QueryPoolTypeResponse): _122.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _122.QueryPoolTypeResponseAminoMsg): _122.QueryPoolTypeResponse;
                toAminoMsg(message: _122.QueryPoolTypeResponse): _122.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _122.QueryPoolTypeResponseProtoMsg): _122.QueryPoolTypeResponse;
                toProto(message: _122.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _122.QueryPoolTypeResponse): _122.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _122.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_122.QueryCalcJoinPoolSharesRequest>): _122.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _122.QueryCalcJoinPoolSharesRequestAmino): _122.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _122.QueryCalcJoinPoolSharesRequest): _122.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _122.QueryCalcJoinPoolSharesRequestAminoMsg): _122.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _122.QueryCalcJoinPoolSharesRequest): _122.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryCalcJoinPoolSharesRequestProtoMsg): _122.QueryCalcJoinPoolSharesRequest;
                toProto(message: _122.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryCalcJoinPoolSharesRequest): _122.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _122.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_122.QueryCalcJoinPoolSharesResponse>): _122.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _122.QueryCalcJoinPoolSharesResponseAmino): _122.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _122.QueryCalcJoinPoolSharesResponse): _122.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _122.QueryCalcJoinPoolSharesResponseAminoMsg): _122.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _122.QueryCalcJoinPoolSharesResponse): _122.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryCalcJoinPoolSharesResponseProtoMsg): _122.QueryCalcJoinPoolSharesResponse;
                toProto(message: _122.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryCalcJoinPoolSharesResponse): _122.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _122.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_122.QueryCalcExitPoolCoinsFromSharesRequest>): _122.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _122.QueryCalcExitPoolCoinsFromSharesRequestAmino): _122.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _122.QueryCalcExitPoolCoinsFromSharesRequest): _122.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _122.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _122.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesRequest): _122.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _122.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _122.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesRequest): _122.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _122.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_122.QueryCalcExitPoolCoinsFromSharesResponse>): _122.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _122.QueryCalcExitPoolCoinsFromSharesResponseAmino): _122.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _122.QueryCalcExitPoolCoinsFromSharesResponse): _122.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _122.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _122.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesResponse): _122.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _122.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _122.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryCalcExitPoolCoinsFromSharesResponse): _122.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _122.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolParamsRequest;
                fromPartial(object: Partial<_122.QueryPoolParamsRequest>): _122.QueryPoolParamsRequest;
                fromAmino(object: _122.QueryPoolParamsRequestAmino): _122.QueryPoolParamsRequest;
                toAmino(message: _122.QueryPoolParamsRequest): _122.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _122.QueryPoolParamsRequestAminoMsg): _122.QueryPoolParamsRequest;
                toAminoMsg(message: _122.QueryPoolParamsRequest): _122.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryPoolParamsRequestProtoMsg): _122.QueryPoolParamsRequest;
                toProto(message: _122.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryPoolParamsRequest): _122.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolParamsResponse;
                fromPartial(object: Partial<_122.QueryPoolParamsResponse>): _122.QueryPoolParamsResponse;
                fromAmino(object: _122.QueryPoolParamsResponseAmino): _122.QueryPoolParamsResponse;
                toAmino(message: _122.QueryPoolParamsResponse): _122.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _122.QueryPoolParamsResponseAminoMsg): _122.QueryPoolParamsResponse;
                toAminoMsg(message: _122.QueryPoolParamsResponse): _122.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryPoolParamsResponseProtoMsg): _122.QueryPoolParamsResponse;
                toProto(message: _122.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryPoolParamsResponse): _122.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _122.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_122.QueryTotalPoolLiquidityRequest>): _122.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _122.QueryTotalPoolLiquidityRequestAmino): _122.QueryTotalPoolLiquidityRequest;
                toAmino(message: _122.QueryTotalPoolLiquidityRequest): _122.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _122.QueryTotalPoolLiquidityRequestAminoMsg): _122.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _122.QueryTotalPoolLiquidityRequest): _122.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _122.QueryTotalPoolLiquidityRequestProtoMsg): _122.QueryTotalPoolLiquidityRequest;
                toProto(message: _122.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTotalPoolLiquidityRequest): _122.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _122.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_122.QueryTotalPoolLiquidityResponse>): _122.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _122.QueryTotalPoolLiquidityResponseAmino): _122.QueryTotalPoolLiquidityResponse;
                toAmino(message: _122.QueryTotalPoolLiquidityResponse): _122.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _122.QueryTotalPoolLiquidityResponseAminoMsg): _122.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _122.QueryTotalPoolLiquidityResponse): _122.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _122.QueryTotalPoolLiquidityResponseProtoMsg): _122.QueryTotalPoolLiquidityResponse;
                toProto(message: _122.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTotalPoolLiquidityResponse): _122.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _122.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalSharesRequest;
                fromPartial(object: Partial<_122.QueryTotalSharesRequest>): _122.QueryTotalSharesRequest;
                fromAmino(object: _122.QueryTotalSharesRequestAmino): _122.QueryTotalSharesRequest;
                toAmino(message: _122.QueryTotalSharesRequest): _122.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _122.QueryTotalSharesRequestAminoMsg): _122.QueryTotalSharesRequest;
                toAminoMsg(message: _122.QueryTotalSharesRequest): _122.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryTotalSharesRequestProtoMsg): _122.QueryTotalSharesRequest;
                toProto(message: _122.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTotalSharesRequest): _122.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _122.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalSharesResponse;
                fromPartial(object: Partial<_122.QueryTotalSharesResponse>): _122.QueryTotalSharesResponse;
                fromAmino(object: _122.QueryTotalSharesResponseAmino): _122.QueryTotalSharesResponse;
                toAmino(message: _122.QueryTotalSharesResponse): _122.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _122.QueryTotalSharesResponseAminoMsg): _122.QueryTotalSharesResponse;
                toAminoMsg(message: _122.QueryTotalSharesResponse): _122.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryTotalSharesResponseProtoMsg): _122.QueryTotalSharesResponse;
                toProto(message: _122.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTotalSharesResponse): _122.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _122.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_122.QueryCalcJoinPoolNoSwapSharesRequest>): _122.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _122.QueryCalcJoinPoolNoSwapSharesRequestAmino): _122.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _122.QueryCalcJoinPoolNoSwapSharesRequest): _122.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _122.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _122.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesRequest): _122.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _122.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _122.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesRequest): _122.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _122.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_122.QueryCalcJoinPoolNoSwapSharesResponse>): _122.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _122.QueryCalcJoinPoolNoSwapSharesResponseAmino): _122.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _122.QueryCalcJoinPoolNoSwapSharesResponse): _122.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _122.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _122.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesResponse): _122.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _122.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _122.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryCalcJoinPoolNoSwapSharesResponse): _122.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _122.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySpotPriceRequest;
                fromPartial(object: Partial<_122.QuerySpotPriceRequest>): _122.QuerySpotPriceRequest;
                fromAmino(object: _122.QuerySpotPriceRequestAmino): _122.QuerySpotPriceRequest;
                toAmino(message: _122.QuerySpotPriceRequest): _122.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _122.QuerySpotPriceRequestAminoMsg): _122.QuerySpotPriceRequest;
                toAminoMsg(message: _122.QuerySpotPriceRequest): _122.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySpotPriceRequestProtoMsg): _122.QuerySpotPriceRequest;
                toProto(message: _122.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySpotPriceRequest): _122.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _122.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_122.QueryPoolsWithFilterRequest>): _122.QueryPoolsWithFilterRequest;
                fromAmino(object: _122.QueryPoolsWithFilterRequestAmino): _122.QueryPoolsWithFilterRequest;
                toAmino(message: _122.QueryPoolsWithFilterRequest): _122.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _122.QueryPoolsWithFilterRequestAminoMsg): _122.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _122.QueryPoolsWithFilterRequest): _122.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _122.QueryPoolsWithFilterRequestProtoMsg): _122.QueryPoolsWithFilterRequest;
                toProto(message: _122.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _122.QueryPoolsWithFilterRequest): _122.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _122.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_122.QueryPoolsWithFilterResponse>): _122.QueryPoolsWithFilterResponse;
                fromAmino(object: _122.QueryPoolsWithFilterResponseAmino): _122.QueryPoolsWithFilterResponse;
                toAmino(message: _122.QueryPoolsWithFilterResponse): _122.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _122.QueryPoolsWithFilterResponseAminoMsg): _122.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _122.QueryPoolsWithFilterResponse): _122.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _122.QueryPoolsWithFilterResponseProtoMsg): _122.QueryPoolsWithFilterResponse;
                toProto(message: _122.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _122.QueryPoolsWithFilterResponse): _122.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _122.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySpotPriceResponse;
                fromPartial(object: Partial<_122.QuerySpotPriceResponse>): _122.QuerySpotPriceResponse;
                fromAmino(object: _122.QuerySpotPriceResponseAmino): _122.QuerySpotPriceResponse;
                toAmino(message: _122.QuerySpotPriceResponse): _122.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _122.QuerySpotPriceResponseAminoMsg): _122.QuerySpotPriceResponse;
                toAminoMsg(message: _122.QuerySpotPriceResponse): _122.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySpotPriceResponseProtoMsg): _122.QuerySpotPriceResponse;
                toProto(message: _122.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySpotPriceResponse): _122.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _122.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_122.QuerySwapExactAmountInRequest>): _122.QuerySwapExactAmountInRequest;
                fromAmino(object: _122.QuerySwapExactAmountInRequestAmino): _122.QuerySwapExactAmountInRequest;
                toAmino(message: _122.QuerySwapExactAmountInRequest): _122.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _122.QuerySwapExactAmountInRequestAminoMsg): _122.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _122.QuerySwapExactAmountInRequest): _122.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySwapExactAmountInRequestProtoMsg): _122.QuerySwapExactAmountInRequest;
                toProto(message: _122.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySwapExactAmountInRequest): _122.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _122.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_122.QuerySwapExactAmountInResponse>): _122.QuerySwapExactAmountInResponse;
                fromAmino(object: _122.QuerySwapExactAmountInResponseAmino): _122.QuerySwapExactAmountInResponse;
                toAmino(message: _122.QuerySwapExactAmountInResponse): _122.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _122.QuerySwapExactAmountInResponseAminoMsg): _122.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _122.QuerySwapExactAmountInResponse): _122.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySwapExactAmountInResponseProtoMsg): _122.QuerySwapExactAmountInResponse;
                toProto(message: _122.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySwapExactAmountInResponse): _122.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _122.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_122.QuerySwapExactAmountOutRequest>): _122.QuerySwapExactAmountOutRequest;
                fromAmino(object: _122.QuerySwapExactAmountOutRequestAmino): _122.QuerySwapExactAmountOutRequest;
                toAmino(message: _122.QuerySwapExactAmountOutRequest): _122.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _122.QuerySwapExactAmountOutRequestAminoMsg): _122.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _122.QuerySwapExactAmountOutRequest): _122.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySwapExactAmountOutRequestProtoMsg): _122.QuerySwapExactAmountOutRequest;
                toProto(message: _122.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySwapExactAmountOutRequest): _122.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _122.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_122.QuerySwapExactAmountOutResponse>): _122.QuerySwapExactAmountOutResponse;
                fromAmino(object: _122.QuerySwapExactAmountOutResponseAmino): _122.QuerySwapExactAmountOutResponse;
                toAmino(message: _122.QuerySwapExactAmountOutResponse): _122.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _122.QuerySwapExactAmountOutResponseAminoMsg): _122.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _122.QuerySwapExactAmountOutResponse): _122.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySwapExactAmountOutResponseProtoMsg): _122.QuerySwapExactAmountOutResponse;
                toProto(message: _122.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySwapExactAmountOutResponse): _122.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _122.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_122.QueryTotalLiquidityRequest>): _122.QueryTotalLiquidityRequest;
                fromAmino(_: _122.QueryTotalLiquidityRequestAmino): _122.QueryTotalLiquidityRequest;
                toAmino(_: _122.QueryTotalLiquidityRequest): _122.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _122.QueryTotalLiquidityRequestAminoMsg): _122.QueryTotalLiquidityRequest;
                toAminoMsg(message: _122.QueryTotalLiquidityRequest): _122.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _122.QueryTotalLiquidityRequestProtoMsg): _122.QueryTotalLiquidityRequest;
                toProto(message: _122.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTotalLiquidityRequest): _122.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _122.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_122.QueryTotalLiquidityResponse>): _122.QueryTotalLiquidityResponse;
                fromAmino(object: _122.QueryTotalLiquidityResponseAmino): _122.QueryTotalLiquidityResponse;
                toAmino(message: _122.QueryTotalLiquidityResponse): _122.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _122.QueryTotalLiquidityResponseAminoMsg): _122.QueryTotalLiquidityResponse;
                toAminoMsg(message: _122.QueryTotalLiquidityResponse): _122.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _122.QueryTotalLiquidityResponseProtoMsg): _122.QueryTotalLiquidityResponse;
                toProto(message: _122.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTotalLiquidityResponse): _122.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _110.CosmWasmPool | _119.Pool | import("./concentrated-liquidity/pool").Pool | _125.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _121.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_121.ReplaceMigrationRecordsProposal>): _121.ReplaceMigrationRecordsProposal;
                fromAmino(object: _121.ReplaceMigrationRecordsProposalAmino): _121.ReplaceMigrationRecordsProposal;
                toAmino(message: _121.ReplaceMigrationRecordsProposal): _121.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _121.ReplaceMigrationRecordsProposalAminoMsg): _121.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _121.ReplaceMigrationRecordsProposal): _121.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _121.ReplaceMigrationRecordsProposalProtoMsg): _121.ReplaceMigrationRecordsProposal;
                toProto(message: _121.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _121.ReplaceMigrationRecordsProposal): _121.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _121.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_121.UpdateMigrationRecordsProposal>): _121.UpdateMigrationRecordsProposal;
                fromAmino(object: _121.UpdateMigrationRecordsProposalAmino): _121.UpdateMigrationRecordsProposal;
                toAmino(message: _121.UpdateMigrationRecordsProposal): _121.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _121.UpdateMigrationRecordsProposalAminoMsg): _121.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _121.UpdateMigrationRecordsProposal): _121.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _121.UpdateMigrationRecordsProposalProtoMsg): _121.UpdateMigrationRecordsProposal;
                toProto(message: _121.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _121.UpdateMigrationRecordsProposal): _121.UpdateMigrationRecordsProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
                fromPartial(object: Partial<_120.Params>): _120.Params;
                fromAmino(object: _120.ParamsAmino): _120.Params;
                toAmino(message: _120.Params): _120.ParamsAmino;
                fromAminoMsg(object: _120.ParamsAminoMsg): _120.Params;
                toAminoMsg(message: _120.Params): _120.ParamsAminoMsg;
                fromProtoMsg(message: _120.ParamsProtoMsg): _120.Params;
                toProto(message: _120.Params): Uint8Array;
                toProtoMsg(message: _120.Params): _120.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                fromAmino(object: _120.GenesisStateAmino): _120.GenesisState;
                toAmino(message: _120.GenesisState): _120.GenesisStateAmino;
                fromAminoMsg(object: _120.GenesisStateAminoMsg): _120.GenesisState;
                toAminoMsg(message: _120.GenesisState): _120.GenesisStateAminoMsg;
                fromProtoMsg(message: _120.GenesisStateProtoMsg): _120.GenesisState;
                toProto(message: _120.GenesisState): Uint8Array;
                toProtoMsg(message: _120.GenesisState): _120.GenesisStateProtoMsg;
            };
            MigrationRecords: {
                typeUrl: string;
                encode(message: _120.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MigrationRecords;
                fromPartial(object: Partial<_120.MigrationRecords>): _120.MigrationRecords;
                fromAmino(object: _120.MigrationRecordsAmino): _120.MigrationRecords;
                toAmino(message: _120.MigrationRecords): _120.MigrationRecordsAmino;
                fromAminoMsg(object: _120.MigrationRecordsAminoMsg): _120.MigrationRecords;
                toAminoMsg(message: _120.MigrationRecords): _120.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _120.MigrationRecordsProtoMsg): _120.MigrationRecords;
                toProto(message: _120.MigrationRecords): Uint8Array;
                toProtoMsg(message: _120.MigrationRecords): _120.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _120.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_120.BalancerToConcentratedPoolLink>): _120.BalancerToConcentratedPoolLink;
                fromAmino(object: _120.BalancerToConcentratedPoolLinkAmino): _120.BalancerToConcentratedPoolLink;
                toAmino(message: _120.BalancerToConcentratedPoolLink): _120.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _120.BalancerToConcentratedPoolLinkAminoMsg): _120.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _120.BalancerToConcentratedPoolLink): _120.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _120.BalancerToConcentratedPoolLinkProtoMsg): _120.BalancerToConcentratedPoolLink;
                toProto(message: _120.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _120.BalancerToConcentratedPoolLink): _120.BalancerToConcentratedPoolLinkProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _119.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SmoothWeightChangeParams;
                fromPartial(object: Partial<_119.SmoothWeightChangeParams>): _119.SmoothWeightChangeParams;
                fromAmino(object: _119.SmoothWeightChangeParamsAmino): _119.SmoothWeightChangeParams;
                toAmino(message: _119.SmoothWeightChangeParams): _119.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _119.SmoothWeightChangeParamsAminoMsg): _119.SmoothWeightChangeParams;
                toAminoMsg(message: _119.SmoothWeightChangeParams): _119.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _119.SmoothWeightChangeParamsProtoMsg): _119.SmoothWeightChangeParams;
                toProto(message: _119.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _119.SmoothWeightChangeParams): _119.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _119.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PoolParams;
                fromPartial(object: Partial<_119.PoolParams>): _119.PoolParams;
                fromAmino(object: _119.PoolParamsAmino): _119.PoolParams;
                toAmino(message: _119.PoolParams): _119.PoolParamsAmino;
                fromAminoMsg(object: _119.PoolParamsAminoMsg): _119.PoolParams;
                toAminoMsg(message: _119.PoolParams): _119.PoolParamsAminoMsg;
                fromProtoMsg(message: _119.PoolParamsProtoMsg): _119.PoolParams;
                toProto(message: _119.PoolParams): Uint8Array;
                toProtoMsg(message: _119.PoolParams): _119.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _119.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PoolAsset;
                fromPartial(object: Partial<_119.PoolAsset>): _119.PoolAsset;
                fromAmino(object: _119.PoolAssetAmino): _119.PoolAsset;
                toAmino(message: _119.PoolAsset): _119.PoolAssetAmino;
                fromAminoMsg(object: _119.PoolAssetAminoMsg): _119.PoolAsset;
                toAminoMsg(message: _119.PoolAsset): _119.PoolAssetAminoMsg;
                fromProtoMsg(message: _119.PoolAssetProtoMsg): _119.PoolAsset;
                toProto(message: _119.PoolAsset): Uint8Array;
                toProtoMsg(message: _119.PoolAsset): _119.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _119.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Pool;
                fromPartial(object: Partial<_119.Pool>): _119.Pool;
                fromAmino(object: _119.PoolAmino): _119.Pool;
                toAmino(message: _119.Pool): _119.PoolAmino;
                fromAminoMsg(object: _119.PoolAminoMsg): _119.Pool;
                toAminoMsg(message: _119.Pool): _119.PoolAminoMsg;
                fromProtoMsg(message: _119.PoolProtoMsg): _119.Pool;
                toProto(message: _119.Pool): Uint8Array;
                toProtoMsg(message: _119.Pool): _119.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _325.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _124.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _124.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _124.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _124.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _124.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _124.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _124.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _124.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _124.MsgCreateBalancerPool) => _124.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _124.MsgCreateBalancerPoolAmino) => _124.MsgCreateBalancerPool;
                        };
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
                            aminoType: string;
                            toAmino: (message: _124.MsgMigrateSharesToFullRangeConcentratedPosition) => _124.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                            fromAmino: (object: _124.MsgMigrateSharesToFullRangeConcentratedPositionAmino) => _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _124.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_124.MsgCreateBalancerPool>): _124.MsgCreateBalancerPool;
                        fromAmino(object: _124.MsgCreateBalancerPoolAmino): _124.MsgCreateBalancerPool;
                        toAmino(message: _124.MsgCreateBalancerPool): _124.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _124.MsgCreateBalancerPoolAminoMsg): _124.MsgCreateBalancerPool;
                        toAminoMsg(message: _124.MsgCreateBalancerPool): _124.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _124.MsgCreateBalancerPoolProtoMsg): _124.MsgCreateBalancerPool;
                        toProto(message: _124.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _124.MsgCreateBalancerPool): _124.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _124.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_124.MsgCreateBalancerPoolResponse>): _124.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _124.MsgCreateBalancerPoolResponseAmino): _124.MsgCreateBalancerPoolResponse;
                        toAmino(message: _124.MsgCreateBalancerPoolResponse): _124.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _124.MsgCreateBalancerPoolResponseAminoMsg): _124.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _124.MsgCreateBalancerPoolResponse): _124.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _124.MsgCreateBalancerPoolResponseProtoMsg): _124.MsgCreateBalancerPoolResponse;
                        toProto(message: _124.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _124.MsgCreateBalancerPoolResponse): _124.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPosition: {
                        typeUrl: string;
                        encode(message: _124.MsgMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromPartial(object: Partial<_124.MsgMigrateSharesToFullRangeConcentratedPosition>): _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromAmino(object: _124.MsgMigrateSharesToFullRangeConcentratedPositionAmino): _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAmino(message: _124.MsgMigrateSharesToFullRangeConcentratedPosition): _124.MsgMigrateSharesToFullRangeConcentratedPositionAmino;
                        fromAminoMsg(object: _124.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg): _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toAminoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPosition): _124.MsgMigrateSharesToFullRangeConcentratedPositionAminoMsg;
                        fromProtoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg): _124.MsgMigrateSharesToFullRangeConcentratedPosition;
                        toProto(message: _124.MsgMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
                        toProtoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPosition): _124.MsgMigrateSharesToFullRangeConcentratedPositionProtoMsg;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
                        typeUrl: string;
                        encode(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromPartial(object: Partial<_124.MsgMigrateSharesToFullRangeConcentratedPositionResponse>): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromAmino(object: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAmino(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseAmino;
                        fromAminoMsg(object: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toAminoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
                        fromProtoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        toProto(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
                        toProtoMsg(message: _124.MsgMigrateSharesToFullRangeConcentratedPositionResponse): _124.MsgMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _326.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _126.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _126.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _126.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _126.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _126.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _126.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _126.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _126.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _126.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _126.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _126.MsgCreateStableswapPool) => _126.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _126.MsgCreateStableswapPoolAmino) => _126.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _126.MsgStableSwapAdjustScalingFactors) => _126.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _126.MsgStableSwapAdjustScalingFactorsAmino) => _126.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _126.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_126.MsgCreateStableswapPool>): _126.MsgCreateStableswapPool;
                        fromAmino(object: _126.MsgCreateStableswapPoolAmino): _126.MsgCreateStableswapPool;
                        toAmino(message: _126.MsgCreateStableswapPool): _126.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _126.MsgCreateStableswapPoolAminoMsg): _126.MsgCreateStableswapPool;
                        toAminoMsg(message: _126.MsgCreateStableswapPool): _126.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _126.MsgCreateStableswapPoolProtoMsg): _126.MsgCreateStableswapPool;
                        toProto(message: _126.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _126.MsgCreateStableswapPool): _126.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _126.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_126.MsgCreateStableswapPoolResponse>): _126.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _126.MsgCreateStableswapPoolResponseAmino): _126.MsgCreateStableswapPoolResponse;
                        toAmino(message: _126.MsgCreateStableswapPoolResponse): _126.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _126.MsgCreateStableswapPoolResponseAminoMsg): _126.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _126.MsgCreateStableswapPoolResponse): _126.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _126.MsgCreateStableswapPoolResponseProtoMsg): _126.MsgCreateStableswapPoolResponse;
                        toProto(message: _126.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _126.MsgCreateStableswapPoolResponse): _126.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _126.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_126.MsgStableSwapAdjustScalingFactors>): _126.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _126.MsgStableSwapAdjustScalingFactorsAmino): _126.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _126.MsgStableSwapAdjustScalingFactors): _126.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _126.MsgStableSwapAdjustScalingFactorsAminoMsg): _126.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _126.MsgStableSwapAdjustScalingFactors): _126.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _126.MsgStableSwapAdjustScalingFactorsProtoMsg): _126.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _126.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _126.MsgStableSwapAdjustScalingFactors): _126.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _126.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_126.MsgStableSwapAdjustScalingFactorsResponse>): _126.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _126.MsgStableSwapAdjustScalingFactorsResponseAmino): _126.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _126.MsgStableSwapAdjustScalingFactorsResponse): _126.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _126.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _126.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _126.MsgStableSwapAdjustScalingFactorsResponse): _126.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _126.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _126.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _126.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _126.MsgStableSwapAdjustScalingFactorsResponse): _126.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _125.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PoolParams;
                        fromPartial(object: Partial<_125.PoolParams>): _125.PoolParams;
                        fromAmino(object: _125.PoolParamsAmino): _125.PoolParams;
                        toAmino(message: _125.PoolParams): _125.PoolParamsAmino;
                        fromAminoMsg(object: _125.PoolParamsAminoMsg): _125.PoolParams;
                        toAminoMsg(message: _125.PoolParams): _125.PoolParamsAminoMsg;
                        fromProtoMsg(message: _125.PoolParamsProtoMsg): _125.PoolParams;
                        toProto(message: _125.PoolParams): Uint8Array;
                        toProtoMsg(message: _125.PoolParams): _125.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _125.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Pool;
                        fromPartial(object: Partial<_125.Pool>): _125.Pool;
                        fromAmino(object: _125.PoolAmino): _125.Pool;
                        toAmino(message: _125.Pool): _125.PoolAmino;
                        fromAminoMsg(object: _125.PoolAminoMsg): _125.Pool;
                        toAminoMsg(message: _125.Pool): _125.PoolAminoMsg;
                        fromProtoMsg(message: _125.PoolProtoMsg): _125.Pool;
                        toProto(message: _125.Pool): Uint8Array;
                        toProtoMsg(message: _125.Pool): _125.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _127.QuerySpotPriceRequest): Promise<_127.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _127.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QuerySpotPriceRequest;
                fromPartial(object: Partial<_127.QuerySpotPriceRequest>): _127.QuerySpotPriceRequest;
                fromAmino(object: _127.QuerySpotPriceRequestAmino): _127.QuerySpotPriceRequest;
                toAmino(message: _127.QuerySpotPriceRequest): _127.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _127.QuerySpotPriceRequestAminoMsg): _127.QuerySpotPriceRequest;
                toAminoMsg(message: _127.QuerySpotPriceRequest): _127.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _127.QuerySpotPriceRequestProtoMsg): _127.QuerySpotPriceRequest;
                toProto(message: _127.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _127.QuerySpotPriceRequest): _127.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _127.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QuerySpotPriceResponse;
                fromPartial(object: Partial<_127.QuerySpotPriceResponse>): _127.QuerySpotPriceResponse;
                fromAmino(object: _127.QuerySpotPriceResponseAmino): _127.QuerySpotPriceResponse;
                toAmino(message: _127.QuerySpotPriceResponse): _127.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _127.QuerySpotPriceResponseAminoMsg): _127.QuerySpotPriceResponse;
                toAminoMsg(message: _127.QuerySpotPriceResponse): _127.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _127.QuerySpotPriceResponseProtoMsg): _127.QuerySpotPriceResponse;
                toProto(message: _127.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _127.QuerySpotPriceResponse): _127.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _130.ParamsRequest): Promise<_130.ParamsResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _130.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ParamsRequest;
                fromPartial(_: Partial<_130.ParamsRequest>): _130.ParamsRequest;
                fromAmino(_: _130.ParamsRequestAmino): _130.ParamsRequest;
                toAmino(_: _130.ParamsRequest): _130.ParamsRequestAmino;
                fromAminoMsg(object: _130.ParamsRequestAminoMsg): _130.ParamsRequest;
                toAminoMsg(message: _130.ParamsRequest): _130.ParamsRequestAminoMsg;
                fromProtoMsg(message: _130.ParamsRequestProtoMsg): _130.ParamsRequest;
                toProto(message: _130.ParamsRequest): Uint8Array;
                toProtoMsg(message: _130.ParamsRequest): _130.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _130.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ParamsResponse;
                fromPartial(object: Partial<_130.ParamsResponse>): _130.ParamsResponse;
                fromAmino(object: _130.ParamsResponseAmino): _130.ParamsResponse;
                toAmino(message: _130.ParamsResponse): _130.ParamsResponseAmino;
                fromAminoMsg(object: _130.ParamsResponseAminoMsg): _130.ParamsResponse;
                toAminoMsg(message: _130.ParamsResponse): _130.ParamsResponseAminoMsg;
                fromProtoMsg(message: _130.ParamsResponseProtoMsg): _130.ParamsResponse;
                toProto(message: _130.ParamsResponse): Uint8Array;
                toProtoMsg(message: _130.ParamsResponse): _130.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _129.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Params;
                fromPartial(object: Partial<_129.Params>): _129.Params;
                fromAmino(object: _129.ParamsAmino): _129.Params;
                toAmino(message: _129.Params): _129.ParamsAmino;
                fromAminoMsg(object: _129.ParamsAminoMsg): _129.Params;
                toAminoMsg(message: _129.Params): _129.ParamsAminoMsg;
                fromProtoMsg(message: _129.ParamsProtoMsg): _129.Params;
                toProto(message: _129.Params): Uint8Array;
                toProtoMsg(message: _129.Params): _129.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                toAminoMsg(message: _128.GenesisState): _128.GenesisStateAminoMsg;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _328.MsgClientImpl;
        QueryClientImpl: typeof _313.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _134.ModuleToDistributeCoinsRequest): Promise<_134.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _134.GaugeByIDRequest): Promise<_134.GaugeByIDResponse>;
            gauges(request?: _134.GaugesRequest): Promise<_134.GaugesResponse>;
            activeGauges(request?: _134.ActiveGaugesRequest): Promise<_134.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _134.ActiveGaugesPerDenomRequest): Promise<_134.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _134.UpcomingGaugesRequest): Promise<_134.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _134.UpcomingGaugesPerDenomRequest): Promise<_134.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _134.RewardsEstRequest): Promise<_134.RewardsEstResponse>;
            lockableDurations(request?: _134.QueryLockableDurationsRequest): Promise<_134.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _295.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _135.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _135.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _135.MsgCreateGauge): {
                    typeUrl: string;
                    value: _135.MsgCreateGauge;
                };
                addToGauge(value: _135.MsgAddToGauge): {
                    typeUrl: string;
                    value: _135.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _135.MsgCreateGauge): {
                    typeUrl: string;
                    value: _135.MsgCreateGauge;
                };
                addToGauge(value: _135.MsgAddToGauge): {
                    typeUrl: string;
                    value: _135.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _135.MsgCreateGauge) => _135.MsgCreateGaugeAmino;
                fromAmino: (object: _135.MsgCreateGaugeAmino) => _135.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _135.MsgAddToGauge) => _135.MsgAddToGaugeAmino;
                fromAmino: (object: _135.MsgAddToGaugeAmino) => _135.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _135.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateGauge;
            fromPartial(object: Partial<_135.MsgCreateGauge>): _135.MsgCreateGauge;
            fromAmino(object: _135.MsgCreateGaugeAmino): _135.MsgCreateGauge;
            toAmino(message: _135.MsgCreateGauge): _135.MsgCreateGaugeAmino;
            fromAminoMsg(object: _135.MsgCreateGaugeAminoMsg): _135.MsgCreateGauge;
            toAminoMsg(message: _135.MsgCreateGauge): _135.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _135.MsgCreateGaugeProtoMsg): _135.MsgCreateGauge;
            toProto(message: _135.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _135.MsgCreateGauge): _135.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _135.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_135.MsgCreateGaugeResponse>): _135.MsgCreateGaugeResponse;
            fromAmino(_: _135.MsgCreateGaugeResponseAmino): _135.MsgCreateGaugeResponse;
            toAmino(_: _135.MsgCreateGaugeResponse): _135.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _135.MsgCreateGaugeResponseAminoMsg): _135.MsgCreateGaugeResponse;
            toAminoMsg(message: _135.MsgCreateGaugeResponse): _135.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _135.MsgCreateGaugeResponseProtoMsg): _135.MsgCreateGaugeResponse;
            toProto(message: _135.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _135.MsgCreateGaugeResponse): _135.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _135.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgAddToGauge;
            fromPartial(object: Partial<_135.MsgAddToGauge>): _135.MsgAddToGauge;
            fromAmino(object: _135.MsgAddToGaugeAmino): _135.MsgAddToGauge;
            toAmino(message: _135.MsgAddToGauge): _135.MsgAddToGaugeAmino;
            fromAminoMsg(object: _135.MsgAddToGaugeAminoMsg): _135.MsgAddToGauge;
            toAminoMsg(message: _135.MsgAddToGauge): _135.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _135.MsgAddToGaugeProtoMsg): _135.MsgAddToGauge;
            toProto(message: _135.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _135.MsgAddToGauge): _135.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _135.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_135.MsgAddToGaugeResponse>): _135.MsgAddToGaugeResponse;
            fromAmino(_: _135.MsgAddToGaugeResponseAmino): _135.MsgAddToGaugeResponse;
            toAmino(_: _135.MsgAddToGaugeResponse): _135.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _135.MsgAddToGaugeResponseAminoMsg): _135.MsgAddToGaugeResponse;
            toAminoMsg(message: _135.MsgAddToGaugeResponse): _135.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _135.MsgAddToGaugeResponseProtoMsg): _135.MsgAddToGaugeResponse;
            toProto(message: _135.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _135.MsgAddToGaugeResponse): _135.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _134.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_134.ModuleToDistributeCoinsRequest>): _134.ModuleToDistributeCoinsRequest;
            fromAmino(_: _134.ModuleToDistributeCoinsRequestAmino): _134.ModuleToDistributeCoinsRequest;
            toAmino(_: _134.ModuleToDistributeCoinsRequest): _134.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _134.ModuleToDistributeCoinsRequestAminoMsg): _134.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _134.ModuleToDistributeCoinsRequest): _134.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _134.ModuleToDistributeCoinsRequestProtoMsg): _134.ModuleToDistributeCoinsRequest;
            toProto(message: _134.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _134.ModuleToDistributeCoinsRequest): _134.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _134.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_134.ModuleToDistributeCoinsResponse>): _134.ModuleToDistributeCoinsResponse;
            fromAmino(object: _134.ModuleToDistributeCoinsResponseAmino): _134.ModuleToDistributeCoinsResponse;
            toAmino(message: _134.ModuleToDistributeCoinsResponse): _134.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _134.ModuleToDistributeCoinsResponseAminoMsg): _134.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _134.ModuleToDistributeCoinsResponse): _134.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _134.ModuleToDistributeCoinsResponseProtoMsg): _134.ModuleToDistributeCoinsResponse;
            toProto(message: _134.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _134.ModuleToDistributeCoinsResponse): _134.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _134.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GaugeByIDRequest;
            fromPartial(object: Partial<_134.GaugeByIDRequest>): _134.GaugeByIDRequest;
            fromAmino(object: _134.GaugeByIDRequestAmino): _134.GaugeByIDRequest;
            toAmino(message: _134.GaugeByIDRequest): _134.GaugeByIDRequestAmino;
            fromAminoMsg(object: _134.GaugeByIDRequestAminoMsg): _134.GaugeByIDRequest;
            toAminoMsg(message: _134.GaugeByIDRequest): _134.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _134.GaugeByIDRequestProtoMsg): _134.GaugeByIDRequest;
            toProto(message: _134.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _134.GaugeByIDRequest): _134.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _134.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GaugeByIDResponse;
            fromPartial(object: Partial<_134.GaugeByIDResponse>): _134.GaugeByIDResponse;
            fromAmino(object: _134.GaugeByIDResponseAmino): _134.GaugeByIDResponse;
            toAmino(message: _134.GaugeByIDResponse): _134.GaugeByIDResponseAmino;
            fromAminoMsg(object: _134.GaugeByIDResponseAminoMsg): _134.GaugeByIDResponse;
            toAminoMsg(message: _134.GaugeByIDResponse): _134.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _134.GaugeByIDResponseProtoMsg): _134.GaugeByIDResponse;
            toProto(message: _134.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _134.GaugeByIDResponse): _134.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _134.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GaugesRequest;
            fromPartial(object: Partial<_134.GaugesRequest>): _134.GaugesRequest;
            fromAmino(object: _134.GaugesRequestAmino): _134.GaugesRequest;
            toAmino(message: _134.GaugesRequest): _134.GaugesRequestAmino;
            fromAminoMsg(object: _134.GaugesRequestAminoMsg): _134.GaugesRequest;
            toAminoMsg(message: _134.GaugesRequest): _134.GaugesRequestAminoMsg;
            fromProtoMsg(message: _134.GaugesRequestProtoMsg): _134.GaugesRequest;
            toProto(message: _134.GaugesRequest): Uint8Array;
            toProtoMsg(message: _134.GaugesRequest): _134.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _134.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GaugesResponse;
            fromPartial(object: Partial<_134.GaugesResponse>): _134.GaugesResponse;
            fromAmino(object: _134.GaugesResponseAmino): _134.GaugesResponse;
            toAmino(message: _134.GaugesResponse): _134.GaugesResponseAmino;
            fromAminoMsg(object: _134.GaugesResponseAminoMsg): _134.GaugesResponse;
            toAminoMsg(message: _134.GaugesResponse): _134.GaugesResponseAminoMsg;
            fromProtoMsg(message: _134.GaugesResponseProtoMsg): _134.GaugesResponse;
            toProto(message: _134.GaugesResponse): Uint8Array;
            toProtoMsg(message: _134.GaugesResponse): _134.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _134.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ActiveGaugesRequest;
            fromPartial(object: Partial<_134.ActiveGaugesRequest>): _134.ActiveGaugesRequest;
            fromAmino(object: _134.ActiveGaugesRequestAmino): _134.ActiveGaugesRequest;
            toAmino(message: _134.ActiveGaugesRequest): _134.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _134.ActiveGaugesRequestAminoMsg): _134.ActiveGaugesRequest;
            toAminoMsg(message: _134.ActiveGaugesRequest): _134.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _134.ActiveGaugesRequestProtoMsg): _134.ActiveGaugesRequest;
            toProto(message: _134.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _134.ActiveGaugesRequest): _134.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _134.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ActiveGaugesResponse;
            fromPartial(object: Partial<_134.ActiveGaugesResponse>): _134.ActiveGaugesResponse;
            fromAmino(object: _134.ActiveGaugesResponseAmino): _134.ActiveGaugesResponse;
            toAmino(message: _134.ActiveGaugesResponse): _134.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _134.ActiveGaugesResponseAminoMsg): _134.ActiveGaugesResponse;
            toAminoMsg(message: _134.ActiveGaugesResponse): _134.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _134.ActiveGaugesResponseProtoMsg): _134.ActiveGaugesResponse;
            toProto(message: _134.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _134.ActiveGaugesResponse): _134.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _134.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_134.ActiveGaugesPerDenomRequest>): _134.ActiveGaugesPerDenomRequest;
            fromAmino(object: _134.ActiveGaugesPerDenomRequestAmino): _134.ActiveGaugesPerDenomRequest;
            toAmino(message: _134.ActiveGaugesPerDenomRequest): _134.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _134.ActiveGaugesPerDenomRequestAminoMsg): _134.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _134.ActiveGaugesPerDenomRequest): _134.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _134.ActiveGaugesPerDenomRequestProtoMsg): _134.ActiveGaugesPerDenomRequest;
            toProto(message: _134.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _134.ActiveGaugesPerDenomRequest): _134.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _134.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_134.ActiveGaugesPerDenomResponse>): _134.ActiveGaugesPerDenomResponse;
            fromAmino(object: _134.ActiveGaugesPerDenomResponseAmino): _134.ActiveGaugesPerDenomResponse;
            toAmino(message: _134.ActiveGaugesPerDenomResponse): _134.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _134.ActiveGaugesPerDenomResponseAminoMsg): _134.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _134.ActiveGaugesPerDenomResponse): _134.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _134.ActiveGaugesPerDenomResponseProtoMsg): _134.ActiveGaugesPerDenomResponse;
            toProto(message: _134.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _134.ActiveGaugesPerDenomResponse): _134.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _134.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.UpcomingGaugesRequest;
            fromPartial(object: Partial<_134.UpcomingGaugesRequest>): _134.UpcomingGaugesRequest;
            fromAmino(object: _134.UpcomingGaugesRequestAmino): _134.UpcomingGaugesRequest;
            toAmino(message: _134.UpcomingGaugesRequest): _134.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _134.UpcomingGaugesRequestAminoMsg): _134.UpcomingGaugesRequest;
            toAminoMsg(message: _134.UpcomingGaugesRequest): _134.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _134.UpcomingGaugesRequestProtoMsg): _134.UpcomingGaugesRequest;
            toProto(message: _134.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _134.UpcomingGaugesRequest): _134.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _134.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.UpcomingGaugesResponse;
            fromPartial(object: Partial<_134.UpcomingGaugesResponse>): _134.UpcomingGaugesResponse;
            fromAmino(object: _134.UpcomingGaugesResponseAmino): _134.UpcomingGaugesResponse;
            toAmino(message: _134.UpcomingGaugesResponse): _134.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _134.UpcomingGaugesResponseAminoMsg): _134.UpcomingGaugesResponse;
            toAminoMsg(message: _134.UpcomingGaugesResponse): _134.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _134.UpcomingGaugesResponseProtoMsg): _134.UpcomingGaugesResponse;
            toProto(message: _134.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _134.UpcomingGaugesResponse): _134.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _134.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_134.UpcomingGaugesPerDenomRequest>): _134.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _134.UpcomingGaugesPerDenomRequestAmino): _134.UpcomingGaugesPerDenomRequest;
            toAmino(message: _134.UpcomingGaugesPerDenomRequest): _134.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _134.UpcomingGaugesPerDenomRequestAminoMsg): _134.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _134.UpcomingGaugesPerDenomRequest): _134.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _134.UpcomingGaugesPerDenomRequestProtoMsg): _134.UpcomingGaugesPerDenomRequest;
            toProto(message: _134.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _134.UpcomingGaugesPerDenomRequest): _134.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _134.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_134.UpcomingGaugesPerDenomResponse>): _134.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _134.UpcomingGaugesPerDenomResponseAmino): _134.UpcomingGaugesPerDenomResponse;
            toAmino(message: _134.UpcomingGaugesPerDenomResponse): _134.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _134.UpcomingGaugesPerDenomResponseAminoMsg): _134.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _134.UpcomingGaugesPerDenomResponse): _134.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _134.UpcomingGaugesPerDenomResponseProtoMsg): _134.UpcomingGaugesPerDenomResponse;
            toProto(message: _134.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _134.UpcomingGaugesPerDenomResponse): _134.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _134.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.RewardsEstRequest;
            fromPartial(object: Partial<_134.RewardsEstRequest>): _134.RewardsEstRequest;
            fromAmino(object: _134.RewardsEstRequestAmino): _134.RewardsEstRequest;
            toAmino(message: _134.RewardsEstRequest): _134.RewardsEstRequestAmino;
            fromAminoMsg(object: _134.RewardsEstRequestAminoMsg): _134.RewardsEstRequest;
            toAminoMsg(message: _134.RewardsEstRequest): _134.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _134.RewardsEstRequestProtoMsg): _134.RewardsEstRequest;
            toProto(message: _134.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _134.RewardsEstRequest): _134.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _134.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.RewardsEstResponse;
            fromPartial(object: Partial<_134.RewardsEstResponse>): _134.RewardsEstResponse;
            fromAmino(object: _134.RewardsEstResponseAmino): _134.RewardsEstResponse;
            toAmino(message: _134.RewardsEstResponse): _134.RewardsEstResponseAmino;
            fromAminoMsg(object: _134.RewardsEstResponseAminoMsg): _134.RewardsEstResponse;
            toAminoMsg(message: _134.RewardsEstResponse): _134.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _134.RewardsEstResponseProtoMsg): _134.RewardsEstResponse;
            toProto(message: _134.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _134.RewardsEstResponse): _134.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _134.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_134.QueryLockableDurationsRequest>): _134.QueryLockableDurationsRequest;
            fromAmino(_: _134.QueryLockableDurationsRequestAmino): _134.QueryLockableDurationsRequest;
            toAmino(_: _134.QueryLockableDurationsRequest): _134.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _134.QueryLockableDurationsRequestAminoMsg): _134.QueryLockableDurationsRequest;
            toAminoMsg(message: _134.QueryLockableDurationsRequest): _134.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _134.QueryLockableDurationsRequestProtoMsg): _134.QueryLockableDurationsRequest;
            toProto(message: _134.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _134.QueryLockableDurationsRequest): _134.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _134.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_134.QueryLockableDurationsResponse>): _134.QueryLockableDurationsResponse;
            fromAmino(object: _134.QueryLockableDurationsResponseAmino): _134.QueryLockableDurationsResponse;
            toAmino(message: _134.QueryLockableDurationsResponse): _134.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _134.QueryLockableDurationsResponseAminoMsg): _134.QueryLockableDurationsResponse;
            toAminoMsg(message: _134.QueryLockableDurationsResponse): _134.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _134.QueryLockableDurationsResponseProtoMsg): _134.QueryLockableDurationsResponse;
            toProto(message: _134.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _134.QueryLockableDurationsResponse): _134.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Params;
            fromPartial(object: Partial<_133.Params>): _133.Params;
            fromAmino(object: _133.ParamsAmino): _133.Params;
            toAmino(message: _133.Params): _133.ParamsAmino;
            fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
            toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
            fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
            toProto(message: _133.Params): Uint8Array;
            toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisState;
            fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
            fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
            toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
            fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
            toAminoMsg(message: _132.GenesisState): _132.GenesisStateAminoMsg;
            fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
            toProto(message: _132.GenesisState): Uint8Array;
            toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _131.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Gauge;
            fromPartial(object: Partial<_131.Gauge>): _131.Gauge;
            fromAmino(object: _131.GaugeAmino): _131.Gauge;
            toAmino(message: _131.Gauge): _131.GaugeAmino;
            fromAminoMsg(object: _131.GaugeAminoMsg): _131.Gauge;
            toAminoMsg(message: _131.Gauge): _131.GaugeAminoMsg;
            fromProtoMsg(message: _131.GaugeProtoMsg): _131.Gauge;
            toProto(message: _131.Gauge): Uint8Array;
            toProtoMsg(message: _131.Gauge): _131.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _131.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.LockableDurationsInfo;
            fromPartial(object: Partial<_131.LockableDurationsInfo>): _131.LockableDurationsInfo;
            fromAmino(object: _131.LockableDurationsInfoAmino): _131.LockableDurationsInfo;
            toAmino(message: _131.LockableDurationsInfo): _131.LockableDurationsInfoAmino;
            fromAminoMsg(object: _131.LockableDurationsInfoAminoMsg): _131.LockableDurationsInfo;
            toAminoMsg(message: _131.LockableDurationsInfo): _131.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _131.LockableDurationsInfoProtoMsg): _131.LockableDurationsInfo;
            toProto(message: _131.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _131.LockableDurationsInfo): _131.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _329.MsgClientImpl;
        QueryClientImpl: typeof _314.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _139.ModuleBalanceRequest): Promise<_139.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _139.ModuleLockedAmountRequest): Promise<_139.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _139.AccountUnlockableCoinsRequest): Promise<_139.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _139.AccountUnlockingCoinsRequest): Promise<_139.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _139.AccountLockedCoinsRequest): Promise<_139.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _139.AccountLockedPastTimeRequest): Promise<_139.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_139.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _139.AccountUnlockedBeforeTimeRequest): Promise<_139.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _139.AccountLockedPastTimeDenomRequest): Promise<_139.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _139.LockedDenomRequest): Promise<_139.LockedDenomResponse>;
            lockedByID(request: _139.LockedRequest): Promise<_139.LockedResponse>;
            nextLockID(request?: _139.NextLockIDRequest): Promise<_139.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _139.SyntheticLockupsByLockupIDRequest): Promise<_139.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _139.AccountLockedLongerDurationRequest): Promise<_139.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _139.AccountLockedDurationRequest): Promise<_139.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_139.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _139.AccountLockedLongerDurationDenomRequest): Promise<_139.AccountLockedLongerDurationDenomResponse>;
            params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _296.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _140.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _140.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _140.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _140.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _140.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _140.MsgLockTokens): {
                    typeUrl: string;
                    value: _140.MsgLockTokens;
                };
                beginUnlockingAll(value: _140.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _140.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _140.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _140.MsgBeginUnlocking;
                };
                extendLockup(value: _140.MsgExtendLockup): {
                    typeUrl: string;
                    value: _140.MsgExtendLockup;
                };
                forceUnlock(value: _140.MsgForceUnlock): {
                    typeUrl: string;
                    value: _140.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _140.MsgLockTokens): {
                    typeUrl: string;
                    value: _140.MsgLockTokens;
                };
                beginUnlockingAll(value: _140.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _140.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _140.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _140.MsgBeginUnlocking;
                };
                extendLockup(value: _140.MsgExtendLockup): {
                    typeUrl: string;
                    value: _140.MsgExtendLockup;
                };
                forceUnlock(value: _140.MsgForceUnlock): {
                    typeUrl: string;
                    value: _140.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _140.MsgLockTokens) => _140.MsgLockTokensAmino;
                fromAmino: (object: _140.MsgLockTokensAmino) => _140.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _140.MsgBeginUnlockingAll) => _140.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _140.MsgBeginUnlockingAllAmino) => _140.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _140.MsgBeginUnlocking) => _140.MsgBeginUnlockingAmino;
                fromAmino: (object: _140.MsgBeginUnlockingAmino) => _140.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _140.MsgExtendLockup) => _140.MsgExtendLockupAmino;
                fromAmino: (object: _140.MsgExtendLockupAmino) => _140.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _140.MsgForceUnlock) => _140.MsgForceUnlockAmino;
                fromAmino: (object: _140.MsgForceUnlockAmino) => _140.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _140.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgLockTokens;
            fromPartial(object: Partial<_140.MsgLockTokens>): _140.MsgLockTokens;
            fromAmino(object: _140.MsgLockTokensAmino): _140.MsgLockTokens;
            toAmino(message: _140.MsgLockTokens): _140.MsgLockTokensAmino;
            fromAminoMsg(object: _140.MsgLockTokensAminoMsg): _140.MsgLockTokens;
            toAminoMsg(message: _140.MsgLockTokens): _140.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _140.MsgLockTokensProtoMsg): _140.MsgLockTokens;
            toProto(message: _140.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _140.MsgLockTokens): _140.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _140.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgLockTokensResponse;
            fromPartial(object: Partial<_140.MsgLockTokensResponse>): _140.MsgLockTokensResponse;
            fromAmino(object: _140.MsgLockTokensResponseAmino): _140.MsgLockTokensResponse;
            toAmino(message: _140.MsgLockTokensResponse): _140.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _140.MsgLockTokensResponseAminoMsg): _140.MsgLockTokensResponse;
            toAminoMsg(message: _140.MsgLockTokensResponse): _140.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _140.MsgLockTokensResponseProtoMsg): _140.MsgLockTokensResponse;
            toProto(message: _140.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _140.MsgLockTokensResponse): _140.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _140.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_140.MsgBeginUnlockingAll>): _140.MsgBeginUnlockingAll;
            fromAmino(object: _140.MsgBeginUnlockingAllAmino): _140.MsgBeginUnlockingAll;
            toAmino(message: _140.MsgBeginUnlockingAll): _140.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _140.MsgBeginUnlockingAllAminoMsg): _140.MsgBeginUnlockingAll;
            toAminoMsg(message: _140.MsgBeginUnlockingAll): _140.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _140.MsgBeginUnlockingAllProtoMsg): _140.MsgBeginUnlockingAll;
            toProto(message: _140.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _140.MsgBeginUnlockingAll): _140.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _140.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_140.MsgBeginUnlockingAllResponse>): _140.MsgBeginUnlockingAllResponse;
            fromAmino(object: _140.MsgBeginUnlockingAllResponseAmino): _140.MsgBeginUnlockingAllResponse;
            toAmino(message: _140.MsgBeginUnlockingAllResponse): _140.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _140.MsgBeginUnlockingAllResponseAminoMsg): _140.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _140.MsgBeginUnlockingAllResponse): _140.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _140.MsgBeginUnlockingAllResponseProtoMsg): _140.MsgBeginUnlockingAllResponse;
            toProto(message: _140.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _140.MsgBeginUnlockingAllResponse): _140.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _140.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgBeginUnlocking;
            fromPartial(object: Partial<_140.MsgBeginUnlocking>): _140.MsgBeginUnlocking;
            fromAmino(object: _140.MsgBeginUnlockingAmino): _140.MsgBeginUnlocking;
            toAmino(message: _140.MsgBeginUnlocking): _140.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _140.MsgBeginUnlockingAminoMsg): _140.MsgBeginUnlocking;
            toAminoMsg(message: _140.MsgBeginUnlocking): _140.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _140.MsgBeginUnlockingProtoMsg): _140.MsgBeginUnlocking;
            toProto(message: _140.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _140.MsgBeginUnlocking): _140.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _140.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_140.MsgBeginUnlockingResponse>): _140.MsgBeginUnlockingResponse;
            fromAmino(object: _140.MsgBeginUnlockingResponseAmino): _140.MsgBeginUnlockingResponse;
            toAmino(message: _140.MsgBeginUnlockingResponse): _140.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _140.MsgBeginUnlockingResponseAminoMsg): _140.MsgBeginUnlockingResponse;
            toAminoMsg(message: _140.MsgBeginUnlockingResponse): _140.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _140.MsgBeginUnlockingResponseProtoMsg): _140.MsgBeginUnlockingResponse;
            toProto(message: _140.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _140.MsgBeginUnlockingResponse): _140.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _140.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExtendLockup;
            fromPartial(object: Partial<_140.MsgExtendLockup>): _140.MsgExtendLockup;
            fromAmino(object: _140.MsgExtendLockupAmino): _140.MsgExtendLockup;
            toAmino(message: _140.MsgExtendLockup): _140.MsgExtendLockupAmino;
            fromAminoMsg(object: _140.MsgExtendLockupAminoMsg): _140.MsgExtendLockup;
            toAminoMsg(message: _140.MsgExtendLockup): _140.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _140.MsgExtendLockupProtoMsg): _140.MsgExtendLockup;
            toProto(message: _140.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _140.MsgExtendLockup): _140.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _140.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgExtendLockupResponse;
            fromPartial(object: Partial<_140.MsgExtendLockupResponse>): _140.MsgExtendLockupResponse;
            fromAmino(object: _140.MsgExtendLockupResponseAmino): _140.MsgExtendLockupResponse;
            toAmino(message: _140.MsgExtendLockupResponse): _140.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _140.MsgExtendLockupResponseAminoMsg): _140.MsgExtendLockupResponse;
            toAminoMsg(message: _140.MsgExtendLockupResponse): _140.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _140.MsgExtendLockupResponseProtoMsg): _140.MsgExtendLockupResponse;
            toProto(message: _140.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _140.MsgExtendLockupResponse): _140.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _140.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgForceUnlock;
            fromPartial(object: Partial<_140.MsgForceUnlock>): _140.MsgForceUnlock;
            fromAmino(object: _140.MsgForceUnlockAmino): _140.MsgForceUnlock;
            toAmino(message: _140.MsgForceUnlock): _140.MsgForceUnlockAmino;
            fromAminoMsg(object: _140.MsgForceUnlockAminoMsg): _140.MsgForceUnlock;
            toAminoMsg(message: _140.MsgForceUnlock): _140.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _140.MsgForceUnlockProtoMsg): _140.MsgForceUnlock;
            toProto(message: _140.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _140.MsgForceUnlock): _140.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _140.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgForceUnlockResponse;
            fromPartial(object: Partial<_140.MsgForceUnlockResponse>): _140.MsgForceUnlockResponse;
            fromAmino(object: _140.MsgForceUnlockResponseAmino): _140.MsgForceUnlockResponse;
            toAmino(message: _140.MsgForceUnlockResponse): _140.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _140.MsgForceUnlockResponseAminoMsg): _140.MsgForceUnlockResponse;
            toAminoMsg(message: _140.MsgForceUnlockResponse): _140.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _140.MsgForceUnlockResponseProtoMsg): _140.MsgForceUnlockResponse;
            toProto(message: _140.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _140.MsgForceUnlockResponse): _140.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _139.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ModuleBalanceRequest;
            fromPartial(_: Partial<_139.ModuleBalanceRequest>): _139.ModuleBalanceRequest;
            fromAmino(_: _139.ModuleBalanceRequestAmino): _139.ModuleBalanceRequest;
            toAmino(_: _139.ModuleBalanceRequest): _139.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _139.ModuleBalanceRequestAminoMsg): _139.ModuleBalanceRequest;
            toAminoMsg(message: _139.ModuleBalanceRequest): _139.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _139.ModuleBalanceRequestProtoMsg): _139.ModuleBalanceRequest;
            toProto(message: _139.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _139.ModuleBalanceRequest): _139.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _139.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ModuleBalanceResponse;
            fromPartial(object: Partial<_139.ModuleBalanceResponse>): _139.ModuleBalanceResponse;
            fromAmino(object: _139.ModuleBalanceResponseAmino): _139.ModuleBalanceResponse;
            toAmino(message: _139.ModuleBalanceResponse): _139.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _139.ModuleBalanceResponseAminoMsg): _139.ModuleBalanceResponse;
            toAminoMsg(message: _139.ModuleBalanceResponse): _139.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _139.ModuleBalanceResponseProtoMsg): _139.ModuleBalanceResponse;
            toProto(message: _139.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _139.ModuleBalanceResponse): _139.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _139.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_139.ModuleLockedAmountRequest>): _139.ModuleLockedAmountRequest;
            fromAmino(_: _139.ModuleLockedAmountRequestAmino): _139.ModuleLockedAmountRequest;
            toAmino(_: _139.ModuleLockedAmountRequest): _139.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _139.ModuleLockedAmountRequestAminoMsg): _139.ModuleLockedAmountRequest;
            toAminoMsg(message: _139.ModuleLockedAmountRequest): _139.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _139.ModuleLockedAmountRequestProtoMsg): _139.ModuleLockedAmountRequest;
            toProto(message: _139.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _139.ModuleLockedAmountRequest): _139.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _139.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_139.ModuleLockedAmountResponse>): _139.ModuleLockedAmountResponse;
            fromAmino(object: _139.ModuleLockedAmountResponseAmino): _139.ModuleLockedAmountResponse;
            toAmino(message: _139.ModuleLockedAmountResponse): _139.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _139.ModuleLockedAmountResponseAminoMsg): _139.ModuleLockedAmountResponse;
            toAminoMsg(message: _139.ModuleLockedAmountResponse): _139.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _139.ModuleLockedAmountResponseProtoMsg): _139.ModuleLockedAmountResponse;
            toProto(message: _139.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _139.ModuleLockedAmountResponse): _139.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _139.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_139.AccountUnlockableCoinsRequest>): _139.AccountUnlockableCoinsRequest;
            fromAmino(object: _139.AccountUnlockableCoinsRequestAmino): _139.AccountUnlockableCoinsRequest;
            toAmino(message: _139.AccountUnlockableCoinsRequest): _139.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _139.AccountUnlockableCoinsRequestAminoMsg): _139.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _139.AccountUnlockableCoinsRequest): _139.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockableCoinsRequestProtoMsg): _139.AccountUnlockableCoinsRequest;
            toProto(message: _139.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockableCoinsRequest): _139.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _139.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_139.AccountUnlockableCoinsResponse>): _139.AccountUnlockableCoinsResponse;
            fromAmino(object: _139.AccountUnlockableCoinsResponseAmino): _139.AccountUnlockableCoinsResponse;
            toAmino(message: _139.AccountUnlockableCoinsResponse): _139.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _139.AccountUnlockableCoinsResponseAminoMsg): _139.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _139.AccountUnlockableCoinsResponse): _139.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockableCoinsResponseProtoMsg): _139.AccountUnlockableCoinsResponse;
            toProto(message: _139.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockableCoinsResponse): _139.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _139.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_139.AccountUnlockingCoinsRequest>): _139.AccountUnlockingCoinsRequest;
            fromAmino(object: _139.AccountUnlockingCoinsRequestAmino): _139.AccountUnlockingCoinsRequest;
            toAmino(message: _139.AccountUnlockingCoinsRequest): _139.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _139.AccountUnlockingCoinsRequestAminoMsg): _139.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _139.AccountUnlockingCoinsRequest): _139.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockingCoinsRequestProtoMsg): _139.AccountUnlockingCoinsRequest;
            toProto(message: _139.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockingCoinsRequest): _139.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _139.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_139.AccountUnlockingCoinsResponse>): _139.AccountUnlockingCoinsResponse;
            fromAmino(object: _139.AccountUnlockingCoinsResponseAmino): _139.AccountUnlockingCoinsResponse;
            toAmino(message: _139.AccountUnlockingCoinsResponse): _139.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _139.AccountUnlockingCoinsResponseAminoMsg): _139.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _139.AccountUnlockingCoinsResponse): _139.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockingCoinsResponseProtoMsg): _139.AccountUnlockingCoinsResponse;
            toProto(message: _139.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockingCoinsResponse): _139.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_139.AccountLockedCoinsRequest>): _139.AccountLockedCoinsRequest;
            fromAmino(object: _139.AccountLockedCoinsRequestAmino): _139.AccountLockedCoinsRequest;
            toAmino(message: _139.AccountLockedCoinsRequest): _139.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _139.AccountLockedCoinsRequestAminoMsg): _139.AccountLockedCoinsRequest;
            toAminoMsg(message: _139.AccountLockedCoinsRequest): _139.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedCoinsRequestProtoMsg): _139.AccountLockedCoinsRequest;
            toProto(message: _139.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedCoinsRequest): _139.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_139.AccountLockedCoinsResponse>): _139.AccountLockedCoinsResponse;
            fromAmino(object: _139.AccountLockedCoinsResponseAmino): _139.AccountLockedCoinsResponse;
            toAmino(message: _139.AccountLockedCoinsResponse): _139.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _139.AccountLockedCoinsResponseAminoMsg): _139.AccountLockedCoinsResponse;
            toAminoMsg(message: _139.AccountLockedCoinsResponse): _139.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedCoinsResponseProtoMsg): _139.AccountLockedCoinsResponse;
            toProto(message: _139.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedCoinsResponse): _139.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_139.AccountLockedPastTimeRequest>): _139.AccountLockedPastTimeRequest;
            fromAmino(object: _139.AccountLockedPastTimeRequestAmino): _139.AccountLockedPastTimeRequest;
            toAmino(message: _139.AccountLockedPastTimeRequest): _139.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeRequestAminoMsg): _139.AccountLockedPastTimeRequest;
            toAminoMsg(message: _139.AccountLockedPastTimeRequest): _139.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeRequestProtoMsg): _139.AccountLockedPastTimeRequest;
            toProto(message: _139.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeRequest): _139.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_139.AccountLockedPastTimeResponse>): _139.AccountLockedPastTimeResponse;
            fromAmino(object: _139.AccountLockedPastTimeResponseAmino): _139.AccountLockedPastTimeResponse;
            toAmino(message: _139.AccountLockedPastTimeResponse): _139.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeResponseAminoMsg): _139.AccountLockedPastTimeResponse;
            toAminoMsg(message: _139.AccountLockedPastTimeResponse): _139.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeResponseProtoMsg): _139.AccountLockedPastTimeResponse;
            toProto(message: _139.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeResponse): _139.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_139.AccountLockedPastTimeNotUnlockingOnlyRequest>): _139.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _139.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _139.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): _139.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _139.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): _139.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _139.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): _139.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_139.AccountLockedPastTimeNotUnlockingOnlyResponse>): _139.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _139.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _139.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponse): _139.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _139.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponse): _139.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _139.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeNotUnlockingOnlyResponse): _139.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _139.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_139.AccountUnlockedBeforeTimeRequest>): _139.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _139.AccountUnlockedBeforeTimeRequestAmino): _139.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _139.AccountUnlockedBeforeTimeRequest): _139.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _139.AccountUnlockedBeforeTimeRequestAminoMsg): _139.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _139.AccountUnlockedBeforeTimeRequest): _139.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockedBeforeTimeRequestProtoMsg): _139.AccountUnlockedBeforeTimeRequest;
            toProto(message: _139.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockedBeforeTimeRequest): _139.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _139.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_139.AccountUnlockedBeforeTimeResponse>): _139.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _139.AccountUnlockedBeforeTimeResponseAmino): _139.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _139.AccountUnlockedBeforeTimeResponse): _139.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _139.AccountUnlockedBeforeTimeResponseAminoMsg): _139.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _139.AccountUnlockedBeforeTimeResponse): _139.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _139.AccountUnlockedBeforeTimeResponseProtoMsg): _139.AccountUnlockedBeforeTimeResponse;
            toProto(message: _139.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _139.AccountUnlockedBeforeTimeResponse): _139.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_139.AccountLockedPastTimeDenomRequest>): _139.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _139.AccountLockedPastTimeDenomRequestAmino): _139.AccountLockedPastTimeDenomRequest;
            toAmino(message: _139.AccountLockedPastTimeDenomRequest): _139.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeDenomRequestAminoMsg): _139.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _139.AccountLockedPastTimeDenomRequest): _139.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeDenomRequestProtoMsg): _139.AccountLockedPastTimeDenomRequest;
            toProto(message: _139.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeDenomRequest): _139.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_139.AccountLockedPastTimeDenomResponse>): _139.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _139.AccountLockedPastTimeDenomResponseAmino): _139.AccountLockedPastTimeDenomResponse;
            toAmino(message: _139.AccountLockedPastTimeDenomResponse): _139.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _139.AccountLockedPastTimeDenomResponseAminoMsg): _139.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _139.AccountLockedPastTimeDenomResponse): _139.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedPastTimeDenomResponseProtoMsg): _139.AccountLockedPastTimeDenomResponse;
            toProto(message: _139.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedPastTimeDenomResponse): _139.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _139.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LockedDenomRequest;
            fromPartial(object: Partial<_139.LockedDenomRequest>): _139.LockedDenomRequest;
            fromAmino(object: _139.LockedDenomRequestAmino): _139.LockedDenomRequest;
            toAmino(message: _139.LockedDenomRequest): _139.LockedDenomRequestAmino;
            fromAminoMsg(object: _139.LockedDenomRequestAminoMsg): _139.LockedDenomRequest;
            toAminoMsg(message: _139.LockedDenomRequest): _139.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _139.LockedDenomRequestProtoMsg): _139.LockedDenomRequest;
            toProto(message: _139.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _139.LockedDenomRequest): _139.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _139.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LockedDenomResponse;
            fromPartial(object: Partial<_139.LockedDenomResponse>): _139.LockedDenomResponse;
            fromAmino(object: _139.LockedDenomResponseAmino): _139.LockedDenomResponse;
            toAmino(message: _139.LockedDenomResponse): _139.LockedDenomResponseAmino;
            fromAminoMsg(object: _139.LockedDenomResponseAminoMsg): _139.LockedDenomResponse;
            toAminoMsg(message: _139.LockedDenomResponse): _139.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _139.LockedDenomResponseProtoMsg): _139.LockedDenomResponse;
            toProto(message: _139.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _139.LockedDenomResponse): _139.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _139.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LockedRequest;
            fromPartial(object: Partial<_139.LockedRequest>): _139.LockedRequest;
            fromAmino(object: _139.LockedRequestAmino): _139.LockedRequest;
            toAmino(message: _139.LockedRequest): _139.LockedRequestAmino;
            fromAminoMsg(object: _139.LockedRequestAminoMsg): _139.LockedRequest;
            toAminoMsg(message: _139.LockedRequest): _139.LockedRequestAminoMsg;
            fromProtoMsg(message: _139.LockedRequestProtoMsg): _139.LockedRequest;
            toProto(message: _139.LockedRequest): Uint8Array;
            toProtoMsg(message: _139.LockedRequest): _139.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _139.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LockedResponse;
            fromPartial(object: Partial<_139.LockedResponse>): _139.LockedResponse;
            fromAmino(object: _139.LockedResponseAmino): _139.LockedResponse;
            toAmino(message: _139.LockedResponse): _139.LockedResponseAmino;
            fromAminoMsg(object: _139.LockedResponseAminoMsg): _139.LockedResponse;
            toAminoMsg(message: _139.LockedResponse): _139.LockedResponseAminoMsg;
            fromProtoMsg(message: _139.LockedResponseProtoMsg): _139.LockedResponse;
            toProto(message: _139.LockedResponse): Uint8Array;
            toProtoMsg(message: _139.LockedResponse): _139.LockedResponseProtoMsg;
        };
        NextLockIDRequest: {
            typeUrl: string;
            encode(_: _139.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.NextLockIDRequest;
            fromPartial(_: Partial<_139.NextLockIDRequest>): _139.NextLockIDRequest;
            fromAmino(_: _139.NextLockIDRequestAmino): _139.NextLockIDRequest;
            toAmino(_: _139.NextLockIDRequest): _139.NextLockIDRequestAmino;
            fromAminoMsg(object: _139.NextLockIDRequestAminoMsg): _139.NextLockIDRequest;
            toAminoMsg(message: _139.NextLockIDRequest): _139.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _139.NextLockIDRequestProtoMsg): _139.NextLockIDRequest;
            toProto(message: _139.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _139.NextLockIDRequest): _139.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            typeUrl: string;
            encode(message: _139.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.NextLockIDResponse;
            fromPartial(object: Partial<_139.NextLockIDResponse>): _139.NextLockIDResponse;
            fromAmino(object: _139.NextLockIDResponseAmino): _139.NextLockIDResponse;
            toAmino(message: _139.NextLockIDResponse): _139.NextLockIDResponseAmino;
            fromAminoMsg(object: _139.NextLockIDResponseAminoMsg): _139.NextLockIDResponse;
            toAminoMsg(message: _139.NextLockIDResponse): _139.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _139.NextLockIDResponseProtoMsg): _139.NextLockIDResponse;
            toProto(message: _139.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _139.NextLockIDResponse): _139.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _139.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_139.SyntheticLockupsByLockupIDRequest>): _139.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _139.SyntheticLockupsByLockupIDRequestAmino): _139.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _139.SyntheticLockupsByLockupIDRequest): _139.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _139.SyntheticLockupsByLockupIDRequestAminoMsg): _139.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _139.SyntheticLockupsByLockupIDRequest): _139.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _139.SyntheticLockupsByLockupIDRequestProtoMsg): _139.SyntheticLockupsByLockupIDRequest;
            toProto(message: _139.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _139.SyntheticLockupsByLockupIDRequest): _139.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _139.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_139.SyntheticLockupsByLockupIDResponse>): _139.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _139.SyntheticLockupsByLockupIDResponseAmino): _139.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _139.SyntheticLockupsByLockupIDResponse): _139.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _139.SyntheticLockupsByLockupIDResponseAminoMsg): _139.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _139.SyntheticLockupsByLockupIDResponse): _139.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _139.SyntheticLockupsByLockupIDResponseProtoMsg): _139.SyntheticLockupsByLockupIDResponse;
            toProto(message: _139.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _139.SyntheticLockupsByLockupIDResponse): _139.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationRequest>): _139.AccountLockedLongerDurationRequest;
            fromAmino(object: _139.AccountLockedLongerDurationRequestAmino): _139.AccountLockedLongerDurationRequest;
            toAmino(message: _139.AccountLockedLongerDurationRequest): _139.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationRequestAminoMsg): _139.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _139.AccountLockedLongerDurationRequest): _139.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationRequestProtoMsg): _139.AccountLockedLongerDurationRequest;
            toProto(message: _139.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationRequest): _139.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationResponse>): _139.AccountLockedLongerDurationResponse;
            fromAmino(object: _139.AccountLockedLongerDurationResponseAmino): _139.AccountLockedLongerDurationResponse;
            toAmino(message: _139.AccountLockedLongerDurationResponse): _139.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationResponseAminoMsg): _139.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _139.AccountLockedLongerDurationResponse): _139.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationResponseProtoMsg): _139.AccountLockedLongerDurationResponse;
            toProto(message: _139.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationResponse): _139.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedDurationRequest;
            fromPartial(object: Partial<_139.AccountLockedDurationRequest>): _139.AccountLockedDurationRequest;
            fromAmino(object: _139.AccountLockedDurationRequestAmino): _139.AccountLockedDurationRequest;
            toAmino(message: _139.AccountLockedDurationRequest): _139.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _139.AccountLockedDurationRequestAminoMsg): _139.AccountLockedDurationRequest;
            toAminoMsg(message: _139.AccountLockedDurationRequest): _139.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedDurationRequestProtoMsg): _139.AccountLockedDurationRequest;
            toProto(message: _139.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedDurationRequest): _139.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedDurationResponse;
            fromPartial(object: Partial<_139.AccountLockedDurationResponse>): _139.AccountLockedDurationResponse;
            fromAmino(object: _139.AccountLockedDurationResponseAmino): _139.AccountLockedDurationResponse;
            toAmino(message: _139.AccountLockedDurationResponse): _139.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _139.AccountLockedDurationResponseAminoMsg): _139.AccountLockedDurationResponse;
            toAminoMsg(message: _139.AccountLockedDurationResponse): _139.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedDurationResponseProtoMsg): _139.AccountLockedDurationResponse;
            toProto(message: _139.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedDurationResponse): _139.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _139.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _139.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _139.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): _139.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _139.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): _139.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _139.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): _139.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _139.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _139.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _139.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponse): _139.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _139.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponse): _139.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _139.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationNotUnlockingOnlyResponse): _139.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationDenomRequest>): _139.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _139.AccountLockedLongerDurationDenomRequestAmino): _139.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _139.AccountLockedLongerDurationDenomRequest): _139.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationDenomRequestAminoMsg): _139.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _139.AccountLockedLongerDurationDenomRequest): _139.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationDenomRequestProtoMsg): _139.AccountLockedLongerDurationDenomRequest;
            toProto(message: _139.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationDenomRequest): _139.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _139.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_139.AccountLockedLongerDurationDenomResponse>): _139.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _139.AccountLockedLongerDurationDenomResponseAmino): _139.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _139.AccountLockedLongerDurationDenomResponse): _139.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _139.AccountLockedLongerDurationDenomResponseAminoMsg): _139.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _139.AccountLockedLongerDurationDenomResponse): _139.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _139.AccountLockedLongerDurationDenomResponseProtoMsg): _139.AccountLockedLongerDurationDenomResponse;
            toProto(message: _139.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _139.AccountLockedLongerDurationDenomResponse): _139.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _139.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsRequest;
            fromPartial(_: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
            fromAmino(_: _139.QueryParamsRequestAmino): _139.QueryParamsRequest;
            toAmino(_: _139.QueryParamsRequest): _139.QueryParamsRequestAmino;
            fromAminoMsg(object: _139.QueryParamsRequestAminoMsg): _139.QueryParamsRequest;
            toAminoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _139.QueryParamsRequestProtoMsg): _139.QueryParamsRequest;
            toProto(message: _139.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _139.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsResponse;
            fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
            fromAmino(object: _139.QueryParamsResponseAmino): _139.QueryParamsResponse;
            toAmino(message: _139.QueryParamsResponse): _139.QueryParamsResponseAmino;
            fromAminoMsg(object: _139.QueryParamsResponseAminoMsg): _139.QueryParamsResponse;
            toAminoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _139.QueryParamsResponseProtoMsg): _139.QueryParamsResponse;
            toProto(message: _139.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _138.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Params;
            fromPartial(object: Partial<_138.Params>): _138.Params;
            fromAmino(object: _138.ParamsAmino): _138.Params;
            toAmino(message: _138.Params): _138.ParamsAmino;
            fromAminoMsg(object: _138.ParamsAminoMsg): _138.Params;
            toAminoMsg(message: _138.Params): _138.ParamsAminoMsg;
            fromProtoMsg(message: _138.ParamsProtoMsg): _138.Params;
            toProto(message: _138.Params): Uint8Array;
            toProtoMsg(message: _138.Params): _138.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _137.LockQueryType;
        lockQueryTypeToJSON(object: _137.LockQueryType): string;
        LockQueryType: typeof _137.LockQueryType;
        LockQueryTypeSDKType: typeof _137.LockQueryType;
        LockQueryTypeAmino: typeof _137.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _137.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PeriodLock;
            fromPartial(object: Partial<_137.PeriodLock>): _137.PeriodLock;
            fromAmino(object: _137.PeriodLockAmino): _137.PeriodLock;
            toAmino(message: _137.PeriodLock): _137.PeriodLockAmino;
            fromAminoMsg(object: _137.PeriodLockAminoMsg): _137.PeriodLock;
            toAminoMsg(message: _137.PeriodLock): _137.PeriodLockAminoMsg;
            fromProtoMsg(message: _137.PeriodLockProtoMsg): _137.PeriodLock;
            toProto(message: _137.PeriodLock): Uint8Array;
            toProtoMsg(message: _137.PeriodLock): _137.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _137.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCondition;
            fromPartial(object: Partial<_137.QueryCondition>): _137.QueryCondition;
            fromAmino(object: _137.QueryConditionAmino): _137.QueryCondition;
            toAmino(message: _137.QueryCondition): _137.QueryConditionAmino;
            fromAminoMsg(object: _137.QueryConditionAminoMsg): _137.QueryCondition;
            toAminoMsg(message: _137.QueryCondition): _137.QueryConditionAminoMsg;
            fromProtoMsg(message: _137.QueryConditionProtoMsg): _137.QueryCondition;
            toProto(message: _137.QueryCondition): Uint8Array;
            toProtoMsg(message: _137.QueryCondition): _137.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _137.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SyntheticLock;
            fromPartial(object: Partial<_137.SyntheticLock>): _137.SyntheticLock;
            fromAmino(object: _137.SyntheticLockAmino): _137.SyntheticLock;
            toAmino(message: _137.SyntheticLock): _137.SyntheticLockAmino;
            fromAminoMsg(object: _137.SyntheticLockAminoMsg): _137.SyntheticLock;
            toAminoMsg(message: _137.SyntheticLock): _137.SyntheticLockAminoMsg;
            fromProtoMsg(message: _137.SyntheticLockProtoMsg): _137.SyntheticLock;
            toProto(message: _137.SyntheticLock): Uint8Array;
            toProtoMsg(message: _137.SyntheticLock): _137.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
            fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
            fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
            toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
            fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
            toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
            fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
            toProto(message: _136.GenesisState): Uint8Array;
            toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                epochProvisions(request?: _143.QueryEpochProvisionsRequest): Promise<_143.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
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
                typeUrl: string;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _143.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_143.QueryEpochProvisionsRequest>): _143.QueryEpochProvisionsRequest;
                fromAmino(_: _143.QueryEpochProvisionsRequestAmino): _143.QueryEpochProvisionsRequest;
                toAmino(_: _143.QueryEpochProvisionsRequest): _143.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _143.QueryEpochProvisionsRequestAminoMsg): _143.QueryEpochProvisionsRequest;
                toAminoMsg(message: _143.QueryEpochProvisionsRequest): _143.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryEpochProvisionsRequestProtoMsg): _143.QueryEpochProvisionsRequest;
                toProto(message: _143.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryEpochProvisionsRequest): _143.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _143.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_143.QueryEpochProvisionsResponse>): _143.QueryEpochProvisionsResponse;
                fromAmino(object: _143.QueryEpochProvisionsResponseAmino): _143.QueryEpochProvisionsResponse;
                toAmino(message: _143.QueryEpochProvisionsResponse): _143.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _143.QueryEpochProvisionsResponseAminoMsg): _143.QueryEpochProvisionsResponse;
                toAminoMsg(message: _143.QueryEpochProvisionsResponse): _143.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryEpochProvisionsResponseProtoMsg): _143.QueryEpochProvisionsResponse;
                toProto(message: _143.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryEpochProvisionsResponse): _143.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _142.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Minter;
                fromPartial(object: Partial<_142.Minter>): _142.Minter;
                fromAmino(object: _142.MinterAmino): _142.Minter;
                toAmino(message: _142.Minter): _142.MinterAmino;
                fromAminoMsg(object: _142.MinterAminoMsg): _142.Minter;
                toAminoMsg(message: _142.Minter): _142.MinterAminoMsg;
                fromProtoMsg(message: _142.MinterProtoMsg): _142.Minter;
                toProto(message: _142.Minter): Uint8Array;
                toProtoMsg(message: _142.Minter): _142.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _142.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.WeightedAddress;
                fromPartial(object: Partial<_142.WeightedAddress>): _142.WeightedAddress;
                fromAmino(object: _142.WeightedAddressAmino): _142.WeightedAddress;
                toAmino(message: _142.WeightedAddress): _142.WeightedAddressAmino;
                fromAminoMsg(object: _142.WeightedAddressAminoMsg): _142.WeightedAddress;
                toAminoMsg(message: _142.WeightedAddress): _142.WeightedAddressAminoMsg;
                fromProtoMsg(message: _142.WeightedAddressProtoMsg): _142.WeightedAddress;
                toProto(message: _142.WeightedAddress): Uint8Array;
                toProtoMsg(message: _142.WeightedAddress): _142.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _142.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DistributionProportions;
                fromPartial(object: Partial<_142.DistributionProportions>): _142.DistributionProportions;
                fromAmino(object: _142.DistributionProportionsAmino): _142.DistributionProportions;
                toAmino(message: _142.DistributionProportions): _142.DistributionProportionsAmino;
                fromAminoMsg(object: _142.DistributionProportionsAminoMsg): _142.DistributionProportions;
                toAminoMsg(message: _142.DistributionProportions): _142.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _142.DistributionProportionsProtoMsg): _142.DistributionProportions;
                toProto(message: _142.DistributionProportions): Uint8Array;
                toProtoMsg(message: _142.DistributionProportions): _142.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _142.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Params;
                fromPartial(object: Partial<_142.Params>): _142.Params;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
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
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _147.QueryGaugeIdsRequest): Promise<_147.QueryGaugeIdsResponse>;
                distrInfo(request?: _147.QueryDistrInfoRequest): Promise<_147.QueryDistrInfoResponse>;
                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                lockableDurations(request?: _147.QueryLockableDurationsRequest): Promise<_147.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _147.QueryIncentivizedPoolsRequest): Promise<_147.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _147.QueryExternalIncentiveGaugesRequest): Promise<_147.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _147.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_147.QueryGaugeIdsRequest>): _147.QueryGaugeIdsRequest;
                fromAmino(object: _147.QueryGaugeIdsRequestAmino): _147.QueryGaugeIdsRequest;
                toAmino(message: _147.QueryGaugeIdsRequest): _147.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _147.QueryGaugeIdsRequestAminoMsg): _147.QueryGaugeIdsRequest;
                toAminoMsg(message: _147.QueryGaugeIdsRequest): _147.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryGaugeIdsRequestProtoMsg): _147.QueryGaugeIdsRequest;
                toProto(message: _147.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryGaugeIdsRequest): _147.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _147.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_147.QueryGaugeIdsResponse>): _147.QueryGaugeIdsResponse;
                fromAmino(object: _147.QueryGaugeIdsResponseAmino): _147.QueryGaugeIdsResponse;
                toAmino(message: _147.QueryGaugeIdsResponse): _147.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _147.QueryGaugeIdsResponseAminoMsg): _147.QueryGaugeIdsResponse;
                toAminoMsg(message: _147.QueryGaugeIdsResponse): _147.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryGaugeIdsResponseProtoMsg): _147.QueryGaugeIdsResponse;
                toProto(message: _147.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryGaugeIdsResponse): _147.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _147.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_147.QueryGaugeIdsResponse_GaugeIdWithDuration>): _147.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _147.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _147.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _147.QueryGaugeIdsResponse_GaugeIdWithDuration): _147.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _147.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _147.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _147.QueryGaugeIdsResponse_GaugeIdWithDuration): _147.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _147.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _147.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _147.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _147.QueryGaugeIdsResponse_GaugeIdWithDuration): _147.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _147.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryDistrInfoRequest;
                fromPartial(_: Partial<_147.QueryDistrInfoRequest>): _147.QueryDistrInfoRequest;
                fromAmino(_: _147.QueryDistrInfoRequestAmino): _147.QueryDistrInfoRequest;
                toAmino(_: _147.QueryDistrInfoRequest): _147.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _147.QueryDistrInfoRequestAminoMsg): _147.QueryDistrInfoRequest;
                toAminoMsg(message: _147.QueryDistrInfoRequest): _147.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _147.QueryDistrInfoRequestProtoMsg): _147.QueryDistrInfoRequest;
                toProto(message: _147.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _147.QueryDistrInfoRequest): _147.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _147.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryDistrInfoResponse;
                fromPartial(object: Partial<_147.QueryDistrInfoResponse>): _147.QueryDistrInfoResponse;
                fromAmino(object: _147.QueryDistrInfoResponseAmino): _147.QueryDistrInfoResponse;
                toAmino(message: _147.QueryDistrInfoResponse): _147.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _147.QueryDistrInfoResponseAminoMsg): _147.QueryDistrInfoResponse;
                toAminoMsg(message: _147.QueryDistrInfoResponse): _147.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _147.QueryDistrInfoResponseProtoMsg): _147.QueryDistrInfoResponse;
                toProto(message: _147.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _147.QueryDistrInfoResponse): _147.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _147.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsRequest;
                fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                toProto(message: _147.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _147.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsResponse;
                fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                toProto(message: _147.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _147.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_147.QueryLockableDurationsRequest>): _147.QueryLockableDurationsRequest;
                fromAmino(_: _147.QueryLockableDurationsRequestAmino): _147.QueryLockableDurationsRequest;
                toAmino(_: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _147.QueryLockableDurationsRequestAminoMsg): _147.QueryLockableDurationsRequest;
                toAminoMsg(message: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryLockableDurationsRequestProtoMsg): _147.QueryLockableDurationsRequest;
                toProto(message: _147.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _147.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_147.QueryLockableDurationsResponse>): _147.QueryLockableDurationsResponse;
                fromAmino(object: _147.QueryLockableDurationsResponseAmino): _147.QueryLockableDurationsResponse;
                toAmino(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _147.QueryLockableDurationsResponseAminoMsg): _147.QueryLockableDurationsResponse;
                toAminoMsg(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryLockableDurationsResponseProtoMsg): _147.QueryLockableDurationsResponse;
                toProto(message: _147.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _147.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_147.QueryIncentivizedPoolsRequest>): _147.QueryIncentivizedPoolsRequest;
                fromAmino(_: _147.QueryIncentivizedPoolsRequestAmino): _147.QueryIncentivizedPoolsRequest;
                toAmino(_: _147.QueryIncentivizedPoolsRequest): _147.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _147.QueryIncentivizedPoolsRequestAminoMsg): _147.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _147.QueryIncentivizedPoolsRequest): _147.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryIncentivizedPoolsRequestProtoMsg): _147.QueryIncentivizedPoolsRequest;
                toProto(message: _147.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryIncentivizedPoolsRequest): _147.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _147.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.IncentivizedPool;
                fromPartial(object: Partial<_147.IncentivizedPool>): _147.IncentivizedPool;
                fromAmino(object: _147.IncentivizedPoolAmino): _147.IncentivizedPool;
                toAmino(message: _147.IncentivizedPool): _147.IncentivizedPoolAmino;
                fromAminoMsg(object: _147.IncentivizedPoolAminoMsg): _147.IncentivizedPool;
                toAminoMsg(message: _147.IncentivizedPool): _147.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _147.IncentivizedPoolProtoMsg): _147.IncentivizedPool;
                toProto(message: _147.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _147.IncentivizedPool): _147.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _147.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_147.QueryIncentivizedPoolsResponse>): _147.QueryIncentivizedPoolsResponse;
                fromAmino(object: _147.QueryIncentivizedPoolsResponseAmino): _147.QueryIncentivizedPoolsResponse;
                toAmino(message: _147.QueryIncentivizedPoolsResponse): _147.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _147.QueryIncentivizedPoolsResponseAminoMsg): _147.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _147.QueryIncentivizedPoolsResponse): _147.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryIncentivizedPoolsResponseProtoMsg): _147.QueryIncentivizedPoolsResponse;
                toProto(message: _147.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryIncentivizedPoolsResponse): _147.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _147.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_147.QueryExternalIncentiveGaugesRequest>): _147.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _147.QueryExternalIncentiveGaugesRequestAmino): _147.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _147.QueryExternalIncentiveGaugesRequest): _147.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _147.QueryExternalIncentiveGaugesRequestAminoMsg): _147.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _147.QueryExternalIncentiveGaugesRequest): _147.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _147.QueryExternalIncentiveGaugesRequestProtoMsg): _147.QueryExternalIncentiveGaugesRequest;
                toProto(message: _147.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _147.QueryExternalIncentiveGaugesRequest): _147.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _147.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_147.QueryExternalIncentiveGaugesResponse>): _147.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _147.QueryExternalIncentiveGaugesResponseAmino): _147.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _147.QueryExternalIncentiveGaugesResponse): _147.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _147.QueryExternalIncentiveGaugesResponseAminoMsg): _147.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _147.QueryExternalIncentiveGaugesResponse): _147.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _147.QueryExternalIncentiveGaugesResponseProtoMsg): _147.QueryExternalIncentiveGaugesResponse;
                toProto(message: _147.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _147.QueryExternalIncentiveGaugesResponse): _147.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _146.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Params;
                fromPartial(object: Partial<_146.Params>): _146.Params;
                fromAmino(object: _146.ParamsAmino): _146.Params;
                toAmino(message: _146.Params): _146.ParamsAmino;
                fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
                toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
                fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
                toProto(message: _146.Params): Uint8Array;
                toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _146.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockableDurationsInfo;
                fromPartial(object: Partial<_146.LockableDurationsInfo>): _146.LockableDurationsInfo;
                fromAmino(object: _146.LockableDurationsInfoAmino): _146.LockableDurationsInfo;
                toAmino(message: _146.LockableDurationsInfo): _146.LockableDurationsInfoAmino;
                fromAminoMsg(object: _146.LockableDurationsInfoAminoMsg): _146.LockableDurationsInfo;
                toAminoMsg(message: _146.LockableDurationsInfo): _146.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _146.LockableDurationsInfoProtoMsg): _146.LockableDurationsInfo;
                toProto(message: _146.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _146.LockableDurationsInfo): _146.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _146.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DistrInfo;
                fromPartial(object: Partial<_146.DistrInfo>): _146.DistrInfo;
                fromAmino(object: _146.DistrInfoAmino): _146.DistrInfo;
                toAmino(message: _146.DistrInfo): _146.DistrInfoAmino;
                fromAminoMsg(object: _146.DistrInfoAminoMsg): _146.DistrInfo;
                toAminoMsg(message: _146.DistrInfo): _146.DistrInfoAminoMsg;
                fromProtoMsg(message: _146.DistrInfoProtoMsg): _146.DistrInfo;
                toProto(message: _146.DistrInfo): Uint8Array;
                toProtoMsg(message: _146.DistrInfo): _146.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _146.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DistrRecord;
                fromPartial(object: Partial<_146.DistrRecord>): _146.DistrRecord;
                fromAmino(object: _146.DistrRecordAmino): _146.DistrRecord;
                toAmino(message: _146.DistrRecord): _146.DistrRecordAmino;
                fromAminoMsg(object: _146.DistrRecordAminoMsg): _146.DistrRecord;
                toAminoMsg(message: _146.DistrRecord): _146.DistrRecordAminoMsg;
                fromProtoMsg(message: _146.DistrRecordProtoMsg): _146.DistrRecord;
                toProto(message: _146.DistrRecord): Uint8Array;
                toProtoMsg(message: _146.DistrRecord): _146.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _146.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PoolToGauge;
                fromPartial(object: Partial<_146.PoolToGauge>): _146.PoolToGauge;
                fromAmino(object: _146.PoolToGaugeAmino): _146.PoolToGauge;
                toAmino(message: _146.PoolToGauge): _146.PoolToGaugeAmino;
                fromAminoMsg(object: _146.PoolToGaugeAminoMsg): _146.PoolToGauge;
                toAminoMsg(message: _146.PoolToGauge): _146.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _146.PoolToGaugeProtoMsg): _146.PoolToGauge;
                toProto(message: _146.PoolToGauge): Uint8Array;
                toProtoMsg(message: _146.PoolToGauge): _146.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _146.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PoolToGauges;
                fromPartial(object: Partial<_146.PoolToGauges>): _146.PoolToGauges;
                fromAmino(object: _146.PoolToGaugesAmino): _146.PoolToGauges;
                toAmino(message: _146.PoolToGauges): _146.PoolToGaugesAmino;
                fromAminoMsg(object: _146.PoolToGaugesAminoMsg): _146.PoolToGauges;
                toAminoMsg(message: _146.PoolToGauges): _146.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _146.PoolToGaugesProtoMsg): _146.PoolToGauges;
                toProto(message: _146.PoolToGauges): Uint8Array;
                toProtoMsg(message: _146.PoolToGauges): _146.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _145.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_145.ReplacePoolIncentivesProposal>): _145.ReplacePoolIncentivesProposal;
                fromAmino(object: _145.ReplacePoolIncentivesProposalAmino): _145.ReplacePoolIncentivesProposal;
                toAmino(message: _145.ReplacePoolIncentivesProposal): _145.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _145.ReplacePoolIncentivesProposalAminoMsg): _145.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _145.ReplacePoolIncentivesProposal): _145.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _145.ReplacePoolIncentivesProposalProtoMsg): _145.ReplacePoolIncentivesProposal;
                toProto(message: _145.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _145.ReplacePoolIncentivesProposal): _145.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _145.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_145.UpdatePoolIncentivesProposal>): _145.UpdatePoolIncentivesProposal;
                fromAmino(object: _145.UpdatePoolIncentivesProposalAmino): _145.UpdatePoolIncentivesProposal;
                toAmino(message: _145.UpdatePoolIncentivesProposal): _145.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _145.UpdatePoolIncentivesProposalAminoMsg): _145.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _145.UpdatePoolIncentivesProposal): _145.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _145.UpdatePoolIncentivesProposalProtoMsg): _145.UpdatePoolIncentivesProposal;
                toProto(message: _145.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _145.UpdatePoolIncentivesProposal): _145.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                toAminoMsg(message: _144.GenesisState): _144.GenesisStateAminoMsg;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _150.ParamsRequest): Promise<_150.ParamsResponse>;
                estimateSwapExactAmountIn(request: _150.EstimateSwapExactAmountInRequest): Promise<_150.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _150.EstimateSinglePoolSwapExactAmountInRequest): Promise<_150.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _150.EstimateSwapExactAmountOutRequest): Promise<_150.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _150.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_150.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _150.NumPoolsRequest): Promise<_150.NumPoolsResponse>;
                pool(request: _150.PoolRequest): Promise<_150.PoolResponse>;
                allPools(request: _150.AllPoolsRequest): Promise<_150.AllPoolsResponse>;
                spotPrice(request: _150.SpotPriceRequest): Promise<_150.SpotPriceResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _152.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _152.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _152.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _152.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _152.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _152.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _152.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _152.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _152.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _152.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _152.MsgSwapExactAmountIn) => _152.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _152.MsgSwapExactAmountInAmino) => _152.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _152.MsgSwapExactAmountOut) => _152.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _152.MsgSwapExactAmountOutAmino) => _152.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _152.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_152.MsgSwapExactAmountIn>): _152.MsgSwapExactAmountIn;
                fromAmino(object: _152.MsgSwapExactAmountInAmino): _152.MsgSwapExactAmountIn;
                toAmino(message: _152.MsgSwapExactAmountIn): _152.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _152.MsgSwapExactAmountInAminoMsg): _152.MsgSwapExactAmountIn;
                toAminoMsg(message: _152.MsgSwapExactAmountIn): _152.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _152.MsgSwapExactAmountInProtoMsg): _152.MsgSwapExactAmountIn;
                toProto(message: _152.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _152.MsgSwapExactAmountIn): _152.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _152.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_152.MsgSwapExactAmountInResponse>): _152.MsgSwapExactAmountInResponse;
                fromAmino(object: _152.MsgSwapExactAmountInResponseAmino): _152.MsgSwapExactAmountInResponse;
                toAmino(message: _152.MsgSwapExactAmountInResponse): _152.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _152.MsgSwapExactAmountInResponseAminoMsg): _152.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _152.MsgSwapExactAmountInResponse): _152.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _152.MsgSwapExactAmountInResponseProtoMsg): _152.MsgSwapExactAmountInResponse;
                toProto(message: _152.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _152.MsgSwapExactAmountInResponse): _152.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _152.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_152.MsgSwapExactAmountOut>): _152.MsgSwapExactAmountOut;
                fromAmino(object: _152.MsgSwapExactAmountOutAmino): _152.MsgSwapExactAmountOut;
                toAmino(message: _152.MsgSwapExactAmountOut): _152.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _152.MsgSwapExactAmountOutAminoMsg): _152.MsgSwapExactAmountOut;
                toAminoMsg(message: _152.MsgSwapExactAmountOut): _152.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _152.MsgSwapExactAmountOutProtoMsg): _152.MsgSwapExactAmountOut;
                toProto(message: _152.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _152.MsgSwapExactAmountOut): _152.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _152.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_152.MsgSwapExactAmountOutResponse>): _152.MsgSwapExactAmountOutResponse;
                fromAmino(object: _152.MsgSwapExactAmountOutResponseAmino): _152.MsgSwapExactAmountOutResponse;
                toAmino(message: _152.MsgSwapExactAmountOutResponse): _152.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _152.MsgSwapExactAmountOutResponseAminoMsg): _152.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _152.MsgSwapExactAmountOutResponse): _152.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _152.MsgSwapExactAmountOutResponseProtoMsg): _152.MsgSwapExactAmountOutResponse;
                toProto(message: _152.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _152.MsgSwapExactAmountOutResponse): _152.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _151.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SwapAmountInRoute;
                fromPartial(object: Partial<_151.SwapAmountInRoute>): _151.SwapAmountInRoute;
                fromAmino(object: _151.SwapAmountInRouteAmino): _151.SwapAmountInRoute;
                toAmino(message: _151.SwapAmountInRoute): _151.SwapAmountInRouteAmino;
                fromAminoMsg(object: _151.SwapAmountInRouteAminoMsg): _151.SwapAmountInRoute;
                toAminoMsg(message: _151.SwapAmountInRoute): _151.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _151.SwapAmountInRouteProtoMsg): _151.SwapAmountInRoute;
                toProto(message: _151.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _151.SwapAmountInRoute): _151.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _151.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SwapAmountOutRoute;
                fromPartial(object: Partial<_151.SwapAmountOutRoute>): _151.SwapAmountOutRoute;
                fromAmino(object: _151.SwapAmountOutRouteAmino): _151.SwapAmountOutRoute;
                toAmino(message: _151.SwapAmountOutRoute): _151.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _151.SwapAmountOutRouteAminoMsg): _151.SwapAmountOutRoute;
                toAminoMsg(message: _151.SwapAmountOutRoute): _151.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _151.SwapAmountOutRouteProtoMsg): _151.SwapAmountOutRoute;
                toProto(message: _151.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _151.SwapAmountOutRoute): _151.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _150.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ParamsRequest;
                fromPartial(_: Partial<_150.ParamsRequest>): _150.ParamsRequest;
                fromAmino(_: _150.ParamsRequestAmino): _150.ParamsRequest;
                toAmino(_: _150.ParamsRequest): _150.ParamsRequestAmino;
                fromAminoMsg(object: _150.ParamsRequestAminoMsg): _150.ParamsRequest;
                toAminoMsg(message: _150.ParamsRequest): _150.ParamsRequestAminoMsg;
                fromProtoMsg(message: _150.ParamsRequestProtoMsg): _150.ParamsRequest;
                toProto(message: _150.ParamsRequest): Uint8Array;
                toProtoMsg(message: _150.ParamsRequest): _150.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _150.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ParamsResponse;
                fromPartial(object: Partial<_150.ParamsResponse>): _150.ParamsResponse;
                fromAmino(object: _150.ParamsResponseAmino): _150.ParamsResponse;
                toAmino(message: _150.ParamsResponse): _150.ParamsResponseAmino;
                fromAminoMsg(object: _150.ParamsResponseAminoMsg): _150.ParamsResponse;
                toAminoMsg(message: _150.ParamsResponse): _150.ParamsResponseAminoMsg;
                fromProtoMsg(message: _150.ParamsResponseProtoMsg): _150.ParamsResponse;
                toProto(message: _150.ParamsResponse): Uint8Array;
                toProtoMsg(message: _150.ParamsResponse): _150.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _150.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_150.EstimateSwapExactAmountInRequest>): _150.EstimateSwapExactAmountInRequest;
                fromAmino(object: _150.EstimateSwapExactAmountInRequestAmino): _150.EstimateSwapExactAmountInRequest;
                toAmino(message: _150.EstimateSwapExactAmountInRequest): _150.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _150.EstimateSwapExactAmountInRequestAminoMsg): _150.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _150.EstimateSwapExactAmountInRequest): _150.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _150.EstimateSwapExactAmountInRequestProtoMsg): _150.EstimateSwapExactAmountInRequest;
                toProto(message: _150.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _150.EstimateSwapExactAmountInRequest): _150.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _150.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_150.EstimateSinglePoolSwapExactAmountInRequest>): _150.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _150.EstimateSinglePoolSwapExactAmountInRequestAmino): _150.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _150.EstimateSinglePoolSwapExactAmountInRequest): _150.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _150.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _150.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _150.EstimateSinglePoolSwapExactAmountInRequest): _150.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _150.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _150.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _150.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _150.EstimateSinglePoolSwapExactAmountInRequest): _150.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _150.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_150.EstimateSwapExactAmountInResponse>): _150.EstimateSwapExactAmountInResponse;
                fromAmino(object: _150.EstimateSwapExactAmountInResponseAmino): _150.EstimateSwapExactAmountInResponse;
                toAmino(message: _150.EstimateSwapExactAmountInResponse): _150.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _150.EstimateSwapExactAmountInResponseAminoMsg): _150.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _150.EstimateSwapExactAmountInResponse): _150.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _150.EstimateSwapExactAmountInResponseProtoMsg): _150.EstimateSwapExactAmountInResponse;
                toProto(message: _150.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _150.EstimateSwapExactAmountInResponse): _150.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _150.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_150.EstimateSwapExactAmountOutRequest>): _150.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _150.EstimateSwapExactAmountOutRequestAmino): _150.EstimateSwapExactAmountOutRequest;
                toAmino(message: _150.EstimateSwapExactAmountOutRequest): _150.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _150.EstimateSwapExactAmountOutRequestAminoMsg): _150.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _150.EstimateSwapExactAmountOutRequest): _150.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _150.EstimateSwapExactAmountOutRequestProtoMsg): _150.EstimateSwapExactAmountOutRequest;
                toProto(message: _150.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _150.EstimateSwapExactAmountOutRequest): _150.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _150.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_150.EstimateSinglePoolSwapExactAmountOutRequest>): _150.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _150.EstimateSinglePoolSwapExactAmountOutRequestAmino): _150.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _150.EstimateSinglePoolSwapExactAmountOutRequest): _150.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _150.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _150.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _150.EstimateSinglePoolSwapExactAmountOutRequest): _150.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _150.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _150.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _150.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _150.EstimateSinglePoolSwapExactAmountOutRequest): _150.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _150.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_150.EstimateSwapExactAmountOutResponse>): _150.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _150.EstimateSwapExactAmountOutResponseAmino): _150.EstimateSwapExactAmountOutResponse;
                toAmino(message: _150.EstimateSwapExactAmountOutResponse): _150.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _150.EstimateSwapExactAmountOutResponseAminoMsg): _150.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _150.EstimateSwapExactAmountOutResponse): _150.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _150.EstimateSwapExactAmountOutResponseProtoMsg): _150.EstimateSwapExactAmountOutResponse;
                toProto(message: _150.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _150.EstimateSwapExactAmountOutResponse): _150.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _150.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.NumPoolsRequest;
                fromPartial(_: Partial<_150.NumPoolsRequest>): _150.NumPoolsRequest;
                fromAmino(_: _150.NumPoolsRequestAmino): _150.NumPoolsRequest;
                toAmino(_: _150.NumPoolsRequest): _150.NumPoolsRequestAmino;
                fromAminoMsg(object: _150.NumPoolsRequestAminoMsg): _150.NumPoolsRequest;
                toAminoMsg(message: _150.NumPoolsRequest): _150.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _150.NumPoolsRequestProtoMsg): _150.NumPoolsRequest;
                toProto(message: _150.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _150.NumPoolsRequest): _150.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _150.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.NumPoolsResponse;
                fromPartial(object: Partial<_150.NumPoolsResponse>): _150.NumPoolsResponse;
                fromAmino(object: _150.NumPoolsResponseAmino): _150.NumPoolsResponse;
                toAmino(message: _150.NumPoolsResponse): _150.NumPoolsResponseAmino;
                fromAminoMsg(object: _150.NumPoolsResponseAminoMsg): _150.NumPoolsResponse;
                toAminoMsg(message: _150.NumPoolsResponse): _150.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _150.NumPoolsResponseProtoMsg): _150.NumPoolsResponse;
                toProto(message: _150.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _150.NumPoolsResponse): _150.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                typeUrl: string;
                encode(message: _150.PoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PoolRequest;
                fromPartial(object: Partial<_150.PoolRequest>): _150.PoolRequest;
                fromAmino(object: _150.PoolRequestAmino): _150.PoolRequest;
                toAmino(message: _150.PoolRequest): _150.PoolRequestAmino;
                fromAminoMsg(object: _150.PoolRequestAminoMsg): _150.PoolRequest;
                toAminoMsg(message: _150.PoolRequest): _150.PoolRequestAminoMsg;
                fromProtoMsg(message: _150.PoolRequestProtoMsg): _150.PoolRequest;
                toProto(message: _150.PoolRequest): Uint8Array;
                toProtoMsg(message: _150.PoolRequest): _150.PoolRequestProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _150.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PoolResponse;
                fromPartial(object: Partial<_150.PoolResponse>): _150.PoolResponse;
                fromAmino(object: _150.PoolResponseAmino): _150.PoolResponse;
                toAmino(message: _150.PoolResponse): _150.PoolResponseAmino;
                fromAminoMsg(object: _150.PoolResponseAminoMsg): _150.PoolResponse;
                toAminoMsg(message: _150.PoolResponse): _150.PoolResponseAminoMsg;
                fromProtoMsg(message: _150.PoolResponseProtoMsg): _150.PoolResponse;
                toProto(message: _150.PoolResponse): Uint8Array;
                toProtoMsg(message: _150.PoolResponse): _150.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                typeUrl: string;
                encode(message: _150.AllPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AllPoolsRequest;
                fromPartial(object: Partial<_150.AllPoolsRequest>): _150.AllPoolsRequest;
                fromAmino(object: _150.AllPoolsRequestAmino): _150.AllPoolsRequest;
                toAmino(message: _150.AllPoolsRequest): _150.AllPoolsRequestAmino;
                fromAminoMsg(object: _150.AllPoolsRequestAminoMsg): _150.AllPoolsRequest;
                toAminoMsg(message: _150.AllPoolsRequest): _150.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _150.AllPoolsRequestProtoMsg): _150.AllPoolsRequest;
                toProto(message: _150.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _150.AllPoolsRequest): _150.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                typeUrl: string;
                encode(message: _150.AllPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AllPoolsResponse;
                fromPartial(object: Partial<_150.AllPoolsResponse>): _150.AllPoolsResponse;
                fromAmino(object: _150.AllPoolsResponseAmino): _150.AllPoolsResponse;
                toAmino(message: _150.AllPoolsResponse): _150.AllPoolsResponseAmino;
                fromAminoMsg(object: _150.AllPoolsResponseAminoMsg): _150.AllPoolsResponse;
                toAminoMsg(message: _150.AllPoolsResponse): _150.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _150.AllPoolsResponseProtoMsg): _150.AllPoolsResponse;
                toProto(message: _150.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _150.AllPoolsResponse): _150.AllPoolsResponseProtoMsg;
            };
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _150.SpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SpotPriceRequest;
                fromPartial(object: Partial<_150.SpotPriceRequest>): _150.SpotPriceRequest;
                fromAmino(object: _150.SpotPriceRequestAmino): _150.SpotPriceRequest;
                toAmino(message: _150.SpotPriceRequest): _150.SpotPriceRequestAmino;
                fromAminoMsg(object: _150.SpotPriceRequestAminoMsg): _150.SpotPriceRequest;
                toAminoMsg(message: _150.SpotPriceRequest): _150.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _150.SpotPriceRequestProtoMsg): _150.SpotPriceRequest;
                toProto(message: _150.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _150.SpotPriceRequest): _150.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _150.SpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SpotPriceResponse;
                fromPartial(object: Partial<_150.SpotPriceResponse>): _150.SpotPriceResponse;
                fromAmino(object: _150.SpotPriceResponseAmino): _150.SpotPriceResponse;
                toAmino(message: _150.SpotPriceResponse): _150.SpotPriceResponseAmino;
                fromAminoMsg(object: _150.SpotPriceResponseAminoMsg): _150.SpotPriceResponse;
                toAminoMsg(message: _150.SpotPriceResponse): _150.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _150.SpotPriceResponseProtoMsg): _150.SpotPriceResponse;
                toProto(message: _150.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _150.SpotPriceResponse): _150.SpotPriceResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _110.CosmWasmPool | _119.Pool | import("./concentrated-liquidity/pool").Pool | _125.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _149.PoolType;
            poolTypeToJSON(object: _149.PoolType): string;
            PoolType: typeof _149.PoolType;
            PoolTypeSDKType: typeof _149.PoolType;
            PoolTypeAmino: typeof _149.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _149.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ModuleRoute;
                fromPartial(object: Partial<_149.ModuleRoute>): _149.ModuleRoute;
                fromAmino(object: _149.ModuleRouteAmino): _149.ModuleRoute;
                toAmino(message: _149.ModuleRoute): _149.ModuleRouteAmino;
                fromAminoMsg(object: _149.ModuleRouteAminoMsg): _149.ModuleRoute;
                toAminoMsg(message: _149.ModuleRoute): _149.ModuleRouteAminoMsg;
                fromProtoMsg(message: _149.ModuleRouteProtoMsg): _149.ModuleRoute;
                toProto(message: _149.ModuleRoute): Uint8Array;
                toProtoMsg(message: _149.ModuleRoute): _149.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _148.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Params;
                fromPartial(object: Partial<_148.Params>): _148.Params;
                fromAmino(object: _148.ParamsAmino): _148.Params;
                toAmino(message: _148.Params): _148.ParamsAmino;
                fromAminoMsg(object: _148.ParamsAminoMsg): _148.Params;
                toAminoMsg(message: _148.Params): _148.ParamsAminoMsg;
                fromProtoMsg(message: _148.ParamsProtoMsg): _148.Params;
                toProto(message: _148.Params): Uint8Array;
                toProtoMsg(message: _148.Params): _148.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GenesisState;
                fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
                fromAmino(object: _148.GenesisStateAmino): _148.GenesisState;
                toAmino(message: _148.GenesisState): _148.GenesisStateAmino;
                fromAminoMsg(object: _148.GenesisStateAminoMsg): _148.GenesisState;
                toAminoMsg(message: _148.GenesisState): _148.GenesisStateAminoMsg;
                fromProtoMsg(message: _148.GenesisStateProtoMsg): _148.GenesisState;
                toProto(message: _148.GenesisState): Uint8Array;
                toProtoMsg(message: _148.GenesisState): _148.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _157.QueryGetProtoRevNumberOfTradesRequest): Promise<_157.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _157.QueryGetProtoRevProfitsByDenomRequest): Promise<_157.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _157.QueryGetProtoRevAllProfitsRequest): Promise<_157.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _157.QueryGetProtoRevStatisticsByRouteRequest): Promise<_157.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _157.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_157.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _157.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_157.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _157.QueryGetProtoRevAdminAccountRequest): Promise<_157.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _157.QueryGetProtoRevDeveloperAccountRequest): Promise<_157.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _157.QueryGetProtoRevPoolWeightsRequest): Promise<_157.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_157.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_157.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _157.QueryGetProtoRevBaseDenomsRequest): Promise<_157.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _157.QueryGetProtoRevEnabledRequest): Promise<_157.QueryGetProtoRevEnabledResponse>;
            };
            LCDQueryClient: typeof _300.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _158.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _158.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _158.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _158.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _158.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _158.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _158.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _158.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _158.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _158.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _158.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _158.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _158.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _158.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _158.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _158.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _158.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _158.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _158.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _158.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _158.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _158.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _158.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _158.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _158.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _158.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _158.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _158.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _158.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _158.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetHotRoutes) => _158.MsgSetHotRoutesAmino;
                    fromAmino: (object: _158.MsgSetHotRoutesAmino) => _158.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetDeveloperAccount) => _158.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _158.MsgSetDeveloperAccountAmino) => _158.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetMaxPoolPointsPerTx) => _158.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _158.MsgSetMaxPoolPointsPerTxAmino) => _158.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetMaxPoolPointsPerBlock) => _158.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _158.MsgSetMaxPoolPointsPerBlockAmino) => _158.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetPoolWeights) => _158.MsgSetPoolWeightsAmino;
                    fromAmino: (object: _158.MsgSetPoolWeightsAmino) => _158.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSetBaseDenoms) => _158.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _158.MsgSetBaseDenomsAmino) => _158.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _158.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetHotRoutes;
                fromPartial(object: Partial<_158.MsgSetHotRoutes>): _158.MsgSetHotRoutes;
                fromAmino(object: _158.MsgSetHotRoutesAmino): _158.MsgSetHotRoutes;
                toAmino(message: _158.MsgSetHotRoutes): _158.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _158.MsgSetHotRoutesAminoMsg): _158.MsgSetHotRoutes;
                toAminoMsg(message: _158.MsgSetHotRoutes): _158.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _158.MsgSetHotRoutesProtoMsg): _158.MsgSetHotRoutes;
                toProto(message: _158.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _158.MsgSetHotRoutes): _158.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_158.MsgSetHotRoutesResponse>): _158.MsgSetHotRoutesResponse;
                fromAmino(_: _158.MsgSetHotRoutesResponseAmino): _158.MsgSetHotRoutesResponse;
                toAmino(_: _158.MsgSetHotRoutesResponse): _158.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _158.MsgSetHotRoutesResponseAminoMsg): _158.MsgSetHotRoutesResponse;
                toAminoMsg(message: _158.MsgSetHotRoutesResponse): _158.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetHotRoutesResponseProtoMsg): _158.MsgSetHotRoutesResponse;
                toProto(message: _158.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetHotRoutesResponse): _158.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _158.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_158.MsgSetDeveloperAccount>): _158.MsgSetDeveloperAccount;
                fromAmino(object: _158.MsgSetDeveloperAccountAmino): _158.MsgSetDeveloperAccount;
                toAmino(message: _158.MsgSetDeveloperAccount): _158.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _158.MsgSetDeveloperAccountAminoMsg): _158.MsgSetDeveloperAccount;
                toAminoMsg(message: _158.MsgSetDeveloperAccount): _158.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _158.MsgSetDeveloperAccountProtoMsg): _158.MsgSetDeveloperAccount;
                toProto(message: _158.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _158.MsgSetDeveloperAccount): _158.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_158.MsgSetDeveloperAccountResponse>): _158.MsgSetDeveloperAccountResponse;
                fromAmino(_: _158.MsgSetDeveloperAccountResponseAmino): _158.MsgSetDeveloperAccountResponse;
                toAmino(_: _158.MsgSetDeveloperAccountResponse): _158.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _158.MsgSetDeveloperAccountResponseAminoMsg): _158.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _158.MsgSetDeveloperAccountResponse): _158.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetDeveloperAccountResponseProtoMsg): _158.MsgSetDeveloperAccountResponse;
                toProto(message: _158.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetDeveloperAccountResponse): _158.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetPoolWeights: {
                typeUrl: string;
                encode(message: _158.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetPoolWeights;
                fromPartial(object: Partial<_158.MsgSetPoolWeights>): _158.MsgSetPoolWeights;
                fromAmino(object: _158.MsgSetPoolWeightsAmino): _158.MsgSetPoolWeights;
                toAmino(message: _158.MsgSetPoolWeights): _158.MsgSetPoolWeightsAmino;
                fromAminoMsg(object: _158.MsgSetPoolWeightsAminoMsg): _158.MsgSetPoolWeights;
                toAminoMsg(message: _158.MsgSetPoolWeights): _158.MsgSetPoolWeightsAminoMsg;
                fromProtoMsg(message: _158.MsgSetPoolWeightsProtoMsg): _158.MsgSetPoolWeights;
                toProto(message: _158.MsgSetPoolWeights): Uint8Array;
                toProtoMsg(message: _158.MsgSetPoolWeights): _158.MsgSetPoolWeightsProtoMsg;
            };
            MsgSetPoolWeightsResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_158.MsgSetPoolWeightsResponse>): _158.MsgSetPoolWeightsResponse;
                fromAmino(_: _158.MsgSetPoolWeightsResponseAmino): _158.MsgSetPoolWeightsResponse;
                toAmino(_: _158.MsgSetPoolWeightsResponse): _158.MsgSetPoolWeightsResponseAmino;
                fromAminoMsg(object: _158.MsgSetPoolWeightsResponseAminoMsg): _158.MsgSetPoolWeightsResponse;
                toAminoMsg(message: _158.MsgSetPoolWeightsResponse): _158.MsgSetPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetPoolWeightsResponseProtoMsg): _158.MsgSetPoolWeightsResponse;
                toProto(message: _158.MsgSetPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetPoolWeightsResponse): _158.MsgSetPoolWeightsResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                typeUrl: string;
                encode(message: _158.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_158.MsgSetMaxPoolPointsPerTx>): _158.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _158.MsgSetMaxPoolPointsPerTxAmino): _158.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _158.MsgSetMaxPoolPointsPerTx): _158.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _158.MsgSetMaxPoolPointsPerTxAminoMsg): _158.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _158.MsgSetMaxPoolPointsPerTx): _158.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _158.MsgSetMaxPoolPointsPerTxProtoMsg): _158.MsgSetMaxPoolPointsPerTx;
                toProto(message: _158.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _158.MsgSetMaxPoolPointsPerTx): _158.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_158.MsgSetMaxPoolPointsPerTxResponse>): _158.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _158.MsgSetMaxPoolPointsPerTxResponseAmino): _158.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _158.MsgSetMaxPoolPointsPerTxResponse): _158.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _158.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _158.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _158.MsgSetMaxPoolPointsPerTxResponse): _158.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _158.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _158.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetMaxPoolPointsPerTxResponse): _158.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                typeUrl: string;
                encode(message: _158.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_158.MsgSetMaxPoolPointsPerBlock>): _158.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _158.MsgSetMaxPoolPointsPerBlockAmino): _158.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _158.MsgSetMaxPoolPointsPerBlock): _158.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _158.MsgSetMaxPoolPointsPerBlockAminoMsg): _158.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _158.MsgSetMaxPoolPointsPerBlock): _158.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _158.MsgSetMaxPoolPointsPerBlockProtoMsg): _158.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _158.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _158.MsgSetMaxPoolPointsPerBlock): _158.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_158.MsgSetMaxPoolPointsPerBlockResponse>): _158.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _158.MsgSetMaxPoolPointsPerBlockResponseAmino): _158.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _158.MsgSetMaxPoolPointsPerBlockResponse): _158.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _158.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _158.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _158.MsgSetMaxPoolPointsPerBlockResponse): _158.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _158.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _158.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetMaxPoolPointsPerBlockResponse): _158.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                typeUrl: string;
                encode(message: _158.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetBaseDenoms;
                fromPartial(object: Partial<_158.MsgSetBaseDenoms>): _158.MsgSetBaseDenoms;
                fromAmino(object: _158.MsgSetBaseDenomsAmino): _158.MsgSetBaseDenoms;
                toAmino(message: _158.MsgSetBaseDenoms): _158.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _158.MsgSetBaseDenomsAminoMsg): _158.MsgSetBaseDenoms;
                toAminoMsg(message: _158.MsgSetBaseDenoms): _158.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _158.MsgSetBaseDenomsProtoMsg): _158.MsgSetBaseDenoms;
                toProto(message: _158.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _158.MsgSetBaseDenoms): _158.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                typeUrl: string;
                encode(_: _158.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_158.MsgSetBaseDenomsResponse>): _158.MsgSetBaseDenomsResponse;
                fromAmino(_: _158.MsgSetBaseDenomsResponseAmino): _158.MsgSetBaseDenomsResponse;
                toAmino(_: _158.MsgSetBaseDenomsResponse): _158.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _158.MsgSetBaseDenomsResponseAminoMsg): _158.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _158.MsgSetBaseDenomsResponse): _158.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _158.MsgSetBaseDenomsResponseProtoMsg): _158.MsgSetBaseDenomsResponse;
                toProto(message: _158.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSetBaseDenomsResponse): _158.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsRequest;
                fromPartial(_: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
                fromAmino(_: _157.QueryParamsRequestAmino): _157.QueryParamsRequest;
                toAmino(_: _157.QueryParamsRequest): _157.QueryParamsRequestAmino;
                fromAminoMsg(object: _157.QueryParamsRequestAminoMsg): _157.QueryParamsRequest;
                toAminoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryParamsRequestProtoMsg): _157.QueryParamsRequest;
                toProto(message: _157.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsResponse;
                fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
                fromAmino(object: _157.QueryParamsResponseAmino): _157.QueryParamsResponse;
                toAmino(message: _157.QueryParamsResponse): _157.QueryParamsResponseAmino;
                fromAminoMsg(object: _157.QueryParamsResponseAminoMsg): _157.QueryParamsResponse;
                toAminoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryParamsResponseProtoMsg): _157.QueryParamsResponse;
                toProto(message: _157.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevNumberOfTradesRequest>): _157.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _157.QueryGetProtoRevNumberOfTradesRequestAmino): _157.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _157.QueryGetProtoRevNumberOfTradesRequest): _157.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _157.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _157.QueryGetProtoRevNumberOfTradesRequest): _157.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _157.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _157.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevNumberOfTradesRequest): _157.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevNumberOfTradesResponse>): _157.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _157.QueryGetProtoRevNumberOfTradesResponseAmino): _157.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _157.QueryGetProtoRevNumberOfTradesResponse): _157.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _157.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _157.QueryGetProtoRevNumberOfTradesResponse): _157.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _157.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _157.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevNumberOfTradesResponse): _157.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_157.QueryGetProtoRevProfitsByDenomRequest>): _157.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _157.QueryGetProtoRevProfitsByDenomRequestAmino): _157.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _157.QueryGetProtoRevProfitsByDenomRequest): _157.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _157.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _157.QueryGetProtoRevProfitsByDenomRequest): _157.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _157.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _157.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevProfitsByDenomRequest): _157.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevProfitsByDenomResponse>): _157.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _157.QueryGetProtoRevProfitsByDenomResponseAmino): _157.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _157.QueryGetProtoRevProfitsByDenomResponse): _157.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _157.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _157.QueryGetProtoRevProfitsByDenomResponse): _157.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _157.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _157.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevProfitsByDenomResponse): _157.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevAllProfitsRequest>): _157.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _157.QueryGetProtoRevAllProfitsRequestAmino): _157.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _157.QueryGetProtoRevAllProfitsRequest): _157.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAllProfitsRequestAminoMsg): _157.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _157.QueryGetProtoRevAllProfitsRequest): _157.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAllProfitsRequestProtoMsg): _157.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _157.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAllProfitsRequest): _157.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevAllProfitsResponse>): _157.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _157.QueryGetProtoRevAllProfitsResponseAmino): _157.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _157.QueryGetProtoRevAllProfitsResponse): _157.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAllProfitsResponseAminoMsg): _157.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _157.QueryGetProtoRevAllProfitsResponse): _157.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAllProfitsResponseProtoMsg): _157.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _157.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAllProfitsResponse): _157.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_157.QueryGetProtoRevStatisticsByRouteRequest>): _157.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _157.QueryGetProtoRevStatisticsByRouteRequestAmino): _157.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _157.QueryGetProtoRevStatisticsByRouteRequest): _157.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _157.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _157.QueryGetProtoRevStatisticsByRouteRequest): _157.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _157.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _157.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevStatisticsByRouteRequest): _157.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevStatisticsByRouteResponse>): _157.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _157.QueryGetProtoRevStatisticsByRouteResponseAmino): _157.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _157.QueryGetProtoRevStatisticsByRouteResponse): _157.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _157.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _157.QueryGetProtoRevStatisticsByRouteResponse): _157.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _157.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _157.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevStatisticsByRouteResponse): _157.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevAllRouteStatisticsRequest>): _157.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _157.QueryGetProtoRevAllRouteStatisticsRequestAmino): _157.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _157.QueryGetProtoRevAllRouteStatisticsRequest): _157.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _157.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsRequest): _157.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _157.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _157.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsRequest): _157.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevAllRouteStatisticsResponse>): _157.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _157.QueryGetProtoRevAllRouteStatisticsResponseAmino): _157.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _157.QueryGetProtoRevAllRouteStatisticsResponse): _157.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _157.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsResponse): _157.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _157.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _157.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAllRouteStatisticsResponse): _157.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevTokenPairArbRoutesRequest>): _157.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _157.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _157.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _157.QueryGetProtoRevTokenPairArbRoutesRequest): _157.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _157.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesRequest): _157.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _157.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _157.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesRequest): _157.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevTokenPairArbRoutesResponse>): _157.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _157.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _157.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _157.QueryGetProtoRevTokenPairArbRoutesResponse): _157.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _157.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesResponse): _157.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _157.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _157.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevTokenPairArbRoutesResponse): _157.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevAdminAccountRequest>): _157.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _157.QueryGetProtoRevAdminAccountRequestAmino): _157.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _157.QueryGetProtoRevAdminAccountRequest): _157.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAdminAccountRequestAminoMsg): _157.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _157.QueryGetProtoRevAdminAccountRequest): _157.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAdminAccountRequestProtoMsg): _157.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _157.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAdminAccountRequest): _157.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevAdminAccountResponse>): _157.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _157.QueryGetProtoRevAdminAccountResponseAmino): _157.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _157.QueryGetProtoRevAdminAccountResponse): _157.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevAdminAccountResponseAminoMsg): _157.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _157.QueryGetProtoRevAdminAccountResponse): _157.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevAdminAccountResponseProtoMsg): _157.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _157.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevAdminAccountResponse): _157.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevDeveloperAccountRequest>): _157.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _157.QueryGetProtoRevDeveloperAccountRequestAmino): _157.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _157.QueryGetProtoRevDeveloperAccountRequest): _157.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _157.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _157.QueryGetProtoRevDeveloperAccountRequest): _157.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _157.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _157.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevDeveloperAccountRequest): _157.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevDeveloperAccountResponse>): _157.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _157.QueryGetProtoRevDeveloperAccountResponseAmino): _157.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _157.QueryGetProtoRevDeveloperAccountResponse): _157.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _157.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _157.QueryGetProtoRevDeveloperAccountResponse): _157.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _157.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _157.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevDeveloperAccountResponse): _157.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevPoolWeightsRequest>): _157.QueryGetProtoRevPoolWeightsRequest;
                fromAmino(_: _157.QueryGetProtoRevPoolWeightsRequestAmino): _157.QueryGetProtoRevPoolWeightsRequest;
                toAmino(_: _157.QueryGetProtoRevPoolWeightsRequest): _157.QueryGetProtoRevPoolWeightsRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevPoolWeightsRequestAminoMsg): _157.QueryGetProtoRevPoolWeightsRequest;
                toAminoMsg(message: _157.QueryGetProtoRevPoolWeightsRequest): _157.QueryGetProtoRevPoolWeightsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevPoolWeightsRequestProtoMsg): _157.QueryGetProtoRevPoolWeightsRequest;
                toProto(message: _157.QueryGetProtoRevPoolWeightsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevPoolWeightsRequest): _157.QueryGetProtoRevPoolWeightsRequestProtoMsg;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevPoolWeightsResponse>): _157.QueryGetProtoRevPoolWeightsResponse;
                fromAmino(object: _157.QueryGetProtoRevPoolWeightsResponseAmino): _157.QueryGetProtoRevPoolWeightsResponse;
                toAmino(message: _157.QueryGetProtoRevPoolWeightsResponse): _157.QueryGetProtoRevPoolWeightsResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevPoolWeightsResponseAminoMsg): _157.QueryGetProtoRevPoolWeightsResponse;
                toAminoMsg(message: _157.QueryGetProtoRevPoolWeightsResponse): _157.QueryGetProtoRevPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevPoolWeightsResponseProtoMsg): _157.QueryGetProtoRevPoolWeightsResponse;
                toProto(message: _157.QueryGetProtoRevPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevPoolWeightsResponse): _157.QueryGetProtoRevPoolWeightsResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _157.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _157.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _157.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _157.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _157.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): _157.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _157.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): _157.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _157.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): _157.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _157.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _157.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _157.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponse): _157.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _157.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponse): _157.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _157.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevMaxPoolPointsPerTxResponse): _157.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevBaseDenomsRequest>): _157.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _157.QueryGetProtoRevBaseDenomsRequestAmino): _157.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _157.QueryGetProtoRevBaseDenomsRequest): _157.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevBaseDenomsRequestAminoMsg): _157.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _157.QueryGetProtoRevBaseDenomsRequest): _157.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevBaseDenomsRequestProtoMsg): _157.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _157.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevBaseDenomsRequest): _157.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevBaseDenomsResponse>): _157.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _157.QueryGetProtoRevBaseDenomsResponseAmino): _157.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _157.QueryGetProtoRevBaseDenomsResponse): _157.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevBaseDenomsResponseAminoMsg): _157.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _157.QueryGetProtoRevBaseDenomsResponse): _157.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevBaseDenomsResponseProtoMsg): _157.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _157.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevBaseDenomsResponse): _157.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                typeUrl: string;
                encode(_: _157.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_157.QueryGetProtoRevEnabledRequest>): _157.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _157.QueryGetProtoRevEnabledRequestAmino): _157.QueryGetProtoRevEnabledRequest;
                toAmino(_: _157.QueryGetProtoRevEnabledRequest): _157.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevEnabledRequestAminoMsg): _157.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _157.QueryGetProtoRevEnabledRequest): _157.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevEnabledRequestProtoMsg): _157.QueryGetProtoRevEnabledRequest;
                toProto(message: _157.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevEnabledRequest): _157.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                typeUrl: string;
                encode(message: _157.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_157.QueryGetProtoRevEnabledResponse>): _157.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _157.QueryGetProtoRevEnabledResponseAmino): _157.QueryGetProtoRevEnabledResponse;
                toAmino(message: _157.QueryGetProtoRevEnabledResponse): _157.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _157.QueryGetProtoRevEnabledResponseAminoMsg): _157.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _157.QueryGetProtoRevEnabledResponse): _157.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _157.QueryGetProtoRevEnabledResponseProtoMsg): _157.QueryGetProtoRevEnabledResponse;
                toProto(message: _157.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetProtoRevEnabledResponse): _157.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _156.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TokenPairArbRoutes;
                fromPartial(object: Partial<_156.TokenPairArbRoutes>): _156.TokenPairArbRoutes;
                fromAmino(object: _156.TokenPairArbRoutesAmino): _156.TokenPairArbRoutes;
                toAmino(message: _156.TokenPairArbRoutes): _156.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _156.TokenPairArbRoutesAminoMsg): _156.TokenPairArbRoutes;
                toAminoMsg(message: _156.TokenPairArbRoutes): _156.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _156.TokenPairArbRoutesProtoMsg): _156.TokenPairArbRoutes;
                toProto(message: _156.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _156.TokenPairArbRoutes): _156.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _156.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Route;
                fromPartial(object: Partial<_156.Route>): _156.Route;
                fromAmino(object: _156.RouteAmino): _156.Route;
                toAmino(message: _156.Route): _156.RouteAmino;
                fromAminoMsg(object: _156.RouteAminoMsg): _156.Route;
                toAminoMsg(message: _156.Route): _156.RouteAminoMsg;
                fromProtoMsg(message: _156.RouteProtoMsg): _156.Route;
                toProto(message: _156.Route): Uint8Array;
                toProtoMsg(message: _156.Route): _156.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _156.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Trade;
                fromPartial(object: Partial<_156.Trade>): _156.Trade;
                fromAmino(object: _156.TradeAmino): _156.Trade;
                toAmino(message: _156.Trade): _156.TradeAmino;
                fromAminoMsg(object: _156.TradeAminoMsg): _156.Trade;
                toAminoMsg(message: _156.Trade): _156.TradeAminoMsg;
                fromProtoMsg(message: _156.TradeProtoMsg): _156.Trade;
                toProto(message: _156.Trade): Uint8Array;
                toProtoMsg(message: _156.Trade): _156.TradeProtoMsg;
            };
            RouteStatistics: {
                typeUrl: string;
                encode(message: _156.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RouteStatistics;
                fromPartial(object: Partial<_156.RouteStatistics>): _156.RouteStatistics;
                fromAmino(object: _156.RouteStatisticsAmino): _156.RouteStatistics;
                toAmino(message: _156.RouteStatistics): _156.RouteStatisticsAmino;
                fromAminoMsg(object: _156.RouteStatisticsAminoMsg): _156.RouteStatistics;
                toAminoMsg(message: _156.RouteStatistics): _156.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _156.RouteStatisticsProtoMsg): _156.RouteStatistics;
                toProto(message: _156.RouteStatistics): Uint8Array;
                toProtoMsg(message: _156.RouteStatistics): _156.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                typeUrl: string;
                encode(message: _156.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PoolWeights;
                fromPartial(object: Partial<_156.PoolWeights>): _156.PoolWeights;
                fromAmino(object: _156.PoolWeightsAmino): _156.PoolWeights;
                toAmino(message: _156.PoolWeights): _156.PoolWeightsAmino;
                fromAminoMsg(object: _156.PoolWeightsAminoMsg): _156.PoolWeights;
                toAminoMsg(message: _156.PoolWeights): _156.PoolWeightsAminoMsg;
                fromProtoMsg(message: _156.PoolWeightsProtoMsg): _156.PoolWeights;
                toProto(message: _156.PoolWeights): Uint8Array;
                toProtoMsg(message: _156.PoolWeights): _156.PoolWeightsProtoMsg;
            };
            BaseDenom: {
                typeUrl: string;
                encode(message: _156.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BaseDenom;
                fromPartial(object: Partial<_156.BaseDenom>): _156.BaseDenom;
                fromAmino(object: _156.BaseDenomAmino): _156.BaseDenom;
                toAmino(message: _156.BaseDenom): _156.BaseDenomAmino;
                fromAminoMsg(object: _156.BaseDenomAminoMsg): _156.BaseDenom;
                toAminoMsg(message: _156.BaseDenom): _156.BaseDenomAminoMsg;
                fromProtoMsg(message: _156.BaseDenomProtoMsg): _156.BaseDenom;
                toProto(message: _156.BaseDenom): Uint8Array;
                toProtoMsg(message: _156.BaseDenom): _156.BaseDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                fromPartial(object: Partial<_155.Params>): _155.Params;
                fromAmino(object: _155.ParamsAmino): _155.Params;
                toAmino(message: _155.Params): _155.ParamsAmino;
                fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                toProto(message: _155.Params): Uint8Array;
                toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _154.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_154.SetProtoRevEnabledProposal>): _154.SetProtoRevEnabledProposal;
                fromAmino(object: _154.SetProtoRevEnabledProposalAmino): _154.SetProtoRevEnabledProposal;
                toAmino(message: _154.SetProtoRevEnabledProposal): _154.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _154.SetProtoRevEnabledProposalAminoMsg): _154.SetProtoRevEnabledProposal;
                toAminoMsg(message: _154.SetProtoRevEnabledProposal): _154.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _154.SetProtoRevEnabledProposalProtoMsg): _154.SetProtoRevEnabledProposal;
                toProto(message: _154.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _154.SetProtoRevEnabledProposal): _154.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _154.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_154.SetProtoRevAdminAccountProposal>): _154.SetProtoRevAdminAccountProposal;
                fromAmino(object: _154.SetProtoRevAdminAccountProposalAmino): _154.SetProtoRevAdminAccountProposal;
                toAmino(message: _154.SetProtoRevAdminAccountProposal): _154.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _154.SetProtoRevAdminAccountProposalAminoMsg): _154.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _154.SetProtoRevAdminAccountProposal): _154.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _154.SetProtoRevAdminAccountProposalProtoMsg): _154.SetProtoRevAdminAccountProposal;
                toProto(message: _154.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _154.SetProtoRevAdminAccountProposal): _154.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
                fromAmino(object: _153.GenesisStateAmino): _153.GenesisState;
                toAmino(message: _153.GenesisState): _153.GenesisStateAmino;
                fromAminoMsg(object: _153.GenesisStateAminoMsg): _153.GenesisState;
                toAminoMsg(message: _153.GenesisState): _153.GenesisStateAminoMsg;
                fromProtoMsg(message: _153.GenesisStateProtoMsg): _153.GenesisState;
                toProto(message: _153.GenesisState): Uint8Array;
                toProtoMsg(message: _153.GenesisState): _153.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _159.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Node;
                fromPartial(object: Partial<_159.Node>): _159.Node;
                fromAmino(object: _159.NodeAmino): _159.Node;
                toAmino(message: _159.Node): _159.NodeAmino;
                fromAminoMsg(object: _159.NodeAminoMsg): _159.Node;
                toAminoMsg(message: _159.Node): _159.NodeAminoMsg;
                fromProtoMsg(message: _159.NodeProtoMsg): _159.Node;
                toProto(message: _159.Node): Uint8Array;
                toProtoMsg(message: _159.Node): _159.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _159.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Child;
                fromPartial(object: Partial<_159.Child>): _159.Child;
                fromAmino(object: _159.ChildAmino): _159.Child;
                toAmino(message: _159.Child): _159.ChildAmino;
                fromAminoMsg(object: _159.ChildAminoMsg): _159.Child;
                toAminoMsg(message: _159.Child): _159.ChildAminoMsg;
                fromProtoMsg(message: _159.ChildProtoMsg): _159.Child;
                toProto(message: _159.Child): Uint8Array;
                toProtoMsg(message: _159.Child): _159.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _159.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Leaf;
                fromPartial(object: Partial<_159.Leaf>): _159.Leaf;
                fromAmino(object: _159.LeafAmino): _159.Leaf;
                toAmino(message: _159.Leaf): _159.LeafAmino;
                fromAminoMsg(object: _159.LeafAminoMsg): _159.Leaf;
                toAminoMsg(message: _159.Leaf): _159.LeafAminoMsg;
                fromProtoMsg(message: _159.LeafProtoMsg): _159.Leaf;
                toProto(message: _159.Leaf): Uint8Array;
                toProtoMsg(message: _159.Leaf): _159.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _332.MsgClientImpl;
        QueryClientImpl: typeof _319.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
            assetType(request: _162.AssetTypeRequest): Promise<_162.AssetTypeResponse>;
            allAssets(request?: _162.AllAssetsRequest): Promise<_162.AllAssetsResponse>;
            assetMultiplier(request: _162.AssetMultiplierRequest): Promise<_162.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _162.AllIntermediaryAccountsRequest): Promise<_162.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _162.ConnectedIntermediaryAccountRequest): Promise<_162.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _162.QueryTotalDelegationByValidatorForDenomRequest): Promise<_162.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _162.TotalSuperfluidDelegationsRequest): Promise<_162.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _162.SuperfluidDelegationAmountRequest): Promise<_162.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _162.SuperfluidDelegationsByDelegatorRequest): Promise<_162.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _162.SuperfluidUndelegationsByDelegatorRequest): Promise<_162.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _162.SuperfluidDelegationsByValidatorDenomRequest): Promise<_162.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _162.QueryTotalDelegationByDelegatorRequest): Promise<_162.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _162.QueryUnpoolWhitelistRequest): Promise<_162.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _301.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _164.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _164.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _164.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _164.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _164.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _164.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _164.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _164.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _164.MsgSuperfluidDelegate) => _164.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _164.MsgSuperfluidDelegateAmino) => _164.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _164.MsgSuperfluidUndelegate) => _164.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _164.MsgSuperfluidUndelegateAmino) => _164.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _164.MsgSuperfluidUnbondLock) => _164.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _164.MsgSuperfluidUnbondLockAmino) => _164.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _164.MsgSuperfluidUndelegateAndUnbondLock) => _164.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _164.MsgSuperfluidUndelegateAndUnbondLockAmino) => _164.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _164.MsgLockAndSuperfluidDelegate) => _164.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _164.MsgLockAndSuperfluidDelegateAmino) => _164.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _164.MsgUnPoolWhitelistedPool) => _164.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _164.MsgUnPoolWhitelistedPoolAmino) => _164.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _164.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_164.MsgSuperfluidDelegate>): _164.MsgSuperfluidDelegate;
            fromAmino(object: _164.MsgSuperfluidDelegateAmino): _164.MsgSuperfluidDelegate;
            toAmino(message: _164.MsgSuperfluidDelegate): _164.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _164.MsgSuperfluidDelegateAminoMsg): _164.MsgSuperfluidDelegate;
            toAminoMsg(message: _164.MsgSuperfluidDelegate): _164.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidDelegateProtoMsg): _164.MsgSuperfluidDelegate;
            toProto(message: _164.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidDelegate): _164.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _164.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_164.MsgSuperfluidDelegateResponse>): _164.MsgSuperfluidDelegateResponse;
            fromAmino(_: _164.MsgSuperfluidDelegateResponseAmino): _164.MsgSuperfluidDelegateResponse;
            toAmino(_: _164.MsgSuperfluidDelegateResponse): _164.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _164.MsgSuperfluidDelegateResponseAminoMsg): _164.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _164.MsgSuperfluidDelegateResponse): _164.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidDelegateResponseProtoMsg): _164.MsgSuperfluidDelegateResponse;
            toProto(message: _164.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidDelegateResponse): _164.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _164.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_164.MsgSuperfluidUndelegate>): _164.MsgSuperfluidUndelegate;
            fromAmino(object: _164.MsgSuperfluidUndelegateAmino): _164.MsgSuperfluidUndelegate;
            toAmino(message: _164.MsgSuperfluidUndelegate): _164.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUndelegateAminoMsg): _164.MsgSuperfluidUndelegate;
            toAminoMsg(message: _164.MsgSuperfluidUndelegate): _164.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUndelegateProtoMsg): _164.MsgSuperfluidUndelegate;
            toProto(message: _164.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUndelegate): _164.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _164.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_164.MsgSuperfluidUndelegateResponse>): _164.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _164.MsgSuperfluidUndelegateResponseAmino): _164.MsgSuperfluidUndelegateResponse;
            toAmino(_: _164.MsgSuperfluidUndelegateResponse): _164.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUndelegateResponseAminoMsg): _164.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _164.MsgSuperfluidUndelegateResponse): _164.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUndelegateResponseProtoMsg): _164.MsgSuperfluidUndelegateResponse;
            toProto(message: _164.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUndelegateResponse): _164.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _164.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_164.MsgSuperfluidUnbondLock>): _164.MsgSuperfluidUnbondLock;
            fromAmino(object: _164.MsgSuperfluidUnbondLockAmino): _164.MsgSuperfluidUnbondLock;
            toAmino(message: _164.MsgSuperfluidUnbondLock): _164.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUnbondLockAminoMsg): _164.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _164.MsgSuperfluidUnbondLock): _164.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUnbondLockProtoMsg): _164.MsgSuperfluidUnbondLock;
            toProto(message: _164.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUnbondLock): _164.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _164.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_164.MsgSuperfluidUnbondLockResponse>): _164.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _164.MsgSuperfluidUnbondLockResponseAmino): _164.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _164.MsgSuperfluidUnbondLockResponse): _164.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUnbondLockResponseAminoMsg): _164.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _164.MsgSuperfluidUnbondLockResponse): _164.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUnbondLockResponseProtoMsg): _164.MsgSuperfluidUnbondLockResponse;
            toProto(message: _164.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUnbondLockResponse): _164.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            typeUrl: string;
            encode(message: _164.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_164.MsgSuperfluidUndelegateAndUnbondLock>): _164.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _164.MsgSuperfluidUndelegateAndUnbondLockAmino): _164.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _164.MsgSuperfluidUndelegateAndUnbondLock): _164.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _164.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLock): _164.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _164.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _164.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLock): _164.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            typeUrl: string;
            encode(_: _164.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(_: Partial<_164.MsgSuperfluidUndelegateAndUnbondLockResponse>): _164.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(_: _164.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _164.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(_: _164.MsgSuperfluidUndelegateAndUnbondLockResponse): _164.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _164.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _164.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLockResponse): _164.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _164.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _164.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _164.MsgSuperfluidUndelegateAndUnbondLockResponse): _164.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _164.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_164.MsgLockAndSuperfluidDelegate>): _164.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _164.MsgLockAndSuperfluidDelegateAmino): _164.MsgLockAndSuperfluidDelegate;
            toAmino(message: _164.MsgLockAndSuperfluidDelegate): _164.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _164.MsgLockAndSuperfluidDelegateAminoMsg): _164.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _164.MsgLockAndSuperfluidDelegate): _164.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _164.MsgLockAndSuperfluidDelegateProtoMsg): _164.MsgLockAndSuperfluidDelegate;
            toProto(message: _164.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _164.MsgLockAndSuperfluidDelegate): _164.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _164.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_164.MsgLockAndSuperfluidDelegateResponse>): _164.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _164.MsgLockAndSuperfluidDelegateResponseAmino): _164.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _164.MsgLockAndSuperfluidDelegateResponse): _164.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _164.MsgLockAndSuperfluidDelegateResponseAminoMsg): _164.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _164.MsgLockAndSuperfluidDelegateResponse): _164.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _164.MsgLockAndSuperfluidDelegateResponseProtoMsg): _164.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _164.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _164.MsgLockAndSuperfluidDelegateResponse): _164.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _164.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_164.MsgUnPoolWhitelistedPool>): _164.MsgUnPoolWhitelistedPool;
            fromAmino(object: _164.MsgUnPoolWhitelistedPoolAmino): _164.MsgUnPoolWhitelistedPool;
            toAmino(message: _164.MsgUnPoolWhitelistedPool): _164.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _164.MsgUnPoolWhitelistedPoolAminoMsg): _164.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _164.MsgUnPoolWhitelistedPool): _164.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _164.MsgUnPoolWhitelistedPoolProtoMsg): _164.MsgUnPoolWhitelistedPool;
            toProto(message: _164.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _164.MsgUnPoolWhitelistedPool): _164.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _164.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_164.MsgUnPoolWhitelistedPoolResponse>): _164.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _164.MsgUnPoolWhitelistedPoolResponseAmino): _164.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _164.MsgUnPoolWhitelistedPoolResponse): _164.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _164.MsgUnPoolWhitelistedPoolResponseAminoMsg): _164.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _164.MsgUnPoolWhitelistedPoolResponse): _164.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _164.MsgUnPoolWhitelistedPoolResponseProtoMsg): _164.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _164.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _164.MsgUnPoolWhitelistedPoolResponse): _164.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            typeUrl: string;
            encode(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            typeUrl: string;
            encode(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _164.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _163.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _163.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _163.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _163.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _163.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _163.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidAsset;
            fromPartial(object: Partial<_163.SuperfluidAsset>): _163.SuperfluidAsset;
            fromAmino(object: _163.SuperfluidAssetAmino): _163.SuperfluidAsset;
            toAmino(message: _163.SuperfluidAsset): _163.SuperfluidAssetAmino;
            fromAminoMsg(object: _163.SuperfluidAssetAminoMsg): _163.SuperfluidAsset;
            toAminoMsg(message: _163.SuperfluidAsset): _163.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _163.SuperfluidAssetProtoMsg): _163.SuperfluidAsset;
            toProto(message: _163.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _163.SuperfluidAsset): _163.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _163.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_163.SuperfluidIntermediaryAccount>): _163.SuperfluidIntermediaryAccount;
            fromAmino(object: _163.SuperfluidIntermediaryAccountAmino): _163.SuperfluidIntermediaryAccount;
            toAmino(message: _163.SuperfluidIntermediaryAccount): _163.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _163.SuperfluidIntermediaryAccountAminoMsg): _163.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _163.SuperfluidIntermediaryAccount): _163.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _163.SuperfluidIntermediaryAccountProtoMsg): _163.SuperfluidIntermediaryAccount;
            toProto(message: _163.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _163.SuperfluidIntermediaryAccount): _163.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _163.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_163.OsmoEquivalentMultiplierRecord>): _163.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _163.OsmoEquivalentMultiplierRecordAmino): _163.OsmoEquivalentMultiplierRecord;
            toAmino(message: _163.OsmoEquivalentMultiplierRecord): _163.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _163.OsmoEquivalentMultiplierRecordAminoMsg): _163.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _163.OsmoEquivalentMultiplierRecord): _163.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _163.OsmoEquivalentMultiplierRecordProtoMsg): _163.OsmoEquivalentMultiplierRecord;
            toProto(message: _163.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _163.OsmoEquivalentMultiplierRecord): _163.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _163.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_163.SuperfluidDelegationRecord>): _163.SuperfluidDelegationRecord;
            fromAmino(object: _163.SuperfluidDelegationRecordAmino): _163.SuperfluidDelegationRecord;
            toAmino(message: _163.SuperfluidDelegationRecord): _163.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _163.SuperfluidDelegationRecordAminoMsg): _163.SuperfluidDelegationRecord;
            toAminoMsg(message: _163.SuperfluidDelegationRecord): _163.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _163.SuperfluidDelegationRecordProtoMsg): _163.SuperfluidDelegationRecord;
            toProto(message: _163.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _163.SuperfluidDelegationRecord): _163.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _163.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_163.LockIdIntermediaryAccountConnection>): _163.LockIdIntermediaryAccountConnection;
            fromAmino(object: _163.LockIdIntermediaryAccountConnectionAmino): _163.LockIdIntermediaryAccountConnection;
            toAmino(message: _163.LockIdIntermediaryAccountConnection): _163.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _163.LockIdIntermediaryAccountConnectionAminoMsg): _163.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _163.LockIdIntermediaryAccountConnection): _163.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _163.LockIdIntermediaryAccountConnectionProtoMsg): _163.LockIdIntermediaryAccountConnection;
            toProto(message: _163.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _163.LockIdIntermediaryAccountConnection): _163.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _163.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_163.UnpoolWhitelistedPools>): _163.UnpoolWhitelistedPools;
            fromAmino(object: _163.UnpoolWhitelistedPoolsAmino): _163.UnpoolWhitelistedPools;
            toAmino(message: _163.UnpoolWhitelistedPools): _163.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _163.UnpoolWhitelistedPoolsAminoMsg): _163.UnpoolWhitelistedPools;
            toAminoMsg(message: _163.UnpoolWhitelistedPools): _163.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _163.UnpoolWhitelistedPoolsProtoMsg): _163.UnpoolWhitelistedPools;
            toProto(message: _163.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _163.UnpoolWhitelistedPools): _163.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
            fromPartial(_: Partial<_162.QueryParamsRequest>): _162.QueryParamsRequest;
            fromAmino(_: _162.QueryParamsRequestAmino): _162.QueryParamsRequest;
            toAmino(_: _162.QueryParamsRequest): _162.QueryParamsRequestAmino;
            fromAminoMsg(object: _162.QueryParamsRequestAminoMsg): _162.QueryParamsRequest;
            toAminoMsg(message: _162.QueryParamsRequest): _162.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _162.QueryParamsRequestProtoMsg): _162.QueryParamsRequest;
            toProto(message: _162.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _162.QueryParamsRequest): _162.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
            fromPartial(object: Partial<_162.QueryParamsResponse>): _162.QueryParamsResponse;
            fromAmino(object: _162.QueryParamsResponseAmino): _162.QueryParamsResponse;
            toAmino(message: _162.QueryParamsResponse): _162.QueryParamsResponseAmino;
            fromAminoMsg(object: _162.QueryParamsResponseAminoMsg): _162.QueryParamsResponse;
            toAminoMsg(message: _162.QueryParamsResponse): _162.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _162.QueryParamsResponseProtoMsg): _162.QueryParamsResponse;
            toProto(message: _162.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _162.QueryParamsResponse): _162.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _162.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetTypeRequest;
            fromPartial(object: Partial<_162.AssetTypeRequest>): _162.AssetTypeRequest;
            fromAmino(object: _162.AssetTypeRequestAmino): _162.AssetTypeRequest;
            toAmino(message: _162.AssetTypeRequest): _162.AssetTypeRequestAmino;
            fromAminoMsg(object: _162.AssetTypeRequestAminoMsg): _162.AssetTypeRequest;
            toAminoMsg(message: _162.AssetTypeRequest): _162.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _162.AssetTypeRequestProtoMsg): _162.AssetTypeRequest;
            toProto(message: _162.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _162.AssetTypeRequest): _162.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _162.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetTypeResponse;
            fromPartial(object: Partial<_162.AssetTypeResponse>): _162.AssetTypeResponse;
            fromAmino(object: _162.AssetTypeResponseAmino): _162.AssetTypeResponse;
            toAmino(message: _162.AssetTypeResponse): _162.AssetTypeResponseAmino;
            fromAminoMsg(object: _162.AssetTypeResponseAminoMsg): _162.AssetTypeResponse;
            toAminoMsg(message: _162.AssetTypeResponse): _162.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _162.AssetTypeResponseProtoMsg): _162.AssetTypeResponse;
            toProto(message: _162.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _162.AssetTypeResponse): _162.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _162.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllAssetsRequest;
            fromPartial(_: Partial<_162.AllAssetsRequest>): _162.AllAssetsRequest;
            fromAmino(_: _162.AllAssetsRequestAmino): _162.AllAssetsRequest;
            toAmino(_: _162.AllAssetsRequest): _162.AllAssetsRequestAmino;
            fromAminoMsg(object: _162.AllAssetsRequestAminoMsg): _162.AllAssetsRequest;
            toAminoMsg(message: _162.AllAssetsRequest): _162.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _162.AllAssetsRequestProtoMsg): _162.AllAssetsRequest;
            toProto(message: _162.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _162.AllAssetsRequest): _162.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _162.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllAssetsResponse;
            fromPartial(object: Partial<_162.AllAssetsResponse>): _162.AllAssetsResponse;
            fromAmino(object: _162.AllAssetsResponseAmino): _162.AllAssetsResponse;
            toAmino(message: _162.AllAssetsResponse): _162.AllAssetsResponseAmino;
            fromAminoMsg(object: _162.AllAssetsResponseAminoMsg): _162.AllAssetsResponse;
            toAminoMsg(message: _162.AllAssetsResponse): _162.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _162.AllAssetsResponseProtoMsg): _162.AllAssetsResponse;
            toProto(message: _162.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _162.AllAssetsResponse): _162.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _162.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetMultiplierRequest;
            fromPartial(object: Partial<_162.AssetMultiplierRequest>): _162.AssetMultiplierRequest;
            fromAmino(object: _162.AssetMultiplierRequestAmino): _162.AssetMultiplierRequest;
            toAmino(message: _162.AssetMultiplierRequest): _162.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _162.AssetMultiplierRequestAminoMsg): _162.AssetMultiplierRequest;
            toAminoMsg(message: _162.AssetMultiplierRequest): _162.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _162.AssetMultiplierRequestProtoMsg): _162.AssetMultiplierRequest;
            toProto(message: _162.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _162.AssetMultiplierRequest): _162.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _162.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetMultiplierResponse;
            fromPartial(object: Partial<_162.AssetMultiplierResponse>): _162.AssetMultiplierResponse;
            fromAmino(object: _162.AssetMultiplierResponseAmino): _162.AssetMultiplierResponse;
            toAmino(message: _162.AssetMultiplierResponse): _162.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _162.AssetMultiplierResponseAminoMsg): _162.AssetMultiplierResponse;
            toAminoMsg(message: _162.AssetMultiplierResponse): _162.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _162.AssetMultiplierResponseProtoMsg): _162.AssetMultiplierResponse;
            toProto(message: _162.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _162.AssetMultiplierResponse): _162.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _162.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_162.SuperfluidIntermediaryAccountInfo>): _162.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _162.SuperfluidIntermediaryAccountInfoAmino): _162.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _162.SuperfluidIntermediaryAccountInfo): _162.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _162.SuperfluidIntermediaryAccountInfoAminoMsg): _162.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _162.SuperfluidIntermediaryAccountInfo): _162.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _162.SuperfluidIntermediaryAccountInfoProtoMsg): _162.SuperfluidIntermediaryAccountInfo;
            toProto(message: _162.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _162.SuperfluidIntermediaryAccountInfo): _162.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _162.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_162.AllIntermediaryAccountsRequest>): _162.AllIntermediaryAccountsRequest;
            fromAmino(object: _162.AllIntermediaryAccountsRequestAmino): _162.AllIntermediaryAccountsRequest;
            toAmino(message: _162.AllIntermediaryAccountsRequest): _162.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _162.AllIntermediaryAccountsRequestAminoMsg): _162.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _162.AllIntermediaryAccountsRequest): _162.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _162.AllIntermediaryAccountsRequestProtoMsg): _162.AllIntermediaryAccountsRequest;
            toProto(message: _162.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _162.AllIntermediaryAccountsRequest): _162.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _162.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_162.AllIntermediaryAccountsResponse>): _162.AllIntermediaryAccountsResponse;
            fromAmino(object: _162.AllIntermediaryAccountsResponseAmino): _162.AllIntermediaryAccountsResponse;
            toAmino(message: _162.AllIntermediaryAccountsResponse): _162.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _162.AllIntermediaryAccountsResponseAminoMsg): _162.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _162.AllIntermediaryAccountsResponse): _162.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _162.AllIntermediaryAccountsResponseProtoMsg): _162.AllIntermediaryAccountsResponse;
            toProto(message: _162.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _162.AllIntermediaryAccountsResponse): _162.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _162.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_162.ConnectedIntermediaryAccountRequest>): _162.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _162.ConnectedIntermediaryAccountRequestAmino): _162.ConnectedIntermediaryAccountRequest;
            toAmino(message: _162.ConnectedIntermediaryAccountRequest): _162.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _162.ConnectedIntermediaryAccountRequestAminoMsg): _162.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _162.ConnectedIntermediaryAccountRequest): _162.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _162.ConnectedIntermediaryAccountRequestProtoMsg): _162.ConnectedIntermediaryAccountRequest;
            toProto(message: _162.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _162.ConnectedIntermediaryAccountRequest): _162.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _162.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_162.ConnectedIntermediaryAccountResponse>): _162.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _162.ConnectedIntermediaryAccountResponseAmino): _162.ConnectedIntermediaryAccountResponse;
            toAmino(message: _162.ConnectedIntermediaryAccountResponse): _162.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _162.ConnectedIntermediaryAccountResponseAminoMsg): _162.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _162.ConnectedIntermediaryAccountResponse): _162.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _162.ConnectedIntermediaryAccountResponseProtoMsg): _162.ConnectedIntermediaryAccountResponse;
            toProto(message: _162.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _162.ConnectedIntermediaryAccountResponse): _162.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _162.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_162.QueryTotalDelegationByValidatorForDenomRequest>): _162.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _162.QueryTotalDelegationByValidatorForDenomRequestAmino): _162.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _162.QueryTotalDelegationByValidatorForDenomRequest): _162.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _162.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _162.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _162.QueryTotalDelegationByValidatorForDenomRequest): _162.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _162.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _162.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _162.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _162.QueryTotalDelegationByValidatorForDenomRequest): _162.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _162.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_162.QueryTotalDelegationByValidatorForDenomResponse>): _162.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _162.QueryTotalDelegationByValidatorForDenomResponseAmino): _162.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _162.QueryTotalDelegationByValidatorForDenomResponse): _162.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _162.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _162.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _162.QueryTotalDelegationByValidatorForDenomResponse): _162.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _162.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _162.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _162.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _162.QueryTotalDelegationByValidatorForDenomResponse): _162.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _162.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Delegations;
            fromPartial(object: Partial<_162.Delegations>): _162.Delegations;
            fromAmino(object: _162.DelegationsAmino): _162.Delegations;
            toAmino(message: _162.Delegations): _162.DelegationsAmino;
            fromAminoMsg(object: _162.DelegationsAminoMsg): _162.Delegations;
            toAminoMsg(message: _162.Delegations): _162.DelegationsAminoMsg;
            fromProtoMsg(message: _162.DelegationsProtoMsg): _162.Delegations;
            toProto(message: _162.Delegations): Uint8Array;
            toProtoMsg(message: _162.Delegations): _162.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _162.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_162.TotalSuperfluidDelegationsRequest>): _162.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _162.TotalSuperfluidDelegationsRequestAmino): _162.TotalSuperfluidDelegationsRequest;
            toAmino(_: _162.TotalSuperfluidDelegationsRequest): _162.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _162.TotalSuperfluidDelegationsRequestAminoMsg): _162.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _162.TotalSuperfluidDelegationsRequest): _162.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _162.TotalSuperfluidDelegationsRequestProtoMsg): _162.TotalSuperfluidDelegationsRequest;
            toProto(message: _162.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _162.TotalSuperfluidDelegationsRequest): _162.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _162.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_162.TotalSuperfluidDelegationsResponse>): _162.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _162.TotalSuperfluidDelegationsResponseAmino): _162.TotalSuperfluidDelegationsResponse;
            toAmino(message: _162.TotalSuperfluidDelegationsResponse): _162.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _162.TotalSuperfluidDelegationsResponseAminoMsg): _162.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _162.TotalSuperfluidDelegationsResponse): _162.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _162.TotalSuperfluidDelegationsResponseProtoMsg): _162.TotalSuperfluidDelegationsResponse;
            toProto(message: _162.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _162.TotalSuperfluidDelegationsResponse): _162.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_162.SuperfluidDelegationAmountRequest>): _162.SuperfluidDelegationAmountRequest;
            fromAmino(object: _162.SuperfluidDelegationAmountRequestAmino): _162.SuperfluidDelegationAmountRequest;
            toAmino(message: _162.SuperfluidDelegationAmountRequest): _162.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationAmountRequestAminoMsg): _162.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _162.SuperfluidDelegationAmountRequest): _162.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationAmountRequestProtoMsg): _162.SuperfluidDelegationAmountRequest;
            toProto(message: _162.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationAmountRequest): _162.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_162.SuperfluidDelegationAmountResponse>): _162.SuperfluidDelegationAmountResponse;
            fromAmino(object: _162.SuperfluidDelegationAmountResponseAmino): _162.SuperfluidDelegationAmountResponse;
            toAmino(message: _162.SuperfluidDelegationAmountResponse): _162.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationAmountResponseAminoMsg): _162.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _162.SuperfluidDelegationAmountResponse): _162.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationAmountResponseProtoMsg): _162.SuperfluidDelegationAmountResponse;
            toProto(message: _162.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationAmountResponse): _162.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_162.SuperfluidDelegationsByDelegatorRequest>): _162.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _162.SuperfluidDelegationsByDelegatorRequestAmino): _162.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _162.SuperfluidDelegationsByDelegatorRequest): _162.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationsByDelegatorRequestAminoMsg): _162.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _162.SuperfluidDelegationsByDelegatorRequest): _162.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationsByDelegatorRequestProtoMsg): _162.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _162.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationsByDelegatorRequest): _162.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_162.SuperfluidDelegationsByDelegatorResponse>): _162.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _162.SuperfluidDelegationsByDelegatorResponseAmino): _162.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _162.SuperfluidDelegationsByDelegatorResponse): _162.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationsByDelegatorResponseAminoMsg): _162.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _162.SuperfluidDelegationsByDelegatorResponse): _162.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationsByDelegatorResponseProtoMsg): _162.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _162.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationsByDelegatorResponse): _162.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _162.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_162.SuperfluidUndelegationsByDelegatorRequest>): _162.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _162.SuperfluidUndelegationsByDelegatorRequestAmino): _162.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _162.SuperfluidUndelegationsByDelegatorRequest): _162.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _162.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _162.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _162.SuperfluidUndelegationsByDelegatorRequest): _162.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _162.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _162.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _162.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _162.SuperfluidUndelegationsByDelegatorRequest): _162.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _162.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_162.SuperfluidUndelegationsByDelegatorResponse>): _162.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _162.SuperfluidUndelegationsByDelegatorResponseAmino): _162.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _162.SuperfluidUndelegationsByDelegatorResponse): _162.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _162.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _162.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _162.SuperfluidUndelegationsByDelegatorResponse): _162.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _162.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _162.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _162.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _162.SuperfluidUndelegationsByDelegatorResponse): _162.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_162.SuperfluidDelegationsByValidatorDenomRequest>): _162.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _162.SuperfluidDelegationsByValidatorDenomRequestAmino): _162.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _162.SuperfluidDelegationsByValidatorDenomRequest): _162.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _162.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _162.SuperfluidDelegationsByValidatorDenomRequest): _162.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _162.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _162.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationsByValidatorDenomRequest): _162.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _162.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_162.SuperfluidDelegationsByValidatorDenomResponse>): _162.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _162.SuperfluidDelegationsByValidatorDenomResponseAmino): _162.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _162.SuperfluidDelegationsByValidatorDenomResponse): _162.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _162.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _162.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _162.SuperfluidDelegationsByValidatorDenomResponse): _162.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _162.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _162.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _162.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _162.SuperfluidDelegationsByValidatorDenomResponse): _162.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _162.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_162.QueryTotalDelegationByDelegatorRequest>): _162.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _162.QueryTotalDelegationByDelegatorRequestAmino): _162.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _162.QueryTotalDelegationByDelegatorRequest): _162.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _162.QueryTotalDelegationByDelegatorRequestAminoMsg): _162.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _162.QueryTotalDelegationByDelegatorRequest): _162.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _162.QueryTotalDelegationByDelegatorRequestProtoMsg): _162.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _162.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _162.QueryTotalDelegationByDelegatorRequest): _162.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _162.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_162.QueryTotalDelegationByDelegatorResponse>): _162.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _162.QueryTotalDelegationByDelegatorResponseAmino): _162.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _162.QueryTotalDelegationByDelegatorResponse): _162.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _162.QueryTotalDelegationByDelegatorResponseAminoMsg): _162.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _162.QueryTotalDelegationByDelegatorResponse): _162.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _162.QueryTotalDelegationByDelegatorResponseProtoMsg): _162.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _162.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _162.QueryTotalDelegationByDelegatorResponse): _162.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _162.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_162.QueryUnpoolWhitelistRequest>): _162.QueryUnpoolWhitelistRequest;
            fromAmino(_: _162.QueryUnpoolWhitelistRequestAmino): _162.QueryUnpoolWhitelistRequest;
            toAmino(_: _162.QueryUnpoolWhitelistRequest): _162.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _162.QueryUnpoolWhitelistRequestAminoMsg): _162.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _162.QueryUnpoolWhitelistRequest): _162.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _162.QueryUnpoolWhitelistRequestProtoMsg): _162.QueryUnpoolWhitelistRequest;
            toProto(message: _162.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _162.QueryUnpoolWhitelistRequest): _162.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _162.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_162.QueryUnpoolWhitelistResponse>): _162.QueryUnpoolWhitelistResponse;
            fromAmino(object: _162.QueryUnpoolWhitelistResponseAmino): _162.QueryUnpoolWhitelistResponse;
            toAmino(message: _162.QueryUnpoolWhitelistResponse): _162.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _162.QueryUnpoolWhitelistResponseAminoMsg): _162.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _162.QueryUnpoolWhitelistResponse): _162.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _162.QueryUnpoolWhitelistResponseProtoMsg): _162.QueryUnpoolWhitelistResponse;
            toProto(message: _162.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _162.QueryUnpoolWhitelistResponse): _162.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
            fromPartial(object: Partial<_161.Params>): _161.Params;
            fromAmino(object: _161.ParamsAmino): _161.Params;
            toAmino(message: _161.Params): _161.ParamsAmino;
            fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
            toAminoMsg(message: _161.Params): _161.ParamsAminoMsg;
            fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
            toProto(message: _161.Params): Uint8Array;
            toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
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
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _320.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                denomAuthorityMetadata(request: _168.QueryDenomAuthorityMetadataRequest): Promise<_168.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _168.QueryDenomsFromCreatorRequest): Promise<_168.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _168.QueryBeforeSendHookAddressRequest): Promise<_168.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _302.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _169.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _169.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _169.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _169.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _169.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _169.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _169.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _169.MsgCreateDenom): {
                        typeUrl: string;
                        value: _169.MsgCreateDenom;
                    };
                    mint(value: _169.MsgMint): {
                        typeUrl: string;
                        value: _169.MsgMint;
                    };
                    burn(value: _169.MsgBurn): {
                        typeUrl: string;
                        value: _169.MsgBurn;
                    };
                    changeAdmin(value: _169.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _169.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _169.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _169.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _169.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _169.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _169.MsgForceTransfer): {
                        typeUrl: string;
                        value: _169.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _169.MsgCreateDenom): {
                        typeUrl: string;
                        value: _169.MsgCreateDenom;
                    };
                    mint(value: _169.MsgMint): {
                        typeUrl: string;
                        value: _169.MsgMint;
                    };
                    burn(value: _169.MsgBurn): {
                        typeUrl: string;
                        value: _169.MsgBurn;
                    };
                    changeAdmin(value: _169.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _169.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _169.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _169.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _169.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _169.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _169.MsgForceTransfer): {
                        typeUrl: string;
                        value: _169.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _169.MsgCreateDenom) => _169.MsgCreateDenomAmino;
                    fromAmino: (object: _169.MsgCreateDenomAmino) => _169.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _169.MsgMint) => _169.MsgMintAmino;
                    fromAmino: (object: _169.MsgMintAmino) => _169.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _169.MsgBurn) => _169.MsgBurnAmino;
                    fromAmino: (object: _169.MsgBurnAmino) => _169.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _169.MsgChangeAdmin) => _169.MsgChangeAdminAmino;
                    fromAmino: (object: _169.MsgChangeAdminAmino) => _169.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _169.MsgSetDenomMetadata) => _169.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _169.MsgSetDenomMetadataAmino) => _169.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _169.MsgSetBeforeSendHook) => _169.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _169.MsgSetBeforeSendHookAmino) => _169.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _169.MsgForceTransfer) => _169.MsgForceTransferAmino;
                    fromAmino: (object: _169.MsgForceTransferAmino) => _169.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _169.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCreateDenom;
                fromPartial(object: Partial<_169.MsgCreateDenom>): _169.MsgCreateDenom;
                fromAmino(object: _169.MsgCreateDenomAmino): _169.MsgCreateDenom;
                toAmino(message: _169.MsgCreateDenom): _169.MsgCreateDenomAmino;
                fromAminoMsg(object: _169.MsgCreateDenomAminoMsg): _169.MsgCreateDenom;
                toAminoMsg(message: _169.MsgCreateDenom): _169.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _169.MsgCreateDenomProtoMsg): _169.MsgCreateDenom;
                toProto(message: _169.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _169.MsgCreateDenom): _169.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _169.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgCreateDenomResponse;
                fromPartial(object: Partial<_169.MsgCreateDenomResponse>): _169.MsgCreateDenomResponse;
                fromAmino(object: _169.MsgCreateDenomResponseAmino): _169.MsgCreateDenomResponse;
                toAmino(message: _169.MsgCreateDenomResponse): _169.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _169.MsgCreateDenomResponseAminoMsg): _169.MsgCreateDenomResponse;
                toAminoMsg(message: _169.MsgCreateDenomResponse): _169.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _169.MsgCreateDenomResponseProtoMsg): _169.MsgCreateDenomResponse;
                toProto(message: _169.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _169.MsgCreateDenomResponse): _169.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _169.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgMint;
                fromPartial(object: Partial<_169.MsgMint>): _169.MsgMint;
                fromAmino(object: _169.MsgMintAmino): _169.MsgMint;
                toAmino(message: _169.MsgMint): _169.MsgMintAmino;
                fromAminoMsg(object: _169.MsgMintAminoMsg): _169.MsgMint;
                toAminoMsg(message: _169.MsgMint): _169.MsgMintAminoMsg;
                fromProtoMsg(message: _169.MsgMintProtoMsg): _169.MsgMint;
                toProto(message: _169.MsgMint): Uint8Array;
                toProtoMsg(message: _169.MsgMint): _169.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _169.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgMintResponse;
                fromPartial(_: Partial<_169.MsgMintResponse>): _169.MsgMintResponse;
                fromAmino(_: _169.MsgMintResponseAmino): _169.MsgMintResponse;
                toAmino(_: _169.MsgMintResponse): _169.MsgMintResponseAmino;
                fromAminoMsg(object: _169.MsgMintResponseAminoMsg): _169.MsgMintResponse;
                toAminoMsg(message: _169.MsgMintResponse): _169.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _169.MsgMintResponseProtoMsg): _169.MsgMintResponse;
                toProto(message: _169.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _169.MsgMintResponse): _169.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _169.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgBurn;
                fromPartial(object: Partial<_169.MsgBurn>): _169.MsgBurn;
                fromAmino(object: _169.MsgBurnAmino): _169.MsgBurn;
                toAmino(message: _169.MsgBurn): _169.MsgBurnAmino;
                fromAminoMsg(object: _169.MsgBurnAminoMsg): _169.MsgBurn;
                toAminoMsg(message: _169.MsgBurn): _169.MsgBurnAminoMsg;
                fromProtoMsg(message: _169.MsgBurnProtoMsg): _169.MsgBurn;
                toProto(message: _169.MsgBurn): Uint8Array;
                toProtoMsg(message: _169.MsgBurn): _169.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _169.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgBurnResponse;
                fromPartial(_: Partial<_169.MsgBurnResponse>): _169.MsgBurnResponse;
                fromAmino(_: _169.MsgBurnResponseAmino): _169.MsgBurnResponse;
                toAmino(_: _169.MsgBurnResponse): _169.MsgBurnResponseAmino;
                fromAminoMsg(object: _169.MsgBurnResponseAminoMsg): _169.MsgBurnResponse;
                toAminoMsg(message: _169.MsgBurnResponse): _169.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _169.MsgBurnResponseProtoMsg): _169.MsgBurnResponse;
                toProto(message: _169.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _169.MsgBurnResponse): _169.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _169.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgChangeAdmin;
                fromPartial(object: Partial<_169.MsgChangeAdmin>): _169.MsgChangeAdmin;
                fromAmino(object: _169.MsgChangeAdminAmino): _169.MsgChangeAdmin;
                toAmino(message: _169.MsgChangeAdmin): _169.MsgChangeAdminAmino;
                fromAminoMsg(object: _169.MsgChangeAdminAminoMsg): _169.MsgChangeAdmin;
                toAminoMsg(message: _169.MsgChangeAdmin): _169.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _169.MsgChangeAdminProtoMsg): _169.MsgChangeAdmin;
                toProto(message: _169.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _169.MsgChangeAdmin): _169.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _169.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgChangeAdminResponse;
                fromPartial(_: Partial<_169.MsgChangeAdminResponse>): _169.MsgChangeAdminResponse;
                fromAmino(_: _169.MsgChangeAdminResponseAmino): _169.MsgChangeAdminResponse;
                toAmino(_: _169.MsgChangeAdminResponse): _169.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _169.MsgChangeAdminResponseAminoMsg): _169.MsgChangeAdminResponse;
                toAminoMsg(message: _169.MsgChangeAdminResponse): _169.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _169.MsgChangeAdminResponseProtoMsg): _169.MsgChangeAdminResponse;
                toProto(message: _169.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _169.MsgChangeAdminResponse): _169.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _169.MsgSetBeforeSendHook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_169.MsgSetBeforeSendHook>): _169.MsgSetBeforeSendHook;
                fromAmino(object: _169.MsgSetBeforeSendHookAmino): _169.MsgSetBeforeSendHook;
                toAmino(message: _169.MsgSetBeforeSendHook): _169.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _169.MsgSetBeforeSendHookAminoMsg): _169.MsgSetBeforeSendHook;
                toAminoMsg(message: _169.MsgSetBeforeSendHook): _169.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _169.MsgSetBeforeSendHookProtoMsg): _169.MsgSetBeforeSendHook;
                toProto(message: _169.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _169.MsgSetBeforeSendHook): _169.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _169.MsgSetBeforeSendHookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_169.MsgSetBeforeSendHookResponse>): _169.MsgSetBeforeSendHookResponse;
                fromAmino(_: _169.MsgSetBeforeSendHookResponseAmino): _169.MsgSetBeforeSendHookResponse;
                toAmino(_: _169.MsgSetBeforeSendHookResponse): _169.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _169.MsgSetBeforeSendHookResponseAminoMsg): _169.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _169.MsgSetBeforeSendHookResponse): _169.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _169.MsgSetBeforeSendHookResponseProtoMsg): _169.MsgSetBeforeSendHookResponse;
                toProto(message: _169.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _169.MsgSetBeforeSendHookResponse): _169.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _169.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgSetDenomMetadata;
                fromPartial(object: Partial<_169.MsgSetDenomMetadata>): _169.MsgSetDenomMetadata;
                fromAmino(object: _169.MsgSetDenomMetadataAmino): _169.MsgSetDenomMetadata;
                toAmino(message: _169.MsgSetDenomMetadata): _169.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _169.MsgSetDenomMetadataAminoMsg): _169.MsgSetDenomMetadata;
                toAminoMsg(message: _169.MsgSetDenomMetadata): _169.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _169.MsgSetDenomMetadataProtoMsg): _169.MsgSetDenomMetadata;
                toProto(message: _169.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _169.MsgSetDenomMetadata): _169.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _169.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_169.MsgSetDenomMetadataResponse>): _169.MsgSetDenomMetadataResponse;
                fromAmino(_: _169.MsgSetDenomMetadataResponseAmino): _169.MsgSetDenomMetadataResponse;
                toAmino(_: _169.MsgSetDenomMetadataResponse): _169.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _169.MsgSetDenomMetadataResponseAminoMsg): _169.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _169.MsgSetDenomMetadataResponse): _169.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _169.MsgSetDenomMetadataResponseProtoMsg): _169.MsgSetDenomMetadataResponse;
                toProto(message: _169.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _169.MsgSetDenomMetadataResponse): _169.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _169.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgForceTransfer;
                fromPartial(object: Partial<_169.MsgForceTransfer>): _169.MsgForceTransfer;
                fromAmino(object: _169.MsgForceTransferAmino): _169.MsgForceTransfer;
                toAmino(message: _169.MsgForceTransfer): _169.MsgForceTransferAmino;
                fromAminoMsg(object: _169.MsgForceTransferAminoMsg): _169.MsgForceTransfer;
                toAminoMsg(message: _169.MsgForceTransfer): _169.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _169.MsgForceTransferProtoMsg): _169.MsgForceTransfer;
                toProto(message: _169.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _169.MsgForceTransfer): _169.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _169.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgForceTransferResponse;
                fromPartial(_: Partial<_169.MsgForceTransferResponse>): _169.MsgForceTransferResponse;
                fromAmino(_: _169.MsgForceTransferResponseAmino): _169.MsgForceTransferResponse;
                toAmino(_: _169.MsgForceTransferResponse): _169.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _169.MsgForceTransferResponseAminoMsg): _169.MsgForceTransferResponse;
                toAminoMsg(message: _169.MsgForceTransferResponse): _169.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _169.MsgForceTransferResponseProtoMsg): _169.MsgForceTransferResponse;
                toProto(message: _169.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _169.MsgForceTransferResponse): _169.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
                fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
                fromAmino(_: _168.QueryParamsRequestAmino): _168.QueryParamsRequest;
                toAmino(_: _168.QueryParamsRequest): _168.QueryParamsRequestAmino;
                fromAminoMsg(object: _168.QueryParamsRequestAminoMsg): _168.QueryParamsRequest;
                toAminoMsg(message: _168.QueryParamsRequest): _168.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _168.QueryParamsRequestProtoMsg): _168.QueryParamsRequest;
                toProto(message: _168.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _168.QueryParamsRequest): _168.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
                fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
                fromAmino(object: _168.QueryParamsResponseAmino): _168.QueryParamsResponse;
                toAmino(message: _168.QueryParamsResponse): _168.QueryParamsResponseAmino;
                fromAminoMsg(object: _168.QueryParamsResponseAminoMsg): _168.QueryParamsResponse;
                toAminoMsg(message: _168.QueryParamsResponse): _168.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _168.QueryParamsResponseProtoMsg): _168.QueryParamsResponse;
                toProto(message: _168.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _168.QueryParamsResponse): _168.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _168.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_168.QueryDenomAuthorityMetadataRequest>): _168.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _168.QueryDenomAuthorityMetadataRequestAmino): _168.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _168.QueryDenomAuthorityMetadataRequest): _168.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _168.QueryDenomAuthorityMetadataRequestAminoMsg): _168.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _168.QueryDenomAuthorityMetadataRequest): _168.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _168.QueryDenomAuthorityMetadataRequestProtoMsg): _168.QueryDenomAuthorityMetadataRequest;
                toProto(message: _168.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _168.QueryDenomAuthorityMetadataRequest): _168.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _168.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_168.QueryDenomAuthorityMetadataResponse>): _168.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _168.QueryDenomAuthorityMetadataResponseAmino): _168.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _168.QueryDenomAuthorityMetadataResponse): _168.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _168.QueryDenomAuthorityMetadataResponseAminoMsg): _168.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _168.QueryDenomAuthorityMetadataResponse): _168.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _168.QueryDenomAuthorityMetadataResponseProtoMsg): _168.QueryDenomAuthorityMetadataResponse;
                toProto(message: _168.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _168.QueryDenomAuthorityMetadataResponse): _168.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _168.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_168.QueryDenomsFromCreatorRequest>): _168.QueryDenomsFromCreatorRequest;
                fromAmino(object: _168.QueryDenomsFromCreatorRequestAmino): _168.QueryDenomsFromCreatorRequest;
                toAmino(message: _168.QueryDenomsFromCreatorRequest): _168.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _168.QueryDenomsFromCreatorRequestAminoMsg): _168.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _168.QueryDenomsFromCreatorRequest): _168.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _168.QueryDenomsFromCreatorRequestProtoMsg): _168.QueryDenomsFromCreatorRequest;
                toProto(message: _168.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _168.QueryDenomsFromCreatorRequest): _168.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _168.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_168.QueryDenomsFromCreatorResponse>): _168.QueryDenomsFromCreatorResponse;
                fromAmino(object: _168.QueryDenomsFromCreatorResponseAmino): _168.QueryDenomsFromCreatorResponse;
                toAmino(message: _168.QueryDenomsFromCreatorResponse): _168.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _168.QueryDenomsFromCreatorResponseAminoMsg): _168.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _168.QueryDenomsFromCreatorResponse): _168.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _168.QueryDenomsFromCreatorResponseProtoMsg): _168.QueryDenomsFromCreatorResponse;
                toProto(message: _168.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _168.QueryDenomsFromCreatorResponse): _168.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _168.QueryBeforeSendHookAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_168.QueryBeforeSendHookAddressRequest>): _168.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _168.QueryBeforeSendHookAddressRequestAmino): _168.QueryBeforeSendHookAddressRequest;
                toAmino(message: _168.QueryBeforeSendHookAddressRequest): _168.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _168.QueryBeforeSendHookAddressRequestAminoMsg): _168.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _168.QueryBeforeSendHookAddressRequest): _168.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _168.QueryBeforeSendHookAddressRequestProtoMsg): _168.QueryBeforeSendHookAddressRequest;
                toProto(message: _168.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _168.QueryBeforeSendHookAddressRequest): _168.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _168.QueryBeforeSendHookAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_168.QueryBeforeSendHookAddressResponse>): _168.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _168.QueryBeforeSendHookAddressResponseAmino): _168.QueryBeforeSendHookAddressResponse;
                toAmino(message: _168.QueryBeforeSendHookAddressResponse): _168.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _168.QueryBeforeSendHookAddressResponseAminoMsg): _168.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _168.QueryBeforeSendHookAddressResponse): _168.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _168.QueryBeforeSendHookAddressResponseProtoMsg): _168.QueryBeforeSendHookAddressResponse;
                toProto(message: _168.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _168.QueryBeforeSendHookAddressResponse): _168.QueryBeforeSendHookAddressResponseProtoMsg;
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
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
                fromAmino(object: _166.GenesisStateAmino): _166.GenesisState;
                toAmino(message: _166.GenesisState): _166.GenesisStateAmino;
                fromAminoMsg(object: _166.GenesisStateAminoMsg): _166.GenesisState;
                toAminoMsg(message: _166.GenesisState): _166.GenesisStateAminoMsg;
                fromProtoMsg(message: _166.GenesisStateProtoMsg): _166.GenesisState;
                toProto(message: _166.GenesisState): Uint8Array;
                toProtoMsg(message: _166.GenesisState): _166.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _166.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisDenom;
                fromPartial(object: Partial<_166.GenesisDenom>): _166.GenesisDenom;
                fromAmino(object: _166.GenesisDenomAmino): _166.GenesisDenom;
                toAmino(message: _166.GenesisDenom): _166.GenesisDenomAmino;
                fromAminoMsg(object: _166.GenesisDenomAminoMsg): _166.GenesisDenom;
                toAminoMsg(message: _166.GenesisDenom): _166.GenesisDenomAminoMsg;
                fromProtoMsg(message: _166.GenesisDenomProtoMsg): _166.GenesisDenom;
                toProto(message: _166.GenesisDenom): Uint8Array;
                toProtoMsg(message: _166.GenesisDenom): _166.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _165.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.DenomAuthorityMetadata;
                fromPartial(object: Partial<_165.DenomAuthorityMetadata>): _165.DenomAuthorityMetadata;
                fromAmino(object: _165.DenomAuthorityMetadataAmino): _165.DenomAuthorityMetadata;
                toAmino(message: _165.DenomAuthorityMetadata): _165.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _165.DenomAuthorityMetadataAminoMsg): _165.DenomAuthorityMetadata;
                toAminoMsg(message: _165.DenomAuthorityMetadata): _165.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _165.DenomAuthorityMetadataProtoMsg): _165.DenomAuthorityMetadata;
                toProto(message: _165.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _165.DenomAuthorityMetadata): _165.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _321.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _171.ParamsRequest): Promise<_171.ParamsResponse>;
                arithmeticTwap(request: _171.ArithmeticTwapRequest): Promise<_171.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _171.ArithmeticTwapToNowRequest): Promise<_171.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _171.GeometricTwapRequest): Promise<_171.GeometricTwapResponse>;
                geometricTwapToNow(request: _171.GeometricTwapToNowRequest): Promise<_171.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _303.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _172.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TwapRecord;
                fromPartial(object: Partial<_172.TwapRecord>): _172.TwapRecord;
                fromAmino(object: _172.TwapRecordAmino): _172.TwapRecord;
                toAmino(message: _172.TwapRecord): _172.TwapRecordAmino;
                fromAminoMsg(object: _172.TwapRecordAminoMsg): _172.TwapRecord;
                toAminoMsg(message: _172.TwapRecord): _172.TwapRecordAminoMsg;
                fromProtoMsg(message: _172.TwapRecordProtoMsg): _172.TwapRecord;
                toProto(message: _172.TwapRecord): Uint8Array;
                toProtoMsg(message: _172.TwapRecord): _172.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _171.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ArithmeticTwapRequest;
                fromPartial(object: Partial<_171.ArithmeticTwapRequest>): _171.ArithmeticTwapRequest;
                fromAmino(object: _171.ArithmeticTwapRequestAmino): _171.ArithmeticTwapRequest;
                toAmino(message: _171.ArithmeticTwapRequest): _171.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _171.ArithmeticTwapRequestAminoMsg): _171.ArithmeticTwapRequest;
                toAminoMsg(message: _171.ArithmeticTwapRequest): _171.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _171.ArithmeticTwapRequestProtoMsg): _171.ArithmeticTwapRequest;
                toProto(message: _171.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _171.ArithmeticTwapRequest): _171.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _171.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ArithmeticTwapResponse;
                fromPartial(object: Partial<_171.ArithmeticTwapResponse>): _171.ArithmeticTwapResponse;
                fromAmino(object: _171.ArithmeticTwapResponseAmino): _171.ArithmeticTwapResponse;
                toAmino(message: _171.ArithmeticTwapResponse): _171.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _171.ArithmeticTwapResponseAminoMsg): _171.ArithmeticTwapResponse;
                toAminoMsg(message: _171.ArithmeticTwapResponse): _171.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _171.ArithmeticTwapResponseProtoMsg): _171.ArithmeticTwapResponse;
                toProto(message: _171.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _171.ArithmeticTwapResponse): _171.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _171.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_171.ArithmeticTwapToNowRequest>): _171.ArithmeticTwapToNowRequest;
                fromAmino(object: _171.ArithmeticTwapToNowRequestAmino): _171.ArithmeticTwapToNowRequest;
                toAmino(message: _171.ArithmeticTwapToNowRequest): _171.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _171.ArithmeticTwapToNowRequestAminoMsg): _171.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _171.ArithmeticTwapToNowRequest): _171.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _171.ArithmeticTwapToNowRequestProtoMsg): _171.ArithmeticTwapToNowRequest;
                toProto(message: _171.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _171.ArithmeticTwapToNowRequest): _171.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _171.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_171.ArithmeticTwapToNowResponse>): _171.ArithmeticTwapToNowResponse;
                fromAmino(object: _171.ArithmeticTwapToNowResponseAmino): _171.ArithmeticTwapToNowResponse;
                toAmino(message: _171.ArithmeticTwapToNowResponse): _171.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _171.ArithmeticTwapToNowResponseAminoMsg): _171.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _171.ArithmeticTwapToNowResponse): _171.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _171.ArithmeticTwapToNowResponseProtoMsg): _171.ArithmeticTwapToNowResponse;
                toProto(message: _171.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _171.ArithmeticTwapToNowResponse): _171.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                typeUrl: string;
                encode(message: _171.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GeometricTwapRequest;
                fromPartial(object: Partial<_171.GeometricTwapRequest>): _171.GeometricTwapRequest;
                fromAmino(object: _171.GeometricTwapRequestAmino): _171.GeometricTwapRequest;
                toAmino(message: _171.GeometricTwapRequest): _171.GeometricTwapRequestAmino;
                fromAminoMsg(object: _171.GeometricTwapRequestAminoMsg): _171.GeometricTwapRequest;
                toAminoMsg(message: _171.GeometricTwapRequest): _171.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _171.GeometricTwapRequestProtoMsg): _171.GeometricTwapRequest;
                toProto(message: _171.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _171.GeometricTwapRequest): _171.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                typeUrl: string;
                encode(message: _171.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GeometricTwapResponse;
                fromPartial(object: Partial<_171.GeometricTwapResponse>): _171.GeometricTwapResponse;
                fromAmino(object: _171.GeometricTwapResponseAmino): _171.GeometricTwapResponse;
                toAmino(message: _171.GeometricTwapResponse): _171.GeometricTwapResponseAmino;
                fromAminoMsg(object: _171.GeometricTwapResponseAminoMsg): _171.GeometricTwapResponse;
                toAminoMsg(message: _171.GeometricTwapResponse): _171.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _171.GeometricTwapResponseProtoMsg): _171.GeometricTwapResponse;
                toProto(message: _171.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _171.GeometricTwapResponse): _171.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                typeUrl: string;
                encode(message: _171.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_171.GeometricTwapToNowRequest>): _171.GeometricTwapToNowRequest;
                fromAmino(object: _171.GeometricTwapToNowRequestAmino): _171.GeometricTwapToNowRequest;
                toAmino(message: _171.GeometricTwapToNowRequest): _171.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _171.GeometricTwapToNowRequestAminoMsg): _171.GeometricTwapToNowRequest;
                toAminoMsg(message: _171.GeometricTwapToNowRequest): _171.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _171.GeometricTwapToNowRequestProtoMsg): _171.GeometricTwapToNowRequest;
                toProto(message: _171.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _171.GeometricTwapToNowRequest): _171.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                typeUrl: string;
                encode(message: _171.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_171.GeometricTwapToNowResponse>): _171.GeometricTwapToNowResponse;
                fromAmino(object: _171.GeometricTwapToNowResponseAmino): _171.GeometricTwapToNowResponse;
                toAmino(message: _171.GeometricTwapToNowResponse): _171.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _171.GeometricTwapToNowResponseAminoMsg): _171.GeometricTwapToNowResponse;
                toAminoMsg(message: _171.GeometricTwapToNowResponse): _171.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _171.GeometricTwapToNowResponseProtoMsg): _171.GeometricTwapToNowResponse;
                toProto(message: _171.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _171.GeometricTwapToNowResponse): _171.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _171.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ParamsRequest;
                fromPartial(_: Partial<_171.ParamsRequest>): _171.ParamsRequest;
                fromAmino(_: _171.ParamsRequestAmino): _171.ParamsRequest;
                toAmino(_: _171.ParamsRequest): _171.ParamsRequestAmino;
                fromAminoMsg(object: _171.ParamsRequestAminoMsg): _171.ParamsRequest;
                toAminoMsg(message: _171.ParamsRequest): _171.ParamsRequestAminoMsg;
                fromProtoMsg(message: _171.ParamsRequestProtoMsg): _171.ParamsRequest;
                toProto(message: _171.ParamsRequest): Uint8Array;
                toProtoMsg(message: _171.ParamsRequest): _171.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _171.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ParamsResponse;
                fromPartial(object: Partial<_171.ParamsResponse>): _171.ParamsResponse;
                fromAmino(object: _171.ParamsResponseAmino): _171.ParamsResponse;
                toAmino(message: _171.ParamsResponse): _171.ParamsResponseAmino;
                fromAminoMsg(object: _171.ParamsResponseAminoMsg): _171.ParamsResponse;
                toAminoMsg(message: _171.ParamsResponse): _171.ParamsResponseAminoMsg;
                fromProtoMsg(message: _171.ParamsResponseProtoMsg): _171.ParamsResponse;
                toProto(message: _171.ParamsResponse): Uint8Array;
                toProtoMsg(message: _171.ParamsResponse): _171.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _170.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Params;
                fromPartial(object: Partial<_170.Params>): _170.Params;
                fromAmino(object: _170.ParamsAmino): _170.Params;
                toAmino(message: _170.Params): _170.ParamsAmino;
                fromAminoMsg(object: _170.ParamsAminoMsg): _170.Params;
                toAminoMsg(message: _170.Params): _170.ParamsAminoMsg;
                fromProtoMsg(message: _170.ParamsProtoMsg): _170.Params;
                toProto(message: _170.Params): Uint8Array;
                toProtoMsg(message: _170.Params): _170.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
                fromAmino(object: _170.GenesisStateAmino): _170.GenesisState;
                toAmino(message: _170.GenesisState): _170.GenesisStateAmino;
                fromAminoMsg(object: _170.GenesisStateAminoMsg): _170.GenesisState;
                toAminoMsg(message: _170.GenesisState): _170.GenesisStateAminoMsg;
                fromProtoMsg(message: _170.GenesisStateProtoMsg): _170.GenesisState;
                toProto(message: _170.GenesisState): Uint8Array;
                toProtoMsg(message: _170.GenesisState): _170.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _322.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _176.QueryFeeTokensRequest): Promise<_176.QueryFeeTokensResponse>;
                denomSpotPrice(request: _176.QueryDenomSpotPriceRequest): Promise<_176.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _176.QueryDenomPoolIdRequest): Promise<_176.QueryDenomPoolIdResponse>;
                baseDenom(request?: _176.QueryBaseDenomRequest): Promise<_176.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _304.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _176.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryFeeTokensRequest;
                fromPartial(_: Partial<_176.QueryFeeTokensRequest>): _176.QueryFeeTokensRequest;
                fromAmino(_: _176.QueryFeeTokensRequestAmino): _176.QueryFeeTokensRequest;
                toAmino(_: _176.QueryFeeTokensRequest): _176.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _176.QueryFeeTokensRequestAminoMsg): _176.QueryFeeTokensRequest;
                toAminoMsg(message: _176.QueryFeeTokensRequest): _176.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _176.QueryFeeTokensRequestProtoMsg): _176.QueryFeeTokensRequest;
                toProto(message: _176.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _176.QueryFeeTokensRequest): _176.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _176.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryFeeTokensResponse;
                fromPartial(object: Partial<_176.QueryFeeTokensResponse>): _176.QueryFeeTokensResponse;
                fromAmino(object: _176.QueryFeeTokensResponseAmino): _176.QueryFeeTokensResponse;
                toAmino(message: _176.QueryFeeTokensResponse): _176.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _176.QueryFeeTokensResponseAminoMsg): _176.QueryFeeTokensResponse;
                toAminoMsg(message: _176.QueryFeeTokensResponse): _176.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _176.QueryFeeTokensResponseProtoMsg): _176.QueryFeeTokensResponse;
                toProto(message: _176.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _176.QueryFeeTokensResponse): _176.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _176.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_176.QueryDenomSpotPriceRequest>): _176.QueryDenomSpotPriceRequest;
                fromAmino(object: _176.QueryDenomSpotPriceRequestAmino): _176.QueryDenomSpotPriceRequest;
                toAmino(message: _176.QueryDenomSpotPriceRequest): _176.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _176.QueryDenomSpotPriceRequestAminoMsg): _176.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _176.QueryDenomSpotPriceRequest): _176.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _176.QueryDenomSpotPriceRequestProtoMsg): _176.QueryDenomSpotPriceRequest;
                toProto(message: _176.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _176.QueryDenomSpotPriceRequest): _176.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _176.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_176.QueryDenomSpotPriceResponse>): _176.QueryDenomSpotPriceResponse;
                fromAmino(object: _176.QueryDenomSpotPriceResponseAmino): _176.QueryDenomSpotPriceResponse;
                toAmino(message: _176.QueryDenomSpotPriceResponse): _176.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _176.QueryDenomSpotPriceResponseAminoMsg): _176.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _176.QueryDenomSpotPriceResponse): _176.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _176.QueryDenomSpotPriceResponseProtoMsg): _176.QueryDenomSpotPriceResponse;
                toProto(message: _176.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _176.QueryDenomSpotPriceResponse): _176.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _176.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_176.QueryDenomPoolIdRequest>): _176.QueryDenomPoolIdRequest;
                fromAmino(object: _176.QueryDenomPoolIdRequestAmino): _176.QueryDenomPoolIdRequest;
                toAmino(message: _176.QueryDenomPoolIdRequest): _176.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _176.QueryDenomPoolIdRequestAminoMsg): _176.QueryDenomPoolIdRequest;
                toAminoMsg(message: _176.QueryDenomPoolIdRequest): _176.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _176.QueryDenomPoolIdRequestProtoMsg): _176.QueryDenomPoolIdRequest;
                toProto(message: _176.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _176.QueryDenomPoolIdRequest): _176.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _176.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_176.QueryDenomPoolIdResponse>): _176.QueryDenomPoolIdResponse;
                fromAmino(object: _176.QueryDenomPoolIdResponseAmino): _176.QueryDenomPoolIdResponse;
                toAmino(message: _176.QueryDenomPoolIdResponse): _176.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _176.QueryDenomPoolIdResponseAminoMsg): _176.QueryDenomPoolIdResponse;
                toAminoMsg(message: _176.QueryDenomPoolIdResponse): _176.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _176.QueryDenomPoolIdResponseProtoMsg): _176.QueryDenomPoolIdResponse;
                toProto(message: _176.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _176.QueryDenomPoolIdResponse): _176.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _176.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryBaseDenomRequest;
                fromPartial(_: Partial<_176.QueryBaseDenomRequest>): _176.QueryBaseDenomRequest;
                fromAmino(_: _176.QueryBaseDenomRequestAmino): _176.QueryBaseDenomRequest;
                toAmino(_: _176.QueryBaseDenomRequest): _176.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _176.QueryBaseDenomRequestAminoMsg): _176.QueryBaseDenomRequest;
                toAminoMsg(message: _176.QueryBaseDenomRequest): _176.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _176.QueryBaseDenomRequestProtoMsg): _176.QueryBaseDenomRequest;
                toProto(message: _176.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _176.QueryBaseDenomRequest): _176.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _176.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryBaseDenomResponse;
                fromPartial(object: Partial<_176.QueryBaseDenomResponse>): _176.QueryBaseDenomResponse;
                fromAmino(object: _176.QueryBaseDenomResponseAmino): _176.QueryBaseDenomResponse;
                toAmino(message: _176.QueryBaseDenomResponse): _176.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _176.QueryBaseDenomResponseAminoMsg): _176.QueryBaseDenomResponse;
                toAminoMsg(message: _176.QueryBaseDenomResponse): _176.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _176.QueryBaseDenomResponseProtoMsg): _176.QueryBaseDenomResponse;
                toProto(message: _176.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _176.QueryBaseDenomResponse): _176.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _175.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_175.UpdateFeeTokenProposal>): _175.UpdateFeeTokenProposal;
                fromAmino(object: _175.UpdateFeeTokenProposalAmino): _175.UpdateFeeTokenProposal;
                toAmino(message: _175.UpdateFeeTokenProposal): _175.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _175.UpdateFeeTokenProposalAminoMsg): _175.UpdateFeeTokenProposal;
                toAminoMsg(message: _175.UpdateFeeTokenProposal): _175.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _175.UpdateFeeTokenProposalProtoMsg): _175.UpdateFeeTokenProposal;
                toProto(message: _175.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _175.UpdateFeeTokenProposal): _175.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.GenesisState;
                fromPartial(object: Partial<_174.GenesisState>): _174.GenesisState;
                fromAmino(object: _174.GenesisStateAmino): _174.GenesisState;
                toAmino(message: _174.GenesisState): _174.GenesisStateAmino;
                fromAminoMsg(object: _174.GenesisStateAminoMsg): _174.GenesisState;
                toAminoMsg(message: _174.GenesisState): _174.GenesisStateAminoMsg;
                fromProtoMsg(message: _174.GenesisStateProtoMsg): _174.GenesisState;
                toProto(message: _174.GenesisState): Uint8Array;
                toProtoMsg(message: _174.GenesisState): _174.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _173.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.FeeToken;
                fromPartial(object: Partial<_173.FeeToken>): _173.FeeToken;
                fromAmino(object: _173.FeeTokenAmino): _173.FeeToken;
                toAmino(message: _173.FeeToken): _173.FeeTokenAmino;
                fromAminoMsg(object: _173.FeeTokenAminoMsg): _173.FeeToken;
                toAminoMsg(message: _173.FeeToken): _173.FeeTokenAminoMsg;
                fromProtoMsg(message: _173.FeeTokenProtoMsg): _173.FeeToken;
                toProto(message: _173.FeeToken): Uint8Array;
                toProtoMsg(message: _173.FeeToken): _173.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _323.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _177.UserValidatorPreferencesRequest): Promise<_177.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _305.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _179.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _179.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _179.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _179.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _179.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _179.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _179.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _179.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _179.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _179.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _179.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _179.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _179.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _179.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _179.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _179.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _179.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _179.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _179.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _179.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _179.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _179.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _179.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _179.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _179.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _179.MsgSetValidatorSetPreference) => _179.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _179.MsgSetValidatorSetPreferenceAmino) => _179.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _179.MsgDelegateToValidatorSet) => _179.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _179.MsgDelegateToValidatorSetAmino) => _179.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _179.MsgUndelegateFromValidatorSet) => _179.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _179.MsgUndelegateFromValidatorSetAmino) => _179.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _179.MsgRedelegateValidatorSet) => _179.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _179.MsgRedelegateValidatorSetAmino) => _179.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _179.MsgWithdrawDelegationRewards) => _179.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _179.MsgWithdrawDelegationRewardsAmino) => _179.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _179.MsgDelegateBondedTokens) => _179.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _179.MsgDelegateBondedTokensAmino) => _179.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _179.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_179.MsgSetValidatorSetPreference>): _179.MsgSetValidatorSetPreference;
                fromAmino(object: _179.MsgSetValidatorSetPreferenceAmino): _179.MsgSetValidatorSetPreference;
                toAmino(message: _179.MsgSetValidatorSetPreference): _179.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _179.MsgSetValidatorSetPreferenceAminoMsg): _179.MsgSetValidatorSetPreference;
                toAminoMsg(message: _179.MsgSetValidatorSetPreference): _179.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _179.MsgSetValidatorSetPreferenceProtoMsg): _179.MsgSetValidatorSetPreference;
                toProto(message: _179.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _179.MsgSetValidatorSetPreference): _179.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _179.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_179.MsgSetValidatorSetPreferenceResponse>): _179.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _179.MsgSetValidatorSetPreferenceResponseAmino): _179.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _179.MsgSetValidatorSetPreferenceResponse): _179.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _179.MsgSetValidatorSetPreferenceResponseAminoMsg): _179.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _179.MsgSetValidatorSetPreferenceResponse): _179.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _179.MsgSetValidatorSetPreferenceResponseProtoMsg): _179.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _179.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _179.MsgSetValidatorSetPreferenceResponse): _179.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _179.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_179.MsgDelegateToValidatorSet>): _179.MsgDelegateToValidatorSet;
                fromAmino(object: _179.MsgDelegateToValidatorSetAmino): _179.MsgDelegateToValidatorSet;
                toAmino(message: _179.MsgDelegateToValidatorSet): _179.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _179.MsgDelegateToValidatorSetAminoMsg): _179.MsgDelegateToValidatorSet;
                toAminoMsg(message: _179.MsgDelegateToValidatorSet): _179.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _179.MsgDelegateToValidatorSetProtoMsg): _179.MsgDelegateToValidatorSet;
                toProto(message: _179.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _179.MsgDelegateToValidatorSet): _179.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _179.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_179.MsgDelegateToValidatorSetResponse>): _179.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _179.MsgDelegateToValidatorSetResponseAmino): _179.MsgDelegateToValidatorSetResponse;
                toAmino(_: _179.MsgDelegateToValidatorSetResponse): _179.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _179.MsgDelegateToValidatorSetResponseAminoMsg): _179.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _179.MsgDelegateToValidatorSetResponse): _179.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _179.MsgDelegateToValidatorSetResponseProtoMsg): _179.MsgDelegateToValidatorSetResponse;
                toProto(message: _179.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _179.MsgDelegateToValidatorSetResponse): _179.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _179.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_179.MsgUndelegateFromValidatorSet>): _179.MsgUndelegateFromValidatorSet;
                fromAmino(object: _179.MsgUndelegateFromValidatorSetAmino): _179.MsgUndelegateFromValidatorSet;
                toAmino(message: _179.MsgUndelegateFromValidatorSet): _179.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _179.MsgUndelegateFromValidatorSetAminoMsg): _179.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _179.MsgUndelegateFromValidatorSet): _179.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _179.MsgUndelegateFromValidatorSetProtoMsg): _179.MsgUndelegateFromValidatorSet;
                toProto(message: _179.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _179.MsgUndelegateFromValidatorSet): _179.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _179.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_179.MsgUndelegateFromValidatorSetResponse>): _179.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _179.MsgUndelegateFromValidatorSetResponseAmino): _179.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _179.MsgUndelegateFromValidatorSetResponse): _179.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _179.MsgUndelegateFromValidatorSetResponseAminoMsg): _179.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _179.MsgUndelegateFromValidatorSetResponse): _179.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _179.MsgUndelegateFromValidatorSetResponseProtoMsg): _179.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _179.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _179.MsgUndelegateFromValidatorSetResponse): _179.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _179.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_179.MsgRedelegateValidatorSet>): _179.MsgRedelegateValidatorSet;
                fromAmino(object: _179.MsgRedelegateValidatorSetAmino): _179.MsgRedelegateValidatorSet;
                toAmino(message: _179.MsgRedelegateValidatorSet): _179.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _179.MsgRedelegateValidatorSetAminoMsg): _179.MsgRedelegateValidatorSet;
                toAminoMsg(message: _179.MsgRedelegateValidatorSet): _179.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _179.MsgRedelegateValidatorSetProtoMsg): _179.MsgRedelegateValidatorSet;
                toProto(message: _179.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _179.MsgRedelegateValidatorSet): _179.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _179.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_179.MsgRedelegateValidatorSetResponse>): _179.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _179.MsgRedelegateValidatorSetResponseAmino): _179.MsgRedelegateValidatorSetResponse;
                toAmino(_: _179.MsgRedelegateValidatorSetResponse): _179.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _179.MsgRedelegateValidatorSetResponseAminoMsg): _179.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _179.MsgRedelegateValidatorSetResponse): _179.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _179.MsgRedelegateValidatorSetResponseProtoMsg): _179.MsgRedelegateValidatorSetResponse;
                toProto(message: _179.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _179.MsgRedelegateValidatorSetResponse): _179.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _179.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_179.MsgWithdrawDelegationRewards>): _179.MsgWithdrawDelegationRewards;
                fromAmino(object: _179.MsgWithdrawDelegationRewardsAmino): _179.MsgWithdrawDelegationRewards;
                toAmino(message: _179.MsgWithdrawDelegationRewards): _179.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _179.MsgWithdrawDelegationRewardsAminoMsg): _179.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _179.MsgWithdrawDelegationRewards): _179.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _179.MsgWithdrawDelegationRewardsProtoMsg): _179.MsgWithdrawDelegationRewards;
                toProto(message: _179.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _179.MsgWithdrawDelegationRewards): _179.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _179.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_179.MsgWithdrawDelegationRewardsResponse>): _179.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _179.MsgWithdrawDelegationRewardsResponseAmino): _179.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _179.MsgWithdrawDelegationRewardsResponse): _179.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _179.MsgWithdrawDelegationRewardsResponseAminoMsg): _179.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _179.MsgWithdrawDelegationRewardsResponse): _179.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _179.MsgWithdrawDelegationRewardsResponseProtoMsg): _179.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _179.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _179.MsgWithdrawDelegationRewardsResponse): _179.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                typeUrl: string;
                encode(message: _179.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_179.MsgDelegateBondedTokens>): _179.MsgDelegateBondedTokens;
                fromAmino(object: _179.MsgDelegateBondedTokensAmino): _179.MsgDelegateBondedTokens;
                toAmino(message: _179.MsgDelegateBondedTokens): _179.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _179.MsgDelegateBondedTokensAminoMsg): _179.MsgDelegateBondedTokens;
                toAminoMsg(message: _179.MsgDelegateBondedTokens): _179.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _179.MsgDelegateBondedTokensProtoMsg): _179.MsgDelegateBondedTokens;
                toProto(message: _179.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _179.MsgDelegateBondedTokens): _179.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                typeUrl: string;
                encode(_: _179.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_179.MsgDelegateBondedTokensResponse>): _179.MsgDelegateBondedTokensResponse;
                fromAmino(_: _179.MsgDelegateBondedTokensResponseAmino): _179.MsgDelegateBondedTokensResponse;
                toAmino(_: _179.MsgDelegateBondedTokensResponse): _179.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _179.MsgDelegateBondedTokensResponseAminoMsg): _179.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _179.MsgDelegateBondedTokensResponse): _179.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _179.MsgDelegateBondedTokensResponseProtoMsg): _179.MsgDelegateBondedTokensResponse;
                toProto(message: _179.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _179.MsgDelegateBondedTokensResponse): _179.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _178.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValidatorPreference;
                fromPartial(object: Partial<_178.ValidatorPreference>): _178.ValidatorPreference;
                fromAmino(object: _178.ValidatorPreferenceAmino): _178.ValidatorPreference;
                toAmino(message: _178.ValidatorPreference): _178.ValidatorPreferenceAmino;
                fromAminoMsg(object: _178.ValidatorPreferenceAminoMsg): _178.ValidatorPreference;
                toAminoMsg(message: _178.ValidatorPreference): _178.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _178.ValidatorPreferenceProtoMsg): _178.ValidatorPreference;
                toProto(message: _178.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _178.ValidatorPreference): _178.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _178.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValidatorSetPreferences;
                fromPartial(object: Partial<_178.ValidatorSetPreferences>): _178.ValidatorSetPreferences;
                fromAmino(object: _178.ValidatorSetPreferencesAmino): _178.ValidatorSetPreferences;
                toAmino(message: _178.ValidatorSetPreferences): _178.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _178.ValidatorSetPreferencesAminoMsg): _178.ValidatorSetPreferences;
                toAminoMsg(message: _178.ValidatorSetPreferences): _178.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _178.ValidatorSetPreferencesProtoMsg): _178.ValidatorSetPreferences;
                toProto(message: _178.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _178.ValidatorSetPreferences): _178.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _177.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_177.UserValidatorPreferencesRequest>): _177.UserValidatorPreferencesRequest;
                fromAmino(object: _177.UserValidatorPreferencesRequestAmino): _177.UserValidatorPreferencesRequest;
                toAmino(message: _177.UserValidatorPreferencesRequest): _177.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _177.UserValidatorPreferencesRequestAminoMsg): _177.UserValidatorPreferencesRequest;
                toAminoMsg(message: _177.UserValidatorPreferencesRequest): _177.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _177.UserValidatorPreferencesRequestProtoMsg): _177.UserValidatorPreferencesRequest;
                toProto(message: _177.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _177.UserValidatorPreferencesRequest): _177.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _177.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_177.UserValidatorPreferencesResponse>): _177.UserValidatorPreferencesResponse;
                fromAmino(object: _177.UserValidatorPreferencesResponseAmino): _177.UserValidatorPreferencesResponse;
                toAmino(message: _177.UserValidatorPreferencesResponse): _177.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _177.UserValidatorPreferencesResponseAminoMsg): _177.UserValidatorPreferencesResponse;
                toAminoMsg(message: _177.UserValidatorPreferencesResponse): _177.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _177.UserValidatorPreferencesResponseProtoMsg): _177.UserValidatorPreferencesResponse;
                toProto(message: _177.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _177.UserValidatorPreferencesResponse): _177.UserValidatorPreferencesResponseProtoMsg;
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
                            v1beta1: _325.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _326.MsgClientImpl;
                        };
                    };
                    v1beta1: _327.MsgClientImpl;
                };
                incentives: _328.MsgClientImpl;
                lockup: _329.MsgClientImpl;
                poolmanager: {
                    v1beta1: _330.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _331.MsgClientImpl;
                };
                superfluid: _332.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _333.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _334.MsgClientImpl;
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
                        params(request?: _112.ParamsRequest): Promise<_112.ParamsResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _116.RecoveredSinceDowntimeOfLengthRequest): Promise<_116.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _118.QueryEpochsInfoRequest): Promise<_118.QueryEpochsInfoResponse>;
                        currentEpoch(request: _118.QueryCurrentEpochRequest): Promise<_118.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _122.QueryPoolsRequest): Promise<_122.QueryPoolsResponse>;
                        numPools(request?: _122.QueryNumPoolsRequest): Promise<_122.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _122.QueryTotalLiquidityRequest): Promise<_122.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _122.QueryPoolsWithFilterRequest): Promise<_122.QueryPoolsWithFilterResponse>;
                        pool(request: _122.QueryPoolRequest): Promise<_122.QueryPoolResponse>;
                        poolType(request: _122.QueryPoolTypeRequest): Promise<_122.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _122.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_122.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _122.QueryCalcJoinPoolSharesRequest): Promise<_122.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _122.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_122.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _122.QueryPoolParamsRequest): Promise<_122.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _122.QueryTotalPoolLiquidityRequest): Promise<_122.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _122.QueryTotalSharesRequest): Promise<_122.QueryTotalSharesResponse>;
                        spotPrice(request: _122.QuerySpotPriceRequest): Promise<_122.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _122.QuerySwapExactAmountInRequest): Promise<_122.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _122.QuerySwapExactAmountOutRequest): Promise<_122.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _127.QuerySpotPriceRequest): Promise<_127.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _130.ParamsRequest): Promise<_130.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _134.ModuleToDistributeCoinsRequest): Promise<_134.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _134.GaugeByIDRequest): Promise<_134.GaugeByIDResponse>;
                    gauges(request?: _134.GaugesRequest): Promise<_134.GaugesResponse>;
                    activeGauges(request?: _134.ActiveGaugesRequest): Promise<_134.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _134.ActiveGaugesPerDenomRequest): Promise<_134.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _134.UpcomingGaugesRequest): Promise<_134.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _134.UpcomingGaugesPerDenomRequest): Promise<_134.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _134.RewardsEstRequest): Promise<_134.RewardsEstResponse>;
                    lockableDurations(request?: _134.QueryLockableDurationsRequest): Promise<_134.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _139.ModuleBalanceRequest): Promise<_139.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _139.ModuleLockedAmountRequest): Promise<_139.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _139.AccountUnlockableCoinsRequest): Promise<_139.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _139.AccountUnlockingCoinsRequest): Promise<_139.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _139.AccountLockedCoinsRequest): Promise<_139.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _139.AccountLockedPastTimeRequest): Promise<_139.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _139.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_139.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _139.AccountUnlockedBeforeTimeRequest): Promise<_139.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _139.AccountLockedPastTimeDenomRequest): Promise<_139.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _139.LockedDenomRequest): Promise<_139.LockedDenomResponse>;
                    lockedByID(request: _139.LockedRequest): Promise<_139.LockedResponse>;
                    nextLockID(request?: _139.NextLockIDRequest): Promise<_139.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _139.SyntheticLockupsByLockupIDRequest): Promise<_139.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _139.AccountLockedLongerDurationRequest): Promise<_139.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _139.AccountLockedDurationRequest): Promise<_139.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _139.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_139.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _139.AccountLockedLongerDurationDenomRequest): Promise<_139.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                        epochProvisions(request?: _143.QueryEpochProvisionsRequest): Promise<_143.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _147.QueryGaugeIdsRequest): Promise<_147.QueryGaugeIdsResponse>;
                        distrInfo(request?: _147.QueryDistrInfoRequest): Promise<_147.QueryDistrInfoResponse>;
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                        lockableDurations(request?: _147.QueryLockableDurationsRequest): Promise<_147.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _147.QueryIncentivizedPoolsRequest): Promise<_147.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _147.QueryExternalIncentiveGaugesRequest): Promise<_147.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _150.ParamsRequest): Promise<_150.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _150.EstimateSwapExactAmountInRequest): Promise<_150.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _150.EstimateSinglePoolSwapExactAmountInRequest): Promise<_150.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _150.EstimateSwapExactAmountOutRequest): Promise<_150.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _150.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_150.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _150.NumPoolsRequest): Promise<_150.NumPoolsResponse>;
                        pool(request: _150.PoolRequest): Promise<_150.PoolResponse>;
                        allPools(request: _150.AllPoolsRequest): Promise<_150.AllPoolsResponse>;
                        spotPrice(request: _150.SpotPriceRequest): Promise<_150.SpotPriceResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _157.QueryGetProtoRevNumberOfTradesRequest): Promise<_157.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _157.QueryGetProtoRevProfitsByDenomRequest): Promise<_157.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _157.QueryGetProtoRevAllProfitsRequest): Promise<_157.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _157.QueryGetProtoRevStatisticsByRouteRequest): Promise<_157.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _157.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_157.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _157.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_157.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _157.QueryGetProtoRevAdminAccountRequest): Promise<_157.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _157.QueryGetProtoRevDeveloperAccountRequest): Promise<_157.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _157.QueryGetProtoRevPoolWeightsRequest): Promise<_157.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _157.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_157.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _157.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_157.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _157.QueryGetProtoRevBaseDenomsRequest): Promise<_157.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _157.QueryGetProtoRevEnabledRequest): Promise<_157.QueryGetProtoRevEnabledResponse>;
                    };
                };
                superfluid: {
                    params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
                    assetType(request: _162.AssetTypeRequest): Promise<_162.AssetTypeResponse>;
                    allAssets(request?: _162.AllAssetsRequest): Promise<_162.AllAssetsResponse>;
                    assetMultiplier(request: _162.AssetMultiplierRequest): Promise<_162.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _162.AllIntermediaryAccountsRequest): Promise<_162.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _162.ConnectedIntermediaryAccountRequest): Promise<_162.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _162.QueryTotalDelegationByValidatorForDenomRequest): Promise<_162.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _162.TotalSuperfluidDelegationsRequest): Promise<_162.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _162.SuperfluidDelegationAmountRequest): Promise<_162.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _162.SuperfluidDelegationsByDelegatorRequest): Promise<_162.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _162.SuperfluidUndelegationsByDelegatorRequest): Promise<_162.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _162.SuperfluidDelegationsByValidatorDenomRequest): Promise<_162.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _162.QueryTotalDelegationByDelegatorRequest): Promise<_162.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _162.QueryUnpoolWhitelistRequest): Promise<_162.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _168.QueryDenomAuthorityMetadataRequest): Promise<_168.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _168.QueryDenomsFromCreatorRequest): Promise<_168.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _168.QueryBeforeSendHookAddressRequest): Promise<_168.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _171.ParamsRequest): Promise<_171.ParamsResponse>;
                        arithmeticTwap(request: _171.ArithmeticTwapRequest): Promise<_171.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _171.ArithmeticTwapToNowRequest): Promise<_171.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _171.GeometricTwapRequest): Promise<_171.GeometricTwapResponse>;
                        geometricTwapToNow(request: _171.GeometricTwapToNowRequest): Promise<_171.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _176.QueryFeeTokensRequest): Promise<_176.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _176.QueryDenomSpotPriceRequest): Promise<_176.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _176.QueryDenomPoolIdRequest): Promise<_176.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _176.QueryBaseDenomRequest): Promise<_176.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _177.UserValidatorPreferencesRequest): Promise<_177.UserValidatorPreferencesResponse>;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/pool-model/query.lcd").LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _289.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _290.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _291.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _292.LCDQueryClient;
                    v2: _293.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _294.LCDQueryClient;
                };
                incentives: _295.LCDQueryClient;
                lockup: _296.LCDQueryClient;
                mint: {
                    v1beta1: _297.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _298.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _299.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _300.LCDQueryClient;
                };
                superfluid: _301.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _302.LCDQueryClient;
                };
                twap: {
                    v1beta1: _303.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _304.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _305.LCDQueryClient;
                };
            };
        }>;
    };
}
