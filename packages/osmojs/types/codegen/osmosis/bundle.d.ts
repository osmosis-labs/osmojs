import * as _82 from "./epochs/genesis";
import * as _83 from "./epochs/query";
import * as _84 from "./gamm/pool-models/balancer/balancerPool";
import * as _85 from "./gamm/v1beta1/genesis";
import * as _86 from "./gamm/v1beta1/query";
import * as _87 from "./gamm/v1beta1/tx";
import * as _88 from "./gamm/pool-models/balancer/tx/tx";
import * as _89 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _90 from "./gamm/pool-models/stableswap/tx";
import * as _91 from "./incentives/gauge";
import * as _92 from "./incentives/genesis";
import * as _93 from "./incentives/params";
import * as _94 from "./incentives/query";
import * as _95 from "./incentives/tx";
import * as _96 from "./lockup/genesis";
import * as _97 from "./lockup/lock";
import * as _98 from "./lockup/query";
import * as _99 from "./lockup/tx";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./pool-incentives/v1beta1/genesis";
import * as _104 from "./pool-incentives/v1beta1/gov";
import * as _105 from "./pool-incentives/v1beta1/incentives";
import * as _106 from "./pool-incentives/v1beta1/query";
import * as _107 from "./store/v1beta1/tree";
import * as _108 from "./streamswap/v1/event";
import * as _109 from "./streamswap/v1/genesis";
import * as _110 from "./streamswap/v1/params";
import * as _111 from "./streamswap/v1/query";
import * as _112 from "./streamswap/v1/state";
import * as _113 from "./streamswap/v1/tx";
import * as _114 from "./superfluid/genesis";
import * as _115 from "./superfluid/params";
import * as _116 from "./superfluid/query";
import * as _117 from "./superfluid/superfluid";
import * as _118 from "./superfluid/tx";
import * as _119 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _120 from "./tokenfactory/v1beta1/genesis";
import * as _121 from "./tokenfactory/v1beta1/params";
import * as _122 from "./tokenfactory/v1beta1/query";
import * as _123 from "./tokenfactory/v1beta1/tx";
import * as _124 from "./twap/v1beta1/genesis";
import * as _125 from "./twap/v1beta1/query";
import * as _126 from "./twap/v1beta1/twap_record";
import * as _127 from "./txfees/v1beta1/feetoken";
import * as _128 from "./txfees/v1beta1/genesis";
import * as _129 from "./txfees/v1beta1/gov";
import * as _130 from "./txfees/v1beta1/query";
import * as _220 from "./epochs/query.lcd";
import * as _221 from "./gamm/v1beta1/query.lcd";
import * as _222 from "./incentives/query.lcd";
import * as _223 from "./lockup/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./pool-incentives/v1beta1/query.lcd";
import * as _226 from "./streamswap/v1/query.lcd";
import * as _227 from "./superfluid/query.lcd";
import * as _228 from "./tokenfactory/v1beta1/query.lcd";
import * as _229 from "./twap/v1beta1/query.lcd";
import * as _230 from "./txfees/v1beta1/query.lcd";
import * as _231 from "./epochs/query.rpc.query";
import * as _232 from "./gamm/v1beta1/query.rpc.query";
import * as _233 from "./incentives/query.rpc.query";
import * as _234 from "./lockup/query.rpc.query";
import * as _235 from "./mint/v1beta1/query.rpc.query";
import * as _236 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _237 from "./streamswap/v1/query.rpc.query";
import * as _238 from "./superfluid/query.rpc.query";
import * as _239 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _240 from "./twap/v1beta1/query.rpc.query";
import * as _241 from "./txfees/v1beta1/query.rpc.query";
import * as _242 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _243 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _244 from "./gamm/v1beta1/tx.rpc.msg";
import * as _245 from "./incentives/tx.rpc.msg";
import * as _246 from "./lockup/tx.rpc.msg";
import * as _247 from "./streamswap/v1/tx.rpc.msg";
import * as _248 from "./superfluid/tx.rpc.msg";
import * as _249 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _83.QueryEpochsInfoRequest): Promise<_83.QueryEpochsInfoResponse>;
                currentEpoch(request: _83.QueryCurrentEpochRequest): Promise<_83.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _83.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryEpochsInfoRequest;
                fromPartial(_: {}): _83.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _83.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryEpochsInfoResponse;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _83.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _83.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryCurrentEpochRequest;
                fromPartial(object: {
                    identifier?: string;
                }): _83.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _83.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryCurrentEpochResponse;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _83.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _82.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.EpochInfo;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _82.EpochInfo;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _82.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _86.QueryPoolsRequest): Promise<_86.QueryPoolsResponse>;
                numPools(request?: _86.QueryNumPoolsRequest): Promise<_86.QueryNumPoolsResponse>;
                totalLiquidity(request?: _86.QueryTotalLiquidityRequest): Promise<_86.QueryTotalLiquidityResponse>;
                pool(request: _86.QueryPoolRequest): Promise<_86.QueryPoolResponse>;
                poolType(request: _86.QueryPoolTypeRequest): Promise<_86.QueryPoolTypeResponse>;
                poolParams(request: _86.QueryPoolParamsRequest): Promise<_86.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _86.QueryTotalPoolLiquidityRequest): Promise<_86.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _86.QueryTotalSharesRequest): Promise<_86.QueryTotalSharesResponse>;
                spotPrice(request: _86.QuerySpotPriceRequest): Promise<_86.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _86.QuerySwapExactAmountInRequest): Promise<_86.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _86.QuerySwapExactAmountOutRequest): Promise<_86.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _87.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _87.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _87.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _87.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _87.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _87.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _87.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _87.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _87.MsgJoinPool): {
                        typeUrl: string;
                        value: _87.MsgJoinPool;
                    };
                    exitPool(value: _87.MsgExitPool): {
                        typeUrl: string;
                        value: _87.MsgExitPool;
                    };
                    swapExactAmountIn(value: _87.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _87.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _87.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _87.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _87.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _87.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _87.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _87.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _87.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _87.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _87.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _87.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _87.MsgJoinPool): {
                        typeUrl: string;
                        value: _87.MsgJoinPool;
                    };
                    exitPool(value: _87.MsgExitPool): {
                        typeUrl: string;
                        value: _87.MsgExitPool;
                    };
                    swapExactAmountIn(value: _87.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _87.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _87.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _87.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _87.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _87.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _87.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _87.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _87.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _87.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _87.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _87.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _87.MsgJoinPool) => {
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
                    }) => _87.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _87.MsgExitPool) => {
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
                    }) => _87.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _87.MsgSwapExactAmountIn) => {
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
                    }) => _87.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _87.MsgSwapExactAmountOut) => {
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
                    }) => _87.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _87.MsgJoinSwapExternAmountIn) => {
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
                    }) => _87.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _87.MsgJoinSwapShareAmountOut) => {
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
                    }) => _87.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _87.MsgExitSwapExternAmountOut) => {
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
                    }) => _87.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _87.MsgExitSwapShareAmountIn) => {
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
                    }) => _87.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _87.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _87.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinPoolResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _87.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _87.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitPoolResponse;
                fromPartial(object: {
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _87.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _87.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _87.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSwapExactAmountIn;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenOutMinAmount?: string;
                }): _87.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _87.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSwapExactAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _87.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _87.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SwapAmountOutRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _87.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _87.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSwapExactAmountOut;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenInMaxAmount?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _87.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _87.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgSwapExactAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _87.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _87.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinSwapExternAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _87.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _87.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _87.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _87.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinSwapShareAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _87.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _87.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _87.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _87.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitSwapShareAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _87.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _87.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitSwapShareAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _87.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _87.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitSwapExternAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _87.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _87.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _87.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _86.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _86.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _86.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _86.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _86.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _86.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _86.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _86.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryNumPoolsRequest;
                fromPartial(_: {}): _86.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _86.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryNumPoolsResponse;
                fromPartial(object: {
                    numPools?: any;
                }): _86.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _86.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolTypeRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _86.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _86.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolTypeResponse;
                fromPartial(object: {
                    poolType?: string;
                }): _86.QueryPoolTypeResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _86.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolParamsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _86.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _86.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryPoolParamsResponse;
                fromPartial(object: {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _86.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _86.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalPoolLiquidityRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _86.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _86.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalPoolLiquidityResponse;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _86.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalSharesRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _86.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _86.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalSharesResponse;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _86.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySpotPriceRequest;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _86.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _86.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySpotPriceResponse;
                fromPartial(object: {
                    spotPrice?: string;
                }): _86.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _86.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySwapExactAmountInRequest;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _86.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _86.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySwapExactAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _86.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _86.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySwapExactAmountOutRequest;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _86.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _86.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QuerySwapExactAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _86.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _86.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalLiquidityRequest;
                fromPartial(_: {}): _86.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _86.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryTotalLiquidityResponse;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromPartial(object: {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _85.Params;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nextPoolNumber?: any;
                    params?: {
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _85.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _84.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SmoothWeightChangeParams;
                fromPartial(object: {
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialPoolWeights?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                    targetPoolWeights?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                }): _84.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _84.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PoolParams;
                fromPartial(object: {
                    swapFee?: string;
                    exitFee?: string;
                    smoothWeightChangeParams?: {
                        startTime?: Date;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialPoolWeights?: {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[];
                        targetPoolWeights?: {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[];
                    };
                }): _84.PoolParams;
            };
            PoolAsset: {
                encode(message: _84.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PoolAsset;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _84.PoolAsset;
            };
            Pool: {
                encode(message: _84.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Pool;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                    poolParams?: {
                        swapFee?: string;
                        exitFee?: string;
                        smoothWeightChangeParams?: {
                            startTime?: Date;
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialPoolWeights?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                            targetPoolWeights?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                        };
                    };
                    futurePoolGovernor?: string;
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                    poolAssets?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                    totalWeight?: string;
                }): _84.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _242.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _88.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _88.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _88.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _88.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _88.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _88.MsgCreateBalancerPool) => {
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
                            }) => _88.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _88.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateBalancerPool;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                                smoothWeightChangeParams?: {
                                    startTime?: Date;
                                    duration?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    initialPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                    targetPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                };
                            };
                            poolAssets?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                            futurePoolGovernor?: string;
                        }): _88.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _88.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateBalancerPoolResponse;
                        fromPartial(object: {
                            poolId?: any;
                        }): _88.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _243.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _90.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _90.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _90.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _90.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _90.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _90.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _90.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _90.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _90.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _90.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor }: _90.MsgCreateStableswapPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: Long[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, pool_params, initial_pool_liquidity, scaling_factors, future_pool_governor }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: Long[];
                                future_pool_governor: string;
                            }) => _90.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _90.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _90.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _90.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateStableswapPool;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            initialPoolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scalingFactors?: any[];
                            futurePoolGovernor?: string;
                        }): _90.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _90.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCreateStableswapPoolResponse;
                        fromPartial(object: {
                            poolId?: any;
                        }): _90.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _90.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _90.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _90.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: {}): _90.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _89.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PoolParams;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _89.PoolParams;
                    };
                    Pool: {
                        encode(message: _89.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Pool;
                        fromPartial(object: {
                            address?: string;
                            id?: any;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            futurePoolGovernor?: string;
                            totalShares?: {
                                denom?: string;
                                amount?: string;
                            };
                            poolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scalingFactor?: any[];
                            scalingFactorGovernor?: string;
                        }): _89.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _245.MsgClientImpl;
        QueryClientImpl: typeof _233.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _94.ModuleToDistributeCoinsRequest): Promise<_94.ModuleToDistributeCoinsResponse>;
            moduleDistributedCoins(request?: _94.ModuleDistributedCoinsRequest): Promise<_94.ModuleDistributedCoinsResponse>;
            gaugeByID(request: _94.GaugeByIDRequest): Promise<_94.GaugeByIDResponse>;
            gauges(request?: _94.GaugesRequest): Promise<_94.GaugesResponse>;
            activeGauges(request?: _94.ActiveGaugesRequest): Promise<_94.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _94.ActiveGaugesPerDenomRequest): Promise<_94.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _94.UpcomingGaugesRequest): Promise<_94.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _94.UpcomingGaugesPerDenomRequest): Promise<_94.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _94.RewardsEstRequest): Promise<_94.RewardsEstResponse>;
            lockableDurations(request?: _94.QueryLockableDurationsRequest): Promise<_94.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _222.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _95.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _95.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _95.MsgCreateGauge): {
                    typeUrl: string;
                    value: _95.MsgCreateGauge;
                };
                addToGauge(value: _95.MsgAddToGauge): {
                    typeUrl: string;
                    value: _95.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _95.MsgCreateGauge): {
                    typeUrl: string;
                    value: _95.MsgCreateGauge;
                };
                addToGauge(value: _95.MsgAddToGauge): {
                    typeUrl: string;
                    value: _95.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _95.MsgCreateGauge) => {
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
                }) => _95.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _95.MsgAddToGauge) => {
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
                }) => _95.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _95.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgCreateGauge;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _97.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: any;
            }): _95.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _95.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgCreateGaugeResponse;
            fromPartial(_: {}): _95.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _95.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgAddToGauge;
            fromPartial(object: {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _95.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _95.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgAddToGaugeResponse;
            fromPartial(_: {}): _95.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _94.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModuleToDistributeCoinsRequest;
            fromPartial(_: {}): _94.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _94.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModuleToDistributeCoinsResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _94.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _94.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModuleDistributedCoinsRequest;
            fromPartial(_: {}): _94.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _94.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModuleDistributedCoinsResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _94.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _94.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GaugeByIDRequest;
            fromPartial(object: {
                id?: any;
            }): _94.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _94.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GaugeByIDResponse;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _94.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _94.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _94.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _94.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GaugesResponse;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _94.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _94.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ActiveGaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _94.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _94.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ActiveGaugesResponse;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _94.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _94.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ActiveGaugesPerDenomRequest;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _94.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _94.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ActiveGaugesPerDenomResponse;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _94.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _94.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.UpcomingGaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _94.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _94.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.UpcomingGaugesResponse;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _94.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _94.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.UpcomingGaugesPerDenomRequest;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _94.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _94.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.UpcomingGaugesPerDenomResponse;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _94.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _94.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RewardsEstRequest;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _94.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _94.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.RewardsEstResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _94.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _94.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryLockableDurationsRequest;
            fromPartial(_: {}): _94.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _94.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryLockableDurationsResponse;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _94.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _93.Params;
        };
        GenesisState: {
            encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GenesisState;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _97.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
                lastGaugeId?: any;
            }): _92.GenesisState;
        };
        Gauge: {
            encode(message: _91.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Gauge;
            fromPartial(object: {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _97.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: any;
                filledEpochs?: any;
                distributedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _91.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _91.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.LockableDurationsInfo;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _91.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _246.MsgClientImpl;
        QueryClientImpl: typeof _234.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _98.ModuleBalanceRequest): Promise<_98.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _98.ModuleLockedAmountRequest): Promise<_98.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _98.AccountUnlockableCoinsRequest): Promise<_98.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _98.AccountUnlockingCoinsRequest): Promise<_98.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _98.AccountLockedCoinsRequest): Promise<_98.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _98.AccountLockedPastTimeRequest): Promise<_98.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _98.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_98.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _98.AccountUnlockedBeforeTimeRequest): Promise<_98.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _98.AccountLockedPastTimeDenomRequest): Promise<_98.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _98.LockedDenomRequest): Promise<_98.LockedDenomResponse>;
            lockedByID(request: _98.LockedRequest): Promise<_98.LockedResponse>;
            syntheticLockupsByLockupID(request: _98.SyntheticLockupsByLockupIDRequest): Promise<_98.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _98.AccountLockedLongerDurationRequest): Promise<_98.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _98.AccountLockedDurationRequest): Promise<_98.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _98.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_98.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _98.AccountLockedLongerDurationDenomRequest): Promise<_98.AccountLockedLongerDurationDenomResponse>;
        };
        LCDQueryClient: typeof _223.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _99.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _99.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _99.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _99.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _99.MsgLockTokens): {
                    typeUrl: string;
                    value: _99.MsgLockTokens;
                };
                beginUnlockingAll(value: _99.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _99.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _99.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _99.MsgBeginUnlocking;
                };
                extendLockup(value: _99.MsgExtendLockup): {
                    typeUrl: string;
                    value: _99.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _99.MsgLockTokens): {
                    typeUrl: string;
                    value: _99.MsgLockTokens;
                };
                beginUnlockingAll(value: _99.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _99.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _99.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _99.MsgBeginUnlocking;
                };
                extendLockup(value: _99.MsgExtendLockup): {
                    typeUrl: string;
                    value: _99.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _99.MsgLockTokens) => {
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
                }) => _99.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _99.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _99.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _99.MsgBeginUnlocking) => {
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
                }) => _99.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _99.MsgExtendLockup) => {
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
                }) => _99.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _99.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgLockTokens;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _99.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _99.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgLockTokensResponse;
            fromPartial(object: {
                ID?: any;
            }): _99.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _99.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBeginUnlockingAll;
            fromPartial(object: {
                owner?: string;
            }): _99.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _99.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBeginUnlockingAllResponse;
            fromPartial(object: {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _99.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _99.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBeginUnlocking;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _99.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _99.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBeginUnlockingResponse;
            fromPartial(object: {
                success?: boolean;
            }): _99.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _99.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgExtendLockup;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _99.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _99.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgExtendLockupResponse;
            fromPartial(object: {
                success?: boolean;
            }): _99.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _98.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ModuleBalanceRequest;
            fromPartial(_: {}): _98.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _98.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ModuleBalanceResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _98.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _98.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ModuleLockedAmountRequest;
            fromPartial(_: {}): _98.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _98.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ModuleLockedAmountResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _98.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _98.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockableCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _98.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _98.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockableCoinsResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _98.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _98.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockingCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _98.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _98.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockingCoinsResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _98.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _98.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _98.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _98.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedCoinsResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _98.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _98.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _98.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _98.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _98.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _98.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _98.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _98.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _98.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _98.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _98.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeDenomRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _98.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _98.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedPastTimeDenomResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _98.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LockedDenomRequest;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _98.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _98.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LockedDenomResponse;
            fromPartial(object: {
                amount?: string;
            }): _98.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _98.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LockedRequest;
            fromPartial(object: {
                lockId?: any;
            }): _98.LockedRequest;
        };
        LockedResponse: {
            encode(message: _98.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LockedResponse;
            fromPartial(object: {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _98.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _98.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: {
                lockId?: any;
            }): _98.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _98.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: {
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _98.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _98.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _98.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _98.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _98.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedDurationRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _98.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _98.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedDurationResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _98.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _98.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _98.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _98.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _98.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _98.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _98.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _97.LockQueryType;
        lockQueryTypeToJSON(object: _97.LockQueryType): string;
        LockQueryType: typeof _97.LockQueryType;
        LockQueryTypeSDKType: typeof _97.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _97.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.PeriodLock;
            fromPartial(object: {
                ID?: any;
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                endTime?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _97.PeriodLock;
        };
        QueryCondition: {
            encode(message: _97.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCondition;
            fromPartial(object: {
                lockQueryType?: _97.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _97.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _97.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SyntheticLock;
            fromPartial(object: {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _97.SyntheticLock;
        };
        GenesisState: {
            encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
            fromPartial(object: {
                lastLockId?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _96.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                epochProvisions(request?: _102.QueryEpochProvisionsRequest): Promise<_102.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                fromPartial(_: {}): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                }): _102.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _102.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _102.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _102.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _102.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _101.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _101.Minter;
            };
            WeightedAddress: {
                encode(message: _101.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _101.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _101.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _101.DistributionProportions;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    };
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                    mintingRewardsDistributionStartEpoch?: any;
                }): _101.Params;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                    reductionStartedEpoch?: any;
                }): _100.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _106.QueryGaugeIdsRequest): Promise<_106.QueryGaugeIdsResponse>;
                distrInfo(request?: _106.QueryDistrInfoRequest): Promise<_106.QueryDistrInfoResponse>;
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                lockableDurations(request?: _106.QueryLockableDurationsRequest): Promise<_106.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _106.QueryIncentivizedPoolsRequest): Promise<_106.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _106.QueryExternalIncentiveGaugesRequest): Promise<_106.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _106.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryGaugeIdsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _106.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _106.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryGaugeIdsResponse;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gaugeIncentivePercentage?: string;
                    }[];
                }): _106.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _106.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: {
                    gaugeId?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gaugeIncentivePercentage?: string;
                }): _106.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _106.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDistrInfoRequest;
                fromPartial(_: {}): _106.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _106.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDistrInfoResponse;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _106.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsRequest;
                fromPartial(_: {}): _106.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _106.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _106.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryLockableDurationsRequest;
                fromPartial(_: {}): _106.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _106.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryLockableDurationsResponse;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _106.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _106.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryIncentivizedPoolsRequest;
                fromPartial(_: {}): _106.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _106.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.IncentivizedPool;
                fromPartial(object: {
                    poolId?: any;
                    lockableDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gaugeId?: any;
                }): _106.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _106.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryIncentivizedPoolsResponse;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gaugeId?: any;
                    }[];
                }): _106.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _106.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: {}): _106.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _106.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _97.LockQueryType;
                            denom?: string;
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            timestamp?: Date;
                        };
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        numEpochsPaidOver?: any;
                        filledEpochs?: any;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _106.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _105.Params;
            };
            LockableDurationsInfo: {
                encode(message: _105.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.LockableDurationsInfo;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _105.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _105.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DistrInfo;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _105.DistrInfo;
            };
            DistrRecord: {
                encode(message: _105.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DistrRecord;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _105.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _105.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PoolToGauge;
                fromPartial(object: {
                    poolId?: any;
                    gaugeId?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _105.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _105.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PoolToGauges;
                fromPartial(object: {
                    poolToGauge?: {
                        poolId?: any;
                        gaugeId?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _105.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _104.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ReplacePoolIncentivesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _104.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _104.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UpdatePoolIncentivesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _104.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                    poolToGauges?: {
                        poolToGauge?: {
                            poolId?: any;
                            gaugeId?: any;
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                    };
                }): _103.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _107.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Node;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _107.Node;
            };
            Child: {
                encode(message: _107.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Child;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _107.Child;
            };
            Leaf: {
                encode(message: _107.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Leaf;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _107.Leaf;
            };
        };
    }
    namespace streamswap {
        const v1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                sales(request?: _111.QuerySales): Promise<_111.QuerySalesResponse>;
                sale(request: _111.QuerySale): Promise<_111.QuerySaleResponse>;
                userPosition(request: _111.QueryUserPosition): Promise<_111.QueryUserPositionResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSale(value: _113.MsgCreateSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subscribe(value: _113.MsgSubscribe): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _113.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSale(value: _113.MsgExitSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    finalizeSale(value: _113.MsgFinalizeSale): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSale(value: _113.MsgCreateSale): {
                        typeUrl: string;
                        value: _113.MsgCreateSale;
                    };
                    subscribe(value: _113.MsgSubscribe): {
                        typeUrl: string;
                        value: _113.MsgSubscribe;
                    };
                    withdraw(value: _113.MsgWithdraw): {
                        typeUrl: string;
                        value: _113.MsgWithdraw;
                    };
                    exitSale(value: _113.MsgExitSale): {
                        typeUrl: string;
                        value: _113.MsgExitSale;
                    };
                    finalizeSale(value: _113.MsgFinalizeSale): {
                        typeUrl: string;
                        value: _113.MsgFinalizeSale;
                    };
                };
                fromPartial: {
                    createSale(value: _113.MsgCreateSale): {
                        typeUrl: string;
                        value: _113.MsgCreateSale;
                    };
                    subscribe(value: _113.MsgSubscribe): {
                        typeUrl: string;
                        value: _113.MsgSubscribe;
                    };
                    withdraw(value: _113.MsgWithdraw): {
                        typeUrl: string;
                        value: _113.MsgWithdraw;
                    };
                    exitSale(value: _113.MsgExitSale): {
                        typeUrl: string;
                        value: _113.MsgExitSale;
                    };
                    finalizeSale(value: _113.MsgFinalizeSale): {
                        typeUrl: string;
                        value: _113.MsgFinalizeSale;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.streamswap.v1.MsgCreateSale": {
                    aminoType: string;
                    toAmino: ({ creator, tokenIn, tokenOut, maxFee, startTime, duration, recipient, name, url }: _113.MsgCreateSale) => {
                        creator: string;
                        token_in: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        max_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        recipient: string;
                        name: string;
                        url: string;
                    };
                    fromAmino: ({ creator, token_in, token_out, max_fee, start_time, duration, recipient, name, url }: {
                        creator: string;
                        token_in: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        max_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        recipient: string;
                        name: string;
                        url: string;
                    }) => _113.MsgCreateSale;
                };
                "/osmosis.streamswap.v1.MsgSubscribe": {
                    aminoType: string;
                    toAmino: ({ sender, saleId, amount }: _113.MsgSubscribe) => {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, sale_id, amount }: {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    }) => _113.MsgSubscribe;
                };
                "/osmosis.streamswap.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ sender, saleId, amount }: _113.MsgWithdraw) => {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, sale_id, amount }: {
                        sender: string;
                        sale_id: string;
                        amount: string;
                    }) => _113.MsgWithdraw;
                };
                "/osmosis.streamswap.v1.MsgExitSale": {
                    aminoType: string;
                    toAmino: ({ sender, saleId }: _113.MsgExitSale) => {
                        sender: string;
                        sale_id: string;
                    };
                    fromAmino: ({ sender, sale_id }: {
                        sender: string;
                        sale_id: string;
                    }) => _113.MsgExitSale;
                };
                "/osmosis.streamswap.v1.MsgFinalizeSale": {
                    aminoType: string;
                    toAmino: ({ sender, saleId }: _113.MsgFinalizeSale) => {
                        sender: string;
                        sale_id: string;
                    };
                    fromAmino: ({ sender, sale_id }: {
                        sender: string;
                        sale_id: string;
                    }) => _113.MsgFinalizeSale;
                };
            };
            MsgCreateSale: {
                encode(message: _113.MsgCreateSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateSale;
                fromPartial(object: {
                    creator?: string;
                    tokenIn?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    maxFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    recipient?: string;
                    name?: string;
                    url?: string;
                }): _113.MsgCreateSale;
            };
            MsgCreateSaleResponse: {
                encode(message: _113.MsgCreateSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateSaleResponse;
                fromPartial(object: {
                    saleId?: any;
                }): _113.MsgCreateSaleResponse;
            };
            MsgSubscribe: {
                encode(message: _113.MsgSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgSubscribe;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                    amount?: string;
                }): _113.MsgSubscribe;
            };
            MsgWithdraw: {
                encode(message: _113.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgWithdraw;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                    amount?: string;
                }): _113.MsgWithdraw;
            };
            MsgExitSale: {
                encode(message: _113.MsgExitSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgExitSale;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                }): _113.MsgExitSale;
            };
            MsgExitSaleResponse: {
                encode(message: _113.MsgExitSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgExitSaleResponse;
                fromPartial(object: {
                    purchased?: string;
                }): _113.MsgExitSaleResponse;
            };
            MsgFinalizeSale: {
                encode(message: _113.MsgFinalizeSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgFinalizeSale;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                }): _113.MsgFinalizeSale;
            };
            MsgFinalizeSaleResponse: {
                encode(message: _113.MsgFinalizeSaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgFinalizeSaleResponse;
                fromPartial(object: {
                    income?: string;
                }): _113.MsgFinalizeSaleResponse;
            };
            Sale: {
                encode(message: _112.Sale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Sale;
                fromPartial(object: {
                    treasury?: string;
                    id?: any;
                    tokenOut?: string;
                    tokenIn?: string;
                    tokenOutSupply?: string;
                    startTime?: Date;
                    endTime?: Date;
                    round?: any;
                    endRound?: any;
                    outRemaining?: string;
                    outSold?: string;
                    outPerShare?: string;
                    staked?: string;
                    income?: string;
                    shares?: string;
                    name?: string;
                    url?: string;
                }): _112.Sale;
            };
            UserPosition: {
                encode(message: _112.UserPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UserPosition;
                fromPartial(object: {
                    shares?: string;
                    staked?: string;
                    outPerShare?: string;
                    spent?: string;
                    purchased?: string;
                }): _112.UserPosition;
            };
            QuerySales: {
                encode(message: _111.QuerySales, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySales;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _111.QuerySales;
            };
            QuerySalesResponse: {
                encode(message: _111.QuerySalesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySalesResponse;
                fromPartial(object: {
                    sales?: {
                        treasury?: string;
                        id?: any;
                        tokenOut?: string;
                        tokenIn?: string;
                        tokenOutSupply?: string;
                        startTime?: Date;
                        endTime?: Date;
                        round?: any;
                        endRound?: any;
                        outRemaining?: string;
                        outSold?: string;
                        outPerShare?: string;
                        staked?: string;
                        income?: string;
                        shares?: string;
                        name?: string;
                        url?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _111.QuerySalesResponse;
            };
            QuerySale: {
                encode(message: _111.QuerySale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySale;
                fromPartial(object: {
                    saleId?: any;
                }): _111.QuerySale;
            };
            QuerySaleResponse: {
                encode(message: _111.QuerySaleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySaleResponse;
                fromPartial(object: {
                    sale?: {
                        treasury?: string;
                        id?: any;
                        tokenOut?: string;
                        tokenIn?: string;
                        tokenOutSupply?: string;
                        startTime?: Date;
                        endTime?: Date;
                        round?: any;
                        endRound?: any;
                        outRemaining?: string;
                        outSold?: string;
                        outPerShare?: string;
                        staked?: string;
                        income?: string;
                        shares?: string;
                        name?: string;
                        url?: string;
                    };
                }): _111.QuerySaleResponse;
            };
            QueryUserPosition: {
                encode(message: _111.QueryUserPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUserPosition;
                fromPartial(object: {
                    saleId?: any;
                    user?: string;
                }): _111.QueryUserPosition;
            };
            QueryUserPositionResponse: {
                encode(message: _111.QueryUserPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUserPositionResponse;
                fromPartial(object: {
                    userPosition?: {
                        shares?: string;
                        staked?: string;
                        outPerShare?: string;
                        spent?: string;
                        purchased?: string;
                    };
                }): _111.QueryUserPositionResponse;
            };
            Params: {
                encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                fromPartial(object: {
                    saleCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    saleCreationFeeRecipient?: string;
                    minDurationUntilStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    minSaleDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _110.Params;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromPartial(object: {
                    sales?: {
                        treasury?: string;
                        id?: any;
                        tokenOut?: string;
                        tokenIn?: string;
                        tokenOutSupply?: string;
                        startTime?: Date;
                        endTime?: Date;
                        round?: any;
                        endRound?: any;
                        outRemaining?: string;
                        outSold?: string;
                        outPerShare?: string;
                        staked?: string;
                        income?: string;
                        shares?: string;
                        name?: string;
                        url?: string;
                    }[];
                    userPositions?: {
                        accAddress?: string;
                        saleId?: any;
                        userPosition?: {
                            shares?: string;
                            staked?: string;
                            outPerShare?: string;
                            spent?: string;
                            purchased?: string;
                        };
                    }[];
                    nextSaleId?: any;
                    params?: {
                        saleCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        saleCreationFeeRecipient?: string;
                        minDurationUntilStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minSaleDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _109.GenesisState;
            };
            UserPositionKV: {
                encode(message: _109.UserPositionKV, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UserPositionKV;
                fromPartial(object: {
                    accAddress?: string;
                    saleId?: any;
                    userPosition?: {
                        shares?: string;
                        staked?: string;
                        outPerShare?: string;
                        spent?: string;
                        purchased?: string;
                    };
                }): _109.UserPositionKV;
            };
            EventCreateSale: {
                encode(message: _108.EventCreateSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventCreateSale;
                fromPartial(object: {
                    id?: any;
                    creator?: string;
                    tokenIn?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _108.EventCreateSale;
            };
            EventSubscribe: {
                encode(message: _108.EventSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventSubscribe;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                    amount?: string;
                }): _108.EventSubscribe;
            };
            EventWithdraw: {
                encode(message: _108.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventWithdraw;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                    amount?: string;
                }): _108.EventWithdraw;
            };
            EventExit: {
                encode(message: _108.EventExit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventExit;
                fromPartial(object: {
                    sender?: string;
                    saleId?: any;
                    purchased?: string;
                }): _108.EventExit;
            };
            EventFinalizeSale: {
                encode(message: _108.EventFinalizeSale, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventFinalizeSale;
                fromPartial(object: {
                    saleId?: any;
                    income?: string;
                }): _108.EventFinalizeSale;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _248.MsgClientImpl;
        QueryClientImpl: typeof _238.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
            assetType(request: _116.AssetTypeRequest): Promise<_116.AssetTypeResponse>;
            allAssets(request?: _116.AllAssetsRequest): Promise<_116.AllAssetsResponse>;
            assetMultiplier(request: _116.AssetMultiplierRequest): Promise<_116.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _116.AllIntermediaryAccountsRequest): Promise<_116.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _116.ConnectedIntermediaryAccountRequest): Promise<_116.ConnectedIntermediaryAccountResponse>;
            totalSuperfluidDelegations(request?: _116.TotalSuperfluidDelegationsRequest): Promise<_116.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _116.SuperfluidDelegationAmountRequest): Promise<_116.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _116.SuperfluidDelegationsByDelegatorRequest): Promise<_116.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _116.SuperfluidUndelegationsByDelegatorRequest): Promise<_116.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _116.SuperfluidDelegationsByValidatorDenomRequest): Promise<_116.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _116.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_116.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _116.QueryTotalDelegationByDelegatorRequest): Promise<_116.QueryTotalDelegationByDelegatorResponse>;
        };
        LCDQueryClient: typeof _227.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _118.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _118.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _118.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _118.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _118.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _118.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _118.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _118.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _118.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _118.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _118.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _118.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _118.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _118.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _118.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _118.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _118.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _118.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _118.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _118.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _118.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _118.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _118.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _118.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _118.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _118.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _118.MsgLockAndSuperfluidDelegate) => {
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
                }) => _118.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _118.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _118.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _118.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidDelegate;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _118.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _118.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidDelegateResponse;
            fromPartial(_: {}): _118.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _118.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidUndelegate;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _118.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _118.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidUndelegateResponse;
            fromPartial(_: {}): _118.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _118.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidUnbondLock;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _118.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _118.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: {}): _118.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _118.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgLockAndSuperfluidDelegate;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _118.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _118.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: {
                ID?: any;
            }): _118.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _118.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUnPoolWhitelistedPool;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _118.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _118.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _118.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _117.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _117.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _117.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _117.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _117.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SuperfluidAsset;
            fromPartial(object: {
                denom?: string;
                assetType?: _117.SuperfluidAssetType;
            }): _117.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _117.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SuperfluidIntermediaryAccount;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _117.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _117.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.OsmoEquivalentMultiplierRecord;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _117.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _117.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SuperfluidDelegationRecord;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                delegationAmount?: {
                    denom?: string;
                    amount?: string;
                };
                equivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _117.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _117.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.LockIdIntermediaryAccountConnection;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _117.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _117.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.UnpoolWhitelistedPools;
            fromPartial(object: {
                ids?: any[];
            }): _117.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _116.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsRequest;
            fromPartial(_: {}): _116.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _116.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _116.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _116.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AssetTypeRequest;
            fromPartial(object: {
                denom?: string;
            }): _116.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _116.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AssetTypeResponse;
            fromPartial(object: {
                assetType?: _117.SuperfluidAssetType;
            }): _116.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _116.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AllAssetsRequest;
            fromPartial(_: {}): _116.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _116.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AllAssetsResponse;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _117.SuperfluidAssetType;
                }[];
            }): _116.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _116.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AssetMultiplierRequest;
            fromPartial(object: {
                denom?: string;
            }): _116.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _116.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AssetMultiplierResponse;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _116.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _116.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            }): _116.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _116.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AllIntermediaryAccountsRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _116.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _116.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.AllIntermediaryAccountsResponse;
            fromPartial(object: {
                accounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _116.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _116.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectedIntermediaryAccountRequest;
            fromPartial(object: {
                lockId?: any;
            }): _116.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _116.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectedIntermediaryAccountResponse;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            }): _116.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _116.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TotalSuperfluidDelegationsRequest;
            fromPartial(_: {}): _116.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _116.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TotalSuperfluidDelegationsResponse;
            fromPartial(object: {
                totalDelegations?: string;
            }): _116.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _116.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationAmountRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _116.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _116.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationAmountResponse;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _116.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _116.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _116.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _116.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalEquivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _116.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _116.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _116.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _116.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalUndelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _116.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _116.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _116.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _116.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            }): _116.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _116.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _116.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _116.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _116.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _116.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _116.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _116.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                delegationResponse?: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalEquivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _116.QueryTotalDelegationByDelegatorResponse;
        };
        Params: {
            encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _115.Params;
        };
        GenesisState: {
            encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _117.SuperfluidAssetType;
                }[];
                osmoEquivalentMultipliers?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                }[];
                intermediaryAccounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                }[];
                intemediaryAccountConnections?: {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[];
            }): _114.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                denomAuthorityMetadata(request: _122.QueryDenomAuthorityMetadataRequest): Promise<_122.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _122.QueryDenomsFromCreatorRequest): Promise<_122.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: _123.MsgCreateDenom;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: _123.MsgMint;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: _123.MsgBurn;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _123.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _123.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _123.MsgCreateDenom): {
                        typeUrl: string;
                        value: _123.MsgCreateDenom;
                    };
                    mint(value: _123.MsgMint): {
                        typeUrl: string;
                        value: _123.MsgMint;
                    };
                    burn(value: _123.MsgBurn): {
                        typeUrl: string;
                        value: _123.MsgBurn;
                    };
                    changeAdmin(value: _123.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _123.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _123.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _123.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _123.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _123.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _123.MsgMint) => {
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
                    }) => _123.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _123.MsgBurn) => {
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
                    }) => _123.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _123.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _123.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _123.MsgSetDenomMetadata) => {
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
                    }) => _123.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _123.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _123.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _123.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _123.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _123.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMint;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _123.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _123.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMintResponse;
                fromPartial(_: {}): _123.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _123.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgBurn;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _123.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _123.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgBurnResponse;
                fromPartial(_: {}): _123.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _123.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _123.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _123.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgChangeAdminResponse;
                fromPartial(_: {}): _123.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _123.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSetDenomMetadata;
                fromPartial(object: {
                    sender?: string;
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _123.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _123.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSetDenomMetadataResponse;
                fromPartial(_: {}): _123.MsgSetDenomMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
                fromPartial(_: {}): _122.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _122.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _122.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _122.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _122.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _122.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _122.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _122.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _122.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _122.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _121.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _121.Params;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            admin?: string;
                        };
                    }[];
                }): _120.GenesisState;
            };
            GenesisDenom: {
                encode(message: _120.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisDenom;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _120.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _119.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.DenomAuthorityMetadata;
                fromPartial(object: {
                    admin?: string;
                }): _119.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _125.ParamsRequest): Promise<_125.ParamsResponse>;
                arithmeticTwap(request: _125.ArithmeticTwapRequest): Promise<_125.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _125.ArithmeticTwapToNowRequest): Promise<_125.ArithmeticTwapToNowResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            TwapRecord: {
                encode(message: _126.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TwapRecord;
                fromPartial(object: {
                    poolId?: any;
                    asset0Denom?: string;
                    asset1Denom?: string;
                    height?: any;
                    time?: Date;
                    p0LastSpotPrice?: string;
                    p1LastSpotPrice?: string;
                    p0ArithmeticTwapAccumulator?: string;
                    p1ArithmeticTwapAccumulator?: string;
                    lastErrorTime?: Date;
                }): _126.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _125.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ArithmeticTwapRequest;
                fromPartial(object: {
                    poolId?: any;
                    baseAsset?: string;
                    quoteAsset?: string;
                    startTime?: Date;
                    endTime?: Date;
                }): _125.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _125.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ArithmeticTwapResponse;
                fromPartial(object: {
                    arithmeticTwap?: string;
                }): _125.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _125.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ArithmeticTwapToNowRequest;
                fromPartial(object: {
                    poolId?: any;
                    baseAsset?: string;
                    quoteAsset?: string;
                    startTime?: Date;
                }): _125.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _125.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ArithmeticTwapToNowResponse;
                fromPartial(object: {
                    arithmeticTwap?: string;
                }): _125.ArithmeticTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _125.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ParamsRequest;
                fromPartial(_: {}): _125.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _125.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ParamsResponse;
                fromPartial(object: {
                    params?: {
                        pruneEpochIdentifier?: string;
                        recordHistoryKeepPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _125.ParamsResponse;
            };
            Params: {
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                fromPartial(object: {
                    pruneEpochIdentifier?: string;
                    recordHistoryKeepPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _124.Params;
            };
            GenesisState: {
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.GenesisState;
                fromPartial(object: {
                    twaps?: {
                        poolId?: any;
                        asset0Denom?: string;
                        asset1Denom?: string;
                        height?: any;
                        time?: Date;
                        p0LastSpotPrice?: string;
                        p1LastSpotPrice?: string;
                        p0ArithmeticTwapAccumulator?: string;
                        p1ArithmeticTwapAccumulator?: string;
                        lastErrorTime?: Date;
                    }[];
                    params?: {
                        pruneEpochIdentifier?: string;
                        recordHistoryKeepPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _124.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _130.QueryFeeTokensRequest): Promise<_130.QueryFeeTokensResponse>;
                denomSpotPrice(request: _130.QueryDenomSpotPriceRequest): Promise<_130.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _130.QueryDenomPoolIdRequest): Promise<_130.QueryDenomPoolIdResponse>;
                baseDenom(request?: _130.QueryBaseDenomRequest): Promise<_130.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _130.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryFeeTokensRequest;
                fromPartial(_: {}): _130.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _130.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryFeeTokensResponse;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _130.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _130.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _130.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _130.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryDenomSpotPriceResponse;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _130.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _130.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _130.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _130.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryDenomPoolIdResponse;
                fromPartial(object: {
                    poolID?: any;
                }): _130.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _130.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryBaseDenomRequest;
                fromPartial(_: {}): _130.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _130.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.QueryBaseDenomResponse;
                fromPartial(object: {
                    baseDenom?: string;
                }): _130.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _129.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.UpdateFeeTokenProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _129.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _128.GenesisState;
            };
            FeeToken: {
                encode(message: _127.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _127.FeeToken;
            };
        };
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
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _242.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _243.MsgClientImpl;
                        };
                    };
                    v1beta1: _244.MsgClientImpl;
                };
                incentives: _245.MsgClientImpl;
                lockup: _246.MsgClientImpl;
                streamswap: {
                    v1: _247.MsgClientImpl;
                };
                superfluid: _248.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _249.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
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
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _83.QueryEpochsInfoRequest): Promise<_83.QueryEpochsInfoResponse>;
                        currentEpoch(request: _83.QueryCurrentEpochRequest): Promise<_83.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _86.QueryPoolsRequest): Promise<_86.QueryPoolsResponse>;
                        numPools(request?: _86.QueryNumPoolsRequest): Promise<_86.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _86.QueryTotalLiquidityRequest): Promise<_86.QueryTotalLiquidityResponse>;
                        pool(request: _86.QueryPoolRequest): Promise<_86.QueryPoolResponse>;
                        poolType(request: _86.QueryPoolTypeRequest): Promise<_86.QueryPoolTypeResponse>;
                        poolParams(request: _86.QueryPoolParamsRequest): Promise<_86.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _86.QueryTotalPoolLiquidityRequest): Promise<_86.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _86.QueryTotalSharesRequest): Promise<_86.QueryTotalSharesResponse>;
                        spotPrice(request: _86.QuerySpotPriceRequest): Promise<_86.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _86.QuerySwapExactAmountInRequest): Promise<_86.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _86.QuerySwapExactAmountOutRequest): Promise<_86.QuerySwapExactAmountOutResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _94.ModuleToDistributeCoinsRequest): Promise<_94.ModuleToDistributeCoinsResponse>;
                    moduleDistributedCoins(request?: _94.ModuleDistributedCoinsRequest): Promise<_94.ModuleDistributedCoinsResponse>;
                    gaugeByID(request: _94.GaugeByIDRequest): Promise<_94.GaugeByIDResponse>;
                    gauges(request?: _94.GaugesRequest): Promise<_94.GaugesResponse>;
                    activeGauges(request?: _94.ActiveGaugesRequest): Promise<_94.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _94.ActiveGaugesPerDenomRequest): Promise<_94.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _94.UpcomingGaugesRequest): Promise<_94.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _94.UpcomingGaugesPerDenomRequest): Promise<_94.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _94.RewardsEstRequest): Promise<_94.RewardsEstResponse>;
                    lockableDurations(request?: _94.QueryLockableDurationsRequest): Promise<_94.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _98.ModuleBalanceRequest): Promise<_98.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _98.ModuleLockedAmountRequest): Promise<_98.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _98.AccountUnlockableCoinsRequest): Promise<_98.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _98.AccountUnlockingCoinsRequest): Promise<_98.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _98.AccountLockedCoinsRequest): Promise<_98.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _98.AccountLockedPastTimeRequest): Promise<_98.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _98.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_98.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _98.AccountUnlockedBeforeTimeRequest): Promise<_98.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _98.AccountLockedPastTimeDenomRequest): Promise<_98.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _98.LockedDenomRequest): Promise<_98.LockedDenomResponse>;
                    lockedByID(request: _98.LockedRequest): Promise<_98.LockedResponse>;
                    syntheticLockupsByLockupID(request: _98.SyntheticLockupsByLockupIDRequest): Promise<_98.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _98.AccountLockedLongerDurationRequest): Promise<_98.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _98.AccountLockedDurationRequest): Promise<_98.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _98.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_98.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _98.AccountLockedLongerDurationDenomRequest): Promise<_98.AccountLockedLongerDurationDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        epochProvisions(request?: _102.QueryEpochProvisionsRequest): Promise<_102.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _106.QueryGaugeIdsRequest): Promise<_106.QueryGaugeIdsResponse>;
                        distrInfo(request?: _106.QueryDistrInfoRequest): Promise<_106.QueryDistrInfoResponse>;
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        lockableDurations(request?: _106.QueryLockableDurationsRequest): Promise<_106.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _106.QueryIncentivizedPoolsRequest): Promise<_106.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _106.QueryExternalIncentiveGaugesRequest): Promise<_106.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                streamswap: {
                    v1: {
                        sales(request?: _111.QuerySales): Promise<_111.QuerySalesResponse>;
                        sale(request: _111.QuerySale): Promise<_111.QuerySaleResponse>;
                        userPosition(request: _111.QueryUserPosition): Promise<_111.QueryUserPositionResponse>;
                    };
                };
                superfluid: {
                    params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                    assetType(request: _116.AssetTypeRequest): Promise<_116.AssetTypeResponse>;
                    allAssets(request?: _116.AllAssetsRequest): Promise<_116.AllAssetsResponse>;
                    assetMultiplier(request: _116.AssetMultiplierRequest): Promise<_116.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _116.AllIntermediaryAccountsRequest): Promise<_116.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _116.ConnectedIntermediaryAccountRequest): Promise<_116.ConnectedIntermediaryAccountResponse>;
                    totalSuperfluidDelegations(request?: _116.TotalSuperfluidDelegationsRequest): Promise<_116.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _116.SuperfluidDelegationAmountRequest): Promise<_116.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _116.SuperfluidDelegationsByDelegatorRequest): Promise<_116.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _116.SuperfluidUndelegationsByDelegatorRequest): Promise<_116.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _116.SuperfluidDelegationsByValidatorDenomRequest): Promise<_116.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _116.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_116.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _116.QueryTotalDelegationByDelegatorRequest): Promise<_116.QueryTotalDelegationByDelegatorResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _122.QueryDenomAuthorityMetadataRequest): Promise<_122.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _122.QueryDenomsFromCreatorRequest): Promise<_122.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _125.ParamsRequest): Promise<_125.ParamsResponse>;
                        arithmeticTwap(request: _125.ArithmeticTwapRequest): Promise<_125.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _125.ArithmeticTwapToNowRequest): Promise<_125.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _130.QueryFeeTokensRequest): Promise<_130.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _130.QueryDenomSpotPriceRequest): Promise<_130.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _130.QueryDenomPoolIdRequest): Promise<_130.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _130.QueryBaseDenomRequest): Promise<_130.QueryBaseDenomResponse>;
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
                epochs: {
                    v1beta1: _220.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _221.LCDQueryClient;
                };
                incentives: _222.LCDQueryClient;
                lockup: _223.LCDQueryClient;
                mint: {
                    v1beta1: _224.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _225.LCDQueryClient;
                };
                streamswap: {
                    v1: _226.LCDQueryClient;
                };
                superfluid: _227.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _228.LCDQueryClient;
                };
                twap: {
                    v1beta1: _229.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _230.LCDQueryClient;
                };
            };
        }>;
    };
}
