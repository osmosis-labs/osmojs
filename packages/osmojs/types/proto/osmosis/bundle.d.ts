import * as _132 from "./epochs/genesis";
import * as _133 from "./epochs/query";
import * as _134 from "./gamm/pool-models/balancer/balancerPool";
import * as _135 from "./gamm/v1beta1/genesis";
import * as _136 from "./gamm/v1beta1/query";
import * as _137 from "./gamm/v1beta1/tx";
import * as _138 from "./gamm/pool-models/balancer/tx";
import * as _139 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _140 from "./gamm/pool-models/stableswap/tx";
import * as _141 from "./incentives/gauge";
import * as _142 from "./incentives/genesis";
import * as _143 from "./incentives/params";
import * as _144 from "./incentives/query";
import * as _145 from "./incentives/tx";
import * as _146 from "./lockup/genesis";
import * as _147 from "./lockup/lock";
import * as _148 from "./lockup/query";
import * as _149 from "./lockup/tx";
import * as _150 from "./mint/v1beta1/genesis";
import * as _151 from "./mint/v1beta1/mint";
import * as _152 from "./mint/v1beta1/query";
import * as _153 from "./pool-incentives/v1beta1/genesis";
import * as _154 from "./pool-incentives/v1beta1/gov";
import * as _155 from "./pool-incentives/v1beta1/incentives";
import * as _156 from "./pool-incentives/v1beta1/query";
import * as _157 from "./store/v1beta1/tree";
import * as _158 from "./superfluid/genesis";
import * as _159 from "./superfluid/params";
import * as _160 from "./superfluid/query";
import * as _161 from "./superfluid/superfluid";
import * as _162 from "./superfluid/tx";
import * as _163 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _164 from "./tokenfactory/v1beta1/genesis";
import * as _165 from "./tokenfactory/v1beta1/params";
import * as _166 from "./tokenfactory/v1beta1/query";
import * as _167 from "./tokenfactory/v1beta1/tx";
import * as _168 from "./txfees/v1beta1/feetoken";
import * as _169 from "./txfees/v1beta1/genesis";
import * as _170 from "./txfees/v1beta1/gov";
import * as _171 from "./txfees/v1beta1/query";
import * as _298 from "./epochs/query.lcd";
import * as _299 from "./gamm/v1beta1/query.lcd";
import * as _300 from "./incentives/query.lcd";
import * as _301 from "./lockup/query.lcd";
import * as _302 from "./mint/v1beta1/query.lcd";
import * as _303 from "./pool-incentives/v1beta1/query.lcd";
import * as _304 from "./superfluid/query.lcd";
import * as _305 from "./tokenfactory/v1beta1/query.lcd";
import * as _306 from "./txfees/v1beta1/query.lcd";
import * as _307 from "./epochs/query.rpc.query";
import * as _308 from "./gamm/v1beta1/query.rpc.query";
import * as _309 from "./incentives/query.rpc.query";
import * as _310 from "./lockup/query.rpc.query";
import * as _311 from "./mint/v1beta1/query.rpc.query";
import * as _312 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _313 from "./superfluid/query.rpc.query";
import * as _314 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _315 from "./txfees/v1beta1/query.rpc.query";
import * as _316 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _317 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _318 from "./gamm/v1beta1/tx.rpc.msg";
import * as _319 from "./incentives/tx.rpc.msg";
import * as _320 from "./lockup/tx.rpc.msg";
import * as _321 from "./superfluid/tx.rpc.msg";
import * as _322 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(_: _133.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEpochsInfoRequest;
                fromJSON(_: any): _133.QueryEpochsInfoRequest;
                toJSON(_: _133.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _133.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _133.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryEpochsInfoResponse;
                fromJSON(object: any): _133.QueryEpochsInfoResponse;
                toJSON(message: _133.QueryEpochsInfoResponse): unknown;
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
                }): _133.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _133.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryCurrentEpochRequest;
                fromJSON(object: any): _133.QueryCurrentEpochRequest;
                toJSON(message: _133.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _133.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _133.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryCurrentEpochResponse;
                fromJSON(object: any): _133.QueryCurrentEpochResponse;
                toJSON(message: _133.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _133.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _132.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EpochInfo;
                fromJSON(object: any): _132.EpochInfo;
                toJSON(message: _132.EpochInfo): unknown;
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
                }): _132.EpochInfo;
            };
            GenesisState: {
                encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisState;
                fromJSON(object: any): _132.GenesisState;
                toJSON(message: _132.GenesisState): unknown;
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
                }): _132.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            LCDQueryClient: typeof _299.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _137.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _137.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _137.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _137.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _137.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _137.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _137.MsgJoinPool): {
                        typeUrl: string;
                        value: _137.MsgJoinPool;
                    };
                    exitPool(value: _137.MsgExitPool): {
                        typeUrl: string;
                        value: _137.MsgExitPool;
                    };
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _137.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _137.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _137.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _137.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _137.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _137.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _137.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _137.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _137.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _137.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _137.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _137.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _137.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _137.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _137.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _137.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _137.MsgJoinPool): {
                        typeUrl: string;
                        value: _137.MsgJoinPool;
                    };
                    exitPool(value: _137.MsgExitPool): {
                        typeUrl: string;
                        value: _137.MsgExitPool;
                    };
                    swapExactAmountIn(value: _137.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _137.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _137.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _137.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _137.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _137.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _137.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _137.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _137.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _137.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _137.MsgJoinPool) => {
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
                    }) => _137.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _137.MsgExitPool) => {
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
                    }) => _137.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _137.MsgSwapExactAmountIn) => {
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
                    }) => _137.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _137.MsgSwapExactAmountOut) => {
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
                    }) => _137.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _137.MsgJoinSwapExternAmountIn) => {
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
                    }) => _137.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _137.MsgJoinSwapShareAmountOut) => {
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
                    }) => _137.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _137.MsgExitSwapExternAmountOut) => {
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
                    }) => _137.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _137.MsgExitSwapShareAmountIn) => {
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
                    }) => _137.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _137.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinPool;
                fromJSON(object: any): _137.MsgJoinPool;
                toJSON(message: _137.MsgJoinPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _137.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _137.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinPoolResponse;
                fromJSON(_: any): _137.MsgJoinPoolResponse;
                toJSON(_: _137.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _137.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _137.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitPool;
                fromJSON(object: any): _137.MsgExitPool;
                toJSON(message: _137.MsgExitPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _137.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _137.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitPoolResponse;
                fromJSON(_: any): _137.MsgExitPoolResponse;
                toJSON(_: _137.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _137.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _137.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SwapAmountInRoute;
                fromJSON(object: any): _137.SwapAmountInRoute;
                toJSON(message: _137.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _137.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _137.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountIn;
                fromJSON(object: any): _137.MsgSwapExactAmountIn;
                toJSON(message: _137.MsgSwapExactAmountIn): unknown;
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
                }): _137.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _137.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _137.MsgSwapExactAmountInResponse;
                toJSON(message: _137.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _137.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _137.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.SwapAmountOutRoute;
                fromJSON(object: any): _137.SwapAmountOutRoute;
                toJSON(message: _137.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _137.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _137.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountOut;
                fromJSON(object: any): _137.MsgSwapExactAmountOut;
                toJSON(message: _137.MsgSwapExactAmountOut): unknown;
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
                }): _137.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _137.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _137.MsgSwapExactAmountOutResponse;
                toJSON(message: _137.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _137.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _137.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _137.MsgJoinSwapExternAmountIn;
                toJSON(message: _137.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _137.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _137.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _137.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _137.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _137.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _137.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _137.MsgJoinSwapShareAmountOut;
                toJSON(message: _137.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _137.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _137.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _137.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _137.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _137.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _137.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _137.MsgExitSwapShareAmountIn;
                toJSON(message: _137.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _137.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _137.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _137.MsgExitSwapShareAmountInResponse;
                toJSON(message: _137.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _137.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _137.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _137.MsgExitSwapExternAmountOut;
                toJSON(message: _137.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _137.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _137.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _137.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _137.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _137.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _136.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolRequest;
                fromJSON(object: any): _136.QueryPoolRequest;
                toJSON(message: _136.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _136.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _136.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolResponse;
                fromJSON(object: any): _136.QueryPoolResponse;
                toJSON(message: _136.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _136.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _136.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolsRequest;
                fromJSON(object: any): _136.QueryPoolsRequest;
                toJSON(message: _136.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _136.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolsResponse;
                fromJSON(object: any): _136.QueryPoolsResponse;
                toJSON(message: _136.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _136.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryNumPoolsRequest;
                fromJSON(_: any): _136.QueryNumPoolsRequest;
                toJSON(_: _136.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _136.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _136.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryNumPoolsResponse;
                fromJSON(object: any): _136.QueryNumPoolsResponse;
                toJSON(message: _136.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _136.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _136.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolParamsRequest;
                fromJSON(object: any): _136.QueryPoolParamsRequest;
                toJSON(message: _136.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _136.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _136.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolParamsResponse;
                fromJSON(object: any): _136.QueryPoolParamsResponse;
                toJSON(message: _136.QueryPoolParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _136.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _136.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _136.QueryTotalPoolLiquidityRequest;
                toJSON(message: _136.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _136.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _136.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _136.QueryTotalPoolLiquidityResponse;
                toJSON(message: _136.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _136.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _136.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalSharesRequest;
                fromJSON(object: any): _136.QueryTotalSharesRequest;
                toJSON(message: _136.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _136.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _136.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalSharesResponse;
                fromJSON(object: any): _136.QueryTotalSharesResponse;
                toJSON(message: _136.QueryTotalSharesResponse): unknown;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _136.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _136.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySpotPriceRequest;
                fromJSON(object: any): _136.QuerySpotPriceRequest;
                toJSON(message: _136.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _136.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _136.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySpotPriceResponse;
                fromJSON(object: any): _136.QuerySpotPriceResponse;
                toJSON(message: _136.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _136.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _136.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _136.QuerySwapExactAmountInRequest;
                toJSON(message: _136.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _136.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _136.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _136.QuerySwapExactAmountInResponse;
                toJSON(message: _136.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _136.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _136.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _136.QuerySwapExactAmountOutRequest;
                toJSON(message: _136.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _136.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _136.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _136.QuerySwapExactAmountOutResponse;
                toJSON(message: _136.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _136.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _136.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalLiquidityRequest;
                fromJSON(_: any): _136.QueryTotalLiquidityRequest;
                toJSON(_: _136.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _136.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _136.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryTotalLiquidityResponse;
                fromJSON(object: any): _136.QueryTotalLiquidityResponse;
                toJSON(message: _136.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _136.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _135.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Params;
                fromJSON(object: any): _135.Params;
                toJSON(message: _135.Params): unknown;
                fromPartial(object: {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.Params;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
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
                }): _135.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _134.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.SmoothWeightChangeParams;
                fromJSON(object: any): _134.SmoothWeightChangeParams;
                toJSON(message: _134.SmoothWeightChangeParams): unknown;
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
                }): _134.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _134.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PoolParams;
                fromJSON(object: any): _134.PoolParams;
                toJSON(message: _134.PoolParams): unknown;
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
                }): _134.PoolParams;
            };
            PoolAsset: {
                encode(message: _134.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PoolAsset;
                fromJSON(object: any): _134.PoolAsset;
                toJSON(message: _134.PoolAsset): unknown;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _134.PoolAsset;
            };
            Pool: {
                encode(message: _134.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Pool;
                fromJSON(object: any): _134.Pool;
                toJSON(message: _134.Pool): unknown;
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
                }): _134.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _316.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _138.MsgCreateBalancerPool) => {
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
                            }) => _138.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _138.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateBalancerPool;
                        fromJSON(object: any): _138.MsgCreateBalancerPool;
                        toJSON(message: _138.MsgCreateBalancerPool): unknown;
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
                        }): _138.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _138.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _138.MsgCreateBalancerPoolResponse;
                        toJSON(message: _138.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _138.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _317.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, futurePoolGovernor }: _140.MsgCreateStableswapPool) => {
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
                            }) => _140.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _140.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _140.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _140.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgCreateStableswapPool;
                        fromJSON(object: any): _140.MsgCreateStableswapPool;
                        toJSON(message: _140.MsgCreateStableswapPool): unknown;
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
                        }): _140.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _140.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _140.MsgCreateStableswapPoolResponse;
                        toJSON(message: _140.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _140.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _140.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _140.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _140.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _140.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _140.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _140.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _140.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _139.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PoolParams;
                        fromJSON(object: any): _139.PoolParams;
                        toJSON(message: _139.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _139.PoolParams;
                    };
                    Pool: {
                        encode(message: _139.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Pool;
                        fromJSON(object: any): _139.Pool;
                        toJSON(message: _139.Pool): unknown;
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
                        }): _139.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        MsgClientImpl: typeof _319.MsgClientImpl;
        QueryClientImpl: typeof _309.QueryClientImpl;
        LCDQueryClient: typeof _300.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _145.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _145.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _145.MsgCreateGauge): {
                    typeUrl: string;
                    value: _145.MsgCreateGauge;
                };
                addToGauge(value: _145.MsgAddToGauge): {
                    typeUrl: string;
                    value: _145.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _145.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _145.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _145.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _145.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _145.MsgCreateGauge): {
                    typeUrl: string;
                    value: _145.MsgCreateGauge;
                };
                addToGauge(value: _145.MsgAddToGauge): {
                    typeUrl: string;
                    value: _145.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _145.MsgCreateGauge) => {
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
                }) => _145.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _145.MsgAddToGauge) => {
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
                }) => _145.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _145.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateGauge;
            fromJSON(object: any): _145.MsgCreateGauge;
            toJSON(message: _145.MsgCreateGauge): unknown;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _147.LockQueryType;
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
            }): _145.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _145.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateGaugeResponse;
            fromJSON(_: any): _145.MsgCreateGaugeResponse;
            toJSON(_: _145.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _145.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _145.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddToGauge;
            fromJSON(object: any): _145.MsgAddToGauge;
            toJSON(message: _145.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _145.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _145.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddToGaugeResponse;
            fromJSON(_: any): _145.MsgAddToGaugeResponse;
            toJSON(_: _145.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _145.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _144.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _144.ModuleToDistributeCoinsRequest;
            toJSON(_: _144.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _144.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _144.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _144.ModuleToDistributeCoinsResponse;
            toJSON(message: _144.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _144.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _144.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _144.ModuleDistributedCoinsRequest;
            toJSON(_: _144.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _144.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _144.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _144.ModuleDistributedCoinsResponse;
            toJSON(message: _144.ModuleDistributedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _144.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _144.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GaugeByIDRequest;
            fromJSON(object: any): _144.GaugeByIDRequest;
            toJSON(message: _144.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _144.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _144.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GaugeByIDResponse;
            fromJSON(object: any): _144.GaugeByIDResponse;
            toJSON(message: _144.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _144.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GaugesRequest;
            fromJSON(object: any): _144.GaugesRequest;
            toJSON(message: _144.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _144.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _144.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GaugesResponse;
            fromJSON(object: any): _144.GaugesResponse;
            toJSON(message: _144.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _144.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ActiveGaugesRequest;
            fromJSON(object: any): _144.ActiveGaugesRequest;
            toJSON(message: _144.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _144.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _144.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ActiveGaugesResponse;
            fromJSON(object: any): _144.ActiveGaugesResponse;
            toJSON(message: _144.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _144.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _144.ActiveGaugesPerDenomRequest;
            toJSON(message: _144.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _144.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _144.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _144.ActiveGaugesPerDenomResponse;
            toJSON(message: _144.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _144.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UpcomingGaugesRequest;
            fromJSON(object: any): _144.UpcomingGaugesRequest;
            toJSON(message: _144.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _144.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _144.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UpcomingGaugesResponse;
            fromJSON(object: any): _144.UpcomingGaugesResponse;
            toJSON(message: _144.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _144.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _144.UpcomingGaugesPerDenomRequest;
            toJSON(message: _144.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _144.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _144.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _144.UpcomingGaugesPerDenomResponse;
            toJSON(message: _144.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _144.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _144.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.RewardsEstRequest;
            fromJSON(object: any): _144.RewardsEstRequest;
            toJSON(message: _144.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _144.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _144.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.RewardsEstResponse;
            fromJSON(object: any): _144.RewardsEstResponse;
            toJSON(message: _144.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _144.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _144.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryLockableDurationsRequest;
            fromJSON(_: any): _144.QueryLockableDurationsRequest;
            toJSON(_: _144.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _144.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _144.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryLockableDurationsResponse;
            fromJSON(object: any): _144.QueryLockableDurationsResponse;
            toJSON(message: _144.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _144.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _143.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Params;
            fromJSON(object: any): _143.Params;
            toJSON(message: _143.Params): unknown;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _143.Params;
        };
        GenesisState: {
            encode(message: _142.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GenesisState;
            fromJSON(object: any): _142.GenesisState;
            toJSON(message: _142.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _147.LockQueryType;
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
            }): _142.GenesisState;
        };
        Gauge: {
            encode(message: _141.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Gauge;
            fromJSON(object: any): _141.Gauge;
            toJSON(message: _141.Gauge): unknown;
            fromPartial(object: {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _147.LockQueryType;
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
            }): _141.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _141.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.LockableDurationsInfo;
            fromJSON(object: any): _141.LockableDurationsInfo;
            toJSON(message: _141.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _141.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _320.MsgClientImpl;
        QueryClientImpl: typeof _310.QueryClientImpl;
        LCDQueryClient: typeof _301.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _149.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _149.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _149.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _149.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _149.MsgLockTokens): {
                    typeUrl: string;
                    value: _149.MsgLockTokens;
                };
                beginUnlockingAll(value: _149.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _149.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlocking;
                };
                extendLockup(value: _149.MsgExtendLockup): {
                    typeUrl: string;
                    value: _149.MsgExtendLockup;
                };
            };
            toJSON: {
                lockTokens(value: _149.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _149.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _149.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _149.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _149.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _149.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _149.MsgLockTokens): {
                    typeUrl: string;
                    value: _149.MsgLockTokens;
                };
                beginUnlockingAll(value: _149.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _149.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _149.MsgBeginUnlocking;
                };
                extendLockup(value: _149.MsgExtendLockup): {
                    typeUrl: string;
                    value: _149.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _149.MsgLockTokens) => {
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
                }) => _149.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _149.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _149.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _149.MsgBeginUnlocking) => {
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
                }) => _149.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _149.MsgExtendLockup) => {
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
                }) => _149.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _149.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgLockTokens;
            fromJSON(object: any): _149.MsgLockTokens;
            toJSON(message: _149.MsgLockTokens): unknown;
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
            }): _149.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _149.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgLockTokensResponse;
            fromJSON(object: any): _149.MsgLockTokensResponse;
            toJSON(message: _149.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _149.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _149.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgBeginUnlockingAll;
            fromJSON(object: any): _149.MsgBeginUnlockingAll;
            toJSON(message: _149.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _149.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _149.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _149.MsgBeginUnlockingAllResponse;
            toJSON(message: _149.MsgBeginUnlockingAllResponse): unknown;
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
            }): _149.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _149.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgBeginUnlocking;
            fromJSON(object: any): _149.MsgBeginUnlocking;
            toJSON(message: _149.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _149.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _149.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgBeginUnlockingResponse;
            fromJSON(object: any): _149.MsgBeginUnlockingResponse;
            toJSON(message: _149.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _149.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _149.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgExtendLockup;
            fromJSON(object: any): _149.MsgExtendLockup;
            toJSON(message: _149.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _149.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _149.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgExtendLockupResponse;
            fromJSON(object: any): _149.MsgExtendLockupResponse;
            toJSON(message: _149.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _149.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _148.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleBalanceRequest;
            fromJSON(_: any): _148.ModuleBalanceRequest;
            toJSON(_: _148.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _148.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _148.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleBalanceResponse;
            fromJSON(object: any): _148.ModuleBalanceResponse;
            toJSON(message: _148.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _148.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleLockedAmountRequest;
            fromJSON(_: any): _148.ModuleLockedAmountRequest;
            toJSON(_: _148.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _148.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _148.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleLockedAmountResponse;
            fromJSON(object: any): _148.ModuleLockedAmountResponse;
            toJSON(message: _148.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _148.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _148.AccountUnlockableCoinsRequest;
            toJSON(message: _148.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _148.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _148.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _148.AccountUnlockableCoinsResponse;
            toJSON(message: _148.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _148.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _148.AccountUnlockingCoinsRequest;
            toJSON(message: _148.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _148.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _148.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _148.AccountUnlockingCoinsResponse;
            toJSON(message: _148.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _148.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedCoinsRequest;
            fromJSON(object: any): _148.AccountLockedCoinsRequest;
            toJSON(message: _148.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _148.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _148.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedCoinsResponse;
            fromJSON(object: any): _148.AccountLockedCoinsResponse;
            toJSON(message: _148.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _148.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeRequest;
            fromJSON(object: any): _148.AccountLockedPastTimeRequest;
            toJSON(message: _148.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _148.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _148.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeResponse;
            fromJSON(object: any): _148.AccountLockedPastTimeResponse;
            toJSON(message: _148.AccountLockedPastTimeResponse): unknown;
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
            }): _148.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _148.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _148.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _148.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _148.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _148.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _148.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _148.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
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
            }): _148.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _148.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _148.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _148.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _148.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _148.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _148.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _148.AccountUnlockedBeforeTimeResponse): unknown;
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
            }): _148.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _148.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _148.AccountLockedPastTimeDenomRequest;
            toJSON(message: _148.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _148.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _148.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _148.AccountLockedPastTimeDenomResponse;
            toJSON(message: _148.AccountLockedPastTimeDenomResponse): unknown;
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
            }): _148.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _148.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LockedDenomRequest;
            fromJSON(object: any): _148.LockedDenomRequest;
            toJSON(message: _148.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _148.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _148.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LockedDenomResponse;
            fromJSON(object: any): _148.LockedDenomResponse;
            toJSON(message: _148.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _148.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _148.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LockedRequest;
            fromJSON(object: any): _148.LockedRequest;
            toJSON(message: _148.LockedRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _148.LockedRequest;
        };
        LockedResponse: {
            encode(message: _148.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LockedResponse;
            fromJSON(object: any): _148.LockedResponse;
            toJSON(message: _148.LockedResponse): unknown;
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
            }): _148.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _148.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _148.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _148.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _148.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _148.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _148.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _148.SyntheticLockupsByLockupIDResponse): unknown;
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
            }): _148.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _148.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _148.AccountLockedLongerDurationRequest;
            toJSON(message: _148.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _148.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _148.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _148.AccountLockedLongerDurationResponse;
            toJSON(message: _148.AccountLockedLongerDurationResponse): unknown;
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
            }): _148.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _148.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedDurationRequest;
            fromJSON(object: any): _148.AccountLockedDurationRequest;
            toJSON(message: _148.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _148.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _148.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedDurationResponse;
            fromJSON(object: any): _148.AccountLockedDurationResponse;
            toJSON(message: _148.AccountLockedDurationResponse): unknown;
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
            }): _148.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _148.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _148.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _148.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _148.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _148.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _148.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _148.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
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
            }): _148.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _148.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _148.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _148.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _148.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _148.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _148.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _148.AccountLockedLongerDurationDenomResponse): unknown;
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
            }): _148.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _147.LockQueryType;
        lockQueryTypeToJSON(object: _147.LockQueryType): string;
        LockQueryType: typeof _147.LockQueryType;
        PeriodLock: {
            encode(message: _147.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PeriodLock;
            fromJSON(object: any): _147.PeriodLock;
            toJSON(message: _147.PeriodLock): unknown;
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
            }): _147.PeriodLock;
        };
        QueryCondition: {
            encode(message: _147.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCondition;
            fromJSON(object: any): _147.QueryCondition;
            toJSON(message: _147.QueryCondition): unknown;
            fromPartial(object: {
                lockQueryType?: _147.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _147.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _147.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SyntheticLock;
            fromJSON(object: any): _147.SyntheticLock;
            toJSON(message: _147.SyntheticLock): unknown;
            fromPartial(object: {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _147.SyntheticLock;
        };
        GenesisState: {
            encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
            fromJSON(object: any): _146.GenesisState;
            toJSON(message: _146.GenesisState): unknown;
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
            }): _146.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            LCDQueryClient: typeof _302.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromJSON(_: any): _152.QueryParamsRequest;
                toJSON(_: _152.QueryParamsRequest): unknown;
                fromPartial(_: {}): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
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
                }): _152.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _152.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryEpochProvisionsRequest;
                fromJSON(_: any): _152.QueryEpochProvisionsRequest;
                toJSON(_: _152.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _152.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _152.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryEpochProvisionsResponse;
                fromJSON(object: any): _152.QueryEpochProvisionsResponse;
                toJSON(message: _152.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _152.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _151.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Minter;
                fromJSON(object: any): _151.Minter;
                toJSON(message: _151.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _151.Minter;
            };
            WeightedAddress: {
                encode(message: _151.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.WeightedAddress;
                fromJSON(object: any): _151.WeightedAddress;
                toJSON(message: _151.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _151.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _151.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.DistributionProportions;
                fromJSON(object: any): _151.DistributionProportions;
                toJSON(message: _151.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _151.DistributionProportions;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromJSON(object: any): _151.Params;
                toJSON(message: _151.Params): unknown;
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
                }): _151.Params;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
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
                }): _150.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            LCDQueryClient: typeof _303.LCDQueryClient;
            QueryGaugeIdsRequest: {
                encode(message: _156.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryGaugeIdsRequest;
                fromJSON(object: any): _156.QueryGaugeIdsRequest;
                toJSON(message: _156.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _156.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _156.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryGaugeIdsResponse;
                fromJSON(object: any): _156.QueryGaugeIdsResponse;
                toJSON(message: _156.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _156.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _156.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _156.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _156.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _156.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _156.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDistrInfoRequest;
                fromJSON(_: any): _156.QueryDistrInfoRequest;
                toJSON(_: _156.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _156.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _156.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDistrInfoResponse;
                fromJSON(object: any): _156.QueryDistrInfoResponse;
                toJSON(message: _156.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _156.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromJSON(_: any): _156.QueryParamsRequest;
                toJSON(_: _156.QueryParamsRequest): unknown;
                fromPartial(_: {}): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _156.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _156.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryLockableDurationsRequest;
                fromJSON(_: any): _156.QueryLockableDurationsRequest;
                toJSON(_: _156.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _156.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _156.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryLockableDurationsResponse;
                fromJSON(object: any): _156.QueryLockableDurationsResponse;
                toJSON(message: _156.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _156.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _156.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _156.QueryIncentivizedPoolsRequest;
                toJSON(_: _156.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _156.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _156.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.IncentivizedPool;
                fromJSON(object: any): _156.IncentivizedPool;
                toJSON(message: _156.IncentivizedPool): unknown;
                fromPartial(object: {
                    poolId?: any;
                    lockableDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gaugeId?: any;
                }): _156.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _156.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _156.QueryIncentivizedPoolsResponse;
                toJSON(message: _156.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gaugeId?: any;
                    }[];
                }): _156.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _156.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _156.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _156.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _156.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _156.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _156.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _156.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _147.LockQueryType;
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
                }): _156.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                fromJSON(object: any): _155.Params;
                toJSON(message: _155.Params): unknown;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _155.Params;
            };
            LockableDurationsInfo: {
                encode(message: _155.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LockableDurationsInfo;
                fromJSON(object: any): _155.LockableDurationsInfo;
                toJSON(message: _155.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _155.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _155.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.DistrInfo;
                fromJSON(object: any): _155.DistrInfo;
                toJSON(message: _155.DistrInfo): unknown;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _155.DistrInfo;
            };
            DistrRecord: {
                encode(message: _155.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.DistrRecord;
                fromJSON(object: any): _155.DistrRecord;
                toJSON(message: _155.DistrRecord): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _155.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _154.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _154.ReplacePoolIncentivesProposal;
                toJSON(message: _154.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _154.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _154.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _154.UpdatePoolIncentivesProposal;
                toJSON(message: _154.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _154.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
                fromJSON(object: any): _153.GenesisState;
                toJSON(message: _153.GenesisState): unknown;
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
                }): _153.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _157.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Node;
                fromJSON(object: any): _157.Node;
                toJSON(message: _157.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _157.Node;
            };
            Child: {
                encode(message: _157.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Child;
                fromJSON(object: any): _157.Child;
                toJSON(message: _157.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _157.Child;
            };
            Leaf: {
                encode(message: _157.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Leaf;
                fromJSON(object: any): _157.Leaf;
                toJSON(message: _157.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _157.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _321.MsgClientImpl;
        QueryClientImpl: typeof _313.QueryClientImpl;
        LCDQueryClient: typeof _304.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _162.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _162.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _162.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _162.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _162.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _162.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _162.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _162.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _162.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _162.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _162.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _162.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _162.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _162.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _162.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _162.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _162.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _162.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _162.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _162.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _162.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _162.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _162.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _162.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _162.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _162.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _162.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _162.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _162.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _162.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _162.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _162.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _162.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _162.MsgLockAndSuperfluidDelegate) => {
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
                }) => _162.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _162.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _162.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _162.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidDelegate;
            fromJSON(object: any): _162.MsgSuperfluidDelegate;
            toJSON(message: _162.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _162.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _162.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _162.MsgSuperfluidDelegateResponse;
            toJSON(_: _162.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _162.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _162.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidUndelegate;
            fromJSON(object: any): _162.MsgSuperfluidUndelegate;
            toJSON(message: _162.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _162.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _162.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _162.MsgSuperfluidUndelegateResponse;
            toJSON(_: _162.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _162.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _162.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _162.MsgSuperfluidUnbondLock;
            toJSON(message: _162.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _162.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _162.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _162.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _162.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _162.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _162.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _162.MsgLockAndSuperfluidDelegate;
            toJSON(message: _162.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _162.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _162.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _162.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _162.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _162.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _162.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _162.MsgUnPoolWhitelistedPool;
            toJSON(message: _162.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _162.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _162.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _162.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _162.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _162.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _161.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _161.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _161.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _161.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.SuperfluidAsset;
            fromJSON(object: any): _161.SuperfluidAsset;
            toJSON(message: _161.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                assetType?: _161.SuperfluidAssetType;
            }): _161.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _161.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _161.SuperfluidIntermediaryAccount;
            toJSON(message: _161.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _161.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _161.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _161.OsmoEquivalentMultiplierRecord;
            toJSON(message: _161.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _161.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _161.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.SuperfluidDelegationRecord;
            fromJSON(object: any): _161.SuperfluidDelegationRecord;
            toJSON(message: _161.SuperfluidDelegationRecord): unknown;
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
            }): _161.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _161.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _161.LockIdIntermediaryAccountConnection;
            toJSON(message: _161.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _161.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _161.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UnpoolWhitelistedPools;
            fromJSON(object: any): _161.UnpoolWhitelistedPools;
            toJSON(message: _161.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _161.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _160.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsRequest;
            fromJSON(_: any): _160.QueryParamsRequest;
            toJSON(_: _160.QueryParamsRequest): unknown;
            fromPartial(_: {}): _160.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _160.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsResponse;
            fromJSON(object: any): _160.QueryParamsResponse;
            toJSON(message: _160.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _160.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _160.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AssetTypeRequest;
            fromJSON(object: any): _160.AssetTypeRequest;
            toJSON(message: _160.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _160.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _160.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AssetTypeResponse;
            fromJSON(object: any): _160.AssetTypeResponse;
            toJSON(message: _160.AssetTypeResponse): unknown;
            fromPartial(object: {
                assetType?: _161.SuperfluidAssetType;
            }): _160.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _160.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AllAssetsRequest;
            fromJSON(_: any): _160.AllAssetsRequest;
            toJSON(_: _160.AllAssetsRequest): unknown;
            fromPartial(_: {}): _160.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _160.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AllAssetsResponse;
            fromJSON(object: any): _160.AllAssetsResponse;
            toJSON(message: _160.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _161.SuperfluidAssetType;
                }[];
            }): _160.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _160.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AssetMultiplierRequest;
            fromJSON(object: any): _160.AssetMultiplierRequest;
            toJSON(message: _160.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _160.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _160.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AssetMultiplierResponse;
            fromJSON(object: any): _160.AssetMultiplierResponse;
            toJSON(message: _160.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _160.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _160.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _160.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _160.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            }): _160.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _160.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _160.AllIntermediaryAccountsRequest;
            toJSON(message: _160.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _160.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _160.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _160.AllIntermediaryAccountsResponse;
            toJSON(message: _160.AllIntermediaryAccountsResponse): unknown;
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
            }): _160.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _160.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _160.ConnectedIntermediaryAccountRequest;
            toJSON(message: _160.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _160.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _160.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _160.ConnectedIntermediaryAccountResponse;
            toJSON(message: _160.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            }): _160.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _160.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _160.TotalSuperfluidDelegationsRequest;
            toJSON(_: _160.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _160.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _160.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _160.TotalSuperfluidDelegationsResponse;
            toJSON(message: _160.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _160.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _160.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _160.SuperfluidDelegationAmountRequest;
            toJSON(message: _160.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _160.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _160.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _160.SuperfluidDelegationAmountResponse;
            toJSON(message: _160.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _160.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _160.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _160.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _160.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _160.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _160.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _160.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _160.SuperfluidDelegationsByDelegatorResponse): unknown;
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
            }): _160.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _160.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _160.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _160.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _160.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _160.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _160.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _160.SuperfluidUndelegationsByDelegatorResponse): unknown;
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
            }): _160.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _160.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _160.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _160.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _160.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _160.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _160.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _160.SuperfluidDelegationsByValidatorDenomResponse): unknown;
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
            }): _160.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _160.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _160.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _160.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _160.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _160.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
            fromJSON(object: any): _159.Params;
            toJSON(message: _159.Params): unknown;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _159.Params;
        };
        GenesisState: {
            encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
            fromJSON(object: any): _158.GenesisState;
            toJSON(message: _158.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _161.SuperfluidAssetType;
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
            }): _158.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            LCDQueryClient: typeof _305.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _167.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _167.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _167.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _167.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _167.MsgCreateDenom): {
                        typeUrl: string;
                        value: _167.MsgCreateDenom;
                    };
                    mint(value: _167.MsgMint): {
                        typeUrl: string;
                        value: _167.MsgMint;
                    };
                    burn(value: _167.MsgBurn): {
                        typeUrl: string;
                        value: _167.MsgBurn;
                    };
                    changeAdmin(value: _167.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _167.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _167.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _167.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _167.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _167.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _167.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _167.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _167.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _167.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _167.MsgCreateDenom): {
                        typeUrl: string;
                        value: _167.MsgCreateDenom;
                    };
                    mint(value: _167.MsgMint): {
                        typeUrl: string;
                        value: _167.MsgMint;
                    };
                    burn(value: _167.MsgBurn): {
                        typeUrl: string;
                        value: _167.MsgBurn;
                    };
                    changeAdmin(value: _167.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _167.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _167.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _167.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _167.MsgMint) => {
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
                    }) => _167.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _167.MsgBurn) => {
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
                    }) => _167.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _167.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _167.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _167.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateDenom;
                fromJSON(object: any): _167.MsgCreateDenom;
                toJSON(message: _167.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _167.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _167.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateDenomResponse;
                fromJSON(object: any): _167.MsgCreateDenomResponse;
                toJSON(message: _167.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _167.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _167.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgMint;
                fromJSON(object: any): _167.MsgMint;
                toJSON(message: _167.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _167.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _167.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgMintResponse;
                fromJSON(_: any): _167.MsgMintResponse;
                toJSON(_: _167.MsgMintResponse): unknown;
                fromPartial(_: {}): _167.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _167.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBurn;
                fromJSON(object: any): _167.MsgBurn;
                toJSON(message: _167.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _167.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _167.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBurnResponse;
                fromJSON(_: any): _167.MsgBurnResponse;
                toJSON(_: _167.MsgBurnResponse): unknown;
                fromPartial(_: {}): _167.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _167.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgChangeAdmin;
                fromJSON(object: any): _167.MsgChangeAdmin;
                toJSON(message: _167.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _167.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _167.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgChangeAdminResponse;
                fromJSON(_: any): _167.MsgChangeAdminResponse;
                toJSON(_: _167.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _167.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _166.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsRequest;
                fromJSON(_: any): _166.QueryParamsRequest;
                toJSON(_: _166.QueryParamsRequest): unknown;
                fromPartial(_: {}): _166.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _166.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsResponse;
                fromJSON(object: any): _166.QueryParamsResponse;
                toJSON(message: _166.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _166.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _166.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _166.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _166.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _166.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _166.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _166.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _166.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _166.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _166.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _166.QueryDenomsFromCreatorRequest;
                toJSON(message: _166.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _166.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _166.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _166.QueryDenomsFromCreatorResponse;
                toJSON(message: _166.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _166.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _165.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Params;
                fromJSON(object: any): _165.Params;
                toJSON(message: _165.Params): unknown;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _165.Params;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromJSON(object: any): _164.GenesisState;
                toJSON(message: _164.GenesisState): unknown;
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
                }): _164.GenesisState;
            };
            GenesisDenom: {
                encode(message: _164.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisDenom;
                fromJSON(object: any): _164.GenesisDenom;
                toJSON(message: _164.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _164.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _163.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.DenomAuthorityMetadata;
                fromJSON(object: any): _163.DenomAuthorityMetadata;
                toJSON(message: _163.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _163.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _315.QueryClientImpl;
            LCDQueryClient: typeof _306.LCDQueryClient;
            QueryFeeTokensRequest: {
                encode(_: _171.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryFeeTokensRequest;
                fromJSON(_: any): _171.QueryFeeTokensRequest;
                toJSON(_: _171.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _171.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _171.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryFeeTokensResponse;
                fromJSON(object: any): _171.QueryFeeTokensResponse;
                toJSON(message: _171.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _171.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _171.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _171.QueryDenomSpotPriceRequest;
                toJSON(message: _171.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _171.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _171.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _171.QueryDenomSpotPriceResponse;
                toJSON(message: _171.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _171.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _171.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDenomPoolIdRequest;
                fromJSON(object: any): _171.QueryDenomPoolIdRequest;
                toJSON(message: _171.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _171.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _171.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDenomPoolIdResponse;
                fromJSON(object: any): _171.QueryDenomPoolIdResponse;
                toJSON(message: _171.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _171.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _171.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryBaseDenomRequest;
                fromJSON(_: any): _171.QueryBaseDenomRequest;
                toJSON(_: _171.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _171.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _171.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryBaseDenomResponse;
                fromJSON(object: any): _171.QueryBaseDenomResponse;
                toJSON(message: _171.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    baseDenom?: string;
                }): _171.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _170.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.UpdateFeeTokenProposal;
                fromJSON(object: any): _170.UpdateFeeTokenProposal;
                toJSON(message: _170.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _170.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _169.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.GenesisState;
                fromJSON(object: any): _169.GenesisState;
                toJSON(message: _169.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _169.GenesisState;
            };
            FeeToken: {
                encode(message: _168.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.FeeToken;
                fromJSON(object: any): _168.FeeToken;
                toJSON(message: _168.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _168.FeeToken;
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
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
                            v1beta1: _316.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _317.MsgClientImpl;
                        };
                    };
                    v1beta1: _318.MsgClientImpl;
                };
                incentives: _319.MsgClientImpl;
                lockup: _320.MsgClientImpl;
                superfluid: _321.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _322.MsgClientImpl;
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
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
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
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _307.QueryClientImpl;
                };
                gamm: {
                    v1beta1: _308.QueryClientImpl;
                };
                incentives: _309.QueryClientImpl;
                lockup: _310.QueryClientImpl;
                mint: {
                    v1beta1: _311.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _312.QueryClientImpl;
                };
                superfluid: _313.QueryClientImpl;
                tokenfactory: {
                    v1beta1: _314.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _315.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: any;
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
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
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
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                epochs: {
                    v1beta1: _298.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _299.LCDQueryClient;
                };
                incentives: _300.LCDQueryClient;
                lockup: _301.LCDQueryClient;
                mint: {
                    v1beta1: _302.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _303.LCDQueryClient;
                };
                superfluid: _304.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _305.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _306.LCDQueryClient;
                };
            };
        }>;
    };
}
