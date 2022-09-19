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
                fromJSON(_: any): _131.QueryEpochsInfoRequest;
                toJSON(_: _131.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _131.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _131.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoResponseSDKType;
                fromJSON(object: any): _131.QueryEpochsInfoResponse;
                toJSON(message: _131.QueryEpochsInfoResponse): unknown;
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
                fromJSON(object: any): _131.QueryCurrentEpochRequest;
                toJSON(message: _131.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _131.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _131.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochResponseSDKType;
                fromJSON(object: any): _131.QueryCurrentEpochResponse;
                toJSON(message: _131.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _131.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _130.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EpochInfo;
                fromJSON(object: any): _130.EpochInfo;
                toJSON(message: _130.EpochInfo): unknown;
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
                fromJSON(object: any): _130.GenesisState;
                toJSON(message: _130.GenesisState): unknown;
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
                        value: unknown;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
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
                fromJSON(object: any): _135.MsgJoinPool;
                toJSON(message: _135.MsgJoinPool): unknown;
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
                fromJSON(_: any): _135.MsgJoinPoolResponse;
                toJSON(_: _135.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _135.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _135.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPool;
                fromJSON(object: any): _135.MsgExitPool;
                toJSON(message: _135.MsgExitPool): unknown;
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
                fromJSON(_: any): _135.MsgExitPoolResponse;
                toJSON(_: _135.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _135.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _135.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountInRoute;
                fromJSON(object: any): _135.SwapAmountInRoute;
                toJSON(message: _135.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _135.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _135.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountIn;
                fromJSON(object: any): _135.MsgSwapExactAmountIn;
                toJSON(message: _135.MsgSwapExactAmountIn): unknown;
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
                fromJSON(object: any): _135.MsgSwapExactAmountInResponse;
                toJSON(message: _135.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _135.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountOutRoute;
                fromJSON(object: any): _135.SwapAmountOutRoute;
                toJSON(message: _135.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _135.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _135.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOut;
                fromJSON(object: any): _135.MsgSwapExactAmountOut;
                toJSON(message: _135.MsgSwapExactAmountOut): unknown;
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
                fromJSON(object: any): _135.MsgSwapExactAmountOutResponse;
                toJSON(message: _135.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _135.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _135.MsgJoinSwapExternAmountIn;
                toJSON(message: _135.MsgJoinSwapExternAmountIn): unknown;
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
                fromJSON(object: any): _135.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _135.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _135.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _135.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _135.MsgJoinSwapShareAmountOut;
                toJSON(message: _135.MsgJoinSwapShareAmountOut): unknown;
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
                fromJSON(object: any): _135.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _135.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _135.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _135.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _135.MsgExitSwapShareAmountIn;
                toJSON(message: _135.MsgExitSwapShareAmountIn): unknown;
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
                fromJSON(object: any): _135.MsgExitSwapShareAmountInResponse;
                toJSON(message: _135.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _135.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _135.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _135.MsgExitSwapExternAmountOut;
                toJSON(message: _135.MsgExitSwapExternAmountOut): unknown;
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
                fromJSON(object: any): _135.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _135.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _135.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _134.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolRequest;
                fromJSON(object: any): _134.QueryPoolRequest;
                toJSON(message: _134.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _134.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolResponseSDKType;
                fromJSON(object: any): _134.QueryPoolResponse;
                toJSON(message: _134.QueryPoolResponse): unknown;
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
                fromJSON(object: any): _134.QueryPoolsRequest;
                toJSON(message: _134.QueryPoolsRequest): unknown;
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
                fromJSON(object: any): _134.QueryPoolsResponse;
                toJSON(message: _134.QueryPoolsResponse): unknown;
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
                fromJSON(_: any): _134.QueryNumPoolsRequest;
                toJSON(_: _134.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _134.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _134.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsResponseSDKType;
                fromJSON(object: any): _134.QueryNumPoolsResponse;
                toJSON(message: _134.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _134.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _134.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsRequest;
                fromJSON(object: any): _134.QueryPoolParamsRequest;
                toJSON(message: _134.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _134.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsResponseSDKType;
                fromJSON(object: any): _134.QueryPoolParamsResponse;
                toJSON(message: _134.QueryPoolParamsResponse): unknown;
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
                fromJSON(object: any): _134.QueryTotalPoolLiquidityRequest;
                toJSON(message: _134.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _134.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityResponseSDKType;
                fromJSON(object: any): _134.QueryTotalPoolLiquidityResponse;
                toJSON(message: _134.QueryTotalPoolLiquidityResponse): unknown;
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
                fromJSON(object: any): _134.QueryTotalSharesRequest;
                toJSON(message: _134.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _134.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _134.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesResponseSDKType;
                fromJSON(object: any): _134.QueryTotalSharesResponse;
                toJSON(message: _134.QueryTotalSharesResponse): unknown;
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
                fromJSON(object: any): _134.QuerySpotPriceRequest;
                toJSON(message: _134.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _134.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _134.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceResponseSDKType;
                fromJSON(object: any): _134.QuerySpotPriceResponse;
                toJSON(message: _134.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _134.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _134.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _134.QuerySwapExactAmountInRequest;
                toJSON(message: _134.QuerySwapExactAmountInRequest): unknown;
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
                fromJSON(object: any): _134.QuerySwapExactAmountInResponse;
                toJSON(message: _134.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _134.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _134.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _134.QuerySwapExactAmountOutRequest;
                toJSON(message: _134.QuerySwapExactAmountOutRequest): unknown;
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
                fromJSON(object: any): _134.QuerySwapExactAmountOutResponse;
                toJSON(message: _134.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _134.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _134.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityRequest;
                fromJSON(_: any): _134.QueryTotalLiquidityRequest;
                toJSON(_: _134.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _134.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _134.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityResponseSDKType;
                fromJSON(object: any): _134.QueryTotalLiquidityResponse;
                toJSON(message: _134.QueryTotalLiquidityResponse): unknown;
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
                fromJSON(object: any): _133.Params;
                toJSON(message: _133.Params): unknown;
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
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
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
                fromJSON(object: any): _132.SmoothWeightChangeParams;
                toJSON(message: _132.SmoothWeightChangeParams): unknown;
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
                fromJSON(object: any): _132.PoolParams;
                toJSON(message: _132.PoolParams): unknown;
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
                fromJSON(object: any): _132.PoolAsset;
                toJSON(message: _132.PoolAsset): unknown;
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
                fromJSON(object: any): _132.Pool;
                toJSON(message: _132.Pool): unknown;
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
                        toJSON: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
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
                        fromJSON(object: any): _136.MsgCreateBalancerPool;
                        toJSON(message: _136.MsgCreateBalancerPool): unknown;
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
                        fromJSON(object: any): _136.MsgCreateBalancerPoolResponse;
                        toJSON(message: _136.MsgCreateBalancerPoolResponse): unknown;
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
                        toJSON: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
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
                        fromJSON(object: any): _138.MsgCreateStableswapPool;
                        toJSON(message: _138.MsgCreateStableswapPool): unknown;
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
                        fromJSON(object: any): _138.MsgCreateStableswapPoolResponse;
                        toJSON(message: _138.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _138.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _138.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _138.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _138.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _138.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _138.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromJSON(_: any): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _138.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _138.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _137.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolParams;
                        fromJSON(object: any): _137.PoolParams;
                        toJSON(message: _137.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _137.PoolParams;
                    };
                    Pool: {
                        encode(message: _137.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Pool;
                        fromJSON(object: any): _137.Pool;
                        toJSON(message: _137.Pool): unknown;
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
                    value: unknown;
                };
                addToGauge(value: _143.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _143.MsgCreateGauge;
                };
                addToGauge(value: any): {
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
            fromJSON(object: any): _143.MsgCreateGauge;
            toJSON(message: _143.MsgCreateGauge): unknown;
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
            fromJSON(_: any): _143.MsgCreateGaugeResponse;
            toJSON(_: _143.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _143.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _143.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgAddToGauge;
            fromJSON(object: any): _143.MsgAddToGauge;
            toJSON(message: _143.MsgAddToGauge): unknown;
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
            fromJSON(_: any): _143.MsgAddToGaugeResponse;
            toJSON(_: _143.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _143.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _142.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _142.ModuleToDistributeCoinsRequest;
            toJSON(_: _142.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _142.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _142.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleToDistributeCoinsResponseSDKType;
            fromJSON(object: any): _142.ModuleToDistributeCoinsResponse;
            toJSON(message: _142.ModuleToDistributeCoinsResponse): unknown;
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
            fromJSON(_: any): _142.ModuleDistributedCoinsRequest;
            toJSON(_: _142.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _142.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _142.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleDistributedCoinsResponseSDKType;
            fromJSON(object: any): _142.ModuleDistributedCoinsResponse;
            toJSON(message: _142.ModuleDistributedCoinsResponse): unknown;
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
            fromJSON(object: any): _142.GaugeByIDRequest;
            toJSON(message: _142.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _142.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _142.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GaugeByIDResponseSDKType;
            fromJSON(object: any): _142.GaugeByIDResponse;
            toJSON(message: _142.GaugeByIDResponse): unknown;
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
            fromJSON(object: any): _142.GaugesRequest;
            toJSON(message: _142.GaugesRequest): unknown;
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
            fromJSON(object: any): _142.GaugesResponse;
            toJSON(message: _142.GaugesResponse): unknown;
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
            fromJSON(object: any): _142.ActiveGaugesRequest;
            toJSON(message: _142.ActiveGaugesRequest): unknown;
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
            fromJSON(object: any): _142.ActiveGaugesResponse;
            toJSON(message: _142.ActiveGaugesResponse): unknown;
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
            fromJSON(object: any): _142.ActiveGaugesPerDenomRequest;
            toJSON(message: _142.ActiveGaugesPerDenomRequest): unknown;
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
            fromJSON(object: any): _142.ActiveGaugesPerDenomResponse;
            toJSON(message: _142.ActiveGaugesPerDenomResponse): unknown;
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
            fromJSON(object: any): _142.UpcomingGaugesRequest;
            toJSON(message: _142.UpcomingGaugesRequest): unknown;
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
            fromJSON(object: any): _142.UpcomingGaugesResponse;
            toJSON(message: _142.UpcomingGaugesResponse): unknown;
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
            fromJSON(object: any): _142.UpcomingGaugesPerDenomRequest;
            toJSON(message: _142.UpcomingGaugesPerDenomRequest): unknown;
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
            fromJSON(object: any): _142.UpcomingGaugesPerDenomResponse;
            toJSON(message: _142.UpcomingGaugesPerDenomResponse): unknown;
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
            fromJSON(object: any): _142.RewardsEstRequest;
            toJSON(message: _142.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _142.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _142.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.RewardsEstResponseSDKType;
            fromJSON(object: any): _142.RewardsEstResponse;
            toJSON(message: _142.RewardsEstResponse): unknown;
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
            fromJSON(_: any): _142.QueryLockableDurationsRequest;
            toJSON(_: _142.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _142.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _142.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryLockableDurationsResponseSDKType;
            fromJSON(object: any): _142.QueryLockableDurationsResponse;
            toJSON(message: _142.QueryLockableDurationsResponse): unknown;
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
            fromJSON(object: any): _141.Params;
            toJSON(message: _141.Params): unknown;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _141.Params;
        };
        GenesisState: {
            encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
            fromJSON(object: any): _140.GenesisState;
            toJSON(message: _140.GenesisState): unknown;
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
            fromJSON(object: any): _139.Gauge;
            toJSON(message: _139.Gauge): unknown;
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
            fromJSON(object: any): _139.LockableDurationsInfo;
            toJSON(message: _139.LockableDurationsInfo): unknown;
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
                    value: unknown;
                };
                beginUnlockingAll(value: _147.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _147.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _147.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _147.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _147.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
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
            fromJSON(object: any): _147.MsgLockTokens;
            toJSON(message: _147.MsgLockTokens): unknown;
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
            fromJSON(object: any): _147.MsgLockTokensResponse;
            toJSON(message: _147.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _147.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _147.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingAll;
            fromJSON(object: any): _147.MsgBeginUnlockingAll;
            toJSON(message: _147.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _147.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _147.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginUnlockingAllResponseSDKType;
            fromJSON(object: any): _147.MsgBeginUnlockingAllResponse;
            toJSON(message: _147.MsgBeginUnlockingAllResponse): unknown;
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
            fromJSON(object: any): _147.MsgBeginUnlocking;
            toJSON(message: _147.MsgBeginUnlocking): unknown;
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
            fromJSON(object: any): _147.MsgBeginUnlockingResponse;
            toJSON(message: _147.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _147.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgExtendLockup;
            fromJSON(object: any): _147.MsgExtendLockup;
            toJSON(message: _147.MsgExtendLockup): unknown;
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
            fromJSON(object: any): _147.MsgExtendLockupResponse;
            toJSON(message: _147.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _147.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _146.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleBalanceRequest;
            fromJSON(_: any): _146.ModuleBalanceRequest;
            toJSON(_: _146.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _146.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _146.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleBalanceResponseSDKType;
            fromJSON(object: any): _146.ModuleBalanceResponse;
            toJSON(message: _146.ModuleBalanceResponse): unknown;
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
            fromJSON(_: any): _146.ModuleLockedAmountRequest;
            toJSON(_: _146.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _146.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _146.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleLockedAmountResponseSDKType;
            fromJSON(object: any): _146.ModuleLockedAmountResponse;
            toJSON(message: _146.ModuleLockedAmountResponse): unknown;
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
            fromJSON(object: any): _146.AccountUnlockableCoinsRequest;
            toJSON(message: _146.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _146.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockableCoinsResponseSDKType;
            fromJSON(object: any): _146.AccountUnlockableCoinsResponse;
            toJSON(message: _146.AccountUnlockableCoinsResponse): unknown;
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
            fromJSON(object: any): _146.AccountUnlockingCoinsRequest;
            toJSON(message: _146.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _146.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockingCoinsResponseSDKType;
            fromJSON(object: any): _146.AccountUnlockingCoinsResponse;
            toJSON(message: _146.AccountUnlockingCoinsResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedCoinsRequest;
            toJSON(message: _146.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _146.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _146.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedCoinsResponseSDKType;
            fromJSON(object: any): _146.AccountLockedCoinsResponse;
            toJSON(message: _146.AccountLockedCoinsResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedPastTimeRequest;
            toJSON(message: _146.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _146.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeResponseSDKType;
            fromJSON(object: any): _146.AccountLockedPastTimeResponse;
            toJSON(message: _146.AccountLockedPastTimeResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _146.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _146.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
            fromJSON(object: any): _146.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _146.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
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
            fromJSON(object: any): _146.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _146.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _146.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _146.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountUnlockedBeforeTimeResponseSDKType;
            fromJSON(object: any): _146.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _146.AccountUnlockedBeforeTimeResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedPastTimeDenomRequest;
            toJSON(message: _146.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _146.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _146.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.AccountLockedPastTimeDenomResponseSDKType;
            fromJSON(object: any): _146.AccountLockedPastTimeDenomResponse;
            toJSON(message: _146.AccountLockedPastTimeDenomResponse): unknown;
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
            fromJSON(object: any): _146.LockedDenomRequest;
            toJSON(message: _146.LockedDenomRequest): unknown;
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
            fromJSON(object: any): _146.LockedDenomResponse;
            toJSON(message: _146.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _146.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _146.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedRequest;
            fromJSON(object: any): _146.LockedRequest;
            toJSON(message: _146.LockedRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _146.LockedRequest;
        };
        LockedResponse: {
            encode(message: _146.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LockedResponseSDKType;
            fromJSON(object: any): _146.LockedResponse;
            toJSON(message: _146.LockedResponse): unknown;
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
            fromJSON(object: any): _146.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _146.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _146.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _146.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SyntheticLockupsByLockupIDResponseSDKType;
            fromJSON(object: any): _146.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _146.SyntheticLockupsByLockupIDResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationRequest;
            toJSON(message: _146.AccountLockedLongerDurationRequest): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationResponse;
            toJSON(message: _146.AccountLockedLongerDurationResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedDurationRequest;
            toJSON(message: _146.AccountLockedDurationRequest): unknown;
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
            fromJSON(object: any): _146.AccountLockedDurationResponse;
            toJSON(message: _146.AccountLockedDurationResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _146.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _146.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _146.AccountLockedLongerDurationDenomRequest): unknown;
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
            fromJSON(object: any): _146.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _146.AccountLockedLongerDurationDenomResponse): unknown;
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
            fromJSON(object: any): _145.PeriodLock;
            toJSON(message: _145.PeriodLock): unknown;
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
            fromJSON(object: any): _145.QueryCondition;
            toJSON(message: _145.QueryCondition): unknown;
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
            fromJSON(object: any): _145.SyntheticLock;
            toJSON(message: _145.SyntheticLock): unknown;
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
            fromJSON(object: any): _144.GenesisState;
            toJSON(message: _144.GenesisState): unknown;
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
            LCDQueryClient: typeof _297.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
                fromJSON(_: any): _150.QueryParamsRequest;
                toJSON(_: _150.QueryParamsRequest): unknown;
                fromPartial(_: {}): _150.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponseSDKType;
                fromJSON(object: any): _150.QueryParamsResponse;
                toJSON(message: _150.QueryParamsResponse): unknown;
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
                fromJSON(_: any): _150.QueryEpochProvisionsRequest;
                toJSON(_: _150.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _150.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _150.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryEpochProvisionsResponseSDKType;
                fromJSON(object: any): _150.QueryEpochProvisionsResponse;
                toJSON(message: _150.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _150.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _149.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Minter;
                fromJSON(object: any): _149.Minter;
                toJSON(message: _149.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _149.Minter;
            };
            WeightedAddress: {
                encode(message: _149.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.WeightedAddress;
                fromJSON(object: any): _149.WeightedAddress;
                toJSON(message: _149.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _149.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _149.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.DistributionProportions;
                fromJSON(object: any): _149.DistributionProportions;
                toJSON(message: _149.DistributionProportions): unknown;
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
                fromJSON(object: any): _149.Params;
                toJSON(message: _149.Params): unknown;
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
                fromJSON(object: any): _148.GenesisState;
                toJSON(message: _148.GenesisState): unknown;
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
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _154.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsRequest;
                fromJSON(object: any): _154.QueryGaugeIdsRequest;
                toJSON(message: _154.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _154.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _154.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGaugeIdsResponseSDKType;
                fromJSON(object: any): _154.QueryGaugeIdsResponse;
                toJSON(message: _154.QueryGaugeIdsResponse): unknown;
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
                fromJSON(object: any): _154.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _154.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
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
                fromJSON(_: any): _154.QueryDistrInfoRequest;
                toJSON(_: _154.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _154.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _154.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryDistrInfoResponseSDKType;
                fromJSON(object: any): _154.QueryDistrInfoResponse;
                toJSON(message: _154.QueryDistrInfoResponse): unknown;
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
                fromJSON(_: any): _154.QueryParamsRequest;
                toJSON(_: _154.QueryParamsRequest): unknown;
                fromPartial(_: {}): _154.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponseSDKType;
                fromJSON(object: any): _154.QueryParamsResponse;
                toJSON(message: _154.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _154.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _154.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryLockableDurationsRequest;
                fromJSON(_: any): _154.QueryLockableDurationsRequest;
                toJSON(_: _154.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _154.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _154.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryLockableDurationsResponseSDKType;
                fromJSON(object: any): _154.QueryLockableDurationsResponse;
                toJSON(message: _154.QueryLockableDurationsResponse): unknown;
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
                fromJSON(_: any): _154.QueryIncentivizedPoolsRequest;
                toJSON(_: _154.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _154.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _154.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.IncentivizedPool;
                fromJSON(object: any): _154.IncentivizedPool;
                toJSON(message: _154.IncentivizedPool): unknown;
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
                fromJSON(object: any): _154.QueryIncentivizedPoolsResponse;
                toJSON(message: _154.QueryIncentivizedPoolsResponse): unknown;
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
                fromJSON(_: any): _154.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _154.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _154.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _154.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryExternalIncentiveGaugesResponseSDKType;
                fromJSON(object: any): _154.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _154.QueryExternalIncentiveGaugesResponse): unknown;
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
                fromJSON(object: any): _153.Params;
                toJSON(message: _153.Params): unknown;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _153.Params;
            };
            LockableDurationsInfo: {
                encode(message: _153.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.LockableDurationsInfo;
                fromJSON(object: any): _153.LockableDurationsInfo;
                toJSON(message: _153.LockableDurationsInfo): unknown;
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
                fromJSON(object: any): _153.DistrInfo;
                toJSON(message: _153.DistrInfo): unknown;
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
                fromJSON(object: any): _153.DistrRecord;
                toJSON(message: _153.DistrRecord): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _153.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _152.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _152.ReplacePoolIncentivesProposal;
                toJSON(message: _152.ReplacePoolIncentivesProposal): unknown;
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
                fromJSON(object: any): _152.UpdatePoolIncentivesProposal;
                toJSON(message: _152.UpdatePoolIncentivesProposal): unknown;
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
                fromJSON(object: any): _151.GenesisState;
                toJSON(message: _151.GenesisState): unknown;
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
                fromJSON(object: any): _155.Node;
                toJSON(message: _155.Node): unknown;
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
                fromJSON(object: any): _155.Child;
                toJSON(message: _155.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _155.Child;
            };
            Leaf: {
                encode(message: _155.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Leaf;
                fromJSON(object: any): _155.Leaf;
                toJSON(message: _155.Leaf): unknown;
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
                    value: unknown;
                };
                superfluidUndelegate(value: _160.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _160.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _160.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _160.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _160.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _160.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
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
            fromJSON(object: any): _160.MsgSuperfluidDelegate;
            toJSON(message: _160.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _160.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _160.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidDelegateResponseSDKType;
            fromJSON(_: any): _160.MsgSuperfluidDelegateResponse;
            toJSON(_: _160.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _160.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _160.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegate;
            fromJSON(object: any): _160.MsgSuperfluidUndelegate;
            toJSON(message: _160.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _160.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUndelegateResponseSDKType;
            fromJSON(_: any): _160.MsgSuperfluidUndelegateResponse;
            toJSON(_: _160.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _160.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _160.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _160.MsgSuperfluidUnbondLock;
            toJSON(message: _160.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _160.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _160.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSuperfluidUnbondLockResponseSDKType;
            fromJSON(_: any): _160.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _160.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _160.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _160.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _160.MsgLockAndSuperfluidDelegate;
            toJSON(message: _160.MsgLockAndSuperfluidDelegate): unknown;
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
            fromJSON(object: any): _160.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _160.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _160.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _160.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _160.MsgUnPoolWhitelistedPool;
            toJSON(message: _160.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _160.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _160.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromJSON(object: any): _160.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _160.MsgUnPoolWhitelistedPoolResponse): unknown;
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
            fromJSON(object: any): _159.SuperfluidAsset;
            toJSON(message: _159.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                assetType?: _159.SuperfluidAssetType;
            }): _159.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _159.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _159.SuperfluidIntermediaryAccount;
            toJSON(message: _159.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _159.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _159.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _159.OsmoEquivalentMultiplierRecord;
            toJSON(message: _159.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _159.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _159.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SuperfluidDelegationRecord;
            fromJSON(object: any): _159.SuperfluidDelegationRecord;
            toJSON(message: _159.SuperfluidDelegationRecord): unknown;
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
            fromJSON(object: any): _159.LockIdIntermediaryAccountConnection;
            toJSON(message: _159.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _159.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _159.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.UnpoolWhitelistedPools;
            fromJSON(object: any): _159.UnpoolWhitelistedPools;
            toJSON(message: _159.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _159.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
            fromJSON(_: any): _158.QueryParamsRequest;
            toJSON(_: _158.QueryParamsRequest): unknown;
            fromPartial(_: {}): _158.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponseSDKType;
            fromJSON(object: any): _158.QueryParamsResponse;
            toJSON(message: _158.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _158.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _158.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeRequest;
            fromJSON(object: any): _158.AssetTypeRequest;
            toJSON(message: _158.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _158.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetTypeResponseSDKType;
            fromJSON(object: any): _158.AssetTypeResponse;
            toJSON(message: _158.AssetTypeResponse): unknown;
            fromPartial(object: {
                assetType?: _159.SuperfluidAssetType;
            }): _158.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _158.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllAssetsRequest;
            fromJSON(_: any): _158.AllAssetsRequest;
            toJSON(_: _158.AllAssetsRequest): unknown;
            fromPartial(_: {}): _158.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _158.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AllAssetsResponseSDKType;
            fromJSON(object: any): _158.AllAssetsResponse;
            toJSON(message: _158.AllAssetsResponse): unknown;
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
            fromJSON(object: any): _158.AssetMultiplierRequest;
            toJSON(message: _158.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _158.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _158.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetMultiplierResponseSDKType;
            fromJSON(object: any): _158.AssetMultiplierResponse;
            toJSON(message: _158.AssetMultiplierResponse): unknown;
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
            fromJSON(object: any): _158.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _158.SuperfluidIntermediaryAccountInfo): unknown;
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
            fromJSON(object: any): _158.AllIntermediaryAccountsRequest;
            toJSON(message: _158.AllIntermediaryAccountsRequest): unknown;
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
            fromJSON(object: any): _158.AllIntermediaryAccountsResponse;
            toJSON(message: _158.AllIntermediaryAccountsResponse): unknown;
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
            fromJSON(object: any): _158.ConnectedIntermediaryAccountRequest;
            toJSON(message: _158.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _158.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _158.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ConnectedIntermediaryAccountResponseSDKType;
            fromJSON(object: any): _158.ConnectedIntermediaryAccountResponse;
            toJSON(message: _158.ConnectedIntermediaryAccountResponse): unknown;
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
            fromJSON(_: any): _158.TotalSuperfluidDelegationsRequest;
            toJSON(_: _158.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _158.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _158.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TotalSuperfluidDelegationsResponseSDKType;
            fromJSON(object: any): _158.TotalSuperfluidDelegationsResponse;
            toJSON(message: _158.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _158.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _158.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _158.SuperfluidDelegationAmountRequest;
            toJSON(message: _158.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _158.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationAmountResponseSDKType;
            fromJSON(object: any): _158.SuperfluidDelegationAmountResponse;
            toJSON(message: _158.SuperfluidDelegationAmountResponse): unknown;
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
            fromJSON(object: any): _158.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _158.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _158.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _158.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByDelegatorResponseSDKType;
            fromJSON(object: any): _158.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _158.SuperfluidDelegationsByDelegatorResponse): unknown;
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
            fromJSON(object: any): _158.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _158.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _158.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidUndelegationsByDelegatorResponseSDKType;
            fromJSON(object: any): _158.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _158.SuperfluidUndelegationsByDelegatorResponse): unknown;
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
            fromJSON(object: any): _158.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _158.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _158.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SuperfluidDelegationsByValidatorDenomResponseSDKType;
            fromJSON(object: any): _158.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _158.SuperfluidDelegationsByValidatorDenomResponse): unknown;
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
            fromJSON(object: any): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            fromJSON(object: any): _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _158.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
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
            fromJSON(object: any): _157.Params;
            toJSON(message: _157.Params): unknown;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _157.Params;
        };
        GenesisState: {
            encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
            fromJSON(object: any): _156.GenesisState;
            toJSON(message: _156.GenesisState): unknown;
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
                        value: unknown;
                    };
                    mint(value: _165.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _165.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _165.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _165.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _165.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _165.MsgBurn;
                    };
                    changeAdmin(value: any): {
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
                fromJSON(object: any): _165.MsgCreateDenom;
                toJSON(message: _165.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _165.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _165.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCreateDenomResponseSDKType;
                fromJSON(object: any): _165.MsgCreateDenomResponse;
                toJSON(message: _165.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _165.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _165.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgMint;
                fromJSON(object: any): _165.MsgMint;
                toJSON(message: _165.MsgMint): unknown;
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
                fromJSON(_: any): _165.MsgMintResponse;
                toJSON(_: _165.MsgMintResponse): unknown;
                fromPartial(_: {}): _165.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _165.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgBurn;
                fromJSON(object: any): _165.MsgBurn;
                toJSON(message: _165.MsgBurn): unknown;
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
                fromJSON(_: any): _165.MsgBurnResponse;
                toJSON(_: _165.MsgBurnResponse): unknown;
                fromPartial(_: {}): _165.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _165.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdmin;
                fromJSON(object: any): _165.MsgChangeAdmin;
                toJSON(message: _165.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _165.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _165.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgChangeAdminResponseSDKType;
                fromJSON(_: any): _165.MsgChangeAdminResponse;
                toJSON(_: _165.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _165.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromJSON(_: any): _164.QueryParamsRequest;
                toJSON(_: _164.QueryParamsRequest): unknown;
                fromPartial(_: {}): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponseSDKType;
                fromJSON(object: any): _164.QueryParamsResponse;
                toJSON(message: _164.QueryParamsResponse): unknown;
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
                fromJSON(object: any): _164.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _164.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _164.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _164.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomAuthorityMetadataResponseSDKType;
                fromJSON(object: any): _164.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _164.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _164.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _164.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _164.QueryDenomsFromCreatorRequest;
                toJSON(message: _164.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _164.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _164.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryDenomsFromCreatorResponseSDKType;
                fromJSON(object: any): _164.QueryDenomsFromCreatorResponse;
                toJSON(message: _164.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _164.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _163.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Params;
                fromJSON(object: any): _163.Params;
                toJSON(message: _163.Params): unknown;
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
                fromJSON(object: any): _162.GenesisState;
                toJSON(message: _162.GenesisState): unknown;
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
                fromJSON(object: any): _162.GenesisDenom;
                toJSON(message: _162.GenesisDenom): unknown;
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
                fromJSON(object: any): _161.DenomAuthorityMetadata;
                toJSON(message: _161.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _161.DenomAuthorityMetadata;
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
                fromJSON(_: any): _169.QueryFeeTokensRequest;
                toJSON(_: _169.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _169.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _169.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryFeeTokensResponseSDKType;
                fromJSON(object: any): _169.QueryFeeTokensResponse;
                toJSON(message: _169.QueryFeeTokensResponse): unknown;
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
                fromJSON(object: any): _169.QueryDenomSpotPriceRequest;
                toJSON(message: _169.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _169.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomSpotPriceResponseSDKType;
                fromJSON(object: any): _169.QueryDenomSpotPriceResponse;
                toJSON(message: _169.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _169.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _169.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdRequest;
                fromJSON(object: any): _169.QueryDenomPoolIdRequest;
                toJSON(message: _169.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _169.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _169.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryDenomPoolIdResponseSDKType;
                fromJSON(object: any): _169.QueryDenomPoolIdResponse;
                toJSON(message: _169.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _169.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _169.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomRequest;
                fromJSON(_: any): _169.QueryBaseDenomRequest;
                toJSON(_: _169.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _169.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _169.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBaseDenomResponseSDKType;
                fromJSON(object: any): _169.QueryBaseDenomResponse;
                toJSON(message: _169.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    baseDenom?: string;
                }): _169.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _168.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.UpdateFeeTokenProposal;
                fromJSON(object: any): _168.UpdateFeeTokenProposal;
                toJSON(message: _168.UpdateFeeTokenProposal): unknown;
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
                fromJSON(object: any): _167.GenesisState;
                toJSON(message: _167.GenesisState): unknown;
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
                fromJSON(object: any): _166.FeeToken;
                toJSON(message: _166.FeeToken): unknown;
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
