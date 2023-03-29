import * as _92 from "./accum/v1beta1/accum";
import * as _93 from "./concentrated-liquidity/params";
import * as _94 from "./cosmwasmpool/v1beta1/genesis";
import * as _95 from "./cosmwasmpool/v1beta1/model/pool";
import * as _96 from "./cosmwasmpool/v1beta1/model/tx";
import * as _97 from "./cosmwasmpool/v1beta1/query";
import * as _99 from "./downtime-detector/v1beta1/downtime_duration";
import * as _100 from "./downtime-detector/v1beta1/genesis";
import * as _101 from "./downtime-detector/v1beta1/query";
import * as _102 from "./epochs/genesis";
import * as _103 from "./epochs/query";
import * as _104 from "./gamm/pool-models/balancer/balancerPool";
import * as _105 from "./gamm/v1beta1/genesis";
import * as _106 from "./gamm/v1beta1/gov";
import * as _107 from "./gamm/v1beta1/query";
import * as _108 from "./gamm/v1beta1/tx";
import * as _109 from "./gamm/pool-models/balancer/tx/tx";
import * as _110 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _111 from "./gamm/pool-models/stableswap/tx";
import * as _112 from "./gamm/v2/query";
import * as _113 from "./ibc-rate-limit/v1beta1/genesis";
import * as _114 from "./ibc-rate-limit/v1beta1/params";
import * as _115 from "./ibc-rate-limit/v1beta1/query";
import * as _116 from "./incentives/gauge";
import * as _117 from "./incentives/genesis";
import * as _118 from "./incentives/params";
import * as _119 from "./incentives/query";
import * as _120 from "./incentives/tx";
import * as _121 from "./lockup/genesis";
import * as _122 from "./lockup/lock";
import * as _123 from "./lockup/params";
import * as _124 from "./lockup/query";
import * as _125 from "./lockup/tx";
import * as _126 from "./mint/v1beta1/genesis";
import * as _127 from "./mint/v1beta1/mint";
import * as _128 from "./mint/v1beta1/query";
import * as _129 from "./pool-incentives/v1beta1/genesis";
import * as _130 from "./pool-incentives/v1beta1/gov";
import * as _131 from "./pool-incentives/v1beta1/incentives";
import * as _132 from "./pool-incentives/v1beta1/query";
import * as _133 from "./poolmanager/v1beta1/genesis";
import * as _134 from "./poolmanager/v1beta1/module_route";
import * as _135 from "./poolmanager/v1beta1/query";
import * as _136 from "./poolmanager/v1beta1/swap_route";
import * as _137 from "./poolmanager/v1beta1/tx";
import * as _138 from "./protorev/v1beta1/genesis";
import * as _139 from "./protorev/v1beta1/gov";
import * as _140 from "./protorev/v1beta1/params";
import * as _141 from "./protorev/v1beta1/protorev";
import * as _142 from "./protorev/v1beta1/query";
import * as _143 from "./protorev/v1beta1/tx";
import * as _144 from "./sumtree/v1beta1/tree";
import * as _145 from "./superfluid/genesis";
import * as _146 from "./superfluid/params";
import * as _147 from "./superfluid/query";
import * as _148 from "./superfluid/superfluid";
import * as _149 from "./superfluid/tx";
import * as _150 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _151 from "./tokenfactory/v1beta1/genesis";
import * as _152 from "./tokenfactory/v1beta1/params";
import * as _153 from "./tokenfactory/v1beta1/query";
import * as _154 from "./tokenfactory/v1beta1/tx";
import * as _155 from "./twap/v1beta1/genesis";
import * as _156 from "./twap/v1beta1/query";
import * as _157 from "./twap/v1beta1/twap_record";
import * as _158 from "./txfees/v1beta1/feetoken";
import * as _159 from "./txfees/v1beta1/genesis";
import * as _160 from "./txfees/v1beta1/gov";
import * as _161 from "./txfees/v1beta1/query";
import * as _162 from "./valset-pref/v1beta1/query";
import * as _163 from "./valset-pref/v1beta1/state";
import * as _164 from "./valset-pref/v1beta1/tx";
import * as _252 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _253 from "./downtime-detector/v1beta1/query.lcd";
import * as _254 from "./epochs/query.lcd";
import * as _255 from "./gamm/v1beta1/query.lcd";
import * as _256 from "./gamm/v2/query.lcd";
import * as _257 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _258 from "./incentives/query.lcd";
import * as _259 from "./lockup/query.lcd";
import * as _260 from "./mint/v1beta1/query.lcd";
import * as _261 from "./pool-incentives/v1beta1/query.lcd";
import * as _262 from "./poolmanager/v1beta1/query.lcd";
import * as _263 from "./protorev/v1beta1/query.lcd";
import * as _264 from "./superfluid/query.lcd";
import * as _265 from "./tokenfactory/v1beta1/query.lcd";
import * as _266 from "./twap/v1beta1/query.lcd";
import * as _267 from "./txfees/v1beta1/query.lcd";
import * as _268 from "./valset-pref/v1beta1/query.lcd";
import * as _270 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _271 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _272 from "./epochs/query.rpc.Query";
import * as _273 from "./gamm/v1beta1/query.rpc.Query";
import * as _274 from "./gamm/v2/query.rpc.Query";
import * as _275 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _276 from "./incentives/query.rpc.Query";
import * as _277 from "./lockup/query.rpc.Query";
import * as _278 from "./mint/v1beta1/query.rpc.Query";
import * as _279 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _280 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _281 from "./protorev/v1beta1/query.rpc.Query";
import * as _282 from "./superfluid/query.rpc.Query";
import * as _283 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _284 from "./twap/v1beta1/query.rpc.Query";
import * as _285 from "./txfees/v1beta1/query.rpc.Query";
import * as _286 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _288 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _289 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _290 from "./gamm/v1beta1/tx.rpc.msg";
import * as _291 from "./incentives/tx.rpc.msg";
import * as _292 from "./lockup/tx.rpc.msg";
import * as _293 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _294 from "./protorev/v1beta1/tx.rpc.msg";
import * as _295 from "./superfluid/tx.rpc.msg";
import * as _296 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _297 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                encode(message: _92.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.AccumulatorContent;
                fromPartial(object: Partial<_92.AccumulatorContent>): _92.AccumulatorContent;
            };
            Options: {
                encode(_: _92.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Options;
                fromPartial(_: Partial<_92.Options>): _92.Options;
            };
            Record: {
                encode(message: _92.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Record;
                fromPartial(object: Partial<_92.Record>): _92.Record;
            };
        };
    }
    const concentratedliquidity: {
        Params: {
            encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
            fromPartial(object: Partial<_93.Params>): _93.Params;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.ParamsRequest): Promise<_97.ParamsResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            ParamsRequest: {
                encode(_: _97.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ParamsRequest;
                fromPartial(_: Partial<_97.ParamsRequest>): _97.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _97.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ParamsResponse;
                fromPartial(object: Partial<_97.ParamsResponse>): _97.ParamsResponse;
            };
            MsgCreateCosmWasmPool: {
                encode(message: _96.MsgCreateCosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_96.MsgCreateCosmWasmPool>): _96.MsgCreateCosmWasmPool;
            };
            MsgCreateCosmWasmPoolResponse: {
                encode(message: _96.MsgCreateCosmWasmPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_96.MsgCreateCosmWasmPoolResponse>): _96.MsgCreateCosmWasmPoolResponse;
            };
            CosmWasmPool: {
                encode(message: _95.CosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CosmWasmPool;
                fromPartial(object: Partial<_95.CosmWasmPool>): _95.CosmWasmPool;
            };
            Params: {
                encode(_: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
                fromPartial(_: Partial<_94.Params>): _94.Params;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _101.RecoveredSinceDowntimeOfLengthRequest): Promise<_101.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _101.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_101.RecoveredSinceDowntimeOfLengthRequest>): _101.RecoveredSinceDowntimeOfLengthRequest;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _101.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_101.RecoveredSinceDowntimeOfLengthResponse>): _101.RecoveredSinceDowntimeOfLengthResponse;
            };
            GenesisDowntimeEntry: {
                encode(message: _100.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisDowntimeEntry;
                fromPartial(object: Partial<_100.GenesisDowntimeEntry>): _100.GenesisDowntimeEntry;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
            };
            downtimeFromJSON(object: any): _99.Downtime;
            downtimeToJSON(object: _99.Downtime): string;
            Downtime: typeof _99.Downtime;
            DowntimeSDKType: typeof _99.DowntimeSDKType;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _103.QueryEpochsInfoRequest): Promise<_103.QueryEpochsInfoResponse>;
                currentEpoch(request: _103.QueryCurrentEpochRequest): Promise<_103.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _103.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_103.QueryEpochsInfoRequest>): _103.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _103.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_103.QueryEpochsInfoResponse>): _103.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _103.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_103.QueryCurrentEpochRequest>): _103.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _103.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_103.QueryCurrentEpochResponse>): _103.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _102.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EpochInfo;
                fromPartial(object: Partial<_102.EpochInfo>): _102.EpochInfo;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _107.QueryPoolsRequest): Promise<_107.QueryPoolsResponse>;
                numPools(request?: _107.QueryNumPoolsRequest): Promise<_107.QueryNumPoolsResponse>;
                totalLiquidity(request?: _107.QueryTotalLiquidityRequest): Promise<_107.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _107.QueryPoolsWithFilterRequest): Promise<_107.QueryPoolsWithFilterResponse>;
                pool(request: _107.QueryPoolRequest): Promise<_107.QueryPoolResponse>;
                poolType(request: _107.QueryPoolTypeRequest): Promise<_107.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _107.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_107.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _107.QueryCalcJoinPoolSharesRequest): Promise<_107.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _107.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_107.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _107.QueryPoolParamsRequest): Promise<_107.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _107.QueryTotalPoolLiquidityRequest): Promise<_107.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _107.QueryTotalSharesRequest): Promise<_107.QueryTotalSharesResponse>;
                spotPrice(request: _107.QuerySpotPriceRequest): Promise<_107.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _107.QuerySwapExactAmountInRequest): Promise<_107.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _107.QuerySwapExactAmountOutRequest): Promise<_107.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _108.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _108.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _108.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _108.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _108.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _108.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _108.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _108.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _108.MsgJoinPool): {
                        typeUrl: string;
                        value: _108.MsgJoinPool;
                    };
                    exitPool(value: _108.MsgExitPool): {
                        typeUrl: string;
                        value: _108.MsgExitPool;
                    };
                    swapExactAmountIn(value: _108.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _108.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _108.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _108.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _108.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _108.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _108.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _108.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _108.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _108.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _108.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _108.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _108.MsgJoinPool): {
                        typeUrl: string;
                        value: _108.MsgJoinPool;
                    };
                    exitPool(value: _108.MsgExitPool): {
                        typeUrl: string;
                        value: _108.MsgExitPool;
                    };
                    swapExactAmountIn(value: _108.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _108.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _108.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _108.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _108.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _108.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _108.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _108.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _108.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _108.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _108.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _108.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _108.MsgJoinPool) => {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _108.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _108.MsgExitPool) => {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _108.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _108.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _108.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _108.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _108.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _108.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    }) => _108.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _108.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    }) => _108.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _108.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    }) => _108.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _108.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    }) => _108.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _108.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinPool;
                fromPartial(object: Partial<_108.MsgJoinPool>): _108.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _108.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinPoolResponse;
                fromPartial(object: Partial<_108.MsgJoinPoolResponse>): _108.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _108.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitPool;
                fromPartial(object: Partial<_108.MsgExitPool>): _108.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _108.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitPoolResponse;
                fromPartial(object: Partial<_108.MsgExitPoolResponse>): _108.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _108.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_108.MsgSwapExactAmountIn>): _108.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _108.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_108.MsgSwapExactAmountInResponse>): _108.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _108.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_108.MsgSwapExactAmountOut>): _108.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _108.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_108.MsgSwapExactAmountOutResponse>): _108.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _108.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_108.MsgJoinSwapExternAmountIn>): _108.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _108.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_108.MsgJoinSwapExternAmountInResponse>): _108.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _108.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_108.MsgJoinSwapShareAmountOut>): _108.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _108.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_108.MsgJoinSwapShareAmountOutResponse>): _108.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _108.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_108.MsgExitSwapShareAmountIn>): _108.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _108.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_108.MsgExitSwapShareAmountInResponse>): _108.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _108.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_108.MsgExitSwapExternAmountOut>): _108.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _108.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_108.MsgExitSwapExternAmountOutResponse>): _108.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _107.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolRequest;
                fromPartial(object: Partial<_107.QueryPoolRequest>): _107.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _107.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolResponse;
                fromPartial(object: Partial<_107.QueryPoolResponse>): _107.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _107.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolsRequest;
                fromPartial(object: Partial<_107.QueryPoolsRequest>): _107.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _107.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolsResponse;
                fromPartial(object: Partial<_107.QueryPoolsResponse>): _107.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _107.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryNumPoolsRequest;
                fromPartial(_: Partial<_107.QueryNumPoolsRequest>): _107.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _107.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryNumPoolsResponse;
                fromPartial(object: Partial<_107.QueryNumPoolsResponse>): _107.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _107.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolTypeRequest;
                fromPartial(object: Partial<_107.QueryPoolTypeRequest>): _107.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _107.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolTypeResponse;
                fromPartial(object: Partial<_107.QueryPoolTypeResponse>): _107.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _107.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_107.QueryCalcJoinPoolSharesRequest>): _107.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _107.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_107.QueryCalcJoinPoolSharesResponse>): _107.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _107.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_107.QueryCalcExitPoolCoinsFromSharesRequest>): _107.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _107.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_107.QueryCalcExitPoolCoinsFromSharesResponse>): _107.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _107.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolParamsRequest;
                fromPartial(object: Partial<_107.QueryPoolParamsRequest>): _107.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _107.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolParamsResponse;
                fromPartial(object: Partial<_107.QueryPoolParamsResponse>): _107.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _107.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_107.QueryTotalPoolLiquidityRequest>): _107.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _107.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_107.QueryTotalPoolLiquidityResponse>): _107.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _107.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalSharesRequest;
                fromPartial(object: Partial<_107.QueryTotalSharesRequest>): _107.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _107.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalSharesResponse;
                fromPartial(object: Partial<_107.QueryTotalSharesResponse>): _107.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _107.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_107.QueryCalcJoinPoolNoSwapSharesRequest>): _107.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _107.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_107.QueryCalcJoinPoolNoSwapSharesResponse>): _107.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _107.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySpotPriceRequest;
                fromPartial(object: Partial<_107.QuerySpotPriceRequest>): _107.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _107.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_107.QueryPoolsWithFilterRequest>): _107.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _107.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_107.QueryPoolsWithFilterResponse>): _107.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _107.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySpotPriceResponse;
                fromPartial(object: Partial<_107.QuerySpotPriceResponse>): _107.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _107.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_107.QuerySwapExactAmountInRequest>): _107.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _107.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_107.QuerySwapExactAmountInResponse>): _107.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _107.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_107.QuerySwapExactAmountOutRequest>): _107.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _107.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_107.QuerySwapExactAmountOutResponse>): _107.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _107.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_107.QueryTotalLiquidityRequest>): _107.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _107.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_107.QueryTotalLiquidityResponse>): _107.QueryTotalLiquidityResponse;
            };
            ReplaceMigrationRecordsProposal: {
                encode(message: _106.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_106.ReplaceMigrationRecordsProposal>): _106.ReplaceMigrationRecordsProposal;
            };
            UpdateMigrationRecordsProposal: {
                encode(message: _106.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_106.UpdateMigrationRecordsProposal>): _106.UpdateMigrationRecordsProposal;
            };
            Params: {
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                fromPartial(object: Partial<_105.Params>): _105.Params;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
            };
            MigrationRecords: {
                encode(message: _105.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MigrationRecords;
                fromPartial(object: Partial<_105.MigrationRecords>): _105.MigrationRecords;
            };
            BalancerToConcentratedPoolLink: {
                encode(message: _105.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_105.BalancerToConcentratedPoolLink>): _105.BalancerToConcentratedPoolLink;
            };
            SmoothWeightChangeParams: {
                encode(message: _104.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SmoothWeightChangeParams;
                fromPartial(object: Partial<_104.SmoothWeightChangeParams>): _104.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _104.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PoolParams;
                fromPartial(object: Partial<_104.PoolParams>): _104.PoolParams;
            };
            PoolAsset: {
                encode(message: _104.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PoolAsset;
                fromPartial(object: Partial<_104.PoolAsset>): _104.PoolAsset;
            };
            Pool: {
                encode(message: _104.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Pool;
                fromPartial(object: Partial<_104.Pool>): _104.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _288.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _109.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _109.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _109.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _109.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _109.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _109.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _109.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _109.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _109.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _109.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _109.MsgCreateBalancerPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, pool_params, pool_assets, future_pool_governor }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            }) => _109.MsgCreateBalancerPool;
                        };
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
                            aminoType: string;
                            toAmino: ({ sender, sharesToMigrate }: _109.MsgMigrateSharesToFullRangeConcentratedPosition) => {
                                sender: string;
                                shares_to_migrate: {
                                    denom: string;
                                    amount: string;
                                };
                            };
                            fromAmino: ({ sender, shares_to_migrate }: {
                                sender: string;
                                shares_to_migrate: {
                                    denom: string;
                                    amount: string;
                                };
                            }) => _109.MsgMigrateSharesToFullRangeConcentratedPosition;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _109.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_109.MsgCreateBalancerPool>): _109.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _109.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_109.MsgCreateBalancerPoolResponse>): _109.MsgCreateBalancerPoolResponse;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPosition: {
                        encode(message: _109.MsgMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromPartial(object: Partial<_109.MsgMigrateSharesToFullRangeConcentratedPosition>): _109.MsgMigrateSharesToFullRangeConcentratedPosition;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
                        encode(message: _109.MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromPartial(object: Partial<_109.MsgMigrateSharesToFullRangeConcentratedPositionResponse>): _109.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _289.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _111.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _111.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _111.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _111.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _111.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _111.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _111.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _111.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _111.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _111.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _111.MsgCreateStableswapPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: import("long")[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            };
                            fromAmino: ({ sender, pool_params, initial_pool_liquidity, scaling_factors, future_pool_governor, scaling_factor_controller }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: import("long")[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            }) => _111.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _111.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            }) => _111.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _111.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_111.MsgCreateStableswapPool>): _111.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _111.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_111.MsgCreateStableswapPoolResponse>): _111.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _111.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_111.MsgStableSwapAdjustScalingFactors>): _111.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _111.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_111.MsgStableSwapAdjustScalingFactorsResponse>): _111.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _110.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PoolParams;
                        fromPartial(object: Partial<_110.PoolParams>): _110.PoolParams;
                    };
                    Pool: {
                        encode(message: _110.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Pool;
                        fromPartial(object: Partial<_110.Pool>): _110.Pool;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _112.QuerySpotPriceRequest): Promise<_112.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            QuerySpotPriceRequest: {
                encode(message: _112.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QuerySpotPriceRequest;
                fromPartial(object: Partial<_112.QuerySpotPriceRequest>): _112.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _112.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QuerySpotPriceResponse;
                fromPartial(object: Partial<_112.QuerySpotPriceResponse>): _112.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _115.ParamsRequest): Promise<_115.ParamsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            ParamsRequest: {
                encode(_: _115.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ParamsRequest;
                fromPartial(_: Partial<_115.ParamsRequest>): _115.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _115.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ParamsResponse;
                fromPartial(object: Partial<_115.ParamsResponse>): _115.ParamsResponse;
            };
            Params: {
                encode(message: _114.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Params;
                fromPartial(object: Partial<_114.Params>): _114.Params;
            };
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _291.MsgClientImpl;
        QueryClientImpl: typeof _276.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _119.ModuleToDistributeCoinsRequest): Promise<_119.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _119.GaugeByIDRequest): Promise<_119.GaugeByIDResponse>;
            gauges(request?: _119.GaugesRequest): Promise<_119.GaugesResponse>;
            activeGauges(request?: _119.ActiveGaugesRequest): Promise<_119.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _119.ActiveGaugesPerDenomRequest): Promise<_119.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _119.UpcomingGaugesRequest): Promise<_119.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _119.UpcomingGaugesPerDenomRequest): Promise<_119.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _119.RewardsEstRequest): Promise<_119.RewardsEstResponse>;
            lockableDurations(request?: _119.QueryLockableDurationsRequest): Promise<_119.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _258.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _120.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _120.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _120.MsgCreateGauge): {
                    typeUrl: string;
                    value: _120.MsgCreateGauge;
                };
                addToGauge(value: _120.MsgAddToGauge): {
                    typeUrl: string;
                    value: _120.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _120.MsgCreateGauge): {
                    typeUrl: string;
                    value: _120.MsgCreateGauge;
                };
                addToGauge(value: _120.MsgAddToGauge): {
                    typeUrl: string;
                    value: _120.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _120.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                }) => _120.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _120.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _120.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _120.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateGauge;
            fromPartial(object: Partial<_120.MsgCreateGauge>): _120.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _120.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_120.MsgCreateGaugeResponse>): _120.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _120.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgAddToGauge;
            fromPartial(object: Partial<_120.MsgAddToGauge>): _120.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _120.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_120.MsgAddToGaugeResponse>): _120.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _119.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_119.ModuleToDistributeCoinsRequest>): _119.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _119.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_119.ModuleToDistributeCoinsResponse>): _119.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _119.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GaugeByIDRequest;
            fromPartial(object: Partial<_119.GaugeByIDRequest>): _119.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _119.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GaugeByIDResponse;
            fromPartial(object: Partial<_119.GaugeByIDResponse>): _119.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _119.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GaugesRequest;
            fromPartial(object: Partial<_119.GaugesRequest>): _119.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _119.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GaugesResponse;
            fromPartial(object: Partial<_119.GaugesResponse>): _119.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _119.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ActiveGaugesRequest;
            fromPartial(object: Partial<_119.ActiveGaugesRequest>): _119.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _119.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ActiveGaugesResponse;
            fromPartial(object: Partial<_119.ActiveGaugesResponse>): _119.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _119.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_119.ActiveGaugesPerDenomRequest>): _119.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _119.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_119.ActiveGaugesPerDenomResponse>): _119.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _119.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpcomingGaugesRequest;
            fromPartial(object: Partial<_119.UpcomingGaugesRequest>): _119.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _119.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpcomingGaugesResponse;
            fromPartial(object: Partial<_119.UpcomingGaugesResponse>): _119.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _119.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_119.UpcomingGaugesPerDenomRequest>): _119.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _119.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_119.UpcomingGaugesPerDenomResponse>): _119.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _119.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RewardsEstRequest;
            fromPartial(object: Partial<_119.RewardsEstRequest>): _119.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _119.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RewardsEstResponse;
            fromPartial(object: Partial<_119.RewardsEstResponse>): _119.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _119.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_119.QueryLockableDurationsRequest>): _119.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _119.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_119.QueryLockableDurationsResponse>): _119.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _118.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Params;
            fromPartial(object: Partial<_118.Params>): _118.Params;
        };
        GenesisState: {
            encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
            fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
        };
        Gauge: {
            encode(message: _116.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Gauge;
            fromPartial(object: Partial<_116.Gauge>): _116.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _116.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.LockableDurationsInfo;
            fromPartial(object: Partial<_116.LockableDurationsInfo>): _116.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _292.MsgClientImpl;
        QueryClientImpl: typeof _277.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _124.ModuleBalanceRequest): Promise<_124.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _124.ModuleLockedAmountRequest): Promise<_124.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _124.AccountUnlockableCoinsRequest): Promise<_124.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _124.AccountUnlockingCoinsRequest): Promise<_124.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _124.AccountLockedCoinsRequest): Promise<_124.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _124.AccountLockedPastTimeRequest): Promise<_124.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _124.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_124.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _124.AccountUnlockedBeforeTimeRequest): Promise<_124.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _124.AccountLockedPastTimeDenomRequest): Promise<_124.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _124.LockedDenomRequest): Promise<_124.LockedDenomResponse>;
            lockedByID(request: _124.LockedRequest): Promise<_124.LockedResponse>;
            nextLockID(request?: _124.NextLockIDRequest): Promise<_124.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _124.SyntheticLockupsByLockupIDRequest): Promise<_124.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _124.AccountLockedLongerDurationRequest): Promise<_124.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _124.AccountLockedDurationRequest): Promise<_124.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _124.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_124.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _124.AccountLockedLongerDurationDenomRequest): Promise<_124.AccountLockedLongerDurationDenomResponse>;
            params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _259.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _125.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _125.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _125.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _125.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _125.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _125.MsgLockTokens): {
                    typeUrl: string;
                    value: _125.MsgLockTokens;
                };
                beginUnlockingAll(value: _125.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _125.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _125.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _125.MsgBeginUnlocking;
                };
                extendLockup(value: _125.MsgExtendLockup): {
                    typeUrl: string;
                    value: _125.MsgExtendLockup;
                };
                forceUnlock(value: _125.MsgForceUnlock): {
                    typeUrl: string;
                    value: _125.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _125.MsgLockTokens): {
                    typeUrl: string;
                    value: _125.MsgLockTokens;
                };
                beginUnlockingAll(value: _125.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _125.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _125.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _125.MsgBeginUnlocking;
                };
                extendLockup(value: _125.MsgExtendLockup): {
                    typeUrl: string;
                    value: _125.MsgExtendLockup;
                };
                forceUnlock(value: _125.MsgForceUnlock): {
                    typeUrl: string;
                    value: _125.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _125.MsgLockTokens) => {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _125.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _125.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _125.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _125.MsgBeginUnlocking) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _125.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _125.MsgExtendLockup) => {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromAmino: ({ owner, ID, duration }: {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                }) => _125.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _125.MsgForceUnlock) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _125.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _125.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgLockTokens;
            fromPartial(object: Partial<_125.MsgLockTokens>): _125.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _125.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgLockTokensResponse;
            fromPartial(object: Partial<_125.MsgLockTokensResponse>): _125.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _125.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_125.MsgBeginUnlockingAll>): _125.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _125.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_125.MsgBeginUnlockingAllResponse>): _125.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _125.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgBeginUnlocking;
            fromPartial(object: Partial<_125.MsgBeginUnlocking>): _125.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _125.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_125.MsgBeginUnlockingResponse>): _125.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _125.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgExtendLockup;
            fromPartial(object: Partial<_125.MsgExtendLockup>): _125.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _125.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgExtendLockupResponse;
            fromPartial(object: Partial<_125.MsgExtendLockupResponse>): _125.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _125.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgForceUnlock;
            fromPartial(object: Partial<_125.MsgForceUnlock>): _125.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _125.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgForceUnlockResponse;
            fromPartial(object: Partial<_125.MsgForceUnlockResponse>): _125.MsgForceUnlockResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _124.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModuleBalanceRequest;
            fromPartial(_: Partial<_124.ModuleBalanceRequest>): _124.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _124.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModuleBalanceResponse;
            fromPartial(object: Partial<_124.ModuleBalanceResponse>): _124.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _124.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_124.ModuleLockedAmountRequest>): _124.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _124.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_124.ModuleLockedAmountResponse>): _124.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _124.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_124.AccountUnlockableCoinsRequest>): _124.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _124.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_124.AccountUnlockableCoinsResponse>): _124.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _124.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_124.AccountUnlockingCoinsRequest>): _124.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _124.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_124.AccountUnlockingCoinsResponse>): _124.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _124.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_124.AccountLockedCoinsRequest>): _124.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _124.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_124.AccountLockedCoinsResponse>): _124.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _124.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_124.AccountLockedPastTimeRequest>): _124.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _124.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_124.AccountLockedPastTimeResponse>): _124.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _124.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_124.AccountLockedPastTimeNotUnlockingOnlyRequest>): _124.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _124.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_124.AccountLockedPastTimeNotUnlockingOnlyResponse>): _124.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _124.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_124.AccountUnlockedBeforeTimeRequest>): _124.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _124.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_124.AccountUnlockedBeforeTimeResponse>): _124.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _124.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_124.AccountLockedPastTimeDenomRequest>): _124.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _124.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_124.AccountLockedPastTimeDenomResponse>): _124.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _124.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.LockedDenomRequest;
            fromPartial(object: Partial<_124.LockedDenomRequest>): _124.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _124.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.LockedDenomResponse;
            fromPartial(object: Partial<_124.LockedDenomResponse>): _124.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _124.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.LockedRequest;
            fromPartial(object: Partial<_124.LockedRequest>): _124.LockedRequest;
        };
        LockedResponse: {
            encode(message: _124.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.LockedResponse;
            fromPartial(object: Partial<_124.LockedResponse>): _124.LockedResponse;
        };
        NextLockIDRequest: {
            encode(_: _124.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextLockIDRequest;
            fromPartial(_: Partial<_124.NextLockIDRequest>): _124.NextLockIDRequest;
        };
        NextLockIDResponse: {
            encode(message: _124.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextLockIDResponse;
            fromPartial(object: Partial<_124.NextLockIDResponse>): _124.NextLockIDResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _124.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_124.SyntheticLockupsByLockupIDRequest>): _124.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _124.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_124.SyntheticLockupsByLockupIDResponse>): _124.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _124.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationRequest>): _124.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _124.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationResponse>): _124.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _124.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedDurationRequest;
            fromPartial(object: Partial<_124.AccountLockedDurationRequest>): _124.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _124.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedDurationResponse;
            fromPartial(object: Partial<_124.AccountLockedDurationResponse>): _124.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _124.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _124.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _124.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _124.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _124.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationDenomRequest>): _124.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _124.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_124.AccountLockedLongerDurationDenomResponse>): _124.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsRequest;
            fromPartial(_: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsResponse;
            fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
        };
        Params: {
            encode(message: _123.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Params;
            fromPartial(object: Partial<_123.Params>): _123.Params;
        };
        lockQueryTypeFromJSON(object: any): _122.LockQueryType;
        lockQueryTypeToJSON(object: _122.LockQueryType): string;
        LockQueryType: typeof _122.LockQueryType;
        LockQueryTypeSDKType: typeof _122.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _122.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PeriodLock;
            fromPartial(object: Partial<_122.PeriodLock>): _122.PeriodLock;
        };
        QueryCondition: {
            encode(message: _122.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCondition;
            fromPartial(object: Partial<_122.QueryCondition>): _122.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _122.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SyntheticLock;
            fromPartial(object: Partial<_122.SyntheticLock>): _122.SyntheticLock;
        };
        GenesisState: {
            encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
            fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                epochProvisions(request?: _128.QueryEpochProvisionsRequest): Promise<_128.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsRequest;
                fromPartial(_: Partial<_128.QueryParamsRequest>): _128.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsResponse;
                fromPartial(object: Partial<_128.QueryParamsResponse>): _128.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _128.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_128.QueryEpochProvisionsRequest>): _128.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _128.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_128.QueryEpochProvisionsResponse>): _128.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _127.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Minter;
                fromPartial(object: Partial<_127.Minter>): _127.Minter;
            };
            WeightedAddress: {
                encode(message: _127.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.WeightedAddress;
                fromPartial(object: Partial<_127.WeightedAddress>): _127.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _127.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.DistributionProportions;
                fromPartial(object: Partial<_127.DistributionProportions>): _127.DistributionProportions;
            };
            Params: {
                encode(message: _127.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Params;
                fromPartial(object: Partial<_127.Params>): _127.Params;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _132.QueryGaugeIdsRequest): Promise<_132.QueryGaugeIdsResponse>;
                distrInfo(request?: _132.QueryDistrInfoRequest): Promise<_132.QueryDistrInfoResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                lockableDurations(request?: _132.QueryLockableDurationsRequest): Promise<_132.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _132.QueryIncentivizedPoolsRequest): Promise<_132.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _132.QueryExternalIncentiveGaugesRequest): Promise<_132.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _132.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_132.QueryGaugeIdsRequest>): _132.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _132.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_132.QueryGaugeIdsResponse>): _132.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _132.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_132.QueryGaugeIdsResponse_GaugeIdWithDuration>): _132.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _132.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryDistrInfoRequest;
                fromPartial(_: Partial<_132.QueryDistrInfoRequest>): _132.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _132.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryDistrInfoResponse;
                fromPartial(object: Partial<_132.QueryDistrInfoResponse>): _132.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _132.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_132.QueryLockableDurationsRequest>): _132.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _132.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_132.QueryLockableDurationsResponse>): _132.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _132.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_132.QueryIncentivizedPoolsRequest>): _132.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _132.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.IncentivizedPool;
                fromPartial(object: Partial<_132.IncentivizedPool>): _132.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _132.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_132.QueryIncentivizedPoolsResponse>): _132.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _132.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_132.QueryExternalIncentiveGaugesRequest>): _132.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _132.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_132.QueryExternalIncentiveGaugesResponse>): _132.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _131.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Params;
                fromPartial(object: Partial<_131.Params>): _131.Params;
            };
            LockableDurationsInfo: {
                encode(message: _131.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.LockableDurationsInfo;
                fromPartial(object: Partial<_131.LockableDurationsInfo>): _131.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _131.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.DistrInfo;
                fromPartial(object: Partial<_131.DistrInfo>): _131.DistrInfo;
            };
            DistrRecord: {
                encode(message: _131.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.DistrRecord;
                fromPartial(object: Partial<_131.DistrRecord>): _131.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _131.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PoolToGauge;
                fromPartial(object: Partial<_131.PoolToGauge>): _131.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _131.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PoolToGauges;
                fromPartial(object: Partial<_131.PoolToGauges>): _131.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _130.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_130.ReplacePoolIncentivesProposal>): _130.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _130.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_130.UpdatePoolIncentivesProposal>): _130.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _135.ParamsRequest): Promise<_135.ParamsResponse>;
                estimateSwapExactAmountIn(request: _135.EstimateSwapExactAmountInRequest): Promise<_135.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _135.EstimateSinglePoolSwapExactAmountInRequest): Promise<_135.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _135.EstimateSwapExactAmountOutRequest): Promise<_135.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _135.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_135.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _135.NumPoolsRequest): Promise<_135.NumPoolsResponse>;
                pool(request: _135.PoolRequest): Promise<_135.PoolResponse>;
                allPools(request: _135.AllPoolsRequest): Promise<_135.AllPoolsResponse>;
                spotPrice(request: _135.SpotPriceRequest): Promise<_135.SpotPriceResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _137.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _137.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _137.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _137.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _137.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_137.MsgSwapExactAmountIn>): _137.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _137.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_137.MsgSwapExactAmountInResponse>): _137.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _137.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_137.MsgSwapExactAmountOut>): _137.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _137.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_137.MsgSwapExactAmountOutResponse>): _137.MsgSwapExactAmountOutResponse;
            };
            SwapAmountInRoute: {
                encode(message: _136.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SwapAmountInRoute;
                fromPartial(object: Partial<_136.SwapAmountInRoute>): _136.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _136.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SwapAmountOutRoute;
                fromPartial(object: Partial<_136.SwapAmountOutRoute>): _136.SwapAmountOutRoute;
            };
            ParamsRequest: {
                encode(_: _135.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ParamsRequest;
                fromPartial(_: Partial<_135.ParamsRequest>): _135.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _135.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ParamsResponse;
                fromPartial(object: Partial<_135.ParamsResponse>): _135.ParamsResponse;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _135.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_135.EstimateSwapExactAmountInRequest>): _135.EstimateSwapExactAmountInRequest;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                encode(message: _135.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_135.EstimateSinglePoolSwapExactAmountInRequest>): _135.EstimateSinglePoolSwapExactAmountInRequest;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _135.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_135.EstimateSwapExactAmountInResponse>): _135.EstimateSwapExactAmountInResponse;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _135.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_135.EstimateSwapExactAmountOutRequest>): _135.EstimateSwapExactAmountOutRequest;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                encode(message: _135.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_135.EstimateSinglePoolSwapExactAmountOutRequest>): _135.EstimateSinglePoolSwapExactAmountOutRequest;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _135.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_135.EstimateSwapExactAmountOutResponse>): _135.EstimateSwapExactAmountOutResponse;
            };
            NumPoolsRequest: {
                encode(_: _135.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.NumPoolsRequest;
                fromPartial(_: Partial<_135.NumPoolsRequest>): _135.NumPoolsRequest;
            };
            NumPoolsResponse: {
                encode(message: _135.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.NumPoolsResponse;
                fromPartial(object: Partial<_135.NumPoolsResponse>): _135.NumPoolsResponse;
            };
            PoolRequest: {
                encode(message: _135.PoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PoolRequest;
                fromPartial(object: Partial<_135.PoolRequest>): _135.PoolRequest;
            };
            PoolResponse: {
                encode(message: _135.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PoolResponse;
                fromPartial(object: Partial<_135.PoolResponse>): _135.PoolResponse;
            };
            AllPoolsRequest: {
                encode(message: _135.AllPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AllPoolsRequest;
                fromPartial(object: Partial<_135.AllPoolsRequest>): _135.AllPoolsRequest;
            };
            AllPoolsResponse: {
                encode(message: _135.AllPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AllPoolsResponse;
                fromPartial(object: Partial<_135.AllPoolsResponse>): _135.AllPoolsResponse;
            };
            SpotPriceRequest: {
                encode(message: _135.SpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SpotPriceRequest;
                fromPartial(object: Partial<_135.SpotPriceRequest>): _135.SpotPriceRequest;
            };
            SpotPriceResponse: {
                encode(message: _135.SpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SpotPriceResponse;
                fromPartial(object: Partial<_135.SpotPriceResponse>): _135.SpotPriceResponse;
            };
            poolTypeFromJSON(object: any): _134.PoolType;
            poolTypeToJSON(object: _134.PoolType): string;
            PoolType: typeof _134.PoolType;
            PoolTypeSDKType: typeof _134.PoolTypeSDKType;
            ModuleRoute: {
                encode(message: _134.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ModuleRoute;
                fromPartial(object: Partial<_134.ModuleRoute>): _134.ModuleRoute;
            };
            Params: {
                encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _142.QueryGetProtoRevNumberOfTradesRequest): Promise<_142.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _142.QueryGetProtoRevProfitsByDenomRequest): Promise<_142.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _142.QueryGetProtoRevAllProfitsRequest): Promise<_142.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _142.QueryGetProtoRevStatisticsByRouteRequest): Promise<_142.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _142.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_142.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _142.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_142.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _142.QueryGetProtoRevAdminAccountRequest): Promise<_142.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _142.QueryGetProtoRevDeveloperAccountRequest): Promise<_142.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _142.QueryGetProtoRevPoolWeightsRequest): Promise<_142.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _142.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_142.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _142.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_142.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _142.QueryGetProtoRevBaseDenomsRequest): Promise<_142.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _142.QueryGetProtoRevEnabledRequest): Promise<_142.QueryGetProtoRevEnabledResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _143.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _143.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _143.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _143.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _143.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _143.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _143.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _143.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _143.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _143.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _143.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _143.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _143.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _143.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _143.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _143.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _143.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _143.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _143.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _143.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _143.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _143.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _143.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _143.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _143.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _143.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _143.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _143.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _143.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _143.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: ({ admin, hotRoutes }: _143.MsgSetHotRoutes) => {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    };
                    fromAmino: ({ admin, hot_routes }: {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    }) => _143.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: ({ admin, developerAccount }: _143.MsgSetDeveloperAccount) => {
                        admin: string;
                        developer_account: string;
                    };
                    fromAmino: ({ admin, developer_account }: {
                        admin: string;
                        developer_account: string;
                    }) => _143.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerTx }: _143.MsgSetMaxPoolPointsPerTx) => {
                        admin: string;
                        max_pool_points_per_tx: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_tx }: {
                        admin: string;
                        max_pool_points_per_tx: string;
                    }) => _143.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerBlock }: _143.MsgSetMaxPoolPointsPerBlock) => {
                        admin: string;
                        max_pool_points_per_block: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_block }: {
                        admin: string;
                        max_pool_points_per_block: string;
                    }) => _143.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: ({ admin, poolWeights }: _143.MsgSetPoolWeights) => {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    };
                    fromAmino: ({ admin, pool_weights }: {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    }) => _143.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: ({ admin, baseDenoms }: _143.MsgSetBaseDenoms) => {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    };
                    fromAmino: ({ admin, base_denoms }: {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    }) => _143.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _143.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetHotRoutes;
                fromPartial(object: Partial<_143.MsgSetHotRoutes>): _143.MsgSetHotRoutes;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _143.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_143.MsgSetHotRoutesResponse>): _143.MsgSetHotRoutesResponse;
            };
            MsgSetDeveloperAccount: {
                encode(message: _143.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_143.MsgSetDeveloperAccount>): _143.MsgSetDeveloperAccount;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _143.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_143.MsgSetDeveloperAccountResponse>): _143.MsgSetDeveloperAccountResponse;
            };
            MsgSetPoolWeights: {
                encode(message: _143.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetPoolWeights;
                fromPartial(object: Partial<_143.MsgSetPoolWeights>): _143.MsgSetPoolWeights;
            };
            MsgSetPoolWeightsResponse: {
                encode(_: _143.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_143.MsgSetPoolWeightsResponse>): _143.MsgSetPoolWeightsResponse;
            };
            MsgSetMaxPoolPointsPerTx: {
                encode(message: _143.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_143.MsgSetMaxPoolPointsPerTx>): _143.MsgSetMaxPoolPointsPerTx;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                encode(_: _143.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_143.MsgSetMaxPoolPointsPerTxResponse>): _143.MsgSetMaxPoolPointsPerTxResponse;
            };
            MsgSetMaxPoolPointsPerBlock: {
                encode(message: _143.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_143.MsgSetMaxPoolPointsPerBlock>): _143.MsgSetMaxPoolPointsPerBlock;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                encode(_: _143.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_143.MsgSetMaxPoolPointsPerBlockResponse>): _143.MsgSetMaxPoolPointsPerBlockResponse;
            };
            MsgSetBaseDenoms: {
                encode(message: _143.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetBaseDenoms;
                fromPartial(object: Partial<_143.MsgSetBaseDenoms>): _143.MsgSetBaseDenoms;
            };
            MsgSetBaseDenomsResponse: {
                encode(_: _143.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_143.MsgSetBaseDenomsResponse>): _143.MsgSetBaseDenomsResponse;
            };
            QueryParamsRequest: {
                encode(_: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsRequest;
                fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsResponse;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _142.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevNumberOfTradesRequest>): _142.QueryGetProtoRevNumberOfTradesRequest;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _142.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevNumberOfTradesResponse>): _142.QueryGetProtoRevNumberOfTradesResponse;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _142.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_142.QueryGetProtoRevProfitsByDenomRequest>): _142.QueryGetProtoRevProfitsByDenomRequest;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _142.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevProfitsByDenomResponse>): _142.QueryGetProtoRevProfitsByDenomResponse;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _142.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevAllProfitsRequest>): _142.QueryGetProtoRevAllProfitsRequest;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _142.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevAllProfitsResponse>): _142.QueryGetProtoRevAllProfitsResponse;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                encode(message: _142.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_142.QueryGetProtoRevStatisticsByRouteRequest>): _142.QueryGetProtoRevStatisticsByRouteRequest;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                encode(message: _142.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevStatisticsByRouteResponse>): _142.QueryGetProtoRevStatisticsByRouteResponse;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                encode(_: _142.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevAllRouteStatisticsRequest>): _142.QueryGetProtoRevAllRouteStatisticsRequest;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                encode(message: _142.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevAllRouteStatisticsResponse>): _142.QueryGetProtoRevAllRouteStatisticsResponse;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _142.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevTokenPairArbRoutesRequest>): _142.QueryGetProtoRevTokenPairArbRoutesRequest;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _142.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevTokenPairArbRoutesResponse>): _142.QueryGetProtoRevTokenPairArbRoutesResponse;
            };
            QueryGetProtoRevAdminAccountRequest: {
                encode(_: _142.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevAdminAccountRequest>): _142.QueryGetProtoRevAdminAccountRequest;
            };
            QueryGetProtoRevAdminAccountResponse: {
                encode(message: _142.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevAdminAccountResponse>): _142.QueryGetProtoRevAdminAccountResponse;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                encode(_: _142.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevDeveloperAccountRequest>): _142.QueryGetProtoRevDeveloperAccountRequest;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                encode(message: _142.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevDeveloperAccountResponse>): _142.QueryGetProtoRevDeveloperAccountResponse;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                encode(_: _142.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevPoolWeightsRequest>): _142.QueryGetProtoRevPoolWeightsRequest;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                encode(message: _142.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevPoolWeightsResponse>): _142.QueryGetProtoRevPoolWeightsResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                encode(_: _142.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _142.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                encode(message: _142.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _142.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                encode(_: _142.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _142.QueryGetProtoRevMaxPoolPointsPerTxRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                encode(message: _142.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _142.QueryGetProtoRevMaxPoolPointsPerTxResponse;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                encode(_: _142.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevBaseDenomsRequest>): _142.QueryGetProtoRevBaseDenomsRequest;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                encode(message: _142.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevBaseDenomsResponse>): _142.QueryGetProtoRevBaseDenomsResponse;
            };
            QueryGetProtoRevEnabledRequest: {
                encode(_: _142.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_142.QueryGetProtoRevEnabledRequest>): _142.QueryGetProtoRevEnabledRequest;
            };
            QueryGetProtoRevEnabledResponse: {
                encode(message: _142.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_142.QueryGetProtoRevEnabledResponse>): _142.QueryGetProtoRevEnabledResponse;
            };
            TokenPairArbRoutes: {
                encode(message: _141.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TokenPairArbRoutes;
                fromPartial(object: Partial<_141.TokenPairArbRoutes>): _141.TokenPairArbRoutes;
            };
            Route: {
                encode(message: _141.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Route;
                fromPartial(object: Partial<_141.Route>): _141.Route;
            };
            Trade: {
                encode(message: _141.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Trade;
                fromPartial(object: Partial<_141.Trade>): _141.Trade;
            };
            RouteStatistics: {
                encode(message: _141.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.RouteStatistics;
                fromPartial(object: Partial<_141.RouteStatistics>): _141.RouteStatistics;
            };
            PoolWeights: {
                encode(message: _141.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.PoolWeights;
                fromPartial(object: Partial<_141.PoolWeights>): _141.PoolWeights;
            };
            BaseDenom: {
                encode(message: _141.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.BaseDenom;
                fromPartial(object: Partial<_141.BaseDenom>): _141.BaseDenom;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromPartial(object: Partial<_140.Params>): _140.Params;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _139.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_139.SetProtoRevEnabledProposal>): _139.SetProtoRevEnabledProposal;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _139.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_139.SetProtoRevAdminAccountProposal>): _139.SetProtoRevAdminAccountProposal;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _144.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Node;
                fromPartial(object: Partial<_144.Node>): _144.Node;
            };
            Child: {
                encode(message: _144.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Child;
                fromPartial(object: Partial<_144.Child>): _144.Child;
            };
            Leaf: {
                encode(message: _144.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Leaf;
                fromPartial(object: Partial<_144.Leaf>): _144.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _295.MsgClientImpl;
        QueryClientImpl: typeof _282.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
            assetType(request: _147.AssetTypeRequest): Promise<_147.AssetTypeResponse>;
            allAssets(request?: _147.AllAssetsRequest): Promise<_147.AllAssetsResponse>;
            assetMultiplier(request: _147.AssetMultiplierRequest): Promise<_147.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _147.AllIntermediaryAccountsRequest): Promise<_147.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _147.ConnectedIntermediaryAccountRequest): Promise<_147.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _147.QueryTotalDelegationByValidatorForDenomRequest): Promise<_147.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _147.TotalSuperfluidDelegationsRequest): Promise<_147.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _147.SuperfluidDelegationAmountRequest): Promise<_147.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _147.SuperfluidDelegationsByDelegatorRequest): Promise<_147.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _147.SuperfluidUndelegationsByDelegatorRequest): Promise<_147.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _147.SuperfluidDelegationsByValidatorDenomRequest): Promise<_147.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _147.QueryTotalDelegationByDelegatorRequest): Promise<_147.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _147.QueryUnpoolWhitelistRequest): Promise<_147.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _264.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _149.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _149.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _149.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _149.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _149.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _149.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _149.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _149.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _149.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _149.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _149.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _149.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _149.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _149.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _149.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _149.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _149.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _149.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _149.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _149.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _149.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _149.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _149.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _149.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _149.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _149.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _149.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _149.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _149.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId, coin }: _149.MsgSuperfluidUndelegateAndUnbondLock) => {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, lock_id, coin }: {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                }) => _149.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _149.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _149.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _149.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _149.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: ({ sender, lockId, sharesToMigrate }: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => {
                    sender: string;
                    lock_id: string;
                    shares_to_migrate: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, lock_id, shares_to_migrate }: {
                    sender: string;
                    lock_id: string;
                    shares_to_migrate: {
                        denom: string;
                        amount: string;
                    };
                }) => _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _149.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_149.MsgSuperfluidDelegate>): _149.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _149.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_149.MsgSuperfluidDelegateResponse>): _149.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _149.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_149.MsgSuperfluidUndelegate>): _149.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _149.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_149.MsgSuperfluidUndelegateResponse>): _149.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _149.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_149.MsgSuperfluidUnbondLock>): _149.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _149.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_149.MsgSuperfluidUnbondLockResponse>): _149.MsgSuperfluidUnbondLockResponse;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            encode(message: _149.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_149.MsgSuperfluidUndelegateAndUnbondLock>): _149.MsgSuperfluidUndelegateAndUnbondLock;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            encode(_: _149.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(_: Partial<_149.MsgSuperfluidUndelegateAndUnbondLockResponse>): _149.MsgSuperfluidUndelegateAndUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _149.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_149.MsgLockAndSuperfluidDelegate>): _149.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _149.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_149.MsgLockAndSuperfluidDelegateResponse>): _149.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _149.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_149.MsgUnPoolWhitelistedPool>): _149.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _149.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_149.MsgUnPoolWhitelistedPoolResponse>): _149.MsgUnPoolWhitelistedPoolResponse;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            encode(message: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            encode(message: _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _149.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _148.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _148.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _148.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _148.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _148.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidAsset;
            fromPartial(object: Partial<_148.SuperfluidAsset>): _148.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _148.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_148.SuperfluidIntermediaryAccount>): _148.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _148.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_148.OsmoEquivalentMultiplierRecord>): _148.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _148.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_148.SuperfluidDelegationRecord>): _148.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _148.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_148.LockIdIntermediaryAccountConnection>): _148.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _148.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_148.UnpoolWhitelistedPools>): _148.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _147.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsRequest;
            fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _147.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsResponse;
            fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _147.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AssetTypeRequest;
            fromPartial(object: Partial<_147.AssetTypeRequest>): _147.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _147.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AssetTypeResponse;
            fromPartial(object: Partial<_147.AssetTypeResponse>): _147.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _147.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllAssetsRequest;
            fromPartial(_: Partial<_147.AllAssetsRequest>): _147.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _147.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllAssetsResponse;
            fromPartial(object: Partial<_147.AllAssetsResponse>): _147.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _147.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AssetMultiplierRequest;
            fromPartial(object: Partial<_147.AssetMultiplierRequest>): _147.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _147.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AssetMultiplierResponse;
            fromPartial(object: Partial<_147.AssetMultiplierResponse>): _147.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _147.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_147.SuperfluidIntermediaryAccountInfo>): _147.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _147.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_147.AllIntermediaryAccountsRequest>): _147.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _147.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_147.AllIntermediaryAccountsResponse>): _147.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _147.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_147.ConnectedIntermediaryAccountRequest>): _147.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _147.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_147.ConnectedIntermediaryAccountResponse>): _147.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _147.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_147.QueryTotalDelegationByValidatorForDenomRequest>): _147.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _147.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_147.QueryTotalDelegationByValidatorForDenomResponse>): _147.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _147.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Delegations;
            fromPartial(object: Partial<_147.Delegations>): _147.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _147.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_147.TotalSuperfluidDelegationsRequest>): _147.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _147.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_147.TotalSuperfluidDelegationsResponse>): _147.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _147.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_147.SuperfluidDelegationAmountRequest>): _147.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _147.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_147.SuperfluidDelegationAmountResponse>): _147.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _147.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_147.SuperfluidDelegationsByDelegatorRequest>): _147.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _147.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_147.SuperfluidDelegationsByDelegatorResponse>): _147.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _147.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_147.SuperfluidUndelegationsByDelegatorRequest>): _147.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _147.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_147.SuperfluidUndelegationsByDelegatorResponse>): _147.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _147.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_147.SuperfluidDelegationsByValidatorDenomRequest>): _147.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _147.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_147.SuperfluidDelegationsByValidatorDenomResponse>): _147.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _147.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_147.QueryTotalDelegationByDelegatorRequest>): _147.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _147.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_147.QueryTotalDelegationByDelegatorResponse>): _147.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _147.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_147.QueryUnpoolWhitelistRequest>): _147.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _147.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_147.QueryUnpoolWhitelistResponse>): _147.QueryUnpoolWhitelistResponse;
        };
        Params: {
            encode(message: _146.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Params;
            fromPartial(object: Partial<_146.Params>): _146.Params;
        };
        GenesisState: {
            encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
            fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                denomAuthorityMetadata(request: _153.QueryDenomAuthorityMetadataRequest): Promise<_153.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _153.QueryDenomsFromCreatorRequest): Promise<_153.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _153.QueryBeforeSendHookAddressRequest): Promise<_153.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _154.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _154.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _154.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _154.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _154.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _154.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _154.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _154.MsgCreateDenom): {
                        typeUrl: string;
                        value: _154.MsgCreateDenom;
                    };
                    mint(value: _154.MsgMint): {
                        typeUrl: string;
                        value: _154.MsgMint;
                    };
                    burn(value: _154.MsgBurn): {
                        typeUrl: string;
                        value: _154.MsgBurn;
                    };
                    changeAdmin(value: _154.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _154.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _154.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _154.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _154.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _154.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _154.MsgForceTransfer): {
                        typeUrl: string;
                        value: _154.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _154.MsgCreateDenom): {
                        typeUrl: string;
                        value: _154.MsgCreateDenom;
                    };
                    mint(value: _154.MsgMint): {
                        typeUrl: string;
                        value: _154.MsgMint;
                    };
                    burn(value: _154.MsgBurn): {
                        typeUrl: string;
                        value: _154.MsgBurn;
                    };
                    changeAdmin(value: _154.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _154.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _154.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _154.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _154.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _154.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _154.MsgForceTransfer): {
                        typeUrl: string;
                        value: _154.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _154.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _154.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount, mintToAddress }: _154.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        mintToAddress: string;
                    };
                    fromAmino: ({ sender, amount, mintToAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        mintToAddress: string;
                    }) => _154.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount, burnFromAddress }: _154.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        burnFromAddress: string;
                    };
                    fromAmino: ({ sender, amount, burnFromAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        burnFromAddress: string;
                    }) => _154.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _154.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _154.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _154.MsgSetDenomMetadata) => {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    };
                    fromAmino: ({ sender, metadata }: {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    }) => _154.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: ({ sender, denom, cosmwasmAddress }: _154.MsgSetBeforeSendHook) => {
                        sender: string;
                        denom: string;
                        cosmwasm_address: string;
                    };
                    fromAmino: ({ sender, denom, cosmwasm_address }: {
                        sender: string;
                        denom: string;
                        cosmwasm_address: string;
                    }) => _154.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _154.MsgForceTransfer) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    };
                    fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    }) => _154.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _154.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateDenom;
                fromPartial(object: Partial<_154.MsgCreateDenom>): _154.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _154.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateDenomResponse;
                fromPartial(object: Partial<_154.MsgCreateDenomResponse>): _154.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _154.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgMint;
                fromPartial(object: Partial<_154.MsgMint>): _154.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _154.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgMintResponse;
                fromPartial(_: Partial<_154.MsgMintResponse>): _154.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _154.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgBurn;
                fromPartial(object: Partial<_154.MsgBurn>): _154.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _154.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgBurnResponse;
                fromPartial(_: Partial<_154.MsgBurnResponse>): _154.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _154.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgChangeAdmin;
                fromPartial(object: Partial<_154.MsgChangeAdmin>): _154.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _154.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgChangeAdminResponse;
                fromPartial(_: Partial<_154.MsgChangeAdminResponse>): _154.MsgChangeAdminResponse;
            };
            MsgSetBeforeSendHook: {
                encode(message: _154.MsgSetBeforeSendHook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_154.MsgSetBeforeSendHook>): _154.MsgSetBeforeSendHook;
            };
            MsgSetBeforeSendHookResponse: {
                encode(_: _154.MsgSetBeforeSendHookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_154.MsgSetBeforeSendHookResponse>): _154.MsgSetBeforeSendHookResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _154.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetDenomMetadata;
                fromPartial(object: Partial<_154.MsgSetDenomMetadata>): _154.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _154.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_154.MsgSetDenomMetadataResponse>): _154.MsgSetDenomMetadataResponse;
            };
            MsgForceTransfer: {
                encode(message: _154.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgForceTransfer;
                fromPartial(object: Partial<_154.MsgForceTransfer>): _154.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _154.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgForceTransferResponse;
                fromPartial(_: Partial<_154.MsgForceTransferResponse>): _154.MsgForceTransferResponse;
            };
            QueryParamsRequest: {
                encode(_: _153.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryParamsRequest;
                fromPartial(_: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _153.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryParamsResponse;
                fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _153.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_153.QueryDenomAuthorityMetadataRequest>): _153.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _153.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_153.QueryDenomAuthorityMetadataResponse>): _153.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _153.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_153.QueryDenomsFromCreatorRequest>): _153.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _153.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_153.QueryDenomsFromCreatorResponse>): _153.QueryDenomsFromCreatorResponse;
            };
            QueryBeforeSendHookAddressRequest: {
                encode(message: _153.QueryBeforeSendHookAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_153.QueryBeforeSendHookAddressRequest>): _153.QueryBeforeSendHookAddressRequest;
            };
            QueryBeforeSendHookAddressResponse: {
                encode(message: _153.QueryBeforeSendHookAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_153.QueryBeforeSendHookAddressResponse>): _153.QueryBeforeSendHookAddressResponse;
            };
            Params: {
                encode(message: _152.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Params;
                fromPartial(object: Partial<_152.Params>): _152.Params;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            };
            GenesisDenom: {
                encode(message: _151.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisDenom;
                fromPartial(object: Partial<_151.GenesisDenom>): _151.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _150.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.DenomAuthorityMetadata;
                fromPartial(object: Partial<_150.DenomAuthorityMetadata>): _150.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _156.ParamsRequest): Promise<_156.ParamsResponse>;
                arithmeticTwap(request: _156.ArithmeticTwapRequest): Promise<_156.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _156.ArithmeticTwapToNowRequest): Promise<_156.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _156.GeometricTwapRequest): Promise<_156.GeometricTwapResponse>;
                geometricTwapToNow(request: _156.GeometricTwapToNowRequest): Promise<_156.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            TwapRecord: {
                encode(message: _157.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TwapRecord;
                fromPartial(object: Partial<_157.TwapRecord>): _157.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _156.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ArithmeticTwapRequest;
                fromPartial(object: Partial<_156.ArithmeticTwapRequest>): _156.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _156.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ArithmeticTwapResponse;
                fromPartial(object: Partial<_156.ArithmeticTwapResponse>): _156.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _156.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_156.ArithmeticTwapToNowRequest>): _156.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _156.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_156.ArithmeticTwapToNowResponse>): _156.ArithmeticTwapToNowResponse;
            };
            GeometricTwapRequest: {
                encode(message: _156.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GeometricTwapRequest;
                fromPartial(object: Partial<_156.GeometricTwapRequest>): _156.GeometricTwapRequest;
            };
            GeometricTwapResponse: {
                encode(message: _156.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GeometricTwapResponse;
                fromPartial(object: Partial<_156.GeometricTwapResponse>): _156.GeometricTwapResponse;
            };
            GeometricTwapToNowRequest: {
                encode(message: _156.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_156.GeometricTwapToNowRequest>): _156.GeometricTwapToNowRequest;
            };
            GeometricTwapToNowResponse: {
                encode(message: _156.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_156.GeometricTwapToNowResponse>): _156.GeometricTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _156.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ParamsRequest;
                fromPartial(_: Partial<_156.ParamsRequest>): _156.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _156.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ParamsResponse;
                fromPartial(object: Partial<_156.ParamsResponse>): _156.ParamsResponse;
            };
            Params: {
                encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                fromPartial(object: Partial<_155.Params>): _155.Params;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _161.QueryFeeTokensRequest): Promise<_161.QueryFeeTokensResponse>;
                denomSpotPrice(request: _161.QueryDenomSpotPriceRequest): Promise<_161.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _161.QueryDenomPoolIdRequest): Promise<_161.QueryDenomPoolIdResponse>;
                baseDenom(request?: _161.QueryBaseDenomRequest): Promise<_161.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _161.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryFeeTokensRequest;
                fromPartial(_: Partial<_161.QueryFeeTokensRequest>): _161.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _161.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryFeeTokensResponse;
                fromPartial(object: Partial<_161.QueryFeeTokensResponse>): _161.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _161.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_161.QueryDenomSpotPriceRequest>): _161.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _161.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_161.QueryDenomSpotPriceResponse>): _161.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _161.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_161.QueryDenomPoolIdRequest>): _161.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _161.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_161.QueryDenomPoolIdResponse>): _161.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _161.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryBaseDenomRequest;
                fromPartial(_: Partial<_161.QueryBaseDenomRequest>): _161.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _161.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryBaseDenomResponse;
                fromPartial(object: Partial<_161.QueryBaseDenomResponse>): _161.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _160.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_160.UpdateFeeTokenProposal>): _160.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
            };
            FeeToken: {
                encode(message: _158.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.FeeToken;
                fromPartial(object: Partial<_158.FeeToken>): _158.FeeToken;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _162.UserValidatorPreferencesRequest): Promise<_162.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _164.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _164.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _164.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _164.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _164.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _164.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _164.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _164.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _164.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _164.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _164.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _164.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _164.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _164.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _164.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _164.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _164.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _164.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _164.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _164.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _164.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _164.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _164.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _164.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _164.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _164.MsgSetValidatorSetPreference) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _164.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _164.MsgDelegateToValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _164.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _164.MsgUndelegateFromValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _164.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _164.MsgRedelegateValidatorSet) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _164.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: ({ delegator }: _164.MsgWithdrawDelegationRewards) => {
                        delegator: string;
                    };
                    fromAmino: ({ delegator }: {
                        delegator: string;
                    }) => _164.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: ({ delegator, lockID }: _164.MsgDelegateBondedTokens) => {
                        delegator: string;
                        lockID: string;
                    };
                    fromAmino: ({ delegator, lockID }: {
                        delegator: string;
                        lockID: string;
                    }) => _164.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _164.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_164.MsgSetValidatorSetPreference>): _164.MsgSetValidatorSetPreference;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _164.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_164.MsgSetValidatorSetPreferenceResponse>): _164.MsgSetValidatorSetPreferenceResponse;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _164.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_164.MsgDelegateToValidatorSet>): _164.MsgDelegateToValidatorSet;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _164.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_164.MsgDelegateToValidatorSetResponse>): _164.MsgDelegateToValidatorSetResponse;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _164.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_164.MsgUndelegateFromValidatorSet>): _164.MsgUndelegateFromValidatorSet;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _164.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_164.MsgUndelegateFromValidatorSetResponse>): _164.MsgUndelegateFromValidatorSetResponse;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _164.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_164.MsgRedelegateValidatorSet>): _164.MsgRedelegateValidatorSet;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _164.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_164.MsgRedelegateValidatorSetResponse>): _164.MsgRedelegateValidatorSetResponse;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _164.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_164.MsgWithdrawDelegationRewards>): _164.MsgWithdrawDelegationRewards;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _164.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_164.MsgWithdrawDelegationRewardsResponse>): _164.MsgWithdrawDelegationRewardsResponse;
            };
            MsgDelegateBondedTokens: {
                encode(message: _164.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_164.MsgDelegateBondedTokens>): _164.MsgDelegateBondedTokens;
            };
            MsgDelegateBondedTokensResponse: {
                encode(_: _164.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_164.MsgDelegateBondedTokensResponse>): _164.MsgDelegateBondedTokensResponse;
            };
            ValidatorPreference: {
                encode(message: _163.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ValidatorPreference;
                fromPartial(object: Partial<_163.ValidatorPreference>): _163.ValidatorPreference;
            };
            ValidatorSetPreferences: {
                encode(message: _163.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ValidatorSetPreferences;
                fromPartial(object: Partial<_163.ValidatorSetPreferences>): _163.ValidatorSetPreferences;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _162.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_162.UserValidatorPreferencesRequest>): _162.UserValidatorPreferencesRequest;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _162.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_162.UserValidatorPreferencesResponse>): _162.UserValidatorPreferencesResponse;
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
                            v1beta1: _288.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _289.MsgClientImpl;
                        };
                    };
                    v1beta1: _290.MsgClientImpl;
                };
                incentives: _291.MsgClientImpl;
                lockup: _292.MsgClientImpl;
                poolmanager: {
                    v1beta1: _293.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _294.MsgClientImpl;
                };
                superfluid: _295.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _296.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _297.MsgClientImpl;
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
                        liquidityDepthsForRange(request: import("./concentrated-liquidity/pool-model/query").QueryLiquidityDepthsForRangeRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryLiquidityDepthsForRangeResponse>;
                        userPositions(request: import("./concentrated-liquidity/pool-model/query").QueryUserPositionsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryUserPositionsResponse>;
                        totalLiquidityForRange(request: import("./concentrated-liquidity/pool-model/query").QueryTotalLiquidityForRangeRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryTotalLiquidityForRangeResponse>;
                        claimableFees(request: import("./concentrated-liquidity/pool-model/query").QueryClaimableFeesRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryClaimableFeesResponse>;
                        positionById(request: import("./concentrated-liquidity/pool-model/query").QueryPositionByIdRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryPositionByIdResponse>;
                    };
                };
                cosmwasmpool: {
                    v1beta1: {
                        params(request?: _97.ParamsRequest): Promise<_97.ParamsResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _101.RecoveredSinceDowntimeOfLengthRequest): Promise<_101.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _103.QueryEpochsInfoRequest): Promise<_103.QueryEpochsInfoResponse>;
                        currentEpoch(request: _103.QueryCurrentEpochRequest): Promise<_103.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _107.QueryPoolsRequest): Promise<_107.QueryPoolsResponse>;
                        numPools(request?: _107.QueryNumPoolsRequest): Promise<_107.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _107.QueryTotalLiquidityRequest): Promise<_107.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _107.QueryPoolsWithFilterRequest): Promise<_107.QueryPoolsWithFilterResponse>;
                        pool(request: _107.QueryPoolRequest): Promise<_107.QueryPoolResponse>;
                        poolType(request: _107.QueryPoolTypeRequest): Promise<_107.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _107.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_107.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _107.QueryCalcJoinPoolSharesRequest): Promise<_107.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _107.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_107.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _107.QueryPoolParamsRequest): Promise<_107.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _107.QueryTotalPoolLiquidityRequest): Promise<_107.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _107.QueryTotalSharesRequest): Promise<_107.QueryTotalSharesResponse>;
                        spotPrice(request: _107.QuerySpotPriceRequest): Promise<_107.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _107.QuerySwapExactAmountInRequest): Promise<_107.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _107.QuerySwapExactAmountOutRequest): Promise<_107.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _112.QuerySpotPriceRequest): Promise<_112.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _115.ParamsRequest): Promise<_115.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _119.ModuleToDistributeCoinsRequest): Promise<_119.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _119.GaugeByIDRequest): Promise<_119.GaugeByIDResponse>;
                    gauges(request?: _119.GaugesRequest): Promise<_119.GaugesResponse>;
                    activeGauges(request?: _119.ActiveGaugesRequest): Promise<_119.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _119.ActiveGaugesPerDenomRequest): Promise<_119.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _119.UpcomingGaugesRequest): Promise<_119.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _119.UpcomingGaugesPerDenomRequest): Promise<_119.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _119.RewardsEstRequest): Promise<_119.RewardsEstResponse>;
                    lockableDurations(request?: _119.QueryLockableDurationsRequest): Promise<_119.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _124.ModuleBalanceRequest): Promise<_124.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _124.ModuleLockedAmountRequest): Promise<_124.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _124.AccountUnlockableCoinsRequest): Promise<_124.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _124.AccountUnlockingCoinsRequest): Promise<_124.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _124.AccountLockedCoinsRequest): Promise<_124.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _124.AccountLockedPastTimeRequest): Promise<_124.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _124.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_124.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _124.AccountUnlockedBeforeTimeRequest): Promise<_124.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _124.AccountLockedPastTimeDenomRequest): Promise<_124.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _124.LockedDenomRequest): Promise<_124.LockedDenomResponse>;
                    lockedByID(request: _124.LockedRequest): Promise<_124.LockedResponse>;
                    nextLockID(request?: _124.NextLockIDRequest): Promise<_124.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _124.SyntheticLockupsByLockupIDRequest): Promise<_124.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _124.AccountLockedLongerDurationRequest): Promise<_124.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _124.AccountLockedDurationRequest): Promise<_124.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _124.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_124.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _124.AccountLockedLongerDurationDenomRequest): Promise<_124.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                        epochProvisions(request?: _128.QueryEpochProvisionsRequest): Promise<_128.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _132.QueryGaugeIdsRequest): Promise<_132.QueryGaugeIdsResponse>;
                        distrInfo(request?: _132.QueryDistrInfoRequest): Promise<_132.QueryDistrInfoResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                        lockableDurations(request?: _132.QueryLockableDurationsRequest): Promise<_132.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _132.QueryIncentivizedPoolsRequest): Promise<_132.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _132.QueryExternalIncentiveGaugesRequest): Promise<_132.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _135.ParamsRequest): Promise<_135.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _135.EstimateSwapExactAmountInRequest): Promise<_135.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _135.EstimateSinglePoolSwapExactAmountInRequest): Promise<_135.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _135.EstimateSwapExactAmountOutRequest): Promise<_135.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _135.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_135.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _135.NumPoolsRequest): Promise<_135.NumPoolsResponse>;
                        pool(request: _135.PoolRequest): Promise<_135.PoolResponse>;
                        allPools(request: _135.AllPoolsRequest): Promise<_135.AllPoolsResponse>;
                        spotPrice(request: _135.SpotPriceRequest): Promise<_135.SpotPriceResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _142.QueryGetProtoRevNumberOfTradesRequest): Promise<_142.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _142.QueryGetProtoRevProfitsByDenomRequest): Promise<_142.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _142.QueryGetProtoRevAllProfitsRequest): Promise<_142.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _142.QueryGetProtoRevStatisticsByRouteRequest): Promise<_142.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _142.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_142.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _142.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_142.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _142.QueryGetProtoRevAdminAccountRequest): Promise<_142.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _142.QueryGetProtoRevDeveloperAccountRequest): Promise<_142.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _142.QueryGetProtoRevPoolWeightsRequest): Promise<_142.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _142.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_142.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _142.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_142.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _142.QueryGetProtoRevBaseDenomsRequest): Promise<_142.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _142.QueryGetProtoRevEnabledRequest): Promise<_142.QueryGetProtoRevEnabledResponse>;
                    };
                };
                superfluid: {
                    params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                    assetType(request: _147.AssetTypeRequest): Promise<_147.AssetTypeResponse>;
                    allAssets(request?: _147.AllAssetsRequest): Promise<_147.AllAssetsResponse>;
                    assetMultiplier(request: _147.AssetMultiplierRequest): Promise<_147.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _147.AllIntermediaryAccountsRequest): Promise<_147.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _147.ConnectedIntermediaryAccountRequest): Promise<_147.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _147.QueryTotalDelegationByValidatorForDenomRequest): Promise<_147.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _147.TotalSuperfluidDelegationsRequest): Promise<_147.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _147.SuperfluidDelegationAmountRequest): Promise<_147.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _147.SuperfluidDelegationsByDelegatorRequest): Promise<_147.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _147.SuperfluidUndelegationsByDelegatorRequest): Promise<_147.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _147.SuperfluidDelegationsByValidatorDenomRequest): Promise<_147.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _147.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_147.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _147.QueryTotalDelegationByDelegatorRequest): Promise<_147.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _147.QueryUnpoolWhitelistRequest): Promise<_147.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _153.QueryDenomAuthorityMetadataRequest): Promise<_153.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _153.QueryDenomsFromCreatorRequest): Promise<_153.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _153.QueryBeforeSendHookAddressRequest): Promise<_153.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _156.ParamsRequest): Promise<_156.ParamsResponse>;
                        arithmeticTwap(request: _156.ArithmeticTwapRequest): Promise<_156.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _156.ArithmeticTwapToNowRequest): Promise<_156.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _156.GeometricTwapRequest): Promise<_156.GeometricTwapResponse>;
                        geometricTwapToNow(request: _156.GeometricTwapToNowRequest): Promise<_156.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _161.QueryFeeTokensRequest): Promise<_161.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _161.QueryDenomSpotPriceRequest): Promise<_161.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _161.QueryDenomPoolIdRequest): Promise<_161.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _161.QueryBaseDenomRequest): Promise<_161.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _162.UserValidatorPreferencesRequest): Promise<_162.UserValidatorPreferencesResponse>;
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
                    v1beta1: _252.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _253.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _254.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _255.LCDQueryClient;
                    v2: _256.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _257.LCDQueryClient;
                };
                incentives: _258.LCDQueryClient;
                lockup: _259.LCDQueryClient;
                mint: {
                    v1beta1: _260.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _261.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _262.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _263.LCDQueryClient;
                };
                superfluid: _264.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _265.LCDQueryClient;
                };
                twap: {
                    v1beta1: _266.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _267.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _268.LCDQueryClient;
                };
            };
        }>;
    };
}
