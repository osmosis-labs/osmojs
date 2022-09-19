import * as _130 from "./epochs/genesis";
import * as _131 from "./epochs/query";
import * as _132 from "./gamm/pool-models/balancer/balancerPool";
import * as _133 from "./gamm/v1beta1/genesis";
import * as _134 from "./gamm/v1beta1/query";
import * as _135 from "./gamm/v1beta1/tx";
import * as _136 from "./gamm/pool-models/balancer/tx";
import * as _137 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _138 from "./gamm/pool-models/stableswap/tx";
import * as _139 from "./incentives/gauge";
import * as _140 from "./incentives/genesis";
import * as _141 from "./incentives/params";
import * as _142 from "./incentives/query";
import * as _143 from "./incentives/tx";
import * as _144 from "./lockup/genesis";
import * as _145 from "./lockup/lock";
import * as _146 from "./lockup/query";
import * as _147 from "./lockup/tx";
import * as _148 from "./mint/v1beta1/genesis";
import * as _149 from "./mint/v1beta1/mint";
import * as _150 from "./mint/v1beta1/query";
import * as _151 from "./pool-incentives/v1beta1/genesis";
import * as _152 from "./pool-incentives/v1beta1/gov";
import * as _153 from "./pool-incentives/v1beta1/incentives";
import * as _154 from "./pool-incentives/v1beta1/query";
import * as _155 from "./store/v1beta1/tree";
import * as _156 from "./superfluid/genesis";
import * as _157 from "./superfluid/params";
import * as _158 from "./superfluid/query";
import * as _159 from "./superfluid/superfluid";
import * as _160 from "./superfluid/tx";
import * as _161 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _162 from "./tokenfactory/v1beta1/genesis";
import * as _163 from "./tokenfactory/v1beta1/params";
import * as _164 from "./tokenfactory/v1beta1/query";
import * as _165 from "./tokenfactory/v1beta1/tx";
import * as _166 from "./txfees/v1beta1/feetoken";
import * as _167 from "./txfees/v1beta1/genesis";
import * as _168 from "./txfees/v1beta1/gov";
import * as _169 from "./txfees/v1beta1/query";
import * as _293 from "./epochs/query.lcd";
import * as _294 from "./gamm/v1beta1/query.lcd";
import * as _295 from "./incentives/query.lcd";
import * as _296 from "./lockup/query.lcd";
import * as _297 from "./mint/v1beta1/query.lcd";
import * as _298 from "./pool-incentives/v1beta1/query.lcd";
import * as _299 from "./superfluid/query.lcd";
import * as _300 from "./tokenfactory/v1beta1/query.lcd";
import * as _301 from "./txfees/v1beta1/query.lcd";
import * as _302 from "./epochs/query.rpc.query";
import * as _303 from "./gamm/v1beta1/query.rpc.query";
import * as _304 from "./incentives/query.rpc.query";
import * as _305 from "./lockup/query.rpc.query";
import * as _306 from "./mint/v1beta1/query.rpc.query";
import * as _307 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _308 from "./superfluid/query.rpc.query";
import * as _309 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _310 from "./txfees/v1beta1/query.rpc.query";
import * as _311 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _312 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _313 from "./gamm/v1beta1/tx.rpc.msg";
import * as _314 from "./incentives/tx.rpc.msg";
import * as _315 from "./lockup/tx.rpc.msg";
import * as _316 from "./superfluid/tx.rpc.msg";
import * as _317 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponseSDKType>;
                currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponseSDKType>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _131.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoRequest;
                fromPartial(_: {}): _131.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _131.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoResponseSDKType;
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
                }): _131.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _131.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochRequest;
                fromPartial(object: {
                    identifier?: string;
                }): _131.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _131.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochResponseSDKType;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _131.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _130.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EpochInfo;
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
                }): _130.EpochInfo;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
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
                }): _130.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _134.QueryPoolsRequest): Promise<_134.QueryPoolsResponseSDKType>;
                numPools(request?: _134.QueryNumPoolsRequest): Promise<_134.QueryNumPoolsResponseSDKType>;
                totalLiquidity(request?: _134.QueryTotalLiquidityRequest): Promise<_134.QueryTotalLiquidityResponseSDKType>;
                pool(request: _134.QueryPoolRequest): Promise<_134.QueryPoolResponseSDKType>;
                poolParams(request: _134.QueryPoolParamsRequest): Promise<_134.QueryPoolParamsResponseSDKType>;
                totalPoolLiquidity(request: _134.QueryTotalPoolLiquidityRequest): Promise<_134.QueryTotalPoolLiquidityResponseSDKType>;
                totalShares(request: _134.QueryTotalSharesRequest): Promise<_134.QueryTotalSharesResponseSDKType>;
                spotPrice(request: _134.QuerySpotPriceRequest): Promise<_134.QuerySpotPriceResponseSDKType>;
                estimateSwapExactAmountIn(request: _134.QuerySwapExactAmountInRequest): Promise<_134.QuerySwapExactAmountInResponseSDKType>;
                estimateSwapExactAmountOut(request: _134.QuerySwapExactAmountOutRequest): Promise<_134.QuerySwapExactAmountOutResponseSDKType>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _135.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _135.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _135.MsgJoinPool) => {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _135.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _135.MsgExitPool) => {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _135.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _135.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    }) => _135.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _135.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    }) => _135.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _135.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    }) => _135.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _135.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    }) => _135.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _135.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    }) => _135.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _135.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    }) => _135.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _135.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _135.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinPoolResponseSDKType;
                fromPartial(_: {}): _135.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _135.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _135.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPoolResponseSDKType;
                fromPartial(_: {}): _135.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _135.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _135.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _135.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountIn;
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
                }): _135.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _135.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _135.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountOutRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _135.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _135.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOut;
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
                }): _135.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _135.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _135.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _135.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _135.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountInResponseSDKType;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _135.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _135.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _135.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _135.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _135.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _135.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _135.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _135.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _135.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _135.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOutResponseSDKType;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _135.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _134.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _134.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolResponseSDKType;
                fromPartial(object: {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _134.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _134.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _134.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _134.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsResponseSDKType;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _134.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _134.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsRequest;
                fromPartial(_: {}): _134.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _134.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsResponseSDKType;
                fromPartial(object: {
                    numPools?: any;
                }): _134.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _134.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _134.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _134.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _134.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _134.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityResponseSDKType;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _134.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _134.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _134.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesResponseSDKType;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _134.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _134.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceRequest;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _134.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _134.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceResponseSDKType;
                fromPartial(object: {
                    spotPrice?: string;
                }): _134.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _134.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInRequest;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _134.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _134.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _134.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _134.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutRequest;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _134.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _134.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _134.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _134.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityRequest;
                fromPartial(_: {}): _134.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _134.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityResponseSDKType;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _134.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Params;
                fromPartial(object: {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _133.Params;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
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
                }): _133.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _132.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SmoothWeightChangeParams;
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
                }): _132.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _132.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolParams;
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
                }): _132.PoolParams;
            };
            PoolAsset: {
                encode(message: _132.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolAsset;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _132.PoolAsset;
            };
            Pool: {
                encode(message: _132.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Pool;
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
                }): _132.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _311.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _136.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _136.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _136.MsgCreateBalancerPool) => {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                    smoothWeightChangeParams: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initialPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        targetPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                poolAssets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, poolParams, poolAssets, future_pool_governor }: {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                    smoothWeightChangeParams: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initialPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        targetPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                poolAssets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            }) => _136.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _136.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MsgCreateBalancerPool;
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
                        }): _136.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _136.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MsgCreateBalancerPoolResponseSDKType;
                        fromPartial(object: {
                            poolId?: any;
                        }): _136.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _312.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _138.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _138.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, futurePoolGovernor }: _138.MsgCreateStableswapPool) => {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, poolParams, initial_pool_liquidity, future_pool_governor }: {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                future_pool_governor: string;
                            }) => _138.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _138.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _138.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _138.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateStableswapPool;
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
                            futurePoolGovernor?: string;
                        }): _138.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _138.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateStableswapPoolResponseSDKType;
                        fromPartial(object: {
                            poolId?: any;
                        }): _138.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _138.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _138.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _138.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromPartial(_: {}): _138.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _137.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolParams;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _137.PoolParams;
                    };
                    Pool: {
                        encode(message: _137.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Pool;
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
                        }): _137.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _314.MsgClientImpl;
        QueryClientImpl: typeof _304.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _142.ModuleToDistributeCoinsRequest): Promise<_142.ModuleToDistributeCoinsResponseSDKType>;
            moduleDistributedCoins(request?: _142.ModuleDistributedCoinsRequest): Promise<_142.ModuleDistributedCoinsResponseSDKType>;
            gaugeByID(request: _142.GaugeByIDRequest): Promise<_142.GaugeByIDResponseSDKType>;
            gauges(request?: _142.GaugesRequest): Promise<_142.GaugesResponseSDKType>;
            activeGauges(request?: _142.ActiveGaugesRequest): Promise<_142.ActiveGaugesResponseSDKType>;
            activeGaugesPerDenom(request: _142.ActiveGaugesPerDenomRequest): Promise<_142.ActiveGaugesPerDenomResponseSDKType>;
            upcomingGauges(request?: _142.UpcomingGaugesRequest): Promise<_142.UpcomingGaugesResponseSDKType>;
            upcomingGaugesPerDenom(request: _142.UpcomingGaugesPerDenomRequest): Promise<_142.UpcomingGaugesPerDenomResponseSDKType>;
            rewardsEst(request: _142.RewardsEstRequest): Promise<_142.RewardsEstResponseSDKType>;
            lockableDurations(request?: _142.QueryLockableDurationsRequest): Promise<_142.QueryLockableDurationsResponseSDKType>;
        };
        LCDQueryClient: typeof _295.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _143.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _143.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _143.MsgCreateGauge): {
                    typeUrl: string;
                    value: _143.MsgCreateGauge;
                };
                addToGauge(value: _143.MsgAddToGauge): {
                    typeUrl: string;
                    value: _143.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _143.MsgCreateGauge): {
                    typeUrl: string;
                    value: _143.MsgCreateGauge;
                };
                addToGauge(value: _143.MsgAddToGauge): {
                    typeUrl: string;
                    value: _143.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _143.MsgCreateGauge) => {
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
                }) => _143.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _143.MsgAddToGauge) => {
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
                }) => _143.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _143.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateGauge;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _145.LockQueryType;
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
            }): _143.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _143.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateGaugeResponseSDKType;
            fromPartial(_: {}): _143.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _143.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgAddToGauge;
            fromPartial(object: {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _143.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _143.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgAddToGaugeResponseSDKType;
            fromPartial(_: {}): _143.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _142.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleToDistributeCoinsRequest;
            fromPartial(_: {}): _142.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _142.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleToDistributeCoinsResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _142.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleDistributedCoinsRequest;
            fromPartial(_: {}): _142.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _142.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleDistributedCoinsResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _142.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugeByIDRequest;
            fromPartial(object: {
                id?: any;
            }): _142.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _142.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugeByIDResponseSDKType;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _142.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _142.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _142.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugesResponseSDKType;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _142.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ActiveGaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _142.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _142.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ActiveGaugesResponseSDKType;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _142.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ActiveGaugesPerDenomRequest;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _142.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _142.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ActiveGaugesPerDenomResponseSDKType;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _142.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpcomingGaugesRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _142.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _142.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpcomingGaugesResponseSDKType;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _142.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpcomingGaugesPerDenomRequest;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _142.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _142.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpcomingGaugesPerDenomResponseSDKType;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _142.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _142.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RewardsEstRequest;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _142.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _142.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RewardsEstResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _142.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _142.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryLockableDurationsRequest;
            fromPartial(_: {}): _142.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _142.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryLockableDurationsResponseSDKType;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _142.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _141.Params;
        };
        GenesisState: {
            encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _145.LockQueryType;
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
            }): _140.GenesisState;
        };
        Gauge: {
            encode(message: _139.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Gauge;
            fromPartial(object: {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _145.LockQueryType;
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
            }): _139.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _139.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LockableDurationsInfo;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _139.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _315.MsgClientImpl;
        QueryClientImpl: typeof _305.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _146.ModuleBalanceRequest): Promise<_146.ModuleBalanceResponseSDKType>;
            moduleLockedAmount(request?: _146.ModuleLockedAmountRequest): Promise<_146.ModuleLockedAmountResponseSDKType>;
            accountUnlockableCoins(request: _146.AccountUnlockableCoinsRequest): Promise<_146.AccountUnlockableCoinsResponseSDKType>;
            accountUnlockingCoins(request: _146.AccountUnlockingCoinsRequest): Promise<_146.AccountUnlockingCoinsResponseSDKType>;
            accountLockedCoins(request: _146.AccountLockedCoinsRequest): Promise<_146.AccountLockedCoinsResponseSDKType>;
            accountLockedPastTime(request: _146.AccountLockedPastTimeRequest): Promise<_146.AccountLockedPastTimeResponseSDKType>;
            accountLockedPastTimeNotUnlockingOnly(request: _146.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
            accountUnlockedBeforeTime(request: _146.AccountUnlockedBeforeTimeRequest): Promise<_146.AccountUnlockedBeforeTimeResponseSDKType>;
            accountLockedPastTimeDenom(request: _146.AccountLockedPastTimeDenomRequest): Promise<_146.AccountLockedPastTimeDenomResponseSDKType>;
            lockedDenom(request: _146.LockedDenomRequest): Promise<_146.LockedDenomResponseSDKType>;
            lockedByID(request: _146.LockedRequest): Promise<_146.LockedResponseSDKType>;
            syntheticLockupsByLockupID(request: _146.SyntheticLockupsByLockupIDRequest): Promise<_146.SyntheticLockupsByLockupIDResponseSDKType>;
            accountLockedLongerDuration(request: _146.AccountLockedLongerDurationRequest): Promise<_146.AccountLockedLongerDurationResponseSDKType>;
            accountLockedDuration(request: _146.AccountLockedDurationRequest): Promise<_146.AccountLockedDurationResponseSDKType>;
            accountLockedLongerDurationNotUnlockingOnly(request: _146.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_146.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
            accountLockedLongerDurationDenom(request: _146.AccountLockedLongerDurationDenomRequest): Promise<_146.AccountLockedLongerDurationDenomResponseSDKType>;
        };
        LCDQueryClient: typeof _296.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _147.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _147.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _147.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _147.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _147.MsgLockTokens): {
                    typeUrl: string;
                    value: _147.MsgLockTokens;
                };
                beginUnlockingAll(value: _147.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _147.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlocking;
                };
                extendLockup(value: _147.MsgExtendLockup): {
                    typeUrl: string;
                    value: _147.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _147.MsgLockTokens): {
                    typeUrl: string;
                    value: _147.MsgLockTokens;
                };
                beginUnlockingAll(value: _147.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _147.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlocking;
                };
                extendLockup(value: _147.MsgExtendLockup): {
                    typeUrl: string;
                    value: _147.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _147.MsgLockTokens) => {
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
                }) => _147.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _147.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _147.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _147.MsgBeginUnlocking) => {
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
                }) => _147.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _147.MsgExtendLockup) => {
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
                }) => _147.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _147.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgLockTokens;
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
            }): _147.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _147.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgLockTokensResponseSDKType;
            fromPartial(object: {
                ID?: any;
            }): _147.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _147.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingAll;
            fromPartial(object: {
                owner?: string;
            }): _147.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _147.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingAllResponseSDKType;
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
            }): _147.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _147.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlocking;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _147.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingResponseSDKType;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _147.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgExtendLockup;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _147.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _147.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgExtendLockupResponseSDKType;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _146.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleBalanceRequest;
            fromPartial(_: {}): _146.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _146.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleBalanceResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _146.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _146.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleLockedAmountRequest;
            fromPartial(_: {}): _146.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _146.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleLockedAmountResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _146.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _146.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockableCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _146.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockableCoinsResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _146.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _146.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockingCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _146.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockingCoinsResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _146.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _146.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _146.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedCoinsResponseSDKType;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _146.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _146.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _146.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeResponseSDKType;
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
            }): _146.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _146.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _146.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
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
            }): _146.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _146.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _146.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockedBeforeTimeResponseSDKType;
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
            }): _146.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _146.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeDenomRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _146.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _146.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeDenomResponseSDKType;
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
            }): _146.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _146.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedDenomRequest;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _146.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _146.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedDenomResponseSDKType;
            fromPartial(object: {
                amount?: string;
            }): _146.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _146.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedRequest;
            fromPartial(object: {
                lockId?: any;
            }): _146.LockedRequest;
        };
        LockedResponse: {
            encode(message: _146.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedResponseSDKType;
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
            }): _146.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _146.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: {
                lockId?: any;
            }): _146.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _146.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SyntheticLockupsByLockupIDResponseSDKType;
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
            }): _146.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _146.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _146.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _146.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationResponseSDKType;
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
            }): _146.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _146.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedDurationRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _146.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _146.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedDurationResponseSDKType;
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
            }): _146.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _146.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _146.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _146.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
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
            }): _146.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _146.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _146.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _146.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedLongerDurationDenomResponseSDKType;
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
            }): _146.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _145.LockQueryType;
        lockQueryTypeToJSON(object: _145.LockQueryType): string;
        LockQueryType: typeof _145.LockQueryType;
        LockQueryTypeSDKType: typeof _145.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _145.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.PeriodLock;
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
            }): _145.PeriodLock;
        };
        QueryCondition: {
            encode(message: _145.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryCondition;
            fromPartial(object: {
                lockQueryType?: _145.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _145.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _145.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SyntheticLock;
            fromPartial(object: {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _145.SyntheticLock;
        };
        GenesisState: {
            encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
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
            }): _144.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponseSDKType>;
                epochProvisions(request?: _150.QueryEpochProvisionsRequest): Promise<_150.QueryEpochProvisionsResponseSDKType>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
                fromPartial(_: {}): _150.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponseSDKType;
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
                }): _150.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _150.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _150.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _150.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryEpochProvisionsResponseSDKType;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _150.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _149.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _149.Minter;
            };
            WeightedAddress: {
                encode(message: _149.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _149.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _149.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _149.DistributionProportions;
            };
            Params: {
                encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
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
                }): _149.Params;
            };
            GenesisState: {
                encode(message: _148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GenesisState;
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
                    halvenStartedEpoch?: any;
                }): _148.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _154.QueryGaugeIdsRequest): Promise<_154.QueryGaugeIdsResponseSDKType>;
                distrInfo(request?: _154.QueryDistrInfoRequest): Promise<_154.QueryDistrInfoResponseSDKType>;
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponseSDKType>;
                lockableDurations(request?: _154.QueryLockableDurationsRequest): Promise<_154.QueryLockableDurationsResponseSDKType>;
                incentivizedPools(request?: _154.QueryIncentivizedPoolsRequest): Promise<_154.QueryIncentivizedPoolsResponseSDKType>;
                externalIncentiveGauges(request?: _154.QueryExternalIncentiveGaugesRequest): Promise<_154.QueryExternalIncentiveGaugesResponseSDKType>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _154.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _154.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _154.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsResponseSDKType;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _154.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _154.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: {
                    gaugeId?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _154.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _154.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDistrInfoRequest;
                fromPartial(_: {}): _154.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _154.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDistrInfoResponseSDKType;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _154.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromPartial(_: {}): _154.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _154.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _154.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryLockableDurationsRequest;
                fromPartial(_: {}): _154.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _154.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryLockableDurationsResponseSDKType;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _154.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _154.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryIncentivizedPoolsRequest;
                fromPartial(_: {}): _154.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _154.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.IncentivizedPool;
                fromPartial(object: {
                    poolId?: any;
                    lockableDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gaugeId?: any;
                }): _154.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _154.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryIncentivizedPoolsResponseSDKType;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gaugeId?: any;
                    }[];
                }): _154.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _154.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: {}): _154.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _154.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryExternalIncentiveGaugesResponseSDKType;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _145.LockQueryType;
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
                }): _154.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _153.Params;
            };
            LockableDurationsInfo: {
                encode(message: _153.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.LockableDurationsInfo;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _153.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _153.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DistrInfo;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _153.DistrInfo;
            };
            DistrRecord: {
                encode(message: _153.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DistrRecord;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _153.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _152.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ReplacePoolIncentivesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _152.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _152.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpdatePoolIncentivesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _152.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
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
                }): _151.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _155.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Node;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _155.Node;
            };
            Child: {
                encode(message: _155.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Child;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _155.Child;
            };
            Leaf: {
                encode(message: _155.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Leaf;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _155.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _316.MsgClientImpl;
        QueryClientImpl: typeof _308.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponseSDKType>;
            assetType(request: _158.AssetTypeRequest): Promise<_158.AssetTypeResponseSDKType>;
            allAssets(request?: _158.AllAssetsRequest): Promise<_158.AllAssetsResponseSDKType>;
            assetMultiplier(request: _158.AssetMultiplierRequest): Promise<_158.AssetMultiplierResponseSDKType>;
            allIntermediaryAccounts(request?: _158.AllIntermediaryAccountsRequest): Promise<_158.AllIntermediaryAccountsResponseSDKType>;
            connectedIntermediaryAccount(request: _158.ConnectedIntermediaryAccountRequest): Promise<_158.ConnectedIntermediaryAccountResponseSDKType>;
            totalSuperfluidDelegations(request?: _158.TotalSuperfluidDelegationsRequest): Promise<_158.TotalSuperfluidDelegationsResponseSDKType>;
            superfluidDelegationAmount(request: _158.SuperfluidDelegationAmountRequest): Promise<_158.SuperfluidDelegationAmountResponseSDKType>;
            superfluidDelegationsByDelegator(request: _158.SuperfluidDelegationsByDelegatorRequest): Promise<_158.SuperfluidDelegationsByDelegatorResponseSDKType>;
            superfluidUndelegationsByDelegator(request: _158.SuperfluidUndelegationsByDelegatorRequest): Promise<_158.SuperfluidUndelegationsByDelegatorResponseSDKType>;
            superfluidDelegationsByValidatorDenom(request: _158.SuperfluidDelegationsByValidatorDenomRequest): Promise<_158.SuperfluidDelegationsByValidatorDenomResponseSDKType>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>;
        };
        LCDQueryClient: typeof _299.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _160.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _160.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _160.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _160.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _160.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _160.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _160.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _160.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _160.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _160.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _160.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _160.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _160.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _160.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _160.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _160.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _160.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _160.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _160.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _160.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _160.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _160.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _160.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _160.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _160.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _160.MsgLockAndSuperfluidDelegate) => {
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
                }) => _160.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _160.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _160.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _160.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidDelegate;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _160.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _160.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidDelegateResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _160.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegate;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _160.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegateResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _160.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLock;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _160.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLockResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _160.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgLockAndSuperfluidDelegate;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _160.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _160.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgLockAndSuperfluidDelegateResponseSDKType;
            fromPartial(object: {
                ID?: any;
            }): _160.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _160.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPool;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _160.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _160.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _160.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _159.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _159.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _159.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _159.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _159.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidAsset;
            fromPartial(object: {
                denom?: string;
                assetType?: _159.SuperfluidAssetType;
            }): _159.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _159.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidIntermediaryAccount;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _159.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _159.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.OsmoEquivalentMultiplierRecord;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _159.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _159.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationRecord;
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
            }): _159.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _159.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.LockIdIntermediaryAccountConnection;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _159.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _159.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.UnpoolWhitelistedPools;
            fromPartial(object: {
                ids?: any[];
            }): _159.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
            fromPartial(_: {}): _158.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponseSDKType;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _158.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _158.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeRequest;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _158.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeResponseSDKType;
            fromPartial(object: {
                assetType?: _159.SuperfluidAssetType;
            }): _158.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _158.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllAssetsRequest;
            fromPartial(_: {}): _158.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _158.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllAssetsResponseSDKType;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _159.SuperfluidAssetType;
                }[];
            }): _158.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _158.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetMultiplierRequest;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _158.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetMultiplierResponseSDKType;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _158.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _158.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            }): _158.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _158.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllIntermediaryAccountsRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _158.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _158.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllIntermediaryAccountsResponseSDKType;
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
            }): _158.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _158.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ConnectedIntermediaryAccountRequest;
            fromPartial(object: {
                lockId?: any;
            }): _158.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _158.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ConnectedIntermediaryAccountResponseSDKType;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            }): _158.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _158.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TotalSuperfluidDelegationsRequest;
            fromPartial(_: {}): _158.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _158.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TotalSuperfluidDelegationsResponseSDKType;
            fromPartial(object: {
                totalDelegations?: string;
            }): _158.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _158.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationAmountRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _158.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationAmountResponseSDKType;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _158.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _158.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _158.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _158.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByDelegatorResponseSDKType;
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
            }): _158.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _158.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _158.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidUndelegationsByDelegatorResponseSDKType;
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
            }): _158.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _158.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _158.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByValidatorDenomResponseSDKType;
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
            }): _158.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _157.Params;
        };
        GenesisState: {
            encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _159.SuperfluidAssetType;
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
            }): _156.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponseSDKType>;
                denomAuthorityMetadata(request: _164.QueryDenomAuthorityMetadataRequest): Promise<_164.QueryDenomAuthorityMetadataResponseSDKType>;
                denomsFromCreator(request: _164.QueryDenomsFromCreatorRequest): Promise<_164.QueryDenomsFromCreatorResponseSDKType>;
            };
            LCDQueryClient: typeof _300.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _165.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _165.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _165.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _165.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _165.MsgCreateDenom): {
                        typeUrl: string;
                        value: _165.MsgCreateDenom;
                    };
                    mint(value: _165.MsgMint): {
                        typeUrl: string;
                        value: _165.MsgMint;
                    };
                    burn(value: _165.MsgBurn): {
                        typeUrl: string;
                        value: _165.MsgBurn;
                    };
                    changeAdmin(value: _165.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _165.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _165.MsgCreateDenom): {
                        typeUrl: string;
                        value: _165.MsgCreateDenom;
                    };
                    mint(value: _165.MsgMint): {
                        typeUrl: string;
                        value: _165.MsgMint;
                    };
                    burn(value: _165.MsgBurn): {
                        typeUrl: string;
                        value: _165.MsgBurn;
                    };
                    changeAdmin(value: _165.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _165.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _165.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _165.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _165.MsgMint) => {
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
                    }) => _165.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _165.MsgBurn) => {
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
                    }) => _165.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _165.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _165.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _165.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _165.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _165.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateDenomResponseSDKType;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _165.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _165.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgMint;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _165.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _165.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgMintResponseSDKType;
                fromPartial(_: {}): _165.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _165.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgBurn;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _165.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _165.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgBurnResponseSDKType;
                fromPartial(_: {}): _165.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _165.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _165.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _165.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdminResponseSDKType;
                fromPartial(_: {}): _165.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromPartial(_: {}): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _164.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _164.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _164.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _164.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomAuthorityMetadataResponseSDKType;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _164.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _164.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _164.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _164.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorResponseSDKType;
                fromPartial(object: {
                    denoms?: string[];
                }): _164.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _163.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _163.Params;
            };
            GenesisState: {
                encode(message: _162.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenesisState;
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
                            Admin?: string;
                        };
                    }[];
                }): _162.GenesisState;
            };
            GenesisDenom: {
                encode(message: _162.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenesisDenom;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _162.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _161.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DenomAuthorityMetadata;
                fromPartial(object: {
                    Admin?: string;
                }): _161.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _169.QueryFeeTokensRequest): Promise<_169.QueryFeeTokensResponseSDKType>;
                denomSpotPrice(request: _169.QueryDenomSpotPriceRequest): Promise<_169.QueryDenomSpotPriceResponseSDKType>;
                denomPoolId(request: _169.QueryDenomPoolIdRequest): Promise<_169.QueryDenomPoolIdResponseSDKType>;
                baseDenom(request?: _169.QueryBaseDenomRequest): Promise<_169.QueryBaseDenomResponseSDKType>;
            };
            LCDQueryClient: typeof _301.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _169.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryFeeTokensRequest;
                fromPartial(_: {}): _169.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _169.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryFeeTokensResponseSDKType;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _169.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _169.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _169.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomSpotPriceResponseSDKType;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _169.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _169.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _169.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdResponseSDKType;
                fromPartial(object: {
                    poolID?: any;
                }): _169.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _169.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomRequest;
                fromPartial(_: {}): _169.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _169.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomResponseSDKType;
                fromPartial(object: {
                    baseDenom?: string;
                }): _169.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _168.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.UpdateFeeTokenProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _168.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _167.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.GenesisState;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _167.GenesisState;
            };
            FeeToken: {
                encode(message: _166.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _166.FeeToken;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
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
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _311.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _312.MsgClientImpl;
                        };
                    };
                    v1beta1: _313.MsgClientImpl;
                };
                incentives: _314.MsgClientImpl;
                lockup: _315.MsgClientImpl;
                superfluid: _316.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _317.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponseSDKType>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponseSDKType>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponseSDKType>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponseSDKType>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponseSDKType>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponseSDKType>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponseSDKType>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponseSDKType>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponseSDKType>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponseSDKType>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponseSDKType>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponseSDKType>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponseSDKType>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponseSDKType>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponseSDKType>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponseSDKType>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponseSDKType>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponseSDKType>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponseSDKType>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponseSDKType>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponseSDKType>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponseSDKType>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponseSDKType>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponseSDKType>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponseSDKType>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponseSDKType>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponseSDKType>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponseSDKType>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponseSDKType>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponseSDKType>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponseSDKType>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponseSDKType>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponseSDKType>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponseSDKType>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponseSDKType>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponseSDKType>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponseSDKType>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponseSDKType>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponseSDKType>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponseSDKType>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponseSDKType>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponseSDKType>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponseSDKType>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponseSDKType>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponseSDKType>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponseSDKType>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponseSDKType>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponseSDKType>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponseSDKType>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponseSDKType>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponseSDKType>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponseSDKType>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponseSDKType>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponseSDKType>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponseSDKType>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponseSDKType>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponseSDKType>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponseSDKType>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponseSDKType>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponseSDKType>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponseSDKType>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponseSDKType>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponseSDKType>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponseSDKType>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponseSDKType>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponseSDKType>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponseSDKType>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponseSDKType>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponseSDKType>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponseSDKType>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponseSDKType>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponseSDKType>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponseSDKType>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponseSDKType>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponseSDKType>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponseSDKType>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponseSDKType>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponseSDKType>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponseSDKType>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponseSDKType>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponseSDKType>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponseSDKType>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponseSDKType>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponseSDKType>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponseSDKType>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponseSDKType>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponseSDKType>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponseSDKType>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponseSDKType>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponseSDKType>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponseSDKType>;
                    };
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponseSDKType>;
                        currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponseSDKType>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _134.QueryPoolsRequest): Promise<_134.QueryPoolsResponseSDKType>;
                        numPools(request?: _134.QueryNumPoolsRequest): Promise<_134.QueryNumPoolsResponseSDKType>;
                        totalLiquidity(request?: _134.QueryTotalLiquidityRequest): Promise<_134.QueryTotalLiquidityResponseSDKType>;
                        pool(request: _134.QueryPoolRequest): Promise<_134.QueryPoolResponseSDKType>;
                        poolParams(request: _134.QueryPoolParamsRequest): Promise<_134.QueryPoolParamsResponseSDKType>;
                        totalPoolLiquidity(request: _134.QueryTotalPoolLiquidityRequest): Promise<_134.QueryTotalPoolLiquidityResponseSDKType>;
                        totalShares(request: _134.QueryTotalSharesRequest): Promise<_134.QueryTotalSharesResponseSDKType>;
                        spotPrice(request: _134.QuerySpotPriceRequest): Promise<_134.QuerySpotPriceResponseSDKType>;
                        estimateSwapExactAmountIn(request: _134.QuerySwapExactAmountInRequest): Promise<_134.QuerySwapExactAmountInResponseSDKType>;
                        estimateSwapExactAmountOut(request: _134.QuerySwapExactAmountOutRequest): Promise<_134.QuerySwapExactAmountOutResponseSDKType>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _142.ModuleToDistributeCoinsRequest): Promise<_142.ModuleToDistributeCoinsResponseSDKType>;
                    moduleDistributedCoins(request?: _142.ModuleDistributedCoinsRequest): Promise<_142.ModuleDistributedCoinsResponseSDKType>;
                    gaugeByID(request: _142.GaugeByIDRequest): Promise<_142.GaugeByIDResponseSDKType>;
                    gauges(request?: _142.GaugesRequest): Promise<_142.GaugesResponseSDKType>;
                    activeGauges(request?: _142.ActiveGaugesRequest): Promise<_142.ActiveGaugesResponseSDKType>;
                    activeGaugesPerDenom(request: _142.ActiveGaugesPerDenomRequest): Promise<_142.ActiveGaugesPerDenomResponseSDKType>;
                    upcomingGauges(request?: _142.UpcomingGaugesRequest): Promise<_142.UpcomingGaugesResponseSDKType>;
                    upcomingGaugesPerDenom(request: _142.UpcomingGaugesPerDenomRequest): Promise<_142.UpcomingGaugesPerDenomResponseSDKType>;
                    rewardsEst(request: _142.RewardsEstRequest): Promise<_142.RewardsEstResponseSDKType>;
                    lockableDurations(request?: _142.QueryLockableDurationsRequest): Promise<_142.QueryLockableDurationsResponseSDKType>;
                };
                lockup: {
                    moduleBalance(request?: _146.ModuleBalanceRequest): Promise<_146.ModuleBalanceResponseSDKType>;
                    moduleLockedAmount(request?: _146.ModuleLockedAmountRequest): Promise<_146.ModuleLockedAmountResponseSDKType>;
                    accountUnlockableCoins(request: _146.AccountUnlockableCoinsRequest): Promise<_146.AccountUnlockableCoinsResponseSDKType>;
                    accountUnlockingCoins(request: _146.AccountUnlockingCoinsRequest): Promise<_146.AccountUnlockingCoinsResponseSDKType>;
                    accountLockedCoins(request: _146.AccountLockedCoinsRequest): Promise<_146.AccountLockedCoinsResponseSDKType>;
                    accountLockedPastTime(request: _146.AccountLockedPastTimeRequest): Promise<_146.AccountLockedPastTimeResponseSDKType>;
                    accountLockedPastTimeNotUnlockingOnly(request: _146.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
                    accountUnlockedBeforeTime(request: _146.AccountUnlockedBeforeTimeRequest): Promise<_146.AccountUnlockedBeforeTimeResponseSDKType>;
                    accountLockedPastTimeDenom(request: _146.AccountLockedPastTimeDenomRequest): Promise<_146.AccountLockedPastTimeDenomResponseSDKType>;
                    lockedDenom(request: _146.LockedDenomRequest): Promise<_146.LockedDenomResponseSDKType>;
                    lockedByID(request: _146.LockedRequest): Promise<_146.LockedResponseSDKType>;
                    syntheticLockupsByLockupID(request: _146.SyntheticLockupsByLockupIDRequest): Promise<_146.SyntheticLockupsByLockupIDResponseSDKType>;
                    accountLockedLongerDuration(request: _146.AccountLockedLongerDurationRequest): Promise<_146.AccountLockedLongerDurationResponseSDKType>;
                    accountLockedDuration(request: _146.AccountLockedDurationRequest): Promise<_146.AccountLockedDurationResponseSDKType>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _146.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_146.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
                    accountLockedLongerDurationDenom(request: _146.AccountLockedLongerDurationDenomRequest): Promise<_146.AccountLockedLongerDurationDenomResponseSDKType>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponseSDKType>;
                        epochProvisions(request?: _150.QueryEpochProvisionsRequest): Promise<_150.QueryEpochProvisionsResponseSDKType>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _154.QueryGaugeIdsRequest): Promise<_154.QueryGaugeIdsResponseSDKType>;
                        distrInfo(request?: _154.QueryDistrInfoRequest): Promise<_154.QueryDistrInfoResponseSDKType>;
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponseSDKType>;
                        lockableDurations(request?: _154.QueryLockableDurationsRequest): Promise<_154.QueryLockableDurationsResponseSDKType>;
                        incentivizedPools(request?: _154.QueryIncentivizedPoolsRequest): Promise<_154.QueryIncentivizedPoolsResponseSDKType>;
                        externalIncentiveGauges(request?: _154.QueryExternalIncentiveGaugesRequest): Promise<_154.QueryExternalIncentiveGaugesResponseSDKType>;
                    };
                };
                superfluid: {
                    params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponseSDKType>;
                    assetType(request: _158.AssetTypeRequest): Promise<_158.AssetTypeResponseSDKType>;
                    allAssets(request?: _158.AllAssetsRequest): Promise<_158.AllAssetsResponseSDKType>;
                    assetMultiplier(request: _158.AssetMultiplierRequest): Promise<_158.AssetMultiplierResponseSDKType>;
                    allIntermediaryAccounts(request?: _158.AllIntermediaryAccountsRequest): Promise<_158.AllIntermediaryAccountsResponseSDKType>;
                    connectedIntermediaryAccount(request: _158.ConnectedIntermediaryAccountRequest): Promise<_158.ConnectedIntermediaryAccountResponseSDKType>;
                    totalSuperfluidDelegations(request?: _158.TotalSuperfluidDelegationsRequest): Promise<_158.TotalSuperfluidDelegationsResponseSDKType>;
                    superfluidDelegationAmount(request: _158.SuperfluidDelegationAmountRequest): Promise<_158.SuperfluidDelegationAmountResponseSDKType>;
                    superfluidDelegationsByDelegator(request: _158.SuperfluidDelegationsByDelegatorRequest): Promise<_158.SuperfluidDelegationsByDelegatorResponseSDKType>;
                    superfluidUndelegationsByDelegator(request: _158.SuperfluidUndelegationsByDelegatorRequest): Promise<_158.SuperfluidUndelegationsByDelegatorResponseSDKType>;
                    superfluidDelegationsByValidatorDenom(request: _158.SuperfluidDelegationsByValidatorDenomRequest): Promise<_158.SuperfluidDelegationsByValidatorDenomResponseSDKType>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponseSDKType>;
                        denomAuthorityMetadata(request: _164.QueryDenomAuthorityMetadataRequest): Promise<_164.QueryDenomAuthorityMetadataResponseSDKType>;
                        denomsFromCreator(request: _164.QueryDenomsFromCreatorRequest): Promise<_164.QueryDenomsFromCreatorResponseSDKType>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _169.QueryFeeTokensRequest): Promise<_169.QueryFeeTokensResponseSDKType>;
                        denomSpotPrice(request: _169.QueryDenomSpotPriceRequest): Promise<_169.QueryDenomSpotPriceResponseSDKType>;
                        denomPoolId(request: _169.QueryDenomPoolIdRequest): Promise<_169.QueryDenomPoolIdResponseSDKType>;
                        baseDenom(request?: _169.QueryBaseDenomRequest): Promise<_169.QueryBaseDenomResponseSDKType>;
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
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
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
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _293.LCDQueryClient;
                };
                gamm: {
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
                superfluid: _299.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _300.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _301.LCDQueryClient;
                };
            };
        }>;
    };
}
