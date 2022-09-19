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
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _131.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoRequest;
                fromPartial(_: {}): _131.QueryEpochsInfoRequest;
                fromSDK(_: _131.QueryEpochsInfoRequestSDKType): _131.QueryEpochsInfoRequest;
                toSDK(_: _131.QueryEpochsInfoRequest): _131.QueryEpochsInfoRequestSDKType;
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
                fromSDK(object: _131.QueryEpochsInfoResponseSDKType): _131.QueryEpochsInfoResponse;
                toSDK(message: _131.QueryEpochsInfoResponse): _131.QueryEpochsInfoResponseSDKType;
            };
            QueryCurrentEpochRequest: {
                encode(message: _131.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochRequest;
                fromPartial(object: {
                    identifier?: string;
                }): _131.QueryCurrentEpochRequest;
                fromSDK(object: _131.QueryCurrentEpochRequestSDKType): _131.QueryCurrentEpochRequest;
                toSDK(message: _131.QueryCurrentEpochRequest): _131.QueryCurrentEpochRequestSDKType;
            };
            QueryCurrentEpochResponse: {
                encode(message: _131.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochResponseSDKType;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _131.QueryCurrentEpochResponse;
                fromSDK(object: _131.QueryCurrentEpochResponseSDKType): _131.QueryCurrentEpochResponse;
                toSDK(message: _131.QueryCurrentEpochResponse): _131.QueryCurrentEpochResponseSDKType;
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
                fromSDK(object: _130.EpochInfoSDKType): _130.EpochInfo;
                toSDK(message: _130.EpochInfo): _130.EpochInfoSDKType;
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
                fromSDK(object: _130.GenesisStateSDKType): _130.GenesisState;
                toSDK(message: _130.GenesisState): _130.GenesisStateSDKType;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
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
                toJSON: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: any;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: any;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: any;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: any;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: any;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: any;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: any;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: any;
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
                fromSDK(object: _135.MsgJoinPoolSDKType): _135.MsgJoinPool;
                toSDK(message: _135.MsgJoinPool): _135.MsgJoinPoolSDKType;
            };
            MsgJoinPoolResponse: {
                encode(_: _135.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinPoolResponseSDKType;
                fromPartial(_: {}): _135.MsgJoinPoolResponse;
                fromSDK(_: _135.MsgJoinPoolResponseSDKType): _135.MsgJoinPoolResponse;
                toSDK(_: _135.MsgJoinPoolResponse): _135.MsgJoinPoolResponseSDKType;
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
                fromSDK(object: _135.MsgExitPoolSDKType): _135.MsgExitPool;
                toSDK(message: _135.MsgExitPool): _135.MsgExitPoolSDKType;
            };
            MsgExitPoolResponse: {
                encode(_: _135.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPoolResponseSDKType;
                fromPartial(_: {}): _135.MsgExitPoolResponse;
                fromSDK(_: _135.MsgExitPoolResponseSDKType): _135.MsgExitPoolResponse;
                toSDK(_: _135.MsgExitPoolResponse): _135.MsgExitPoolResponseSDKType;
            };
            SwapAmountInRoute: {
                encode(message: _135.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _135.SwapAmountInRoute;
                fromSDK(object: _135.SwapAmountInRouteSDKType): _135.SwapAmountInRoute;
                toSDK(message: _135.SwapAmountInRoute): _135.SwapAmountInRouteSDKType;
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
                fromSDK(object: _135.MsgSwapExactAmountInSDKType): _135.MsgSwapExactAmountIn;
                toSDK(message: _135.MsgSwapExactAmountIn): _135.MsgSwapExactAmountInSDKType;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _135.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgSwapExactAmountInResponse;
                fromSDK(object: _135.MsgSwapExactAmountInResponseSDKType): _135.MsgSwapExactAmountInResponse;
                toSDK(message: _135.MsgSwapExactAmountInResponse): _135.MsgSwapExactAmountInResponseSDKType;
            };
            SwapAmountOutRoute: {
                encode(message: _135.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountOutRoute;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _135.SwapAmountOutRoute;
                fromSDK(object: _135.SwapAmountOutRouteSDKType): _135.SwapAmountOutRoute;
                toSDK(message: _135.SwapAmountOutRoute): _135.SwapAmountOutRouteSDKType;
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
                fromSDK(object: _135.MsgSwapExactAmountOutSDKType): _135.MsgSwapExactAmountOut;
                toSDK(message: _135.MsgSwapExactAmountOut): _135.MsgSwapExactAmountOutSDKType;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _135.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgSwapExactAmountOutResponse;
                fromSDK(object: _135.MsgSwapExactAmountOutResponseSDKType): _135.MsgSwapExactAmountOutResponse;
                toSDK(message: _135.MsgSwapExactAmountOutResponse): _135.MsgSwapExactAmountOutResponseSDKType;
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
                fromSDK(object: _135.MsgJoinSwapExternAmountInSDKType): _135.MsgJoinSwapExternAmountIn;
                toSDK(message: _135.MsgJoinSwapExternAmountIn): _135.MsgJoinSwapExternAmountInSDKType;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _135.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountInResponseSDKType;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _135.MsgJoinSwapExternAmountInResponse;
                fromSDK(object: _135.MsgJoinSwapExternAmountInResponseSDKType): _135.MsgJoinSwapExternAmountInResponse;
                toSDK(message: _135.MsgJoinSwapExternAmountInResponse): _135.MsgJoinSwapExternAmountInResponseSDKType;
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
                fromSDK(object: _135.MsgJoinSwapShareAmountOutSDKType): _135.MsgJoinSwapShareAmountOut;
                toSDK(message: _135.MsgJoinSwapShareAmountOut): _135.MsgJoinSwapShareAmountOutSDKType;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _135.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgJoinSwapShareAmountOutResponse;
                fromSDK(object: _135.MsgJoinSwapShareAmountOutResponseSDKType): _135.MsgJoinSwapShareAmountOutResponse;
                toSDK(message: _135.MsgJoinSwapShareAmountOutResponse): _135.MsgJoinSwapShareAmountOutResponseSDKType;
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
                fromSDK(object: _135.MsgExitSwapShareAmountInSDKType): _135.MsgExitSwapShareAmountIn;
                toSDK(message: _135.MsgExitSwapShareAmountIn): _135.MsgExitSwapShareAmountInSDKType;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _135.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgExitSwapShareAmountInResponse;
                fromSDK(object: _135.MsgExitSwapShareAmountInResponseSDKType): _135.MsgExitSwapShareAmountInResponse;
                toSDK(message: _135.MsgExitSwapShareAmountInResponse): _135.MsgExitSwapShareAmountInResponseSDKType;
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
                fromSDK(object: _135.MsgExitSwapExternAmountOutSDKType): _135.MsgExitSwapExternAmountOut;
                toSDK(message: _135.MsgExitSwapExternAmountOut): _135.MsgExitSwapExternAmountOutSDKType;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _135.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOutResponseSDKType;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _135.MsgExitSwapExternAmountOutResponse;
                fromSDK(object: _135.MsgExitSwapExternAmountOutResponseSDKType): _135.MsgExitSwapExternAmountOutResponse;
                toSDK(message: _135.MsgExitSwapExternAmountOutResponse): _135.MsgExitSwapExternAmountOutResponseSDKType;
            };
            QueryPoolRequest: {
                encode(message: _134.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolRequest;
                fromSDK(object: _134.QueryPoolRequestSDKType): _134.QueryPoolRequest;
                toSDK(message: _134.QueryPoolRequest): _134.QueryPoolRequestSDKType;
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
                fromSDK(object: _134.QueryPoolResponseSDKType): _134.QueryPoolResponse;
                toSDK(message: _134.QueryPoolResponse): _134.QueryPoolResponseSDKType;
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
                fromSDK(object: _134.QueryPoolsRequestSDKType): _134.QueryPoolsRequest;
                toSDK(message: _134.QueryPoolsRequest): _134.QueryPoolsRequestSDKType;
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
                fromSDK(object: _134.QueryPoolsResponseSDKType): _134.QueryPoolsResponse;
                toSDK(message: _134.QueryPoolsResponse): _134.QueryPoolsResponseSDKType;
            };
            QueryNumPoolsRequest: {
                encode(_: _134.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsRequest;
                fromPartial(_: {}): _134.QueryNumPoolsRequest;
                fromSDK(_: _134.QueryNumPoolsRequestSDKType): _134.QueryNumPoolsRequest;
                toSDK(_: _134.QueryNumPoolsRequest): _134.QueryNumPoolsRequestSDKType;
            };
            QueryNumPoolsResponse: {
                encode(message: _134.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsResponseSDKType;
                fromPartial(object: {
                    numPools?: any;
                }): _134.QueryNumPoolsResponse;
                fromSDK(object: _134.QueryNumPoolsResponseSDKType): _134.QueryNumPoolsResponse;
                toSDK(message: _134.QueryNumPoolsResponse): _134.QueryNumPoolsResponseSDKType;
            };
            QueryPoolParamsRequest: {
                encode(message: _134.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolParamsRequest;
                fromSDK(object: _134.QueryPoolParamsRequestSDKType): _134.QueryPoolParamsRequest;
                toSDK(message: _134.QueryPoolParamsRequest): _134.QueryPoolParamsRequestSDKType;
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
                fromSDK(object: _134.QueryPoolParamsResponseSDKType): _134.QueryPoolParamsResponse;
                toSDK(message: _134.QueryPoolParamsResponse): _134.QueryPoolParamsResponseSDKType;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _134.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalPoolLiquidityRequest;
                fromSDK(object: _134.QueryTotalPoolLiquidityRequestSDKType): _134.QueryTotalPoolLiquidityRequest;
                toSDK(message: _134.QueryTotalPoolLiquidityRequest): _134.QueryTotalPoolLiquidityRequestSDKType;
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
                fromSDK(object: _134.QueryTotalPoolLiquidityResponseSDKType): _134.QueryTotalPoolLiquidityResponse;
                toSDK(message: _134.QueryTotalPoolLiquidityResponse): _134.QueryTotalPoolLiquidityResponseSDKType;
            };
            QueryTotalSharesRequest: {
                encode(message: _134.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalSharesRequest;
                fromSDK(object: _134.QueryTotalSharesRequestSDKType): _134.QueryTotalSharesRequest;
                toSDK(message: _134.QueryTotalSharesRequest): _134.QueryTotalSharesRequestSDKType;
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
                fromSDK(object: _134.QueryTotalSharesResponseSDKType): _134.QueryTotalSharesResponse;
                toSDK(message: _134.QueryTotalSharesResponse): _134.QueryTotalSharesResponseSDKType;
            };
            QuerySpotPriceRequest: {
                encode(message: _134.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceRequest;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _134.QuerySpotPriceRequest;
                fromSDK(object: _134.QuerySpotPriceRequestSDKType): _134.QuerySpotPriceRequest;
                toSDK(message: _134.QuerySpotPriceRequest): _134.QuerySpotPriceRequestSDKType;
            };
            QuerySpotPriceResponse: {
                encode(message: _134.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceResponseSDKType;
                fromPartial(object: {
                    spotPrice?: string;
                }): _134.QuerySpotPriceResponse;
                fromSDK(object: _134.QuerySpotPriceResponseSDKType): _134.QuerySpotPriceResponse;
                toSDK(message: _134.QuerySpotPriceResponse): _134.QuerySpotPriceResponseSDKType;
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
                fromSDK(object: _134.QuerySwapExactAmountInRequestSDKType): _134.QuerySwapExactAmountInRequest;
                toSDK(message: _134.QuerySwapExactAmountInRequest): _134.QuerySwapExactAmountInRequestSDKType;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _134.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInResponseSDKType;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _134.QuerySwapExactAmountInResponse;
                fromSDK(object: _134.QuerySwapExactAmountInResponseSDKType): _134.QuerySwapExactAmountInResponse;
                toSDK(message: _134.QuerySwapExactAmountInResponse): _134.QuerySwapExactAmountInResponseSDKType;
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
                fromSDK(object: _134.QuerySwapExactAmountOutRequestSDKType): _134.QuerySwapExactAmountOutRequest;
                toSDK(message: _134.QuerySwapExactAmountOutRequest): _134.QuerySwapExactAmountOutRequestSDKType;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _134.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutResponseSDKType;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _134.QuerySwapExactAmountOutResponse;
                fromSDK(object: _134.QuerySwapExactAmountOutResponseSDKType): _134.QuerySwapExactAmountOutResponse;
                toSDK(message: _134.QuerySwapExactAmountOutResponse): _134.QuerySwapExactAmountOutResponseSDKType;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _134.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityRequest;
                fromPartial(_: {}): _134.QueryTotalLiquidityRequest;
                fromSDK(_: _134.QueryTotalLiquidityRequestSDKType): _134.QueryTotalLiquidityRequest;
                toSDK(_: _134.QueryTotalLiquidityRequest): _134.QueryTotalLiquidityRequestSDKType;
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
                fromSDK(object: _134.QueryTotalLiquidityResponseSDKType): _134.QueryTotalLiquidityResponse;
                toSDK(message: _134.QueryTotalLiquidityResponse): _134.QueryTotalLiquidityResponseSDKType;
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
                fromSDK(object: _133.ParamsSDKType): _133.Params;
                toSDK(message: _133.Params): _133.ParamsSDKType;
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
                fromSDK(object: _133.GenesisStateSDKType): _133.GenesisState;
                toSDK(message: _133.GenesisState): _133.GenesisStateSDKType;
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
                fromSDK(object: _132.SmoothWeightChangeParamsSDKType): _132.SmoothWeightChangeParams;
                toSDK(message: _132.SmoothWeightChangeParams): _132.SmoothWeightChangeParamsSDKType;
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
                fromSDK(object: _132.PoolParamsSDKType): _132.PoolParams;
                toSDK(message: _132.PoolParams): _132.PoolParamsSDKType;
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
                fromSDK(object: _132.PoolAssetSDKType): _132.PoolAsset;
                toSDK(message: _132.PoolAsset): _132.PoolAssetSDKType;
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
                fromSDK(object: _132.PoolSDKType): _132.Pool;
                toSDK(message: _132.Pool): _132.PoolSDKType;
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
                        toJSON: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: any;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: any;
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
                        fromSDK(object: _136.MsgCreateBalancerPoolSDKType): _136.MsgCreateBalancerPool;
                        toSDK(message: _136.MsgCreateBalancerPool): _136.MsgCreateBalancerPoolSDKType;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _136.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MsgCreateBalancerPoolResponseSDKType;
                        fromPartial(object: {
                            poolId?: any;
                        }): _136.MsgCreateBalancerPoolResponse;
                        fromSDK(object: _136.MsgCreateBalancerPoolResponseSDKType): _136.MsgCreateBalancerPoolResponse;
                        toSDK(message: _136.MsgCreateBalancerPoolResponse): _136.MsgCreateBalancerPoolResponseSDKType;
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
                        toJSON: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: any;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: any;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: any;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: any;
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
                        fromSDK(object: _138.MsgCreateStableswapPoolSDKType): _138.MsgCreateStableswapPool;
                        toSDK(message: _138.MsgCreateStableswapPool): _138.MsgCreateStableswapPoolSDKType;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _138.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateStableswapPoolResponseSDKType;
                        fromPartial(object: {
                            poolId?: any;
                        }): _138.MsgCreateStableswapPoolResponse;
                        fromSDK(object: _138.MsgCreateStableswapPoolResponseSDKType): _138.MsgCreateStableswapPoolResponse;
                        toSDK(message: _138.MsgCreateStableswapPoolResponse): _138.MsgCreateStableswapPoolResponseSDKType;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _138.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _138.MsgStableSwapAdjustScalingFactors;
                        fromSDK(object: _138.MsgStableSwapAdjustScalingFactorsSDKType): _138.MsgStableSwapAdjustScalingFactors;
                        toSDK(message: _138.MsgStableSwapAdjustScalingFactors): _138.MsgStableSwapAdjustScalingFactorsSDKType;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _138.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromPartial(_: {}): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        fromSDK(_: _138.MsgStableSwapAdjustScalingFactorsResponseSDKType): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        toSDK(_: _138.MsgStableSwapAdjustScalingFactorsResponse): _138.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                    };
                    PoolParams: {
                        encode(message: _137.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolParams;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _137.PoolParams;
                        fromSDK(object: _137.PoolParamsSDKType): _137.PoolParams;
                        toSDK(message: _137.PoolParams): _137.PoolParamsSDKType;
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
                        fromSDK(object: _137.PoolSDKType): _137.Pool;
                        toSDK(message: _137.Pool): _137.PoolSDKType;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _314.MsgClientImpl;
        QueryClientImpl: typeof _304.QueryClientImpl;
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
            toJSON: {
                createGauge(value: _143.MsgCreateGauge): {
                    typeUrl: string;
                    value: any;
                };
                addToGauge(value: _143.MsgAddToGauge): {
                    typeUrl: string;
                    value: any;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: any;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: any;
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
            fromSDK(object: _143.MsgCreateGaugeSDKType): _143.MsgCreateGauge;
            toSDK(message: _143.MsgCreateGauge): _143.MsgCreateGaugeSDKType;
        };
        MsgCreateGaugeResponse: {
            encode(_: _143.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateGaugeResponseSDKType;
            fromPartial(_: {}): _143.MsgCreateGaugeResponse;
            fromSDK(_: _143.MsgCreateGaugeResponseSDKType): _143.MsgCreateGaugeResponse;
            toSDK(_: _143.MsgCreateGaugeResponse): _143.MsgCreateGaugeResponseSDKType;
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
            fromSDK(object: _143.MsgAddToGaugeSDKType): _143.MsgAddToGauge;
            toSDK(message: _143.MsgAddToGauge): _143.MsgAddToGaugeSDKType;
        };
        MsgAddToGaugeResponse: {
            encode(_: _143.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgAddToGaugeResponseSDKType;
            fromPartial(_: {}): _143.MsgAddToGaugeResponse;
            fromSDK(_: _143.MsgAddToGaugeResponseSDKType): _143.MsgAddToGaugeResponse;
            toSDK(_: _143.MsgAddToGaugeResponse): _143.MsgAddToGaugeResponseSDKType;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _142.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleToDistributeCoinsRequest;
            fromPartial(_: {}): _142.ModuleToDistributeCoinsRequest;
            fromSDK(_: _142.ModuleToDistributeCoinsRequestSDKType): _142.ModuleToDistributeCoinsRequest;
            toSDK(_: _142.ModuleToDistributeCoinsRequest): _142.ModuleToDistributeCoinsRequestSDKType;
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
            fromSDK(object: _142.ModuleToDistributeCoinsResponseSDKType): _142.ModuleToDistributeCoinsResponse;
            toSDK(message: _142.ModuleToDistributeCoinsResponse): _142.ModuleToDistributeCoinsResponseSDKType;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _142.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleDistributedCoinsRequest;
            fromPartial(_: {}): _142.ModuleDistributedCoinsRequest;
            fromSDK(_: _142.ModuleDistributedCoinsRequestSDKType): _142.ModuleDistributedCoinsRequest;
            toSDK(_: _142.ModuleDistributedCoinsRequest): _142.ModuleDistributedCoinsRequestSDKType;
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
            fromSDK(object: _142.ModuleDistributedCoinsResponseSDKType): _142.ModuleDistributedCoinsResponse;
            toSDK(message: _142.ModuleDistributedCoinsResponse): _142.ModuleDistributedCoinsResponseSDKType;
        };
        GaugeByIDRequest: {
            encode(message: _142.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugeByIDRequest;
            fromPartial(object: {
                id?: any;
            }): _142.GaugeByIDRequest;
            fromSDK(object: _142.GaugeByIDRequestSDKType): _142.GaugeByIDRequest;
            toSDK(message: _142.GaugeByIDRequest): _142.GaugeByIDRequestSDKType;
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
            fromSDK(object: _142.GaugeByIDResponseSDKType): _142.GaugeByIDResponse;
            toSDK(message: _142.GaugeByIDResponse): _142.GaugeByIDResponseSDKType;
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
            fromSDK(object: _142.GaugesRequestSDKType): _142.GaugesRequest;
            toSDK(message: _142.GaugesRequest): _142.GaugesRequestSDKType;
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
            fromSDK(object: _142.GaugesResponseSDKType): _142.GaugesResponse;
            toSDK(message: _142.GaugesResponse): _142.GaugesResponseSDKType;
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
            fromSDK(object: _142.ActiveGaugesRequestSDKType): _142.ActiveGaugesRequest;
            toSDK(message: _142.ActiveGaugesRequest): _142.ActiveGaugesRequestSDKType;
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
            fromSDK(object: _142.ActiveGaugesResponseSDKType): _142.ActiveGaugesResponse;
            toSDK(message: _142.ActiveGaugesResponse): _142.ActiveGaugesResponseSDKType;
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
            fromSDK(object: _142.ActiveGaugesPerDenomRequestSDKType): _142.ActiveGaugesPerDenomRequest;
            toSDK(message: _142.ActiveGaugesPerDenomRequest): _142.ActiveGaugesPerDenomRequestSDKType;
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
            fromSDK(object: _142.ActiveGaugesPerDenomResponseSDKType): _142.ActiveGaugesPerDenomResponse;
            toSDK(message: _142.ActiveGaugesPerDenomResponse): _142.ActiveGaugesPerDenomResponseSDKType;
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
            fromSDK(object: _142.UpcomingGaugesRequestSDKType): _142.UpcomingGaugesRequest;
            toSDK(message: _142.UpcomingGaugesRequest): _142.UpcomingGaugesRequestSDKType;
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
            fromSDK(object: _142.UpcomingGaugesResponseSDKType): _142.UpcomingGaugesResponse;
            toSDK(message: _142.UpcomingGaugesResponse): _142.UpcomingGaugesResponseSDKType;
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
            fromSDK(object: _142.UpcomingGaugesPerDenomRequestSDKType): _142.UpcomingGaugesPerDenomRequest;
            toSDK(message: _142.UpcomingGaugesPerDenomRequest): _142.UpcomingGaugesPerDenomRequestSDKType;
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
            fromSDK(object: _142.UpcomingGaugesPerDenomResponseSDKType): _142.UpcomingGaugesPerDenomResponse;
            toSDK(message: _142.UpcomingGaugesPerDenomResponse): _142.UpcomingGaugesPerDenomResponseSDKType;
        };
        RewardsEstRequest: {
            encode(message: _142.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RewardsEstRequest;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _142.RewardsEstRequest;
            fromSDK(object: _142.RewardsEstRequestSDKType): _142.RewardsEstRequest;
            toSDK(message: _142.RewardsEstRequest): _142.RewardsEstRequestSDKType;
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
            fromSDK(object: _142.RewardsEstResponseSDKType): _142.RewardsEstResponse;
            toSDK(message: _142.RewardsEstResponse): _142.RewardsEstResponseSDKType;
        };
        QueryLockableDurationsRequest: {
            encode(_: _142.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryLockableDurationsRequest;
            fromPartial(_: {}): _142.QueryLockableDurationsRequest;
            fromSDK(_: _142.QueryLockableDurationsRequestSDKType): _142.QueryLockableDurationsRequest;
            toSDK(_: _142.QueryLockableDurationsRequest): _142.QueryLockableDurationsRequestSDKType;
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
            fromSDK(object: _142.QueryLockableDurationsResponseSDKType): _142.QueryLockableDurationsResponse;
            toSDK(message: _142.QueryLockableDurationsResponse): _142.QueryLockableDurationsResponseSDKType;
        };
        Params: {
            encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _141.Params;
            fromSDK(object: _141.ParamsSDKType): _141.Params;
            toSDK(message: _141.Params): _141.ParamsSDKType;
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
            fromSDK(object: _140.GenesisStateSDKType): _140.GenesisState;
            toSDK(message: _140.GenesisState): _140.GenesisStateSDKType;
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
            fromSDK(object: _139.GaugeSDKType): _139.Gauge;
            toSDK(message: _139.Gauge): _139.GaugeSDKType;
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
            fromSDK(object: _139.LockableDurationsInfoSDKType): _139.LockableDurationsInfo;
            toSDK(message: _139.LockableDurationsInfo): _139.LockableDurationsInfoSDKType;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _315.MsgClientImpl;
        QueryClientImpl: typeof _305.QueryClientImpl;
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
            toJSON: {
                lockTokens(value: _147.MsgLockTokens): {
                    typeUrl: string;
                    value: any;
                };
                beginUnlockingAll(value: _147.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: any;
                };
                beginUnlocking(value: _147.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: any;
                };
                extendLockup(value: _147.MsgExtendLockup): {
                    typeUrl: string;
                    value: any;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: any;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: any;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: any;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: any;
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
            fromSDK(object: _147.MsgLockTokensSDKType): _147.MsgLockTokens;
            toSDK(message: _147.MsgLockTokens): _147.MsgLockTokensSDKType;
        };
        MsgLockTokensResponse: {
            encode(message: _147.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgLockTokensResponseSDKType;
            fromPartial(object: {
                ID?: any;
            }): _147.MsgLockTokensResponse;
            fromSDK(object: _147.MsgLockTokensResponseSDKType): _147.MsgLockTokensResponse;
            toSDK(message: _147.MsgLockTokensResponse): _147.MsgLockTokensResponseSDKType;
        };
        MsgBeginUnlockingAll: {
            encode(message: _147.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingAll;
            fromPartial(object: {
                owner?: string;
            }): _147.MsgBeginUnlockingAll;
            fromSDK(object: _147.MsgBeginUnlockingAllSDKType): _147.MsgBeginUnlockingAll;
            toSDK(message: _147.MsgBeginUnlockingAll): _147.MsgBeginUnlockingAllSDKType;
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
            fromSDK(object: _147.MsgBeginUnlockingAllResponseSDKType): _147.MsgBeginUnlockingAllResponse;
            toSDK(message: _147.MsgBeginUnlockingAllResponse): _147.MsgBeginUnlockingAllResponseSDKType;
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
            fromSDK(object: _147.MsgBeginUnlockingSDKType): _147.MsgBeginUnlocking;
            toSDK(message: _147.MsgBeginUnlocking): _147.MsgBeginUnlockingSDKType;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _147.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingResponseSDKType;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgBeginUnlockingResponse;
            fromSDK(object: _147.MsgBeginUnlockingResponseSDKType): _147.MsgBeginUnlockingResponse;
            toSDK(message: _147.MsgBeginUnlockingResponse): _147.MsgBeginUnlockingResponseSDKType;
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
            fromSDK(object: _147.MsgExtendLockupSDKType): _147.MsgExtendLockup;
            toSDK(message: _147.MsgExtendLockup): _147.MsgExtendLockupSDKType;
        };
        MsgExtendLockupResponse: {
            encode(message: _147.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgExtendLockupResponseSDKType;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgExtendLockupResponse;
            fromSDK(object: _147.MsgExtendLockupResponseSDKType): _147.MsgExtendLockupResponse;
            toSDK(message: _147.MsgExtendLockupResponse): _147.MsgExtendLockupResponseSDKType;
        };
        ModuleBalanceRequest: {
            encode(_: _146.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleBalanceRequest;
            fromPartial(_: {}): _146.ModuleBalanceRequest;
            fromSDK(_: _146.ModuleBalanceRequestSDKType): _146.ModuleBalanceRequest;
            toSDK(_: _146.ModuleBalanceRequest): _146.ModuleBalanceRequestSDKType;
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
            fromSDK(object: _146.ModuleBalanceResponseSDKType): _146.ModuleBalanceResponse;
            toSDK(message: _146.ModuleBalanceResponse): _146.ModuleBalanceResponseSDKType;
        };
        ModuleLockedAmountRequest: {
            encode(_: _146.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleLockedAmountRequest;
            fromPartial(_: {}): _146.ModuleLockedAmountRequest;
            fromSDK(_: _146.ModuleLockedAmountRequestSDKType): _146.ModuleLockedAmountRequest;
            toSDK(_: _146.ModuleLockedAmountRequest): _146.ModuleLockedAmountRequestSDKType;
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
            fromSDK(object: _146.ModuleLockedAmountResponseSDKType): _146.ModuleLockedAmountResponse;
            toSDK(message: _146.ModuleLockedAmountResponse): _146.ModuleLockedAmountResponseSDKType;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _146.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockableCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockableCoinsRequest;
            fromSDK(object: _146.AccountUnlockableCoinsRequestSDKType): _146.AccountUnlockableCoinsRequest;
            toSDK(message: _146.AccountUnlockableCoinsRequest): _146.AccountUnlockableCoinsRequestSDKType;
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
            fromSDK(object: _146.AccountUnlockableCoinsResponseSDKType): _146.AccountUnlockableCoinsResponse;
            toSDK(message: _146.AccountUnlockableCoinsResponse): _146.AccountUnlockableCoinsResponseSDKType;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _146.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockingCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockingCoinsRequest;
            fromSDK(object: _146.AccountUnlockingCoinsRequestSDKType): _146.AccountUnlockingCoinsRequest;
            toSDK(message: _146.AccountUnlockingCoinsRequest): _146.AccountUnlockingCoinsRequestSDKType;
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
            fromSDK(object: _146.AccountUnlockingCoinsResponseSDKType): _146.AccountUnlockingCoinsResponse;
            toSDK(message: _146.AccountUnlockingCoinsResponse): _146.AccountUnlockingCoinsResponseSDKType;
        };
        AccountLockedCoinsRequest: {
            encode(message: _146.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedCoinsRequest;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountLockedCoinsRequest;
            fromSDK(object: _146.AccountLockedCoinsRequestSDKType): _146.AccountLockedCoinsRequest;
            toSDK(message: _146.AccountLockedCoinsRequest): _146.AccountLockedCoinsRequestSDKType;
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
            fromSDK(object: _146.AccountLockedCoinsResponseSDKType): _146.AccountLockedCoinsResponse;
            toSDK(message: _146.AccountLockedCoinsResponse): _146.AccountLockedCoinsResponseSDKType;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _146.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeRequest;
            fromSDK(object: _146.AccountLockedPastTimeRequestSDKType): _146.AccountLockedPastTimeRequest;
            toSDK(message: _146.AccountLockedPastTimeRequest): _146.AccountLockedPastTimeRequestSDKType;
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
            fromSDK(object: _146.AccountLockedPastTimeResponseSDKType): _146.AccountLockedPastTimeResponse;
            toSDK(message: _146.AccountLockedPastTimeResponse): _146.AccountLockedPastTimeResponseSDKType;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _146.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromSDK(object: _146.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toSDK(message: _146.AccountLockedPastTimeNotUnlockingOnlyRequest): _146.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
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
            fromSDK(object: _146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): _146.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toSDK(message: _146.AccountLockedPastTimeNotUnlockingOnlyResponse): _146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _146.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountUnlockedBeforeTimeRequest;
            fromSDK(object: _146.AccountUnlockedBeforeTimeRequestSDKType): _146.AccountUnlockedBeforeTimeRequest;
            toSDK(message: _146.AccountUnlockedBeforeTimeRequest): _146.AccountUnlockedBeforeTimeRequestSDKType;
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
            fromSDK(object: _146.AccountUnlockedBeforeTimeResponseSDKType): _146.AccountUnlockedBeforeTimeResponse;
            toSDK(message: _146.AccountUnlockedBeforeTimeResponse): _146.AccountUnlockedBeforeTimeResponseSDKType;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _146.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeDenomRequest;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _146.AccountLockedPastTimeDenomRequest;
            fromSDK(object: _146.AccountLockedPastTimeDenomRequestSDKType): _146.AccountLockedPastTimeDenomRequest;
            toSDK(message: _146.AccountLockedPastTimeDenomRequest): _146.AccountLockedPastTimeDenomRequestSDKType;
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
            fromSDK(object: _146.AccountLockedPastTimeDenomResponseSDKType): _146.AccountLockedPastTimeDenomResponse;
            toSDK(message: _146.AccountLockedPastTimeDenomResponse): _146.AccountLockedPastTimeDenomResponseSDKType;
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
            fromSDK(object: _146.LockedDenomRequestSDKType): _146.LockedDenomRequest;
            toSDK(message: _146.LockedDenomRequest): _146.LockedDenomRequestSDKType;
        };
        LockedDenomResponse: {
            encode(message: _146.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedDenomResponseSDKType;
            fromPartial(object: {
                amount?: string;
            }): _146.LockedDenomResponse;
            fromSDK(object: _146.LockedDenomResponseSDKType): _146.LockedDenomResponse;
            toSDK(message: _146.LockedDenomResponse): _146.LockedDenomResponseSDKType;
        };
        LockedRequest: {
            encode(message: _146.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedRequest;
            fromPartial(object: {
                lockId?: any;
            }): _146.LockedRequest;
            fromSDK(object: _146.LockedRequestSDKType): _146.LockedRequest;
            toSDK(message: _146.LockedRequest): _146.LockedRequestSDKType;
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
            fromSDK(object: _146.LockedResponseSDKType): _146.LockedResponse;
            toSDK(message: _146.LockedResponse): _146.LockedResponseSDKType;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _146.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: {
                lockId?: any;
            }): _146.SyntheticLockupsByLockupIDRequest;
            fromSDK(object: _146.SyntheticLockupsByLockupIDRequestSDKType): _146.SyntheticLockupsByLockupIDRequest;
            toSDK(message: _146.SyntheticLockupsByLockupIDRequest): _146.SyntheticLockupsByLockupIDRequestSDKType;
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
            fromSDK(object: _146.SyntheticLockupsByLockupIDResponseSDKType): _146.SyntheticLockupsByLockupIDResponse;
            toSDK(message: _146.SyntheticLockupsByLockupIDResponse): _146.SyntheticLockupsByLockupIDResponseSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationRequestSDKType): _146.AccountLockedLongerDurationRequest;
            toSDK(message: _146.AccountLockedLongerDurationRequest): _146.AccountLockedLongerDurationRequestSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationResponseSDKType): _146.AccountLockedLongerDurationResponse;
            toSDK(message: _146.AccountLockedLongerDurationResponse): _146.AccountLockedLongerDurationResponseSDKType;
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
            fromSDK(object: _146.AccountLockedDurationRequestSDKType): _146.AccountLockedDurationRequest;
            toSDK(message: _146.AccountLockedDurationRequest): _146.AccountLockedDurationRequestSDKType;
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
            fromSDK(object: _146.AccountLockedDurationResponseSDKType): _146.AccountLockedDurationResponse;
            toSDK(message: _146.AccountLockedDurationResponse): _146.AccountLockedDurationResponseSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): _146.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toSDK(message: _146.AccountLockedLongerDurationNotUnlockingOnlyRequest): _146.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): _146.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toSDK(message: _146.AccountLockedLongerDurationNotUnlockingOnlyResponse): _146.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationDenomRequestSDKType): _146.AccountLockedLongerDurationDenomRequest;
            toSDK(message: _146.AccountLockedLongerDurationDenomRequest): _146.AccountLockedLongerDurationDenomRequestSDKType;
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
            fromSDK(object: _146.AccountLockedLongerDurationDenomResponseSDKType): _146.AccountLockedLongerDurationDenomResponse;
            toSDK(message: _146.AccountLockedLongerDurationDenomResponse): _146.AccountLockedLongerDurationDenomResponseSDKType;
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
            fromSDK(object: _145.PeriodLockSDKType): _145.PeriodLock;
            toSDK(message: _145.PeriodLock): _145.PeriodLockSDKType;
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
            fromSDK(object: _145.QueryConditionSDKType): _145.QueryCondition;
            toSDK(message: _145.QueryCondition): _145.QueryConditionSDKType;
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
            fromSDK(object: _145.SyntheticLockSDKType): _145.SyntheticLock;
            toSDK(message: _145.SyntheticLock): _145.SyntheticLockSDKType;
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
            fromSDK(object: _144.GenesisStateSDKType): _144.GenesisState;
            toSDK(message: _144.GenesisState): _144.GenesisStateSDKType;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            LCDQueryClient: typeof _297.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
                fromPartial(_: {}): _150.QueryParamsRequest;
                fromSDK(_: _150.QueryParamsRequestSDKType): _150.QueryParamsRequest;
                toSDK(_: _150.QueryParamsRequest): _150.QueryParamsRequestSDKType;
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
                fromSDK(object: _150.QueryParamsResponseSDKType): _150.QueryParamsResponse;
                toSDK(message: _150.QueryParamsResponse): _150.QueryParamsResponseSDKType;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _150.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _150.QueryEpochProvisionsRequest;
                fromSDK(_: _150.QueryEpochProvisionsRequestSDKType): _150.QueryEpochProvisionsRequest;
                toSDK(_: _150.QueryEpochProvisionsRequest): _150.QueryEpochProvisionsRequestSDKType;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _150.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryEpochProvisionsResponseSDKType;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _150.QueryEpochProvisionsResponse;
                fromSDK(object: _150.QueryEpochProvisionsResponseSDKType): _150.QueryEpochProvisionsResponse;
                toSDK(message: _150.QueryEpochProvisionsResponse): _150.QueryEpochProvisionsResponseSDKType;
            };
            Minter: {
                encode(message: _149.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _149.Minter;
                fromSDK(object: _149.MinterSDKType): _149.Minter;
                toSDK(message: _149.Minter): _149.MinterSDKType;
            };
            WeightedAddress: {
                encode(message: _149.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _149.WeightedAddress;
                fromSDK(object: _149.WeightedAddressSDKType): _149.WeightedAddress;
                toSDK(message: _149.WeightedAddress): _149.WeightedAddressSDKType;
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
                fromSDK(object: _149.DistributionProportionsSDKType): _149.DistributionProportions;
                toSDK(message: _149.DistributionProportions): _149.DistributionProportionsSDKType;
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
                fromSDK(object: _149.ParamsSDKType): _149.Params;
                toSDK(message: _149.Params): _149.ParamsSDKType;
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
                fromSDK(object: _148.GenesisStateSDKType): _148.GenesisState;
                toSDK(message: _148.GenesisState): _148.GenesisStateSDKType;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _154.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsRequest;
                fromPartial(object: {
                    poolId?: any;
                }): _154.QueryGaugeIdsRequest;
                fromSDK(object: _154.QueryGaugeIdsRequestSDKType): _154.QueryGaugeIdsRequest;
                toSDK(message: _154.QueryGaugeIdsRequest): _154.QueryGaugeIdsRequestSDKType;
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
                fromSDK(object: _154.QueryGaugeIdsResponseSDKType): _154.QueryGaugeIdsResponse;
                toSDK(message: _154.QueryGaugeIdsResponse): _154.QueryGaugeIdsResponseSDKType;
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
                fromSDK(object: _154.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): _154.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toSDK(message: _154.QueryGaugeIdsResponse_GaugeIdWithDuration): _154.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
            };
            QueryDistrInfoRequest: {
                encode(_: _154.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDistrInfoRequest;
                fromPartial(_: {}): _154.QueryDistrInfoRequest;
                fromSDK(_: _154.QueryDistrInfoRequestSDKType): _154.QueryDistrInfoRequest;
                toSDK(_: _154.QueryDistrInfoRequest): _154.QueryDistrInfoRequestSDKType;
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
                fromSDK(object: _154.QueryDistrInfoResponseSDKType): _154.QueryDistrInfoResponse;
                toSDK(message: _154.QueryDistrInfoResponse): _154.QueryDistrInfoResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromPartial(_: {}): _154.QueryParamsRequest;
                fromSDK(_: _154.QueryParamsRequestSDKType): _154.QueryParamsRequest;
                toSDK(_: _154.QueryParamsRequest): _154.QueryParamsRequestSDKType;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponseSDKType;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _154.QueryParamsResponse;
                fromSDK(object: _154.QueryParamsResponseSDKType): _154.QueryParamsResponse;
                toSDK(message: _154.QueryParamsResponse): _154.QueryParamsResponseSDKType;
            };
            QueryLockableDurationsRequest: {
                encode(_: _154.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryLockableDurationsRequest;
                fromPartial(_: {}): _154.QueryLockableDurationsRequest;
                fromSDK(_: _154.QueryLockableDurationsRequestSDKType): _154.QueryLockableDurationsRequest;
                toSDK(_: _154.QueryLockableDurationsRequest): _154.QueryLockableDurationsRequestSDKType;
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
                fromSDK(object: _154.QueryLockableDurationsResponseSDKType): _154.QueryLockableDurationsResponse;
                toSDK(message: _154.QueryLockableDurationsResponse): _154.QueryLockableDurationsResponseSDKType;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _154.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryIncentivizedPoolsRequest;
                fromPartial(_: {}): _154.QueryIncentivizedPoolsRequest;
                fromSDK(_: _154.QueryIncentivizedPoolsRequestSDKType): _154.QueryIncentivizedPoolsRequest;
                toSDK(_: _154.QueryIncentivizedPoolsRequest): _154.QueryIncentivizedPoolsRequestSDKType;
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
                fromSDK(object: _154.IncentivizedPoolSDKType): _154.IncentivizedPool;
                toSDK(message: _154.IncentivizedPool): _154.IncentivizedPoolSDKType;
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
                fromSDK(object: _154.QueryIncentivizedPoolsResponseSDKType): _154.QueryIncentivizedPoolsResponse;
                toSDK(message: _154.QueryIncentivizedPoolsResponse): _154.QueryIncentivizedPoolsResponseSDKType;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _154.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: {}): _154.QueryExternalIncentiveGaugesRequest;
                fromSDK(_: _154.QueryExternalIncentiveGaugesRequestSDKType): _154.QueryExternalIncentiveGaugesRequest;
                toSDK(_: _154.QueryExternalIncentiveGaugesRequest): _154.QueryExternalIncentiveGaugesRequestSDKType;
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
                fromSDK(object: _154.QueryExternalIncentiveGaugesResponseSDKType): _154.QueryExternalIncentiveGaugesResponse;
                toSDK(message: _154.QueryExternalIncentiveGaugesResponse): _154.QueryExternalIncentiveGaugesResponseSDKType;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _153.Params;
                fromSDK(object: _153.ParamsSDKType): _153.Params;
                toSDK(message: _153.Params): _153.ParamsSDKType;
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
                fromSDK(object: _153.LockableDurationsInfoSDKType): _153.LockableDurationsInfo;
                toSDK(message: _153.LockableDurationsInfo): _153.LockableDurationsInfoSDKType;
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
                fromSDK(object: _153.DistrInfoSDKType): _153.DistrInfo;
                toSDK(message: _153.DistrInfo): _153.DistrInfoSDKType;
            };
            DistrRecord: {
                encode(message: _153.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DistrRecord;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _153.DistrRecord;
                fromSDK(object: _153.DistrRecordSDKType): _153.DistrRecord;
                toSDK(message: _153.DistrRecord): _153.DistrRecordSDKType;
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
                fromSDK(object: _152.ReplacePoolIncentivesProposalSDKType): _152.ReplacePoolIncentivesProposal;
                toSDK(message: _152.ReplacePoolIncentivesProposal): _152.ReplacePoolIncentivesProposalSDKType;
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
                fromSDK(object: _152.UpdatePoolIncentivesProposalSDKType): _152.UpdatePoolIncentivesProposal;
                toSDK(message: _152.UpdatePoolIncentivesProposal): _152.UpdatePoolIncentivesProposalSDKType;
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
                fromSDK(object: _151.GenesisStateSDKType): _151.GenesisState;
                toSDK(message: _151.GenesisState): _151.GenesisStateSDKType;
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
                fromSDK(object: _155.NodeSDKType): _155.Node;
                toSDK(message: _155.Node): _155.NodeSDKType;
            };
            Child: {
                encode(message: _155.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Child;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _155.Child;
                fromSDK(object: _155.ChildSDKType): _155.Child;
                toSDK(message: _155.Child): _155.ChildSDKType;
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
                fromSDK(object: _155.LeafSDKType): _155.Leaf;
                toSDK(message: _155.Leaf): _155.LeafSDKType;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _316.MsgClientImpl;
        QueryClientImpl: typeof _308.QueryClientImpl;
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
            toJSON: {
                superfluidDelegate(value: _160.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: any;
                };
                superfluidUndelegate(value: _160.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: any;
                };
                superfluidUnbondLock(value: _160.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: any;
                };
                lockAndSuperfluidDelegate(value: _160.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: any;
                };
                unPoolWhitelistedPool(value: _160.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: any;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: any;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: any;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: any;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: any;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: any;
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
            fromSDK(object: _160.MsgSuperfluidDelegateSDKType): _160.MsgSuperfluidDelegate;
            toSDK(message: _160.MsgSuperfluidDelegate): _160.MsgSuperfluidDelegateSDKType;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _160.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidDelegateResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidDelegateResponse;
            fromSDK(_: _160.MsgSuperfluidDelegateResponseSDKType): _160.MsgSuperfluidDelegateResponse;
            toSDK(_: _160.MsgSuperfluidDelegateResponse): _160.MsgSuperfluidDelegateResponseSDKType;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _160.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegate;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUndelegate;
            fromSDK(object: _160.MsgSuperfluidUndelegateSDKType): _160.MsgSuperfluidUndelegate;
            toSDK(message: _160.MsgSuperfluidUndelegate): _160.MsgSuperfluidUndelegateSDKType;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _160.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegateResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidUndelegateResponse;
            fromSDK(_: _160.MsgSuperfluidUndelegateResponseSDKType): _160.MsgSuperfluidUndelegateResponse;
            toSDK(_: _160.MsgSuperfluidUndelegateResponse): _160.MsgSuperfluidUndelegateResponseSDKType;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _160.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLock;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUnbondLock;
            fromSDK(object: _160.MsgSuperfluidUnbondLockSDKType): _160.MsgSuperfluidUnbondLock;
            toSDK(message: _160.MsgSuperfluidUnbondLock): _160.MsgSuperfluidUnbondLockSDKType;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _160.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLockResponseSDKType;
            fromPartial(_: {}): _160.MsgSuperfluidUnbondLockResponse;
            fromSDK(_: _160.MsgSuperfluidUnbondLockResponseSDKType): _160.MsgSuperfluidUnbondLockResponse;
            toSDK(_: _160.MsgSuperfluidUnbondLockResponse): _160.MsgSuperfluidUnbondLockResponseSDKType;
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
            fromSDK(object: _160.MsgLockAndSuperfluidDelegateSDKType): _160.MsgLockAndSuperfluidDelegate;
            toSDK(message: _160.MsgLockAndSuperfluidDelegate): _160.MsgLockAndSuperfluidDelegateSDKType;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _160.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgLockAndSuperfluidDelegateResponseSDKType;
            fromPartial(object: {
                ID?: any;
            }): _160.MsgLockAndSuperfluidDelegateResponse;
            fromSDK(object: _160.MsgLockAndSuperfluidDelegateResponseSDKType): _160.MsgLockAndSuperfluidDelegateResponse;
            toSDK(message: _160.MsgLockAndSuperfluidDelegateResponse): _160.MsgLockAndSuperfluidDelegateResponseSDKType;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _160.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPool;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _160.MsgUnPoolWhitelistedPool;
            fromSDK(object: _160.MsgUnPoolWhitelistedPoolSDKType): _160.MsgUnPoolWhitelistedPool;
            toSDK(message: _160.MsgUnPoolWhitelistedPool): _160.MsgUnPoolWhitelistedPoolSDKType;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _160.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _160.MsgUnPoolWhitelistedPoolResponse;
            fromSDK(object: _160.MsgUnPoolWhitelistedPoolResponseSDKType): _160.MsgUnPoolWhitelistedPoolResponse;
            toSDK(message: _160.MsgUnPoolWhitelistedPoolResponse): _160.MsgUnPoolWhitelistedPoolResponseSDKType;
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
            fromSDK(object: _159.SuperfluidAssetSDKType): _159.SuperfluidAsset;
            toSDK(message: _159.SuperfluidAsset): _159.SuperfluidAssetSDKType;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _159.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidIntermediaryAccount;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _159.SuperfluidIntermediaryAccount;
            fromSDK(object: _159.SuperfluidIntermediaryAccountSDKType): _159.SuperfluidIntermediaryAccount;
            toSDK(message: _159.SuperfluidIntermediaryAccount): _159.SuperfluidIntermediaryAccountSDKType;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _159.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.OsmoEquivalentMultiplierRecord;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _159.OsmoEquivalentMultiplierRecord;
            fromSDK(object: _159.OsmoEquivalentMultiplierRecordSDKType): _159.OsmoEquivalentMultiplierRecord;
            toSDK(message: _159.OsmoEquivalentMultiplierRecord): _159.OsmoEquivalentMultiplierRecordSDKType;
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
            fromSDK(object: _159.SuperfluidDelegationRecordSDKType): _159.SuperfluidDelegationRecord;
            toSDK(message: _159.SuperfluidDelegationRecord): _159.SuperfluidDelegationRecordSDKType;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _159.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.LockIdIntermediaryAccountConnection;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _159.LockIdIntermediaryAccountConnection;
            fromSDK(object: _159.LockIdIntermediaryAccountConnectionSDKType): _159.LockIdIntermediaryAccountConnection;
            toSDK(message: _159.LockIdIntermediaryAccountConnection): _159.LockIdIntermediaryAccountConnectionSDKType;
        };
        UnpoolWhitelistedPools: {
            encode(message: _159.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.UnpoolWhitelistedPools;
            fromPartial(object: {
                ids?: any[];
            }): _159.UnpoolWhitelistedPools;
            fromSDK(object: _159.UnpoolWhitelistedPoolsSDKType): _159.UnpoolWhitelistedPools;
            toSDK(message: _159.UnpoolWhitelistedPools): _159.UnpoolWhitelistedPoolsSDKType;
        };
        QueryParamsRequest: {
            encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
            fromPartial(_: {}): _158.QueryParamsRequest;
            fromSDK(_: _158.QueryParamsRequestSDKType): _158.QueryParamsRequest;
            toSDK(_: _158.QueryParamsRequest): _158.QueryParamsRequestSDKType;
        };
        QueryParamsResponse: {
            encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponseSDKType;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _158.QueryParamsResponse;
            fromSDK(object: _158.QueryParamsResponseSDKType): _158.QueryParamsResponse;
            toSDK(message: _158.QueryParamsResponse): _158.QueryParamsResponseSDKType;
        };
        AssetTypeRequest: {
            encode(message: _158.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeRequest;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetTypeRequest;
            fromSDK(object: _158.AssetTypeRequestSDKType): _158.AssetTypeRequest;
            toSDK(message: _158.AssetTypeRequest): _158.AssetTypeRequestSDKType;
        };
        AssetTypeResponse: {
            encode(message: _158.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeResponseSDKType;
            fromPartial(object: {
                assetType?: _159.SuperfluidAssetType;
            }): _158.AssetTypeResponse;
            fromSDK(object: _158.AssetTypeResponseSDKType): _158.AssetTypeResponse;
            toSDK(message: _158.AssetTypeResponse): _158.AssetTypeResponseSDKType;
        };
        AllAssetsRequest: {
            encode(_: _158.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllAssetsRequest;
            fromPartial(_: {}): _158.AllAssetsRequest;
            fromSDK(_: _158.AllAssetsRequestSDKType): _158.AllAssetsRequest;
            toSDK(_: _158.AllAssetsRequest): _158.AllAssetsRequestSDKType;
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
            fromSDK(object: _158.AllAssetsResponseSDKType): _158.AllAssetsResponse;
            toSDK(message: _158.AllAssetsResponse): _158.AllAssetsResponseSDKType;
        };
        AssetMultiplierRequest: {
            encode(message: _158.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetMultiplierRequest;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetMultiplierRequest;
            fromSDK(object: _158.AssetMultiplierRequestSDKType): _158.AssetMultiplierRequest;
            toSDK(message: _158.AssetMultiplierRequest): _158.AssetMultiplierRequestSDKType;
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
            fromSDK(object: _158.AssetMultiplierResponseSDKType): _158.AssetMultiplierResponse;
            toSDK(message: _158.AssetMultiplierResponse): _158.AssetMultiplierResponseSDKType;
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
            fromSDK(object: _158.SuperfluidIntermediaryAccountInfoSDKType): _158.SuperfluidIntermediaryAccountInfo;
            toSDK(message: _158.SuperfluidIntermediaryAccountInfo): _158.SuperfluidIntermediaryAccountInfoSDKType;
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
            fromSDK(object: _158.AllIntermediaryAccountsRequestSDKType): _158.AllIntermediaryAccountsRequest;
            toSDK(message: _158.AllIntermediaryAccountsRequest): _158.AllIntermediaryAccountsRequestSDKType;
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
            fromSDK(object: _158.AllIntermediaryAccountsResponseSDKType): _158.AllIntermediaryAccountsResponse;
            toSDK(message: _158.AllIntermediaryAccountsResponse): _158.AllIntermediaryAccountsResponseSDKType;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _158.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ConnectedIntermediaryAccountRequest;
            fromPartial(object: {
                lockId?: any;
            }): _158.ConnectedIntermediaryAccountRequest;
            fromSDK(object: _158.ConnectedIntermediaryAccountRequestSDKType): _158.ConnectedIntermediaryAccountRequest;
            toSDK(message: _158.ConnectedIntermediaryAccountRequest): _158.ConnectedIntermediaryAccountRequestSDKType;
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
            fromSDK(object: _158.ConnectedIntermediaryAccountResponseSDKType): _158.ConnectedIntermediaryAccountResponse;
            toSDK(message: _158.ConnectedIntermediaryAccountResponse): _158.ConnectedIntermediaryAccountResponseSDKType;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _158.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TotalSuperfluidDelegationsRequest;
            fromPartial(_: {}): _158.TotalSuperfluidDelegationsRequest;
            fromSDK(_: _158.TotalSuperfluidDelegationsRequestSDKType): _158.TotalSuperfluidDelegationsRequest;
            toSDK(_: _158.TotalSuperfluidDelegationsRequest): _158.TotalSuperfluidDelegationsRequestSDKType;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _158.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TotalSuperfluidDelegationsResponseSDKType;
            fromPartial(object: {
                totalDelegations?: string;
            }): _158.TotalSuperfluidDelegationsResponse;
            fromSDK(object: _158.TotalSuperfluidDelegationsResponseSDKType): _158.TotalSuperfluidDelegationsResponse;
            toSDK(message: _158.TotalSuperfluidDelegationsResponse): _158.TotalSuperfluidDelegationsResponseSDKType;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _158.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationAmountRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationAmountRequest;
            fromSDK(object: _158.SuperfluidDelegationAmountRequestSDKType): _158.SuperfluidDelegationAmountRequest;
            toSDK(message: _158.SuperfluidDelegationAmountRequest): _158.SuperfluidDelegationAmountRequestSDKType;
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
            fromSDK(object: _158.SuperfluidDelegationAmountResponseSDKType): _158.SuperfluidDelegationAmountResponse;
            toSDK(message: _158.SuperfluidDelegationAmountResponse): _158.SuperfluidDelegationAmountResponseSDKType;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _158.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _158.SuperfluidDelegationsByDelegatorRequest;
            fromSDK(object: _158.SuperfluidDelegationsByDelegatorRequestSDKType): _158.SuperfluidDelegationsByDelegatorRequest;
            toSDK(message: _158.SuperfluidDelegationsByDelegatorRequest): _158.SuperfluidDelegationsByDelegatorRequestSDKType;
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
            fromSDK(object: _158.SuperfluidDelegationsByDelegatorResponseSDKType): _158.SuperfluidDelegationsByDelegatorResponse;
            toSDK(message: _158.SuperfluidDelegationsByDelegatorResponse): _158.SuperfluidDelegationsByDelegatorResponseSDKType;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _158.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidUndelegationsByDelegatorRequest;
            fromSDK(object: _158.SuperfluidUndelegationsByDelegatorRequestSDKType): _158.SuperfluidUndelegationsByDelegatorRequest;
            toSDK(message: _158.SuperfluidUndelegationsByDelegatorRequest): _158.SuperfluidUndelegationsByDelegatorRequestSDKType;
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
            fromSDK(object: _158.SuperfluidUndelegationsByDelegatorResponseSDKType): _158.SuperfluidUndelegationsByDelegatorResponse;
            toSDK(message: _158.SuperfluidUndelegationsByDelegatorResponse): _158.SuperfluidUndelegationsByDelegatorResponseSDKType;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _158.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationsByValidatorDenomRequest;
            fromSDK(object: _158.SuperfluidDelegationsByValidatorDenomRequestSDKType): _158.SuperfluidDelegationsByValidatorDenomRequest;
            toSDK(message: _158.SuperfluidDelegationsByValidatorDenomRequest): _158.SuperfluidDelegationsByValidatorDenomRequestSDKType;
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
            fromSDK(object: _158.SuperfluidDelegationsByValidatorDenomResponseSDKType): _158.SuperfluidDelegationsByValidatorDenomResponse;
            toSDK(message: _158.SuperfluidDelegationsByValidatorDenomResponse): _158.SuperfluidDelegationsByValidatorDenomResponseSDKType;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromSDK(object: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toSDK(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
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
            fromSDK(object: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toSDK(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
        };
        Params: {
            encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _157.Params;
            fromSDK(object: _157.ParamsSDKType): _157.Params;
            toSDK(message: _157.Params): _157.ParamsSDKType;
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
            fromSDK(object: _156.GenesisStateSDKType): _156.GenesisState;
            toSDK(message: _156.GenesisState): _156.GenesisStateSDKType;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
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
                toJSON: {
                    createDenom(value: _165.MsgCreateDenom): {
                        typeUrl: string;
                        value: any;
                    };
                    mint(value: _165.MsgMint): {
                        typeUrl: string;
                        value: any;
                    };
                    burn(value: _165.MsgBurn): {
                        typeUrl: string;
                        value: any;
                    };
                    changeAdmin(value: _165.MsgChangeAdmin): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: any;
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
                fromSDK(object: _165.MsgCreateDenomSDKType): _165.MsgCreateDenom;
                toSDK(message: _165.MsgCreateDenom): _165.MsgCreateDenomSDKType;
            };
            MsgCreateDenomResponse: {
                encode(message: _165.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateDenomResponseSDKType;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _165.MsgCreateDenomResponse;
                fromSDK(object: _165.MsgCreateDenomResponseSDKType): _165.MsgCreateDenomResponse;
                toSDK(message: _165.MsgCreateDenomResponse): _165.MsgCreateDenomResponseSDKType;
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
                fromSDK(object: _165.MsgMintSDKType): _165.MsgMint;
                toSDK(message: _165.MsgMint): _165.MsgMintSDKType;
            };
            MsgMintResponse: {
                encode(_: _165.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgMintResponseSDKType;
                fromPartial(_: {}): _165.MsgMintResponse;
                fromSDK(_: _165.MsgMintResponseSDKType): _165.MsgMintResponse;
                toSDK(_: _165.MsgMintResponse): _165.MsgMintResponseSDKType;
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
                fromSDK(object: _165.MsgBurnSDKType): _165.MsgBurn;
                toSDK(message: _165.MsgBurn): _165.MsgBurnSDKType;
            };
            MsgBurnResponse: {
                encode(_: _165.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgBurnResponseSDKType;
                fromPartial(_: {}): _165.MsgBurnResponse;
                fromSDK(_: _165.MsgBurnResponseSDKType): _165.MsgBurnResponse;
                toSDK(_: _165.MsgBurnResponse): _165.MsgBurnResponseSDKType;
            };
            MsgChangeAdmin: {
                encode(message: _165.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _165.MsgChangeAdmin;
                fromSDK(object: _165.MsgChangeAdminSDKType): _165.MsgChangeAdmin;
                toSDK(message: _165.MsgChangeAdmin): _165.MsgChangeAdminSDKType;
            };
            MsgChangeAdminResponse: {
                encode(_: _165.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdminResponseSDKType;
                fromPartial(_: {}): _165.MsgChangeAdminResponse;
                fromSDK(_: _165.MsgChangeAdminResponseSDKType): _165.MsgChangeAdminResponse;
                toSDK(_: _165.MsgChangeAdminResponse): _165.MsgChangeAdminResponseSDKType;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromPartial(_: {}): _164.QueryParamsRequest;
                fromSDK(_: _164.QueryParamsRequestSDKType): _164.QueryParamsRequest;
                toSDK(_: _164.QueryParamsRequest): _164.QueryParamsRequestSDKType;
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
                fromSDK(object: _164.QueryParamsResponseSDKType): _164.QueryParamsResponse;
                toSDK(message: _164.QueryParamsResponse): _164.QueryParamsResponseSDKType;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _164.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _164.QueryDenomAuthorityMetadataRequest;
                fromSDK(object: _164.QueryDenomAuthorityMetadataRequestSDKType): _164.QueryDenomAuthorityMetadataRequest;
                toSDK(message: _164.QueryDenomAuthorityMetadataRequest): _164.QueryDenomAuthorityMetadataRequestSDKType;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _164.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomAuthorityMetadataResponseSDKType;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _164.QueryDenomAuthorityMetadataResponse;
                fromSDK(object: _164.QueryDenomAuthorityMetadataResponseSDKType): _164.QueryDenomAuthorityMetadataResponse;
                toSDK(message: _164.QueryDenomAuthorityMetadataResponse): _164.QueryDenomAuthorityMetadataResponseSDKType;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _164.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _164.QueryDenomsFromCreatorRequest;
                fromSDK(object: _164.QueryDenomsFromCreatorRequestSDKType): _164.QueryDenomsFromCreatorRequest;
                toSDK(message: _164.QueryDenomsFromCreatorRequest): _164.QueryDenomsFromCreatorRequestSDKType;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _164.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorResponseSDKType;
                fromPartial(object: {
                    denoms?: string[];
                }): _164.QueryDenomsFromCreatorResponse;
                fromSDK(object: _164.QueryDenomsFromCreatorResponseSDKType): _164.QueryDenomsFromCreatorResponse;
                toSDK(message: _164.QueryDenomsFromCreatorResponse): _164.QueryDenomsFromCreatorResponseSDKType;
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
                fromSDK(object: _163.ParamsSDKType): _163.Params;
                toSDK(message: _163.Params): _163.ParamsSDKType;
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
                fromSDK(object: _162.GenesisStateSDKType): _162.GenesisState;
                toSDK(message: _162.GenesisState): _162.GenesisStateSDKType;
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
                fromSDK(object: _162.GenesisDenomSDKType): _162.GenesisDenom;
                toSDK(message: _162.GenesisDenom): _162.GenesisDenomSDKType;
            };
            DenomAuthorityMetadata: {
                encode(message: _161.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DenomAuthorityMetadata;
                fromPartial(object: {
                    Admin?: string;
                }): _161.DenomAuthorityMetadata;
                fromSDK(object: _161.DenomAuthorityMetadataSDKType): _161.DenomAuthorityMetadata;
                toSDK(message: _161.DenomAuthorityMetadata): _161.DenomAuthorityMetadataSDKType;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _310.QueryClientImpl;
            LCDQueryClient: typeof _301.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _169.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryFeeTokensRequest;
                fromPartial(_: {}): _169.QueryFeeTokensRequest;
                fromSDK(_: _169.QueryFeeTokensRequestSDKType): _169.QueryFeeTokensRequest;
                toSDK(_: _169.QueryFeeTokensRequest): _169.QueryFeeTokensRequestSDKType;
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
                fromSDK(object: _169.QueryFeeTokensResponseSDKType): _169.QueryFeeTokensResponse;
                toSDK(message: _169.QueryFeeTokensResponse): _169.QueryFeeTokensResponseSDKType;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _169.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomSpotPriceRequest;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomSpotPriceRequest;
                fromSDK(object: _169.QueryDenomSpotPriceRequestSDKType): _169.QueryDenomSpotPriceRequest;
                toSDK(message: _169.QueryDenomSpotPriceRequest): _169.QueryDenomSpotPriceRequestSDKType;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _169.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomSpotPriceResponseSDKType;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _169.QueryDenomSpotPriceResponse;
                fromSDK(object: _169.QueryDenomSpotPriceResponseSDKType): _169.QueryDenomSpotPriceResponse;
                toSDK(message: _169.QueryDenomSpotPriceResponse): _169.QueryDenomSpotPriceResponseSDKType;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _169.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdRequest;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomPoolIdRequest;
                fromSDK(object: _169.QueryDenomPoolIdRequestSDKType): _169.QueryDenomPoolIdRequest;
                toSDK(message: _169.QueryDenomPoolIdRequest): _169.QueryDenomPoolIdRequestSDKType;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _169.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdResponseSDKType;
                fromPartial(object: {
                    poolID?: any;
                }): _169.QueryDenomPoolIdResponse;
                fromSDK(object: _169.QueryDenomPoolIdResponseSDKType): _169.QueryDenomPoolIdResponse;
                toSDK(message: _169.QueryDenomPoolIdResponse): _169.QueryDenomPoolIdResponseSDKType;
            };
            QueryBaseDenomRequest: {
                encode(_: _169.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomRequest;
                fromPartial(_: {}): _169.QueryBaseDenomRequest;
                fromSDK(_: _169.QueryBaseDenomRequestSDKType): _169.QueryBaseDenomRequest;
                toSDK(_: _169.QueryBaseDenomRequest): _169.QueryBaseDenomRequestSDKType;
            };
            QueryBaseDenomResponse: {
                encode(message: _169.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomResponseSDKType;
                fromPartial(object: {
                    baseDenom?: string;
                }): _169.QueryBaseDenomResponse;
                fromSDK(object: _169.QueryBaseDenomResponseSDKType): _169.QueryBaseDenomResponse;
                toSDK(message: _169.QueryBaseDenomResponse): _169.QueryBaseDenomResponseSDKType;
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
                fromSDK(object: _168.UpdateFeeTokenProposalSDKType): _168.UpdateFeeTokenProposal;
                toSDK(message: _168.UpdateFeeTokenProposal): _168.UpdateFeeTokenProposalSDKType;
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
                fromSDK(object: _167.GenesisStateSDKType): _167.GenesisState;
                toSDK(message: _167.GenesisState): _167.GenesisStateSDKType;
            };
            FeeToken: {
                encode(message: _166.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.FeeToken;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _166.FeeToken;
                fromSDK(object: _166.FeeTokenSDKType): _166.FeeToken;
                toSDK(message: _166.FeeToken): _166.FeeTokenSDKType;
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
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: any;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                tx: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _302.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _303.QueryClientImpl;
                };
                incentives: _304.QueryClientImpl;
                lockup: _305.QueryClientImpl;
                mint: {
                    v1beta1: _306.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _307.QueryClientImpl;
                };
                superfluid: _308.QueryClientImpl;
                tokenfactory: {
                    v1beta1: _309.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _310.QueryClientImpl;
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
