import * as _90 from "./accum/v1beta1/accum";
import * as _91 from "./concentrated-liquidity/params";
import * as _92 from "./downtime-detector/v1beta1/downtime_duration";
import * as _93 from "./downtime-detector/v1beta1/genesis";
import * as _94 from "./downtime-detector/v1beta1/query";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./gamm/pool-models/balancer/balancerPool";
import * as _98 from "./gamm/v1beta1/genesis";
import * as _99 from "./gamm/v1beta1/gov";
import * as _100 from "./gamm/v1beta1/query";
import * as _101 from "./gamm/v1beta1/tx";
import * as _102 from "./gamm/pool-models/balancer/tx/tx";
import * as _103 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _104 from "./gamm/pool-models/stableswap/tx";
import * as _105 from "./gamm/v2/query";
import * as _106 from "./ibc-rate-limit/v1beta1/params";
import * as _107 from "./ibc-rate-limit/v1beta1/query";
import * as _108 from "./incentives/gauge";
import * as _109 from "./incentives/genesis";
import * as _110 from "./incentives/params";
import * as _111 from "./incentives/query";
import * as _112 from "./incentives/tx";
import * as _113 from "./lockup/genesis";
import * as _114 from "./lockup/lock";
import * as _115 from "./lockup/params";
import * as _116 from "./lockup/query";
import * as _117 from "./lockup/tx";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./pool-incentives/v1beta1/genesis";
import * as _122 from "./pool-incentives/v1beta1/gov";
import * as _123 from "./pool-incentives/v1beta1/incentives";
import * as _124 from "./pool-incentives/v1beta1/query";
import * as _125 from "./poolmanager/v1beta1/genesis";
import * as _126 from "./poolmanager/v1beta1/module_route";
import * as _127 from "./poolmanager/v1beta1/query";
import * as _128 from "./poolmanager/v1beta1/swap_route";
import * as _129 from "./poolmanager/v1beta1/tx";
import * as _130 from "./protorev/v1beta1/genesis";
import * as _131 from "./protorev/v1beta1/gov";
import * as _132 from "./protorev/v1beta1/params";
import * as _133 from "./protorev/v1beta1/protorev";
import * as _134 from "./protorev/v1beta1/query";
import * as _135 from "./protorev/v1beta1/tx";
import * as _136 from "./sumtree/v1beta1/tree";
import * as _137 from "./superfluid/genesis";
import * as _138 from "./superfluid/params";
import * as _139 from "./superfluid/query";
import * as _140 from "./superfluid/superfluid";
import * as _141 from "./superfluid/tx";
import * as _142 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _143 from "./tokenfactory/v1beta1/genesis";
import * as _144 from "./tokenfactory/v1beta1/params";
import * as _145 from "./tokenfactory/v1beta1/query";
import * as _146 from "./tokenfactory/v1beta1/tx";
import * as _147 from "./twap/v1beta1/genesis";
import * as _148 from "./twap/v1beta1/query";
import * as _149 from "./twap/v1beta1/twap_record";
import * as _150 from "./txfees/v1beta1/feetoken";
import * as _151 from "./txfees/v1beta1/genesis";
import * as _152 from "./txfees/v1beta1/gov";
import * as _153 from "./txfees/v1beta1/query";
import * as _154 from "./valset-pref/v1beta1/query";
import * as _155 from "./valset-pref/v1beta1/state";
import * as _156 from "./valset-pref/v1beta1/tx";
import * as _242 from "./downtime-detector/v1beta1/query.lcd";
import * as _243 from "./epochs/query.lcd";
import * as _244 from "./gamm/v1beta1/query.lcd";
import * as _245 from "./gamm/v2/query.lcd";
import * as _246 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _247 from "./incentives/query.lcd";
import * as _248 from "./lockup/query.lcd";
import * as _249 from "./mint/v1beta1/query.lcd";
import * as _250 from "./pool-incentives/v1beta1/query.lcd";
import * as _251 from "./poolmanager/v1beta1/query.lcd";
import * as _252 from "./protorev/v1beta1/query.lcd";
import * as _253 from "./superfluid/query.lcd";
import * as _254 from "./tokenfactory/v1beta1/query.lcd";
import * as _255 from "./twap/v1beta1/query.lcd";
import * as _256 from "./txfees/v1beta1/query.lcd";
import * as _257 from "./valset-pref/v1beta1/query.lcd";
import * as _259 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _260 from "./epochs/query.rpc.Query";
import * as _261 from "./gamm/v1beta1/query.rpc.Query";
import * as _262 from "./gamm/v2/query.rpc.Query";
import * as _263 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _264 from "./incentives/query.rpc.Query";
import * as _265 from "./lockup/query.rpc.Query";
import * as _266 from "./mint/v1beta1/query.rpc.Query";
import * as _267 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _268 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _269 from "./protorev/v1beta1/query.rpc.Query";
import * as _270 from "./superfluid/query.rpc.Query";
import * as _271 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _272 from "./twap/v1beta1/query.rpc.Query";
import * as _273 from "./txfees/v1beta1/query.rpc.Query";
import * as _274 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _276 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _277 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _278 from "./gamm/v1beta1/tx.rpc.msg";
import * as _279 from "./incentives/tx.rpc.msg";
import * as _280 from "./lockup/tx.rpc.msg";
import * as _281 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _282 from "./protorev/v1beta1/tx.rpc.msg";
import * as _283 from "./superfluid/tx.rpc.msg";
import * as _284 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _285 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                encode(message: _90.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AccumulatorContent;
                fromPartial(object: Partial<_90.AccumulatorContent>): _90.AccumulatorContent;
            };
            Options: {
                encode(_: _90.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Options;
                fromPartial(_: Partial<_90.Options>): _90.Options;
            };
            Record: {
                encode(message: _90.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Record;
                fromPartial(object: Partial<_90.Record>): _90.Record;
            };
        };
    }
    const concentratedliquidity: {
        Params: {
            encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
            fromPartial(object: Partial<_91.Params>): _91.Params;
        };
    };
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _94.RecoveredSinceDowntimeOfLengthRequest): Promise<_94.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _94.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_94.RecoveredSinceDowntimeOfLengthRequest>): _94.RecoveredSinceDowntimeOfLengthRequest;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _94.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_94.RecoveredSinceDowntimeOfLengthResponse>): _94.RecoveredSinceDowntimeOfLengthResponse;
            };
            GenesisDowntimeEntry: {
                encode(message: _93.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisDowntimeEntry;
                fromPartial(object: Partial<_93.GenesisDowntimeEntry>): _93.GenesisDowntimeEntry;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            downtimeFromJSON(object: any): _92.Downtime;
            downtimeToJSON(object: _92.Downtime): string;
            Downtime: typeof _92.Downtime;
            DowntimeSDKType: typeof _92.DowntimeSDKType;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _96.QueryEpochsInfoRequest): Promise<_96.QueryEpochsInfoResponse>;
                currentEpoch(request: _96.QueryCurrentEpochRequest): Promise<_96.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _96.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_96.QueryEpochsInfoRequest>): _96.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _96.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_96.QueryEpochsInfoResponse>): _96.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _96.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_96.QueryCurrentEpochRequest>): _96.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _96.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_96.QueryCurrentEpochResponse>): _96.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _95.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EpochInfo;
                fromPartial(object: Partial<_95.EpochInfo>): _95.EpochInfo;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _100.QueryPoolsRequest): Promise<_100.QueryPoolsResponse>;
                numPools(request?: _100.QueryNumPoolsRequest): Promise<_100.QueryNumPoolsResponse>;
                totalLiquidity(request?: _100.QueryTotalLiquidityRequest): Promise<_100.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _100.QueryPoolsWithFilterRequest): Promise<_100.QueryPoolsWithFilterResponse>;
                pool(request: _100.QueryPoolRequest): Promise<_100.QueryPoolResponse>;
                poolType(request: _100.QueryPoolTypeRequest): Promise<_100.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _100.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_100.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _100.QueryCalcJoinPoolSharesRequest): Promise<_100.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _100.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_100.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _100.QueryPoolParamsRequest): Promise<_100.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _100.QueryTotalPoolLiquidityRequest): Promise<_100.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _100.QueryTotalSharesRequest): Promise<_100.QueryTotalSharesResponse>;
                spotPrice(request: _100.QuerySpotPriceRequest): Promise<_100.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _100.QuerySwapExactAmountInRequest): Promise<_100.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _100.QuerySwapExactAmountOutRequest): Promise<_100.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _101.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _101.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _101.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _101.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _101.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _101.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _101.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _101.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _101.MsgJoinPool): {
                        typeUrl: string;
                        value: _101.MsgJoinPool;
                    };
                    exitPool(value: _101.MsgExitPool): {
                        typeUrl: string;
                        value: _101.MsgExitPool;
                    };
                    swapExactAmountIn(value: _101.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _101.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _101.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _101.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _101.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _101.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _101.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _101.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _101.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _101.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _101.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _101.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _101.MsgJoinPool): {
                        typeUrl: string;
                        value: _101.MsgJoinPool;
                    };
                    exitPool(value: _101.MsgExitPool): {
                        typeUrl: string;
                        value: _101.MsgExitPool;
                    };
                    swapExactAmountIn(value: _101.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _101.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _101.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _101.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _101.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _101.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _101.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _101.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _101.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _101.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _101.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _101.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _101.MsgJoinPool) => {
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
                    }) => _101.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _101.MsgExitPool) => {
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
                    }) => _101.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _101.MsgSwapExactAmountIn) => {
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
                    }) => _101.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _101.MsgSwapExactAmountOut) => {
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
                    }) => _101.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _101.MsgJoinSwapExternAmountIn) => {
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
                    }) => _101.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _101.MsgJoinSwapShareAmountOut) => {
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
                    }) => _101.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _101.MsgExitSwapExternAmountOut) => {
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
                    }) => _101.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _101.MsgExitSwapShareAmountIn) => {
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
                    }) => _101.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _101.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinPool;
                fromPartial(object: Partial<_101.MsgJoinPool>): _101.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _101.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinPoolResponse;
                fromPartial(object: Partial<_101.MsgJoinPoolResponse>): _101.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _101.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitPool;
                fromPartial(object: Partial<_101.MsgExitPool>): _101.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _101.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitPoolResponse;
                fromPartial(object: Partial<_101.MsgExitPoolResponse>): _101.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _101.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_101.MsgSwapExactAmountIn>): _101.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _101.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_101.MsgSwapExactAmountInResponse>): _101.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _101.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_101.MsgSwapExactAmountOut>): _101.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _101.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_101.MsgSwapExactAmountOutResponse>): _101.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _101.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_101.MsgJoinSwapExternAmountIn>): _101.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _101.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_101.MsgJoinSwapExternAmountInResponse>): _101.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _101.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_101.MsgJoinSwapShareAmountOut>): _101.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _101.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_101.MsgJoinSwapShareAmountOutResponse>): _101.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _101.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_101.MsgExitSwapShareAmountIn>): _101.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _101.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_101.MsgExitSwapShareAmountInResponse>): _101.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _101.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_101.MsgExitSwapExternAmountOut>): _101.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _101.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_101.MsgExitSwapExternAmountOutResponse>): _101.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _100.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolRequest;
                fromPartial(object: Partial<_100.QueryPoolRequest>): _100.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _100.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolResponse;
                fromPartial(object: Partial<_100.QueryPoolResponse>): _100.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _100.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolsRequest;
                fromPartial(object: Partial<_100.QueryPoolsRequest>): _100.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _100.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolsResponse;
                fromPartial(object: Partial<_100.QueryPoolsResponse>): _100.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _100.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryNumPoolsRequest;
                fromPartial(_: Partial<_100.QueryNumPoolsRequest>): _100.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _100.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryNumPoolsResponse;
                fromPartial(object: Partial<_100.QueryNumPoolsResponse>): _100.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _100.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolTypeRequest;
                fromPartial(object: Partial<_100.QueryPoolTypeRequest>): _100.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _100.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolTypeResponse;
                fromPartial(object: Partial<_100.QueryPoolTypeResponse>): _100.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _100.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_100.QueryCalcJoinPoolSharesRequest>): _100.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _100.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_100.QueryCalcJoinPoolSharesResponse>): _100.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _100.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_100.QueryCalcExitPoolCoinsFromSharesRequest>): _100.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _100.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_100.QueryCalcExitPoolCoinsFromSharesResponse>): _100.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _100.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolParamsRequest;
                fromPartial(object: Partial<_100.QueryPoolParamsRequest>): _100.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _100.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolParamsResponse;
                fromPartial(object: Partial<_100.QueryPoolParamsResponse>): _100.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _100.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_100.QueryTotalPoolLiquidityRequest>): _100.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _100.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_100.QueryTotalPoolLiquidityResponse>): _100.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _100.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalSharesRequest;
                fromPartial(object: Partial<_100.QueryTotalSharesRequest>): _100.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _100.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalSharesResponse;
                fromPartial(object: Partial<_100.QueryTotalSharesResponse>): _100.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _100.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_100.QueryCalcJoinPoolNoSwapSharesRequest>): _100.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _100.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_100.QueryCalcJoinPoolNoSwapSharesResponse>): _100.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _100.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySpotPriceRequest;
                fromPartial(object: Partial<_100.QuerySpotPriceRequest>): _100.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _100.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_100.QueryPoolsWithFilterRequest>): _100.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _100.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_100.QueryPoolsWithFilterResponse>): _100.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _100.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySpotPriceResponse;
                fromPartial(object: Partial<_100.QuerySpotPriceResponse>): _100.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _100.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_100.QuerySwapExactAmountInRequest>): _100.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _100.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_100.QuerySwapExactAmountInResponse>): _100.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _100.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_100.QuerySwapExactAmountOutRequest>): _100.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _100.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_100.QuerySwapExactAmountOutResponse>): _100.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _100.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_100.QueryTotalLiquidityRequest>): _100.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _100.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_100.QueryTotalLiquidityResponse>): _100.QueryTotalLiquidityResponse;
            };
            ReplaceMigrationRecordsProposal: {
                encode(message: _99.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_99.ReplaceMigrationRecordsProposal>): _99.ReplaceMigrationRecordsProposal;
            };
            UpdateMigrationRecordsProposal: {
                encode(message: _99.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_99.UpdateMigrationRecordsProposal>): _99.UpdateMigrationRecordsProposal;
            };
            Params: {
                encode(message: _98.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Params;
                fromPartial(object: Partial<_98.Params>): _98.Params;
            };
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
            };
            MigrationRecords: {
                encode(message: _98.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MigrationRecords;
                fromPartial(object: Partial<_98.MigrationRecords>): _98.MigrationRecords;
            };
            BalancerToConcentratedPoolLink: {
                encode(message: _98.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_98.BalancerToConcentratedPoolLink>): _98.BalancerToConcentratedPoolLink;
            };
            SmoothWeightChangeParams: {
                encode(message: _97.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SmoothWeightChangeParams;
                fromPartial(object: Partial<_97.SmoothWeightChangeParams>): _97.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _97.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PoolParams;
                fromPartial(object: Partial<_97.PoolParams>): _97.PoolParams;
            };
            PoolAsset: {
                encode(message: _97.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PoolAsset;
                fromPartial(object: Partial<_97.PoolAsset>): _97.PoolAsset;
            };
            Pool: {
                encode(message: _97.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Pool;
                fromPartial(object: Partial<_97.Pool>): _97.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _276.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _102.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _102.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _102.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _102.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _102.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _102.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _102.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _102.MsgCreateBalancerPool;
                            };
                            migrateSharesToFullRangeConcentratedPosition(value: _102.MsgMigrateSharesToFullRangeConcentratedPosition): {
                                typeUrl: string;
                                value: _102.MsgMigrateSharesToFullRangeConcentratedPosition;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _102.MsgCreateBalancerPool) => {
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
                            }) => _102.MsgCreateBalancerPool;
                        };
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
                            aminoType: string;
                            toAmino: ({ sender, sharesToMigrate, poolIdEntering }: _102.MsgMigrateSharesToFullRangeConcentratedPosition) => {
                                sender: string;
                                shares_to_migrate: {
                                    denom: string;
                                    amount: string;
                                };
                                pool_id_entering: string;
                            };
                            fromAmino: ({ sender, shares_to_migrate, pool_id_entering }: {
                                sender: string;
                                shares_to_migrate: {
                                    denom: string;
                                    amount: string;
                                };
                                pool_id_entering: string;
                            }) => _102.MsgMigrateSharesToFullRangeConcentratedPosition;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _102.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_102.MsgCreateBalancerPool>): _102.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _102.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_102.MsgCreateBalancerPoolResponse>): _102.MsgCreateBalancerPoolResponse;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPosition: {
                        encode(message: _102.MsgMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateSharesToFullRangeConcentratedPosition;
                        fromPartial(object: Partial<_102.MsgMigrateSharesToFullRangeConcentratedPosition>): _102.MsgMigrateSharesToFullRangeConcentratedPosition;
                    };
                    MsgMigrateSharesToFullRangeConcentratedPositionResponse: {
                        encode(message: _102.MsgMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                        fromPartial(object: Partial<_102.MsgMigrateSharesToFullRangeConcentratedPositionResponse>): _102.MsgMigrateSharesToFullRangeConcentratedPositionResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _277.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _104.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _104.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _104.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _104.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _104.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _104.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _104.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _104.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _104.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _104.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _104.MsgCreateStableswapPool) => {
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
                            }) => _104.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _104.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            }) => _104.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _104.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_104.MsgCreateStableswapPool>): _104.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _104.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_104.MsgCreateStableswapPoolResponse>): _104.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _104.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_104.MsgStableSwapAdjustScalingFactors>): _104.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _104.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_104.MsgStableSwapAdjustScalingFactorsResponse>): _104.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _103.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PoolParams;
                        fromPartial(object: Partial<_103.PoolParams>): _103.PoolParams;
                    };
                    Pool: {
                        encode(message: _103.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Pool;
                        fromPartial(object: Partial<_103.Pool>): _103.Pool;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _105.QuerySpotPriceRequest): Promise<_105.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            QuerySpotPriceRequest: {
                encode(message: _105.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySpotPriceRequest;
                fromPartial(object: Partial<_105.QuerySpotPriceRequest>): _105.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _105.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySpotPriceResponse;
                fromPartial(object: Partial<_105.QuerySpotPriceResponse>): _105.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
            };
            Params: {
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(object: Partial<_106.Params>): _106.Params;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _279.MsgClientImpl;
        QueryClientImpl: typeof _264.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _111.ModuleToDistributeCoinsRequest): Promise<_111.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _111.GaugeByIDRequest): Promise<_111.GaugeByIDResponse>;
            gauges(request?: _111.GaugesRequest): Promise<_111.GaugesResponse>;
            activeGauges(request?: _111.ActiveGaugesRequest): Promise<_111.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _111.ActiveGaugesPerDenomRequest): Promise<_111.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _111.UpcomingGaugesRequest): Promise<_111.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _111.UpcomingGaugesPerDenomRequest): Promise<_111.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _111.RewardsEstRequest): Promise<_111.RewardsEstResponse>;
            lockableDurations(request?: _111.QueryLockableDurationsRequest): Promise<_111.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _247.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _112.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _112.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _112.MsgCreateGauge): {
                    typeUrl: string;
                    value: _112.MsgCreateGauge;
                };
                addToGauge(value: _112.MsgAddToGauge): {
                    typeUrl: string;
                    value: _112.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _112.MsgCreateGauge): {
                    typeUrl: string;
                    value: _112.MsgCreateGauge;
                };
                addToGauge(value: _112.MsgAddToGauge): {
                    typeUrl: string;
                    value: _112.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _112.MsgCreateGauge) => {
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
                }) => _112.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _112.MsgAddToGauge) => {
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
                }) => _112.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _112.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgCreateGauge;
            fromPartial(object: Partial<_112.MsgCreateGauge>): _112.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _112.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_112.MsgCreateGaugeResponse>): _112.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _112.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgAddToGauge;
            fromPartial(object: Partial<_112.MsgAddToGauge>): _112.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _112.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_112.MsgAddToGaugeResponse>): _112.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _111.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_111.ModuleToDistributeCoinsRequest>): _111.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _111.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_111.ModuleToDistributeCoinsResponse>): _111.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _111.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GaugeByIDRequest;
            fromPartial(object: Partial<_111.GaugeByIDRequest>): _111.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _111.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GaugeByIDResponse;
            fromPartial(object: Partial<_111.GaugeByIDResponse>): _111.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _111.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GaugesRequest;
            fromPartial(object: Partial<_111.GaugesRequest>): _111.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _111.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GaugesResponse;
            fromPartial(object: Partial<_111.GaugesResponse>): _111.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _111.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ActiveGaugesRequest;
            fromPartial(object: Partial<_111.ActiveGaugesRequest>): _111.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _111.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ActiveGaugesResponse;
            fromPartial(object: Partial<_111.ActiveGaugesResponse>): _111.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _111.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_111.ActiveGaugesPerDenomRequest>): _111.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _111.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_111.ActiveGaugesPerDenomResponse>): _111.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _111.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpcomingGaugesRequest;
            fromPartial(object: Partial<_111.UpcomingGaugesRequest>): _111.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _111.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpcomingGaugesResponse;
            fromPartial(object: Partial<_111.UpcomingGaugesResponse>): _111.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _111.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_111.UpcomingGaugesPerDenomRequest>): _111.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _111.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_111.UpcomingGaugesPerDenomResponse>): _111.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _111.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RewardsEstRequest;
            fromPartial(object: Partial<_111.RewardsEstRequest>): _111.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _111.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RewardsEstResponse;
            fromPartial(object: Partial<_111.RewardsEstResponse>): _111.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _111.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_111.QueryLockableDurationsRequest>): _111.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _111.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_111.QueryLockableDurationsResponse>): _111.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
            fromPartial(object: Partial<_110.Params>): _110.Params;
        };
        GenesisState: {
            encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
            fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
        };
        Gauge: {
            encode(message: _108.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Gauge;
            fromPartial(object: Partial<_108.Gauge>): _108.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _108.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.LockableDurationsInfo;
            fromPartial(object: Partial<_108.LockableDurationsInfo>): _108.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _280.MsgClientImpl;
        QueryClientImpl: typeof _265.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _116.ModuleBalanceRequest): Promise<_116.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _116.ModuleLockedAmountRequest): Promise<_116.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _116.AccountUnlockableCoinsRequest): Promise<_116.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _116.AccountUnlockingCoinsRequest): Promise<_116.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _116.AccountLockedCoinsRequest): Promise<_116.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _116.AccountLockedPastTimeRequest): Promise<_116.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _116.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_116.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _116.AccountUnlockedBeforeTimeRequest): Promise<_116.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _116.AccountLockedPastTimeDenomRequest): Promise<_116.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _116.LockedDenomRequest): Promise<_116.LockedDenomResponse>;
            lockedByID(request: _116.LockedRequest): Promise<_116.LockedResponse>;
            syntheticLockupsByLockupID(request: _116.SyntheticLockupsByLockupIDRequest): Promise<_116.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _116.AccountLockedLongerDurationRequest): Promise<_116.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _116.AccountLockedDurationRequest): Promise<_116.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _116.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_116.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _116.AccountLockedLongerDurationDenomRequest): Promise<_116.AccountLockedLongerDurationDenomResponse>;
            params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _248.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _117.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _117.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _117.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _117.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _117.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _117.MsgLockTokens): {
                    typeUrl: string;
                    value: _117.MsgLockTokens;
                };
                beginUnlockingAll(value: _117.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _117.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _117.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _117.MsgBeginUnlocking;
                };
                extendLockup(value: _117.MsgExtendLockup): {
                    typeUrl: string;
                    value: _117.MsgExtendLockup;
                };
                forceUnlock(value: _117.MsgForceUnlock): {
                    typeUrl: string;
                    value: _117.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _117.MsgLockTokens): {
                    typeUrl: string;
                    value: _117.MsgLockTokens;
                };
                beginUnlockingAll(value: _117.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _117.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _117.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _117.MsgBeginUnlocking;
                };
                extendLockup(value: _117.MsgExtendLockup): {
                    typeUrl: string;
                    value: _117.MsgExtendLockup;
                };
                forceUnlock(value: _117.MsgForceUnlock): {
                    typeUrl: string;
                    value: _117.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _117.MsgLockTokens) => {
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
                }) => _117.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _117.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _117.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _117.MsgBeginUnlocking) => {
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
                }) => _117.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _117.MsgExtendLockup) => {
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
                }) => _117.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _117.MsgForceUnlock) => {
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
                }) => _117.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _117.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgLockTokens;
            fromPartial(object: Partial<_117.MsgLockTokens>): _117.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _117.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgLockTokensResponse;
            fromPartial(object: Partial<_117.MsgLockTokensResponse>): _117.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _117.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_117.MsgBeginUnlockingAll>): _117.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _117.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_117.MsgBeginUnlockingAllResponse>): _117.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _117.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBeginUnlocking;
            fromPartial(object: Partial<_117.MsgBeginUnlocking>): _117.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _117.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_117.MsgBeginUnlockingResponse>): _117.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _117.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgExtendLockup;
            fromPartial(object: Partial<_117.MsgExtendLockup>): _117.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _117.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgExtendLockupResponse;
            fromPartial(object: Partial<_117.MsgExtendLockupResponse>): _117.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _117.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgForceUnlock;
            fromPartial(object: Partial<_117.MsgForceUnlock>): _117.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _117.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgForceUnlockResponse;
            fromPartial(object: Partial<_117.MsgForceUnlockResponse>): _117.MsgForceUnlockResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _116.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ModuleBalanceRequest;
            fromPartial(_: Partial<_116.ModuleBalanceRequest>): _116.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _116.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ModuleBalanceResponse;
            fromPartial(object: Partial<_116.ModuleBalanceResponse>): _116.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _116.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_116.ModuleLockedAmountRequest>): _116.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _116.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_116.ModuleLockedAmountResponse>): _116.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _116.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_116.AccountUnlockableCoinsRequest>): _116.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _116.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_116.AccountUnlockableCoinsResponse>): _116.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _116.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_116.AccountUnlockingCoinsRequest>): _116.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _116.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_116.AccountUnlockingCoinsResponse>): _116.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _116.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_116.AccountLockedCoinsRequest>): _116.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _116.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_116.AccountLockedCoinsResponse>): _116.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _116.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_116.AccountLockedPastTimeRequest>): _116.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _116.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_116.AccountLockedPastTimeResponse>): _116.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _116.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_116.AccountLockedPastTimeNotUnlockingOnlyRequest>): _116.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _116.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_116.AccountLockedPastTimeNotUnlockingOnlyResponse>): _116.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _116.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_116.AccountUnlockedBeforeTimeRequest>): _116.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _116.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_116.AccountUnlockedBeforeTimeResponse>): _116.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _116.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_116.AccountLockedPastTimeDenomRequest>): _116.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _116.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_116.AccountLockedPastTimeDenomResponse>): _116.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _116.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.LockedDenomRequest;
            fromPartial(object: Partial<_116.LockedDenomRequest>): _116.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _116.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.LockedDenomResponse;
            fromPartial(object: Partial<_116.LockedDenomResponse>): _116.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _116.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.LockedRequest;
            fromPartial(object: Partial<_116.LockedRequest>): _116.LockedRequest;
        };
        LockedResponse: {
            encode(message: _116.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.LockedResponse;
            fromPartial(object: Partial<_116.LockedResponse>): _116.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _116.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_116.SyntheticLockupsByLockupIDRequest>): _116.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _116.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_116.SyntheticLockupsByLockupIDResponse>): _116.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _116.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationRequest>): _116.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _116.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationResponse>): _116.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _116.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedDurationRequest;
            fromPartial(object: Partial<_116.AccountLockedDurationRequest>): _116.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _116.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedDurationResponse;
            fromPartial(object: Partial<_116.AccountLockedDurationResponse>): _116.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _116.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _116.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _116.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _116.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _116.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationDenomRequest>): _116.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _116.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_116.AccountLockedLongerDurationDenomResponse>): _116.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _116.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsRequest;
            fromPartial(_: Partial<_116.QueryParamsRequest>): _116.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _116.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsResponse;
            fromPartial(object: Partial<_116.QueryParamsResponse>): _116.QueryParamsResponse;
        };
        Params: {
            encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
            fromPartial(object: Partial<_115.Params>): _115.Params;
        };
        lockQueryTypeFromJSON(object: any): _114.LockQueryType;
        lockQueryTypeToJSON(object: _114.LockQueryType): string;
        LockQueryType: typeof _114.LockQueryType;
        LockQueryTypeSDKType: typeof _114.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _114.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PeriodLock;
            fromPartial(object: Partial<_114.PeriodLock>): _114.PeriodLock;
        };
        QueryCondition: {
            encode(message: _114.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryCondition;
            fromPartial(object: Partial<_114.QueryCondition>): _114.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _114.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SyntheticLock;
            fromPartial(object: Partial<_114.SyntheticLock>): _114.SyntheticLock;
        };
        GenesisState: {
            encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
            fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                epochProvisions(request?: _120.QueryEpochProvisionsRequest): Promise<_120.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _120.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsRequest;
                fromPartial(_: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _120.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _120.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_120.QueryEpochProvisionsRequest>): _120.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _120.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_120.QueryEpochProvisionsResponse>): _120.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _119.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Minter;
                fromPartial(object: Partial<_119.Minter>): _119.Minter;
            };
            WeightedAddress: {
                encode(message: _119.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.WeightedAddress;
                fromPartial(object: Partial<_119.WeightedAddress>): _119.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _119.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.DistributionProportions;
                fromPartial(object: Partial<_119.DistributionProportions>): _119.DistributionProportions;
            };
            Params: {
                encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
            };
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _124.QueryGaugeIdsRequest): Promise<_124.QueryGaugeIdsResponse>;
                distrInfo(request?: _124.QueryDistrInfoRequest): Promise<_124.QueryDistrInfoResponse>;
                params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                lockableDurations(request?: _124.QueryLockableDurationsRequest): Promise<_124.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _124.QueryIncentivizedPoolsRequest): Promise<_124.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _124.QueryExternalIncentiveGaugesRequest): Promise<_124.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _124.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_124.QueryGaugeIdsRequest>): _124.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _124.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_124.QueryGaugeIdsResponse>): _124.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _124.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_124.QueryGaugeIdsResponse_GaugeIdWithDuration>): _124.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _124.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDistrInfoRequest;
                fromPartial(_: Partial<_124.QueryDistrInfoRequest>): _124.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _124.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDistrInfoResponse;
                fromPartial(object: Partial<_124.QueryDistrInfoResponse>): _124.QueryDistrInfoResponse;
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
            QueryLockableDurationsRequest: {
                encode(_: _124.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_124.QueryLockableDurationsRequest>): _124.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _124.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_124.QueryLockableDurationsResponse>): _124.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _124.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_124.QueryIncentivizedPoolsRequest>): _124.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _124.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.IncentivizedPool;
                fromPartial(object: Partial<_124.IncentivizedPool>): _124.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _124.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_124.QueryIncentivizedPoolsResponse>): _124.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _124.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_124.QueryExternalIncentiveGaugesRequest>): _124.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _124.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_124.QueryExternalIncentiveGaugesResponse>): _124.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _123.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Params;
                fromPartial(object: Partial<_123.Params>): _123.Params;
            };
            LockableDurationsInfo: {
                encode(message: _123.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.LockableDurationsInfo;
                fromPartial(object: Partial<_123.LockableDurationsInfo>): _123.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _123.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.DistrInfo;
                fromPartial(object: Partial<_123.DistrInfo>): _123.DistrInfo;
            };
            DistrRecord: {
                encode(message: _123.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.DistrRecord;
                fromPartial(object: Partial<_123.DistrRecord>): _123.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _123.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PoolToGauge;
                fromPartial(object: Partial<_123.PoolToGauge>): _123.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _123.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PoolToGauges;
                fromPartial(object: Partial<_123.PoolToGauges>): _123.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _122.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_122.ReplacePoolIncentivesProposal>): _122.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _122.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_122.UpdatePoolIncentivesProposal>): _122.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.ParamsRequest): Promise<_127.ParamsResponse>;
                estimateSwapExactAmountIn(request: _127.EstimateSwapExactAmountInRequest): Promise<_127.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _127.EstimateSwapExactAmountOutRequest): Promise<_127.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _127.NumPoolsRequest): Promise<_127.NumPoolsResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _129.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _129.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _129.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _129.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _129.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _129.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _129.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _129.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _129.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _129.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _129.MsgSwapExactAmountIn) => {
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
                    }) => _129.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _129.MsgSwapExactAmountOut) => {
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
                    }) => _129.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _129.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_129.MsgSwapExactAmountIn>): _129.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _129.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_129.MsgSwapExactAmountInResponse>): _129.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _129.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_129.MsgSwapExactAmountOut>): _129.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _129.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_129.MsgSwapExactAmountOutResponse>): _129.MsgSwapExactAmountOutResponse;
            };
            SwapAmountInRoute: {
                encode(message: _128.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SwapAmountInRoute;
                fromPartial(object: Partial<_128.SwapAmountInRoute>): _128.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _128.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SwapAmountOutRoute;
                fromPartial(object: Partial<_128.SwapAmountOutRoute>): _128.SwapAmountOutRoute;
            };
            ParamsRequest: {
                encode(_: _127.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ParamsRequest;
                fromPartial(_: Partial<_127.ParamsRequest>): _127.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _127.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ParamsResponse;
                fromPartial(object: Partial<_127.ParamsResponse>): _127.ParamsResponse;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _127.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_127.EstimateSwapExactAmountInRequest>): _127.EstimateSwapExactAmountInRequest;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _127.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_127.EstimateSwapExactAmountInResponse>): _127.EstimateSwapExactAmountInResponse;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _127.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_127.EstimateSwapExactAmountOutRequest>): _127.EstimateSwapExactAmountOutRequest;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _127.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_127.EstimateSwapExactAmountOutResponse>): _127.EstimateSwapExactAmountOutResponse;
            };
            NumPoolsRequest: {
                encode(_: _127.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.NumPoolsRequest;
                fromPartial(_: Partial<_127.NumPoolsRequest>): _127.NumPoolsRequest;
            };
            NumPoolsResponse: {
                encode(message: _127.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.NumPoolsResponse;
                fromPartial(object: Partial<_127.NumPoolsResponse>): _127.NumPoolsResponse;
            };
            poolTypeFromJSON(object: any): _126.PoolType;
            poolTypeToJSON(object: _126.PoolType): string;
            PoolType: typeof _126.PoolType;
            PoolTypeSDKType: typeof _126.PoolTypeSDKType;
            ModuleRoute: {
                encode(message: _126.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ModuleRoute;
                fromPartial(object: Partial<_126.ModuleRoute>): _126.ModuleRoute;
            };
            Params: {
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Params;
                fromPartial(object: Partial<_125.Params>): _125.Params;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _134.QueryGetProtoRevNumberOfTradesRequest): Promise<_134.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _134.QueryGetProtoRevProfitsByDenomRequest): Promise<_134.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _134.QueryGetProtoRevAllProfitsRequest): Promise<_134.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByPool(request: _134.QueryGetProtoRevStatisticsByPoolRequest): Promise<_134.QueryGetProtoRevStatisticsByPoolResponse>;
                getProtoRevAllStatistics(request?: _134.QueryGetProtoRevAllStatisticsRequest): Promise<_134.QueryGetProtoRevAllStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _134.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_134.QueryGetProtoRevTokenPairArbRoutesResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _135.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _135.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _135.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _135.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _135.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _135.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _135.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _135.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _135.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _135.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: ({ admin, hotRoutes }: _135.MsgSetHotRoutes) => {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
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
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    }) => _135.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: ({ admin, developerAccount }: _135.MsgSetDeveloperAccount) => {
                        admin: string;
                        developer_account: string;
                    };
                    fromAmino: ({ admin, developer_account }: {
                        admin: string;
                        developer_account: string;
                    }) => _135.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _135.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetHotRoutes;
                fromPartial(object: Partial<_135.MsgSetHotRoutes>): _135.MsgSetHotRoutes;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _135.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_135.MsgSetHotRoutesResponse>): _135.MsgSetHotRoutesResponse;
            };
            MsgSetDeveloperAccount: {
                encode(message: _135.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_135.MsgSetDeveloperAccount>): _135.MsgSetDeveloperAccount;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _135.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_135.MsgSetDeveloperAccountResponse>): _135.MsgSetDeveloperAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsRequest;
                fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsResponse;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _134.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_134.QueryGetProtoRevNumberOfTradesRequest>): _134.QueryGetProtoRevNumberOfTradesRequest;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _134.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevNumberOfTradesResponse>): _134.QueryGetProtoRevNumberOfTradesResponse;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _134.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_134.QueryGetProtoRevProfitsByDenomRequest>): _134.QueryGetProtoRevProfitsByDenomRequest;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _134.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevProfitsByDenomResponse>): _134.QueryGetProtoRevProfitsByDenomResponse;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _134.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_134.QueryGetProtoRevAllProfitsRequest>): _134.QueryGetProtoRevAllProfitsRequest;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _134.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevAllProfitsResponse>): _134.QueryGetProtoRevAllProfitsResponse;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                encode(message: _134.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevStatisticsByPoolRequest;
                fromPartial(object: Partial<_134.QueryGetProtoRevStatisticsByPoolRequest>): _134.QueryGetProtoRevStatisticsByPoolRequest;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                encode(message: _134.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevStatisticsByPoolResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevStatisticsByPoolResponse>): _134.QueryGetProtoRevStatisticsByPoolResponse;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                encode(_: _134.QueryGetProtoRevAllStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevAllStatisticsRequest;
                fromPartial(_: Partial<_134.QueryGetProtoRevAllStatisticsRequest>): _134.QueryGetProtoRevAllStatisticsRequest;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                encode(message: _134.QueryGetProtoRevAllStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevAllStatisticsResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevAllStatisticsResponse>): _134.QueryGetProtoRevAllStatisticsResponse;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _134.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_134.QueryGetProtoRevTokenPairArbRoutesRequest>): _134.QueryGetProtoRevTokenPairArbRoutesRequest;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _134.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_134.QueryGetProtoRevTokenPairArbRoutesResponse>): _134.QueryGetProtoRevTokenPairArbRoutesResponse;
            };
            TokenPairArbRoutes: {
                encode(message: _133.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TokenPairArbRoutes;
                fromPartial(object: Partial<_133.TokenPairArbRoutes>): _133.TokenPairArbRoutes;
            };
            Route: {
                encode(message: _133.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Route;
                fromPartial(object: Partial<_133.Route>): _133.Route;
            };
            Trade: {
                encode(message: _133.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Trade;
                fromPartial(object: Partial<_133.Trade>): _133.Trade;
            };
            PoolStatistics: {
                encode(message: _133.PoolStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PoolStatistics;
                fromPartial(object: Partial<_133.PoolStatistics>): _133.PoolStatistics;
            };
            RouteWeights: {
                encode(message: _133.RouteWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.RouteWeights;
                fromPartial(object: Partial<_133.RouteWeights>): _133.RouteWeights;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromPartial(object: Partial<_132.Params>): _132.Params;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _131.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_131.SetProtoRevEnabledProposal>): _131.SetProtoRevEnabledProposal;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _131.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_131.SetProtoRevAdminAccountProposal>): _131.SetProtoRevAdminAccountProposal;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _136.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Node;
                fromPartial(object: Partial<_136.Node>): _136.Node;
            };
            Child: {
                encode(message: _136.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Child;
                fromPartial(object: Partial<_136.Child>): _136.Child;
            };
            Leaf: {
                encode(message: _136.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Leaf;
                fromPartial(object: Partial<_136.Leaf>): _136.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _283.MsgClientImpl;
        QueryClientImpl: typeof _270.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
            assetType(request: _139.AssetTypeRequest): Promise<_139.AssetTypeResponse>;
            allAssets(request?: _139.AllAssetsRequest): Promise<_139.AllAssetsResponse>;
            assetMultiplier(request: _139.AssetMultiplierRequest): Promise<_139.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _139.AllIntermediaryAccountsRequest): Promise<_139.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _139.ConnectedIntermediaryAccountRequest): Promise<_139.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _139.QueryTotalDelegationByValidatorForDenomRequest): Promise<_139.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _139.TotalSuperfluidDelegationsRequest): Promise<_139.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _139.SuperfluidDelegationAmountRequest): Promise<_139.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _139.SuperfluidDelegationsByDelegatorRequest): Promise<_139.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _139.SuperfluidUndelegationsByDelegatorRequest): Promise<_139.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _139.SuperfluidDelegationsByValidatorDenomRequest): Promise<_139.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _139.QueryTotalDelegationByDelegatorRequest): Promise<_139.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _139.QueryUnpoolWhitelistRequest): Promise<_139.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _253.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _141.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _141.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _141.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _141.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _141.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _141.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _141.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _141.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _141.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _141.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _141.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _141.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _141.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _141.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _141.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _141.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _141.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _141.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _141.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _141.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _141.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _141.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _141.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _141.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _141.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _141.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _141.MsgLockAndSuperfluidDelegate) => {
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
                }) => _141.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _141.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _141.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _141.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_141.MsgSuperfluidDelegate>): _141.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _141.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_141.MsgSuperfluidDelegateResponse>): _141.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _141.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_141.MsgSuperfluidUndelegate>): _141.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _141.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_141.MsgSuperfluidUndelegateResponse>): _141.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _141.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_141.MsgSuperfluidUnbondLock>): _141.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _141.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_141.MsgSuperfluidUnbondLockResponse>): _141.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _141.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_141.MsgLockAndSuperfluidDelegate>): _141.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _141.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_141.MsgLockAndSuperfluidDelegateResponse>): _141.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _141.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_141.MsgUnPoolWhitelistedPool>): _141.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _141.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_141.MsgUnPoolWhitelistedPoolResponse>): _141.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _140.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _140.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _140.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _140.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _140.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SuperfluidAsset;
            fromPartial(object: Partial<_140.SuperfluidAsset>): _140.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _140.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_140.SuperfluidIntermediaryAccount>): _140.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _140.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_140.OsmoEquivalentMultiplierRecord>): _140.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _140.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_140.SuperfluidDelegationRecord>): _140.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _140.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_140.LockIdIntermediaryAccountConnection>): _140.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _140.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_140.UnpoolWhitelistedPools>): _140.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _139.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsRequest;
            fromPartial(_: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _139.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsResponse;
            fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _139.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AssetTypeRequest;
            fromPartial(object: Partial<_139.AssetTypeRequest>): _139.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _139.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AssetTypeResponse;
            fromPartial(object: Partial<_139.AssetTypeResponse>): _139.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _139.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AllAssetsRequest;
            fromPartial(_: Partial<_139.AllAssetsRequest>): _139.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _139.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AllAssetsResponse;
            fromPartial(object: Partial<_139.AllAssetsResponse>): _139.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _139.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AssetMultiplierRequest;
            fromPartial(object: Partial<_139.AssetMultiplierRequest>): _139.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _139.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AssetMultiplierResponse;
            fromPartial(object: Partial<_139.AssetMultiplierResponse>): _139.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _139.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_139.SuperfluidIntermediaryAccountInfo>): _139.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _139.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_139.AllIntermediaryAccountsRequest>): _139.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _139.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_139.AllIntermediaryAccountsResponse>): _139.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _139.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_139.ConnectedIntermediaryAccountRequest>): _139.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _139.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_139.ConnectedIntermediaryAccountResponse>): _139.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _139.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_139.QueryTotalDelegationByValidatorForDenomRequest>): _139.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _139.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_139.QueryTotalDelegationByValidatorForDenomResponse>): _139.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _139.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Delegations;
            fromPartial(object: Partial<_139.Delegations>): _139.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _139.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_139.TotalSuperfluidDelegationsRequest>): _139.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _139.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_139.TotalSuperfluidDelegationsResponse>): _139.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _139.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_139.SuperfluidDelegationAmountRequest>): _139.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _139.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_139.SuperfluidDelegationAmountResponse>): _139.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _139.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_139.SuperfluidDelegationsByDelegatorRequest>): _139.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _139.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_139.SuperfluidDelegationsByDelegatorResponse>): _139.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _139.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_139.SuperfluidUndelegationsByDelegatorRequest>): _139.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _139.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_139.SuperfluidUndelegationsByDelegatorResponse>): _139.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _139.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_139.SuperfluidDelegationsByValidatorDenomRequest>): _139.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _139.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_139.SuperfluidDelegationsByValidatorDenomResponse>): _139.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _139.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_139.QueryTotalDelegationByDelegatorRequest>): _139.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _139.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_139.QueryTotalDelegationByDelegatorResponse>): _139.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _139.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_139.QueryUnpoolWhitelistRequest>): _139.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _139.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_139.QueryUnpoolWhitelistResponse>): _139.QueryUnpoolWhitelistResponse;
        };
        Params: {
            encode(message: _138.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Params;
            fromPartial(object: Partial<_138.Params>): _138.Params;
        };
        GenesisState: {
            encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
            fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                denomAuthorityMetadata(request: _145.QueryDenomAuthorityMetadataRequest): Promise<_145.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _145.QueryDenomsFromCreatorRequest): Promise<_145.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _146.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _146.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _146.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _146.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _146.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _146.MsgCreateDenom): {
                        typeUrl: string;
                        value: _146.MsgCreateDenom;
                    };
                    mint(value: _146.MsgMint): {
                        typeUrl: string;
                        value: _146.MsgMint;
                    };
                    burn(value: _146.MsgBurn): {
                        typeUrl: string;
                        value: _146.MsgBurn;
                    };
                    changeAdmin(value: _146.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _146.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _146.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _146.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _146.MsgCreateDenom): {
                        typeUrl: string;
                        value: _146.MsgCreateDenom;
                    };
                    mint(value: _146.MsgMint): {
                        typeUrl: string;
                        value: _146.MsgMint;
                    };
                    burn(value: _146.MsgBurn): {
                        typeUrl: string;
                        value: _146.MsgBurn;
                    };
                    changeAdmin(value: _146.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _146.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _146.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _146.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _146.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _146.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _146.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _146.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _146.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _146.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _146.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _146.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _146.MsgSetDenomMetadata) => {
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
                    }) => _146.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _146.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateDenom;
                fromPartial(object: Partial<_146.MsgCreateDenom>): _146.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _146.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateDenomResponse;
                fromPartial(object: Partial<_146.MsgCreateDenomResponse>): _146.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _146.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgMint;
                fromPartial(object: Partial<_146.MsgMint>): _146.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _146.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgMintResponse;
                fromPartial(_: Partial<_146.MsgMintResponse>): _146.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _146.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgBurn;
                fromPartial(object: Partial<_146.MsgBurn>): _146.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _146.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgBurnResponse;
                fromPartial(_: Partial<_146.MsgBurnResponse>): _146.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _146.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgChangeAdmin;
                fromPartial(object: Partial<_146.MsgChangeAdmin>): _146.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _146.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgChangeAdminResponse;
                fromPartial(_: Partial<_146.MsgChangeAdminResponse>): _146.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _146.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgSetDenomMetadata;
                fromPartial(object: Partial<_146.MsgSetDenomMetadata>): _146.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _146.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_146.MsgSetDenomMetadataResponse>): _146.MsgSetDenomMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _145.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsRequest;
                fromPartial(_: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsResponse;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _145.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_145.QueryDenomAuthorityMetadataRequest>): _145.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _145.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_145.QueryDenomAuthorityMetadataResponse>): _145.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _145.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_145.QueryDenomsFromCreatorRequest>): _145.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _145.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_145.QueryDenomsFromCreatorResponse>): _145.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                fromPartial(object: Partial<_144.Params>): _144.Params;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
            GenesisDenom: {
                encode(message: _143.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisDenom;
                fromPartial(object: Partial<_143.GenesisDenom>): _143.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _142.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DenomAuthorityMetadata;
                fromPartial(object: Partial<_142.DenomAuthorityMetadata>): _142.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _148.ParamsRequest): Promise<_148.ParamsResponse>;
                arithmeticTwap(request: _148.ArithmeticTwapRequest): Promise<_148.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _148.ArithmeticTwapToNowRequest): Promise<_148.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _148.GeometricTwapRequest): Promise<_148.GeometricTwapResponse>;
                geometricTwapToNow(request: _148.GeometricTwapToNowRequest): Promise<_148.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            TwapRecord: {
                encode(message: _149.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.TwapRecord;
                fromPartial(object: Partial<_149.TwapRecord>): _149.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _148.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ArithmeticTwapRequest;
                fromPartial(object: Partial<_148.ArithmeticTwapRequest>): _148.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _148.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ArithmeticTwapResponse;
                fromPartial(object: Partial<_148.ArithmeticTwapResponse>): _148.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _148.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_148.ArithmeticTwapToNowRequest>): _148.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _148.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_148.ArithmeticTwapToNowResponse>): _148.ArithmeticTwapToNowResponse;
            };
            GeometricTwapRequest: {
                encode(message: _148.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GeometricTwapRequest;
                fromPartial(object: Partial<_148.GeometricTwapRequest>): _148.GeometricTwapRequest;
            };
            GeometricTwapResponse: {
                encode(message: _148.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GeometricTwapResponse;
                fromPartial(object: Partial<_148.GeometricTwapResponse>): _148.GeometricTwapResponse;
            };
            GeometricTwapToNowRequest: {
                encode(message: _148.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_148.GeometricTwapToNowRequest>): _148.GeometricTwapToNowRequest;
            };
            GeometricTwapToNowResponse: {
                encode(message: _148.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_148.GeometricTwapToNowResponse>): _148.GeometricTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _148.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ParamsRequest;
                fromPartial(_: Partial<_148.ParamsRequest>): _148.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _148.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ParamsResponse;
                fromPartial(object: Partial<_148.ParamsResponse>): _148.ParamsResponse;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromPartial(object: Partial<_147.Params>): _147.Params;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _153.QueryFeeTokensRequest): Promise<_153.QueryFeeTokensResponse>;
                denomSpotPrice(request: _153.QueryDenomSpotPriceRequest): Promise<_153.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _153.QueryDenomPoolIdRequest): Promise<_153.QueryDenomPoolIdResponse>;
                baseDenom(request?: _153.QueryBaseDenomRequest): Promise<_153.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _153.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeTokensRequest;
                fromPartial(_: Partial<_153.QueryFeeTokensRequest>): _153.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _153.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeTokensResponse;
                fromPartial(object: Partial<_153.QueryFeeTokensResponse>): _153.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _153.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_153.QueryDenomSpotPriceRequest>): _153.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _153.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_153.QueryDenomSpotPriceResponse>): _153.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _153.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_153.QueryDenomPoolIdRequest>): _153.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _153.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_153.QueryDenomPoolIdResponse>): _153.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _153.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryBaseDenomRequest;
                fromPartial(_: Partial<_153.QueryBaseDenomRequest>): _153.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _153.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryBaseDenomResponse;
                fromPartial(object: Partial<_153.QueryBaseDenomResponse>): _153.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _152.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_152.UpdateFeeTokenProposal>): _152.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            };
            FeeToken: {
                encode(message: _150.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FeeToken;
                fromPartial(object: Partial<_150.FeeToken>): _150.FeeToken;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _154.UserValidatorPreferencesRequest): Promise<_154.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _156.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _156.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _156.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _156.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _156.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _156.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _156.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _156.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _156.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _156.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _156.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _156.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _156.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _156.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _156.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _156.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _156.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _156.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _156.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _156.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _156.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _156.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _156.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _156.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _156.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _156.MsgSetValidatorSetPreference) => {
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
                    }) => _156.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _156.MsgDelegateToValidatorSet) => {
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
                    }) => _156.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _156.MsgUndelegateFromValidatorSet) => {
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
                    }) => _156.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _156.MsgRedelegateValidatorSet) => {
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
                    }) => _156.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: ({ delegator }: _156.MsgWithdrawDelegationRewards) => {
                        delegator: string;
                    };
                    fromAmino: ({ delegator }: {
                        delegator: string;
                    }) => _156.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: ({ delegator, lockID }: _156.MsgDelegateBondedTokens) => {
                        delegator: string;
                        lockID: string;
                    };
                    fromAmino: ({ delegator, lockID }: {
                        delegator: string;
                        lockID: string;
                    }) => _156.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _156.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_156.MsgSetValidatorSetPreference>): _156.MsgSetValidatorSetPreference;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _156.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_156.MsgSetValidatorSetPreferenceResponse>): _156.MsgSetValidatorSetPreferenceResponse;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _156.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_156.MsgDelegateToValidatorSet>): _156.MsgDelegateToValidatorSet;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _156.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_156.MsgDelegateToValidatorSetResponse>): _156.MsgDelegateToValidatorSetResponse;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _156.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_156.MsgUndelegateFromValidatorSet>): _156.MsgUndelegateFromValidatorSet;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _156.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_156.MsgUndelegateFromValidatorSetResponse>): _156.MsgUndelegateFromValidatorSetResponse;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _156.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_156.MsgRedelegateValidatorSet>): _156.MsgRedelegateValidatorSet;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _156.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_156.MsgRedelegateValidatorSetResponse>): _156.MsgRedelegateValidatorSetResponse;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _156.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_156.MsgWithdrawDelegationRewards>): _156.MsgWithdrawDelegationRewards;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _156.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_156.MsgWithdrawDelegationRewardsResponse>): _156.MsgWithdrawDelegationRewardsResponse;
            };
            MsgDelegateBondedTokens: {
                encode(message: _156.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_156.MsgDelegateBondedTokens>): _156.MsgDelegateBondedTokens;
            };
            MsgDelegateBondedTokensResponse: {
                encode(_: _156.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_156.MsgDelegateBondedTokensResponse>): _156.MsgDelegateBondedTokensResponse;
            };
            ValidatorPreference: {
                encode(message: _155.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ValidatorPreference;
                fromPartial(object: Partial<_155.ValidatorPreference>): _155.ValidatorPreference;
            };
            ValidatorSetPreferences: {
                encode(message: _155.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ValidatorSetPreferences;
                fromPartial(object: Partial<_155.ValidatorSetPreferences>): _155.ValidatorSetPreferences;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _154.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_154.UserValidatorPreferencesRequest>): _154.UserValidatorPreferencesRequest;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _154.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_154.UserValidatorPreferencesResponse>): _154.UserValidatorPreferencesResponse;
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
                            v1beta1: _276.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _277.MsgClientImpl;
                        };
                    };
                    v1beta1: _278.MsgClientImpl;
                };
                incentives: _279.MsgClientImpl;
                lockup: _280.MsgClientImpl;
                poolmanager: {
                    v1beta1: _281.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _282.MsgClientImpl;
                };
                superfluid: _283.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _284.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _285.MsgClientImpl;
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
            };
            osmosis: {
                concentratedliquidity: {
                    v1beta1: {
                        pools(request?: import("./concentrated-liquidity/pool-model/query").QueryPoolsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryPoolsResponse>;
                        pool(request: import("./concentrated-liquidity/pool-model/query").QueryPoolRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryPoolResponse>;
                        params(request?: import("./concentrated-liquidity/pool-model/query").QueryParamsRequest): Promise<import("./concentrated-liquidity/pool-model/query").QueryParamsResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _94.RecoveredSinceDowntimeOfLengthRequest): Promise<_94.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _96.QueryEpochsInfoRequest): Promise<_96.QueryEpochsInfoResponse>;
                        currentEpoch(request: _96.QueryCurrentEpochRequest): Promise<_96.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _100.QueryPoolsRequest): Promise<_100.QueryPoolsResponse>;
                        numPools(request?: _100.QueryNumPoolsRequest): Promise<_100.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _100.QueryTotalLiquidityRequest): Promise<_100.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _100.QueryPoolsWithFilterRequest): Promise<_100.QueryPoolsWithFilterResponse>;
                        pool(request: _100.QueryPoolRequest): Promise<_100.QueryPoolResponse>;
                        poolType(request: _100.QueryPoolTypeRequest): Promise<_100.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _100.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_100.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _100.QueryCalcJoinPoolSharesRequest): Promise<_100.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _100.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_100.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _100.QueryPoolParamsRequest): Promise<_100.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _100.QueryTotalPoolLiquidityRequest): Promise<_100.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _100.QueryTotalSharesRequest): Promise<_100.QueryTotalSharesResponse>;
                        spotPrice(request: _100.QuerySpotPriceRequest): Promise<_100.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _100.QuerySwapExactAmountInRequest): Promise<_100.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _100.QuerySwapExactAmountOutRequest): Promise<_100.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _105.QuerySpotPriceRequest): Promise<_105.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _111.ModuleToDistributeCoinsRequest): Promise<_111.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _111.GaugeByIDRequest): Promise<_111.GaugeByIDResponse>;
                    gauges(request?: _111.GaugesRequest): Promise<_111.GaugesResponse>;
                    activeGauges(request?: _111.ActiveGaugesRequest): Promise<_111.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _111.ActiveGaugesPerDenomRequest): Promise<_111.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _111.UpcomingGaugesRequest): Promise<_111.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _111.UpcomingGaugesPerDenomRequest): Promise<_111.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _111.RewardsEstRequest): Promise<_111.RewardsEstResponse>;
                    lockableDurations(request?: _111.QueryLockableDurationsRequest): Promise<_111.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _116.ModuleBalanceRequest): Promise<_116.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _116.ModuleLockedAmountRequest): Promise<_116.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _116.AccountUnlockableCoinsRequest): Promise<_116.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _116.AccountUnlockingCoinsRequest): Promise<_116.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _116.AccountLockedCoinsRequest): Promise<_116.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _116.AccountLockedPastTimeRequest): Promise<_116.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _116.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_116.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _116.AccountUnlockedBeforeTimeRequest): Promise<_116.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _116.AccountLockedPastTimeDenomRequest): Promise<_116.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _116.LockedDenomRequest): Promise<_116.LockedDenomResponse>;
                    lockedByID(request: _116.LockedRequest): Promise<_116.LockedResponse>;
                    syntheticLockupsByLockupID(request: _116.SyntheticLockupsByLockupIDRequest): Promise<_116.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _116.AccountLockedLongerDurationRequest): Promise<_116.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _116.AccountLockedDurationRequest): Promise<_116.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _116.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_116.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _116.AccountLockedLongerDurationDenomRequest): Promise<_116.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                        epochProvisions(request?: _120.QueryEpochProvisionsRequest): Promise<_120.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _124.QueryGaugeIdsRequest): Promise<_124.QueryGaugeIdsResponse>;
                        distrInfo(request?: _124.QueryDistrInfoRequest): Promise<_124.QueryDistrInfoResponse>;
                        params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                        lockableDurations(request?: _124.QueryLockableDurationsRequest): Promise<_124.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _124.QueryIncentivizedPoolsRequest): Promise<_124.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _124.QueryExternalIncentiveGaugesRequest): Promise<_124.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _127.ParamsRequest): Promise<_127.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _127.EstimateSwapExactAmountInRequest): Promise<_127.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _127.EstimateSwapExactAmountOutRequest): Promise<_127.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _127.NumPoolsRequest): Promise<_127.NumPoolsResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _134.QueryGetProtoRevNumberOfTradesRequest): Promise<_134.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _134.QueryGetProtoRevProfitsByDenomRequest): Promise<_134.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _134.QueryGetProtoRevAllProfitsRequest): Promise<_134.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByPool(request: _134.QueryGetProtoRevStatisticsByPoolRequest): Promise<_134.QueryGetProtoRevStatisticsByPoolResponse>;
                        getProtoRevAllStatistics(request?: _134.QueryGetProtoRevAllStatisticsRequest): Promise<_134.QueryGetProtoRevAllStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _134.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_134.QueryGetProtoRevTokenPairArbRoutesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                    assetType(request: _139.AssetTypeRequest): Promise<_139.AssetTypeResponse>;
                    allAssets(request?: _139.AllAssetsRequest): Promise<_139.AllAssetsResponse>;
                    assetMultiplier(request: _139.AssetMultiplierRequest): Promise<_139.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _139.AllIntermediaryAccountsRequest): Promise<_139.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _139.ConnectedIntermediaryAccountRequest): Promise<_139.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _139.QueryTotalDelegationByValidatorForDenomRequest): Promise<_139.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _139.TotalSuperfluidDelegationsRequest): Promise<_139.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _139.SuperfluidDelegationAmountRequest): Promise<_139.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _139.SuperfluidDelegationsByDelegatorRequest): Promise<_139.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _139.SuperfluidUndelegationsByDelegatorRequest): Promise<_139.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _139.SuperfluidDelegationsByValidatorDenomRequest): Promise<_139.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _139.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_139.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _139.QueryTotalDelegationByDelegatorRequest): Promise<_139.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _139.QueryUnpoolWhitelistRequest): Promise<_139.QueryUnpoolWhitelistResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _145.QueryDenomAuthorityMetadataRequest): Promise<_145.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _145.QueryDenomsFromCreatorRequest): Promise<_145.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _148.ParamsRequest): Promise<_148.ParamsResponse>;
                        arithmeticTwap(request: _148.ArithmeticTwapRequest): Promise<_148.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _148.ArithmeticTwapToNowRequest): Promise<_148.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _148.GeometricTwapRequest): Promise<_148.GeometricTwapResponse>;
                        geometricTwapToNow(request: _148.GeometricTwapToNowRequest): Promise<_148.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _153.QueryFeeTokensRequest): Promise<_153.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _153.QueryDenomSpotPriceRequest): Promise<_153.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _153.QueryDenomPoolIdRequest): Promise<_153.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _153.QueryBaseDenomRequest): Promise<_153.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _154.UserValidatorPreferencesRequest): Promise<_154.UserValidatorPreferencesResponse>;
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
            };
            osmosis: {
                concentratedliquidity: {
                    v1beta1: import("./concentrated-liquidity/pool-model/query.lcd").LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _242.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _243.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _244.LCDQueryClient;
                    v2: _245.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _246.LCDQueryClient;
                };
                incentives: _247.LCDQueryClient;
                lockup: _248.LCDQueryClient;
                mint: {
                    v1beta1: _249.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _250.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _251.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _252.LCDQueryClient;
                };
                superfluid: _253.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _254.LCDQueryClient;
                };
                twap: {
                    v1beta1: _255.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _256.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _257.LCDQueryClient;
                };
            };
        }>;
    };
}
